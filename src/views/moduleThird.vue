<template>
  <div class="module-box">
    <div style="flex: 0 1 50%">
      <dv-border-box-8 style="width: 100%;height: 300px">
        <div class="left-one">
          <div class="contentTitle">车间产线耗电统计</div>
        </div>
        <LineChart :typeChart="'line'"/>
      </dv-border-box-8>
    </div>
    <div style="flex: 0 1 25%">
      <dv-border-box-13 style="width: 100%;height: 300px">
        <div class="left-one">
          <div class="contentTitle">动态环图</div>
        </div>
        <ringChart style="margin-top: -35px"/>
      </dv-border-box-13>
    </div>
    <div style="flex: 0 1 25%">
      <dv-border-box-8>
        <div class="left-one">
          <div class="contentTitle">胶囊柱图</div>
          <dv-decoration-6 style="width:100px;height:10px;" />
        </div>
        <capsuleChart style="height: 250px;margin-left: 10px" :dataChart="dataChart"/>
      </dv-border-box-8>
    </div>
  </div>
</template>

<script>
import LineChart from '@/views/lineChart'
import capsuleChart from '@/views/capsuleChart'
import ringChart from '@/views/ringChart'
export default {
  components: { capsuleChart, LineChart, ringChart },
  name: 'moduleMain',

  data () {
    return {
      dataChart: [
        { name: '物料101', value: 100 },
        { name: '物料701', value: 200 },
        { name: '物料501', value: 101 },
        { name: '物料306', value: 120 },
        { name: '物料401', value: 167 }
      ]
    }
  }
}
</script>

<style scoped>

</style>
