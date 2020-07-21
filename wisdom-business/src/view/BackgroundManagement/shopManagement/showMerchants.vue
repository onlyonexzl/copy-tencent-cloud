
<template>
  <div class="showMerchants"
       :style="{'height': height}">
    <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">形象展示：</p>
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <!-- required -->
      <el-form-item label="形象网址">
        <span class="hovertext">
          <a href="http://www.meicheng58.com/shopshow.php?sid=1">http://www.meicheng58.com/shopshow.php?sid=1</a>
        </span>
      </el-form-item>
      <el-form-item label="视频代码">
        <el-input v-model="form.orgCode"
                  type="textarea"
                  style="width: 600px;" />
      </el-form-item>
      <el-form-item label="当前形象">
        <!-- <div class="form-item">
          <p style="width: 80px">左侧距离：</p>
          <el-input v-model="form.loginId"
                    style="width: 215px;">
            <i slot="suffix">px</i>
          </el-input>
          <p style="margin-left: 10px; width: 80px">顶部距离：</p>
          <el-input v-model="form.loginId"
                    style="width: 215px;">
            <i slot="suffix">px</i>
          </el-input>
        </div> -->
      </el-form-item>
      <el-form-item label="商家形象">
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
                     type="primary">点击上传</el-button>
          <div slot="tip"
               class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="黄页公告">
        <el-input v-model="form.orgCode"
                  type="textarea"
                  style="width: 600px;" />
      </el-form-item>
    </el-form>
    <div class="titleB">
      <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">企业证书：</p>
      <div>
        <i class="el-icon-circle-plus-outline"
           @click="add"></i>
        <i class="el-icon-remove-outline"
           @click="remove"></i>
      </div>
    </div>

    <div class="hidden">
      <el-form ref="form"
               :model="form"
               label-width="150px">
        <el-form-item v-for="(item,index) in array"
                      :key='index'
                      :label="item.name">
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
                       type="primary">点击上传</el-button>
            <div slot="tip"
                 class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit('form')"
                     :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'showMerchants',
  data () {
    return {
      form: {
        name: '',
        orgCode: '',
        loginId: '',
        loginPwd: '',
        description: ''
      },
      editor: null,
      fileList: [],
      submitBtn: {
        loading: false,
        text: '确定'
      },
      array: [{
        name: '证书'
      }],
      height: window.innerHeight - 150 + 'px'
      // rules: {
      //   name: [
      //     { required: true, message: '请输入服务商名称', trigger: 'blur' }
      //   ],
      //   loginId: [
      //     { required: true, message: '请输入登陆账号', trigger: 'blur' }
      //   ],
      //   loginPwd: [
      //     { validator: validateLoginPwd, trigger: 'blur' }
      //   ],
      //   confirmPwd: [
      //     { validator: validateConfirmPwd, trigger: 'blur' }
      //   ],
      //   linkName: [
      //     { required: true, message: '请输入联系人姓名', trigger: 'blur' }
      //   ]
      // }
    }
  },
  computed: {},
  methods: {
    add () {
      this.array.push({
        name: '证书' + (this.array.length)
      })
    },

    remove () {
      if (this.array.length === 1) {
        this.$message({
          message: '最后一条数据不能删除',
          type: 'warning'
        });
        return
      }
      this.array.splice(this.array.length - 1, 1)
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
    goBack () {
      this.$router.go(-1);
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.submitBtn.loading = true;
          // this.submitBtn.text = '处理中...';
          // providerService.add(this.form).then(res => {
          //   if (res.data.state === 1) {
          //     this.$message({ message: "新增成功", type: 'success' });
          //     this.$router.go(-1);
          //   } else {
          //     throw new Error(res.data.msg);
          //   }
          // }).catch(error => {
          //   this.$message.error(error.message);
          // }).finally(() => {
          //   this.submitBtn.loading = false;
          //   this.submitBtn.text = '提交';
          // })
        } else {
          return false;
        }
      });
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
  mounted () {

  }
}
</script>
<style scoped lang='scss'>
.titleB {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  i {
    color: #f30;
    cursor: pointer;
    margin-right: 10px;
    font-size: 15px;
  }
}

.showMerchants {
  overflow: auto;
  /* height: 100%; */
  // flex: 1;
  margin-top: 20px;
  border-radius: 4px;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .hidden {
    // max-height: 200px;
    // overflow: auto;
    flex: 1;
  }
}

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
</style>
