var _openmrs_esm_form_builder_app;(()=>{"use strict";var e,r,t,n,o,a,i,u,l,s,f,p,d,c,h,m,v,g,b,y,w,_={35888:(e,r,t)=>{var n={"./start":()=>t.e(77).then((()=>()=>t(76077)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>a})}},S={};function j(e){var r=S[e];if(void 0!==r)return r.exports;var t=S[e]={id:e,loaded:!1,exports:{}};return _[e].call(t.exports,t,t.exports,j),t.loaded=!0,t.exports}j.m=_,j.c=S,j.amdD=function(){throw new Error("define cannot be used indirect")},j.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return j.d(r,{a:r}),r},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,j.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var o=Object.create(null);j.r(o);var a={};e=e||[null,r({}),r([]),r(r)];for(var i=2&n&&t;"object"==typeof i&&!~e.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>t[e]));return a.default=()=>t,j.d(o,a),o},j.d=(e,r)=>{for(var t in r)j.o(r,t)&&!j.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},j.f={},j.e=e=>Promise.all(Object.keys(j.f).reduce(((r,t)=>(j.f[t](e,r),r)),[])),j.u=e=>e+".js",j.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),j.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t={},n="@openmrs/esm-form-builder-app:",j.l=(e,r,o,a)=>{if(t[e])t[e].push(r);else{var i,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==n+o){i=f;break}}i||(u=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,j.nc&&i.setAttribute("nonce",j.nc),i.setAttribute("data-webpack",n+o),i.src=e),t[e]=[r];var p=(r,n)=>{i.onerror=i.onload=null,clearTimeout(d);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),r)return r(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),u&&document.head.appendChild(i)}},j.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{j.S={};var e={},r={};j.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];j.o(j.S,t)||(j.S[t]={});var a=j.S[t],i="@openmrs/esm-form-builder-app",u=(e,r,t,n)=>{var o=a[e]=a[e]||{},u=o[r];(!u||!u.loaded&&(!n!=!u.eager?n:i>u.from))&&(o[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(u("@openmrs/esm-framework","5.8.2-pre.2436",(()=>Promise.all([j.e(151),j.e(72)]).then((()=>()=>j(15151))))),u("react-dom","18.3.1",(()=>Promise.all([j.e(961),j.e(72)]).then((()=>()=>j(40961))))),u("react-i18next","11.18.6",(()=>Promise.all([j.e(422),j.e(72)]).then((()=>()=>j(44422))))),u("react","18.3.1",(()=>j.e(540).then((()=>()=>j(96540))))),u("rxjs","6.6.7",(()=>j.e(184).then((()=>()=>j(63184)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;j.g.importScripts&&(e=j.g.location+"");var r=j.g.document;if(!e&&r&&(r.currentScript&&"SCRIPT"===r.currentScript.tagName.toUpperCase()&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),j.p=e})(),o=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},a=(e,r)=>{e=o(e),r=o(r);for(var t=0;;){if(t>=e.length)return t<r.length&&"u"!=(typeof r[t])[0];var n=e[t],a=(typeof n)[0];if(t>=r.length)return"u"==a;var i=r[t],u=(typeof i)[0];if(a!=u)return"o"==a&&"n"==u||"s"==u||"u"==a;if("o"!=a&&"u"!=a&&n!=i)return n<i;t++}},i=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(u=e[o]))[0]?"-":(n>0?".":"")+(n=2,u);return t}var a=[];for(o=1;o<e.length;o++){var u=e[o];a.push(0===u?"not("+l()+")":1===u?"("+l()+" || "+l()+")":2===u?a.pop()+" "+a.pop():i(u))}return l();function l(){return a.pop().replace(/^\((.+)\)$/,"$1")}},u=(e,r)=>{if(0 in e){r=o(r);var t=e[0],n=t<0;n&&(t=-t-1);for(var a=0,i=1,l=!0;;i++,a++){var s,f,p=i<e.length?(typeof e[i])[0]:"";if(a>=r.length||"o"==(f=(typeof(s=r[a]))[0]))return!l||("u"==p?i>t&&!n:""==p!=n);if("u"==f){if(!l||"u"!=p)return!1}else if(l)if(p==f)if(i<=t){if(s!=e[i])return!1}else{if(n?s>e[i]:s<e[i])return!1;s!=e[i]&&(l=!1)}else if("s"!=p&&"n"!=p){if(n||i<=t)return!1;l=!1,i--}else{if(i<=t||f<p!=n)return!1;l=!1}else"s"!=p&&"n"!=p&&(l=!1,i--)}}var d=[],c=d.pop.bind(d);for(a=1;a<e.length;a++){var h=e[a];d.push(1==h?c()|c():2==h?c()&c():h?u(h,r):!c())}return!!c()},l=(e,r)=>e&&j.o(e,r),s=e=>(e.loaded=1,e.get()),f=e=>Object.keys(e).reduce(((r,t)=>(e[t].eager&&(r[t]=e[t]),r)),{}),p=(e,r,t)=>{var n=t?f(e[r]):e[r];return Object.keys(n).reduce(((e,r)=>!e||!n[e].loaded&&a(e,r)?r:e),0)},d=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+i(n)+")",c=e=>{throw new Error(e)},h=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},m=(e,r,t)=>t?t():((e,r)=>c("Shared module "+r+" doesn't exist in shared scope "+e))(e,r),v=(e=>function(r,t,n,o,a){var i=j.I(r);return i&&i.then&&!n?i.then(e.bind(e,r,j.S[r],t,!1,o,a)):e(r,j.S[r],t,n,o,a)})(((e,r,t,n,o,a)=>{if(!l(r,t))return m(e,t,a);var i=p(r,t,n);return u(o,i)||h(d(r,t,i,o)),s(r[t][i])})),g={},b={16072:()=>v("default","react",!1,[1,18],(()=>j.e(540).then((()=>()=>j(96540))))),25987:()=>v("default","@openmrs/esm-framework",!1,[0],(()=>Promise.all([j.e(151),j.e(72)]).then((()=>()=>j(15151))))),53941:()=>v("default","react-i18next",!1,[1,11],(()=>j.e(422).then((()=>()=>j(44422))))),92646:()=>v("default","react-dom",!1,[1,18],(()=>j.e(961).then((()=>()=>j(40961))))),53083:()=>v("default","rxjs",!1,[1,6],(()=>j.e(184).then((()=>()=>j(63184)))))},y={72:[16072],77:[25987],488:[53941,92646],629:[53083]},w={},j.f.consumes=(e,r)=>{j.o(y,e)&&y[e].forEach((e=>{if(j.o(g,e))return r.push(g[e]);if(!w[e]){var t=r=>{g[e]=0,j.m[e]=t=>{delete j.c[e],t.exports=r()}};w[e]=!0;var n=r=>{delete g[e],j.m[e]=t=>{throw delete j.c[e],r}};try{var o=b[e]();o.then?r.push(g[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}}))},(()=>{var e={114:0};j.f.j=(r,t)=>{var n=j.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(488|72)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var a=j.p+j.u(r),i=new Error;j.l(a,(t=>{if(j.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+o+": "+a+")",i.name="ChunkLoadError",i.type=o,i.request=a,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[a,i,u]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in i)j.o(i,n)&&(j.m[n]=i[n]);u&&u(j)}for(r&&r(t);l<a.length;l++)o=a[l],j.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=globalThis.webpackChunk_openmrs_esm_form_builder_app=globalThis.webpackChunk_openmrs_esm_form_builder_app||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),j.nc=void 0;var O=j(35888);_openmrs_esm_form_builder_app=O})();