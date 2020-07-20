<template>
  <div class="main-page">
    <div class="item-box padd20">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.$route.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="item-box">
      <div style="text-align: left">
        <el-button size="small" type="primary" icon="el-icon-plus" @click="handleAdd">新增</el-button>
      </div>
      <el-table
        stripe
        v-loading="loading"
        :data="tableData"
        :default-sort="{prop: 'id', order: 'descending'}"
        style="width: 100%"
        row-key="id">
        <el-table-column prop="name" label="分类名称" width="200">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="remark" label="备注" width="350" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <span>{{ scope.row.remark }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="inputTime" label="创建时间" sortable width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.inputTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
    import productCategoryService from '../../../service/productCategory'
    export default {
        name: 'productCategoryList',
        data() {
            return {
                loading: false,
                tableData: [],
                currentPage: 1,
                pageSize: 20,
                total: 0
            }
        },
        computed: {},
        methods: {
            queryData() {
                this.loading = true;
                productCategoryService.queryTreeData().then(res => {
                    if (res.data.state === 1) {
                        this.tableData = res.data.data;
                    }
                }).catch(error => {
                    this.$message.error(error.message);
                }).finally(() => {
                    this.loading = false;
                })
            },
            submitSearchForm(formName) {
                this.queryData();
            },
            handleAdd(index, row) {
                this.$router.push({path: '/product/category/add'})
            },
            handleEdit(index, row) {
                this.$router.push({path: '/product/category/edit', query: {id: row.id}})
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    productCategoryService.deleteById(row.id).then(res => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.queryData();
                    }).catch(error => {
                        this.$message.error(error.message);
                    })
                });
            },
            handleSizeChange(val) {
                this.pageSize = val;
                this.queryData();
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.queryData();
            }
        },
        created() {
            this.queryData();
        }
    }
</script>
<style scoped>

</style>
