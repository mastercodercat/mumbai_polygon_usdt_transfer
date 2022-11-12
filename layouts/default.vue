<template>
  <div>
    <aside
      class="h-screen w-[30%] bg-white fixed right-0 top-0 shadow-2xl px-12 py-8"
    >
      <div class="grid h-full grid-rows-8 grid-cols-1">
        <div class="row-span-1 w-full">
          <div class="flex justify-end">
            <button class="bg-gray-900 py-1 px-3 text-white">x</button>
          </div>
        </div>
        <div class="row-span-6 py-12">
          <h2 class="font-bold mb-5">Your cart:</h2>
          <div class="w-full h-full">
            <ListedProduct />
          </div>
        </div>
        <div class="row-span-1 py-6">
          <button class="bg-gray-900 px-6 py-1 text-white">Pay</button>
        </div>
      </div>
    </aside>
    <Header />
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
