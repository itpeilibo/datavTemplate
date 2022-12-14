<template>
  <dv-water-level-pond :config="config3" style="width:100%;height:200px" />
</template>

<script>
export default {
  name: 'waterLevelChart',
  props: {
    waterLeveColors: {
      type: Array,
      default: () => []
    },
    waterLeveData: {
      type: Array,
      default: () => [66, 45]
    }
  },
  data () {
    return {
      config3: {
        data: this.waterLeveData,
        shape: 'roundRect',
        colors: this.waterLeveColors,
        waveOpacity: 0.2
      }
    }
  }
}
</script>

<style scoped>

</style>
