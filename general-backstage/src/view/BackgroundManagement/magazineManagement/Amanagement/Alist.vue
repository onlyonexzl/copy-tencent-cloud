<template>
  <div class="topicManagement">
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
        <el-table-column show-overflow-tooltip
                         width="180"
                         label="封面">
          <template slot-scope="scope">
            <div class="img">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595931844282&di=6ac86657f97337620a34b44fdf96b849&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1796398158%2C1408347181%26fm%3D214%26gp%3D0.jpg"
                   alt="">
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         show-overflow-tooltip
                         label="会员">
        </el-table-column>

        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="标题">
        </el-table-column>
        <el-table-column prop="address"
                         width="180"
                         show-overflow-tooltip
                         label="内容">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="标签">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="点赞量">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="评论量">
        </el-table-column>
        <el-table-column prop="address"
                         width="180"
                         show-overflow-tooltip
                         label="赞赏金额">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="赞同">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="不赞同">
        </el-table-column>
        <el-table-column prop="address"
                         width="180"
                         show-overflow-tooltip
                         label="关注时间">
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
  name: 'topicManagement',

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
      this.$router.push('/commodity/editConventionalKnowledge?nameType=添加商品')
    },
    editor () {
      this.$router.push('/marketHome/details')
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

.topicManagement {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

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
