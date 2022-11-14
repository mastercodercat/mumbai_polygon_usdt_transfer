<template>
  <div class="w-full h-auto shadow-lg py-6 px-6">
    <div class="grid grid-cols-3 grid-rows-1">
      <div class="h-full hover:cursor-pointer">
        <div
          class="bg-[url('~/assets/images/products/hoodie.jpg')] w-full h-full bg-contain bg-no-repeat bg-center"
        ></div>
      </div>
      <div>
        <h1 class="font-bold">{{ title }}</h1>
        <p>$ {{ price }} RIF</p>
      </div>
      <div class="flex align-middle">
        <button
          @click="store.removeProduct(id)"
          class="bg-red-700 text-white px-6 py-2 flex items-center hover:bg-red-800 transition-all ease-out"
        >
          <span
            ><img
              src="~/assets/icons/delete-white.png"
              class="w-5 h-5 mr-2"
              alt=""
          /></span>
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "~/stores/store";

const store = useStore();
const props = defineProps(["title", "price", "id"]);
</script>
