<template>

  <div class="container">
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <el-form-item label="角色名称"
                    prop="name">
        {{form.name}}
      </el-form-item>
      <el-form-item label="备注">
        {{form.remark}}
      </el-form-item>
      <el-form-item label="菜单功能"
                    prop="menuIdList">
        <el-tree ref="menuTree"
                 :data="menus"
                 show-checkbox
                 node-key="id"
                 :default-checked-keys="form.menuIdList"
                 :props="{label: 'name'}">
        </el-tree>
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
  name: 'edit',
  data () {
    return {
      form: {
        id: '',
        name: '',
        remark: '',
        menuIdList: []
      },
      menus: [],
      submitBtn: {
        loading: false,
        text: '提交'
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
    }
  },
  created () {

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
