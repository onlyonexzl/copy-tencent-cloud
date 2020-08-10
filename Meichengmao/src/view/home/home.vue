<template>
  <div class="home">
    <div class="banner-title">
      <div class="b-content">
        <ul>
          <li>美城茂首页</li>
          <span>|</span>
          <li> {{LocationProvince}}-{{LocationCity}}[切换]</li>
        </ul>
        <ul>
          <li>登陆</li>
          <li>注册</li>
          <li>我的美城</li>
          <span>|</span>
          <li>购物车1件</li>
          <span>|</span>
          <li>收藏夹8件</li>
          <span>|</span>
          <li>手机版</li>
          <span>|</span>
          <li>免费发布</li>
          <span>|</span>
          <li>网站导航</li>
        </ul>
      </div>
    </div>

    <router-view></router-view>

    <div class="footer">
      <div class="footer-website">
        <div class="websiteL">
          <div class="footer-website-group">
            <p>腾讯云计算</p>
            <ul>
              <li>产品</li>
              <li>产阿斯顿啊品</li>
              <li>产品</li>
              <li>产品</li>
            </ul>
          </div>
          <div class="footer-website-group">
            <p>解决方案</p>
            <ul>
              <li>产品请问</li>
              <li>云市请问场</li>
              <li>认证蔷薇蔷薇信息</li>
              <li>产品请问请问</li>
              <li>产阿请问斯顿啊品</li>
              <li>产请问品</li>
              <li>产请问品</li>
            </ul>
          </div>
          <div class="footer-website-group">
            <p>资源和社区</p>
            <ul>
              <li>产我企鹅品</li>
              <li>云啊市场</li>
              <li>产品和发布</li>
              <li>认证阿斯顿说信息</li>
              <li>产品行请问</li>
              <li>斯顿啊品</li>
              <li>产说品</li>
              <li>产品</li>
            </ul>
          </div>
          <div class="footer-website-group">
            <p>合作与生态</p>
            <ul>
              <li>产品</li>
              <li>云市场</li>
              <li>和发布</li>
              <li>认证信息</li>
              <li>产我品</li>
            </ul>
          </div>
          <div class="footer-website-group">
            <p>管理和支持</p>
            <ul>
              <li>产品</li>
              <li>云市去我场</li>
              <li>产品和发布</li>
              <li>认证我企鹅信息</li>
              <li>产品我请问</li>
              <li>产我阿斯顿啊品</li>
            </ul>
          </div>
        </div>
        <div class="websiteR">
          <div>
            Copyright © 2013 - 2020
            Tencent Cloud. All Rights Reserved.
            腾讯云 版权所有
          </div>
          <div class="buttonS">购买咨询-----</div>
        </div>
      </div>
      <div class="footer-recommend">
        <div>
          <ul class="footer-recommend-cell">
            <p>热门产品</p>
            <li>域名注册</li>
            <li>云务器</li>
            <li>区块链服务</li>
            <li>消息队列</li>
            <li>域名解析</li>
            <li>视直播</li>
            <li>云储</li>
            <li>云数据库</li>
            <li>消息队列</li>
            <li>网络加速</li>
          </ul>
          <ul class="footer-recommend-cell">
            <p>热门推荐</p>
            <li>域名注册</li>
            <li>云服务器</li>
            <li>区块链服务</li>
            <li>消列</li>
            <li>域析</li>
            <li>视直播</li>
            <li>云存储</li>
            <li>云数据库</li>
            <li>消息队列</li>
            <li>网络加速</li>
          </ul>
          <ul class="footer-recommend-cell">
            <p>更多推荐</p>
            <li>域名注册</li>
            <li>云务器</li>
            <li>区服务</li>
            <li>消息队列</li>
            <li>域名解析</li>
            <li>视频直播</li>
            <li>云存储</li>
            <li>云数据</li>
            <li>消列qwe</li>
            <li>网加速</li>
          </ul>
        </div>
      </div>

      <div class="footer-blogroll">
        <div>
          <ul class="footer-recommend-cell">
            <p style="margin-right:20px">tencent</p>
            <li> 腾讯开放平台</li>
            <li>云腾讯会议</li>
            <li> 腾讯优图</li>
            <li>消息队列</li>
            <li>域名解析</li>
            <li> 微信公众平台</li>
            <li>消息队列</li>
            <li>网络加速</li>
          </ul>
          <ul class="footer-recommend-cell">
            <li style="margin-left: 0">京公网安备 11010802017518</li>
            <li>云服务器</li>
            <li> 粤B2-20090059-1</li>
            <span>域名注册服务机构批复文号：京信信管发〔2018〕156号 鲁通管〔2019〕83号</span>
          </ul>
          <ul class="footer-recommend-cell">
            <span style="margin-left:0">代理域名注册服务机构：烟台帝思普网络科技有限公司（DNSPod） 新网数码</span>
          </ul>
        </div>
      </div>
    </div>
    <template>
      <el-backtop></el-backtop>
    </template>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      LocationProvince: "正在定位所在省",    //给渲染层定义一个初始值
      LocationCity: "正在定位所在市",    //给渲染层定义一个初始值
      value: '3.3',
      navIndex: null,
      navJson: [{
        name: '最新活动',
        width: 200,
        // link: '/home/product'
      }, {
        name: '首页',
        width: 200,
        link: '/home/product'
      }, {
        name: '产品',
        width: 200,
        link: '/product'
      }, {
        name: '解决方案',
        width: 600,
        link: '/solution'
      }, {
        name: '文档',
        width: 700,
        link: '/price'
      }, {
        name: '云市场',
        width: 300,
        link: '/marketHome/viewPage'
      }, {
        name: '人工智能',
        width: 100
      }, {
        name: '金融科技',
        width: 20
      }, {
        name: '开放平台',
        width: 500
      }, {
        name: '开源社区',
        width: 800
      }, {
        name: '产业互联',
        width: 300
      }, {
        name: '生态合作'
      }],

      left: 0,

      activeQ: false,
      activeF: false,
    }
  },

  methods: {
    goHomePage () {
      this.$router.push('/homepage')
    },
    mouseOver (e) {
      let name = e.srcElement.className
      if (name !== 'hoverColor') return false
      if (name === 'hoverColor') {
        let width = e.srcElement.children[0].children[1].clientWidth,
          x = e.target.offsetLeft
        if (x - 20 > width / 2) {
          this.left = - (width / 2) + 10 + 'px'
        } else {
          this.left = (- x + 20) + 'px'
        }
      }
    },
    mouseLeave (e) {
      // console.log(e)
    },

    login () {
      this.$router.push('/login')
    },

    registered () {
      this.$router.push('/registered')
    },

    registereDteil (res) {
      if (res === 'f') {
        this.$router.push({
          path: '/registeredQ',
        })
      } else {
        this.$router.push({
          path: '/registeredF',
        })
      }
    },

    goDetial (e, index) {
      if (e === 'home') {
        this.$router.push('/home/product')
        this.navIndex = null
        return false
      }
      if (window.location.href.split('#')[1] === e.link) return false
      if (e.link) {
        this.navIndex = index
        this.$router.push(e.link)
      }
    }
  },

  mounted () {
    this.navJson.forEach((item, index) => {
      if (item.link === window.location.href.split('#')[1]) {
        this.navIndex = index
      }
    })
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
  },
}

