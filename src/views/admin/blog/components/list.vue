<template>
  <div class="f-container-small padded-tb-5">
    <div class="ui container">
      <div class="ui segment">
        <sui-form>
          <sui-form-fields>
            <sui-form-field>
              <input style="padding:10px !important;" type="text" placeholder="标题"/>
            </sui-form-field>
            <sui-form-field>
              <sui-dropdown
                placeholder="分类"
                selection
                :options="options"
                v-model="category"
              />
            </sui-form-field>
            <sui-form-field>
              <sui-checkbox style="padding: 10px;" label="推荐"/>
            </sui-form-field>
            <sui-form-field>
              <sui-button basic color="teal"><sui-icon name="search"/>搜索</sui-button>
            </sui-form-field>
          </sui-form-fields>
        </sui-form>
      </div>
      <div class="ui segment">
        <sui-table basic="very">
          <sui-table-header>
            <sui-table-row>
              <sui-table-header-cell>标题</sui-table-header-cell>
              <sui-table-header-cell>类型</sui-table-header-cell>
              <sui-table-header-cell>更新时间</sui-table-header-cell>
              <sui-table-header-cell>操作</sui-table-header-cell>
            </sui-table-row>
          </sui-table-header>
          <sui-table-body>
            <sui-table-row>
              <sui-table-cell>用户故事</sui-table-cell>
              <sui-table-cell>学习日志</sui-table-cell>
              <sui-table-cell>2020-12-22 10:45</sui-table-cell>
              <sui-table-cell>
                <sui-button size="mini" color="teal" basic>编辑</sui-button>
                <sui-button size="mini" color="red" basic>删除</sui-button>
              </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>用户故事</sui-table-cell>
              <sui-table-cell>学习日志</sui-table-cell>
              <sui-table-cell>2020-12-22 10:45</sui-table-cell>
              <sui-table-cell>
                <sui-button size="mini" color="teal" basic>编辑</sui-button>
                <sui-button size="mini" color="red" basic>删除</sui-button>
              </sui-table-cell>
            </sui-table-row>
            <sui-table-row>
              <sui-table-cell>用户故事</sui-table-cell>
              <sui-table-cell>学习日志</sui-table-cell>
              <sui-table-cell>2020-12-22 10:45</sui-table-cell>
              <sui-table-cell>
                <sui-button size="mini" color="teal" basic>编辑</sui-button>
                <sui-button size="mini" color="red" basic>删除</sui-button>
              </sui-table-cell>
            </sui-table-row>
          </sui-table-body>
          <sui-table-footer>
            <sui-table-row>
              <sui-table-header-cell colspan="4">
                <sui-menu pagination class="mini">
                  <a is="sui-menu-item">上一页</a>
                  <a is="sui-menu-item">下一页</a>
                </sui-menu>
                <sui-button style="margin:4px;" floated="right" size="mini" color="teal" basic>新增</sui-button>
              </sui-table-header-cell>
            </sui-table-row>
          </sui-table-footer>
        </sui-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'List',
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
