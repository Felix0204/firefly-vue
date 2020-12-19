<template>
  <div class="f-container-small padded-tb-5">
    <div class="ui container">
      <div class="ui top attached segment">
        <div class="ui mini horizontal link list">
          <div class="item">
            <img src="https://source.unsplash.com/user/erondu/1600x900" alt="" class="ui avatar image">
            <div class="content"><a href="#" class="header">雷瑶</a></div>
          </div>
          <div class="item">
            <i class="calendar icon"></i> 2020-12-14
          </div>
          <div class="item">
            <i class="eye icon"></i> 100
          </div>
        </div>
      </div>
      <div class="ui attached segment">
        <!-- 图片区域 -->
        <img src="https://source.unsplash.com/user/erondu/1600x900" alt="" class="ui fluid rounded image">
      </div>
      <div class="ui attached segment">
        <!-- 内容 -->
        <div class="ui right aligned basic segment">
          <div class="ui orange basic label">原创</div>
        </div>
        <h2 class="ui center aligned header">关于原创刻意练习的清单</h2>
        <br>
        <div id="content" class="padded-lr-4-repositive padded-tb-2">
          <p>在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。</p>
          <h2>1</h2>
          <p>在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。</p>
          <h2>2</h2>
          <p>在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。</p>
          <h2>3</h2>
          <p>在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。</p>
          <h2>4</h2>
          <p>在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。</p>
          <h2>5</h2>
          <p>在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。</p>
          <h2>6</h2>
          <p>在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。</p>
          <h2>7</h2>
          <p>在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。</p>
        </div>
        <!-- 标签 -->
        <div class="padded-lr-4-repositive">
          <div class="ui basic teal left pointing label">方法论</div>
        </div>
        <!-- 赞赏 -->
        <sui-popup wide position="bottom center">
          <sui-popup-content>
            <div class="ui orange basic label">
              <div class="ui images" style="font-size: inherit !important;">
                <div class="image">
                  <img :src="require('@/assets/images/wechat.jpg')" alt="" class="ui rounded bordered image" style="width:100px;">
                  <div style="text-align: center;">支付宝</div>
                </div>
                <div class="image">
                  <img :src="require('@/assets/images/wechat.jpg')" alt="" class="ui rounded bordered image" style="width:100px;">
                  <div style="text-align: center;">微信</div>
                </div>
              </div>
            </div>
          </sui-popup-content>
          <div class="ui center aligned basic segment" slot="trigger">
            <div class="ui orange basic circular button">赞赏</div>
          </div>
        </sui-popup>
      </div>
      <div class="ui positive attached message">
        <!-- 博客信息 -->
        <div class="ui middle aligned grid">
          <div class="eleven wide column">
            <ul class="list">
              <li>作者：Felix（联系作者）</li>
              <li>发表时间：2020-12-17 20:20</li>
              <li>版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</li>
              <li>公众号转载：请在文末添加作者公众号二维码</li>
            </ul>
          </div>
          <div class="five wide column">
            <img :src="require('@/assets/images/wechat.jpg')" alt="" class="ui right floated rounded bordered image" style="width: 100px;">
          </div>
        </div>
      </div>
      <div class="ui bottom attached segment">
          <!-- 留言区域列表 -->
          <div class="ui teal segment">
            <sui-comment-group threaded>
                <h3 is="sui-header" dividing>Comments</h3>

                <sui-comment>
                <sui-comment-avatar :src="require('@/assets/images/wechat.jpg')"/>
                <sui-comment-content>
                    <a is="sui-comment-author">Matt</a>
                    <sui-comment-metadata>
                    <div>Today at 5:42PM</div>
                    </sui-comment-metadata>
                    <sui-comment-text>How artistic!</sui-comment-text>
                    <sui-comment-actions>
                    <sui-comment-action>回复</sui-comment-action>
                    </sui-comment-actions>
                </sui-comment-content>
                </sui-comment>

                <sui-comment>
                <sui-comment-avatar :src="require('@/assets/images/wechat.jpg')"/>
                <sui-comment-content>
                    <a is="sui-comment-author">Elliot Fu</a>
                    <sui-comment-metadata>
                    <div>Yesterday at 12:30AM</div>
                    </sui-comment-metadata>
                    <sui-comment-text>
                    <p>This has been very useful for my research. Thanks as well!</p>
                    </sui-comment-text>
                    <sui-comment-actions>
                    <sui-comment-action>回复</sui-comment-action>
                    </sui-comment-actions>
                </sui-comment-content>
                <sui-comment-group>
                    <sui-comment>
                    <sui-comment-avatar :src="require('@/assets/images/wechat.jpg')"/>
                    <sui-comment-content>
                        <a is="sui-comment-author">Jenny Hess</a>
                        <sui-comment-metadata>
                        <div>Just now</div>
                        </sui-comment-metadata>
                        <sui-comment-text>
                        Elliot you are always so right :)
                        </sui-comment-text>
                        <sui-comment-actions>
                        <sui-comment-action>回复</sui-comment-action>
                        </sui-comment-actions>
                    </sui-comment-content>
                    </sui-comment>
                </sui-comment-group>
                </sui-comment>

                <sui-comment>
                <sui-comment-avatar :src="require('@/assets/images/wechat.jpg')"/>
                <sui-comment-content>
                    <a is="sui-comment-author">Joe Henderson</a>
                    <sui-comment-metadata>
                    <div>5 days ago</div>
                    </sui-comment-metadata>
                    <sui-comment-text>
                    Dude, this is awesome. Thanks so much
                    </sui-comment-text>
                    <sui-comment-actions>
                    <sui-comment-action>回复</sui-comment-action>
                    </sui-comment-actions>
                </sui-comment-content>
                </sui-comment>
            </sui-comment-group>
          </div>
          <div class="ui form">
            <div class="field">
              <textarea name="content" placeholder="请输入评论信息..."></textarea>
            </div>
            <div class="fields">
              <div class="field f-mobile-wide f-mobile-bottom-small">
                <div class="ui left icon input">
                  <i class="user icon"></i>
                  <input type="text" name="nickname" placeholder="姓名">
                </div>
              </div>
              <div class="field f-mobile-wide f-mobile-bottom-small">
                <div class="ui left icon input">
                  <i class="mail icon"></i>
                  <input type="text" name="email" placeholder="邮箱">
                </div>
              </div>
              <div class="field f-mobile-bottom-small f-mobile-wide">
                <button class="ui teal button f-mobile-wide"><i class="edit icon"></i>发布</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Blog',
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
