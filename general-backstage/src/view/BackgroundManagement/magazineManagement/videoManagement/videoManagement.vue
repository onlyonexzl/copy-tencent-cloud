<template>
  <div class="videoManagement">
    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
                  stripe
                  @selection-change="handleSelectionChange"
                  style="width: 100%">
          <el-table-column type="selection"
                           width="55">
          </el-table-column>
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
                           label="封面图">
            <video src="../../../../assets/cs.mp4"></video>
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="标题">
          </el-table-column>
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="用户">
          </el-table-column>
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="标签">
          </el-table-column>
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="简介">
          </el-table-column>
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="点赞">
          </el-table-column>
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="状态">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="300"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="look(scope.$index, scope.row)">查看视频</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor right20"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">核准</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor right20"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">设未审</el-button>
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
    <el-dialog title="视频播放"
               v-if="dialogVisible"
               :visible.sync="dialogVisible"
               width="500px"
               :before-close="handleClose">
      <video src="../../../../assets/cs.mp4"
             class="video"
             height='500px'
             width="400px"
             controls="controls"
             autoplay></video>
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
  name: 'videoManagement',

  data () {
    return {
      dialogVisible: false,
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
      }],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
    }
  },

  methods: {
    // add () {
    //   this.$router.push('/driver/edit?nameType=新建驱动')

    // },
    // editor () {
    //   this.$router.push('/driver/edit?nameType=修改驱动')
    // },
    look () {
      this.dialogVisible = true
    },

    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
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
.video {
  min-height: 300px;
}
/deep/ .el-table__body-wrapper {
  .el-table__body {
    .el-table__row {
      .el-tooltip {
        min-height: 100px;
        > video {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.videoManagement {
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
