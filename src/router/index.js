import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../view/Home.vue"

// 定义路由表，每个路由映射一个组件
const routes = [
    { path: "/", component: Home },
    { path: '/DM', component: () => import('../view/DM.vue') },
    { path: '/SM', component: () => import('../view/SM.vue') },
    { path: '/PM', component: () => import('../view/PM.vue') },
    { path: '/RM', component: () => import('../view/RM.vue') },
    { path: '/LL', component: () => import('../view/LL.vue') },
    { path: '/test', component: () => import('../view/test.vue') },

]

// 创建路由
const router=createRouter({
    // hash模式
    history:createWebHashHistory(),
    routes:routes
})

export default router