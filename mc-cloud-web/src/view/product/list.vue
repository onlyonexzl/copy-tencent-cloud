<template>
  <div class="main-page">
    <div class="item-box padd20">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商品管理</el-breadcrumb-item>
        <el-breadcrumb-item>{{this.$route.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="item-box padd20 table-search-box clearfix">
      <el-form ref="searchForm" :model="searchForm" label-width="100px">
        <el-form-item label="商品名称">
          <el-input v-model="searchForm.name" placeholder="商品名称" style="width: 250px;"></el-input>
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
      <el-table
        stripe
        v-loading="loading"
        :data="tableData"
        :default-sort="{prop: 'id', order: 'descending'}"
        style="width: 100%">
        <el-table-column type="index" width="55"></el-table-column>
        <el-table-column prop="title" label="商品名称" width="250">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="right" popper-class="table-column-popover">
              <p>商品名称: {{ scope.row.title }}</p>
              <p>所属分类: {{ scope.row.categoryName }}</p>
              <el-image fit="contain" :src="scope.row.coverImgUrl" style="max-width: 210px;max-height: 140px">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
              <p>简介: {{ scope.row.remark }}</p>
              <div slot="reference" class="name-wrapper">
                <span>{{ scope.row.title }}</span>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="categoryName" label="所属分类" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.categoryName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格" width="150">
          <template slot-scope="scope">
            <span>{{ scope.row.price }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="providerName" label="服务商" width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.providerName }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="inputTime" label="创建时间" sortable width="250">
          <template slot-scope="scope">
            <span>{{ scope.row.inputTime }}</span>
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
    import productService from '../../service/product'
    export default {
        name: 'productList',
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
            queryPage() {
                this.loading = true;
                productService.queryPage(this.currentPage, this.pageSize, this.searchForm).then(res => {
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
                this.$router.push({path: '/product/add'})
            },
            handleEdit(index, row) {
                this.$router.push({path: '/product/edit', query: {id: row.id}})
            },
            handleDelete(index, row) {
                this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    productService.deleteById(row.id).then(res => {
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
