<template>
  <div class="management"
       :style="{'height': height}"
       ref="management">
    <el-container>
      <el-aside width="auto"
                :style="{'height': height}">
        <el-col :span="12">
          <div class="tit">
            <div class="item">
              <div>
                <img src="../../assets/img/loginFFF.png"
                     @click="right"
                     alt="" />
              </div>
              <span v-if="!isCollapse"
                    @click="geColund">我的美城</span>
            </div>
            <i class="el-icon-s-fold"
               v-if="!isCollapse"
               @click="left"></i>
          </div>
          <el-menu :default-active="index_menu"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   active-text-color="#c3ab87"
                   :unique-opened="true"
                   @close="handleClose"
                   :collapse="isCollapse">
            <!-- <el-menu-item index="0"
                            @click="goRightDetial('one')">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </template>
              </el-menu-item> -->

            <!-- 一级菜单 -->
            <el-submenu v-for="(menu_one, index_one) in menu"
                        :index="index_one + 1 + ''"
                        :key="index_one">
              <template slot="title">
                <i :class="menu_one.icon"></i>
                <span slot="title">{{ menu_one.name }}</span>
              </template>
              <!-- 二级菜单  没有子集菜单-->
              <el-menu-item v-for="(menu_two, index_two) in menu_one.subset"
                            v-if="!menu_two.actions"
                            :key="index_two"
                            @click="
                    goRightDetial(
                      'two',
                      menu_two,
                      index_one + 1 + '-' + (index_two + 1)
                    )
                  "
                            :index="index_one + 1 + '-' + (index_two + 1)">
                <template slot="title">
                  <i :class="menu_two.icon"></i>
                  <span slot="title">{{ menu_two.name }}</span>
                </template>
              </el-menu-item>

              <!-- 二级菜单 有子集-->
              <el-submenu v-for="(menu_two, index_two) in menu_one.subset"
                          v-if="menu_two.actions"
                          :key="index_two"
                          :index="index_one + 1 + '-' + (index_two + 1)">
                <template slot="title">
                  <i :class="menu_two.icon"></i>
                  <span slot="title">{{ menu_two.name }}</span>
                </template>
                <el-menu-item v-for="(menu_three, index_three) in menu_two.actions"
                              :key="index_three"
                              @click="
                      goRightDetial(
                        'three',
                        menu_three,
                        index_one +
                          1 +
                          '-' +
                          (index_two + 1) +
                          '-' +
                          index_three
                      )
                    "
                              :index="
                      index_one + 1 + '-' + (index_two + 1) + '-' + index_three
                    ">
                  <template slot="title">
                    <i :class="menu_three.icon"></i>
                    <span slot="title">{{ menu_three.name }}</span>
                  </template>
                </el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <!-- <el-header>
          <div class="mp_header">
            <el-popover placement="top-start"
                        trigger="hover">
              <div class="tip">
                <ul>
                  <li><i class="el-icon-unlock"></i> 修改密码</li>
                  <li><i class="el-icon-lock"></i> 退出登陆</li>
                </ul>
              </div>
              <div class="rightIcon"
                   slot="reference">
                <i class="el-icon-user-solid"></i> 超管
                <i class="el-icon-arrow-down"></i>
              </div>
            </el-popover>
          </div>
        </el-header> -->
        <el-main :style="{'height': leftHeight}">
          <div class="item-box"
               v-if="flagtit">
            <ul class="box pad">
              <li v-for="(item, index) in meta"
                  :key="index">
                {{ item }}
                <i class="el-icon-arrow-right"
                   v-if="index !== meta.length - 1"></i>
              </li>
            </ul>
          </div>
          <!-- v-if="goReturn" -->
          <div class="item_title"
               v-if="flagTttName">
            <span class="left"
                  @click="goBack"><i class="el-icon-arrow-left"></i> 返回</span>
            <p>|</p>
            <span>{{ titleName }}</span>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import nav from "../../router/nav";
