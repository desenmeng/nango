"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2001],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1512:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"Asana"},o="Asana API wiki",s={unversionedId:"providers/asana",id:"providers/asana",title:"Asana API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/asana.md",sourceDirName:"providers",slug:"/providers/asana",permalink:"/providers/asana",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/asana.md",tags:[],version:"current",frontMatter:{sidebar_label:"Asana"},sidebar:"nango",previous:{title:"Amazon",permalink:"/providers/amazon"},next:{title:"Atlassian",permalink:"/providers/atlassian"}},p={},l=[{value:"Using Asana with Nango",id:"using-asana-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"asana-api-wiki"},"Asana API wiki"),(0,r.kt)("admonition",{title:"Working with the Asana API?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/asana.md"},"editing this page"),".")),(0,r.kt)("h2",{id:"using-asana-with-nango"},"Using Asana with Nango"),(0,r.kt)("p",null,"Provider template name in Nango: ",(0,r.kt)("inlineCode",{parentName:"p"},"asana"),(0,r.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,r.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Asana in 5 minutes."),(0,r.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rating: ",(0,r.kt)("inlineCode",{parentName:"strong"},"Easy & fast")),"\nRegistering an app takes only a few minutes, and you can start building immediately: ",(0,r.kt)("a",{parentName:"p",href:"https://developers.asana.com/docs/oauth#register-an-application"},"App registration docs")),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/oauth#register-an-application"},"How to register an Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/oauth"},"OAuth-related docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.asana.com/docs/oauth#oauth-scopes"},"List of OAuth scopes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.asana.com/reference/rest-api-reference"},"Web API docs (their REST API)"))),(0,r.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To refresh the token simple use ",(0,r.kt)("inlineCode",{parentName:"li"},"nango.getToken()")," to generate new set of tokens")))}u.isMDXComponent=!0}}]);