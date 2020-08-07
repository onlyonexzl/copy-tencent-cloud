<template>
  <div class="image_ment"
       :style="{ height: heights }">
    <div class="image_table">
      <el-table ref="multipleTable"
                class="table_ima"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                :max-height="tableHeight"
                border
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"
                         width="55"> </el-table-column>
        <el-table-column label="图片"
                         align="center"
                         width="400">
          <template slot-scope="scope">
            <el-image :src="scope.row.image"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="image"
                         label="图片路径"
                         align="center"
                         width="400">
        </el-table-column>
        <el-table-column label="操作"
                         align="center">
          <template slot-scope="scope">
            <el-button size="medium"
                       type="text"
                       class="redColor  right20"
                       @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: window.innerHeight - 170 + "px",
      tableData: [
        {
          image:
            "https://t9.baidu.com/it/u=1775900009,2371222529&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1596677191&t=aff69bc1ac7033528a02cd7fd4145146",
          id: 1
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596082471301&di=b02d5c0bc2bfdd7166a43acd5658bf92&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D2821245368%2C1313454205%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1000%26h%3D1371",
          id: 2
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596082471301&di=bfb65a80632f566533df75298284d49f&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D736236830%2C837860402%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D1921",
          id: 3
        },
        {
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596082471301&di=87467a21b2b3c38e4a3af9d8ee13f6c1&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D2131955910%2C2451011674%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D1720",
          id: 4
        }
      ]
    };
  },
  methods: {
    handleDelete () { },
    handleSelectionChange () { }
  }
};
</script>

<style lang="scss" scoped>
.image_ment {
  overflow: auto;
  .image_table {
    .table_ima {
      /deep/ .el-image {
        width: 50%;
        height: auto;
      }
    }
  }
}
</style>
