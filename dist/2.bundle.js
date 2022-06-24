(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{13:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n,a=r(0),i=r(6),o=r(4),c=r(8);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
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
var f=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._delegate=t,this.firebase=r,Object(o._addComponent)(t,new i.a("app-compat",(function(){return n}),"PUBLIC")),this.container=t.container}var t,r,n;return t=e,(r=[{key:"automaticDataCollectionEnabled",get:function(){return this._delegate.automaticDataCollectionEnabled},set:function(e){this._delegate.automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this._delegate.name}},{key:"options",get:function(){return this._delegate.options}},{key:"delete",value:function(){var e=this;return new Promise((function(t){e._delegate.checkDestroyed(),t()})).then((function(){return e.firebase.INTERNAL.removeApp(e.name),Object(o.deleteApp)(e._delegate)}))}},{key:"_getService",value:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o._DEFAULT_ENTRY_NAME;this._delegate.checkDestroyed();var n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(t=n.getComponent())||void 0===t?void 0:t.instantiationMode)||n.initialize(),n.getImmediate({identifier:r})}},{key:"_removeServiceInstance",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o._DEFAULT_ENTRY_NAME;this._delegate.container.getProvider(e).clearInstance(t)}},{key:"_addComponent",value:function(e){Object(o._addComponent)(this._delegate,e)}},{key:"_addOrOverwriteComponent",value:function(e){Object(o._addOrOverwriteComponent)(this._delegate,e)}},{key:"toJSON",value:function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}])&&u(t.prototype,r),n&&u(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),p=(s(n={},"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),s(n,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),n),l=new a.b("app-compat","Firebase",p);
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
 */var h=
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
 */
function e(){var t=
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
 */
function(e){var t={},r={__esModule:!0,initializeApp:function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=o.initializeApp(n,i);if(Object(a.k)(t,c.name))return t[c.name];var s=new e(c,r);return t[c.name]=s,s},app:n,registerVersion:o.registerVersion,setLogLevel:o.setLogLevel,onLog:o.onLog,apps:null,SDK_VERSION:o.SDK_VERSION,INTERNAL:{registerComponent:function(t){var i=t.name,c=i.replace("-compat","");if(o._registerComponent(t)&&"PUBLIC"===t.type){var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n();if("function"!=typeof e[c])throw l.create("invalid-app-argument",{appName:i});return e[c]()};void 0!==t.serviceProps&&Object(a.p)(s,t.serviceProps),r[c]=s,e.prototype[c]=function(){for(var e=this._getService.bind(this,i),r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e.apply(this,t.multipleInstances?n:[])}}return"PUBLIC"===t.type?r[c]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){if("serverAuth"===t)return null;return t},modularAPIs:o}};function n(e){if(e=e||o._DEFAULT_ENTRY_NAME,!Object(a.k)(t,e))throw l.create("no-app",{appName:e});return t[e]}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),n.App=e,r}(f);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){Object(a.p)(t,e)},createSubscribe:a.m,ErrorFactory:a.b,deepExtend:a.p}),t}(),d=new c.b("@firebase/app-compat");
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
 */
