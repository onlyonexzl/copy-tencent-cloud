<template>
  <div class="head_page">
    <div class="headPage_top">
      <el-button size="medium" type="primary" @click="addHead">
        添加总店
      </el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="名称" width="180"> </el-table-column>
      <el-table-column prop="name" label="省份" width="180"> </el-table-column>
      <el-table-column prop="address" label="城市"> </el-table-column>
      <el-table-column prop="address" label="区域"> </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="添加总店"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="区域">
          {{ form.name }}
        </el-form-item>
        <el-form-item label="总店名称">
          <el-input v-model="form.iphone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        }
      ],
      dialogVisible: false,
      form: {
        name: "北京"
      }
    };
  },
  methods: {
    addHead() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.head_page {
  width: 100%;
  height: 100%;
  overflow: auto;
  .headPage_top {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 10px 0;
    text-align: right;
    margin-bottom: 5px;
    .el-button {
      margin-right: 20px;
    }
  }
}
</style>
