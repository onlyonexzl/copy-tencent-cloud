<template>
  <div class="provider">
    <div class="table_bottom">
      <div class="table-title">
        <strong>数据占比统计：</strong> <br>
        <span>领券 0/0个，占比 0% </span>
        <span>核销 0/0个，占比 0%</span>
      </div>
      <el-button slot="append"
                 type="primary"
                 icon="el-icon-plus"
                 style="width: 120px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;"
                 @click="add">
        申请通证
      </el-button>
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="已通过"
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
                               label="类型"
                               width="180">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="样式">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="名称">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="数量">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="适用商品">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="有效期限">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="规则">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="领券率">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="核销率">
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
        <el-tab-pane label="待审核"
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
                               label="类型"
                               width="180">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="样式">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="名称">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="数量">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="适用商品">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="有效期限">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="规则">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="领券率">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="核销率">
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
        <el-tab-pane label="未通过"
                     name="
                     third">
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
                               label="类型"
                               width="180">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="样式">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="名称">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="数量">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="适用商品">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="有效期限">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="规则">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="领券率">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="核销率">
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
        <el-tab-pane label="已过期"
                     name="
                     fourth">
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
                               label="类型"
                               width="180">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="样式">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="名称">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="数量">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="适用商品">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="有效期限">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="规则">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="领券率">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="核销率">
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
      height: window.innerHeight - 340 + 'px'
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
