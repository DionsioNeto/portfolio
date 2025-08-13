import './assets/app.css'

import { createApp } from 'vue'

import App from './App.vue'

// VUE ROUTER
import { createRouter, createWebHistory } from 'vue-router'

// VUE I18N
import { i18n } from './i18n'

import nf from './project/notFoundPage.vue'
import index from './project/index.vue'
import contact from './project/contact.vue'
import about from './project/about.vue';
import message from './project/message.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/:pathMatch(.*)*', name: '404', component: nf },
      { path: '/', component: index },
      { path: '/contact', component: contact },
      { path: '/about', component: about },
      { path: '/message-send', component: message},
    ],
})

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')