<template>

  <div class="container">
    <div style="padding: 14px 10px;background-color: #FFF;margin-bottom: 20px;">
      <el-page-header @back="goBack" :content="this.$route.name"></el-page-header>
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="150px">
      <el-form-item label="服务商名称" prop="name" required>
        <el-input v-model="form.name" style="width: 600px;"/>
      </el-form-item>
      <el-form-item label="机构代码" prop="orgCode">
        <el-input v-model="form.orgCode" style="width: 600px;"/>
      </el-form-item>
      <el-form-item label="营业执照" prop="licenceUrl">
        <el-upload
                action="/uploadFile"
                :data="{type: 'provider/licence', prefix: 'upload'}"
                :limit="1"
                :multiple="false"
                :auto-upload="true"
                accept="image/*"
                list-type="picture-card"
                :file-list="fileList"
                :on-preview="handlePictureCardPreview"
                :on-success="handleFileUploaded">
          <i class="el-icon-plus"></i>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2M</div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="联系人姓名" prop="linkName" required>
        <el-input v-model="form.linkName" style="width: 600px;"/>
      </el-form-item>
      <el-form-item label="联系人QQ" prop="linkQq">
        <el-input v-model="form.linkQq" style="width: 600px;"/>
      </el-form-item>
      <el-form-item label="联系人手机号" prop="linkPhone">
        <el-input v-model="form.linkPhone" style="width: 600px;"/>
      </el-form-item>
      <el-form-item label="联系人邮箱" prop="linkEmail">
        <el-input v-model="form.linkEmail" style="width: 600px;"/>
      </el-form-item>
      <el-form-item label="业务范围">
        <el-input type="textarea" v-model="form.businessScope" style="width: 600px;" rows="5"/>
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
    import providerService from '../../service/provider'
    export default {
        name: 'edit',
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                form: {
                    id: '',
                    name: '',
                    orgCode: '',
                    licenceUrl: '',
                    linkName: '',
                    linkQq: '',
                    linkPhone: '',
                    linkEmail: '',
                    businessScope: '',
                    description: ''
                },
                editor: null,
                fileList: [],
                submitBtn: {
                    loading: false,
                    text: '提交'
                },
                rules: {
                    name: [
                      { required: true, message: '请输入服务商名称', trigger: 'blur' }
                    ],
                    linkName: [
                        { required: true, message: '请输入联系人姓名', trigger: 'blur' }
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
                        providerService.update(this.form).then(res => {
                            if (res.data.state === 1) {
                                this.$message({message: "修改成功", type: 'success'});
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
            },
          handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
          },
          handleFileUploaded(response, file, fileList) {
            this.$refs.form.clearValidate('licenceUrl');
            this.form.licenceUrl = response.data;
          }
        },
        mounted() {
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
        },
      created() {
        const id = this.$route.query.id;
        providerService.getById(id).then(res => {
          if (res.data.state === 1) {
            let d = res.data.data;
            this.form = d;
            this.fileList = [{url: d.licenceUrl}];
            this.editor.txt.html(d.description);
          } else {
            throw new Error(res.data.msg);
          }
        }).catch(error => {
          this.$message.error(error.message);
        }).finally(() => {

        });
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
