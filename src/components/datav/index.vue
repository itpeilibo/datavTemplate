<template>
  <div id="data-view">
    <dv-full-screen-container>
      <topHeader/>

      <div class="main-content">

      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import topHeader from '@/components/datav/topHeader'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'indexs',
  components: { topHeader }
}
</script>

<style scoped lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;
  box-shadow: 0 0 3px blue;
}
#dv-full-screen-container {
  background-image: url("@/components/datav/img/bg.png");
  background-size: 100% 100%;

}
</style>
