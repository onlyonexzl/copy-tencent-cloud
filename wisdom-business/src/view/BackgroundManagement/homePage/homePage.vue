<template>
  <div class="pageHome">
    <div class="title">
      <span class="hovertext"> <i class="el-icon-message-solid"
           style="color:#00a4ff"></i> 消息提示：您有（<span style="color: #f30">3</span>）条新消息</span>
      <el-button slot="append"
                 type="primary"
                 icon="el-icon-plus"
                 style="width: 100px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;">
        我的商铺
      </el-button>
    </div>
    <div class="content">
      <div class="left"></div>
      <div class="rigit"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home page',
  data () {
    return {
      LocationProvince: "正在定位所在省",    //给渲染层定义一个初始值
      LocationCity: "正在定位所在市"     //给渲染层定义一个初始值
    }
  },
  methods: {
    city () {    //定义获取城市方法
      const geolocation = new BMap.Geolocation();
      var _this = this
      geolocation.getCurrentPosition(function getinfo (position) {
        let city = position.address.city;             //获取城市信息
        let province = position.address.province;     //获取省份信息
        _this.LocationProvince = province
        _this.LocationCity = city
      }, function (e) {
        _this.LocationCity = "定位失败"
      }, { provider: 'baidu' });
    }
  },

  mounted () {
    this.city()
  }
}
</script>

<style lang="scss">
.pageHome {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    width: 100%;
    height: 50px;
    background: #eee;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    align-items: center;
    margin-bottom: 20px;
  }
  .content {
    flex: 1;
    display: flex;
    .left {
      flex: 1;
    }
    .rigit {
      width: 250px;
      background: red;
    }
  }
}
</style>
