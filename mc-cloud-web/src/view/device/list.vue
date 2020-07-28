<template>
  <div class="main-page">
    <div class="item-box padd20">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>物联网管理</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.$route.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="item-box padd20 table-search-box clearfix">
      <el-form ref="searchForm" :model="searchForm" label-width="100px">
        <el-form-item label="设备名称">
          <el-input v-model="searchForm.name" placeholder="设备名称"></el-input>
        </el-form-item>
        <el-form-item label="设备状态">
          <el-select v-model="searchForm.status" placeholder="全部">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-col>
            <el-date-picker type="date" placeholder="开始日期" v-model="searchForm.startDate" format="yyyy-MM-dd" value-format="yyyy-MM-dd [00:00:00]"></el-date-picker>
            -
            <el-date-picker type="date" placeholder="结束日期" v-model="searchForm.endDate" format="yyyy-MM-dd" value-format="yyyy-MM-dd [23:59:59]"></el-date-picker>
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
        style="width: 100%">
        <el-table-column type="index" width="55"></el-table-column>
        <el-table-column prop="name" label="设备名称" sortable width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="code" label="设备编码" sortable width="300">
          <template slot-scope="scope">
            <span>{{ scope.row.code }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态"  width="100" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status === 0" type="info">离线</el-tag>
            <el-tag v-if="scope.row.status === 1" type="success">启用</el-tag>
            <el-tag v-if="scope.row.status === 2">维护</el-tag>
            <el-tag v-if="scope.row.status === 3" type="danger">故障</el-tag>
            <el-tag v-if="scope.row.status === 4" type="info">失效</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="profile" label="模板" align="center" width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.profileName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="group" label="所属分组" align="center" width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.groupName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间"  width="200" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
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
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    import deviceService from '../../service/device'
    export default {
        name: 'deviceList',
        data() {
            return {
                searchForm: {
                    name: '',
                    startDate: '',
                    endDate: '',
                    status: ''
                },
                options: [
                    { value: '', label: '全部'},
                    { value: 0, label: '离线'},
                    { value: 1, label: '在线'},
                    { value: 2, label: '维护'},
                    { value: 3, label: '故障'},
                    { value: 4, label: '失效'},
                ],
                loading: false,
                tableData: [],
                currentPage: 1,
                pageSize: 20,
                total: 0
            }
        },
        computed: {},
        methods: {
            queryPage() {
                this.loading = true;
                deviceService.queryPage(this.currentPage, this.pageSize, this.searchForm).then(res => {
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
                this.queryPage();
            },
            handleAdd(index, row) {
                this.$router.push({path: '/device/add'})
            },
            handleEdit(index, row) {
                this.$router.push({path: '/device/edit', query: {id: row.id}})
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deviceService.deleteById(row.id).then(res => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.queryPage();
                    }).catch(error => {
                        this.$message.error(error.message);
                    })
                });
            },
            handleSizeChange(val) {
                this.pageSize = val;
                this.queryPage();
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.queryPage();
            }
        },
        created() {
            this.queryPage();
        }
    }
</script>
<style scoped>

</style>
