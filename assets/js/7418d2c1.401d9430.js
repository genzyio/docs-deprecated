"use strict";(self.webpackChunk_n1mbly_docs=self.webpackChunk_n1mbly_docs||[]).push([[674],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294);const r=function(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(7462),r=t(7294),o=t(2389),i=t(5773),s=t(6010);const l="tabItem_LplD";function c(e){const{lazy:n,block:t,defaultValue:o,values:c,groupId:p,className:u}=e,d=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=c??d.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),h=(0,i.lx)(m,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===o?o:o??d.find((e=>e.props.default))?.props.value??d[0]?.props.value;if(null!==y&&!m.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:g}=(0,i.UB)(),[f,b]=(0,r.useState)(y),k=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=p){const e=v[p];null!=e&&e!==f&&m.some((n=>n.value===e))&&b(e)}const w=e=>{const n=e.currentTarget,t=k.indexOf(n),a=m[t].value;a!==f&&(N(n),b(a),null!=p&&g(p,a))},x=e=>{let n=null;switch(e.key){case"ArrowRight":{const t=k.indexOf(e.currentTarget)+1;n=k[t]||k[0];break}case"ArrowLeft":{const t=k.indexOf(e.currentTarget)-1;n=k[t]||k[k.length-1];break}}n?.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},u)},m.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,key:n,ref:e=>k.push(e),onKeyDown:x,onFocus:w,onClick:w},o,{className:(0,s.Z)("tabs__item",l,o?.className,{"tabs__item--active":f===n})}),t??n)}))),n?(0,r.cloneElement)(d.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==f})))))}function p(e){const n=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},9222:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),o=t(9877),i=t(8215);const s={title:"Parameter Configuration",sidebar_position:3,slug:"/service-class-params-config/"},l=void 0,c={unversionedId:"categories/Services/service-class-params-config",id:"categories/Services/service-class-params-config",title:"Parameter Configuration",description:"If you'd like the service methods to be able to receive query and/or path parameters, you can customize them in a $nimbly property.",source:"@site/docs/categories/06-Services/service-class-params-config.md",sourceDirName:"categories/06-Services",slug:"/service-class-params-config/",permalink:"/docs/docs/v1/service-class-params-config/",tags:[],version:"current",lastUpdatedAt:1654282889,formattedLastUpdatedAt:"6/3/2022",sidebarPosition:3,frontMatter:{title:"Parameter Configuration",sidebar_position:3,slug:"/service-class-params-config/"},sidebar:"sidebar",previous:{title:"Route Configuration",permalink:"/docs/docs/v1/service-class-routes-config/"},next:{title:"Types Configuration",permalink:"/docs/docs/v1/service-class-types-config/"}},p=[],u={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you'd like the service methods to be able to receive ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Query_string"},"query")," and/or ",(0,r.kt)("a",{parentName:"p",href:"https://rapidapi.com/blog/api-glossary/parameters/path/"},"path")," parameters, you can customize them in a ",(0,r.kt)("inlineCode",{parentName:"p"},"$nimbly")," property."),(0,r.kt)("p",null,"If you're using ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," you can define configuration using ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/decorators.html"},"TypeScript decorators"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you're using decorators, make sure that you've set ",(0,r.kt)("inlineCode",{parentName:"p"},'"experimentalDecorators"')," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file."))),(0,r.kt)(o.Z,{groupId:"lang",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"cjs",label:"CommonJS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class ExampleService {\n  $nimbly = {\n    path: '/',\n    getAll: {\n      httpMethod: 'GET',\n      path: '/',\n      params: [\n        { source: 'query', name: \"pageNumber\" },\n        { source: 'query', name: \"pageSize\" },\n      ]\n    },\n    getById: {\n      httpMethod: 'GET',\n      path: '/:id',\n      params: [\n        { source: 'query', name: \"includeDetails\" }\n        { source: 'path', name: 'id' },\n      ]\n    },\n    add: {\n      httpMethod: 'POST',\n      path: '/',\n      params: [\n        { source: 'body', name: 'example' }\n      ]\n    },\n    update: {\n      httpMethod: 'PUT',\n      path: '/:id',\n      params: [\n        { source: 'path', name: 'id' },\n        { source: 'body', name: 'example' }\n      ]\n    },\n    delete: {\n      httpMethod: 'DELETE',\n      path: '/:id',\n      params: [\n        { source: 'path', name: 'id' },\n      ]\n    },\n  }\n  \n  async getAll(pageNumber, pageSize) {\n    return [];\n  }\n  async getById(includeDetails, id) {\n    return [];\n  }\n  async add(example) {\n    return example;\n  }\n  async update(id, example) {\n    return example;\n  }\n  async delete(id) {\n    return { id };\n  }\n}\n"))),(0,r.kt)(i.Z,{value:"mjs",label:"ES modules",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"class ExampleService {\n  $nimbly = {\n    path: '/',\n    getAll: {\n      httpMethod: 'GET',\n      path: '/',\n      params: [\n        { source: 'query', name: \"pageNumber\" },\n        { source: 'query', name: \"pageSize\" },\n      ]\n    },\n    getById: {\n      httpMethod: 'GET',\n      path: '/:id',\n      params: [\n        { source: 'query', name: \"includeDetails\" },\n        { source: 'path', name: 'id' },\n      ]\n    },\n    add: {\n      httpMethod: 'POST',\n      path: '/',\n      params: [\n        { source: 'body', name: 'example' }\n      ]\n    },\n    update: {\n      httpMethod: 'PUT',\n      path: '/:id',\n      params: [\n        { source: 'path', name: 'id' },\n        { source: 'body', name: 'example' }\n      ]\n    },\n    delete: {\n      httpMethod: 'DELETE',\n      path: '/:id',\n      params: [\n        { source: 'path', name: 'id' },\n      ]\n    },\n  }\n  \n  async getAll(pageNumber, pageSize) {\n    return [];\n  }\n  async getById(includeDetails, id) {\n    return [];\n  }\n  async add(example) {\n    return example;\n  }\n  async update(id, example) {\n    return example;\n  }\n  async delete(id) {\n    return { id };\n  }\n}\n"))),(0,r.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Controller, Get, Post, Put, Delete, Query, Path, Body } from \"nimbly-client\"; // or nimbly-api\n\n@Controller('/')\nclass ExampleService {\n  @Get()\n  async getAll(@Query('pageNumber') pageNumber: number, @Query('pageSize') pageSize: number): Promise<any[]> {\n    return [];\n  }\n  @Get('/:id')\n  async getById(@Query('includeDetails') includeDetails: boolean, @Path('id') id: string): Promise<any> {\n    return {};\n  }\n  @Post()\n  async add(@Body() example: any): Promise<any> {\n    return example;\n  }\n  @Put('/:id')\n  async update(@Path('id') id: string, @Body() example: any): Promise<any> {\n    return example;\n  }\n  @Delete('/:id')\n  async delete(@Path('id') id: string): Promise<any> {\n    return { id };\n  }\n}\n")))),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Configuration must be used both on the client and the server side, since it is used for telling ",(0,r.kt)("inlineCode",{parentName:"p"},"N1mbly")," how and where to send the requests, or register the API routes."))))}d.isMDXComponent=!0}}]);