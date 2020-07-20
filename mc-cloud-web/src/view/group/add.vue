<template>

  <div class="container">
    <div style="padding: 14px 10px;background-color: #FFF;margin-bottom: 20px;">
      <el-page-header @back="goBack" :content="this.$route.name"></el-page-header>
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="150px">
      <el-form-item label="分组名称" prop="name" required>
        <el-input v-model="form.name" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.description" style="width: 600px;" rows="5"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')" :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import groupService from '../../service/group'
    export default {
        name: 'add',
        data() {
            return {
                form: {
                    name: '',
                    description: ''
                },
                submitBtn: {
                    loading: false,
                    text: '提交'
                },
                rules: {
                    name: [
                        { required: true, message: '请输入分组名称', trigger: 'blur' }
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
                        groupService.add(this.form).then(res => {
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
