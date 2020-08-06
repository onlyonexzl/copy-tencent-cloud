<template>
  <div class="editluckyDraw"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 操作：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="活动名称："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="所需积分："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="起始时间："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder></el-input>
        <p> (时间格式示例：2014-7-1 18:00)</p>
      </el-form-item>
      <el-form-item label="终止时间："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder></el-input>
        <p>(时间格式示例：2014-7-2 18:00)</p>

      </el-form-item>
      <el-form-item label="无奖概率："
                    prop="displayName">
        <el-input v-model="form.displayName"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="无奖角度范围："
                    prop="displayName">
        <div class="form-item">
          <el-input v-model="form.displayName"
                    style="width:45%"
                    placeholder></el-input>
          <p style="width:9%; text-aline:center">-</p>
          <el-input v-model="form.displayName"
                    style="width:45%"
                    placeholder></el-input>
        </div>
      </el-form-item>
      <el-form-item label="当前转盘："
                    prop="displayName">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596715099517&di=baab76f118586a673c47a1a6969795e4&imgtype=0&src=http%3A%2F%2Fwww.5tu.cn%2Fattachments%2Fmonth_1306%2F13062415125db0082fd56a0066.jpg"
             style="width: 200px; height: 200px"
             alt="">
      </el-form-item>
      <el-form-item label="转盘上传："
                    prop="displayName">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <div slot="tip"
               class="el-upload__tip">(长宽为 530*530 像素 ，一定要严格按照这个大小，建议格式为png)</div>
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="
       el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i>上传活动奖品：
    </p>
    <div class="form-item">
      <el-form ref="form"
               :rules="rules"
               :model="form"
               label-width="130px">
        <el-form-item label="活动奖品："
                      style="width: 100%"
                      prop="displayName">
          <span>奖项：</span>
          <el-input v-model="form.displayName"
                    style="width:150px;margin-right:10px"
                    placeholder=""></el-input>
          <span>奖品名称：</span>
          <el-input v-model="form.displayName"
                    style="width:150px;margin-right:10px"
                    placeholder=""></el-input>
          <div class="form-item"
               style="margin: 10px 0">
            <span>奖品图样：</span>
            <el-upload class="upload-demo"
                       action="https://jsonplaceholder.typicode.com/posts/"
                       :on-preview="handlePreview"
                       :on-remove="handleRemove"
                       :before-remove="beforeRemove"
                       multiple
                       :limit="3"
                       :on-exceed="handleExceed"
                       :file-list="fileList">
              <el-button size="small"
                         type="primary">点击上传</el-button>
              <div slot="tip"
                   class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </div>
          <span>概率权重：</span>
          <el-input v-model="form.displayName"
                    style="width:150px;margin-right:10px"
                    placeholder=""></el-input>
          <span>URL：</span>
          <el-input v-model="form.displayName"
                    style="width:150px;margin-right:10px"
                    placeholder=""></el-input>
          <span>角度范围：</span>
          <el-input v-model="form.displayName"
                    style="width:150px"
                    placeholder=""></el-input>
          -
          <el-input v-model="form.displayName"
                    style="width:150px;margin-right:10px"
                    placeholder=""></el-input>
          <span>排序：</span>
          <el-input v-model="form.displayName"
                    style="width:150px;margin-right:10px"
                    placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="注意："
                      prop="displayName">
          <div class="margin-bottom: 10px">1、奖品的角度要严格按照转盘图标正确标明 </div>
          <div class="margin-bottom: 10px">2、奖项的起始角度范围为[0,359]或[1,360] </div>
          <div class="margin-bottom: 10px">3、奖品的角度不能有重叠，否则可能会产生意外的效果</div>
          <div class="margin-bottom: 10px">4、转盘各个奖品的获奖概率可以不相等</div>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="primary"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'editluckyDraw',

  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
        radio: '1',
        displayName: '',
        name: '',
        type: '',
        value: '',
        driverId: '',
        description: '',
        province: '',
        city: '',
        qu: ''
      },
      addCoumArray: [],
      checkList: [],
      pf: [{
        name: '1'
      }],
      height: window.innerHeight - 180 + 'px',
      drivers: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
        displayName: [
          { required: true, message: '请输入收货人', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请输入类型', trigger: 'blur' }
        ],
        value: [
          { required: true, message: '请不要重复填写省市', trigger: 'blur' }
        ],
        driverId: [
          { required: true, message: '请选择所属驱动', trigger: 'change' }
        ]
      },
      imgData: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121833438,3473430102&fm=26&gp=0.jpg',
    }
  },

  mounted () {
    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.form.content = html;
    };
    this.editor.customConfig.zIndex = 1000;
    this.editor.customConfig.menus = [
      // 菜单配置
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'image', // 插入图片
      'table', // 表格
      'code' // 插入代码
    ];
    this.editor.create(); // 创建富文本实例
  },

  methods: {
    addPf () {
      this.pf.push({
        name: '1'
      })
    },

    removePf () {
      this.pf.splice(this.pf.length - 1, 1)
    },

    clearAll () {
      this.addCoumArray = []
    },
    addCoum () {
      this.addCoumArray.push({
        "addRoumArray": ['1']
      })
      console.log(this.addCoumArray)
    },
    addroum (index) {
      this.addCoumArray[index].addRoumArray.push(this.addCoumArray[index].addRoumArray.length + 1)
    },
    getemplate () {
      this.$router.push('/shopManagement/templateToBuy')
    },
    goNavSet () {
      this.$router.push('/setUpShops/navigationStyleSettings?nameType=导航样式设置')
    },

    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    changeFile (e) {
      function getObjectURL (file) {
        var url = null;
        if (window.createObjectURL != undefined) {
          // basic
          url = window.createObjectURL(file);
        } else if (window.URL != undefined) {
          // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) {
          // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
      }

      let imgData = e.target.files[0];
      this.imgFile = imgData;
      this.imgData = getObjectURL(imgData);
    },
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
.editluckyDraw {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px 100px;
  overflow: auto;
}

.upload-wrap {
  width: 100%;
  height: 40px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  span {
    z-index: 1;
    line-height: 40px;
    color: #4bb3ff;
    font-size: 16px;
    margin-left: 30px;
  }
  input {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 2;
  }
}
</style>