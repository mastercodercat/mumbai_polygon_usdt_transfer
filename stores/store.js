import { defineStore } from "pinia";
import * as Web3 from "web3";
import * as artifact from "~/contracts/Bitcoffee.json";

export const useStore = defineStore("store", {
  state: () => ({
    isconnected: false,
    account: null,
    showCart: false,
    products: [
      {
        id: 1,
        title: "Hoodie",
        price: 1,
        img: "~/assets/images/products/hoodie.jpg",
      },
      {
        id: 2,
        title: "3x Pins",
        price: 2,
        img: "~/assets/images/products/hoodie.jpg",
      },
      {
        id: 3,
        title: "Shoes",
        price: 3,
        img: "~/assets/images/products/hoodie.png",
      },
      {
        id: 4,
        title: "T-shirt",
        price: 4,
        img: "~/assets/images/products/hoodie.jpg",
      },
      {
        id: 5,
        title: "Hat",
        price: 5,
        img: "~/assets/images/products/hoodie.png",
      },
    ],
    cart: [],
    total: 0,
    paying: false,
    fetching: false,
    denied: false,
    confirmed: false,
  }),
  actions: {
    connect() {
      const ethereum = window.ethereum;

      if (ethereum) {
        ethereum.request({ method: "eth_requestAccounts" }).then((provider) => {
          if (provider) {
            this.account = ethereum.selectedAddress;
            this.isconnected = true;
          }
        });
      }
    },

    cryptoPay() {
      this.paying = true;
      this.fetching = true;
      if (ethereum) {
        const web3 = new Web3(
          Web3.givenProvider || "https://public-node.testnet.rsk.co"
        );

        const rifContract = new web3.eth.Contract(
          artifact.abi,
          "0x19F64674D8A5B4E652319F5e239eFd3bc969A1fE"
        );

        let amount = web3.utils.toWei(
          web3.utils.toBN(this.total).toString(),
          "ether"
        );

        rifContract.methods
          .transfer("0xB37ECC72B98d7004c284fDa84315EaC16903Bda3", amount)
          .send({
            from: ethereum.selectedAddress,
          })
          .on("transactionHash", (hash) => {
            console.log(hash);
          })
          .on("receipt", (receipt) => {
            // Receipt
            console.log(receipt);
            this.confirmed = true;
            this.fetching = false;
          })
          .catch((err) => {
            if (err.code === 4001) {
              console.log("Request denied.");
              this.denied = true;
              this.fetching = false;
            }
          });
      }
    },

    toggleCart() {
      this.showCart = !this.showCart;
    },

    removeProduct(id) {
      const productIndex = this.cart.findIndex((product) => product.id === id);

      if (this.cart.length !== 1) {
        this.total = this.total - this.cart[productIndex].price;
      } else {
        this.total = 0;
      }

      this.cart.splice(productIndex, 1);
    },

    addProduct(id) {
      // console.log(this.products.find((product) => product.id === id));
      const productIndex = this.products.findIndex(
        (product) => product.id === id
      );

      this.total = this.total + this.products[productIndex].price;
      this.cart.push(this.products[productIndex]);
    },

    resetCart() {
      this.total = 0;
      this.cart = [];
    },
  },
});
