<template>
    <div class="side-bar">
        <!-- 整个菜单根元素 -->
        <el-menu default-active="1" class="sidebar-el-menu" :collapse="isCollapse" :router="isRoute"
            :collapse-transition="true" >
            <template v-for="item in list">
                <!-- 一级菜单下    有    二级菜单 -->
                <el-sub-menu v-if="item.children" :index="item.key">
                    <template #title>
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </template>
                    <!-- 循环渲染二级菜单 -->
                    <template v-if="item.children" v-for="subItem in item.children">
                        <!--若二级菜单下  有  三级菜单，使用 el-sub-menu  -->
                        <el-sub-menu v-if="subItem.children" :index="subItem.key">
                            <!--标题插槽-->
                            <template #title><span>{{ subItem.title }}</span></template>
                            <!--点击具体菜单触发传参 -->
                            <el-menu-item @click="menuItemClick(subSubItem)" v-for="subSubItem in subItem.children"
                                :index="subSubItem.name">
                                <span>{{ subSubItem.title }}</span>
                            </el-menu-item>
                        </el-sub-menu>

                        <!-- 若  无  三级菜单，直接渲染 el-menu-item -->
                        <el-menu-item v-else @click="menuItemClick(subItem)" :index="subItem.name">
                            <span>{{ subItem.title }}</span>
                        </el-menu-item>
                    </template>
                </el-sub-menu>

                <!-- 一级菜单下    无    子菜单 -->
                <el-menu-item v-else>
                    <template #title>
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </template>
                </el-menu-item>
            </template>

        </el-menu>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
// 开启菜单路由
let isRoute = true;
const list = [
    {
        // element+ 中菜单开启vue-router模式，会把元素的index作为path
        key: '1',
        title: '单位组织',
        icon: 'House',
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
        key: '2',
        title: '系统管理',
        icon: 'Setting',
        children: [
            {
                title: '角色管理',
                name: 'RM'
            },
            {
                title: '系统日志',
                children: [
                    {
                        title: '登录日志',
                        name: 'LL'
                    }],
            },
        ],
    },
    {
        key: '3',
        title: '人事管理',
        icon: 'Setting',

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
// 注册
const emit = defineEmits(["menuClick"]);
// 菜单子项点击事件函数
const menuItemClick = (val) => {
    // console.log(val)
    emit("menuClick", val.title, val.name)
}
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}
</style>
