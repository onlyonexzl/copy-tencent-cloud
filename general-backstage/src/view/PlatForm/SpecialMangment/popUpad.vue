<template>
  <div class="addPage_ment" :style="{ height: heights }">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="清除弹窗内容">
        <span>点击清除弹窗内容</span>
      </el-form-item>
      <el-form-item label="弹窗标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="弹窗位置" prop="name">
        <div class="con_input">
          左侧 <el-input v-model="form.name" size="small"></el-input>px 顶部
          <el-input v-model="form.name" size="small"></el-input>px
        </div>
      </el-form-item>
      <el-form-item label="弹窗大小" prop="name">
        <div class="con_input">
          宽度 <el-input v-model="form.name" size="small"></el-input>px 高度
          <el-input v-model="form.name" size="small"></el-input>px
        </div>
      </el-form-item>
      <el-form-item label="内容" prop="editor_value">
        <vue-ueditor
          @ready="ready"
          v-model="form.editor_value"
          :key="1"
          :config="myConfig"
          @beforeInit="addCustomDialog"
        ></vue-ueditor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import vueEditorWrap from "vue-ueditor-wrap";
import file from "./../../../../static/file.png";

export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      myConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        //是否启用元素路径
        elementPathEnabled: false,
        // 初始容器高度
        initialFrameHeight: 300,
        // 初始容器宽度
        initialFrameWidth: "80%",
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        // serverUrl: 'http://35.201.165.105:8000/controller.php',
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: "./../../../../static/static1/"
      },
      ueditor: ""
    };
  },
  components: {
    VueUeditor: vueEditorWrap
  },
  methods: {
    ready(editorInstance) {
      this.ueditor = editorInstance;
    },
    addCustomDialog() {},
    resetForm() {
      this.$refs["form"].resetFields();
    },
    onSubmit() {
      console.log("submit!");
    },
    addCustomDialog() {
      let that = this;

      UE.registerUI(
        "button",
        function(editor, uiName) {
          //注册按钮执行时的command命令，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand: function() {
              alert("execCommand:" + uiName);
            }
          });
          //创建一个button
          var btn = new UE.ui.Button({
            //按钮的名字
            name: uiName,
            //提示
            title: "插入图片",
            //添加额外样式，指定icon图标，这里默认使用一个重复的icon
            cssRules: `background-image: url(${file}) !important;background-size: 100% 100%;`,
            //点击时执行的命令
            onclick: function() {
              var input = document.createElement("input");
              input.type = "file";
              input.style.display = "none";
              document.body.appendChild(input);
              input.click();
              let files = [];
              input.addEventListener("change", e => {
                files = e.target.files;
                // 利用 AJAX 上传，上传成功之后销毁 DOM
                let formData = new FormData();
                let index = 0;
                for (let i in files) {
                  !!(Number(i) + 1)
                    ? formData.append(`image[${Number(i)}]`, files[i])
                    : null;
                  console.log(files[i], i);
                }

                // e.target.files.forEach((i,k)=>{
                //  formData.append(`image[${k}]`,i)
                // })
                // that.$axios
                //   .post('p/DrillPlan/imgUpload', formData)
                //   .then((res) => {
                //     if (res.data.code == 0) {
                //       res.data.data.forEach((i, k) => {
                //         editor.execCommand('insertimage', {
                //           src: `${that.$store.state.url}/${i}`,
                //         });
                //         // insert(`${that.$store.state.url}/${i}`)
                //       });
                //     } else {
                //       that.$utils.message({
                //         type: 'error',
                //         message: res.data.message,
                //       });
                //     }
                //   });
              });

              // editor.execCommand('insertimage',{src:'/static/file.png'});

              //这里可以不用执行命令,做你自己的操作也可
              // editor.execCommand(uiName);
            }
          });
          //当点到编辑内容上时，按钮要做的状态反射
          editor.addListener("selectionchange", function() {
            var state = editor.queryCommandState(uiName);
            if (state == -1) {
              btn.setDisabled(true);
              btn.setChecked(false);
            } else {
              btn.setDisabled(false);
              btn.setChecked(state);
            }
          });
          //因为你是添加button,所以需要返回这个button
          return btn;
        },
        45
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.addPage_ment {
  width: 100%;
  height: 100%;
  overflow: auto;
  .el-form {
    .el-form-item {
      span {
        &:hover {
          color: #f00;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .el-input {
      width: 30%;
    }
    .el-textarea {
      width: 30%;
    }
    .edui-default {
      width: 80%;
    }
    .con_input {
      width: 100%;
      .el-input {
        width: 10%;
      }
    }
  }
}
</style>
