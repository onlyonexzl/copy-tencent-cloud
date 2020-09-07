<template>
  <div class="all-c">
    <div class="mock">
      <div class="cont">
        <div class="title">
          <p>美食</p>
          <span @click="goDetil">查看更多 <i class="el-icon-arrow-right"></i></span>
        </div>
        <div class="img">
          <div class="left"
               @click="$router.push('/shop/shopDetailPage')">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=449491736,484517162&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <div class="right">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2890046181,2272525541&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1784602414,3412521658&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2986114791,2667770254&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1805460763,2866488258&fm=26&gp=0.jpg"
                 alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="mock">
      <div class="cont">
        <div class="title">
          <p>娱乐</p>
          <span @click="goDetil">查看更多 <i class="el-icon-arrow-right"></i></span>
        </div>
        <div class="img">
          <div class="left">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=449491736,484517162&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <div class="right">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2890046181,2272525541&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1784602414,3412521658&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2986114791,2667770254&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1805460763,2866488258&fm=26&gp=0.jpg"
                 alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="mock">
      <div class="cont">
        <div class="title">
          <p>服饰</p>
          <span @click="goDetil">查看更多 <i class="el-icon-arrow-right"></i></span>
        </div>
        <div class="img">
          <div class="left">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=449491736,484517162&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <div class="right">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2890046181,2272525541&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1784602414,3412521658&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2986114791,2667770254&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1805460763,2866488258&fm=26&gp=0.jpg"
                 alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  naem: 'shopContent',

  methods: {
    goDetil () {
      this.$router.push('/shop/shopDetail')
    }
  }
}
</script>

<style lang="scss" scoped>
.all-c {
  width: 100%;

  > :nth-child(odd) {
    background: rgba(242, 242, 242, 1);
  }
  .mock {
    width: 100%;
  }
  .cont {
    margin: 0 auto;
    width: 1190px;
    padding-bottom: 70px;
    // height: 800px;
    .title {
      display: flex;
      justify-content: space-between;
      padding-top: 70px;
      padding-bottom: 50px;
      p {
        font-size: 38px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 26px;
      }
      span {
        cursor: pointer;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 26px;
      }
    }
    .img {
      width: 100%;
      display: flex;
      height: 540px;
      justify-content: space-between;

      .left {
        width: 580px;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .right {
        width: 580px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        img {
          width: 49%;
          height: 49%;
        }
      }
    }
  }
}
</style>