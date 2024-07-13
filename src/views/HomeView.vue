<template>
  <section class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div class="mx-auto max-w-4xl text-center">
      <h1
        class="bg-gradient-to-r from-green-600 via-white to-green-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl h-20"
      >
        al-AndalusType
      </h1>

      <p class="mx-auto mt-4 max-w-2xl sm:text-xl/relaxed">
        Un test de escritura con teclado para medir la velocidad y precisión de escritura con una
        tematica Andaluza tradicional.
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <RouterLink
          class="block w-full rounded border border-green-600 bg-green-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
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
