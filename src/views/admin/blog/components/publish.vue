<template>
  <div class="f-container-small padded-tb-5">
    <div class="ui container">
      <div class="ui segment">
        <sui-form>
          <sui-form-fields>
            <sui-form-field>
              <div class="ui left labeled input">
                <sui-dropdown
                  placeholder="分类"
                  selection
                  :options="pubOptions"
                  v-model="pubCategory"
                />
                <sui-input placeholder="Search a very wide input..." icon="search"/>
              </div>
            </sui-form-field>
          </sui-form-fields>
        </sui-form>
      </div>
      <div class="ui segment">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Publish',
  data () {
    return {
      pubCategory: null,
      pubOptions: [
        {
          text: '原创',
          value: 'original'
        },
        {
          text: '转载',
          value: 'reprint'
        },
        {
          text: '翻译',
          value: 'translate'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.ui.form .fields {
  margin: 0;
}
.ui.selection.dropdown {
  border-radius: 0;
}
/deep/ .ui.icon.input {
  border-radius: 0;
}
</style>
