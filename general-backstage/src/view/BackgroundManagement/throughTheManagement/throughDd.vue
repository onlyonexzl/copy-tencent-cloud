<template>
  <div class="provider">
    <div class="table_bottom">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="通证使用订单"
                     name="first">
          <div class="flex"
               :style="{'height': height}">
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
                               label="订单号码"
                               width="180">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="订购者">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="商品金额">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="运费">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="折扣">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="分成">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="返利">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="余额">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="订单状态">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="下单时间">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="发货单号">
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

        </el-tab-pane>
        <el-tab-pane label="通证购买订单"
                     name="second">
          <div class="flex"
               :style="{'height': height}">
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
                               label="订单号码"
                               width="180">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="订购者">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="商品金额">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="运费">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="折扣">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="分成">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="返利">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="余额">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="订单状态">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="下单时间">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="发货单号">
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
        </el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<script>
export default {
  name: 'provider',

  data () {
    return {
      activeName: 'first',
      time: [],
      status: '',
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
      height: window.innerHeight - 220 + 'px'
    }
  },

  methods: {
    add () {
      this.$router.push('/throughTheManagement/editThroughTheManagement?nameType=申请通证')

    },
    editor () {
      this.$router.push('/throughTheManagement/editThroughTheManagement?nameType=修改设备')
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
.table-title {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  > span {
    margin-right: 30px;
  }
}
.provider {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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
  .el-tabs {
    height: 100%;
    .el-tabs__content {
      height: 100%;
    }
  }
  .el-table {
    flex: 1;
    overflow: auto;
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
