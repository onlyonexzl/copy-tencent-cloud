<template>

  <div class="container">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="收货人"
                    prop="displayName"
                    required>
        <div class="form-item">
          <el-input v-model="form.displayName"
                    style="width: 600px;"></el-input>
          <el-checkbox v-model="checked"
                       style="margin-left: 20px"> 默认地址</el-checkbox>
        </div>
      </el-form-item>
      <el-form-item label="手机号码"
                    prop="name"
                    required>
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="所属地区">
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
        </div>
      </el-form-item>
      <el-form-item label="街道地址"
                    prop="value"
                    required>
        <el-input v-model="form.value"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <!-- <el-form-item label="所属驱动"
                    prop="driverId"
                    required>
        <el-select v-model="form.driverId"
                   placeholder="请选择"
                   style="width: 300px;">
          <el-option v-for="item in drivers"
                     :key="item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </el-form-item> -->
      <el-form-item label="邮政编码">
        <el-input v-model="form.description"
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
// import driverAttributeService from '../../service/driverAttribute'
// import driverService from '../../service/driver'
export default {
  name: 'add',
  data () {
    return {
      form: {
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
          // driverAttributeService.add(this.form).then(res => {
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
    },
    initDrivers () {
      // driverService.queryList().then(res => {
      //     if (res.data.state === 1) {
      //         this.drivers = res.data.data;
      //     } else {
      //         throw new Error(res.data.msg);
      //     }
      // }).catch(error => {
      //     this.$message.error("驱动数据加载失败");
      // })
    }
  },
  created () {
    this.initDrivers();
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
