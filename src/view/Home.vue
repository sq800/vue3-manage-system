<script setup>
import IconText from "../components/IconText.vue"
import { onMounted } from "vue";
import * as echarts from 'echarts'
function chart1() {
  var chartDom = document.getElementById('statistics');
  window.onresize = function () {
    myChart.resize()
  }
  console.log(chartDom);
  var myChart = echarts.init(chartDom);
  var option;

  fetch('../../public/life-expectancy-table.json')
    .then((res) => {
      return res
    }).then((res) => {
      console.log(res);
    })
  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      type: 'scroll',
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };
  option && myChart.setOption(option);

}
onMounted(() => {
  chart1()
})
</script>
<template>
  <div id="container">
    <div>
      <h3>
        <IconText icon="DataAnalysis" text="数据统计"></IconText>
      </h3>
      <!-- 统计图表 -->
      <div id="statistics"></div>
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
  height: 268px;
  /* width: 300px; */
  /* background-color: pink; */
  border: 1px solid #dbdbdb;
  margin: 20px 15px;
}

#container>div:nth-child(1) {
  width: 38%;
}

#container>div:nth-child(2) {
  width: 26%;
}

#container>div:nth-child(3) {
  width: 26%;
}

#container>div:nth-child(4) {
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

#statistics {
  /* background-color: #f79292; */
  width: 100%;
  height: 268px;
}
</style>
