"use strict";(self.webpackChunknimbly=self.webpackChunknimbly||[]).push([[9841],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=l,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(b,i(i({ref:n},s),{},{components:t})):r.createElement(b,i({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4611:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return s}});var r=t(7462),l=t(3366),o=(t(7294),t(3905)),i=["components"],a={title:"Client usage with bundlers",sidebar_label:"Usage with bundlers",sidebar_position:5,slug:"/client-with-bundlers/"},u=void 0,p={unversionedId:"categories/Client/client-with-bundlers",id:"categories/Client/client-with-bundlers",title:"Client usage with bundlers",description:"You will find below the configuration for bundling the client library with different bundlers:",source:"@site/docs/categories/03-Client/client-with-bundlers.md",sourceDirName:"categories/03-Client",slug:"/client-with-bundlers/",permalink:"/docs/v1/client-with-bundlers/",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Client usage with bundlers",sidebar_label:"Usage with bundlers",sidebar_position:5,slug:"/client-with-bundlers/"},sidebar:"sidebar",previous:{title:"Offline behavior",permalink:"/docs/v1/client-offline-behavior/"},next:{title:"Emitting events",permalink:"/docs/v1/emitting-events/"}},s=[{value:"Webpack 5",id:"webpack-5",children:[{value:"Browser",id:"browser",children:[],level:3},{value:"Node.js",id:"nodejs",children:[],level:3}],level:2},{value:"Rollup.js",id:"rollupjs",children:[{value:"Browser",id:"browser-1",children:[],level:3},{value:"Node.js",id:"nodejs-1",children:[],level:3}],level:2}],c={toc:s};function d(e){var n=e.components,a=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You will find below the configuration for bundling the client library with different bundlers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#webpack-5"},"Webpack 5"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#browser"},"Browser")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#nodejs"},"Node.js")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rollup-js"},"Rollup.js"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#browser-1"},"Browser")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#nodejs-1"},"Node.js"))))),(0,o.kt)("h2",{id:"webpack-5"},"Webpack 5"),(0,o.kt)("p",null,"Documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/concepts/"},"https://webpack.js.org/concepts/")),(0,o.kt)("h3",{id:"browser"},"Browser"),(0,o.kt)("p",null,"Installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i -D socket.io-client webpack webpack-cli babel-loader @babel/core @babel/preset-env \\\n    @babel/plugin-transform-object-assign webpack-remove-debug\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  entry: "./index.js",\n  output: {\n    filename: "bundle.js",\n  },\n  mode: "production",\n  node: false,\n  module: {\n    rules: [\n      {\n        test: /\\.m?js$/,\n        use: {\n          loader: "babel-loader",\n          options: {\n            presets: ["@babel/preset-env"], // ensure compatibility with older browsers\n            plugins: ["@babel/plugin-transform-object-assign"], // ensure compatibility with IE 11\n          },\n        },\n      },\n      {\n        test: /\\.js$/,\n        loader: "webpack-remove-debug", // remove "debug" package\n      },\n    ],\n  },\n};\n')),(0,o.kt)("p",null,"For reference, here is the output of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/webpack-bundle-analyzer"},(0,o.kt)("inlineCode",{parentName:"a"},"webpack-bundle-analyzer"))," package:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Output of the webpack-bundle-analyzer package",src:t(3294).Z,width:"1389",height:"789"})),(0,o.kt)("h3",{id:"nodejs"},"Node.js"),(0,o.kt)("p",null,"To use the client in a Node.js environment (server to server connection), here is the configuration:"),(0,o.kt)("p",null,"Installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i -D socket.io-client webpack webpack-cli\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  entry: "./index.js",\n  output: {\n    filename: "bundle.js",\n  },\n  mode: "production",\n  target: "node",\n  externals: {\n    bufferutil: "bufferutil",\n    "utf-8-validate": "utf-8-validate",\n  },\n};\n')),(0,o.kt)("p",null,"Note: without setting ",(0,o.kt)("inlineCode",{parentName:"p"},'target: "node"'),", you will likely encounter the following error:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ReferenceError: document is not defined\n")),(0,o.kt)("h2",{id:"rollupjs"},"Rollup.js"),(0,o.kt)("p",null,"Documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"https://rollupjs.org/guide/en/")),(0,o.kt)("h3",{id:"browser-1"},"Browser"),(0,o.kt)("p",null,"Installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i -D socket.io-client rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-commonjs \\\n  @rollup/plugin-babel rollup-plugin-uglify babel @babel/core @babel/preset-env\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rollup.config.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import resolve from "@rollup/plugin-node-resolve";\nimport commonjs from "@rollup/plugin-commonjs";\nimport babel from "@rollup/plugin-babel";\nimport { uglify } from "rollup-plugin-uglify";\n\nexport default {\n  input: "index.js",\n  output: {\n    file: "bundle.js",\n    format: "cjs",\n  },\n  plugins: [\n    resolve({\n      browser: true,\n    }),\n    commonjs(),\n    babel({\n      include: ["**.js", "node_modules/**"],\n      babelHelpers: "bundled",\n      presets: ["@babel/preset-env"],\n    }),\n    uglify(),\n  ],\n};\n')),(0,o.kt)("h3",{id:"nodejs-1"},"Node.js"),(0,o.kt)("p",null,"Installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i -D socket.io-client rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-uglify\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rollup.config.js")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import resolve from "@rollup/plugin-node-resolve";\nimport commonjs from "@rollup/plugin-commonjs";\nimport { uglify } from "rollup-plugin-uglify";\n\nexport default {\n  input: "index.js",\n  output: {\n    file: "bundle.js",\n    format: "cjs",\n  },\n  plugins: [\n    resolve({\n      preferBuiltins: true,\n    }),\n    commonjs(),\n    uglify(),\n  ],\n};\n')))}d.isMDXComponent=!0},3294:function(e,n,t){n.Z=t.p+"assets/images/bundle-analyzer-output-8a4c7de4914148fdc867c560975d3815.png"}}]);