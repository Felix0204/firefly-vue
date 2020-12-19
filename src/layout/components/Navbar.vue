<template>
  <!-- 导航 -->
  <nav class="ui inverted attached segment padded-tb-mini f-shadow-small">
    <div class="ui container">
      <!-- 管理员导航 -->
      <div v-if="role=='admin'" class="ui inverted secondary stackable menu">
        <h2 class="ui teal header item">管理后台</h2>
        <a @click="handleClick('blogMgt')" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='blogMgt'}"><i class="home icon"></i>博客</a>
        <a @click="handleClick('typesMgt')" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='typesMgt'}"><i class="idea icon"></i>分类</a>
        <a @click="handleClick('tagsMgt')" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='tagsMgt'}"><i class="tags icon"></i>标签</a>
        <div class="right menu" :class="{mobileHide:isShow==1}">
        <!-- <sui-dropdown text="File">
          <sui-dropdown-menu>
            <sui-dropdown-item>Download as...</sui-dropdown-item>
          </sui-dropdown-menu>
        </sui-dropdown> -->
          <div class="ui dropdown item">
            <div class="text">
              <img src="https://unsplash.it/100/100?image=1005" alt="" class="ui avatar image">
              Felix
            </div>
            <i class="dropdown icon"></i>
            <div class="menu">
              <a href="#" class="item">注销</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 游客导航 -->
      <div v-else class="ui inverted secondary stackable menu">
        <h2 class="ui teal header item">Blog</h2>
        <a @click="handleClick('home')" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='home'}"><i class="home icon"></i>首页</a>
        <a @click="handleClick('types')" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='types'}"><i class="idea icon"></i>分类</a>
        <a @click="handleClick('tags')" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='tags'}"><i class="tags icon"></i>标签</a>
        <a @click="handleClick('archives')" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='archives'}"><i class="clone icon"></i>归档</a>
        <a @click="handleClick('about')" class="f-item item" :class="{mobileHide:isShow==1, active:activeTag=='about'}"><i class="info icon"></i>关于我</a>
        <div class="f-item item right" :class="{mobileHide:isShow==1}">
          <div class="ui icon inverted transparent input">
            <input type="text" placeholder="Search......">
            <i class="search link icon"></i>
          </div>
        </div>
      </div>
    </div>
    <a @click="toggle" class="ui menu black icon button f-right-top f-mobile-show">
      <i class="sidebar icon"></i>
    </a>
  </nav>
</template>

<script>
// import $ from 'jquery'
import { mapGetters } from 'vuex'
// $('.ui.dropdown').dropdown({
//   on: 'hover'
// })
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
    ...mapGetters([
      'role'
    ])
  },
  created () {
    if (this.role === 'admin') {
      this.activeTag = 'blogMgt'
      this.$router.push('/blogMgt')
    } else {
      this.activeTag = 'home'
      this.$router.push('/index')
    }
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
        case 'blogMgt':
          this.activeTag = tagName
          this.$router.push('/blogMgt')
          break
        case 'typesMgt':
          this.activeTag = tagName
          this.$router.push('/typesMgt')
          break
        case 'tagsMgt':
          this.activeTag = tagName
          this.$router.push('/tagsMgt')
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
