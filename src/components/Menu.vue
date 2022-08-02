<template>
    <div>
        <!-- 整个菜单根元素 -->
        <el-menu default-active="1" class="sidebar-el-menu" :collapse="store.isCollapse" :router="isRoute"
            :collapse-transition="true">
            <template v-for="item in list">
                <!-- 一级菜单的子菜单 -->
                <el-sub-menu v-if="item.children" :index="item.name">
                    <template #title>
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </template>

                    <template v-for="subItem in item.children">
                        <el-sub-menu v-if="subItem.children" :index="subItem.name">
                            <template #title><span>{{ subItem.title }}</span></template>
                            <el-menu-item v-for="subSubItem in subItem.children" :index="subSubItem.name">
                                <span>{{ subSubItem.title }}</span>
                            </el-menu-item>
                        </el-sub-menu>
                        <el-menu-item v-else :index="subItem.name">
                            <span>{{ subItem.title }}</span>
                        </el-menu-item>
                    </template>
                </el-sub-menu>
                <!-- 一级菜单下的子栏目 -->
                <el-menu-item v-else :index="item.name">
                    <el-icon>
                        <component :is="item.icon"></component>
                    </el-icon>
                    <template #title>
                        <span>{{ item.title }}</span>
                    </template>
                </el-menu-item>
            </template>

        </el-menu>
    </div>
</template>

<script setup>
import { onMounted,watchEffect } from 'vue';
import { useStore } from '../store/index'
const store = useStore();
console.log(store.isCollapse);
// 开启菜单路由
let isRoute = true;
const list = [
    {
        // element+ 中菜单开启vue-router模式，会把元素的index作为path
        title: '单位组织',
        icon: 'House',
        name: 'UO',
        children: [
            {
                title: '员工管理',
                name: 'SM'
            },
            {
                title: '部门管理',
                name: 'DM'
            },
            {
                title: '职位管理',
                name: 'PM'
            }
        ]
    },
    {
        title: '系统管理',
        icon: 'Setting',
        name: "SYM",
        children: [
            {
                title: '角色管理',
                name: 'RM'
            },
            {
                title: '系统日志',
                name: 'SL',
                children: [
                    {
                        title: '登录日志',
                        name: 'LL'
                    }],
            },
        ],
    },
    {
        title: '待办',
        name: 'TODO',
        icon: 'BellFilled',

    }
];
let props = defineProps({
    isCollapse: {
        type: Boolean,
        default: false
    }
})
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
// 若浏览器尺寸过小，收起菜单
window.onresize = () => {
    let navWidth = document.querySelector('body').offsetWidth
    if (navWidth <= 800) {
        store.isCollapse=true
    }
    else {
        store.isCollapse=false
    }
}
onMounted(() => {
    watchEffect(() => {
        let navWidth = document.querySelector('body').offsetWidth
        if (navWidth <= 800) {
            store.isCollapse=true
        }
        else {
            store.isCollapse=false
        }
    }, { flush: 'post' })
})
// // 注册
// const emit = defineEmits(["menuClick"]);
// // 菜单子项点击事件函数
// const menuItemClick = (val) => {
//     // console.log(val)
//     emit("menuClick", val.title, val.name)
// }
</script>

<style lang="less">
.sidebar-el-menu {
    width: 200px;
    height: 100%;
    top:0px;
    bottom:0px;
}
</style>
