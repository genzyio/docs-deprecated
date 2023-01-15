"use strict";(self.webpackChunk_n1mbly_docs=self.webpackChunk_n1mbly_docs||[]).push([[103],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),o=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=o(t),d=a,b=u["".concat(c,".").concat(d)]||u[d]||p[d]||l;return t?r.createElement(b,s(s({ref:n},m),{},{components:t})):r.createElement(b,s({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<l;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8215:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(7294);const a=function(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),l=t(2389),s=t(5773),i=t(6010);const c="tabItem_LplD";function o(e){const{lazy:n,block:t,defaultValue:l,values:o,groupId:m,className:p}=e,u=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),d=o??u.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),b=(0,s.lx)(d,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??u.find((e=>e.props.default))?.props.value??u[0]?.props.value;if(null!==v&&!d.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${d.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:f}=(0,s.UB)(),[g,N]=(0,a.useState)(v),h=[],{blockElementScrollPositionUntilNextRender:A}=(0,s.o5)();if(null!=m){const e=y[m];null!=e&&e!==g&&d.some((n=>n.value===e))&&N(e)}const k=e=>{const n=e.currentTarget,t=h.indexOf(n),r=d[t].value;r!==g&&(A(n),N(r),null!=m&&f(m,r))},S=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=h.indexOf(e.currentTarget)+1;n=h[t]||h[0];break}case"ArrowLeft":{const t=h.indexOf(e.currentTarget)-1;n=h[t]||h[h.length-1];break}}n?.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},p)},d.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:g===n?0:-1,"aria-selected":g===n,key:n,ref:e=>h.push(e),onKeyDown:S,onFocus:k,onClick:k},l,{className:(0,i.Z)("tabs__item",c,l?.className,{"tabs__item--active":g===n})}),t??n)}))),n?(0,a.cloneElement)(u.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},u.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==g})))))}function m(e){const n=(0,l.Z)();return a.createElement(o,(0,r.Z)({key:String(n)},e))}},8376:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=t(7462),a=(t(7294),t(3905)),l=t(9877),s=t(8215);const i={title:"NimblyApi",sidebar_position:8,slug:"/nimbly-api/"},c=void 0,o={unversionedId:"categories/nimbly-api",id:"categories/nimbly-api",title:"NimblyApi",description:"What NimblyApi is",source:"@site/docs/categories/nimbly-api.md",sourceDirName:"categories",slug:"/nimbly-api/",permalink:"/docs/docs/v1/nimbly-api/",tags:[],version:"current",lastUpdatedAt:1654282889,formattedLastUpdatedAt:"6/3/2022",sidebarPosition:8,frontMatter:{title:"NimblyApi",sidebar_position:8,slug:"/nimbly-api/"},sidebar:"sidebar",previous:{title:"Nimble",permalink:"/docs/docs/v1/nimble/"}},m=[{value:"What NimblyApi is",id:"what-nimblyapi-is",children:[],level:2},{value:"Creating an API",id:"creating-an-api",children:[{value:"From Plain Local Services",id:"from-plain-local-services",children:[],level:3},{value:"From Plain Remote Services",id:"from-plain-remote-services",children:[],level:3},{value:"From Configured Local Services",id:"from-configured-local-services",children:[],level:3}],level:2}],p={toc:m};function u(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-nimblyapi-is"},"What NimblyApi is"),(0,a.kt)("p",null,"NimblyApi is responsible for automatically creating a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"RestAPI")," from a set of ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/v1/nimble/"},"Nimbles"),"."),(0,a.kt)("p",null,"It is also responsible for automatically building ",(0,a.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," documentation, and serving ",(0,a.kt)("a",{parentName:"p",href:"https://swagger.io/"},"SwaggerUI")," on route ",(0,a.kt)("inlineCode",{parentName:"p"},"/explorer"),"."),(0,a.kt)("h2",{id:"creating-an-api"},"Creating an API"),(0,a.kt)("h3",{id:"from-plain-local-services"},"From Plain Local Services"),(0,a.kt)(l.Z,{groupId:"lang",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"cjs",label:"CommonJS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { Nimble, NimblyApi } = require('nimbly-api');\n\nclass UserService {\n  async createUser(user) {\n    return user;\n  }\n}\n\nclass AccountService {\n  async getAllAccounts() {\n    return [];\n  }\n}\n\nconst usersNimble = new Nimble()\n  .addLocalServices(UserService, AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n"))),(0,a.kt)(s.Z,{value:"js",label:"ES modules",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Nimble, NimblyApi } from 'nimbly-api';\n\nclass UserService {\n  async createUser(user) {\n    return user;\n  }\n}\n\nclass AccountService {\n  async getAllAccounts() {\n    return [];\n  }\n}\n\nconst usersNimble = new Nimble()\n  .addLocalServices(UserService, AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Nimble, NimblyApi } from 'nimbly-api';\n\nclass UserService {\n  async createUser(user): Promise<any> {\n    return user;\n  }\n}\n\nclass AccountService {\n  async getAllAccounts(): Promise<any[]> {\n    return [];\n  }\n}\n\nconst usersNimble = new Nimble()\n  .addLocalServices(UserService, AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:t(2033).Z,width:"1458",height:"477"})),(0,a.kt)("h3",{id:"from-plain-remote-services"},"From Plain Remote Services"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"An API can also be generated from a set of remote services, so that the API acts as an ",(0,a.kt)("a",{parentName:"p",href:"https://www.nginx.com/learn/api-gateway/"},"API Gateway"),"."))),(0,a.kt)(l.Z,{groupId:"lang",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"cjs",label:"CommonJS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { Nimble, NimblyApi } = require('nimbly-api');\n\nclass UserService {\n  async createUser(user) {}\n}\n\nclass AccountService {\n  async getAllAccounts() {}\n}\n\nconst usersNimble = new Nimble()\n  .addRemoteServices('http://localhost:3000', UserService, AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n"))),(0,a.kt)(s.Z,{value:"js",label:"ES modules",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Nimble, NimblyApi } from 'nimbly-api';\n\nclass UserService {\n  async createUser(user) {}\n}\n\nclass AccountService {\n  async getAllAccounts() {}\n}\n\nconst usersNimble = new Nimble()\n  .addRemoteServices('http://localhost:3000', UserService, AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Nimble, NimblyApi } from 'nimbly-api';\n\nclass UserService {\n  async createUser(user): Promise<any> {}\n}\n\nclass AccountService {\n  async getAllAccounts(): Promise<any[]> {}\n}\n\nconst usersNimble = new Nimble()\n  .addRemoteServices('http://localhost:3000', UserService, AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:t(2033).Z,width:"1458",height:"477"})),(0,a.kt)("h3",{id:"from-configured-local-services"},"From Configured Local Services"),(0,a.kt)(l.Z,{groupId:"lang",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"cjs",label:"CommonJS",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { Nimble, NimblyApi } = require('nimbly-api');\n\nclass UserService {\n  $nimbly = {\n    path: '/users',\n    createUser: {\n      httpMethod: 'POST',\n      path: '/',\n      params: [\n        { name: 'user', source: 'body' }\n      ]\n    }\n  }\n  async createUser(user) {\n    return user;\n  }\n}\n\nclass AccountService {\n  $nimbly = {\n    path: '/accounts',\n    getAllAccounts: {\n      method: 'GET',\n      path: '/'\n    }\n  }\n  async getAllAccounts() {\n    return [];\n  }\n}\n\nconst usersNimble = new Nimble()\n  .addLocalServices(UserService, AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n"))),(0,a.kt)(s.Z,{value:"js",label:"ES modules",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { Nimble, NimblyApi } from 'nimbly-api';\n\nclass UserService {\n  $nimbly = {\n    path: '/users',\n    createUser: {\n      httpMethod: 'POST',\n      path: '/',\n      params: [\n        { name: 'user', source: 'body' }\n      ]\n    }\n  }\n  async createUser(user) {\n    return user;\n  }\n}\n\nclass AccountService {\n  $nimbly = {\n    path: '/accounts',\n    getAllAccounts: {\n      method: 'GET',\n      path: '/'\n    }\n  }\n  async getAllAccounts() {\n    return [];\n  }\n}\n\nconst usersNimble = new Nimble()\n  .addLocalServices(UserService, AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n"))),(0,a.kt)(s.Z,{value:"ts",label:"TypeScript",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Nimble, NimblyApi, Controller, Get, Post, Body } from 'nimbly-api';\n\n@Controller('/users')\nclass UserService {\n  @Post()\n  async createUser(@Body() user): Promise<any> {\n    return user;\n  }\n}\n\n@Controller('/accounts')\nclass AccountService {\n  @Get()\n  async getAllAccounts(): Promise<any[]> {\n    return [];\n  }\n}\n\nconst usersNimble = new Nimble()\n  .addLocalServices(UserService, AccountService);\n\nconst app = new NimblyApi().from(usersNimble);\napp.listen(3000);\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:t(1428).Z,width:"1459",height:"464"})))}u.isMDXComponent=!0},1428:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/configured_local-aaae8797fd23340564cedf2d76b49c2d.png"},2033:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/plain_local-d6e32634cad58cdcf6de40c1c418db9b.png"}}]);