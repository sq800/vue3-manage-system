<!--
 * @FilePath     : Content.vue
 * @Description  : 在右侧区域显示不同的views
 * @Author       : sq800
 * @Date         : 2022/07/11
 * @LastEditors  : sq800
 * @LastEditTime : 2022/08/01
 * @Copyright (c) 2022 by sq800, All Rights Reserved. 
 -->
<template >

<router-view v-slot="{ Component }" >
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view>
</template>
<script setup>

</script>


<style>
.fff{
  background-color: #fff;
}
.h100{
  height: 100%;
}
</style>
