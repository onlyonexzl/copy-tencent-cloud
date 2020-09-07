<template>
  <div class="browse">
    <div class="title">
      欢迎 admin
    </div>

    <div class="content">
      <p class="hoverColor"
         @click="$router.push('/myShopping/credit')">商家信用：<span style="color: red">0</span> 买家信用：<span style="color: red">0</span>
      </p>
      <p>商铺认证状态：<span style="color: red">未认证</span></p>

      <p>商铺等级：普通商铺</p>
      <p>
        积分：
        <span style="color: red; font-size: 18px">35130</span> 积分购买
        <el-button round
                   style="margin-left: 10px">积分购买</el-button>
      </p>

      <p>
        账户余额：
        <span style="color: red; font-size: 23px">35130</span> 元
        <el-button round
                   style="margin-left: 10px">充值</el-button>
        <el-button round>转账</el-button>
        <el-button round>提现</el-button>
      </p>
    </div>

    <div class="title">
      商家提醒区
    </div>

    <div class="content">
      <p>销售记录： 未付款的订单有<span style="color: red">(0)</span>个，等待发货的订单有<span style="color: red">(0)</span>个</p>
    </div>

    <div class="title">
      买家提醒区
    </div>

    <div class="content">
      <p>买到的商品：在最近30天内，您一共买了<span style="color: red">(0)</span>个商品，请到 <span style="cursor: pointer;
            color: rgba(195, 171, 135, 1) !important;"
              @click="$router.push('/myShopping/myOrder')">已买商品 </span> 查看。</p>
      <p>给商家的评价：您有<span style="color: red">(0)</span>笔交易尚在信用评价期内，请尽快到已买到的商品中给 <span style="cursor: pointer;
            color: rgba(195, 171, 135, 1) !important;"
              @click="$router.push('/myShopping/evaluate')"> 商家评价 </span> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'browse'
}
</script>

<style lang="scss" scoped>
.browse {
  width: 100%;
  .title {
    font-size: 16px;
    padding: 20px 20px;
    border-bottom: solid 1px #eee;
  }
  .content {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;

    > p {
      height: 40px;
      line-height: 40px;
      // padding: 5px 0;
    }
  }
}
</style>
