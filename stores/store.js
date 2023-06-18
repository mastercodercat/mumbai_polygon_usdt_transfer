import { defineStore } from "pinia";
import Web3 from "web3";
import * as artifact from "~/contracts/abi.json";

export const useStore = defineStore("store", {
  state: () => ({
    isconnected: false,
    account: null,
    showCart: false,
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

    async transfer(_to, amount) {
      if (ethereum) {
        const myweb3 = new Web3(ethereum);
        console.log(artifact.default);

        const contract = new myweb3.eth.Contract(
          artifact.default,
          "0xA02f6adc7926efeBBd59Fd43A84f4E0c0c91e832"
        );

        await contract.methods.transfer(_to, amount).send({
          from: ethereum.selectedAddress,
          gas: 500000,
          gasPrice: null
        });
      }
    },
  },
});
