<template>
  <!-- GAME SECTION -->
  <section class="mx-auto w-full h-5/6 px-4 flex justify-center flex-col gap-4">
    <time class="text-yellow-500">{{ currentTime }}</time>
    <p class="text-2xl mx-auto max-w-screen-xl whitespace-normal break-keep break-words text-justify tracking-wide">
      <span v-for="(letter, letterIndex) in words" :key="letterIndex" :class="{
        active: inputValue.length === letterIndex,
        'text-green-600 bg-green-100': inputValue[letterIndex] && inputValue[letterIndex] === letter,
        'text-red-600 bg-red-100': inputValue[letterIndex] && inputValue[letterIndex] !== letter,
      }">{{ letter }}</span>
    </p>

    <input type="text" ref="inputRef" class="absolute top-[-10rem] w-[1px] h-[1px]" v-model="input" @keydown="onKeyDown"
      @blur="pauseGame" />
  </section>

  <!-- PAUSE SECTION v-if="isPaused" -->
  <section v-if="isPaused"
    class="absolute mx-auto w-5/6 h-5/6 flex items-center bg-gray-700 text-white bg-opacity-95 rounded-[2rem]"
    @click="resumeGame">
    <p class="text-4xl mx-auto whitespace-normal break-keep break-words text-justify tracking-wide">
      Haz click para continuar
    </p>
  </section>
</template>

<script setup lang="ts">
import { KEY_CODES_TO_IGNORE } from '@/utils/constans';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useGameStore, type GameStatus } from '@/stores/useGameStore';
import { storeToRefs } from 'pinia';

// VARIABLES
const input = ref('');
const inputValue = computed(() => input.value);
const inputRef = ref<HTMLInputElement | null>(null);
const gameStore = useGameStore()
const { startGame, endGame, setCurrentTime, pauseGame, resumeGame } = gameStore;
const words = computed(() => gameStore.words);
const currentTime = computed(() => gameStore.currentTime);
const { gameStatus } = storeToRefs(gameStore);
const isPaused = ref(false);
let interval: number

// LIFECYCLE
onMounted(() => {
  input.value = '';
  startGame();
});
onUnmounted(() => {
  clearTimeInterval();
});

watch(gameStatus, (value: GameStatus) => {
  console.log(value);
  if (value === 'inGame') {
    continueGame();
  }
  if (value === 'restart') {
    input.value = '';
    startGame();
  }
  if (value === 'paused') {
    isPaused.value = true;
    clearTimeInterval();
  }
});

//FUNCTIONS
function continueGame(): void {
  isPaused.value = false;
  inputRef.value?.focus();
  initTimeInterval();
}

function initTimeInterval(): void {
  interval = setInterval(() => {
    setCurrentTime(currentTime.value + 1);
  }, 1000);
}

function clearTimeInterval(): void {
  clearInterval(interval);
}

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
