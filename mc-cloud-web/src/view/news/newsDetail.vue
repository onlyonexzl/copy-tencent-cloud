<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name" disabled></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域" value="shanghai" disabled>
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col>
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" disabled ></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data() {
    return {
      form: {
        name: '1111',
        region: 'shanghai',
        date1: '2020-05-06',
        desc: '22'
      },
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  computed: {

  },
  methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
}
</script>
<style scoped>
  .container{
    width: 800px;
  }
  .el-form{
    text-align: left!important;
  }
  .el-input__inner{
    width: 600px;
  }
  .el-date-editor{
    width: 290px!important;
  }
  .el-date-editor .el-input__inner{
    width: 100%!important;
  }
  .el-textarea__inner{
    width: 600px;
  }
  .el-input.is-disabled .el-input__inner,.el-textarea.is-disabled .el-textarea__inner{
    color: #333!important;
  }
</style>
