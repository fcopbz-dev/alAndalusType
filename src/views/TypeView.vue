<template>
  <section class="mx-auto max-w-screen-xl h-5/6 px-4 flex justify-center flex-col gap-4">
    <time class="text-yellow-500">{{ currentTime }}</time>
    <p class="text-2xl mx-auto max-w-screen-xl whitespace-normal break-keep break-words text-justify tracking-wide">
      <span
        v-for="(letter, letterIndex) in words"
        :key="letterIndex"
        :class="{
          active: inputValue.length === letterIndex,
          'text-green-600 bg-green-100': inputValue[letterIndex] && inputValue[letterIndex] === letter,
          'text-red-600 bg-red-100': inputValue[letterIndex] && inputValue[letterIndex] !== letter,
        }"
        >{{ letter }}</span
      >
    </p>

    <input type="text" autofocus v-model="input" @keydown="onKeyDown" />
  </section>
</template>

<script setup lang="ts">
import { quote } from '@/utils/quotes';
import { INITIAL_TIME, KEY_CODES_TO_IGNORE } from '@/utils/constans';
import { computed, ref } from 'vue';

let currentTime = ref(INITIAL_TIME);
let words = ref<string[]>([]);
const input = ref('');
const inputValue = computed(() => input.value);
initGame();

function initGame(): void {
  currentTime.value = INITIAL_TIME;
  words.value = quote.trim().split('');
  initTimeInterval();
}

function initTimeInterval(): void {
  const interval = setInterval(() => {
    currentTime.value -= 1;
    if (currentTime.value === 0) {
      clearInterval(interval);
      gameOver();
    }
  }, 1000);
}

function gameOver(): void {
  console.log('Game Over');
}

function initEvents(): void {}

function onKeyDown(event: KeyboardEvent): void {
  if (KEY_CODES_TO_IGNORE.includes(event.code)) {
    event.preventDefault();
    return;
  }
  if (event.code === 'Backspace' && input.value === words.value.join('').slice(0, input.value.length)) {
    event.preventDefault();
    return;
  }
}
</script>

<style scoped>
span {
  position: relative;
  &.active::before {
    content: '|';
    position: absolute;
    left: -60%;
    animation: 1s blink infinite ease-in-out;
    font-size: 2.25rem;
    line-height: 1.9rem;
    @apply text-yellow-600;
  }
}

@keyframes blink {
  0%,
  25% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
}
</style>
