<template>
  <div class="navigationStyleSettings">
    <div class="item">
      <el-divider content-position="left">导航</el-divider>
      <div class="form-item">
        <span class="demonstration"
              style="margin-right: 10px">字体颜色：</span>
        <el-color-picker v-model="color1"
                         style="margin-right: 20px"></el-color-picker>
        <span class="demonstration"
              style="margin-right: 10px">背景颜色：</span>
        <el-color-picker v-model="color1"
                         style="margin-right: 20px"></el-color-picker>
      </div>
      <el-divider content-position="left">导航下拉一级</el-divider>
      <div class="form-item">
        <span class="demonstration"
              style="margin-right: 10px">字体颜色：</span>
        <el-color-picker v-model="color1"
                         style="margin-right: 20px"></el-color-picker>

        <span class="demonstration"
              style="margin-right: 10px">背景颜色：</span>
        <el-color-picker v-model="color1"
                         style="margin-right: 20px"></el-color-picker>

        <span class="demonstration"
              style="margin-right: 10px">字体颜色(选中)</span>
        <el-color-picker v-model="color1"
                         style="margin-right: 20px"></el-color-picker>

        <span class="demonstration"
              style="margin-right: 10px">背景颜色(选中)</span>
        <el-color-picker v-model="color1"
                         style="margin-right: 20px"></el-color-picker>
      </div>
      <el-divider content-position="left">导航下拉二级</el-divider>
      <div class="form-item">
        <span class="demonstration"
              style="margin-right: 10px">字体颜色：</span>
        <el-color-picker v-model="color1"
                         style="margin-right: 20px"></el-color-picker>

        <span class="demonstration"
              style="margin-right: 10px">背景颜色：</span>
        <el-color-picker v-model="color1"
                         style="margin-right: 20px"></el-color-picker>

        <span class="demonstration"
              style="margin-right: 10px">字体颜色(选中)</span>
        <el-color-picker v-model="color1"
                         style="margin-right: 20px"></el-color-picker>

        <span class="demonstration"
              style="margin-right: 10px">背景颜色(选中)</span>
        <el-color-picker v-model="color1"
                         style="margin-right: 20px"></el-color-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigationStyleSettings',

  data () {
    return {
      color1: null,
    }
  }
}
</script>

<style lang="scss" scoped>
.navigationStyleSettings {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
}
</style>
