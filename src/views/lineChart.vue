<template>
  <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
  <div ref="chart" style="width: 100%;height:300px;"></div>
</template>

<script>
import * as echarts from 'echarts/core'
export default {
  name: 'lineChart',
  props: {
    typeChart: {
      type: String,
      default: 'line'
    },
    legendData: {
      type: Array,
      default: () => ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    }
  },
  data () {
    return {
      lists: [] // 图表的数据
    }
  },
  mounted () {
    this.initChart() // 绘制图表
    // this.initWebsocket()
  },
  methods: {
    initChart () {
      const myChart = echarts.init(this.$refs.chart)

      // 指定图表的配置项和数据
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          bottom: '18%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: 'Email',
            type: this.typeChart,
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: this.typeChart,
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: this.typeChart,
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Direct',
            type: this.typeChart,
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Search Engine',
            type: this.typeChart,
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
    // initWebsocket () {
    // // 客户端与服务端连接
    //   const ws = new WebSocket('ws://127.0.0.1:8090')
    //   // 成功回调
    //   ws.onopen = function () {
    //     alert('WebSocket连接成功')
    //   }
    //   // 错误回调
    //   ws.onerror = function () {
    //     alert('WebSocket连接发生错误')
    //   }
    //   // 接收消息
    //   ws.onmessage = msg => {
    //     const res = JSON.parse(msg.data)
    //     this.lists = res.message
    //   }
    // }
  }
}
</script>

<style scoped>

</style>
