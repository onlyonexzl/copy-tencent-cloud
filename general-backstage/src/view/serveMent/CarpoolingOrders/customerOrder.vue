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
          <el-form-item label="收货人">
            <el-input v-model="formInline.consignee"></el-input>
          </el-form-item>
          <el-form-item label="订单状态">
            <el-select v-model="formInline.type" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value"> </el-option>
            </el-select>
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
        <el-table-column prop="order" label="订单号" width="180">
          <template slot-scope="scope">
            {{ scope.row.order }}
            <router-link :to="{ path: '/orderDetail' }" target="_blank">
              <i class="el-icon-printer"></i>
            </router-link>
          </template>
        </el-table-column>
        <el-table-column prop="buyer" label="买家" width="180">
        </el-table-column>
        <el-table-column prop="payment" label="付款方式"> </el-table-column>
        <el-table-column prop="money" label="金额">
          <template slot-scope="scope"> ￥{{ scope.row.money }} </template>
        </el-table-column>
        <el-table-column prop="type" label="订单状态"> </el-table-column>
        <el-table-column prop="time" label="下单时间"> </el-table-column>
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

    <el-dialog
      title="订单详情"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
      center
    >
      <div class="dis_con" :style="{ height: tableHeight }">
        <div class="discon_top">
          <span></span>
          <span>订单号:DF5282699885</span>
        </div>
        <div class="dis_table">
          <el-table :data="infoTable" style="width: 100%">
            <el-table-column prop="name" label="商品名称" width="180">
              <template slot-scope="scope">
                {{ scope.row.name }}
              </template>
            </el-table-column>
            <el-table-column prop="property" label="属性" width="180">
            </el-table-column>
            <el-table-column prop="price" label="单价">
              <template slot-scope="scope">￥{{ scope.row.price }} </template>
            </el-table-column>
            <el-table-column prop="sapre" label="余款单价">
              <template slot-scope="scope">￥{{ scope.row.sapre }} </template>
            </el-table-column>
            <el-table-column prop="integral" label="销售积分">
              <template slot-scope="scope"
                >￥{{ scope.row.integral }} 积分</template
              >
            </el-table-column>
            <el-table-column prop="num" label="购买数量"> </el-table-column>
          </el-table>
          <p>
            商品总数: {{ 1 }} 商品总价: ￥{{ 365.2 }} + 运费: ￥{{ 0.0 }} -
            折扣金额: ￥{{ 0.0 }} = 订单总金额: ￥{{ 365.2 }}
            (还有余款￥0.00未付)
          </p>
        </div>
        <div class="dis_message">
          <h3>收货人信息</h3>
          <el-form :model="form" label-width="80px">
            <div class="form_con">
              <el-form-item label="订单号">
                <el-input v-model="formInline.order"></el-input>
              </el-form-item>
              <el-form-item label="订单号">
                <el-input v-model="formInline.order"></el-input>
              </el-form-item>
            </div>
            <div class="form_con">
              <el-form-item label="订单号">
                <el-input v-model="formInline.order"></el-input>
              </el-form-item>
              <el-form-item label="订单号">
                <el-input v-model="formInline.order"></el-input>
              </el-form-item>
            </div>
            <div class="form_con">
              <el-form-item label="订单状态">
                <el-select v-model="formInline.type" placeholder="请选择">
                  <el-option v-for="item in options" :key="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="收货人">
                <el-input v-model="formInline.consignee"></el-input>
              </el-form-item>
            </div>
            <div class="form_con">
              <el-form-item label="买家ID">
                <el-input v-model="formInline.id"></el-input>
              </el-form-item>
              <el-form-item label="买家"> </el-form-item>
            </div>
            <div class="form_con">
              <el-form-item label="邮政编码">
                <el-input v-model="formInline.id"></el-input>
              </el-form-item>
              <el-form-item label="	客户留言">
                <el-input
                  v-model="formInline.id"
                  type="textarea"
                  :rows="2"
                ></el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="dis_info">
          <h3>订单信息</h3>
          <el-form :model="infoForm" label-width="100px">
            <div class="form_con">
              <el-form-item label="订单状态">
                <el-input v-model="infoForm.order"></el-input>
              </el-form-item>
              <el-form-item label="	折扣金额">
                <el-input v-model="infoForm.order"></el-input>
              </el-form-item>
            </div>
            <el-form-item label="管理员笔记">
              <el-input
                v-model="infoForm.id"
                type="textarea"
                :rows="2"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
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
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      dialogVisible: false,
      formInline: {},
      form: {},
      options: [],
      infoForm: {},
      currentPage: 1,
      tableData: [
        {
          order: "547454744",
          buyer: "李云龙",
          payment: "电话诈骗",
          money: "365.20",
          type: "待付款",
          time: "1949年"
        },
        {
          order: "547454744",
          buyer: "李云龙",
          payment: "电话诈骗",
          money: "365.20",
          type: "待付款",
          time: "1949年"
        },
        {
          order: "547454744",
          buyer: "李云龙",
          payment: "电话诈骗",
          money: "365.20",
          type: "待付款",
          time: "1949年"
        }
      ],
      infoTable: [
        {
          name: "雷霆嘎巴*炮",
          property: "",
          price: "365.20",
          sapre: "635.00",
          integral: "36.5",
          num: 1
        }
      ]
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
    handleClose() {},
    detailInfo() {
      this.$route.push({
        path: "/orderDetail"
      });
    }
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
  .el-dialog__wrapper {
    /deep/ .el-dialog {
      /deep/ .el-dialog__body {
        padding-top: 0;
      }
    }
  }

  .dis_con {
    width: 100%;
    overflow: auto;
    .discon_top {
      display: flex;
      justify-content: space-between;
    }
    .dis_table {
      border: 1px solid #ccc;
      .el-table {
      }
      p {
        text-align: center;
        margin: 5px 0;
      }
    }
    .dis_message {
      border: 1px solid #ccc;
      h3 {
        padding: 10px 0 10px 10px;
      }
      margin-top: 10px;
      .el-form {
        .form_con {
          display: flex;

          .el-form-item {
            flex: 1;
          }
          display: flex;
          .el-input {
            width: 80%;
          }
          .el-select {
            width: 40%;
          }
        }
      }
    }
    .dis_info {
      border: 1px solid #ccc;
      margin-top: 10px;
      h3 {
        padding: 10px 0 10px 10px;
      }
      .el-form {
        .form_con {
          display: flex;
          .el-form-item {
            flex: 1;
          }
          display: flex;
          .el-input {
            width: 80%;
          }
          .el-textarea {
            width: 80%;
          }
        }
      }
    }
  }
}
</style>
