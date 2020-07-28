<template>
  <div class="settingService allDiv">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="100px">
      <el-form-item label="客服 电话"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="客服 E-mail"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="客服 旺旺"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="客服 传真"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="客服 QQ 1"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="客服 QQ 2"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="客服服务时间"
                    style="width: 100%"
                    prop="name">
        <el-input type="textarea"
                  v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="配送说明"
                    style="width: 100%"
                    prop="name">
        <el-input type="textarea"
                  :autosize="{ minRows: 5}"
                  v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="配送范围"
                    style="width: 100%"
                    prop="name">
        <el-input type="textarea"
                  :autosize="{ minRows: 5}"
                  v-model="form.name"></el-input>
      </el-form-item>

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
  name: 'settingService',
  data () {
    return {
      checkList: [],
      form: {
        name: '',
        serviceName: '',
        host: '',
        port: '',
        description: '',
        position: '',
        radio: '1'
      },
      dialogImageUrl: '',
      dialogVisible: false,
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
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
<style lang='scss' scoped>
.settingService {
  padding: 20px 100px;
}
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
</style>
