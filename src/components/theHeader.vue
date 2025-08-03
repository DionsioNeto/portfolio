<script setup lang="ts">
import { Moon, SunDim, Monitor, Sun } from 'lucide-vue-next';
import { useAppearance } from '../useAppearance';
const { appearance, updateAppearance } = useAppearance();
const tabs = [
    { value: 'light', Icon: Sun  },
    { value: 'dark', Icon: Moon },
    { value: 'system', Icon: Monitor },
] as const;
</script>
<template>
  <header class="z-2 mx-auto w-fit rounded-full sticky py-1 px-3 backdrop-blur-xs top-3 borde-2 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-700 shadow-lg shadow-neutral-200/50 dark:shadow-neutral-950/50">
    <nav>
      <ul class="flex items-center gap-2">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
        <li>
          <div class="inline-flex gap-1 rounded-full p-1 bg-neutral-100/100 dark:bg-neutral-800/100">
            <button
                v-for="{ value, Icon } in tabs"
                :key="value"
                @click="updateAppearance(value)"
                :class="[
                    'flex items-center justify-center rounded-full w-6 h-6 transition-colors',
                    appearance === value
                        ? 'bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100'
                        : 'text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60',
                ]"
            >
                <component :is="Icon" class="h-4 w-4" />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>