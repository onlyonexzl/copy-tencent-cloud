<template>

  <div class="editFriendshipConnection">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="网站名称"
                    prop="name">
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="链接说明"
                    prop="serviceName">
        <el-input v-model="form.serviceName"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="链接网址"
                    prop="host">
        <el-input v-model="form.host"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="显示顺序"
                    prop="port">
        <el-input v-model="form.port"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="logo"
                    prop="logo">
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
        </el-upload>
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
  name: 'editFriendshipConnection',
  data () {
    var logo = (rule, value, callback) => {
      if (!this.dialogImageUrl.length) {
        callback(new Error('请上传logo'));
      } else {
        callback();
      }
    }
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
      dialogImageUrl: '',
      fileList: [],
      rules: {
        name: [
          { required: true, message: '请输入网站名称', trigger: 'blur' }
        ],
        serviceName: [
          { required: true, message: '请输入链接说明', trigger: 'blur' }
        ],
        host: [
          { required: true, message: '链接网址', trigger: 'blur' }
        ],
        port: [
          { required: true, message: '请输入显示顺序', trigger: 'blur' }
        ],
        logo: [{
          required: true, validator: logo, trigger: 'change'
        }]
      }
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
