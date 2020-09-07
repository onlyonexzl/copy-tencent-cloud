<template>
  <div class="promotionList">
    <div class="top_button">
      <div class="top_left">
        <span>搜索关键字：</span>
        <el-input placeholder=""
                  style="width: 200px"></el-input>
        <span>所属店铺：</span>
        <el-select clearable
                   style="width:200px;;margin-left:10px;"
                   class="first-child"
                   placeholder="请选择">
          <el-option label="普通"
                     value="name"></el-option>
          <el-option label="主站推广 已审核"
                     value="code"></el-option>
          <el-option label="主站推广 未审核"
                     value="code"></el-option>
        </el-select>
        <el-input placeholder=""
                  style="width: 200px"></el-input>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          搜店
        </el-button>
        <br>
        <span style="margin-top: 10px">分类：</span>
        <el-select clearable
                   style="width:200px;;margin-left:10px;margin-top: 10px"
                   class="first-child"
                   placeholder="请选择">
          <el-option label="普通"
                     value="name"></el-option>
          <el-option label="主站推广 已审核"
                     value="code"></el-option>
          <el-option label="主站推广 未审核"
                     value="code"></el-option>
        </el-select>
        <span style="margin-top: 10px">品牌：</span>
        <el-select clearable
                   style="width:200px;;margin-left:10px;margin-top: 10px"
                   class="first-child"
                   placeholder="请选择">
          <el-option label="普通"
                     value="name"></el-option>
          <el-option label="主站推广 已审核"
                     value="code"></el-option>
          <el-option label="主站推广 未审核"
                     value="code"></el-option>
        </el-select>
        <span style="margin-top: 10px">价格：</span>
        <el-input placeholder=""
                  style="width: 200px;margin-top: 10px"></el-input>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          确定
        </el-button>
      </div>
    </div>
    <div class="flex">
      <el-table :data="tableData"
                :span-method="arraySpanMethod"
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
                         label="商品名称">
          <template slot-scope="scope">
            <div style="display: flex">
              <div class="img">
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2246769960,707442837&fm=26&gp=0.jpg"
                     alt="">
              </div>
              <p style="margin-left:5px">美城网</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         show-overflow-tooltip
                         label="品牌">
        </el-table-column>

        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="价格">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="分成">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="分类">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="220"
                         min-width="60">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="blueColor">加入推广库</el-button>
              <el-button size="medium"
                         type="text"
                         class="yellowColor">查看</el-button>
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
  name: 'promotionList',

  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      arr: []
    }
  },

  methods: {
    add () {
      this.$router.push('/mySocialLife/promotionList?nameType=添加供应')
    },
    edit () {
      this.$router.push('/mySocialLife/promotionList?nameType=修改供应')
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    // arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
    //   if (rowIndex % 1 === 0) {
    //     if (columnIndex === 0) {
    //       return [1, 2];
    //     } else if (columnIndex === 1) {
    //       return [0, 0];
    //     }
    //   }
    // },
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
          height: 100%;
          cursor: pointer;
          display: flex;
          overflow-x: auto;
          > img {
            width: 100px !important;
            margin-right: 20px;
            height: 100% !important;
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

.promotionList {
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
