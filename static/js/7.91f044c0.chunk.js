(this.webpackJsonpadmin_cni=this.webpackJsonpadmin_cni||[]).push([[7],{592:function(e,t,a){"use strict";var s=a(13),i=a(14),r=a(16),n=a.n(r),o="http://202.158.64.238//api_cni/index.php",c=function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"postData",value:function(e,t){switch(t){case"GET_DATA":return n.a.post(o+"/product",e);case"ADD_DATA":return n.a.post(o+"/simpan_product",e);case"VIEW_DETAIL":return n.a.post(o+"/product_detail",e);case"GET_IMAGE":return n.a.post(o+"/product_img",e);case"UPLOAD_IMAGE":return n.a.post(o+"/upl_img_prod",e);case"DEL_IMAGE":return n.a.post(o+"/del_img_prod",e);case"DELETE_DATA":return n.a.post(o+"/del_product",e);case"GET_PRODUCT":return o+="/product/?per_page="+e.per_page+"&page_number="+e.page_number+"&keyword="+e.keyword,n.a.get(o+e);default:return n.a.post(o+"/product",e)}}}]),e}();t.a=new c},604:function(e,t,a){"use strict";a.r(t);var s=a(3),i=a(17),r=a.n(i),n=a(29),o=a(23),c=a(13),d=a(14),l=a(36),h=a(26),p=a(27),u=a(1),m=a(277),j=a(589),b=a(284),g=a(605),_=a(590),O=a(181),x=a(268),f=a(21),v=a(289),S=a.n(v),C=(a(598),a(599)),y=a.n(C),D=(a(600),a(595)),w=a(100),k=a(592),L=a(47),N=a(594),I=a(25),M=a(2),E=new N.a,G=S()().subtract(1,"day"),q=function(e){return e.isAfter(G)},A=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).getData=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E.get("selectedIdCNI"),a={id_product:t},s.setState({isLoading:!0}),e.next=5,k.a.postData(a,"VIEW_DETAIL").then((function(e){if("00"===e.data.err_code){var t=e.data.data;Object.keys(s.initialState).map((function(e){return s.setState(Object(n.a)({},e,t[e])),s.setState({imgUpload:t.img}),s.setState({img:""}),s.setState({isLoading:!1}),1}))}"04"===e.data.err_code&&s.setState({isLoading:!1})})).catch((function(e){console.log(e),s.setState({isLoading:!1})}));case 5:case"end":return e.stop()}}),e)}))),s.initialState={id_product:"",product_name:"",id_category:"",category_name:"",deskripsi:"",berat:"",kondisi:"",min_pembelian:"",video_url:"",img:"",imgUpload:"",short_description:"",qty:"",special_promo:"",start_date:"",end_date:"",harga_member:"",harga_konsumen:"",id_operator:""},s.state={validSd:q,validEd:q,isLoading:!1,showSwalSuccess:!1,errMsg:s.initialState,validated:!1,isEdit:!1,id_product:"",product_name:"",id_category:"",category_name:"",deskripsi:"",berat:"",kondisi:"",min_pembelian:"",video_url:"",img:"",imgUpload:x.a,short_description:"",qty:"",special_promo:"",start_date:"",end_date:"",harga_member:"",harga_konsumen:"",id_operator:""},s.handleSubmit=s.handleSubmit.bind(Object(l.a)(s)),s.handleChange=s.handleChange.bind(Object(l.a)(s)),s.onchangeSelect=s.onchangeSelect.bind(Object(l.a)(s)),s.handleChangeStartDate=s.handleChangeStartDate.bind(Object(l.a)(s)),s.handleChangeEndDate=s.handleChangeEndDate.bind(Object(l.a)(s)),s.closeSwal=s.closeSwal.bind(Object(l.a)(s)),s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname.replace("/",""),t=E.get("selectedIdCNI");"edit_product"===e&&(t>0||!t)&&(this.setState({isEdit:!0}),this.getData()),this.setState({id_operator:this.props.user.id_operator})}},{key:"handleChangeStartDate",value:function(e){this.state.validEd;if(e){var t=new Date(e),a=S()(t).format("YYYY-MM-DD HH:mm");a,this.setState({start_date:a,validEd:S()(t)})}else this.setState({start_date:""});this.state.id_operator||this.setState({id_operator:this.props.user.id_operator})}},{key:"handleChangeEndDate",value:function(e){if(e){var t=new Date(e),a=S()(t).format("YYYY-MM-DD HH:mm");this.setState({end_date:a})}else this.setState({end_date:""});this.state.id_operator||this.setState({id_operator:this.props.user.id_operator})}},{key:"handleChange",value:function(e){var t=this,a=e.target.name,s=e.target.value;if(this.setState({isLoading:!1}),this.setState({errMsg:{img:""}}),"img"===e.target.name){if(s=e.target.files[0],this.setState({img:""}),!s)return;if(!s.name.match(/\.(jpg|jpeg|png)$/))return this.setState({errMsg:{img:"Extension Invalid"}}),void this.setState({isLoading:!0});if(s.size>2099200)return this.setState({errMsg:{img:"File size over 2MB"}}),void this.setState({isLoading:!0});var i=new FileReader;i.readAsDataURL(s),i.onloadend=function(){t.setState({img:s,imgUpload:i.result})}}"special_promo"===a&&(s=e.target.checked?1:0),this.setState(Object(n.a)({},a,s)),this.state.id_operator||this.setState({id_operator:this.props.user.id_operator})}},{key:"onchangeSelect",value:function(e){this.setState({id_category:e.value,category_name:e.label}),this.state.id_operator||this.setState({id_operator:this.props.user.id_operator})}},{key:"handleSubmit",value:function(e){var t=this,a=e.currentTarget;this.setState({isLoading:!0});var i=!1;if(!1===a.checkValidity()&&(this.setState({isLoading:!1}),this.state.id_category||this.setState(Object(s.a)(Object(s.a)({},this),{},{errMsg:Object(s.a)(Object(s.a)({},this),{},{id_category:"Required"})})),i=!0,e.preventDefault(),e.stopPropagation()),this.state.id_category||this.setState(Object(s.a)(Object(s.a)({},this),{},{errMsg:Object(s.a)(Object(s.a)({},this),{},{id_category:"Required"})})),this.state.id_category||(i=!0,this.setState({isLoading:!1}),e.preventDefault(),e.stopPropagation()),this.setState({validated:!0}),!i){var r=new FormData;Object.keys(this.initialState).map((function(e){return r.append(e,t.state[e]),1})),r.append("id_operator",this.props.user.id_operator),k.a.postData(r,"ADD_DATA").then((function(e){"00"===e.data.err_code?t.setState({showSwalSuccess:!0}):console.log(e.data)})).catch((function(a){e.preventDefault(),e.stopPropagation(),t.setState({isLoading:!0,validated:!1})}))}e.preventDefault(),e.stopPropagation()}},{key:"closeSwal",value:function(){var e=this;this.setState({showSwalSuccess:!1}),Object.keys(this.initialState).map((function(t){return e.setState(Object(n.a)({},t,"")),e.setState({isLoading:!1}),1})),this.props.history.push("/products")}},{key:"renderView",value:function(e,t,a){var s=this;return"time"===e?t():Object(M.jsxs)("div",{className:"wrapper",children:[t(),Object(M.jsx)("div",{className:"controls",children:Object(M.jsx)(m.a,{variant:"warning",type:"button",onClick:function(){return s.clear(a)},children:"Clear"})})]})}},{key:"clear",value:function(e){"end_date"===e&&this.handleChangeEndDate(),"start_date"===e&&this.handleChangeStartDate()}},{key:"render",value:function(){var e=this,t=Object(M.jsx)("div",{dangerouslySetInnerHTML:{__html:'<div style="font-size:20px; text-align:center;"><strong>Success</strong>, Data berhasil disimpan</div>'}});return Object(M.jsxs)("div",{children:[Object(M.jsxs)("div",{className:"content-wrapper",children:[Object(M.jsx)("div",{className:"content-header",children:Object(M.jsx)("div",{className:"container-fluid",children:Object(M.jsx)("div",{className:"row mb-2",children:Object(M.jsx)("div",{className:"col-sm-6",children:Object(M.jsx)("h1",{className:"m-0",children:this.state.isEdit?"Edit Product":"Add Product"})})})})}),Object(M.jsx)("section",{className:"content",children:Object(M.jsx)("div",{className:"container-fluid",children:Object(M.jsx)("div",{className:"row",children:Object(M.jsx)("div",{className:"col-12",children:Object(M.jsx)("div",{className:"card shadow-lg",children:Object(M.jsxs)(j.a,{noValidate:!0,validated:this.state.validated,onSubmit:this.handleSubmit,children:[Object(M.jsxs)("div",{className:"card-body my-card-body",children:[Object(M.jsxs)(j.a.Row,{children:[Object(M.jsxs)(j.a.Group,{as:b.a,controlId:"product_name",children:[Object(M.jsx)(j.a.Label,{children:"Product Name"}),Object(M.jsx)(j.a.Control,{value:this.state.product_name,autoComplete:"off",onChange:this.handleChange,size:"sm",name:"product_name",type:"text",required:!0,placeholder:"Product Name"}),Object(M.jsx)(j.a.Control.Feedback,{type:"invalid",children:Object(M.jsx)("span",{className:"badge badge-danger",children:"Product Name is Required"})})]}),Object(M.jsxs)(j.a.Group,{as:b.a,xs:2,controlId:"berat",children:[Object(M.jsx)(j.a.Label,{children:"Weight(Gram)"}),Object(M.jsx)(D.a,{name:"berat",onChange:this.handleChange,className:"form-control form-control-sm",value:this.state.berat,thousandSeparator:!0,decimalScale:2,inputMode:"numeric",required:!0,autoComplete:"off",placeholder:"Weight(Gram)"}),Object(M.jsx)(j.a.Control.Feedback,{type:"invalid",children:Object(M.jsx)("span",{className:"badge badge-danger",children:"Weight is Required"})})]}),Object(M.jsxs)(j.a.Group,{as:b.a,xs:2,controlId:"qty",children:[Object(M.jsx)(j.a.Label,{children:"Quantity"}),Object(M.jsx)(D.a,{onChange:this.handleChange,name:"qty",className:"form-control form-control-sm",value:this.state.qty?this.state.qty:0,thousandSeparator:!0,decimalScale:2,inputMode:"numeric",autoComplete:"off",placeholder:"Quantity"})]}),Object(M.jsxs)(j.a.Group,{as:b.a,xs:2,controlId:"min_pembelian",children:[Object(M.jsx)(j.a.Label,{children:"Min. Pembelian"}),Object(M.jsx)(D.a,{onChange:this.handleChange,name:"min_pembelian",className:"form-control form-control-sm",value:this.state.min_pembelian?this.state.min_pembelian:"",thousandSeparator:!0,decimalScale:2,inputMode:"numeric",autoComplete:"off",placeholder:"Min. Pembelian"})]})]}),Object(M.jsxs)(j.a.Row,{children:[Object(M.jsxs)(j.a.Group,{as:b.a,xs:3,controlId:"category",children:[Object(M.jsx)(j.a.Label,{children:"Category"}),Object(M.jsx)(O.a,{required:!0,myVal:this.state.id_category?{value:this.state.id_category,label:this.state.category_name}:"",onChange:this.onchangeSelect,feedback:"Required"}),this.state.errMsg.id_category?Object(M.jsx)("span",{className:"text-error badge badge-danger",children:this.state.errMsg.id_category}):""]}),Object(M.jsxs)(j.a.Group,{as:b.a,xs:3,controlId:"kondisi",children:[Object(M.jsx)(j.a.Label,{children:"Kondisi"}),Object(M.jsx)(j.a.Control,{value:this.state.kondisi?this.state.kondisi:"",onChange:this.handleChange,size:"sm",name:"kondisi",type:"text",autoComplete:"off",placeholder:"Kondisi"})]}),Object(M.jsxs)(j.a.Group,{as:b.a,xs:2,controlId:"start_date",children:[Object(M.jsx)(j.a.Label,{children:"Start Date"}),Object(M.jsx)(y.a,{setViewDate:this.state.start_date?new Date(this.state.start_date):new Date,value:this.state.start_date?new Date(this.state.start_date):"",onChange:this.handleChangeStartDate,inputProps:{readOnly:!0,autoComplete:"off",placeholder:"Start Date",name:"start_date",className:"form-control form-control-sm"},renderView:function(t,a,s){return e.renderView(t,a,"start_date")},locale:"id",isValidDate:this.state.validSd})]}),Object(M.jsxs)(j.a.Group,{as:b.a,xs:2,controlId:"end_date",children:[Object(M.jsx)(j.a.Label,{children:"End Date"}),Object(M.jsx)(y.a,{setViewDate:this.state.end_date?new Date(this.state.end_date):new Date,value:this.state.end_date?new Date(this.state.end_date):"",onChange:this.handleChangeEndDate,inputProps:{readOnly:!0,placeholder:"End Date",autoComplete:"off",name:"end_date",className:"form-control form-control-sm"},renderView:function(t,a){return e.renderView(t,a,"end_date")},locale:"id",isValidDate:this.state.validEd})]}),Object(M.jsxs)(j.a.Group,{as:b.a,xs:2,controlId:"special_promo",children:[Object(M.jsx)(j.a.Label,{children:"Special Promo"}),Object(M.jsx)(g.a,{children:Object(M.jsx)(b.a,{xs:{span:1,offset:3},children:Object(M.jsx)(j.a.Check,{onChange:this.handleChange,checked:this.state.special_promo>0?"checked":"",label:this.state.special_promo>0?"Yes":"No",type:"switch",name:"special_promo",custom:!0})})})]})]}),Object(M.jsxs)(j.a.Row,{children:[Object(M.jsxs)(j.a.Group,{as:b.a,controlId:"short_description",children:[Object(M.jsx)(j.a.Label,{children:"Short Description"}),Object(M.jsx)(j.a.Control,{required:!0,value:this.state.short_description?this.state.short_description:"",onChange:this.handleChange,size:"sm",name:"short_description",type:"text",autoComplete:"off",placeholder:"Short Description"}),Object(M.jsx)(j.a.Control.Feedback,{type:"invalid",children:Object(M.jsx)("span",{className:"badge badge-danger",children:"Short Description is Required"})})]}),Object(M.jsxs)(j.a.Group,{as:b.a,controlId:"video_url",children:[Object(M.jsx)(j.a.Label,{children:"URL Video"}),Object(M.jsx)(j.a.Control,{value:this.state.video_url?this.state.video_url:"",onChange:this.handleChange,size:"sm",name:"video_url",type:"text",autoComplete:"off",placeholder:"URL Video"})]}),Object(M.jsxs)(j.a.Group,{as:b.a,controlId:"harga_member",children:[Object(M.jsx)(j.a.Label,{children:"Harga Member"}),Object(M.jsx)(D.a,{required:!0,onChange:this.handleChange,name:"harga_member",className:"form-control form-control-sm",value:this.state.harga_member?this.state.harga_member:"",thousandSeparator:!0,decimalScale:2,inputMode:"numeric",autoComplete:"off",placeholder:"Harga Member"})]}),Object(M.jsxs)(j.a.Group,{as:b.a,controlId:"harga_konsumen",children:[Object(M.jsx)(j.a.Label,{children:"Harga Member"}),Object(M.jsx)(D.a,{required:!0,onChange:this.handleChange,name:"harga_konsumen",className:"form-control form-control-sm",value:this.state.harga_konsumen?this.state.harga_konsumen:"",thousandSeparator:!0,decimalScale:2,inputMode:"numeric",autoComplete:"off",placeholder:"Harga Konsumen"})]})]}),Object(M.jsxs)(j.a.Row,{children:[Object(M.jsxs)(j.a.Group,{as:b.a,controlId:"deskripsi",children:[Object(M.jsx)(j.a.Label,{children:"Description"}),Object(M.jsx)(j.a.Control,{defaultValue:this.state.deskripsi,required:!0,onChange:this.handleChange,size:"sm",name:"deskripsi",as:"textarea",rows:9,placeholder:"Description"}),Object(M.jsx)(j.a.Control.Feedback,{type:"invalid",children:Object(M.jsx)("span",{className:"badge badge-danger",children:"Required"})})]}),Object(M.jsxs)(j.a.Group,{as:b.a,xs:2,controlId:"img",children:[Object(M.jsx)(j.a.Label,{children:"Image"}),this.state.errMsg.img?Object(M.jsx)("span",{className:"float-right text-error badge badge-danger",children:this.state.errMsg.img}):"",Object(M.jsx)(j.a.File,{setfieldvalue:this.state.img,onChange:this.handleChange,size:"sm",name:"img",style:{color:"rgba(0, 0, 0, 0)"}}),Object(M.jsx)(j.a.Text,{className:"text-muted",children:Object(M.jsxs)("em",{children:["- Images *.jpg, *.jpeg, *.png ",Object(M.jsx)("br",{}),"- Maks. Size 2MB"]})})]}),Object(M.jsxs)(j.a.Group,{as:b.a,xs:2,controlId:"imagePreview",children:[Object(M.jsx)(j.a.Label,{style:{color:"rgba(0, 0, 0, 0)"},children:"-----"}),Object(M.jsx)(_.a,{children:Object(M.jsx)(_.a.Image,{thumbnail:!0,width:130,height:100,alt:"",src:this.state.imgUpload})})]})]})]}),Object(M.jsxs)("div",{className:"card-footer",children:[Object(M.jsxs)(I.b,{to:"/products",children:[Object(M.jsx)(m.a,{variant:"danger",children:"Cancel"})," "]}),Object(M.jsx)(w.a,{isLoading:this.state.isLoading,type:"submit",theme:"success",children:"Simpan"})]})]})})})})})}),this.state.showSwalSuccess?Object(M.jsx)(L.a,{show:this.state.showSwalSuccess,title:t,type:"success",handleClose:this.closeSwal}):""]}),Object(M.jsx)("div",{})]})}}]),a}(u.Component);t.default=Object(f.b)((function(e){return{user:e.auth.currentUser}}),"")(A)}}]);