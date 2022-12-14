<template>
<!-- 胶囊柱图 -->
  <dv-capsule-chart :config="config1" style="width:96%;height:150px;margin: 0 auto" />
</template>

<script>
export default {
  name: 'capsuleChart',
  props: {
    colorsChart: {
      type: Array,
      default: () => []
    },
    dataChart: {
      type: Array,
      default: () => [
        {
          name: '南阳',
          value: 167
        },
        {
          name: '周口',
          value: 123
        },
        {
          name: '漯河',
          value: 98
        },
        {
          name: '郑州',
          value: 75
        },
        {
          name: '西峡',
          value: 66
        }
      ]
    }
  },
  data () {
    return {
      config1: {
        data: this.dataChart,
        colors: this.colorsChart,
        unit: '单位',
        showValue: true
      }
    }
  }
}
</script>

<style scoped>

</style>
