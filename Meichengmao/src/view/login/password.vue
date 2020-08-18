<template>
  <div class="password">
    <div class="all">
      <!-- <img src="../../assets/img/logoFFF.png"
           alt=""> -->
      <div class="main-content">
        <div class="userpassword">
          修改密码
        </div>
        <!-- <el-divider></el-divider> -->
        <el-form :model="ruleForm"
                 status-icon
                 :rules="rules"
                 style="width:80%;margin-top: 40px"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="新密码"
                        v-if="!seleCtChange"
                        prop="checkPass">
            <el-input type="password"
                      placeholder='登录密码'
                      show-password
                      v-model="ruleForm.checkPass"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号"
                        v-if="seleCtChange"
                        prop="phe">
            <el-input type="input"
                      placeholder='请输入手机号'
                      v-model="ruleForm.phe"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码"
                        v-if="seleCtChange"
                        prop="getNum">
            <div style="width:100%; display: flex">
              <el-input type="input"
                        placeholder='请输入验证码'
                        style="width:60%"
                        v-model="ruleForm.getNum"
                        autocomplete="off"></el-input>
              <el-button type="warning"
                         @click="getSeleNum"
                         style="width:40%">{{thenum ? '获取验证码' : num}}</el-button>
            </div>
          </el-form-item>
          <el-form-item style="width: 100%">
            <el-button type="warning"
                       style="width: 100%"
                       @click="submitForm('ruleForm')">{{seleCtChange? '下一步' : '完成'}} </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer_o">
        <!-- 还没有账号？<a href="/registered">立即注册</a> -->
        还没有账号？
        <span @click="goRegistered">立即注册</span>
      </div>
    </div>
    <!-- <div class="tip">© 2020 zzidc.com 北京美城互联 版权所有 经营性备案号：豫B2-20070022</div> -->
  </div>
</template>

<script>
export default {
  name: 'password',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写账号'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写密码'));
      } else {
        callback();
      }
    }
    var phenum = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写手机号'));
      } else {
        var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (!myreg.test(value)) {
          callback(new Error('请填写正确的手机号'));
          return false;
        } else {
          callback();

        }
      }
    }

    var getNum = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写验证码'));
      } else {
        callback();
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        phe: '',
        getNum: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phe: [
          { validator: phenum, trigger: 'blur' }
        ],
        getNum: [
          { validator: getNum, trigger: 'blur' }
        ]
      },
      seleCtChange: true,
      num: 60,
      thenum: true
    }
  },
  methods: {
    goPassword () {
      this.$router.push('/password')
    },

    goRegistered () {
      this.$router.push('/registered')
    },

    getSeleNum () {
      // this.$refs.ruleForm.validate((valid) => {
      //   if (valid) {
      var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;

      if (!this.ruleForm.phe.length) {
        this.$message({
          message: '请填写手机号',
          type: 'warning'
        });
        return
      }
      if (!myreg.test(this.ruleForm.phe)) {
        this.$message({
          message: '请填写正确的手机号',
          type: 'warning'
        });
        return false;
      }
      if (!this.thenum) return false
      this.thenum = false
      let time = setInterval(() => {
        if (this.num === 0) {
          window.clearInterval(time)
          this.thenum = true
          this.num = 60
        }
        this.num--
      }, 1000);
      // } else {
      //   console.log('error submit!!');
      //   return false;
      // }
      // });


    },

    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.seleCtChange) {
            this.$refs.ruleForm.resetFields();
            this.seleCtChange = !this.seleCtChange
          } else {
            alert('submit!');

          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    changeSelect () {

    },

    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
.el-divider__text {
  background: #f6f6fb;
}
.el-divider {
  background: #fff;
}
.el-button {
  background: rgba(195, 171, 135, 1);
  border-color: rgba(195, 171, 135, 1);
}
.password {
  width: 100%;
  height: 100%;
  // background: #f6f6fb;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px 100px 100px 100px;
  box-sizing: border-box;

  .all {
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 50px;
    > img {
      width: 228px;
      margin-top: 130px;
    }
  }

  .main-content {
    width: 454px;
    // background: #f6f6fb;
    border-radius: 5px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    .userpassword {
      width: 410px;
      margin: 0 auto;
      border-bottom: 3px solid #fff;
      font-size: 20px;
      color: #333;
      text-align: center;
    }
    .right {
      font-size: 14px;
      color: #4251b6;
      display: inline-block;
      margin-right: 4px;
      cursor: pointer;
      margin-left: 300px;
    }
    .button {
      box-sizing: border-box;
      padding-left: 20px;
      .item_b {
        cursor: pointer;
        width: 120px;
        height: 42px;
        background: #fff;
        border-radius: 3px;
        text-align: center;
        font-size: 14px;
        color: #333;
        line-height: 42px;
        color: #000;
      }
      .item_b:hover {
        // border: solid 1px #00a4ff;
        background: rgba(195, 171, 135, 1);
        color: #fff;
      }
    }
  }
  .footer_o {
    text-align: center;
    margin-top: 30px;
    font-size: 16px;
    color: #cccfe8;
    > span {
      cursor: pointer;
      color: #000;
    }
  }
  .tip {
    // width: 300px;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    // width: 100%;
    // color: #e9edf2;
  }
}
</style>
