<template>
  <div class="nav_page" :style="{ height: heights }">
    <div class="navPage_top">
      <el-button size="medium" type="primary">删除所选</el-button>
      <el-button size="medium" type="primary" @click="addNav"
        >添加页面</el-button
      >
    </div>
    <div class="navPage_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="column_name" label="页面名称"> </el-table-column>
        <el-table-column prop="superior_column" label="页面英文名称">
        </el-table-column>
        <el-table-column prop="date" label="登记日期"> </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" style="color: #f00;"
              >删除</el-button
            >
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
      fileList: [],
      dialogVisible: false,
      tableData: [
        {
          date: "2019-04-20 18:29",
          superior_column: "页面英文名称",
          column_name: "关于美城网"
        },
        {
          date: "2019-04-20 18:29",
          superior_column: "页面英文名称",
          column_name: "关于美城网"
        },
        {
          date: "2019-04-20 18:29",
          superior_column: "页面英文名称",
          column_name: "关于美城网"
        }
      ],
      currentPage: 1
    };
  },
  mounted() {
    this.$nextTick(() => {
      var inHeight = document.getElementsByClassName("navPage_top");
      this.tableHeight =
        window.innerHeight - 210 - inHeight[0].clientHeight + "px";
    });
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChangeFun() {},
    handleClose() {},
    addNav() {
      this.$router.push({
        path: "/PlatForm/PageInformation/addPageMangement"
      });
    },
    handlePreview() {},
    handleRemove() {},
    beforeRemove() {},
    handleExceed() {}
  }
};
</script>

<style lang="scss" scoped>
.nav_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .navPage_top {
    padding: 10px 0;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 5px;
    text-align: right;
    .el-button {
      &:last-child {
        margin-right: 20px;
      }
    }
  }
  .navPage_con {
    flex: 1;
    background: #fff;
  }
  .dislog_form {
    max-height: 50vh;
    overflow: auto;
    .el-form-item {
      .el-input {
        width: 80%;
      }
      .el-select {
        width: 80%;
      }
      .el-radio-group {
        .el-radio {
          flex: 1;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
