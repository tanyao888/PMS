<template>
  <div class="layout-container">
    <div class="layout-header">
      <layout-header />
    </div>
    <div class="layout-main">
      <layout-aside :isCollapse="isCollapse" />
      <layout-main />
    </div>
  </div>
</template>

<script>
import layoutHeader from './layout-header.vue'
import layoutAside from './layout-aside.vue'
import layoutMain from './layout-main.vue'
export default {
  components: {
    layoutHeader,
    layoutAside,
    layoutMain
  },
  data () {
    return {
      isCollapse: false
    }
  }
}
</script>

<style lang='less' scoped>
.layout-main {
  display: flex;
}
</style>
