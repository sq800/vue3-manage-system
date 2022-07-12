<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header.vue'
import Menu from './components/Menu.vue';
import Content from './components/Content.vue';
import { ref, isRef,reactive } from "vue"

</script>

<template>
  <div class="layout">
    <Header class="layout-top"></Header>
    <div class="layout-bottom">
      <Menu class="layout-b-left"></Menu>
      <div class="layout-b-right">
        <Content></Content>
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
