<template>

  <div class="container">
    <div style="padding: 14px 10px;background-color: #FFF;margin-bottom: 20px;">
      <el-page-header @back="goBack" :content="this.$route.name"></el-page-header>
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="150px">
      <el-form-item label="设备名称" prop="name" required>
        <el-input v-model="form.name" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="设备编码" prop="code" required>
        <el-input v-model="form.code" style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="设备状态">
        <el-select v-model="form.status" placeholder="全部">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="模板" prop="profileId" required>
        <el-select v-model="form.profileId" placeholder="请选择">
          <el-option
            v-for="item in profiles"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属分组" prop="groupId" required>
        <el-select v-model="form.groupId" placeholder="请选择">
          <el-option
            v-for="item in groups"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
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
    import deviceService from '../../service/device'
    import profileService from '../../service/profile'
    import groupService from '../../service/group'
    export default {
        name: 'edit',
        data() {
            return {
                form: {
                    id: '',
                    name: '',
                    code: '',
                    status: 1,
                    profileId: '',
                    groupId: '',
                    description: ''
                },
                options: [
                    { value: 0, label: '离线'},
                    { value: 1, label: '在线'},
                    { value: 2, label: '维护'},
                    { value: 3, label: '故障'},
                    { value: 4, label: '失效'},
                ],
                profiles:[],
                groups: [],
                submitBtn: {
                    loading: false,
                    text: '提交'
                },
                rules: {
                    name: [
                        { required: true, message: '请输入设备名称', trigger: 'blur' }
                    ],
                    code: [
                        { required: true, message: '请输入设备编码', trigger: 'blur' }
                    ],
                    profileId: [
                        { required: true, message: '请选择模板', trigger: 'change' }
                    ],
                    groupId: [
                        { required: true, message: '请选择所属分组', trigger: 'change' }
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
                        deviceService.update(this.form).then(res => {
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
            initProfiles() {
                profileService.queryList().then(res => {
                    if (res.data.state === 1) {
                        this.profiles = res.data.data;
                    } else {
                        throw new Error(res.data.msg);
                    }
                }).catch(error => {
                    this.$message.error("模板加载失败");
                })
            },
            initGroups() {
                groupService.queryList().then(res => {
                    if (res.data.state === 1) {
                        this.groups = res.data.data;
                    } else {
                        throw new Error(res.data.msg);
                    }
                }).catch(error => {
                    this.$message.error("分组加载失败");
                })
            }
        },
        created() {
            this.initProfiles();
            this.initGroups();

            const id = this.$route.query.id;
            deviceService.getById(id).then(res => {
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
