<template>
  <div id="app">
    <el-container class="page">
      <div class="wrap" v-if="$route.meta.keepAlive">
        <el-container class="page-container">
          <Nav/>
          <el-container>
            <el-header id="header">
              <Header/>
            </el-header>
            <el-main id="main"> <router-view/> </el-main>
          </el-container>
        </el-container>
      </div>
      <div v-if="!$route.meta.keepAlive" class="wrap"><router-view/></div>
    </el-container>
  </div>
</template>
<script>
  import Header from './view/header'
  import Nav from './view/nav'
  export default {
    components:{
      Header,
      Nav,
    }
  }
</script>
<style>
  #app {
    height: 100%;
    font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }
  .el-aside{
    background: #424F63;
  }
  .page-container{
    height: 100%;
  }
  #header{
    height: 50px!important;
    background: #fff;
    line-height: 50px;
  }
  #footer {
    height: 30px!important;
    line-height: 30px;
    background: #f8f8f8;
    color: #666;
    text-align: center;
  }
  #main {
    background-color: #f8f8f8;
    color: #333;
    text-align: center;
    height: 100%;
    overflow: auto;
    padding: 10px;
  }
</style>
