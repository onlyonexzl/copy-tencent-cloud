<template>
  <div class="task_look" :style="{ height: heights }">
    <div class="task_con">
      <el-table
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        style="width: 100%; margin-top: 20px"
        :max-height="tableHeight"
      >
        <el-table-column label="一级菜单" align="center">
          <el-table-column prop="id" label="名称" width="180" align="center">
            <template>
              <el-input></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="链接" align="center"
            ><template>
              <el-input></el-input>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column label="二级菜单" align="center">
          <el-table-column prop="amount1" label="名称" align="center">
          </el-table-column>
          <el-table-column prop="amount2" label="链接" align="center">
          </el-table-column>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChangeFun"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: window.innerHeight - 220 + "px",
      input: "",
      currentPage: 1,
      tableData: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987123",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "12987124",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "12987125",
          name: "王小虎",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        },
        {
          id: "12987126",
          name: "王小虎",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ]
    };
  },
  mounted() {},
  methods: {
    handleSizeChange() {},
    handleCurrentChangeFun() {},
    handleDelete() {},
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },

    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
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
};
</script>

<style lang="scss" scoped>
.task_look {
  background: #fff;
  overflow: auto;
}
</style>
