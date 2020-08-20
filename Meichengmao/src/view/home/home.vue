<template>
  <div class="home">
    <div class="banner-title">
      <div class="b-content">
        <ul>
          <li class="homeLogin"> <img src="../../assets/img/loginFFF.png"
                 alt=""> 美城茂首页</li>
          <span>|</span>
          <li> {{LocationProvince}}-{{LocationCity}}[切换]</li>
        </ul>
        <ul>
          <li @click="goLogin">登陆</li>
          <li @click="$router.push('/registered')">注册</li>
          <li @click="$router.push('/myShopping/myOrder')">我的美城</li>
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
    <div class="
              bannerOrSearch">
      <div class="icon"
           v-if="flag">
        <h1 class="titleHome"> <img src="../../assets/img/login.png"
               alt=""></h1>
      </div>
      <div class="search"
           v-if="flag">
        <div class="left">
          <el-select v-model="selectV"
                     style="width: 20%; border:none"
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
      <div class="banner"
           v-if="navFlag">
        <span v-for="(item, index) in banner"
              style="border-bottom: solid 1px #fff"
              :class="Aindex === index ? 'active' : ''"
              @click="goDetial(item, index)"
              :key="index">
          {{item.name}}
        </span>
      </div>
    </div>
    <div class="carousel"
         v-if="flag && bannerFlag">
      <el-carousel style="height: 450px">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <h3 class="small">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <router-view></router-view>
    <div class="c-footer">
      <div class="f-content">
        <div class="f-title">
          <p><img src="../../assets/img/bLogin.png"
                 alt=""></p>
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
      flag: true,
      banner: [{
        name: '杂志',
        link: '/homePage'
      }, {
        name: '商店',
        link: '/shop/shopContent'
      }, {
        name: '问答',
        link: '/question'
      }, {
        name: '分享',
        link: '/share'
      }, {
        name: '特价',
        link: '/specialOffer'
      }, {
        name: '拍卖',
        link: '/auction'
      }, {
        name: '集市',
        link: '/market'
      }, {
        name: '团购',
        link: '/groupBuying'
      }, {
        name: '服务',
        link: '/service'
      }, {
        name: '交友',
        link: '/friends'
      }, {
        name: '视频',
        link: '/video'
      }, {
        name: '社区',
        link: '/community'
      }],
      routerIndex: ['homePage', 'shop', 'question', 'share', 'specialOffer', 'auction', 'market', 'groupBuying', 'service', 'friends', 'video', 'community'],
      value: '',
      bannerFlag: true,
      navFlag: true,
      Aindex: 0,
      LocationProvince: "正在定位所在省",    //给渲染层定义一个初始值
      LocationCity: "正在定位所在市",    //给渲染层定义一个初始值
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
    }
  },

  methods: {
    goDetial (e, index) {
      if (window.location.href.split('#')[1] === e.link) return false
      if (e.link) {
        this.navIndex = index
        this.$router.push(e.link)
      }
    },

    changeFlag () {
      let array = [
        '/share/shareDetails',
        '/management',
        '/myShopping/myOrder',
        '/myShopping/knowledgeOrder',
        '/myShopping/doubleOrder',
        '/myShopping/returnChannel',
        '/myShopping/myAuction',
        '/myShopping/luckyDraw',
        '/myShopping/coupon',
        '/myShopping/credit',
        '/myShopping/evaluate',
        '/bellesLettres/article',
        '/bellesLettres/addArticle',
        '/bellesLettres/release',
        '/President/community',
        '/President/addCommunity',
        '/participateIn/joinTheCommunity',
        '/participateIn/myFriend',
        '/participateIn/conversation',
        '/participateIn/myComment',
        '/participateIn/share',
        '/ask/askList',
        '/ask/commentList',
        '/follow/followList',
        '/mySocialLife/information',
        '/mySocialLife/editInformation',
        '/mySocialLife/wantToBuy',
        '/mySocialLife/informationVIP',
        '/mySocialLife/wantToBuyVIP',
        '/mySocialLife/leaveAmessage',
        '/mySocialLife/myMessage',
        '/errorMessage',
        '/myZhiyun/information',
        '/myZhiyun/editInformation',
        '/myZhiyun/wantToBuy',
        '/myZhiyun/informationVIP',
        '/myZhiyun/wantToBuyVIP',
        '/myZhiyun/leaveAmessage',
        '/myZhiyun/myMessage',
        '/myZhiyun/orderList',
        '/myZhiyun/returnChannel',
        '/manufacturing/information', //----------------manufacturing
        '/manufacturing/editInformation',
        '/manufacturing/wantToBuy',
        '/manufacturing/informationVIP',
        '/manufacturing/wantToBuyVIP',
        '/manufacturing/leaveAmessage',
        '/manufacturing/myMessage',
        '/manufacturing/orderList',
        '/manufacturing/returnChannel',
        '/meichengManagement/information', //----------------meichengManagement
        '/meichengManagement/editInformation',
        '/meichengManagement/wantToBuy',
        '/meichengManagement/informationVIP',
        '/meichengManagement/wantToBuyVIP',
        '/meichengManagement/leaveAmessage',
        '/meichengManagement/myMessage',
        '/meichengManagement/orderList',
        '/meichengManagement/returnChannel',
        '/consulting/information', //----------------consulting
        '/consulting/editInformation',
        '/consulting/wantToBuy',
        '/consulting/informationVIP',
        '/consulting/wantToBuyVIP',
        '/consulting/leaveAmessage',
        '/consulting/myMessage',
        '/consulting/orderList',
        '/consulting/returnChannel',
        '/innovation/information', //----------------innovation
        '/innovation/editInformation',
        '/innovation/wantToBuy',
        '/innovation/informationVIP',
        '/innovation/wantToBuyVIP',
        '/innovation/leaveAmessage',
        '/innovation/myMessage',
        '/innovation/orderList',
        '/innovation/returnChannel',
        '/meichengService/information', //----------------meichengService
        '/meichengService/editInformation',
        '/meichengService/wantToBuy',
        '/meichengService/informationVIP',
        '/meichengService/wantToBuyVIP',
        '/meichengService/leaveAmessage',
        '/meichengService/myMessage',
        '/meichengService/orderList',
        '/meichengService/returnChannel',
        '/ventureCapital/information', //----------------ventureCapital
        '/ventureCapital/editInformation',
        '/ventureCapital/wantToBuy',
        '/ventureCapital/informationVIP',
        '/ventureCapital/wantToBuyVIP',
        '/ventureCapital/leaveAmessage',
        '/ventureCapital/myMessage',
        '/ventureCapital/orderList',
        '/ventureCapital/returnChannel',
        '/myCollection'
      ]
      console.log(window.location.href.split('#')[1].split('?')[0])
      this.Aindex = this.routerIndex.indexOf(window.location.href.split('#')[1].split('/')[1])
      this.flag = array.indexOf(window.location.href.split('#')[1].split('?')[0]) > -1 ? false : true
    },

    bannerFlags () {
      let array = ['/login', '/password', '/registered', '/management']
      this.bannerFlag = array.indexOf(window.location.href.split('#')[1]) > -1 ? false : true
    },

    navFlags () {
      let array = [
        '/management',
        '/myShopping/myOrder',
        '/myShopping/knowledgeOrder',
        '/myShopping/doubleOrder',
        '/myShopping/returnChannel',
        '/myShopping/myAuction',
        '/myShopping/luckyDraw',
        '/myShopping/coupon',
        '/myShopping/credit',
        '/myShopping/evaluate',
        '/bellesLettres/article',
        '/bellesLettres/release',
        '/President/community',
        '/participateIn/myFriend',
        '/participateIn/conversation', ,
        '/participateIn/myComment',
        '/participateIn/share',
        '/participateIn/joinTheCommunity',
        '/President/addCommunity',
        '/bellesLettres/addArticle',
        '/ask/askList',
        '/ask/commentList',
        '/follow/followList',
        '/mySocialLife/information',
        '/mySocialLife/editInformation',
        '/mySocialLife/wantToBuy',
        '/mySocialLife/informationVIP',
        '/mySocialLife/wantToBuyVIP',
        '/mySocialLife/leaveAmessage',
        '/mySocialLife/myMessage',
        '/errorMessage',
        '/myZhiyun/information', //----------------manufacturing
        '/myZhiyun/editInformation',
        '/myZhiyun/wantToBuy',
        '/myZhiyun/informationVIP',
        '/myZhiyun/wantToBuyVIP',
        '/myZhiyun/leaveAmessage',
        '/myZhiyun/myMessage',
        '/myZhiyun/orderList',
        '/myZhiyun/returnChannel',
        '/manufacturing/information', //----------------meichengManagement
        '/manufacturing/editInformation',
        '/manufacturing/wantToBuy',
        '/manufacturing/informationVIP',
        '/manufacturing/wantToBuyVIP',
        '/manufacturing/leaveAmessage',
        '/manufacturing/myMessage',
        '/manufacturing/orderList',
        '/manufacturing/returnChannel',
        '/meichengManagement/information', //----------------consulting
        '/meichengManagement/editInformation',
        '/meichengManagement/wantToBuy',
        '/meichengManagement/informationVIP',
        '/meichengManagement/wantToBuyVIP',
        '/meichengManagement/leaveAmessage',
        '/meichengManagement/myMessage',
        '/meichengManagement/orderList',
        '/meichengManagement/returnChannel',
        '/consulting/information', //----------------innovation
        '/consulting/editInformation',
        '/consulting/wantToBuy',
        '/consulting/informationVIP',
        '/consulting/wantToBuyVIP',
        '/consulting/leaveAmessage',
        '/consulting/myMessage',
        '/consulting/orderList',
        '/consulting/returnChannel',
        '/innovation/information', //----------------meichengService
        '/innovation/editInformation',
        '/innovation/wantToBuy',
        '/innovation/informationVIP',
        '/innovation/wantToBuyVIP',
        '/innovation/leaveAmessage',
        '/innovation/myMessage',
        '/innovation/orderList',
        '/innovation/returnChannel',
        '/meichengService/information', //----------------ventureCapital
        '/meichengService/editInformation',
        '/meichengService/wantToBuy',
        '/meichengService/informationVIP',
        '/meichengService/wantToBuyVIP',
        '/meichengService/leaveAmessage',
        '/meichengService/myMessage',
        '/meichengService/orderList',
        '/meichengService/returnChannel',
        '/ventureCapital/information', //----------------ventureCapital
        '/ventureCapital/editInformation',
        '/ventureCapital/wantToBuy',
        '/ventureCapital/informationVIP',
        '/ventureCapital/wantToBuyVIP',
        '/ventureCapital/leaveAmessage',
        '/ventureCapital/myMessage',
        '/ventureCapital/orderList',
        '/ventureCapital/returnChannel',
        '/myCollection'
      ]
      this.navFlag = array.indexOf(window.location.href.split('#')[1].split('?')[0]) > -1 ? false : true
    },

    goLogin () {
      this.$router.push('/login')
    }
  },

  mounted () {
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

    this.changeFlag()
    this.bannerFlags()
    this.navFlags()
  },

  watch: {
    $route (to, from) {
      this.changeFlag()
      this.bannerFlags()
      this.navFlags()
    }
  },
}

