<template>
  <div class="nav_page">
    <div class="navPage_top">
      <el-button size="medium" type="primary">删除所选</el-button>
      <el-button size="medium" type="primary" @click="addNav"
        >添加导航</el-button
      >
    </div>
    <div class="navPage_con">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="column_name" label="栏目名称" width="180">
        </el-table-column>
        <el-table-column prop="superior_column" label="上级栏目" width="180">
        </el-table-column>
        <el-table-column prop="order" label="排序">
          <template slot-scope="scope">
            <el-input v-model="scope.row.order"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="column_type" label="栏目类型">
          <template slot-scope="scope">
            <el-select v-model="scope.row.windows_type" placeholder="请选择">
              <el-option
                v-for="item in column_option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="windows_type" label="窗口类型">
          <template slot-scope="scope">
            <el-select v-model="scope.row.windows_type" placeholder="请选择">
              <el-option
                v-for="item in window_option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
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
      title="添加导航"
      :visible.sync="dialogVisible"
      width="35%"
      :before-close="handleClose"
      center
    >
      <el-form ref="form" :model="form" label-width="80px" class="dislog_form">
        <el-form-item label="上级导航">
          <el-select v-model="form.value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="栏目名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="字体样式">
          <div style="display: flex;">
            <el-color-picker
              v-model="form.color1"
              style="margin-right: 5px;"
            ></el-color-picker>
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="粗体" name="type"></el-checkbox>
              <el-checkbox label="斜体" name="type"></el-checkbox>
              <el-checkbox label="下划线" name="type"></el-checkbox>
            </el-checkbox-group>
          </div>
        </el-form-item>
        <el-form-item label="图片">
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
        <el-form-item label="栏目链接">
          <el-input v-model="form.url"></el-input>
        </el-form-item>
        <el-form-item label="文字说明">
          <el-input v-model="form.text"></el-input>
          <p style="color: #999;">鼠标悬浮于链接文字上时的说明内容</p>
        </el-form-item>
        <el-form-item label="文字说明">
          <el-radio-group v-model="form.radio">
            <el-radio :label="3">本窗口</el-radio>
            <el-radio :label="6">新窗口</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="栏目类型">
          <el-radio-group v-model="form.typeRadio">
            <el-radio :label="3">头部导航</el-radio>
            <el-radio :label="6">中部导航</el-radio>
            <el-radio :label="7">底部导航</el-radio>
            <el-radio :label="8">帮助</el-radio>
            <el-radio :label="9">资讯导航</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="位置排序">
          <el-input v-model="form.order"></el-input>
          <p style="color: #999;">输入数字，数值越小，显示越前</p>
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
      fileList: [],
      dialogVisible: false,
      tableData: [
        {
          windows_type: 1,
          column_type: 1,
          order: 1,
          superior_column: "王小虎",
          column_name: "底部导航"
        },
        {
          windows_type: 2,
          column_type: 2,
          order: 2,
          superior_column: "王小虎",
          column_name: "底部导航"
        },
        {
          windows_type: 1,
          column_type: 5,
          order: 3,
          superior_column: "王小虎",
          column_name: "底部导航"
        },
        {
          windows_type: 1,
          column_type: 5,
          order: 4,
          superior_column: "王小虎",
          column_name: "底部导航"
        }
      ],
      column_option: [
        {
          value: 1,
          label: "头部导航"
        },
        {
          value: 2,
          label: "底部导航"
        },
        {
          value: 3,
          label: "中部导航"
        },
        {
          value: 4,
          label: "帮助"
        }
      ],
      window_option: [
        {
          value: 1,
          label: "本窗口"
        },
        {
          value: 2,
          label: "新窗口"
        }
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      currentPage: 1,
      form: {
        type: []
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      let height = document.getElementsByClassName("navPage_con");
      console.log(height);
    });
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChangeFun() {},
    handleClose() {},
    addNav() {
      this.dialogVisible = true;
    },
    handlePreview() {},
    handleRemove() {},
    beforeRemove() {},
    handleExceed() {}
  }
};
</script>

<style lang="scss" scoped>
.nav_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .navPage_top {
    padding: 10px 0;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 5px;
    text-align: right;
    .el-button {
      &:last-child {
        margin-right: 20px;
      }
    }
  }
  .navPage_con {
    flex: 1;
    background: #fff;
  }
  .dislog_form {
    max-height: 50vh;
    overflow: auto;
    .el-form-item {
      .el-input {
        width: 80%;
      }
      .el-select {
        width: 80%;
      }
      .el-radio-group {
        .el-radio {
          flex: 1;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
