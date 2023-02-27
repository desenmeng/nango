"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(a),g=r,k=h["".concat(c,".").concat(g)]||h[g]||u[g]||i;return a?n.createElement(k,o(o({ref:t},l),{},{components:a})):n.createElement(k,o({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_label:"Stack Exchange"},o="Stack Exchange API wiki",s={unversionedId:"providers/stackexchange",id:"providers/stackexchange",title:"Stack Exchange API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/stackexchange.md",sourceDirName:"providers",slug:"/providers/stackexchange",permalink:"/providers/stackexchange",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/stackexchange.md",tags:[],version:"current",frontMatter:{sidebar_label:"Stack Exchange"},sidebar:"nango",previous:{title:"Splitwise",permalink:"/providers/splitwise"},next:{title:"Stripe",permalink:"/providers/stripe"}},c={},p=[{value:"Using Stack Exchange with Nango",id:"using-stack-exchange-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],l={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stack-exchange-api-wiki"},"Stack Exchange API wiki"),(0,r.kt)("admonition",{title:"Working with the Stack Exchange API?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/stackexchange.md"},"editing this page"),".")),(0,r.kt)("h2",{id:"using-stack-exchange-with-nango"},"Using Stack Exchange with Nango"),(0,r.kt)("p",null,"Stack Exchange uses the same API for ",(0,r.kt)("a",{parentName:"p",href:"https://stackexchange.com/sites"},"all its sites")," such as Stack Overflow, Server Fault, Super User, Mathematics, Ask Ubuntu etc."),(0,r.kt)("p",null,"Provider template name in Nango: ",(0,r.kt)("inlineCode",{parentName:"p"},"stackexchange"),(0,r.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,r.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Stack Exchange in 5 minutes."),(0,r.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"http://stackapps.com/apps/oauth/register"},"register your OAuth app here")," (make sure you are logged into your Stack Exchange account)."),(0,r.kt)("p",null,"There does not seem to be any approval process but once you are ready they can ",(0,r.kt)("a",{parentName:"p",href:"https://stackapps.com/questions/7/how-to-list-your-application-on-stack-apps"},"help you promote your OAuth app on StackApps!")),(0,r.kt)("h2",{id:"useful-links"},"Useful links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.stackexchange.com/docs"},"Stack Exchange API docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.stackexchange.com/docs/authentication#scope"},"Stack Exchange OAuth scopes"))),(0,r.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"By default access tokens expire (and cannot be refreshed). To get an access token that does not expire pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"no_expiry")," scope (along with your other scopes)"),(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("a",{parentName:"li",href:"https://api.stackexchange.com/docs/authentication#usage"},"usage notes here"),": You need to pass an additional ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," parameter together with your access token to benefit from higher API quotas.")))}u.isMDXComponent=!0}}]);