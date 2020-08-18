<template>
  <div class="shop">
    <div class="banner-seletc">
      <ul>
        <div class="left">分类：</div>
        <div class="list">
          <li v-for="(item, index) in oneJson"
              :class="oneIndex === index ? 'active': ''"
              :key="index">{{item.name}}</li>
        </div>
      </ul>
      <ul>
        <div class="left">配送地区：</div>
        <div class="list">
          <li v-for="(item, index) in twoJson"
              :class="twoIndex === index ? 'active': ''"
              :key="index">{{item.name}}</li>
        </div>
      </ul>
      <ul>
        <div class="left">排序：</div>
        <div class="list">
          <li v-for="(item, index) in threeJson"
              :class="threeIndex === index ? 'active': ''"
              :key="index">{{item.name}}</li>
        </div>
      </ul>
    </div>
    <div class="allLogin"
         v-if="flag">
      <div class="a-title">
        <p>推荐品牌</p>
        <span>全部</span>
      </div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data () {
    return {
      oneJson: [{
        name: '全部'
      }, {
        name: '主题床品'
      }, {
        name: '抑菌防螨'
      }, {
        name: '春夏好物'
      }, {
        name: '口碑好物'
      }, {
        name: '床套件套'
      }, {
        name: '保证娃大王'
      }, {
        name: '全请问请问请问部'
      }, {
        name: '企鹅我委屈'
      }, {
        name: '请问大叔的小炒'
      }, {
        name: '中小城镇'
      }, {
        name: '阿斯顿'
      }, {
        name: 'v 吃不饱'
      }, {
        name: '饭翻盖翻盖的'
      }, {
        name: '保证娃大王'
      }, {
        name: '全请问请问请问部'
      }, {
        name: '企鹅我委屈'
      }, {
        name: '请问大叔的小炒'
      }, {
        name: '中小城镇'
      }, {
        name: '阿斯顿'
      }, {
        name: 'v 吃不饱'
      }, {
        name: '饭翻盖翻盖的'
      }],
      oneIndex: 0,
      twoJson: [{
        name: '全部'
      }, {
        name: '香港'
      }, {
        name: '澳门'
      }, {
        name: '台湾'
      }, {
        name: '日韩'
      }, {
        name: '欧洲'
      }, {
        name: '美洲'
      }],
      twoIndex: 0,
      threeJson: [{
        name: '全部'
      }, {
        name: '价格'
      }, {
        name: '上架时间'
      }],
      threeIndex: 0,
      flag: false
    }
  },

  mounted () {
    this.flag = window.location.href.split('#')[1] === '/shop/shopDetail' ? true : false
  },

  watch: {
    $route (to, from) {
      this.flag = window.location.href.split('#')[1] === '/shop/shopDetail' ? true : false
    }
  },
}
</script>
<style lang="scss" scoped>
.active {
  cursor: pointer;
  color: rgba(195, 171, 135, 1) !important;
}

.shop {
  width: 100%;
  .allLogin {
    width: 1190px;
    margin: 0 auto 20px;
    > ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      > li {
        width: 285px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(221, 221, 221, 1);
        height: 100px;
        margin-top: 20px;
      }
    }
    .a-title {
      margin: 30px 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      > p {
        font-size: 35px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 25px;
      }
      > span {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 25px;
        cursor: pointer;
      }
    }
  }
  .banner-seletc {
    width: 1190px;
    margin: 0 auto;
    padding-top: 55px;
    padding-bottom: 80px;
    ul {
      width: 100%;
      border-bottom: 1px dotted rgba(221, 221, 221, 1);
      display: flex;
      padding: 20px 0;
      .left {
        min-width: 100px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(156, 156, 156, 1);
        line-height: 26px;
        padding-top: 4px;
      }
      .list {
        display: flex;
        flex-wrap: wrap;
        > li {
          padding: 0 10px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(51, 51, 51, 1);
          line-height: 36px;
          cursor: pointer;
        }
        > li:hover {
          cursor: pointer;
          color: rgba(195, 171, 135, 1) !important;
        }
      }
    }
  }
}
</style>
