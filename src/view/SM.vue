<script setup>
import { reactive, ref } from 'vue';
import IconText from "../components/IconText.vue";
const data = [
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

const defaultProps = {
  children: 'children',
  label: 'label',
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
  <div class="flex">
    <div class="tree">
      <div class="fff">组织机构</div>
      <el-tree :data="data" :props="defaultProps" :default-expand-all="true" :expand-on-click-node="false" />
    </div>
    <div class="right flex">

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
          用户状态：
          <el-select v-model="searchObj.status" clearable placeholder="Select">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </span>
        <span>
          <span>创建时间：</span>
          <el-date-picker class="w-50" v-model="searchObj.value1" type="date" placeholder="Pick a day" :size="size" />
          <span>-</span>
          <el-date-picker class="w-50" v-model="searchObj.value2" type="date" placeholder="Pick a day" :size="size" />

        </span>
        <span>
          <el-button type="primary" icon="Search">搜索</el-button>
        </span>
      </div>
      <div class="content shadow-b">

        <el-button type="primary" icon="Plus" size="normal">新增</el-button>
        <el-button type="success" icon="Edit" size="small" color="">修改</el-button>
        <el-button type="danger" icon="SemiSelect" size="small">删除</el-button>
        <el-button type="warning" icon="Download" size="small">导出</el-button>

        <el-table  ref="multipleTableRef" :data="tableData" style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column :sortable="true" type="selection" width="55" />
          <el-table-column :sortable="true" label="Date" width="120">
            <template #default="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column :sortable="true" property="name" label="Name" width="120" />
          <el-table-column :sortable="true" property="address" label="Address" show-overflow-tooltip />
        </el-table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-blue {
  width: 100px;
  height: 40px;
  color: #ffffff;
  background-color: #4485f5;
  font-weight: 700;
  font-size: large;
  /* background-color: aqua; */
}

.flex {
  display: flex;
}

.tree {
  flex-basis: 200px;
  margin-right: 15px;
}

.right {
  flex-grow: 1;
  font-size: 14px;
  flex-direction: column;
}

.search {
  background-color: #fff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
}

.shadow-b {
  box-shadow: 2px 2px 3px #A8ABB2;
}

.content {
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  flex-grow: 1;
  margin-bottom: 15px;
}

.w-50 {
  width: 180px;
}

.fff {
  font-weight: bold;
  color: #fff;
}
</style>
