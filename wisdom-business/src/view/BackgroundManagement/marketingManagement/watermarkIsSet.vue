<template>
  <div class="watermarkIsSet"
       :style="{'height': height}">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="水印位置"
                    prop="name"
                    required>
        <el-radio-group v-model="radio">
          <el-radio :label="1">中部</el-radio>
          <el-radio :label="2">左上角</el-radio>
          <el-radio :label="3">右上角</el-radio>
          <el-radio :label="4">右下脚</el-radio>
          <el-radio :label="5">左下脚</el-radio>
          <el-radio :label="6">顶中部</el-radio>
          <el-radio :label="7">右中部</el-radio>
          <el-radio :label="8">底中部</el-radio>
          <el-radio :label="9">左中部</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="水印添加"
                    prop="serviceName"
                    required>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="缩略图添加"></el-checkbox>
          <el-checkbox label="详细大图添加"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="当前水印图片"
                    prop="host"
                    required>
        <div style="width: 200px; height: 200px">
          <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1247404788,4071155670&fm=15&gp=0.jpg"
               style="width: 100%;height: 100%"
               alt="">
        </div>
      </el-form-item>
      <el-form-item label="水印图片"
                    prop="port"
                    required>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="水印类型">
        <el-radio-group v-model="radio">
          <el-radio :label="1">文字水印</el-radio>
          <el-radio :label="2">图片水印</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="水印文字">
        <el-input v-model="form.name"
                  style="width: 600px"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="水印大小">
        <el-input v-model="form.name"
                  style="width: 600px"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="字体颜色">
        <el-input v-model="form.name"
                  style="width: 600px"
                  placeholder></el-input>
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
      <el-form-item label="水印字体">
        <el-select v-model="value"
                   clearable
                   style="width: 600px"
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit('form')"
                   :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'watermarkIsSet',
  // import driverService from '../../service/driver'
  data () {
    return {
      radio: Number,
      dialogImageUrl: '',
      dialogVisible: false,
      checkList: [],
      form: {
        name: '',
        serviceName: '',
        host: '',
        port: '',
        description: ''
      },
      submitBtn: {
        loading: false,
        text: '提交'
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      height: window.innerHeight - 180 + 'px',
      rules: {
        name: [
          { required: true, message: '请输入分组名称', trigger: 'blur' }
        ],
        serviceName: [
          { required: true, message: '请输入服务名称', trigger: 'blur' }
        ],
        host: [
          { required: true, message: '请输入主机IP', trigger: 'blur' }
        ],
        port: [
          { required: true, message: '请输入端口', trigger: 'blur' }
        ],
      }
    }
  },
  computed: {},
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.watermarkIsSet {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  overflow: auto;
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
