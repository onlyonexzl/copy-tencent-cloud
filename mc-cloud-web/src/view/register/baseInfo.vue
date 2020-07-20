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
        <el-form-item label="地区">
          <v-distpicker></v-distpicker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">下一步</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-row>
      <el-col :span="1">
        <div style="float: right;padding-right: 10px;">
          <el-button type="primary" icon="el-icon-message" circle style="font-size: 30px"></el-button>
        </div>
      </el-col>
      <el-col :span="6">
        <p>验证邮件已发送至你的邮箱876750735@qq.com</p><br/>
        <p>请进入邮箱查看邮件，并激活微信开发平台账号。</p><br/>
        <el-button type="primary">立即验证</el-button><br/>
        <p>没有收到邮件？</p><br/>
        <p>1.请检查邮箱地址是否正确</p><br/>
        <p>2.检查你的邮件垃圾箱</p><br/>
        <p>3.若仍未收到确认，请尝试</p><el-button type="text">再次发送验证邮件</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1">
        <div style="float: right;padding-right: 10px;">
          <el-button type="success" icon="el-icon-check" circle style="font-size: 30px"></el-button>
        </div>

      </el-col>
      <el-col :span="6">
        <p>恭喜您已成为美城云开发平台服务商</p><br/>
        <b>1秒后将返回登陆，如长时间未自动跳转，请点击</b><el-button type="text">这里</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
  export default {
    components: { VDistpicker },
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
