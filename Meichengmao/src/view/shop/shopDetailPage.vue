<template>
  <div class="shopDetailPage">
    <div class="content">
      <p style="font-size:14px;font-family:PingFang SC;font-weight:400;color:rgba(156,156,156,1);line-height:26px;margin: 10px 0;">
        首页 > 服饰鞋包 > 男士牛仔 >【优衣库】男士牛仔外套
      </p>
      <div style="width: 100%"
           class="content-tit">
        <div class="left">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2385534997,4227880105&fm=26&gp=0.jpg"
               alt="">
          <div class="item-img">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2385534997,4227880105&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2385534997,4227880105&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2385534997,4227880105&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2385534997,4227880105&fm=26&gp=0.jpg"
                 alt="">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2385534997,4227880105&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <div class="button">
            企业采购更优惠 >
          </div>
        </div>
        <div class="right">
          <div class="r-title">
            <div class="r-left">
              <p>【优衣库】男士牛仔外套</p>
              <span>自由弹力做灵魂的跟随者</span>
            </div>
            <div class="r-right">
              <p>99.6%</p>
              <span>好评率 > </span>
            </div>
          </div>
          <div class="r-content">
            <div class="r-item">
              <div class="r-i-left">
                价格
              </div>
              <div class="r-i-right">
                <p class="one"><span>￥</span>255</p>
                <div class="one-b">
                  <span>VIP</span>
                  <div>
                    <p>VIP会员叠加优惠，到手价210.50</p> <span>立即开通</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="r-item">
              <div class="r-i-left">
                促销
              </div>
              <div class="r-i-right">
                <div class="two">
                  <div class="button">抢￥30元神券</div>
                  <span>你的专属神券来了！宅家好物无门槛直减</span>
                </div>
                <div class="two">
                  <div class="button">全场换购</div>
                  <span>低至3折超值换购</span>
                </div>
              </div>
            </div>
            <div class="r-item">
              <div class="r-i-left">
                购物返
              </div>
              <div class="r-i-right">
                <p class="three">最高返 <span>22积分</span></p>
              </div>
            </div>
            <div class="r-item">
              <div class="r-i-left">
                邮费
              </div>
              <div class="r-i-right">
                <p>满99元包邮</p>
              </div>
            </div>
            <div class="r-item">
              <div class="r-i-left">
                配送
              </div>
              <div class="r-i-right">
                至 <el-select v-model="value"
                           style="margin-left: 10px"
                           clearable
                           placeholder="请选择地址">
                  <el-option v-for="item in options"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="r-item">
              <div class="r-i-left">
                服务
              </div>
              <div class="r-i-right">
                <p>·美城自营品牌 ·30天无忧退换 ·国内部分地区不可配送</p>
              </div>
            </div>
          </div>
          <div class="r-item1">
            <div class="r-i-left">
              邮费
            </div>
            <div class="r-i-right">
              <div v-for="index in 8"
                   class="num"
                   :key="index">
                {{index + 28}}
              </div>
            </div>
          </div>
          <div class="r-item1">
            <div class="r-i-left">
              颜色
            </div>
            <div class="r-i-right">
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2502566191,457156265&fm=26&gp=0.jpg"
                   alt="">
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2502566191,457156265&fm=26&gp=0.jpg"
                   alt="">
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2502566191,457156265&fm=26&gp=0.jpg"
                   alt="">
            </div>
          </div>
          <div class="r-item1">
            <div class="r-i-left">
              数量
            </div>
            <div class="r-i-right">
              <el-input-number v-model="num"
                               @change="handleChange"
                               :min="1"
                               :max="10"
                               label="描述文字"></el-input-number>
            </div>
          </div>
          <div class="r-item1">
            <div class="r-i-left">
              <!-- 数量 -->
            </div>
            <div class="r-i-right">
              <div class="bottom">立即购买</div>
              <div class="bottom1">加入购物车</div>
              <div class="cs">
                <img src="../../assets/img/xx.png"
                     alt="">
                <p>收藏</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="carousel">
      <p>你可能还喜欢</p>
      <el-carousel :interval="4000"
                   type="card">
        <el-carousel-item v-for="item in 6"
                          :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopDetailPage',
  data () {
    return {
      num: 1
    };
  }
}
</script>

