<template>

  <div class="container">
    <div style="padding: 14px 10px;background-color: #FFF;margin-bottom: 20px;">
      <el-page-header @back="goBack" :content="this.$route.name"></el-page-header>
    </div>
    <el-form ref="form" :rules="rules" :model="form" label-width="150px">
      <el-form-item label="设备" prop="deviceId" required>
        <el-select v-model="form.deviceId" placeholder="请选择" style="width: 300px;" @change="deviceChange">
          <el-option
            v-for="item in devices"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="位号" prop="pointId" required>
        <el-select v-model="form.pointId" placeholder="请选择" style="width: 300px;">
          <el-option
            v-for="item in points"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="位号属性" prop="pointAttributeId" required>
        <el-select v-model="form.pointAttributeId" placeholder="请选择" style="width: 300px;">
          <el-option
            v-for="item in pointAttributes"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="属性值" prop="value" required>
        <el-input v-model="form.value" style="width: 600px;"></el-input>
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
    import pointInfoService from '../../service/pointInfo'
    import deviceService from '../../service/device'
    import pointService from '../../service/point'
    import pointAttributeService from '../../service/pointAttribute'
    export default {
        name: 'add',
        data() {
            return {
                form: {
                    id: '',
                    deviceId: '',
                    pointId: '',
                    pointAttributeId: '',
                    value: '',
                    description: ''
                },
                devices: [],
                points: [],
                pointAttributes: [],
                submitBtn: {
                    loading: false,
                    text: '提交'
                },
                rules: {
                    deviceId: [
                        { required: true, message: '请选择设备', trigger: 'change' }
                    ],
                    pointId: [
                        { required: true, message: '请选择点位', trigger: 'change' }
                    ],
                    pointAttributeId: [
                        { required: true, message: '请选择点位属性', trigger: 'change' }
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
                        pointInfoService.update(this.form).then(res => {
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
            initDevices() {
                deviceService.queryList().then(res => {
                    if (res.data.state === 1) {
                        this.devices = res.data.data;
                    } else {
                        throw new Error(res.data.msg);
                    }
                }).catch(error => {
                    this.$message.error("设备数据加载失败");
                })
            },
            deviceChange(e) {
                this.form.pointId = '';
                this.form.pointAttributeId = '';
                this.initPoints();
                this.initPointAttributes();
            },
            initPoints() {
                pointService.queryList(this.form.deviceId).then(res => {
                    if (res.data.state === 1) {
                        this.points = res.data.data;
                    } else {
                        throw new Error(res.data.msg);
                    }
                }).catch(error => {
                    this.$message.error("点位数据加载失败");
                })
            },
            initPointAttributes() {
                pointAttributeService.queryList(this.form.deviceId).then(res => {
                    if (res.data.state === 1) {
                        this.pointAttributes = res.data.data;
                    } else {
                        throw new Error(res.data.msg);
                    }
                }).catch(error => {
                    this.$message.error("点位属性数据加载失败");
                })
            }
        },
        created() {
            this.initDevices();

            const id = this.$route.query.id;
            pointInfoService.getById(id).then(res => {
                if (res.data.state === 1) {
                    const info = res.data.data;
                    return new Promise((resolve, reject) => {
                        pointService.queryList(info.deviceId).then(res => {
                            if (res.data.state === 1) {
                                resolve([info, res.data.data]);
                            } else {
                                reject(res.data.msg);
                            }
                        }).catch(error => {
                            reject("点位数据加载失败");
                        })
                    })
                } else {
                    throw new Error(res.data.msg);
                }
            }).then(res => {
                let [info, points] = res;
                return new Promise((resolve, reject) => {
                    pointAttributeService.queryList(info.deviceId).then(res => {
                        if (res.data.state === 1) {
                            resolve([info, points, res.data.data]);
                        } else {
                            reject(res.data.msg);
                        }
                    }).catch(error => {
                        reject("点位属性数据加载失败");
                    })
                })
            }).then(res => {
                let [info, points, pointAttributes] = res;
                this.points = points;
                this.pointAttributes = pointAttributes;
                this.form = info;
            }).catch(error => {
                this.$message.error("位号配置数据加载失败");
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
