<template>
  <main
    class="h-[100vh] px-6 lg:px-32 xl:px-56 py-16 lg:py-40 grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 place-items-stretch"
  >
    <div class="my-auto">
      <h1 class="text-6xl font-bold">Explore our deals</h1>
      <p class="my-5">
        See what you can get with <span class="font-bold">Crypto.</span>
      </p>
      <div class="mt-12">
        <NuxtLink
          to="/products"
          class="px-8 py-3 border-2 border-gray-800 rounded-full text-gray-800 font-medium hover:font-bold"
        >
          Merch
        </NuxtLink>
        <NuxtLink
          to="/products"
          class="px-8 py-3 border-2 ml-3 border-gray-800 rounded-full text-gray-800 font-medium hover:font-bold"
        >
          50% OFF
        </NuxtLink>
      </div>
    </div>
    <div id="main-container__background"></div>
  </main>
</template>

<style>
#main-container__background {
  background-image: url("https://images.unsplash.com/photo-1504022462188-88f023db97bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
