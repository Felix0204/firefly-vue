<template>
<div>
  <sui-menu pointing>
    <div class="ui container">
      <sui-menu-menu position="right">
        <a
          class="teal"
          is="sui-menu-item"
          v-for="item in blogMgtTabs"
          :active="isActive(item)"
          :key="item.key"
          :content="item.value"
          @click="select(item)"
        />
      </sui-menu-menu>
    </div>
  </sui-menu>
  <component :is='active'></component>
</div>
</template>
<script>
import List from './components/list.vue'
import Publish from './components/publish.vue'
export default {
  name: 'AdminBlog',
  components: {
    list: List,
    publish: Publish
  },
  data () {
    return {
      category: null,
      options: [
        {
          text: '错误日志',
          value: 'errorLog'
        },
        {
          text: '开发手册',
          value: 'devManual'
        }
      ],
      active: 'list',
      blogMgtTabs: [
        { key: 'publish', value: '发布' },
        { key: 'list', value: '列表' }
      ]
    }
  },
  methods: {
    isActive (item) {
      return this.active === item.key
    },
    select (item) {
      this.active = item.key
    }
  }
}
</script>
<style lang="scss" scoped>
.ui.form .fields {
  margin: 0;
}
</style>
