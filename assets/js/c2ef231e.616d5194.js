"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7034],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_label:"Airtable"},o="Airtable API wiki",l={unversionedId:"providers/airtable",id:"providers/airtable",title:"Airtable API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/airtable.md",sourceDirName:"providers",slug:"/providers/airtable",permalink:"/providers/airtable",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/providers/airtable.md",tags:[],version:"current",frontMatter:{sidebar_label:"Airtable"},sidebar:"nango",previous:{title:"Advanced configuration",permalink:"/reference/configuration"},next:{title:"Asana",permalink:"/providers/asana"}},s={},p=[{value:"Using Airtable with Nango",id:"using-airtable-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"airtable-api-wiki"},"Airtable API wiki"),(0,n.kt)("admonition",{title:"Working with the Airtable API?",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/main/docs/docs/providers/airtable.md"},"editing this page"),".  ")),(0,n.kt)("h2",{id:"using-airtable-with-nango"},"Using Airtable with Nango"),(0,n.kt)("p",null,"Provider template name in Nango: ",(0,n.kt)("inlineCode",{parentName:"p"},"airtable"),(0,n.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,n.kt)("a",{parentName:"p",href:"/reference/guide"},"getting started guide")," to add an OAuth integration with Airtable in 5 minutes."),(0,n.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rating: ",(0,n.kt)("inlineCode",{parentName:"strong"},"Easy & fast")),(0,n.kt)("br",{parentName:"p"}),"\n","Registering an app takes only a few minutes and you can start building immediately: ",(0,n.kt)("a",{parentName:"p",href:"https://airtable.com/developers/web/guides/oauth-integrations"},"App registration docs"),(0,n.kt)("br",{parentName:"p"}),"\n","To publish it (so any airtable user can install it) a few more details are needed (support email, terms) but no manual review: ",(0,n.kt)("a",{parentName:"p",href:"https://airtable.com/developers/web/guides/oauth-integrations#distributing-your-integration"},"Publishing docs")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airtable.com/developers/web/api/introduction"},"Web API docs (their REST API)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airtable.com/developers/web/api/scopes"},"List of OAuth scopes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://airtable.com/developers/web/api/rate-limits"},"Information on rate limits"))),(0,n.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"During the OAuth flow the user can decide to which resources (Bases) the app should have access to. ",(0,n.kt)("a",{parentName:"li",href:"https://airtable.com/developers/web/api/oauth-reference#resources"},"Read more here")),(0,n.kt)("li",{parentName:"ul"},"Refresh tokens also expire after 60 days of non use. Make sure you call ",(0,n.kt)("inlineCode",{parentName:"li"},"nango.getToken()")," at least every 60 days to trigger a refresh.")))}u.isMDXComponent=!0}}]);