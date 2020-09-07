<template>
  <div class="myOrder">
    <van-nav-bar title="我的回收订单"
                 left-text
                 left-arrow
                 @click-left="onClickLeft">
      <template #left>
        <img src="@/assets/images/icon/index/arrow.png" />
      </template>
    </van-nav-bar>
    <van-tabs type="card"
              style="margin-top: 10px"
              color="#C3AB87">
      <van-tab title="上门回收">
        <van-tabs @click="onClick"
                  color="#C3AB87"
                  style="margin-bottom: 0.6rem">
          <van-tab title="全部订单"></van-tab>
          <van-tab title="待取件"></van-tab>
          <van-tab title="订单完成"></van-tab>
          <van-tab title="已取消"></van-tab>
        </van-tabs>
        <div class="content">
          <div class="itemList">
            <div class="title">
              <p>订单编号:11120502000</p>
              <span>等待取件</span>
            </div>
            <div class="itemCon">
              <div class="left">
                <img src="../../../../assets/images/magazine/bannerBG/b2.png"
                     alt="">
              </div>
              <div class="center">
                <p>类 型：台式电脑</p>
                <p>规 格：台式主机</p>
                <p>预约保证金：100 环保金</p>
                <p>预约时间：2020-02-20 19:00:00</p>
              </div>
              <div class="right">
                × 1
              </div>
            </div>
            <div class="bottom">
              <div></div>
              <div>
                <div class="botton">
                  取消订单
                </div>
                <div class="botton"
                     @click="godetails"
                     style="border: solid 1px #C6B08E; color:#C6B08E; margin-left:10px; ">
                  查看详情
                </div>
              </div>
            </div>
          </div>
          <div class="itemList">
            <div class="title">
              <p>订单编号:11120502000</p>
              <span>等待取件</span>
            </div>
            <div class="itemCon">
              <div class="left">
                <img src="../../../../assets/images/magazine/bannerBG/b2.png"
                     alt="">
              </div>
              <div class="center">
                <p>类 型：台式电脑</p>
                <p>规 格：台式主机</p>
                <p>预约保证金：100 环保金</p>
                <p>预约时间：2020-02-20 19:00:00</p>
              </div>
              <div class="right">
                × 1
              </div>
            </div>
            <div class="bottom">
              <div></div>
              <div>
                <div class="botton">
                  取消订单
                </div>
                <div class="botton"
                     @click="godetails"
                     style="border: solid 1px #C6B08E; color:#C6B08E; margin-left:10px; ">
                  查看详情
                </div>
              </div>
            </div>
          </div>
          <div class="itemList">
            <div class="title">
              <p>订单编号:11120502000</p>
              <span>等待取件</span>
            </div>
            <div class="itemCon">
              <div class="left">
                <img src="../../../../assets/images/magazine/bannerBG/b2.png"
                     alt="">
              </div>
              <div class="center">
                <p>类 型：台式电脑</p>
                <p>规 格：台式主机</p>
                <p>预约保证金：100 环保金</p>
                <p>预约时间：2020-02-20 19:00:00</p>
              </div>
              <div class="right">
                × 1
              </div>
            </div>
            <div class="bottom">
              <div></div>
              <div>
                <div class="botton">
                  取消订单
                </div>
                <div class="botton"
                     @click="godetails"
                     style="border: solid 1px #C6B08E; color:#C6B08E; margin-left:10px; ">
                  查看详情
                </div>
              </div>
            </div>
          </div>
          <div class="itemList">
            <div class="title">
              <p>订单编号:11120502000</p>
              <span>等待取件</span>
            </div>
            <div class="itemCon">
              <div class="left">
                <img src="../../../../assets/images/magazine/bannerBG/b2.png"
                     alt="">
              </div>
              <div class="center">
                <p>类 型：台式电脑</p>
                <p>规 格：台式主机</p>
                <p>预约保证金：100 环保金</p>
                <p>预约时间：2020-02-20 19:00:00</p>
              </div>
              <div class="right">
                × 1
              </div>
            </div>
            <div class="bottom">
              <div></div>
              <div>
                <div class="botton">
                  取消订单
                </div>
                <div class="botton"
                     @click="godetails"
                     style="border: solid 1px #C6B08E; color:#C6B08E; margin-left:10px; ">
                  查看详情
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="智能回收">
        <div class="content">
          <div class="itemList">
            <div class="titleBH">订单编号:11120502000</div>
            <div class="itemListP">
              <div>
                <p>回收柜编号</p> <span>P0522222</span>
              </div>
              <div>
                <p>回收柜地址</p> <span>北京市朝阳区呼家楼8号院</span>
              </div>
              <div>
                <p>类 型</p> <span>台式电脑</span>
              </div>
              <div>
                <p>数 量</p> <span>台式主机</span>
              </div>
              <div>
                <p>实际回收环保金</p> <span>100 环保金</span>
              </div>
              <div>
                <p>回收时间</p> <span>2020-02-20 19:00:00</span>
              </div>
            </div>
          </div>
          <div class="itemList">
            <div class="titleBH">订单编号:11120502000</div>
            <div class="itemListP">
              <div>
                <p>回收柜编号</p> <span>P0522222</span>
              </div>
              <div>
                <p>回收柜地址</p> <span>北京市朝阳区呼家楼8号院</span>
              </div>
              <div>
                <p>类 型</p> <span>台式电脑</span>
              </div>
              <div>
                <p>数 量</p> <span>台式主机</span>
              </div>
              <div>
                <p>实际回收环保金</p> <span>100 环保金</span>
              </div>
              <div>
                <p>回收时间</p> <span>2020-02-20 19:00:00</span>
              </div>
            </div>
          </div>
          <div class="itemList">
            <div class="titleBH">订单编号:11120502000</div>
            <div class="itemListP">
              <div>
                <p>回收柜编号</p> <span>P0522222</span>
              </div>
              <div>
                <p>回收柜地址</p> <span>北京市朝阳区呼家楼8号院</span>
              </div>
              <div>
                <p>类 型</p> <span>台式电脑</span>
              </div>
              <div>
                <p>数 量</p> <span>台式主机</span>
              </div>
              <div>
                <p>实际回收环保金</p> <span>100 环保金</span>
              </div>
              <div>
                <p>回收时间</p> <span>2020-02-20 19:00:00</span>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-overlay :show="show">
      <van-loading type="spinner"
                   class="wrapper"
                   color="#1989fa" />
    </van-overlay>

  </div>
