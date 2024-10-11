webpackJsonp([92],{kOsN:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),l=a.n(n),r=a("fZjL"),i=a.n(r),s=a("+6Bu"),o=a.n(s),c=a("g4PW"),d=a.n(c),m={labelCol:{span:3},wrapperCol:{span:18}},u={name:"RoleEdit",props:{roleEditVisiable:{default:!1},roleInfoData:{require:!0}},data:function(){return{menuTreeKey:+new Date,loading:!1,formItemLayout:m,form:this.$form.createForm(this),menuSelectStatus:"",menuSelectHelp:"",role:{menuId:""},menuTreeData:[],allTreeKeys:[],checkedKeys:[],defaultCheckedKeys:[],expandedKeys:[],checkStrictly:!0}},methods:{reset:function(){this.menuTreeKey=+new Date,this.expandedKeys=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.menuSelectStatus=this.menuSelectHelp="",this.loading=!1,this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},expandAll:function(){this.expandedKeys=this.allTreeKeys},closeAll:function(){this.expandedKeys=[]},enableRelate:function(){this.checkStrictly=!1},disableRelate:function(){this.checkStrictly=!0},handleCheck:function(e){this.checkedKeys=e,(d()(e.checked,void 0)?e:e.checked).length?(this.menuSelectStatus="",this.menuSelectHelp=""):(this.menuSelectStatus="error",this.menuSelectHelp="请选择相应的权限")},handleExpand:function(e){this.expandedKeys=e},setFormValues:function(e){var t=this,a=o()(e,[]),n=["roleName","remark"];i()(a).forEach(function(e){if(-1!==n.indexOf(e)){t.form.getFieldDecorator(e);var l={};l[e]=a[e],t.form.setFieldsValue(l)}})},handleSubmit:function(){var e=this,t=d()(this.checkedKeys.checked,void 0)?this.checkedKeys:this.checkedKeys.checked;0===t.length?(this.menuSelectStatus="error",this.menuSelectHelp="请选择相应的权限"):this.form.validateFields(function(a,n){if(!a){e.loading=!0;var r=e.form.getFieldsValue();r.roleId=e.roleInfoData.roleId,r.menuId=t.join(","),e.$put("role",l()({},r)).then(function(t){e.reset(),e.$emit("success")}).catch(function(){e.loading=!1})}})}},watch:{roleEditVisiable:function(){var e=this;this.roleEditVisiable&&this.$get("menu").then(function(t){e.menuTreeData=t.data.rows.children,e.allTreeKeys=t.data.ids,e.$get("role/menu/"+e.roleInfoData.roleId).then(function(t){e.defaultCheckedKeys.splice(0,e.defaultCheckedKeys.length,t.data),e.checkedKeys=t.data,e.expandedKeys=t.data,e.menuTreeKey=+new Date})})}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:"修改角色",maskClosable:!1,width:"650",placement:"right",closable:!1,visible:e.roleEditVisiable},on:{close:e.onClose}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",e._b({attrs:{label:"角色名称"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleName"],expression:"['roleName']"}],attrs:{readOnly:""}})],1),e._v(" "),a("a-form-item",e._b({attrs:{label:"角色描述"}},"a-form-item",e.formItemLayout,!1),[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["remark",{rules:[{max:50,message:"长度不能超过50个字符"}]}],expression:"[\n        'remark',\n        {rules: [\n          { max: 50, message: '长度不能超过50个字符'}\n        ]}]"}],attrs:{rows:4}})],1),e._v(" "),a("a-form-item",e._b({staticStyle:{"margin-bottom":"2rem"},attrs:{label:"权限选择",validateStatus:e.menuSelectStatus,help:e.menuSelectHelp}},"a-form-item",e.formItemLayout,!1),[a("a-tree",{key:e.menuTreeKey,ref:"menuTree",attrs:{checkable:!0,checkStrictly:e.checkStrictly,defaultCheckedKeys:e.defaultCheckedKeys[0],expandedKeys:e.expandedKeys,treeData:e.menuTreeData},on:{check:e.handleCheck,expand:e.handleExpand}})],1)],1),e._v(" "),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.expandAll}},[e._v("展开所有")]),e._v(" "),a("a-menu-item",{key:"2",on:{click:e.closeAll}},[e._v("合并所有")]),e._v(" "),a("a-menu-item",{key:"3",on:{click:e.enableRelate}},[e._v("父子关联")]),e._v(" "),a("a-menu-item",{key:"4",on:{click:e.disableRelate}},[e._v("取消关联")])],1),e._v(" "),a("a-button",[e._v("\n        树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),e._v(" "),a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.onClose}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),e._v(" "),a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e._v("提交")])],1)],1)},staticRenderFns:[]},f=a("VU/8")(u,h,!1,null,null,null);t.default=f.exports}});