<template>
    <!-- ========== HEADER ========== -->
    <header class="sticky top-0 inset-x-0 flex flex-wrap z-50 w-full text-sm">
        <nav
            class="mt-4 mx-auto p-4 relative w-4/5 bg-white border-4 border-blue-200 rounded-[2rem] mx-2 py-2.5 flex items-center justify-between">
            <div class="px-4 md:px-0 flex justify-between items-center">
                <div class="flex items-center">
                    <!-- Logo -->
                    <RouterLink :to="{ name: routes.home }">
                        <p class="text-green-700 bg-clip-text text-4xl font-extrabold">AndaluType</p>
                    </RouterLink>
                    <!-- End Logo -->
                </div>
            </div>

            <!-- ========== NAVBAR BUTTONS ========== -->
            <div id="hs-navbar-header-floating" class="inline-flex justify-end">
                <div class="flex flex-row gap-2 py-2">
                    <button @click="newGame"
                        class="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-600 font-medium text-sm text-white rounded-full focus:outline-none">
                        Nuevo Juego
                    </button>
                    <button
                        class="group inline-flex items-center gap-x-2 py-2 px-3 bg-blue-600 font-medium text-sm text-white rounded-full focus:outline-none">
                        Estadisticas
                    </button>
                </div>
            </div>
        </nav>
    </header>
    <!-- ========== END HEADER ========== -->
</template>

<script setup lang="ts">
import { routes } from '@/router';
import { useGameStore } from '@/stores/useGameStore';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
const route = useRoute();
const router = useRouter();
const gameStore = useGameStore();
const currentRouteName = computed(() => route.name);

function newGame(): void {
    if (currentRouteName.value === routes.type) {
        gameStore.resetGame();
    } else {
        router.push({ name: routes.type });
    }
}

</script>

<style scoped></style>
