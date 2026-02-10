import { createRouter, createWebHistory } from 'vue-router'

import HomeVue from '@/views/HomeVue.vue'
import _default from 'eslint-plugin-oxlint'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/', name: 'home', component: HomeVue }],
})

export default router
