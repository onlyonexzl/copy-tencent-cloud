<template>
  <div class="share">
    <div class="content">
      <div class="left">
        <div class="itemImg">
          <div class="titleImg">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503317983,643396446&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <div class="title">
            <div class="img">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <span style="font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);">美峰</span>
          </div>
          <p>150斤大妈店主【高胖壮 的女生怎么穿？】有多蔷薇花去见客户去靠近我</p>
        </div>
        <div class="itemImg">
          <div class="titleImg">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503317983,643396446&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <div class="title">
            <div class="img">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <span style="font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);">美峰</span>
          </div>
          <p>150斤大妈店主【高胖壮 的女生怎么穿？】有多蔷薇花去见客户去靠近我</p>
        </div>
        <div class="itemImg">
          <div class="titleImg">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503317983,643396446&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <div class="title">
            <div class="img">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <span style="font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);">美峰</span>
          </div>
          <p>150斤大妈店主【高胖壮 的女生怎么穿？】有多蔷薇花去见客户去靠近我</p>
        </div>
      </div>
      <div class="center">
        <div class="c-top">
          <p>购物<span style="color: rgba(44, 44, 44, 1)">商城</span> <span style="font-size:16px;font-family:PingFang SC;font-weight:400color:rgba(156,156,156,1);line-height:20px;">潮流新品抢先购</span></p>
          <ul>
            <li v-for="(item, index) in 12"
                :key="index"
                @click="geDetail">
              <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3040179631,1673596982&fm=26&gp=0.jpg"
                   alt="">
              <p>上衣</p>
            </li>
          </ul>
          <div class="list">
            <div v-for="(item, index) in list"
                 @click="changList(index)"
                 :class="Lindex === index ? 'Lactive' : ''"
                 :key="index">{{item}}</div>
          </div>
        </div>

        <div class="messige">
          <div class="textarea">
            <el-input type="textarea"
                      :rows="8"
                      style="width:80%"
                      placeholder="请输入内容"
                      v-model="textarea">
            </el-input>
            <i class="el-icon-paperclip"></i>
            <i class="el-icon-camera"></i>
          </div>
          <div class="m-bottom">
            <div>
              <i class="el-icon-user-solid"></i>
              <span>@</span>
              <span>#</span>
            </div>
            <div>
              可见范围：
              <el-select v-model="selectV"
                         style="width: 80px; border:none"
                         placeholder="请选择">
                <el-option v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                </el-option>
              </el-select>
              <div class="button">发表</div>
            </div>
          </div>
        </div>
        <div class="m-footer">
          <el-select v-model="selectV"
                     style="width: 80px; border:none; font-size:21px;font-family:PingFang SC;font-weight:400;color:rgba(0,0,0,1);line-height:14px;"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
          <div>
            <i class="el-icon-refresh-right"></i>
            <i class="el-icon-setting"></i>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="itemImg">
          <div class="titleImg">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503317983,643396446&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <div class="title">
            <div class="img">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <span style="font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);">美峰</span>
          </div>
          <p>150斤大妈店主【高胖壮 的女生怎么穿？】有多蔷薇花去见客户去靠近我</p>
        </div>
        <div class="itemImg">
          <div class="titleImg">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503317983,643396446&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <div class="title">
            <div class="img">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <span style="font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);">美峰</span>
          </div>
          <p>150斤大妈店主【高胖壮 的女生怎么穿？】有多蔷薇花去见客户去靠近我</p>
        </div>
        <div class="itemImg">
          <div class="titleImg">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503317983,643396446&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <div class="title">
            <div class="img">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                   alt="">
            </div>
            <span style="font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);">美峰</span>
          </div>
          <p>150斤大妈店主【高胖壮 的女生怎么穿？】有多蔷薇花去见客户去靠近我</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="itemImg">
        <div class="titleImg">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503317983,643396446&fm=26&gp=0.jpg"
               alt="">
        </div>
        <div class="title">
          <div class="img">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <span style="font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);">美峰</span>
        </div>
        <p>150斤大妈店主【高胖壮 的女生怎么穿？】有多蔷薇花去见客户去靠近我</p>
      </div>
      <div class="itemImg">
        <div class="titleImg">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503317983,643396446&fm=26&gp=0.jpg"
               alt="">
        </div>
        <div class="title">
          <div class="img">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <span style="font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);">美峰</span>
        </div>
        <p>150斤大妈店主【高胖壮 的女生怎么穿？】有多蔷薇花去见客户去靠近我</p>
      </div>
      <div class="itemImg">
        <div class="titleImg">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503317983,643396446&fm=26&gp=0.jpg"
               alt="">
        </div>
        <div class="title">
          <div class="img">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <span style="font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);">美峰</span>
        </div>
        <p>150斤大妈店主【高胖壮 的女生怎么穿？】有多蔷薇花去见客户去靠近我</p>
      </div>
      <div class="itemImg">
        <div class="titleImg">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503317983,643396446&fm=26&gp=0.jpg"
               alt="">
        </div>
        <div class="title">
          <div class="img">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <span style="font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);">美峰</span>
        </div>
        <p>150斤大妈店主【高胖壮 的女生怎么穿？】有多蔷薇花去见客户去靠近我</p>
      </div>
      <div class="itemImg">
        <div class="titleImg">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503317983,643396446&fm=26&gp=0.jpg"
               alt="">
        </div>
        <div class="title">
          <div class="img">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <span style="font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);">美峰</span>
        </div>
        <p>150斤大妈店主【高胖壮 的女生怎么穿？】有多蔷薇花去见客户去靠近我</p>
      </div>
      <div class="itemImg">
        <div class="titleImg">
          <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3503317983,643396446&fm=26&gp=0.jpg"
               alt="">
        </div>
        <div class="title">
          <div class="img">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3888702264,905975814&fm=26&gp=0.jpg"
                 alt="">
          </div>
          <span style="font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);">美峰</span>
        </div>
        <p>150斤大妈店主【高胖壮 的女生怎么穿？】有多蔷薇花去见客户去靠近我</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'share',
  data () {
    return {
      list: ['时尚套装', '连衣裙', '百搭T恤', '人气衬衫', '心机吊带', '休闲裤', '荷叶边雪纺衫', '牛仔裤', '半身裙', '凉鞋'],
      Lindex: 0,
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
      textarea: ''
    }
  },

  methods: {
    changList (index) {
      this.Lindex = index
    },

    geDetail () {
      this.$router.push('/share/shareDetails')
    }
  }
}
</script>

