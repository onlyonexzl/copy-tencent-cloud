<template>
  <div class="menu">
    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
                  :span-method="objectSpanMethod"
                  style="width: 100%">
          <el-table-column label="一级菜单1"
                           align="center">
            <el-table-column align="center"
                             label="名称">
              <template slot-scope="scope">
                <el-input v-model="name"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="province"
                             align="center"
                             label="链接">
              <template slot-scope="scope">
                <el-input v-model="name"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
          <el-table-column label="二级菜单1"
                           align="center">
            <el-table-column prop="name"
                             align="center"
                             label="名称">
              <template slot-scope="scope">
                <el-input v-model="name"></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="province"
                             align="center"
                             label="链接">
              <template slot-scope="scope">
                <el-input v-model="name"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChangeFun"
                         :current-page="currentPage"
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',

  data () {
    return {
      name: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }],
    }
  },

  methods: {
    objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 1) {
        if (rowIndex === 0) {
          return {
            rowspan: 5,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top_button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

  .table_bottom {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }

  .el-table {
    flex: 1;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
