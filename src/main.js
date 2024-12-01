import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/tailwind.css'
import router from './router'


createApp(App).use(router).mount('#app');
