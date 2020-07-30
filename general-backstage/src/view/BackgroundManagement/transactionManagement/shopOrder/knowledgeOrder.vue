<template>
  <div class="knowledgeOrder">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单搜索：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="下单时间："
                    prop="name">
        <el-date-picker v-model="value1"
                        style="width: 100%"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="订单号："
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="收货人："
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="订单状态："
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="买家ID："
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label=""
                    prop="name">
        <el-button type="primary">订单查询</el-button>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单统计：
    </p>
    <div class="top-list">
      <ul>
        <li>今日订单数：0个</li>
        <li>周订单数：0个</li>
        <li>月订单数：1个</li>
        <li>今日交易金额：￥0.00元</li>
        <li>周交易金额：￥0.00元</li>
        <li>月交易金额：￥890.00元</li>
      </ul>
    </div>
    <div class="table"
         ref="table">
      <el-table :data="tableData"
                stripe
                :style="{'height' : height}">
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
                         label="订单号">
          <template slot-scope="scope">
            <span class="blueColor"
                  @click="goOrder"
                  style="cursor: pointer;">{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="买家">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="商铺">
          <template slot-scope="scope">
            <span class="blueColor"
                  style="cursor: pointer;">{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="付款方式">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="金额">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="余款">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="订单积分">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="订单状态">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="下单时间">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="120"
                         min-width="60">
          <template slot-scope="scope">
            <div>

              <el-button size="medium"
                         type="text"
                         class="yellowColor right20"
                         @click="editor(scope.$index, scope.row)">修改</el-button>
              <el-button size="medium"
                         type="text"
                         class="redColor  right20"
                         @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="btootm_paination">
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChangeFun"
                     :current-page="currentPage"
                     :page-sizes="[100, 200, 300, 400]"
                     :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="400">
      </el-pagination>
    </div>

    <el-dialog title="订单详情"
               :visible.sync="dialogVisible"
               width="60%"
               top="2hv"
               :before-close="handleClose">
      <div>
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
        <p>商品总数: <span class="redColor">1</span> 商品总价: ￥890.00 + 运费: ￥0.00 - 折扣金额：￥0.00 = 订单总金额：<span class="redColor">￥890.00</span> (还有余款￥0.00未支付)</p>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 收货人信息：
        </p>
        <el-form ref="form"
                 :model="form"
                 label-width="130px">
          <el-form-item label="发货单号："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="收货人姓名："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="收货人手机："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="收货地址："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="配送方式："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="运费："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="发票票头："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="买家："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="客户留言："
                        prop="name">
            <el-input v-model="form.name"
                      type="textarea"></el-input>
          </el-form-item>
        </el-form>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单信息：
        </p>
        <el-form ref="form"
                 :model="form"
                 label-width="130px">
          <el-form-item label="订单状态："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="折扣金额："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="管理员笔记："
                        prop="name">
            <el-input v-model="form.name"
                      type="textarea"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'knowledgeOrder',
  data () {
    return {
      form: {
        name: ''
      },
      dialogVisible: false,
      value1: [],
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
      height: 0
    }
  },

  methods: {
    goOrder () {
      this.$router.push('/shopOrder/orderDetails')
    },

    editor () {
      this.dialogVisible = true
    },

    release () {
      this.$router.push('/commodityInformation/releaseknowledgeCommodity?nameType=发布广告')

    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },

    handleClose () {

    }
  },

  mounted () {
    this.height = this.$refs.table.clientHeight + 'px'
  }
}
</script>

<style lang="scss" scoped>
.knowledgeOrder {
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
        width: 33.3%;
        box-sizing: border-box;
        padding-left: 50px;
        margin-bottom: 10px;
      }
    }
  }
  .table {
    flex: 1;
    overflow: auto;
    .el-table {
      overflow: auto;
    }
  }
}

.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
</style>
