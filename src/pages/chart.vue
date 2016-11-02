<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">图表组件展示</span>
      </div>
      <div style="text-align: center">
      <chart :options="polar"  ref="polar"></chart>
      <chart :options="bar"  ref="bar" @chartclick="barclick"></chart>
      </div>
    </el-card>

  </div>
</template>
<script type="text/ecmascript-6">
  import ECharts from 'vue2-echarts/src/ECharts/ECharts.vue'
  import Vue from 'vue'
  Vue.component('chart', ECharts);
  let asyncData = {
    categories: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
    data: [5, 20, 36, 10, 10, 20]
  }
  export default {
    data() {
      let data = []
      for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
      }
      return {
        polar: {
          title: {
            text: '极坐标双数值轴'
          },
          legend: {
            data: ['line']
          },
          polar: {
            center: ['50%', '54%']
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          angleAxis: {
            type: 'value',
            startAngle: 0
          },
          radiusAxis: {
            min: 0
          },
          series: [
            {
              coordinateSystem: 'polar',
              name: 'line',
              type: 'line',
              showSymbol: false,
              data: data
            }
          ],
          animationDuration: 2000
        },
        bar: {
          title: {
            text: '异步数据加载示例'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            data: []
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: []
          }]
        }
      }
    },
    methods: {
      barclick(data){
        console.log(data);
      }
    },
    mounted() {
      // simulating async data from server
      this.$refs.bar.showLoading();
      setTimeout(() => {
        this.$refs.bar.mergeOptions({
        xAxis: {
          data: asyncData.categories
        },
        series: [{
          name: '销量',
          data: asyncData.data
        }]
      })
      this.$refs.bar.hideLoading()
    }, 3000)

    },
    destroy: function () {
    }
  }
</script>
