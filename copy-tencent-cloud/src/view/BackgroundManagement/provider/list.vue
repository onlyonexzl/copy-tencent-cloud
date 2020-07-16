<template>
  <div class="provider">
    <div class="top_button">
      <div class="top_left">
        <span>名称</span>
        <el-input placeholder="服务商名称"
                  v-model="sName"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span style="margin-left: 20px">发布时间</span>
        <el-date-picker v-model="time"
                        type="daterange"
                        end-placeholder="结束日期"
                        range-separator="至"
                        start-placeholder="开始日期"
                        style="width: 250px"
                        value-format="yyyy-MM-dd">
        </el-date-picker>
      </div>
      <div class="top_right">
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          搜索
        </el-button>
      </div>
    </div>
    <div class="table_bottom">
      <el-button slot="append"
                 type="primary"
                 icon="el-icon-search"
                 @click="sesarchFun()">
        新增
      </el-button>
      <el-table :data="tableData"
                stripe
                style="width: 100%">
        <el-table-column show-overflow-tooltip
                         type="index"
                         width="50"
                         label="序号">
          <template slot-scope="scope">
            {{(currentPage-1)*10+scope.$index+1}}
          </template>
        </el-table-column>
        <el-table-column prop="date"
                         label="日期"
                         width="180">
        </el-table-column>
        <el-table-column prop="name"
                         label="姓名"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         label="地址">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         min-width="60">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="operateColumn yellowColor"
                         @click="checkTrackQueryFun(scope.$index, scope.row)">查看</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <template>
        <div class="block">
          <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination>
        </div>
      </template>
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
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
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
  }
}
</script>

<style lang="scss" scoped>
.provider {
  width: 100%;
  height: 100%;
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
    margin: 20px 0;
  }
}
</style>
