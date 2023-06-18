<template>
  <div>
    <aside
      v-if="store.paying"
      class="h-screen z-20 w-screen md:w-[60%] lg:w-[50%] xl:w-[40%] bg-white fixed right-0 top-0 shadow-2xl px-12 py-8"
    >
      <div
        v-if="store.fetching"
        class="h-full w-full flex flex-col justify-center items-center"
      >
        <img
          src="~/assets/icons/cargador.png"
          class="animate-spin w-12 h-12 mb-6"
          alt=""
        />
        <h1 class="font-bold text-2xl pb-3">Processing...</h1>
        <p class="opacity-60">Please wait until the transaction finish.</p>
      </div>
      <div
        v-else-if="store.confirmed"
        class="h-full w-full flex flex-col justify-center items-center"
      >
        <img src="~/assets/icons/confirmed.png" class="w-16 h-16" alt="" />
        <h1 class="font-bold text-2xl my-6">Thanks!.</h1>
        <p class="opacity-60">Happy crypto shopping.</p>
        <button
          @click="(store.paying = false), (store.confirmed = false)"
          class="bg-gray-900 px-8 py-2 rounded-full text-white mt-6"
        >
          Return to my cart.
        </button>
      </div>
      <div
        v-else-if="store.denied"
        class="h-full w-full flex flex-col justify-center items-center"
      >
        <img src="~/assets/icons/cancelled.png" class="w-16 h-16" alt="" />
        <h1 class="font-bold text-2xl my-6">Request denied.</h1>
        <button
          @click="(store.paying = false), (store.denied = false)"
          class="bg-gray-900 px-8 py-2 rounded-full text-white"
        >
          Return to my cart.
        </button>
      </div>
      <div
        v-else
        class="h-full w-full flex flex-col justify-center items-center"
      >
        <h1 class="font-bold text-2xl pb-3">Maybe the site crashed</h1>
        <button class="bg-gray-900 px-3 py-1">Reload the page.</button>
      </div>
    </aside>
    <Header />
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "~/stores/store";

const store = useStore();
</script>
