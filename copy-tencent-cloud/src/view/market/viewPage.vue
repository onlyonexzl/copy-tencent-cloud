<template>
  <div>
    <div class="block">
      <el-carousel height="100%">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="banner">
      <div class="banner-c">
        <div class="item">
          <p>域名建站5折起</p>
          <span>灵活选择，组合购买更优惠</span>
        </div>
        <div class="item">
          <p>域名建站5折起</p>
          <span>灵活选择，组合购买更优惠</span>
        </div>
        <div class="item">
          <p>域名建站5折起</p>
          <span>灵活选择，组合购买更优惠</span>
        </div>
        <div class="item">
          <p>域名建站5折起</p>
          <span>灵活选择，组合购买更优惠</span>
        </div>
      </div>
    </div>
    <div class="market-place-section">
      <div class="module-section-hd">
        <span class="text-gradient">0元</span>
        <span>・免费体验</span>
      </div>
      <div class="mp__tryout">
        <div class="tab">
          <!-- @tab-click="handleClick" -->
          <el-tabs v-model="activeName">
            <el-tab-pane label="小程序"
                         name="first">
            </el-tab-pane>
            <el-tab-pane label="网站建设"
                         name="second">
            </el-tab-pane>
            <el-tab-pane label="企业应用"
                         name="third"></el-tab-pane>
            <el-tab-pane label="定时任务补偿"
                         name="fourth"></el-tab-pane>
          </el-tabs>
        </div>
        <ul class="mp__tryout-list">
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">

              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'viewPage',
  data () {
    return {
      activeName: 'first',
    }
  }
}
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  height: 314px;
}

.market-place-section {
  width: 100%;
  height: 788px;
  background-color: #f4f5f9;
  box-sizing: border-box;
  padding: 0 200px;
  .module-section-hd {
    width: 100%;
    height: 90px;
    // margin: 20px 0;
    line-height: 90px;
    font-size: 30px;
    color: #383838;
    .text-gradient {
      font-size: 30px;
      color: #f2a056;
      font-weight: 700;
      background-image: -webkit-linear-gradient(left, #f2a056, #f16863);
      -webkit-background-clip: text;
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  height: 100%;
  // line-height: 150px;
  margin: 0;
}

.el-carousel {
  height: 100%;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel__item:nth-child(2n + 2) {
  background-color: skyblue;
}

.banner {
  width: 100%;
  height: 146px;
  box-sizing: border-box;
  padding: 0 200px;
  .banner-c {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > :nth-child(2) {
      background: #f29037 !important  ;
    }
    > :nth-child(3) {
      background: #37aac7 !important  ;
    }
    > :nth-child(4) {
      background: #9163f1 !important  ;
    }
    .item {
      width: 280px;
      height: 108px;
      background: #5782ff;
      box-sizing: border-box;
      padding: 26px 0 26px 20px;
      > p {
        font-size: 22px;
        color: #fff;
        line-height: 34px;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
      }
      > span {
        margin-top: 4px;
        font-size: 12px;
        color: #fff;
        line-height: 18px;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
      }
    }
  }
}
</style>
