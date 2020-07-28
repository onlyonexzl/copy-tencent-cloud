<template>

  <div class="container">
    <div style="padding: 14px 10px;background-color: #FFF;margin-bottom: 20px;">
      <el-page-header @back="goBack" :content="this.$route.name"></el-page-header>
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="150px">
      <el-form-item label="位号名称" prop="name" required>
        <el-input v-model="form.name" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="数据类型" prop="type">
        <el-input v-model="form.type" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="读写" prop="rw">
        <el-select v-model="form.rw" placeholder="请选择">
          <el-option label="只读" :value="0"></el-option>
          <el-option label="只写" :value="1"></el-option>
          <el-option label="可读可写" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="基础值" prop="base">
        <el-input v-model="form.base" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="最小值" prop="minimum">
        <el-input v-model="form.minimum" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="最大值" prop="maximum">
        <el-input v-model="form.maximum" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="倍数" prop="multiple">
        <el-input v-model="form.multiple" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="累计标识">
        <el-switch v-model="form.accrue" :active-value="1" :inactive-value="0"></el-switch>
      </el-form-item>
      <el-form-item label="数据格式" prop="format">
        <el-input v-model="form.format" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="单位" prop="unit">
        <el-input v-model="form.unit" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="所属模板">
        <el-select v-model="form.profileId" placeholder="请选择" style="width: 300px;">
          <el-option
            v-for="item in profiles"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea" v-model="form.description" style="width: 600px;" rows="5"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')" :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import pointService from '../../service/point'
    import profileService from '../../service/profile'
    export default {
        name: 'add',
        data() {
            return {
                form: {
                    name: '',
                    type: '',
                    rw: 0,
                    base: '',
                    minimum: '',
                    maximum: '',
                    multiple: '',
                    accrue: 0,
                    format: '',
                    unit: '',
                    profileId: '',
                    description: ''
                },
                profiles: [],
                submitBtn: {
                    loading: false,
                    text: '提交'
                },
                rules: {
                    name: [
                        { required: true, message: '请输入点位名称', trigger: 'blur' }
                    ]
                }
            }
        },
        computed: {},
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.submitBtn.loading = true;
                        this.submitBtn.text = '处理中...';
                        pointService.add(this.form).then(res => {
                            if (res.data.state === 1) {
                                this.$message({message: "新增成功", type: 'success'});
                                this.$router.go(-1);
                            } else {
                                throw new Error(res.data.msg);
                            }
                        }).catch(error => {
                            this.$message.error(error.message);
                        }).finally(() => {
                            this.submitBtn.loading = false;
                            this.submitBtn.text = '提交';
                        })
                    } else {
                        return false;
                    }
                });
            },
            initProfiles() {
                profileService.queryList().then(res => {
                    if (res.data.state === 1) {
                        this.profiles = res.data.data;
                    } else {
                        throw new Error(res.data.msg);
                    }
                }).catch(error => {
                    this.$message.error("驱动数据加载失败");
                })
            }
        },
        created() {
            this.initProfiles();
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
