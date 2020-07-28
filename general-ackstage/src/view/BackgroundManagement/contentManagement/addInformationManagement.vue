
<template>
  <div class="addPageManagement">
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <!-- required -->
      <el-form-item label="资讯名称：">
        <el-input v-model="form.name"
                  style="width: 600px;" />
      </el-form-item>
      <el-form-item label="版块名称：">
        <el-select v-model="form.orgCode"
                   style="width: 600px"
                   clearable>
          <el-option label="美食"
                     value="shanghai"></el-option>
          <el-option label="娱乐"
                     value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否置顶：">
        <el-checkbox v-model="checked">置顶</el-checkbox>
      </el-form-item>
      <el-form-item label="当前封面：">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595571718404&di=a73c3e258ea9e66069db919ee1dc9541&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Dca8575a2369b033b2c88fcd225cf3620%2Fb00116dbb6fd5266ceb954b2a918972bd60736cb.jpg"
             style="width: 200px; height: 200px"
             alt="">
      </el-form-item>
      <el-form-item label="封面上传：">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="资讯内容：">
        <div ref="editorElem"
             style="text-align:left;width: 800px;"></div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit('form')"
                   :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'addPageManagement',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      checked: false,
      form: {
        name: '',
        orgCode: '',
        loginId: '',
        loginPwd: '',
        description: ''
      },
      editor: null,
      fileList: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
    }
  },
  computed: {},
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.submitBtn.loading = true;
          // this.submitBtn.text = '处理中...';
          // providerService.add(this.form).then(res => {
          //   if (res.data.state === 1) {
          //     this.$message({ message: "新增成功", type: 'success' });
          //     this.$router.go(-1);
          //   } else {
          //     throw new Error(res.data.msg);
          //   }
          // }).catch(error => {
          //   this.$message.error(error.message);
          // }).finally(() => {
          //   this.submitBtn.loading = false;
          //   this.submitBtn.text = '提交';
          // })
        } else {
          return false;
        }
      });
    },

    handleRemove (file, fileList) {
      console.log(file, fileList);
    },

    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
  mounted () {
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
  }
}
</script>
<style scoped>
.addPageManagement {
  height: 200px;
}

.el-form {
  text-align: left !important;
}

.el-input__inner {
  width: 600px;
}

.el-date-editor {
  width: 290px !important;
}

.el-date-editor .el-input__inner {
  width: 100% !important;
}

.el-textarea__inner {
  width: 600px;
}
</style>
