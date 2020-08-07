<template>
  <div class="cusormer_page" :style="{ height: heights }">
    <div class="cumerPage_top">
      <el-form :model="formInline" label-width="80px">
        <div class="form_con">
          <el-form-item label="下单时间">
            <el-date-picker
              v-model="formInline.time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="订单号">
            <el-input v-model="formInline.order"></el-input>
          </el-form-item>
        </div>
        <div class="form_con">
          <el-form-item label="买家ID">
            <el-input v-model="formInline.id"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">订单查询</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="cumerPage_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight">
        <el-table-column prop="order" label="退货商品" width="180">
        </el-table-column>
        <el-table-column prop="buyer" label="订单号" width="180">
        </el-table-column>
        <el-table-column prop="payment" label="买家"> </el-table-column>
        <el-table-column prop="money" label="商铺"> </el-table-column>
        <el-table-column prop="type" label="退货信息"> </el-table-column>
        <el-table-column prop="time" label="状态"> </el-table-column>
        <el-table-column prop="time" label="申请时间"> </el-table-column>

        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editDis"
              >编辑</el-button
            >
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
      formInline: {},
      currentPage: 1,
      tableData: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      var inHeight = document.getElementsByClassName("cumerPage_top");
      this.tableHeight =
        window.innerHeight - 210 - inHeight[0].clientHeight + "px";
    });
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChangeFun() {},
    editDis() {
      this.dialogVisible = true;
    },
    handleClose() {}
  }
};
</script>

<style lang="scss" scoped>
.cusormer_page {
  width: 100%;
  display: flex;
  flex-direction: column;
  .cumerPage_top {
    width: 100%;
    border-radius: 4px;
    background: #fff;
    padding: 10px 0;
    .el-form {
      .form_con {
        .el-form-item {
          flex: 1;
        }
        display: flex;
        .el-input {
          width: 55%;
        }
        .el-select {
          width: 30%;
        }
      }
    }
  }
  .cumerPage_con {
    flex: 1;
    margin-top: 5px;
    border-radius: 4px;
    background: #fff;
    .el-table {
      i {
        display: inline-block;
        font-size: 20px;
        margin-left: 5px;
        &:hover {
          color: #409eff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
