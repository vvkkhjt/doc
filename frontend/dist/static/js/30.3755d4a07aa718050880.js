webpackJsonp([30],{Pvms:function(e,t){},yYZw:function(e,t,a){"use strict";function r(e){return new p.a(function(t,a){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return a(e)}})}Object.defineProperty(t,"__esModule",{value:!0});var i=a("fZjL"),n=a.n(i),o=a("+6Bu"),s=a.n(o),l=a("Xxa5"),u=a.n(l),c=a("exGp"),d=a.n(c),m=a("Dd8w"),f=a.n(m),v=a("//Fk"),p=a.n(v),h=a("NYxO"),w={labelCol:{span:24},wrapperCol:{span:24}},b={name:"DailyEdit",props:{dailyEditVisiable:{default:!1}},computed:f()({},Object(h.c)({currentUser:function(e){return e.account.user}}),{show:{get:function(){return this.dailyEditVisiable},set:function(){}}}),data:function(){return{rowId:null,formItemLayout:w,form:this.$form.createForm(this),loading:!1,fileList:[],previewVisible:!1,previewImage:"",workerList:[],readStatus:"1"}},mounted:function(){this.getWorkerList()},methods:{getWorkerList:function(){var e=this;this.$get("/cos/worker-info/list",{type:1}).then(function(t){e.workerList=t.data.data})},handleCancel:function(){this.previewVisible=!1},handlePreview:function(e){var t=this;return d()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,r(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}},a,t)}))()},picHandleChange:function(e){var t=e.fileList;this.fileList=t},imagesInit:function(e){if(null!==e&&""!==e){var t=[];e.split(",").forEach(function(e,a){t.push({uid:a,name:e,status:"done",url:"http://backend.my.org/imagesWeb/"+e})}),this.fileList=t}},setFormValues:function(e){var t=this,a=s()(e,[]);this.rowId=a.id;var r=["type","content","worker"],i={};n()(a).forEach(function(e){"images"===e&&(t.fileList=[],t.imagesInit(a.images)),"type"===e&&(a[e]=a[e].toString()),"worker"===e&&a[e],-1!==r.indexOf(e)&&(t.form.getFieldDecorator(e),i[e]=a[e])}),this.form.setFieldsValue(i)},reset:function(){this.loading=!1,this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},handleSubmit:function(){var e=this,t=[];this.fileList.forEach(function(e){t.push(e.name)}),this.form.validateFields(function(a,r){r.id=e.rowId,r.readStatus=e.readStatus,r.images=t.length>0?t.join(","):null,a||(e.loading=!0,e.$put("/cos/daily-manage",f()({},r)).then(function(t){e.reset(),e.$emit("success")}).catch(function(){e.loading=!1}))})}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"修改投诉建议",width:800},on:{cancel:e.onClose},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:e.onClose}},[e._v("\n      取消\n    ")]),e._v(" "),a("a-button",{key:"submit",attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e._v("\n      修改\n    ")])],1),e._v(" "),a("a-form",{attrs:{form:e.form,layout:"vertical"}},[a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"类型"}},"a-form-item",e.formItemLayout,!1),[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请输入类型!"}]}],expression:"[\n            'type',\n            { rules: [{ required: true, message: '请输入类型!' }] }\n            ]"}]},[a("a-select-option",{attrs:{value:"1"}},[e._v("投诉")]),e._v(" "),a("a-select-option",{attrs:{value:"2"}},[e._v("建议")])],1)],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",e._b({attrs:{label:"内容"}},"a-form-item",e.formItemLayout,!1),[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{rules:[{required:!0,message:"请输入内容!"}]}],expression:"[\n          'content',\n          { rules: [{ required: true, message: '请输入内容!' }] }\n          ]"}],attrs:{"auto-size":{minRows:3,maxRows:5}}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",e._b({attrs:{label:"照片"}},"a-form-item",e.formItemLayout,!1),[a("a-upload",{attrs:{name:"avatar",action:"http://backend.my.org/file/fileUpload/","list-type":"picture-card","file-list":e.fileList},on:{preview:e.handlePreview,change:e.picHandleChange}},[e.fileList.length<8?a("div",[a("a-icon",{attrs:{type:"plus"}}),e._v(" "),a("div",{staticClass:"ant-upload-text"},[e._v("\n                Upload\n              ")])],1):e._e()]),e._v(" "),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)],1),e._v(" "),a("a-col"),e._v(" "),a("a-col",{attrs:{span:6}},[a("a-form-item",e._b({attrs:{label:"指定工作人员"}},"a-form-item",e.formItemLayout,!1),[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["worker"],expression:"[\n            'worker',\n            ]"}]},e._l(e.workerList,function(t,r){return a("a-select-option",{key:r,attrs:{value:t.id}},[e._v(e._s(t.name))])}))],1)],1),e._v(" "),a("a-col",{attrs:{span:6}},[a("a-form-item",e._b({attrs:{label:"完成情况"}},"a-form-item",e.formItemLayout,!1),[a("a-radio-group",{attrs:{"button-style":"solid"},model:{value:e.readStatus,callback:function(t){e.readStatus=t},expression:"readStatus"}},[a("a-radio-button",{attrs:{value:"1"}},[e._v("\n              未完成\n            ")]),e._v(" "),a("a-radio-button",{attrs:{value:"2"}},[e._v("\n              已完成\n            ")])],1)],1)],1)],1)],1)],2)},staticRenderFns:[]},_=a("VU/8")(b,g,!1,function(e){a("Pvms")},"data-v-dd334e22",null);t.default=_.exports}});