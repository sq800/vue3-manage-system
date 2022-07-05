<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" unique-opened
            @open="handleOpen" @close="handleClose" :collapse-transition="true">
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <House />
                    </el-icon>
                    <span>单位组织</span>
                </template>
                <el-menu-item index="1-1">员工管理</el-menu-item>
                <el-menu-item index="1-2">部门管理</el-menu-item>
                <el-menu-item index="1-3">职位管理</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="2">
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
            </el-sub-menu>

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
        title: 'Option 1',
    },
    {
        key: '2',
        title: 'Navigation 2',
        children: [
            {
                key: '2.1',
                title: 'Navigation 3',
                children: [
                    {
                        key: '2.1.1',
                        title: 'Option 2.1.1',
                    }],
            }],
    }
];
defineProps({
    isCollapse: reactive({
        default: false
    })
})
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
    // min-height: 100%;
}

.el-menu--collapse {
    // height: 100%;
}
</style>
