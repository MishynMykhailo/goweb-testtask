/*! For license information please see 385.e589449f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoweb_testtask=self.webpackChunkgoweb_testtask||[]).push([[385],{8271:function(t,e,r){r.r(e),r.d(e,{default:function(){return A}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new S(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=f;var h={};function d(){}function y(){}function m(){}var v={};s(v,c,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(L([])));g&&g!==e&&r.call(g,c)&&(v=g);var w=m.prototype=d.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(a,i,c,u){var l=p(t[a],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return o("throw",t,c,u)}))}u(l.arg)}var i;a(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function O(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return y.prototype=m,a(w,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:y,configurable:!0}),y.displayName=s(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(j.prototype),s(j.prototype,u,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new j(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),s(w,l,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=L,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var a=r(9142);function i(t,e,r){return(e=(0,a.Z)(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l=r(907);var s=r(181);function f(t){return function(t){if(Array.isArray(t))return(0,l.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,s.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}var h,d=r(885),y=r(2791),m="FeedBack_div__oLV19",v="FeedBack_padding__88OWp",b="FeedBack_input__fBYv3",g="FeedBack_h2__eX0ah",w="FeedBack_img__yH5gh",x="FeedBack_form__QdQu2",j="FeedBack_labelName__mgvFp",O="FeedBack_labelEmail__pmfHN",_="FeedBack_errorMessage__EsQWd",k="FeedBack_plf__5scek",E="FeedBack_btn__HOMgp",S=[{id:1,name:"contact",jpg1x:r.p+"static/media/contact.df3181530910b96adc57.jpg",jpg2x:r.p+"static/media/contact@2x.91f1aef42b5121d5cade.jpg",webp1x:r.p+"static/media/contact.814e5c1876a8cb4c827e.webp",webp2x:r.p+"static/media/contact@2x.9e7c87833c29c1bd1e56.webp",alt:"feedback"}],L=["title","titleId"];function C(){return C=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},C.apply(this,arguments)}function N(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function P(t,e){var r=t.title,n=t.titleId,o=N(t,L);return y.createElement("svg",C({width:16,height:15,viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":n},o),r?y.createElement("title",{id:n},r):null,h||(h=y.createElement("path",{d:"M13 11.04C13 11.352 12.8929 11.59 12.6788 11.754C12.4647 11.918 12.2019 12 11.8904 12H1.10961C0.798143 12 0.53534 11.916 0.321204 11.748C0.107068 11.58 0 11.344 0 11.04C0 10.8 0.0700809 10.556 0.210243 10.308L5.59479 0.66C5.85175 0.22 6.15544 0 6.50584 0C6.85624 0 7.15214 0.22 7.39353 0.66L12.7898 10.32C12.9299 10.576 13 10.816 13 11.04ZM7.31177 4.908V3.156H5.68823V4.908C5.68823 5.02 5.69602 5.126 5.71159 5.226C5.72716 5.326 5.74858 5.438 5.77583 5.562C5.80308 5.686 5.8245 5.792 5.84007 5.88L6.14376 7.824H6.83288L7.14825 5.88C7.16382 5.8 7.18718 5.696 7.21833 5.568C7.24948 5.44 7.27284 5.326 7.28841 5.226C7.30398 5.126 7.31177 5.02 7.31177 4.908ZM7.31177 9.552C7.31177 9.32 7.23196 9.124 7.07233 8.964C6.9127 8.804 6.71998 8.724 6.49416 8.724C6.27613 8.724 6.0873 8.804 5.92767 8.964C5.76804 9.124 5.68823 9.32 5.68823 9.552C5.68823 9.784 5.76804 9.982 5.92767 10.146C6.0873 10.31 6.27613 10.392 6.49416 10.392C6.71998 10.392 6.9127 10.31 7.07233 10.146C7.23196 9.982 7.31177 9.784 7.31177 9.552Z",fill:"#EB5757"})))}var Z=y.forwardRef(P),F=(r.p,r(9723)),B=r(184),I=function(t){return Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&")},A=function(){var t=(0,y.useState)(""),e=(0,d.Z)(t,2),r=e[0],n=e[1],a=(0,y.useState)(""),c=(0,d.Z)(a,2),l=c[0],s=c[1],h=(0,y.useState)(!1),L=(0,d.Z)(h,2),C=L[0],N=L[1],P=function(t){var e=t.target,r=e.name,o=e.value;switch(r){case"name":n(o);break;case"email":s(o)}},A=function(){var t,e=(t=o().mark((function t(e){var r,n,a,c,s,p,h,d,y;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==l.trim()&&f(l).includes("@")){t.next=4;break}return e.preventDefault(),N(!0),t.abrupt("return");case 4:return n=e.target.elements,a=n.email,c=n.name,s=a.name,p=a.value,h=c.name,d=c.value,i(r={},s,p),i(r,h,d),y=r,N(!1),T(),t.next=12,fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:I(u({"form-name":"feedback"},y))});case 12:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){p(a,n,o,i,c,"next",t)}function c(t){p(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}(),T=function(){n(""),s("")};return(0,B.jsxs)("div",{className:m,id:"Contact",children:[S.map((function(t){var e=t.id,r=t.jpg1x,n=t.jpg2x,o=t.webp1x,a=t.webp2x,i=t.alt;return(0,B.jsx)(F.Z,{jpg1x:r,jpg2x:n,webp1x:o,webp2x:a,alt:i,className:w},e)})),(0,B.jsxs)("div",{className:v,children:[(0,B.jsx)("h2",{className:g,children:"Request Callback "}),(0,B.jsxs)("form",{method:"post",className:x,onSubmit:A,children:[(0,B.jsx)("input",{type:"hidden",name:"form-name",value:"feedback"}),(0,B.jsxs)("label",{className:j,children:[(0,B.jsx)("input",{id:"name",name:"name",value:r,className:b,type:"text",placeholder:" ",onChange:function(t){return P(t)}}),(0,B.jsx)("p",{className:k,children:"Enter your name"})]}),(0,B.jsxs)("label",{className:O,children:[(0,B.jsx)("input",{id:"email",name:"email",value:l,className:b,type:"text",placeholder:" ",onChange:function(t){return P(t)},required:!0}),C?(0,B.jsxs)("p",{className:_,children:[(0,B.jsx)(Z,{})," This is a required field"]}):(0,B.jsx)("p",{className:_,children:" "}),(0,B.jsx)("p",{className:k,children:"Enter email*"})]}),(0,B.jsx)("button",{type:"submit",className:E,children:"Send"})]})]})]})}},9723:function(t,e,r){r.d(e,{Z:function(){return o}});r(2791);var n=r(184),o=function(t){var e=t.id,r=t.webp1x,o=t.webp2x,a=t.jpg1x,i=t.jpg2x,c=t.alt,u=t.className;return(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{srcSet:"".concat(o," 2x, ").concat(r," 1x"),type:"image/webp"}),(0,n.jsx)("source",{srcSet:"".concat(i," 2x, ").concat(a," 1x"),type:"image/jpeg"}),(0,n.jsx)("img",{className:u,src:"#",alt:c,loading:"lazy"})]},e)}},907:function(t,e,r){function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,{Z:function(){return n}})},885:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(181);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(s){l=!0,o=s}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,e)||(0,n.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},9142:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(t){var e=function(t,e){if("object"!==(0,n.Z)(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==(0,n.Z)(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===(0,n.Z)(e)?e:String(e)}},1002:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,{Z:function(){return n}})},181:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(907);function o(t,e){if(t){if("string"===typeof t)return(0,n.Z)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(t,e):void 0}}}}]);
//# sourceMappingURL=385.e589449f.chunk.js.map