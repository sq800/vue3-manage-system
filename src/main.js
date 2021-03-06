/*******************************************************************************
 * @FilePath     : main.js
 * @Description  : 应用主逻辑
 * @Author       : sq800
 * @Date         : 2022/07/01
 * @LastEditors  : sq800
 * @LastEditTime : 2022/07/20
 * @Copyright (c) 2022 by sq800, All Rights Reserved. 
 *******************************************************************************/
import { createApp } from 'vue'
import App from './App.vue'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 国际化
import  zhCn  from 'element-plus/es/locale/lang/zh-cn'
// 引入elementplus icon库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入创建好的router
import router from './router'
// 引入pinia
import {createPinia} from 'pinia'

const store = createPinia()

// 创建实例
const app=createApp(App)

// 使用element+ router pinia
app.use(ElementPlus,{
    locale:zhCn
}).use(router).use(store)

//全局注册element icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 绑定到app元素
app.mount('#app');
