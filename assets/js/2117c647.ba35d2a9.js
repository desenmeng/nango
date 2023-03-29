"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6085],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_label:"Twitter"},o="Twitter API wiki",l={unversionedId:"providers/twitter",id:"providers/twitter",title:"Twitter API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/twitter.md",sourceDirName:"providers",slug:"/providers/twitter",permalink:"/providers/twitter",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/twitter.md",tags:[],version:"current",frontMatter:{sidebar_label:"Twitter"},sidebar:"nango",previous:{title:"Trello",permalink:"/providers/trello"},next:{title:"Wave",permalink:"/providers/wave_accounting"}},p={},s=[{value:"Using Twitter with Nango",id:"using-twitter-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"twitter-api-wiki"},"Twitter API wiki"),(0,i.kt)("admonition",{title:"Working with the Twitter API?",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/twitter.md"},"editing this page"),".")),(0,i.kt)("h2",{id:"using-twitter-with-nango"},"Using Twitter with Nango"),(0,i.kt)("p",null,"Provider template name in Nango: ",(0,i.kt)("inlineCode",{parentName:"p"},"twitter"),(0,i.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,i.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Twitter in 5 minutes."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Nango uses Twitter\'s OAuth 1 flow. As a result, you should not use the "OAuth 2.0 Client ID and Client Secret" but the "Consumer Keys" instead ("API Key" and "API Key Secret").')),(0,i.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"No information yet, feel free to contribute it (or check out ",(0,i.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")),(0,i.kt)("h2",{id:"useful-links"},"Useful links"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"No links yet, feel free to contribute it (or check out ",(0,i.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")),(0,i.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"No gotchas yet, feel free to contribute it (or check out ",(0,i.kt)("a",{parentName:"em",href:"/providers/airtable"},"airtable")," for an example)")))}u.isMDXComponent=!0}}]);