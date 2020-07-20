<template>
  <div class="header">
    <el-dropdown>
      <span class="el-dropdown-link">
        <i class="el-icon-s-custom"></i>
        {{userInfo.name}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="updatePwdDialogVisible = true"><i class="el-icon-unlock"></i>修改密码</el-dropdown-item>
        <el-dropdown-item v-on:click.native="logout"><i class="el-icon-switch-button"></i>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dialog title="密码修改" :visible.sync="updatePwdDialogVisible" width="500px">
      <el-form :rules="rules" :model="pwdForm" label-width="80px">
        <el-form-item label="用户账号">
          {{userInfo.username}}
        </el-form-item>
        <el-form-item label="原始密码" prop="loginPwd" required>
          <el-input type="password" v-model="pwdForm.loginPwd" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="新密码" prop="password" required>
          <el-input type="password" v-model="pwdForm.password" autocomplete="off"/>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword" required>
          <el-input type="password" v-model="pwdForm.confirmPassword" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updatePwdDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updatePwd" :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import userService from '../service/user'
  export default {
    name: 'Header',
    data() {
      let validatePassword = (rule, value, callback) => {
        if (value == null || value === '') {
          callback(new Error('请输入登陆密码'));
        } else {
          if (this.pwdForm.confirmPassword !== '') {
            this.$refs.pwdForm.validateField('confirmPassword');
          }
          callback();
        }
      };
      let validateConfirmPwd = (rule, value, callback) => {
        if (value == null || value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.pwdForm.password) {
          callback(new Error('两次密码输入不一致'));
        } else {
          callback();
        }
      };
      return {
        pwdForm: {
          loginPwd: '',
          password: '',
          confirmPassword: ''
        },
        userInfo: this.$store.getters.userInfo,
        updatePwdDialogVisible: false,
        submitBtn: {
          loading: false,
          text: '确 定'
        },
        rules: {
          loginPwd: [
            {required: true, message: '请输入原始密码', trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ],
          confirmPassword: [
            {validator: validateConfirmPwd, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      updatePwd() {
        this.submitBtn.loading = true;
        this.submitBtn.text = '处理中...';
        userService.updatePwd({
          id: this.userInfo.id,
          loginPwd: this.pwdForm.loginPwd,
          password: this.pwdForm.password
        }).then(res => {
          if (res.data.state === 1) {
            this.updatePwdDialogVisible = false;
            this.$alert('密码修改成功，请重新登录', '提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$store.dispatch("logout").then(() => {
                  this.$router.push({path: '/Login'});
                });
              }
            });
          } else {
            this.$message.error(res.data.msg);
          }
        }).finally(() => {
          this.submitBtn.loading = false;
          this.submitBtn.text = '确 定';
        });
      },
      logout() {
        this.$confirm('确认要退出登录么?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch("logout").then(() => {
            this.$router.push({path: '/Login'});
          });
        });
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header .el-dropdown {
    float: right;
  }

  .logo {
    float: left;
    height: 35px;
    margin-top: 8px;
  }

  .el-dropdown-menu__item:hover {
    color: #65cea7 !important;
  }
</style>
