<template>

  <div class="addCommunity">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">

      <el-form-item label="当前分类"
                    prop="name"
                    required>
        未选择
      </el-form-item>
      <el-form-item label="社区分类"
                    prop="driverId"
                    required>
        <el-select v-model="form.driverId"
                   placeholder="请选择"
                   style="width: 150px;">
          <el-option v-for="item in drivers"
                     :key="item.id"
                     :label="item.name"
                     :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所在地区"
                    prop="region">
        <div style="width:600px; display: flex">
          <el-select v-model="form.name"
                     clearable
                     style="width:33.3%"
                     placeholder="所在省">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.name"
                     clearable
                     style="width:33.3%;margin-left:0"
                     placeholder="所在市">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.name"
                     clearable
                     style="width:33.3%;margin-left:0"
                     placeholder="所在市">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="社区名称"
                    prop="name"
                    required>
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="社区介绍"
                    prop="name"
                    required>
        <el-input v-model="form.name"
                  type="textarea"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="共同爱好"
                    prop="name"
                    required>
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="宣言"
                    prop="name"
                    required>
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="当前LOGO"
                    prop="name"
                    required>
        <div style="width: 200px; height: 200px">
          <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2667674901,2971343281&fm=26&gp=0.jpg"
               style="width: 100%; height: 100%"
               alt="">
        </div>
      </el-form-item>
      <el-form-item label="LOGO上传"
                    prop="name"
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
      <el-form-item label="社区标签"
                    prop="name">
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
        <span>
          (以空格分隔，最多三个)
        </span>
      </el-form-item>
      <el-form-item label="加入方式"
                    prop="name">
        <p>
          <el-radio v-model="radio"
                    label="1">
            需要社区管理员批准才能加入
          </el-radio>
        </p>
        <p>
          <el-radio v-model="radio"
                    label="2">
            允许任何人加入社区
          </el-radio>
        </p>
        <el-checkbox-group v-model="checkList">
          <p>
            <el-checkbox label="1">发布话题和评论无需审核</el-checkbox>
          </p>
          <p>
            <el-checkbox label="2">我已认真阅读并同意 <span class="blueColor">《社区指导原则》</span></el-checkbox>
          </p>
        </el-checkbox-group>
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
// import profileService from '../../service/profile'
// import driverService from '../../service/driver'
export default {
  name: 'addCommunity',
  data () {
    return {
      radio: 2,
      dialogImageUrl: '',
      dialogVisible: false,
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
      checkList: [],
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
  computed: {},
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },

    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    goBack () {
      this.$router.go(-1);
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.submitBtn.loading = true;
          // this.submitBtn.text = '处理中...';
          // profileService.add(this.form).then(res => {
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
    initDrivers () {
      // driverService.queryList().then(res => {
      //   if (res.data.state === 1) {
      //     this.drivers = res.data.data;
      //   } else {
      //     throw new Error(res.data.msg);
      //   }
      // }).catch(error => {
      //   this.$message.error("驱动数据加载失败");
      // })
    }
  },
  created () {
    this.initDrivers();
  }
}
</script>
<style scoped>
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
