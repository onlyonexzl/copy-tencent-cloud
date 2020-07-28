<template>

  <div class="imageAds">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="栏目名称"
                    prop="name">
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="字体样式"
                    prop="serviceName">
        <div class="form-item">
          <el-select v-model="form.position"
                     style="width:300px;margin-left: 0;margin-right:20px"
                     placeholder="请选择标题颜色">
          </el-select>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="粗体"></el-checkbox>
            <el-checkbox label="斜体"></el-checkbox>
            <el-checkbox label="下划线"></el-checkbox>
          </el-checkbox-group>
        </div>
      </el-form-item>
      <el-form-item label="图片"
                    prop="host">
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
      <el-form-item label="栏目链接"
                    prop="name">
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="文字说明"
                    prop="name">
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="目标框架"
                    prop="port">
        <el-radio v-model="form.radio"
                  label="1">本窗口</el-radio>
        <el-radio v-model="form.radio"
                  label="2">新窗口</el-radio>
      </el-form-item>
      <el-form-item label="栏目类型"
                    prop="port">
        <el-radio v-model="form.radio"
                  label="2">顶部导航</el-radio>
        <el-radio v-model="form.radio"
                  label="1">底部导航</el-radio>
      </el-form-item>
      <el-form-item label="位置排序">
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
