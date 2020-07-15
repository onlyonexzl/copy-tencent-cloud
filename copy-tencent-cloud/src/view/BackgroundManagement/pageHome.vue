<template>
  <div class="pageHome">
    <el-container>
      <el-aside width="auto">
        <div class="all_mp"
             :style="{'height': + height + 'px'}">
          <div class="tit">
            <div class="item">
              <img src="../../assets/img/favicon1.png"
                   @click="right"
                   alt="">
              <span v-if="!isCollapse">美城云</span>
            </div>
            <i class="el-icon-s-fold"
               v-if="!isCollapse"
               @click="left"></i>
          </div>
          <div class="menu">
            <el-menu default-active="0"
                     class="el-menu-vertical-demo"
                     @open="handleOpen"
                     background-color="#424f63"
                     text-color="#fff"
                     active-text-color="rgb(101, 206, 167)"
                     @close="handleClose"
                     :collapse="isCollapse">
              <el-menu-item index="0">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item index="1-3">选项3</el-menu-item>
                <el-submenu index="1-4">
                  <span slot="title">选项4</span>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3"
                            disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="mp_header">
            <el-popover placement="top-start"
                        trigger="hover">
              <div class="tip">
                <ul>
                  <li>
                    <i class="el-icon-unlock"></i> 修改密码
                  </li>
                  <li>
                    <i class="el-icon-lock"></i> 退出登陆
                  </li>
                </ul>
              </div>
              <div class="rightIcon"
                   slot="reference">
                <i class="el-icon-user-solid"></i> 超管 <i class="el-icon-arrow-down"></i>
              </div>
            </el-popover>
          </div>
        </el-header>
        <el-main>
          <div class="main">
            <div class="item-box">
              <ul class="box pad">
                <li v-for="(item, index) in meta"
                    :key="index">
                  {{item}}
                  <i class="el-icon-arrow-right"
                     v-if="index !== meta.length - 1"></i>
                </li>
              </ul>
            </div>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      isCollapse: false,
      height: window.innerHeight,
      meta: []
    };
  },
  methods: {
    left () {
      this.isCollapse = true
    },

    right () {
      this.isCollapse = false
    },

    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },

    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },

    getPath () {
      console.log(this.$route);
      if (this.$route.meta.length) {
        this.meta = this.$route.meta
      }
    }
  },

  mounted () {
    this.getPath()
  },

  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.getPath()
      },
      // 深度观察监听
      deep: true
    }
  },
}
</script>

<style >
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu-vertical-demo {
  /* width: 100% !important; */
  border: none !important;
}
</style>

<style lang="scss" scoped>
.item-box {
  background: #fff;
  border-radius: 2px;
  margin-bottom: 5px;
  width: 100%;
  height: 50px;
  .box {
    height: 100%;
    font-weight: 400;
    font-size: 14px;
    color: #606266;
    cursor: text;
    display: flex;
    align-items: center;
    > i {
      color: #c0c4cc;
      margin-right: 10px;
    }
    > li {
      margin-right: 10px;
    }
  }
}

.el-main {
  width: 100%;
  height: 100%;
  background: #f8f8f8;
}
.tip {
  width: 100%;
  height: 100%;
  > ul {
    width: 100%;
    height: 100%;
    > li {
      cursor: pointer;
      line-height: 30px;
    }
  }
}
.mp_header {
  width: 100%;
  height: 100%;
}

.mp_header {
  width: auto;
  float: right;
  height: 100%;
  display: flex;
  align-items: center;
  color: #606266;
  font-size: 14px;
  margin-right: 20px;
}

.all_mp {
  width: auto;
  display: flex;
  flex-direction: column;
  background-color: #424f63;

  // border-right: solid #ccc 1px;
  // background-color: #424f63 !important;
  .tit {
    height: 50px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
    }
  }
  // .el-menu,
  // .el-submenu__title {
  //   color: #fff;
  //   background-color: #424f63 !important;
  //   border: 0;
  // }
  .menu {
    flex: 1;
    border-right: 1px solid #424f63;
  }

  // .el-menu-item.is-active {
  //   color: rgb(101, 206, 167);
  //   background-color: rgb(53, 63, 79);
  // }

  // .el-menu-item :hover {
  //   color: rgb(101, 206, 167);
  //   background-color: rgb(53, 63, 79);
  // }
}
</style>
