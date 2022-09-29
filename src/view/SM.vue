<!--
 * @FilePath     : SM.vue
 * @Description  : 员工管理页面
 * @Author       : sq800
 * @Date         : 2022/08/02
 * @LastEditors  : sq800
 * @LastEditTime : 2022/08/04
 * Copyright (c) 2022 by XCWL, All Rights Reserved. 
-->

<script setup>
import { reactive, ref, watch, watchEffect } from 'vue';
import Tree from '../components/DepartmentTree.vue';
import SearchBox from '../components/SearchBox.vue';
import { useStore } from '../store/index'
const store = useStore();
let data = ref([])
// 每页具有多少条目
let pageSize = ref(5)
// 当前页数
let currentPage = ref(1)

/**
 * @description   获取部门数据json，更新到data数组
 * @return        
 */
function fetchDepartment() {
  fetch("../src/assets/department.json")
    .then(res => res.json())
    .then(res => {
      data.value = res
    })
}

/**
 * @description table操作栏的回调，临时使用
 * @param {*} v 要打印的值
 * @return {*}
 */
let log = (v) => {
  console.log(v)
}

fetchDepartment()
let tableData = [
  {
    date: '2016-05-03',
    name: 'Tom1',
    address: '人工智能小镇',
  },
  {
    date: '2016-05-03',
    name: 'Tom2',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom3',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom4',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom5',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom6',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom7',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom8',
    address: 'No. 189, Grove St, Los Angeles',
  }, {
    date: '2016-05-07',
    name: 'Tom9',
    address: 'No. 189, Grove St, Los Angeles',
  }, {
    date: '2016-05-07',
    name: 'Tom10',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
// 过滤后的数组
let tableFilterData = ref([])
// 侦听当前页码，通过计算页码*页面条目数，过滤数组
watchEffect(() => {
  console.log(currentPage.value)
  tableFilterData.value = tableData.slice(
    (currentPage.value - 1) * pageSize.value,
    currentPage.value * pageSize.value)

})
// 新增 对话框是否可见
let addDialogVisible = ref(false)

function add() {
  addDialogVisible.value = true
  
}
</script>

<template>
  <div class="view">
    <!-- 左侧树形结构 -->
    <Tree :data="data"></Tree>
    <!-- 右侧数据区域 -->
    <div class="right">
      <!-- 数据筛选功能  -->
      <SearchBox></SearchBox>
      <!-- 数据展示区域 -->
      <div class="content">
        <div class="button-group">
          <el-button type="primary" icon="Plus" @click="add">新增</el-button>
          <el-button type="success" icon="Edit">修改</el-button>
          <el-button type="danger" icon="SemiSelect">删除</el-button>
          <el-button type="warning" icon="Download">导出</el-button>
        </div>
        <div class="container">
          <div class="table">
            <el-table v-if="1 == 1" :data="tableFilterData" max-height="470px" @selection-change="">
              <el-table-column fixed="left" type="selection" width="55" />
              <el-table-column label="日期" width="120">
                <template #default="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column property="name" label="客户姓名" width="80" />
              <el-table-column property="address" label="地址" width="120" show-overflow-tooltip />
              <el-table-column property="cost" label="剩余费用" width="80" />
              <el-table-column property="state" label="状态" width="80" />
              <el-table-column property="state" label="状态" width="80" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column label="操作" fixed="right" width="150">
                <template #default="scope">
                  <el-button size="small" @click="log('编辑')">编辑</el-button>
                  <el-button size="small" @click="log('删除')">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 分页组件 -->
          <div class="demo-pagination-block">
            <div class="demonstration">数据总数</div>
            <el-pagination layout="total, prev, pager, next, jumper" :page-size="pageSize" :total="tableData.length"
              v-model:currentPage="currentPage" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.view {
  display: flex;

  .right {
    flex-grow: 1;
    flex-basis: auto;
    overflow: auto;
    font-size: 14px;

    .content {
      padding: 10px;
      border-radius: 5px;
      background-color: #fff;

      .container {
        display: flex;
        flex-direction: column;

        .table {
          width: 100%;
        }
      }
    }
  }
}

.shadow-b {
  box-shadow: 2px 2px 3px #A8ABB2;
}

.w-50 {
  width: 180px;
}
</style>
