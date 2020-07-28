<template>
  <div class="editadvertisingManagement">
    <el-collapse v-model="activeNames"
                 @change="handleChange">
      <el-collapse-item title="如何支付"
                        name="1">
        <div>支付方式</div>
        <div>关于预付</div>
        <div>积分说明</div>
      </el-collapse-item>
      <el-collapse-item title="配送运输"
                        name="2">
        <div>配送方式</div>
        <div>常见问题</div>
      </el-collapse-item>
      <el-collapse-item title="售后服务"
                        name="3">
        <div>退换政策</div>
        <div>退换流程</div>
      </el-collapse-item>
      <el-collapse-item title="联系我们"
                        name="4">
        <div>关于我们</div>
        <div>版权声明</div>
        <div>诚聘英才</div>
      </el-collapse-item>
    </el-collapse>

    <div class="shum">
      <div>积分说明</div>
      <h1>积分说明</h1>
      <strong>积分是什么？</strong><br>

      积分是商城对活跃用户所做的奖励。<br>

      <strong>积分是怎么来的？</strong><br>

      1,注册赠送。 <br>

      2,购物。您在商城购买任何一件商品，均可获取与商品金额等值的积分。<br>

      3,如果您是商家，发布商品的时候，选择“加入商品库”，当其它商家将您的商品上架至商铺销售，您会获取一定数量积分（数字由运营商在主站后台商铺设置中填写）。<br>

      4,购买积分。<br>

      <strong>积分可用来做什么？</strong><br>

      1,如果您是买家，积分可用于参与商城的积分换购活动。<br>

      2,如果您是商家，您可用积分申请主站广告位；可用积分直接上架商品库中其它商家的商品（不必自己制图自己撰写商品详细描述等等）。
    </div>
  </div>
</template>

<script>
export default {
  name: 'editadvertisingManagement',
  data () {
    return {
      activeNames: ['1']
    }
  },

  methods: {
    handleChange (val) {
      console.log(val);
    }
  }
}
</script>

<style lang="scss" scoped>
.editadvertisingManagement {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px;
  .shum {
    width: 100%;
    border: solid 1px #eee;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 20px 20px 20px;
    > div {
      width: 100%;
      box-sizing: border-box;
      padding: 10px 10px;
      background: #eee;
    }
    > h1 {
      width: 100%;
      text-align: center;
    }

    > strong {
      margin-top: 20px;
    }
  }
}
</style>
