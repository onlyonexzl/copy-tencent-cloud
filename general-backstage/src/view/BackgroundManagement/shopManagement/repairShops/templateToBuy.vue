<template>
  <div class="templateToBuy">
    <div class="title-ban">
      <span>已购买模版</span>
    </div>
    <div class="content">
      <div class="item"
           v-for="(item, index) in url"
           :key="index">
        <el-image style="width: 145px; height: 185px"
                  :src="item"
                  :preview-src-list="srcList">
        </el-image>
        <p>默认模板</p>
        <el-button slot="append"
                   type="primary"
                   v-if='index === 0'
                   icon="el-icon-plus"
                   style="width: 90px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;">
          立即导入
        </el-button>
      </div>
    </div>
    <div class="title-ban">
      <span>选购模板</span>
    </div>
    <div class="content">
      <div class="item"
           v-for="(item, index) in url"
           :key="index">
        <el-image style="width: 145px; height: 185px"
                  :src="item"
                  :preview-src-list="srcList">
        </el-image>
        <p>默认模板</p>
        <el-button slot="append"
                   type="primary"
                   v-if='index === 0'
                   icon="el-icon-plus"
                   style="width: 90px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;">
          选购
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'templateToBuy',

  data () {
    return {
      url: [
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121833438,3473430102&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864287296,145841194&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1769807321,355494893&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2391667107,3258741112&fm=26&gp=0.jpg'
      ],
      srcList: [
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121833438,3473430102&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864287296,145841194&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1769807321,355494893&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2391667107,3258741112&fm=26&gp=0.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.templateToBuy {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 20px;
  .title-ban {
    width: 100%;
    border-bottom: solid 1px #a90000;
    position: relative;
    height: 25px;
    margin-top: 20px;
    > span {
      position: absolute;
      display: block;
      padding: 0 10px;
      height: 25px;
      border: solid 1px #a90000;
      border-bottom-color: #fff;
      background: #fff;
      left: 25px;
    }
  }
  .content {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    .item {
      margin-right: 20px;
      text-align: center;
      p {
        margin-top: 10px;
      }
    }
  }
}
</style> 