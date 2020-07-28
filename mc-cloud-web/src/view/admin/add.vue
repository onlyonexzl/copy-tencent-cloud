<template>

  <div class="container">
    <div style="padding: 14px 10px;background-color: #FFF;margin-bottom: 20px;">
      <el-page-header @back="goBack" :content="this.$route.name"></el-page-header>
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="150px">
      <el-form-item label="登陆账号" prop="loginId" required>
        <el-input v-model="form.loginId" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="登陆密码" prop="loginPwd" required>
        <el-input type="password" v-model="form.loginPwd" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPwd" required>
        <el-input type="password" v-model="form.confirmPwd" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="username" required>
        <el-input v-model="form.username" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone" required>
        <el-input v-model="form.phone" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="是否启用">
        <el-switch v-model="form.state" :active-value="1" :inactive-value="0"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')" :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import adminService from '../../service/admin'
    export default {
        name: 'edit',
        data() {
            var validateLoginPwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入登陆密码'));
                } else {
                    if (this.form.confirmPwd !== '') {
                        this.$refs.form.validateField('confirmPwd');
                    }
                    callback();
                }
            };
            var validateConfirmPwd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.loginPwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                form: {
                    loginId: '',
                    loginPwd: '',
                    confirmPwd: '',
                    username: '',
                    phone: '',
                    state: 0
                },
                submitBtn: {
                    loading: false,
                    text: '提交'
                },
                rules: {
                    loginId: [
                        { required: true, message: '请输入登陆账号', trigger: 'blur' }
                    ],
                    loginPwd: [
                        { validator: validateLoginPwd, trigger: 'blur' }
                    ],
                    confirmPwd: [
                        { validator: validateConfirmPwd, trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: '请输入姓名', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输入手机号', trigger: 'blur' },
                        { max: 20, message: '手机号最多20位', trigger: 'blur' }
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
                        adminService.add(this.form).then(res => {
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
