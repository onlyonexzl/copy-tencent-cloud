<template>
  <div class="taobaoConversion"
       :style="{'height': height}">
    <el-button slot="append"
               type="primary"
               icon="el-icon-plus"
               style="width: 90px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;"
               @click="add">
      淘宝导入
    </el-button>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 淘宝导出：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="分类选择："
                    prop="displayName">
        <el-select v-model="form.province"
                   clearable
                   placeholder="">
          <el-option label="默认分类"
                     value="shanghai"></el-option>
          <el-option label="复制默认分类"
                     value="beijing"></el-option>
          <el-option label="默认分类2"
                     value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品栏目ID："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="平邮价格："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="快递价格："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="EMS价格："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="所在地："
                    prop="name">
        <div class="form-item">
          <el-select v-model="form.province"
                     clearable
                     style="flex:1"
                     placeholder="所在省">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.city"
                     style="flex:1"
                     clearable
                     placeholder="所在市">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
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
  name: 'taobaoConversion',

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
    add () {
      this.$router.push('/developManagement/theImport')
    },

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
.taobaoConversion {
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