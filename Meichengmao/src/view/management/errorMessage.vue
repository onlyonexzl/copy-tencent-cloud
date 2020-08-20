<template>
  <div class="error">
    <div class="redColor">您还没有开通生活圈，先去开通一个吧</div>
  </div>
</template>

<script>
export default {
  name: 'errorMessage'
}
</script>

<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100%;
  position: relative;
  > div {
    width: 300px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -150px;
    margin-top: -20px;
  }
}
</style>