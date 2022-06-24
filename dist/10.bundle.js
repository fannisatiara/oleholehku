(window.webpackJsonp=window.webpackJsonp||[]).push([[10],[function(t,r,e){"use strict";(function(t){function n(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var n,o,i=[],u=!0,a=!1;try{for(e=e.call(t);!(u=(n=e.next()).done)&&(i.push(n.value),!r||i.length!==r);u=!0);}catch(t){a=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}(t,r)||o(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){if(t){if("string"==typeof t)return i(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,r):void 0}}function i(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function u(t,r){if(r&&("object"===d(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return a(t)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t){var r="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,n)}function n(){return s(t,arguments,l(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),h(n,t)})(t)}function s(t,r,e){return(s=f()?Reflect.construct:function(t,r,e){var n=[null];n.push.apply(n,r);var o=new(Function.bind.apply(t,n));return e&&h(o,e.prototype),o}).apply(null,arguments)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function h(t,r){return(h=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t})(t,r)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function v(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,r,e){return r&&v(t.prototype,r),e&&v(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */e.d(r,"a",(function(){return T})),e.d(r,"b",(function(){return U})),e.d(r,"c",(function(){return L})),e.d(r,"d",(function(){return it})),e.d(r,"e",(function(){return m})),e.d(r,"f",(function(){return S})),e.d(r,"g",(function(){return A})),e.d(r,"h",(function(){return C})),e.d(r,"i",(function(){return E})),e.d(r,"j",(function(){return w})),e.d(r,"k",(function(){return Q})),e.d(r,"l",(function(){return D})),e.d(r,"m",(function(){return ut})),e.d(r,"n",(function(){return j})),e.d(r,"o",(function(){return tt})),e.d(r,"p",(function(){return k})),e.d(r,"q",(function(){return st})),e.d(r,"r",(function(){return ot})),e.d(r,"s",(function(){return lt})),e.d(r,"t",(function(){return B})),e.d(r,"u",(function(){return K})),e.d(r,"v",(function(){return P})),e.d(r,"w",(function(){return x})),e.d(r,"x",(function(){return Y})),e.d(r,"y",(function(){return I})),e.d(r,"z",(function(){return V})),e.d(r,"A",(function(){return N})),e.d(r,"B",(function(){return M})),e.d(r,"C",(function(){return W})),e.d(r,"D",(function(){return R})),e.d(r,"E",(function(){return q})),e.d(r,"F",(function(){return H})),e.d(r,"G",(function(){return Z})),e.d(r,"H",(function(){return et})),e.d(r,"I",(function(){return nt})),e.d(r,"J",(function(){return X})),e.d(r,"K",(function(){return ht})),e.d(r,"L",(function(){return ft})),e.d(r,"M",(function(){return G})),e.d(r,"N",(function(){return z}));var y=!1,_=!1,g="${JSCORE_VERSION}",m=function(t,r){if(!t)throw S(r)},S=function(t){return new Error("Firebase Database ("+g+") INTERNAL ASSERT FAILED: "+t)},O=function(t){for(var r=[],e=0,n=0;n<t.length;n++){var o=t.charCodeAt(n);o<128?r[e++]=o:o<2048?(r[e++]=o>>6|192,r[e++]=63&o|128):55296==(64512&o)&&n+1<t.length&&56320==(64512&t.charCodeAt(n+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++n)),r[e++]=o>>18|240,r[e++]=o>>12&63|128,r[e++]=o>>6&63|128,r[e++]=63&o|128):(r[e++]=o>>12|224,r[e++]=o>>6&63|128,r[e++]=63&o|128)}return r},A={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(t,r){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var e=r?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],o=0;o<t.length;o+=3){var i=t[o],u=o+1<t.length,a=u?t[o+1]:0,c=o+2<t.length,s=c?t[o+2]:0,f=i>>2,h=(3&i)<<4|a>>4,l=(15&a)<<2|s>>6,d=63&s;c||(d=64,u||(l=64)),n.push(e[f],e[h],e[l],e[d])}return n.join("")},encodeString:function(t,r){return this.HAS_NATIVE_SUPPORT&&!r?btoa(t):this.encodeByteArray(O(t),r)},decodeString:function(t,r){return this.HAS_NATIVE_SUPPORT&&!r?atob(t):function(t){for(var r=[],e=0,n=0;e<t.length;){var o=t[e++];if(o<128)r[n++]=String.fromCharCode(o);else if(o>191&&o<224){var i=t[e++];r[n++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){var u=((7&o)<<18|(63&t[e++])<<12|(63&t[e++])<<6|63&t[e++])-65536;r[n++]=String.fromCharCode(55296+(u>>10)),r[n++]=String.fromCharCode(56320+(1023&u))}else{var a=t[e++],c=t[e++];r[n++]=String.fromCharCode((15&o)<<12|(63&a)<<6|63&c)}}return r.join("")}(this.decodeStringToByteArray(t,r))},decodeStringToByteArray:function(t,r){this.init_();for(var e=r?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],o=0;o<t.length;){var i=e[t.charAt(o++)],u=o<t.length?e[t.charAt(o)]:0,a=++o<t.length?e[t.charAt(o)]:64,c=++o<t.length?e[t.charAt(o)]:64;if(++o,null==i||null==u||null==a||null==c)throw Error();var s=i<<2|u>>4;if(n.push(s),64!==a){var f=u<<4&240|a>>2;if(n.push(f),64!==c){var h=a<<6&192|c;n.push(h)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},E=function(t){var r=O(t);return A.encodeByteArray(r,!0)},w=function(t){return E(t).replace(/\./g,"")},C=function(t){try{return A.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(t){return k(void 0,t)}function k(t,r){if(!(r instanceof Object))return r;switch(r.constructor){case Date:return new Date(r.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return r}for(var e in r)r.hasOwnProperty(e)&&"__proto__"!==e&&(t[e]=k(t[e],r[e]));return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var T=function(){function t(){var r=this;p(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,e){r.resolve=t,r.reject=e}))}return b(t,[{key:"wrapCallback",value:function(t){var r=this;return function(e,n){e?r.reject(e):r.resolve(n),"function"==typeof t&&(r.promise.catch((function(){})),1===t.length?t(e):t(e,n))}}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,r){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var e=r||"demo-project",n=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var i=Object.assign({iss:"https://securetoken.google.com/".concat(e),aud:e,iat:n,exp:n+3600,auth_time:n,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[w(JSON.stringify({alg:"none",type:"JWT"})),w(JSON.stringify(i)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function N(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())}function M(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(t){return!1}}function P(){return"object"===("undefined"==typeof self?"undefined":d(self))&&self.self===self}function x(){var t="object"===("undefined"==typeof chrome?"undefined":d(chrome))?chrome.runtime:"object"===("undefined"==typeof browser?"undefined":d(browser))?browser.runtime:void 0;return"object"===d(t)&&void 0!==t.id}function R(){return"object"===("undefined"==typeof navigator?"undefined":d(navigator))&&"ReactNative"===navigator.product}function I(){var t=B();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function W(){return!0===y||!0===_}function V(){return"object"===("undefined"==typeof indexedDB?"undefined":d(indexedDB))}function z(){return new Promise((function(t,r){try{var e=!0,n="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(n);o.onsuccess=function(){o.result.close(),e||self.indexedDB.deleteDatabase(n),t(!0)},o.onupgradeneeded=function(){e=!1},o.onerror=function(){var t;r((null===(t=o.error)||void 0===t?void 0:t.message)||"")}}catch(t){r(t)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var L=function(t){!function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&h(t,r)}(o,t);var r,e,n=(r=o,e=f(),function(){var t,n=l(r);if(e){var o=l(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return u(this,t)});function o(t,r,e){var i;return p(this,o),(i=n.call(this,r)).code=t,i.customData=e,i.name="FirebaseError",Object.setPrototypeOf(a(i),o.prototype),Error.captureStackTrace&&Error.captureStackTrace(a(i),U.prototype.create),i}return b(o)}(c(Error)),U=function(){function t(r,e,n){p(this,t),this.service=r,this.serviceName=e,this.errors=n}return b(t,[{key:"create",value:function(t){var r=(arguments.length<=1?void 0:arguments[1])||{},e="".concat(this.service,"/").concat(t),n=this.errors[t],o=n?F(n,r):"Error",i="".concat(this.serviceName,": ").concat(o," (").concat(e,")."),u=new L(e,i,r);return u}}]),t}();function F(t,r){return t.replace(J,(function(t,e){var n=r[e];return null!=n?String(n):"<".concat(e,"?>")}))}var J=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){return JSON.parse(t)}function G(t){return JSON.stringify(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $=function(t){var r={},e={},n={},o="";try{var i=t.split(".");r=H(C(i[0])||""),e=H(C(i[1])||""),o=i[2],n=e.d||{},delete e.d}catch(t){}return{header:r,claims:e,data:n,signature:o}},q=function(t){var r=$(t).claims;return!!r&&"object"===d(r)&&r.hasOwnProperty("iat")},K=function(t){var r=$(t).claims;return"object"===d(r)&&!0===r.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Q(t,r){return Object.prototype.hasOwnProperty.call(t,r)}function X(t,r){return Object.prototype.hasOwnProperty.call(t,r)?t[r]:void 0}function Y(t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))return!1;return!0}function Z(t,r,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=r.call(e,t[o],o,t));return n}function tt(t,r){if(t===r)return!0;for(var e=Object.keys(t),n=Object.keys(r),o=0,i=e;o<i.length;o++){var u=i[o];if(!n.includes(u))return!1;var a=t[u],c=r[u];if(rt(a)&&rt(c)){if(!tt(a,c))return!1}else if(a!==c)return!1}for(var s=0,f=n;s<f.length;s++){var h=f[s];if(!e.includes(h))return!1}return!0}function rt(t){return null!==t&&"object"===d(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){for(var r=[],e=function(){var t=n(i[o],2),e=t[0],u=t[1];Array.isArray(u)?u.forEach((function(t){r.push(encodeURIComponent(e)+"="+encodeURIComponent(t))})):r.push(encodeURIComponent(e)+"="+encodeURIComponent(u))},o=0,i=Object.entries(t);o<i.length;o++)e();return r.length?"&"+r.join("&"):""}function nt(t){var r={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var e=n(t.split("="),2),o=e[0],i=e[1];r[decodeURIComponent(o)]=decodeURIComponent(i)}})),r}function ot(t){var r=t.indexOf("?");if(!r)return"";var e=t.indexOf("#",r);return t.substring(r,e>0?e:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it=function(){function t(){p(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var r=1;r<this.blockSize;++r)this.pad_[r]=0;this.reset()}return b(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(t,r){r||(r=0);var e=this.W_;if("string"==typeof t)for(var n=0;n<16;n++)e[n]=t.charCodeAt(r)<<24|t.charCodeAt(r+1)<<16|t.charCodeAt(r+2)<<8|t.charCodeAt(r+3),r+=4;else for(var o=0;o<16;o++)e[o]=t[r]<<24|t[r+1]<<16|t[r+2]<<8|t[r+3],r+=4;for(var i=16;i<80;i++){var u=e[i-3]^e[i-8]^e[i-14]^e[i-16];e[i]=4294967295&(u<<1|u>>>31)}for(var a,c,s=this.chain_[0],f=this.chain_[1],h=this.chain_[2],l=this.chain_[3],d=this.chain_[4],p=0;p<80;p++){p<40?p<20?(a=l^f&(h^l),c=1518500249):(a=f^h^l,c=1859775393):p<60?(a=f&h|l&(f|h),c=2400959708):(a=f^h^l,c=3395469782);var v=(s<<5|s>>>27)+a+d+c+e[p]&4294967295;d=l,l=h,h=4294967295&(f<<30|f>>>2),f=s,s=v}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+f&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}},{key:"update",value:function(t,r){if(null!=t){void 0===r&&(r=t.length);for(var e=r-this.blockSize,n=0,o=this.buf_,i=this.inbuf_;n<r;){if(0===i)for(;n<=e;)this.compress_(t,n),n+=this.blockSize;if("string"==typeof t){for(;n<r;)if(o[i]=t.charCodeAt(n),++n,++i===this.blockSize){this.compress_(o),i=0;break}}else for(;n<r;)if(o[i]=t[n],++n,++i===this.blockSize){this.compress_(o),i=0;break}}this.inbuf_=i,this.total_+=r}}},{key:"digest",value:function(){var t=[],r=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&r,r/=256;this.compress_(this.buf_);for(var n=0,o=0;o<5;o++)for(var i=24;i>=0;i-=8)t[n]=this.chain_[o]>>i&255,++n;return t}}]),t}();function ut(t,r){var e=new at(t,r);return e.subscribe.bind(e)}var at=function(){function t(r,e){var n=this;p(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){r(n)})).catch((function(t){n.error(t)}))}return b(t,[{key:"next",value:function(t){this.forEachObserver((function(r){r.next(t)}))}},{key:"error",value:function(t){this.forEachObserver((function(r){r.error(t)})),this.close(t)}},{key:"complete",value:function(){this.forEachObserver((function(t){t.complete()})),this.close()}},{key:"subscribe",value:function(t,r,e){var n,i=this;if(void 0===t&&void 0===r&&void 0===e)throw new Error("Missing Observer.");void 0===(n=function(t,r){if("object"!==d(t)||null===t)return!1;var e,n=function(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=o(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){c=!0,u=t},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw u}}}}(r);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(i in t&&"function"==typeof t[i])return!0}}catch(t){n.e(t)}finally{n.f()}return!1}(t,["next","error","complete"])?t:{next:t,error:r,complete:e}).next&&(n.next=ct),void 0===n.error&&(n.error=ct),void 0===n.complete&&(n.complete=ct);var u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(t){}})),this.observers.push(n),u}},{key:"unsubscribeOne",value:function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(t){if(!this.finalized)for(var r=0;r<this.observers.length;r++)this.sendOne(r,t)}},{key:"sendOne",value:function(t,r){var e=this;this.task.then((function(){if(void 0!==e.observers&&void 0!==e.observers[t])try{r(e.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}},{key:"close",value:function(t){var r=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){r.observers=void 0,r.onNoObservers=void 0})))}}]),t}();function ct(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,r){return"".concat(t," failed: ").concat(r," argument ")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ft=function(t){for(var r=[],e=0,n=0;n<t.length;n++){var o=t.charCodeAt(n);if(o>=55296&&o<=56319){var i=o-55296;n++,m(n<t.length,"Surrogate pair missing trail surrogate."),o=65536+(i<<10)+(t.charCodeAt(n)-56320)}o<128?r[e++]=o:o<2048?(r[e++]=o>>6|192,r[e++]=63&o|128):o<65536?(r[e++]=o>>12|224,r[e++]=o>>6&63|128,r[e++]=63&o|128):(r[e++]=o>>18|240,r[e++]=o>>12&63|128,r[e++]=o>>6&63|128,r[e++]=63&o|128)}return r},ht=function(t){for(var r=0,e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r++:n<2048?r+=2:n>=55296&&n<=56319?(r+=4,e++):r+=3}return r};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(t){return t&&t._delegate?t._delegate:t}}).call(this,e(20))}]]);