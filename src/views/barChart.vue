<template>
  <div ref="chart" style="width: 100%;height:300px;"></div>
</template>

<script>
import * as echarts from 'echarts/core'
export default {
  name: 'barChart',
  props: {
    legendData: {
      type: Array,
      default: () => ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    this.initBar()
  },
  methods: {
    initBar () {
      const myChart = echarts.init(this.$refs.chart)
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '10%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.legendData,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      }

      option && myChart.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>
