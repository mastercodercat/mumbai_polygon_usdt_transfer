<template>
  <ul
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-1 my-16 xl:px-24 gap-12 xl:gap-8"
  >
    <li v-for="(product, index) in store.products" v-bind:key="index">
      <Product :title="product.title" :price="product.price" :id="product.id" />
    </li>
  </ul>
</template>

<script setup>
import { useStore } from "~/stores/store";

const store = useStore();
</script>
