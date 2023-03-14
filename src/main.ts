import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faArrowsSpin, faCompassDrafting, faMobileScreenButton, faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret, faLinkedinIn, faGithub, faArrowsSpin, faCompassDrafting, faMobileScreenButton, faAnglesDown)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
