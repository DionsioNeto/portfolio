<script setup lang="ts">
import { Moon, Monitor, Sun, Languages } from 'lucide-vue-next';
import { useAppearance } from '../useAppearance';
const { appearance, updateAppearance } = useAppearance();
const tabs = [
    { value: 'light', Icon: Sun  },
    { value: 'dark', Icon: Moon },
    { value: 'system', Icon: Monitor },
] as const;

import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const open = ref(false)
const { locale } = useI18n()
const selectedLang = ref(locale.value)

const languages = [
  { code: 'en', label: 'English' },
  { code: 'pt', label: 'Português' },
]

function selectLang(code) {
  selectedLang.value = code
  changeLang()
  open.value = false
}

function changeLang() {
  locale.value = selectedLang.value
  localStorage.setItem('lang', selectedLang.value)
}

onMounted(() => {
  const savedLang = localStorage.getItem('lang')
  if (savedLang) {
    locale.value = savedLang
    selectedLang.value = savedLang
  }
})

</script>
<template>
  <header class="z-2 mx-auto w-fit rounded-full sticky py-1 px-3 backdrop-blur-xs top-3 borde-2 bg-neutral-300/50 dark:bg-neutral-900/50 border-neutral-200 dark:border-neutral-700 shadow-lg shadow-neutral-200/50 dark:shadow-neutral-950/50">
    <nav>
      <ul class="flex items-center gap-1.5 font-medium">
        <li>
          <RouterLink 
            active-class="text-neutral-700"
            to="/"
          >
            {{ $t('Home') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink 
            active-class="text-neutral-700"
            to="/contact"
          >
            {{ $t('Contact') }}
          </RouterLink>
        </li>
        <li>
          <RouterLink 
            active-class="text-neutral-700"
            to="/about"
          >
            {{ $t('About') }}
          </RouterLink>
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
        <li>
          <div class="relative inline-block text-left">
              <!-- Botão com ícone -->
            <button
              @click="open = !open"
              class="inline-flex gap-1 rounded-full p-2 bg-white dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              <Languages :size="15" />
            </button>

            <!-- Menu dropdown -->
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div
                v-if="open"
                class="absolute right-0 mt-2 w-32 origin-top-right rounded-lg shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-black/5"
              >
                <div class="py-1">
                  <button
                    v-for="lang in languages"
                    :key="lang.code"
                    @click="selectLang(lang.code)"
                    class="w-full text-left px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded transition-colors"
                  >
                    {{ lang.label }}
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>