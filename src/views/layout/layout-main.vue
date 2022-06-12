<template>
  <div class="wrap-container" :style="isCollapse ?'width:calc(100vw - 60px)':'width:calc(100vw - 200px)'">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  }

}
</script>

<style lang='less' scoped>
.wrap-container {
  // width: calc(100vw - 200px);
  padding: 20px 20px 0 20px;
}
</style>
