<template>

  <div class="container">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="品牌名称"
                    prop="name"
                    required>
        <el-input v-model="form.name"
                  placeholder="请填写所经营商品品牌"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="网 址"
                    prop="serviceName"
                    required>
        <el-input v-model="form.serviceName"
                  placeholder="请填写所经营品牌官方网址"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="所属分类"
                    prop="host"
                    required>
        <el-select v-model="form.province"
                   style="width: 100%"
                   placeholder="请正确选择您经营品牌的分类,否则官方审核不通过!"
                   clearable>
          <el-option label="美食"
                     value="shanghai"></el-option>
          <el-option label="娱乐"
                     value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Logo"
                    prop="port"
                    required>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <div slot="tip"
               class="el-upload__tip">请上传所经营品牌logo，尺寸要求：130*60px</div>
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="关键字"
                    prop="serviceName"
                    required>
        <el-input v-model="form.serviceName"
                  placeholder="请填写所经营品牌官方网址"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="品牌描述	">
        <el-input type="textarea"
                  placeholder="请与官网品牌描述保持一致，非个人商铺信息"
                  v-model="form.description"
                  style="width: 600px;"
                  rows="5"></el-input>
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
  name: 'add',
  data () {
    return {
      form: {
        name: '',
        serviceName: '',
        host: '',
        port: '',
        description: '',
        province: ''
      },
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
        name: [
          { required: true, message: '请输入分组名称', trigger: 'blur' }
        ],
        serviceName: [
          { required: true, message: '请输入服务名称', trigger: 'blur' }
        ],
        host: [
          { required: true, message: '请输入主机IP', trigger: 'blur' }
        ],
        port: [
          { required: true, message: '请输入端口', trigger: 'blur' }
        ],
      }
    }
  },
  computed: {},
  methods: {
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
