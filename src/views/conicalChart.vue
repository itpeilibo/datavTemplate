<template>
  <dv-conical-column-chart :config="config" style="width:100%;height:200px;" />
</template>

<script>
export default {
  name: 'conicalChart',
  data () {
    return {
      config: {
        data: [
          {
            name: '周口',
            value: 55
          },
          {
            name: '南阳',
            value: 120
          },
          {
            name: '西峡',
            value: 71
          },
          {
            name: '驻马店',
            value: 66
          },
          {
            name: '新乡',
            value: 80
          },
          {
            name: '信阳',
            value: 35
          },
          {
            name: '漯河',
            value: 15
          }
        ],
        img: [
          require('@/assets/img/1st.png'),
          require('@/assets/img/2st.png'),
          require('@/assets/img/3st.png'),
          require('@/assets/img/4st.png'),
          require('@/assets/img/5st.png')
        ],
        showValue: true
      }
    }
  }
}
</script>

<style scoped>

</style>
