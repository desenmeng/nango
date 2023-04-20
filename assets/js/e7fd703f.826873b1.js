"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,k=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return n?o.createElement(k,a(a({ref:t},c),{},{components:n})):o.createElement(k,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_label:"Zoho Desk"},a="Zoho desk API wiki",s={unversionedId:"providers/zoho-desk",id:"providers/zoho-desk",title:"Zoho desk API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/zoho-desk.md",sourceDirName:"providers",slug:"/providers/zoho-desk",permalink:"/providers/zoho-desk",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/zoho-desk.md",tags:[],version:"current",frontMatter:{sidebar_label:"Zoho Desk"},sidebar:"nango",previous:{title:"Zoho CRM",permalink:"/providers/zoho-crm"},next:{title:"Zoho Invoice",permalink:"/providers/zoho-invoice"}},p={},l=[{value:"Using Zoho Desk with Nango",id:"using-zoho-desk-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zoho-desk-api-wiki"},"Zoho desk API wiki"),(0,r.kt)("admonition",{title:"Working with the Zoho Desk API?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/zoho-desk.md"},"editing this page"),".")),(0,r.kt)("h2",{id:"using-zoho-desk-with-nango"},"Using Zoho Desk with Nango"),(0,r.kt)("p",null,"Provider template name in Nango: ",(0,r.kt)("inlineCode",{parentName:"p"},"zoho-desk"),(0,r.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,r.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Zoho Desk in 5 minutes."),(0,r.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rating: ",(0,r.kt)("inlineCode",{parentName:"strong"},"Easy & fast")),"\nRegistering an app takes only a few minutes, and you can start building immediately: ",(0,r.kt)("a",{parentName:"p",href:"https://desk.zoho.com/DeskAPIDocument#OauthTokens#RegisteringAClient"},"App registration docs")),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://desk.zoho.com/DeskAPIDocument#OauthTokens#RegisteringAClient"},"How to register an Application")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://desk.zoho.com/DeskAPIDocument#OauthTokens"},"OAuth-related docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://desk.zoho.com/DeskAPIDocument#OauthTokens#OAuthScopes"},"List of OAuth scopes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://desk.zoho.com/DeskAPIDocument#Introduction"},"Web API docs (their REST API)"))),(0,r.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Depending on the region your account was created in, you must apply the extension params when initiating the auth flow. For example here. You should use ",(0,r.kt)("em",{parentName:"li"},"eu")," for an account in the eu region. ",(0,r.kt)("inlineCode",{parentName:"li"},"nango.auth('amazon', '1', {params: {extension: 'eu'}})"))))}u.isMDXComponent=!0}}]);