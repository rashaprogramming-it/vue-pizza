import { createRouter, createWebHistory } from 'vue-router'
import Body from '@/layouts/Body.vue'
import Error from '@/error/Error.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Body },
    { path: '/my-cart', name: 'cart', component: () => import('../pages/Cart.vue') },
    { path: '/:pathMatch(.*)*', name: 'error', component: Error },
  ]
})

export default router
