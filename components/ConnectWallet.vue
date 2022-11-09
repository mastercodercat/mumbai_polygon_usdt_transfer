<template>
  <button
    class="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-bold disabled:opacity-50"
    :disabled="isconnected"
  >
    {{ walletButton }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      isconnected: false,
    };
  },
  computed: {
    walletButton() {
      if (this.isconnected) {
        return "0x14512..asd2";
      } else {
        return "Connect Wallet";
      }
    },
  },
};
</script>
