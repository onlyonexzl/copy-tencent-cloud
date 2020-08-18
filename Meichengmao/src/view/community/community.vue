<template>
  <div class="community">
    <div class="titleBannet">
      <div v-for="(item, index) in banner"
           :style="{'color': Bindex === index ? 'rgba(195, 171, 135, 1)' : ''}"
           @click="changeB(index)"
           :key="index">{{item.name}}</div>
    </div>
    <div class="c-content">
      <div class="left">
        <div class="b-content">
          <div class="title-img">
            <div class="b-left">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                   alt="">
              <span>美峰</span>
            </div>
            <div class="b-right">
              <p>关注</p>
            </div>
          </div>
          <div class="texts">
            记录不一样的元宵节。记录不一样。记录不一样的的录不记录 不一样的元宵节。样的元宵节记录不一样的元宵录不节。记录 不一节。记录不
            记录不一样的元宵节
          </div>
          <div class="b">
            <p>26分钟前</p>
            <div>
              <img src="../../assets/img/xxi.png"
                   alt="">9f
              <img src="../../assets/img/dz.png"
                   alt="">9
            </div>
          </div>
        </div>
        <div class="b-content">
          <div class="title-img">
            <div class="b-left">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                   alt="">
              <span>美峰</span>
            </div>
            <div class="b-right">
              <p>关注</p>
            </div>
          </div>
          <div class="texts">
            记录不一样的元宵节。记录不一样。记录不一样的的录不记录 不一样的元宵节。样的元宵节记录不一样的元宵录不节。记录 不一节。记录不
            记录不一样的元宵节
          </div>
          <div class="b">
            <p>26分钟前</p>
            <div>
              <img src="../../assets/img/xxi.png"
                   alt="">9f
              <img src="../../assets/img/dz.png"
                   alt="">9
            </div>
          </div>
        </div>
        <div class="b-content">
          <div class="title-img">
            <div class="b-left">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                   alt="">
              <span>美峰</span>
            </div>
            <div class="b-right">
              <p>关注</p>
            </div>
          </div>
          <div class="texts">
            记录不一样的元宵节。记录不一样。记录不一样的的录不记录 不一样的元宵节。样的元宵节记录不一样的元宵录不节。记录 不一节。记录不
            记录不一样的元宵节
          </div>
          <div class="b">
            <p>26分钟前</p>
            <div>
              <img src="../../assets/img/xxi.png"
                   alt="">9f
              <img src="../../assets/img/dz.png"
                   alt="">9
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="serarch">
          <i class="el-icon-search"></i>
          搜索帖子和圈子
        </div>

        <div class="title-list">
          <div class="title">
            <p>圈子</p>
            <span>更多</span>
          </div>
          <ul>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
            </li>
          </ul>
        </div>

        <div class="bottom-list">
          <div class="title">
            <p>历史圈</p>
            <span>更多</span>
          </div>
          <ul>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
              <div class="b-c-right">
                <p>美峰</p>
                <span>琴：感觉厨艺越来越好了！</span>
              </div>
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
              <div class="b-c-right">
                <p>美峰</p>
                <span>琴：感觉厨艺越来越好了！</span>
              </div>
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
              <div class="b-c-right">
                <p>美峰</p>
                <span>琴：感觉厨艺越来越好了！</span>
              </div>
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
              <div class="b-c-right">
                <p>美峰</p>
                <span>琴：感觉厨艺越来越好了！</span>
              </div>
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
              <div class="b-c-right">
                <p>美峰</p>
                <span>琴：感觉厨艺越来越好了！</span>
              </div>
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
              <div class="b-c-right">
                <p>美峰</p>
                <span>琴：感觉厨艺越来越好了！</span>
              </div>
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
              <div class="b-c-right">
                <p>美峰</p>
                <span>琴：感觉厨艺越来越好了！</span>
              </div>
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
              <div class="b-c-right">
                <p>美峰</p>
                <span>琴：感觉厨艺越来越好了！</span>
              </div>
            </li>
            <li>
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3006636042,1266298353&fm=26&gp=0.jpg"
                   alt="">
              <div class="b-c-right">
                <p>美峰</p>
                <span>琴：感觉厨艺越来越好了！</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'community',

  data () {
    return {
      banner: [{
        name: '帖子'
      }, {
        name: '圈子'
      }, {
        name: '友记'
      }, {
        name: '时光'
      }],
      Bindex: 0,
    }
  },

  methods: {
    changeB (index) {
      this.Bindex = index
    },
  }
}
</script>

<style lang="scss" scoped>
.community {
  width: 100%;
  background: rgba(241, 241, 241, 1);
  .c-content {
    width: 1190px;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    .left {
      width: 817px;
      background: #fff;
      .b-content {
        width: 753px;
        margin: 10px auto;
        padding-top: 20px;
        padding-bottom: 40px;
        border-bottom: solid 1px rgba(241, 241, 241, 1);
        .title-img {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .b-left {
            display: flex;
            align-items: center;
            > img {
              width: 72px;
              height: 72px;
              border-radius: 92px;
              margin-right: 20px;
            }
            > span {
              font-size: 20px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: rgba(4, 11, 40, 1);
            }
          }

          .b-right {
            width: 90px;
            height: 43px;
            background: rgba(195, 171, 135, 1);
            opacity: 0.5;
            border-radius: 43px;
            cursor: pointer;
            > p {
              font-size: 17px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #000;
              height: 100%;
              line-height: 43px;
              text-align: center;
            }
          }
        }
        .texts {
          width: 753px;
          margin: 20px auto;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          -webkit-box-orient: vertical;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(81, 81, 81, 1);
        }
        .b {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(156, 156, 156, 1);
          > div {
            display: flex;
            align-items: center;
            img {
              width: 16px;
              height: 16px;
              margin-right: 10px;
              margin-left: 15px;
              cursor: pointer;
            }
          }
        }
      }
    }
    .right {
      width: 356px;
      .bottom-list {
        width: 100%;
        background: #fff;
        box-sizing: border-box;
        padding: 0 30px 20px 30px;
        margin-top: 20px;
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 0;
          > p {
            font-size: 25px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
          }
          > span {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            cursor: pointer;
          }
        }
        > ul {
          li {
            display: flex;
            margin-bottom: 16px;
            > img {
              width: 55px;
              height: 55px;
              border-radius: 55px;
              margin-right: 19px;
            }
            > div {
              p {
                font-size: 20px;
                font-family: PingFang SC;
                font-weight: bold;
                color: rgba(0, 0, 0, 1);
              }
              span {
                font-size: 15px;
                font-family: PingFang SC;
                font-weight: 400;
                color: rgba(156, 156, 156, 1);
                margin-bottom: 5px;
                line-height: 30px;
              }
              border-bottom: solid 1px rgba(241, 241, 241, 1);
            }
          }
        }
      }
      .title-list {
        width: 100%;
        background: #fff;
        box-sizing: border-box;
        padding: 0 30px 20px 30px;
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 0;
          > p {
            font-size: 25px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
          }
          > span {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            cursor: pointer;
          }
        }

        > ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          > li {
            width: 89px;
            height: 113px;
            margin: 10px 0;

            > img {
              cursor: pointer;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .serarch {
        cursor: pointer;
        background: #fff;
        width: 100%;
        height: 85px;
        line-height: 85px;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(188, 188, 188, 1);
        margin-bottom: 20px;
        i {
          margin: 0 10px 0 20px;
        }
      }
    }
  }
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
}
</style>
