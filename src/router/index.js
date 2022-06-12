import Vue from 'vue'
import VueRouter from 'vue-router'
import dailyManagement from './asyncRouter/dailyManagement/index'
import basicInformation from './asyncRouter/basicInformation/index'

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
    path: '/404',
    name: '404',
    component: () => import('../views/errorPage.vue')
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
      ...dailyManagement,
      ...basicInformation
    ]
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const token = JSON.parse(sessionStorage.getItem('setUserInfo')).token
    if (!token) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
