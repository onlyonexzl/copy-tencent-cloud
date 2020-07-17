<template>
  <div class="viewPage">
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
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
          <li>
            <div class="product-card-hd">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1922255603,2274620061&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <p>分销商城小程序</p>
            <div class="product-card-text">
              <p class="text-tag-warning">
                试用7天
              </p>
              <p class="hot-tips">
                43 人在用
              </p>
            </div>
            <div class="product-card-tryout">
              <p>
                ￥
                <span>0</span>
              </p>
              <p>
                立即枪
              </p>
            </div>
          </li>
        </ul>
        <p> <i class="el-icon-refresh"></i> 换一换</p>
      </div>
    </div>

    <div class="section">
      <div class="s_all">
        <div class="tit">
          <span class="text-gradient">人气</span>
          <span>・畅销榜</span>
        </div>
        <div class="mp__carousel">
          <div class="mp_tit">
            小程序
          </div>
          <div class="mp__seller-list">
            <div class="mp__seller-list-left">
              <div class="mp_img">
                <img src="http://img1.imgtn.bdimg.com/it/u=1642549833,2447185174&fm=26&gp=0.jpg"
                     alt="">
              </div>
              <div class="mp__seller-classify-hd">
                <span>人气分类</span>
                <p>查看更多 <i class="el-icon-arrow-right"></i></p>
              </div>
              <div class="mp__seller-classify-list">
                <ul>
                  <li>电商零售</li>
                  <li>零售</li>
                  <li>游戏</li>
                  <li>生活太难</li>
                  <li>定制开发</li>
                </ul>
              </div>
            </div>
            <div class="mp__seller-list-right">
              <ul>
                <li>
                  <div class="mp_r_img">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3138434373,2661146484&fm=26&gp=0.jpg"
                         alt="">
                  </div>
                  <div class="map_list">
                    <p>三级分销 · 秒杀 · 拼团等</p>
                    <div class="map_t">
                      <span>免费试用</span>
                      <span>买一送一</span>
                    </div>
                    <div class="map_b">
                      <span><span>¥</span>100</span>
                      <span>2000人在用</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mp_r_img">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3138434373,2661146484&fm=26&gp=0.jpg"
                         alt="">
                  </div>
                  <div class="map_list">
                    <p>三级分销 · 秒杀 · 拼团等</p>
                    <div class="map_t">
                      <span>免费试用</span>
                      <span>买一送一</span>
                    </div>
                    <div class="map_b">
                      <span><span>¥</span>100</span>
                      <span>2000人在用</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mp_r_img">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3138434373,2661146484&fm=26&gp=0.jpg"
                         alt="">
                  </div>
                  <div class="map_list">
                    <p>三级分销 · 秒杀 · 拼团等</p>
                    <div class="map_t">
                      <span>免费试用</span>
                      <span>买一送一</span>
                    </div>
                    <div class="map_b">
                      <span><span>¥</span>100</span>
                      <span>2000人在用</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mp_r_img">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3138434373,2661146484&fm=26&gp=0.jpg"
                         alt="">
                  </div>
                  <div class="map_list">
                    <p>三级分销 · 秒杀 · 拼团等</p>
                    <div class="map_t">
                      <span>免费试用</span>
                      <span>买一送一</span>
                    </div>
                    <div class="map_b">
                      <span><span>¥</span>100</span>
                      <span>2000人在用</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mp_r_img">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3138434373,2661146484&fm=26&gp=0.jpg"
                         alt="">
                  </div>
                  <div class="map_list">
                    <p>三级分销 · 秒杀 · 拼团等</p>
                    <div class="map_t">
                      <span>免费试用</span>
                      <span>买一送一</span>
                    </div>
                    <div class="map_b">
                      <span><span>¥</span>100</span>
                      <span>2000人在用</span>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="mp_r_img">
                    <img src="http://img5.imgtn.bdimg.com/it/u=3138434373,2661146484&fm=26&gp=0.jpg"
                         alt="">
                  </div>
                  <div class="map_list">
                    <p>三级分销 · 秒杀 · 拼团等</p>
                    <div class="map_t">
                      <span>免费试用</span>
                      <span>买一送一</span>
                    </div>
                    <div class="map_b">
                      <span><span>¥</span>100</span>
                      <span>2000人在用</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
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

.viewPage {
  // width: 1250px;
}

