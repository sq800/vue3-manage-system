<script setup>

import IconText from "../components/IconText.vue"
</script>
<template>
  <div id="container">
    <div>
      <h3>
        <IconText icon="DataAnalysis" text="数据统计"></IconText>
      </h3>
    </div>
    <div>
      <h3>
        <IconText icon="User" text="区域用户信息"></IconText>
      </h3>
    </div>
    <div>
      <h3>
        <IconText icon="Postcard" text="表计类型"></IconText>
      </h3>
    </div>
    <div id="deviceUpdate">
      <h3>
        <IconText icon="DataLine" text="设备数据上报量"></IconText>
      </h3>
    </div>
  </div>

</template>

<style>
#container {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  align-content: flex-start;
  flex-wrap: wrap;
}

#container>div {
  height: 300px;
  width: 300px;
  /* background-color: pink; */
  border: 1px solid #dbdbdb;
  margin: 20px 15px;
}
#container>div:nth-child(1){
  width: 38%;
}#container>div:nth-child(2){
  width: 26%;
}#container>div:nth-child(3){
  width: 26%;
}#container>div:nth-child(4){
  width: 95%;
  height: 400px;
}

#container>div>h3 {
  font-weight: normal;
  color: #1989fa;
  line-height: 32px;
  width: 100%;
  height: 32px;
  font-size: 20px;
  background-image: linear-gradient(#fff, #eee)
}


</style>
