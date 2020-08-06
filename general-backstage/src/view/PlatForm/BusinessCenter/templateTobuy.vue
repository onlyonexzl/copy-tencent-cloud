<template>
  <div class="tobuy_page">
    <div class="tobuy_top">
      <el-button size="medium" type="primary">同步模板数据</el-button>
    </div>
    <div class="tobuy_con">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="模板名称">
          <template slot-scope="scope">
            <span
              @mouseover="mouseOver($event)"
              @mouseleave="mouseLeave($event)"
              >{{ scope.row.name }}</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="catalogue" label="模板目录"> </el-table-column>
        <el-table-column prop="type" label="类型"> </el-table-column>
        <el-table-column prop="address" label="价格">
          <template slot-scope="scope"> ￥{{ scope.row.price }} </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="absolute_div" ref="yindao">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596712575510&di=428be100295354d3e7076e75840d2f99&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F05%2F00%2F01300000194285122188000535877.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "美城模板007",
          catalogue: "./union/templates/default/",
          type: "销售型",
          price: "0.00"
        },
        {
          name: "美城模板007",
          catalogue: "./union/templates/default/",
          type: "销售型",
          price: "0.00"
        },
        {
          name: "美城模板007",
          catalogue: "./union/templates/default/",
          type: "销售型",
          price: "0.00"
        }
      ]
    };
  },
  methods: {
    handleClick(rows) {},
    mouseOver(e) {
      this.$refs["yindao"].style.top = e.screenY - 60 + "px";
      this.$refs["yindao"].style.left = e.screenX + 10 + "px";
      this.$refs["yindao"].style.display = "block";
    },
    mouseLeave(e) {
      this.$refs["yindao"].style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.active {
  position: relative;
  color: #f00;
}
.absolute_div {
  width: 200px;
  height: 300px;
  background: #000;
  position: fixed;
  top: 0;
  right: 0;
  display: none;
  z-index: 9;
  img {
    width: 100%;
    height: 100%;
  }
}
.tobuy_page {
  width: 100%;
  height: 100%;
  .tobuy_top {
    width: 100%;
    height: auto;
    padding: 10px 0;
    border-radius: 4px;
    background: #fff;
    text-align: right;
    .el-button {
      margin-right: 20px;
    }
  }
  .tobuy_con {
    margin-top: 5px;
    background: #fff;
  }
}
</style>
