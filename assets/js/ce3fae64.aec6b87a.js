"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6438],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(g,l(l({ref:n},s),{},{components:t})):o.createElement(g,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const a={},l="Deploy Nango to AWS (EC2)",c={unversionedId:"nango-deploy/aws",id:"nango-deploy/aws",title:"Deploy Nango to AWS (EC2)",description:"Your should read the self-hosting instructions before deploying to production.",source:"@site/docs/nango-deploy/aws.md",sourceDirName:"nango-deploy",slug:"/nango-deploy/aws",permalink:"/nango-deploy/aws",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/nango-deploy/aws.md",tags:[],version:"current",frontMatter:{},sidebar:"nango",previous:{title:"Deploy Nango on your local machine",permalink:"/nango-deploy/local"},next:{title:"Deploy Nango to GCP (Compute Engine)",permalink:"/nango-deploy/gcp"}},i={},p=[{value:"Create a VM",id:"create-vm",level:2},{value:"Install Docker",id:"install-docker",level:2},{value:"Run Nango",id:"run-nango",level:2},{value:"Update Nango",id:"update-nango",level:2}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-nango-to-aws-ec2"},"Deploy Nango to AWS (EC2)"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Your should read the ",(0,r.kt)("a",{parentName:"p",href:"/nango-deploy/oss-instructions"},"self-hosting instructions")," before deploying to production.")),(0,r.kt)("p",null,"Deploy Nango on AWS in less than 5 minutes."),(0,r.kt)("h2",{id:"create-vm"},"Create a VM"),(0,r.kt)("p",null,"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ec2/v2/home"},"EC2 service")," and click ",(0,r.kt)("em",{parentName:"p"},"Launch Instance"),". Create an instance with default settings except:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"t2.medium")," for testing, ",(0,r.kt)("inlineCode",{parentName:"li"},"t2.large")," for production"),(0,r.kt)("li",{parentName:"ul"},"Enable ",(0,r.kt)("em",{parentName:"li"},"Allow HTTPS traffic from the internet")," and ",(0,r.kt)("em",{parentName:"li"},"Allow HTTP traffic from the internet"))),(0,r.kt)("h2",{id:"install-docker"},"Install Docker"),(0,r.kt)("p",null,"Go to your EC2 instance page and click ",(0,r.kt)("em",{parentName:"p"},"Connect,")," then ",(0,r.kt)("em",{parentName:"p"},"Connect")," again on the next page to access your instance\u2019s console via SSH."),(0,r.kt)("p",null,"Install Docker & Docker Compose with the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum update -y && sudo yum install -y docker && sudo service docker start && sudo usermod -a -G docker $USER\ncurl -s https://api.github.com/repos/docker/compose/releases/latest | grep browser_download_url  | grep docker-compose-linux-x86_64 | cut -d '\"' -f 4 | wget -qi -\nchmod +x docker-compose-linux-x86_64 && sudo mv docker-compose-linux-x86_64 /usr/local/bin/docker-compose\ndocker-compose --version\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Refresh the VM console page to activate the new configuration.")),(0,r.kt)("h2",{id:"run-nango"},"Run Nango"),(0,r.kt)("p",null,"Still in your VM\u2019s console, install Nango by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir nango && cd nango\nwget https://raw.githubusercontent.com/NangoHQ/nango/master/docker/aws/docker-compose.yaml && wget https://raw.githubusercontent.com/NangoHQ/nango/master/.env\ndocker-compose up -d # Nango is now running!\n")),(0,r.kt)("h2",{id:"update-nango"},"Update Nango"),(0,r.kt)("p",null,"In your VM\u2019s console, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose stop\ndocker-compose rm -f\ndocker-compose pull\ndocker-compose up -d\n")))}u.isMDXComponent=!0}}]);