.section {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0 200px;
  .s_all {
    width: 100%;
    .tit {
      font-size: 30px;
      color: #383838;
      margin: 30px 0px;

      > :first-child {
        color: #f2a056;
        font-weight: 700;
        background-image: -webkit-linear-gradient(left, #f2a056, #f16863);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    }
    .mp__carousel {
      width: 100%;
      .mp_tit {
        margin-bottom: 10px;
        display: inline-block;
        height: 36px;
        line-height: 36px;
        font-size: 22px;
        color: #444;
        transition: color 0.25s;
      }
      .mp__seller-list {
        display: flex;
        height: 410px;
        .mp__seller-list-left {
          width: 390px;
          height: 100%;
          background: #f7f8fa;
          .mp_img {
            width: 100%;
            height: 260px;
            overflow: hidden;
            box-sizing: border-box;
            > img {
              width: 100%;
              height: 100%;
              transition: all 0.6s;
              -ms-transition: all 0.8s;
              cursor: pointer;
            }
            > :hover {
              background: red;
              transform: scale(1.2);
              -ms-transform: scale(1.2);
            }
          }
          .mp__seller-classify-hd {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            margin-top: 10px;
            padding: 0 20px;
            box-sizing: border-box;
            > span {
              vertical-align: middle;
              display: inline-block;
              height: 24px;
              line-height: 24px;
              font-size: 16px;
              color: #4a4a4a;
              font-weight: 700;
            }
            > p {
              vertical-align: middle;
              display: inline-block;
              height: 24px;
              line-height: 24px;
              font-size: 12px;
              color: #696969;
              padding-right: 12px;
              cursor: pointer;
            }
          }
          .mp__seller-classify-list {
            width: 100%;
            box-sizing: border-box;
            padding: 0 20px;
            > ul {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              > li {
                color: #39cd74;
                height: 20px;
                line-height: 18px;
                padding: 0 10px;
                border-radius: 10px;
                border: 1px solid #39cd74;
                font-size: 12px;
                cursor: pointer;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                margin: 10px 10px 5px 0;
              }
            }
          }
        }
        .mp__seller-list-right {
          flex: 1;
          margin-left: 20px;
          > ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            // margin-top: 10px;
            > :first-child {
              margin-top: 0;
            }
            > :nth-child(2) {
              margin-top: 0;
            }
            > li {
              width: 49%;
              height: 130px;
              box-sizing: border-box;
              padding: 10px;
              height: 130px;
              background-color: #f7f8fa;
              transition: all 0.25s;
              display: flex;
              margin-top: 10px;
              .mp_r_img {
                width: 163px;
                height: 109px;
                overflow: hidden;
                > img {
                  width: 100%;
                  height: 100%;
                  transition: all 0.6s;
                  -ms-transition: all 0.8s;
                  cursor: pointer;
                }
                > :hover {
                  background: red;
                  transform: scale(1.2);
                  -ms-transform: scale(1.2);
                }
              }
              .map_list {
                box-sizing: border-box;
                padding: 10px 20px;
                > p {
                  margin-top: 4px;
                  overflow: hidden;
                  overflow: hidden;
                  color: #7f7f7f;
                  height: 16px;
                  line-height: 16px;
                  white-space: nowrap;
                  font-size: 12px;
                  text-overflow: ellipsis;
                }
                .map_t {
                  width: 100%;
                  display: flex;
                  span {
                    display: inline-block;
                    border-width: 1px;
                    border-radius: 2px;
                    border-style: solid;
                    box-sizing: border-box;
                    padding: 0 6px;
                    font-size: 12px;
                    height: 18px;
                    line-height: 16px;
                    color: #f09816;
                    border-color: #f09816;
                    margin: 10px 10px 10px 0;
                  }
                  :last-child {
                    color: #f7756c;
                    border-color: #f7756c;
                  }
                }
                .map_b {
                  display: flex;
                  justify-content: space-between;
                  color: #7f7f7f;
                  font-size: 12px;
                  line-height: 30px;
                  > :first-child {
                    font-size: 22px;
                    color: #f43f2d;
                    margin-right: 5px;
                    display: inline-block;
                    font-family: DINNextLTPro;
                    > span {
                      font-size: 14px !important;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
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
  .mp__tryout {
    width: 100%;
    height: 666px;
    background: #fff;
    box-sizing: border-box;
    padding: 0 20px;
    > p {
      cursor: pointer;
      border-radius: 17px;
      transition: all 0.25s;
      box-sizing: border-box;
      color: #00a4ff;
      font-size: 12px;
      background-repeat: no-repeat;
      background-position: 24px center;
      width: 100%;
      text-align: center;
    }
  }
  .mp__tryout-list {
    width: 100%;
    height: 570px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > li {
      // width: 216px;
      width: 17%;
      height: 250px;
      border: solid 1px #eee;
      .product-card-hd {
        width: 100%;
        height: 144px;
        overflow: hidden;
        > img {
          width: 100%;
          height: 100%;
          transition: all 0.6s;
          -ms-transition: all 0.8s;
          cursor: pointer;
        }
        > :hover {
          background: red;
          transform: scale(1.2);
          -ms-transform: scale(1.2);
        }
      }

      > p {
        line-height: 20px;
        height: 20px;
        display: block;
        font-size: 14px;
        color: #000;
        transition: color 0.15s;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        margin-top: 10px;
      }

      .product-card-text {
        width: 100%;
        height: 34px;
        display: flex;
        justify-content: space-between;
        .text-tag-warning {
          margin-top: 8px;
          display: inline-block;
          border-width: 1px;
          border-radius: 3px;
          border-style: solid;
          box-sizing: border-box;
          padding: 0 6px;
          font-size: 12px;
          height: 18px;
          line-height: 16px;
          color: #f09816;
          border-color: #f09816;
        }
        .hot-tips {
          color: #7f7f7f;
          font-size: 12px;
        }
      }
      .product-card-tryout {
        display: flex;
        > p {
          flex: 1;
        }
        > :first-child {
          display: block;
          height: 28px;
          width: 94px;
          border: 1px solid #f36d4b;
          text-align: center;
          font-size: 24px;
          font-family: DINNextLTPro;
          line-height: 28px;
          color: #f36d4b;
          cursor: default;
        }
        > :last-child {
          float: left;
          height: 30px;
          text-align: center;
          font-size: 14px;
          color: #fff;
          line-height: 30px;
          width: 130px;
          background-color: #f36d4b;
          cursor: pointer;
          transition: background 0.25s;
        }
      }
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
