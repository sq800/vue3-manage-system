<template>

  <el-tabs v-model="currentTabs" type="card" class="demo-tabs" closable @tab-click="clickTab">
    <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
      <keep-alive>
        <component :is='current'></component>
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { computed } from '@vue/reactivity';
import { ref, reactive, markRaw } from 'vue'
import SM from '../view/SM.vue'
import DM from '../view/DM.vue'
let editableTabs = reactive([
  {
    title: '员工管理',
    name: "SM",
    id: markRaw(SM),
    content: 'Tab 1 content',
  },
  {
    title: '部门管理',
    name: 'DM',
    id: markRaw(DM),
    content: 'Tab 2 content',
  },
])
let tabObj={}
// console.log(tabObj)
editableTabs.forEach((item)=>{
  tabObj[item.name]=item.id
})
console.log(tabObj);
let currentTabs = editableTabs[0].name
let current = editableTabs[0].id
// let current = DM
console.log(current);

/*******************************************************************************
 * @param         TabPaneContext
 * @param         Event
 * @return        
 * @description   要实现的功能为点击标签页跳转到不同组件，目前没有实现，切换到newTabs分支，准备使用router实现
 *******************************************************************************/
const clickTab = (TabPaneContext, Event) => {
  // console.log(typeof TabPaneContext.props.name)
  currentTabs = TabPaneContext.props.name
  // console.log(currentTabs);

  current=tabObj[TabPaneContext.props.name]
  console.log(current);

  // console.log(Event)
}
// const addTab = (targetName) => {
//   const newTabName = `${++tabIndex}`
//   editableTabs.value.push({
//     title: 'New Tab',
//     name: newTabName,
//     content: 'New Tab content',
//   })
//   editableTabsValue.value = newTabName
// }
// const removeTab = (targetName) => {
//   const tabs = editableTabs.value
//   let activeName = editableTabsValue.value
//   if (activeName === targetName) {
//     tabs.forEach((tab, index) => {
//       if (tab.name === targetName) {
//         const nextTab = tabs[index + 1] || tabs[index - 1]
//         if (nextTab) {
//           activeName = nextTab.name
//         }
//       }
//     })
//   }

//   editableTabsValue.value = activeName
//   editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
// }
</script>
<!-- <script>
import SM from '../view/SM.vue'

export default {
   components: {
    SM
  },
  data() {
    return {
      currentTabs:SM.__name
    }
  },
 
}
</script> -->
<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
