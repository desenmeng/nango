"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Docusign"},a="Docusign API wiki",s={unversionedId:"providers/docusign",id:"providers/docusign",title:"Docusign API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/docusign.md",sourceDirName:"providers",slug:"/providers/docusign",permalink:"/providers/docusign",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/docusign.md",tags:[],version:"current",frontMatter:{sidebar_label:"Docusign"},sidebar:"nango",previous:{title:"Dropbox",permalink:"/providers/dropbox"},next:{title:"Epic Games",permalink:"/providers/epic-games"}},p={},c=[{value:"Using Docusign with Nango",id:"using-docusign-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docusign-api-wiki"},"Docusign API wiki"),(0,i.kt)("admonition",{title:"Working with the Docusign API?",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/docusign.md"},"editing this page"),".")),(0,i.kt)("h2",{id:"using-docusign-with-nango"},"Using Docusign with Nango"),(0,i.kt)("p",null,"Provider template name in Nango: ",(0,i.kt)("inlineCode",{parentName:"p"},"docusign"),(0,i.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,i.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Docusign in 5 minutes."),(0,i.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rating: ",(0,i.kt)("inlineCode",{parentName:"strong"},"Easy & fast")),"\nRegistering an app takes only a few minutes, and you can start building immediately: ",(0,i.kt)("a",{parentName:"p",href:"https://developers.docusign.com/platform/build-integration/"},"App registration docs")),(0,i.kt)("h2",{id:"useful-links"},"Useful links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.docusign.com/platform/build-integration/"},"How to register an Application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.docusign.com/platform/auth/authcode"},"OAuth-related docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.docusign.com/platform/auth/reference/scopes"},"List of OAuth scopes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.docusign.com/docs"},"Web API docs (their REST API)"))),(0,i.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"))}u.isMDXComponent=!0}}]);