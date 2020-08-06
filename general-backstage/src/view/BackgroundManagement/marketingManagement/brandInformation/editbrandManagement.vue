<template>

  <div class="editbrandManagement">
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
                    prop="code"
                    required>
        <el-input v-model="form.code"
                  placeholder="请填写所经营品牌官方网址"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="所属分类">
        <el-select v-model="form.status"
                   placeholder="全部">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-select v-model="form.status"
                   placeholder="全部">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <p>请正确选择您经营品牌的分类,否则官方审核不通过!</p>
      </el-form-item>
      <el-form-item label="排序"
                    prop="profileId"
                    required>
        <el-select v-model="form.profileId"
                   placeholder="请选择">
          <el-option v-for="item in profiles"
                     :key="item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="品牌LOGO"
                    prop="groupId"
                    required>
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
      <el-form-item label="关键字">
        <el-input type="textarea"
                  v-model="form.description"
                  style="width: 600px;"
                  rows="5"></el-input>
      </el-form-item>
      <el-form-item label="是否通过验证">
        <el-checkbox v-model="checked">备选项</el-checkbox>
      </el-form-item>
      <el-form-item label="品牌描述">
        <el-input type="textarea"
                  v-model="form.description"
                  style="width: 600px;"
                  rows="5"></el-input>
        <p>请与官网品牌描述保持一致，非个人商铺信息</p>
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
  name: 'editbrandManagement',
  data () {
    return {
      checked: true,
      form: {
        name: '',
        code: '',
        status: 1,
        profileId: '',
        groupId: '',
        description: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      options: [
        { value: 0, label: '离线' },
        { value: 1, label: '在线' },
        { value: 2, label: '维护' },
        { value: 3, label: '故障' },
        { value: 4, label: '失效' },
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
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
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