</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .banner-title {
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, 1);
    .b-content {
      width: 1199px;
      min-width: 1199px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      ul {
        display: flex;
        width: auto;
        font-size: 13px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
        li,
        span {
          margin-right: 10px;
        }

        li:hover {
          cursor: pointer;
          color: rgba(195, 171, 135, 1) !important;
        }
      }
    }
  }

  .footer {
    width: 100%;
    box-sizing: border-box;
    padding: 0 200px;
    background: #2d3033;
    .footer-website {
      width: 100%;
      padding-bottom: 27px;
      min-height: 200px;
      display: flex;
      box-sizing: border-box;
      border-bottom: 1px solid #45484c;
      margin-bottom: 5px;
      padding-top: 30px;
      .websiteL {
        flex: 1;
        display: flex;
        justify-content: space-between;
        .footer-website-group {
          flex: 1;
          > p {
            margin-bottom: 15px;
            font-size: 14px;
            line-height: 1.5;
            font-weight: 400;
            color: #fff;
          }
          > ul li {
            cursor: pointer;
            display: block;
            padding: 4px 0;
            font-size: 12px;
            line-height: 1.5;
            color: #ccc;
          }
          > ul li:hover {
            color: rgba(195, 171, 135, 1) !important;
          }
        }
      }
      .websiteR {
        width: 190px;
        > div {
          margin-bottom: 14px;
          font-size: 12px;
          line-height: 24px;
          color: #ccc;
        }
      }
    }

    .footer-inner {
      width: 100%;
      height: 93px;
      border-bottom: 1px solid #45484c;
      display: flex;
      align-items: center;
      > ul {
        display: flex;
        width: 100%;
        justify-content: space-between;
        color: #fff;
        li > i {
          vertical-align: middle;
          margin-right: 10px;
          font-size: 32px;
        }
        li > span {
          font-size: 14px;
          color: #fff;
        }
      }
    }

    .footer-blogroll {
      width: 100%;
      min-height: 133px;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #45484c;
      // align-items: center;
      justify-content: center;
      > div {
        min-height: 72px;
        > ul {
          display: flex;
          // justify-content: space-between;
          margin-bottom: 10px;
          > p {
            font-size: 14px;
            color: #fff;
            font-weight: 400;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }

          > li {
            font-size: 12px;
            color: #999;
            // width: 80px;
            // margin: 0 40px;
            margin-left: 20px;
          }

          > span {
            font-size: 12px;
            color: #999;
            white-space: nowrap;
            margin-left: 20px;
          }

          > li:hover {
            cursor: pointer;
            color: rgba(195, 171, 135, 1);
          }
        }
      }
    }

    .footer-recommend {
      width: 100%;
      min-height: 133px;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #45484c;
      // align-items: center;
      justify-content: center;
      > div {
        min-height: 72px;
        > ul {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          > p {
            font-size: 14px;
            color: #fff;
            font-weight: 400;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }

          > li {
            font-size: 12px;
            color: #999;
            width: 60px;
          }

          > li:hover {
            cursor: pointer;
            color: rgba(195, 171, 135, 1);
          }
        }
      }
    }
  }
}

.hoverColor:hover {
  cursor: pointer;
  color: rgba(195, 171, 135, 1) !important;
}
</style>
