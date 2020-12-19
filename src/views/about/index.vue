<template>
  <div class="f-container-small padded-tb-5">
    <div class="ui container">
      <div class="ui stackable grid">
        <div class="eleven wide column">
          <img src="https://source.unsplash.com/user/erondu/1600x900" alt="" class="ui rounded image">
        </div>
        <div class="five wide column">
          <div class="ui top attached segment">
            <p>阅读外国文学时，正文结束后我们通常会看到译者的译后记，部分欧美作家会附上带有感谢性质的后记。而这篇后记不同，它很纯粹，专注于作品本身，并无客套之词。它出自社会派推理作家松本清张之手。 文：松本清张 ...</p>
          </div>
          <div class="ui attached segment">
            <div class="ui orange basic left pointing label mini margin-tb-tiny">编程</div>
            <div class="ui orange basic left pointing label mini margin-tb-tiny">编程</div>
            <div class="ui orange basic left pointing label mini margin-tb-tiny">编程</div>
            <div class="ui orange basic left pointing label mini margin-tb-tiny">编程</div>
            <div class="ui orange basic left pointing label mini margin-tb-tiny">编程</div>
          </div>
          <div class="ui attached segment">
            <div class="ui teal basic left pointing label mini margin-tb-tiny">Java</div>
            <div class="ui teal basic left pointing label mini margin-tb-tiny">Python</div>
            <div class="ui teal basic left pointing label mini margin-tb-tiny">Vue</div>
            <div class="ui teal basic left pointing label mini margin-tb-tiny">ML</div>
            <div class="ui teal basic left pointing label mini margin-tb-tiny">Angular</div>
          </div>
          <div class="ui bottom attached segment">
            <sui-popup wide position="bottom center">
              <sui-popup-content>
                <div class="ui orange basic label">
                  <div class="ui images" style="font-size: inherit !important;">
                    <div class="image">
                        <img :src="require('@/assets/images/wechat.jpg')" alt="" class="ui rounded bordered image" style="width:100px;">
                        <div style="text-align: center;">微信</div>
                    </div>
                  </div>
                </div>
              </sui-popup-content>
              <a slot="trigger" href="#" class="ui circular icon button"><i class="github icon"></i></a>
            </sui-popup>
            <sui-popup wide position="bottom center">
              <sui-popup-content>
                <div class="ui orange basic label">
                  <div class="ui images" style="font-size: inherit !important;">
                    <div class="image">
                        <img :src="require('@/assets/images/wechat.jpg')" alt="" class="ui rounded bordered image" style="width:100px;">
                        <div style="text-align: center;">微信</div>
                    </div>
                  </div>
                </div>
              </sui-popup-content>
              <a slot="trigger" href="#" class="ui circular icon button"><i class="weixin icon"></i></a>
            </sui-popup>
            <sui-popup wide position="bottom center">
              <sui-popup-content>
                <div class="ui orange basic label">
                  <div class="ui images" style="font-size: inherit !important;">
                    <div class="image">
                        <img :src="require('@/assets/images/qq.png')" alt="" class="ui rounded bordered image" style="width:100px;">
                        <div style="text-align: center;">QQ</div>
                    </div>
                  </div>
                </div>
              </sui-popup-content>
              <a slot="trigger" href="#" class="ui circular icon button"><i class="qq icon"></i></a>
            </sui-popup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="scss">

</style>
