<template>
  <div class="module-box">
    <div style="flex: 0 1 30%">
      <dv-decoration-10 style="height:5px;" />
    </div>
    <div style="flex: 0 1 40%">
      <div class="d-flex">
        <!--     三等份       -->
        <dv-decoration-8 style="height:50px; flex: 1" />
        <div style="flex: 1" class="tc box-middle">
          <dv-decoration-11 style="height:60px;">智慧工厂数据中心</dv-decoration-11>
        </div>
        <dv-decoration-8 :reverse="true" style="height:50px;flex: 1" />
      </div>
    </div>
    <div style="flex: 0 1 30%">
      <dv-decoration-10 style="height:5px; transform:rotateY(180deg);" />

    </div>
  </div>
</template>

<script>
export default {
  name: 'moduleTitle'
}
</script>

<style scoped>

</style>
