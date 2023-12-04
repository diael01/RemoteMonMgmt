"use strict";(self.webpackChunkVisionRmm=self.webpackChunkVisionRmm||[]).push([[846],{5846:function(t,e,n){n.r(e),n.d(e,{ClientDashboard:function(){return k}});var r=n(1413),i=n(5861),a=n(9439),o=n(4687),c=n.n(o),s=n(4215),u=n(2622),l=n(1549),d=n(3388),f=n(7888),p=n(9570),g=n(2334),h=n(2791),v=n(6871),m=n(6610),x=n(872),Z=n(8470),b=n(4529),y=n(2345),I=n(2703),S=(n(4569),n(184)),k=function(){var t=(0,v.s0)(),e=(0,b.l2)(),n=e.data,o=(e.status,e.isSuccess,(0,y.Z)().data,(0,h.useState)(n)),k=(0,a.Z)(o,2),j=k[0],C=k[1],w=(0,h.useState)([]),P=(0,a.Z)(w,2),A=P[0],R=P[1],D=(0,h.useState)([]),T=(0,a.Z)(D,2),N=T[0],U=T[1],E=function(e){t("/app-views/dashboards/client/editClient/".concat(e.id))},O=function(){var t=(0,i.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n="id",r=j,!(A.length>1)){t.next=6;break}A.forEach(function(){var t=(0,i.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.Z.delete(e.id,e.name);case 2:r=I.Z.deleteArrayRow(r,n,e.id),C(r),R([]);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=11;break;case 6:return t.next=8,m.Z.delete(e.id,e.name);case 8:r=I.Z.deleteArrayRow(r,n,e.id),C(r),R([]);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=[{title:"ID",dataIndex:"id"},{title:"Client",dataIndex:"name",sorter:function(t,e){return I.Z.antdTableSorter(t,e,"name")}},{title:"Address",dataIndex:"address",sorter:function(t,e){return I.Z.antdTableSorter(t,e,"ip")}},{title:"Wan Ip",dataIndex:"ip",sorter:function(t,e){return I.Z.antdTableSorter(t,e,"ip")}},{title:"Phone",dataIndex:"phone",sorter:function(t,e){return I.Z.antdTableSorter(t,e,"ip")}},{title:"Email",dataIndex:"email",sorter:function(t,e){return I.Z.antdTableSorter(t,e,"ip")}},{title:"Contact",dataIndex:"contact",sorter:function(t,e){return I.Z.antdTableSorter(t,e,"ip")}},{title:"",dataIndex:"actions",render:function(t,e){return(0,S.jsx)("div",{className:"text-right",children:(0,S.jsx)(x.Z,{menu:(n=e,(0,S.jsxs)(d.Z,{children:[(0,S.jsx)(d.Z.Item,{onClick:function(){return E(n)},children:(0,S.jsxs)(Z.Z,{alignItems:"center",children:[(0,S.jsx)(s.Z,{}),(0,S.jsx)("span",{className:"ml-2",children:"View/Edit Details"})]})}),(0,S.jsx)(d.Z.Item,{onClick:function(){return O(n)},children:(0,S.jsxs)(Z.Z,{alignItems:"center",children:[(0,S.jsx)(u.Z,{}),(0,S.jsx)("span",{className:"ml-2",children:A.length>0?"Delete (".concat(A.length,")"):"Delete"})]})})]}))})});var n}}],K={onChange:function(t,e){R(e),U(t)}};return(0,S.jsxs)(f.Z,{children:[(0,S.jsx)(Z.Z,{alignItems:"center",justifyContent:"space-between",mobileFlex:!1,children:(0,S.jsx)("div",{children:(0,S.jsx)(p.ZP,{onClick:function(){t("/app-views/dashboards/client/addClient")},type:"primary",icon:(0,S.jsx)(l.Z,{}),block:!0,children:"Add client/site"})})}),(0,S.jsx)("div",{className:"table-responsive",children:(0,S.jsx)(g.Z,{columns:F,dataSource:n,rowKey:"id",rowSelection:(0,r.Z)({selectedRowKeys:N,type:"checkbox",preserveSelectedRowKeys:!1},K)})})]})};e.default=k},872:function(t,e,n){n(2791);var r=n(1686),i=n(3388),a=n(5033),o=n(184),c=function(t){return(0,o.jsx)(r.Z,{overlay:t.menu,placement:t.placement,trigger:["click"],children:(0,o.jsx)("div",{className:"ellipsis-dropdown",children:(0,o.jsx)(a.Z,{})})})};c.defaultProps={trigger:"click",placement:"bottomRight",menu:(0,o.jsx)(i.Z,{})},e.Z=c},8470:function(t,e,n){var r=n(1413),i=n(225).Z.div((function(t){var e=t.justifyContent,n=t.alignItems,i=t.flexDirection,a=t.gap,o=t.padding,c=t.margin,s={display:"flex",justifyContent:e,alignItems:n,gap:"number"===typeof a?"".concat(a,"px"):a};return i&&(s.flexDirection=i),o&&(s.padding=o),c&&(s.margin=c),(0,r.Z)({},s)}));e.Z=i},4529:function(t,e,n){n.d(e,{l2:function(){return o}});var r=n(4569),i=n.n(r),a=n(1933),o=function(){return(0,a.useQuery)("clients",(function(){return i().get("https://localhost:4001/api/v1/client/GetClientsAndSites").then((function(t){return t.data}))}))}},6610:function(t,e,n){var r=n(4569),i=n.n(r),a=n(3263),o={add:function(t){return i().post("/api/v1/client/AddClient",t).then((function(e){return a.ZP.success("Added ".concat(t.name," to client list")),e})).catch((function(t){a.ZP.error(t)}))},update:function(t){return i().put("/api/v1/client/UpdateClient",t).then((function(e){return a.ZP.success("Updated ".concat(t.name," in client list")),e})).catch((function(t){a.ZP.error(t)}))},delete:function(t,e){return i().get("/api/v1/client/DeleteClient?id=".concat(t)).then((function(t){return console.log("client deleted"),a.ZP.success("Deleted client ".concat(e," from client list")),t})).catch((function(t){console.log("delete err"+t),a.ZP.error(t)}))}};e.Z=o},2703:function(t,e,n){var r=n(5671),i=n(3144),a=function(){function t(){(0,r.Z)(this,t)}return(0,i.Z)(t,null,[{key:"getNameInitial",value:function(t){var e=t.match(/\b\w/g)||[];return((e.shift()||"")+(e.pop()||"")).toUpperCase()}},{key:"getRouteInfo",value:function(t,e){if(t.path===e)return t;var n;for(var r in t)if(t.hasOwnProperty(r)&&"object"===typeof t[r]&&(n=this.getRouteInfo(t[r],e)))return n;return n}},{key:"getColorContrast",value:function(t){if(!t)return"dark";var e=parseInt(i(t).substring(0,2),16),n=function(t){return parseInt(i(t).substring(2,4),16)}(t),r=function(t){return parseInt(i(t).substring(4,6),16)}(t);function i(t){return"#"===t.charAt(0)?t.substring(1,7):t}return(299*e+587*n+114*r)/1e3>130?"dark":"light"}},{key:"shadeColor",value:function(t,e){var n=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),i=parseInt(t.substring(5,7),16);n=parseInt(n*(100+e)/100),r=(r=parseInt(r*(100+e)/100))<255?r:255,i=(i=parseInt(i*(100+e)/100))<255?i:255;var a=1===(n=n<255?n:255).toString(16).length?"0".concat(n.toString(16)):n.toString(16),o=1===r.toString(16).length?"0".concat(r.toString(16)):r.toString(16),c=1===i.toString(16).length?"0".concat(i.toString(16)):i.toString(16);return"#".concat(a).concat(o).concat(c)}},{key:"rgbaToHex",value:function(t){var e=function(t){return t.replace(/^\s+|\s+$/gm,"")},n=t.substring(t.indexOf("(")).split(","),r=parseInt(e(n[0].substring(1)),10),i=parseInt(e(n[1]),10),a=parseInt(e(n[2]),10),o=parseFloat(e(n[3].substring(0,n[3].length-1))).toFixed(2),c=[r.toString(16),i.toString(16),a.toString(16),Math.round(255*o).toString(16).substring(0,2)];return c.forEach((function(t,e){1===t.length&&(c[e]="0"+t)})),"#".concat(c.join(""))}},{key:"getSignNum",value:function(t,e,n){return t>0?e:t<0?n:null}},{key:"antdTableSorter",value:function(t,e,n){return"number"===typeof t[n]&&"number"===typeof e[n]?t[n]-e[n]:"string"===typeof t[n]&&"string"===typeof e[n]?(t=t[n].toLowerCase())>(e=e[n].toLowerCase())?-1:e>t?1:0:void 0}},{key:"filterArray",value:function(t,e,n){var r=t;return t&&(r=t.filter((function(t){return t[e]===n}))),r}},{key:"deleteArrayRow",value:function(t,e,n){var r=t;return t&&(r=t.filter((function(t){return t[e]!==n}))),r}},{key:"wildCardSearch",value:function(t,e){return t=t.filter((function(t){return function(t){for(var n in t)if(null!=t[n]&&-1!==t[n].toString().toUpperCase().indexOf(e.toString().toUpperCase()))return!0}(t)}))}},{key:"getBreakPoint",value:function(t){var e=[];for(var n in t){if(t.hasOwnProperty(n))t[n]&&e.push(n)}return e}}]),t}();e.Z=a}}]);
//# sourceMappingURL=846.b38d917b.chunk.js.map