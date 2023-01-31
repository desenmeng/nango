"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,h=g["".concat(i,".").concat(d)]||g[d]||u[d]||o;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Quickstart"},l="\ud83d\ude80\xa0Quickstart",c={unversionedId:"quickstart",id:"quickstart",title:"\ud83d\ude80\xa0Quickstart",description:"Clone the repo and start Nango:",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/quickstart",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/quickstart.md",tags:[],version:"current",frontMatter:{sidebar_label:"Quickstart"},sidebar:"nango",previous:{title:"Introduction",permalink:"/"},next:{title:"Step-by-step guide",permalink:"/reference/guide"}},i={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"\ud83d\ude80\xa0Quickstart"),(0,a.kt)("p",null,"Clone the repo and start Nango:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/NangoHQ/nango.git && cd nango\ndocker compose up\n")),(0,a.kt)("p",null,"Make sure you have a client ID & secret ready for the API you want to use, e.g. for GitHub ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app"},"register here"),". Use ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3003/oauth/callback")," as the callback URL."),(0,a.kt)("p",null,"In a new terminal window, configure a new Github integration with our CLI (outside the ",(0,a.kt)("inlineCode",{parentName:"p"},"nango")," repo):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cd ~ && npx nango config:create github github <client-id> <client-secret> "user,public_repo"\n')),(0,a.kt)("p",null,"In a new terminal window, go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"nango")," repo and serve the demo page: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd packages/frontend && python3 -m http.server 8000\n")),(0,a.kt)("p",null,"Go to the demo ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8000/bin/quickstart.html"},"page")," and start an OAuth flow with ",(0,a.kt)("inlineCode",{parentName:"p"},"github"),"\xa0as the config key and\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"1"),"\xa0as the connection ID."),(0,a.kt)("p",null,"Finally, let's fetch a fresh access token to start making Github API calls!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Option 1: Fetch the token with Nango's REST API:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XGET -G 'http://localhost:3003/connection/1?provider-config_key=github'\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Option 2: Fetch the token with Nango's Node SDK:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i nangohq/node\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Nango } from '@nangohq/node';\nlet nango = new Nango();\nvar githubAccessToken = await nango.accessToken('github', '1');\n")),(0,a.kt)("p",null,"Et voil\xe0 ! Nango will permanently store & refresh your tokens safely. Wanna to go live? Check out the ",(0,a.kt)("a",{parentName:"p",href:"category/deploy-nango-sync-open-source"},"Self-Hosted")," & ",(0,a.kt)("a",{parentName:"p",href:"cloud"},"Cloud")," options."))}u.isMDXComponent=!0}}]);