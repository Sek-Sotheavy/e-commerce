import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import authApi from '@/libs/apis/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/',
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
      path: '/checkout/:Cid',
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
    {
      path: '/mycart/:Cartid',
      name: 'Cart',
      component: () => import('../views/Cart.vue')
    },
    {
      path: '/payment',
      name: 'Payment',
      component: () => import('../views/Payment.vue')
    },
    {
      path: '/addtocart/:Aid',
      name: 'Addtocart',
      component: () => import('../views/AddtoCart.vue')
    },
    {
      path: '/sucessful',
      name: 'Sucessful',
      component: () => import('../views/Thankyou.vue')
    },
    
  ]
})

export default router
