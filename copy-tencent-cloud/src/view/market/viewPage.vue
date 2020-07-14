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
  </div>
</template>

<script>
export default {
  name: 'viewPage'
}
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  height: 314px;
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
