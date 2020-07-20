<template>

  <div class="container">
    <div style="padding: 14px 10px;background-color: #FFF;margin-bottom: 20px;">
      <el-page-header @back="goBack" :content="this.$route.name"></el-page-header>
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="150px">
      <el-form-item label="标题" prop="title" required>
        <el-input v-model="form.title" style="width: 600px;"/>
      </el-form-item>
      <el-form-item label="类型" prop="typeId" required>
        <el-select v-model="form.typeId" placeholder="请选择">
          <el-option
                  v-for="item in types"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" v-model="form.remark" style="width: 600px;" rows="5"/>
      </el-form-item>
      <el-form-item label="详细内容">
        <div ref="editorElem" style="text-align:left;width: 800px;"></div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')" :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import E from "wangeditor";
    import informationService from '../../service/information'
    import infoTypeService from '../../service/informationType'
    export default {
        name: 'add',
        data() {
            return {
                form: {
                    title: '',
                    typeId: '',
                    remark: '',
                    content: ''
                },
                editor: null,
                types: [],
                submitBtn: {
                    loading: false,
                    text: '提交'
                },
                rules: {
                    title: [
                      { required: true, message: '请输入标题', trigger: 'blur' }
                    ],
                    typeId: [
                        { required: true, message: '请选择类型', trigger: 'blur' }
                    ]
                }
            }
        },
        computed: {},
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.submitBtn.loading = true;
                        this.submitBtn.text = '处理中...';
                        informationService.add(this.form).then(res => {
                            if (res.data.state === 1) {
                                this.$message({message: "新增成功", type: 'success'});
                                this.$router.go(-1);
                            } else {
                                throw new Error(res.data.msg);
                            }
                        }).catch(error => {
                            this.$message.error(error.message);
                        }).finally(() => {
                            this.submitBtn.loading = false;
                            this.submitBtn.text = '提交';
                        })
                    } else {
                        return false;
                    }
                });
            }
        },
        mounted() {
          this.editor = new E(this.$refs.editorElem);
          // 编辑器的事件，每次改变会获取其html内容
          this.editor.customConfig.onchange = html => {
            this.form.content = html;
          };
          this.editor.customConfig.zIndex = 1000;
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
        },
        created() {
          infoTypeService.queryList().then(res => {
            if (res.data.state === 1) {
              this.types = res.data.data;
            } else {
              throw new Error(res.data.msg);
            }
          }).catch(error => {
            this.$message.error("分组加载失败");
          })
        }
    }
</script>
<style scoped>
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
