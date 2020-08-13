<template>
  <div class="friends">
    <div class="titleBannet">
      <div v-for="(item, index) in banner"
           :style="{'color': Bindex === index ? 'rgba(195, 171, 135, 1)' : ''}"
           @click="changeB(index)"
           :key="index">{{item.name}}</div>
    </div>
    <div class="f-content">
      <div class="item">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3396083117,1072163643&fm=26&gp=0.jpg"
             alt="">
        <p>默默大师</p>
        <div class="tip">
          30岁
          <span>|</span>
          巨蟹座
          <span>|</span>
          170cm
        </div>
        <div class="text">
          每日拥有好心情每日好心情
        </div>
        <div class="bottom">
          <div class="left o"
               v-if="!flag"
               @click="change">
            <img src="../../assets/img/loveFalse.png"
                 alt="">
            <p>关注</p>
          </div>
          <div class="left"
               @click="change"
               v-if="flag">
            <img src="../../assets/img/love.png"
                 alt="">
            <p>已关注</p>
          </div>
          <div>
            <img src="../../assets/img/xxi.png"
                 alt="">
            <p>聊天</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3396083117,1072163643&fm=26&gp=0.jpg"
             alt="">
        <p>默默大师</p>
        <div class="tip">
          30岁
          <span>|</span>
          巨蟹座
          <span>|</span>
          170cm
        </div>
        <div class="text">
          每日拥有好心情每日好心情
        </div>
        <div class="bottom">
          <div class="left o"
               v-if="!flag"
               @click="change">
            <img src="../../assets/img/loveFalse.png"
                 alt="">
            <p>关注</p>
          </div>
          <div class="left"
               @click="change"
               v-if="flag">
            <img src="../../assets/img/love.png"
                 alt="">
            <p>已关注</p>
          </div>
          <div>
            <img src="../../assets/img/xxi.png"
                 alt="">
            <p>聊天</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3396083117,1072163643&fm=26&gp=0.jpg"
             alt="">
        <p>默默大师</p>
        <div class="tip">
          30岁
          <span>|</span>
          巨蟹座
          <span>|</span>
          170cm
        </div>
        <div class="text">
          每日拥有好心情每日好心情
        </div>
        <div class="bottom">
          <div class="left o"
               v-if="!flag"
               @click="change">
            <img src="../../assets/img/loveFalse.png"
                 alt="">
            <p>关注</p>
          </div>
          <div class="left"
               @click="change"
               v-if="flag">
            <img src="../../assets/img/love.png"
                 alt="">
            <p>已关注</p>
          </div>
          <div>
            <img src="../../assets/img/xxi.png"
                 alt="">
            <p>聊天</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3396083117,1072163643&fm=26&gp=0.jpg"
             alt="">
        <p>默默大师</p>
        <div class="tip">
          30岁
          <span>|</span>
          巨蟹座
          <span>|</span>
          170cm
        </div>
        <div class="text">
          每日拥有好心情每日好心情
        </div>
        <div class="bottom">
          <div class="left o"
               v-if="!flag"
               @click="change">
            <img src="../../assets/img/loveFalse.png"
                 alt="">
            <p>关注</p>
          </div>
          <div class="left"
               @click="change"
               v-if="flag">
            <img src="../../assets/img/love.png"
                 alt="">
            <p>已关注</p>
          </div>
          <div>
            <img src="../../assets/img/xxi.png"
                 alt="">
            <p>聊天</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3396083117,1072163643&fm=26&gp=0.jpg"
             alt="">
        <p>默默大师</p>
        <div class="tip">
          30岁
          <span>|</span>
          巨蟹座
          <span>|</span>
          170cm
        </div>
        <div class="text">
          每日拥有好心情每日好心情
        </div>
        <div class="bottom">
          <div class="left o"
               v-if="!flag"
               @click="change">
            <img src="../../assets/img/loveFalse.png"
                 alt="">
            <p>关注</p>
          </div>
          <div class="left"
               @click="change"
               v-if="flag">
            <img src="../../assets/img/love.png"
                 alt="">
            <p>已关注</p>
          </div>
          <div>
            <img src="../../assets/img/xxi.png"
                 alt="">
            <p>聊天</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3396083117,1072163643&fm=26&gp=0.jpg"
             alt="">
        <p>默默大师</p>
        <div class="tip">
          30岁
          <span>|</span>
          巨蟹座
          <span>|</span>
          170cm
        </div>
        <div class="text">
          每日拥有好心情每日好心情
        </div>
        <div class="bottom">
          <div class="left o"
               v-if="!flag"
               @click="change">
            <img src="../../assets/img/loveFalse.png"
                 alt="">
            <p>关注</p>
          </div>
          <div class="left"
               @click="change"
               v-if="flag">
            <img src="../../assets/img/love.png"
                 alt="">
            <p>已关注</p>
          </div>
          <div>
            <img src="../../assets/img/xxi.png"
                 alt="">
            <p>聊天</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3396083117,1072163643&fm=26&gp=0.jpg"
             alt="">
        <p>默默大师</p>
        <div class="tip">
          30岁
          <span>|</span>
          巨蟹座
          <span>|</span>
          170cm
        </div>
        <div class="text">
          每日拥有好心情每日好心情
        </div>
        <div class="bottom">
          <div class="left o"
               v-if="!flag"
               @click="change">
            <img src="../../assets/img/loveFalse.png"
                 alt="">
            <p>关注</p>
          </div>
          <div class="left"
               @click="change"
               v-if="flag">
            <img src="../../assets/img/love.png"
                 alt="">
            <p>已关注</p>
          </div>
          <div>
            <img src="../../assets/img/xxi.png"
                 alt="">
            <p>聊天</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3396083117,1072163643&fm=26&gp=0.jpg"
             alt="">
        <p>默默大师</p>
        <div class="tip">
          30岁
          <span>|</span>
          巨蟹座
          <span>|</span>
          170cm
        </div>
        <div class="text">
          每日拥有好心情每日好心情
        </div>
        <div class="bottom">
          <div class="left o"
               v-if="!flag"
               @click="change">
            <img src="../../assets/img/loveFalse.png"
                 alt="">
            <p>关注</p>
          </div>
          <div class="left"
               @click="change"
               v-if="flag">
            <img src="../../assets/img/love.png"
                 alt="">
            <p>已关注</p>
          </div>
          <div>
            <img src="../../assets/img/xxi.png"
                 alt="">
            <p>聊天</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3396083117,1072163643&fm=26&gp=0.jpg"
             alt="">
        <p>默默大师</p>
        <div class="tip">
          30岁
          <span>|</span>
          巨蟹座
          <span>|</span>
          170cm
        </div>
        <div class="text">
          每日拥有好心情每日好心情
        </div>
        <div class="bottom">
          <div class="left o"
               v-if="!flag"
               @click="change">
            <img src="../../assets/img/loveFalse.png"
                 alt="">
            <p>关注</p>
          </div>
          <div class="left"
               @click="change"
               v-if="flag">
            <img src="../../assets/img/love.png"
                 alt="">
            <p>已关注</p>
          </div>
          <div>
            <img src="../../assets/img/xxi.png"
                 alt="">
            <p>聊天</p>
          </div>
        </div>
      </div>
      <div class="item">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3396083117,1072163643&fm=26&gp=0.jpg"
             alt="">
        <p>默默大师</p>
        <div class="tip">
          30岁
          <span>|</span>
          巨蟹座
          <span>|</span>
          170cm
        </div>
        <div class="text">
          每日拥有好心情每日好心情
        </div>
        <div class="bottom">
          <div class="left o"
               v-if="!flag"
               @click="change">
            <img src="../../assets/img/loveFalse.png"
                 alt="">
            <p>关注</p>
          </div>
          <div class="left"
               @click="change"
               v-if="flag">
            <img src="../../assets/img/love.png"
                 alt="">
            <p>已关注</p>
          </div>
          <div>
            <img src="../../assets/img/xxi.png"
                 alt="">
            <p>聊天</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'friends',
  data () {
    return {
      banner: [{
        name: '我喜欢的'
      }, {
        name: '喜欢我的'
      }, {
        name: '附近的人'
      }, {
        name: '兴趣交友'
      }, {
        name: '婚恋相亲'
      }, {
        name: '条件筛选'
      }],
      Bindex: 0,
      flag: false
    }
  },

  methods: {
    changeB (index) {
      this.Bindex = index
    },
    change () {
      this.flag = !this.flag
    }
  }

}
</script>

<style lang="scss" scopde>
.friends {
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
    box-sizing: border-box;
    padding: 0 50px;
    > div {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(165, 165, 165, 1);
      line-height: 26px;
      cursor: pointer;
      margin-right: 40px;
    }
  }
  .f-content {
    padding-top: 20px;
    width: 1190px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    > :nth-child(5n + 5) {
      margin-right: 0px !important;
    }
    .item {
      width: 224px;
      text-align: center;
      margin-right: 17.5px;
      margin-bottom: 20px;
      > img {
        width: 100%;
        height: 290px;
      }
      > p {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 40px;
      }
      .tip {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 24px;
        > span {
          margin: 0 10px;
          color: rgba(214, 214, 214, 1);
        }
      }
      .text {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(155, 155, 155, 1);
        line-height: 24px;
      }
      .bottom {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(155, 155, 155, 1);
        line-height: 24px;
        > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          > img {
            width: 23px;
            height: 23px;
          }
        }
        .left {
          margin-right: 20px;
          > img {
            width: 25px;
            height: 25px;
          }
        }
        .o {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(155, 155, 155, 1);
          line-height: 24px;
        }
      }
    }
  }
}
</style>