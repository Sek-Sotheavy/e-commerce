import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import authApi from '@/libs/apis/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/guest',
      name: 'homeGuest',
      component: () => import('../views/HomeViewGuest.vue')
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/product',
      name: 'Product',
      
      component: () => import('../views/Product.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/Checkout.vue')
    },
    {
      path: '/login',
      name: 'auth/login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'auth/register',
      component: () => import('../views/Signup.vue')
    },
  ]
})

export default router
