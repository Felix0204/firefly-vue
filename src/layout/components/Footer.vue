<template>
  <!-- 底部 -->
  <footer class="ui inverted vertical segment padded-tb-massive">
    <div class="ui center aligned container">
      <div class="ui inverted divided stackable grid">
        <div class="three wide column">
            <div class="ui inverted link list">
              <div class="item">
                <img :src="require('@/assets/images/wechat.jpg')" class="ui rounded image" alt="" style="width:100px;">
              </div>
            </div>
        </div>
        <div class="three wide column">
            <h4 class="ui inverted header text-thin text-spaced">最新博客</h4>
            <div class="ui inverted link list">
              <a href="#" class="item text-thin text-space">用户故事</a>
              <a href="#" class="item text-thin text-space">用户故事</a>
              <a href="#" class="item text-thin text-space">用户故事</a>
            </div>
        </div>
        <div class="three wide column">
            <h4 class="ui inverted header text-thin text-spaced">联系我</h4>
            <div class="ui inverted link list">
              <a href="#" class="item text-thin text-space">QQ: 1663170148</a>
              <a href="#" class="item text-thin text-space">Email: lewisleo0204@gmail.com</a>
              <a href="#" class="item text-thin text-space">电话：16600282293</a>
            </div>
        </div>
        <div class="seven wide column">
            <h4 class="ui inverted header text-thin text-spaced">Blog</h4>
            <div class="ui inverted link list">
              <p class="text-thin text-spaced opacity-mini">这是我的个人博客，会分享自己关于编程，生活的思考和理解;相遇即是缘分，欢迎感兴趣的道友一同交流分享自己关于任何事物的思考;感谢小伙伴的支持和鼓励，让你我共同努力，一起让生活变得更加美好</p>
            </div>
        </div>
      </div>
      <div class="ui inverted section divider"></div>
      <p class="text-thin text-spaced opacity-tiny">Copyright © 2020 - 2021 Felix Designed by Felix</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">

</style>
