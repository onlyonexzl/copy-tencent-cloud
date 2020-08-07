<template>
  <div class="guestBook">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="供应留言"
                   name="first"></el-tab-pane>
      <el-tab-pane label="求购留言"
                   name="second"></el-tab-pane>
    </el-tabs>
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
                         label="发布者">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="项目名称">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="留言内容">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="联系方式">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="状态">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="留言时间">
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
                         @click="editor(scope.$index, scope.row)">修改</el-button>
              <el-button size="medium"
                         type="text"
                         class="redColor  right20"
                         @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
              <!-- <el-button size="medium"
                           type="text"
                           @click="release"
                           class="blueColor">发布</el-button> -->
            </div>
          </template>
        </el-table-column>
      </el-table>
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
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'guestBook',

  data () {
    return {
      time: [],
      status: '',
      options: [
        { value: '', label: '全部' },
        { value: 0, label: '离线' },
        { value: 1, label: '在线' },
        { value: 2, label: '维护' },
        { value: 3, label: '故障' },
        { value: 4, label: '失效' },
      ],
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      activeName: ''
    }
  },

  methods: {
    editor () {
      this.$router.push('/commodityInformation/editguestBook?nameType=修改商品信息')
    },

    release () {
      this.$router.push('/commodityInformation/releaseguestBook?nameType=发布广告')

    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
.guestBook {
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

    /deep/ .el-input__inner {
      border-color: #fff !important ;
    }
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
