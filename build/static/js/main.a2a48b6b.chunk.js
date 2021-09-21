(this["webpackJsonpit-logger"]=this["webpackJsonpit-logger"]||[]).push([[0],{29:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(10),l=c.n(r),i=(c(29),c(15)),o=c.n(i),d=c(3),j=c(4),u=c.n(j),h=c(7),b="GET_LOGS",O="ADD_LOG",m="DELETE_LOG",p="SET_CURRENT",f="CLEAR_CURRENT",x="UPDATE_LOG",g="SET_LOADING",v="LOGS_ERROR",N="SEARCH_LOGS",y="GET_TECHS",w="ADD_TECH",T="DELETE_TECH",E="TECHS_ERROR",L=function(){return{type:g}},C=function(e){var t=e.searchLogs,c=Object(n.useRef)("");return Object(a.jsx)("div",{children:Object(a.jsx)("nav",{style:{marginBottom:"20px",backgroundColor:"blue"},children:Object(a.jsx)("div",{className:"nav-wrapper",children:Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{id:"search",type:"search",placeholder:"search Logs ....",onChange:function(e){return function(e){t(e.target.value)}(e)},ref:c}),Object(a.jsx)("label",{className:"label-icon",htmlFor:"search",children:Object(a.jsx)("i",{className:"material-icons",children:"search"})}),Object(a.jsx)("i",{className:"material-icons",children:"close"})]})})})})})};C.propsTypes={searchLogs:o.a.func.isRequired};var k=Object(d.b)(null,{searchLogs:function(e){return function(){var t=Object(h.a)(u.a.mark((function t(c){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,L(),t.next=4,fetch("/logs?q=".concat(e));case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,c({type:N,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:v,payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})(C),S=(c(37),c(20)),D=c.n(S),R=function(){return Object(a.jsxs)("div",{className:"fixed-action-btn",children:[Object(a.jsx)("a",{href:"#add-log-modal",className:"btn-floating btn-large modal-trigger blue darken-2",children:Object(a.jsx)("i",{className:"material-icons large",children:"add"})}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#tech-list-modal",className:"btn-floating green modal-trigger",children:Object(a.jsx)("i",{className:"material-icons",children:"person"})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#add-tech-modal",className:"btn-floating red modal-trigger",children:Object(a.jsx)("i",{className:"material-icons",children:"person_add"})})})]})]})},_=c(5),A=c.n(_),F=c(21),G=c.n(F),P=Object(d.b)(null,{deleteLogs:function(e){return function(){var t=Object(h.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,L(),t.next=4,fetch("/logs/".concat(e),{method:"DELETE"});case 4:c({type:m,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c({type:v,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setCurrent:function(e){return{type:p,payload:e}}})((function(e){var t=e.log,c=e.deleteLogs,n=e.setCurrent;return Object(a.jsx)("div",{children:Object(a.jsxs)("li",{className:"collection-item",children:[Object(a.jsx)("a",{href:"#edit-log-modal",className:"modal-trigger ".concat(t.attention?"red-text":"blue-text"),onClick:function(){return n(t)},children:t.message}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{className:"grey-text",children:[Object(a.jsxs)("span",{className:"black-text",children:["ID #",t.id]})," Last updated by"," ",Object(a.jsx)("span",{className:"black-text",children:t.tech})," on"," ",Object(a.jsx)(G.a,{format:"MMMM Do YYYY, h:mm:ss a",children:t.date})]}),Object(a.jsx)("a",{href:"#!",className:"secondary-content",onClick:function(){c(t.id),A.a.toast({html:"Logs ".concat(t.id," deleted")})},children:Object(a.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})})),M=function(){return Object(a.jsx)("div",{className:"progress blue lighten-4",children:Object(a.jsx)("div",{className:"indeterminate blue"})})},H=Object(d.b)((function(e){return{log:e.log}}),{getLogs:function(){return function(){var e=Object(h.a)(u.a.mark((function e(t){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,L(),e.next=4,fetch("/logs");case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,t({type:b,payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:v,payload:e.t0.response.data});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.log,c=t.logs,s=t.loading,r=e.getLogs;return Object(n.useEffect)((function(){r()}),[r]),s||null===c?Object(a.jsx)(M,{}):Object(a.jsxs)("ul",{className:"collection with-header",children:[Object(a.jsx)("li",{className:"collection-header",children:Object(a.jsx)("h4",{className:"center",children:"System Logs"})}),s||0!==c.length?c.map((function(e){return Object(a.jsx)(P,{log:e},e.id)})):Object(a.jsx)("p",{className:"center",children:" Logs does not Exists"})]})})),I=c(6),J=function(){return function(){var e=Object(h.a)(u.a.mark((function e(t){var c,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,U(),e.next=4,fetch("/techs");case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,t({type:y,payload:a}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:E,payload:e.t0.response.statusText});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},U=function(){return{type:g}},Y=Object(d.b)((function(e){return{tech:e.tech}}),{getTechs:J})((function(e){var t=e.getTechs,c=e.tech,s=c.techs,r=c.loading;return Object(n.useEffect)((function(){t()}),[]),!r&&null!==s&&s.map((function(e){return Object(a.jsxs)("option",{value:"".concat(e.firstName," ").concat(e.lastName),children:[e.firstName," ",e.lastName]},e.id)}))})),B={height:"75%",width:"75%",marginTop:"15px"},q=Object(d.b)(null,{addLogs:function(e){return function(){var t=Object(h.a)(u.a.mark((function t(c){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,L(),t.next=4,fetch("/logs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,c({type:O,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:v,payload:t.t0.response.statusText});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addLogs,c=Object(n.useState)(""),s=Object(I.a)(c,2),r=s[0],l=s[1],i=Object(n.useState)(!1),o=Object(I.a)(i,2),d=o[0],j=o[1],u=Object(n.useState)(""),h=Object(I.a)(u,2),b=h[0],O=h[1];return Object(a.jsxs)("div",{id:"add-log-modal",className:"modal",style:B,children:[Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("h4",{className:"center",children:"Enter System Logs"}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{type:"text",name:"message",value:r,onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"message",className:"active",children:"Log message"})]})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"input-field",children:Object(a.jsxs)("select",{name:"tech",value:b,className:"browser-default",onChange:function(e){return O(e.target.value)},children:[Object(a.jsx)("option",{value:"",disabled:!0,children:"Select technician"}),Object(a.jsx)(Y,{})]})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("p",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:d,value:d,className:"filled-in",onChange:function(e){return j(!d)}}),Object(a.jsx)("span",{children:"Needs attention"})]})})})]}),Object(a.jsx)("div",{className:"modal-footer",children:Object(a.jsx)("a",{href:"#!",className:"waves-effect waves-light btn-large  modal-close",onClick:function(){if(""===r||""===b||""===d)A.a.toast({html:"Plesae enter the techs and message"});else{var e={message:r,attention:d,tech:b,date:new Date};t(e),A.a.toast({html:"Logs added by ".concat(b)}),j(!1),l(""),O("")}},children:"Enter"})})]})})),W={height:"75%",width:"75%",marginTop:"15px"},z=Object(d.b)((function(e){return{current:e.log.current}}),{updateLogs:function(e){return function(){var t=Object(h.a)(u.a.mark((function t(c){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,L(),t.next=4,fetch("/logs/".concat(e.id),{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,c({type:x,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:v,payload:t.t0.response.data});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.updateLogs,c=e.current,s=Object(n.useState)(""),r=Object(I.a)(s,2),l=r[0],i=r[1],o=Object(n.useState)(!1),d=Object(I.a)(o,2),j=d[0],u=d[1],h=Object(n.useState)(""),b=Object(I.a)(h,2),O=b[0],m=b[1];Object(n.useEffect)((function(){c&&(u(c.attention),i(c.message),m(c.tech))}),[c]);return Object(a.jsxs)("div",{id:"edit-log-modal",className:"modal",style:W,children:[Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("h4",{className:"center",children:"Edit System Logs"}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{type:"text",name:"message",value:l,onChange:function(e){return i(e.target.value)}})})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"input-field",children:Object(a.jsxs)("select",{name:"tech",value:O,className:"browser-default",onChange:function(e){return m(e.target.value)},children:[Object(a.jsx)("option",{value:"",disabled:!0,children:"Select technician"}),Object(a.jsx)(Y,{})]})})}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("p",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:j,value:j,className:"filled-in",onChange:function(e){return u(!j)}}),Object(a.jsx)("span",{children:"Needs attention"})]})})})]}),Object(a.jsx)("div",{className:"modal-footer",children:Object(a.jsx)("a",{href:"#!",className:"waves-effect waves-light btn-large  modal-close",onClick:function(){if(""===l||""===O||""===j)A.a.toast({html:"Plesae enter the techs and message"});else{var e={id:c.id,message:l,attention:j,tech:O,date:new Date};t(e),A.a.toast({html:"Log updated by ".concat(O)}),u(!1),i(""),m("")}},children:"Enter"})})]})})),K=Object(d.b)(null,{addTechs:function(e){return function(){var t=Object(h.a)(u.a.mark((function t(c){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/techs",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,c({type:w,payload:n}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),c({type:E,payload:t.t0.response.statusText});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addTechs,c=Object(n.useState)(""),s=Object(I.a)(c,2),r=s[0],l=s[1],i=Object(n.useState)(""),o=Object(I.a)(i,2),d=o[0],j=o[1];return Object(a.jsxs)("div",{id:"add-tech-modal",className:"modal",children:[Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("h4",{className:"center",children:"Add New Techie"}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{type:"text",name:"firstName",value:r,onChange:function(e){return l(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"lastName",className:"active",children:"First Name"})]})]}),Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{type:"text",name:"lastName",value:d,onChange:function(e){return j(e.target.value)}}),Object(a.jsx)("label",{htmlFor:"lastName",className:"active",children:"last Name"})]})})]}),Object(a.jsx)("div",{className:"modal-footer",children:Object(a.jsx)("a",{href:"#!",className:"waves-effect waves-light btn-large  modal-close",onClick:function(){""===r||""===d?A.a.toast({html:"Please enter the techs and message"}):(t({firstName:r,lastName:d}),A.a.toast({html:"".concat(r," is added to tech-team")}),l(""),j(""))},children:"Enter"})})]})})),Q=Object(d.b)(null,{deleteTech:function(e){return function(){var t=Object(h.a)(u.a.mark((function t(c){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("/techs/".concat(e),{method:"DELETE"});case 3:c({type:T,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),c({type:E,payload:t.t0.response.statusText});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.tech,c=e.deleteTech;return Object(a.jsx)("li",{className:"collection-item",children:Object(a.jsxs)("div",{children:[t.firstName," ",t.lastName,Object(a.jsx)("a",{href:"#!",className:"secondary-content",onClick:function(){c(t.id),A.a.toast({html:"".concat(t.firstName," is removed from the tech-team")})},children:Object(a.jsx)("i",{className:"material-icons grey-text",children:"delete"})})]})})})),V=Object(d.b)((function(e){return{tech:e.tech}}),{getTechs:J})((function(e){var t=e.getTechs,c=e.tech,s=c.techs,r=c.loading;return Object(n.useEffect)((function(){t(),console.log(s)}),[]),Object(a.jsxs)("div",{id:"tech-list-modal",className:"modal bottom-sheet",children:[Object(a.jsx)("div",{className:"modal-content",children:Object(a.jsxs)("ul",{className:"collection with-header",children:[Object(a.jsx)("li",{className:"collection-header",children:Object(a.jsx)("h4",{className:"center",children:"Available technicians"})}),!r&&null!==s&&s.map((function(e){return Object(a.jsx)(Q,{tech:e},e.id)}))]})}),Object(a.jsx)("div",{className:"modal-footer",children:Object(a.jsx)("a",{href:"#!",className:"modal-close waves-effect waves-green btn-flat",children:"Close"})})]})})),X=c(8),Z=c(22),$=c(23),ee=c(12),te=c(2),ce={logs:null,current:null,loading:!1,error:null},ae={loading:!1,error:null,techs:null},ne=Object(X.combineReducers)({log:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(te.a)(Object(te.a)({},e),{},{logs:t.payload,loading:!1});case O:return Object(te.a)(Object(te.a)({},e),{},{logs:[].concat(Object(ee.a)(e.logs),[t.payload]),loading:!1});case m:return Object(te.a)(Object(te.a)({},e),{},{logs:e.logs.filter((function(e){return e.id!==t.payload})),loading:!1});case x:return Object(te.a)(Object(te.a)({},e),{},{logs:e.logs.map((function(e){return e.id===t.payload.id?t.payload:e}))});case N:return Object(te.a)(Object(te.a)({},e),{},{logs:t.payload});case g:return Object(te.a)(Object(te.a)({},e),{},{loading:!0});case p:return Object(te.a)(Object(te.a)({},e),{},{current:t.payload});case f:return Object(te.a)(Object(te.a)({},e),{},{current:null});case v:return console.error(t.payload),Object(te.a)(Object(te.a)({},e),{},{error:t.payload});default:return e}},tech:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(te.a)(Object(te.a)({},e),{},{techs:t.payload,loading:!1});case w:return Object(te.a)(Object(te.a)({},e),{},{techs:[].concat(Object(ee.a)(e.techs),[t.payload])});case T:return Object(te.a)(Object(te.a)({},e),{},{techs:e.techs.filter((function(e){return e.id!==t.payload}))});case g:return Object(te.a)(Object(te.a)({},e),{},{loading:!0});default:return e}}}),se=[$.a],re=Object(X.createStore)(ne,{},Object(Z.composeWithDevTools)(X.applyMiddleware.apply(void 0,se))),le=function(){return Object(n.useEffect)((function(){D.a.AutoInit()}),[]),Object(a.jsx)(d.a,{store:re,children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(k,{}),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(R,{}),Object(a.jsx)(V,{}),Object(a.jsx)(H,{}),Object(a.jsx)(q,{}),Object(a.jsx)(z,{}),Object(a.jsx)(K,{})]})]})})},ie=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};l.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(le,{})}),document.getElementById("root")),ie()}},[[40,1,2]]]);
//# sourceMappingURL=main.a2a48b6b.chunk.js.map