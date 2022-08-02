<script setup>
import HomeVue from './view/Home.vue';
import Menu from './components/Menu.vue';
import Header from './components/Header.vue';
import PM from './view/PM.vue';

</script>
<template>
  <div class="common-layout" id="layout">
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
          <Menu></Menu>
        </el-aside>
        <el-main class="main">
          <router-view v-slot="{ Component }" class="content">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
* {
  padding: 0;
}

#layout {
  background-color: rgb(193, 193, 193);
  min-height: 100vh;

  .header {
    height: 50px;
    padding: 0;
    background-color: rgb(148, 148, 148);
    display: flex;
  }

  .aside {
    height: calc(100vh - 50px);
    width: max-content;
    background-color: #ffffff;
  }

  .main {
    background-color: rgb(204, 229, 220);
    height: calc(100vh - 50px);
    .content{
      background-color: #ffffff;
    }
  }
}
</style>