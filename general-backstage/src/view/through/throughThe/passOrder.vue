<template>
  <div class="man_look" :style="{ height: heights }">
    <div class="man_top">
      <div>
        订单筛选:
        <el-select v-model="value" placeholder="订单筛选" size="medium">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <!-- <el-button type="primary" size="medium">确 认</el-button> -->
      </div>
    </div>
    <div class="man_con">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :max-height="tableHeight"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          prop="order_num"
          label="订单号"
          width="80"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="buyer" label="买家" width="80" align="center">
        </el-table-column>
        <el-table-column
          prop="shop_store"
          label="商铺"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="pay_method"
          label="付款方式"
          width="80"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="money" label="金额" align="center">
        </el-table-column>
        <el-table-column prop="sapre_money" label="余款" align="center">
        </el-table-column>
        <el-table-column prop="integral" label="订单积分" align="center">
        </el-table-column>
        <el-table-column prop="status" label="订单状态" align="center">
        </el-table-column>
        <el-table-column prop="time" label="下单时间" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
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
      value: "1",
      currentPage: 1,
      options: [
        {
          value: "0",
          label: "请选择"
        },
        {
          value: "1",
          label: "通证销售订单"
        },
        {
          value: "2",
          label: "通证适用订单"
        }
      ],
      tableData: [
        {
          order_num: "457845",
          buyer: "阿瓜",
          shop_store: "美家商品",
          pay_method: "支付宝",
          money: "12220",
          sapre_money: "22300",
          integral: "52300",
          status: "完成",
          time: "2020-6-30"
        },
        {
          order_num: "457845",
          buyer: "阿瓜",
          shop_store: "美家商品",
          pay_method: "支付宝",
          money: "12220",
          sapre_money: "22300",
          integral: "52300",
          status: "完成",
          time: "2020-6-30"
        },
        {
          order_num: "457845",
          buyer: "阿瓜",
          shop_store: "美家商品",
          pay_method: "支付宝",
          money: "12220",
          sapre_money: "22300",
          integral: "52300",
          status: "完成",
          time: "2020-6-30"
        },
        {
          order_num: "457845",
          buyer: "阿瓜",
          shop_store: "美家商品",
          pay_method: "支付宝",
          money: "12220",
          sapre_money: "22300",
          integral: "52300",
          status: "完成",
          time: "2020-6-30"
        }
      ]
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("man_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
  },
  methods: {
    handleSelectionChange() {},
    handleSizeChange() {},
    handleCurrentChangeFun() {},
    newToen() {
      this.$router.push({ path: "/through/throughThe/addManagement" });
    }
  }
};
</script>

<style lang="scss" scoped>
.man_look {
  background: #fff;
  height: 610px;
  border-radius: 4px;
  .man_top {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    box-sizing: border-box;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }
  .man_con {
  }
  .btn {
    margin-top: 10px;
  }
}
</style>
