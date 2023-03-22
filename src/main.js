import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './index.css'

createApp(App).use(router, axios).mount('#app')
