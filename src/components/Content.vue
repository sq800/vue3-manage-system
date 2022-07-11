<!--
 * @FilePath     : Content.vue
 * @Description  : 在右侧区域显示不同的views
 * @Author       : sq800
 * @Date         : 2022/07/11
 * @LastEditors  : sq800
 * @LastEditTime : 2022/07/11
 * @Copyright (c) 2022 by sq800, All Rights Reserved. 
 -->
<template>
  <router-link to='/'>首页</router-link>
  <router-link to="/SM">员工管理</router-link>
  <router-link to="/DM">部门管理</router-link>

  <router-view></router-view>
</template>
<script setup>
import { computed } from '@vue/reactivity'
import { ref, reactive, markRaw } from 'vue'
import SM from '../view/SM.vue'
import DM from '../view/DM.vue'
let currentTabs="/SM"
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
</script>

<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
