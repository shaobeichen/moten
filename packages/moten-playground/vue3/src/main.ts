import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import '@moten/ui/style'
import moten from '@moten/ui'

const app = createApp(App)

app.use(moten)

app.mount('#app')
