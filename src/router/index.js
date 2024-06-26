import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'landingpage',
    component: () => import(/* webpackChunkName: "landingpage" */ '../views/LandingPage.vue')
  },
  {
    path: '/screenwrites',
    name: 'screenwrites',
    component: () => import(/* webpackChunkName: "screenwrites" */ '../views/ScreenwritesView.vue')
  },
  {
    path: '/screenwrites/:sid/scenes',
    name: 'scenes',
    component: () => import(/* webpackChunkName: "scenes" */ '../views/ScenesView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
