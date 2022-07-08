<template>

  <el-tabs v-model="currentTabs" type="card" class="demo-tabs" closable @tab-remove="removeTab">
    <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
      <keep-alive>
        jjj
      </keep-alive>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  selectedMenu:{
    type:String,
    default:"SM"
  }
})

let tabIndex = 2
const currentTabs = selectedMenu
const editableTabs = ref([
  {
    title: '员工管理',
    name: 'SM',
    index: 0,
    content: 'Tab 1 content',
  },
  {
    title: '部门管理',
    name: 'DM',
    content: 'Tab 2 content',
  },
])

const addTab = (targetName) => {
  const newTabName = `${++tabIndex}`
  editableTabs.value.push({
    title: 'New Tab',
    name: newTabName,
    content: 'New Tab content',
  })
  editableTabsValue.value = newTabName
}
const removeTab = (targetName) => {
  const tabs = editableTabs.value
  let activeName = editableTabsValue.value
  if (activeName === targetName) {
    tabs.forEach((tab, index) => {
      if (tab.name === targetName) {
        const nextTab = tabs[index + 1] || tabs[index - 1]
        if (nextTab) {
          activeName = nextTab.name
        }
      }
    })
  }

  editableTabsValue.value = activeName
  editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>
<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
