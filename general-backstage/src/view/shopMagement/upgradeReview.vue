<template>
  <div class="buyer_tion" :style="{ height: heights }">
    <div class="tion_con">
      <el-table :data="tableData" :height="tableHeight" style="width: 100%">
        <el-table-column prop="date" label="申请会员ID" width="180">
        </el-table-column>
        <el-table-column prop="name" label="商铺" width="180">
        </el-table-column>
        <el-table-column prop="address" label="申请号"> </el-table-column>
        <el-table-column prop="address" label="申请等级"> </el-table-column>
        <el-table-column prop="address" label="金额"> </el-table-column>
        <el-table-column prop="address" label="申请时间"> </el-table-column>
        <el-table-column prop="address" label="状态"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: window.innerHeight - 170 + "px",
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
  mounted() {},
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
