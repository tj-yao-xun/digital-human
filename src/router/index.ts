import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import ListView from "@/views/ListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: LoginView,
    },
    {
      path: '/login',
      name: '登录',
      component:LoginView,
    },
    {
      path: '/list',
      name: '列表页面',
      component:ListView,
    }
  ],
})

export default router
