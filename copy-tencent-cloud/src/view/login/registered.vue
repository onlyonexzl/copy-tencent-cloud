<template>
  <div class="registered">
    <div class="form">
      <div class="tit">
        <i class="el-icon-tickets"></i>
        {{q && w ? '注册美城号' : !q ? '企业入驻' : '服务商入驻'}} <span class="one"
              v-if="q && w">已有账号？</span><span class="two"
              @click="goLogin"
              v-if="q && w">立即登录</span>
      </div>
      <div class="con-form">
        <el-form v-if="q && w"
                 :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="手机号"
                        prop="phe">
            <el-input type="input"
                      clearable
                      placeholder='建议使用常用手机'
                      v-model="ruleForm.phe">
            </el-input>
          </el-form-item>
          <el-form-item label="验证码"
                        prop="getNum">
            <div style="width:100%; display: flex">
              <el-input type="input"
                        clearable
                        placeholder='手机验证码'
                        style="width:60%"
                        v-model="ruleForm.getNum"></el-input>
              <el-button type="primary"
                         @click="getSeleNum"
                         style="width:40%">{{thenum ? '获取验证码' : num}}</el-button>
            </div>
          </el-form-item>
          <el-form-item label="用户名"
                        prop="user">
            <el-input v-model="ruleForm.user"
                      clearable
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
                        prop="pwd">
            <el-input type="password"
                      clearable
                      placeholder="建议至少使用两种字符组合"
                      v-model="ruleForm.pwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码"
                        prop="newpwd">
            <el-input type="password"
                      clearable
                      placeholder="请再次输入密码"
                      v-model="ruleForm.newpwd"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱"
                        prop="emial">
            <el-input placeholder="请填写联系邮箱"
                      clearable
                      v-model="ruleForm.emial"></el-input>
          </el-form-item>
          <el-form-item label="所在地区"
                        prop="region">
            <div style="width:100%; display: flex">
              <el-select v-model="ruleForm.province"
                         clearable
                         style="width:50%"
                         placeholder="所在省">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="ruleForm.city"
                         clearable
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
                 :model="enterprise"
                 :rules="enterpriseLes"
                 ref="ruleForms"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="服务商性质"
                        prop="raido">
            <el-radio-group v-model="raido"
                            @change="qChangeFun()">
              <el-radio label="1">个人</el-radio>
              <el-radio label="2">企业/政府</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <el-form v-if="!q"
                 :model="enterprise"
                 :rules="enterpriseLes"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <!-- <el-form-item label="服务商性质"
                        prop="raido">
            <el-radio-group v-model="enterprise.raido"
                            @change="qChangeFun()">
              <el-radio label="1">个人</el-radio>
              <el-radio label="2">企业/政府</el-radio>
            </el-radio-group>
          </el-form-item> -->

          <el-form-item label="个人"
                        v-if="qFlag"
                        prop="o_name">
            <el-input type="input"
                      placeholder='请填写身份证上真实姓名'
                      v-model="enterprise.o_name"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="企业"
                        v-if="!qFlag"
                        prop="t_name">
            <el-input type="input"
                      placeholder='请填写您营业执照上完整名称'
                      v-model="enterprise.t_name"
                      autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="所在地区"
                        prop="region">
            <div style="width:100%; display: flex">
              <el-select v-model="enterprise.province"
                         style="width:50%"
                         placeholder="所在省">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="enterprise.city"
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
                        prop="sType">
            <el-select v-model="enterprise.sType"
                       style="width:100%"
                       placeholder="请选择服务商类型">
              <el-option label="软件服务商"
                         value="1"></el-option>
              <el-option label="硬件服务商"
                         value="2"></el-option>
              <el-option label="行业服务商"
                         value="3"></el-option>
              <el-option label="城市服务商"
                         value="4"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="证件类型"
                        v-if="qFlag"
                        prop="o_z_type">
            <el-input v-model="enterprise.o_z_type"
                      placeholder="居民身份证"></el-input>
          </el-form-item>
          <el-form-item label="证件类型"
                        v-if="!qFlag"
                        prop="t_z_type">
            <el-input v-model="enterprise.t_z_type"
                      placeholder="企业营业执照"></el-input>
          </el-form-item>

          <el-form-item label="证件号码"
                        v-if="qFlag"
                        prop="o_num">
            <el-input v-model="enterprise.o_num"
                      placeholder="请填写您身份证上真实姓名"></el-input>
          </el-form-item>
          <el-form-item label="证件号码"
                        v-if="!qFlag"
                        prop="t_num">
            <el-input v-model="enterprise.t_num"
                      placeholder="请填写用营业执照注册号"></el-input>
          </el-form-item>

          <el-form-item label="证件上传"
                        v-if="qFlag"
                        prop="o_upload">
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
                        prop="t_upload">
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
                        prop="phe">
            <el-input v-model="enterprise.phe"
                      placeholder="请填写服务商联系电话"></el-input>
          </el-form-item>

          <el-form-item label="服务商邮箱"
                        prop="email">
            <el-input type="password"
                      placeholder="请填写服务商联系邮箱"
                      v-model="enterprise.email"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary"
                       style="width: 100%"
                       @click="submitForm('ruleForm')">同意协议并提交</el-button>
          </el-form-item>
        </el-form>

        <!-- 服务商入驻 -->
        <el-form v-if="!w"
                 :model="service"
                 :rules="serviceLes"
                 ref="ruleForm"
                 label-width="130px"
                 class="demo-ruleForm">
          <el-form-item label="企业名称  "
                        prop="name">
            <el-input type="input"
                      clearable
                      placeholder='请填写您企业营业执照上完整名称'
                      v-model="service.name"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="所在区域"
                        prop="region">
            <div style="width:100%; display: flex">
              <el-select v-model="service.province"
                         style="width:50%"
                         clearable
                         placeholder="所在省">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="service.city"
                         style="width:50%;margin-left:0"
                         clearable
                         placeholder="所在市">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item label="详细地址"
                        prop="address">
            <el-input v-model="service.address"
                      clearable
                      placeholder="请填写您企业详细地址，具体到门牌号"></el-input>
          </el-form-item>
          <!-- <el-form-item label="类型"
                        prop="resource">
            <el-radio-group v-model="service.resource">
              <el-radio label="个人"></el-radio>
              <el-radio label="企业/政府"></el-radio>
            </el-radio-group>
          </el-form-item> -->
          <el-form-item label="所属行业"
                        prop="industry">
            <el-input type="input"
                      clearable
                      placeholder="请填写您企业所从事的行业"
                      v-model="service.industry"></el-input>
          </el-form-item>
          <el-form-item label="营业执照"
                        v-if="qFlag"
                        prop="license">
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
                        prop="peName">
            <el-input type="input"
                      clearable
                      placeholder="请填写您企业联系人姓名"
                      v-model="service.peName"></el-input>
          </el-form-item>
          <el-form-item label="企业负责人电话"
                        prop="PePhe">
            <el-input placeholder="请填写企业负责人联系电话"
                      clearable
                      v-model="service.PePhe"></el-input>
          </el-form-item>
          <el-form-item label="企业联系邮箱"
                        prop="email">
            <el-input placeholder="请填写企业联系邮箱"
                      clearable
                      v-model="service.email"></el-input>
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
    var phenum = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写常用手机号'));
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
        callback(new Error('请填写手机验证码'));
      } else {
        callback();
      }
    }
    var region = (rule, value, callback) => {
      if (!this.ruleForm.province.length) {
        callback(new Error('请选择所在省'));
      }
      if (!this.ruleForm.city.length) {
        callback(new Error('请选择所在市'));
      }

      if (this.ruleForm.province.length && this.ruleForm.city.length) {
        callback();
      }
    }

    var regions = (rule, value, callback) => {
      if (!this.service.province.length) {
        callback(new Error('请选择所在省'));
      }
      if (!this.service.city.length) {
        callback(new Error('请选择所在市'));
      }

      if (this.service.province.length && this.service.city.length) {
        callback();
      }
    }

    var regionE = (rule, value, callback) => {
      if (!this.enterprise.province.length) {
        callback(new Error('请选择所在省'));
      }
      if (!this.enterprise.city.length) {
        callback(new Error('请选择所在市'));
      }

      if (this.enterprise.province.length && this.enterprise.city.length) {
        callback();
      }
    }

    var license = (rule, value, callback) => {
      if (!this.dialogImageUrl.length) {
        callback(new Error('请上传您的营业执照'));
      } else {
        callback();
      }
    }

    var o_upload = (rule, value, callback) => {
      if (!this.dialogImageUrl.length) {
        callback(new Error('请上传身份证'));
      } else {
        callback();
      }
    }

    var t_upload = (rule, value, callback) => {
      if (!this.dialogImageUrl.length) {
        callback(new Error('请上传营业执照照片'));
      } else {
        callback();
      }
    }

    return {
      ruleForm: {
        phe: '',
        getNum: '',
        user: '',
        emial: '',
        newpwd: '',
        pwd: '',
        province: '',
        city: ''
      },

      service: {
        name: '',
        province: '',
        city: '',
        address: '',
        industry: '',
        peName: '',
        PePhe: '',
        email: ''
      },

      enterprise: {
        o_name: '',
        t_name: '',
        sType: '',
        province: '',
        city: '',
        o_z_type: '',
        t_z_type: '',
        o_num: '',
        t_num: '',
        phe: '',
        email: '',
        region: ''
      },

      raido: '1',

      enterpriseLes: {
        sType: [
          { required: true, message: '请选择服务商类型', trigger: 'blur' }
        ],
        o_name: [
          { required: true, message: '请填写身份证上真实姓名', trigger: 'blur' }
        ],
        t_name: [
          { required: true, message: '请填写您营业执照上完整名称', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请填写服务商联系邮箱', trigger: 'blur' }
        ],

        region: [{ required: true, validator: regionE, trigger: 'change' }],

        o_z_type: [
          { required: true, message: '请填写居民身份证', trigger: 'blur' }
        ],

        t_z_type: [
          { required: true, message: '请填写企业营业执照', trigger: 'blur' }
        ],
        phe: [
          { required: true, message: '请填写服务商联系电话', trigger: 'blur' }
        ],
        o_num: [{
          required: true, message: '请填写您身份证上真实姓名', trigger: 'blur'
        }],
        t_num: [{
          required: true, message: '请填写用营业执照注册号', trigger: 'blur'
        }],
        o_upload: [{
          required: true, validator: o_upload, trigger: 'change'
        }],
        t_upload: [{
          required: true, validator: t_upload, trigger: 'change'
        }]
      },

      num: 60,
      thenum: true,

      rules: {
        phe: [
          { required: true, validator: phenum, trigger: 'blur' }
        ],
        getNum: [
          { required: true, validator: getNum, trigger: 'blur' }
        ],
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' },
        ],
        emial: [
          { required: true, message: '请填写联系邮箱', trigger: 'blur' }
        ],
        newpwd: [
          { type: 'date', required: true, message: '请填写二次密码', trigger: 'blur' }
        ],
        pwd: [
          { type: 'date', required: true, message: '请填写密码', trigger: 'blur' }
        ],
        province: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        region: [
          { required: true, validator: region, trigger: 'change' }
        ]
        // desc: [
        //   { required: true, message: '请填写活动形式', trigger: 'blur' }
        // ]
      },

      serviceLes: {
        name: [
          { required: true, message: '请填写您企业营业执照上完整名称', trigger: 'blur' }
        ],
        region: [
          { required: true, validator: regions, trigger: 'change' }
        ],
        address: [
          { required: true, message: '请填写您企业详细地址，具体到门牌号', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请填写企业联系邮箱', trigger: 'blur' }
        ],
        industry: [
          { required: true, message: '请填写您企业详细地址，具体到门牌号', trigger: 'blur' }
        ],
        peName: [
          { required: true, message: '请填写您企业联系人姓名', trigger: 'blur' }
        ],

        PePhe: [
          { required: true, message: '请填写企业负责人联系电话', trigger: 'blur' }
        ],
        license: [{
          required: true, validator: license, trigger: 'change'
        }]
        // PePhe: [
        //   { required: true, message: '请填写您企业联系人姓名', trigger: 'blur' }
        // ],
        // desc: [
        //   { required: true, message: '请填写活动形式', trigger: 'blur' }
        // ]
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
      if (this.raido == '1') {
        this.qFlag = true
      } else {
        this.qFlag = false
      }
      this.service = {
        name: '',
        province: '',
        city: '',
        address: '',
        industry: '',
        peName: '',
        PePhe: '',
        email: ''
      }

      this.enterprise = {
        o_name: '',
        t_name: '',
        sType: '',
        province: '',
        city: '',
        o_z_type: '',
        t_z_type: '',
        o_num: '',
        t_num: '',
        phe: '',
        email: '',
        region: ''
      }

      this.ruleForm = {
        phe: '',
        getNum: '',
        user: '',
        emial: '',
        newpwd: '',
        pwd: '',
        province: '',
        city: ''
      }
      this.$refs.ruleForm.resetFields();
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
      var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;

      if (!this.ruleForm.phe.length) {
        this.$message({
          message: '请输入手机号',
          type: 'warning'
        });
        return
      }
      if (!myreg.test(this.ruleForm.phe)) {
        this.$message({
          message: '请输入正确的手机号',
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
    this.$nextTick(() => {
      this.$refs.ruleForm.resetFields();
    })

  },

  watch: {
    $route (to, from) {

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
