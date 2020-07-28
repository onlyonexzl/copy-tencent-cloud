<template>

  <div class="imageAds">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="上级分类"
                    prop="name">
        <el-select v-model="form.position"
                   style="width:600px;margin-left: 0"
                   placeholder="如该分类是顶级分类，此处留空">
          <el-option label="左侧预留广告1"
                     value="1"></el-option>
          <el-option label="左侧预留广告2"
                     value="2"></el-option>
          <el-option label="左侧预留广告3"
                     value="3"></el-option>
          <el-option label="左侧预留广告4"
                     value="4"></el-option>
          <el-option label="banner"
                     value="5"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称"
                    prop="name">
        <el-input v-model="form.host"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="分类图标"
                    style="width: 100%"
                    prop="name">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <div slot="tip"
               class="el-upload__tip">与商铺分类界面匹配的图片尺寸</div>
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="输出顺序"
                    prop="name">
        <el-input v-model="form.host"
                  placeholder="直接输入数字，数值越小，显示越靠前"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="分类关键字"
                    prop="name">
        <el-input v-model="form.host"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="分类描述"
                    prop="name">
        <el-input v-model="form.host"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="手机分类图标"
                    style="width: 100%"
                    prop="name">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <div slot="tip"
               class="el-upload__tip">为达到最佳显示效果，请上传376*217像素的图片</div>
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit('form')"
                   :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import driverService from '../../service/driver'
export default {
  name: 'imageAds',
  data () {
    return {
      form: {
        name: '',
        serviceName: '',
        host: '',
        port: '',
        description: '',
        position: '',
        radio: '1'
      },
      fileList: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      // rules: {
      //   name: [
      //     { required: true, message: '请输入分组名称', trigger: 'blur' }
      //   ],
      //   serviceName: [
      //     { required: true, message: '请输入服务名称', trigger: 'blur' }
      //   ],
      //   host: [
      //     { required: true, message: '请输入主机IP', trigger: 'blur' }
      //   ],
      //   port: [
      //     { required: true, message: '请输入端口', trigger: 'blur' }
      //   ],
      // }
    }
  },
  computed: {},
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    goBack () {
      this.$router.go(-1);
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.submitBtn.loading = true;
          // this.submitBtn.text = '处理中...';
          // driverService.add(this.form).then(res => {
          //     if (res.data.state === 1) {
          //         this.$message({message: "新增成功", type: 'success'});
          //         this.$router.go(-1);
          //     } else {
          //         throw new Error(res.data.msg);
          //     }
          // }).catch(error => {
          //     this.$message.error(error.message);
          // }).finally(() => {
          //     this.submitBtn.loading = false;
          //     this.submitBtn.text = '提交';
          // })
        } else {
          return false;
        }
      });
    }
  }
}
</script>
<style scoped>
.el-form {
  text-align: left !important;
}

.el-input__inner {
  width: 600px;
}

.el-date-editor {
  width: 290px !important;
}

.el-date-editor .el-input__inner {
  width: 100% !important;
}

.el-textarea__inner {
  width: 600px;
}
</style>
