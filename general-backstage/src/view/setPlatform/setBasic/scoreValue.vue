<template>
  <div class="score_page" :style="{ height: heights }">
    <el-form ref="form" :model="form" label-width="140px">
      <el-form-item label="商品库使用积分" prop="merchandise_credits">
        <el-input v-model="form.merchandise_credits"></el-input>
      </el-form-item>
      <el-form-item label="商品库分发积分" prop="merchandise_distributes">
        <el-input v-model="form.merchandise_distributes"></el-input>
      </el-form-item>

      <el-form-item label="团购活动申请积分" prop="group_activities">
        <el-input v-model="form.group_activities"></el-input>
      </el-form-item>
      <el-form-item label="积分汇申请积分" prop="apply_points">
        <el-input v-model="form.apply_points"></el-input>
      </el-form-item>
      <el-form-item label="拍卖申请积分" prop="application_points">
        <el-input v-model="form.application_points"></el-input>
      </el-form-item>
      <el-form-item label="积分购买价格" prop="purchase_points">
        <el-input v-model="form.purchase_points"></el-input>分/元
      </el-form-item>

      <el-form-item label="消保金最低额度" prop="amount_insurance">
        <el-input v-model="form.amount_insurance"></el-input>元
      </el-form-item>
      <el-form-item label="提现手续费比例" prop="withdrawal_fee">
        <el-input v-model="form.withdrawal_fee"></el-input>%
        <span style="color: #f00;">(从当笔提现资金中扣除)</span>
      </el-form-item>
      <el-form-item label="延迟收货最长时间" prop="delay_receiving">
        <el-input v-model="form.delay_receiving"></el-input>天
      </el-form-item>
      <el-form-item label="自动确认收货" prop="confirmation_receipt">
        <el-input v-model="form.confirmation_receipt"></el-input>天
      </el-form-item>
      <el-form-item label="创建生活圈的数量" prop="circles_created">
        <el-input v-model="form.circles_created"></el-input>个
      </el-form-item>
      <el-form-item label="生活圈会员数量限制" prop="circle_members">
        <el-input v-model="form.circle_members"></el-input>个
      </el-form-item>
      <el-form-item label="商户优惠券数量" prop="coupon_quantity">
        <el-input v-model="form.coupon_quantity"></el-input>
      </el-form-item>
      <div class="foot_btn">
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
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
.score_page {
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
    }
    .kefu_wang {
      width: 100%;
      .el-input {
        width: 40%;
      }
    }
    .foot_btn {
      width: 100%;
      padding-left: 140px;
      box-sizing: border-box;
    }
  }
}
</style>
