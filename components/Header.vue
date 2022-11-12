<template>
  <header>
    <nav>
      <div class="mx-auto px-8 sm:px-14 lg:px-24 py-8">
        <div class="flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
            <!-- Mobile menu button-->
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center justify-center md:justify-end">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="block h-16 w-auto lg:hidden"
                src="~/assets/images/icon-black.png"
                alt="Your Company"
              />
              <img
                class="hidden h-16 w-auto lg:block"
                src="~/assets/images/horizontal-black.png"
                alt="Your Company"
              />
            </div>
          </div>
          <div class="flex items-center pr-2 sm:ml-6 sm:pr-0">
            <div class="hidden sm:ml-6 md:block">
              <div class="flex items-center gap-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <NuxtLink
                  to="/"
                  class="text-gray-800 px-3 py-2 text-md font-medium"
                  active-class="active"
                  >Home</NuxtLink
                >

                <NuxtLink
                  to="products"
                  class="text-gray-800 px-3 py-2 text-md font-medium"
                  active-class="active"
                  >Products</NuxtLink
                >

                <NuxtLink
                  to="about"
                  class="text-gray-800 px-3 py-2 text-md font-medium"
                  active-class="active"
                  >About us</NuxtLink
                >

                <connect-wallet />
              </div>
            </div>
            <button
              type="button"
              class="rounded-full p-1 text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white ml-0 sm:ml-8"
            >
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: outline/bell -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu">
        <div class="px-6 sm:px-12 pt-2 pb-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <NuxtLink
            to="/"
            class="text-gray-800 px-3 py-2 text-sm font-medium"
            active-class="active"
            >Home</NuxtLink
          >

          <NuxtLink
            to="products"
            class="text-gray-800 px-3 py-2 text-sm font-medium"
            active-class="active"
            >Products</NuxtLink
          >

          <NuxtLink
            to="about"
            class="text-gray-800 px-3 py-2 text-sm font-medium"
            active-class="active"
            >About us</NuxtLink
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
#nav-logo {
  width: 250px;
}

.active {
  font-weight: 800;
}
</style>
