webpackJsonp([3,42,43,62],{GTv0:function(e,t,a){"use strict";function i(e){return new u.a(function(t,a){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){return t(i.result)},i.onerror=function(e){return a(e)}})}Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),s=a("exGp"),o=a.n(s),l=a("//Fk"),u=a.n(l),d=a("PJh5");a.n(d).a.locale("zh-cn");var c={name:"BuildingView",props:{buildingShow:{type:Boolean,default:!1},buildingData:{type:Object}},computed:{show:{get:function(){return this.buildingShow},set:function(){}}},data:function(){return{loading:!1,fileList:[],previewVisible:!1,previewImage:"",replyList:[]}},watch:{buildingShow:function(e){e&&null!==this.buildingData.images&&""!==this.buildingData.images&&this.imagesInit(this.buildingData.images)}},methods:{handleCancel:function(){this.previewVisible=!1},handlePreview:function(e){var t=this;return o()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,i(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}},a,t)}))()},picHandleChange:function(e){var t=e.fileList;this.fileList=t},imagesInit:function(e){if(null!==e&&""!==e){var t=[];e.split(",").forEach(function(e,a){t.push({uid:a,name:e,status:"done",url:"http://backend.my.org/imagesWeb/"+e})}),this.fileList=t}},onClose:function(){this.$emit("close")}}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"楼宇信息",width:800},on:{cancel:e.onClose},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("template",{slot:"footer"},[a("a-button",{key:"back",attrs:{type:"danger"},on:{click:e.onClose}},[e._v("\n      关闭\n    ")])],1),e._v(" "),null!==e.buildingData?a("div",{staticStyle:{"font-size":"13px"}},[a("a-row",{staticStyle:{"padding-left":"24px","padding-right":"24px"}},[a("a-col",{staticStyle:{"margin-bottom":"15px"}},[a("span",{staticStyle:{"font-size":"15px","font-weight":"650",color:"#000c17"}},[e._v("基础信息")])]),e._v(" "),a("a-col",{attrs:{span:8}},[a("b",[e._v("楼宇名称：")]),e._v("\n        "+e._s(e.buildingData.name)+"\n      ")]),e._v(" "),a("a-col",{attrs:{span:8}},[a("b",[e._v("楼宇地址：")]),e._v(" "),a("a-tooltip",[a("template",{slot:"title"},[e._v("\n            "+e._s(e.buildingData.address)+"\n          ")]),e._v("\n          "+e._s(e.buildingData.address.slice(0,10))+" ...\n        ")],2)],1),e._v(" "),a("a-col",{attrs:{span:8}},[a("b",[e._v("所属街道：")]),e._v("\n        "+e._s(e.buildingData.street)+"\n      ")])],1),e._v(" "),a("br"),e._v(" "),a("a-row",{staticStyle:{"padding-left":"24px","padding-right":"24px"}},[a("a-col",{attrs:{span:8}},[a("b",[e._v("所属社区：")]),e._v("\n        "+e._s(e.buildingData.community)+"\n      ")]),e._v(" "),a("a-col",{attrs:{span:8}},[a("b",[e._v("总使用面积：")]),e._v("\n        "+e._s(e.buildingData.usageArea)+" ㎡\n      ")]),e._v(" "),a("a-col",{attrs:{span:8}},[a("b",[e._v("总建筑面积：")]),e._v("\n        "+e._s(e.buildingData.surfaceArea)+" ㎡\n      ")])],1),e._v(" "),a("br"),e._v(" "),a("a-row",{staticStyle:{"padding-left":"24px","padding-right":"24px"}},[a("a-col",{attrs:{span:8}},[a("b",[e._v("房屋性质：")]),e._v(" "),1==e.buildingData.type?a("span",[e._v("平房")]):e._e(),e._v(" "),2==e.buildingData.type?a("span",[e._v("多层楼")]):e._e(),e._v(" "),3==e.buildingData.type?a("span",[e._v("高层楼")]):e._e(),e._v(" "),4==e.buildingData.type?a("span",[e._v("简易楼")]):e._e()]),e._v(" "),a("a-col",{attrs:{span:8}},[a("b",[e._v("间数：")]),e._v("\n        "+e._s(e.buildingData.rooms)+" 间\n      ")]),e._v(" "),a("a-col",{attrs:{span:8}},[a("b",[e._v("单元数：")]),e._v("\n        "+e._s(e.buildingData.units)+" 间\n      ")])],1),e._v(" "),a("br"),e._v(" "),a("a-row",{staticStyle:{"padding-left":"24px","padding-right":"24px"}},[a("a-col",{attrs:{span:8}},[a("b",[e._v("楼层：")]),e._v("\n        "+e._s(e.buildingData.layers)+" 层\n      ")]),e._v(" "),a("a-col",{attrs:{span:8}},[a("b",[e._v("创建时间：")]),e._v("\n        "+e._s(e.buildingData.createDate)+"\n      ")])],1),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("a-row",{staticStyle:{"padding-left":"24px","padding-right":"24px"}},[a("br"),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-upload",{attrs:{name:"avatar",action:"http://backend.my.org/file/fileUpload/","list-type":"picture-card",disabled:"","file-list":e.fileList},on:{preview:e.handlePreview,change:e.picHandleChange}}),e._v(" "),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)],1),e._v(" "),a("br"),e._v(" "),a("br")],1):e._e()],2)},staticRenderFns:[]},f=a("VU/8")(c,m,!1,function(e){a("Rw35")},"data-v-7be64194",null);t.default=f.exports},OnaY:function(e,t,a){"use strict";function i(e){return new v.a(function(t,a){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){return t(i.result)},i.onerror=function(e){return a(e)}})}Object.defineProperty(t,"__esModule",{value:!0});var n=a("fZjL"),r=a.n(n),s=a("+6Bu"),o=a.n(s),l=a("Xxa5"),u=a.n(l),d=a("exGp"),c=a.n(d),m=a("Dd8w"),f=a.n(m),p=a("//Fk"),v=a.n(p),g=a("NYxO"),h={labelCol:{span:24},wrapperCol:{span:24}},b={name:"BuildingEdit",props:{buildingEditVisiable:{default:!1}},computed:f()({},Object(g.c)({currentUser:function(e){return e.account.user}}),{show:{get:function(){return this.buildingEditVisiable},set:function(){}}}),data:function(){return{rowId:null,formItemLayout:h,form:this.$form.createForm(this),loading:!1,fileList:[],previewVisible:!1,previewImage:""}},methods:{handleCancel:function(){this.previewVisible=!1},handlePreview:function(e){var t=this;return c()(u.a.mark(function a(){return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,i(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}},a,t)}))()},picHandleChange:function(e){var t=e.fileList;this.fileList=t},imagesInit:function(e){if(null!==e&&""!==e){var t=[];e.split(",").forEach(function(e,a){t.push({uid:a,name:e,status:"done",url:"http://backend.my.org/imagesWeb/"+e})}),this.fileList=t}},setFormValues:function(e){var t=this,a=o()(e,[]);this.rowId=a.id;var i=["name","address","street","community","usageArea","surfaceArea","type","rooms","units","layers"],n={};r()(a).forEach(function(e){"images"===e&&(t.fileList=[],t.imagesInit(a.images)),"type"===e&&(t.fileList=[],a[e]=a[e].toString()),-1!==i.indexOf(e)&&(t.form.getFieldDecorator(e),n[e]=a[e])}),this.form.setFieldsValue(n)},reset:function(){this.loading=!1,this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},handleSubmit:function(){var e=this,t=[];this.fileList.forEach(function(e){t.push(e.name)}),this.form.validateFields(function(a,i){i.id=e.rowId,i.images=t.length>0?t.join(","):null,a||(e.loading=!0,e.$put("/cos/building-info",f()({},i)).then(function(t){e.reset(),e.$emit("success")}).catch(function(){e.loading=!1}))})}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"修改楼宇",width:800},on:{cancel:e.onClose},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:e.onClose}},[e._v("\n      取消\n    ")]),e._v(" "),a("a-button",{key:"submit",attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e._v("\n      修改\n    ")])],1),e._v(" "),a("a-form",{attrs:{form:e.form,layout:"vertical"}},[a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"楼宇名称"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n          'name',\n          { rules: [{ required: true, message: '请输入名称!' }] }\n          ]"}]})],1)],1),e._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"楼宇地址"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{rules:[{required:!0,message:"请输入楼宇地址!"}]}],expression:"[\n          'address',\n          { rules: [{ required: true, message: '请输入楼宇地址!' }] }\n          ]"}]})],1)],1),e._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"所属街道"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["street",{rules:[{required:!0,message:"请输入所属街道!"}]}],expression:"[\n          'street',\n          { rules: [{ required: true, message: '请输入所属街道!' }] }\n          ]"}]})],1)],1),e._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"所属社区"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["community",{rules:[{required:!0,message:"请输入所属社区!"}]}],expression:"[\n          'community',\n          { rules: [{ required: true, message: '请输入所属社区!' }] }\n          ]"}]})],1)],1),e._v(" "),a("a-col",{attrs:{span:6}},[a("a-form-item",e._b({attrs:{label:"总使用面积"}},"a-form-item",e.formItemLayout,!1),[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["usageArea",{rules:[{required:!0,message:"请输入总使用面积!"}]}],expression:"[\n          'usageArea',\n          { rules: [{ required: true, message: '请输入总使用面积!' }] }\n          ]"}],staticStyle:{width:"100%"},attrs:{min:1}})],1)],1),e._v(" "),a("a-col",{attrs:{span:6}},[a("a-form-item",e._b({attrs:{label:"总建筑面积"}},"a-form-item",e.formItemLayout,!1),[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["surfaceArea",{rules:[{required:!0,message:"请输入总建筑面积!"}]}],expression:"[\n          'surfaceArea',\n          { rules: [{ required: true, message: '请输入总建筑面积!' }] }\n          ]"}],staticStyle:{width:"100%"},attrs:{min:1}})],1)],1),e._v(" "),a("a-col",{attrs:{span:6}},[a("a-form-item",e._b({attrs:{label:"间数"}},"a-form-item",e.formItemLayout,!1),[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["rooms",{rules:[{required:!0,message:"请输入间数!"}]}],expression:"[\n          'rooms',\n          { rules: [{ required: true, message: '请输入间数!' }] }\n          ]"}],staticStyle:{width:"100%"},attrs:{min:1}})],1)],1),e._v(" "),a("a-col",{attrs:{span:6}},[a("a-form-item",e._b({attrs:{label:"单元数"}},"a-form-item",e.formItemLayout,!1),[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["units",{rules:[{required:!0,message:"请输入单元数!"}]}],expression:"[\n          'units',\n          { rules: [{ required: true, message: '请输入单元数!' }] }\n          ]"}],staticStyle:{width:"100%"},attrs:{min:1}})],1)],1),e._v(" "),a("a-col",{attrs:{span:6}},[a("a-form-item",e._b({attrs:{label:"层数"}},"a-form-item",e.formItemLayout,!1),[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["layers",{rules:[{required:!0,message:"请输入层数!"}]}],expression:"[\n          'layers',\n          { rules: [{ required: true, message: '请输入层数!' }] }\n          ]"}],staticStyle:{width:"100%"},attrs:{min:1}})],1)],1),e._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"类型"}},"a-form-item",e.formItemLayout,!1),[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请输入层数!"}]}],expression:"[\n          'type',\n          { rules: [{ required: true, message: '请输入层数!' }] }\n          ]"}]},[a("a-select-option",{attrs:{value:"1"}},[e._v("平房")]),e._v(" "),a("a-select-option",{attrs:{value:"2"}},[e._v("多层楼")]),e._v(" "),a("a-select-option",{attrs:{value:"3"}},[e._v("高层楼")]),e._v(" "),a("a-select-option",{attrs:{value:"4"}},[e._v("简易楼")])],1)],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",e._b({attrs:{label:"图册"}},"a-form-item",e.formItemLayout,!1),[a("a-upload",{attrs:{name:"avatar",action:"http://backend.my.org/file/fileUpload/","list-type":"picture-card","file-list":e.fileList},on:{preview:e.handlePreview,change:e.picHandleChange}},[e.fileList.length<8?a("div",[a("a-icon",{attrs:{type:"plus"}}),e._v(" "),a("div",{staticClass:"ant-upload-text"},[e._v("\n                Upload\n              ")])],1):e._e()]),e._v(" "),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)],1)],1)],1)],2)},staticRenderFns:[]},w=a("VU/8")(b,_,!1,function(e){a("ts31")},"data-v-8a36ddfc",null);t.default=w.exports},Rw35:function(e,t){},a0dZ:function(e,t,a){"use strict";function i(e){return new c.a(function(t,a){var i=new FileReader;i.readAsDataURL(e),i.onload=function(){return t(i.result)},i.onerror=function(e){return a(e)}})}Object.defineProperty(t,"__esModule",{value:!0});var n=a("Xxa5"),r=a.n(n),s=a("exGp"),o=a.n(s),l=a("Dd8w"),u=a.n(l),d=a("//Fk"),c=a.n(d),m=a("NYxO"),f={labelCol:{span:24},wrapperCol:{span:24}},p={name:"BuildingAdd",props:{buildingAddVisiable:{default:!1}},computed:u()({},Object(m.c)({currentUser:function(e){return e.account.user}}),{show:{get:function(){return this.buildingAddVisiable},set:function(){}}}),data:function(){return{formItemLayout:f,form:this.$form.createForm(this),loading:!1,fileList:[],previewVisible:!1,previewImage:""}},methods:{handleCancel:function(){this.previewVisible=!1},handlePreview:function(e){var t=this;return o()(r.a.mark(function a(){return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e.url||e.preview){a.next=4;break}return a.next=3,i(e.originFileObj);case 3:e.preview=a.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return a.stop()}},a,t)}))()},picHandleChange:function(e){var t=e.fileList;this.fileList=t},reset:function(){this.loading=!1,this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},handleSubmit:function(){var e=this,t=[];this.fileList.forEach(function(e){t.push(e.response)}),this.form.validateFields(function(a,i){i.images=t.length>0?t.join(","):null,a||(i.publisher=e.currentUser.userId,e.loading=!0,e.$post("/cos/building-info",u()({},i)).then(function(t){e.reset(),e.$emit("success")}).catch(function(){e.loading=!1}))})}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"新增楼宇",width:800},on:{cancel:e.onClose},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:e.onClose}},[e._v("\n      取消\n    ")]),e._v(" "),a("a-button",{key:"submit",attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e._v("\n      提交\n    ")])],1),e._v(" "),a("a-form",{attrs:{form:e.form,layout:"vertical"}},[a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"楼宇名称"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n          'name',\n          { rules: [{ required: true, message: '请输入名称!' }] }\n          ]"}]})],1)],1),e._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"楼宇地址"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{rules:[{required:!0,message:"请输入楼宇地址!"}]}],expression:"[\n          'address',\n          { rules: [{ required: true, message: '请输入楼宇地址!' }] }\n          ]"}]})],1)],1),e._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"所属街道"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["street",{rules:[{required:!0,message:"请输入所属街道!"}]}],expression:"[\n          'street',\n          { rules: [{ required: true, message: '请输入所属街道!' }] }\n          ]"}]})],1)],1),e._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"所属社区"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["community",{rules:[{required:!0,message:"请输入所属社区!"}]}],expression:"[\n          'community',\n          { rules: [{ required: true, message: '请输入所属社区!' }] }\n          ]"}]})],1)],1),e._v(" "),a("a-col",{attrs:{span:6}},[a("a-form-item",e._b({attrs:{label:"总使用面积"}},"a-form-item",e.formItemLayout,!1),[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["usageArea",{rules:[{required:!0,message:"请输入总使用面积!"}]}],expression:"[\n          'usageArea',\n          { rules: [{ required: true, message: '请输入总使用面积!' }] }\n          ]"}],staticStyle:{width:"100%"},attrs:{min:1}})],1)],1),e._v(" "),a("a-col",{attrs:{span:6}},[a("a-form-item",e._b({attrs:{label:"总建筑面积"}},"a-form-item",e.formItemLayout,!1),[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["surfaceArea",{rules:[{required:!0,message:"请输入总建筑面积!"}]}],expression:"[\n          'surfaceArea',\n          { rules: [{ required: true, message: '请输入总建筑面积!' }] }\n          ]"}],staticStyle:{width:"100%"},attrs:{min:1}})],1)],1),e._v(" "),a("a-col",{attrs:{span:6}},[a("a-form-item",e._b({attrs:{label:"间数"}},"a-form-item",e.formItemLayout,!1),[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["rooms",{rules:[{required:!0,message:"请输入间数!"}]}],expression:"[\n          'rooms',\n          { rules: [{ required: true, message: '请输入间数!' }] }\n          ]"}],staticStyle:{width:"100%"},attrs:{min:1}})],1)],1),e._v(" "),a("a-col",{attrs:{span:6}},[a("a-form-item",e._b({attrs:{label:"单元数"}},"a-form-item",e.formItemLayout,!1),[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["units",{rules:[{required:!0,message:"请输入单元数!"}]}],expression:"[\n          'units',\n          { rules: [{ required: true, message: '请输入单元数!' }] }\n          ]"}],staticStyle:{width:"100%"},attrs:{min:1}})],1)],1),e._v(" "),a("a-col",{attrs:{span:6}},[a("a-form-item",e._b({attrs:{label:"层数"}},"a-form-item",e.formItemLayout,!1),[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["layers",{rules:[{required:!0,message:"请输入层数!"}]}],expression:"[\n          'layers',\n          { rules: [{ required: true, message: '请输入层数!' }] }\n          ]"}],staticStyle:{width:"100%"},attrs:{min:1}})],1)],1),e._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"类型"}},"a-form-item",e.formItemLayout,!1),[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{rules:[{required:!0,message:"请输入层数!"}]}],expression:"[\n          'type',\n          { rules: [{ required: true, message: '请输入层数!' }] }\n          ]"}]},[a("a-select-option",{attrs:{value:"1"}},[e._v("平房")]),e._v(" "),a("a-select-option",{attrs:{value:"2"}},[e._v("多层楼")]),e._v(" "),a("a-select-option",{attrs:{value:"3"}},[e._v("高层楼")]),e._v(" "),a("a-select-option",{attrs:{value:"4"}},[e._v("简易楼")])],1)],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",e._b({attrs:{label:"图册"}},"a-form-item",e.formItemLayout,!1),[a("a-upload",{attrs:{name:"avatar",action:"http://backend.my.org/file/fileUpload/","list-type":"picture-card","file-list":e.fileList},on:{preview:e.handlePreview,change:e.picHandleChange}},[e.fileList.length<8?a("div",[a("a-icon",{attrs:{type:"plus"}}),e._v(" "),a("div",{staticClass:"ant-upload-text"},[e._v("\n                Upload\n              ")])],1):e._e()]),e._v(" "),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)],1)],1)],1)],2)},staticRenderFns:[]},g=a("VU/8")(p,v,!1,function(e){a("tmc2")},"data-v-4ab63ad7",null);t.default=g.exports},epJJ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),r=a("JpjP"),s=a("a0dZ"),o=a("OnaY"),l=a("GTv0"),u=a("NYxO"),d=a("PJh5");a.n(d).a.locale("zh-cn");var c={name:"Building",components:{BuildingAdd:s.default,BuildingEdit:o.default,BuildingView:l.default,RangeDate:r.a},data:function(){return{advanced:!1,buildingAdd:{visiable:!1},buildingEdit:{visiable:!1},buildingView:{visiable:!1,data:null},queryParams:{},filteredInfo:null,sortedInfo:null,paginationInfo:null,dataSource:[],selectedRowKeys:[],loading:!1,pagination:{pageSizeOptions:["10","20","30","40","100"],defaultCurrent:1,defaultPageSize:10,showQuickJumper:!0,showSizeChanger:!0,showTotal:function(e,t){return"显示 "+t[0]+" ~ "+t[1]+" 条记录，共 "+e+" 条记录"}},userList:[]}},computed:n()({},Object(u.c)({currentUser:function(e){return e.account.user}}),{columns:function(){var e=this.$createElement;return[{title:"楼宇名称",dataIndex:"name"},{title:"楼宇地址",dataIndex:"address",scopedSlots:{customRender:"addressShow"}},{title:"所属街道",dataIndex:"street"},{title:"所属社区",dataIndex:"community"},{title:"总使用面积",dataIndex:"usageArea",customRender:function(e,t,a){return null!==e?e+"㎡":"- -"}},{title:"总建筑面积",dataIndex:"surfaceArea",customRender:function(e,t,a){return null!==e?e+"㎡":"- -"}},{title:"类型",dataIndex:"type",customRender:function(t,a,i){switch(t){case 1:return e("a-tag",["平房"]);case 2:return e("a-tag",["多层楼"]);case 3:return e("a-tag",["高层楼"]);case 4:return e("a-tag",["简易房"]);default:return"- -"}}},{title:"间数",dataIndex:"rooms",customRender:function(e,t,a){return null!==e?e+"间":"- -"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}]}}),mounted:function(){this.fetch()},methods:{view:function(e){this.buildingView.data=e,this.buildingView.visiable=!0},handleBuildingViewClose:function(){this.buildingView.visiable=!1},onSelectChange:function(e){this.selectedRowKeys=e},toggleAdvanced:function(){this.advanced=!this.advanced},add:function(){this.buildingAdd.visiable=!0},handleBuildingAddClose:function(){this.buildingAdd.visiable=!1},handleBuildingAddSuccess:function(){this.buildingAdd.visiable=!1,this.$message.success("新增楼宇成功"),this.search()},edit:function(e){this.$refs.buildingEdit.setFormValues(e),this.buildingEdit.visiable=!0},handleBuildingEditClose:function(){this.buildingEdit.visiable=!1},handleBuildingEditSuccess:function(){this.buildingEdit.visiable=!1,this.$message.success("修改楼宇成功"),this.search()},handleDeptChange:function(e){this.queryParams.deptId=e||""},batchDelete:function(){if(this.selectedRowKeys.length){var e=this;this.$confirm({title:"确定删除所选中的记录?",content:"当您点击确定按钮后，这些记录将会被彻底删除",centered:!0,onOk:function(){var t=e.selectedRowKeys.join(",");e.$delete("/cos/building-info/"+t).then(function(){e.$message.success("删除成功"),e.selectedRowKeys=[],e.search()})},onCancel:function(){e.selectedRowKeys=[]}})}else this.$message.warning("请选择需要删除的记录")},search:function(){var e=this.sortedInfo,t=this.filteredInfo,a=void 0,i=void 0;e&&(a=e.field,i=e.order),this.fetch(n()({sortField:a,sortOrder:i},this.queryParams,t))},reset:function(){this.selectedRowKeys=[],this.$refs.TableInfo.pagination.current=this.pagination.defaultCurrent,this.paginationInfo&&(this.paginationInfo.current=this.pagination.defaultCurrent,this.paginationInfo.pageSize=this.pagination.defaultPageSize),this.filteredInfo=null,this.sortedInfo=null,this.queryParams={},this.fetch()},handleTableChange:function(e,t,a){this.paginationInfo=e,this.filteredInfo=t,this.sortedInfo=a,this.fetch(n()({sortField:a.field,sortOrder:a.order},this.queryParams,t))},fetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,this.paginationInfo?(this.$refs.TableInfo.pagination.current=this.paginationInfo.current,this.$refs.TableInfo.pagination.pageSize=this.paginationInfo.pageSize,t.size=this.paginationInfo.pageSize,t.current=this.paginationInfo.current):(t.size=this.pagination.defaultPageSize,t.current=this.pagination.defaultCurrent),void 0===t.type&&delete t.type,this.$get("/cos/building-info/page",n()({},t)).then(function(t){var a=t.data.data,i=n()({},e.pagination);i.total=a.total,e.dataSource=a.records,e.pagination=i,e.loading=!1})}},watch:{}},m={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticClass:"card-area",attrs:{bordered:!1}},[a("div",{class:e.advanced?"search":null},[a("a-form",{attrs:{layout:"horizontal"}},[a("a-row",{attrs:{gutter:15}},[a("div",{class:e.advanced?null:"fold"},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"楼宇名称",labelCol:{span:5},wrapperCol:{span:17,offset:2}}},[a("a-input",{model:{value:e.queryParams.name,callback:function(t){e.$set(e.queryParams,"name",t)},expression:"queryParams.name"}})],1)],1),e._v(" "),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"楼宇地址",labelCol:{span:5},wrapperCol:{span:17,offset:2}}},[a("a-input",{model:{value:e.queryParams.address,callback:function(t){e.$set(e.queryParams,"address",t)},expression:"queryParams.address"}})],1)],1),e._v(" "),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"所属街道",labelCol:{span:5},wrapperCol:{span:17,offset:2}}},[a("a-input",{model:{value:e.queryParams.street,callback:function(t){e.$set(e.queryParams,"street",t)},expression:"queryParams.street"}})],1)],1),e._v(" "),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"房屋类型",labelCol:{span:5},wrapperCol:{span:17,offset:2}}},[a("a-select",{attrs:{allowClear:""},model:{value:e.queryParams.type,callback:function(t){e.$set(e.queryParams,"type",t)},expression:"queryParams.type"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("平房")]),e._v(" "),a("a-select-option",{attrs:{value:"2"}},[e._v("多层楼")]),e._v(" "),a("a-select-option",{attrs:{value:"3"}},[e._v("高层楼")]),e._v(" "),a("a-select-option",{attrs:{value:"4"}},[e._v("简易楼")])],1)],1)],1)],1),e._v(" "),a("span",{staticStyle:{float:"right","margin-top":"3px"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),e._v(" "),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.reset}},[e._v("重置")])],1)])],1)],1),e._v(" "),a("div",[a("div",{staticClass:"operator"},[a("a-button",{attrs:{type:"primary",ghost:""},on:{click:e.add}},[e._v("新增")]),e._v(" "),a("a-button",{on:{click:e.batchDelete}},[e._v("删除")])],1),e._v(" "),a("a-table",{ref:"TableInfo",attrs:{columns:e.columns,rowKey:function(e){return e.id},dataSource:e.dataSource,pagination:e.pagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},scroll:{x:900}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"titleShow",fn:function(t,i){return[[a("a-badge",{attrs:{status:"processing"}}),e._v(" "),a("a-tooltip",[a("template",{slot:"title"},[e._v("\n              "+e._s(i.title)+"\n            ")]),e._v("\n            "+e._s(i.title.slice(0,8))+" ...\n          ")],2)]]}},{key:"addressShow",fn:function(t,i){return[[a("a-tooltip",[a("template",{slot:"title"},[e._v("\n              "+e._s(i.address)+"\n            ")]),e._v("\n            "+e._s(i.address.slice(0,10))+" ...\n          ")],2)]]}},{key:"operation",fn:function(t,i){return[a("a-icon",{staticStyle:{"margin-right":"15px"},attrs:{type:"reconciliation",title:"查 看"},on:{click:function(t){e.view(i)}}}),e._v(" "),a("a-icon",{attrs:{type:"setting",theme:"twoTone",twoToneColor:"#4a9ff5",title:"修 改"},on:{click:function(t){e.edit(i)}}})]}}])})],1),e._v(" "),e.buildingAdd.visiable?a("building-add",{attrs:{buildingAddVisiable:e.buildingAdd.visiable},on:{close:e.handleBuildingAddClose,success:e.handleBuildingAddSuccess}}):e._e(),e._v(" "),a("building-edit",{ref:"buildingEdit",attrs:{buildingEditVisiable:e.buildingEdit.visiable},on:{close:e.handleBuildingEditClose,success:e.handleBuildingEditSuccess}}),e._v(" "),a("building-view",{attrs:{buildingShow:e.buildingView.visiable,buildingData:e.buildingView.data},on:{close:e.handleBuildingViewClose}})],1)},staticRenderFns:[]},f=a("VU/8")(c,m,!1,function(e){a("lUE0")},"data-v-61545dfe",null);t.default=f.exports},lUE0:function(e,t){},tmc2:function(e,t){},ts31:function(e,t){}});