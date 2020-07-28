<template>
  <div class="fromTheDetail">

    <div class="flex">
      <p style="margin: 10px 0;">
        账户消保余额：<span class="redColor">￥0.00</span> 您的消保账户不足？点击这里进行
        <el-button type="primary"
                   @click="topUp"
                   style="">充值</el-button>
      </p>
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
                         label="交易类型">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="付款类别">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="交易单号">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="会员">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="收支">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="消保余额">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="创建时间">
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
  </div>
  </div>
</template>

<script>
export default {
  name: 'fromTheDetail',

  data () {
    return {
      time: [],
      sName: '',
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
      }],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
    }
  },

  methods: {
    topUp () {
      this.$router.push('/transactionManagement/topUp?nameType=充值')
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
  }
}
</script>

<style lang="scss" scoped>
.fromTheDetail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
  .top_button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

  .table_bottom {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }

  .el-table {
    flex: 1;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
