"use strict";(self.webpackChunkVisionRmm=self.webpackChunkVisionRmm||[]).push([[561],{6561:function(t,e,n){n.r(e),n.d(e,{DeviceDashboard:function(){return k}});var r=n(1413),i=n(5861),a=n(9439),c=n(4687),o=n.n(c),u=n(4215),s=n(2622),l=n(1549),d=n(3388),f=n(7888),p=n(9570),v=n(2334),g=n(2791),h=n(6871),x=n(2626),Z=n(872),m=n(8470),b=n(8456),y=n(2345),S=n(2703),I=n(184),k=function(){var t=(0,h.s0)(),e=(0,b.Dz)(),n=e.data,c=(e.status,e.isSuccess,(0,y.Z)().data,(0,g.useState)(n)),k=(0,a.Z)(c,2),j=k[0],D=k[1],w=(0,g.useState)([]),C=(0,a.Z)(w,2),P=C[0],R=C[1],T=(0,g.useState)([]),A=(0,a.Z)(T,2),N=A[0],U=A[1],O=function(e){t("/app-views/dashboards/device/editDevice/".concat(e.id))},E=function(){var t=(0,i.Z)(o().mark((function t(e){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n="id",r=j,!(P.length>1)){t.next=6;break}P.forEach(function(){var t=(0,i.Z)(o().mark((function t(e){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.Z.delete(e.id,e.name);case 2:r=S.Z.deleteArrayRow(r,n,e.id),D(r),R([]);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=11;break;case 6:return t.next=8,x.Z.delete(e.id,e.name);case 8:r=S.Z.deleteArrayRow(r,n,e.id),D(r),R([]);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=[{title:"ID",dataIndex:"id"},{title:"Device",dataIndex:"name",sorter:function(t,e){return S.Z.antdTableSorter(t,e,"name")}},{title:"Ip",dataIndex:"ip",sorter:function(t,e){return S.Z.antdTableSorter(t,e,"ip")}},{title:"Reachable",dataIndex:"reachable",sorter:function(t,e){return S.Z.antdTableSorter(t,e,"reachable")}},{title:"Client ID",dataIndex:"clientId",sorter:function(t,e){return S.Z.antdTableSorter(t,e,"clientId")}},{title:"Status",dataIndex:"status",sorter:function(t,e){return S.Z.antdTableSorter(t,e,"status")}},{title:"Type",dataIndex:"type",sorter:function(t,e){return S.Z.antdTableSorter(t,e,"type")}},{title:"PatchStatus",dataIndex:"patchStatus",sorter:function(t,e){return S.Z.antdTableSorter(t,e,"patchStatus")}},{title:"AlertStatus",dataIndex:"alertStatus",sorter:function(t,e){return S.Z.antdTableSorter(t,e,"alertStatus")}},{title:"",dataIndex:"actions",render:function(t,e){return(0,I.jsx)("div",{className:"text-right",children:(0,I.jsx)(Z.Z,{menu:(n=e,(0,I.jsxs)(d.Z,{children:[(0,I.jsx)(d.Z.Item,{onClick:function(){return O(n)},children:(0,I.jsxs)(m.Z,{alignItems:"center",children:[(0,I.jsx)(u.Z,{}),(0,I.jsx)("span",{className:"ml-2",children:"View/Edit Details"})]})}),(0,I.jsx)(d.Z.Item,{onClick:function(){return E(n)},children:(0,I.jsxs)(m.Z,{alignItems:"center",children:[(0,I.jsx)(s.Z,{}),(0,I.jsx)("span",{className:"ml-2",children:P.length>0?"Delete (".concat(P.length,")"):"Delete"})]})})]}))})});var n}}],K={onChange:function(t,e){R(e),U(t)}};return(0,I.jsxs)(f.Z,{children:[(0,I.jsx)(m.Z,{alignItems:"center",justifyContent:"space-between",mobileFlex:!1,children:(0,I.jsx)("div",{children:(0,I.jsx)(p.ZP,{onClick:function(){t("/app-views/dashboards/device/addDevice")},type:"primary",icon:(0,I.jsx)(l.Z,{}),block:!0,children:"Add Device"})})}),(0,I.jsx)("div",{className:"table-responsive",children:(0,I.jsx)(v.Z,{columns:F,dataSource:n,rowKey:"id",rowSelection:(0,r.Z)({selectedRowKeys:N,type:"checkbox",preserveSelectedRowKeys:!1},K)})})]})};e.default=k},872:function(t,e,n){n(2791);var r=n(1686),i=n(3388),a=n(5033),c=n(184),o=function(t){return(0,c.jsx)(r.Z,{overlay:t.menu,placement:t.placement,trigger:["click"],children:(0,c.jsx)("div",{className:"ellipsis-dropdown",children:(0,c.jsx)(a.Z,{})})})};o.defaultProps={trigger:"click",placement:"bottomRight",menu:(0,c.jsx)(i.Z,{})},e.Z=o},8470:function(t,e,n){var r=n(1413),i=n(225).Z.div((function(t){var e=t.justifyContent,n=t.alignItems,i=t.flexDirection,a=t.gap,c=t.padding,o=t.margin,u={display:"flex",justifyContent:e,alignItems:n,gap:"number"===typeof a?"".concat(a,"px"):a};return i&&(u.flexDirection=i),c&&(u.padding=c),o&&(u.margin=o),(0,r.Z)({},u)}));e.Z=i},8456:function(t,e,n){n.d(e,{Dz:function(){return c}});var r=n(4569),i=n.n(r),a=n(1933),c=function(){return(0,a.useQuery)("Devices",(function(){return i().get("/api/v1/Device/GetDevices").then((function(t){return t.data}))}))}},2626:function(t,e,n){var r=n(4569),i=n.n(r),a=n(3263),c={add:function(t){return i().post("/api/v1/device/AddDevice",t).then((function(e){return a.ZP.success("Added ".concat(t.name," to Device list")),e})).catch((function(t){a.ZP.error(t)}))},update:function(t){return i().put("/api/v1/device/UpdateDevice",t).then((function(e){return a.ZP.success("Updated ".concat(t.name," in Device list")),e})).catch((function(t){a.ZP.error(t)}))},delete:function(t,e){return i().get("/api/v1/device/DeleteDevice?id=".concat(t)).then((function(t){return a.ZP.success("Deleted Device ".concat(e," from Device list")),t})).catch((function(t){a.ZP.error(t)}))}};e.Z=c},2703:function(t,e,n){var r=n(5671),i=n(3144),a=function(){function t(){(0,r.Z)(this,t)}return(0,i.Z)(t,null,[{key:"getNameInitial",value:function(t){var e=t.match(/\b\w/g)||[];return((e.shift()||"")+(e.pop()||"")).toUpperCase()}},{key:"getRouteInfo",value:function(t,e){if(t.path===e)return t;var n;for(var r in t)if(t.hasOwnProperty(r)&&"object"===typeof t[r]&&(n=this.getRouteInfo(t[r],e)))return n;return n}},{key:"getColorContrast",value:function(t){if(!t)return"dark";var e=parseInt(i(t).substring(0,2),16),n=function(t){return parseInt(i(t).substring(2,4),16)}(t),r=function(t){return parseInt(i(t).substring(4,6),16)}(t);function i(t){return"#"===t.charAt(0)?t.substring(1,7):t}return(299*e+587*n+114*r)/1e3>130?"dark":"light"}},{key:"shadeColor",value:function(t,e){var n=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),i=parseInt(t.substring(5,7),16);n=parseInt(n*(100+e)/100),r=(r=parseInt(r*(100+e)/100))<255?r:255,i=(i=parseInt(i*(100+e)/100))<255?i:255;var a=1===(n=n<255?n:255).toString(16).length?"0".concat(n.toString(16)):n.toString(16),c=1===r.toString(16).length?"0".concat(r.toString(16)):r.toString(16),o=1===i.toString(16).length?"0".concat(i.toString(16)):i.toString(16);return"#".concat(a).concat(c).concat(o)}},{key:"rgbaToHex",value:function(t){var e=function(t){return t.replace(/^\s+|\s+$/gm,"")},n=t.substring(t.indexOf("(")).split(","),r=parseInt(e(n[0].substring(1)),10),i=parseInt(e(n[1]),10),a=parseInt(e(n[2]),10),c=parseFloat(e(n[3].substring(0,n[3].length-1))).toFixed(2),o=[r.toString(16),i.toString(16),a.toString(16),Math.round(255*c).toString(16).substring(0,2)];return o.forEach((function(t,e){1===t.length&&(o[e]="0"+t)})),"#".concat(o.join(""))}},{key:"getSignNum",value:function(t,e,n){return t>0?e:t<0?n:null}},{key:"antdTableSorter",value:function(t,e,n){return"number"===typeof t[n]&&"number"===typeof e[n]?t[n]-e[n]:"string"===typeof t[n]&&"string"===typeof e[n]?(t=t[n].toLowerCase())>(e=e[n].toLowerCase())?-1:e>t?1:0:void 0}},{key:"filterArray",value:function(t,e,n){var r=t;return t&&(r=t.filter((function(t){return t[e]===n}))),r}},{key:"deleteArrayRow",value:function(t,e,n){var r=t;return t&&(r=t.filter((function(t){return t[e]!==n}))),r}},{key:"wildCardSearch",value:function(t,e){return t=t.filter((function(t){return function(t){for(var n in t)if(null!=t[n]&&-1!==t[n].toString().toUpperCase().indexOf(e.toString().toUpperCase()))return!0}(t)}))}},{key:"getBreakPoint",value:function(t){var e=[];for(var n in t){if(t.hasOwnProperty(n))t[n]&&e.push(n)}return e}}]),t}();e.Z=a}}]);
//# sourceMappingURL=561.61ef123b.chunk.js.map