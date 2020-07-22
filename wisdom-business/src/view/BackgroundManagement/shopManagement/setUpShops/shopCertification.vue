<template>
  <div class="shopCertification"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="
       el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 核心设置：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="实体商铺认证（营业执照证书）"
                    style="width: 100%"
                    prop="displayName">
        已认证
      </el-form-item>
      <el-form-item label="证件图片："
                    style="width: 100%"
                    prop="name">
        <div class="img"
             style="width: 300px">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2473338639,2985256281&fm=26&gp=0.jpg"
               style="width: 100%"
               alt="">
        </div>
      </el-form-item>
      <el-form-item label="证件扫描图："
                    style="width: 100%"
                    prop="name">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <div slot="tip"
               class="el-upload__tip">图片允许格式为：jpg,gif,png</div>
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 个人身份认证（其它有效证件）
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="认证状态："
                    style="width: 100%"
                    prop="displayName">
        已认证
      </el-form-item>
      <el-form-item label="证件图片："
                    style="width: 100%"
                    prop="name">
        <div class="img"
             style="width: 300px">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2473338639,2985256281&fm=26&gp=0.jpg"
               style="width: 100%"
               alt="">
        </div>
      </el-form-item>
      <el-form-item label="证件扫描图："
                    style="width: 100%"
                    prop="name">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <div slot="tip"
               class="el-upload__tip">图片允许格式为：jpg,gif,png</div>
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
    </el-form>
    <!-- <el-form-item label=""
                    prop="displayName">
        还没有接入应用？ <a href="http://mp.weixin.qq.com/"
           target="_blank"
           class="redColor"
           rel="noopener noreferrer">点击此处进行申请>></a>
      </el-form-item> -->
    <p style="font-size: 15px; margin-bottom: 10px">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 申请消保 <span class="redColor">消保认证是指商铺缴纳一定数额的消费者保障金，用于交易纠纷时先行赔付给买家</span>
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="消保信息："
                    style="width: 100%"
                    prop="name">
        您当前消保账户余额为 <span class="redColor">￥0.00</span> ，如果不足以支持退货，请及时充值
      </el-form-item>
      <el-form-item label="申请费用："
                    style="width: 100%"
                    prop="displayName">
        您此次充值金额为：<el-input v-model="form.name"
                  style="width: 150px"></el-input> 元 （友情提示：每次充值金额不低于￥1,000.00）
      </el-form-item>
      <el-form-item label="支付方式："
                    style="width: 100%"
                    prop="name">
        <div>
          <el-checkbox v-model="value">使用预付款支付，您当前账户预付款余额：<span class="redColor">￥3446.45</span></el-checkbox>
        </div>
        <div>
          不足部分使用其它方式支付 支付密码：<el-input v-model="form.name"
                    style="width: 150px"></el-input>还没设置支付密码？ <span class="redColor">现在就去设置</span> 。
        </div>
        <div>
          <el-radio v-model="form.radio"
                    label="1">支付宝支付 支付宝是阿里旗下产品，是国内最大的，使用人数最多的第三方支付系统，安全便捷</el-radio>
        </div>
        <div>
          <el-radio v-model="form.radio"
                    label="2">手机支付宝支付 手机支付宝支付</el-radio>
        </div>
        <div>
          <el-radio v-model="form.radio"
                    label="3">微信pc支付 微信pc支付</el-radio>
        </div>
        <div>
          <el-radio v-model="form.radio"
                    label="4">微信wap支付 微信wap支付</el-radio>
        </div>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'shopCertification',

  data () {
    return {
      value: false,
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
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
.shopCertification {
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