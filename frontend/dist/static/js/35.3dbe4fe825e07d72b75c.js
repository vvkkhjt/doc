webpackJsonp([35],{Jvwj:function(e,t,a){"use strict";function i(e){return new v.a(function(t,a){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){return t(i.result)},i.onerror=function(e){return a(e)}})}Object.defineProperty(t,"__esModule",{value:!0});var r=a("fZjL"),n=a.n(r),s=a("+6Bu"),o=a.n(s),l=a("Xxa5"),u=a.n(l),c=a("exGp"),m=a.n(c),f=a("Dd8w"),d=a.n(f),p=a("//Fk"),v=a.n(p),h=a("NYxO"),b={labelCol:{span:24},wrapperCol:{span:24}},w={name:"BulletinEdit",props:{bulletinEditVisiable:{default:!1}},computed:d()({},Object(h.c)({currentUser:function(e){return e.account.user}}),{show:{get:function(){return this.bulletinEditVisiable},set:function(){}}}),data:function(){return{rowId:null,formItemLayout:b,form:this.$form.createForm(this),loading:!1,fileList:[],previewVisible:!1,previewImage:""}},methods:{handleCancel:function(){this.previewVisible=!1},handlePreview:function(e){var t=this;return m()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,i(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}},a,t)}))()},picHandleChange:function(e){var t=e.fileList;this.fileList=t},imagesInit:function(e){if(null!==e&&""!==e){var t=[];e.split(",").forEach(function(e,a){t.push({uid:a,name:e,status:"done",url:"http://backend.my.org/imagesWeb/"+e})}),this.fileList=t}},setFormValues:function(e){var t=this,a=o()(e,[]);this.rowId=a.id;var i=["title","content","publisher"],r={};n()(a).forEach(function(e){"images"===e&&(t.fileList=[],t.imagesInit(a.images)),-1!==i.indexOf(e)&&(t.form.getFieldDecorator(e),r[e]=a[e])}),this.form.setFieldsValue(r)},reset:function(){this.loading=!1,this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},handleSubmit:function(){var e=this,t=[];this.fileList.forEach(function(e){void 0!==e.response?t.push(e.response):t.push(e.name)}),this.form.validateFields(function(a,i){i.id=e.rowId,i.images=t.length>0?t.join(","):null,a||(e.loading=!0,e.$put("/cos/bulletin-info",d()({},i)).then(function(t){e.reset(),e.$emit("success")}).catch(function(){e.loading=!1}))})}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"修改公告",width:800},on:{cancel:e.onClose},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:e.onClose}},[e._v("\n      取消\n    ")]),e._v(" "),a("a-button",{key:"submit",attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e._v("\n      修改\n    ")])],1),e._v(" "),a("a-form",{attrs:{form:e.form,layout:"vertical"}},[a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"公告标题"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n          'title',\n          { rules: [{ required: true, message: '请输入名称!' }] }\n          ]"}]})],1)],1),e._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"上传人"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["publisher",{rules:[{required:!0,message:"请输入上传人!"}]}],expression:"[\n          'publisher',\n          { rules: [{ required: true, message: '请输入上传人!' }] }\n          ]"}]})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",e._b({attrs:{label:"公告内容"}},"a-form-item",e.formItemLayout,!1),[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n          'content',\n           { rules: [{ required: true, message: '请输入名称!' }] }\n          ]"}],attrs:{rows:6}})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",e._b({attrs:{label:"图册"}},"a-form-item",e.formItemLayout,!1),[a("a-upload",{attrs:{name:"avatar",action:"http://backend.my.org/file/fileUpload/","list-type":"picture-card","file-list":e.fileList},on:{preview:e.handlePreview,change:e.picHandleChange}},[e.fileList.length<8?a("div",[a("a-icon",{attrs:{type:"plus"}}),e._v(" "),a("div",{staticClass:"ant-upload-text"},[e._v("\n                Upload\n              ")])],1):e._e()]),e._v(" "),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)],1)],1)],1)],2)},staticRenderFns:[]},_=a("VU/8")(w,g,!1,function(e){a("lOCS")},"data-v-aaf0be82",null);t.default=_.exports},lOCS:function(e,t){}});