<template>
  <div class="information"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 头部样式设置：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="头部样式设置"
                    prop="displayName">
        <el-button type="primary"
                   @click="goNavSet">点击设置</el-button>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="
       el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 核心设置：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="商铺名称"
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="当前模板"
                    prop="name">
        <div class="form-item">
          <span style="margin-right: 10px">默认模版</span>
          <el-button type="primary">点击预览</el-button>
          <el-button type="primary"
                     @click="getemplate"
                     plain>点击更换</el-button>
        </div>
      </el-form-item>
      <el-form-item label="公司地址"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="ICP备案号码"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="主营项目"
                    prop="name">
        <el-input v-model="form.name"
                  type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="商铺描述"
                    prop="name">
        <div class="top">
          网店系统,名店街,促销团购拍卖信息,做最好的地区企业B2C实体商铺网上销售平台!
        </div>
        <div class="bottom">
          <i class="el-icon-warning blueColor"></i>
          用于记录商铺概要与描述，可增加搜索引擎关注度
        </div>
      </el-form-item>
      <el-form-item label="联系电话"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="手机号码"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="所属区域"
                    prop="name">
        <div class="form-item">
          <el-select v-model="form.province"
                     clearable
                     placeholder="所在省">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.city"
                     clearable
                     placeholder="所在市">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.qu"
                     clearable
                     placeholder="所在区">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="详细地址"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="商铺LOGO"
                    style="width: 100%"
                    prop="name">
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
      <el-form-item label="商铺BANNER	"
                    style="width: 100%"
                    prop="name">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <div slot="tip"
               class="el-upload__tip">为达到最佳显示效果，请应用990*130像素的图片</div>
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="微信二维码"
                    style="width: 100%"
                    prop="name">
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
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 微信公众号整合
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="APP ID"
                    style="width: 100%"
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="APP SECRET"
                    style="width: 100%"
                    prop="displayName">
        <el-input v-model="form.displayName"></el-input>
      </el-form-item>
      <el-form-item label=""
                    style="width: 100%"
                    prop="displayName">
        还没有接入应用？ <a href="http://mp.weixin.qq.com/"
           target="_blank"
           class="redColor"
           rel="noopener noreferrer">点击此处进行申请>></a>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 当前提现账号设置
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="账号类型"
                    prop="displayName">
        <div>银行卡</div>
      </el-form-item>
      <el-form-item label="账号信息"
                    prop="displayName">
        <p>银行卡账号：****************</p>
        <p>开户行：*****</p>
        <p>开户名：**</p>
      </el-form-item>
      <!-- <el-form-item label=""
                    prop="displayName">
        还没有接入应用？ <a href="http://mp.weixin.qq.com/"
           target="_blank"
           class="redColor"
           rel="noopener noreferrer">点击此处进行申请>></a>
      </el-form-item> -->
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 基本显示设置
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="是否开启发票"
                    prop="name">
        <el-radio v-model="form.radio"
                  label="2">使用</el-radio>
        <el-radio v-model="form.radio"
                  label="1">不使用</el-radio>
      </el-form-item>
      <el-form-item label="发票费率:"
                    prop="displayName">
        % 请填写整数，不开发票请留空
      </el-form-item>
      <el-form-item label="是否关闭网店"
                    prop="name">
        <el-radio v-model="form.radio"
                  label="2">关闭</el-radio>
        <el-radio v-model="form.radio"
                  label="1">开启</el-radio>
      </el-form-item>
      <el-form-item label="关闭原因"
                    prop="name">
        <el-input v-model="form.name"
                  type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="底部代码"
                    style="width: 100%"
                    prop="name">
        <el-input v-model="form.name"
                  type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'information',

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
.information {
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