<template>
  <div id="top-header">
    <dv-decoration-8 style="width:300px;height:50px;" />
    <dv-decoration-5 style="width:300px;height:40px;" />
    <dv-decoration-8 style="width:300px;height:50px;" />
    <div>施工养护综合数据</div>
  </div>
</template>

<script>
export default {
  name: 'topHeader.vue'
}
</script>

<style scoped lang="less">

#top-header {
  //width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
}
</style>
