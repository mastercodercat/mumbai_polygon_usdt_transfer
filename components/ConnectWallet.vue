<template>
  <button
    @click="store.connect()"
    class="bg-gray-800 flex items-center hover:bg-gray-900 text-white px-8 py-3 rounded-full font-bold disabled:opacity-50"
    :disabled="store.isconnected"
  >
    <span v-if="store.isconnected"
      ><img
        src="~/assets/icons/wallet-white.png"
        class="w-5 h-5 mr-2"
        alt="" /></span
    >{{ connectTxt }}
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "~/stores/store";

const store = useStore();

const connectTxt = computed(() => {
  const acc = store.account;

  const slicedAcc =
    new String(acc).slice(0, 4) + "..." + new String(acc).slice(36);

  if (acc) {
    return slicedAcc;
  } else {
    return "Connect Wallet";
  }
});
</script>
