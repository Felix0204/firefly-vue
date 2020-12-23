<template>
  <div id="app">
    <vue-particles
      color="#FFFF00"
      :particleOpacity="1"
      :particlesNumber="256"
      shapeType="star"
      :particleSize="5"
      linesColor="#fff"
      :linesWidth="2"
      :lineLinked="false"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
      class="cash">
    </vue-particles>
    <portal-target name="semantic-ui-vue"></portal-target>
    <transition name="fade" mode="out-in">
      <router-view v-if="isRouterAlive"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  created () {
<<<<<<< HEAD
=======

>>>>>>> 9431a47c58c007b3f195c7391da4ed1bf1125ecb
  },
  watch: {},

  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}

</script>

<style>
<<<<<<< HEAD
=======
body{
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  /* overflow-y: hidden; */
  overflow-x: hidden;
  padding: 0;
  margin: 0;

}
>>>>>>> 9431a47c58c007b3f195c7391da4ed1bf1125ecb
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.el-dialog .el-dialog__body {
  padding-top: 0px;
}
.cash {
  position:fixed;
  top:0;
  width:100%;
<<<<<<< HEAD
=======
  /* z-index: 9999; */
>>>>>>> 9431a47c58c007b3f195c7391da4ed1bf1125ecb
}
</style>
