webpackJsonp([49],{"ah+V":function(e,t){},gj5w:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"settingService",data:function(){return{checkList:[],form:{name:"",serviceName:"",host:"",port:"",description:"",position:"",radio:"1"},dialogImageUrl:"",dialogVisible:!1,fileList:[],submitBtn:{loading:!1,text:"提交"}}},computed:{},methods:{handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")},goBack:function(){this.$router.go(-1)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},onSubmit:function(e){this.$refs[e].validate(function(e){if(!e)return!1})}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"settingService allDiv"},[n("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"客服 电话",prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"客服 E-mail",prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"客服 旺旺",prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"客服 传真",prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"客服 QQ 1",prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"客服 QQ 2",prop:"name"}},[n("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"客服服务时间",prop:"name"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"配送说明",prop:"name"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:5}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"配送范围",prop:"name"}},[n("el-input",{attrs:{type:"textarea",autosize:{minRows:5}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("el-button",{attrs:{type:"primary",loading:e.submitBtn.loading},on:{click:function(t){return e.onSubmit("form")}}},[e._v(e._s(e.submitBtn.text))])],1)],1)},staticRenderFns:[]};var r=n("VU/8")(a,o,!1,function(e){n("ah+V")},"data-v-700e03d7",null);t.default=r.exports}});
//# sourceMappingURL=49.13639291870c886468a2.js.map