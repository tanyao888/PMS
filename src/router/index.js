import Vue from 'vue'
import VueRouter from 'vue-router'
import currentManagement from './asyncRouter/currentManagement'
import basicInformation from './asyncRouter/basicInformation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/loginPage.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    redirect: '/home',
    component: () => import('@/views/layout/layout-container.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/homePage.vue')
      },
      ...currentManagement,
      ...basicInformation
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
