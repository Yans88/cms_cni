(this.webpackJsonpadmin_cni=this.webpackJsonpadmin_cni||[]).push([[3],{761:function(e,t,a){"use strict";var s=a(11),i=a(18),n=a(20),c=a.n(n),r=a(2),o=a.n(r),l=a(23),d=a(118),h=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],b=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.active,r=e.children,b=e.className,u=e.as,j=void 0===u?"li":u,m=e.linkAs,p=void 0===m?d.a:m,g=e.linkProps,O=e.href,_=e.title,x=e.target,f=Object(i.a)(e,h),v=Object(l.a)(a,"breadcrumb-item");return o.a.createElement(j,Object(s.a)({ref:t},f,{className:c()(v,b,{active:n}),"aria-current":n?"page":void 0}),n?r:o.a.createElement(p,Object(s.a)({},g,{href:O,title:_,target:x}),r))}));b.displayName="BreadcrumbItem",b.defaultProps={active:!1,linkProps:{}};var u=b,j=["bsPrefix","className","listProps","children","label","as"],m=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.listProps,d=e.children,h=e.label,b=e.as,u=void 0===b?"nav":b,m=Object(i.a)(e,j),p=Object(l.a)(a,"breadcrumb");return o.a.createElement(u,Object(s.a)({"aria-label":h,className:n,ref:t},m),o.a.createElement("ol",Object(s.a)({},r,{className:c()(p,null==r?void 0:r.className)}),d))}));m.displayName="Breadcrumb",m.defaultProps={label:"breadcrumb",listProps:{}},m.Item=u;t.a=m},762:function(e,t,a){"use strict";a.r(t);var s=a(19),i=a(4),n=a.n(i),c=a(5),r=a(3),o=a(9),l=a(10),d=a(22),h=a(15),b=a(16),u=a(2),j=a(755),m=a(761),p=a(179),g=a(14),O=a(82),_=a(27),x=a.n(_),f=a(28),v=a(30),y=a(1),S=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).getData=function(){s.setState({loadTbl:!0}),O.a.postData(s.state.queryString,"GET_CITY").then((function(e){setTimeout((function(){"00"===e.data.err_code&&s.setState(Object(r.a)(Object(r.a)({},s.state),{},{dtRes:e.data.data,totalData:e.data.total_data,provinsi_name:e.data.provinsi})),"04"===e.data.err_code&&s.setState(Object(r.a)(Object(r.a)({},s.state),{},{dtRes:[],totalData:0,provinsi_name:e.data.provinsi})),s.setState({loadTbl:!1})}),400)})).catch((function(e){console.log(e)}))},s.handleClose=function(){s.setState({show:!1,deleteForm:!1})},s.closeSwal=function(){s.setState(Object(r.a)(Object(r.a)({},s.state),{},{deleteForm:!1,showSwalSuccess:!1,successMsg:""})),s.getData()},s.discardChanges=function(){s.setState(Object(r.a)(Object(r.a)({},s.state),{},{show:!0,isLoading:!1,errMsg:{},selected:s.iniSelected,actionForm:"ADD_CITY"}))},s.editRecord=function(e){s.setState(Object(r.a)(Object(r.a)({},s.state),{},{show:!0,isLoading:!1,errMsg:{},actionForm:"ADD_CITY",selected:Object(r.a)({},e)}))},s.tableChangeHandler=function(e){var t=s.state.queryString;Object.keys(e).map((function(a){return"sort_order"===a&&e[a]&&(t.sort_order=e[a].order,t.sort_column=e[a].column),"page_number"===a&&(t.page_number=e[a]),"page_size"===a&&(t.per_page=e[a]),"filter_value"===a&&(t.keyword=e[a]),!0})),s.getData()},s.deleteRecord=function(e){s.setState(Object(r.a)(Object(r.a)({},s.state),{},{deleteForm:!0,errMsg:{id_city:""},actionForm:"DEL_CITY",selected:Object(r.a)(Object(r.a)({},e),{},{id_operator:s.props.user.id_operator})}))},s.ListKec=function(){var e=Object(c.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,sessionStorage.setItem("idCityCNI",t.id_city);case 2:s.props.history.push("/kecamatan");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.iniSelected={id_city:"",city_name:"",kode_jne:"",kode_lp:"",id_operator:"",id_city_cni:"",id_provinsi:sessionStorage.getItem("idProvCNI")},s.state={dtRes:[],totalData:0,show:!1,isLoading:!1,queryString:{page_number:1,per_page:10,sort_order:"ASC",sort_column:"city_name",keyword:"",id_provinsi:sessionStorage.getItem("idProvCNI")},selected:s.iniSelected,errMsg:s.iniSelected,provinsi_name:"",actionForm:"",showSwalSuccess:!1,successMsg:"",loadTbl:!0,deleteForm:!1},s.handleChange=s.handleChange.bind(Object(d.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(d.a)(s)),s.handleSave=s.handleSave.bind(Object(d.a)(s)),s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){sessionStorage.removeItem("idCityCNI"),this.getData(),this.setState({id_operator:this.props.user.id_operator})}},{key:"handleChange",value:function(e){var t,a=e.target,i=a.name,n=a.value;this.setState({selected:Object(r.a)(Object(r.a)({},this.state.selected),{},(t={},Object(s.a)(t,i,n),Object(s.a)(t,"id_operator",this.props.user.id_operator),Object(s.a)(t,"id_provinsi",sessionStorage.getItem("idProvCNI")),t))})}},{key:"handleSubmit",value:function(){var e=this.state.errMsg;this.setState(Object(r.a)(Object(r.a)({},this.state),{},{isLoading:!0})),e.city_name=this.state.selected.city_name?"":"Kab/Kota required",e.kode_jne=this.state.selected.kode_jne?"":"Kode JNE required",e.kode_lp=this.state.selected.kode_lp?"":"Kode Lion Parcel required",this.state.selected.id_operator||this.setState({selected:Object(r.a)(Object(r.a)({},this.state.selected),{},{id_operator:this.props.user.id_operator})}),this.setState({errors:e,isLoading:!1}),this.handleSave()}},{key:"validateForm",value:function(e){var t=!0;return Object.values(e).forEach((function(e){return e.length>0&&(t=!1)})),t}},{key:"handleSave",value:function(){var e=Object(c.a)(n.a.mark((function e(){var t,a,s=this;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.validateForm(this.state.errMsg)){e.next=10;break}return t="",a="","ADD_CITY"===this.state.actionForm&&(t=Object(y.jsx)("div",{dangerouslySetInnerHTML:{__html:'<div style="font-size:20px; text-align:center;"><strong style="font-size:24px;">Success</strong>, Data berhasil disimpan</div>'}})),"DEL_CITY"===this.state.actionForm&&(t=Object(y.jsx)("div",{dangerouslySetInnerHTML:{__html:'<div style="font-size:20px; text-align:center;"><strong>Success</strong>, Data berhasil dihapus</div>'}})),console.log(this.state.selected),e.next=8,O.a.postData(this.state.selected,this.state.actionForm).then((function(e){a=e.data.err_code,s.setState(Object(r.a)(Object(r.a)({},s.state),{},{isLoading:!1})),"00"===a&&s.setState(Object(r.a)(Object(r.a)({},s.state),{},{show:!1,deleteForm:!1,showSwalSuccess:!0,successMsg:t}))})).catch((function(e){s.setState(Object(r.a)(Object(r.a)({},s.state),{},{deleteForm:!1,showSwalSuccess:!0,successMsg:e}))}));case 8:e.next=11;break;case 10:console.error("Invalid Form");case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this,a=[{key:"no",text:"No.",width:20,align:"center",sortable:!1,cell:function(e,a){return Object(y.jsx)("div",{style:{textAlign:"center"},children:(t.state.queryString.page_number-1)*t.state.queryString.per_page+a+1+"."})},row:0},{key:"city_name",text:"Kab/Kota",align:"center",sortable:!0},{key:"kode_jne",text:"Kode JNE",align:"center",sortable:!0},{key:"kode_lp",text:"Kode Lion Parcel",align:"center",sortable:!0},{key:"id_city_cni",text:"ID Kota/Kab CNI",align:"center",width:120,sortable:!0},{key:"action",text:"Action",width:240,sortable:!1,align:"center",cell:function(e){return Object(y.jsx)("div",{style:{textAlign:"center"},children:Object(y.jsxs)(u.Fragment,{children:[Object(y.jsxs)("button",{className:"btn btn-info btn-xs",onClick:function(a){return t.ListKec(e)},style:{marginRight:"5px"},children:[Object(y.jsx)("i",{className:"fa fa-list"})," List Kecamatan"]}),Object(y.jsxs)("button",{className:"btn btn-xs btn-success",onClick:function(){return t.editRecord(e)},style:{marginRight:"5px"},children:[Object(y.jsx)("i",{className:"fa fa-edit"})," Edit"]}),Object(y.jsxs)("button",{onClick:function(){return t.deleteRecord(e)},className:"btn btn-danger btn-xs",children:[Object(y.jsx)("i",{className:"fa fa-trash"})," Delete"]})]})})}}],s=Object(y.jsxs)(j.a,{id:"myForm",children:[Object(y.jsxs)(j.a.Group,{controlId:"city_name",children:[Object(y.jsx)(j.a.Label,{children:"Kab/Kota"}),this.state.errMsg.city_name?Object(y.jsx)("span",{className:"float-right text-error badge badge-danger",children:this.state.errMsg.city_name}):null,Object(y.jsx)(j.a.Control,{value:this.state.selected.city_name,name:"city_name",size:"sm",type:"text",placeholder:"Kota/Kab",onChange:this.handleChange,autoComplete:"off"})]}),Object(y.jsxs)(j.a.Group,{controlId:"kode_jne",children:[Object(y.jsx)(j.a.Label,{children:"Kode JNE"}),this.state.errMsg.kode_jne?Object(y.jsx)("span",{className:"float-right text-error badge badge-danger",children:this.state.errMsg.kode_jne}):null,Object(y.jsx)(j.a.Control,{value:this.state.selected.kode_jne,name:"kode_jne",size:"sm",type:"text",placeholder:"Kode JNE",onChange:this.handleChange,autoComplete:"off"})]}),Object(y.jsxs)(j.a.Group,{controlId:"kode_lp",children:[Object(y.jsx)(j.a.Label,{children:"Kode Lion Parcel"}),this.state.errMsg.kode_lp?Object(y.jsx)("span",{className:"float-right text-error badge badge-danger",children:this.state.errMsg.kode_lp}):null,Object(y.jsx)(j.a.Control,{name:"kode_lp",value:this.state.selected.kode_lp,size:"sm",type:"text",placeholder:"Kode Lion Parcel",onChange:this.handleChange,autoComplete:"off"})]}),Object(y.jsxs)(j.a.Group,{controlId:"id_city_cni",children:[Object(y.jsx)(j.a.Label,{children:"ID City CNI"}),Object(y.jsx)(j.a.Control,{name:"id_city_cni",value:this.state.selected.id_city_cni,size:"sm",type:"text",placeholder:"ID City CNI",onChange:this.handleChange,autoComplete:"off"}),Object(y.jsx)(j.a.Text,{className:"text-muted",children:Object(y.jsx)("em",{children:"Untuk keperluan mapping Distribution Center "})})]})]}),i=Object(y.jsx)("div",{dangerouslySetInnerHTML:{__html:'<div id="caption" style=padding-bottom:20px;">Apakah anda yakin <br/>akan menghapus data ini ?</div>'}});return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{className:"content-wrapper",children:[Object(y.jsx)("div",{className:"content-header",children:Object(y.jsx)("div",{className:"container-fluid",children:Object(y.jsxs)("div",{className:"row mb-2",children:[Object(y.jsx)("div",{className:"col-sm-6",children:Object(y.jsx)("h1",{className:"m-0",children:"Kab/Kota"})}),Object(y.jsx)("div",{className:"col-sm-6",children:Object(y.jsxs)(m.a,{className:"float-right",children:[Object(y.jsx)(m.a.Item,{href:(e=window.location.pathname,e.substr(0,e.lastIndexOf("/"))+"/provinsi"),children:"Provinsi"}),Object(y.jsx)(m.a.Item,{active:!0,children:this.state.provinsi_name})]})})]})})}),Object(y.jsx)("section",{className:"content",children:Object(y.jsx)("div",{className:"container-fluid",children:Object(y.jsx)("div",{className:"row",children:Object(y.jsx)("div",{className:"col-12",children:Object(y.jsxs)("div",{className:"card shadow-lg",children:[Object(y.jsx)("div",{className:"card-header",children:Object(y.jsxs)(p.a,{onClick:this.discardChanges,variant:"success",children:[Object(y.jsx)("i",{className:"fa fa-plus"})," Add"]})}),Object(y.jsx)("div",{className:"card-body",children:this.state.dtRes?Object(y.jsx)(x.a,{config:{key_column:"id_city",page_size:10,length_menu:[10,20,50],show_filter:!0,show_pagination:!0,pagination:"advance",button:{excel:!1,print:!1},language:{loading_text:"Please be patient while data loads..."}},records:this.state.dtRes,columns:a,dynamic:!0,onChange:this.tableChangeHandler,total_record:this.state.totalData,loading:this.state.loadTbl}):Object(y.jsx)("p",{children:"No Data..."})})]})})})})}),Object(y.jsx)(f.a,{show:this.state.show,size:"sm",form:s,handleClose:this.handleClose,backdrop:"static",keyboard:!1,title:"Add/Edit City",titleButton:"Save change",themeButton:"success",isLoading:this.state.isLoading,formSubmit:this.handleSubmit}),this.state.showSwalSuccess?Object(y.jsx)(v.a,{show:this.state.showSwalSucces,title:this.state.successMsg,type:"success",handleClose:this.closeSwal}):"",Object(y.jsx)(f.a,{show:this.state.deleteForm,size:"sm",form:i,handleClose:this.handleClose,backdrop:"static",keyboard:!1,title:"Delete City",titleButton:"Delete City",themeButton:"danger",isLoading:this.isLoading,formSubmit:this.handleSave})]}),Object(y.jsx)("div",{})]})}}]),a}(u.Component);t.default=Object(g.b)((function(e){return{user:e.auth.currentUser}}),"")(S)}}]);