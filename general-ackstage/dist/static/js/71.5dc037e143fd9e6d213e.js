webpackJsonp([71],{"0SrC":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("sYY+"),l=a.n(i),o={name:"editConventionalKnowledge",data:function(){return{dialogImageUrl:"",dialogVisible:!1,form:{radio:"1",displayName:"",name:"",type:"",value:"",driverId:"",description:"",province:"",city:"",qu:""},addCoumArray:[],checkList:[],pf:[{name:"1"}],height:window.innerHeight-180+"px",drivers:[],submitBtn:{loading:!1,text:"提交"},rules:{displayName:[{required:!0,message:"请输入收货人",trigger:"blur"}],name:[{required:!0,message:"请输入手机号",trigger:"blur"}],type:[{required:!0,message:"请输入类型",trigger:"blur"}],value:[{required:!0,message:"请不要重复填写省市",trigger:"blur"}],driverId:[{required:!0,message:"请选择所属驱动",trigger:"change"}]},imgData:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121833438,3473430102&fm=26&gp=0.jpg"}},mounted:function(){var t=this;this.editor=new l.a(this.$refs.editorElem),this.editor.customConfig.onchange=function(e){t.form.content=e},this.editor.customConfig.zIndex=1e3,this.editor.customConfig.menus=["head","bold","fontSize","fontName","italic","underline","strikeThrough","foreColor","backColor","link","list","justify","quote","image","table","code"],this.editor.create()},methods:{addPf:function(){this.pf.push({name:"1"})},removePf:function(){this.pf.splice(this.pf.length-1,1)},clearAll:function(){this.addCoumArray=[]},addCoum:function(){this.addCoumArray.push({addRoumArray:["1"]}),console.log(this.addCoumArray)},addroum:function(t){this.addCoumArray[t].addRoumArray.push(this.addCoumArray[t].addRoumArray.length+1)},getemplate:function(){this.$router.push("/shopManagement/templateToBuy")},goNavSet:function(){this.$router.push("/setUpShops/navigationStyleSettings?nameType=导航样式设置")},handleRemove:function(t,e){console.log(t,e)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},changeFile:function(t){var e,a,i=t.target.files[0];this.imgFile=i,this.imgData=(e=i,a=null,void 0!=window.createObjectURL?a=window.createObjectURL(e):void 0!=window.URL?a=window.URL.createObjectURL(e):void 0!=window.webkitURL&&(a=window.webkitURL.createObjectURL(e)),a)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editConventionalKnowledge",style:{height:t.height}},[t._m(0),t._v(" "),a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"主站分类：",prop:"displayName"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:t.form.province,callback:function(e){t.$set(t.form,"province",e)},expression:"form.province"}},[a("el-option",{attrs:{label:"美食",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"娱乐",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"分类选择：",prop:"displayName"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:t.form.province,callback:function(e){t.$set(t.form,"province",e)},expression:"form.province"}},[a("el-option",{attrs:{label:"美食",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"娱乐",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"多重分类：",prop:"displayName"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:t.form.province,callback:function(e){t.$set(t.form,"province",e)},expression:"form.province"}},[a("el-option",{attrs:{label:"美食",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"娱乐",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"多重分类：",prop:"displayName"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:""},model:{value:t.form.province,callback:function(e){t.$set(t.form,"province",e)},expression:"form.province"}},[a("el-option",{attrs:{label:"美食",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"娱乐",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"筛选属性 -",prop:"displayName"}})],1),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"form-item"},[t._m(2),t._v(" "),a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"130px"}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"商品名称：",prop:"displayName"}},[a("el-input",{attrs:{placeholder:""},model:{value:t.form.displayName,callback:function(e){t.$set(t.form,"displayName",e)},expression:"form.displayName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"进货价：",prop:"name"}},[a("div",{staticClass:"form-item"},[a("el-input",{staticStyle:{width:"60%","margin-tight":"1%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("p",{staticStyle:{width:"20%","text-align":"right"}},[t._v("加价率：")]),t._v(" "),a("el-select",{staticStyle:{width:"25%"},attrs:{clearable:""},model:{value:t.form.province,callback:function(e){t.$set(t.form,"province",e)},expression:"form.province"}},[a("el-option",{attrs:{label:"0%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"10%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"20%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"30%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"40%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"50%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"60%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"70%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"80%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"90%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"100%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"150%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"200%",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"300%",value:"shanghai"}})],1)],1)]),t._v(" "),a("el-form-item",{attrs:{label:"市场价",prop:"name"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[a("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1),t._v(" "),a("el-form-item",{attrs:{label:"团购价格：",prop:"name"}},[a("div",{staticClass:"form-item"},[a("el-input",{staticStyle:{width:"60%","margin-tight":"1%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("p",{staticStyle:{width:"20%","text-align":"left"}},[t._v("元")]),t._v(" "),a("el-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("会员折扣")])],1)]),t._v(" "),a("el-form-item",{attrs:{label:"商品重量：",prop:"name"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[a("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("克")])])],1),t._v(" "),a("el-form-item",{attrs:{label:"起始时间：",prop:"name"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[a("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1),t._v(" "),a("el-form-item",{attrs:{label:"结束时间：",prop:"name"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[a("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1),t._v(" "),a("el-form-item",{attrs:{label:"商品显示：",prop:"name"}},[a("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[a("el-checkbox",{attrs:{label:"热门"}}),t._v(" "),a("el-checkbox",{attrs:{label:"推荐"}}),t._v(" "),a("el-checkbox",{attrs:{label:"免邮"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"商品编码：",prop:"name"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品品牌：",prop:"name"}},[a("div",{staticClass:"form-item"},[a("el-select",{staticStyle:{width:"25%"},attrs:{clearable:""},model:{value:t.form.province,callback:function(e){t.$set(t.form,"province",e)},expression:"form.province"}},[a("el-option",{attrs:{label:"情感",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"百丽",value:"shanghai"}})],1),t._v(" "),a("el-input",{staticStyle:{width:"60%","margin-tight":"1%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("p",{staticStyle:{width:"20%","text-align":"right",cursor:"pointer"}},[t._v("搜索")])],1)]),t._v(" "),a("el-form-item",{attrs:{label:"总库存：",prop:"name"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[a("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("件")])])],1),t._v(" "),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"商品详细大图：",prop:"name"}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1),t._v(" "),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"商品缩略图：",prop:"name"}},[a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("不上传，系统自动用商品详细图等比例压缩")]),t._v(" "),a("i",{staticClass:"el-icon-plus"})]),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)],1)],1),t._v(" "),a("p",{staticStyle:{"font-size":"15px","margin-bottom":"20px","font-weight":"360",color:"#000"}},[a("i",{staticClass:"el-icon-edit",staticStyle:{color:"#f5a623 !important","font-weight":"360","margin-right":"10px"}}),t._v(" 销售属性 "),a("span",{staticClass:"redColor",staticStyle:{cursor:"pointer"},on:{click:t.addCoum}},[t._v("[添加]")]),t._v(" （注意：属性值选完图片后，文字也必须填写。空白属性将被视为放弃。）\n  ")]),t._v(" "),a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"130px"}},[t._l(t.addCoumArray,function(e,i){return a("div",{key:i,staticStyle:{width:"100%"}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"属性类型：",prop:"displayName"}},[a("el-input",{attrs:{placeholder:""},model:{value:t.form.displayName,callback:function(e){t.$set(t.form,"displayName",e)},expression:"form.displayName"}})],1),t._v(" "),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"属性值：",prop:"displayName"}},[t._l(e.addRoumArray,function(e,i){return a("el-input",{key:i,staticStyle:{width:"10%","margin-right":"10px"},attrs:{placeholder:""},model:{value:t.form.displayName,callback:function(e){t.$set(t.form,"displayName",e)},expression:"form.displayName"}})}),t._v(" "),a("span",{staticClass:"redColor",staticStyle:{cursor:"pointer"},on:{click:function(e){return t.addroum(i)}}},[t._v("[添加]")])],2)],1)}),t._v(" "),a("p",{staticStyle:{cursor:"pointer","margin-left":"20px","margin-bottom":"20px"},on:{click:t.clearAll}},[t._v("↓ 变更属性库存设置 ↓ "),a("span",{staticClass:"redColor"},[t._v("（属性修改后点击此按钮，重新设置对应的库存）")])])],2),t._v(" "),a("p",{staticStyle:{"font-size":"15px","margin-bottom":"20px","font-weight":"360",color:"#000"}},[a("i",{staticClass:"el-icon-edit",staticStyle:{color:"#f5a623 !important","font-weight":"360","margin-right":"10px"}}),t._v(" 批发设置："),a("span",{staticClass:"redColor",staticStyle:{cursor:"pointer","margin-left":"20px"},on:{click:t.addPf}},[t._v("增加")]),t._v(" "),a("span",{staticClass:"redColor",staticStyle:{cursor:"pointer","margin-left":"20px"},on:{click:t.removePf}},[t._v("删除")])]),t._v(" "),a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"130px"}},[t._l(t.pf,function(e,i){return a("el-form-item",{key:i,staticStyle:{width:"100%"},attrs:{label:"批发数量：",prop:"name"}},[a("el-input",{staticStyle:{width:"25%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("span",{staticStyle:{width:"17.5%"}},[t._v("—")]),t._v(" "),a("el-input",{staticStyle:{width:"25%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("span",{staticStyle:{width:"17.5%"}},[t._v("批发价格")]),t._v(" "),a("el-input",{staticStyle:{width:"25%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)}),t._v(" "),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"批发数量：",prop:"name"}},[a("span",{staticStyle:{width:"17.5%"}},[t._v("大于")]),t._v(" "),a("el-input",{staticStyle:{width:"25%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("span",{staticStyle:{width:"17.5%"}},[t._v("批发价格")]),t._v(" "),a("el-input",{staticStyle:{width:"25%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],2),t._v(" "),t._m(3),t._v(" "),a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"130px"}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"组合商品：",prop:"name"}},[a("div",{staticClass:"form-item"},[a("div",{staticClass:"item-list",staticStyle:{width:"68px",height:"68px"}},[a("img",{staticStyle:{width:"68px",height:"68px"},attrs:{src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2848120264,2778704476&fm=26&gp=0.jpg",alt:""}})]),t._v(" "),a("p",{staticStyle:{"line-height":"68px",margin:"0 20px"}},[t._v("➕")]),t._v(" "),t._l(4,function(e,i){return a("div",{key:i,staticClass:"item-list",staticStyle:{width:"68px",height:"68px","margin-right":"20px",border:"solid 1px #eee","text-align":"center","line-height":"68px"}},[t._v("\n          ?\n        ")])})],2)]),t._v(" "),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"组合商品：",prop:"name"}},[a("div",{staticClass:"form-item"},[a("div",{staticClass:"item-list",staticStyle:{width:"68px",height:"68px"}},[a("el-input",{staticStyle:{width:"100%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("p",{staticStyle:{"line-height":"40px",margin:"0 20px"}},[t._v("➕")]),t._v(" "),t._l(4,function(e,i){return a("div",{key:i,staticClass:"item-list",staticStyle:{width:"68px",height:"68px","margin-right":"20px"}},[a("el-input",{staticStyle:{width:"100%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)})],2)]),t._v(" "),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"组合商品搜索：",prop:"name"}},[a("div",{staticClass:"form-item"},[a("el-input",{staticStyle:{width:"40%"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[t._v("确定")]),t._v(" "),a("span",{staticClass:"redColor"},[t._v(" （接索不到？请完善您的关键字）")])],1)])],1),t._v(" "),t._m(4),t._v(" "),a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"130px"}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"商品说明：",prop:"name"}},[a("div",{ref:"editorElem",staticStyle:{"text-align":"left",width:"100%"}})])],1),t._v(" "),t._m(5),t._v(" "),a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"130px"}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"相册图片：",prop:"name"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":t.handlePreview,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,multiple:"","on-exceed":t.handleExceed,"file-list":t.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1)],1)],1),t._v(" "),t._m(6),t._v(" "),a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"商品关键字：",prop:"displayName"}},[a("el-input",{attrs:{placeholder:""},model:{value:t.form.displayName,callback:function(e){t.$set(t.form,"displayName",e)},expression:"form.displayName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品描述：",prop:"displayName"}},[a("el-input",{attrs:{placeholder:""},model:{value:t.form.displayName,callback:function(e){t.$set(t.form,"displayName",e)},expression:"form.displayName"}})],1)],1),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[t._v("确定")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"15px","margin-bottom":"10px","font-weight":"360",color:"#000"}},[e("i",{staticClass:"el-icon-edit",staticStyle:{color:"#f5a623 !important","font-weight":"360","margin-right":"10px"}}),this._v(" 商品分类：\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"15px","margin-bottom":"10px","font-weight":"360",color:"#000"}},[e("i",{staticClass:"\n     el-icon-edit",staticStyle:{color:"#f5a623 !important","font-weight":"360","margin-right":"10px"}}),this._v(" 基本信息：\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img",staticStyle:{width:"200px","text-align":"center"}},[e("img",{staticStyle:{width:"200px"},attrs:{src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2848120264,2778704476&fm=26&gp=0.jpg",alt:""}}),this._v(" "),e("p",{staticClass:"hovertext",staticStyle:{cursor:"pointer"}},[this._v("查看原商品信息")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"15px","margin-bottom":"20px","font-weight":"360",color:"#000"}},[e("i",{staticClass:"el-icon-edit",staticStyle:{color:"#f5a623 !important","font-weight":"360","margin-right":"10px"}}),this._v(" 组合购买：\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"15px","margin-bottom":"20px","font-weight":"360",color:"#000"}},[e("i",{staticClass:"el-icon-edit",staticStyle:{color:"#f5a623 !important","font-weight":"360","margin-right":"10px"}}),this._v(" 详细信息：\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"15px","margin-bottom":"20px","font-weight":"360",color:"#000"}},[e("i",{staticClass:"el-icon-edit",staticStyle:{color:"#f5a623 !important","font-weight":"360","margin-right":"10px"}}),this._v(" 商品相册：\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticStyle:{"font-size":"15px","margin-bottom":"20px","font-weight":"360",color:"#000"}},[e("i",{staticClass:"el-icon-edit",staticStyle:{color:"#f5a623 !important","font-weight":"360","margin-right":"10px"}}),this._v(" 商品SEO：\n  ")])}]};var s=a("VU/8")(o,r,!1,function(t){a("be5i")},"data-v-5719af80",null);e.default=s.exports},be5i:function(t,e){}});
//# sourceMappingURL=71.5dc037e143fd9e6d213e.js.map