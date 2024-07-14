<template>
  <section class="mx-auto max-w-screen-xl h-5/6 px-4 flex items-center">
    <div class="mx-auto max-w-screen-xl text-center">
      <p class="mx-auto mt-4 max-w-2xl sm:text-xl/relaxed">
        Un test de escritura con teclado para medir la velocidad y precisión de escritura con una tematica Andaluza tradicional.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <RouterLink
          class="block w-full rounded border border-green-700 bg-green-700 px-12 py-3 text-sm font-medium hover:bg-transparent focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          to="/type"
        >
          Empezar
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
