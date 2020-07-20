<template>
  <div class="nav">
    <div class="operate-nav">
      <el-button type="text" icon="el-icon-s-fold" class="btn-collapse" v-if="isCollapse" @click="collapseNav"></el-button>
      <el-button type="text" icon="el-icon-s-unfold" class="btn-collapse" v-else @click="collapseNav"></el-button>
    </div>
    <img src="../../static/image/logo.png" class="nav-logo" v-if="!isCollapse">
    <img src="../../static/image/logo_icon.png" class="nav-logo" v-else>
    <el-menu class="el-menu-vertical-demo" unique-opened router :collapse="isCollapse" background-color="#353F4F" text-color="#fff" active-text-color="#65cea7" :default-active="this.$route.meta.menuActive">
      <el-menu-item key="index" index="/">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </el-menu-item>
      <template v-for="(item,m) in navItemList">
        <template v-if="item.url">
          <el-menu-item :key="m" :index="item.url">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <el-submenu :key="m" :index="item.id">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item v-for="(subItem,n) in item.subset" :key="n" :index="subItem.url" v-if="subItem.menu">
              <i :class="subItem.icon"></i>
              <span slot="title">{{subItem.name}}</span>
            </el-menu-item>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
    import { getMenuList } from '../router/nav';
    export default {
        name: 'Nav',
        data() {
            return {
                isCollapse: false,
                editableTabs: [],
                navItems: [],
                navItemList: getMenuList()
            }
        },
        computed: {
            onRoutes() {
                //当前激活菜单的 index
                return this.$route.path.replace('/', '');
            }
        },
        methods: {
            collapseNav() {
                let that = this;
                that.isCollapse = !that.isCollapse;
            }
        }
    }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .nav {
    position: relative;
    background: #424F63;
    z-index: 10;
  }

  .nav-logo {
    display: block;
    margin: 14px auto;
  }

  .el-menu, .el-submenu__title {
    color: #fff;
    background-color: #424F63 !important;
    border: 0;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }

  .el-submenu.is-opened .el-submenu__title {
    color: #65cea7 !important;
  }

  .el-submenu.is-opened .el-submenu__title, .el-menu-item {
    background-color: #353F4F !important;
  }

  .el-menu-item:hover, .el-menu-item.is-active {
    color: #65cea7 !important;
    background: #2a323f !important;
  }

  .operate-nav {
    position: absolute;
    width: 50px;
    height: 50px;
    right: -50px;
  }

  .operate-nav .el-button {
    width: 52px;
    height: 50px;
    font-size: 20px;
    padding: 15px;
    cursor: pointer;
    float: left;
    color: #212121;
    border-right: 1px solid #e7e7e7;
    -moz-transition: all 0.2s ease-out 0s;
    -webkit-transition: all 0.2s ease-out 0s;
    transition: all 0.2s ease-out 0s;
    border-radius: 0;
    outline: none;
  }

  .operate-nav .el-button:hover {
    background: #65CEA7;
    color: #fff;
    border-right-color: #65CEA7;
  }

  .btn-collapse {
    padding: 5px 0;
    font-size: 24px;
    color: #fff;
  }

</style>
