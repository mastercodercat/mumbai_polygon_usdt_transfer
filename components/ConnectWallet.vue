<template>
  <button
    @click="store.connect()"
    class="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-bold disabled:opacity-50"
    :disabled="store.isconnected"
  >
    {{ connectTxt }}
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "~/stores/store";

const store = useStore();

const connectTxt = computed(() => {
  return store.account || "Connect Wallet";
});
</script>