<style lang="scss" scopde>
.Lactive {
  border: 1px solid rgba(195, 171, 135, 1) !important;
  color: rgba(195, 171, 135, 1) !important;
  background: rgba(195, 171, 135, 0.3) !important;
}

.itemImg {
  cursor: pointer;
  width: 183px;
  background: #fff;
  padding-bottom: 20px;
  margin-bottom: 20px;
  .titleImg {
    width: 100%;
    height: 235px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    width: 100%;
    display: flex;
    align-items: center;
    .img {
      width: 32px;
      height: 32px;
      overflow: hidden;
      padding: 13px 0;
      margin: 0 10px;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
      }
    }
  }

  > p {
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(156, 156, 156, 1);
    line-height: 20px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    box-sizing: border-box;
    padding: 0 10px;
  }
}

.share {
  width: 100%;
  background: rgba(242, 242, 242, 1);
  padding: 20px 0;
  .footer {
    width: 1190px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .content {
    width: 1190px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .center {
      width: 793px;
      .c-top {
        box-sizing: border-box;
        padding: 42px 20px;
        background: #fff;

        > p {
          font-size: 30px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(195, 171, 135, 1);
        }
        > ul {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          margin-top: 50px;
          > li {
            width: 25%;
            text-align: center;
            margin-bottom: 30px;
            > img {
              width: 76px;
              border-radius: 4px;
              height: 76px;
              cursor: pointer;
            }
            > p {
              font-size: 15px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(0, 0, 0, 1);
              line-height: 25px;
            }
          }
        }
        .list {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          > div {
            cursor: pointer;
            width: 130px;
            height: 40px;
            background: rgba(242, 242, 242, 1);
            border: solid 1px rgba(242, 242, 242, 1);
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            line-height: 20px;
            text-align: center;
            line-height: 40px;
            margin-bottom: 20px;
          }
        }
      }
      .messige {
        width: 100%;
        margin-top: 20px;
        background: #fff;
        box-sizing: border-box;
        padding: 20px;

        .m-bottom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          > :first-child {
            i,
            span {
              color: rgba(0, 0, 0, 1);
              font-size: 24px;
              margin-right: 10px;
              cursor: pointer;
            }
          }
          > div {
            display: flex;
            align-items: center;
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(156, 156, 156, 1);
            line-height: 20px;
            .button {
              cursor: pointer;
              width: 90px;
              height: 36px;
              color: #fff;
              background: rgba(195, 171, 135, 1);
              text-align: center;
              line-height: 36px;
            }
          }
        }

        .textarea {
          width: 100%;
          display: flex;
          align-items: center;
          border-bottom: solid 1px rgba(242, 242, 242, 1);
          padding-bottom: 20px;
          > i {
            margin-left: 28px;
            cursor: pointer;
            font-size: 24px;
          }
        }
      }
      .m-footer {
        width: 100%;
        margin-top: 20px;
        line-height: 70px;
        height: 70px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > div {
          > i {
            cursor: pointer;
            font-size: 22px;
            color: rgba(0, 0, 0, 1);
            margin-right: 20px;
          }
        }
      }
    }

    .left,
    .right {
      width: 183px;
    }
  }
}
</style>
