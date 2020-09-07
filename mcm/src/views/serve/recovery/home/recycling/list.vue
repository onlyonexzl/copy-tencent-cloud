<template>
  <div class="list">
    <div class="top">
      <van-nav-bar title="回收清单"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <span>{{flag ? '管理' : '完成'}}</span>
        </template>
      </van-nav-bar>
    </div>

    <div class="content"
         v-if="flag">
      <div class="itemCon">
        <div class="left">
          <img src="@/assets/images/magazine/bannerBG/b2.png"
               alt="">
        </div>
        <div class="center">
          <p>类 型：台式电脑</p>
          <p>规 格：台式主机</p>
          <p>预约保证金：100 环保金</p>
          <p>预约时间：2020-02-20 19:00:00</p>
        </div>
        <div class="right">
          × 1
        </div>
      </div>
      <div class="itemCon">
        <div class="left">
          <img src="@/assets/images/magazine/bannerBG/b2.png"
               alt="">
        </div>
        <div class="center">
          <p>类 型：台式电脑</p>
          <p>规 格：台式主机</p>
          <p>预约保证金：100 环保金</p>
          <p>预约时间：2020-02-20 19:00:00</p>
        </div>
        <div class="right">
          × 1
        </div>
      </div>
      <div class="itemCon">
        <div class="left">
          <img src="@/assets/images/magazine/bannerBG/b2.png"
               alt="">
        </div>
        <div class="center">
          <p>类 型：台式电脑</p>
          <p>规 格：台式主机</p>
          <p>预约保证金：100 环保金</p>
          <p>预约时间：2020-02-20 19:00:00</p>
        </div>
        <div class="right">
          × 1
        </div>
      </div>
      <div class="itemCon">
        <div class="left">
          <img src="@/assets/images/magazine/bannerBG/b2.png"
               alt="">
        </div>
        <div class="center">
          <p>类 型：台式电脑</p>
          <p>规 格：台式主机</p>
          <p>预约保证金：100 环保金</p>
          <p>预约时间：2020-02-20 19:00:00</p>
        </div>
        <div class="right">
          × 1
        </div>
      </div>
      <div class="itemCon">
        <div class="left">
          <img src="@/assets/images/magazine/bannerBG/b2.png"
               alt="">
        </div>
        <div class="center">
          <p>类 型：台式电脑</p>
          <p>规 格：台式主机</p>
          <p>预约保证金：100 环保金</p>
          <p>预约时间：2020-02-20 19:00:00</p>
        </div>
        <div class="right">
          × 1
        </div>
      </div>
    </div>

    <div class="content"
         v-if="!flag">
      <van-swipe-cell>
        <div class="itemCon">
          <van-radio-group v-model="radio"
                           style="margin-right: 0.1rem">
            <van-radio name="1"
                       checked-color="#C3AB87"></van-radio>
          </van-radio-group>
          <div class="left">
            <img src="@/assets/images/magazine/bannerBG/b2.png"
                 alt="">
          </div>
          <div class="center">
            <p>类 型：台式电脑</p>
            <p>规 格：台式主机</p>
            <p>预约保证金：100 环保金</p>
            <p>预约时间：2020-02-20 19:00:00</p>
          </div>
          <div class="right">
            × 1
          </div>
        </div>
        <template #right>
          <van-button square
                      style="height: 100%"
                      text="删除"
                      type="danger"
                      class="delete-button" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <div class="itemCon">
          <van-radio-group v-model="radio"
                           style="margin-right: 0.1rem">
            <van-radio name="1"
                       checked-color="#C3AB87"></van-radio>
          </van-radio-group>
          <div class="left">
            <img src="@/assets/images/magazine/bannerBG/b2.png"
                 alt="">
          </div>
          <div class="center">
            <p>类 型：台式电脑</p>
            <p>规 格：台式主机</p>
            <p>预约保证金：100 环保金</p>
            <p>预约时间：2020-02-20 19:00:00</p>
          </div>
          <div class="right">
            × 1
          </div>
        </div>
        <template #right>
          <van-button square
                      style="height: 100%"
                      text="删除"
                      type="danger"
                      class="delete-button" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <div class="itemCon">
          <van-radio-group v-model="radio"
                           style="margin-right: 0.1rem">
            <van-radio name="1"
                       checked-color="#C3AB87"></van-radio>
          </van-radio-group>
          <div class="left">
            <img src="@/assets/images/magazine/bannerBG/b2.png"
                 alt="">
          </div>
          <div class="center">
            <p>类 型：台式电脑</p>
            <p>规 格：台式主机</p>
            <p>预约保证金：100 环保金</p>
            <p>预约时间：2020-02-20 19:00:00</p>
          </div>
          <div class="right">
            × 1
          </div>
        </div>
        <template #right>
          <van-button square
                      style="height: 100%"
                      text="删除"
                      type="danger"
                      class="delete-button" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <div class="itemCon">
          <van-radio-group v-model="radio"
                           style="margin-right: 0.1rem">
            <van-radio name="1"
                       checked-color="#C3AB87"></van-radio>
          </van-radio-group>
          <div class="left">
            <img src="@/assets/images/magazine/bannerBG/b2.png"
                 alt="">
          </div>
          <div class="center">
            <p>类 型：台式电脑</p>
            <p>规 格：台式主机</p>
            <p>预约保证金：100 环保金</p>
            <p>预约时间：2020-02-20 19:00:00</p>
          </div>
          <div class="right">
            × 1
          </div>
        </div>
        <template #right>
          <van-button square
                      style="height: 100%"
                      text="删除"
                      type="danger"
                      class="delete-button" />
        </template>
      </van-swipe-cell>
      <van-swipe-cell>
        <div class="itemCon">
          <van-radio-group v-model="radio"
                           style="margin-right: 0.1rem">
            <van-radio name="2"
                       checked-color="#C3AB87"></van-radio>
          </van-radio-group>
          <div class="left">
            <img src="@/assets/images/magazine/bannerBG/b2.png"
                 alt="">
          </div>
          <div class="center">
            <p>类 型：台式电脑</p>
            <p>规 格：台式主机</p>
            <p>预约保证金：100 环保金</p>
            <p>预约时间：2020-02-20 19:00:00</p>
          </div>
          <div class="right">
            × 1
          </div>
        </div>
        <template #right>
          <van-button square
                      style="height: 100%"
                      text="删除"
                      type="danger"
                      class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>

    <div class="footer">
      <van-radio-group v-model="radio"
                       v-if="!flag"
                       style="margin-right: 0.1rem">
        <van-radio name="3"
                   checked-color="#C3AB87">全选</van-radio>
      </van-radio-group>
      <div class="bottom"
           v-if="!flag">
        删除
      </div>
      <div class="bottom bottoms"
           v-if="flag">
        添加回收物品
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',

  data () {
    return {
      flag: true,
      radio: false
    }
  },

  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },

    onClickRight () {
      this.flag = !this.flag
    },
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .content {
    flex: 1;
    overflow: auto;
    :last-child {
      margin-bottom: 0.2rem;
    }
  }
}

.itemCon {
  width: 6.7rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 1.72rem;
  margin-top: 0.28rem;
  border-bottom: solid 1px #f1f1f1;
  padding-bottom: 0.4rem;
  .left {
    width: 2rem;
    > img {
      width: 1.72rem;
      height: 1.72rem;
    }
  }
  .center {
    flex: 1;
    > p {
      font-size: 0.24rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #777777;
      margin-bottom: 0.1rem;
    }
  }
  .right {
    font-size: 0.27rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #000000;
  }
}

.footer {
  width: 100%;
  height: 1.25rem;
  border: 1px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 0.4rem;
  font-size: 0.3rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: #000000;

  .bottom {
    width: 1.23rem;
    height: 0.53rem;
    border-radius: 0.27rem;
    line-height: 0.53rem;
    background: #c3ab87;
    text-align: center;
    font-size: 0.24rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }

  .bottoms {
    width: 3.4rem;
    height: 0.87rem;
    line-height: 0.87rem;
    border-radius: 0.44rem;
    margin: 0 auto;
  }
}
</style>