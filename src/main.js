// CSS
import './assets/main.css'

import { createApp } from 'vue'



// FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faCarOn, faUser, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// ONLY US THIS ICONS:
library.add(faPhone, faUser, faEnvelope);  

/* <fa icon="envelope" /> */


import App from './App.vue'

// VUE ROUTER
import { createRouter, createWebHistory } from 'vue-router'

import index from './project/index.vue'
import about from './project/about.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: index },
      { path: '/about', component: about },
    ],
})


createApp(App)
    .component('fa', FontAwesomeIcon)
    .use(router)
    .mount('#app')

// OTHER