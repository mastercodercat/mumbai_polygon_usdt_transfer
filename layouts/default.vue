<template>
  <div>
    <aside
      v-show="store.showCart"
      class="h-screen z-10 w-screen md:w-[60%] lg:w-[50%] xl:w-[40%] bg-white fixed right-0 top-0 shadow-2xl px-12 py-8"
    >
      <div class="grid h-full grid-rows-8 grid-cols-1">
        <div class="row-span-1 w-full">
          <div class="flex justify-end">
            <button
              @click="store.toggleCart()"
              class="bg-gray-900 py-1 px-3 text-white"
            >
              <span>x</span>
            </button>
          </div>
        </div>
        <div class="row-span-6 py-12">
          <h2 class="font-bold mb-5">Your cart:</h2>
          <ul class="w-full h-[500px] overflow-y-scroll">
            <li v-for="(product, index) in store.cart" v-bind:key="index">
              <ListedProduct
                :title="product.title"
                :price="product.price"
                :id="product.id"
              />
            </li>
          </ul>
        </div>
        <div class="row-span-1 py-6">
          <div class="grid">
            <div class="mb-5">
              <h2 class="font-bold">Total:</h2>
              <p>$ {{ store.total }} ETH</p>
            </div>
            <div>
              <button class="bg-gray-900 px-6 w-full py-2 text-white">
                Pay
              </button>
              <button
                @click="store.resetCart()"
                class="bg-gray-white border-2 mt-3 border-gray-900 px-6 w-full py-2 text-gray-900"
              >
                Reset my cart
              </button>
            </div>
          </div>
        </div>
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
