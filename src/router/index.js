import { createRouter, createWebHistory } from 'vue-router'
import GridView from '@/views/GridView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      home: 'home',
      component: GridView,
      // async beforeEnter (to, from, next) {
      //   await store.dispatch('getAllMovies')
      // }
    }
  ],
})

export default router
