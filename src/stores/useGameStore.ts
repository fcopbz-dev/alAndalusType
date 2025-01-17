import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export type GameStatus = 'waitingForStart' | 'inGame' | 'paused' | 'end' | 'restart';
import { INITIAL_TIME } from '@/utils/constans';
import { quote } from '@/utils/quotes';

export const useGameStore = defineStore('game', () => {
  const gameStatus = ref<GameStatus>('waitingForStart');
  const currentTime = ref(0);
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

  const resetGame = () => {
    gameStatus.value = 'restart';
    currentTime.value = INITIAL_TIME;
    words.value = [];
  };

  const pauseGame = () => {
    console.log('Game Paused');
    gameStatus.value = 'paused';
  };

  const resumeGame = () => {
    console.log('Game Resumed');
    gameStatus.value = 'inGame';
  };

  return {
    gameStatus,
    currentTime: computed(() => currentTime.value),
    words: computed(() => words.value),
    setCurrentTime,
    startGame,
    endGame,
    resetGame,
    pauseGame,
    resumeGame,
  };
});
