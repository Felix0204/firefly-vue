<template>
  <!-- 导航 -->
  <nav class="ui inverted attached segment padded-tb-mini f-shadow-small">
    <div class="ui container">
      <div class="ui inverted secondary stackable menu">
        <h2 class="ui teal header item">Blog</h2>
        <a @click="handleClick('home')" href="#" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='home'}"><i class="home icon"></i>首页</a>
        <a @click="handleClick('types')" href="#" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='types'}"><i class="idea icon"></i>分类</a>
        <a @click="handleClick('tags')" href="#" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='tags'}"><i class="tags icon"></i>标签</a>
        <a @click="handleClick('archives')" href="#" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='archives'}"><i class="clone icon"></i>归档</a>
        <a @click="handleClick('about')" href="#" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='about'}"><i class="info icon"></i>关于我</a>
        <div class="f-item item right" :class="{mobileHide:isShow==1}">
          <div class="ui icon inverted transparent input">
            <input type="text" placeholder="Search......">
            <i class="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
    <a @click="toggle" href="#" class="ui menu black icon button f-right-top f-mobile-show">
      <i class="sidebar icon"></i>
    </a>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      isShow: 1,
      activeTag: 'home'
    }
  },
  components: {
  },
  computed: {
  },
  created () {

  },

  methods: {
    toggle () {
      if (this.isShow === 0) {
        this.isShow = 1
      } else {
        this.isShow = 0
      }
    },
    handleClick (tagName) {
      switch (tagName) {
        case 'home':
          this.activeTag = tagName
          this.$router.push('/index')
          break
        case 'types':
          this.activeTag = tagName
          this.$router.push('/types/111')
          break
        case 'tags':
          this.activeTag = tagName
          this.$router.push('/tags/111')
          break
        case 'archives':
          this.activeTag = tagName
          this.$router.push('/archives')
          break
        case 'about':
          this.activeTag = tagName
          this.$router.push('/about')
          break
        default:
          this.$router.push('/error')
          break
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #34bdff;
  transition: opacity .3s;
}

.left-menu {
  float: left;
  height: 100%;
  line-height: 60px;
}

.right-menu {
  float: right;
  height: 100%;
  line-height: 60px;
}
</style>
