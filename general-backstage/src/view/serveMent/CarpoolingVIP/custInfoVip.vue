<template>
  <div class="busMess_page" :style="{ height: heights }">
    <div class="busPage_top">
      <el-button
        type="text"
        :style="btn_type ? 'color: #409EFF' : ''"
        @click="cutTable(1)"
        >供应留言</el-button
      >
      <el-button
        type="text"
        :style="!btn_type ? 'color: #409EFF' : ''"
        @click="cutTable(0)"
        >求购留言</el-button
      >
      <el-button
        type="primary"
        size="medium"
        style="float: right;margin-right: 20px;color: #fff;"
        >删除所选</el-button
      >
    </div>
    <div class="busPage_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight">
        <el-table-column prop="fabuzhe" label="发布者"> </el-table-column>
        <el-table-column prop="name" label="项目名称"> </el-table-column>
        <el-table-column prop="content" label="留言内容"> </el-table-column>
        <el-table-column label="联系方式">
          <template slot-scope="scope">
            <p>联系姓名:{{ scope.row.linkMan_name }}</p>
            <p>联系电话:{{ scope.row.iphone }}</p>
            <p>联系地址:{{ scope.row.linkMan_address }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="状态"> </el-table-column>
        <el-table-column prop="time" label="留言时间"> </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
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
      btn_type: true,
      currentPage: 1,
      tableData: [
        {
          fabuzhe: "56858553",
          name: "千岁鹤2014新款春季夏季真丝性感蕾丝荷叶边家居服吊带睡衣睡裙",
          content: "在哪里",
          iphone: "13333336666",
          linkMan_name: "老李",
          linkMan_address: "洛阳",
          type: "未采纳",
          time: "2016-06-25 17:56"
        },
        {
          fabuzhe: "56858553",
          name: "千岁鹤2014新款春季夏季真丝性感蕾丝荷叶边家居服吊带睡衣睡裙",
          content: "在哪里",
          iphone: "13333336666",
          linkMan_name: "老李",
          linkMan_address: "洛阳",
          type: "未采纳",
          time: "2016-06-25 17:56"
        },
        {
          fabuzhe: "56858553",
          name: "千岁鹤2014新款春季夏季真丝性感蕾丝荷叶边家居服吊带睡衣睡裙",
          content: "在哪里",
          iphone: "13333336666",
          linkMan_name: "老李",
          linkMan_address: "洛阳",
          type: "未采纳",
          time: "2016-06-25 17:56"
        }
      ]
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("busPage_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
  },
  methods: {
    cutTable(type) {
      if (type) {
        this.btn_type = true;
      } else {
        this.btn_type = false;
      }
    },
    handleSizeChange() {},
    handleCurrentChangeFun() {}
  }
};
</script>

<style lang="scss" scoped>
.busMess_page {
  width: 100%;
  display: flex;
  flex-direction: column;
  .busPage_top {
    padding: 10px 0;
    .el-button {
      color: #999;
    }
  }
  .busPage_con {
    background: #fff;
    flex: 1;
  }
}
</style>
