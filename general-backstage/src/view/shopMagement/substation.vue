<template>
  <div class="substa_page">
    <div class="subPage_top">
      <el-button size="medium" type="primary" @click="addRegion"
        >添加搜索地区</el-button
      >
    </div>

    <ul class="subpage_ul">
      <h3>热门地区</h3>
      <li v-for="(item, index) in cityData" :key="index">
        <span>{{ item.name }}</span>
        <div class="city">
          <p v-for="(itm, idx) in item.data" :key="idx">
            <a href="">{{ itm.city_name }}</a>
            <el-button type="text">删除</el-button>
            <el-button type="text" @click="setAdmin(itm.city_name)"
              >管理员</el-button
            >
            <el-button type="text" @click="headOffice">总店</el-button>
          </p>
        </div>
      </li>
    </ul>

    <el-dialog
      title="区域管理员"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="区域">
          {{ form.name }}
        </el-form-item>
        <el-form-item label="登录名">
          <el-input v-model="form.iphone"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.newpassword"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="添加搜索地区"
      :visible.sync="dialogRegion"
      width="30%"
      :before-close="handleClose"
      class="region_dis"
      center
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="地区">
          <el-select v-model="form.name" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类型">
          <el-radio-group v-model="form.radio">
            <el-radio :label="3">热门地区</el-radio>
            <el-radio :label="6">常规地区</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="分类">
          <el-select v-model="form.name" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="form.order"></el-input>
          <p style="color: #999;">数字越小越靠前</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogRegion = false">取 消</el-button>
        <el-button type="primary" @click="dialogRegion = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cityData: [
        {
          name: "A",
          data: [
            {
              city_name: "安阳市"
            }
          ]
        },
        {
          name: "B",
          data: [
            {
              city_name: "保定市"
            },
            {
              city_name: "北京市"
            }
          ]
        },
        {
          name: "C",
          data: [
            {
              city_name: "重庆市"
            },
            {
              city_name: "成都市"
            },
            {
              city_name: "长沙市"
            },
            {
              city_name: "瀍河回族区"
            },
            {
              city_name: "长春市"
            }
          ]
        },
        {
          name: "D",
          data: [
            {
              city_name: "大连市"
            },
            {
              city_name: "大同市"
            }
          ]
        }
      ],
      dialogVisible: false,
      form: {},
      dialogRegion: false
    };
  },
  methods: {
    setAdmin(name) {
      this.dialogVisible = true;
      this.form.name = name;
    },
    handleClose() {},
    headOffice() {
      this.$router.push({
        path: "/shopMagement/headOffice"
      });
    },
    addRegion() {
      this.dialogRegion = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.substa_page {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  .subPage_top {
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 5px;
    text-align: right;
    .el-button {
      margin-right: 20px;
    }
  }
  .subpage_ul {
    flex: 1;
    width: 100%;
    background: #fff;
    h3 {
      padding: 5px 0 5px 10px;
    }
    li {
      width: 100%;
      display: flex;
      border-bottom: 1px solid #fff;
      span {
        display: inline-block;
        width: 60px;
        padding: 8px;
        background: rgb(10, 142, 230);
        color: #fff;
        text-align: center;
      }
      .city {
        flex: 1;
        background: #f5f5f5;
        display: flex;
        p {
          a {
            &:hover {
              color: #f00;
              text-decoration: underline;
            }
          }
          margin-right: 10px;
          &:first-child {
            margin-left: 5px;
          }
        }
        .el-button {
          margin-left: 5px;
          color: #999;
        }
      }
    }
  }
  .region_dis {
    .el-select {
      width: 30%;
    }
  }
}
</style>
