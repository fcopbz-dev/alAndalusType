<template>
  <header>
    <div class="mx-auto max-w-screen-xl h-20 flex items-center">
      <h1 class="text-green-700 bg-clip-text text-4xl font-extrabold">al-AndalusType</h1>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped></style>
