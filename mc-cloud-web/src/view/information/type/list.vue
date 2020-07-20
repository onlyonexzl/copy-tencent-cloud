<template>
  <div class="main-page">
    <div class="item-box padd20">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>资讯管理</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.$route.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="item-box padd20 table-search-box clearfix">
      <el-form ref="searchForm" :model="searchForm" label-width="100px">
        <el-form-item label="类型名称">
          <el-input v-model="searchForm.name" style="width: 250px;"/>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-col>
            <el-date-picker type="date" placeholder="开始日期" v-model="searchForm.startDate" format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd [00:00:00]"/>
            -
            <el-date-picker type="date" placeholder="结束日期" v-model="searchForm.endDate" format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd [23:59:59]"/>
          </el-col>
        </el-form-item>
        <el-button type="primary" icon="el-icon-search" class="btn-search" @click="submitSearchForm('searchForm')">搜索</el-button>
      </el-form>
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
        <el-table-column type="index" width="55"/>
        <el-table-column prop="name" label="类型名称" width="250">
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
    import infoTypeService from '../../../service/informationType'
    export default {
        name: 'informationTypeList',
        data() {
            return {
                searchForm: {
                  name: '',
                  startDate: '',
                  endDate: ''
                },
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
                infoTypeService.queryPage(this.currentPage, this.pageSize, this.searchForm).then(res => {
                  if (res.data.state === 1) {
                    this.tableData = res.data.data;
                    this.total = res.data.totalCount;
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
                this.$router.push({path: '/information/type/add'})
            },
            handleEdit(index, row) {
                this.$router.push({path: '/information/type/edit', query: {id: row.id}})
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    infoTypeService.deleteById(row.id).then(res => {
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
