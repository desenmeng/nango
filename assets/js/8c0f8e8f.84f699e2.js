"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8118],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,g=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),r=a(7294),o=a(6010),s=a(2389),l=a(7392),i=a(7094),c=a(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:s,defaultValue:d,values:h,groupId:g,className:m}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=h??y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,l.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==k&&!b.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,i.U)(),[N,S]=(0,r.useState)(k),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=g){const e=v[g];null!=e&&e!==N&&b.some((t=>t.value===e))&&S(e)}const O=e=>{const t=e.currentTarget,a=_.indexOf(t),n=b[a].value;n!==N&&(T(t),S(n),null!=g&&w(g,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;a=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;a=_[t]??_[_.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},m)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>_.push(e),onKeyDown:E,onClick:O},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,s.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},3619:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),s=a(5162);const l={},i="Core concepts",c={unversionedId:"nango-sync/use-nango/core-concepts",id:"nango-sync/use-nango/core-concepts",title:"Core concepts",description:"If you are new to Nango Sync please read this briefly: It will introduce all of the important concepts that help you get the most out of Sync fast.",source:"@site/docs/nango-sync/use-nango/core-concepts.md",sourceDirName:"nango-sync/use-nango",slug:"/nango-sync/use-nango/core-concepts",permalink:"/nango-sync/use-nango/core-concepts",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/nango-sync/use-nango/core-concepts.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Quickstart \ud83d\ude80",permalink:"/nango-sync/quickstart"},next:{title:"Create Syncs",permalink:"/nango-sync/use-nango/sync-all-options"}},u={},p=[{value:"Syncs: How Nango moves your data",id:"syncs-how-nango-moves-your-data",level:2},{value:"Storing &amp; accessing the synced data",id:"storing--accessing-the-synced-data",level:2},{value:"Full example of a Nango Sync",id:"exampleSync",level:2}],d={toc:p};function h(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"core-concepts"},"Core concepts"),(0,r.kt)("p",null,"If you are new to Nango Sync please read this briefly: It will introduce all of the important concepts that help you get the most out of Sync fast."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:a(1832).Z},(0,r.kt)("img",{alt:"Nango Sync Core concepts",src:a(7787).Z,width:"1368",height:"748"}))),(0,r.kt)("h2",{id:"syncs-how-nango-moves-your-data"},"Syncs: How Nango moves your data"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Syncs")," are the main objects in Nango: They represent a ",(0,r.kt)("strong",{parentName:"p"},"continuous task")," that periodically pulls data from an external API and syncs it to your database."),(0,r.kt)("p",null,"Syncs contain two important parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Where and how to ",(0,r.kt)("strong",{parentName:"li"},"fetch the data")," from the external API"),(0,r.kt)("li",{parentName:"ul"},"Where and how to ",(0,r.kt)("strong",{parentName:"li"},"transform and store the data")," once it has been fetched")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Each Sync periodically performs HTTP requests to a specific external endpoint, for a specific account. The account's auth token is inserted in HTTP requests by Nango.")),(0,r.kt)("p",null,"The fastest way to understand Syncs is with some quick facts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You ",(0,r.kt)("a",{parentName:"li",href:"/nango-sync/use-nango/manage-syncs"},"create Syncs")," (and manage them) from your application's code using the Nango SDK or REST API"),(0,r.kt)("li",{parentName:"ul"},"You can have as many Syncs as you want"),(0,r.kt)("li",{parentName:"ul"},"Syncs periodically write the data they fetch to a database & table of your choosing (more on this below)"),(0,r.kt)("li",{parentName:"ul"},"Syncs automatically deal with paginated data, OAuth token refreshes etc.")),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/nango-sync/use-nango/sync-all-options"},"creating & managing Syncs")," or look at the ",(0,r.kt)("a",{parentName:"p",href:"#exampleSync"},"full example of a Sync")," below."),(0,r.kt)("h2",{id:"storing--accessing-the-synced-data"},"Storing & accessing the synced data"),(0,r.kt)("p",null,"Accessing the data synced by Nango is easy: Just read it from your database."),(0,r.kt)("p",null,'Every record contains a timestamp of when it was last updated, so fetching changes is also easy. Nango can tell your application every time a sync refresh (called a "sync job" in Nango) has finished and how many records have been inserted/updated.'),(0,r.kt)("p",null,"Nango also handles the data transformation from JSON to SQL (in addition to storing the raw data):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nango automatically transforms the synced data from ",(0,r.kt)("a",{parentName:"li",href:"/nango-sync/use-nango/schema-mappings"},"JSON to SQL")),(0,r.kt)("li",{parentName:"ul"},"You can ",(0,r.kt)("a",{parentName:"li",href:"/nango-sync/use-nango/sync-metadata"},"attach Metadata")," to every record Nango syncs in (e.g. user id, account id)"),(0,r.kt)("li",{parentName:"ul"},"You decide the destination table(s), for each Sync, Nango syncs the data to")),(0,r.kt)("p",null,"This means that you can ",(0,r.kt)("strong",{parentName:"p"},"tell Nango to write the data from many Syncs to the same database table"),", so your application only has a single table to query (e.g. fetch HubSpot contacts, GitHub repos, Google Calendar events etc). And thanks to the attached metadata it is easy to know which records belong to which user, company or anything else that matters to your application."),(0,r.kt)("p",null,"The easiest way to see this all is with a simple example."),(0,r.kt)("h2",{id:"exampleSync"},"Full example of a Nango Sync"),(0,r.kt)("p",null,"Let's assume we have a SaaS application where users can signup and import all the Stargazers of their GitHub repos, so we can let them filter them, show them in the UI etc."),(0,r.kt)("p",null,"Because the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/rest/activity/starring#list-stargazers"},"GitHub API endpoint")," to fetch stargazers is per repo we will setup one Sync in Nango per user per GitHub repo."),(0,r.kt)("p",null,"In practice it looks like this:"),(0,r.kt)(o.Z,{groupId:"programming-language",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"node",label:"Node SDK",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function addStargazersSync(owner, repo, user_id) {\n    \n    let config = {\n        headers: {                                    // HTTP headers to be sent with every API request\n            'Accept': 'application/vnd.github+json'   \n        },\n        paging_header_link_rel: 'next'                // For pagination\n        unique_key: 'id',                             // For deduping records\n        mapped_table: 'github_stargazers',            // Name of the destination table\n        metadata: {                                   // Metadata that will get attached to every synced row\n            user_id: user_id,                         \n            github_org: owner,                        \n            github_repo: repo                         \n        },\n    };\n\n    new Nango().sync(`https://api.github.com/repos/${owner}/${repo}/stargazers`, nango_options); \n}\n\n// Add a Sync each for the nango repo and the nango-sync repo for the user with id 1\naddStargazersSync('NangoHQ', 'nango', 1);\naddStargazersSync('NangoHQ', 'nango-sync', 1);\n"))),(0,r.kt)(s.Z,{value:"curl",label:"REST API (curl)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'  curl --request POST \\\n--url http://localhost:3003/v1/syncs \\\n --header "Content-type: application/json" \\\n --data \'\n  {\n    "url": "https://api.github.com/repos/nangohq/nango/stargazers",\n    "headers": {\n      "Accept": "application/vnd.github+json"\n    },\n    "paging_header_link_rel": "next",\n    "unique_key": "id",\n    "mapped_table": "github_stargazers",\n    "metadata": {\n      "user_id": 1,\n      "github_org": "NangoHQ",\n      "github_repo": "nango"\n    }\n  }\'\n# headers: HTTP headers to be sent with every API request\n# paging_header_link_rel: For pagination\n# unique_key: For deduping records\n# mapped_tabl: Name of the destination table\n# metadata: Metadata that will get attached to every synced row\n')))),(0,r.kt)("p",null,"In our database Nango creates a single table called ",(0,r.kt)("inlineCode",{parentName:"p"},"github_stargazers"),", which contains the data from both Syncs (much simplified here):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"github_stargazers\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502         emitted_at         \u2502 user_id \u2502 github_repo \u2502  login  \u2502            avatar_url            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-12-07 14:01:52.019+00 \u2502       1 \u2502 nango       \u2502 sradu   \u2502 https://avatars.githubusercon... \u2502\n\u2502 2022-12-07 14:01:52.028+00 \u2502       1 \u2502 nango       \u2502 bastien \u2502 https://avatars.githubusercon... \u2502\n\u2502 2022-12-07 14:01:52.093+00 \u2502       1 \u2502 nango-sync  \u2502 sradu   \u2502 https://avatars.githubusercon... \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"Remember that Syncs are continuous, so Nango will automatically keep the data in this table up to date even as more people star the repos (or stars get removed)."),(0,r.kt)("p",null,"In our application we can now run any SQL query we want to fetch the data and use it in our application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- Fetching all stargazers from all repos of user with id 1\nSELECT * FROM github_stargazers WHERE user_id = 1;\n\n-- Count the stargazers per repo for all repos of user with id 1\nSELECT github_org, github_repo, COUNT(*)\nFROM github_stargazers\nWHERE user_id = '1'\nGROUP BY github_org, github_repo;\n")))}h.isMDXComponent=!0},1832:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/sync-core-concepts-c584045b3cee2bc3eea4a82bd0d9c387.png"},7787:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/sync-core-concepts-c584045b3cee2bc3eea4a82bd0d9c387.png"}}]);