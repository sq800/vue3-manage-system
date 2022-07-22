<template>
  <div class="right flex">
    <div class="search shadow-b">水光潋滟</div>
    <div class="content shadow-b">晴芳好</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'


</script>

<style scoped>
.right{
  font-size: 14px;
}
.flex {
  display: flex;
  flex-direction: column;
}
.search {
  background-color: #fff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
}

.shadow-b {
  box-shadow: 2px 2px 3px #A8ABB2;
}

.content {
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  flex-grow: 1;
  margin-bottom: 15px;
}

.w-50 {
  width: 180px;
}
</style>
