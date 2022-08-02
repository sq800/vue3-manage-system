<script setup>
import { reactive, ref } from 'vue';
import IconText from "../components/IconText.vue";
import Tree from '../components/DepartmentTree.vue';
let data=ref([])
fetch("../src/assets/department.json")
.then(res=>res.json())
.then(res=>{
  data.value=res
 
})
 console.log(data)
const dataq = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
let currentPage = ref(1)
const defaultProps = {
  children: 'children',
  label: 'label',
}
function handleBtn(){
  let flag= true
  let tree=document.querySelector(".tree-main")
  tree.style.width="0px"
}
let log = (v) => {
  console.log(v)
}
let searchObj = reactive({})
const value = ref('')
let options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  }]
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
      <div class="search shadow-b">
        <span>
          登录名称：
          <el-input class="w-50" v-model="searchObj.name" placeholder="" clearable />
        </span>
        <span>
          手机号：
          <el-input class="w-50" v-model="searchObj.phone" placeholder="" clearable />
        </span>
        <span>
          <span>用户状态：</span>
          <el-select v-model="searchObj.status" clearable placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </span>
        <span>
          <span>创建时间：</span>
          <el-date-picker class="w-50" v-model="searchObj.value1" type="date" placeholder="Pick a day" />
          <span>-</span>
          <el-date-picker class="w-50" v-model="searchObj.value2" type="date" placeholder="Pick a day" />

        </span>
        <span>
          <el-button type="primary" icon="Search">搜索</el-button>
        </span>
      </div>
      <!-- 数据展示区域 -->
      <div class="content shadow-b">
        <div class="button-group">
          <el-button type="primary" icon="Plus" size="small">新增</el-button>
          <el-button type="success" icon="Edit" size="small" color="">修改</el-button>
          <el-button type="danger" icon="SemiSelect" size="small">删除</el-button>
          <el-button type="warning" icon="Download" size="small">导出</el-button>
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
            <el-pagination 
              layout="total, prev, pager, next" :total="1000"  />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.view {
  display: flex;

  // background-color: rgb(243, 202, 202);
  .tree {
    /* 指定树形结构初始宽度 */
    flex-basis: 200px;
    margin-right: 5px;
    position: relative;
    .tree-main {
      width: 200px;
    }

    .btn {
      background-color: #7397eb;
      position: absolute;
      top: 200px;
      right: -10px;
      cursor: pointer;
      user-select: none;
    }
  }

  .right {
    flex-grow: 1;
    flex-basis: auto;
    overflow: auto;
    width: calc(100vw-100px);
    font-size: 14px;
    flex-direction: column;
    display: flex;

    .search {
      background-color: #fff;
      margin-bottom: 15px;
      padding: 10px;
      border-radius: 5px;
      display: flex;
      flex-wrap: wrap;
    }

    .content {
      padding: 10px;
      background-color: #fff;
      border-radius: 5px;
      flex-grow: 1;

      // height: 100px;
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

.fff {
  font-weight: bold;
  // color: rgb(0, 0, 0);
}
</style>