<style lang="scss" scoped>
.shopDetailPage {
  width: 100%;
  height: 100%;
  .content {
    width: 1190px;
    margin: 0 auto;
    .content-tit {
      display: flex;
      .left {
        width: 500px;
        > img {
          width: 500px;
          height: 500px;
        }
        .button {
          width: 130px;
          height: 29px;
          border: 1px solid rgba(198, 176, 142, 1);
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(198, 176, 142, 1);
          line-height: 29px;
          text-align: center;
        }
        .item-img {
          display: flex;
          flex-wrap: wrap;
          > img {
            width: 90px;
            height: 90px;
            margin-right: 8px;
            margin-bottom: 8px;
          }
        }
      }

      .right {
        flex: 1;
        box-sizing: border-box;
        padding: 15px 20px;
        .r-title {
          display: flex;
          justify-content: space-between;
          .r-left {
            > p {
              font-size: 24px;
              font-family: PingFang SC;
              font-weight: bold;
              color: rgba(0, 0, 0, 1);
            }

            > span {
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(156, 156, 156, 1);
              line-height: 26px;
              padding-left: 14px;
            }
          }
          .r-right {
            > p {
              font-size: 21px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(196, 171, 136, 1);
              line-height: 27px;
            }

            > span {
              font-size: 17px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(156, 156, 156, 1);
              line-height: 27px;
            }
          }
        }
        .r-item1 {
          width: 100%;
          display: flex;
          box-sizing: border-box;
          padding: 10px 10px;
          margin-top: 10px;
          .r-i-left {
            width: 50px;
            font-size: 14px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(156, 156, 156, 1);
            line-height: 26px;
          }
          .r-i-right {
            flex: 1;
            display: flex;
            > img {
              width: 50px;
              height: 50px;
              margin-right: 10px;
            }
            .bottom {
              width: 181px;
              height: 54px;
              border: 1px solid rgba(198, 176, 142, 1);
              font-size: 21px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(198, 176, 142, 1);
              line-height: 32px;
              line-height: 54px;
              text-align: center;
              margin-right: 15px;
              cursor: pointer;
            }
            .bottom1 {
              width: 181px;
              height: 54px;
              background: #c6b08e;
              font-size: 21px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(255, 255, 255, 1);
              line-height: 32px;
              line-height: 53px;
              text-align: center;
              margin-right: 15px;
              cursor: pointer;
            }
            .cs {
              width: 54px;
              height: 54px;
              border: 1px solid rgba(222, 222, 222, 1);
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(156, 156, 156, 1);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            }
            .num {
              width: 50px;
              height: 29px;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(0, 0, 0, 1);
              border: 1px solid rgba(222, 222, 222, 1);
              line-height: 29px;
              text-align: center;
              margin-right: 10px;
              cursor: pointer;
            }
          }
        }
        .r-content {
          width: 100%;
          background: #f2f2f2;
          box-sizing: border-box;
          padding: 10px 10px;
          .r-item {
            width: 100%;
            display: flex;
            margin-top: 10px;
            .r-i-left {
              width: 50px;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(156, 156, 156, 1);
              line-height: 26px;
            }
            .r-i-right {
              flex: 1;
              > p {
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 400;
                color: rgba(0, 0, 0, 1);
                line-height: 26px;
                > span {
                  color: #c6b08e;
                }
              }
              .one {
                font-size: 18px;
                font-family: PingFang SC;
                font-weight: bold;
                color: rgba(198, 176, 142, 1);
                > span {
                  font-size: 12px !important;
                }
                margin-bottom: 10px;
              }
              .one-b {
                width: 100%;
                display: flex;
                > span {
                  font-size: 16px;
                  font-family: PingFang SC;
                  font-weight: bold;
                  color: rgba(165, 165, 165, 1);
                  line-height: 16px;
                  background: linear-gradient(
                    0deg,
                    rgba(196, 172, 136, 1) 0%,
                    rgba(240, 220, 190, 1) 100%
                  );
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  margin-right: 10px;
                }
                > div {
                  display: flex;
                  flex: 1;
                  justify-content: space-between;
                  > p,
                  > span {
                    font-size: 14px;
                    font-family: PingFang SC;
                    font-weight: 400;
                    color: rgba(165, 165, 165, 1);

                    background: linear-gradient(
                      0deg,
                      rgba(196, 172, 136, 1) 0%,
                      rgba(240, 220, 190, 1) 100%
                    );
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                  }
                }
              }
              .two {
                width: 100%;
                display: flex;
                margin-bottom: 10px;
                .button {
                  font-size: 12px;
                  font-family: PingFang SC;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 1);
                  padding: 5px 10px;
                  background: #c6b08e;
                  margin-right: 10px;
                }
                > span {
                  font-size: 14px;
                  font-family: PingFang SC;
                  font-weight: 400;
                  color: rgba(0, 0, 0, 1);
                  line-height: 26px;
                }
              }
            }
          }
        }
      }
    }
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .carousel {
    width: 100%;
    background: #f2f2f2;
    > p {
      width: 1190px;
      margin: 0 auto;
      font-size: 30px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      margin: 20px auto;
      padding-top: 20px;
    }
    .el-carousel {
      width: 1190px;
      margin: 0 auto;
      height: 300px;
    }
  }
}
</style>