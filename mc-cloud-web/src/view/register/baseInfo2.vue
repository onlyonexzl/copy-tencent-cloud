<template>
  <div>
    <div class="header">
      <el-steps :active="0"
                align-center>
        <el-step title="编写基本信息"
                 description=""></el-step>
        <el-step title="邮箱激活"
                 description=""></el-step>
        <el-step title="完善开发者资料"
                 description=""></el-step>
      </el-steps>
    </div>
    <div class="content">
      <el-form ref="providerForm"
               :model="providerForm"
               label-width="120px">
        <el-form-item label="联系人姓名"
                      prop="linkName"
                      :rules="[
            {required: true, message: '请输入联系人姓名', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]">
          <el-input v-model="providerForm.linkName"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系人电话"
                      prop="linkPhone"
                      :rules="[
            {required: true, message: '请输入联系人电话', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]">
          <el-input v-model="providerForm.linkPhone"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系人邮箱"
                      prop="linkEmail"
                      :rules="[
            {required: true, message: '请输入联系人邮箱', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]">
          <el-input v-model="providerForm.linkEmail"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="服务商名称"
                      prop="serviceName"
                      :rules="[
            {required: true, message: '请输入服务商名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]">
          <el-input v-model="providerForm.serviceName"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="服务商图标"
                      prop="icon"
                      :rules="[
            {required: true, message: '请输入服务商图标', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]">
          <el-upload class="avatar-uploader"
                     action="https://jsonplaceholder.typicode.com/posts/"
                     :show-file-list="false"
                     :on-success="handleAvatarSuccess"
                     :before-upload="beforeAvatarUpload">
            <img v-if="providerForm.icon"
                 :src="providerForm.icon"
                 class="avatar">
            <i v-else
               class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="服务商所在地"
                      prop="area"
                      :rules="[
            {required: true, message: '请输入服务商所在地', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]">
          <el-input v-model="providerForm.area"></el-input>
        </el-form-item>
        <el-form-item label="详细地址"
                      prop="address"
                      :rules="[
            {required: true, message: '请输入详细地址', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]">
          <el-input v-model="providerForm.address"></el-input>
        </el-form-item>
        <el-form-item label="服务商公告"
                      prop="notice"
                      :rules="[
            {required: true, message: '请输入服务商公告', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]">
          <el-input v-model="providerForm.notice"></el-input>
        </el-form-item>
        <el-form-item label="客服QQ"
                      prop="keFuQq"
                      :rules="[
            {required: true, message: '请输入客服QQ', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]">
          <el-input v-model="providerForm.keFuQq"></el-input>
        </el-form-item>
        <el-form-item label="客服电话"
                      :prop="keFuPhone"
                      :rules="[
            {required: true, message: '请输入客服电话', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]">
          <el-input v-model="providerForm.keFuPhone"></el-input>
        </el-form-item>
        <el-form-item label="客服邮箱"
                      prop="keFuEmail"
                      :rules="[
            {required: true, message: '请输入客服邮箱', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]">
          <el-input v-model="providerForm.keFuEmail"></el-input>
        </el-form-item>
        <el-form-item label="服务商简介"
                      prop="introduction"
                      :rules="[
            {required: true, message: '请输入服务商简介', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ]">
          <el-input type="textarea"
                    v-model="providerForm.introduction"></el-input>
        </el-form-item>
        <el-form-item label="服务商详情">
          <el-input v-model="providerForm.introductionDetail"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit('providerForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "baseInfo",
  data () {
    return {
      providerForm: {
        linkName: '',
        linkPhone: '',
        linkEmail: '',
        serviceName: '',
        icon: '',
        area: '',
        address: '',
        notice: '',
        keFuQq: '',
        keFuPhone: '',
        keFuEmail: '',
        introduction: '',
        introductionDetail: '',
      }
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.providerForm.icon = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.header {
}

.content {
  width: 600px;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9 !important;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff !important;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
