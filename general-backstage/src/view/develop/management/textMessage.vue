<template>
  <div class="text_mess" :style="{ height: heights }">
    <el-form
      ref="ruleForm"
      :model="form"
      label-width="100px"
      class="text_form"
      label-position="left"
    >
      <el-form-item label="发送方式" prop="send">
        <el-radio-group v-model="form.send" @change="radioChange">
          <el-radio label="1">手动输入</el-radio>
          <el-radio label="2">会员等级</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="接收号码" prop="phone" v-if="form.send == 1">
        <el-input
          v-model="form.phone"
          placeholder="多个号码请以，间隔"
        ></el-input>
      </el-form-item>
      <el-form-item label="接收号码" v-else prop="grade">
        <el-select v-model="form.grade" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发送内容" prop="desc">
        <el-input type="textarea" v-model="form.desc" :rows="4"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
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

      form: {
        send: "1",
        phone: "",
        grade: "",
        desc: ""
      },
      options: [
        {
          value: "1",
          label: "黄金糕"
        },
        {
          value: "2",
          label: "黄金糕"
        }
      ]
    };
  },
  methods: {
    submitForm() {
      console.log("submit!");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    radioChange(val) {
      console.log(val);
      if (val == 1) {
        this.form.grade = "";
      } else {
        this.form.phone = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.text_mess {
  background: #fff;
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 20px;
  .text_form {
    width: 50%;
    .el-input {
      width: 50%;
    }
    .el-select {
      width: 50%;
    }
  }
}
</style>
