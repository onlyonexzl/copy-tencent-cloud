<template>
  <div class="homePage">
    <div class="bannerOrSearch">
      <div class="icon">
        <h1>美城茂</h1>
      </div>
      <div class="search">
        <div class="left">
          <el-select v-model="selectV"
                     style="width: 15%; border:none"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
          <span>|</span>
          <el-input placeholder="请输入内容"
                    style="width: 84%"
                    v-model="value"
                    clearable>
          </el-input>
        </div>
        <div class="button">
          <i class="el-icon-search"></i>
        </div>
      </div>
      <div class="banner">
        <span v-for="(item, index) in banner"
              :class="Aindex === index ? 'active' : ''"
              @click="goDetial(item, index)"
              :key="index">
          {{item.name}}
        </span>
      </div>
    </div>
    <div class="carousel">
      <el-carousel style="height: 450px">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="bottom-content">
      <div class="tip">
        <span>发现美好生活</span>
        <p>Discover a good life</p>
      </div>
      <div class="c-banner">
        <span v-for="(item, index) in banner"
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
                   style="margin-top: 1%"
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
                   style="margin-top: 1%"
                   alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="c-footer">
      <div class="f-content">
        <div class="f-title">
          <p>美城茂</p>
          <span>发 现 美 好 生 活</span>
        </div>
        <ul>
          <li>
            <i class="el-icon-s-shop"></i>
            <p>新媒体</p>
            <span>本地生活杂志等美学内容</span>
          </li>
          <li>
            <i class="el-icon-s-custom"></i>
            <p>新社交</p>
            <span>同城交友、聊天兴趣社区服务</span>
          </li>
          <li>
            <i class="el-icon-s-release"></i>
            <p>新零售</p>
            <span>线上线下一体化实体零售服务</span>
          </li>
          <li>
            <i class="el-icon-office-building"></i>
            <p>新服务</p>
            <span>房产招聘出行打车等生活服务</span>
          </li>
          <li>
            <i class="el-icon-receiving"></i>
            <p>新会员</p>
            <span>商家会员及城市联名会员服务</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  data () {
    return {
      value: '',
      Aindex: 0,
      Cindex: 0,
      options: [{
        value: '选项1',
        label: '商品'
      }, {
        value: '选项2',
        label: '知识'
      }, {
        value: '选项3',
        label: '商铺'
      }, {
        value: '选项4',
        label: '资讯'
      }],
      selectV: '全部',
      //                                                      
      banner: [{
        name: '杂志',
        link: '/homePage'
      }, {
        name: '商店',
        link: '/'
      }, {
        name: '问答'
      }, {
        name: '分享'
      }, {
        name: '特价'
      }, {
        name: '拍卖'
      }, {
        name: '集市'
      }, {
        name: '团购'
      }, {
        name: '服务'
      }, {
        name: '交友'
      }, {
        name: '视频'
      }, {
        name: '社区'
      }]
    }
  },

  methods: {
    goDetial (e, index) {
      this.Aindex = index
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
/deep/ .el-input--suffix .el-input__inner {
  border-color: #fff !important;
  border-radius: 20px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/deep/ .el-carousel__container {
  height: 100%;
}

.active {
  cursor: pointer;
  color: rgba(195, 171, 135, 1) !important;
  border-bottom: solid 2px rgba(195, 171, 135, 1);
}
.c-footer {
  width: 100%;
  height: 400px;
  background: rgba(195, 171, 135, 1);
  .f-content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    .f-title {
      color: #fff;
      padding: 52px 0;

      > p {
        font-size: 38px;
      }

      > span {
        height: 21px;
        font-size: 21px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 26px;
      }
    }
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      color: #fff;
      > li {
        width: 25%;
        > i {
          width: 70px;
          height: 71px;
          font-size: 45px;
          text-align: center;
          line-height: 71px;
          border: 2px solid rgba(255, 255, 255, 1);
          border-radius: 50%;
        }
        > p {
          font-size: 28px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 24px;
          margin-top: 28px;
          margin-bottom: 9px;
        }

        > span {
          font-size: 17px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 24px;
        }
      }
    }
  }
}
.c-active {
  cursor: pointer;
  color: rgba(195, 171, 135, 1) !important;
}
.homePage {
  width: 100%;
  height: 100%;
  .bannerOrSearch {
    width: 1190px;
    margin: 0 auto;
    text-align: center;
    .icon {
      margin: 16px 0 19px 0;
    }
    .search {
      width: 646px;
      height: 55px;
      margin: 0 auto;
      display: flex;
      border-radius: 28px;
      border: 2px solid rgba(195, 171, 135, 1);
      overflow: hidden;
      .left {
        width: 545px;
        height: 100%;
        display: flex;
        align-items: center;
        color: rgba(188, 188, 188, 1);
      }
      .button {
        width: 113px;
        height: 100%;
        background: rgba(195, 171, 135, 1);
        line-height: 55px;
        text-align: center;
        font-size: 21px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }

    .banner {
      width: 100%;
      display: flex;
      justify-content: space-around;
      font-size: 16px;
      margin-top: 39px;
      margin-bottom: 20px;
      > span {
        display: inline-block;
      }
      > span:hover {
        cursor: pointer;
        color: rgba(195, 171, 135, 1) !important;
        border-bottom: solid 2px rgba(195, 171, 135, 1);
      }
    }
  }
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
      margin-top: 80px;
      margin-bottom: 79px;
      > span {
        font-size: 42px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
      > p {
        font-size: 27px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(119, 119, 119, 1);
      }
    }
  }
}
</style>
