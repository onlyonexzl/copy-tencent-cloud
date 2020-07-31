<template>
  <div class="userList">
    <div class="top_button">

      <div class="top_left">
        <span>注册时间</span>
        <el-date-picker v-model="value1"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>
        <span>会员ID</span>
        <el-input v-model="sName"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span>会员等级</span>
        <el-select v-model="value"
                   clearable
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          会员搜索
        </el-button>
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
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="会员ID"
                           width="180">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="姓名">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.name"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="等级">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.name"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="积分"
                           width="180">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="预付款"
                           width="180">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.name"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="最后登录时间">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.name"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="200"
                           min-width="60">
            <template slot-scope="scope">
              <div>

                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="editor(scope.$index, scope.row)">修改</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor  right20"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
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
    <el-dialog title="会员资料"
               :visible.sync="dialogVisible"
               width="60%"
               :before-close="handleClose">
      <div>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 收货人信息：
        </p>
        <el-form ref="form"
                 :model="form"
                 label-width="130px">
          <el-form-item label="会员ID："
                        prop="name">
            **********
          </el-form-item>
          <el-form-item label="会员姓名："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="登录密码："
                        prop="name">
            <el-input v-model="form.name"
                      placeholder="不填写则原密码保留"></el-input>
          </el-form-item>
          <el-form-item label="支付密码："
                        prop="name">
            <el-input v-model="form.name"
                      placeholder="不填写则原密码保留"></el-input>
          </el-form-item>
          <el-form-item label="生日："
                        prop="name">
            <el-date-picker v-model="value1"
                            style="width: 100%"
                            type="date"
                            placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="性别："
                        prop="name">
            <el-radio v-model="radio"
                      label="1">男</el-radio>
            <el-radio v-model="radio"
                      label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="固话："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="手机："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="所在区域："
                        prop="name">
            <div style="width:100%; display: flex">
              <el-select v-model="province"
                         style="width:50%"
                         clearable
                         placeholder="请选择您申请提供服务的省">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="city"
                         style="width:50%;margin-left:0"
                         clearable
                         placeholder="请选择您申请提供服务的市">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item label="街道地址："
                        prop="name">
            <el-input v-model="form.name"
                      type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="邮箱："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="淘宝旺旺："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="QQ："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="会员等级："
                        prop="name">
            <el-select v-model="value"
                       clearable
                       placeholder="请选择">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="积分："
                        prop="name">
            <p>当前积分: <span class="redColor">10</span></p>
            <div class="form-item">
              <p style="width: 100px">+/- 积分</p>
              <el-input v-model="form.name"></el-input>
            </div>
            <p>填负数可扣除会员积分</p>
          </el-form-item>
          <el-form-item label="预付款："
                        prop="name">
            <p>当前预付款: <span class="redColor">10.00</span></p>
            <div class="form-item">
              <p style="width: 100px">+/- 预付款:</p>
              <el-input v-model="form.name"></el-input>
            </div>
            <p>填负数可扣除会员预付款</p>
            <p>冻结金额：0.00 元</p>
          </el-form-item>
          <el-form-item label="预付款："
                        prop="name">
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible1">
              <img width="100%"
                   :src="dialogImageUrl"
                   alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="EMAIL："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
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
  name: 'userList',

  data () {
    return {
      province: '',
      city: '',
      radio: 1,
      value1: '',
      dialogImageUrl: '',
      dialogVisible1: false,
      form: { name: '' },
      time: [],
      status: '',
      options: [
        { value: '', label: '一星美客' },
        { value: 0, label: '二星美客' },
        { value: 1, label: '三星美客' },
        { value: 2, label: '分站管理员' },
        { value: 3, label: '商圈管理员' },
        { value: 4, label: '总店管理员' },
        { value: 5, label: '总管理员' }
      ],
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
      value: '',
      dialogVisible: false
    }
  },

  methods: {
    editor () {
      this.dialogVisible = true
    },

    release () {
      this.$router.push('/commodityInformation/releasegroupGoods?nameType=发布广告')

    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleClick (tab, event) {
      console.log(tab, event);
    },
    handleClose () {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}

.userList {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top_button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

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

    /deep/ .el-input__inner {
      border-color: #fff !important ;
    }
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
