import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'

import { Icon } from '@iconify/vue'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.component('Icon', Icon)

app.mount('#app')