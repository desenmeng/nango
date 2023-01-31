"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={slug:"/",sidebar_label:"Introduction"},l="Get OAuth tokens for APIs. Fast & secure.",i={unversionedId:"introduction",id:"introduction",title:"Get OAuth tokens for APIs. Fast & secure.",description:"\u2b50 Nango at a glance",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/introduction.md",tags:[],version:"current",frontMatter:{slug:"/",sidebar_label:"Introduction"},sidebar:"nango",next:{title:"Quickstart",permalink:"/quickstart"}},s={},u=[{value:"\u2b50 Nango at a glance",id:"-nango-at-a-glance",level:2},{value:"\ud83d\udc7e Out of the box support for 40+ APIs",id:"-out-of-the-box-support-for-40-apis",level:2},{value:"\ud83d\udee1\ufe0f Small, self-contained &amp; ready for production",id:"\ufe0f-small-self-contained--ready-for-production",level:2},{value:"\ud83d\udd0d Where to learn more",id:"-where-to-learn-more",level:2},{value:"\ud83d\udc3b History",id:"-history",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-oauth-tokens-for-apis-fast--secure"},"Get OAuth tokens for APIs. Fast & secure."),(0,a.kt)("h2",{id:"-nango-at-a-glance"},"\u2b50 Nango at a glance"),(0,a.kt)("p",null,"Nango is a service that contains everything you need to work with APIs that use OAuth."),(0,a.kt)("p",null,"It contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a full OAuth dance for 40+ APIs"),(0,a.kt)("li",{parentName:"ul"},"a frontend SDK to trigger new OAuth flows"),(0,a.kt)("li",{parentName:"ul"},"a backend SDK & REST API to retrieve fresh access tokens for your API calls")),(0,a.kt)("p",null,"Nango is easy to try in 5 minutes and can be deployed in 15:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1-liner to start a new OAuth flow in your frontend:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let result = await nango.auth('github', '<user-id>');\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1-liner to retrieve a fresh access token (with our SDK or REST API):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"let token = await nango.getToken('github', '<user-id>');\n")),(0,a.kt)("h2",{id:"-out-of-the-box-support-for-40-apis"},"\ud83d\udc7e Out of the box support for 40+ APIs"),(0,a.kt)("p",null,"40+ APIs are preconfigured to work out-of-the-box. Including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"CRM"),": Front, Hubspot, Salesforce, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accounting"),": Xero, Sellsy, Zoho Books, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Developer tools"),": GitHub, GitLab, Linear, Jira etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Communication"),": Gmail, Microsoft Teams, Slack, Zoom etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Productivity"),": Asana, Airtable, Google Drive, Google Calendar, Trello, Google sheets, ClickUp etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Social"),": Twitter, LinkedIn, Reddit, Facebook etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nango.dev/oauth-providers"},"and more..."))),(0,a.kt)("p",null,"If your favorite API is missing ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango/issues/new"},"open a GitHub issue")," or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nango.dev/contribute-api"},"contribute it right away"),": The API configurations are just simple ",(0,a.kt)("a",{parentName:"p",href:"https://www.nango.dev/oauth-providers"},"entries in a YAML file"),"."),(0,a.kt)("h2",{id:"\ufe0f-small-self-contained--ready-for-production"},"\ud83d\udee1\ufe0f Small, self-contained & ready for production"),(0,a.kt)("p",null,"Nango is purposely small, focused on its one task and easy to deploy in production:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Runs as a single docker container"),(0,a.kt)("li",{parentName:"ul"},"Updates easily (",(0,a.kt)("inlineCode",{parentName:"li"},"docker pull"),")"),(0,a.kt)("li",{parentName:"ul"},"Secured with an API key"),(0,a.kt)("li",{parentName:"ul"},"Managed with a CLI")),(0,a.kt)("p",null,"Nango's community continuously maintains & expands API templates."),(0,a.kt)("h2",{id:"-where-to-learn-more"},"\ud83d\udd0d Where to learn more"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Explore ",(0,a.kt)("a",{parentName:"li",href:"https://nango.dev/oauth-providers"},"the full list of supported APIs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"contribute-api"},"Contribute a new provider")),(0,a.kt)("li",{parentName:"ul"},"Share feedback or ask questions on the ",(0,a.kt)("a",{parentName:"li",href:"https://nango.dev/slack"},"Slack community")),(0,a.kt)("li",{parentName:"ul"},"Check our ",(0,a.kt)("a",{parentName:"li",href:"https://www.nango.dev/blog"},"blog on native integrations"))),(0,a.kt)("h2",{id:"-history"},"\ud83d\udc3b History"),(0,a.kt)("p",null,"Pizzly was originally developed by the team at ",(0,a.kt)("a",{parentName:"p",href:"https://www.bearer.com/?ref=pizzly"},"Bearer")," with contributions of more than 40+ individuals. Over time the focus of Bearer shifted and they could no longer maintain Pizzly. In late 2022 the team at ",(0,a.kt)("a",{parentName:"p",href:"https://www.nango.dev"},"Nango")," adopted the project and has since maintained and evolved it together with the growing Nango community."))}c.isMDXComponent=!0}}]);