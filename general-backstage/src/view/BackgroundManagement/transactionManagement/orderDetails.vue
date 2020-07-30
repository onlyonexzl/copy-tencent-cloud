<template>
  <div class="orderDetails">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单详情：
    </p>
    <el-table :data="tableData"
              stripe
              max-height="200px">
      <el-table-column show-overflow-tooltip
                       type="index"
                       width="50"
                       label="序号">
        <template slot-scope="scope">
          <!-- {{(currentPage-1)*10+scope.$index+1}} -->
          {{scope.$index+1}}
        </template>
      </el-table-column>
      <el-table-column show-overflow-tooltip
                       label="商品名称">
        <template slot-scope="scope">
          <span class="blueColor"
                style="cursor: pointer;">{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date"
                       show-overflow-tooltip
                       label="买家">
      </el-table-column>
      <el-table-column prop="date"
                       show-overflow-tooltip
                       label="属性">
      </el-table-column>
      <el-table-column prop="date"
                       show-overflow-tooltip
                       label="单价">
      </el-table-column>
      <el-table-column prop="date"
                       show-overflow-tooltip
                       label="余款单价">
      </el-table-column>
      <el-table-column prop="date"
                       show-overflow-tooltip
                       label="销售积分">
      </el-table-column>
      <el-table-column prop="date"
                       show-overflow-tooltip
                       label="购买数量">
      </el-table-column>
    </el-table>
    <el-button size="medium"
               type="text"
               class="redColor">打印</el-button>
    <p>商品总数: <span class="redColor">1</span> 商品总价: ￥890.00 + 运费: ￥0.00 - 折扣金额：￥0.00 = 订单总金额：<span class="redColor">￥890.00</span> (还有余款￥0.00未支付)</p>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000;margin-top: 10px;">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 收货人信息：
    </p>
    <div class="top-list">
      <ul>
        <li>姓名：***</li>
        <li>手机：**********</li>
        <li>收货地址：*********</li>
        <li>邮政编码：*******</li>
        <li>发票票头： ********</li>
        <li>客户留言： ************</li>
        <li>管理员笔记： ************</li>
        <li>客户留言： ************</li>
        <li>发货单号：</li>
      </ul>
    </div>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000;margin-top: 10px;">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单信息：
    </p>
    <div class="top-list">
      <ul>
        <li>订单状态：***</li>
        <li>支付方式：**********</li>
        <li>配送方式：*********</li>
        <li>运费：*******</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderDetails'
}
</script>

<style lang="scss" scoped>
.orderDetails {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  .top-list {
    margin-top: 10px;
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        box-sizing: border-box;
        padding-left: 50px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