export default {
  name: 'management',
  data () {
    return {
      height: window.innerHeight - 40 + 'px',
      leftHeight: window.innerHeight - 80 + 'px',
      isCollapse: false,
      meta: [],
      flagtit: false,
      flagTttName: false,
      menu: nav,
      index_menu: "0",
      titleName: "",
      menu: nav,
    }
  },

  methods: {
    left () {
      this.isCollapse = true;
    },

    geColund () {
      this.$router.push("/homePage");
    },

    right () {
      this.isCollapse = false;
    },

    goRightDetial (type, item, index) {
      sessionStorage.setItem("index_menu", index);
      switch (type) {
        case "one":
          this.$router.push("/homePage");
          break;
        default:
          this.$router.push(item.url);
          break;
      }
    },

    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },

    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },

    // 顶部title显示
    getTitleBox () {
      const routerArray = [
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
        '/participateIn/joinTheCommunity',
        '/participateIn/myFriend',
        '/participateIn/conversation',
        '/participateIn/myComment',
        '/participateIn/share',
        '/ask/askList',
        '/ask/commentList',
        '/follow/followList',
        '/mySocialLife/information',
        '/mySocialLife/wantToBuy',
        '/mySocialLife/informationVIP',
        '/mySocialLife/wantToBuyVIP',
        '/mySocialLife/leaveAmessage',
        '/mySocialLife/myMessage',
        '/myZhiyun/information',
        '/myZhiyun/editInformation',
        '/myZhiyun/wantToBuy',
        '/myZhiyun/informationVIP',
        '/myZhiyun/wantToBuyVIP',
        '/myZhiyun/leaveAmessage',
        '/myZhiyun/myMessage',
        '/myZhiyun/orderList',
        '/myZhiyun/returnChannel',
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
        '/myCollection',
        '/myMoney/browse',
        '/myMoney/creditDetails',
        '/myMoney/capitalDetails',
        '/myMoney/editadvertisingManagement',
        '/myAccount/address',
        '/myAccount/modifyData',
        '/myPromotion/iWantTo',
        '/myPromotion/promotionMembers',
        '/myPromotion/promotionDetails',
        '/myPromotion/ofCommodities',
        '/myPromotion/promotionList',
        '/myPass/myPass',
        '/myPass/passOrder'
      ];

      this.flagtit = routerArray.indexOf(this.$route.path) > -1 ? true : false;
      if (this.$route.meta.length) {
        this.meta = this.$route.meta;
      }
    },

    // 顶部t返回显示
    getTitleName () {
      const routerArray = [
        '/bellesLettres/addArticle',
        '/President/addCommunity',
        '/mySocialLife/editInformation',
        '/myAccount/addAddress'
      ];

      this.flagTttName =
        routerArray.indexOf(this.$route.path) > -1 ? true : false;

      if (this.$route.query.nameType) {
        this.titleName = this.$route.query.nameType;
      }
    },

    goBack () {
      this.$router.go(-1);
    },

    getmenu () {
      if (sessionStorage.getItem("index_menu"))
        this.index_menu = sessionStorage.getItem("index_menu") + "";
      nav.forEach((item, index) => {
        if (item.subset) {
          item.subset.forEach((item_two, index_t) => {
            if (item_two.actions) {
              item_two.actions.forEach((item_f, index_f) => {
                if (item_f.url === this.$route.path) {
                  this.index_menu =
                    index + 1 + "-" + (index_t + 1) + "-" + index_f;
                }
              });
            } else {
              if (item_two.url === this.$route.path) {
                this.index_menu = index + 1 + "-" + (index_t + 1);
              }
            }
          });
        } else {
          if (item.url === this.$route.path) {
            this.index_menu = index + 1;
          }
        }
      });
    }
  },

  mounted () {
    this.getTitleBox()
    this.getTitleName()
    this.getmenu()
  },

  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.getTitleBox()
        this.getTitleName()
        this.getmenu()
      },
      // 深度观察监听
      deep: true
    }
  }
}
</script>


<style lang="scss" scoped>
.el-aside {
}
.el-main {
  display: flex;
  flex-direction: column;
}

.tit {
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  .item {
    // width: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin: 0 10px;
    }
    > div {
      width: 30px;
      > img {
        margin-left: 12px;
        width: 70%;
      }
    }
  }
}

.el-col {
  width: 100%;
  border-right: solid 1px #e6e6e6;
  height: 100%;
  .el-menu {
    border-right: solid 1px #fff !important;
  }
}

.tip {
  width: 100%;
  height: 100%;
  > ul {
    width: 100%;
    height: 100%;
    > li {
      cursor: pointer;
      line-height: 30px;
    }
  }
}
.management {
  width: 100%;
  font-size: 14px;
}

.mp_header {
  width: 100%;
  height: 100%;
}

.mp_header {
  width: auto;
  float: right;
  height: 100%;
  display: flex;
  align-items: center;
  color: #606266;
  font-size: 14px;
  margin-right: 20px;
}

.item_title {
  background: #fff;
  border-radius: 2px;
  margin-bottom: 5px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 10px;
  margin-bottom: 10px;
  > p {
    margin: 0 10px;
  }
  .left {
    cursor: pointer;
  }
}
.item-box {
  background: #fff;
  border-radius: 2px;
  margin-bottom: 5px;
  width: 100%;
  height: 50px;
  .box {
    height: 100%;
    font-weight: 400;
    font-size: 14px;
    color: #606266;
    cursor: text;
    display: flex;
    align-items: center;
    > i {
      color: #c0c4cc;
      margin-right: 10px;
    }
    > li {
      margin-right: 10px;
    }
  }
}
</style>
