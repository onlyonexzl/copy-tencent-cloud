<template>
  <div class="registered">
    <div class="form">
      <div class="tit">
        <i class="el-icon-tickets"></i>
        注册美城号<span class="one">已有账号？</span><span class="two"
              @click="goLogin">立即登录</span>
      </div>
      <div class="con-form">
        <el-form v-if="q && w"
                 :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="手机号"
                        prop="checkPass">
            <el-input type="input"
                      placeholder='建议使用常用手机'
                      v-model="ruleForm.checkPass"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码"
                        prop="getNum">
            <div style="width:100%; display: flex">
              <el-input type="input"
                        placeholder='手机验证码'
                        style="width:60%"
                        v-model="ruleForm.checkPass"
                        autocomplete="off"></el-input>
              <el-button type="primary"
                         @click="getSeleNum"
                         style="width:40%">{{thenum ? '获取验证码' : num}}</el-button>
            </div>
          </el-form-item>
          <el-form-item label="用户名"
                        prop="name">
            <el-input v-model="ruleForm.name"
                      placeholder="请设置您的用户名称"></el-input>
          </el-form-item>
          <!-- <el-form-item label="类型"
                        prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="个人"></el-radio>
              <el-radio label="企业/政府"></el-radio>
            </el-radio-group>
          </el-form-item> -->
          <el-form-item label="登录密码"
                        prop="name">
            <el-input type="password"
                      placeholder="建议至少使用两种字符组合"
                      v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="确认密码"
                        prop="name">
            <el-input type="password"
                      placeholder="请再次输入密码"
                      v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱"
                        prop="name">
            <el-input placeholder="请填写联系邮箱"
                      v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="所在地区"
                        prop="region">
            <div style="width:100%; display: flex">
              <el-select v-model="ruleForm.region"
                         style="width:50%"
                         placeholder="所在省">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="ruleForm.region"
                         style="width:50%;margin-left:0"
                         placeholder="所在市">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       style="width: 100%"
                       @click="submitForm('ruleForm')">同意协议并提交</el-button>
          </el-form-item>
        </el-form>
        <!-- 企业入驻 -->
        <el-form v-if="!q"
                 :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="服务商性质"
                        prop="resource">
            <el-radio-group v-model="ruleForm.resource"
                            @change="qChangeFun()">
              <el-radio label="1">个人</el-radio>
              <el-radio label="2">企业/政府</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="个人"
                        v-if="qFlag"
                        prop="checkPass">
            <el-input type="input"
                      placeholder='请填写身份证上真实姓名'
                      v-model="ruleForm.checkPass"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="企业"
                        v-if="!qFlag"
                        prop="checkPass">
            <el-input type="input"
                      placeholder='请填写您营业执照上完整名称'
                      v-model="ruleForm.checkPass"
                      autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="所在地区"
                        prop="region">
            <div style="width:100%; display: flex">
              <el-select v-model="ruleForm.region"
                         style="width:50%"
                         placeholder="所在省">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="ruleForm.region"
                         style="width:50%;margin-left:0"
                         placeholder="所在市">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </div>
          </el-form-item>

          <el-form-item label="服务商类型"
                        prop="region">
            <el-select v-model="ruleForm.region"
                       style="width:100%"
                       placeholder="请选择服务商类型">
              <el-option label="软件服务商"
                         value="1"></el-option>
              <el-option label="硬件服务商  "
                         value="2"></el-option>
              <el-option label="行业服务商"
                         value="3"></el-option>
              <el-option label="城市服务商"
                         value="4"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="证件类型"
                        v-if="qFlag"
                        prop="name">
            <el-input v-model="ruleForm.name"
                      placeholder="居民身份证"></el-input>
          </el-form-item>
          <el-form-item label="证件类型"
                        v-if="!qFlag"
                        prop="name">
            <el-input v-model="ruleForm.name"
                      placeholder="企业营业执照"></el-input>
          </el-form-item>

          <el-form-item label="证件号码"
                        v-if="qFlag"
                        prop="name">
            <el-input v-model="ruleForm.name"
                      placeholder="请填写您身份证上真实姓名"></el-input>
          </el-form-item>
          <el-form-item label="证件号码"
                        v-if="!qFlag"
                        prop="name">
            <el-input v-model="ruleForm.name"
                      placeholder="请填写用营业执照注册号"></el-input>
          </el-form-item>

          <el-form-item label="证件上传"
                        v-if="qFlag"
                        prop="getNum">
            <span>请上传身份证</span>
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
          <el-form-item label="证件上传"
                        v-if="!qFlag"
                        prop="getNum">
            <span>请上传营业执照照片</span>
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

          <el-form-item label="联系电话"
                        prop="name">
            <el-input v-model="ruleForm.name"
                      placeholder="请填写服务商联系电话"></el-input>
          </el-form-item>

          <el-form-item label="服务商邮箱"
                        prop="name">
            <el-input type="password"
                      placeholder="请填写服务商联系邮箱"
                      v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-form>

        <!-- 服务商入驻 -->
        <el-form v-if="!w"
                 :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="130px"
                 class="demo-ruleForm">
          <el-form-item label="企业名称  "
                        prop="checkPass">
            <el-input type="input"
                      placeholder='请填写您企业营业执照上完整名称'
                      v-model="ruleForm.checkPass"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所在区域"
                        prop="region">
            <div style="width:100%; display: flex">
              <el-select v-model="ruleForm.region"
                         style="width:50%"
                         placeholder="所在省">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="ruleForm.region"
                         style="width:50%;margin-left:0"
                         placeholder="所在市">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item label="详细地址"
                        prop="name">
            <el-input v-model="ruleForm.name"
                      placeholder="请填写您企业详细地址，具体到门牌号"></el-input>
          </el-form-item>
          <!-- <el-form-item label="类型"
                        prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="个人"></el-radio>
              <el-radio label="企业/政府"></el-radio>
            </el-radio-group>
          </el-form-item> -->
          <el-form-item label="所属行业"
                        prop="name">
            <el-input type="input"
                      placeholder="请填写您企业所从事的行业"
                      v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="营业执照"
                        v-if="qFlag"
                        prop="getNum">
            <span>请上传您的营业执照</span>
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
          <el-form-item label="企业负责人姓名"
                        prop="name">
            <el-input type="input"
                      placeholder="请填写您企业联系人姓名"
                      v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="企业负责人电话"
                        prop="name">
            <el-input placeholder="请填写企业负责人联系电话"
                      v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="企业联系邮箱"
                        prop="name">
            <el-input placeholder="请填写企业联系邮箱"
                      v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary"
                       style="width: 100%"
                       @click="submitForm('ruleForm')">同意协议并提交</el-button>
          </el-form-item>
        </el-form>
        <div class="reg-agreement">
          <span>《景安网络用户注册协议》</span>
          <span>《法律声明及隐私权政策》</span>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'registered',
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '1',
        desc: ''
      },
      num: 60,
      thenum: true,
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      q: true,
      qFlag: true,
      w: true,
      dialogImageUrl: '',
      dialogVisible: false
    }
  },

  methods: {
    qChangeFun (e) {
      // if (this.ruleForm.resource)
      if (this.ruleForm.resource == 1) {
        this.qFlag = true
      } else {
        this.qFlag = false
      }
    },

    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    goLogin () {
      this.$router.push('/login')
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    getSeleNum () {
      // if ()
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

    },
  },

  created () {
    let name = this.$route.query.name
    if (name === 'q') {
      this.q = false
      this.w = true
    } else if (name === 'f') {
      this.q = true
      this.w = false
    } else {
      this.w = true
      this.q = true
    }
  },

  watch: {
    $route (to, from) {
      let name = this.$route.query.name
      if (name === 'q') {
        this.q = false
        this.w = true
      } else if (name === 'f') {
        this.q = true
        this.w = false
      } else {
        this.w = true
        this.q = true
      }
    }
  },

  // created () {

  // }
}
</script>

<style lang="scss" scoped>
.registered {
  width: 100%;
  height: 100%;
  // background: #eeeeee;
  box-sizing: border-box;
  .form {
    width: 1240px;
    height: 100%;
    margin: 20px auto 100px;
    background: #fff;

    .tit {
      width: 1154px;
      margin: 0 auto;
      height: 60px;
      line-height: 60px;
      padding-top: 34px;
      border-bottom: 1px solid #dddddd;
      font-size: 22px;
      color: #333;
      margin: 0 auto;
      .one {
        font-size: 14px;
        margin-left: 6px;
      }
      .two {
        cursor: pointer;
        color: #4251b6;
        font-size: 14px;
        display: inline-block;
        margin-left: 6px;
      }
    }
    .con-form {
      box-sizing: border-box;
      padding: 0 350px;
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
}

.reg-agreement {
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  color: #00a4ff;
  margin: 0 8px;
  box-sizing: border-box;
  padding-left: 70px;
}
.reg-agreement :hover {
  text-decoration: underline;
}
</style>
