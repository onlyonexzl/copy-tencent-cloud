<template>

  <div class="container">
    <div style="padding: 14px 10px;background-color: #FFF;margin-bottom: 20px;">
      <el-page-header @back="goBack" :content="this.$route.name"></el-page-header>
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="150px">
      <el-form-item label="模板" prop="profileId" required>
        <el-select v-model="form.profileId" placeholder="请选择" @change="initDriverAttributs" style="width: 300px;">
          <el-option
            v-for="item in profiles"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="驱动属性" prop="driverAttributeId" required>
        <el-select v-model="form.driverAttributeId" placeholder="请选择" style="width: 300px;">
          <el-option
            v-for="item in driverAttributes"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="属性值" prop="value" required>
        <el-input v-model="form.value" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.description" style="width: 600px;" rows="5"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')" :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import driverInfoService from '../../service/driverInfo'
    import profileService from '../../service/profile'
    import driverAttributeService from '../../service/driverAttribute'
    export default {
        name: 'add',
        data() {
            return {
                form: {
                    profileId: '',
                    driverAttributeId: '',
                    value: '',
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
                        driverInfoService.add(this.form).then(res => {
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
                        this.form.driverAttributesId = '';
                        this.profiles = res.data.data;
                    } else {
                        throw new Error(res.data.msg);
                    }
                }).catch(error => {
                    this.$message.error("模板加载失败");
                })
            },
            initDriverAttributs() {
                this.form.driverAttributeId = '';
                driverAttributeService.queryList(this.form.profileId).then(res => {
                    if (res.data.state === 1) {
                        this.driverAttributes = res.data.data;
                    } else {
                        throw new Error(res.data.msg);
                    }
                }).catch(error => {
                    this.$message.error("模板加载失败");
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
