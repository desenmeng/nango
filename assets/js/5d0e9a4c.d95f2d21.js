"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1696],{3905:(e,n,a)=>{a.d(n,{Zo:()=>i,kt:()=>d});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),u=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},i=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=r,y=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return a?t.createElement(y,l(l({ref:n},i),{},{components:a})):t.createElement(y,l({ref:n},i))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:a,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},n)}},5488:(e,n,a)=>{a.d(n,{Z:()=>d});var t=a(7462),r=a(7294),o=a(6010),l=a(2389),s=a(7392),c=a(7094),u=a(2466);const i="tabList__CuJ",p="tabItem_LNqP";function m(e){var n;const{lazy:a,block:l,defaultValue:m,values:d,groupId:y,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??h.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),f=(0,s.l)(b,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:T}=(0,c.U)(),[S,N]=(0,r.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=y){const e=k[y];null!=e&&e!==S&&b.some((n=>n.value===e))&&N(e)}const P=e=>{const n=e.currentTarget,a=w.indexOf(n),t=b[a].value;t!==S&&(j(n),N(t),null!=y&&T(y,String(t)))},E=e=>{var n;let a=null;switch(e.key){case"Enter":P(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;a=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;a=w[n]??w[w.length-1];break}}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",i)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},b.map((e=>{let{value:n,label:a,attributes:l}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:S===n?0:-1,"aria-selected":S===n,key:n,ref:e=>w.push(e),onKeyDown:E,onClick:P},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":S===n})}),a??n)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==S})))))}function d(e){const n=(0,l.Z)();return r.createElement(m,(0,t.Z)({key:String(n)},e))}},2912:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var t=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const s={},c="Manage Syncs",u={unversionedId:"nango-sync/use-nango/manage-syncs",id:"nango-sync/use-nango/manage-syncs",title:"Manage Syncs",description:"Nango lets you adapt and control Syncs over time.",source:"@site/docs/nango-sync/use-nango/manage-syncs.md",sourceDirName:"nango-sync/use-nango",slug:"/nango-sync/use-nango/manage-syncs",permalink:"/nango-sync/use-nango/manage-syncs",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/nango-sync/use-nango/manage-syncs.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Request Authentication",permalink:"/nango-sync/use-nango/sync-auth"},next:{title:"Sync notifications",permalink:"/nango-sync/use-nango/sync-notifications"}},i={},p=[{value:"Pause a Sync",id:"pause-a-sync",level:3},{value:"Resume a Sync",id:"resume-a-sync",level:3},{value:"Cancel a Sync",id:"cancel-a-sync",level:3},{value:"Trigger a Sync job",id:"trigger-a-sync-job",level:3},{value:"Problems with your Sync? We are here to help!",id:"problems-with-your-sync-we-are-here-to-help",level:2}],m={toc:p};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"manage-syncs"},"Manage Syncs"),(0,r.kt)("p",null,"Nango lets you adapt and control Syncs over time. "),(0,r.kt)("p",null,"Syncs can be managed with Nango's SDKs, REST API and soon an Admin Dashboard. "),(0,r.kt)("p",null,"Nango's SDKs and REST API let you embed managing capabilities in your product, so that your end users can perform actions such as: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Refresh a Sync"),(0,r.kt)("li",{parentName:"ul"},"Stop a Sync"),(0,r.kt)("li",{parentName:"ul"},"View when the next Sync job is due (or when the last on ran)"),(0,r.kt)("li",{parentName:"ul"},"View how many records were created/updated")),(0,r.kt)("h3",{id:"pause-a-sync"},"Pause a Sync"),(0,r.kt)("p",null,"Pauses a Sync so no further sync jobs will run. You can reactivate the Sync with ",(0,r.kt)("a",{parentName:"p",href:"#resume-a-sync"},"Resume"),"."),(0,r.kt)(o.Z,{groupId:"programming-language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"node",label:"Node SDK",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Nango } from '@nangohq/node-client'\n\nnango.pause(123); // Param is the 'sync_id' returned upon Sync creation.\n"))),(0,r.kt)(l.Z,{value:"curl",label:"REST API (curl)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'curl --request PUT \\\n--url http://localhost:3003/v1/syncs \\\n--header "Content-type: application/json" \\\n--data \'{\n  "action": "pause",\n  "sync_id": 123\n}\'\n')))),(0,r.kt)("h3",{id:"resume-a-sync"},"Resume a Sync"),(0,r.kt)("p",null,"Resumes a Sync if it has been paused before: A first sync job will trigger immediately, afterwards your set frequency or cron schedule will continue as usual."),(0,r.kt)(o.Z,{groupId:"programming-language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"node",label:"Node SDK",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Nango } from '@nangohq/node-client'\n\nnango.resume(123); // Param is the 'sync_id' returned upon Sync creation.\n"))),(0,r.kt)(l.Z,{value:"curl",label:"REST API (curl)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'curl --request PUT \\\n--url http://localhost:3003/v1/syncs \\\n--header "Content-type: application/json" \\\n--data \'{\n  "action": "resume",\n  "sync_id": 123\n}\'\n')))),(0,r.kt)("h3",{id:"cancel-a-sync"},"Cancel a Sync"),(0,r.kt)("p",null,"Permanently stops a Sync from running. Cancelled Syncs cannot be reactivated."),(0,r.kt)(o.Z,{groupId:"programming-language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"node",label:"Node SDK",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Nango } from '@nangohq/node-client'\n\nnango.cancel(123); // Param is the 'sync_id' returned upon Sync creation.\n"))),(0,r.kt)(l.Z,{value:"curl",label:"REST API (curl)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'curl --request PUT \\\n--url http://localhost:3003/v1/syncs \\\n--header "Content-type: application/json" \\\n--data \'{\n  "action": "cancel",\n  "sync_id": 123\n}\'\n')))),(0,r.kt)("h3",{id:"trigger-a-sync-job"},"Trigger a Sync job"),(0,r.kt)("p",null,"Manually trigger a Sync to run a sync job immediately. This is useful if you e.g. want to allow customers to trigger an immediate run in the UI. After the job runs the normal frequency or cron schedule will continue as usual."),(0,r.kt)(o.Z,{groupId:"programming-language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"node",label:"Node SDK",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Nango } from '@nangohq/node-client'\n\nnango.trigger(123); // Param is the 'sync_id' returned upon Sync creation.\n"))),(0,r.kt)(l.Z,{value:"curl",label:"REST API (curl)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'curl --request PUT \\\n--url http://localhost:3003/v1/syncs \\\n--header "Content-type: application/json" \\\n--data \'{\n  "action": "trigger",\n  "sync_id": 123\n}\'\n')))),(0,r.kt)("h2",{id:"problems-with-your-sync-we-are-here-to-help"},"Problems with your Sync? We are here to help!"),(0,r.kt)("p",null,"If you need help or run into issues, please reach out! We are online and responsive all day on the ",(0,r.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"Slack Community"),"."))}d.isMDXComponent=!0}}]);