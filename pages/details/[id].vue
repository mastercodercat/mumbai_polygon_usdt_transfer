<template>
  <div
    class="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 my-16 lg:my-48"
  >
    <div
      class="bg-[url('~/assets/images/products/hoodie.jpg')] transition-all ease-out duration-300 w-full h-[500px] bg-contain bg-no-repeat bg-center"
    ></div>
    <div class="p-12 xl:w-[80%]">
      <h1 class="font-extrabold text-3xl">{{ product.title }}</h1>
      <h3 class="text-xl mt-3">${{ product.price }} RIF</h3>
      <button
        @click="store.addProduct(product.id)"
        class="bg-gray-900 px-6 py-2 text-white w-full mt-12 font-bold"
      >
        Add to cart
      </button>
      <button
        class="border-2 flex justify-center items-center text-gray-900 border-gray-900 px-6 py-2 w-full mt-3 mb-12"
      >
        <span class="mr-2">
          <img src="~/assets/icons/save.png" class="w-5 h-5" alt="" />
        </span>
        Save for later
      </button>
      <p class="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae
        veritatis quam sint sunt distinctio, eligendi earum nemo autem
        blanditiis eum! Ipsam culpa assumenda explicabo odio dolore aliquam
        perferendis dolor aliquid unde.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "~/stores/store";

const store = useStore();
const route = useRoute();

const product = computed(() => {
  const productIndex = store.products.findIndex(
    (product) => product.id === parseInt(route.params.id)
  );

  return store.products.at(productIndex);
});
</script>
