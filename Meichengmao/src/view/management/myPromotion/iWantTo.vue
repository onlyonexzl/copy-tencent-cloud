<template>
  <div class="iWantTo">
    <div style="display: flex; box-sizing:border-box; padding: 20px;align-items: center;">
      <span style=" display: block;width: 100px;">推广链接：</span>
      <el-input placeholder="请输入内容"
                v-model="input"
                clearable>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iWantTo',
  data () {
    return {
      input: '<a href="http://www.meicheng58.com?u=1" target="_blank">美城网</a>'
    }
  }
}
</script>

<style lang="scss">
</style>
