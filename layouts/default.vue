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
    <aside
      v-show="store.showCart"
      class="h-screen z-10 w-screen md:w-[60%] lg:w-[50%] xl:w-[40%] bg-white fixed right-0 top-0 shadow-2xl px-12 py-8"
    >
      <div class="grid h-full grid-rows-8 grid-cols-1">
        <div class="row-span-1 w-full">
          <div class="flex justify-end">
            <button
              @click="store.toggleCart()"
              class="py-1 px-3 hover:opacity-70 transition-all ease-out"
            >
              <span
                ><img src="~/assets/icons/x.png" class="w-5 h-5" alt=""
              /></span>
            </button>
          </div>
        </div>
        <div class="row-span-6 py-12">
          <h2 class="font-bold mb-5">Your cart:</h2>

          <ul
            v-if="store.cart.length > 0"
            class="w-full h-[500px] overflow-y-scroll"
          >
            <li v-for="(product, index) in store.cart" v-bind:key="index">
              <ListedProduct
                :title="product.title"
                :price="product.price"
                :id="product.id"
              />
            </li>
          </ul>
          <div v-else class="w-full h-[500px] flex align-middle justify-center">
            <h3 class="my-auto opacity-[80%]">Your cart is empty</h3>
          </div>
        </div>
        <div class="row-span-1 py-6">
          <div class="grid">
            <div class="mb-5">
              <h2 class="font-bold">Total:</h2>
              <p>$ {{ store.total }} RIF</p>
            </div>
            <div>
              <button
                v-if="store.isconnected"
                @click="store.cryptoPay()"
                class="bg-gray-900 px-6 w-full py-2 text-white disabled:opacity-40 hover:bg-gray-700 transition-all ease-out"
                :disabled="store.total === 0"
              >
                Pay
              </button>
              <button
                v-else
                @click="store.connect()"
                class="bg-gray-900 px-6 w-full py-2 hover:bg-gray-700 text-white transition-all ease-out"
              >
                Connect Wallet
              </button>
              <button
                @click="store.resetCart()"
                class="bg-gray-white flex items-center justify-center border-2 mt-3 border-gray-900 hover:opacity-70 px-6 w-full py-2 text-gray-900 transition-all ease-out"
              >
                <span
                  ><img
                    src="~/assets/icons/delete.png"
                    class="w-5 h-5 mr-2"
                    alt=""
                /></span>
                Reset my cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "~/stores/store";

const store = useStore();
</script>
