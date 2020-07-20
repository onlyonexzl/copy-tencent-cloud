<template>
  <div>
    <div class="header">
      <el-steps :active="2" align-center>
        <el-step title="编写基本信息" description=""></el-step>
        <el-step title="邮箱激活" description=""></el-step>
        <el-step title="完善开发者资料" description=""></el-step>
      </el-steps>
    </div>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
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
