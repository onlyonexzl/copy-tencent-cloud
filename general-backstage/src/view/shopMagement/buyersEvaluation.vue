<template>
  <div class="buyer_tion" :style="{ height: heights }">
    <div class="tion_top">
      <el-button type="primary" size="medium">删除所选</el-button>
    </div>
    <div class="tion_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="所评商品" width="180">
        </el-table-column>
        <el-table-column prop="name" label="评价内容" width="180">
        </el-table-column>
        <el-table-column prop="address" label="评价等级"> </el-table-column>
        <el-table-column prop="address" label="评价人"> </el-table-column>
        <el-table-column prop="address" label="被评价人"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" style="color: #f00;">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChangeFun"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      currentPage: 1,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("tion_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChangeFun() {}
  }
};
</script>

<style lang="scss" scoped>
.buyer_tion {
  width: 100%;
  height: calc(100% - 50px);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  .tion_top {
    padding: 10px 0;
    background: #fff;
    border-radius: 4px;
    text-align: right;
    .el-button {
      margin-right: 20px;
    }
  }
  .tion_con {
    flex: 1;
    overflow: auto;
    background: #fff;
    margin-top: 5px;
  }
}
</style>
