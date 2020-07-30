<template>
  <div class="task_look">
    <div class="task_top">
      <el-input
        v-model="input"
        placeholder="请输入搜索内容"
        size="medium"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" size="medium"></el-button>
    </div>
    <div class="task_con">
      <el-table :data="tableData" style="width: 100%" max-height="500px" border>
        <el-table-column
          prop="img_url"
          label="封面图片"
          width="150"
          align="center"
        >
          <template slot-scope="scope">
            <el-image :src="scope.row.img_url"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" align="center" width="200">
        </el-table-column>
        <el-table-column
          prop="classify"
          label="所属分类"
          align="center"
          width="200"
        >
        </el-table-column>
        <el-table-column prop="time" label="发布时间" align="center">
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
        </el-table-column>
        <el-table-column prop="num" label="留言数量" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="medium"
              type="text"
              class="redColor  right20"
              @click="checkTrackQueryFun(scope.$index, scope.row)"
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
      input: "",
      currentPage: 1,
      tableData: [
        {
          img_url:
            "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596694345&t=8e863a07e820e00fbeabb03ba9a3475c",
          title: "苹果手机这个回收多少钱，最低多轻松",
          classify: "回收> 手机/电脑/数码/办公",
          time: "2020-06-01 21:01",
          status: "0",
          num: "2"
        },
        {
          img_url:
            "https://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596694345&t=8e863a07e820e00fbeabb03ba9a3475c",
          title: "苹果手机这个回收多少钱，最低多轻松",
          classify: "回收> 手机/电脑/数码/办公",
          time: "2020-06-01 21:01",
          status: "0",
          num: "2"
        },
        {
          img_url:
            "https://t7.baidu.com/it/u=378254553,3884800361&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596694345&t=f3b671f6d5b52e2d167c828ab698cebd",
          title: "苹果手机这个回收多少钱，最低多轻松",
          classify: "回收> 手机/电脑/数码/办公",
          time: "2020-06-01 21:01",
          status: "0",
          num: "2"
        },
        {
          img_url:
            "https://t7.baidu.com/it/u=378254553,3884800361&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596694345&t=f3b671f6d5b52e2d167c828ab698cebd",
          title: "苹果手机这个回收多少钱，最低多轻松",
          classify: "回收> 手机/电脑/数码/办公",
          time: "2020-06-01 21:01",
          status: "0",
          num: "2"
        }
      ]
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChangeFun() {},
    checkTrackQueryFun() {}
  }
};
</script>

<style lang="scss" scoped>
.task_look {
  .task_top {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    box-sizing: border-box;
    margin-bottom: 5px;
    .el-input {
      width: 300px;
      margin-left: 5px;
    }
  }
}
</style>
