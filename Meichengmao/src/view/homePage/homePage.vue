<template>
  <div class="homePage">

    <div class="bottom-content">
      <div class="tip">
        <span>发现美好生活</span>
        <p>Discover a good life</p>
      </div>
      <div class="c-banner">
        <span v-for="(item, index) in bannerTwo"
              :class="Cindex === index ? 'c-active' : ''"
              @click="() => {
                Cindex = index
              }"
              :key="index">
          {{item.name}}
        </span>
      </div>
    </div>

    <div class="all-c">
      <div class="mock">
        <div class="cont">
          <div class="title">
            <p>美食</p>
            <span>查看更多 <i class="el-icon-arrow-right"></i></span>
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
            </div>
          </div>
        </div>
      </div>
      <div class="mock">
        <div class="cont">
          <div class="title">
            <p>娱乐</p>
            <span>查看更多 <i class="el-icon-arrow-right"></i></span>
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
            </div>
          </div>
        </div>
      </div>
      <div class="mock">
        <div class="cont">
          <div class="title">
            <p>服饰</p>
            <span>查看更多 <i class="el-icon-arrow-right"></i></span>
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
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      Cindex: 0,
      bannerTwo: [{
        name: '美食'
      }, {
        name: '娱乐'
      }, {
        name: '美妆'
      }, {
        name: '服饰'
      }, {
        name: '时尚'
      }, {
        name: '文化'
      }, {
        name: '艺术'
      }, {
        name: '商业'
      }, {
        name: '酒店'
      }, {
        name: '旅行'
      }, {
        name: '全部'
      }]
    }
  },

  methods: {
    goDetial (e, index) {
      this.Cindex = index
      if (window.location.href.split('#')[1] === e.link) return false
      if (e.link) {
        this.navIndex = index
        this.$router.push(e.link)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.c-active {
  cursor: pointer;
  color: rgba(195, 171, 135, 1) !important;
}
.homePage {
  width: 100%;
  height: 100%;

  .all-c {
    width: 100%;

    > :nth-child(even) {
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
          width: 716px;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .right {
          width: 470px;
          height: 100%;
          img {
            width: 100%;
            height: 49%;
          }
        }
      }
    }
  }
  .bottom-content {
    width: 1190px;
    margin: 0 auto;
    text-align: center;

    .c-banner {
      width: 100%;
      height: 85px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: solid 1px rgba(241, 241, 241, 1);
      border-bottom: solid 1px rgba(241, 241, 241, 1);
      > span:hover {
        cursor: pointer;
        color: rgba(195, 171, 135, 1) !important;
      }
    }
    .tip {
      margin-top: 60px;
      margin-bottom: 59px;
      > span {
        font-size: 34px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
      > p {
        font-size: 25px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(119, 119, 119, 1);
      }
    }
  }
}
</style>
