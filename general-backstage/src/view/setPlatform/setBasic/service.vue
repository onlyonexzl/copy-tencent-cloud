<template>
  <div class="service_page">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="公司电话号码" prop="telephone_number">
        <el-input v-model="form.telephone_number"></el-input>
      </el-form-item>
      <el-form-item label="公司传真号码" prop="company_number">
        <el-input v-model="form.company_number"></el-input>
      </el-form-item>

      <el-form-item label="入驻热线一" prop="check_hotlineOne">
        <el-input v-model="form.check_hotlineOne"></el-input>
      </el-form-item>
      <el-form-item label="入驻热线二" prop="check_hotlineTwo">
        <el-input v-model="form.check_hotlineTwo"></el-input>
      </el-form-item>
      <el-form-item label="客服E-mail" prop="kefu_email">
        <el-input v-model="form.kefu_email"></el-input>
      </el-form-item>
      <el-form-item label="免费电话号码" prop="charge_phone">
        <el-input v-model="form.charge_phone"></el-input>
      </el-form-item>

      <el-form-item label="客服 QQ1" prop="kefu_QQone">
        <el-input v-model="form.kefu_QQone"></el-input>
      </el-form-item>
      <el-form-item label="客服 QQ2" prop="kefu_QQTwo">
        <el-input v-model="form.kefu_QQTwo"></el-input>
      </el-form-item>
      <el-form-item label="客服 QQ3" prop="kefu_QQthree">
        <el-input v-model="form.kefu_QQthree"></el-input>
      </el-form-item>
      <el-form-item label="客服 QQ4" prop="kefu_QQFour">
        <el-input v-model="form.kefu_QQFour"></el-input>
      </el-form-item>
      <el-form-item label="客服 旺旺" prop="kefu_aliwangwang">
        <el-input v-model="form.kefu_aliwangwang"></el-input>
      </el-form-item>
      <el-form-item label="" prop=""> </el-form-item>

      <el-form-item label="客服服务时间" prop="kefu_service">
        <el-input
          type="textarea"
          :rows="3"
          v-model="form.kefu_service"
          placeholder="7 x 24 小时全天服务 "
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
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
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.service_page {
  height: 600px;
  overflow: auto;
  background: #fff;
  border-radius: 4px;
  .el-form {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    box-sizing: border-box;
    .el-form-item {
      width: 50%;
      .el-input {
        width: 60%;
      }
      &:last-child {
        width: 100%;
      }
    }
    .kefu_wang {
      width: 100%;
      .el-input {
        width: 40%;
      }
    }
  }
}
</style>
