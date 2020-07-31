<template>
  <div class="setDomain_page">
    <el-table :data="tableData" style="width: 100%" max-height="570px">
      <el-table-column prop="date" label="顶级域名" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.input"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="shop_name" label="申请店铺" align="center">
      </el-table-column>
      <el-table-column prop="vip_id" label="会员ID" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.status == 1">未审定</span>
          <span v-if="scope.row.status == 2">已审定</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
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
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      tableData: [
        {
          date: "2016-05-02",
          shop_name: "shisukj",
          vip_id: "9274433",
          status: "1",
          input: ""
        },
        {
          date: "2016-05-02",
          shop_name: "shisukj",
          vip_id: "9274433",
          status: "2",
          input: ""
        },
        {
          date: "2016-05-02",
          shop_name: "shisukj",
          vip_id: "9274433",
          status: "1",
          input: ""
        },
        {
          date: "2016-05-02",
          shop_name: "shisukj",
          vip_id: "9274433",
          status: "2",
          input: ""
        }
      ]
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChangeFun() {}
  }
};
</script>

<style lang="scss" scoped>
.setDomain_page {
  height: 590px;
  background: #fff;
  border-radius: 4px;
  overflow: auto;
}
</style>
