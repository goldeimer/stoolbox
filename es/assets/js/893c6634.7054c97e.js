/*! For license information please see 893c6634.7054c97e.js.LICENSE.txt */
"use strict";(self.webpackChunkstoolbox=self.webpackChunkstoolbox||[]).push([[525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4641:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(7294),n=r(5893);function a({id:e,host:t,repo:a,repoId:i,category:l,categoryId:s,mapping:c,term:u,strict:p,reactionsEnabled:d,emitMetadata:g,inputPosition:m,theme:f,lang:h,loading:b}){const[y,k]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{y||(r.e(891).then(r.bind(r,2891)),k(!0))}),[]),y?(0,n.jsx)("giscus-widget",{id:e,host:t,repo:a,repoid:i,category:l,categoryid:s,mapping:c,term:u,strict:p,reactionsenabled:d,emitmetadata:g,inputposition:m,theme:f,lang:h,loading:b}):null}function i(){return o.createElement(a,{id:"comments",repo:"goldeimer/stoolbox",repoId:"R_kgDOH_PhSw",category:"General",categoryId:"DIC_kwDOH_PhS84CRaE3",mapping:"title",term:"Component section!",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"preferred_color_scheme",lang:"de",loading:"lazy"})}},9503:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(7462),n=(r(7294),r(3905)),a=r(4641);const i={id:"changelog",title:"Changelog",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Changelog",sidebar_position:5,custom_edit_url:"https://github.com/goldeimer/stoolbox/blob/main/docs/basics/changelog.md",description:"Was gibts neues, und was erwartet dich noch?",keywords:["changelog","features"],image:"https://i.imgur.com/mErPwqL.png",slug:"/changelog",last_update:{date:"08/01/23",author:"Frederik Gottemeyer"}},l=void 0,s={unversionedId:"basics/changelog",id:"basics/changelog",title:"Changelog",description:"Was gibts neues, und was erwartet dich noch?",source:"@site/docs/basics/changelog.mdx",sourceDirName:"basics",slug:"/changelog",permalink:"/es/docs/next/changelog",draft:!1,editUrl:"https://github.com/goldeimer/stoolbox/blob/main/docs/basics/changelog.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"changelog",title:"Changelog",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Changelog",sidebar_position:5,custom_edit_url:"https://github.com/goldeimer/stoolbox/blob/main/docs/basics/changelog.md",description:"Was gibts neues, und was erwartet dich noch?",keywords:["changelog","features"],image:"https://i.imgur.com/mErPwqL.png",slug:"/changelog",last_update:{date:"08/01/23",author:"Frederik Gottemeyer"}},sidebar:"tutorialSidebar",previous:{title:"Markdown Features",permalink:"/es/docs/next/basics/markdown-features"},next:{title:"Instructions",permalink:"/es/docs/next/category/instructions"}},c={},u=[{value:"\ud83d\ude80 New Features coming soon",id:"-new-features-coming-soon",level:2},{value:"1.0.1 (2022-12-25)",id:"101-2022-12-25",level:2},{value:"\ud83d\udc1b Bug Fix",id:"-bug-fix",level:4},{value:"\ud83d\udc85 Polish",id:"-polish",level:4},{value:"Committers: 5",id:"committers-5",level:4}],p={toc:u},d="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-new-features-coming-soon"},"\ud83d\ude80 New Features coming soon"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kohheepeace/mr-pdf"},"#1")," feat(pdf-ecport): add support for pdf export (@gottemeyer)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-pwa"},"#2")," feat(offline-support): add support for offline instructions (@gottemeyer)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/"},"#3")," feat(DIY Festival): Add Instructions to build a Festival Toilet (@enno)")),(0,n.kt)("h1",{id:"stoolbox-changelog"},"sToolbox Changelog"),(0,n.kt)("h2",{id:"101-2022-12-25"},"1.0.1 (2022-12-25)"),(0,n.kt)("h4",{id:"-bug-fix"},"\ud83d\udc1b Bug Fix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"})),(0,n.kt)("h4",{id:"-polish"},"\ud83d\udc85 Polish"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"})),(0,n.kt)("h4",{id:"committers-5"},"Committers: 5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sina Augustin "),(0,n.kt)("li",{parentName:"ul"},"Mila L\xfctjihann "),(0,n.kt)("li",{parentName:"ul"},"Frederik Gottemeyer (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gottemeyer"},"@gottemeyer"),")"),(0,n.kt)("li",{parentName:"ul"},"\xdcbersetzungen (Minerva)")),(0,n.kt)(a.Z,{mdxType:"Giscus"}))}g.isMDXComponent=!0},5251:(e,t,r)=>{r(7418);var o=r(7294),n=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),a("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,a={},c=null,u=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,o)&&!s.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:n,type:e,key:c,ref:u,props:a,_owner:i.current}}t.jsx=c},5893:(e,t,r)=>{e.exports=r(5251)}}]);