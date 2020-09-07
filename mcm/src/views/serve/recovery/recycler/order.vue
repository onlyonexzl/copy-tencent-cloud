<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="我的回收订单"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="nav">
      <div class="center-nav">
        <ul>
          <li v-for="(item,index) in navList"
              :key="index">
            <span :class="item.active == active?'active':''"
                  @click="changeActive(item.active)">{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <keep-alive>
      <component :is="active"></component>
    </keep-alive>

  </div>
</template>

<script>
import pay from "./order_components/pay";
import recovery from "./order_components/recovery";
import success from "./order_components/success";
export default {
  components: {
    pay,
    recovery,
    success
  },
  data () {
    return {
      navList: [
        { title: "待回收", active: "recovery" },
        { title: "待支付", active: "pay" },
        { title: "已完成", active: "success" }
      ],
      active: "recovery"
    };
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () { },
    changeActive (active) {
      this.active = active;
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  .van-tabs__nav--line {
    width: 60vw;
  }
}
.center-nav {
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    padding: 0.2rem;
    margin: 0.2rem 0;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.34rem;
    margin: 0 0.45rem;
    line-height: 0.3rem;
    color: #b5b5b5;
    .active {
      font-size: 0.36rem;
      color: #000;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 40%;
        height: 4px;
        border-radius: 1px;
        background: #c3ab87;
        bottom: -0.1rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}
</style>