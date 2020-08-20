<template>
  <div class="orderList">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="所有订单"
                   name="first"></el-tab-pane>
      <el-tab-pane label="代付款"
                   name="second"></el-tab-pane>
      <el-tab-pane label="带备货"
                   name="third"></el-tab-pane>
      <el-tab-pane label="代付余额"
                   name="fourth"></el-tab-pane>
      <el-tab-pane label="已取消"
                   name="third"></el-tab-pane>
      <el-tab-pane label="已付款"
                   name="fourth"></el-tab-pane>
      <el-tab-pane label="已发货"
                   name="third"></el-tab-pane>
      <el-tab-pane label="已收获"
                   name="fourth"></el-tab-pane>
      <el-tab-pane label="待退货"
                   name="third"></el-tab-pane>
      <el-tab-pane label="已退货"
                   name="fourth"></el-tab-pane>
    </el-tabs>
    <div class="top_left">
      <span>订单号：</span>
      <el-input placeholder="请输入内容"
                class=""
                style="width:320px;;">
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          搜索
        </el-button>
      </el-input>
    </div>
    <div>
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column label="订单号：OD158132363315">
          <template slot-scope="scope">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2986114791,2667770254&fm=26&gp=0.jpg"
                 alt="">
            <span>{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         label="商铺名称：美人纪">
        </el-table-column>
        <el-table-column prop="address"
                         label="订单状态：待付款">
        </el-table-column>
      </el-table>
      <div style="width: 100%;padding: 20px;box-sizing: border-box">
        <p style="float: right">支付方式：<span style="color: red">微信pc支付</span> 订单总价：<span style="color: red">￥168.00</span> 订单余额：<span style="color: red">￥0.00</span></p>
      </div>
      <p style="float: left; margin: 20px; font-size: 14px">2020-02-10 04:33:53</p>
      <div style="float: right; margin: 20px">
        <el-button round>付款</el-button>
        <el-button round>取消订单</el-button>
        <el-button round>查看</el-button>
      </div>
    </div>
    <div>
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column label="订单号：OD158132363315">
          <template slot-scope="scope">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2986114791,2667770254&fm=26&gp=0.jpg"
                 alt="">
            <span>{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         label="商铺名称：美人纪">
        </el-table-column>
        <el-table-column prop="address"
                         label="订单状态：待付款">
        </el-table-column>
      </el-table>
      <div style="width: 100%;padding: 20px;box-sizing: border-box">
        <p style="float: right">支付方式：<span style="color: red">微信pc支付</span> 订单总价：<span style="color: red">￥168.00</span> 订单余额：<span style="color: red">￥0.00</span></p>
      </div>
      <p style="float: left; margin: 20px; font-size: 14px">2020-02-10 04:33:53</p>
      <div style="float: right; margin: 20px">
        <el-button round>付款</el-button>
        <el-button round>取消订单</el-button>
        <el-button round>查看</el-button>
      </div>
    </div>
    <div>
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column label="订单号：OD158132363315">
          <template slot-scope="scope">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2986114791,2667770254&fm=26&gp=0.jpg"
                 alt="">
            <span>{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         label="商铺名称：美人纪">
        </el-table-column>
        <el-table-column prop="address"
                         label="订单状态：待付款">
        </el-table-column>
      </el-table>
      <div style="width: 100%;padding: 20px;box-sizing: border-box">
        <p style="float: right">支付方式：<span style="color: red">微信pc支付</span> 订单总价：<span style="color: red">￥168.00</span> 订单余额：<span style="color: red">￥0.00</span></p>
      </div>
      <p style="float: left; margin: 20px; font-size: 14px">2020-02-10 04:33:53</p>
      <div style="float: right; margin: 20px">
        <el-button round>付款</el-button>
        <el-button round>取消订单</el-button>
        <el-button round>查看</el-button>
      </div>
    </div>
    <div>
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column label="订单号：OD158132363315">
          <template slot-scope="scope">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2986114791,2667770254&fm=26&gp=0.jpg"
                 alt="">
            <span>{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         label="商铺名称：美人纪">
        </el-table-column>
        <el-table-column prop="address"
                         label="订单状态：待付款">
        </el-table-column>
      </el-table>
      <div style="width: 100%;padding: 20px;box-sizing: border-box">
        <p style="float: right">支付方式：<span style="color: red">微信pc支付</span> 订单总价：<span style="color: red">￥168.00</span> 订单余额：<span style="color: red">￥0.00</span></p>
      </div>
      <p style="float: left; margin: 20px; font-size: 14px">2020-02-10 04:33:53</p>
      <div style="float: right; margin: 20px">
        <el-button round>付款</el-button>
        <el-button round>取消订单</el-button>
        <el-button round>查看</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderList',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: ''
      }],
      activeName: 'second'
    }
  }
}
</script>

<style lang="scss" scoped>
.orderList {
  width: 100%;
  height: 100%;
  img {
    width: 150px;
    height: 150px;
  }
}
</style>