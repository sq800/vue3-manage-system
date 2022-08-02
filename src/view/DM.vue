<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <!-- 数据筛选功能  -->
        <div class="search">
          <span>
            <span>登录名称：</span>
            <el-input class="w-100" v-model="searchObj.name" placeholder="" clearable />
          </span>
          <span>
            <span>手机号：</span>
            <el-input class="w-100" v-model="searchObj.phone" placeholder="" clearable />
          </span>
          <span>
            <span>用户状态：</span>
            <el-select v-model="searchObj.status" clearable placeholder="Select" class="w-100">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </span>
          <span>
            <span>创建时间：</span>
            <el-date-picker class="w-100" v-model="searchObj.value1" type="date" placeholder="选择一天" />
            <span>-</span>
            <el-date-picker class="w-100" v-model="searchObj.value2" type="date" placeholder="选择一天" />

          </span>
          <span>
            <el-button type="primary" icon="Search">搜索</el-button>
          </span>
        </div>
      </el-header>
      <el-main>
        <div class="button-group">
          <el-button type="primary" icon="Plus" size="small">新增</el-button>
          <el-button type="success" icon="Edit" size="small" color="">修改</el-button>
          <el-button type="danger" icon="SemiSelect" size="small">删除</el-button>
          <el-button type="warning" icon="Download" size="small">导出</el-button>
        </div>
        <PM></PM>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import PM from './PM.vue';
let searchObj = reactive({})

</script>

<style scoped lang="less">
* {
  font-size: 14px;
}

.header {
  height: fit-content;
}

.search {
  background-color: #fff;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;

  span {
    margin: 1px;

    span {
      width: 100px;

    }

    .input {
      width: 160px;
    }
  }
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

.w-100 {
  width: 150px;
}
</style>
