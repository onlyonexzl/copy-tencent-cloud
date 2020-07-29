<template>
  <div class="editgroupGoods"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 基本信息：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="分类选择："
                    prop="displayName">
        <div class="form-item">
          <el-select v-model="form.province"
                     style="width: 100%"
                     clearable>
            <el-option label="超市"
                       value="shanghai"></el-option>
            <el-option label="商城"
                       value="beijing"></el-option>
          </el-select>
          <el-select v-model="form.province"
                     style="width: 100%"
                     clearable>
            <el-option label="综合"
                       value="shanghai"></el-option>
            <el-option label="个人"
                       value="beijing"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="商品编号："
                    prop="displayName">
        <el-select v-model="form.province"
                   style="width: 100%"
                   clearable>
          <el-input v-model="form.name"
                    style="width: 60%;margin-tight: 1%"></el-input>
        </el-select>
      </el-form-item>

      <el-form-item label="筛选属性 -"
                    prop="displayName">
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="
       el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 商品信息：
    </p>
    <div class="form-item">
      <el-form ref="form"
               :rules="rules"
               :model="form"
               label-width="130px">
        <el-form-item label="商品名称："
                      style="width: 100%"
                      prop="displayName">
          <el-input v-model="form.displayName"
                    placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="总库存："
                      prop="name">
          <el-input v-model="form.name">
            <span slot="suffix">件</span>
          </el-input>
        </el-form-item>
        <el-form-item label="商品关键字："
                      prop="displayName">
          <el-input v-model="form.displayName"
                    type="textarea"
                    placeholder></el-input>
        </el-form-item>
        <el-form-item label="商品描述："
                      prop="displayName">
          <el-input v-model="form.displayName"
                    type="textarea"
                    placeholder></el-input>
        </el-form-item>
        <el-form-item label="进货价："
                      prop="name">
          <el-input v-model="form.name">
            <span slot="suffix">元</span>
          </el-input>
        </el-form-item>
        <el-form-item label="市场价："
                      prop="name">
          <el-input v-model="form.name">
            <span slot="suffix">元</span>
          </el-input>
        </el-form-item>
        <el-form-item label="商品价："
                      prop="name">
          <div class="form-item">
            <el-input v-model="form.name"
                      style="width: 60%;margin-tight: 1%"><span slot="suffix">元</span></el-input>
            <el-checkbox v-model="checked">会员折扣</el-checkbox>
          </div>
        </el-form-item>
        <el-form-item label="商品展示："
                      prop="name">
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="热门"></el-checkbox>
            <el-checkbox label="推荐"></el-checkbox>
            <el-checkbox label="免邮"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="定金："
                      prop="name">
          <div class="form-item">
            <el-input v-model="form.name"
                      style="width: 60%;margin-tight: 1%"><span slot="suffix">元</span></el-input>

            <el-checkbox v-model="checked">接受预定</el-checkbox>
          </div>
        </el-form-item>
        <el-form-item label="商品重量"
                      prop="name">
          <el-input v-model="form.name">
            <span slot="suffix">克</span>
          </el-input>
        </el-form-item>

        <el-form-item label="商品品牌："
                      prop="name">
          <div class="form-item">
            <el-select v-model="form.province"
                       style="width: 25%;"
                       clearable>
              <el-option label="情感"
                         value="shanghai"></el-option>
              <el-option label="百丽"
                         value="shanghai"></el-option>
            </el-select>
            <el-input v-model="form.name"
                      style="width: 60%;margin-tight: 1%"></el-input>

            <p style="width: 20%;text-align: right; cursor: pointer;">搜索</p>
          </div>
        </el-form-item>
        <el-form-item label="商品详细大图："
                      style="width: 100%"
                      prop="name">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                     list-type="picture-card"
                     :on-preview="handlePictureCardPreview"
                     :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="商品缩略图："
                      style="width: 100%"
                      prop="name">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                     list-type="picture-card"
                     :on-preview="handlePictureCardPreview"
                     :on-remove="handleRemove">
            <div slot="tip"
                 class="el-upload__tip">不上传，系统自动用商品详细图等比例压缩</div>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt="">
          </el-dialog>
        </el-form-item>

      </el-form>
    </div>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 销售属性 <span class="redColor"
            style="cursor: pointer;"
            @click="addCoum">[添加]</span> （注意：属性值选完图片后，文字也必须填写。空白属性将被视为放弃。）特别说明：属性价格仅普通商品及会员优惠有效，即批发，组合和预定下等无效
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <div v-for="(item, index) in addCoumArray"
           style="width: 100%"
           :key="index">
        <el-form-item label="属性类型："
                      style="width: 100%"
                      prop="displayName">
          <el-input v-model="form.displayName"
                    placeholder></el-input>
        </el-form-item>
        <el-form-item label="属性值："
                      style="width: 100%"
                      prop="displayName">
          <el-input v-model="form.displayName"
                    v-for="(items, i) in item.addRoumArray"
                    :key="i"
                    style="width: 10%;margin-right: 10px"
                    placeholder></el-input>
          <span class="redColor"
                style="cursor: pointer;"
                @click="addroum(index)">[添加]</span>
        </el-form-item>
      </div>
      <p style="cursor: pointer;margin-left: 20px;margin-bottom: 20px"
         @click="clearAll">↓ 变更属性库存设置 ↓ <span class="redColor">（属性修改后点击此按钮，重新设置对应的库存）</span></p>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 批发设置：<span style="cursor: pointer;margin-left: 20px;"
            class="redColor"
            @click="addPf">增加</span>
      <span style="cursor: pointer;margin-left: 20px;"
            class="redColor"
            @click="removePf">删除</span>
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="批发数量："
                    style="width: 100%"
                    v-for="(item, index) in pf"
                    :key="index"
                    prop="name">
        <el-input v-model="form.name"
                  style="width: 25%"></el-input>
        <span style="width: 17.5%">—</span>
        <el-input v-model="form.name"
                  style="width: 25%"></el-input>
        <span style="width: 17.5%">批发价格</span>
        <el-input v-model="form.name"
                  style="width: 25%"></el-input>
      </el-form-item>

      <el-form-item label="批发数量："
                    style="width: 100%"
                    prop="name">
        <span style="width: 17.5%">大于</span>
        <el-input v-model="form.name"
                  style="width: 25%"></el-input>
        <span style="width: 17.5%">批发价格</span>
        <el-input v-model="form.name"
                  style="width: 25%"></el-input>
      </el-form-item>

    </el-form>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 组合购买：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="组合商品："
                    style="width: 100%"
                    prop="name">
        <div class="form-item">
          <div class="item-list"
               style="width: 68px; height: 68px">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2848120264,2778704476&fm=26&gp=0.jpg"
                 style="width: 68px; height: 68px"
                 alt="">
          </div>
          <p style="line-height: 68px; margin: 0 20px">➕</p>
          <div class="item-list"
               style="width: 68px; height: 68px; margin-right: 20px; border: solid 1px #eee; text-align:center; line-height: 68px"
               v-for="(item, index) in 4"
               :key="index">
            ?
          </div>
        </div>
      </el-form-item>
      <el-form-item label="组合商品："
                    style="width: 100%"
                    prop="name">
        <div class="form-item">
          <div class="item-list"
               style="width: 68px; height: 68px">

            <el-input v-model="form.name"
                      style="width: 100%"></el-input>
          </div>
          <p style="line-height: 40px; margin: 0 20px">➕</p>
          <div class="item-list"
               style="width: 68px; height: 68px; margin-right: 20px;"
               v-for="(item, index) in 4"
               :key="index">
            <el-input v-model="form.name"
                      style="width: 100%"></el-input>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="组合商品搜索："
                    style="width: 100%"
                    prop="name">
        <div class="form-item">
          <el-input v-model="form.name"
                    style="width: 40%"></el-input>
          <el-button type="primary"
                     style="float: right">确定</el-button>
          <span class="redColor"> （接索不到？请完善您的关键字）</span>
        </div>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 详细信息：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="商品说明："
                    style="width: 100%"
                    prop="name">
        <div ref="editorElem"
             style="text-align:left;width: 100%;"></div>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 商品相册：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="相册图片："
                    style="width: 100%"
                    prop="name">
        <el-upload class="upload-demo"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :before-remove="beforeRemove"
                   multiple
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-button type="primary"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'editgroupGoods',

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
.editgroupGoods {
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