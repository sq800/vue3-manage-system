<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header.vue'
import Menu from './components/Menu.vue';
import Content from './components/Content.vue';
import { ref, isRef,reactive } from "vue"
// 菜单伸缩状态
let isCollapse = ref(false);
// 菜单选中的选项
let selectedMenu=ref({
  name:'1',
  title:'1'
});

// 接收header组件传参的函数
function handleHeader(value) {
  isCollapse.value = value
  console.log(isCollapse.value)
}
// 接收Menu组件传参的函数
function handleMenu(title,name) {
  console.log(title,name)
  // 把值传给content组件
  selectedMenu.value.name=name
  selectedMenu.value.title=title
}
//打开的标签页
let openedTabList = {}

function myClick(index) {
  console.log(index);
}
</script>

<template>
  <div class="layout">
    <Header class="layout-top" @my-click="handleHeader"></Header>
    <div class="layout-bottom">
      <Menu class="layout-b-left" @menuClick="handleMenu" :isCollapse="isCollapse"></Menu>
      <div class="layout-b-right">
        <Content :selectedMenu="selectedMenu"></Content>
      </div>
    </div>
  </div>


</template>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;

  .layout-top {
    height: 50px;
  }

  .layout-bottom {
    display: flex;
    flex-direction: row;
    flex: 1;
    // background-color: #66abdd;

    .layout-b-left {
      border-right: solid 1px rgb(226, 255, 190);
    }

    .layout-b-right {
      display: flex;
      flex: 1;
      flex-direction: column;
      overflow: auto;
      // background-color: #ffb300;
      // margin: 10px 0px 0px 10px;
    }
  }
}
</style>
