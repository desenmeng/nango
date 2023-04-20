"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6223],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),v=n,g=d["".concat(p,".").concat(v)]||d[v]||u[v]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_label:"Strava"},o="Strava API wiki",s={unversionedId:"providers/strava",id:"providers/strava",title:"Strava API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/strava.md",sourceDirName:"providers",slug:"/providers/strava",permalink:"/providers/strava",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/strava.md",tags:[],version:"current",frontMatter:{sidebar_label:"Strava"},sidebar:"nango",previous:{title:"Stack Exchange",permalink:"/providers/stackexchange"},next:{title:"Stripe",permalink:"/providers/stripe"}},p={},l=[{value:"Using Strava with Nango",id:"using-strava-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"strava-api-wiki"},"Strava API wiki"),(0,n.kt)("admonition",{title:"Working with the Strava API?",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/strava.md"},"editing this page"),".")),(0,n.kt)("h2",{id:"using-strava-with-nango"},"Using Strava with Nango"),(0,n.kt)("p",null,"Provider template name in Nango: ",(0,n.kt)("inlineCode",{parentName:"p"},"strava"),(0,n.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,n.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Strava in 5 minutes."),(0,n.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rating: ",(0,n.kt)("inlineCode",{parentName:"strong"},"Easy & fast")),"\nRegistering an app takes only a few minutes, and you can start building immediately: ",(0,n.kt)("a",{parentName:"p",href:"https://developers.strava.com/docs/getting-started/#account"},"App registration docs")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/getting-started/#account"},"How to register an Application")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/authentication"},"OAuth-related docs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/docs/authentication/#:~:text=is%20auto.-,scope,-required%20string%2C%20in"},"List of OAuth scopes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.strava.com/playground"},"Web API docs (their REST API)"))),(0,n.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When adding the callback URL to Strava, you only have to add the domain of the URL and not the complete URL path.")))}u.isMDXComponent=!0}}]);