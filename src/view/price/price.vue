<template>
  <!-- 文档 -->
  <div class="price">
    <div class="banner">
      <div class="overview-hero">
        <p>文档中心</p>
        <div>
          <input type="text"
                 placeholder="请输入">
          <i class="el-icon-search"></i>
        </div>
      </div>
      <div class="addition-list">
        <div class="c-a">
          <div class="addition-item">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'price'
}
</script>

<style lang="scss" scoped>
.price {
  width: 100%;
  height: 100%;

  .banner {
    position: relative !important;
    box-sizing: border-box;
    padding: 0 200px;
    width: 100%;
    height: 300px;
    background-image: url("https://main.qcloudimg.com/raw/6cf2d1788b69eea176d95979f67f1d3b.jpg");
    background-position: center top;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    .overview-hero {
      width: 680px;
      text-align: center;
      padding-bottom: 50px;
      > p {
        font-size: 35px;
        color: #fff;
        line-height: 56px;
      }
      > span {
        font-size: 16px;
        color: #fff;
        line-height: 40px;
      }
      > div {
        width: 680px;
        height: 55px;
        display: flex;
        line-height: 55px;
        margin-top: 20px;
        > input {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          line-height: normal;
          border-color: #e5e5e5;
          border-right: 0;
          box-shadow: none;
          display: inline-block;
          vertical-align: middle;
          font-size: 15px;
          padding-right: 50px;
          padding-left: 10px;
        }
        > i {
          font-size: 16px;
          margin: 0 -30px;
          line-height: 55px;
          background: #fff;
          color: #ababab;
        }
      }
    }

    .addition-list {
      position: absolute;
      left: 50%;
      margin-left: -50%;
      padding: 0 200px;
      box-sizing: border-box;
      top: 250px;
      width: 100%;
      height: 116px;

      .c-a {
        background: #fff;
        -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px 0 rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 3px 0 rgba(0, 0, 0, 0.1);
        height: 100%;
        .addition-item {
          width: 33%;
          position: relative;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          padding: 30px;
          display: inline-block;
          vertical-align: top;
        }
      }
    }
  }
}
</style>
