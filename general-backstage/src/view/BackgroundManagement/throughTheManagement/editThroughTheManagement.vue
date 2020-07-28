<template>

  <div class="editThroughTheManagement">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="通证类型"
                    prop="name"
                    required>
        <el-select v-model="form.status"
                   placeholder="全部">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称"
                    prop="code"
                    required>
        <el-input v-model="form.code"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="form.code"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="编号">
        -
      </el-form-item>
      <el-form-item label="适用商品"
                    prop="name"
                    required>
        <el-select v-model="form.status"
                   placeholder="全部">
          <el-option label="默认分类"
                     value="1">
          </el-option>
          <el-option label="默认分类2"
                     value="2">
          </el-option>
          <el-option label="测试分类"
                     value="3">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="有效期限"
                    prop="profileId"
                    required>
        <el-date-picker v-model="value1"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="奖励规则"
                    prop="name"
                    required>
        <el-select v-model="form.status"
                   placeholder="全部">
          <el-option label="奖励积分"
                     value="1">
          </el-option>
          <el-option label="奖励红包"
                     value="2">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="样式图"
                    prop="name"
                    required>
        <!-- 
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove" -->
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea"
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
export default {
  name: 'editThroughTheManagement',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
        name: '',
        code: '',
        status: '',
        profileId: '',
        groupId: '',
        description: ''
      },
      value1: [],
      options: [
        { value: 0, label: '奖励通证' },
        { value: 1, label: '红利通证' },
        { value: 2, label: '卷币通证' },
        { value: 3, label: '奖励通证' },
        { value: 4, label: '权限通证' },
      ],
      profiles: [],
      groups: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
        name: [
          { required: true, message: '请输入设备名称', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入设备编码', trigger: 'blur' }
        ],
        profileId: [
          { required: true, message: '请选择模板', trigger: 'change' }
        ],
        groupId: [
          { required: true, message: '请选择所属分组', trigger: 'change' }
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
          // deviceService.add(this.form).then(res => {
          //   if (res.data.state === 1) {
          //     this.$message({ message: "新增成功", type: 'success' });
          //     this.$router.go(-1);
          //   } else {
          //     throw new Error(res.data.msg);
          //   }
          // }).catch(error => {
          //   this.$message.error(error.message);
          // }).finally(() => {
          //   this.submitBtn.loading = false;
          //   this.submitBtn.text = '提交';
          // })
        } else {
          return false;
        }
      });
    },
    initProfiles () {
      // profileService.queryList().then(res => {
      //   if (res.data.state === 1) {
      //     this.profiles = res.data.data;
      //   } else {
      //     throw new Error(res.data.msg);
      //   }
      // }).catch(error => {
      //   this.$message.error("模板加载失败");
      // })
    },
    initGroups () {
      // groupService.queryList().then(res => {
      //   if (res.data.state === 1) {
      //     this.groups = res.data.data;
      //   } else {
      //     throw new Error(res.data.msg);
      //   }
      // }).catch(error => {
      //   this.$message.error("分组加载失败");
      // })
    }
  },
  created () {
    this.initProfiles();
    this.initGroups();
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
