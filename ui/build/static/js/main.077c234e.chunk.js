(this.webpackJsonpProyect_front_end=this.webpackJsonpProyect_front_end||[]).push([[0],{49:function(e,t,n){e.exports=n(64)},54:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(42),c=n.n(o);n(54),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(21),i=n(22),u=n(23),m=n(24),s=n(19),E=n(29),d=n(25);function f(){var e=Object(E.a)(["\nmutation Delete($token:String)\n{\ndeleteUser(token:$token)\n}\n"]);return f=function(){return e},e}function v(){var e=Object(E.a)(["\nmutation LogOut($token:String)\n{\nlogOutUser(token:$token)\n}\n"]);return v=function(){return e},e}function p(){var e=Object(E.a)(["\nmutation LogIn ($type:inputLogIn!)\n{\n logInUser(type:$type)\n}\n"]);return p=function(){return e},e}function b(){var e=Object(E.a)(["\nmutation Register($type:inputRegister!)\n{\nregisterUser(type:$type)\n}\n"]);return b=function(){return e},e}var h=Object(d.a)(b()),O=Object(d.a)(p()),g=Object(d.a)(v()),w=Object(d.a)(f()),j=n(14),k=n.n(j),y=n(18);var R=function(){var e=r.a.createRef(),t=r.a.createRef(),n={name:String,password:String},a=Object(y.a)(O),o=Object(s.a)(a,2),c=o[0],l=o[1],i=l.data,u=l.error;return l.loading?r.a.createElement("div",null,"Loading..."):u?(console.error(u),r.a.createElement("div",null,"Error!")):(i&&("verification error"!=i.logInUser?((new k.a).set("auth_token",i.logInUser),window.location.href="/PAGE"):alert(i.logInUser)),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(a){n.name=t.current.value,n.password=e.current.value,c({variables:{type:n}})}},r.a.createElement("input",{ref:t,placeholder:"Enter name"}),r.a.createElement("input",{ref:e,placeholder:"Enter password"}),r.a.createElement("button",{type:"submit"},"LOG IN"))))};var N=function(){var e=r.a.createRef(),t=r.a.createRef(),n=r.a.createRef(),a=r.a.createRef(),o={name:String,country:String,email:String,password:String},c=Object(y.a)(h),l=Object(s.a)(c,2),i=l[0],u=l[1],m=u.data,E=u.loading,d=u.error;return E?r.a.createElement("div",null,"Loading..."):d?(console.error(d),r.a.createElement("div",null,"Error!")):(m&&((new k.a).set("auth_token",m.registerUser),window.location.href="/PAGE"),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(r){o.name=e.current.value,o.country=t.current.value,o.email=n.current.value,o.password=a.current.value,i({variables:{type:o}})}},r.a.createElement("input",{ref:e,placeholder:"Enter name"}),r.a.createElement("input",{ref:t,placeholder:"Enter country"}),r.a.createElement("input",{ref:n,placeholder:"Enter email"}),r.a.createElement("input",{ref:a,placeholder:"Enter password"}),r.a.createElement("button",{type:"submit"},"REGISTER "))))},I=n(15),L=n(12),S=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex pa1 justify-between nowrap orange"},r.a.createElement("div",{className:"flex flex-fixed black"},r.a.createElement("div",{className:"fw7 mr1"},"Proyect"),r.a.createElement(I.b,{to:"/REGISTER",className:"ml1 no-underline black"},"REGISTER"),r.a.createElement("div",{className:"ml1"}),r.a.createElement(I.b,{to:"/LOG_IN",className:"ml1 no-underline black"},"LOG IN")))}}]),n}(a.Component),x=Object(L.f)(S);var G=Object(L.f)((function(){var e=function(){var e=new k.a,t=Object(y.a)(g),n=Object(s.a)(t,2),a=n[0],o=n[1],c=o.loading,l=o.error,i=o.data;return c?r.a.createElement("div",null,"Loading..."):l?(console.error(l),r.a.createElement("div",null,"Error!")):(i&&(e.remove("auth_token"),window.location.href="/"),a)}(),t=function(){var e=new k.a,t=Object(y.a)(w),n=Object(s.a)(t,2),a=n[0],o=n[1],c=o.loading,l=o.error,i=o.data;return c?r.a.createElement("div",null,"Loading..."):l?(console.error(l),r.a.createElement("div",null,"Error!")):(i&&(i.deleteUser?(e.remove("auth_token"),window.location.href="/"):(alert("Session Expired"),e.remove("auth_token"),window.location.href="/")),a)}(),n=new k.a;return null==n.get("auth_token")?(alert("USER HAVE NOT REGISTERED OR LOGGED IN"),window.location.href="/"):r.a.createElement("div",{className:"flex pa1 justify-between nowrap orange"},r.a.createElement("div",{className:"flex flex-fixed black"},r.a.createElement(I.b,{onClick:function(){var t=n.get("auth_token");e({variables:{token:t}})},className:"ml1 no-underline black"},"LOG OUT"),r.a.createElement("div",{className:"ml1"}),r.a.createElement(I.b,{onClick:function(){var e=n.get("auth_token");t({variables:{token:e}})},className:"ml1 no-underline black"},"DELETE")))}));var _=function(){r.a.createRef();var e=Object(y.a)(w),t=Object(s.a)(e,2),n=(t[0],t[1]),a=n.loading,o=n.error,c=n.data;return a?r.a.createElement("div",null,"Loading..."):o?(console.error(o),r.a.createElement("div",null,"Error!")):(c&&(window.location.href="/"),r.a.createElement("div",null))},U=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).inputref0=r.a.createRef(),a.inputref1=r.a.createRef(),a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),n}(a.Component),T=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"center w85"},r.a.createElement("div",{className:"ph3 pv1 background-gray"},r.a.createElement(L.c,null,r.a.createElement(L.a,{exact:!0,path:"/",component:x}),r.a.createElement(L.a,{exact:!0,path:"/LOG_IN",component:R}),r.a.createElement(L.a,{exact:!0,path:"/REGISTER",component:N}),r.a.createElement(L.a,{exact:!0,path:"/PAGE",component:G}),r.a.createElement(L.a,{exact:!0,path:"/DELETE",component:_}),r.a.createElement(L.a,{exact:!0,path:"/LOG_OUT",component:U}))))}}]),n}(a.Component),$=n(16),P=n(30),C=n(27),D=n(9),A=new $.a({link:new P.a({uri:"http://localhost:4001/graphql"}),cache:new C.a});c.a.render(r.a.createElement(I.a,null,r.a.createElement(D.a,{client:A},r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.077c234e.chunk.js.map