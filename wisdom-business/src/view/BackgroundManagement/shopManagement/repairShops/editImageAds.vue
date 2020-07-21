<template>

  <div class="imageAds">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="广告名"
                    prop="name">
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="广告位置"
                    prop="serviceName">
        <div class="form-item">
          <el-input v-model="form.serviceName"
                    style="width: 300px;"></el-input>
          <el-select v-model="form.position"
                     style="width:300px;margin-left: 0"
                     placeholder="请选择广告位置">
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
        </div>
      </el-form-item>
      <el-form-item label="广告大小"
                    prop="host">
        <el-input v-model="form.host"
                  style="width: 200px;"></el-input>
        ✖️
        <el-input v-model="form.host"
                  style="width: 200px;"></el-input>
        <span>按照提示尺寸上传广告图片</span>
      </el-form-item>
      <el-form-item label="广告种类"
                    prop="port">
        <el-radio v-model="form.radio"
                  label="1">图片广告</el-radio>
        <el-radio v-model="form.radio"
                  label="2">flash广告</el-radio>
      </el-form-item>
      <el-form-item label="广告文件">
        <el-upload class="upload-demo"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :before-remove="beforeRemove"
                   multiple
                   :limit="1"
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">点击上传</el-button>
          <div slot="tip"
               class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="广告URL">
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
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
