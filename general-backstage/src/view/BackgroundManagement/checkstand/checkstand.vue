<template>
  <div class="checkstand">
    <div class="content">
      <div class="left">
        <p>商品信息</p>
        <div class="title">
          <p style="width: 200px">商品名称</p>
          <p style="width: 50px">数量</p>
          <p style="width: 50px">金额</p>
          <p style="width: 50px">操作</p>
        </div>
        <div class="l-content">
          <div v-for="(item, index) in leftObj"
               :key="index">
            <p style="width: 200px">{{item.name}}</p>
            <p style="width: 50px">{{item.num}}</p>
            <p style="width: 50px">{{item.money * item.num}}</p>
            <p style="width: 50px">
              <i class="el-icon-delete"
                 style="cursor: pointer;"
                 @click="deleteItem(item)">
              </i>
            </p>
          </div>
        </div>
        <div class="l-bottom">
          <p>合计 <span class="redColor">{{numLeft}}</span> 项</p>
          <p class="redColor">总金额：{{moneyNum}}</p>
        </div>
      </div>
      <div class="right">
        <p>商品列表</p>
        <div class="r-content">
          <div v-for="(item, index) in jsonData"
               @click="addItem(item)"
               :key="index">
            <div class="img">
              <img :src="item.src"
                   alt="">
            </div>
            <div class="r-bottom">
              <p>{{item.name}}</p>
              <span class="redColor">¥ {{item.money}}</span>
            </div>
          </div>
        </div>
        <div class="btootm_paination">
          <el-pagination :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="bottom">
      <el-button @click="refesh">重新加载</el-button>
      <el-button type="primary"
                 @click="endMoney"
                 style="float: right">结账</el-button>
    </div>
    <el-dialog title="结账详情"
               :visible.sync="dialogVisible"
               width="60%"
               :before-close="handleClose">
      <el-form ref="form"
               :rules="rules"
               :model="form"
               label-width="150px">
        <el-form-item label="单据金额"
                      prop="value"
                      required>
          <el-input v-model="form.documents"
                    style="width: 600px;"></el-input>
        </el-form-item>
        <el-form-item label="实际金额">
          <el-input v-model="form.amount"
                    style="width: 600px;"
                    rows="5"></el-input>
        </el-form-item>
        <el-form-item label="备注信息">
          <el-input v-model="form.demo"
                    style="width: 600px;"
                    rows="5"></el-input>
        </el-form-item>
        <el-form-item label="支付方式">
          <el-radio v-model="radio"
                    label="1">支付宝</el-radio>
          <el-radio v-model="radio"
                    label="2">微信</el-radio>
        </el-form-item>
        <el-form-item label="扫付款码">
          <el-input v-model="form.description"
                    placeholder="请将鼠标光标聚焦于此框内后进行扫码支付"
                    style="width: 600px;"
                    rows="5"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit('form')"
                     :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">结 账</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'checkstand',

  data () {
    return {
      dialogVisible: false,
      radio: '1',
      jsonData: [{
        name: 'SIXONE 毛衣女2017秋冬新款宽松韩版潮套头V领学生长袖港味针织衫',
        id: '1',
        src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3815344415,363641962&fm=26&gp=0.jpg',
        money: '123.00'
      }, {
        name: '德国进口喜宝小海狮婴儿免敏无泪洗发沐浴露洗护二合一200ml瓶装  两件起售',
        id: '2',
        src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=322017593,2075601023&fm=26&gp=0.jpg',
        money: '223.00'
      }, {
        name: '测试知识性商品1',
        id: '3',
        src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2361776726,2316461338&fm=26&gp=0.jpg',
        money: '23.00'
      }, {
        name: 'SIXONE 测试知识性商品2',
        id: '4',
        src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2584015035,1675429211&fm=26&gp=0.jpg',
        money: '323.50'
      }, {
        name: 'SIXONE 测试知识性商品3',
        id: '5',
        src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2879601417,2446400554&fm=26&gp=0.jpg',
        money: '212.00'
      }, {
        name: 'SIXONE 测试知识性商品4',
        id: '6',
        src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437750289,638957077&fm=26&gp=0.jpg',
        money: '1200.00'
      }, {
        name: 'SIXONE 测试知识性商品5',
        id: '7',
        src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3268082195,3333039569&fm=26&gp=0.jpg',
        money: '1.00'
      }, {
        name: 'SIXONE 测试知识性商品6',
        id: '8',
        src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2584015035,1675429211&fm=26&gp=0.jpg',
        money: '323.00'
      }, {
        name: 'SIXONE 测试知识性商品7',
        id: '9',
        src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3437750289,638957077&fm=26&gp=0.jpg',
        money: '1200.00'
      }, {
        name: 'SIXONE 测试知识性商品8',
        id: '10',
        src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2584015035,1675429211&fm=26&gp=0.jpg',
        money: '323.00'
      }, {
        name: 'SIXONE 测试知识性商品9',
        id: '11',
        src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2879601417,2446400554&fm=26&gp=0.jpg',
        money: '212.00'
      }],
      leftObj: {},
      form: {
        documents: '',
        amount: '',
        demo: '',
        description: ''
      },
      profiles: [],
      driverAttributes: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
        profileId: [
          { required: true, message: '请选择模板', trigger: 'change' }
        ],
        driverAttributeId: [
          { required: true, message: '请选择驱动属性', trigger: 'change' }
        ],
        value: [
          { required: true, message: '请输入属性值', trigger: 'blur' }
        ]
      },
      numLeft: 0,
      moneyNum: 0,
    }
  },

  methods: {
    endMoney () {
      this.dialogVisible = true
      this.form.documents = this.moneyNum
      this.form.amount = this.moneyNum
    },

    addItem (item) {
      let obj = JSON.parse(JSON.stringify(this.leftObj))
      if (!obj[item.id]) {
        obj[item.id] = item
        obj[item.id]['num'] = 1
      } else {
        obj[item.id]['num'] += 1
      }

      this.leftObj = obj
      this.addMoney()
    },

    deleteItem (item) {
      let obj = JSON.parse(JSON.stringify(this.leftObj))
      delete obj[item.id]
      this.leftObj = obj
    },

    addMoney () {
      this.numLeft = 0
      this.moneyNum = 0
      for (let key in this.leftObj) {
        this.numLeft += this.leftObj[key].num
        this.moneyNum += this.leftObj[key].num * Number(this.leftObj[key].money)
      }
    },

    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },

    refesh () {
      this.leftObj = {}
    }
  }
}
</script>

<style lang="scss" scoped>
.checkstand {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    display: flex;
    .left {
      width: 350px;
      height: 100%;
      overflow: auto;
      border-right: solid 1px #eee;
      display: flex;
      flex-direction: column;
      .title {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        border-bottom: solid 1px #eee;
        p {
          // flex: 1;
          text-align: center;
        }
      }

      .l-content {
        width: 100%;
        flex: 1;
        overflow: auto;

        > div {
          width: 100%;
          text-align: center;
          display: flex;
          margin-top: 20px;
        }
      }

      .l-bottom {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 20px;
        line-height: 50px;
      }
    }
    .right {
      flex: 1;
      margin-left: 10px;
      border-left: solid 1px #eee;
      .btootm_paination {
        width: 100%;
        text-align: center;
      }
      .r-content {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 20px;
        > div {
          cursor: pointer;
          width: 19%;
          margin-right: 1%;
          margin-bottom: 20px;
          .img {
            width: 100%;
            height: 150px;
            > img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .left,
    .right {
      > p {
        width: 100%;
        background: #efefef;
        height: 40px;
        box-sizing: border-box;
        padding-left: 20px;
        line-height: 40px;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 50px;
    border-top: solid 1px #eee;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
  }
}
</style>
