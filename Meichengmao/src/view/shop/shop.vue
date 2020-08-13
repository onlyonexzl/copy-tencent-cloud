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
                   alt="">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2986114791,2667770254&fm=26&gp=0.jpg"
                   alt="">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1805460763,2866488258&fm=26&gp=0.jpg"
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
                   alt="">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2986114791,2667770254&fm=26&gp=0.jpg"
                   alt="">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1805460763,2866488258&fm=26&gp=0.jpg"
                   alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="mock">
        <div class="cont">
          <div class="title">
            <p>服饰</p>
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
                   alt="">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2986114791,2667770254&fm=26&gp=0.jpg"
                   alt="">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1805460763,2866488258&fm=26&gp=0.jpg"
                   alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

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
      threeIndex: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.active {
  cursor: pointer;
  color: rgba(195, 171, 135, 1) !important;
}

.shop {
  width: 100%;
  .all-c {
    width: 100%;

    > :nth-child(odd) {
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
          width: 580px;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .right {
          width: 580px;
          height: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          img {
            width: 49%;
            height: 49%;
          }
        }
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
