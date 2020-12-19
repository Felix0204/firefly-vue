<template>
  <div class="app-wrapper">
    <Navbar/>
    <AppMain/>
    <Footer/>
  </div>
</template>

<script>
import { AppMain, Navbar, Footer } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Footer
  },
  data () {
    return {
      isRouterAlive: true
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
