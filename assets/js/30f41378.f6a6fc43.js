"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9003],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,h=u["".concat(l,".").concat(g)]||u[g]||p[g]||r;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const r={},s="DB configuration",i={unversionedId:"nango-sync/use-nango/db-config",id:"nango-sync/use-nango/db-config",title:"DB configuration",description:"Supported databases",source:"@site/docs/nango-sync/use-nango/db-config.md",sourceDirName:"nango-sync/use-nango",slug:"/nango-sync/use-nango/db-config",permalink:"/nango-sync/use-nango/db-config",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/main/docs/docs/nango-sync/use-nango/db-config.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Schema mappings",permalink:"/nango-sync/use-nango/schema-mappings"},next:{title:"Observability",permalink:"/nango-sync/use-nango/observability"}},l={},c=[{value:"Supported databases",id:"supported-databases",level:2},{value:"Where Nango stores data",id:"where-nango-stores-data",level:2},{value:"Nango internal data: Stored in the <code>nango</code> schema",id:"nango-internal-data-stored-in-the-nango-schema",level:3},{value:"Synced data: Stored where you specify",id:"synced-data-stored-where-you-specify",level:3},{value:"Specifying the Postgres database",id:"custom-database",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"db-configuration"},"DB configuration"),(0,o.kt)("h2",{id:"supported-databases"},"Supported databases"),(0,o.kt)("p",null,"Currently, Nango supports only Postgres databases as a destination for the synced data. You can request support for more database types on this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango-sync/issues/68"},"issue"),"."),(0,o.kt)("h2",{id:"where-nango-stores-data"},"Where Nango stores data"),(0,o.kt)("p",null,"Nango stores two kinds of data in the Postgres database:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nango internal data (sync configurations, jobs state etc.)"),(0,o.kt)("li",{parentName:"ul"},"The synced data")),(0,o.kt)("p",null,"Whilst both of these are stored in the same Postgres database you can control where Nango stores the synced data, so that you can separate it from the Nango internal data."),(0,o.kt)("h3",{id:"nango-internal-data-stored-in-the-nango-schema"},"Nango internal data: Stored in the ",(0,o.kt)("inlineCode",{parentName:"h3"},"nango")," schema"),(0,o.kt)("p",null,"Configuration objects necessary for Nango's execution (e.g. Syncs and jobs) are stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"nango")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/ddl-schemas.html"},"database schema"),"."),(0,o.kt)("p",null,"The raw synced data, in its original JSON format, is also stored in the nango schema in a table called ",(0,o.kt)("inlineCode",{parentName:"p"},"_nango_raw"),". This single table contains the raw data from all Syncs combined."),(0,o.kt)("h3",{id:"synced-data-stored-where-you-specify"},"Synced data: Stored where you specify"),(0,o.kt)("p",null,"When you add a Sync to Nango you can ",(0,o.kt)("a",{parentName:"p",href:"/nango-sync/use-nango/schema-mappings#destination-table"},"tell it where to store the data")," for this sync with the ",(0,o.kt)("inlineCode",{parentName:"p"},"mapped_table")," config option. Multiple Syncs can send data to the same table or different ones and you can specify both the table name as well as the schema to be used."),(0,o.kt)("p",null,"This parameter is optional, in the (rare) case where you do not specify it Nango will create a new table called ",(0,o.kt)("inlineCode",{parentName:"p"},"_nango_sync_[SYNC-ID]")," (",(0,o.kt)("inlineCode",{parentName:"p"},"[SYNC-ID]")," is the nango internal id of your sync, e.g. 1638) in the default schema of your postgres database."),(0,o.kt)("h2",{id:"custom-database"},"Specifying the Postgres database"),(0,o.kt)("p",null,"By default, Nango assumes there is a local Postgres database available with the following options (the default ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose")," setup provides this one): "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"host: localhost\nport: 5432\nuser: nango\npassword: nango\ndatabase: nango\n")),(0,o.kt)("p",null,"You can point Nango to a different database by adding the following environment variables to the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file (in the root folder):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NANGO_DB_HOST=[your-host]\nNANGO_DB_PORT=[your-port]\nNANGO_DB_USER=[your-user]\nNANGO_DB_NAME=[your-database-name]\nNANGO_DB_PASSWORD=[your-password]\nNANGO_DB_SSL=TRUE # Set to 'TRUE' if database requires SSL connections\n")),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"nango")," schema (where Nango stores its internal config) does not yet exist in the database you specify it will get created the first time Nango runs."))}p.isMDXComponent=!0}}]);