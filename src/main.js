import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router.js'
import Toast from "vue-toastification"

import './assets/scss/style.scss'
import "vue-toastification/dist/index.css"

const app = createApp(App)

app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
});

app.use(createPinia())
app.use(router)

app.mount('#app')
