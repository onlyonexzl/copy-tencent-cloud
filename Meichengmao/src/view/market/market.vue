<template>
  <div class="market">
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
        <div class="content">
          <div class="t-tile">
            <p>口碑好物</p>
            <span>口碑好物</span>
          </div>
          <div class="listCon">
            <div class="item">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=275475408,4194259033&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=275475408,4194259033&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=275475408,4194259033&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=275475408,4194259033&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=275475408,4194259033&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=275475408,4194259033&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=275475408,4194259033&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=275475408,4194259033&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mock">
        <div class="content">
          <div class="t-tile">
            <p>主题床品</p>
            <span>设计点亮，品质当道</span>
          </div>
          <div class="listCon">
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950898029,662357424&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950898029,662357424&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950898029,662357424&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950898029,662357424&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950898029,662357424&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950898029,662357424&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950898029,662357424&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
            <div class="item">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3950898029,662357424&fm=26&gp=0.jpg"
                   alt="">
              <div class="botton">
                <div>特价</div>
                <div>满赠</div>
              </div>
              <div class="text">
                男士无缝链接休闲T恤 夏日必备
              </div>
              <div class="bottom">
                <span>￥25</span>
                <del>￥42</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'market',
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

.market {
  width: 100%;
  .all-c {
    width: 100%;

    > :nth-child(even) {
      background: rgba(242, 242, 242, 1);
    }
    .mock {
      width: 100%;
      padding-top: 40px;
      .content {
        width: 1190px;
        margin: 0 auto;
        text-align: center;
        .listCon {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .item {
            width: 285px;
            > img {
              width: 100%;
              height: 284px;
            }
            .bottom {
              font-size: 22px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(198, 176, 142, 1);
              > del {
                font-size: 15px;
                font-family: PingFang SC;
                font-weight: 400;
                color: rgba(165, 165, 165, 1);
                line-height: 48px;
              }
            }
            .text {
              font-size: 17px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(0, 0, 0, 1);
              line-height: 24px;
              margin-bottom: 14px;
            }
            .botton {
              width: 100%;
              display: flex;
              justify-content: center;
              margin-top: 26px;
              margin-bottom: 16px;
              > div {
                width: 36px;
                height: 21px;
                background: rgba(198, 176, 142, 1);
                font-size: 12px;
                font-family: PingFang SC;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 21px;
                text-align: center;
              }
              :nth-child(1) {
                margin-right: 20px;
              }
            }
          }
        }
        .t-tile {
          font-size: 38px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          line-height: 26px;
          > span {
            font-size: 25px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(156, 156, 156, 1);
            line-height: 26px;
            padding: 23px 0 60px 0;
            display: inline-block;
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
