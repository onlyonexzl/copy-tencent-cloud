<template>

  <div class="container">
    <div style="padding: 14px 10px;background-color: #FFF;margin-bottom: 20px;">
      <el-page-header @back="goBack" :content="this.$route.name"></el-page-header>
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="150px">
      <el-form-item label="显示名称" prop="displayName" required>
        <el-input v-model="form.displayName" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="名称" prop="name" required>
        <el-input v-model="form.name" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="type" required>
        <el-input v-model="form.type" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="默认值" prop="value" required>
        <el-input v-model="form.value" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="所属驱动" prop="driverId" required>
        <el-select v-model="form.driverId" placeholder="请选择" style="width: 300px;">
          <el-option
            v-for="item in drivers"
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
    import driverAttributeService from '../../service/driverAttribute'
    import driverService from '../../service/driver'
    export default {
        name: 'edit',
        data() {
            return {
                form: {
                    id: '',
                    displayName: '',
                    name: '',
                    type: '',
                    value: '',
                    driverId: '',
                    description: ''
                },
                drivers: [],
                submitBtn: {
                    loading: false,
                    text: '提交'
                },
                rules: {
                    displayName: [
                        { required: true, message: '请输入显示名称', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '请输入名称', trigger: 'blur' }
                    ],
                    type: [
                        { required: true, message: '请输入类型', trigger: 'blur' }
                    ],
                    value: [
                        { required: true, message: '请输入默认值', trigger: 'blur' }
                    ],
                    driverId: [
                        { required: true, message: '请选择所属驱动', trigger: 'change' }
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
                        driverAttributeService.update(this.form).then(res => {
                            if (res.data.state === 1) {
                                this.$message({message: "修改成功", type: 'success'});
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
            initDrivers() {
                driverService.queryList().then(res => {
                    if (res.data.state === 1) {
                        this.drivers = res.data.data;
                    } else {
                        throw new Error(res.data.msg);
                    }
                }).catch(error => {
                    this.$message.error("驱动数据加载失败");
                })
            }
        },
        created() {
            this.initDrivers();
            const id = this.$route.query.id;
            driverAttributeService.getById(id).then(res => {
                if (res.data.state === 1) {
                    this.form = res.data.data;
                } else {
                    throw new Error(res.data.msg);
                }
            }).catch(error => {
                this.$message.error(error.message);
            }).finally(() => {

            })
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
