(this.webpackJsonppagination=this.webpackJsonppagination||[]).push([[0],{21:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(14),r=a.n(s),i=(a(21),a(5)),l=a.n(i),o=a(15),u=a(3),j=a(16),m=a.n(j),p=a(0),d=function(){return Object(p.jsxs)("div",{class:"d-flex align-items-center",children:[Object(p.jsx)("strong",{children:"Loading..."}),Object(p.jsx)("div",{class:"spinner-border ms-auto",role:"status","aria-hidden":"true"})]})},g=function(e){var t=e.posts;return e.loader?Object(p.jsx)(d,{}):Object(p.jsx)("ul",{className:"list-group mb-3",children:t.map((function(e){return Object(p.jsxs)("li",{className:"list-group-item",children:[e.id," ",e.title]},e.id)}))})},b=c.a.memo((function(e){for(var t=e.perPage,a=e.totalPosts,n=e.paginate,c=e.currentPage,s=[],r=1;r<=Math.ceil(a/t);r++)s.push(r);return Object(p.jsx)("nav",{"aria-label":"Page navigation example",children:Object(p.jsxs)("ul",{className:"pagination",children:[Object(p.jsx)("li",{className:"page-item ",onClick:function(){return n(1!==c?c-1:c)},children:Object(p.jsx)("a",{className:"page-link",children:"\u041d\u0430\u0437\u0430\u0434"})}),s.map((function(e){return Object(p.jsx)("li",{onClick:function(){return n(e)},className:c===e?"page-item active":"page-item",children:Object(p.jsx)("a",{className:"page-link",children:e})},e)})),Object(p.jsx)("li",{className:"page-item",onClick:function(){return n(c!==s.length?c+1:c)},children:Object(p.jsx)("a",{className:"page-link",children:"\u0412\u043f\u0435\u0440\u0435\u0434"})})]})})})),f=c.a.memo((function(e){var t=e.values,a=e.changePerPage,n=c.a.useState(0),s=Object(u.a)(n,2),r=s[0],i=s[1];return c.a.useEffect((function(){i(JSON.parse(window.localStorage.getItem("activeValue")))}),[]),c.a.useEffect((function(){window.localStorage.setItem("activeValue",r)}),[r]),Object(p.jsxs)("ul",{className:"nav nav-tabs",children:[Object(p.jsx)("p",{className:"text-primary mt-2 me-2",children:"\u041a\u043e\u043b-\u0432\u043e \u043f\u043e\u0441\u0442\u043e\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435:"}),t.map((function(e,t){return Object(p.jsx)("li",{className:t!==r?"nav-link ":"nav-link active",onClick:function(){a(e),i(t)},children:Object(p.jsx)("a",{children:e})},"".concat(e,"_").concat(t))}))]})}));var h=function(){var e=c.a.useState([]),t=Object(u.a)(e,2),a=t[0],n=t[1],s=c.a.useState(!1),r=Object(u.a)(s,2),i=r[0],j=r[1],d=c.a.useState(1),h=Object(u.a)(d,2),O=h[0],x=h[1],v=c.a.useState(10),N=Object(u.a)(v,2),w=N[0],P=N[1];c.a.useEffect((function(){(function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,m.a.get("https://jsonplaceholder.typicode.com/posts");case 3:t=e.sent,n(t.data),j(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.useEffect((function(){x(JSON.parse(window.localStorage.getItem("currentPage"))),P(JSON.parse(window.localStorage.getItem("perPage")))}),[]),c.a.useEffect((function(){window.localStorage.setItem("currentPage",O),window.localStorage.setItem("perPage",w)}),[O,w]);var S=O*w,k=S-w,I=a.slice(k,S);return Object(p.jsxs)("div",{className:"container mt-4",children:[Object(p.jsx)("h1",{className:"text-primary mb-4",children:"\u041c\u043e\u0438 \u043f\u043e\u0441\u0442\u044b"}),Object(p.jsx)(f,{values:[10,50,100],changePerPage:function(e){P(e),x(1)}}),Object(p.jsx)(g,{posts:I,loader:i}),Object(p.jsx)(b,{perPage:w,totalPosts:a.length,paginate:function(e){x(e)},currentPage:O})]})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.29d9624d.chunk.js.map