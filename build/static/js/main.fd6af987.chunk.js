(this.webpackJsonphms=this.webpackJsonphms||[]).push([[0],{27:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(19),r=t.n(n),l=(t(27),t(6)),i=t(2),d=t(4),o=t(0);var j=function(){var e=Object(s.useState)(null),c=Object(d.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)((function(){var e=localStorage.getItem("user");return e&&(e=JSON.parse(e),a(e)),function(){}}),[]),t&&Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-light",children:Object(o.jsx)("div",{className:"navbar-wrapper",children:Object(o.jsx)("div",{className:"navbar-container content",children:Object(o.jsxs)("div",{className:"collapse navbar-collapse show",id:"navbar-mobile",children:[Object(o.jsx)("ul",{className:"nav navbar-nav mr-auto float-left",children:Object(o.jsx)("li",{className:"nav-item d-block d-md-none",children:Object(o.jsx)("a",{className:"nav-link nav-menu-main menu-toggle hidden-xs",href:"#",children:Object(o.jsx)("i",{className:"ft-menu"})})})}),Object(o.jsxs)("ul",{className:"nav navbar-nav float-right",children:[Object(o.jsxs)("li",{className:"dropdown dropdown-notification nav-item",children:[Object(o.jsx)("a",{className:"nav-link nav-link-label",href:"#","data-toggle":"dropdown",children:Object(o.jsx)("i",{className:"ficon ft-mail",children:"             "})}),Object(o.jsx)("div",{className:"dropdown-menu dropdown-menu-right",children:Object(o.jsxs)("div",{className:"arrow_box_right",children:[Object(o.jsxs)("a",{className:"dropdown-item",href:"#",children:[Object(o.jsx)("i",{className:"ft-book"})," Read Mail"]}),Object(o.jsxs)("a",{className:"dropdown-item",href:"#",children:[Object(o.jsx)("i",{className:"ft-bookmark"})," Read Later"]}),Object(o.jsxs)("a",{className:"dropdown-item",href:"#",children:[Object(o.jsx)("i",{className:"ft-check-square"})," Mark all Read"]})]})})]}),Object(o.jsxs)("li",{className:"dropdown dropdown-user nav-item",children:[Object(o.jsxs)("a",{className:"dropdown-toggle nav-link dropdown-user-link",href:"#","data-toggle":"dropdown",style:{marginTop:"7px"},children:["             ",Object(o.jsxs)("span",{className:"avatar avatar-online",children:[Object(o.jsx)("img",{src:"/user.jpg",alt:"avatar"}),Object(o.jsx)("i",{})]})]}),Object(o.jsx)("div",{className:"dropdown-menu dropdown-menu-right",children:Object(o.jsxs)("div",{className:"arrow_box_right",children:[Object(o.jsx)("a",{className:"dropdown-item",href:"#",children:Object(o.jsxs)("span",{className:"avatar avatar-online",children:[Object(o.jsx)("img",{src:"/user.jpg",alt:"avatar"}),Object(o.jsx)("span",{className:"user-name text-bold-700 ml-1",children:t.result.username})]})}),Object(o.jsx)("div",{className:"dropdown-divider"}),Object(o.jsxs)("a",{className:"dropdown-item",href:"#",children:[Object(o.jsx)("i",{className:"ft-user"})," Edit Profile"]}),Object(o.jsx)("div",{className:"dropdown-divider"}),Object(o.jsxs)("a",{className:"dropdown-item",onClick:function(){localStorage.clear(),window.location.href="/"},children:[Object(o.jsx)("i",{className:"ft-power"})," Logout"]})]})})]})]})]})})})})})};var b=function(){return Object(o.jsxs)("div",{className:"main-menu menu-fixed menu-light menu-accordion    menu-shadow ","data-scroll-to-active":"true","data-img":"theme-assets/images/backgrounds/02.jpg",children:[Object(o.jsx)("div",{className:"navbar-header",children:Object(o.jsxs)("ul",{className:"nav navbar-nav flex-row",children:[Object(o.jsx)("li",{className:"nav-item mr-auto",children:Object(o.jsxs)(l.b,{className:"navbar-brand",to:"/",children:[Object(o.jsx)("img",{className:"brand-logo",alt:"Chameleon admin logo",src:"theme-assets/images/logo/logo.png"}),Object(o.jsx)("h3",{className:"brand-text",children:"HMS"})]})}),Object(o.jsx)("li",{className:"nav-item d-md-none",children:Object(o.jsx)("a",{className:"nav-link close-navbar",children:Object(o.jsx)("i",{className:"ft-x"})})})]})}),Object(o.jsx)("div",{className:"main-menu-content",children:Object(o.jsxs)("ul",{className:"navigation navigation-main",id:"main-menu-navigation","data-menu":"menu-navigation",children:[Object(o.jsx)("li",{className:"nav-item ".concat("/user"===window.location.pathname?"active":""),children:Object(o.jsxs)(l.b,{to:"/user",children:[Object(o.jsx)("i",{className:"ft-user"}),Object(o.jsx)("span",{className:"menu-title","data-i18n":"",children:"User"})]})}),Object(o.jsx)("li",{className:"nav-item ".concat("/users-list"===window.location.pathname?"active":""),children:Object(o.jsxs)(l.b,{to:"/users-list",children:[Object(o.jsx)("i",{className:"ft-list"}),Object(o.jsx)("span",{className:"menu-title","data-i18n":"",children:"Users List"})]})}),Object(o.jsx)("li",{className:"nav-item ".concat("/manage-staff"===window.location.pathname?"active":""),children:Object(o.jsxs)(l.b,{to:"/manage-staff",children:[Object(o.jsx)("i",{className:"ft-users"}),Object(o.jsx)("span",{className:"menu-title","data-i18n":"",children:"Manage Staff"})]})}),Object(o.jsx)("li",{className:"nav-item ".concat("/medication-report"===window.location.pathname?"active":""),children:Object(o.jsxs)(l.b,{to:"/medication-report",children:[Object(o.jsx)("i",{className:"ft-book"}),Object(o.jsx)("span",{className:"menu-title","data-i18n":"",children:"Madication Report"})]})})]})}),Object(o.jsx)("div",{className:"navigation-background"})]})},m=t(5),h=t.n(m),x=t(10),O=t(13),u="https://node-server-travel.herokuapp.com";var p=function(){var e=Object(s.useState)({email:"",password:""}),c=Object(d.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)({display:!1,type:"",message:""}),r=Object(d.a)(n,2),l=r[0],i=r[1],j=Object(s.useState)(!1),b=Object(d.a)(j,2),m=b[0],p=b[1],v=function(e,c){var s=Object(O.a)({},t);s[e]=c,a(s),console.log(s)},N=function(){var e=Object(x.a)(h.a.mark((function e(){var c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,c="".concat(u,"/api/auth"),e.next=5,fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 5:return s=e.sent,e.next=8,s.json();case 8:s=e.sent,console.log("11111111111",s),1===s.code&&(localStorage.setItem("user",JSON.stringify(s)),window.location.reload()),i({display:!0,class:1===s.code?"success":"danger",type:1===s.code?"Success":"Falied",message:s.message}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.error(e.t0.message),i({display:!0,class:"danger",type:"Failed",message:e.t0.message});case 18:p(!1);case 19:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{className:"content-wrapper",style:{backgroundImage:'url("/hms.jpg")',backgroundSize:"cover",height:"100vh",overflow:"hidden",marginTop:"-5rem"},children:Object(o.jsx)("div",{className:"content-body",style:{marginTop:"15rem"},children:Object(o.jsx)("section",{className:"basic-inputs",children:Object(o.jsx)("div",{className:"row match-height justify-content-center",children:Object(o.jsx)("div",{className:"col-xl-4 col-lg-4 col-md-12",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsxs)("h4",{className:"card-title text-center",style:{fontSize:"3rem"},children:[" ",Object(o.jsx)("img",{width:"100",src:"/theme-assets/images/logo/logo-2.png"})," Login"]})}),Object(o.jsxs)("div",{className:"card-block",children:[l.display&&Object(o.jsxs)("div",{class:"col-11 m-auto alert alert-".concat(l.class," mb-2"),role:"alert",children:[Object(o.jsxs)("strong",{children:[" ",l.type,"! "]})," ",l.message]}),Object(o.jsxs)("div",{className:"card-body w-75 m-auto",children:[Object(o.jsx)("h5",{className:"mt-2",children:"Email"}),Object(o.jsx)("fieldset",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",value:t.email,onChange:function(e){return v("email",e.target.value)}})}),Object(o.jsx)("h5",{className:"mt-2",children:"Password"}),Object(o.jsx)("fieldset",{className:"form-group",children:Object(o.jsx)("input",{type:"password",className:"form-control",value:t.password,onChange:function(e){return v("password",e.target.value)}})}),Object(o.jsx)("div",{className:"form-group mt-5 mb-5",children:Object(o.jsx)("button",{type:"button",className:"btn mb-1 btn-primary btn-lg btn-block",disabled:m,onClick:N,children:m?"Loading ...":"Submit"})})]})]})]})})})})})})};var v=function(){return Object(o.jsx)("div",{className:"app-content content",children:Object(o.jsx)("div",{className:"content-wrapper mt-5",children:Object(o.jsx)("div",{className:"col-md-8 col-sm-12 m-auto",children:Object(o.jsx)("div",{className:"card",style:{opacity:"0.9"},children:Object(o.jsx)("div",{className:"card-content collapse show",children:Object(o.jsx)("div",{className:"card-body mt-5 mb-5",children:Object(o.jsxs)("div",{className:"col-8 m-auto",children:[Object(o.jsx)("h1",{style:{borderBottomStyle:"groove",borderBlockEndWidth:"1px",borderBottomColor:"#4693ab",color:"#e3a372"},children:" Welcome"}),Object(o.jsxs)("p",{className:"mt-5",children:["We are delighted that you have selected our hotel. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"On behalf of the entire team, I extend you a very warm welcome and trust your stay with us will be both enjoyable and comfortable. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"The hotel offers a selection of business services and facilities which are detailed in the booklet, placed on the writing-table in your room. ",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:"Should you require any assistance or have any specific requirements, please do not hesitate to contact me on extension ( 9999 )."})," ",Object(o.jsx)("br",{})]})]})})})})})})})};var N=function(){var e=Object(i.f)().id,c=Object(s.useState)([]),t=Object(d.a)(c,2),a=t[0],n=t[1],r=Object(s.useState)({id:0,role_id:0,username:"",email:"",password:"",is_active:!0}),l=Object(d.a)(r,2),j=l[0],b=l[1],m=Object(s.useState)({display:!1,type:"",message:""}),p=Object(d.a)(m,2),v=p[0],N=p[1],f=Object(s.useState)(!1),g=Object(d.a)(f,2),w=g[0],y=g[1],k=function(e,c){var t=Object(O.a)({},j);t[e]=c,b(t),console.log(t)},S=function(){var c=Object(x.a)(h.a.mark((function c(){var t,s;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return y(!0),c.prev=1,t="".concat(u,"/api/users"),c.next=5,fetch(t,{method:e?"PUT":"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(j)});case 5:return s=c.sent,c.next=8,s.json();case 8:s=c.sent,N({display:!0,class:1===s.code?"success":"danger",type:1===s.code?"Success":"Falied",message:s.message}),setTimeout((function(){window.location.href="/users-list"}),2e3),c.next=17;break;case 13:c.prev=13,c.t0=c.catch(1),console.error(c.t0.message),N({display:!0,class:"danger",type:"Failed",message:c.t0.message});case 17:y(!1);case 18:case"end":return c.stop()}}),c,null,[[1,13]])})));return function(){return c.apply(this,arguments)}}(),C=function(){var c=Object(x.a)(h.a.mark((function c(){var t,s;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t="".concat(u,"/api/setups/roles"),c.next=4,fetch(t);case 4:return s=c.sent,c.next=7,s.json();case 7:s=c.sent,n(s.result),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),console.error(c.t0.message);case 14:e&&E();case 15:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(){return c.apply(this,arguments)}}(),E=function(){var c=Object(x.a)(h.a.mark((function c(){var t,s,a;return h.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t="".concat(u,"/api/users/").concat(e),c.next=4,fetch(t);case 4:return s=c.sent,c.next=7,s.json();case 7:1===(s=c.sent).code&&(a=s.result[0],b({id:a.id,username:a.username,email:a.email})),c.next=14;break;case 11:c.prev=11,c.t0=c.catch(0),console.error(c.t0.message);case 14:case"end":return c.stop()}}),c,null,[[0,11]])})));return function(){return c.apply(this,arguments)}}();return Object(s.useEffect)((function(){return C(),function(){}}),[]),a&&Object(o.jsx)("div",{className:"app-content content",children:Object(o.jsxs)("div",{className:"content-wrapper",children:[Object(o.jsx)("div",{className:"content-wrapper-before"}),Object(o.jsxs)("div",{className:"content-header row",children:[Object(o.jsx)("div",{className:"content-header-left col-md-4 col-12 mb-2",children:Object(o.jsxs)("h3",{className:"content-header-title",children:[e?"Update":"Create "," User"]})}),Object(o.jsx)("div",{className:"content-header-right col-md-8 col-12",children:Object(o.jsx)("div",{className:"breadcrumbs-top float-md-right",children:Object(o.jsx)("div",{className:"breadcrumb-wrapper mr-1",children:Object(o.jsxs)("ol",{className:"breadcrumb",children:[Object(o.jsx)("li",{className:"breadcrumb-item",children:Object(o.jsx)("a",{href:"index.html",children:"Home"})}),Object(o.jsx)("li",{className:"breadcrumb-item active",children:"User"})]})})})})]}),Object(o.jsx)("div",{className:"content-body",children:Object(o.jsx)("section",{className:"basic-inputs",children:Object(o.jsx)("div",{className:"row match-height justify-content-center",children:Object(o.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-header",children:Object(o.jsx)("h4",{className:"card-title",children:"User Information"})}),Object(o.jsxs)("div",{className:"card-block",children:[v.display&&Object(o.jsxs)("div",{class:"col-6 m-auto alert alert-".concat(v.class," mb-2"),role:"alert",children:[Object(o.jsxs)("strong",{children:[" ",v.type,"! "]})," ",v.message]}),Object(o.jsxs)("div",{className:"card-body col-md-5 col-xs-12 m-auto",children:[Object(o.jsx)("h5",{className:"mt-2",children:"User Type"}),Object(o.jsx)("fieldset",{className:"form-group",children:Object(o.jsxs)("select",{className:"form-control",id:"basicSelect",onChange:function(e){return k("role_id",e.target.value)},children:[Object(o.jsx)("option",{value:j.role_id,children:" Please select ..."}),a.map((function(e){return Object(o.jsxs)("option",{value:e.id,children:[" ",e.name]})}))]})}),Object(o.jsx)("h5",{className:"mt-2",children:"Name"}),Object(o.jsx)("fieldset",{className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",value:j.username,onChange:function(e){return k("username",e.target.value)}})}),Object(o.jsx)("h5",{className:"mt-2",children:"Email"}),Object(o.jsx)("fieldset",{className:"form-group",children:Object(o.jsx)("input",{type:"email",className:"form-control",value:j.email,onChange:function(e){return k("email",e.target.value)}})}),Object(o.jsx)("h5",{className:"mt-2",children:"Password"}),Object(o.jsx)("fieldset",{className:"form-group",children:Object(o.jsx)("input",{type:"password",className:"form-control",value:j.password,onChange:function(e){return k("password",e.target.value)}})}),Object(o.jsx)("div",{className:"form-group mt-5 mb-5",children:Object(o.jsx)("button",{type:"button",disabled:w,className:"btn mb-1 btn-primary btn-lg btn-block",onClick:S,children:"Submit"})})]})]})]})})})})})]})})};var f=function(){var e=Object(s.useState)([]),c=Object(d.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(!1),r=Object(d.a)(n,2),i=(r[0],r[1]),j=function(){var e=Object(x.a)(h.a.mark((function e(){var c,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,c="".concat(u,"/api/users"),e.next=5,fetch(c);case 5:return t=e.sent,e.next=8,t.json();case 8:t=e.sent,a(t.result),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:i(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return j(),function(){}}),[]),t&&Object(o.jsx)("div",{className:"app-content content",children:Object(o.jsxs)("div",{className:"content-wrapper",children:[Object(o.jsx)("div",{className:"content-wrapper-before"}),Object(o.jsxs)("div",{className:"content-header row",children:[Object(o.jsx)("div",{className:"content-header-left col-md-4 col-12 mb-2",children:Object(o.jsx)("h3",{className:"content-header-title",children:"Users"})}),Object(o.jsx)("div",{className:"content-header-right col-md-8 col-12",children:Object(o.jsx)("div",{className:"breadcrumbs-top float-md-right",children:Object(o.jsx)("div",{className:"breadcrumb-wrapper mr-1",children:Object(o.jsxs)("ol",{className:"breadcrumb",children:[Object(o.jsx)("li",{className:"breadcrumb-item",children:Object(o.jsx)("a",{href:"index.html",children:"Home"})}),Object(o.jsx)("li",{className:"breadcrumb-item active",children:"Existing Users"})]})})})})]}),Object(o.jsx)("div",{className:"content-body",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsxs)("div",{className:"card-header",children:[Object(o.jsx)("h4",{className:"card-title",children:"Existing Users"}),Object(o.jsx)("a",{className:"heading-elements-toggle",children:Object(o.jsx)("i",{className:"la la-ellipsis-v font-medium-3"})}),Object(o.jsx)("div",{className:"heading-elements",children:Object(o.jsxs)("ul",{className:"list-inline mb-0",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{"data-action":"collapse",children:Object(o.jsx)("i",{className:"ft-minus"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{"data-action":"expand",children:Object(o.jsx)("i",{className:"ft-maximize"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{"data-action":"close",children:Object(o.jsx)("i",{className:"ft-x"})})})]})})]}),Object(o.jsx)("div",{className:"card-content collapse show",children:Object(o.jsx)("div",{className:"table-responsive",children:Object(o.jsxs)("table",{className:"table table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"ID"}),Object(o.jsx)("th",{scope:"col",children:"Role"}),Object(o.jsx)("th",{scope:"col",children:"Username"}),Object(o.jsx)("th",{scope:"col",children:"Email"}),Object(o.jsx)("th",{scope:"col",children:" Actions"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("th",{scope:"row",children:[" ",e.id," "]}),Object(o.jsxs)("td",{children:[" ",e.rolename]}),Object(o.jsxs)("td",{children:[" ",e.username," "]}),Object(o.jsxs)("td",{children:[" ",e.email," "]}),Object(o.jsx)("td",{"data-toggle":"tooltip","data-placement":"right",title:"Edit ".concat(e.username),children:Object(o.jsx)(l.b,{to:"/user/".concat(e.id),children:Object(o.jsx)("i",{className:"ft-edit"})})})]})}))})]})})})]})})})})]})})};var g=function(){var e=Object(s.useState)([]),c=Object(d.a)(e,2),t=c[0],a=c[1],n=Object(s.useState)(!1),r=Object(d.a)(n,2),i=(r[0],r[1]),j=function(){var e=Object(x.a)(h.a.mark((function e(){var c,t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,c="".concat(u,"/api/users"),e.next=5,fetch(c);case 5:return t=e.sent,e.next=8,t.json();case 8:t=e.sent,a(t.result),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0.message);case 15:i(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){return j(),function(){}}),[]),t&&Object(o.jsx)("div",{className:"app-content content",children:Object(o.jsxs)("div",{className:"content-wrapper",children:[Object(o.jsx)("div",{className:"content-wrapper-before"}),Object(o.jsxs)("div",{className:"content-header row",children:[Object(o.jsx)("div",{className:"content-header-left col-md-4 col-12 mb-2",children:Object(o.jsx)("h3",{className:"content-header-title",children:"Users"})}),Object(o.jsx)("div",{className:"content-header-right col-md-8 col-12",children:Object(o.jsx)("div",{className:"breadcrumbs-top float-md-right",children:Object(o.jsx)("div",{className:"breadcrumb-wrapper mr-1",children:Object(o.jsxs)("ol",{className:"breadcrumb",children:[Object(o.jsx)("li",{className:"breadcrumb-item",children:Object(o.jsx)("a",{href:"index.html",children:"Home"})}),Object(o.jsx)("li",{className:"breadcrumb-item active",children:"Existing Users"})]})})})})]}),Object(o.jsx)("div",{className:"content-body",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsxs)("div",{className:"card-header",children:[Object(o.jsx)("h4",{className:"card-title",children:"Existing Users"}),Object(o.jsx)("a",{className:"heading-elements-toggle",children:Object(o.jsx)("i",{className:"la la-ellipsis-v font-medium-3"})}),Object(o.jsx)("div",{className:"heading-elements",children:Object(o.jsxs)("ul",{className:"list-inline mb-0",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{"data-action":"collapse",children:Object(o.jsx)("i",{className:"ft-minus"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{"data-action":"expand",children:Object(o.jsx)("i",{className:"ft-maximize"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{"data-action":"close",children:Object(o.jsx)("i",{className:"ft-x"})})})]})})]}),Object(o.jsx)("div",{className:"card-content collapse show",children:Object(o.jsx)("div",{className:"table-responsive",children:Object(o.jsxs)("table",{className:"table table-striped",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"ID"}),Object(o.jsx)("th",{scope:"col",children:"Role"}),Object(o.jsx)("th",{scope:"col",children:"Username"}),Object(o.jsx)("th",{scope:"col",children:"Email"}),Object(o.jsx)("th",{scope:"col",children:" Actions"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("th",{scope:"row",children:[" ",e.id," "]}),Object(o.jsxs)("td",{children:[" ",e.rolename]}),Object(o.jsxs)("td",{children:[" ",e.username," "]}),Object(o.jsxs)("td",{children:[" ",e.email," "]}),Object(o.jsx)("td",{"data-toggle":"tooltip","data-placement":"right",title:"Edit ".concat(e.username),children:Object(o.jsx)(l.b,{to:"/user/".concat(e.id),children:Object(o.jsx)("i",{className:"ft-edit"})})})]})}))})]})})})]})})})})]})})},w=t(21);var y=function(){return Object(o.jsx)("div",{className:"app-content content",children:Object(o.jsxs)("div",{className:"content-wrapper",children:[Object(o.jsx)("div",{className:"content-wrapper-before"}),Object(o.jsxs)("div",{className:"content-header row",children:[Object(o.jsx)("div",{className:"content-header-left col-md-4 col-12 mb-2",children:Object(o.jsx)("h3",{className:"content-header-title",children:"Monthly Medication Report"})}),Object(o.jsx)("div",{className:"content-header-right col-md-8 col-12",children:Object(o.jsx)("div",{className:"breadcrumbs-top float-md-right",children:Object(o.jsx)("div",{className:"breadcrumb-wrapper mr-1",children:Object(o.jsxs)("ol",{className:"breadcrumb",children:[Object(o.jsx)("li",{className:"breadcrumb-item",children:Object(o.jsx)("a",{href:"index.html",children:"Home"})}),Object(o.jsx)("li",{className:"breadcrumb-item active",children:"Medication Report"})]})})})})]}),Object(o.jsx)("div",{className:"content-body",children:Object(o.jsx)("section",{id:"chartjs-pie-charts",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12 m-auto mt-5",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsxs)("div",{className:"card-header",children:[Object(o.jsx)("h4",{className:"card-title",children:"Graphical Representation"}),Object(o.jsx)("a",{className:"heading-elements-toggle",children:Object(o.jsx)("i",{className:"la la-ellipsis-v font-medium-3"})}),Object(o.jsx)("div",{className:"heading-elements",children:Object(o.jsxs)("ul",{className:"list-inline mb-0",children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{"data-action":"collapse",children:Object(o.jsx)("i",{className:"ft-minus"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{"data-action":"reload",children:Object(o.jsx)("i",{className:"ft-rotate-cw"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{"data-action":"expand",children:Object(o.jsx)("i",{className:"ft-maximize"})})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{"data-action":"close",children:Object(o.jsx)("i",{className:"ft-x"})})})]})})]}),Object(o.jsx)("div",{className:"card-content collapse show",children:Object(o.jsx)("div",{className:"card-body",children:Object(o.jsx)("div",{className:"col-sm-12 col-md-5 m-auto",children:Object(o.jsx)(w.PieChart,{data:[{title:"Morning",value:20,color:"#E38627"},{title:"Afternoon",value:50,color:"#C13C37"},{title:"Evening",value:30,color:"#6A2135"}],totalValue:100,lineWidth:100,label:function(e){return e.dataEntry.value+"%"},labelStyle:{fontSize:"5px",fontFamily:"sans-serif",fill:"white"}})})})})]})})})})})]})})},k=t(22),S=t.n(k);var C=function(){var e=this;return Object(o.jsx)("div",{className:"app-content content",children:Object(o.jsx)("div",{className:"content-wrapper",children:Object(o.jsx)("fieldset",{className:"form-group",children:Object(o.jsx)(S.a,{style:{width:"100%",height:"40px",paddingLeft:"16px",marginTop:"2px",marginBottom:"100px"},onPlaceSelected:function(c){return function(c){c.formatted_address;var t=c.address_components;e.getCity(t),e.getArea(t),e.getState(t),c.geometry.location.lat(),c.geometry.location.lng(),console.log("address")}(c)},types:["(regions)"],className:"form-control"})})})})};t(36);var E=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(l.a,{children:Object(o.jsx)(i.c,{children:localStorage.getItem("user")?Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{}),Object(o.jsx)(b,{}),Object(o.jsx)(i.a,{exact:!0,path:"/",children:Object(o.jsx)(v,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/user",children:Object(o.jsx)(N,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/user/:id",children:Object(o.jsx)(N,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/users-list",children:Object(o.jsx)(f,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/manage-staff",children:Object(o.jsx)(g,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/medication-report",children:Object(o.jsx)(y,{})}),Object(o.jsx)(i.a,{exact:!0,path:"/send-location",children:Object(o.jsx)(C,{})})]}):Object(o.jsx)(i.a,{exact:!0,path:"/",children:Object(o.jsx)(p,{})})})})})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,r=c.getTTFB;t(e),s(e),a(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(E,{})}),document.getElementById("root")),U()}},[[37,1,2]]]);
//# sourceMappingURL=main.fd6af987.chunk.js.map