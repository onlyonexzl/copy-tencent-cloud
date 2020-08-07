<template>
  <div class="link_page" :style="{ height: heights }">
    <div class="linkPage_top">
      <el-button size="medium" type="primary">删除所选</el-button>
      <el-button size="medium" type="primary" @click="addUrl"
        >添加链接</el-button
      >
    </div>
    <div class="linkPage_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="网站名称"> </el-table-column>
        <el-table-column prop="url" label="链接网址">
          <template slot-scope="scope">
            <a :href="scope.row.url">{{ scope.row.url }}</a>
          </template>
        </el-table-column>
        <el-table-column prop="explain" label="链接说明"> </el-table-column>
        <el-table-column prop="order" label="显示顺序"> </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small">
              编辑
            </el-button>
            <el-button type="text" size="small" style="color: #f00">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      title="添加友情链接"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="网站名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="链接说明">
          <el-input v-model="form.explain"></el-input>
        </el-form-item>
        <el-form-item label="链接网址">
          <el-input v-model="form.url"></el-input>
        </el-form-item>
        <el-form-item label="显示顺序">
          <el-input v-model="form.order"></el-input>
        </el-form-item>
        <el-form-item label="logo">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
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
      fileList: [],
      tableData: [
        {
          name: "美城网",
          url: "http://www.meicheng58.com",
          explain: "美城网---同城购物第一网",
          order: "1"
        },
        {
          name: "美城网",
          url: "http://www.meicheng58.com",
          explain: "美城网---同城购物第一网",
          order: "2"
        },
        {
          name: "美城网",
          url: "http://www.meicheng58.com",
          explain: "美城网---同城购物第一网",
          order: "4"
        }
      ],
      form: {}
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("linkPage_top");
    this.tableHeight =
      window.innerHeight - 180 - inHeight[0].clientHeight + "px";
  },
  methods: {
    addUrl() {
      this.dialogVisible = true;
    },
    handlePreview() {},
    handleRemove() {},
    beforeRemove() {},
    handleExceed() {},
    handleClose() {}
  }
};
</script>

<style lang="scss" scoped>
.link_page {
  width: 100%;
  height: 100%;
  .linkPage_top {
    width: 100%;
    height: auto;
    padding: 10px 0;
    border-radius: 4px;
    background: #fff;
    text-align: right;
    .el-button:last-child {
      margin-right: 20px;
    }
  }
  .linkPage_con {
    margin-top: 5px;
    background: #fff;
    .el-table {
      a {
        &:hover {
          color: #f00;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
