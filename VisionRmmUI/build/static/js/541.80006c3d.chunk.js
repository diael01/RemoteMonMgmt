"use strict";(self.webpackChunkVisionRmm=self.webpackChunkVisionRmm||[]).push([[541],{7065:function(e,n,t){t.d(n,{Z:function(){return I}});var a=t(5861),i=t(9439),r=t(4687),s=t.n(r),l=t(98),c=t(3263),d=t(9570),o=t(5058),m=t(2791),u=t(6871),h=t(1166),p=t(8470),f=t(4529),Z=t(6610),x=t(5171),g=t(6106),v=t(914),j=t(7888),C=t(376),y=t(2014),A=t(184),T={name:[{required:!0,message:"Please enter client name"}],vat:[{required:!1,message:"Please enter client VAT"}],companyNo:[{required:!1,message:"Please enter client company No"}],mailAddress:[{required:!1,message:"Please enter client mailing Address"}],billAddress:[{required:!1,message:"Please enter client billing Address"}],ip:[{required:!0,message:"Please enter client ip"}],phone:[{required:!1,message:"Please enter client phone"}],email:[{required:!1,message:"Please enter client email"}],primaryContact:[{required:!1,message:"Please enter client primary Contact"}]},b=function(e){var n=e.param,t=e.form,a=e.idd,r=x.Z.Option;console.log("idd="+a);var s=(0,m.useState)(!0),c=(0,i.Z)(s,2),d=c[0],o=c[1],u=(0,m.useState)(),h=(0,i.Z)(u,2),p=h[0],f=h[1];return(0,A.jsx)(g.Z,{gutter:16,children:(0,A.jsx)(v.Z,{xs:24,sm:24,md:17,children:(0,A.jsxs)(j.Z,{children:[(0,A.jsx)(l.Z.Item,{name:"name",label:"Client/Site name",rules:T.name,children:(0,A.jsx)(C.Z,{placeholder:"Client/Site Name"})}),(0,A.jsxs)(g.Z,{children:[(0,A.jsx)(v.Z,{xs:12,sm:12,md:8,children:(0,A.jsx)(l.Z.Item,{name:"isSite",label:"Is a Site",valuePropName:"checked",children:(0,A.jsx)(y.Z,{checked:d,onChange:function(e){console.log("checked = ",e.target.checked),o(e.target.checked),setHidden(!e.target.checked)}})})}),(0,A.jsx)(v.Z,{xs:12,sm:12,md:9,children:(0,A.jsx)(l.Z.Item,{name:"clients",label:"Choose Client",readonly:"true",hidden:hidden,children:(0,A.jsx)(x.Z,{style:{minWidth:70},onSelect:function(e,n){return function(e,n){f(n.key),t.setFields([{name:"mainId",value:n.key}])}(0,n)},children:n.map((function(e){return(0,A.jsx)(r,{value:e.name},e.id)}))})})})]}),(0,A.jsx)(l.Z.Item,{name:"ip",label:"Wan Ip",rules:T.ip,children:(0,A.jsx)(C.Z,{placeholder:"Wan Ip"})}),(0,A.jsx)(l.Z.Item,{name:"companyNo",label:"Company No",hidden:d,rules:T.companyNo,children:(0,A.jsx)(C.Z,{placeholder:"Company No"})}),(0,A.jsx)(l.Z.Item,{name:"vat",label:"VAT",hidden:d,rules:T.vat,children:(0,A.jsx)(C.Z,{placeholder:"VAT"})}),(0,A.jsx)(l.Z.Item,{name:"mailAddress",label:"Mail Address",rules:T.mailAddress,children:(0,A.jsx)(C.Z.TextArea,{rows:2})}),(0,A.jsx)(l.Z.Item,{name:"billAddress",label:"Billing Address",rules:T.billAddress,children:(0,A.jsx)(C.Z.TextArea,{rows:2})}),(0,A.jsx)(l.Z.Item,{name:"phone",label:"Phone",rules:T.phone,children:(0,A.jsx)(C.Z,{placeholder:"Phone"})}),(0,A.jsx)(l.Z.Item,{name:"email",label:"Email",rules:T.email,children:(0,A.jsx)(C.Z,{placeholder:"Email"})}),(0,A.jsx)(l.Z.Item,{name:"primaryContact",label:"Primary Contact",rules:T.primaryContact,children:(0,A.jsx)(C.Z,{placeholder:"Primary Contact"})}),(0,A.jsx)(l.Z.Item,{name:"secContact",label:"Secondary Contact",rules:T.secContact,children:(0,A.jsx)(C.Z,{placeholder:"Secondary Contact"})}),(0,A.jsx)(l.Z.Item,{name:"id",hidden:"true"}),(0,A.jsx)(l.Z.Item,{name:"mainId",hidden:"true",children:(0,A.jsx)(C.Z,{value:p})})]})})})},N="EDIT",I=function(e){(0,u.s0)();var n=(0,f.l2)(),t=n.data,r=(n.status,n.isSuccess,(0,m.useState)(t)),x=(0,i.Z)(r,2),g=x[0],v=(x[1],(0,m.useState)(t)),j=(0,i.Z)(v,2),C=j[0],y=j[1],T=e.mode,I=void 0===T?"ADD":T,k=e.param,P=l.Z.useForm(),E=(0,i.Z)(P,1)[0],S=(0,m.useState)(!1),U=(0,i.Z)(S,2),D=U[0],O=U[1],_=(0,m.useState)(),w=(0,i.Z)(_,2),q=w[0],R=w[1];(0,m.useEffect)((function(){if(I===N){console.log("is edit");var e=k.id,n=g.filter((function(n){return n.id===parseInt(e)}));y(g.filter((function(e){return null==e.mainId})));var t=n[0];E.setFieldsValue({id:t.id,name:t.name,mainId:t.mainId,billAddress:t.billAddress,mailAddress:t.mailAddress,ip:t.ip,phone:t.phone,email:t.email,companyNo:t.companyNo,vat:t.vat,primaryContact:t.primaryContact,secContact:t.secContact}),R(t.mainId)}}),[E,I,k,e]);return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(l.Z,{layout:"vertical",form:E,name:"advanced_search",className:"ant-advanced-search-form",initialValues:{heightUnit:"cm",widthUnit:"cm",weightUnit:"kg"},children:[(0,A.jsx)(h.Z,{className:"border-bottom",overlap:!0,children:(0,A.jsx)("div",{className:"container",children:(0,A.jsxs)(p.Z,{className:"py-2",mobileFlex:!1,justifyContent:"space-between",alignItems:"center",children:[(0,A.jsxs)("h2",{className:"mb-3",children:["ADD"===I?"Add New Client/Site":"Edit Client/Site"," "]}),(0,A.jsxs)("div",{className:"mb-3",children:[(0,A.jsx)(d.ZP,{className:"mr-2",onClick:function(){E.setFieldsValue({name:"",billAddress:"",mailAddress:"",ip:"",phone:"",email:"",primaryContact:"",secContact:"",companyNo:"",vat:"",mainId:0})},children:"Discard"}),(0,A.jsx)(d.ZP,{type:"primary",onClick:function(){return O(!0),void E.validateFields().then((function(e){setTimeout((0,a.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(O(!1),"ADD"!==I){n.next=4;break}return n.next=4,Z.Z.add(e);case 4:if(I!==N){n.next=8;break}return n.next=7,Z.Z.update(e);case 7:E.setFieldsValue({id:e.id,name:e.name,billAddress:e.billAddress,mailAddress:e.mailAddress,ip:e.ip,phone:e.phone,email:e.email,companyNo:e.companyNo,vat:e.vat,primaryContact:e.primaryContact,secContact:e.secContact,mainId:e.mainId});case 8:case"end":return n.stop()}}),n)}))),1500)})).catch((function(e){O(!1),console.log("info",e),c.ZP.error("Please enter all required fields ")}))},htmlType:"submit",loading:D,children:"ADD"===I?"Add":"Save"})]})]})})}),(0,A.jsx)("div",{className:"container",children:(0,A.jsx)(o.Z,{defaultActiveKey:"1",style:{marginTop:30},items:[{label:"Client",key:"1",children:(0,A.jsx)(b,{param:C,form:E,idd:q})}]})})]})})}},4541:function(e,n,t){t.r(n);var a=t(6871),i=t(7065),r=t(184);n.default=function(){var e=(0,a.UO)();return(0,r.jsx)(i.Z,{mode:"EDIT",param:e})}},1166:function(e,n,t){var a,i=t(168),r=t(9439),s=t(2791),l=t(364),c=t(2554),d=t(6443),o=t(4923);n.Z=function(e){var n=e.children,t=e.background,m=e.className,u=e.overlap,h=(0,s.useState)(0),p=(0,r.Z)(h,2),f=p[0],Z=p[1],x=(0,s.useRef)(null),g=(0,l.v9)((function(e){return e.theme.navType})),v=(0,l.v9)((function(e){return e.theme.currentTheme}));(0,s.useEffect)((function(){if(g===d.XA){var e=window.innerWidth,n=x.current.offsetWidth;Z((e-n)/2)}}),[g]);return(0,o.tZ)("div",{ref:x,css:(0,c.iv)(a||(a=(0,i.Z)(["\n\t\t\t\tbackground-color: ",";\n\t\t\t\tpadding: ","px;\n\t\t\t\tmargin-top: -","px;\n\t\t\t\tmargin-left: -","px;\n\t\t\t\tmargin-right: -","px;\n\n\t\t\t\t@media "," {\n\t\t\t\t\tmargin-left: -","px;\n        \t\t\tmargin-right: -","px;\n\t\t\t\t}\n\n\t\t\t\t","\n\t\t\t"])),"dark"===v?"#2f3a50":d.wx.WHITE,d.hv.LAYOUT_CONTENT_GUTTER,d.hv.LAYOUT_CONTENT_GUTTER,d.hv.LAYOUT_CONTENT_GUTTER,d.hv.LAYOUT_CONTENT_GUTTER,d.qk.MOBILE,d.hv.LAYOUT_CONTENT_GUTTER_SM,d.hv.LAYOUT_CONTENT_GUTTER_SM,u?"margin-bottom: -4.6875rem;":""),className:"page-header-alt ".concat(m||""),style:function(){var e={backgroundImage:t?"url(".concat(t,")"):"none"};return g===d.XA&&(e.marginRight=-f,e.marginLeft=-f,e.paddingLeft=0,e.paddingRight=0),e}(),children:g===d.XA?(0,o.tZ)("div",{className:"container",children:n}):(0,o.tZ)(o.HY,{children:n})})}},8470:function(e,n,t){var a=t(1413),i=t(225).Z.div((function(e){var n=e.justifyContent,t=e.alignItems,i=e.flexDirection,r=e.gap,s=e.padding,l=e.margin,c={display:"flex",justifyContent:n,alignItems:t,gap:"number"===typeof r?"".concat(r,"px"):r};return i&&(c.flexDirection=i),s&&(c.padding=s),l&&(c.margin=l),(0,a.Z)({},c)}));n.Z=i},4529:function(e,n,t){t.d(n,{l2:function(){return s}});var a=t(4569),i=t.n(a),r=t(1933),s=function(){return(0,r.useQuery)("clients",(function(){return i().get("https://localhost:4001/api/v1/client/GetClientsAndSites").then((function(e){return e.data}))}))}},6610:function(e,n,t){var a=t(4569),i=t.n(a),r=t(3263),s={add:function(e){return i().post("/api/v1/client/AddClient",e).then((function(n){return r.ZP.success("Added ".concat(e.name," to client list")),n})).catch((function(e){r.ZP.error(e)}))},update:function(e){return i().put("/api/v1/client/UpdateClient",e).then((function(n){return r.ZP.success("Updated ".concat(e.name," in client list")),n})).catch((function(e){r.ZP.error(e)}))},delete:function(e,n){return i().get("/api/v1/client/DeleteClient?id=".concat(e)).then((function(e){return console.log("client deleted"),r.ZP.success("Deleted client ".concat(n," from client list")),e})).catch((function(e){console.log("delete err"+e),r.ZP.error(e)}))}};n.Z=s}}]);
//# sourceMappingURL=541.80006c3d.chunk.js.map