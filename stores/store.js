import { defineStore } from "pinia";
import * as Web3 from "web3";

export const useStore = defineStore("store", {
  state: () => ({
    isconnected: false,
    account: null,
    showCart: false,
    products: [
      { id: 1, title: "Hoodie", price: 0.02 },
      { id: 2, title: "3x Pins", price: 0.02 },
      { id: 3, title: "Bonnie", price: 0.02 },
      { id: 4, title: "T-shirt", price: 0.02 },
    ],
    cart: [],
    total: 0,
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
      if (ethereum) {
        const web3 = new Web3(
          Web3.givenProvider || "https://public-node.testnet.rsk.co"
        );

        web3.eth
          .sendTransaction({
            from: ethereum.selectedAddress,
            to: "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe",
            value: "1000000000000000",
          })
          .then(function (receipt) {
            console.log(receipt);
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
