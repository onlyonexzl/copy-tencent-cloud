<template>
  <div class="supply_page" :style="{ height: heights }">
    <div class="supplyPage_top">
      <el-input size="medium"></el-input
      ><el-button type="primary" size="medium" icon="el-icon-search"
        >搜索</el-button
      >
    </div>
    <div class="supplyPage_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight">
        <el-table-column prop="fabuzhe" label="发布者"> </el-table-column>
        <el-table-column prop="name" label="商品名称" width="220px">
          <template slot-scope="scope">
            <img :src="scope.row.img_url" alt="" />
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column prop="class_name" label="分类名称"> </el-table-column>
        <el-table-column prop="price" label="单价">
          <template slot-scope="scope"> ￥{{ scope.row.price }} </template>
        </el-table-column>
        <el-table-column prop="num" label="数量" align="center">
        </el-table-column>
        <el-table-column prop="weight" label="权重">
          <template slot-scope="scope">
            <el-input v-model="scope.row.weight"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="leva_num" label="留言数量" align="center">
        </el-table-column>
        <el-table-column prop="type" label="状态"> </el-table-column>
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
      title="修改供应信息"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="handleClose"
      center
    >
      <el-form
        ref="form"
        :model="form"
        label-width="80px"
        :style="{ height: tableHeight }"
      >
        <el-form-item label="商品名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value"> </el-option>
          </el-select>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品数量">
          <el-input v-model="form.comm_num"></el-input>
        </el-form-item>
        <el-form-item label="商品单价">
          <el-input v-model="form.comm_price"></el-input>元
          <p>填0或不填表示价格面议</p>
        </el-form-item>
        <el-form-item label="商品简介">
          <el-input v-model="form.product" type="textarea" :rows="3"></el-input>
        </el-form-item>
        <el-form-item label="所在地区">
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value"> </el-option>
          </el-select>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value"> </el-option>
          </el-select>
          <el-select v-model="value" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value"> </el-option>
          </el-select>
        </el-form-item>
        <div class="form_con">
          <el-form-item label="手机">
            <el-input v-model="form.iphone"></el-input>
          </el-form-item>
          <el-form-item label="qq">
            <el-input v-model="form.qq"></el-input>
          </el-form-item>
        </div>
        <div class="form_con">
          <el-form-item label="旺旺">
            <el-input v-model="form.wang"></el-input>
          </el-form-item>
          <el-form-item label="权重">
            <el-input v-model="form.weight"></el-input>
          </el-form-item>
        </div>
        <div class="form_con">
          <el-form-item label="当前展示图片">
            <img :src="form.preset_img" alt="" />
          </el-form-item>
          <el-form-item label="展示图片">
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
        </div>
        <el-form-item label="详细说明">
          <div ref="editorElem" style="text-align:left;width: 90%;"></div>
        </el-form-item>
      </el-form>
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
import E from "wangeditor";

export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      currentPage: 1,
      dialogVisible: false,
      editor: null,
      fileList: [],
      value: "",
      form: {
        preset_img:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1327573052,337828978&fm=11&gp=0.jpg",
        description: ""
      },
      options: [],
      tableData: [
        {
          fabuzhe: "947630122",
          name: "出售宜阳县黄金地段290平米旺铺超值出售，升值空间巨大",
          img_url:
            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1327573052,337828978&fm=11&gp=0.jpg",

          class_name: "新房",
          price: "5265425",
          num: 1,
          weight: 0,
          leva_num: 1,
          type: "已审核"
        },
        {
          fabuzhe: "947630122",
          name: "出售宜阳县黄金地段290平米旺铺超值出售，升值空间巨大",
          img_url:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596794016523&di=aa3cc84d8345feb5cf32fee297b79599&imgtype=0&src=http%3A%2F%2Fp.qqan.com%2Fup%2F2020-8%2F15967071099253309.jpg",
          class_name: "新房",
          price: "5265425",
          num: 1,
          weight: 0,
          leva_num: 1,
          type: "已审核"
        }
      ]
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("supplyPage_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChangeFun() {},
    editDis() {
      this.dialogVisible = true;
      this.$nextTick(() => {
        // 富文本编辑器
        this.editor = new E(this.$refs.editorElem);
        // 编辑器的事件，每次改变会获取其html内容
        this.editor.customConfig.onchange = html => {
          this.form.description = html;
        };
        this.editor.customConfig.menus = [
          // 菜单配置
          "head", // 标题
          "bold", // 粗体
          "fontSize", // 字号
          "fontName", // 字体
          "italic", // 斜体
          "underline", // 下划线
          "strikeThrough", // 删除线
          "foreColor", // 文字颜色
          "backColor", // 背景颜色
          "link", // 插入链接
          "list", // 列表
          "justify", // 对齐方式
          "quote", // 引用
          "image", // 插入图片
          "table", // 表格
          "code" // 插入代码
        ];
        this.editor.create(); // 创建富文本实例
      });
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
.supply_page {
  width: 100%;
  border-radius: 4px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .supplyPage_top {
    width: 100%;
    height: auto;
    padding: 15px 0;
    background: #fff;
    .el-input {
      width: 25%;
      margin-left: 20px;
      /deep/ .el-input__inner {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    .el-button {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  .supplyPage_con {
    flex: 1;
    background: #fff;
    border-radius: 4px;
    margin-top: 5px;
    .el-table {
      /deep/ .cell {
      }
      img {
        display: block;
        width: 50%;
        float: left;
      }
    }
  }
  .el-dialog {
    .el-form {
      overflow: auto;
      .el-input {
        width: 50%;
      }
      .el-select {
        width: 20%;
      }
      .el-textarea {
        width: 60%;
      }
      p {
        color: #999;
      }
      .form_con {
        display: flex;
        .el-form-item {
          flex: 1;
        }
        .el-input {
          width: 80%;
        }
        img {
          width: 50%;
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
