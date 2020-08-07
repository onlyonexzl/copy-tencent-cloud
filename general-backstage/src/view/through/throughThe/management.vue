<template>
  <div class="man_look" :style="{ height: heights }">
    <div class="man_top">
      <div>
        审核状态：<el-select v-model="value" placeholder="请选择" size="medium">
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
      <el-button type="primary" size="medium" @click="newToen"
        >创建新通证</el-button
      >
    </div>
    <div class="man_con">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :height="tableHeight"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
          align="center"
        ></el-table-column>
        <el-table-column prop="type" label="类型" width="80" align="center">
        </el-table-column>
        <el-table-column prop="style" label="样式" width="80" align="center">
          <template slot-scope="scope">
            <el-image :src="scope.row.style"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称" width="120" align="center">
        </el-table-column>
        <el-table-column prop="num" label="数量" width="80" align="center">
        </el-table-column>
        <el-table-column prop="commodity" label="适用商品" align="center">
        </el-table-column>
        <el-table-column
          prop="start_time"
          label="起始时间"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="end_time"
          label="终止时间"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="rule" label="规则" width="150" align="center">
        </el-table-column>
        <el-table-column prop="redemption" label="领券率" align="center">
        </el-table-column>
        <el-table-column prop="verification" label="核销率" align="center">
        </el-table-column>
        <el-table-column prop="shops" label="所属商铺" align="center">
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
        </el-table-column>

        <el-table-column fixed="right" label="操作" align="center">
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
      <div v-if="value == 1" class="btn">
        <el-button type="primary" size="medium">点击反审核</el-button>
      </div>
      <div v-else-if="value == 2" class="btn">
        <el-button type="primary" size="medium">审核通过</el-button>
        <el-button type="primary" size="medium">深刻不通过</el-button>
      </div>
      <div v-else-if="value == 3" class="btn">
        <el-button type="primary" size="medium">恢复为待审核 </el-button>
      </div>
      <div v-else-if="value == 4" class="btn">
        <el-button type="primary" size="medium">审核通过</el-button>
        <el-button type="primary" size="medium">深刻不通过</el-button>
      </div>
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
          value: "1",
          label: "已审核"
        },
        {
          value: "2",
          label: "待审核"
        },
        {
          value: "3",
          label: "未通过"
        },
        {
          value: "4",
          label: "已过期"
        }
      ],
      tableData: [
        {
          type: "",
          style:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596116760579&di=7550d625795c85ef25bcbf54a109f49e&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F05%2F00%2F01300000194285122188000535877.jpg",
          name: "美家商品代金券",
          num: "12",
          commodity: "",
          start_time: "2020-04-01",
          end_time: "2020-04-01",
          rule: "用1积分，可抵用1.00元",
          redemption: "0%",
          verification: "0%",
          shops: "美家",
          status: "0"
        },
        {
          type: "",
          style:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596116792708&di=e2b54dbc79acce4ced6e59113cee202d&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg",
          name: "美家商品代金券",
          num: "12",
          commodity: "",
          start_time: "2020-04-01",
          end_time: "2020-04-01",
          rule: "用1积分，可抵用1.00元",
          redemption: "0%",
          verification: "0%",
          shops: "美家",
          status: "0"
        },
        {
          type: "",
          style:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596116792706&di=b0bbfa3fe5d389c3c0c0287fdb2f90e9&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F16%2F12%2F01300535031999137270128786964.jpg",
          name: "美家商品代金券",
          num: "12",
          commodity: "",
          start_time: "2020-04-01",
          end_time: "2020-04-01",
          rule: "用1积分，可抵用1.00元",
          redemption: "0%",
          verification: "0%",
          shops: "美家",
          status: "0"
        },
        {
          type: "",
          style:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596116811161&di=b7e3f1a63fb54c436e57239b4e31e5ae&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F17%2F12%2F01300000433093126093125172516.jpg",
          name: "美家商品代金券",
          num: "12",
          commodity: "",
          start_time: "2020-04-01",
          end_time: "2020-04-01",
          rule: "用1积分，可抵用1.00元",
          redemption: "0%",
          verification: "0%",
          shops: "美家",
          status: "0"
        },
        {
          type: "",
          style:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596116811161&di=b7e3f1a63fb54c436e57239b4e31e5ae&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F17%2F12%2F01300000433093126093125172516.jpg",
          name: "美家商品代金券",
          num: "12",
          commodity: "",
          start_time: "2020-04-01",
          end_time: "2020-04-01",
          rule: "用1积分，可抵用1.00元",
          redemption: "0%",
          verification: "0%",
          shops: "美家",
          status: "0"
        },
        {
          type: "",
          style:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596116811161&di=b7e3f1a63fb54c436e57239b4e31e5ae&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F17%2F12%2F01300000433093126093125172516.jpg",
          name: "美家商品代金券",
          num: "12",
          commodity: "",
          start_time: "2020-04-01",
          end_time: "2020-04-01",
          rule: "用1积分，可抵用1.00元",
          redemption: "0%",
          verification: "0%",
          shops: "美家",
          status: "0"
        },
        {
          type: "",
          style:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596116811161&di=b7e3f1a63fb54c436e57239b4e31e5ae&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F17%2F12%2F01300000433093126093125172516.jpg",
          name: "美家商品代金券",
          num: "12",
          commodity: "",
          start_time: "2020-04-01",
          end_time: "2020-04-01",
          rule: "用1积分，可抵用1.00元",
          redemption: "0%",
          verification: "0%",
          shops: "美家",
          status: "0"
        }
      ]
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("man_top");
    this.tableHeight =
      window.innerHeight - 250 - inHeight[0].clientHeight + "px";
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
