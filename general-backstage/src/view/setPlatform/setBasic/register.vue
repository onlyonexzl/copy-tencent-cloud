<template>
  <div class="refister_page" :style="{ height: heights }">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="130px"
      class="demo-ruleForm"
    >
      <el-form-item label="会员注册认证" prop="attestation">
        <el-radio-group v-model="ruleForm.attestation">
          <el-radio label="开通注册"></el-radio>
          <el-radio label="关闭注册"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="注册奖励积分" prop="bonus_points">
        <el-input v-model="ruleForm.bonus_points"></el-input>
        <p style="color: #999;">↑ 会员加入时奖励的积分。</p>
      </el-form-item>
      <el-form-item label="注册奖励预付款" prop="advance">
        <el-input v-model="ruleForm.advance"></el-input>
        <p style="color: #999;">↑ 会员加入时奖励的预付款。</p>
      </el-form-item>
      <el-form-item label="验证码使用" prop="verification_code ">
        <el-radio-group v-model="ruleForm.verification_code">
          <el-radio label="使用"></el-radio>
          <el-radio label="不使用"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="验证码设置" prop="verification_set">
        <div class="kg_cont">
          宽: <el-input v-model="ruleForm.verification_width"></el-input> 高:
          <el-input v-model="ruleForm.verification_height"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="QQ账号整合" prop="qq_conformity">
        <div class="inter_con">
          <span>验证代码：</span
          ><el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="ruleForm.qqConformity_code"
          >
          </el-input>
        </div>
        <div class="inter_con">
          <span>APP ID：</span
          ><el-input v-model="ruleForm.qqConformity_appid"></el-input>
        </div>
        <div class="inter_con">
          <span>APP KEY：</span
          ><el-input v-model="ruleForm.qqConformity_appkey"></el-input>
        </div>
        <p>↑ 还没有接入应用？<a href="">点击此处进行申请>></a></p>
      </el-form-item>

      <el-form-item label="新浪微博账号整合" prop="xl_conformity">
        <div class="inter_con">
          <span>验证代码：</span
          ><el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="ruleForm.xlConformity_code"
          >
          </el-input>
        </div>
        <div class="inter_con">
          <span>APP KEY：</span
          ><el-input v-model="ruleForm.xlConformity_appkey"></el-input>
        </div>
        <div class="inter_con">
          <span>APP SECRET：</span
          ><el-input v-model="ruleForm.xlConformity_appsecrit"></el-input>
        </div>
        <p>↑ 还没有接入应用？<a href="">点击此处进行申请>></a></p>
      </el-form-item>

      <el-form-item label="网易微博账号整合" prop="wyy_conformity">
        <div class="inter_con">
          <span>验证代码：</span
          ><el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="ruleForm.wyyConformity_code"
          >
          </el-input>
        </div>
        <div class="inter_con">
          <span>CONSUMER KEY：</span
          ><el-input v-model="ruleForm.wyyConformity_consumerkey"></el-input>
        </div>
        <div class="inter_con">
          <span>CONSUMER SECRET：</span
          ><el-input
            v-model="ruleForm.wyyConformity_consumersercret"
          ></el-input>
        </div>
        <p>↑ 还没有接入应用？<a href="">点击此处进行申请>></a></p>
      </el-form-item>

      <el-form-item label="微信公众平台整合" prop="wx_conformity">
        <div class="inter_con">
          <span>TOKEN：</span
          ><el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="ruleForm.wxConformity_token"
          >
          </el-input>
        </div>
        <div class="inter_con">
          <span>APP ID：</span
          ><el-input v-model="ruleForm.wxConformity_appid"></el-input>
        </div>
        <div class="inter_con">
          <span>CONSUMER SECRET：</span
          ><el-input v-model="ruleForm.wxConformity_consumersercret"></el-input>
        </div>
        <p>↑ 还没有接入应用？<a href="">点击此处进行申请>></a></p>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确定</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.refister_page {
  background: #fff;
  border-radius: 4px;
  overflow: auto;
  .el-form {
    width: 60%;
    padding: 20px 20px 0;
    box-sizing: border-box;
    .el-textarea {
      width: 50%;
    }
    .el-input {
      width: 50%;
    }
    .kg_cont {
      display: flex;
      .el-input {
        width: 20%;
        margin: 0 10px;
      }
    }
    .inter_con {
      margin-bottom: 10px;
      display: flex;
      align-items: flex-start;
      span {
        display: inline-block;
        width: 100px;
        height: 100%;
      }
    }
    p {
      color: #999;
      a {
        color: #f00;
      }
    }
  }
}
</style>
