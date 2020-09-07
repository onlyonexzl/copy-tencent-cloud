<template>
  <!-- 文档 -->
  <div class="price">
    <div class="banner">
      <div class="overview-hero">
        <p>文档中心</p>
        <div class="hero_input">
          <input type="text" placeholder="请输入关键词搜索产品文档" />
          <i class="el-icon-search"></i>
        </div>
      </div>
      <div class="addition-list">
        <div class="c-a">
          <!-- <div class="addition-item"> -->
          <dl v-for="(item, index) in winData" :key="index">
            <dd>
              <img :src="item.img" alt="" />
            </dd>
            <dt>
              <h4>{{ item.tit }}</h4>
              <p>{{ item.con }}</p>
            </dt>
          </dl>
          <!-- </div> -->
        </div>
      </div>
    </div>
    <div class="floating_cover" v-show="coverTop">
      <div class="cover_input">
        <el-input placeholder="请输入关键词搜索产品文档"></el-input>
        <i class="el-icon-search"></i>
      </div>
      <ul class="cover_ul">
        <li><span>新手入门</span></li>
        <li><span>最佳实践</span></li>
        <li><span>API 中心</span></li>
        <li><span>SDK 中心</span></li>
        <li><span>词汇表</span></li>
      </ul>
    </div>
    <div class="pri_con">
      <div
        :class="fixed ? 'fixed con_left' : 'con_left'"
        :style="absolu ? 'position: absolute;bottom: 0 ; ' : ''"
      >
        <h4>产品类别</h4>
        <div class="navigation">
          <div v-for="(item, index) in cantData" :key="index" class="section">
            <h3 @click="cate_scroll(index)">
              <i class="el-icon-platform-eleme"></i>
              {{ item.name }}
            </h3>
            <ul v-show="item.type">
              <li
                v-for="(itm, idx) in item.data"
                :key="idx"
                @click="scrollGn(itm.cid)"
              >
                {{ itm.cname }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div :class="fixed || absolu ? 'right_fixed con_right' : 'con_right'">
        <div
          v-for="(item, index) in cantData"
          :key="index"
          :class="'inte' + item.id"
        >
          <div
            class="right_ront"
            v-for="(itm, idx) in item.data"
            :key="idx"
            :class="'ront' + itm.cid"
          >
            <h4>{{ itm.cname }}</h4>
            <ul class="ront_con">
              <li v-for="(im, ix) in itm.data" :key="ix">
                <span>{{ im.kname }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jsonData from "./data";
export default {
  name: "price",
  data() {
    return {
      winData: [
        {
          img:
            "https://main.qcloudimg.com/raw/99be35ad0f0a255956a7f5bda3991b71.svg",
          tit: "新手入门",
          con: "简单步骤快速入门"
        },
        {
          img:
            "https://main.qcloudimg.com/raw/50ff0fb113b757bb4ec9282b827dab0f.svg",
          tit: "最佳实践",
          con: "典型场景实践上云"
        },
        {
          img:
            "https://main.qcloudimg.com/raw/5b860b7ec8a89abf85c725f68598ef79.svg",
          tit: "API 中心",
          con: "API 3.0概览与参考"
        },
        {
          img:
            "https://main.qcloudimg.com/raw/6487985f3f38b61f98fc0a60fe5f2686.svg",
          tit: "SDK 中心",
          con: "开发者语言与 SDK"
        },
        {
          img:
            "https://main.qcloudimg.com/raw/216228a9ffdb2d4681f3c307ac2ddafa.svg",
          tit: "词汇表",
          con: "腾讯云基本概念速查"
        }
      ],
      cantData: jsonData.data,
      coverTop: false,
      fixed: "",
      absolu: false,
      dataHeig: []
    };
  },
  mounted() {
    this.dataHeight();
    window.onscroll = () => {
      this.getScrollTop();
    };
  },
  methods: {
    // 获取右侧数据高度
    dataHeight() {
      this.dataHeig = [];
      this.cantData.forEach((item, index) => {
        var getElement = document.getElementsByClassName("inte" + item.id);
        var height =
          getElement[0].offsetTop + getElement[0].offsetParent.offsetTop - 100;
        this.dataHeig.push(height);
      });
      console.log(this.dataHeig);
    },

    // 点击左侧导航定位页面
    scrollGn(id) {
      var str = "ront" + id;
      var getElement = document.getElementsByClassName(str);
      const currentY =
        document.documentElement.scrollTop || document.body.scrollTop;
      const targetY =
        getElement[0].offsetTop + getElement[0].offsetParent.offsetTop - 80;
      this.scrollAnimation(currentY, targetY);
    },

    // 页面定位 滚动动画
    scrollAnimation(currentY, targetY) {
      let needScrollTop = targetY - currentY;
      let _currentY = currentY;
      setTimeout(() => {
        const dist = Math.ceil(needScrollTop / 10);
        _currentY += dist;
        window.scrollTo(_currentY, currentY);
        if (needScrollTop > 10 || needScrollTop < -10) {
          this.scrollAnimation(_currentY, targetY);
        } else {
          window.scrollTo(_currentY, targetY);
        }
      }, 1);
    },

    // 左侧点击 展开
    cate_scroll(index) {
      this.cantData.forEach((item, idx) => {
        item.type = false;
        if (idx == index) {
          item.type = true;
        }
      });
    },

    // 取窗口滚动条高度
    getScrollTop() {
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      var footer = document.getElementsByClassName("footer");
      var conLeft = document.getElementsByClassName("con_left");
      console.log(conLeft[0].offsetHeight);
      var num = footer[0].offsetTop - scrollTop;
      // 浮顶展示
      if (scrollTop > 390) {
        this.coverTop = true;
        this.fixed = true;
      } else {
        this.coverTop = false;
        this.fixed = false;
      }
      // 左侧导航 定位
      // conLeft[0].offsetHeight > num
      if (num < 700) {
        this.absolu = true;
        this.fixed = false;
      } else {
        this.absolu = false;
      }

      // if (scrollTop > this.dataHeig[this.dataHeig.length - 1]) {
      //   this.cate_scroll(this.dataHeig.length - 1);
      // } else {
      //   for (var i = 0; i < this.dataHeig.length; i++) {
      //     if (scrollTop > this.dataHeig[i] < this.dataHeig[i + 1]) {
      //       this.cate_scroll(i);
      //     }
      //   }
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
.price {
  width: 100%;
  height: 100%;

  .floating_cover {
    z-index: 9;
    width: 100%;
    height: 70px;
    background: #f5f7fa;
    border-bottom: 1px solid #e5e8ed;
    box-shadow: 0 2px 4px 0 rgba(3, 27, 78, 0.06);
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 200px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .cover_input {
      width: 35%;
      position: relative;
      .el-icon-search {
        position: absolute;
        top: 12px;
        right: 15px;
        &:hover {
          cursor: pointer;
          color: #00a4ff;
        }
      }
    }
    .cover_ul {
      display: flex;
      li {
        padding: 0 20px;
        border-right: 1px solid #ccc;
        span {
          &:hover {
            cursor: pointer;
            color: #00a4ff;
          }
        }
        &:last-child {
          border-right: none;
        }
      }
    }
  }

  .banner {
    position: relative !important;
    box-sizing: border-box;
    padding: 0 200px;
    width: 100%;
    height: 300px;
    background-image: url("https://main.qcloudimg.com/raw/6cf2d1788b69eea176d95979f67f1d3b.jpg");
    background-position: center top;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    .overview-hero {
      width: 680px;
      text-align: center;
      padding-bottom: 50px;
      .hero_input {
      }
      > p {
        font-size: 35px;
        color: #fff;
        line-height: 56px;
      }
      > span {
        font-size: 16px;
        color: #fff;
        line-height: 40px;
      }
      > div {
        width: 680px;
        height: 40px;
        display: flex;
        line-height: 40px;
        margin-top: 20px;
        > input {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          line-height: normal;
          border-color: #e5e5e5;
          border-right: 0;
          box-shadow: none;
          display: inline-block;
          vertical-align: middle;
          font-size: 15px;
          padding-right: 50px;
          padding-left: 10px;
          border-radius: 2px;
        }
        > i {
          font-size: 16px;
          margin: 0 -30px;
          line-height: 40px;
          background: #fff;
          color: #ababab;
        }
      }
    }

    .addition-list {
      z-index: 1;
      position: absolute;
      left: 50%;
      margin-left: -50%;
      padding: 0 200px;
      box-sizing: border-box;
      top: 250px;
      width: 100%;
      height: 100px;

      .c-a {
        background: #fff;
        -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px 0 rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px 0 rgba(0, 0, 0, 0.1);
        height: 100%;
        display: flex;
        align-items: center;
        dl {
          flex: 1;
          display: flex;
          padding-left: 20px;
          border-right: 1px solid #ccc;
          dd {
          }
          dt {
            margin-left: 10px;
            h4 {
              font-size: 18px;
              font-weight: 400;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              &:hover {
                color: #00a4ff;
              }
            }
            p {
              margin-top: 5px;
              font-size: 15px;
              font-weight: 100;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          &:hover {
            cursor: pointer;
          }
          &:last-child {
            border-right: none;
          }
        }
        .addition-item {
          width: 33%;
          position: relative;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          padding: 30px;
          display: inline-block;
          vertical-align: top;
        }
      }
    }
  }

  .fixed {
    position: fixed;
    top: 100px;
    // left: 200px;
    bottom: 30px;
  }
  .absolues {
    position: absolute;
    bottom: 0;
    left: 200px;
  }
  .right_fixed {
    width: calc(100% - 220px);
    margin-left: 220px;
  }

  .pri_con {
    width: 100%;
    min-height: 500px;
    background: #fff;
    padding: 0 200px;
    box-sizing: border-box;
    display: flex;
    padding-top: 100px;
    position: relative;
    margin-bottom: 60px;
    .con_left {
      width: 220px;
      // height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      padding-right: 5px;
      display: flex;
      flex-direction: column;
      h4 {
        font-size: 18px;
        color: #000;
        line-height: 28px;
        font-weight: 400;
      }
      .navigation {
        overflow-y: auto;
        max-height: 500px;
        margin-top: 12px;
        .section {
          margin-bottom: 10px;
          h3 {
            font-size: 14px;
            color: #000;
            line-height: 24px;
            display: inline-block;
            vertical-align: middle;
            word-wrap: break-word;
            font-weight: 500;
            i {
              color: #00a4ff;
              font-size: 16px;
            }
            &:hover {
              color: #00a4ff;
              cursor: pointer;
            }
          }
          ul {
            position: relative;
            li {
              padding-left: 18px;
              margin-bottom: 4px;
              line-height: 24px;
              font-size: 14px;
              color: #666;
              display: block;
              padding-right: 18px;
              word-wrap: break-word;
              font-weight: 400;
              &:hover {
                color: #00a4ff;
                cursor: pointer;
              }
            }
            :after {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              height: 100%;
              width: 2px;
              background-color: #e5e8ed;
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
    .con_right {
      flex: 1;
      float: right;
      .right_ront {
        width: 100%;
        margin-bottom: 10px;
        h4 {
          font-size: 20px;
          color: #333;
          line-height: 28px;
          font-weight: 400;
        }
        .ront_con {
          width: 100%;
          height: auto;
          border: 1px solid #ccc;
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          padding: 12px 20px 0;
          box-sizing: border-box;
          position: relative;
          li {
            width: 18%;
            padding-left: 5px;
            padding-right: 5px;
            margin-bottom: 10px;
            span {
              font-size: 14px;
              color: #666;
              line-height: 24px;
              vertical-align: 1px;
              display: block;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              &:hover {
                cursor: pointer;
                color: #00a4ff;
              }
            }
          }
        }
      }
    }
  }
}

// 滚动条样式

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
#app div::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
div::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: #fff;
}

/*定义滑块 内阴影+圆角*/
div::-webkit-scrollbar-thumb {
  border-radius: 15px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #aaa;
}
</style>
