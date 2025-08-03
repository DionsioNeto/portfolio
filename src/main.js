import './assets/app.css'

import { createApp } from 'vue'

import App from './App.vue'

// VUE ROUTER
import { createRouter, createWebHistory } from 'vue-router'

import nf from './project/notFoundPage.vue'
import index from './project/index.vue'
import contact from './project/contact.vue'
import about from './project/about.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/:pathMatch(.*)*', name: '404', component: nf },
      { path: '/', component: index },
      { path: '/contact', component: contact },
      { path: '/about', component: about },
    ],
})

createApp(App)
  .use(router)
  .mount('#app')