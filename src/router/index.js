import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout.vue'
import Home from '@/views/home'
import Category from '@/views/category'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      component: Home
    },
    {
      path: '/category:id',
      component: Category
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
