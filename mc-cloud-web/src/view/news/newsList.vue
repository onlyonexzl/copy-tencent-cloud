<template>
  <div class="main-page">
    <div class="item-box padd20">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>资讯管理</el-breadcrumb-item>
        <el-breadcrumb-item>资讯列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="item-box padd20 table-search-box clearfix">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="资讯名称">
          <el-input v-model="form.newsTitle"></el-input>
        </el-form-item>
        <el-form-item label="资讯类型">
          <el-select v-model="form.newsType" placeholder="请选择资讯类型">
            <el-option label="公告" value="0"></el-option>
            <el-option label="新闻" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-col>
            <el-date-picker type="date" placeholder="选择开始日期" v-model="form.date1"></el-date-picker>
            -
            <el-date-picker type="date" placeholder="选择结束日期" v-model="form.date2"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-button type="primary" icon="el-icon-search" class="btn-search">搜索</el-button>
      </el-form>
    </div>
    <div class="item-box">
      <div style="text-align: left">
        <el-button size="small" type="primary" icon="el-icon-plus">新增</el-button>
      </div>
       <el-table
        stripe
        :data="tableData"
        :default-sort = "{prop: 'date', order: 'descending'}"
        style="width: 100%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
         prop="date"
          label="日期"
          sortable
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsList',
  data() {
    return {
      form:{
         newsTitle:'',
        newsType:'',
        date1:'',
        date2:''
      },
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentPage:1,
    }
  },
  computed: {

  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
<style scoped>

</style>
