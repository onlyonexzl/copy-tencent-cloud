webpackJsonp([79],{mrJw:function(e,t){},plAr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={name:"addSpellGroupOrder",data:function(){return{time:[],sName:"",value1:[],form:{displayName:""},height:window.innerHeight-500+"px",activeName:"first",tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江"},{date:"2016-05-01",name:"王小虎",address:"上海市 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区516 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区516 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区516 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区516 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区516 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区516 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区516 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区516 弄"}],currentPage:1,totalData:1}},methods:{handleClick:function(e,t){console.log(e,t)},add:function(){this.$router.push("/shopManagement/addModifyTheData?nameType=添加收货地址")},editor:function(){this.$router.push("/shopManagement/addModifyTheData?nameType=编辑编辑地址")},handleCurrentChangeFun:function(e){this.currentPage=e,tableDataRenderFun(this)},handleSizeChange:function(e){console.log("每页 "+e+" 条")}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"addSpellGroupOrder"},[a("el-tabs",{staticClass:"table_bottom",on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"所有订单",name:"first"}},[a("div",[a("div",{staticClass:"flex",style:{height:e.height}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",width:"50",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.$index+1)+"\n              ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"date","show-overflow-tooltip":"",label:"订单号码",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","show-overflow-tooltip":"",label:"订购者",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"商品金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"运费"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"折扣"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"分成"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"余额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"订单状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"下单时间"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"发货单号",width:"150","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-input",{attrs:{placeholder:""},model:{value:e.form.displayName,callback:function(t){e.$set(e.form,"displayName",t)},expression:"form.displayName"}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",width:"150","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-button",{staticClass:"yellowColor right20",attrs:{size:"medium",type:"text"},on:{click:function(a){return e.editor(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{staticClass:"redColor",attrs:{size:"medium",type:"text"},on:{click:function(a){return e.checkTrackQueryFun(t.$index,t.row)}}},[e._v("删除")])],1)]}}])})],1),e._v(" "),a("div",{staticClass:"btootm_paination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChangeFun}})],1)],1),e._v(" "),a("p",{staticStyle:{"font-size":"15px","margin-bottom":"20px","font-weight":"360",color:"#f30"}},[a("i",{staticClass:"el-icon-edit",staticStyle:{color:"#f5a623 !important","font-weight":"360","margin-right":"10px"}}),e._v(" 订单详细搜索：\n        ")]),e._v(" "),a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"订购时间：",prop:"displayName"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收 货 人：",prop:"displayName"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.displayName,callback:function(t){e.$set(e.form,"displayName",t)},expression:"form.displayName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订 购 人：",prop:"displayName"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.displayName,callback:function(t){e.$set(e.form,"displayName",t)},expression:"form.displayName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单号码：",prop:"displayName"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.displayName,callback:function(t){e.$set(e.form,"displayName",t)},expression:"form.displayName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"交易状态：",prop:"displayName"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.displayName,callback:function(t){e.$set(e.form,"displayName",t)},expression:"form.displayName"}})],1)],1),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[e._v("确定")])],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:"申请延期收获",name:"second"}},[a("div",[a("div",{staticClass:"flex",style:{height:e.height}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",width:"50",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.$index+1)+"\n              ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"date","show-overflow-tooltip":"",label:"订单号码",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","show-overflow-tooltip":"",label:"订购者",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"下单时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"延迟信息"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",width:"150","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-button",{staticClass:"yellowColor right20",attrs:{size:"medium",type:"text"},on:{click:function(a){return e.editor(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{staticClass:"redColor",attrs:{size:"medium",type:"text"},on:{click:function(a){return e.checkTrackQueryFun(t.$index,t.row)}}},[e._v("删除")])],1)]}}])})],1),e._v(" "),a("div",{staticClass:"btootm_paination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChangeFun}})],1)],1),e._v(" "),a("p",{staticStyle:{"font-size":"15px","margin-bottom":"20px","font-weight":"360",color:"#f30"}},[a("i",{staticClass:"el-icon-edit",staticStyle:{color:"#f5a623 !important","font-weight":"360","margin-right":"10px"}}),e._v(" 订单详细搜索：\n        ")]),e._v(" "),a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"订单号码：",prop:"displayName"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.displayName,callback:function(t){e.$set(e.form,"displayName",t)},expression:"form.displayName"}})],1)],1),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[e._v("确定")])],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:"退货通道",name:"third"}},[a("div",[a("div",{staticClass:"flex",style:{height:e.height}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"index",width:"50",label:"序号"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(t.$index+1)+"\n              ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"date","show-overflow-tooltip":"",label:"退货商品",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name","show-overflow-tooltip":"",label:"订单号",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"订单折扣"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"退货信息"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address","show-overflow-tooltip":"",label:"申请时间"}}),e._v(" "),a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",width:"150","min-width":"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-button",{staticClass:"yellowColor right20",attrs:{size:"medium",type:"text"},on:{click:function(a){return e.editor(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{staticClass:"redColor",attrs:{size:"medium",type:"text"},on:{click:function(a){return e.checkTrackQueryFun(t.$index,t.row)}}},[e._v("删除")])],1)]}}])})],1),e._v(" "),a("div",{staticClass:"btootm_paination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChangeFun}})],1)],1),e._v(" "),a("p",{staticStyle:{"font-size":"15px","margin-bottom":"20px","font-weight":"360",color:"#f30"}},[a("i",{staticClass:"el-icon-edit",staticStyle:{color:"#f5a623 !important","font-weight":"360","margin-right":"10px"}}),e._v(" 退货记录搜索：\n        ")]),e._v(" "),a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"申请时间：",prop:"displayName"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申请人：",prop:"displayName"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.displayName,callback:function(t){e.$set(e.form,"displayName",t)},expression:"form.displayName"}})],1)],1),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[e._v("确定")])],1)]),e._v(" "),a("el-tab-pane",{attrs:{label:"现场订单验证",name:"fourth"}},[a("p",{staticStyle:{"font-size":"15px","margin-bottom":"20px","font-weight":"360",color:"#f30"}},[a("i",{staticClass:"el-icon-edit",staticStyle:{color:"#f5a623 !important","font-weight":"360","margin-right":"10px"}}),e._v(" 现场订单验证：\n      ")]),e._v(" "),a("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"订单号：",prop:"displayName"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.displayName,callback:function(t){e.$set(e.form,"displayName",t)},expression:"form.displayName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单密码：",prop:"displayName"}},[a("el-input",{attrs:{placeholder:""},model:{value:e.form.displayName,callback:function(t){e.$set(e.form,"displayName",t)},expression:"form.displayName"}})],1)],1),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[e._v("确定")])],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(l,o,!1,function(e){a("mrJw")},"data-v-3c0268a8",null);t.default=r.exports}});
//# sourceMappingURL=79.0220e38399f5dcffdf0c.js.map