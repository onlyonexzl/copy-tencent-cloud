<template>
  <div class="toApplyFor">
    <p>提现是指把您商城账户中的余额提取到您私人的支付宝或银行卡中</p>
    <p>提现需向第三方交付手续费，每次提现需代第三方收取 <span class="blueColor">1%</span> 的手续费</p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="您的商城账号："
                    prop="displayName">
        <span>***********</span>
      </el-form-item>
      <el-form-item label="账户类型："
                    prop="displayName">
        <el-radio v-model="form.radio"
                  label="1">支付宝</el-radio>
        <el-radio v-model="form.radio"
                  label="2">银行</el-radio>
      </el-form-item>
      <el-form-item label="开户名："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="您的提现账号："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder></el-input>
        <p>您当前可用资金账户金额：<span class="redColor">￥0.00 </span> 冻结金额：￥201.80</p>
      </el-form-item>
      <el-form-item label="您的提现金额："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="您的提现金额："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary"
               style="margin-left: 35%; width: 100px">确定</el-button>
    <p style="margin-top: 20px"> <span class="redColor">※温馨提醒：</span> 请检查填写的账号类别及账号，确认是提现至您本人相应的账户中 (如遇到问题，可咨询客服 <span class="redColor">13810173183</span> 点击这里给我发消息 )</p>
    <p style="margin-top: 20px">提现记录</p>
    <el-table :data="tableData"
              stripe
              style="width: 100%">
      <el-table-column show-overflow-tooltip
                       type="index"
                       width="50"
                       label="序号">
        <template slot-scope="scope">
          <!-- {{(currentPage-1)*10+scope.$index+1}} -->
          {{scope.$index+1}}
        </template>
      </el-table-column>
      <el-table-column prop="date"
                       show-overflow-tooltip
                       label="提现金额"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       show-overflow-tooltip
                       label="实收金额"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       show-overflow-tooltip
                       label="流水号">
      </el-table-column>
      <el-table-column prop="address"
                       show-overflow-tooltip
                       label="提现时间">
      </el-table-column>
      <el-table-column prop="address"
                       show-overflow-tooltip
                       label="账户信息">
      </el-table-column>
      <el-table-column show-overflow-tooltip
                       label="状态"
                       width="150"
                       min-width="60">
        <template slot-scope="scope">
          <div>
            <span>未审核</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="btootm_paination">
      <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChangeFun"
                     :current-page="currentPage"
                     :page-sizes="[100, 200, 300, 400]"
                     :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toApplyFor',
  data () {
    return {
      form: {
        radio: '1',
        displayName: '',
        name: '',
        type: '',
        value: '',
        driverId: '',
        description: '',
        province: '',
        city: '',
        qu: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}

.toApplyFor {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  background: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .el-table {
    max-height: 150px;
    overflow: auto;
  }
}
</style>
