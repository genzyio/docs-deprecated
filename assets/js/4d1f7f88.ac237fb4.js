"use strict";(self.webpackChunknimbly=self.webpackChunknimbly||[]).push([[825],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),k=a,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4981:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={title:"How to deal with cookies"},c="How to deal with cookies",l={type:"mdx",permalink:"/how-to/deal-with-cookies",source:"@site/src/pages/how-to/deal-with-cookies.md",title:"How to deal with cookies",description:"Cookie-based sticky session",frontMatter:{title:"How to deal with cookies"}},p=[{value:"Cookie-based sticky session",id:"cookie-based-sticky-session",children:[],level:2},{value:"Application cookies",id:"application-cookies",children:[],level:2},{value:"Node.js client and cookies",id:"nodejs-client-and-cookies",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-deal-with-cookies"},"How to deal with cookies"),(0,i.kt)("h2",{id:"cookie-based-sticky-session"},"Cookie-based sticky session"),(0,i.kt)("p",null,"When using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v4/server-options/#cookie"},(0,i.kt)("inlineCode",{parentName:"a"},"cookie"))," option, the server will send a cookie upon handshake (the first HTTP request of the session), with the value of the Engine.IO session ID."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const io = new Server(httpServer, {\n  cookie: true\n});\n\n// is similar to\n\nconst io = new Server(httpServer, {\n  cookie: {\n    name: "io",\n    path: "/",\n    httpOnly: true,\n    sameSite: "lax"\n  }\n});\n')),(0,i.kt)("p",null,"You can test it with a ",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ curl "https://mydomain.com/socket.io/?EIO=4&transport=polling" -v\n< HTTP/1.1 200 OK\n< Content-Type: text/plain; charset=UTF-8\n< Content-Length: 97\n< Set-Cookie: io=G4J3Ci0cNDWd_Fz-AAAC; Path=/; HttpOnly; SameSite=Lax\n<\n0{"sid":"G4J3Ci0cNDWd_Fz-AAAC","upgrades":["websocket"],"pingInterval":25000,"pingTimeout":20000}\n')),(0,i.kt)("p",null,"Available options (from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jshttp/cookie/"},(0,i.kt)("inlineCode",{parentName:"a"},"cookie"))," package):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"domain"),(0,i.kt)("li",{parentName:"ul"},"encode"),(0,i.kt)("li",{parentName:"ul"},"expires"),(0,i.kt)("li",{parentName:"ul"},"httpOnly"),(0,i.kt)("li",{parentName:"ul"},"maxAge"),(0,i.kt)("li",{parentName:"ul"},"path"),(0,i.kt)("li",{parentName:"ul"},"sameSite"),(0,i.kt)("li",{parentName:"ul"},"secure")),(0,i.kt)("p",null,"This cookie can then be used for cookie-based sticky session, when scaling to multiple nodes (example with HAProxy ",(0,i.kt)("a",{parentName:"p",href:"/docs/v4/using-multiple-nodes/#haproxy-configuration"},"here"),")."),(0,i.kt)("h2",{id:"application-cookies"},"Application cookies"),(0,i.kt)("p",null,"You can also customize the headers sent by the server:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { serialize, parse } from "cookie";\n\n// called during the handshake\nio.engine.on("initial_headers", (headers, request) => {\n  headers["set-cookie"] = serialize("uid", "1234", { sameSite: "strict" });\n});\n\n// called for each HTTP request (including the WebSocket upgrade)\nio.engine.on("headers", (headers, request) => {\n  if (!request.headers.cookie) return;\n  const cookies = parse(request.headers.cookie);\n  if (!cookies.randomId) {\n    headers["set-cookie"] = serialize("randomId", "abc", { maxAge: 86400 });\n  }\n});\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please note that event emitters are synchronous:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'io.engine.on("initial_headers", async (headers, request) => {\n  // WARNING! this won\'t work\n  const session = await fetchSession(request);\n  headers["set-cookie"] = serialize("sid", session.id, { sameSite: "strict" });\n});\n')),(0,i.kt)("p",{parentName:"div"},"If you need to do some async operations, you will need to use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/v4/server-options/#allowrequest"},(0,i.kt)("inlineCode",{parentName:"a"},"allowRequest"))," option."),(0,i.kt)("p",{parentName:"div"},"Please check ",(0,i.kt)("a",{parentName:"p",href:"/how-to/use-with-express-session#2nd-use-case-socketio-can-also-create-the-session-context"},"this example")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"express-session")," for reference."))),(0,i.kt)("h2",{id:"nodejs-client-and-cookies"},"Node.js client and cookies"),(0,i.kt)("p",null,"The Node.js client uses the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mjwwit/node-XMLHttpRequest"},(0,i.kt)("inlineCode",{parentName:"a"},"xmlhttprequest-ssl"))," package, which provides an API similar to the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XMLHttpRequest")," objects in the browser."),(0,i.kt)("p",null,"The package does not provide a way to store the cookies sent by the server, but you can manually parse them:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { io } from "socket.io-client";\nimport { parse } from "cookie";\n\nconst socket = io("https://my-domain.com");\nconst COOKIE_NAME = "AWSALB";\n\nsocket.io.on("open", () => {\n  socket.io.engine.transport.on("pollComplete", () => {\n    const request = socket.io.engine.transport.pollXhr.xhr;\n    const cookieHeader = request.getResponseHeader("set-cookie");\n    if (!cookieHeader) {\n      return;\n    }\n    cookieHeader.forEach(cookieString => {\n      if (cookieString.includes(`${COOKIE_NAME}=`)) {\n        const cookie = parse(cookieString);\n        socket.io.opts.extraHeaders = {\n          cookie: `${COOKIE_NAME}=${cookie[COOKIE_NAME]}`\n        }\n      }\n    });\n  });\n});\n')),(0,i.kt)("p",null,"This might be useful if you want to load test your Socket.IO servers running behind an AWS Application Load Balancer."),(0,i.kt)("p",null,"Reference: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html"},"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html")))}d.isMDXComponent=!0}}]);