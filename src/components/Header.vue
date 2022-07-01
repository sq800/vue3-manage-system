<template>
    <header class="navbar">
        <div class="navbar-left">
            <span class="title">智能表计运营管理系统</span>

            <!-- 展开按钮，展开左侧菜单 -->
            <span class="collapse-btn" v-on:click="handleCollapse">
                <el-icon v-if="menuStatus">
                    <Fold />
                </el-icon>
                <el-icon v-else>
                    <Expand />
                </el-icon>
            </span>
        </div>
        <div class="navbar-right">
            <!-- flex容器 -->
            <div class="flex-box">
                <span class="time">{{ year }}年{{ month }}月{{ day }}日{{ hour }}时{{ minute }}分{{ second }}秒 周{{ dayOfWeek }}</span>
                <span class="fullScreen">全屏</span>
                <span class="role">管理员</span>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

// true 展开菜单  false 关闭菜单
let menuStatus = ref(true);
// 当前时间
let dateTime = ref()

// 展开/关闭处理函数
function handleCollapse() {
    menuStatus.value = !menuStatus.value;
}

</script>
<style>
* {
    margin: 0;
    padding: 0;
}

header {
    position: fixed;
    width: 100%;
    height: 50px;
    background-color: #409eff;
    color: #fff;
    user-select: none;
}

.navbar-left {
    line-height: 50px;
}

.title {
    float: left;
    width: 200px;
}

.collapse-btn {
    float: left;
    line-height: 40px;
    width: 30px;
    padding-top: 7px;
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;
}

.navbar-right {
    line-height: 50px;
    margin-right: 10px;
}
.flex-box{
    display: flex;
    justify-content: flex-end;
}
.time {

    width: 150px;
    text-align: center;
}

.fullScreen {
    width: 60px;
}

.role {
    width: 60px;
}
</style>
