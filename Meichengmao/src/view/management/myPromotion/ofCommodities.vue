<template>
  <div class="ofCommodities">
    <div class="top_button">
      <div class="top_left">
        <span>搜索关键字：</span>
        <el-input placeholder=""
                  style="width: 200px"></el-input>
        <span>所属店铺：</span>
        <el-select clearable
                   style="width:200px;;margin-left:10px;"
                   class="first-child"
                   placeholder="请选择">
          <el-option label="普通"
                     value="name"></el-option>
          <el-option label="主站推广 已审核"
                     value="code"></el-option>
          <el-option label="主站推广 未审核"
                     value="code"></el-option>
        </el-select>
        <el-input placeholder=""
                  style="width: 200px"></el-input>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          搜店
        </el-button>
        <br>
        <span style="margin-top: 10px">分类：</span>
        <el-select clearable
                   style="width:200px;;margin-left:10px;margin-top: 10px"
                   class="first-child"
                   placeholder="请选择">
          <el-option label="普通"
                     value="name"></el-option>
          <el-option label="主站推广 已审核"
                     value="code"></el-option>
          <el-option label="主站推广 未审核"
                     value="code"></el-option>
        </el-select>
        <span style="margin-top: 10px">品牌：</span>
        <el-select clearable
                   style="width:200px;;margin-left:10px;margin-top: 10px"
                   class="first-child"
                   placeholder="请选择">
          <el-option label="普通"
                     value="name"></el-option>
          <el-option label="主站推广 已审核"
                     value="code"></el-option>
          <el-option label="主站推广 未审核"
                     value="code"></el-option>
        </el-select>
        <span style="margin-top: 10px">价格：</span>
        <el-input placeholder=""
                  style="width: 200px;margin-top: 10px"></el-input>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          确定
        </el-button>
      </div>
    </div>
    <div class="flex"
         :style="{'height': height}">
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column label="订单号：OD158132363315">
          <template slot-scope="scope">
            <img src="http://img.daimg.com/uploads/allimg/200612/1-200612234200.jpg"
                 style="    height: 100px; width: 100px;"
                 alt="">
            <span>{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         label="商品名称">
        </el-table-column>
        <el-table-column prop="address"
                         label="品牌">
        </el-table-column>
        <el-table-column prop="address"
                         label="价格">
        </el-table-column>
        <el-table-column prop="address"
                         label="分成">
        </el-table-column>
        <el-table-column prop="address"
                         label="分类">
        </el-table-column>
        <el-table-column prop="address"
                         label="二维码">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="blueColor">查看</el-button>
              <el-button size="medium"
                         type="text"
                         class="yellowColor">下架</el-button>
            </div>
          </template>
        </el-table-column>

      </el-table>
      <div style="display: flex; align-items: center; margin: 10px 0;">
        <p>推广链接：</p>
        <el-input placeholder=""
                  style="width: 80%;margin: 0 10px;"></el-input>
        <el-button size="medium"
                   type="text"
                   class="blueColor">复制</el-button>
      </div>
      <div style="display: flex; align-items: center; margin: 10px 0;">
        <p>领券链接：</p>
        <el-input placeholder=""
                  style="width: 80%;margin: 0 10px;"></el-input>
        <el-button size="medium"
                   type="text"
                   class="blueColor">复制</el-button>
      </div>
      <el-table :data="tableData"
                style="width: 100%">
        <el-table-column label="订单号：OD158132363315">
          <template slot-scope="scope">
            <img src="http://img.daimg.com/uploads/allimg/200612/1-200612234200.jpg"
                 style="    height: 100px; width: 100px;"
                 alt="">
            <span>{{scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         label="商品名称">
        </el-table-column>
        <el-table-column prop="address"
                         label="品牌">
        </el-table-column>
        <el-table-column prop="address"
                         label="价格">
        </el-table-column>
        <el-table-column prop="address"
                         label="分成">
        </el-table-column>
        <el-table-column prop="address"
                         label="分类">
        </el-table-column>
        <el-table-column prop="address"
                         label="二维码">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="blueColor">查看</el-button>
              <el-button size="medium"
                         type="text"
                         class="yellowColor">下架</el-button>
            </div>
          </template>
        </el-table-column>

      </el-table>
      <div style="display: flex; align-items: center; margin: 10px 0;">
        <p>推广链接：</p>
        <el-input placeholder=""
                  style="width: 80%;margin: 0 10px;"></el-input>
        <el-button size="medium"
                   type="text"
                   class="blueColor">复制</el-button>
      </div>
      <div style="display: flex; align-items: center; margin: 10px 0;">
        <p>领券链接：</p>
        <el-input placeholder=""
                  style="width: 80%;margin: 0 10px;"></el-input>
        <el-button size="medium"
                   type="text"
                   class="blueColor">复制</el-button>
      </div>
    </div>
    <div class="btootm_paination">
      <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
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
</template>

<script>
export default {
  name: 'ofCommodities',

  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      height: window.innerHeight - 350 + 'px',
    }
  },

  methods: {
    add () {
      this.$router.push('/mySocialLife/ofCommodities?nameType=添加供应')
    },
    edit () {
      this.$router.push('/mySocialLife/ofCommodities?nameType=修改供应')
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    // arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
    //   if (rowIndex % 1 === 0) {
    //     if (columnIndex === 0) {
    //       return [1, 2];
    //     } else if (columnIndex === 1) {
    //       return [0, 0];
    //     }
    //   }
    // },
  }
}
</script>

<style lang="scss" scoped>
.flex {
  overflow: auto;
  margin-top: 20px;
}
</style>
