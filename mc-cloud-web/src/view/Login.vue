<template>
    <div class="form-page">
        <div class="form-signin">
            <div class="form-signin-heading text-center">
                <h1 class="sign-title">美城云内控台登陆</h1>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="form-box">
                <el-form-item prop="username">
                    <el-input type="text" class="txt-input" placeholder="用户名" v-model="ruleForm.username"
                              autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" class="txt-input" placeholder="密码" v-model="ruleForm.password"
                              autocomplete="off"></el-input>
                </el-form-item>
                <div class="el-form-item">
                    <el-checkbox v-model="ruleForm.checked">Remember me</el-checkbox>
                </div>
                <div class="form-item">
                    <!-- 直接添加 disabled属性 显示按钮可点击状态 -->
                    <el-button type="primary" @click="submitForm('ruleForm')" class="btn-submit" :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
	import userService from '../service/user'

	export default {
		name: 'Login',
		data() {
			var validateName = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入用户名'));
				} else {
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					checked: false,
					username: 'admin',
					password: '123456'
				},
				submitBtn: {
					loading: false,
					text: '登 陆'
				},
				rules: {
					username: [
						{validator: validateName, trigger: 'blur'}
					],
					password: [
						{validator: validatePass, trigger: 'blur'}
					],
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.submitBtn.loading = true;
						this.submitBtn.text = '处理中...';
						userService.login(this.ruleForm).then(res => {
							let {state, data, msg} = res.data;
							if (state === 1) {
								this.$store.dispatch("login", data).then(() => {
									//查询用户信息，包括权限数据
									userService.getUserInfo().then(res => {
										this.$store.commit("setUserInfo", res.data.data);
										this.$message({message: "登陆成功", type: 'success'});
										//跳转页面
										const path = this.$route.query.redirect || '/';
										this.$router.push({path: path});
									}).catch(error => {
										this.$message.error(error.message);
									});
								}).catch(error => {
									this.$message.error(error.message);
								});

							} else {
								this.$message.error(msg);
							}
						}).catch(error => {
							this.$message.error(error.message);
						}).finally(() => {
							this.submitBtn.loading = false;
							this.submitBtn.text = '登陆';
						})
					} else {
						return false;
					}
				});
			},
		}
	}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .form-page {
        position: relative;
        width: 100%;
        height: 100%;
        background: url("../../static/image/login-bg.jpg") no-repeat center/cover;
        padding-top: 200px;
    }

    .form-signin {
        max-width: 400px;
        margin: 0 auto;
        background: #fff;
        border-radius: 5px;
        -webkit-border-radius: 5px;
    }

    .form-signin .form-signin-heading {
        margin: 0;
        padding: 40px 20px 0;
        text-align: center;
        color: #fff;
        position: relative;
    }

    .sign-title {
        font-size: 26px;
        color: #333;
        text-align: center;
        width: 100%;
        text-transform: uppercase;
    }

    .el-form {
        padding: 40px;
        position: relative;
    }

    .el-form .form-item .el-input__inner {
        border-radius: 5px;
        -webkit-border-radius: 5px;
        border: 1px solid #eaeaec;
        box-shadow: none;
        font-size: 12px;
    }

    .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
        background-color: #6bc5a4;
        border-color: #6bc5a4;
    }

    .el-checkbox__input.is-checked + .el-checkbox__label {
        color: #6bc5a4;
    }

    .el-checkbox__input.is-focus .el-checkbox__inner {
        border-color: #6bc5a4;
    }

    .form-signin .btn-submit {
        width: 100%;
        height: 40px;
        background: #6bc5a4;
        border-color: #6bc5a4;
        color: #fff;
        text-transform: uppercase;
        font-weight: normal;
        font-family: 'Open Sans', sans-serif;
        padding: 5px;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
        font-size: 16px;
    }

    .form-signin .btn-submit.is-disabled {
        background: #cecece !important;
        border-color: #cecece !important;
    }

    .form-signin .btn-submit:hover {
        background: #688ac2;
        border-color: #6bc5a4;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition: all 0.3s;
    }
</style>
