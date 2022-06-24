(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{32:function(e,t,r){"use strict";r.d(t,"a",(function(){return He})),r.d(t,"b",(function(){return De})),r.d(t,"c",(function(){return Ge})),r.d(t,"d",(function(){return Ne}));var n=r(4),o=r(0),i=r(6);function a(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=k(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,a),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h={};function d(){}function p(){}function v(){}var _={};u(_,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==t&&r.call(g,o)&&(_=g);var m=v.prototype=d.prototype=Object.create(_);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,s){var u=l(e[o],e,i);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==f(h)&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function k(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function R(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=v,u(m,"constructor",v),u(v,"constructor",p),p.displayName=u(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,s,"GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},b(w.prototype),u(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new w(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(m),u(m,s,"Generator"),u(m,o,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),R(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function s(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,o)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){s(i,n,o,a,u,"next",e)}function u(e){s(i,n,o,a,u,"throw",e)}a(void 0)}))}}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m(this,r)}}function m(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}
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
 */var k=function(e){_(r,e);var t=g(r);function r(e,n){var o;return d(this,r),(o=t.call(this,x(e),"Firebase Storage: ".concat(n," (").concat(x(e),")"))).customData={serverResponse:null},o._baseMessage=o.message,Object.setPrototypeOf(b(o),r.prototype),o}return v(r,[{key:"_codeEquals",value:function(e){return x(e)===this.code}},{key:"serverResponse",get:function(){return this.customData.serverResponse},set:function(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message="".concat(this._baseMessage,"\n").concat(this.customData.serverResponse):this.message=this._baseMessage}}]),r}(o.c);function x(e){return"storage/"+e}function R(){return new k("unknown","An unknown error occurred, please check the error payload for server response.")}function T(){return new k("canceled","User canceled the upload/download.")}function O(){return new k("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function P(e){return new k("invalid-argument",e)}function S(){return new k("app-deleted","The Firebase app was deleted.")}function C(e,t){return new k("invalid-format","String does not match format '"+e+"': "+t)}function E(e){throw new k("internal-error","Internal error: "+e)}
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
 */var U,A=function(){function e(t,r){d(this,e),this.bucket=t,this.path_=r}return v(e,[{key:"path",get:function(){return this.path_}},{key:"isRoot",get:function(){return 0===this.path.length}},{key:"fullServerUrl",value:function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}},{key:"bucketOnlyServerUrl",value:function(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}}],[{key:"makeFromBucketSpec",value:function(t,r){var n;try{n=e.makeFromUrl(t,r)}catch(r){return new e(t,"")}if(""===n.path)return n;throw new k("invalid-default-bucket","Invalid default bucket '"+t+"'.")}},{key:"makeFromUrl",value:function(t,r){var n=null;var o=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}for(var a=r.replace(/[.]/g,"\\."),s=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp("^https?://".concat(a,"/").concat("v[A-Za-z0-9_]+","/b/").concat("([A-Za-z0-9.\\-_]+)","/o").concat("(/([^?#]*).*)?$"),"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp("^https?://".concat("firebasestorage.googleapis.com"===r?"(?:storage.googleapis.com|storage.cloud.google.com)":r,"/").concat("([A-Za-z0-9.\\-_]+)","/").concat("([^?#]*)"),"i"),indices:{bucket:1,path:2},postModify:i}],u=0;u<s.length;u++){var c=s[u],l=c.regex.exec(t);if(l){var h=l[c.indices.bucket],f=l[c.indices.path];f||(f=""),n=new e(h,f),c.postModify(n);break}}if(null==n)throw function(e){return new k("invalid-url","Invalid URL '"+e+"'.")}(t);return n}}]),e}(),j=function(){function e(t){d(this,e),this.promise_=Promise.reject(t)}return v(e,[{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(){}}]),e}();function I(e){return"string"==typeof e||e instanceof String}function L(e){return q()&&e instanceof Blob}function q(){return"undefined"!=typeof Blob}function z(e,t,r,n){if(n<t)throw P("Invalid value for '".concat(e,"'. Expected ").concat(t," or greater."));if(n>r)throw P("Invalid value for '".concat(e,"'. Expected ").concat(r," or less."))}
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
 */function F(e,t,r){var n=t;return null==r&&(n="https://".concat(t)),"".concat(r,"://").concat(n,"/v0").concat(e)}function B(e){var t=encodeURIComponent,r="?";for(var n in e){if(e.hasOwnProperty(n))r=r+(t(n)+"="+t(e[n]))+"&"}return r=r.slice(0,-1)}
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
 */!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(U||(U={}));
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
var M=function(){function e(t,r,n,o,i,a,s,u,c,l,h){var f=this;d(this,e),this.url_=t,this.method_=r,this.headers_=n,this.body_=o,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=s,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((function(e,t){f.resolve_=e,f.reject_=t,f.start_()}))}return v(e,[{key:"start_",value:function(){var e=this,t=function(t,r){var n=e.resolve_,o=e.reject_,i=r.connection;if(r.wasSuccessCode)try{var a=e.callback_(i,i.getResponse());void 0!==a?n(a):n()}catch(e){o(e)}else if(null!==i){var s=R();s.serverResponse=i.getErrorText(),e.errorCallback_?o(e.errorCallback_(i,s)):o(s)}else{if(r.canceled)o(e.appDelete_?S():T());else o(new k("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new N(!1,null,!0)):this.backoffId_=
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
function(e,t,r){var n=1,o=null,i=null,a=!1,s=0;function u(){return 2===s}var c=!1;function l(){if(!c){c=!0;for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];t.apply(null,r)}}function h(t){o=setTimeout((function(){o=null,e(d,u())}),t)}function f(){i&&clearTimeout(i)}function d(e){if(c)f();else{for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];if(e)return f(),void l.call.apply(l,[null,e].concat(r));var i,d=u()||a;if(d)return f(),void l.call.apply(l,[null,e].concat(r));n<64&&(n*=2),1===s?(s=2,i=0):i=1e3*(n+Math.random()),h(i)}}var p=!1;function v(e){p||(p=!0,f(),c||(null!==o?(e||(s=2),clearTimeout(o),h(0)):e||(s=1)))}return h(0),i=setTimeout((function(){a=!0,v(!0)}),r),v}((function(t,r){if(r)t(!1,new N(!1,null,!0));else{var n=e.connectionFactory_();e.pendingConnection_=n;var o=function(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)};null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(){null!==e.progressCallback_&&n.removeUploadProgressListener(o),e.pendingConnection_=null;var r=n.getErrorCode()===U.NO_ERROR,i=n.getStatus();if(r&&!e.isRetryStatusCode_(i)){var a=-1!==e.successCodes_.indexOf(i);t(!0,new N(a,n))}else{var s=n.getErrorCode()===U.ABORT;t(!1,new N(!1,null,s))}}))}}),t,this.timeout_)}},{key:"getPromise",value:function(){return this.promise_}},{key:"cancel",value:function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}},{key:"isRetryStatusCode_",value:function(e){var t=e>=500&&e<600,r=-1!==[408,429].indexOf(e),n=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||n}}]),e}(),N=v((function e(t,r,n){d(this,e),this.wasSuccessCode=t,this.connection=r,this.canceled=!!n}));
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
function H(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function G(){for(var e=H(),t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(void 0!==e){for(var o=new e,i=0;i<r.length;i++)o.append(r[i]);return o.getBlob()}if(q())return new Blob(r);throw new k("unsupported-environment","This browser doesn't seem to support creating Blobs")}
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
var D="raw",X="base64",V="base64url",W="data_url",K=v((function e(t,r){d(this,e),this.data=t,this.contentType=r||null}));function Z(e,t){switch(e){case D:return new K(J(t));case X:case V:return new K(Y(e,t));case W:return new K((r=new $(t)).base64?Y(X,r.rest):function(e){var t;try{t=decodeURIComponent(e)}catch(e){throw C(W,"Malformed data URL.")}return J(t)}(r.rest),function(e){return new $(e).contentType}(t))}var r;throw R()}function J(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296==(64512&n))if(r<e.length-1&&56320==(64512&e.charCodeAt(r+1)))n=65536|(1023&n)<<10|1023&e.charCodeAt(++r),t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n);else t.push(239,191,189);else 56320==(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function Y(e,t){switch(e){case X:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n)throw C(e,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break;case V:var o=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(o||i)throw C(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/")}var a;try{a=atob(t)}catch(t){throw C(e,"Invalid character found")}for(var s=new Uint8Array(a.length),u=0;u<a.length;u++)s[u]=a.charCodeAt(u);return s}var $=v((function e(t){d(this,e),this.base64=!1,this.contentType=null;var r=t.match(/^data:([^,]+)?,/);if(null===r)throw C(W,"Must be formatted 'data:[<mediatype>][;base64],<data>");var n=r[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
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
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}));var Q=function(){function e(t,r){d(this,e);var n=0,o="";L(t)?(this.data_=t,n=t.size,o=t.type):t instanceof ArrayBuffer?(r?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(r?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=o}return v(e,[{key:"size",value:function(){return this.size_}},{key:"type",value:function(){return this.type_}},{key:"slice",value:function(t,r){if(L(this.data_)){var n=function(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}
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
 */(this.data_,t,r);return null===n?null:new e(n)}var o=new Uint8Array(this.data_.buffer,t,r-t);return new e(o,!0)}},{key:"uploadData",value:function(){return this.data_}}],[{key:"getBlob",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(q()){var o=r.map((function(t){return t instanceof e?t.data_:t}));return new e(G.apply(null,o))}var i=r.map((function(e){return I(e)?Z(D,e).data:e.data_})),a=0;i.forEach((function(e){a+=e.byteLength}));var s=new Uint8Array(a),u=0;return i.forEach((function(e){for(var t=0;t<e.length;t++)s[u++]=e[t]})),new e(s,!0)}}]),e}();
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
 */function ee(e){var t,r;try{t=JSON.parse(e)}catch(e){return null}return"object"!==f(r=t)||Array.isArray(r)?null:t}
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
 */function te(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function re(e,t){return t}var ne=v((function e(t,r,n,o){d(this,e),this.server=t,this.local=r||t,this.writable=!!n,this.xform=o||re})),oe=null;function ie(){if(oe)return oe;var e=[];e.push(new ne("bucket")),e.push(new ne("generation")),e.push(new ne("metageneration")),e.push(new ne("name","fullPath",!0));var t=new ne("name");t.xform=function(e,t){return function(e){return!I(e)||e.length<2?e:te(e)}(t)},e.push(t);var r=new ne("size");return r.xform=function(e,t){return void 0!==t?Number(t):t},e.push(r),e.push(new ne("timeCreated")),e.push(new ne("updated")),e.push(new ne("md5Hash",null,!0)),e.push(new ne("cacheControl",null,!0)),e.push(new ne("contentDisposition",null,!0)),e.push(new ne("contentEncoding",null,!0)),e.push(new ne("contentLanguage",null,!0)),e.push(new ne("contentType",null,!0)),e.push(new ne("metadata","customMetadata",!0)),oe=e}function ae(e,t,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,t[a.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){var r=e.bucket,n=e.fullPath,o=new A(r,n);return t._makeStorageReference(o)}})}(n,e),n}function se(e,t,r){var n=ee(t);return null===n?null:ae(e,n,r)}function ue(e,t){for(var r={},n=t.length,o=0;o<n;o++){var i=t[o];i.writable&&(r[i.server]=e[i.local])}return JSON.stringify(r)}
/**
 * @license
 * Copyright 2019 Google LLC
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
 */var ce=v((function e(t,r,n,o){d(this,e),this.url=t,this.method=r,this.handler=n,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}));
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
 */function le(e){if(!e)throw R()}function he(e,t){return function(r,n){var o=se(e,n,t);return le(null!==o),o}}function fe(e,t){return function(r,n){var o=se(e,n,t);return le(null!==o),function(e,t,r,n){var o=ee(t);if(null===o)return null;if(!I(o.downloadTokens))return null;var i=o.downloadTokens;if(0===i.length)return null;var a=encodeURIComponent;return i.split(",").map((function(t){var o=e.bucket,i=e.fullPath;return F("/b/"+a(o)+"/o/"+a(i),r,n)+B({alt:"media",token:t})}))[0]}(o,n,e.host,e._protocol)}}function de(e){return function(t,r){var n,o,i;return 401===t.getStatus()?n=t.getErrorText().includes("Firebase App Check token is invalid")?new k("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new k("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,n=new k("quota-exceeded","Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(o=e.path,n=new k("unauthorized","User does not have permission to access '"+o+"'.")):n=r,n.serverResponse=r.serverResponse,n}}function pe(e){var t=de(e);return function(r,n){var o,i=t(r,n);return 404===r.getStatus()&&(o=e.path,i=new k("object-not-found","Object '"+o+"' does not exist.")),i.serverResponse=n.serverResponse,i}}function ve(e,t,r){var n=F(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,i=new ce(n,"GET",he(e,r),o);return i.errorHandler=pe(t),i}function _e(e,t,r){var n=Object.assign({},r);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),n}function ye(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};var s=function(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();a["Content-Type"]="multipart/related; boundary="+s;var u=_e(t,n,o),c="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+ue(u,r)+"\r\n--"+s+"\r\nContent-Type: "+u.contentType+"\r\n\r\n",l="\r\n--"+s+"--",h=Q.getBlob(c,n,l);if(null===h)throw O();var f={name:u.fullPath},d=F(i,e.host,e._protocol),p=e.maxUploadRetryTime,v=new ce(d,"POST",he(e,r),p);return v.urlParams=f,v.headers=a,v.body=h.uploadData(),v.errorHandler=de(t),v}var ge=v((function e(t,r,n,o){d(this,e),this.current=t,this.total=r,this.finalized=!!n,this.metadata=o||null}));function me(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){le(!1)}return le(!!r&&-1!==(t||["active"]).indexOf(r)),r}function be(e,t,r,n,o,i,a,s){var u=new ge(0,0);if(a?(u.current=a.current,u.total=a.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw new k("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");var c=u.total-u.current,l=c;o>0&&(l=Math.min(l,o));var h=u.current,f=h+l,d={"X-Goog-Upload-Command":l===c?"upload, finalize":"upload","X-Goog-Upload-Offset":"".concat(u.current)},p=n.slice(h,f);if(null===p)throw O();var v=t.maxUploadRetryTime,_=new ce(r,"POST",(function(e,r){var o,a=me(e,["active","final"]),s=u.current+l,c=n.size();return o="final"===a?he(t,i)(e,r):null,new ge(s,c,"final"===a,o)}),v);return _.headers=d,_.body=p.uploadData(),_.progressCallback=s||null,_.errorHandler=de(e),_}
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
 */var we="running",ke="paused",xe="success",Re="canceled",Te="error";function Oe(e){switch(e){case"running":case"pausing":case"canceling":return we;case"paused":return ke;case"success":return xe;case"canceled":return Re;case"error":default:return Te}}
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
 */var Pe=v((function e(t,r,n){if(d(this,e),"function"==typeof t||null!=r||null!=n)this.next=t,this.error=null!=r?r:void 0,this.complete=null!=n?n:void 0;else{var o=t;this.next=o.next,this.error=o.error,this.complete=o.complete}}));
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
 */function Se(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];Promise.resolve().then((function(){return e.apply(void 0,r)}))}}
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
 */var Ce=function(){function e(){var t=this;d(this,e),this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=U.NO_ERROR,this.sendPromise_=new Promise((function(e){t.xhr_.addEventListener("abort",(function(){t.errorCode_=U.ABORT,e()})),t.xhr_.addEventListener("error",(function(){t.errorCode_=U.NETWORK_ERROR,e()})),t.xhr_.addEventListener("load",(function(){e()}))}))}return v(e,[{key:"send",value:function(e,t,r,n){if(this.sent_)throw E("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return void 0!==r?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}},{key:"getErrorCode",value:function(){if(!this.sent_)throw E("cannot .getErrorCode() before sending");return this.errorCode_}},{key:"getStatus",value:function(){if(!this.sent_)throw E("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}},{key:"getResponse",value:function(){if(!this.sent_)throw E("cannot .getResponse() before sending");return this.xhr_.response}},{key:"getErrorText",value:function(){if(!this.sent_)throw E("cannot .getErrorText() before sending");return this.xhr_.statusText}},{key:"abort",value:function(){this.xhr_.abort()}},{key:"getResponseHeader",value:function(e){return this.xhr_.getResponseHeader(e)}},{key:"addUploadProgressListener",value:function(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}},{key:"removeUploadProgressListener",value:function(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}]),e}(),Ee=function(e){_(r,e);var t=g(r);function r(){return d(this,r),t.apply(this,arguments)}return v(r,[{key:"initXhr",value:function(){this.xhr_.responseType="text"}}]),r}(Ce);function Ue(){return new Ee}
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
var Ae=function(){function e(t,r){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;d(this,e),this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=r,this._metadata=o,this._mappings=ie(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=function(e){n._request=void 0,n._chunkMultiplier=1,e._codeEquals("canceled")?(n._needToFetchStatus=!0,n.completeTransitions_()):(n._error=e,n._transition("error"))},this._metadataErrorHandler=function(e){n._request=void 0,e._codeEquals("canceled")?n.completeTransitions_():(n._error=e,n._transition("error"))},this._promise=new Promise((function(e,t){n._resolve=e,n._reject=t,n._start()})),this._promise.then(null,(function(){}))}return v(e,[{key:"_makeProgressCallback",value:function(){var e=this,t=this._transferred;return function(r){return e._updateProgress(t+r)}}},{key:"_shouldDoResumable",value:function(e){return e.size()>262144}},{key:"_start",value:function(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}},{key:"_resolveToken",value:function(e){var t=this;Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((function(r){var n=c(r,2),o=n[0],i=n[1];switch(t._state){case"running":e(o,i);break;case"canceling":t._transition("canceled");break;case"pausing":t._transition("paused")}}))}},{key:"_createResumable",value:function(){var e=this;this._resolveToken((function(t,r){var n=function(e,t,r,n,o){var i=t.bucketOnlyServerUrl(),a=_e(t,n,o),s={name:a.fullPath},u=F(i,e.host,e._protocol),c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":"".concat(n.size()),"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},l=ue(a,r),h=e.maxUploadRetryTime,f=new ce(u,"POST",(function(e){var t;me(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){le(!1)}return le(I(t)),t}),h);return f.urlParams=s,f.headers=c,f.body=l,f.errorHandler=de(t),f}(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),o=e._ref.storage._makeRequest(n,Ue,t,r);e._request=o,o.getPromise().then((function(t){e._request=void 0,e._uploadUrl=t,e._needToFetchStatus=!1,e.completeTransitions_()}),e._errorHandler)}))}},{key:"_fetchStatus",value:function(){var e=this,t=this._uploadUrl;this._resolveToken((function(r,n){var o=function(e,t,r,n){var o=e.maxUploadRetryTime,i=new ce(r,"POST",(function(e){var t=me(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){le(!1)}r||le(!1);var o=Number(r);return le(!isNaN(o)),new ge(o,n.size(),"final"===t)}),o);return i.headers={"X-Goog-Upload-Command":"query"},i.errorHandler=de(t),i}(e._ref.storage,e._ref._location,t,e._blob),i=e._ref.storage._makeRequest(o,Ue,r,n);e._request=i,i.getPromise().then((function(t){t=t,e._request=void 0,e._updateProgress(t.current),e._needToFetchStatus=!1,t.finalized&&(e._needToFetchMetadata=!0),e.completeTransitions_()}),e._errorHandler)}))}},{key:"_continueUpload",value:function(){var e=this,t=262144*this._chunkMultiplier,r=new ge(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((function(o,i){var a;try{a=be(e._ref._location,e._ref.storage,n,e._blob,t,e._mappings,r,e._makeProgressCallback())}catch(t){return e._error=t,void e._transition("error")}var s=e._ref.storage._makeRequest(a,Ue,o,i);e._request=s,s.getPromise().then((function(t){e._increaseMultiplier(),e._request=void 0,e._updateProgress(t.current),t.finalized?(e._metadata=t.metadata,e._transition("success")):e.completeTransitions_()}),e._errorHandler)}))}},{key:"_increaseMultiplier",value:function(){262144*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}},{key:"_fetchMetadata",value:function(){var e=this;this._resolveToken((function(t,r){var n=ve(e._ref.storage,e._ref._location,e._mappings),o=e._ref.storage._makeRequest(n,Ue,t,r);e._request=o,o.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._transition("success")}),e._metadataErrorHandler)}))}},{key:"_oneShotUpload",value:function(){var e=this;this._resolveToken((function(t,r){var n=ye(e._ref.storage,e._ref._location,e._mappings,e._blob,e._metadata),o=e._ref.storage._makeRequest(n,Ue,t,r);e._request=o,o.getPromise().then((function(t){e._request=void 0,e._metadata=t,e._updateProgress(e._blob.size()),e._transition("success")}),e._errorHandler)}))}},{key:"_updateProgress",value:function(e){var t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}},{key:"_transition",value:function(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":var t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=T(),this._state=e,this._notifyObservers();break;case"error":case"success":this._state=e,this._notifyObservers()}}},{key:"completeTransitions_",value:function(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}},{key:"snapshot",get:function(){var e=Oe(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}},{key:"on",value:function(e,t,r,n){var o=this,i=new Pe(t||void 0,r||void 0,n||void 0);return this._addObserver(i),function(){o._removeObserver(i)}}},{key:"then",value:function(e,t){return this._promise.then(e,t)}},{key:"catch",value:function(e){return this.then(null,e)}},{key:"_addObserver",value:function(e){this._observers.push(e),this._notifyObserver(e)}},{key:"_removeObserver",value:function(e){var t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}},{key:"_notifyObservers",value:function(){var e=this;this._finishPromise(),this._observers.slice().forEach((function(t){e._notifyObserver(t)}))}},{key:"_finishPromise",value:function(){if(void 0!==this._resolve){var e=!0;switch(Oe(this._state)){case xe:Se(this._resolve.bind(null,this.snapshot))();break;case Re:case Te:Se(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}},{key:"_notifyObserver",value:function(e){switch(Oe(this._state)){case we:case ke:e.next&&Se(e.next.bind(e,this.snapshot))();break;case xe:e.complete&&Se(e.complete.bind(e))();break;case Re:case Te:e.error&&Se(e.error.bind(e,this._error))();break;default:e.error&&Se(e.error.bind(e,this._error))()}}},{key:"resume",value:function(){var e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}},{key:"pause",value:function(){var e="running"===this._state;return e&&this._transition("pausing"),e}},{key:"cancel",value:function(){var e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}]),e}(),je=function(){function e(t,r){d(this,e),this._service=t,this._location=r instanceof A?r:A.makeFromUrl(r,t.host)}return v(e,[{key:"toString",value:function(){return"gs://"+this._location.bucket+"/"+this._location.path}},{key:"_newRef",value:function(t,r){return new e(t,r)}},{key:"root",get:function(){var e=new A(this._location.bucket,"");return this._newRef(this._service,e)}},{key:"bucket",get:function(){return this._location.bucket}},{key:"fullPath",get:function(){return this._location.path}},{key:"name",get:function(){return te(this._location.path)}},{key:"storage",get:function(){return this._service}},{key:"parent",get:function(){var t=function(e){if(0===e.length)return null;var t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===t)return null;var r=new A(this._location.bucket,t);return new e(this._service,r)}},{key:"_throwIfRoot",value:function(e){if(""===this._location.path)throw function(e){return new k("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Ie(e){e._throwIfRoot("getDownloadURL");var t=function(e,t,r){var n=F(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,i=new ce(n,"GET",fe(e,r),o);return i.errorHandler=pe(t),i}(e.storage,e._location,ie());return e.storage.makeRequestWithTokens(t,Ue).then((function(e){if(null===e)throw new k("no-download-url","The given file does not have any download URLs.");return e}))}function Le(e,t){var r=function(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}(e._location.path,t),n=new A(e._location.bucket,r);return new je(e.storage,n)}
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
 */function qe(e,t){if(e instanceof Be){var r=e;if(null==r._bucket)throw new k("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");var n=new je(r,r._bucket);return null!=t?qe(n,t):n}return void 0!==t?Le(e,t):e}function ze(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Be)return new je(e,t);throw P("To use ref(service, url), the first argument must be a Storage instance.")}return qe(e,t)}function Fe(e,t){var r=null==t?void 0:t.storageBucket;return null==r?null:A.makeFromBucketSpec(r,e)}var Be=function(){function e(t,r,n,o,i){d(this,e),this.app=t,this._authProvider=r,this._appCheckProvider=n,this._url=o,this._firebaseVersion=i,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=o?A.makeFromBucketSpec(o,this._host):Fe(this._host,this.app.options)}var t,r,n;return v(e,[{key:"host",get:function(){return this._host},set:function(e){this._host=e,null!=this._url?this._bucket=A.makeFromBucketSpec(this._url,e):this._bucket=Fe(e,this.app.options)}},{key:"maxUploadRetryTime",get:function(){return this._maxUploadRetryTime},set:function(e){z("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}},{key:"maxOperationRetryTime",get:function(){return this._maxOperationRetryTime},set:function(e){z("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}},{key:"_getAuthToken",value:(n=u(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._overrideAuthToken){e.next=2;break}return e.abrupt("return",this._overrideAuthToken);case 2:if(!(t=this._authProvider.getImmediate({optional:!0}))){e.next=9;break}return e.next=6,t.getToken();case 6:if(null===(r=e.sent)){e.next=9;break}return e.abrupt("return",r.accessToken);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"_getAppCheckToken",value:(r=u(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this._appCheckProvider.getImmediate({optional:!0}))){e.next=6;break}return e.next=4,t.getToken();case 4:return r=e.sent,e.abrupt("return",r.token);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"_delete",value:function(){return this._deleted||(this._deleted=!0,this._requests.forEach((function(e){return e.cancel()})),this._requests.clear()),Promise.resolve()}},{key:"_makeStorageReference",value:function(e){return new je(this,e)}},{key:"_makeRequest",value:function(e,t,r,n){var o=this;if(this._deleted)return new j(S());var i=function(e,t,r,n,o,i){var a=B(e.urlParams),s=e.url+a,u=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(u,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(u,r),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(u,i),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(u,n),new M(s,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o)}(e,this._appId,r,n,t,this._firebaseVersion);return this._requests.add(i),i.getPromise().then((function(){return o._requests.delete(i)}),(function(){return o._requests.delete(i)})),i}},{key:"makeRequestWithTokens",value:(t=u(a().mark((function e(t,r){var n,o,i,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this._getAuthToken(),this._getAppCheckToken()]);case 2:return n=e.sent,o=c(n,2),i=o[0],s=o[1],e.abrupt("return",this._makeRequest(t,r,i,s).getPromise());case 7:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})}]),e}(),Me="@firebase/storage";function Ne(e,t,r){return function(e,t,r){return e._throwIfRoot("uploadBytesResumable"),new Ae(e,new Q(t),r)}(e=Object(o.s)(e),t,r)}function He(e){return Ie(e=Object(o.s)(e))}function Ge(e,t){return ze(e=Object(o.s)(e),t)}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(n.getApp)(),t=arguments.length>1?arguments[1]:void 0;e=Object(o.s)(e);var r=Object(n._getProvider)(e,"storage"),i=r.getImmediate({identifier:t});return i}function Xe(e,t){var r=t.instanceIdentifier,o=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return new Be(o,i,a,r,n.SDK_VERSION)}Object(n._registerComponent)(new i.a("storage",Xe,"PUBLIC").setMultipleInstances(!0)),Object(n.registerVersion)(Me,"0.9.6",""),Object(n.registerVersion)(Me,"0.9.6","esm2017")}}]);