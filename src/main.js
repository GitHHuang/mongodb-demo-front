import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'


// Vue.use(ElementUI)
createApp(App).use(ElementPlus).use(router).mount('#app')