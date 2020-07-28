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
        <el-form-item label="模板名称">
          <el-input v-model="searchForm.name" placeholder="模板名称" style="width: 250px;"></el-input>
        </el-form-item>
        <el-form-item label="驱动">
          <el-select v-model="searchForm.driverId" placeholder="全部" style="width: 300px;">
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="item in drivers"
              :key="item.id"
              :label="item.name"
              :value="item.id">
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
        <el-table-column prop="name" label="模板名称" sortable width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="share" label="公有/私有"  width="150" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.share === 1" type="success">公有</el-tag>
            <el-tag v-if="scope.row.share === 0" type="danger">私有</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="driver" label="驱动" sortable width="300">
          <template slot-scope="scope">
            <span>{{ scope.row.driverName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" width="350" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <span>{{ scope.row.description }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间"  width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.createTime }}</span>
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
    import profileService from '../../service/profile'
    import driverService from '../../service/driver'
    export default {
        name: 'profileList',
        data() {
            return {
                searchForm: {
                    name: '',
                    driverId: '',
                    startDate: '',
                    endDate: ''
                },
                drivers: [],
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
                profileService.queryPage(this.currentPage, this.pageSize, this.searchForm).then(res => {
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
                this.$router.push({path: '/profile/add'})
            },
            handleEdit(index, row) {
                this.$router.push({path: '/profile/edit', query: {id: row.id}})
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    profileService.deleteById(row.id).then(res => {
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
            },
            handleCurrentChange(val) {
                this.currentPage = val;
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
            this.queryPage();
            this.initDrivers();
        }
    }
</script>
<style scoped>

</style>
