<template>
  <div class="brandManagement">
    <div class="top_button"
         style="border-bottom:solid #f8f8f8 10px">
      <div class="top_left">
        <el-input v-model="sName"
                  style="width: 200px"
                  placeholder="请输入品牌名称"
                  clearable>
        </el-input>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          搜索
        </el-button>
      </div>
    </div>
    <div class="flex">
      <div class="form-item">
        <el-button slot="append"
                   type="primary"
                   style="margin-right: 20px;width:130px;margin: 10px 0 10px 10px"
                   @click="add"
                   icon="el-icon-plus">
          添加品牌
        </el-button>
      </div>
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="全部"
                     name="first"></el-tab-pane>
        <el-tab-pane label="未审核品牌"
                     name="second"></el-tab-pane>
        <el-tab-pane label="已审核品牌"
                     name="third"></el-tab-pane>
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
                         width="180"
                         label="LOGO">
          <template slot-scope="scope">
            <div class="img">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595931844282&di=6ac86657f97337620a34b44fdf96b849&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1796398158%2C1408347181%26fm%3D214%26gp%3D0.jpg"
                   alt="">
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         show-overflow-tooltip
                         label="品牌名称">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="网址">
          <template slot-scope="scope">
            <div class="blueColor">
              {{scope.row.address}}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="address"
                         width="180"
                         show-overflow-tooltip
                         label="品牌描述">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="显示顺序">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="验证">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="120"
                         min-width="120">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="yellowColor right20"
                         @click="editor(scope.$index, scope.row)">修改</el-button>
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
  name: 'brandManagement',

  data () {
    return {
      time: [],
      sName: '',
      activeName: '',
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
    add () {
      this.$router.push('/brandInformation/editbrandManagement?nameType=添加品牌')
    },
    editor () {
      this.$router.push('/brandInformation/editbrandManagement?nameType=修改品牌')
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
/deep/ .el-table__body-wrapper {
  .el-table__body {
    .el-table__row {
      .el-tooltip {
        min-height: 100px;
        .img {
          width: 100%;
          cursor: pointer;
          display: flex;
          overflow-x: auto;
          > img {
            width: 100px !important;
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>

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

.brandManagement {
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
