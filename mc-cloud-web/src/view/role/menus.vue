<template>

  <div class="container">
    <div style="padding: 14px 10px;background-color: #FFF;margin-bottom: 20px;">
      <el-page-header @back="goBack" :content="this.$route.name"></el-page-header>
    </div>
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="角色名称" prop="name">
        {{form.name}}
      </el-form-item>
      <el-form-item label="备注">
        {{form.remark}}
      </el-form-item>
      <el-form-item label="菜单功能" prop="menuIdList">
        <el-tree
                ref="menuTree"
                :data="menus"
                show-checkbox
                node-key="id"
                :default-checked-keys="form.menuIdList"
                :props="{label: 'name'}">
        </el-tree>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')" :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    import roleService from '../../service/role'
    import menuService from '../../service/menu'
    export default {
        name: 'edit',
        data() {
            return {
                form: {
                    id: '',
                    name: '',
                    remark: '',
                    menuIdList: []
                },
                menus: [],
                submitBtn: {
                    loading: false,
                    text: '提交'
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
                      let checkedArr = this.$refs['menuTree'].getCheckedKeys();
                      roleService.updateRoleMenu(this.form.id, checkedArr.join(",")).then(res => {
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
            }
        },
        created() {
            const id = this.$route.query.id;
            roleService.getByIdWithMenus(id).then(res => {
                if (res.data.state === 1) {
                    const role = res.data.data;
                    return new Promise(((resolve, reject) => {
                      menuService.queryTreeData().then(res => {
                        if (res.data.state === 1) {
                          resolve([role, res.data.data]);
                        } else {
                          reject(res.data.msg);
                        }
                      }).catch(error => {
                        reject(error.message);
                      })
                    }));
                } else {
                    throw new Error(res.data.msg);
                }
            }).then(([role, menus]) => {
              this.form = role;
              this.menus = menus;
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
