<template>
  <div class="SMSSettings"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 短信平台设置：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="140px">
      <el-form-item label="短信剩余数量"
                    prop="displayName">
        5004 条
      </el-form-item>
      <el-form-item label="当前预存款"
                    prop="displayName">
        3446.45 元
      </el-form-item>
      <el-form-item label="短信充值"
                    prop="displayName">
        <el-select v-model="form.province"
                   clearable
                   placeholder="">
          <el-option label="50元"
                     value="shanghai"></el-option>
          <el-option label="100元"
                     value="shanghai"></el-option>
          <el-option label="200元"
                     value="shanghai"></el-option>
          <el-option label="500元"
                     value="shanghai"></el-option>
          <el-option label="1000元"
                     value="shanghai"></el-option>
        </el-select>
        <span>预付购买</span>
        <span class="redColor"> 您可以购得短信2500条</span>
      </el-form-item>
      <el-form-item label="自定义发送"
                    prop="displayName">
        <el-button type="primary">自定义发送</el-button>
      </el-form-item>
      <el-form-item label="现场消费验证"
                    prop="displayName">
        <el-checkbox v-model="value">发送</el-checkbox>
      </el-form-item>
      <el-form-item label="订单支付通知店主"
                    prop="displayName">
        <el-checkbox v-model="value">发送</el-checkbox>
      </el-form-item>
      <el-form-item label="使用者发送"
                    style="width: 100%"
                    prop="displayName">

        <div class="form-item">
          <div class="f-t-t">
            <el-checkbox v-model="value">发送</el-checkbox>
            <div>
              您好！您在我们店中订购的商品还为您准备着，请尽快付款，我们将在第一时间为您发货！
            </div>
          </div>
          <div class="f-t-t">
            <el-checkbox v-model="value">已付款</el-checkbox>
            <div>
              您好！您的货款我们已收到，我们将尽快为您发货！
            </div>
          </div>
          <div class="f-t-t">
            <el-checkbox v-model="value">已发货</el-checkbox>
            <div>
              您好！您在我们店中订购的商品已经发货，请注意查收，并祝您购物愉快！
            </div>
          </div>
          <div class="f-t-t">
            <el-checkbox v-model="value">已评价</el-checkbox>
            <div>
              您好，您真是一个好买家，祝您购物愉快，欢迎下次再来！
            </div>
          </div>
        </div>

      </el-form-item>
    </el-form>
    <el-button type="primary"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'SMSSettings',

  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
        radio: '1',
        displayName: '',
        name: '',
        type: '',
        value: '',
        driverId: '',
        description: '',
        province: '',
        city: '',
        qu: ''
      },
      value: false,
      height: window.innerHeight - 180 + 'px',
      drivers: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
        displayName: [
          { required: true, message: '请输入收货人', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请输入类型', trigger: 'blur' }
        ],
        value: [
          { required: true, message: '请不要重复填写省市', trigger: 'blur' }
        ],
        driverId: [
          { required: true, message: '请选择所属驱动', trigger: 'change' }
        ]
      },
      imgData: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121833438,3473430102&fm=26&gp=0.jpg',
    }
  },

  mounted () {

  },

  methods: {
    getemplate () {
      this.$router.push('/shopManagement/templateToBuy')
    },
    goNavSet () {
      this.$router.push('/setUpShops/navigationStyleSettings?nameType=导航样式设置')
    },

    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    changeFile (e) {
      function getObjectURL (file) {
        var url = null;
        if (window.createObjectURL != undefined) {
          // basic
          url = window.createObjectURL(file);
        } else if (window.URL != undefined) {
          // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) {
          // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
      }

      let imgData = e.target.files[0];
      this.imgFile = imgData;
      this.imgData = getObjectURL(imgData);
    },
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  justify-content: space-between;
}
.f-t-t {
  width: 18%;
}
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
.SMSSettings {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px 100px;
  overflow: auto;
}

.upload-wrap {
  width: 100%;
  height: 40px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  span {
    z-index: 1;
    line-height: 40px;
    color: #4bb3ff;
    font-size: 16px;
    margin-left: 30px;
  }
  input {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 2;
  }
}
</style>