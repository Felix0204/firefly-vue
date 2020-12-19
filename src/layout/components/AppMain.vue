<template>
<section class="app-main">
  <transition name="fade" mode="out-in">
    <router-view :key="key"/>
  </transition>
</section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  min-height: calc(100vh - 300px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
