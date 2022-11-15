<template>
  <div
    class="grid grid-cols-1 grid-rows-1 sm:w-[100%] w-[95%] max-w-[500px] md:max-w-[400px] lg:max-w-[500px] mx-auto shadow-xl"
  >
    <div class="h-[400px] hover:cursor-pointer">
      <NuxtLink :to="{ name: 'details-id', params: { id: id } }">
        <div
          class="bg-[url('~/assets/images/products/hoodie.jpg')] transition-all ease-out duration-300 w-full h-full bg-contain hover:bg-[length:600px_600px] bg-no-repeat bg-center"
        ></div>
      </NuxtLink>
    </div>
    <div
      class="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 bg-gray-100 h-fit px-12 py-6"
    >
      <div class="my-auto">
        <NuxtLink :to="{ name: 'details-id', params: { id: id } }"
          ><h1 class="font-extrabold text-xl">{{ title }}</h1></NuxtLink
        >
        <p class="pt-2 m-0 font-normal">$ {{ price }} RIF</p>
      </div>
      <div
        class="my-auto w-full grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-3"
      >
        <button
          class="h-full bg-gray-200 text-gray-900 hover:bg-gray-300 transition-all ease-out duration-300 px-2 py-3 flex items-center md:col-span-1"
        >
          <img
            src="~/assets/icons/save.png"
            class="w-[25px] mx-auto h-[25px]"
            alt=""
          />
        </button>
        <button
          @click="store.addProduct(id)"
          class="h-full bg-gray-900 text-white hover:bg-gray-700 transition-all ease-out duration-300 px-6 flex items-center md:col-span-2 justify-center"
        >
          <span class="pr-2 font-extrabold">Add</span>
          <img
            src="~/assets/icons/shopping-cart-white.png"
            class="w-[25px] h-[25px]"
            alt=""
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/stores/store";

const store = useStore();
const props = defineProps(["title", "price", "id", "img"]);
</script>
