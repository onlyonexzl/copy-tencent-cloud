<template>
  <div class="luckyDraw">
    <div class="top_button">
      <div class="top_left">
        <span>获奖单号：</span>
        <el-input placeholder="请输入内容"
                  class=""
                  style="width:220px;;">
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-search"
                     @click="sesarchFun()">
            点击查询
          </el-button>
        </el-input>
      </div>
    </div>
    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column show-overflow-tooltip
                           type="index"
                           width="50"
                           label="序号">
            <template slot-scope="scope">
              <!-- {{(currentPage-1)*10+scope.$index+1}} -->
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="获奖单号"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="奖品">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="获然时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="是否发货">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="获奖者">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="获奖者信息">‘
            <template slot-scope="scope">
              <div>
                姓名：
              </div>
              <div>
                地址：
              </div>
              <div>
                联系电话：
              </div>
              <div>
                备注：
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="120"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="look(scope.$index, scope.row)">查看</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
          <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChangeFun"
                         :current-page="currentPage"
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
    <el-dialog title="修改获奖信息"
               :visible.sync="dialogVisible"
               width="70%"
               :before-close="handleClose">
      <el-form ref="form"
               :rules="rules"
               :model="form"
               label-width="150px">
        <el-form-item label="获奖单号"
                      prop="name"
                      required>
          *****
        </el-form-item>
        <el-form-item label="奖项/奖品">
          不得不奖 / 番茄
        </el-form-item>
        <el-form-item label="获奖时间"
                      prop="driverId"
                      required>
          2015-07-14 18:13:36
        </el-form-item>
        <el-form-item label="是否发货"
                      prop="driverId"
                      required>
          未发货
        </el-form-item>
        <el-form-item label="获奖会员"
                      prop="driverId"
                      required>
          admin
        </el-form-item>
        <el-form-item label="会员真实姓名">
          <el-input v-model="form.description"
                    style="width: 600px;"
                    rows="5"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.description"
                    style="width: 600px;"
                    rows="5"></el-input>
        </el-form-item>
        <el-form-item label="收货地址">
          <el-input v-model="form.description"
                    style="width: 600px;"
                    rows="5"></el-input>
        </el-form-item>
        <el-form-item label="备注信息">
          <el-input type="textarea"
                    v-model="form.description"
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
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'luckyDraw',

  data () {
    return {
      dialogVisible: false,
      time: [],
      sName: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      form: {
        name: '',
        share: 1,
        driverId: '',
        description: ''
      },
      drivers: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
        name: [
          { required: true, message: '请输入分组名称', trigger: 'blur' }
        ],
        driverId: [
          { required: true, message: '请选择所属驱动', trigger: 'change' }
        ]
      }
    }
  },

  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },

    add () {
      this.$router.push('/information/edit?nameType=新建资讯')

    },
    edit () {
      this.$router.push('/information/edit?nameType=编辑资讯')

    },
    look () {
      this.dialogVisible = true
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
  }
}
</script>


<style lang="scss" scoped>
/deep/ .el-table__body-wrapper {
  .el-table__body {
    .el-table__row {
      .el-tooltip {
        min-height: 100px;
        .img {
          width: 100px;
          height: 100%;
          cursor: pointer;
          > img {
            width: 100% !important;
            height: 100% !important;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.top_button {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}

.luckyDraw {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .table_bottom {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }

  .el-table {
    flex: 1;
    overflow: auto;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
