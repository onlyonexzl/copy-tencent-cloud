
<template>
  <div class="spellGroupReturns">
    <el-tabs v-model="activeName"
             class="table_bottom"
             @tab-click="handleClick">
      <el-tab-pane label="所有订单"
                   name="first">
        <div>
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
                               label="订购者"
                               width="180">
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
              <el-table-column show-overflow-tooltip
                               label="发货单号"
                               width="150"
                               min-width="60">
                <template slot-scope="scope">
                  <div>
                    <el-input v-model="form.displayName"
                              placeholder></el-input>
                  </div>
                </template>
              </el-table-column>
              <el-table-column show-overflow-tooltip
                               label="操作"
                               width="150"
                               min-width="60">
                <template slot-scope="scope">
                  <div>
                    <el-button size="medium"
                               type="text"
                               class="yellowColor right20"
                               @click="editor(scope.$index, scope.row)">编辑</el-button>
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
          <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#f30">
            <i class="el-icon-edit"
               style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单详细搜索：
          </p>
          <el-form ref="form"
                   :rules="rules"
                   :model="form"
                   label-width="130px">
            <el-form-item label="订购时间："
                          prop="displayName">
              <el-date-picker v-model="value1"
                              type="daterange"
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="收 货 人："
                          prop="displayName">
              <el-input v-model="form.displayName"
                        placeholder></el-input>
            </el-form-item>
            <el-form-item label="订 购 人："
                          prop="displayName">
              <el-input v-model="form.displayName"
                        placeholder></el-input>
            </el-form-item>
            <el-form-item label="订单号码："
                          prop="displayName">
              <el-input v-model="form.displayName"
                        placeholder></el-input>
            </el-form-item>
            <el-form-item label="交易状态："
                          prop="displayName">
              <el-input v-model="form.displayName"
                        placeholder></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary"
                     style="float: right">确定</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="申请延期收获"
                   name="second">
        <div>
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
                               label="订购者"
                               width="180">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="金额">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="下单时间">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="延迟信息">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="状态">
              </el-table-column>
              <el-table-column show-overflow-tooltip
                               label="操作"
                               width="150"
                               min-width="60">
                <template slot-scope="scope">
                  <div>
                    <el-button size="medium"
                               type="text"
                               class="yellowColor right20"
                               @click="editor(scope.$index, scope.row)">编辑</el-button>
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
          <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#f30">
            <i class="el-icon-edit"
               style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单详细搜索：
          </p>
          <el-form ref="form"
                   :rules="rules"
                   :model="form"
                   label-width="130px">
            <el-form-item label="订单号码："
                          prop="displayName">
              <el-input v-model="form.displayName"
                        placeholder></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary"
                     style="float: right">确定</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="退货通道"
                   name="third">
        <div>
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
                               label="退货商品"
                               width="180">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="订单号"
                               width="180">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="订单折扣">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="退货信息">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="状态">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="申请时间">
              </el-table-column>
              <el-table-column show-overflow-tooltip
                               label="操作"
                               width="150"
                               min-width="60">
                <template slot-scope="scope">
                  <div>
                    <el-button size="medium"
                               type="text"
                               class="yellowColor right20"
                               @click="editor(scope.$index, scope.row)">编辑</el-button>
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
          <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#f30">
            <i class="el-icon-edit"
               style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 退货记录搜索：
          </p>
          <el-form ref="form"
                   :rules="rules"
                   :model="form"
                   label-width="130px">
            <el-form-item label="申请时间："
                          prop="displayName">
              <el-date-picker v-model="value1"
                              type="daterange"
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="申请人："
                          prop="displayName">
              <el-input v-model="form.displayName"
                        placeholder></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary"
                     style="float: right">确定</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="现场订单验证"
                   name="fourth">
        <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#f30">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 现场订单验证：
        </p>
        <el-form ref="form"
                 :rules="rules"
                 :model="form"
                 label-width="130px">
          <el-form-item label="订单号："
                        prop="displayName">
            <el-input v-model="form.displayName"
                      placeholder></el-input>
          </el-form-item>
          <el-form-item label="订单密码："
                        prop="displayName">
            <el-input v-model="form.displayName"
                      placeholder></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary"
                   style="float: right">确定</el-button>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
export default {
  name: 'spellGroupReturns',

  data () {
    return {
      time: [],
      sName: '',
      value1: [],
      form: {
        displayName: ''
      },
      height: window.innerHeight - 500 + 'px',
      activeName: 'third',
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
  },

  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },

    add () {
      this.$router.push('/shopManagement/addModifyTheData?nameType=添加收货地址')

    },
    editor () {
      this.$router.push('/shopManagement/addModifyTheData?nameType=编辑编辑地址')
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
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}

.spellGroupReturns {
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
