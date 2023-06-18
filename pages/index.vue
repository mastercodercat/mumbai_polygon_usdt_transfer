<template>
  <main
    class="h-[100vh] flex flex-col p-10 items-center"
  >
    <p class="mb-10 text-xl">USDT transfer on Polygon Mumbai TestNet</p>
    <div class="flex flex-rows items-center">
      <p class="w-32 text-right">Receiver Address</p>
      <input class="ml-5 border border-black rounded-xl px-5 py-1" v-model="receiver_address" type="text" />
    </div>
    <div class="flex flex-rows items-center mt-10">
      <p class="w-32 text-right">Amount</p>
      <input class="ml-5 border border-black rounded-xl px-5 py-1" v-model="amount" type="number" />
    </div>
    <button class="border border-black text-black mt-10 p-3 rounded-xl hover:bg-black hover:text-white w-64" @click="onTransfer">Transfer</button>
  </main>
</template>

<script>
import { useStore } from "~/stores/store";

export default {
  data() {
    return {
      receiver_address: '',
      amount: 0,
    };
  },
  setup(props) {
    const store = useStore();
    return { store };
  },
  methods: {
    onTransfer() {
      this.store.transfer(this.receiver_address, this.amount);
    }
  }
}
</script>