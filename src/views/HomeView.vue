<template>
  <div class="content bg">
<!--  全屏容器  -->
    <dv-full-screen-container>
<!--   第一行   -->
      <ModuleTitle/>
      <!--   第二行     -->
      <ModuleMain/>
      <!--   第三行     -->
      <ModuleThird />

    </dv-full-screen-container>
  </div>
</template>

<script>
import ModuleTitle from '@/views/moduleTitle' // 第一行
import ModuleThird from '@/views/moduleThird' // 第二行
import ModuleMain from '@/views/moduleMain' // 第三行
export default {
  components: { ModuleTitle, ModuleThird, ModuleMain },
  name: 'HomeView',
  data () {
    return {

    }
  }
}
</script>
