<template>
  <div class="registered">
    <div class="form">
      <div class="tit">
        <i class="el-icon-tickets"></i>
        商家入驻
      </div>
      <div class="con-form">
        <!-- 服务商入驻 -->
        <el-form :model="service"
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

    var license = (rule, value, callback) => {
      if (!this.dialogImageUrl.length) {
        callback(new Error('请上传您的营业执照'));
      } else {
        callback();
      }
    }

    return {

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
          { required: true, message: '请填写您企业所从事的行业', trigger: 'blur' }
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

      dialogImageUrl: '',
      dialogVisible: false
    }
  },

  methods: {
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
  },

  created () {

  },

  watch: {

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