/**
 * @license
 * Copyright 2020 Google LLC
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
if(Object(a.v)()&&void 0!==self.firebase){d.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var b=self.firebase.SDK_VERSION;b&&b.indexOf("LITE")>=0&&d.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var v,m=h;Object(o.registerVersion)("@firebase/app-compat","0.1.26",v)},4:function(e,t,r){"use strict";r.r(t),r.d(t,"SDK_VERSION",(function(){return M})),r.d(t,"_DEFAULT_ENTRY_NAME",(function(){return x})),r.d(t,"_addComponent",(function(){return S})),r.d(t,"_addOrOverwriteComponent",(function(){return A})),r.d(t,"_apps",(function(){return C})),r.d(t,"_clearComponents",(function(){return I})),r.d(t,"_components",(function(){return j})),r.d(t,"_getProvider",(function(){return D})),r.d(t,"_registerComponent",(function(){return L})),r.d(t,"_removeServiceInstance",(function(){return N})),r.d(t,"deleteApp",(function(){return V})),r.d(t,"getApp",(function(){return U})),r.d(t,"getApps",(function(){return H})),r.d(t,"initializeApp",(function(){return R})),r.d(t,"onLog",(function(){return z})),r.d(t,"registerVersion",(function(){return B})),r.d(t,"setLogLevel",(function(){return G}));var n=r(6),a=r(8),i=r(0);r.d(t,"FirebaseError",(function(){return i.c}));var o,c,s=r(47);function u(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */f=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof l?t:l,i=Object.create(a.prototype),o=new O(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return j()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=E(o,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=u(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,o),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var p={};function l(){}function d(){}function b(){}var v={};c(v,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(C([])));g&&g!==t&&r.call(g,a)&&(v=g);var y=b.prototype=l.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){var n;this._invoke=function(a,i){function o(){return new t((function(n,o){!function n(a,i,o,c){var s=u(e[a],e,i);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"==h(p)&&r.call(p,"__await")?t.resolve(p.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(p).then((function(e){f.value=e,o(f)}),(function(e){return n("throw",e,o,c)}))}c(s.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function C(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=b,c(y,"constructor",b),c(b,"constructor",d),d.displayName=c(b,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(_.prototype),c(_.prototype,i,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new _(s(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),c(y,o,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=C,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}function p(e,t,r,n,a,i,o){try{var c=e[i](o),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,a)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){p(i,n,a,o,c,"next",e)}function c(e){p(i,n,a,o,c,"throw",e)}o(void 0)}))}}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=b(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw i}}}}function b(e,t){if(e){if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(e,t):void 0}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}
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
 */var _=function(){function e(t){g(this,e),this.container=t}return w(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var E="@firebase/app",k=new a.b("@firebase/app"),x="[DEFAULT]",O=(m(o={},E,"fire-core"),m(o,"@firebase/app-compat","fire-core-compat"),m(o,"@firebase/analytics","fire-analytics"),m(o,"@firebase/analytics-compat","fire-analytics-compat"),m(o,"@firebase/app-check","fire-app-check"),m(o,"@firebase/app-check-compat","fire-app-check-compat"),m(o,"@firebase/auth","fire-auth"),m(o,"@firebase/auth-compat","fire-auth-compat"),m(o,"@firebase/database","fire-rtdb"),m(o,"@firebase/database-compat","fire-rtdb-compat"),m(o,"@firebase/functions","fire-fn"),m(o,"@firebase/functions-compat","fire-fn-compat"),m(o,"@firebase/installations","fire-iid"),m(o,"@firebase/installations-compat","fire-iid-compat"),m(o,"@firebase/messaging","fire-fcm"),m(o,"@firebase/messaging-compat","fire-fcm-compat"),m(o,"@firebase/performance","fire-perf"),m(o,"@firebase/performance-compat","fire-perf-compat"),m(o,"@firebase/remote-config","fire-rc"),m(o,"@firebase/remote-config-compat","fire-rc-compat"),m(o,"@firebase/storage","fire-gcs"),m(o,"@firebase/storage-compat","fire-gcs-compat"),m(o,"@firebase/firestore","fire-fst"),m(o,"@firebase/firestore-compat","fire-fst-compat"),m(o,"fire-js","fire-js"),m(o,"firebase","fire-js-all"),o),C=new Map,j=new Map;function S(e,t){try{e.container.addComponent(t)}catch(r){k.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function A(e,t){e.container.addOrOverwriteComponent(t)}function L(e){var t=e.name;if(j.has(t))return k.debug("There were multiple attempts to register component ".concat(t,".")),!1;j.set(t,e);var r,n=d(C.values());try{for(n.s();!(r=n.n()).done;){S(r.value,e)}}catch(e){n.e(e)}finally{n.f()}return!0}function D(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function N(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x;D(e,t).clearInstance(r)}function I(){j.clear()}
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
 */var P=(m(c={},"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),m(c,"bad-app-name","Illegal App name: '{$appName}"),m(c,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),m(c,"app-deleted","Firebase App named '{$appName}' already deleted"),m(c,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),m(c,"invalid-log-argument","First argument to `onLog` must be null or a function."),m(c,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),m(c,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),m(c,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),m(c,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),c),F=new i.b("app","Firebase",P),T=function(){function e(t,r,a){var i=this;g(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new n.a("app",(function(){return i}),"PUBLIC"))}return w(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw F.create("app-deleted",{appName:this._name})}}]),e}(),M="9.8.2";function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!==h(t)){var r=t;t={name:r}}var a=Object.assign({name:x,automaticDataCollectionEnabled:!1},t),o=a.name;if("string"!=typeof o||!o)throw F.create("bad-app-name",{appName:String(o)});var c=C.get(o);if(c){if(Object(i.o)(e,c.options)&&Object(i.o)(a,c.config))return c;throw F.create("duplicate-app",{appName:o})}var s,u=new n.b(o),f=d(j.values());try{for(f.s();!(s=f.n()).done;){var p=s.value;u.addComponent(p)}}catch(e){f.e(e)}finally{f.f()}var l=new T(e,a,u);return C.set(o,l),l}function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=C.get(e);if(!t)throw F.create("no-app",{appName:e});return t}function H(){return Array.from(C.values())}function V(e){return $.apply(this,arguments)}function $(){return($=l(f().mark((function e(t){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name,!C.has(r)){e.next=6;break}return C.delete(r),e.next=5,Promise.all(t.container.getProviders().map((function(e){return e.delete()})));case 5:t.isDeleted=!0;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e,t,r){var a,i=null!==(a=O[e])&&void 0!==a?a:e;r&&(i+="-".concat(r));var o=i.match(/\s|\//),c=t.match(/\s|\//);if(o||c){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return o&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),o&&c&&s.push("and"),c&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void k.warn(s.join(" "))}L(new n.a("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}function z(e,t){if(null!==e&&"function"!=typeof e)throw F.create("invalid-log-argument");Object(a.d)(e,t)}function G(e){Object(a.c)(e)}
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
 */var Y="firebase-heartbeat-store",J=null;function K(){return J||(J=Object(s.a)("firebase-heartbeat-database",1,{upgrade:function(e,t){switch(t){case 0:e.createObjectStore(Y)}}}).catch((function(e){throw F.create("storage-open",{originalErrorMessage:e.message})}))),J}function W(e){return X.apply(this,arguments)}function X(){return(X=l(f().mark((function e(t){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K();case 3:return r=e.sent,e.abrupt("return",r.transaction(Y).objectStore(Y).get(Z(t)));case 7:throw e.prev=7,e.t0=e.catch(0),F.create("storage-get",{originalErrorMessage:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function q(e,t){return Q.apply(this,arguments)}function Q(){return(Q=l(f().mark((function e(t,r){var n,a,i;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K();case 3:return n=e.sent,a=n.transaction(Y,"readwrite"),i=a.objectStore(Y),e.next=8,i.put(r,Z(t));case 8:return e.abrupt("return",a.done);case 11:throw e.prev=11,e.t0=e.catch(0),F.create("storage-set",{originalErrorMessage:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function Z(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var ee=function(){function e(t){var r=this;g(this,e),this.container=t,this._heartbeatsCache=null;var n=this.container.getProvider("app").getImmediate();this._storage=new ae(n),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}var t,r;return w(e,[{key:"triggerHeartbeat",value:(r=l(f().mark((function e(){var t,r,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.container.getProvider("platform-logger").getImmediate(),r=t.getPlatformInfoString(),n=te(),null!==this._heartbeatsCache){e.next=7;break}return e.next=6,this._heartbeatsCachePromise;case 6:this._heartbeatsCache=e.sent;case 7:if(this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((function(e){return e.date===n}))){e.next=11;break}return e.abrupt("return");case 11:this._heartbeatsCache.heartbeats.push({date:n,agent:r});case 12:return this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",this._storage.overwrite(this._heartbeatsCache));case 14:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"getHeartbeatsHeader",value:(t=l(f().mark((function e(){var t,r,n,a,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this._heartbeatsCache){e.next=3;break}return e.next=3,this._heartbeatsCachePromise;case 3:if(null!==this._heartbeatsCache&&0!==this._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(t=te(),r=re(this._heartbeatsCache.heartbeats),n=r.heartbeatsToSend,a=r.unsentEntries,o=Object(i.j)(JSON.stringify({version:2,heartbeats:n})),this._heartbeatsCache.lastSentHeartbeatDate=t,!(a.length>0)){e.next=15;break}return this._heartbeatsCache.heartbeats=a,e.next=13,this._storage.overwrite(this._heartbeatsCache);case 13:e.next=17;break;case 15:this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache);case 17:return e.abrupt("return",o);case 18:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),e}();function te(){return(new Date).toISOString().substring(0,10)}function re(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],a=e.slice(),i=d(e);try{var o=function(){var e=t.value,i=n.find((function(t){return t.agent===e.agent}));if(i){if(i.dates.push(e.date),ie(n)>r)return i.dates.pop(),"break"}else if(n.push({agent:e.agent,dates:[e.date]}),ie(n)>r)return n.pop(),"break";a=a.slice(1)};for(i.s();!(t=i.n()).done;){var c=o();if("break"===c)break}}catch(e){i.e(e)}finally{i.f()}return{heartbeatsToSend:n,unsentEntries:a}}var ne,ae=function(){function e(t){g(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}var t,r,n,a;return w(e,[{key:"runIndexedDBEnvironmentCheck",value:(a=l(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(i.z)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",Object(i.N)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"read",value:(n=l(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,W(this.app);case 9:return t=e.sent,e.abrupt("return",t||{heartbeats:[]});case 11:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"overwrite",value:(r=l(f().mark((function e(t){var r,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,this.read();case 9:return n=e.sent,e.abrupt("return",q(this.app,{lastSentHeartbeatDate:null!==(r=t.lastSentHeartbeatDate)&&void 0!==r?r:n.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"add",value:(t=l(f().mark((function e(t){var r,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,this.read();case 9:return n=e.sent,e.abrupt("return",q(this.app,{lastSentHeartbeatDate:null!==(r=t.lastSentHeartbeatDate)&&void 0!==r?r:n.lastSentHeartbeatDate,heartbeats:[].concat(u(n.heartbeats),u(t.heartbeats))}));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}();function ie(e){return Object(i.j)(JSON.stringify({version:2,heartbeats:e})).length}
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
 */ne="",L(new n.a("platform-logger",(function(e){return new _(e)}),"PRIVATE")),L(new n.a("heartbeat",(function(e){return new ee(e)}),"PRIVATE")),B(E,"0.7.25",ne),B(E,"0.7.25","esm2017"),B("fire-js","")}}]);