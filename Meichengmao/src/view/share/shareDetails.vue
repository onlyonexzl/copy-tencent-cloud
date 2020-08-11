<template>
  <div class="shareDetails">
    <div class="content">
      <div class="left">
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3198119266,1962613803&fm=11&gp=0.jpg"
             alt="">
        <div class="bottom">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3198119266,1962613803&fm=11&gp=0.jpg"
               alt="">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3198119266,1962613803&fm=11&gp=0.jpg"
               alt="">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3198119266,1962613803&fm=11&gp=0.jpg"
               alt="">
        </div>
        <div class="text">
          记录不一样的元宵节。记录不一样。记录不一样的的录不记录 不一样的元宵节。样的元宵节记录不一样的元宵录不节。
          记录不一样的元宵节
        </div>
        <div class="iconHtml">
          <div>15天前 <span>|</span> 5.6w人浏览 <span>|</span> 96评论</div>
          <div class="imgAll">
            <img src="../../assets/img/fx.png"
                 alt="">4
            <img src="../../assets/img/xx.png"
                 alt="">5
            <img src="../../assets/img/dz.png"
                 alt=""> 6
          </div>
        </div>
        <div class="search">
          <el-input placeholder="请输入内容"
                    style="border: solid 1px #fff"
                    v-model="input"
                    clearable>
          </el-input>
          <div class="searchList">
            发表
          </div>
        </div>

        <!-- ------------ -->
        <div class="b-content">
          <div class="title-img">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                 alt="">
            <span>美峰</span>
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
          搜索你感兴趣的
        </div>
        <div class="r-content">
          <div class="title-img">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                 alt="">
            <p>美峰</p>
            <div>
              24岁 <span>|</span> 巨蟹座 <span>|</span> 170cm
            </div>
            <div class="r-bottom">
              <div>
                <img src="../../assets/img/j.png"
                     alt="">
                关注
              </div>
              <div>
                <img src="../../assets/img/xxi.png"
                     alt="">
                私聊
              </div>
            </div>
          </div>

          <div class="c-list">
            <div>
              <p>28</p>
              <span>粉丝</span>
            </div>
            <div>
              <p>8</p>
              <span>关注</span>
            </div>
            <div>
              <p>280</p>
              <span>种草力</span>
            </div>
          </div>

          <div class="img-list">
            <div>
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1125941625,1150255869&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <div>
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1125941625,1150255869&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <div>
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1125941625,1150255869&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <div>
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1125941625,1150255869&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <div>
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1125941625,1150255869&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <div>
              <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1125941625,1150255869&fm=26&gp=0.jpg"
                   alt="">
            </div>
          </div>

          <div class="orrr">
            <span style="cursor: pointer;">查看更多</span> <i class="el-icon-arrow-right"
               style="cursor: pointer;"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shareDetails',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-input--suffix .el-input__inner {
  border-color: rgba(214, 214, 214, 1) !important;
}
.shareDetails {
  width: 100%;
  background: rgba(242, 242, 242, 1);
  .content {
    width: 1190px;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    .left {
      width: 825px;
      background: #fff;
      padding-top: 50px;
      .b-content {
        width: 753px;
        margin: 10px auto;
        padding-bottom: 40px;
        border-bottom: solid 1px rgba(241, 241, 241, 1);
        .title-img {
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
        .texts {
          width: 753px;
          margin: 20px auto;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
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
      > img {
        width: 753px;
        height: 753px;
        display: block;
        margin: 0 auto;
      }
      .bottom {
        width: 753px;
        display: flex;
        margin: 20px auto;
        > img {
          width: 86px;
          height: 86px;
          margin-right: 10px;
          cursor: pointer;
        }
      }
      .text {
        width: 753px;
        margin: 0 auto;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(81, 81, 81, 1);
      }

      .search {
        width: 753px;
        margin: 20px auto;
        display: flex;
        .searchList {
          width: 122px;
          height: 40px;
          background: rgba(195, 171, 135, 1);
          color: #fff;
          line-height: 40px;
          text-align: center;
          cursor: pointer;
          margin-left: 30px;
        }
      }

      .iconHtml {
        width: 753px;
        display: flex;
        justify-content: space-between;
        margin: 10px auto;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(156, 156, 156, 1);
        align-items: center;
        .imgAll {
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

    .right {
      width: 355px;
      .r-content {
        width: 100%;
        background: #fff;
        padding-top: 50px;
        text-align: center;
        .title-img {
          text-align: center;
          width: 100%;
          > img {
            width: 85px;
            height: 85px;
            border-radius: 85px;
          }
          > p {
            font-size: 17px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            line-height: 24px;
            margin: 10px 0 13px 0;
          }
          > div {
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            line-height: 24px;
            > span {
              color: rgba(214, 214, 214, 1);
              margin: 0 7px;
            }
          }
        }

        .orrr {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 24px;
          padding: 50px 0;
        }
        .img-list {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          margin: 40px 0 10px 0;
          > div {
            width: 33%;
            height: 100px;
            text-align: center;
            margin-bottom: 10px;
            img {
              width: 70px;
              height: 100%;
            }
          }
        }

        .c-list {
          width: 100%;
          display: flex;
          justify-content: space-between;
          > div {
            width: 33.3%;
            text-align: center;
            > p {
              font-size: 18px;
              font-family: PingFang SC;
              font-weight: bold;
              color: rgba(0, 0, 0, 1);
              line-height: 19px;
            }
            > span {
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(156, 156, 156, 1);
              line-height: 19px;
              line-height: 30px;
            }
          }
        }

        .r-bottom {
          width: 90%;
          margin: 20px auto;
          display: flex;
          justify-content: space-between;
          > div {
            width: 130px;
            height: 41px;
            border: 1px solid rgba(195, 171, 135, 1);
            color: rgba(195, 171, 135, 1);
            line-height: 41px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 15px;
              height: 15px;
              margin-right: 5px;
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
}
</style>
