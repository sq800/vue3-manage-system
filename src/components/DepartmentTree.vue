<script setup>
import { ref } from 'vue';

// import { defineProps } from "vue";
let props = defineProps({
    data:Array
})
let filterText = ref('')
</script>
<template>
    <div class="tree">
        <el-input v-model="filterText" placeholder="快速查找" ></el-input>
        <el-tree :data="props.data">
        </el-tree>
    </div>
    <div></div>
</template>
<style>
.tree {
    width: 400px;
    padding: 3px;
}
</style>