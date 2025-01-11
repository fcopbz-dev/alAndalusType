import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

type GameStatus = 'start' | 'inGame' | 'end';
import { INITIAL_TIME } from '@/utils/constans';
import { quote } from '@/utils/quotes';

export const useGameStore = defineStore('game', () => {
  const gameStatus = ref<GameStatus>('start');
  const currentTime = ref(INITIAL_TIME);
  const words = ref<string[]>([]);

  const setCurrentTime = (time: number) => {
    currentTime.value = time;
  };

  const startGame = () => {
    console.log('Game Start');
    gameStatus.value = 'inGame';
    currentTime.value = INITIAL_TIME;
    words.value = quote.trim().split('');
  };

  const endGame = () => {
    console.log('Game Over');
    gameStatus.value = 'end';
    currentTime.value = INITIAL_TIME;
    words.value = [];
  };

  return {
    gameStatus: computed(() => gameStatus.value),
    currentTime: computed(() => currentTime.value),
    words: computed(() => words.value),
    setCurrentTime,
    startGame,
    endGame,
  };
});
