
<template>
  <div class="module-box">
    <!--   左     -->
    <div style="flex: 0 1 25%">
      <dv-border-box-13 style="width: 100%;height: 200px">
<!--   左一     -->
        <div class="left-one">
          <div class="contentTitle">设备能耗检测</div>
          <dv-decoration-3 style="width:100px;height:15px" />
        </div>
        <barChart style="height: 125px;flex: 1" :legendData="legendData"/>

      </dv-border-box-13>
      <dv-border-box-1 style="width: 100%;height: 200px">
<!--胶囊图-->
        <div class="left-one">
          <div class="contentTitle">仓库库存量</div>
          <dv-decoration-6 style="width:100px;height:10px;" />
        </div>
        <capsuleChart style="height: 130px;margin-left: 10px" :dataChart="dataChart" :colorsChart="['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff']"/>
      </dv-border-box-1>
<!--  水位    -->
      <dv-border-box2 style="width: 100%;height: 200px">
        <div class="left-one">
          <div class="contentTitle">设备运转负荷本</div>
        </div>
        <waterLevelChart style="width: 92%;height: 130px;margin: auto" :waterLeveData="waterLeveData" :waterLeveColors="['#f60', 'green']"/>
      </dv-border-box2>
    </div>
    <!--   中    -->
    <div style="flex: 0 1 50%;padding: 7px">
      <dv-border-box-10>
        <div class="d-flex " >
          <dv-border-box-9 v-for="item in titleDatas" :key="item.name" style="height: 90px;width:210px;margin: 0 auto;margin: 15px">
            <div class="contentText">
              <div class="left-tow">{{item.name}}</div>
              <div class="textCore">{{item.val}}</div>
              <div class="textCore">{{item.tac}}</div>
            </div>
          </dv-border-box-9>
        </div>
        <div style="width: 100%;height: 400px;">
          <div class="left-one">
            <div class="contentTitle">设备数据统计</div>
          </div>
          <flylineChart style="width:95%;margin: 0 auto;"/>
        </div>
      </dv-border-box-10>

    </div>
    <!--   右     -->
    <div style="flex: 0 1 25%">
      <dv-border-box-1 style="width: 100%;height: 200px">
        <!--胶囊图-->
        <div class="left-one">
          <div class="contentTitle">销售额时间轴</div>
          <dv-decoration-6 style="width:100px;height:10px;" />
        </div>
        <conicalChart style="height: 130px;margin-left: 10px" :dataChart="dataChart" :colorsChart="['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff']"/>
      </dv-border-box-1>
      <dv-border-box-8 style="width: 100%;height: 400px;">
        <div class="left-one">
          <div class="contentTitle">车间设备能耗排行</div>
          <dv-decoration-3 style="width:100px;height:10px;" />
        </div>
        <scrollChart style="width: 90%;margin: 0 auto"/>
      </dv-border-box-8>
    </div>
  </div>
</template>

<script>
import capsuleChart from '@/views/capsuleChart' // 胶囊柱图
import waterLevelChart from '@/views/waterLevelChart' // 水位图
import barChart from '@/views/barChart' // 柱状图
import flylineChart from '@/views/flylineChart'
import conicalChart from '@/views/conicalChart'
import ScrollChart from '@/views/scrollChart'
export default {
  components: { ScrollChart, capsuleChart, waterLevelChart, barChart, flylineChart, conicalChart },
  name: 'moduleThird',
  data () {
    return {
      waterLeveData: [66, 45],
      dataChart: [
        { name: '物料101', value: 100 },
        { name: '物料701', value: 200 },
        { name: '物料501', value: 100 },
        { name: '物料306', value: 120 },
        { name: '物料401', value: 167 }
      ],
      legendData: ['空孔机', '起重机', '电焊机', '水泵', '圆矩锯', '对焊机'],
      titleDatas: [
        { name: '设备管理', val: '100%', tac: '100%' },
        { name: '生产管理', val: '100%', tac: '100%' },
        { name: '物流管理', val: '100%', tac: '100%' },
        { name: '人员管理', val: '100%', tac: '100%' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
