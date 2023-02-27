"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),r=n(6010),l=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:h,className:g}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,i.l)(f,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,s.U)(),[w,T]=(0,o.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=h){const e=b[h];null!=e&&e!==w&&f.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==w&&(I(t),T(a),null!=h&&v(h,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},g)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:C},l,{className:(0,r.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,o.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},2257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),l=n(5162);const i={sidebar_label:"Quickstart \ud83d\ude80"},s="Quickstart: Add Nango to your app",u={unversionedId:"quickstart",id:"quickstart",title:"Quickstart: Add Nango to your app",description:"Just want to see Nango in Action? Check out our 1 minute demo video",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/quickstart",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/quickstart.md",tags:[],version:"current",frontMatter:{sidebar_label:"Quickstart \ud83d\ude80"},sidebar:"nango",previous:{title:"Introduction",permalink:"/"},next:{title:"CLI",permalink:"/reference/cli"}},c={},p=[{value:"Step 1: Get your Nango instance ready",id:"step-1-get-your-nango-instance-ready",level:2},{value:"Step 2: Configure your API/OAuth provider",id:"step-2-configure-your-apioauth-provider",level:2},{value:"Step 3: Trigger the OAuth flow from the frontend",id:"step-3-trigger-the-oauth-flow-from-the-frontend",level:2},{value:"Step 4: Obtain the access token from the backend",id:"step-4-obtain-the-access-token-from-the-backend",level:2},{value:"CLI",id:"cli",level:3},{value:"Backend SDK",id:"backend-sdk",level:3},{value:"REST API",id:"rest-api",level:3},{value:"Need help?",id:"need-help",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart-add-nango-to-your-app"},"Quickstart: Add Nango to your app"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Just want to see Nango in Action? Check out our ",(0,o.kt)("a",{parentName:"p",href:"/#demo"},"1 minute demo video"))),(0,o.kt)("p",null,"Follow these 4 steps to run OAuth flows with Nango in your app in 15 minutes."),(0,o.kt)("h2",{id:"step-1-get-your-nango-instance-ready"},"Step 1: Get your Nango instance ready"),(0,o.kt)("p",null,"The easiest and fastest way to get a production ready Nango instance is with Nango Cloud."),(0,o.kt)(r.Z,{groupId:"deployment",queryString:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cloud",label:"Nango Cloud",mdxType:"TabItem"},"Sign up for a Nango Cloud account in 30 seconds:",(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://www.nango.dev/start",style:{cursor:"pointer"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/NangoHQ/nango/6f49ab92c0ffc18c1d0f44d9bd96c62ac97aaa8d/docs/static/img/nango-deploy-button.svg",alt:"Try Nango Cloud",width:"215",style:{marginTop:"10px"}})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"Copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret Key")," from the welcome email. In your terminal open your ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc"),"/",(0,o.kt)("inlineCode",{parentName:"p"},".zshrc")," (or equivalent) and add:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export NANGO_HOSTPORT=https://api.nango.dev\nexport NANGO_SECRET_KEY=<SECRET-KEY>  # Replace with your Secret Key\n")),(0,o.kt)("p",null,"Restart your terminal. Then run this Nango CLI command to make sure you can connect to Nango Cloud (NPX will automatically install the Nango CLI):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx nango config:list\n")),(0,o.kt)("p",null,"If all is good you should see an empty list of configurations."),(0,o.kt)("p",null,"Your Nango callback url is: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.nango.dev/oauth/callback"),(0,o.kt)("br",{parentName:"p"}),"\n","You will need this for the next step.")),(0,o.kt)(l.Z,{value:"localhost",label:"Localhost",mdxType:"TabItem"},"You can try Nango on your local machine with docker compose:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/NangoHQ/nango-quickstart.git && cd nango-quickstart\ndocker compose up # Keep the tab open\n")),(0,o.kt)("p",null,"Then run this Nango CLI command to make sure you can connect to Nango Cloud (NPX will automatically install the Nango CLI):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx nango config:list\n")),(0,o.kt)("p",null,"If all is good you should see an empty list of configurations."),(0,o.kt)("p",null,"Your Nango callback url is: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3003/oauth/callback"),(0,o.kt)("br",{parentName:"p"}),"\n","You will need this for the next step.")),(0,o.kt)(l.Z,{value:"self-hosted",label:"Self-hosted",mdxType:"TabItem"},(0,o.kt)("p",null,"You can self-host Nango on a single machine with our docker images. Check the ",(0,o.kt)("a",{parentName:"p",href:"/category/deploy-nango-self-hosted"},"Nango Self Hosted")," page for a list of all providers, or use these 1-click deploy options:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://render.com/deploy?repo=https://github.com/NangoHQ/nango-render"},(0,o.kt)("img",{parentName:"a",src:"https://render.com/images/deploy-to-render-button.svg",alt:"Deploy to Render"}))),(0,o.kt)("a",{href:"https://heroku.com/deploy?template=https://github.com/NangoHQ/nango-heroku"},(0,o.kt)("img",{src:"https://www.herokucdn.com/deploy/button.svg",alt:"Deploy to heroku",width:"200"})),(0,o.kt)("p",null,"Once you have setup your instance ",(0,o.kt)("a",{parentName:"p",href:"/nango-deploy/oss-instructions#cli"},"configure the Nango CLI")," and return here."),(0,o.kt)("p",null,"Your Nango callback url is: ",(0,o.kt)("inlineCode",{parentName:"p"},"[HOSTNAME-AND-PORT]/oauth/callback"),(0,o.kt)("br",{parentName:"p"}),"\n","You will need this for the next step."))),(0,o.kt)("h2",{id:"step-2-configure-your-apioauth-provider"},"Step 2: Configure your API/OAuth provider"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find your API/provider in our ",(0,o.kt)("a",{parentName:"p",href:"/providers"},"provider list"),". Copy the template name, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"github"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To run OAuth flows your application needs to register with the OAuth provider/API and obtain a ",(0,o.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"client_secret"),". Get them now and then return here.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You should also get a list of scopes you want to request. Prepare them in a comma separated list (no matter what the provider says, Nango will reformat them as needed): ",(0,o.kt)("inlineCode",{parentName:"p"},'"scope1,scope2,scope3"'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Decide what this config should be called in Nango. We call this the ",(0,o.kt)("inlineCode",{parentName:"p"},"CONFIG-KEY")," and it must be unique. Unless you have multiple configurations for the same API we recommend making this the same as the template name, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"github")))),(0,o.kt)("p",null,"Now add a new provider configuration with the Nango CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx nango config:create <CONFIG-KEY> <template> <client_id> <client_secret> "<scopes>"\n# e.g. for github: npx nango config:create github github <GITHUB-APP-ID> <GITHUB-APP-SECRET> "comma,separated,scopes,with,quotes"\n')),(0,o.kt)("p",null,"You should see a success message. To check if it worked you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx nango config:list")),(0,o.kt)("h2",{id:"step-3-trigger-the-oauth-flow-from-the-frontend"},"Step 3: Trigger the OAuth flow from the frontend"),(0,o.kt)("p",null,"To trigger an OAuth flow in your frontend use our frontend SDK."),(0,o.kt)(r.Z,{groupId:"deployment",queryString:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cloud",label:"Nango Cloud",mdxType:"TabItem"},(0,o.kt)("p",null,"You will need the ",(0,o.kt)("inlineCode",{parentName:"p"},"Public Key")," from your welcome email and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Config-Key")," from the last step."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Nango from 'https://unpkg.com/@nangohq/frontend/dist/index.js'; // For quick testing\n// or\nimport Nango from '@nangohq/frontend'; // After installing the npm package\n\nvar nango = new Nango({ publicKey: '<PUBLIC-KEY>' });\n\n// Trigger an OAuth flow\n// Param 1: unique config key from Step 2 (bullet 4)\n// Param 2: ID you will use to retrieve the connection (most often the user ID)\nnango\n    .auth('<CONFIG-KEY>', '<CONNECTION-ID>')\n    .then((result) => {\n        console.log(`OAuth flow succeeded for provider \"${result.providerConfigKey}\" and connection-id \"${result.connectionId}\"!`);\n    })\n    .catch((error) => {\n        console.error(`There was an error in the OAuth flow for integration: ${error.message}`);\n    });\n"))),(0,o.kt)(l.Z,{value:"localhost",label:"Localhost",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Nango from 'https://unpkg.com/@nangohq/frontend/dist/index.js'; // For quick testing\n// or\nimport Nango from '@nangohq/frontend'; // After installing the npm package\n\nvar nango = new Nango({ host: 'http://localhost:3003' });\n\n// Trigger an OAuth flow\n// Param 1: unique config key from Step 2 (bullet 4)\n// Param 2: ID you will use to retrieve the connection (most often the user ID)\nnango\n    .auth('<CONFIG-KEY>', '<CONNECTION-ID>')\n    .then((result) => {\n        console.log(`OAuth flow succeeded for provider \"${result.providerConfigKey}\" and connection-id \"${result.connectionId}\"!`);\n    })\n    .catch((error) => {\n        console.error(`There was an error in the OAuth flow for integration: ${error.message}`);\n    });\n"))),(0,o.kt)(l.Z,{value:"self-hosted",label:"Self-hosted",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Nango from 'https://unpkg.com/@nangohq/frontend/dist/index.js'; // For quick testing\n// or\nimport Nango from '@nangohq/frontend'; // After installing the npm package\n\nvar nango = new Nango({ host: '<NANGO-HOST-AND-PORT>' });\n\n// Trigger an OAuth flow\n// Param 1: unique config key from Step 2 (bullet 4)\n// Param 2: ID you will use to retrieve the connection (most often the user ID)\nnango\n    .auth('<CONFIG-KEY>', '<CONNECTION-ID>')\n    .then((result) => {\n        console.log(`OAuth flow succeeded for provider \"${result.providerConfigKey}\" and connection-id \"${result.connectionId}\"!`);\n    })\n    .catch((error) => {\n        console.error(`There was an error in the OAuth flow for integration: ${error.message}`);\n    });\n")))),(0,o.kt)("p",null,"With the frontend part ready, you should now be able to run a full OAuth flow from your app while Nango will retrieve, store and refresh tokens automatically."),(0,o.kt)("p",null,"Go ahead & try it! \ud83d\ude4c"),(0,o.kt)("h2",{id:"step-4-obtain-the-access-token-from-the-backend"},"Step 4: Obtain the access token from the backend"),(0,o.kt)("p",null,"There are a few different way in which you can obtain access tokens from Nango. The CLI is great for testing, but in your app we recommend using the SDK or the REST API."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Make sure you always have a fresh access token"),(0,o.kt)("br",{parentName:"p"}),"\n","Many OAuth providers provide short-lived access tokens (30-60 minutes). Nango refreshes them automatically for you, but it is important that you always request the access token right before each API call. Otherwise you may work with a stale token that has been revoked and your API call will fail.")),(0,o.kt)("h3",{id:"cli"},"CLI"),(0,o.kt)("p",null,"To obtain the (current) access token use this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx nango token:get <CONNECTION-ID> <CONFIG-KEY>\n")),(0,o.kt)("h3",{id:"backend-sdk"},"Backend SDK"),(0,o.kt)("p",null,"If you work with Node, Nango offers a backend SDK to retrieve the token (more languages coming)."),(0,o.kt)(r.Z,{groupId:"deployment",queryString:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cloud",label:"Nango Cloud",mdxType:"TabItem"},(0,o.kt)("p",null,"You will need the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret Key")," from your welcome email."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Nango } from '@nangohq/node';\n\nlet nango = new Nango({ secretKey: '<SECRET-KEY-FROM-SIGNUP-EMAIL>' });\n\nlet accessToken = await nango.getToken('<CONFIG-KEY>', '<CONNECTION-ID>');\n"))),(0,o.kt)(l.Z,{value:"localhost",label:"Localhost",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Nango } from '@nangohq/node';\n\nlet nango = new Nango({ host: 'http://localhost:3003' });\n\nlet accessToken = await nango.getToken('<CONFIG-KEY>', '<CONNECTION-ID>');\n"))),(0,o.kt)(l.Z,{value:"self-hosted",label:"Self-hosted",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Nango } from '@nangohq/node';\n\nlet nango = new Nango({ host: '<NANGO-HOST-AND-PORT>' });\n\nlet accessToken = await nango.getToken('<CONFIG-KEY>', '<CONNECTION-ID>');\n")))),(0,o.kt)("h3",{id:"rest-api"},"REST API"),(0,o.kt)("p",null,"You can use the Nango REST API to retrieve connection details & the current access token:"),(0,o.kt)(r.Z,{groupId:"deployment",queryString:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cloud",label:"Nango Cloud",mdxType:"TabItem"},(0,o.kt)("p",null,"You will need the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret Key")," from your welcome email."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl 'https://api.nango.dev/connection/<CONNECTION-ID>?provider_config_key=<CONFIG-KEY>'\\\n-H 'Authorization: Bearer <SECRET-KEY-FROM-SIGNUP-EMAIL>'\n"))),(0,o.kt)(l.Z,{value:"localhost",label:"Localhost",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl 'http://localhost:3003/connection/<CONNECTION-ID>?provider_config_key=<CONFIG-KEY>'\n"))),(0,o.kt)(l.Z,{value:"self-hosted",label:"Self-hosted",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl '<NANGO-HOST-AND-PORT>/connection/<CONNECTION-ID>?provider_config_key=<CONFIG-KEY>'\n")))),(0,o.kt)("h2",{id:"need-help"},"Need help?"),(0,o.kt)("p",null,"If you run into any trouble whilst setting up Nango or have any questions please do not hesitate to contact us - we are happy to help!"),(0,o.kt)("p",null,"Please join our ",(0,o.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"Slack community"),", where we are very active, and we will do our best to help you fast."))}m.isMDXComponent=!0}}]);