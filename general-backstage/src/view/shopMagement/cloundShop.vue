<template>
  <div class="shop_list" :style="{ height: heights }">
    <div class="list_top">
      <el-form ref="form" :model="form" label-width="80px">
        <div class="top_content">
          <el-form-item label="商铺登记">
            <el-radio-group v-model="form.resource">
              <el-radio label="1">全部</el-radio>
              <el-radio label="2">普通</el-radio>
              <el-radio label="3">扶植</el-radio>
              <el-radio label="4">标准</el-radio>
              <el-radio label="5">拓展</el-radio>
              <el-radio label="6">旗舰</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="会员ID">
            <el-input v-model="form.vip_id"></el-input>
          </el-form-item>
        </div>
        <div class="top_content">
          <el-form-item label="开店时间">
            <el-date-picker
              v-model="form.date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="商铺名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </div>
        <div class="top_content">
          <el-form-item label="所属区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商铺登记">
            <el-radio-group v-model="form.resource">
              <el-radio label="1">星店</el-radio>
              <el-radio label="2">云店</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索商铺</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="list_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight">
        <el-table-column prop="vip_id" label="会员ID（会员姓名）" width="150px">
        </el-table-column>
        <el-table-column prop="name" label="商铺名称"> </el-table-column>
        <el-table-column prop="status" label="状态"> </el-table-column>
        <el-table-column prop="shop_type" label="商铺类型"> </el-table-column>
        <el-table-column prop="shop_class" label="商铺分类"> </el-table-column>
        <el-table-column prop="shop_grade" label="商铺等级"> </el-table-column>
        <el-table-column prop="yun_nan" label="云店/星店"> </el-table-column>
        <el-table-column prop="head_shop" label="品牌总店"> </el-table-column>
        <el-table-column prop="shop_status" label="商铺状态"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" style="color: #f00"
              >删除</el-button
            ><el-button type="text" size="small">推荐</el-button
            ><el-button type="text" size="small">管理</el-button>
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
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      tableData: [
        {
          vip_id: "18200218723( marshao )",
          name: "美诺思用户学院",
          status: "0",
          shop_type: "销售型",
          shop_class: "火锅",
          shop_grade: "普通商铺",
          yun_nan: "云店",
          head_shop: 0,
          shop_status: 1
        },
        {
          vip_id: "18200218723( marshao )",
          name: "美诺思用户学院",
          status: "0",
          shop_type: "销售型",
          shop_class: "火锅",
          shop_grade: "普通商铺",
          yun_nan: "云店",
          head_shop: 0,
          shop_status: 1
        },
        {
          vip_id: "18200218723( marshao )",
          name: "美诺思用户学院",
          status: "0",
          shop_type: "销售型",
          shop_class: "火锅",
          shop_grade: "普通商铺",
          yun_nan: "云店",
          head_shop: 0,
          shop_status: 1
        },
        {
          vip_id: "18200218723( marshao )",
          name: "美诺思用户学院",
          status: "0",
          shop_type: "销售型",
          shop_class: "火锅",
          shop_grade: "普通商铺",
          yun_nan: "云店",
          head_shop: 0,
          shop_status: 1
        },
        {
          vip_id: "18200218723( marshao )",
          name: "美诺思用户学院",
          status: "0",
          shop_type: "销售型",
          shop_class: "火锅",
          shop_grade: "普通商铺",
          yun_nan: "云店",
          head_shop: 0,
          shop_status: 1
        }
      ]
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("list_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange() {},
    handleCurrentChangeFun() {}
  }
};
</script>

<style lang="scss" scoped>
.shop_list {
  width: 100%;
  height: calc(100% - 50px);
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  .list_top {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding-top: 5px;
    .el-form {
      .top_content {
        display: flex;
        .el-form-item {
          flex: 1;
          .el-input {
            width: 60%;
          }
        }
      }
    }
  }
  .list_con {
    margin-top: 5px;
    flex: 1;
  }
}
</style>
