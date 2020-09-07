<template>
  <div class="provider">
    <div class="top_button">
      <div class="top_left">
        <span>位号</span>
        <el-input placeholder="位号名称"
                  v-model="sName"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span style="margin-left: 20px">所属模板</span>
        <el-select v-model="status"
                   placeholder="全部">
          <el-option v-for="item in drivers"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
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
                 icon="el-icon-plus"
                 style="width: 70px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;"
                 @click="add">
        新增
      </el-button>
      <div class="flex">
        <div class="table">
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
                             label="位号名称"
                             width="180">
            </el-table-column>
            <el-table-column prop="name"
                             show-overflow-tooltip
                             label="数据类型">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltip
                             label="读写">
            </el-table-column>
            <el-table-column prop="name"
                             show-overflow-tooltip
                             label="基础值">
            </el-table-column>
            <el-table-column prop="name"
                             show-overflow-tooltip
                             label="最小值">
            </el-table-column>
            <el-table-column prop="name"
                             show-overflow-tooltip
                             label="最大值">
            </el-table-column>
            <el-table-column prop="name"
                             show-overflow-tooltip
                             label="倍数">
            </el-table-column>
            <el-table-column prop="name"
                             show-overflow-tooltip
                             label="累计标识">
            </el-table-column>
            <el-table-column prop="name"
                             show-overflow-tooltip
                             label="数据格式">
            </el-table-column>
            <el-table-column prop="name"
                             show-overflow-tooltip
                             label="单位">
            </el-table-column>
            <el-table-column prop="name"
                             show-overflow-tooltip
                             label="所属模版">
            </el-table-column>
            <el-table-column prop="date"
                             show-overflow-tooltip
                             label="创建时间">
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
        </div>

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
  name: 'provider',

  data () {
    return {
      time: [],
      status: '',
      drivers: [],
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
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
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
    add () {
      this.$router.push('/profile/edit?nameType=新建位号列表')

    },
    editor () {
      this.$router.push('/profile/edit?nameType=修改位号列表')
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

  .table {
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
