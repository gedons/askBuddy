import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import ChatPage from '../views/ChatPage.vue'

const routes = [

  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/chat',
    name: 'ChatPage',
    component: ChatPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
