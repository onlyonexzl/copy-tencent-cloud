<template>
  <div class="service">
    <div class="titleBannet">
      <div v-for="(item, index) in banner"
           :style="{'color': Bindex === index ? 'rgba(195, 171, 135, 1)' : ''}"
           @click="changeB(index)"
           :key="index">{{item.name}}</div>
    </div>
    <div class="grid">
      <div class="item">
        <p>苏州房产</p>
        <div class="tip">
          <span>特惠九成新家具 </span>
        </div>
        <div class="list">
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
            <li>商铺出租</li>
            <li>商铺出售</li>
            <li>生意转让</li>
            <li>写字楼出租</li>
            <li>写字楼出售</li>
          </ul>
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <p>跳蚤市场</p>
        <div class="tip">
          <span>特惠九成新家具 </span>
        </div>
        <div class="list">
          <p>二手手机 </p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
            <li>商铺出租</li>
            <li>商铺出售</li>
            <li>生意转让</li>
            <li>写字楼出租</li>
            <li>写字楼出售</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
            <li>商铺出租</li>
            <li>商铺出售</li>
            <li>生意转让</li>
            <li>写字楼出租</li>
            <li>写字楼出售</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
            <li>商铺出租</li>
            <li>商铺出售</li>
            <li>生意转让</li>
            <li>写字楼出租</li>
            <li>写字楼出售</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
            <li>商铺出租</li>
            <li>商铺出售</li>
            <li>生意转让</li>
            <li>写字楼出租</li>
            <li>写字楼出售</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
            <li>商铺出租</li>
            <li>商铺出售</li>
            <li>生意转让</li>
            <li>写字楼出租</li>
            <li>写字楼出售</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
            <li>商铺出租</li>
            <li>商铺出售</li>
            <li>生意转让</li>
            <li>写字楼出租</li>
            <li>写字楼出售</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
            <li>商铺出租</li>
            <li>商铺出售</li>
            <li>生意转让</li>
            <li>写字楼出租</li>
            <li>写字楼出售</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
            <li>商铺出租</li>
            <li>商铺出售</li>
            <li>生意转让</li>
            <li>写字楼出租</li>
            <li>写字楼出售</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
            <li>商铺出租</li>
            <li>商铺出售</li>
            <li>生意转让</li>
            <li>写字楼出租</li>
            <li>写字楼出售</li>
          </ul>
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <p>苏州房产</p>
        <div class="tip">
          <span>特惠九成新家具 </span>
        </div>
        <div class="list">
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
          </ul>
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <p>苏州房产</p>
        <div class="tip">
          <span>特惠九成新家具 </span>
        </div>
        <div class="list">
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
            <li>商铺出租</li>
            <li>商铺出售</li>
            <li>生意转让</li>
            <li>写字楼出租</li>
            <li>写字楼出售</li>
          </ul>
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <p>苏州房产</p>
        <div class="tip">
          <span>特惠九成新家具 </span>
        </div>
        <div class="list">
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
          </ul>
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <p>苏州房产</p>
        <div class="tip">
          <span>特惠九成新家具 </span>
        </div>
        <div class="list">
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
          </ul>
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <p>苏州房产</p>
        <div class="tip">
          <span>特惠九成新家具 </span>
        </div>
        <div class="list">
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
          </ul>
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
          </ul>
        </div>
      </div>
      <div class="item">
        <p>苏州房产</p>
        <div class="tip">
          <span>特惠九成新家具 </span>
        </div>
        <div class="list">
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
            <li>二手房</li>
            <li>安选房源</li>
            <li>新房</li>
          </ul>
          <p>品牌楼盘</p>
          <ul>
            <li>租房</li>
            <li>整租</li>
            <li>合租</li>
            <li>民宿短租</li>
            <li>品牌公寓</li>
            <li>个人房源</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service',
  data () {
    return {
      banner: [{
        name: '招聘'
      }, {
        name: '房产'
      }, {
        name: '汽车'
      }, {
        name: '二手'
      }, {
        name: '家政'
      }, {
        name: '教育'
      }, {
        name: '休闲'
      }, {
        name: '宠物'
      }, {
        name: '家政'
      }, {
        name: '商务'
      }, {
        name: '服务'
      }],
      Bindex: 0,
    }
  },

  methods: {
    changeB (index) {
      this.Bindex = index
    },
  },

  mounted () {
    let elem = document.querySelector(".grid")
    var msnry = new Masonry(elem, {
      itemSelector: '.item',
      columnWidth: 40
    })
  }
}
</script>

<style lang="scss" scoped>
.service {
  width: 100%;
  background: rgba(242, 242, 242, 1);
  padding-bottom: 20px;
  .titleBannet {
    width: 1190px;
    height: 80px;
    background: #fff;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 50px;
    > div {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(165, 165, 165, 1);
      line-height: 26px;
      cursor: pointer;
    }
  }

  .grid {
    width: 1190px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 270px;
      background: #fff;
      box-sizing: border-box;
      padding: 20px;
      height: auto;
      margin-top: 20px;
      > p {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 26px;
        margin: 70px 0 0 0;
      }
      .tip {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        border-bottom: solid 1px rgba(241, 241, 241, 1);
        margin-bottom: 20px;
        > span {
          margin-right: 20px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(195, 171, 135, 1);
          line-height: 60px;
        }
      }
      .list {
        > p {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(165, 165, 165, 1);
          line-height: 60px;
        }
        > ul {
          display: flex;
          flex-wrap: wrap;
          > li {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            line-height: 36px;
            margin-right: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