</template>

<script>
// import { Toast } from 'vant';
export default {
  name: 'myOrder',

  data () {
    return {
      show: false
    }
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },

    godetails () {
      this.$router.push('/serve/details')
    },

    onClick (name, title) {
      // Toast(title);
      this.show = true

      setTimeout(() => {
        this.show = false
      }, 1000)
    },
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.itemListP {
  font-size: 0.27rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: #777777;
  line-height: 0.55rem;
  margin-bottom: 0.3rem;
  > div {
    display: flex;
    > p {
      width: 2rem;
      margin-right: 0.5rem;
    }
  }
}

.titleBH {
  width: 100%;
  // height: 0.26rem;
  font-size: 0.27rem;
  padding-bottom: 0.2rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
  border-bottom: solid 1px #f1f1f1;
  margin-bottom: 0.3rem;
}

.content {
  width: 100%;
  margin: 0 auto;

  .itemList {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.4rem;
    margin-top: 0.4rem;
    border-bottom: solid 0.18rem #f7f7f7;
    // margin-bottom: 0.7rem;
    .title {
      display: flex;
      justify-content: space-between;
      > p {
        font-size: 0.24rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
      }
      > span {
        font-size: 0.24rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #c3ab87;
      }
    }
    .itemCon {
      display: flex;
      height: 1.72rem;
      margin-top: 0.28rem;
      .left {
        width: 2rem;
        > img {
          width: 1.72rem;
          height: 1.72rem;
        }
      }
      .center {
        flex: 1;
        > p {
          font-size: 0.24rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: #777777;
          margin-bottom: 0.1rem;
        }
      }
      .right {
        font-size: 0.27rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
      }
    }
    .bottom {
      // float: right;
      margin-top: 0.5rem;
      margin-bottom: 0.4rem;
      display: flex;
      justify-content: space-between;
      > div {
        display: flex;
      }
      .botton {
        width: 1.58rem;
        height: 0.52rem;
        border: 1px solid #f1f1f1;
        border-radius: 0.24rem;
        text-align: center;
        line-height: 0.52rem;
        font-size: 0.24rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
      }
    }
  }
}
</style>