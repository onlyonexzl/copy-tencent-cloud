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
        <el-form-item label="位号">
          <el-input v-model="searchForm.name" placeholder="位号名称" style="width: 250px;"></el-input>
        </el-form-item>
        <el-form-item label="所属模板">
          <el-select v-model="searchForm.profileId" placeholder="全部" style="width: 300px;">
            <el-option label="全部" value=""></el-option>
            <el-option
              v-for="item in profiles"
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
        <el-table-column prop="name" label="位号名称" sortable width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="数据类型" width="100" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.type }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="rw" label="读写"  width="100" align="center">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.rw !== 1" type="success">读</el-tag>
            <el-tag v-if="scope.row.rw !== 0" type="success">写</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="base" label="基础值" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.base }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="minimum" label="最小值" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.minimum }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="maximum" label="最大值" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.maximum }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="multiple" label="倍数" width="70">
          <template slot-scope="scope">
            <span>{{ scope.row.multiple }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="accrue" label="累计标识" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.accrue }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="format" label="数据格式" width="100">
          <template slot-scope="scope">
            <span>{{ scope.row.format }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="unit" label="单位" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.unit }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="profile" label="所属模板" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.profileName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间"  width="160">
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
    import pointService from '../../service/point'
    import profileService from '../../service/profile'
    export default {
        name: 'pointList',
        data() {
            return {
                searchForm: {
                    name: '',
                    profileId: '',
                    startDate: '',
                    endDate: ''
                },
                profiles: [],
                loading: false,
                tableData: [],
                currentPage: 1,
                pageSize: 10,
                total: 0
            }
        },
        computed: {},
        methods: {
            queryPage() {
                this.loading = true;
                pointService.queryPage(this.currentPage, this.pageSize, this.searchForm).then(res => {
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
                this.$router.push({path: '/point/add'})
            },
            handleEdit(index, row) {
                this.$router.push({path: '/point/edit', query: {id: row.id}})
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    pointService.deleteById(row.id).then(res => {
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
            },
            initProfiles() {
                profileService.queryList().then(res => {
                    if (res.data.state === 1) {
                        this.profiles = res.data.data;
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
            this.initProfiles();
        }
    }
</script>
<style scoped>

</style>
