<template>
  <div class="add_token">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      class="token_form"
      label-position="left"
    >
      <el-form-item label="通证类型">
        <el-select v-model="form.type" placeholder="请选择通证类型">
          <el-option
            v-for="(item, index) in typeData"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="form.num"></el-input>
      </el-form-item>
      <el-form-item label="编号">
        <el-input v-model="form.serial"></el-input>
      </el-form-item>
      <el-form-item label="适用商品">
        <el-select v-model="form.apply" placeholder="请选择适用商品">
          <el-option
            v-for="(item, index) in typeData"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="有效期">
        <el-date-picker
          v-model="form.time"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <!-- 奖励区 -->
      <!-- 1 -->
      <el-form-item label="奖励规则" v-if="form.type == '1'">
        <div class="award_page">
          <el-select
            v-model="oneselForm.award"
            placeholder="选择奖励"
            style="width: 30%;"
          >
            <el-option
              v-for="(item, index) in awardData"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <div class="award_con" v-if="oneselForm.award == '1'">
            满 <el-input v-model="oneselForm.full"></el-input> 元， 送积分
            <el-input v-model="oneselForm.give"></el-input>
          </div>
          <div class="award_con" v-if="oneselForm.award == '2'">
            满 <el-input v-model="oneselForm.full"></el-input> 元， 送红包
            <el-input v-model="oneselForm.give"></el-input>
          </div>
        </div>
      </el-form-item>
      <!-- 2 -->
      <el-form-item label="购物金额" v-if="form.type == '2'">
        <div class="mony_con">
          满 <el-input v-model="oneselForm.mony"></el-input> 元可得
        </div>
      </el-form-item>
      <el-form-item label="分红规则" v-if="form.type == '2'">
        <div class="mony_con">
          总分红比例
          <el-select v-model="oneselForm.proportion" placeholder="选择奖励">
            <el-option
              v-for="(item, index) in proportionData"
              :key="index"
              :label="item.value"
              :value="item.value"
            ></el-option>
          </el-select>
          ，发行低于
          <el-input v-model="oneselForm.low"></el-input> 份，可分红金额按
          <el-input v-model="oneselForm.press"></el-input> %计
        </div>
      </el-form-item>
      <!-- 3 -->
      <el-form-item label="规则" v-if="form.type == '3'">
        <div class="mony_con">
          用
          <el-input v-model="oneselForm.ticket_inte"></el-input> 积分，可抵用
          <el-input v-model="oneselForm.ticket_money"></el-input> 元
        </div>
      </el-form-item>
      <!-- 4 -->
      <el-form-item label="使用规则" v-if="form.type == '4'">
        <div class="award_page">
          <el-select
            v-model="oneselForm.writ"
            placeholder="选择奖励"
            style="width: 30%;"
          >
            <el-option label="面额" value="1"></el-option>
            <el-option label="折扣" value="2"></el-option>
          </el-select>
          <div class="award_con" v-if="oneselForm.writ == '1'">
            面额 <el-input v-model="oneselForm.writ_deno"></el-input> 元， 兑换
            <el-input v-model="oneselForm.coin"></el-input>
          </div>
          <div class="award_con" v-if="oneselForm.writ == '2'">
            本卡享受折扣 <el-input v-model="oneselForm.discount"></el-input>%
          </div>
        </div>
      </el-form-item>
      <!-- 5 -->
      <el-form-item label="获取条件" v-if="form.type == '5'">
        <div class="award_page">
          <el-select v-model="oneselForm.limits" style="width: 30%;">
            <el-option label="消费金额" value="1"></el-option>
            <el-option label="互动次数" v alue="2"></el-option>
          </el-select>
          <div class="award_con" v-if="oneselForm.limits == '1'">
            满 <el-input v-model="oneselForm.limits_money"></el-input>元
          </div>
          <div class="award_con" v-if="oneselForm.limits == '2'">
            满 <el-input v-model="oneselForm.limits_next"></el-input>次
          </div>
        </div>
      </el-form-item>
      <!-------  ↑↑↑↑↑↑↑↑↑↑↑  ------ -->
      <el-form-item label="样式图">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="form.describe"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发 布</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      form: {
        type: "",
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      oneselForm: {},
      typeData: [
        {
          label: "奖励通证",
          value: "1"
        },
        {
          label: "红利通证",
          value: "2"
        },
        {
          label: "券币通证",
          value: "3"
        },
        {
          label: "票证通证",
          value: "4"
        },
        {
          label: "权限通证",
          value: "5"
        },
        {
          label: "参议通证",
          value: "6"
        },
        {
          label: "服务通证",
          value: "7"
        },
        {
          label: "权益通证",
          value: "8"
        },
        {
          label: "商品通证",
          value: "9"
        },
        {
          label: "资产通证",
          value: "10"
        }
      ],
      awardData: [
        {
          value: "1",
          label: "奖励积分"
        },
        {
          value: "2",
          label: "奖励红包"
        }
      ],
      proportionData: [
        { value: "10%" },
        { value: "20%" },
        { value: "30%" },
        { value: "40%" },
        { value: "50%" }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handlePreview() {},
    handleRemove() {},
    cancel() {
      this.$router.go(-1); //返回上一层
    }
  }
};
</script>

<style lang="scss" scoped>
.add_token {
  background: #fff;
  max-height: 550px;
  overflow: auto;
  padding: 20px;
  /deep/ .token_form {
    width: 60%;
    .el-input {
      width: 40%;
    }
    .el-select {
      width: 40%;
      .el-input {
        width: 100%;
      }
    }
  }
  .award_page {
    display: flex;
    .award_con {
      display: flex;
      padding-left: 20px;
      .el-input {
        margin: 0 10px;
        width: 25%;
      }
    }
  }
  .mony_con {
    display: flex;
    .el-input {
      width: 10%;
      margin: 0 10px;
    }
    .el-select {
      width: 15%;
      .el-input {
      }
    }
  }
}
</style>
