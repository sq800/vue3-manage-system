<script setup>
import { ref } from 'vue';

let searchObj = ref({})
let options = [
    {
        value: '1',
        label: '全部',
    },
    {
        value: '2',
        label: '启用',
    },
    {
        value: '3',
        label: '禁用',
    }]
function search(){
    console.log(searchObj._rawValue)
}
</script>
<template>
    <div class="searchBox">
        <div class="inputBox">
            <label class="label" for="uName">登录名称：</label>
            <el-input class="input" id="uName" v-model="searchObj.name" clearable />
        </div>
        <div class="inputBox">
            <label class="label" for="uNumber">手机号：</label>
            <el-input class="input" id="uNumber" v-model="searchObj.phone" clearable />
        </div>
        <div class="selectBox">
            <label class="label" for="uState">用户状态：</label>
            <el-select class="input" id="uState" v-model="searchObj.status" clearable placeholder="选择状态">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
        </div>
        <div class="pickerBox" id="cTime">
            <label class="label" for="cTime">创建时间：</label>
            <el-date-picker v-model="searchObj.cTime" type="daterange" unlink-panels start-placeholder="开始时间"
                end-placeholder="结束时间" />
        </div>

        <el-button type="primary" icon="Search" @click="search">搜索</el-button>

    </div>
</template>
<style scoped>
.searchBox {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 5px;
}

.searchBox>div {
    width: 240px;
    margin: 0 5px 5px 0;
}

.searchBox>.pickerBox {
    width: fit-content;
}

.label {
    display: inline-block;
    width: 80px;
}

.input {
    width: 160px;
}
</style>