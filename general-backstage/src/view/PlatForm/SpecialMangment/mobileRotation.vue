<template>
  <div class="webDev_page">
    <div class="webPage_flash">
      <h3>Flash 编辑</h3>
      <ul>
        <li>
          <el-button type="text" style="color: #f00;">[删除]</el-button>
          <el-button type="text" @click="amendClick">[修改]</el-button>
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596709737157&di=9b6e54f7a666550c7d06f844195afd50&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201111%2F21%2F205700txzuacubbcy91u99.jpg"
            alt=""
          />
          <p>
            标题:
            <el-input
              v-model="input"
              placeholder="请输入内容"
              size="small"
            ></el-input>
          </p>
          <p>
            链接:
            <el-input
              v-model="input"
              placeholder="请输入内容"
              size="small"
            ></el-input>
          </p>
          <p>
            排序:
            <el-input
              v-model="input"
              placeholder="请输入内容"
              size="small"
            ></el-input>
          </p>
        </li>
      </ul>
    </div>
    <div class="webPage_bot">
      <h3>上传轮转广告</h3>
      <div class="bot_con">
        <p>
          标题
          <el-input size="medium"></el-input>
        </p>
        <p>
          链接
          <el-input size="medium"></el-input>
        </p>
        <p>
          排序
          <el-input size="medium"></el-input>
        </p>
        <p>
          大图
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </p>
        <p>
          资讯ID
          <el-input size="medium"></el-input>
        </p>
        <p>
          <el-button type="primary" size="medium">提交</el-button>
          <el-button size="medium">重置</el-button>
        </p>
      </div>
    </div>

    <el-dialog
      title="修改轮转广告"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="form.url"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="form.order"></el-input>
        </el-form-item>
        <el-form-item label="资讯ID">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="轮转图片">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >提交</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      input: "",
      dialogVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    handlePreview() {},
    handleRemove() {},
    beforeRemove() {},
    handleExceed() {},
    amendClick() {
      this.dialogVisible = true;
    },
    handleClose() {}
  }
};
</script>

<style lang="scss" scoped>
.webDev_page {
  width: 100%;
  height: 100%;
  .webPage_flash {
    width: 100%;
    border: 1px solid #cccccc;
    h3 {
      padding-left: 5px;
      background: rgb(64, 167, 226);
      color: #fff;
      padding: 5px;
    }
    ul {
      display: flex;
      padding: 5px;
      li {
        width: 25%;
        border: 1px solid #cccccc;
        text-align: center;
        img {
          width: 80%;
          height: 100px;
          display: block;
          margin: 0 auto;
        }
        p {
          display: flex;
          width: 90%;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          margin-top: 5px;
          .el-input {
            width: 85%;
            margin-left: 5px;
          }
          &:last-child {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  .webPage_bot {
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 5px;
    h3 {
      padding-left: 5px;
      background: rgb(64, 167, 226);
      color: #fff;
      padding: 5px;
    }
    .bot_con {
      display: flex;
      flex-wrap: wrap;
      margin-top: 5px;
      p {
        display: flex;
        width: 35%;
        align-items: center;
        margin-bottom: 8px;
        padding-left: 5px;
        .el-input {
          width: 80%;
          margin-left: 9px;
        }
        .upload-demo {
          margin-left: 9px;
        }
      }
    }
  }
}
</style>
