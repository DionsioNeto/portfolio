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
  <header class="w-full border-b-1 border-b-neutral-800">
    <div class="container m-auto flex justify-between p-4 items-center">
      <div class="font-black text-2xl">Dionísio</div>
      <div class="">
        <ul class="flex items-center gap-2">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
          <li>
            <div class="inline-flex gap-1 rounded-full p-1 bg-neutral-300 dark:bg-neutral-800">
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
      </div>
    </div>
  </header>
</template>