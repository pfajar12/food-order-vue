import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/LoginView.vue'
import OrderView from '../components/OrderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/order',
      name: 'order',
      component: OrderView
    }
  ]
})

export default router
