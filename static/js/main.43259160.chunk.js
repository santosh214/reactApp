(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{52:function(e,t,c){},53:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),i=c(23),r=c.n(i),o=(c(52),c(53),c(89)),a=c(85),j=c(90),l=c.p+"static/media/cube.ffa437d5.svg",d=c(14),b=c(1);var h=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.a,{collapseOnSelect:!0,className:" pr-5",expand:"lg",bg:"dark",variant:"dark",children:[Object(b.jsx)(d.LinkContainer,{to:"/home",children:Object(b.jsx)(o.a.Brand,{className:"App-logo  pr-5",children:Object(b.jsx)(a.a,{src:l})})}),Object(b.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",children:Object(b.jsxs)(j.a,{className:"mr-auto",children:[Object(b.jsx)(d.LinkContainer,{to:"/home",children:Object(b.jsx)(j.a.Link,{children:"Home"})}),Object(b.jsx)(d.LinkContainer,{to:"/about",children:Object(b.jsx)(j.a.Link,{children:"About"})}),Object(b.jsx)(d.LinkContainer,{to:"/contact",children:Object(b.jsx)(j.a.Link,{children:"Contact"})}),Object(b.jsx)(d.LinkContainer,{to:"/event",children:Object(b.jsx)(j.a.Link,{children:"Event"})}),Object(b.jsx)(d.LinkContainer,{to:"/api",children:Object(b.jsx)(j.a.Link,{children:"Api"})}),Object(b.jsx)(d.LinkContainer,{to:"/apiWithAxios",children:Object(b.jsx)(j.a.Link,{children:"Api With Axios"})}),Object(b.jsx)(d.LinkContainer,{to:"/ClassComponent",children:Object(b.jsx)(j.a.Link,{children:"Class Component"})})]})})]})})},u=c(18),x=c(19),O=c(22),p=c(20),m=c(91),v=function(e){Object(O.a)(c,e);var t=Object(p.a)(c);function c(){return Object(u.a)(this,c),t.apply(this,arguments)}return Object(x.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"text-center",children:"Home"}),Object(b.jsx)(m.a,{children:Object(b.jsx)(m.a.Body,{children:Object(b.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur, cum fuga sed soluta distinctio quo quis, voluptatibus ipsum id suscipit laborum neque voluptatum ex repellat dicta iusto ea eius."}),Object(b.jsxs)("footer",{className:"blockquote-footer",children:["Section ",Object(b.jsx)("cite",{title:"Source Title",children:"Home"})]})]})})}),Object(b.jsx)(m.a,{children:Object(b.jsx)(m.a.Body,{children:Object(b.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur, cum fuga sed soluta distinctio quo quis, voluptatibus ipsum id suscipit laborum neque voluptatum ex repellat dicta iusto ea eius."}),Object(b.jsxs)("footer",{className:"blockquote-footer",children:["Section ",Object(b.jsx)("cite",{title:"Source Title",children:"Home"})]})]})})})]})}}]),c}(s.Component),f=c(21);var k=function(){var e=Object(s.useState)("santosh"),t=Object(f.a)(e,2),c=t[0],n=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"text-center",children:"Contact"}),Object(b.jsx)(m.a,{children:Object(b.jsx)(m.a.Body,{children:Object(b.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(b.jsx)("h2",{children:"Contact Section"}),Object(b.jsxs)("footer",{className:"blockquote-footer",children:["This is a ",Object(b.jsx)("cite",{title:"Source Title",children:"Contact Section"})]})]})})}),Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h1",{children:c}),Object(b.jsx)("button",{onClick:function(){n("SantoshSingh")},children:"Update Data"})]})]})};c(64);var g=c(24),N=c(6),C=c(86),y=c(87),L=c(29);var q=function(){return Object(b.jsx)("div",{className:"fixed-bottom bg-dark text-white",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("h3",{className:"text-center",children:"CUBEDOTS"})})}),Object(b.jsx)(C.a,{className:"text-center pb-3",children:Object(b.jsxs)(y.a,{children:[Object(b.jsx)("span",{className:"pr-3",children:Object(b.jsx)(L.a,{})}),Object(b.jsx)("span",{className:"pr-3",children:Object(b.jsx)(L.c,{})}),Object(b.jsx)("span",{className:"pr-3",children:Object(b.jsx)(L.b,{})})]})})]})})};var S=c(26),A=c.n(S),B=c(88);var T=function(e){Object(O.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(u.a)(this,c);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={posts:[]},e}return Object(x.a)(c,[{key:"componentDidMount",value:function(){var e=this;A.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){console.log(t.data),e.setState({posts:t.data})}))}},{key:"render",value:function(){var e=this.state.posts;return Object(b.jsxs)("div",{className:"text-center my-2 mx-5",children:[Object(b.jsxs)("h1",{className:"text-success",children:[" ",Object(b.jsx)("u",{children:"Api In class Component"})," "]}),Object(b.jsxs)(B.a,{striped:!0,bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Id"}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:"Body"})]})}),Object(b.jsx)("tbody",{children:e.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id}),Object(b.jsx)("td",{children:e.title}),Object(b.jsx)("td",{children:e.body})]})}))})]})]})}}]),c}(s.Component),w=function(e){Object(O.a)(c,e);var t=Object(p.a)(c);function c(){return Object(u.a)(this,c),t.apply(this,arguments)}return Object(x.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Class component"})})}}]),c}(s.Component);r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsxs)(g.BrowserRouter,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(N.g,{children:[Object(b.jsx)(N.d,{exact:!0,path:"/",component:v}),Object(b.jsx)(N.d,{path:"/home",component:v}),Object(b.jsx)(N.d,{path:"/contact",component:k}),Object(b.jsx)(N.d,{path:"/about",component:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"text-center",children:"About"}),Object(b.jsx)(m.a,{children:Object(b.jsx)(m.a.Body,{children:Object(b.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur, cum fuga sed soluta distinctio quo quis, voluptatibus ipsum id suscipit laborum neque voluptatum ex repellat dicta iusto ea eius."}),Object(b.jsxs)("footer",{className:"blockquote-footer",children:["Section ",Object(b.jsx)("cite",{title:"Source Title",children:"About"})]})]})})})]})}}),Object(b.jsx)(N.d,{path:"/event",component:function(){var e=Object(s.useState)(""),t=Object(f.a)(e,2),c=t[0],n=t[1];return console.log("_______HEllo"),Object(b.jsxs)("div",{className:"text-center my-5",children:[Object(b.jsxs)("h1",{children:["hello ",c]}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){n("santosh singh")},children:"Click ME"})]})}}),Object(b.jsx)(N.d,{path:"/api",component:function(){var e=Object(s.useState)([]),t=Object(f.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){A.a.get("https://jsonplaceholder.typicode.com/photos").then((function(e){console.log(e.data),n(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(b.jsxs)("div",{className:"text-center my-2 mx-5",children:[Object(b.jsxs)("h1",{className:"text-success",children:[" ",Object(b.jsx)("u",{children:"..Api in function component"})," "]}),Object(b.jsxs)(B.a,{striped:!0,bordered:!0,hover:!0,children:[Object(b.jsx)("thead",{className:"bg-secondary text-white",children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{scope:"col",children:"id"}),Object(b.jsx)("th",{scope:"col",children:"Title"}),Object(b.jsx)("th",{scope:"col",children:"Photos"}),Object(b.jsx)("th",{scope:"col",children:"URL"})]})}),Object(b.jsx)("tbody",{children:c.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.id},e.id),Object(b.jsx)("td",{children:e.title},e.title),Object(b.jsxs)("td",{children:[Object(b.jsx)(a.a,{src:e.thumbnailUrl,width:"50",height:"50"})," "]},e.thumbnailUrl),Object(b.jsxs)("td",{children:[Object(b.jsxs)("a",{href:e.url,children:[" ",e.url]})," "]},e.url)]})}))})]})]})}}),Object(b.jsx)(N.d,{path:"/apiWithAxios",component:T}),Object(b.jsx)(N.d,{path:"/ClassComponent",component:w})]}),Object(b.jsx)(q,{})]})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.43259160.chunk.js.map