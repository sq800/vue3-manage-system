<!--
 * @FilePath     : SM.vue
 * @Description  : 员工管理页面
 * @Author       : sq800
 * @Date         : 2022/08/02
 * @LastEditors  : sq800
 * @LastEditTime : 2022/08/03
 * @Copyright (c) 2022 by XCWL, All Rights Reserved. 
 -->
<script setup>
import { reactive, ref, watch, watchEffect } from 'vue';
import Tree from '../components/DepartmentTree.vue';
import SearchBox from '../components/SearchBox.vue';

let data = ref([])
let width = () => document.querySelector('body').offsetWidth
watch(width, (newV, old) => {
  console.log(`old is ${old},new is ${newV}`)
})
/*******************************************************************************
 * @description  : 获取部门数据   
 *******************************************************************************/
function fetchDepartment() {
  fetch("../src/assets/department.json")
    .then(res => res.json())
    .then(res => {
      data.value = res
    })
}

let log = (v) => {
  console.log(v)
}

fetchDepartment()
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
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
          <el-button type="primary" icon="Plus" >新增</el-button>
          <el-button type="success" icon="Edit"  color="">修改</el-button>
          <el-button type="danger" icon="SemiSelect" >删除</el-button>
          <el-button type="warning" icon="Download">导出</el-button>
        </div>
        <div class="container">
          <div class="table">
            <el-table v-if="1 == 1" :data="tableData" max-height="300px" style="width: 100%;" @selection-change=""
              border>
              <el-table-column fixed="left" type="selection" width="55" />
              <el-table-column label="日期" width="120">
                <template #default="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column property="name" label="客户姓名" width="120" />
              <el-table-column property="address" label="地址" width="120" show-overflow-tooltip />
              <el-table-column property="cost" label="剩余费用" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column property="state" label="状态" width="120" />
              <el-table-column label="操作" fixed="right" width="120">
                <template #default="scope">
                  <el-button size="small" @click="log('编辑')">编辑</el-button>
                  <el-button size="small" @click="log('删除')">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 分页组件 -->
          <div class="demo-pagination-block">
            <div class="demonstration">Total item count</div>
            <el-pagination layout="total, prev, pager, next" :total="1000" />
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
    // flex-direction: column;
    // display: flex;
    .content {
      padding: 10px;
      border-radius: 5px;
      background-color: #fff;
      // flex-grow: 1;
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
