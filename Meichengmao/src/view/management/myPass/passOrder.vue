<template>
  <div class="myPass">
    <div class="flex">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="通证使用订单"
                     name="first"></el-tab-pane>
        <el-tab-pane label="通证购买订单"
                     name="second"></el-tab-pane>
      </el-tabs>
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
        <el-table-column show-overflow-tooltip
                         label="订单号码">
          <template slot-scope="scope">
            <div style="display: flex">
              <p style="margin-left:5px"> 美诺思数据学院社区</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         show-overflow-tooltip
                         label="订购者">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="商品金额">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="运费">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="折扣">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="分成">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="返利">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="余额">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="订单状态">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="下单时间">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="发货单号">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="120"
                         min-width="60">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="blueColor"
                         @click="checkTrackQueryFun(scope.$index, scope.row)">查看</el-button>
              <el-button size="medium"
                         type="text"
                         class="redColor"
                         @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
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
  </div>
  </div>
</template>

<script>
export default {
  name: 'myPass',

  data () {
    return {
      time: [],
      sName: '',
      activeName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
    }
  },

  methods: {
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
.top_button {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}

.myPass {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
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
    overflow: auto;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
