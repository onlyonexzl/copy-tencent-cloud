<template>
  <div class="flex">
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
      <el-table-column show-overflow-tooltip
                       label="退货信息">
        <template slot-scope="scope">
          <div>
            退货原因：s
            退货金额：￥320.00
            退货说明：s
            退货地址：无
            <!-- <p>退货原因：s</p>
            <p>退货金额：￥320.00</p>
            <p>退货说明：s</p>
            <p>退货地址：无</p> -->

          </div>
        </template>
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
                       class="blueColor right20"
                       @click="editor(scope.$index, scope.row)">下一步</el-button>
            <el-button size="medium"
                       type="text"
                       class="yellowColor"
                       @click="checkTrackQueryFun(scope.$index, scope.row)">查看</el-button>
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
  name: 'provider',

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
      }, {
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
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
    }
  },

  methods: {
    add () {
      this.$router.push('/driver/edit?nameType=新建驱动')

    },
    editor () {
      this.$router.push('/driver/edit?nameType=修改驱动')
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
.el-table {
  height: 200px;
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
</style>
