import { createApp } from 'vue'
import App from './App.vue'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入elementplus icon库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app=createApp(App)


// 使用elementplus
app.use(ElementPlus);
//全局注册element icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
  
app.mount('#app');
