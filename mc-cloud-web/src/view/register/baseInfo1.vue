<template>
  <div>
    <div class="header">
      <el-steps :active="0" align-center>
        <el-step title="编写基本信息" description=""></el-step>
        <el-step title="邮箱激活" description=""></el-step>
        <el-step title="完善开发者资料" description=""></el-step>
      </el-steps>
    </div>
    <div class="content">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="设置密码">
          <el-input type="password" v-model="form.pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="form.repass"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="form.validCode"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "baseInfo",
    data() {
      return {
        form: {
          email: '',
          pass: '',
          repass: '',
          validCode: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
  .header{
    
  }
  .content{
    width: 600px;
  }
</style>
