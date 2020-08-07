<template>
  <div class="email_page" :style="{ height: heights }">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="140px"
      class="email_ruleForm"
      label-position="right"
    >
      <el-form-item label="邮件发送方式" prop="sendmail_way">
        <el-select v-model="ruleForm.sendmail_way" placeholder="请选择">
          <el-option label="SMTP" value="SMTP"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="邮件服务器发邮地址" prop="address_mail">
        <el-input v-model="ruleForm.address_mail"></el-input>
      </el-form-item>
      <el-form-item label="邮件端口" prop="port_mail">
        <el-input v-model="ruleForm.port_mail"></el-input>
        <p style="color: #999;">↑ 默认不需修改。</p>
      </el-form-item>
      <el-form-item label="发信人地址" prop="addresser">
        <el-input v-model="ruleForm.addresser"></el-input>
      </el-form-item>
      <el-form-item label="是否需要 AUTH LOGIN 验证" prop="auto_login">
        <el-radio-group v-model="ruleForm.auto_login">
          <el-radio :label="0">是</el-radio>
          <el-radio :label="1">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="验证用户名" prop="verify_username">
        <el-input v-model="ruleForm.verify_username"></el-input>
      </el-form-item>
      <el-form-item label="验证密码" prop="addresser_name">
        <el-input v-model="ruleForm.addresser_name" show-password></el-input>
      </el-form-item>
      <el-form-item label="发件人名称" prop="verify_password">
        <el-input v-model="ruleForm.verify_password"></el-input>
      </el-form-item>
      <el-form-item label="邮件发送" prop="send_mail">
        <el-checkbox-group
          v-model="ruleForm.send_mail"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox
            v-for="item in options"
            :key="item.value"
            :label="item.value"
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="">
        <!-- <div v-if="ruleForm.send_mail.indexOf(item.value) !== -1">
          {{ item.label }}
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea"
          >
          </el-input>
        </div> -->

        <div class="formItem_inpu">
          <div
            v-for="item in options"
            :key="item.value"
            v-if="ruleForm.send_mail.indexOf(item.value) !== -1"
            class="inpu_check"
          >
            {{ item.label }}
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea"
            >
            </el-input>
          </div>
        </div>
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
      textarea: "",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        port_mail: 25,
        send_mail: []
      },
      options: [
        {
          value: "1",
          label: "待付款"
        },
        {
          value: "2",
          label: "已付款"
        },
        {
          value: "3",
          label: "已发货"
        },
        {
          value: "4",
          label: "已评价"
        },
        {
          value: "5",
          label: "商铺申请"
        },
        {
          value: "6",
          label: "商铺验证"
        },
        {
          value: "7",
          label: "商铺升级"
        }
      ]
    };
  },
  methods: {
    submitForm(formName) {},
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleCheckedCitiesChange(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.email_page {
  background: #fff;
  border-radius: 4px;
  overflow: auto;
  .email_ruleForm {
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    .el-form-item {
      margin-bottom: 10px;
      .formItem_inpu {
        display: flex;
        flex-wrap: wrap;
        .inpu_check {
          width: 48%;
          margin-right: 1%;
        }
      }
    }
    .el-select {
      width: 70%;
    }
    .el-input {
      width: 70%;
    }
    p {
      line-height: 24px;
    }
  }
}
</style>
