<template>
  <div class="phoneBy">
    <div class="title-bottom">
      <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">上传轮转广告：</p>
      <div class="itembutton">
        <div class="top_left">
          <span style="margin-left: 10px">标题</span>
          <el-input placeholder="输入标题"
                    v-model="sName"
                    style="width: 200px"
                    clearable>
          </el-input>
          <span style="margin-left: 10px">连接</span>
          <el-input placeholder="输入连接"
                    v-model="sName"
                    style="width: 200px"
                    clearable>
          </el-input>
          <span style="margin-left: 10px">排序</span>
          <el-input placeholder="请排序"
                    v-model="sName"
                    style="width: 200px"
                    clearable>
          </el-input>
          <el-upload class="upload-demo"
                     style="margin-top: 10px"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     multiple
                     :limit="1"
                     :on-exceed="handleExceed"
                     :file-list="fileList">
            <el-button size="small"
                       type="primary">选择文件</el-button>
            <div slot="tip"
                 class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        <div class="top_right">
          <el-button slot="append"
                     type="primary"
                     @click="sesarchFun()">
            确定
          </el-button>
        </div>
      </div>
    </div>
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
        <el-table-column show-overflow-tooltip
                         label="图片"
                         width="180">
          <template slot-scope="scope">
            <div class="img">
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864287296,145841194&fm=26&gp=0.jpg"
                   alt="">
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         show-overflow-tooltip
                         label="标题"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="连接">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="排序">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="150"
                         min-width="60">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="yellowColor right20"
                         @click="editor(scope.$index, scope.row)">编辑</el-button>
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

    <el-dialog title="修改轮转广告"
               :visible.sync="dialogVisible"
               width="50%"
               center
               :before-close="handleClose">
      <el-form ref="form"
               :rules="rules"
               :model="form"
               left
               label-width="150px">
        <el-form-item label="标题"
                      prop="name"
                      required>
          <el-input v-model="form.name"
                    style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="链接地址"
                      prop="serviceName"
                      required>
          <el-input v-model="form.serviceName"
                    style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="显示顺序"
                      prop="host"
                      required>
          <el-input v-model="form.host"
                    style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="轮转图片"
                      prop="port"
                      required>
          <el-upload class="upload-demo"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :on-preview="handlePreview"
                     :on-remove="handleRemove"
                     :before-remove="beforeRemove"
                     multiple
                     :limit="1"
                     :on-exceed="handleExceed"
                     :file-list="fileList">
            <el-button size="small"
                       type="primary">选择文件</el-button>
            <div slot="tip"
                 class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'phoneBy',

  data () {
    return {
      form: {
        name: '',
        serviceName: '',
        host: '',
        port: '',
        description: ''
      },
      sName: '',
      rules: {
        name: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        serviceName: [
          { required: true, message: '请输入链接地址', trigger: 'blur' }
        ],
        host: [
          { required: true, message: '显示顺序', trigger: 'blur' }
        ],
        port: [
          { required: true, message: '轮转图片', trigger: 'blur' }
        ],
      },
      dialogVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      fileList: []
    }
  },

  methods: {
    editor () {
      this.dialogVisible = true
    },
    onSubmit (formName) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // this.submitBtn.loading = true;
          // this.submitBtn.text = '处理中...';
          // driverService.add(this.form).then(res => {
          //     if (res.data.state === 1) {
          //         this.$message({message: "新增成功", type: 'success'});
          //         this.$router.go(-1);
          //     } else {
          //         throw new Error(res.data.msg);
          //     }
          // }).catch(error => {
          //     this.$message.error(error.message);
          // }).finally(() => {
          //     this.submitBtn.loading = false;
          //     this.submitBtn.text = '提交';
          // })
        } else {
          return false;
        }
      });
    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleCurrentChangeFun () {

    },
    handleSizeChange () {

    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
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
          width: 100%;
          height: 100%;
          > img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.el-form {
  text-align: left !important;
}

.el-input__inner {
  width: 600px;
}

.el-date-editor {
  width: 290px !important;
}

.el-date-editor .el-input__inner {
  width: 100% !important;
}

.el-textarea__inner {
  width: 600px;
}
.phoneBy {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .title-bottom {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 20px;
    > p {
      // margin: 10px 0;
      margin-bottom: 10px;
    }

    .itembutton {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
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
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;
    margin-top: 20px;
  }
}
</style>