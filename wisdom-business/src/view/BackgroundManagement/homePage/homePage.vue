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
      <div class="left">
        <div class="topBttom">
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-plus"
                     style="width: 100px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;">
            马上申请
          </el-button>
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-plus"
                     style="width: 100px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;">
            积分购买
          </el-button>
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-plus"
                     style="width: 100px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;">
            商铺续费
          </el-button>
        </div>
        <div class="top">
          <div class="img">
            <el-image>
              <div slot="error"
                   class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
          <div class="mess">
            <ul>
              <li>
                <strong style="font-size: 16px">**********</strong>
                {{LocationProvince}} - {{LocationCity}}
              </li>
              <li>积分购买商家信用：<strong style="color:#f30">0</strong> 买家信用：<strong style="color:#f30">0</strong></li>
              <li>商铺类型：<strong style="color:#f30">销售型</strong> </li>
              <li>商铺等级：旗舰商铺 特权：
                <el-tooltip class="item"
                            style="color: #409eff;cursor: pointer;"
                            effect="dark"
                            placement="top-start">
                  <div slot="content">可上传商品数量：10000个<br />图片空间：5000M <br />可使用模板：10000个 <br /> 可添加页面数量：22个</div>
                  <span>详情</span>
                </el-tooltip>
              </li>
              <li>到期时间：<strong style="color:#f30">2016-11-10</strong> 商铺到期不续费，将自动降级至免费商铺</li>
            </ul>
          </div>
        </div>
        <div class="b-content">
          <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">认证专区：</p>
          <div class="b-c-con">
            <div class="img">
              <i class="el-icon-s-home"></i>
            </div>
            <ul>
              <li>认证等级：旗舰商铺</li>
              <li>
                <span>商家的服务态度：</span>
                <el-rate v-model="value"
                         disabled
                         show-score
                         text-color="#ff9900"
                         score-template="{value}">
                </el-rate>
              </li>
              <li>
                <span>商家发货的速度：</span>
                <el-rate v-model="value"
                         disabled
                         show-score
                         text-color="#ff9900"
                         score-template="{value}">
                </el-rate>
              </li>
              <li>
                <span>商品与描述相符：</span>
                <el-rate v-model="value"
                         disabled
                         show-score
                         text-color="#ff9900"
                         score-template="{value}">
                </el-rate>
              </li>
            </ul>
          </div>
        </div>
        <div class="c-jy">
          <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">交易提醒：</p>
          <ul>
            <li class="hovertext">等待买家付款(13)</li>
            <li class="hovertext">等待您发货 <span style="color:#f30">（4）</span></li>
            <li class="hovertext">等待您发货 <span style="color:#f30">（4）</span></li>
            <li class="hovertext">退款中的商品 <span style="color:#f30">（4）</span></li>
            <li class="hovertext">等待您评价 <span style="color:#f30">（4）</span></li>
          </ul>
        </div>

        <div class="c-shop">
          <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">商品提醒：</p>
          <div>
            <ul>
              <span>商品管理：</span>
              <li class="hovertext">等待买家付款(13)</li>
              <li class="hovertext">等待您发货 </li>
              <li class="hovertext">等待您发货 </li>
              <li class="hovertext">退款中的商品 </li>
              <li class="hovertext">等待您评价 </li>
            </ul>
            <ul>
              <span>广告推荐：</span>
              <li class="hovertext">等待买家付款(13)</li>
              <li class="hovertext">等待您发货 </li>
              <li class="hovertext">等待您发货 </li>
            </ul>
            <ul>
              <span>商品留言：</span>
              <li class="hovertext">等待买家付款(13)</li>
              <li class="hovertext">等待您发货 </li>
              <li class="hovertext">等待您发货 </li>
              <li class="hovertext">退款中的商品 </li>
              <li class="hovertext">等待您评价12312312 </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="rigit">
        <div class="r-p">
          <p>
            <span>商品公告</span>
            <span>更多》</span>
          </p>
          <ul>
            <li><span>好消息！福州交通违法处理可网</span></li>
            <li>注意！明年起，福州市区三环以</li>
            <li>福州美食大全，哪个是你最喜欢</li>
            <li>一口来自1999年的老味道，</li>
            <li>好消息！福州交通违法处理可网</li>
          </ul>
        </div>
        <div class="r-p">
          <p>
            <span>商品公告</span>
            <span>更多》</span>
          </p>
          <ul>
            <li><span>好消息！福州交通违法处理可网</span></li>
            <li>注意！明年起，福州市区三环以</li>
            <li>福州美食大全，哪个是你最喜欢</li>
            <li>福州美食大全，哪个是你最喜欢</li>
            <li>福州美食大全，哪个是你最喜欢</li>
            <li>一口来自1999年的老味道，</li>
            <li>好消息！福州交通违法处理可网</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home page',
  data () {
    return {
      LocationProvince: "正在定位所在省",    //给渲染层定义一个初始值
      LocationCity: "正在定位所在市",    //给渲染层定义一个初始值
      value: '3.3'
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
    background: #fff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    align-items: center;
  }

  .topBttom {
    width: 100%;
    // text-align: right;
    box-sizing: border-box;
    padding: 10px;
    background: #fff;
    // margin-top: 20px;
  }
  .content {
    flex: 1;
    display: flex;
    margin-top: 20px;

    .left {
      background: #fff;
      flex: 1;
      box-sizing: border-box;
      padding: 20px;
      .top {
        display: flex;
        .img {
          width: 130px;
          > img {
            width: 130px;
          }
          .el-image {
            font-size: 130px;
          }
        }
        .mess {
          flex: 1;
          margin-top: 30px;
          margin-left: 20px;
          > ul {
            width: 100%;
            li {
              line-height: 30px;
            }
          }
        }
      }
      .b-content {
        margin-top: 20px;
        .b-c-con {
          display: flex;
          margin-top: 10px;
          height: 130px;
          align-items: center;
          border: solid 1px #e4e4e4;
          box-sizing: border-box;
          padding: 20px;
          .img {
            width: 130px;
            height: 98px;
            > i {
              font-size: 100px;
            }
          }
          > ul {
            width: 100%;
            margin-left: 50px;
            > li {
              line-height: 30px;
              display: flex;
            }
          }
        }
      }
      .c-shop {
        width: 100%;
        margin-top: 20px;
        > div {
          width: 100%;
          margin-top: 10px;
          padding-bottom: 20px;
          padding-left: 20px;
          padding-top: 10px;
          box-sizing: border-box;
          border: solid 1px #e4e4e4;
          ul {
            margin-top: 10px;
            display: flex;
            li {
              margin-right: 10px;
            }
          }
        }
      }

      .c-jy {
        width: 100%;
        margin-top: 20px;
        > ul {
          width: 100%;
          margin-top: 10px;
          display: flex;
          padding: 20px;
          box-sizing: border-box;
          border: solid 1px #e4e4e4;
          li {
            margin-right: 10px;
          }
        }
      }
    }
    .rigit {
      width: 320px;
      margin-left: 20px;
      box-sizing: border-box;
      background: #fff;
      padding: 20px;
      display: flex;
      flex-direction: column;
      .r-p {
        width: 100%;
        border: solid 1px #e4e4e4;
        margin-bottom: 20px;

        > p {
          display: flex;
          background: #eee;
          line-height: 26px;
          padding: 0 18px;
          display: flex;
          justify-content: space-between;
        }
        > ul {
          width: 100%;
          box-sizing: border-box;
          padding: 20px;
          line-height: 30px;
          li {
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
            padding-left: 20px;
            cursor: pointer;
            //小圆点

            &:after {
              content: " ";
              position: absolute;
              left: 0px;
              top: 14px;
              width: 4px;
              height: 4px;
              background-color: #a3a3a3;
              border-radius: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
