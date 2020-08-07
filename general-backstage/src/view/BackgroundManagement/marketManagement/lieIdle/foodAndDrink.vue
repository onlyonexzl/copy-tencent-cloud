<template>
  <div class="foodAndDrink">
    <div class="navPage_top">
      <el-input placeholder="请输入标题关键字"
                style="width: 200px"
                clearable>
      </el-input>
      <el-button slot="append"
                 type="primary"
                 icon="el-icon-search">
        搜索
      </el-button>
    </div>
    <div class="navPage_con">
      <el-table :data="tableData"
                :height="height">
        <el-table-column type="selection"
                         width="55"> </el-table-column>
        <el-table-column prop="column_name"
                         label="发布者">
        </el-table-column>
        <el-table-column prop="superior_column"
                         label="商品名称">
        </el-table-column>
        <el-table-column prop="superior_column"
                         label="分类名称">
        </el-table-column>
        <el-table-column prop="superior_column"
                         label="单价">
        </el-table-column>
        <el-table-column prop="superior_column"
                         label="数量">
        </el-table-column>
        <el-table-column prop="order"
                         label="权重">
          <template slot-scope="scope">
            <el-input v-model="scope.row.order"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="superior_column"
                         label="状态">
        </el-table-column>
        <el-table-column prop="superior_column"
                         label="留言数量">
        </el-table-column>
        <el-table-column label="操作"
                         width="100">
          <template slot-scope="scope">
            <el-button type="text"
                       @click="addNav"
                       size="small">编辑</el-button>
            <el-button type="text"
                       size="small"
                       style="color: #f00;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChangeFun"
                     :current-page="currentPage"
                     :page-sizes="[100, 200, 300, 400]"
                     :page-size="100"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="400">
      </el-pagination>
    </div>

    <el-dialog title="添加导航"
               :visible.sync="dialogVisible"
               width="65%"
               :before-close="handleClose"
               center>
      <el-form ref="form"
               :model="form"
               label-width="130px">
        <el-form-item label="商品名称："
                      style="width: 100%"
                      prop="displayName">
          <el-input v-model="form.displayName"
                    placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="商品分类："
                      prop="name">
          <div class="form-item">
            <el-select v-model="form.province"
                       style="width: 100%;"
                       clearable>
              <el-option label="美食"
                         value="shanghai"></el-option>
              <el-option label="娱乐"
                         value="shanghai"></el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="商品数量："
                      prop="name">
          <el-input v-model="form.name">
          </el-input>
        </el-form-item>
        <el-form-item label="商品单价："
                      prop="name">
          <el-input v-model="form.name">
            <span slot="suffix">元</span>
          </el-input>
          <p>（注：填0或不填表示价格面议）</p>
        </el-form-item>
        <el-form-item label="商品简介："
                      style="width: 100%"
                      prop="name">
          <el-input v-model="form.name"
                    type="textarea">
          </el-input>
        </el-form-item>
        <el-form-item label="所在地区："
                      prop="name">
          <div style="width:100%; display: flex">
            <el-select v-model="form.name"
                       style="width:33%"
                       placeholder="所在省">
              <el-option label="区域一"
                         value="shanghai"></el-option>
              <el-option label="区域二"
                         value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.name"
                       style="width:33%;margin-left:0"
                       placeholder="所在市">
              <el-option label="区域一"
                         value="shanghai"></el-option>
              <el-option label="区域二"
                         value="beijing"></el-option>
            </el-select>
            <el-select v-model="form.name"
                       style="width:33%;margin-left:0"
                       placeholder="所在市">
              <el-option label="区域一"
                         value="shanghai"></el-option>
              <el-option label="区域二"
                         value="beijing"></el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="手机："
                      prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="QQ："
                      prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="旺旺："
                      prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="权重："
                      prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="当前展示图片："
                      prop="name">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2800918334,2651401206&fm=26&gp=0.jpg"
               style="width: 200px; height: 200px"
               alt="">
        </el-form-item>
        <el-form-item label="展示图片："
                      prop="name">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                     list-type="picture-card"
                     :on-preview="handlePictureCardPreview"
                     :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible1">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="详细说明："
                      style="width: 100%">
          <div ref="editorElem"
               style="width: 100%;"></div>
        </el-form-item>
      </el-form>

      <span slot="footer"
            class="dialog-footer">
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  data () {
    return {
      dialogImageUrl: '',
      height: window.innerHeight - 280,
      fileList: [],
      dialogVisible: false,
      dialogVisible1: false,
      tableData: [
        {
          windows_type: 1,
          column_type: 1,
          order: 1,
          superior_column: "王小虎",
          column_name: "导航管理"
        },
        {
          windows_type: 2,
          column_type: 2,
          order: 2,
          superior_column: "王小虎",
          column_name: "导航管理"
        },
        {
          windows_type: 1,
          column_type: 5,
          order: 3,
          superior_column: "王小虎",
          column_name: "导航管理"
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
      },
      editor: null,
    };
  },
  mounted () {

  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSizeChange () { },
    handleCurrentChangeFun () { },
    handleClose () { },
    addNav () {
      this.dialogVisible = true;
      this.$nextTick(() => {
        this.editor = new E(this.$refs.editorElem);
        // 编辑器的事件，每次改变会获取其html内容
        this.editor.customConfig.onchange = html => {
          this.form.description = html;
        };
        this.editor.customConfig.menus = [
          // 菜单配置
          'head', // 标题
          'bold', // 粗体
          'fontSize', // 字号
          'fontName', // 字体
          'italic', // 斜体
          'underline', // 下划线
          'strikeThrough', // 删除线
          'foreColor', // 文字颜色
          'backColor', // 背景颜色
          'link', // 插入链接
          'list', // 列表
          'justify', // 对齐方式
          'quote', // 引用
          'image', // 插入图片
          'table', // 表格
          'code' // 插入代码
        ];
        this.editor.create(); // 创建富文本实例
      })
    },
    handlePreview () { },
    beforeRemove () { },
    handleExceed () { }
  }
};
</script>

<style lang="scss" scoped>
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
.foodAndDrink {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .navPage_top {
    padding: 10px 0;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 5px;
    // text-align: right;
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
