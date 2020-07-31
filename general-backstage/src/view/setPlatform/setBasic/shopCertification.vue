<template>
  <div class="shop_page">
    <div class="page_top">
      会员ID
      <el-input v-model="value"></el-input>
      是否认证商铺
      <el-radio-group v-model="radio">
        <el-radio :label="3">全部</el-radio>
        <el-radio :label="6">未通过认证的商铺</el-radio>
        <el-radio :label="9">已通过认证的商铺</el-radio>
      </el-radio-group>
      <el-button type="primary" size="medium">查询商铺</el-button>
    </div>
    <div class="page_con">
      <el-table :data="tableData" style="width: 100%" max-height="570px">
        <el-table-column prop="vip_id" label="会员ID" align="center">
          <template slot-scope="scope">
            {{ scope.row.vip_id }}
            <span v-if="scope.row.type == 1">(未审核)</span
            ><span v-if="scope.row.type == 2">(已认证)</span
            ><span v-if="scope.row.type == 3">(已审核)</span>
          </template>
        </el-table-column>
        <el-table-column prop="shop_name" label="商铺名称" align="center">
        </el-table-column>
        <el-table-column label="身份证" align="center">
          <template slot-scope="scope">
            <el-link type="primary">查看身份证</el-link>
          </template>
        </el-table-column>
        <el-table-column label="营业执照" align="center">
          <template slot-scope="scope">
            <el-link type="primary">查看营业执照</el-link>
            <el-link type="danger">实体认证</el-link>
          </template>
        </el-table-column>
        <el-table-column label="审核" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.audit">通过审核</span>
            <el-tooltip content="点击审核" placement="top" v-else>
              <i class="el-icon-edit-outline" @click="audit"></i>
            </el-tooltip>
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
      radio: 3,
      value: "",
      currentPage: 1,
      tableData: [
        {
          vip_id: "2312334333",
          shop_name: "猫团长便利店",
          type: 1,
          audit: 1
        },
        {
          vip_id: "2312334333",
          shop_name: "猫团长便利店",
          type: 2,
          audit: 0
        },
        {
          vip_id: "2312334333",
          shop_name: "猫团长便利店",
          type: 3,
          audit: 1
        },
        {
          vip_id: "2312334333",
          shop_name: "猫团长便利店",
          type: 1,
          audit: 0
        }
      ]
    };
  },
  methods: {
    audit() {},
    handleSizeChange() {},
    handleCurrentChangeFun() {}
  }
};
</script>

<style lang="scss" scoped>
.shop_page {
  height: 590px;
  // background: #fff;
  border-radius: 4px;
  overflow: auto;
  .page_top {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    .el-input {
      width: 20%;
      margin-left: 10px;
      margin-right: 20px;
    }
    .el-radio-group {
      margin-left: 10px;
      .el-radio {
        margin-right: 10px;
      }
    }
  }
  .page_con {
    height: 520px;
    background: #fff;
    border-radius: 4px;
    overflow: auto;
    .el-table {
      .el-table__row {
        i {
          font-size: 20px;
          &:hover {
            cursor: pointer;
            color: #f00;
          }
        }
      }
    }
  }
}
</style>
