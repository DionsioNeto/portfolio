import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import pt from './locales/pt.json'

// Detecta idioma salvo ou do navegador
const savedLang = localStorage.getItem('lang')
const browserLang = navigator.language.split('-')[0] // ex: "pt-BR" → "pt"
const defaultLang = savedLang || (['pt', 'en'].includes(browserLang) ? browserLang : 'en')

export const i18n = createI18n({
  legacy: false,
  globalInjection: true, // permite usar $t em qualquer lugar
  locale: defaultLang,
  fallbackLocale: 'en',
  messages: {
    en,
    pt
  }
})