</script>

<style lang="scss" scoped>
.titleHome {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  padding-top: 20px;
  > img {
    width: 150px;
    margin-right: 10px;
  }
}

.homeLogin {
  display: flex;
  align-items: center;
  > img {
    margin-right: 10px;
  }
}
/deep/ .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

/deep/ .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/deep/ .el-carousel__container {
  height: 100%;
}

.bannerOrSearch {
  .active {
    cursor: pointer;
    color: rgba(195, 171, 135, 1) !important;
    border-bottom: solid 2px rgba(195, 171, 135, 1) !important;
  }

  /deep/ .el-input--suffix .el-input__inner {
    border-color: #fff !important;
  }

  width: 1190px;
  margin: 0 auto;
  text-align: center;
  .icon {
    margin: 16px 0 19px 0;
  }
  .search {
    width: 550px;
    height: 45px;
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
      line-height: 50px;
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
      border-bottom: solid 2px rgba(195, 171, 135, 1) !important;
    }
  }
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
        > img {
          width: 200px;
        }
      }

      > span {
        height: 21px;
        font-size: 18px;
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
          width: 50px;
          height: 51px;
          font-size: 25px;
          text-align: center;
          line-height: 51px;
          border: 2px solid rgba(255, 255, 255, 1);
          border-radius: 50%;
        }
        > p {
          font-size: 21px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 24px;
          margin-top: 28px;
          margin-bottom: 9px;
        }

        > span {
          font-size: 15px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 24px;
        }
      }
    }
  }
}

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
