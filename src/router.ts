import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./modules/welcomeSection/views/welcomePage.vue')
  },
  {
    path: '/game_mode',
    name: 'Game',
    component: () => import('./modules/gameSection/views/gamePage.vue'),
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('./modules/resultSection/views/resultPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router


