import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HotView from '../views/HotView.vue'
import TopicView from '..//views/TopicView.vue'
import ClassificationView from '../views/ClassificationView.vue'
import SettingsView from '../views/SettingsView.vue'
import AccountView from '../views/AccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/hot',
      name: 'hot',
      component: HotView,
    },
    {
      path: '/topic',
      name: 'topic',
      component: TopicView,
    },
    {
      path: '/classification',
      name: 'classification',
      component: ClassificationView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
    {
      path: '/account',
      name: 'account',
      component: AccountView,
    },
  ],
})

export default router
