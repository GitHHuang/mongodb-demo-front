import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/theme-chalk/index.css'
import ElementPlus from 'element-plus'

createApp(App).use(ElementPlus).use(router).mount('#app')