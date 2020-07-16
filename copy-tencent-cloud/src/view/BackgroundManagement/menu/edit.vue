<template>

  <div class="container">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="菜单代码"
                    prop="codeNo"
                    required>
        <el-input v-model="form.codeNo"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="菜单名称"
                    prop="name"
                    required>
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="上级菜单"
                    prop="parentIdList">
        <el-cascader v-model="form.parentIdList"
                     :options="menuOptions"
                     :props="{ checkStrictly: true, value: 'id', label: 'name' }"
                     style="width: 600px;"></el-cascader>
      </el-form-item>
      <el-form-item label="是否启用">
        <el-switch v-model="form.state"
                   :active-value="1"
                   :inactive-value="0"></el-switch>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea"
                  v-model="form.remark"
                  style="width: 600px;"
                  rows="5"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit('form')"
                   :loading="submitBtn.loading">{{submitBtn.text}}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'add',
  data () {
    return {
      form: {
        codeNo: '',
        name: '',
        parentIdList: '',
        state: 1,
        remark: ''
      },
      menuOptions: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
        codeNo: [
          { required: true, message: '请输入菜单代码', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入菜单名称', trigger: 'blur' }
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

        } else {
          return false;
        }
      });
    },
    initMenuOptions () {

    }
  },
  created () {
    this.initMenuOptions();
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
