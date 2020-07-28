<template>
  <div class="trustManagement"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 我要托管：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="申请条件："
                    style="width:100%"
                    prop="displayName">已开通网上商铺的商家!
      </el-form-item>
      <el-form-item label="商铺名称："
                    style="width: 100%"
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder="15个汉字内 例如：***有限公司"></el-input>
      </el-form-item>
      <el-form-item label="商铺类型："
                    prop="displayName">
        <el-select v-model="form.province"
                   style="width:100%"
                   clearable
                   placeholder="请选择">
          <el-option label="销售型商铺"
                     value="shanghai"></el-option>
          <el-option label="展示型商铺"
                     value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属分类："
                    prop="displayName">
        <el-select v-model="form.province"
                   style="width:100%"
                   clearable
                   placeholder="请选择">
          <el-option label="美食"
                     value="shanghai"></el-option>
          <el-option label="娱乐"
                     value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="主营项目："
                    style="width: 100%"
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder="例如：男女服饰，男女皮鞋"></el-input>
      </el-form-item>
      <el-form-item label="详细地址："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder="请填写具体街道，例如：南昌路88号"></el-input>
      </el-form-item>

      <el-form-item label="联系人："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder=""></el-input>

      </el-form-item>
      <el-form-item label="联系电话："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="联系QQ："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="商铺logo："
                    style="width: 100%"
                    prop="name">
        <el-input v-model="form.displayName"
                  style="width: 200px"
                  placeholder="店标名字"></el-input>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <div slot="tip"
               class="el-upload__tip">图片最佳尺寸：130*60px，格式JPG或GIF，大小150K以内</div>
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="商铺banner："
                    style="width: 100%"
                    prop="name">
        <el-input v-model="form.displayName"
                  style="width: 200px"
                  placeholder="商铺横幅文字"></el-input>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <div slot="tip"
               class="el-upload__tip">图片最佳尺寸：972*125px，格式JPG或GIF，大小500K以内</div>
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="商铺描述："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="给该项目留言："
                    style="width:100%"
                    prop="displayName">
        <el-input v-model="form.displayName"
                  type="textarea"
                  placeholder=""></el-input>
      </el-form-item>

    </el-form>
    <el-button type="primary"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'trustManagement',

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
.trustManagement {
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