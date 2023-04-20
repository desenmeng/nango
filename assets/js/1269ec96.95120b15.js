"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4931],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),f=r,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2523:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"Atlassian"},o="Atlassian API wiki",s={unversionedId:"providers/atlassian",id:"providers/atlassian",title:"Atlassian API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/atlassian.md",sourceDirName:"providers",slug:"/providers/atlassian",permalink:"/providers/atlassian",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/atlassian.md",tags:[],version:"current",frontMatter:{sidebar_label:"Atlassian"},sidebar:"nango",previous:{title:"Asana",permalink:"/providers/asana"},next:{title:"BambooHR",permalink:"/providers/bamboohr"}},l={},p=[{value:"Using Atlassian with Nango",id:"using-atlassian-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"atlassian-api-wiki"},"Atlassian API wiki"),(0,r.kt)("admonition",{title:"Working with the Atlassian API?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/atlassian.md"},"editing this page"),".")),(0,r.kt)("h2",{id:"using-atlassian-with-nango"},"Using Atlassian with Nango"),(0,r.kt)("p",null,"Provider template name in Nango: ",(0,r.kt)("inlineCode",{parentName:"p"},"atlassian"),(0,r.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,r.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Atlassian in 5 minutes."),(0,r.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rating: ",(0,r.kt)("inlineCode",{parentName:"strong"},"Easy & fast")),"\nRegistering an app takes only a few minutes, and you can start building immediately: ",(0,r.kt)("a",{parentName:"p",href:"https://developer.atlassian.com/cloud/confluence/oauth-2-3lo-apps/#enabling-oauth-2-0--3lo-"},"App registration docs")),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/confluence/oauth-2-3lo-apps/#enabling-oauth-2-0--3lo-"},"Registering an App")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/confluence/oauth-2-3lo-apps"},"OAuth-related docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/scopes-for-oauth-2-3LO-and-forge-apps/#classic-scopes"},"List of OAuth scopes"))),(0,r.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"*",(0,r.kt)("strong",{parentName:"li"},"*To allow the possibility of refreshing the token"),". You must add ",(0,r.kt)("inlineCode",{parentName:"li"},"offline_access"),"to your scopes when creating the integration on the Nango UI.**"),(0,r.kt)("li",{parentName:"ul"},"When you create an OAuth 2.0 (3LO) app, it's private by default. Before using the integration, you must make your app public. If you want to make your app public find the how-to ",(0,r.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/#distributing-your-oauth-2-0--3lo--apps"},"here")),(0,r.kt)("li",{parentName:"ul"},"Refresh tokens will expire after 365 days of non use and will expire by 90 days if the resource owner is inactive for 90 days, Make sure you call ",(0,r.kt)("inlineCode",{parentName:"li"},"nango.getToken()")," at least every 365 days to trigger a refresh. See reference ",(0,r.kt)("a",{parentName:"li",href:"https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/#how-do-i-get-a-new-access-token--if-my-access-token-expires-or-is-revoked-"},"here"),".")))}u.isMDXComponent=!0}}]);