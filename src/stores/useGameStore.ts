import { defineStore } from 'pinia';
import { ref } from 'vue';
import { INITIAL_TIME } from '@/utils/constans';
import { quotes } from '@/utils/quotes';

export type GameStatus = 'waitingForStart' | 'inGame' | 'paused' | 'end' | 'restart';
export interface GameStats {
  time: number;
  words: string;
  errors: number;
}

export const useGameStore = defineStore('game', () => {
  const gameStatus = ref<GameStatus>('waitingForStart');
  const currentTime = ref(0);
  const words = ref<string[]>([]);
  const errorCount = ref(0);
  const gamesStats = ref<GameStats[]>([]);

  const incrementErrorCount = () => {
    errorCount.value++;
  };

  const setCurrentTime = (time: number) => {
    currentTime.value = time;
  };

  const startGame = () => {
    gameStatus.value = 'inGame';
    currentTime.value = INITIAL_TIME;
    words.value = quotes[1].trim().split('');
    errorCount.value = 0;
  };

  const endGame = () => {
    gamesStats.value.push({ time: currentTime.value, words: words.value.join(''), errors: errorCount.value });
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
    // Getters
    gameStatus,
    currentTime,
    words,
    errorCount,
    // Methods
    setCurrentTime,
    incrementErrorCount,
    // Status Methods
    startGame,
    endGame,
    resetGame,
    pauseGame,
    resumeGame,
  };
});
