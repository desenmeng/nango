"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=i,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_label:"OneDrive"},a="OneDrive API wiki",s={unversionedId:"providers/one-drive",id:"providers/one-drive",title:"OneDrive API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/one-drive.md",sourceDirName:"providers",slug:"/providers/one-drive",permalink:"/providers/one-drive",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/one-drive.md",tags:[],version:"current",frontMatter:{sidebar_label:"OneDrive"},sidebar:"nango",previous:{title:"Notion",permalink:"/providers/notion"},next:{title:"Outreach",permalink:"/providers/outreach"}},p={},l=[{value:"Using OneDrive with Nango",id:"using-onedrive-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"onedrive-api-wiki"},"OneDrive API wiki"),(0,i.kt)("admonition",{title:"Working with the OneDrive API?",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/one-drive.md"},"editing this page"),".")),(0,i.kt)("h2",{id:"using-onedrive-with-nango"},"Using OneDrive with Nango"),(0,i.kt)("p",null,"Provider template name in Nango: ",(0,i.kt)("inlineCode",{parentName:"p"},"oneDrive"),(0,i.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,i.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with One drive in 5 minutes."),(0,i.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rating: ",(0,i.kt)("inlineCode",{parentName:"strong"},"Easy & fast")),"\nRegistering an app takes only a few minutes, and you can start building immediately: ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/graph-oauth?view=odsp-graph-online#register-your-app"},"App registration docs")),(0,i.kt)("h2",{id:"useful-links"},"Useful links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/graph-oauth?view=odsp-graph-online#register-your-app"},"How to register an Application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/authentication?view=odsp-graph-online"},"OAuth-related docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/graph-oauth?view=odsp-graph-online#authentication-scopes"},"List of OAuth scopes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/onedrive/developer/rest-api/?view=odsp-graph-online"},"Web API docs (their REST API)"))),(0,i.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To get refresh token, you will need to add ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"offline_access"))," to the list of your scopes."),(0,i.kt)("li",{parentName:"ul"},"To refresh the token simple use ",(0,i.kt)("inlineCode",{parentName:"li"},"nango.getToken()")," to generate new set of tokens")))}d.isMDXComponent=!0}}]);