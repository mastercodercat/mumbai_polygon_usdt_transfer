<template>
  <header>
    <nav>
      <div class="mx-auto px-8 sm:px-14 lg:px-24 py-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center justify-center md:justify-end">
            <div class="flex flex-shrink-0 items-center">
            </div>
          </div>
          <div class="flex items-center pr-2 sm:ml-6 sm:pr-0">
            <div class="hidden sm:ml-6 md:block">
              <div class="flex items-center gap-4">
                <connect-wallet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useStore } from "~/stores/store";

const store = useStore();
</script>

<style>
#nav-logo {
  width: 250px;
}

.active {
  font-weight: 800;
}
</style>
