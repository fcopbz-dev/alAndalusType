<template>
  <!-- <header>
    <div class="mx-auto max-w-screen-xl h-20 flex items-center">
      <h1 class="text-green-700 bg-clip-text text-4xl font-extrabold">al-AndalusType</h1>
    </div>
  </header> -->
  <div class="w-full h-screen bg-white text-blue-700">
    <HeaderComponent />

    <section class="mx-auto w-4/5 h-5/6 flex items-center">
      <RouterView />
    </section>
  </div>

</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/header/headerComponent.vue';
</script>

<style scoped></style>
