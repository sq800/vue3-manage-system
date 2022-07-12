<template>
    <header class="navbar">
        <div class="navbar-left">
            <span class="title">智能表计运营管理系统</span>

            <!-- 展开按钮，展开左侧菜单 -->
            <span class="collapse-btn" v-on:click="handleCollapse">
                <el-icon v-if="store.isCollapse">
                    <Expand />
                </el-icon>
                <el-icon v-else>
                    <Fold />
                </el-icon>
            </span>
        </div>
        <div class="navbar-right">
            <span class="time">{{ currentTimeString }}</span>
            <button class="fullScreen">
                <span @click="handleFullScreen">
                    <el-icon>
                        <FullScreen />
                    </el-icon>
                    全屏
                </span>
            </button>
            <span class="role">管理员</span>

        </div>
    </header>
</template>

<script setup>
import { get } from 'lodash'
import { ref, isRef } from 'vue'
import { useStore } from '../store/index'
const store = useStore()

// 当前时间
let currentTimeString = ref("");
getCurrent();
// 每1秒获取一次时间
let task = setInterval(getCurrent, 1000);
// 获取当前时间
function getCurrent() {
    let d = new Date();
    //拼接当前时间字符串
    currentTimeString.value = d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日" + addZero(d.getHours()) + ":"
        + addZero(d.getMinutes()) + ":" + addZero(d.getSeconds()) + " 周" + getDay();
    //美观起见，不足十位补零
    function addZero(i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    }
    // 获取到的周几，返回汉字
    function getDay() {
        switch (d.getDay()) {
            case 1:
                return "一";
                break;
            case 2:
                return "二";
                break;
            case 3:
                return "三";
                break;
            case 4:
                return "四";
                break;
            case 5:
                return "五";
                break;
            case 6:
                return "六";
                break;
            default:
                return "日"
                break;
        }
    }
}

// 展开/关闭处理函数
function handleCollapse() {
    store.isCollapse=!store.isCollapse
}
let fullScreen = false;
function handleFullScreen() {
    let element = document.documentElement;
    if (fullScreen) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    } else {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) { }
    }
    fullScreen = !fullScreen
}
</script>
<style lang="less">
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #4188cf;
    color: #fff;
    user-select: none;
}

.navbar-left {
    display: flex;
    line-height: 50px;
    width: 260px;
    justify-content: space-around;
    align-content: center;
}

.collapse-btn {
    padding-top: 2px;
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;
}

.navbar-right {
    width: 430px;
    /* line-height: 50px; */
    /* margin-right: 10px; */
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.navbar-right>* {
    cursor: pointer;
    font-weight: 600;
}

.fullScreen {
    border: none;
    background-color: transparent;
    color: #fff;
    font: inherit;
}

.fullScreen>span {
    font-weight: 600;

    i {
        position: relative;
        left: 0px;
        top: 2px;
    }
}

.role {
    width: 60px;
}
</style>
