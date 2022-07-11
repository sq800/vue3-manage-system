<template>
    <div>
        <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" unique-opened
            @open="handleOpen" @close="handleClose" :collapse-transition="false">
            <el-sub-menu v-for="item in list" :index="item.key">
                <template #title>
                    <el-icon>
                        <component :is="item.icon"></component>
                    </el-icon>
                    <span>{{ item.title }}</span>
                </template>
                <!--      👇循环渲染一级菜单                 👇若一级菜单下有二级菜单       -->
                <template v-for="subItem in item.children" v-if="item.children">
                    <!--        👇若二级菜单下三级菜单  -->
                    <template v-if="subItem.children">
                        <el-sub-menu :index="subItem.key">
                            <!--      👇标题插槽-->
                            <template #title><span>{{ subItem.title }}</span></template>
                            <!--            👇点击具体菜单触发传参 -->
                            <el-menu-item @click="menuItemClick(subSubItem)" v-for="subSubItem in subItem.children"
                                :index="subSubItem.key"><span>{{ subSubItem.title }}</span></el-menu-item>
                        </el-sub-menu>
                    </template>
                    <!-- 若子菜单无子菜单 -->
                    <template v-else>
                        <el-menu-item @click="menuItemClick(subItem)" :index="subItem.key">
                            <span>{{ subItem.title }}</span>
                        </el-menu-item>
                    </template>

                </template>

            </el-sub-menu>
            <!-- <el-sub-menu index="2">
                <template #title>
                    <el-icon>
                        <Setting />
                    </el-icon>
                    <span>系统管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">角色管理</el-menu-item>
                    <el-menu-item index="2-2">菜单管理</el-menu-item>
                    <el-menu-item index="2-3">通用字典</el-menu-item>
                </el-menu-item-group>
                <el-sub-menu index="2-4">
                    <template #title><span>系统日志</span></template>
                    <el-menu-item index="2-4-1">登录日志</el-menu-item>
                    <el-menu-item index="2-4-2">操作日志</el-menu-item>
                    <el-menu-item index="2-4-3">API日志</el-menu-item>
                </el-sub-menu>
            </el-sub-menu> -->

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
const list = [
    {
        key: '1',
        title: '单位组织',
        icon: 'House',
        children: [
            {
                key: '1.1',
                title: '员工管理',
                name: 'SM'
            },
            {
                key: '1.2',
                title: '部门管理',
                name: 'DM'
            },
            {
                key: '1.3',
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
                key: '2.1',
                title: '角色管理',
                name: 'RM'
            },
            {
                key: '2.2',
                title: '系统日志',
                children: [
                    {
                        key: '2.2.1',
                        title: '登录日志',
                        name: 'LL'
                    }],
            },
        ],
    }
];
// let isCollapse=true;
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
//注册
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
