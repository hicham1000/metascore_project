import { createRouter, createWebHistory } from 'vue-router'
import GridView from '@/views/GridView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: GridView,
    }
  ],
})

export default router
