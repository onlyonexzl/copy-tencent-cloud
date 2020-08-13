<template>
  <div class="specialOffer">
    <div class="titleBannet">
      <div v-for="(item, index) in banner"
           :style="{'color': Bindex === index ? 'rgba(195, 171, 135, 1)' : ''}"
           @click="changeB(index)"
           :key="index">{{item.name}}</div>
    </div>
    <div class="time-down">
      <!-- <div class="back">{{days}}</div>
      <div class="font-14 date">天</div> -->
      <span>仅限今日 <span>剩余</span></span>
      <div>
        <div class="time">{{hours}}</div>
        <div>:</div>
        <div class="time">{{minutes}}</div>
        <div>:</div>
        <div class="time">{{seconds}}</div>
      </div>
    </div>

    <div class="content">
      <div class="item">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1642683700,2012763080&fm=26&gp=0.jpg"
             alt="">
        <div class="right">
          <div class="titleList">
            <div class="item-l">好货内部价</div>
            <div class="item-l">特价</div>
            <div class="item-l">换购</div>
          </div>
          <div class="r-c">
            优衣库夏日纯棉丝VII棉麻薄透气T 恤纯棉丝
          </div>
          <div class="c-bottom">
            <span>限时价￥25</span><del>￥25</del>
          </div>
        </div>

      </div>
      <div class="item">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1642683700,2012763080&fm=26&gp=0.jpg"
             alt="">
        <div class="right">
          <div class="titleList">
            <div class="item-l">好货内部价</div>
            <div class="item-l">特价</div>
            <div class="item-l">换购</div>
          </div>
          <div class="r-c">
            优衣库夏日纯棉丝VII棉麻薄透气T 恤纯棉丝
          </div>
          <div class="c-bottom">
            <span>限时价￥25</span> <del>￥25</del>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'specialOffer',
  data () {
    return {
      banner: [{
        name: '秒杀'
      }, {
        name: '返利'
      }, {
        name: '特惠'
      }, {
        name: '清仓'
      }, {
        name: '领劵'
      }],
      Bindex: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  },

  created () {
    this.timeDown()
  },

  methods: {
    changeB (index) {
      this.Bindex = index
    },

    timeDown () {
      setInterval(() => {
        var the = new Date()
        var date = new Date('2021-8-30 10:50:20') - the
        var days = Math.floor(date / 1000 / 60 / 60 / 24) // 从这里开始
        var daysmod = date - days * 24 * 60 * 60 * 1000
        var hours = Math.floor(daysmod / 1000 / 60 / 60)
        var hoursmod = date - (days * 24 * 60 * 60 * 1000) - (hours * 1000 * 60 * 60)
        var minutes = Math.floor(hoursmod / 1000 / 60)
        var minutesmod = date - (days * 24 * 60 * 60 * 1000) - (hours * 1000 * 60 * 60) - (minutes * 1000 * 60)
        var seconds = Math.floor(minutesmod / 1000) // 到这里结束，是将总毫秒转化成对应天数+小时数+分钟数+秒数的转换方法

        this.days = days < 10 ? '0' + days : days;
        this.hours = hours < 10 ? '0' + hours : hours;
        this.minutes = minutes < 10 ? '0' + minutes : minutes;
        this.seconds = seconds < 10 ? '0' + seconds : seconds;
      }, 1000)
    }
  },

  computed: {

  }
}
</script>

<style lang="scss" scoped>
.specialOffer {
  width: 100%;
  background: rgba(242, 242, 242, 1);
  .content {
    width: 1190px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 49%;
      background: #fff;
      display: flex;
      margin-bottom: 20px;
      > img {
        width: 230px;
        height: 230px;
        margin-right: 40px;
      }
      .right {
        .c-bottom {
          > span {
            font-size: 20px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(198, 176, 142, 1);
            line-height: 48px;
            margin-right: 10px;
          }
          > del {
            font-size: 15px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(165, 165, 165, 1);
            line-height: 48px;
          }
        }
        .r-c {
          font-size: 20px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 26px;
          margin-bottom: 55px;
        }
        .titleList {
          display: flex;
          margin: 25px 0 20px 0;
          > div {
            background: rgba(198, 176, 142, 1);
            font-size: 12px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 32px;
            width: auto;
            padding: 0 15px;
            margin-right: 7px;
          }
        }
      }
    }
    > :nth-child(odd) {
      margin-right: 2%;
    }
  }
  .titleBannet {
    width: 1190px;
    height: 80px;
    background: #fff;
    display: flex;
    align-items: center;
    margin: 0 auto;
    > div {
      margin-right: 15px;
      margin-left: 20px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(165, 165, 165, 1);
      line-height: 26px;
      cursor: pointer;
    }
  }
  .time-down {
    width: 1190px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    > span {
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(0, 0, 0, 1);
      line-height: 26px;
      margin-right: 15px;
      > span {
        font-size: 15px;
      }
    }
    > div {
      display: flex;
      .time {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #000;
        margin: 0 10px;
        font-size: 15px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
