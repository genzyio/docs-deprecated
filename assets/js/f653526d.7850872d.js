"use strict";(self.webpackChunknimbly=self.webpackChunknimbly||[]).push([[4718],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8088:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={title:"Handling CORS",sidebar_position:8,slug:"/handling-cors/"},s=void 0,c={unversionedId:"categories/Server/handling-cors",id:"categories/Server/handling-cors",title:"Handling CORS",description:"Configuration",source:"@site/docs/categories/02-Server/handling-cors.md",sourceDirName:"categories/02-Server",slug:"/handling-cors/",permalink:"/docs/v1/handling-cors/",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Handling CORS",sidebar_position:8,slug:"/handling-cors/"},sidebar:"sidebar",previous:{title:"Using multiple nodes",permalink:"/docs/v1/using-multiple-nodes/"},next:{title:"Application structure",permalink:"/docs/v1/server-application-structure/"}},p=[{value:"Configuration",id:"configuration",children:[],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"CORS header \u2018Access-Control-Allow-Origin\u2019 missing",id:"cors-header-access-control-allow-origin-missing",children:[],level:3},{value:"Credential is not supported if the CORS header \u2018Access-Control-Allow-Origin\u2019 is \u2018*\u2019",id:"credential-is-not-supported-if-the-cors-header-access-control-allow-origin-is-",children:[],level:3},{value:"Expected \u2018true\u2019 in CORS header \u2018Access-Control-Allow-Credentials\u2019",id:"expected-true-in-cors-header-access-control-allow-credentials",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Since Socket.IO v3, you need to explicitly enable ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"Cross-Origin Resource Sharing")," (CORS)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { createServer } from "http";\nimport { Server } from "socket.io";\n\nconst httpServer = createServer();\nconst io = new Server(httpServer, {\n  cors: {\n    origin: "https://example.com"\n  }\n});\n')),(0,i.kt)("p",null,"All options will be forwarded to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cors"},"cors")," package. The complete list of options can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/expressjs/cors#configuration-options"},"here"),"."),(0,i.kt)("p",null,"Example with cookies (",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials"},"withCredentials"),") and additional headers:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// server-side\nconst io = new Server(httpServer, {\n  cors: {\n    origin: "https://example.com",\n    allowedHeaders: ["my-custom-header"],\n    credentials: true\n  }\n});\n\n// client-side\nimport { io } from "socket.io-client";\nconst socket = io("https://api.example.com", {\n  withCredentials: true,\n  extraHeaders: {\n    "my-custom-header": "abcd"\n  }\n});\n')),(0,i.kt)("p",null,"Note: this also applies to localhost if your web application and your server are not served from the same port"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const io = new Server(httpServer, {\n  cors: {\n    origin: "http://localhost:8080"\n  }\n});\n\nhttpServer.listen(3000);\n')),(0,i.kt)("p",null,"You can disallow all cross-origin requests with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v1/server-options/#allowrequest"},(0,i.kt)("inlineCode",{parentName:"a"},"allowRequest"))," option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const io = new Server(httpServer, {\n  allowRequest: (req, callback) => {\n    const noOriginHeader = req.headers.origin === undefined;\n    callback(null, noOriginHeader);\n  }\n});\n")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"cors-header-access-control-allow-origin-missing"},"CORS header \u2018Access-Control-Allow-Origin\u2019 missing"),(0,i.kt)("p",null,"Full error message:"),(0,i.kt)("blockquote",null,(0,i.kt)("i",null,"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at .../socket.io/?EIO=4&transport=polling&t=NMnp2WI. (Reason: CORS header \u2018Access-Control-Allow-Origin\u2019 missing).")),(0,i.kt)("p",null,"If you have properly configured your server (see ",(0,i.kt)("a",{parentName:"p",href:"#configuration"},"above"),"), this could mean that your browser wasn't able to reach the Socket.IO server."),(0,i.kt)("p",null,"The following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl "https://api.example.com/socket.io/?EIO=4&transport=polling"\n')),(0,i.kt)("p",null,"should return something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'0{"sid":"Lbo5JLzTotvW3g2LAAAA","upgrades":["websocket"],"pingInterval":25000,"pingTimeout":20000}\n')),(0,i.kt)("p",null,"If that's not the case, please check that your server is listening and is actually reachable on the given port."),(0,i.kt)("h3",{id:"credential-is-not-supported-if-the-cors-header-access-control-allow-origin-is-"},"Credential is not supported if the CORS header \u2018Access-Control-Allow-Origin\u2019 is \u2018*\u2019"),(0,i.kt)("p",null,"Full error message:"),(0,i.kt)("blockquote",null,(0,i.kt)("i",null,"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at \u2018.../socket.io/?EIO=4&transport=polling&t=NvQfU77\u2019. (Reason: Credential is not supported if the CORS header \u2018Access-Control-Allow-Origin\u2019 is \u2018*\u2019)")),(0,i.kt)("p",null,"You can't set ",(0,i.kt)("a",{parentName:"p",href:"/docs/v1/client-options/#withcredentials"},(0,i.kt)("inlineCode",{parentName:"a"},"withCredentials"))," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"origin: *"),", you need to use a specific origin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { createServer } from "http";\nimport { Server } from "socket.io";\n\nconst httpServer = createServer();\nconst io = new Server(httpServer, {\n  cors: {\n    origin: "https://my-frontend.com",\n    // or with an array of origins\n    // origin: ["https://my-frontend.com", "https://my-other-frontend.com", "http://localhost:3000"],\n    credentials: true\n  }\n});\n')),(0,i.kt)("h3",{id:"expected-true-in-cors-header-access-control-allow-credentials"},"Expected \u2018true\u2019 in CORS header \u2018Access-Control-Allow-Credentials\u2019"),(0,i.kt)("p",null,"Full error message:"),(0,i.kt)("blockquote",null,(0,i.kt)("i",null,"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at .../socket.io/?EIO=4&transport=polling&t=NvQny19. (Reason: expected \u2018true\u2019 in CORS header \u2018Access-Control-Allow-Credentials\u2019)")),(0,i.kt)("p",null,"In that case, ",(0,i.kt)("a",{parentName:"p",href:"/docs/v1/client-options/#withcredentials"},(0,i.kt)("inlineCode",{parentName:"a"},"withCredentials"))," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," on the client, but the server is missing the ",(0,i.kt)("inlineCode",{parentName:"p"},"credentials")," attribute in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v1/server-options/#cors"},(0,i.kt)("inlineCode",{parentName:"a"},"cors"))," option. See the example above."))}d.isMDXComponent=!0}}]);