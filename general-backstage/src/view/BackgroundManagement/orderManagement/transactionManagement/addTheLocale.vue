<template>

  <div class="container">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="配送区域"
                    prop="name"
                    required>
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="1000克以内费用"
                    prop="serviceName"
                    required>
        <el-input v-model="form.serviceName"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="续重每1000克或其零数"
                    prop="host"
                    required>
        <el-input v-model="form.host"
                  style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item label="免费额度"
                    prop="port"
                    required>
        <el-input v-model="form.port"
                  style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item label="所辖地区">
        <el-input v-model="form.description"
                  style="width: 600px;"
                  rows="5"></el-input>
      </el-form-item>
      <el-form-item label="所辖地区">
        <div class="form-item">
          <el-select v-model="form.province"
                     style="width:200px"
                     clearable
                     placeholder="所在省">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.city"
                     style="width:200px"
                     clearable
                     placeholder="所在市">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.qu"
                     style="width:200px"
                     clearable
                     placeholder="所在区">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-plus"
                     style="width: 70px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin-left: 10px; margin-top: 3px">
            添加
          </el-button>
        </div>

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
        description: ''
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
