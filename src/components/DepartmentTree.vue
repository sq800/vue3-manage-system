<script setup>
import { reactive, ref, watch } from 'vue';

// import { defineProps } from "vue";
let props = defineProps({
    data: Array
})
let filterText = ref('')

// 控制树是否不显示
// treeClose true  不显示
//           false 显示
let treeClass = reactive({
    treeClose: false
})
watch(filterText, (newfilter) => {

})

function treeClose() {
    treeClass.treeClose = !treeClass.treeClose
}
</script>
<template>
    <div class="treeBox">
        <div class="tree" :class="treeClass">
            <el-input v-model="filterText" placeholder="快速查找"></el-input>
            <el-tree :data="props.data">
            </el-tree>
        </div>
        <div class="collapseBtn" @click="treeClose">{{treeClass.treeClose ? ">":"<" }}</div>
    </div>
</template>
<style>
.treeBox {
    /* width: 200px; */
    display: flex;
    /* height: 100%; */
    background-color: #fff;
}

.tree {
    width: 200px;
    padding: 3px;
}

.treeClose {
    display: none;
    transition: 0.3s;
}

.collapseBtn {
    height: 100%;
    background-color: rgb(224, 255, 245);
    align-items: center;
}
</style>