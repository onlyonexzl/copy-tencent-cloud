<template>
  <div class="video">
    <div class="titleBannet">
      <div v-for="(item, index) in banner"
           :style="{'color': Bindex === index ? 'rgba(195, 171, 135, 1)' : ''}"
           @click="changeB(index)"
           :key="index">{{item.name}}</div>
    </div>
    <div class="content">
      <div class="item">
        <div class="video-item">
          <video src="../../assets/img/video.mp4"></video>
          <div>
            <p>教你如何选购摩托</p>
            <div @click="play">
              点击播放
            </div>
          </div>
        </div>
        <div class="v-content">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3513988809,3869045628&fm=26&gp=0.jpg"
               alt="">
          <div class="right">
            <p>美峰</p>
            <span>发布于 2020-05-20 14:00:00</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="video-item">
          <video src="../../assets/img/video.mp4"></video>
          <div>
            <p>教你如何选购摩托</p>
            <div @click="play">
              点击播放
            </div>
          </div>
        </div>
        <div class="v-content">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3513988809,3869045628&fm=26&gp=0.jpg"
               alt="">
          <div class="right">
            <p>美峰</p>
            <span>发布于 2020-05-20 14:00:00</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="video-item">
          <video src="../../assets/img/video.mp4"></video>
          <div>
            <p>教你如何选购摩托</p>
            <div @click="play">
              点击播放
            </div>
          </div>
        </div>
        <div class="v-content">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3513988809,3869045628&fm=26&gp=0.jpg"
               alt="">
          <div class="right">
            <p>美峰</p>
            <span>发布于 2020-05-20 14:00:00</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="video-item">
          <video src="../../assets/img/video.mp4"></video>
          <div>
            <p>教你如何选购摩托</p>
            <div @click="play">
              点击播放
            </div>
          </div>
        </div>
        <div class="v-content">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3513988809,3869045628&fm=26&gp=0.jpg"
               alt="">
          <div class="right">
            <p>美峰</p>
            <span>发布于 2020-05-20 14:00:00</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="video-item">
          <video src="../../assets/img/video.mp4"></video>
          <div>
            <p>教你如何选购摩托</p>
            <div @click="play">
              点击播放
            </div>
          </div>
        </div>
        <div class="v-content">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3513988809,3869045628&fm=26&gp=0.jpg"
               alt="">
          <div class="right">
            <p>美峰</p>
            <span>发布于 2020-05-20 14:00:00</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="video-item">
          <video src="../../assets/img/video.mp4"></video>
          <div>
            <p>教你如何选购摩托</p>
            <div @click="play">
              点击播放
            </div>
          </div>
        </div>
        <div class="v-content">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3513988809,3869045628&fm=26&gp=0.jpg"
               alt="">
          <div class="right">
            <p>美峰</p>
            <span>发布于 2020-05-20 14:00:00</span>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="video-item">
          <video src="../../assets/img/video.mp4"></video>
          <div>
            <p>教你如何选购摩托</p>
            <div @click="play">
              点击播放
            </div>
          </div>
        </div>
        <div class="v-content">
          <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3513988809,3869045628&fm=26&gp=0.jpg"
               alt="">
          <div class="right">
            <p>美峰</p>
            <span>发布于 2020-05-20 14:00:00</span>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="视频播放"
               v-if="dialogVisible"
               :visible.sync="dialogVisible"
               :before-close="handleClose">
      <video src="../../assets/img/video.mp4"
             autoplay
             controls="controls"
             width='800px'
             height="500px"></video>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'video',
  data () {
    return {
      banner: [{
        name: '关注'
      }, {
        name: '推荐'
      }],
      Bindex: 0,
      dialogVisible: false
    }
  },

  methods: {
    changeB (index) {
      this.Bindex = index
    },

    play () {
      this.dialogVisible = true
    },

    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-dialog {
  width: 840px !important;
}
.video {
  width: 100%;
  background: rgba(241, 241, 241, 1);
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
  .content {
    width: 1190px;
    margin: 0 auto;
    padding-top: 20px;
    > :nth-child(odd) {
      float: left;
    }

    > :nth-child(even) {
      float: right;
    }
    .item {
      width: 589px;
      .v-content {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        background: #fff;
        margin-bottom: 20px;
        > img {
          width: 65px;
          height: 65px;
          border-radius: 65px;
          margin: 0 17px 0 30px;
        }
        .right {
          > p {
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            line-height: 24px;
            margin-bottom: 12px;
          }
          > span {
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(155, 155, 155, 1);
            line-height: 24px;
          }
        }
      }
      .video-item {
        width: 100%;
        position: relative;
        background: #fff;

        > video {
          width: 100%;
          height: 365px;
        }
        > div {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 333px;
          height: 200px;
          margin-top: -50px;
          margin-left: -166px;
          text-align: center;
          > p {
            font-size: 35px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 47px;
          }

          > div {
            width: 158px;
            height: 42px;
            border: 1px solid rgba(255, 255, 255, 1);
            border-radius: 20px;
            text-align: center;
            line-height: 42px;
            margin: 20px auto;
            font-size: 23px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
