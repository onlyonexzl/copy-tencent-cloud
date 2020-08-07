<template>
  <div class="task_look" :style="{ height: heights }">
    <div class="task_top">
      会员ID
      <el-input
        v-model="input"
        placeholder="请输入会员ID"
        size="medium"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" size="medium"></el-button>
    </div>
    <div class="task_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight">
        <el-table-column prop="id" label="ID" width="100" align="center">
        </el-table-column>
        <el-table-column
          prop="vip_id"
          label="会员ID"
          width="150"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="action" label="动作" align="center">
        </el-table-column>
        <el-table-column prop="time" label="时间" width="300" align="center">
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
      input: "",
      currentPage: 1,
      tableData: [
        {
          id: "1",
          vip_id: "admin",
          action: "淘宝支付提现：MA2015120318285564",
          time: "2020-07-30 10:01:20"
        },
        {
          id: "1",
          vip_id: "admin",
          action: "淘宝支付提现：MA2015120318285564",
          time: "2020-07-30 10:01:20"
        },
        {
          id: "1",
          vip_id: "admin",
          action: "淘宝支付提现：MA2015120318285564",
          time: "2020-07-30 10:01:20"
        },
        {
          id: "1",
          vip_id: "admin",
          action: "淘宝支付提现：MA2015120318285564",
          time: "2020-07-30 10:01:20"
        },
        {
          id: "1",
          vip_id: "admin",
          action: "淘宝支付提现：MA2015120318285564",
          time: "2020-07-30 10:01:20"
        }
      ]
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("task_top");
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
.task_look {
  display: flex;
  flex-direction: column;
  .task_top {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    box-sizing: border-box;
    margin-bottom: 5px;
    .el-input {
      width: 300px;
      margin-left: 5px;
    }
  }
  .task_con {
    flex: 1;
    background: #fff;
  }
}
</style>
