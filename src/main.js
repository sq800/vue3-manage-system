/*******************************************************************************
 * @FilePath     : main.js
 * @Description  : 应用主逻辑
 * @Author       : sq800
 * @Date         : 2022/07/01
 * @LastEditors  : sq800
 * @LastEditTime : 2022/07/11
 * @Copyright (c) 2022 by sq800, All Rights Reserved. 
 *******************************************************************************/
import { createApp } from 'vue'
import App from './App.vue'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入elementplus icon库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入创建好的router
import router from './router'


// 创建实例
const app=createApp(App)

// 使用elementplus，router
app.use(ElementPlus).use(router);

//全局注册element icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 绑定到app元素
app.mount('#app');
