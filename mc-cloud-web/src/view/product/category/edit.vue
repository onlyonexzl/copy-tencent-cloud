<template>

    <div class="container">
        <div style="padding: 14px 10px;background-color: #FFF;margin-bottom: 20px;">
            <el-page-header @back="goBack" :content="this.$route.name"></el-page-header>
        </div>
        <el-form ref="form" :rules="rules" :model="form" label-width="150px">
            <el-form-item label="分类名称" prop="name" required>
                <el-input v-model="form.name" style="width: 600px;"></el-input>
            </el-form-item>
            <el-form-item label="上级分类" prop="parentIdList">
                <el-cascader v-model="form.parentIdList"
                             :options="categoryOptions"
                             :props="{ checkStrictly: true, value: 'id', label: 'name' }" style="width: 600px;"></el-cascader>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" v-model="form.remark" style="width: 600px;" rows="5"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')" :loading="submitBtn.loading">{{submitBtn.text}}
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
	import productCategoryService from '../../../service/productCategory'

	export default {
		name: 'edit',
		data() {
			return {
				form: {
					id: '',
					name: '',
					parentIdList: '',
					remark: ''
				},
				categoryOptions: [],
				submitBtn: {
					loading: false,
					text: '提交'
				},
				rules: {
					name: [
						{required: true, message: '请输入菜单名称', trigger: 'blur'}
					],
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
						productCategoryService.update({
							id: this.form.id,
							name: this.form.name,
							parentId: this.form.parentIdList[this.form.parentIdList.length - 1],
							state: this.form.state,
							remark: this.form.remark
						}).then(res => {
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
			initCategoryOptions() {
				productCategoryService.queryTreeData().then(res => {
					if (res.data.state === 1) {
						this.categoryOptions = res.data.data;
					}
				}).catch(error => {
					this.$message.error(error.message);
				})
			}
		},
		created() {
			const id = this.$route.query.id;
			productCategoryService.getById(id).then(res => {
				if (res.data.state === 1) {
					const info = res.data.data;
					return new Promise((resolve, reject) => {
						productCategoryService.queryTreeData().then(res => {
							if (res.data.state === 1) {
								resolve([info, res.data.data]);
							}
						}).catch(error => {
							reject(error.message);
						})
                    })
				} else {
					throw new Error(res.data.msg);
				}
			}).then(([info, options]) => {
				this.categoryOptions = options;
				this.form = info;
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
