<template>
  <div :style="{ height: heights }">
    <el-table :data="tableData" style="width: 100%" :height="tableHeight">
      <el-table-column prop="name" label="申请商铺名" width="200">
      </el-table-column>
      <el-table-column prop="link_man" label="联系人" width="180">
      </el-table-column>
      <el-table-column prop="type" label="商铺类型"> </el-table-column>
      <el-table-column prop="classify" label="商铺分类"> </el-table-column>
      <el-table-column prop="iphone" label="联系电话"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="medium"
            type="text"
            class="redColor  right20"
            @click="handleDelete(scope.$index, scope.row)"
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
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: window.innerHeight - 180 + "px",
      tableData: [
        {
          name: "TB阿拉伯",
          link_man: "阿联酋",
          type: "淘金",
          classify: "石油",
          iphone: "16989568789"
        },
        {
          name: "TB阿拉伯",
          link_man: "阿联酋",
          type: "淘金",
          classify: "石油",
          iphone: "16989568789"
        },
        {
          name: "TB阿拉伯",
          link_man: "阿联酋",
          type: "淘金",
          classify: "石油",
          iphone: "16989568789"
        },
        {
          name: "TB阿拉伯",
          link_man: "阿联酋",
          type: "淘金",
          classify: "石油",
          iphone: "16989568789"
        },
        {
          name: "TB阿拉伯",
          link_man: "阿联酋",
          type: "淘金",
          classify: "石油",
          iphone: "16989568789"
        },
        {
          name: "TB阿拉伯",
          link_man: "阿联酋",
          type: "淘金",
          classify: "石油",
          iphone: "16989568789"
        }
      ],
      currentPage: 1
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChangeFun() {}
  }
};
</script>

<style></style>
