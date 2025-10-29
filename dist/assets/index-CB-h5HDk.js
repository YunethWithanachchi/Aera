(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const wo=()=>{};var _i={};/**
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
 */const ys={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const f=function(n,e){if(!n)throw xe(e)},xe=function(n){return new Error("Firebase Database ("+ys.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const vs=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bo=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},wn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,d=r>>2,u=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),i.push(t[d],t[u],t[h],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const u=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||u==null)throw new To;const h=r<<2|a>>4;if(i.push(h),c!==64){const p=a<<4&240|c>>2;if(i.push(p),u!==64){const _=c<<6&192|u;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class To extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cs=function(n){const e=vs(n);return wn.encodeByteArray(e,!0)},ut=function(n){return Cs(n).replace(/\./g,"")},sn=function(n){try{return wn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function So(n){return Es(void 0,n)}function Es(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!No(t)||(n[t]=Es(n[t],e[t]));return n}function No(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */function Ro(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Ao=()=>Ro().__FIREBASE_DEFAULTS__,ko=()=>{if(typeof process>"u"||typeof _i>"u")return;const n=_i.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Do=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&sn(n[1]);return e&&JSON.parse(e)},Is=()=>{try{return wo()||Ao()||ko()||Do()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Po=n=>Is()?.emulatorHosts?.[n],xo=n=>{const e=Po(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ws=()=>Is()?.config;/**
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
 */class At{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function bn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Oo(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Mo(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ut(JSON.stringify(t)),ut(JSON.stringify(o)),""].join(".")}const He={};function Lo(){const n={prod:[],emulator:[]};for(const e of Object.keys(He))He[e]?n.emulator.push(e):n.prod.push(e);return n}function Fo(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let mi=!1;function Bo(n,e){if(typeof window>"u"||typeof document>"u"||!bn(window.location.host)||He[n]===e||He[n]||mi)return;He[n]=e;function t(h){return`__firebase__banner__${h}`}const i="__firebase__banner",r=Lo().prod.length>0;function o(){const h=document.getElementById(i);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function l(h,p){h.setAttribute("width","24"),h.setAttribute("id",p),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function c(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{mi=!0,o()},h}function d(h,p){h.setAttribute("id",p),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function u(){const h=Fo(i),p=t("text"),_=document.getElementById(p)||document.createElement("span"),E=t("learnmore"),N=document.getElementById(E)||document.createElement("a"),G=t("preprendIcon"),z=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const le=h.element;a(le),d(N,E);const $t=c();l(z,G),le.append(z,_,N,$t),document.body.appendChild(le)}r?(_.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
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
 */function Uo(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Uo())}function Wo(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ho(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $o(){return ys.NODE_ADMIN===!0}function Ts(){try{return typeof indexedDB=="object"}catch{return!1}}function Ss(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}function Vo(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const qo="FirebaseError";class Ce extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=qo,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kt.prototype.create)}}class kt{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Go(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ce(s,a,i)}}function Go(n,e){return n.replace(zo,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const zo=/\{\$([^}]+)}/g;/**
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
 */function je(n){return JSON.parse(n)}function D(n){return JSON.stringify(n)}/**
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
 */const Ns=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=je(sn(r[0])||""),t=je(sn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},jo=function(n){const e=Ns(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ko=function(n){const e=Ns(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Z(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Re(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function gi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dt(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Ke(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(yi(r)&&yi(o)){if(!Ke(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function yi(n){return n!==null&&typeof n=="object"}/**
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
 */function Yo(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class Qo{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):u<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const h=(s<<5|s>>>27)+c+l+d+i[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Tn(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Xo=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,f(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dt=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Jo=1e3,Zo=2,ea=14400*1e3,ta=.5;function vi(n,e=Jo,t=Zo){const i=e*Math.pow(t,n),s=Math.round(ta*i*(Math.random()-.5)*2);return Math.min(ea,i+s)}/**
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
 */function ee(n){return n&&n._delegate?n._delegate:n}class Y{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ce="[DEFAULT]";/**
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
 */class na{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new At;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sa(e))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ce){return this.instances.has(e)}getOptions(e=ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ia(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ce){return this.component?this.component.multipleInstances?e:ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ia(n){return n===ce?void 0:n}function sa(n){return n.instantiationMode==="EAGER"}/**
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
 */class ra{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new na(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var w;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(w||(w={}));const oa={debug:w.DEBUG,verbose:w.VERBOSE,info:w.INFO,warn:w.WARN,error:w.ERROR,silent:w.SILENT},aa=w.INFO,la={[w.DEBUG]:"log",[w.VERBOSE]:"log",[w.INFO]:"info",[w.WARN]:"warn",[w.ERROR]:"error"},ca=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=la[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sn{constructor(e){this.name=e,this._logLevel=aa,this._logHandler=ca,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in w))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,w.DEBUG,...e),this._logHandler(this,w.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,w.VERBOSE,...e),this._logHandler(this,w.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,w.INFO,...e),this._logHandler(this,w.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,w.WARN,...e),this._logHandler(this,w.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,w.ERROR,...e),this._logHandler(this,w.ERROR,...e)}}const ha=(n,e)=>e.some(t=>n instanceof t);let Ci,Ei;function ua(){return Ci||(Ci=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function da(){return Ei||(Ei=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rs=new WeakMap,rn=new WeakMap,As=new WeakMap,Vt=new WeakMap,Nn=new WeakMap;function fa(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(te(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Rs.set(t,n)}).catch(()=>{}),Nn.set(e,n),e}function pa(n){if(rn.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});rn.set(n,e)}let on={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return rn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||As.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return te(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _a(n){on=n(on)}function ma(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(qt(this),e,...t);return As.set(i,e.sort?e.sort():[e]),te(i)}:da().includes(n)?function(...e){return n.apply(qt(this),e),te(Rs.get(this))}:function(...e){return te(n.apply(qt(this),e))}}function ga(n){return typeof n=="function"?ma(n):(n instanceof IDBTransaction&&pa(n),ha(n,ua())?new Proxy(n,on):n)}function te(n){if(n instanceof IDBRequest)return fa(n);if(Vt.has(n))return Vt.get(n);const e=ga(n);return e!==n&&(Vt.set(n,e),Nn.set(e,n)),e}const qt=n=>Nn.get(n);function ks(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=te(o);return i&&o.addEventListener("upgradeneeded",l=>{i(te(o.result),l.oldVersion,l.newVersion,te(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ya=["get","getKey","getAll","getAllKeys","count"],va=["put","add","delete","clear"],Gt=new Map;function Ii(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Gt.get(e))return Gt.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=va.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ya.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Gt.set(e,r),r}_a(n=>({...n,get:(e,t,i)=>Ii(e,t)||n.get(e,t,i),has:(e,t)=>!!Ii(e,t)||n.has(e,t)}));/**
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
 */class Ca{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ea(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Ea(n){return n.getComponent()?.type==="VERSION"}const an="@firebase/app",wi="0.14.4";/**
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
 */const Q=new Sn("@firebase/app"),Ia="@firebase/app-compat",wa="@firebase/analytics-compat",ba="@firebase/analytics",Ta="@firebase/app-check-compat",Sa="@firebase/app-check",Na="@firebase/auth",Ra="@firebase/auth-compat",Aa="@firebase/database",ka="@firebase/data-connect",Da="@firebase/database-compat",Pa="@firebase/functions",xa="@firebase/functions-compat",Oa="@firebase/installations",Ma="@firebase/installations-compat",La="@firebase/messaging",Fa="@firebase/messaging-compat",Ba="@firebase/performance",Ua="@firebase/performance-compat",Wa="@firebase/remote-config",Ha="@firebase/remote-config-compat",$a="@firebase/storage",Va="@firebase/storage-compat",qa="@firebase/firestore",Ga="@firebase/ai",za="@firebase/firestore-compat",ja="firebase",Ka="12.4.0";/**
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
 */const ln="[DEFAULT]",Ya={[an]:"fire-core",[Ia]:"fire-core-compat",[ba]:"fire-analytics",[wa]:"fire-analytics-compat",[Sa]:"fire-app-check",[Ta]:"fire-app-check-compat",[Na]:"fire-auth",[Ra]:"fire-auth-compat",[Aa]:"fire-rtdb",[ka]:"fire-data-connect",[Da]:"fire-rtdb-compat",[Pa]:"fire-fn",[xa]:"fire-fn-compat",[Oa]:"fire-iid",[Ma]:"fire-iid-compat",[La]:"fire-fcm",[Fa]:"fire-fcm-compat",[Ba]:"fire-perf",[Ua]:"fire-perf-compat",[Wa]:"fire-rc",[Ha]:"fire-rc-compat",[$a]:"fire-gcs",[Va]:"fire-gcs-compat",[qa]:"fire-fst",[za]:"fire-fst-compat",[Ga]:"fire-vertex","fire-js":"fire-js",[ja]:"fire-js-all"};/**
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
 */const ft=new Map,Qa=new Map,cn=new Map;function bi(n,e){try{n.container.addComponent(e)}catch(t){Q.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function se(n){const e=n.name;if(cn.has(e))return Q.debug(`There were multiple attempts to register component ${e}.`),!1;cn.set(e,n);for(const t of ft.values())bi(t,n);for(const t of Qa.values())bi(t,n);return!0}function nt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xa(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ja={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ne=new kt("app","Firebase",Ja);/**
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
 */class Za{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Y("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}/**
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
 */const el=Ka;function Ds(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:ln,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw ne.create("bad-app-name",{appName:String(s)});if(t||(t=ws()),!t)throw ne.create("no-options");const r=ft.get(s);if(r){if(Ke(t,r.options)&&Ke(i,r.config))return r;throw ne.create("duplicate-app",{appName:s})}const o=new ra(s);for(const l of cn.values())o.addComponent(l);const a=new Za(t,i,o);return ft.set(s,a),a}function Ps(n=ln){const e=ft.get(n);if(!e&&n===ln&&ws())return Ds();if(!e)throw ne.create("no-app",{appName:n});return e}function q(n,e,t){let i=Ya[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Q.warn(o.join(" "));return}se(new Y(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const tl="firebase-heartbeat-database",nl=1,Ye="firebase-heartbeat-store";let zt=null;function xs(){return zt||(zt=ks(tl,nl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ye)}catch(t){console.warn(t)}}}}).catch(n=>{throw ne.create("idb-open",{originalErrorMessage:n.message})})),zt}async function il(n){try{const t=(await xs()).transaction(Ye),i=await t.objectStore(Ye).get(Os(n));return await t.done,i}catch(e){if(e instanceof Ce)Q.warn(e.message);else{const t=ne.create("idb-get",{originalErrorMessage:e?.message});Q.warn(t.message)}}}async function Ti(n,e){try{const i=(await xs()).transaction(Ye,"readwrite");await i.objectStore(Ye).put(e,Os(n)),await i.done}catch(t){if(t instanceof Ce)Q.warn(t.message);else{const i=ne.create("idb-set",{originalErrorMessage:t?.message});Q.warn(i.message)}}}function Os(n){return`${n.name}!${n.options.appId}`}/**
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
 */const sl=1024,rl=30;class ol{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ll(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Si();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>rl){const s=cl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Q.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Si(),{heartbeatsToSend:t,unsentEntries:i}=al(this._heartbeatsCache.heartbeats),s=ut(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Q.warn(e),""}}}function Si(){return new Date().toISOString().substring(0,10)}function al(n,e=sl){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ni(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ni(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ll{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ts()?Ss().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await il(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ti(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ti(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ni(n){return ut(JSON.stringify({version:2,heartbeats:n})).length}function cl(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function hl(n){se(new Y("platform-logger",e=>new Ca(e),"PRIVATE")),se(new Y("heartbeat",e=>new ol(e),"PRIVATE")),q(an,wi,n),q(an,wi,"esm2020"),q("fire-js","")}hl("");var ul="firebase",dl="12.4.0";/**
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
 */q(ul,dl,"app");const Ms="@firebase/installations",Rn="0.6.19";/**
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
 */const Ls=1e4,Fs=`w:${Rn}`,Bs="FIS_v2",fl="https://firebaseinstallations.googleapis.com/v1",pl=3600*1e3,_l="installations",ml="Installations";/**
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
 */const gl={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},pe=new kt(_l,ml,gl);function Us(n){return n instanceof Ce&&n.code.includes("request-failed")}/**
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
 */function Ws({projectId:n}){return`${fl}/projects/${n}/installations`}function Hs(n){return{token:n.token,requestStatus:2,expiresIn:vl(n.expiresIn),creationTime:Date.now()}}async function $s(n,e){const i=(await e.json()).error;return pe.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Vs({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function yl(n,{refreshToken:e}){const t=Vs(n);return t.append("Authorization",Cl(e)),t}async function qs(n){const e=await n();return e.status>=500&&e.status<600?n():e}function vl(n){return Number(n.replace("s","000"))}function Cl(n){return`${Bs} ${n}`}/**
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
 */async function El({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Ws(n),s=Vs(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:t,authVersion:Bs,appId:n.appId,sdkVersion:Fs},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await qs(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:Hs(c.authToken)}}else throw await $s("Create Installation",l)}/**
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
 */function Gs(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Il(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wl=/^[cdef][\w-]{21}$/,hn="";function bl(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Tl(n);return wl.test(t)?t:hn}catch{return hn}}function Tl(n){return Il(n).substr(0,22)}/**
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
 */function Pt(n){return`${n.appName}!${n.appId}`}/**
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
 */const zs=new Map;function js(n,e){const t=Pt(n);Ks(t,e),Sl(t,e)}function Ks(n,e){const t=zs.get(n);if(t)for(const i of t)i(e)}function Sl(n,e){const t=Nl();t&&t.postMessage({key:n,fid:e}),Rl()}let ue=null;function Nl(){return!ue&&"BroadcastChannel"in self&&(ue=new BroadcastChannel("[Firebase] FID Change"),ue.onmessage=n=>{Ks(n.data.key,n.data.fid)}),ue}function Rl(){zs.size===0&&ue&&(ue.close(),ue=null)}/**
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
 */const Al="firebase-installations-database",kl=1,_e="firebase-installations-store";let jt=null;function An(){return jt||(jt=ks(Al,kl,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(_e)}}})),jt}async function pt(n,e){const t=Pt(n),s=(await An()).transaction(_e,"readwrite"),r=s.objectStore(_e),o=await r.get(t);return await r.put(e,t),await s.done,(!o||o.fid!==e.fid)&&js(n,e.fid),e}async function Ys(n){const e=Pt(n),i=(await An()).transaction(_e,"readwrite");await i.objectStore(_e).delete(e),await i.done}async function xt(n,e){const t=Pt(n),s=(await An()).transaction(_e,"readwrite"),r=s.objectStore(_e),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await s.done,a&&(!o||o.fid!==a.fid)&&js(n,a.fid),a}/**
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
 */async function kn(n){let e;const t=await xt(n.appConfig,i=>{const s=Dl(i),r=Pl(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===hn?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Dl(n){const e=n||{fid:bl(),registrationStatus:0};return Qs(e)}function Pl(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(pe.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=xl(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ol(n)}:{installationEntry:e}}async function xl(n,e){try{const t=await El(n,e);return pt(n.appConfig,t)}catch(t){throw Us(t)&&t.customData.serverCode===409?await Ys(n.appConfig):await pt(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Ol(n){let e=await Ri(n.appConfig);for(;e.registrationStatus===1;)await Gs(100),e=await Ri(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await kn(n);return i||t}return e}function Ri(n){return xt(n,e=>{if(!e)throw pe.create("installation-not-found");return Qs(e)})}function Qs(n){return Ml(n)?{fid:n.fid,registrationStatus:0}:n}function Ml(n){return n.registrationStatus===1&&n.registrationTime+Ls<Date.now()}/**
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
 */async function Ll({appConfig:n,heartbeatServiceProvider:e},t){const i=Fl(n,t),s=yl(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Fs,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await qs(()=>fetch(i,a));if(l.ok){const c=await l.json();return Hs(c)}else throw await $s("Generate Auth Token",l)}function Fl(n,{fid:e}){return`${Ws(n)}/${e}/authTokens:generate`}/**
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
 */async function Dn(n,e=!1){let t;const i=await xt(n.appConfig,r=>{if(!Xs(r))throw pe.create("not-registered");const o=r.authToken;if(!e&&Wl(o))return r;if(o.requestStatus===1)return t=Bl(n,e),r;{if(!navigator.onLine)throw pe.create("app-offline");const a=$l(r);return t=Ul(n,a),a}});return t?await t:i.authToken}async function Bl(n,e){let t=await Ai(n.appConfig);for(;t.authToken.requestStatus===1;)await Gs(100),t=await Ai(n.appConfig);const i=t.authToken;return i.requestStatus===0?Dn(n,e):i}function Ai(n){return xt(n,e=>{if(!Xs(e))throw pe.create("not-registered");const t=e.authToken;return Vl(t)?{...e,authToken:{requestStatus:0}}:e})}async function Ul(n,e){try{const t=await Ll(n,e),i={...e,authToken:t};return await pt(n.appConfig,i),t}catch(t){if(Us(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ys(n.appConfig);else{const i={...e,authToken:{requestStatus:0}};await pt(n.appConfig,i)}throw t}}function Xs(n){return n!==void 0&&n.registrationStatus===2}function Wl(n){return n.requestStatus===2&&!Hl(n)}function Hl(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+pl}function $l(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Vl(n){return n.requestStatus===1&&n.requestTime+Ls<Date.now()}/**
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
 */async function ql(n){const e=n,{installationEntry:t,registrationPromise:i}=await kn(e);return i?i.catch(console.error):Dn(e).catch(console.error),t.fid}/**
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
 */async function Gl(n,e=!1){const t=n;return await zl(t),(await Dn(t,e)).token}async function zl(n){const{registrationPromise:e}=await kn(n);e&&await e}/**
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
 */function jl(n){if(!n||!n.options)throw Kt("App Configuration");if(!n.name)throw Kt("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Kt(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Kt(n){return pe.create("missing-app-config-values",{valueName:n})}/**
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
 */const Js="installations",Kl="installations-internal",Yl=n=>{const e=n.getProvider("app").getImmediate(),t=jl(e),i=nt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Ql=n=>{const e=n.getProvider("app").getImmediate(),t=nt(e,Js).getImmediate();return{getId:()=>ql(t),getToken:s=>Gl(t,s)}};function Xl(){se(new Y(Js,Yl,"PUBLIC")),se(new Y(Kl,Ql,"PRIVATE"))}Xl();q(Ms,Rn);q(Ms,Rn,"esm2020");/**
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
 */const _t="analytics",Jl="firebase_id",Zl="origin",ec=60*1e3,tc="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Pn="https://www.googletagmanager.com/gtag/js";/**
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
 */const O=new Sn("@firebase/analytics");/**
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
 */const nc={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},U=new kt("analytics","Analytics",nc);/**
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
 */function ic(n){if(!n.startsWith(Pn)){const e=U.create("invalid-gtag-resource",{gtagURL:n});return O.warn(e.message),""}return n}function Zs(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function sc(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function rc(n,e){const t=sc("firebase-js-sdk-policy",{createScriptURL:ic}),i=document.createElement("script"),s=`${Pn}?l=${n}&id=${e}`;i.src=t?t?.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function oc(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function ac(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await Zs(t)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){O.error(a)}n("config",s,r)}async function lc(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Zs(t);for(const l of o){const c=a.find(u=>u.measurementId===l),d=c&&e[c.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){O.error(r)}}function cc(n,e,t,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await lc(n,e,t,a,l)}else if(r==="config"){const[a,l]=o;await ac(n,e,t,i,a,l)}else if(r==="consent"){const[a,l]=o;n("consent",a,l)}else if(r==="get"){const[a,l,c]=o;n("get",a,l,c)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){O.error(a)}}return s}function hc(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=cc(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function uc(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Pn)&&t.src.includes(n))return t;return null}/**
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
 */const dc=30,fc=1e3;class pc{constructor(e={},t=fc){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const er=new pc;function _c(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function mc(n){const{appId:e,apiKey:t}=n,i={method:"GET",headers:_c(t)},s=tc.replace("{app-id}",e),r=await fetch(s,i);if(r.status!==200&&r.status!==304){let o="";try{const a=await r.json();a.error?.message&&(o=a.error.message)}catch{}throw U.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function gc(n,e=er,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw U.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw U.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Cc;return setTimeout(async()=>{a.abort()},ec),tr({appId:i,apiKey:s,measurementId:r},o,a,e)}async function tr(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=er){const{appId:r,measurementId:o}=n;try{await yc(i,e)}catch(a){if(o)return O.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:r,measurementId:o};throw a}try{const a=await mc(n);return s.deleteThrottleMetadata(r),a}catch(a){const l=a;if(!vc(l)){if(s.deleteThrottleMetadata(r),o)return O.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw a}const c=Number(l?.customData?.httpStatus)===503?vi(t,s.intervalMillis,dc):vi(t,s.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:t+1};return s.setThrottleMetadata(r,d),O.debug(`Calling attemptFetch again in ${c} millis`),tr(n,d,i,s)}}function yc(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(U.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function vc(n){if(!(n instanceof Ce)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Cc{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ec(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o={...i,send_to:r};n("event",t,o)}}async function Ic(n,e,t,i){if(i&&i.global){const s={};for(const r of Object.keys(t))s[`user_properties.${r}`]=t[r];return n("set",s),Promise.resolve()}else{const s=await e;n("config",s,{update:!0,user_properties:t})}}/**
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
 */async function wc(){if(Ts())try{await Ss()}catch(n){return O.warn(U.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return O.warn(U.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bc(n,e,t,i,s,r,o){const a=gc(n);a.then(h=>{t[h.measurementId]=h.appId,n.options.measurementId&&h.measurementId!==n.options.measurementId&&O.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>O.error(h)),e.push(a);const l=wc().then(h=>{if(h)return i.getId()}),[c,d]=await Promise.all([a,l]);uc(r)||rc(r,c.measurementId),s("js",new Date);const u=o?.config??{};return u[Zl]="firebase",u.update=!0,d!=null&&(u[Jl]=d),s("config",c.measurementId,u),c.measurementId}/**
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
 */class Tc{constructor(e){this.app=e}_delete(){return delete be[this.app.options.appId],Promise.resolve()}}let be={},ki=[];const Di={};let Yt="dataLayer",Sc="gtag",Pi,xn,xi=!1;function Nc(){const n=[];if(Wo()&&n.push("This is a browser extension environment."),Vo()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=U.create("invalid-analytics-context",{errorInfo:e});O.warn(t.message)}}function Rc(n,e,t){Nc();const i=n.options.appId;if(!i)throw U.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)O.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw U.create("no-api-key");if(be[i]!=null)throw U.create("already-exists",{id:i});if(!xi){oc(Yt);const{wrappedGtag:r,gtagCore:o}=hc(be,ki,Di,Yt,Sc);xn=r,Pi=o,xi=!0}return be[i]=bc(n,ki,Di,e,Pi,Yt,t),new Tc(n)}function Ac(n=Ps()){n=ee(n);const e=nt(n,_t);return e.isInitialized()?e.getImmediate():kc(n)}function kc(n,e={}){const t=nt(n,_t);if(t.isInitialized()){const s=t.getImmediate();if(Ke(e,t.getOptions()))return s;throw U.create("already-initialized")}return t.initialize({options:e})}function Dc(n,e,t){n=ee(n),Ic(xn,be[n.app.options.appId],e,t).catch(i=>O.error(i))}function Pc(n,e,t,i){n=ee(n),Ec(xn,be[n.app.options.appId],e,t,i).catch(s=>O.error(s))}const Oi="@firebase/analytics",Mi="0.10.19";function xc(){se(new Y(_t,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Rc(i,s,t)},"PUBLIC")),se(new Y("analytics-internal",n,"PRIVATE")),q(Oi,Mi),q(Oi,Mi,"esm2020");function n(e){try{const t=e.getProvider(_t).getImmediate();return{logEvent:(i,s,r)=>Pc(t,i,s,r),setUserProperties:(i,s)=>Dc(t,i,s)}}catch(t){throw U.create("interop-component-reg-failed",{reason:t})}}}xc();var Li={};const Fi="@firebase/database",Bi="1.1.0";/**
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
 */let nr="";function Oc(n){nr=n}/**
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
 */class Mc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),D(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:je(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Lc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Z(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ir=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mc(e)}}catch{}return new Lc},de=ir("localStorage"),Fc=ir("sessionStorage");/**
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
 */const Te=new Sn("@firebase/database"),Bc=(function(){let n=1;return function(){return n++}})(),sr=function(n){const e=Xo(n),t=new Qo;t.update(e);const i=t.digest();return wn.encodeByteArray(i)},it=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=it.apply(null,i):typeof i=="object"?e+=D(i):e+=i,e+=" "}return e};let $e=null,Ui=!0;const Uc=function(n,e){f(!0,"Can't turn on custom loggers persistently."),Te.logLevel=w.VERBOSE,$e=Te.log.bind(Te)},x=function(...n){if(Ui===!0&&(Ui=!1,$e===null&&Fc.get("logging_enabled")===!0&&Uc()),$e){const e=it.apply(null,n);$e(e)}},st=function(n){return function(...e){x(n,...e)}},un=function(...n){const e="FIREBASE INTERNAL ERROR: "+it(...n);Te.error(e)},X=function(...n){const e=`FIREBASE FATAL ERROR: ${it(...n)}`;throw Te.error(e),new Error(e)},F=function(...n){const e="FIREBASE WARNING: "+it(...n);Te.warn(e)},Wc=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&F("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Hc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ae="[MIN_NAME]",me="[MAX_NAME]",Oe=function(n,e){if(n===e)return 0;if(n===Ae||e===me)return-1;if(e===Ae||n===me)return 1;{const t=Wi(n),i=Wi(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},$c=function(n,e){return n===e?0:n<e?-1:1},Fe=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+D(e))},On=function(n){if(typeof n!="object"||n===null)return D(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=D(e[i]),t+=":",t+=On(n[e[i]]);return t+="}",t},or=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function B(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ar=function(n){f(!rr(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let h=parseInt(d.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Vc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Gc(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const zc=new RegExp("^-?(0*)\\d{1,10}$"),jc=-2147483648,Kc=2147483647,Wi=function(n){if(zc.test(n)){const e=Number(n);if(e>=jc&&e<=Kc)return e}return null},Me=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw F("Exception was thrown by user callback.",t),e},Math.floor(0))}},Yc=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ve=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Qc{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Xa(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){F(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Xc{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(x("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',F(e)}}class ht{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ht.OWNER="owner";/**
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
 */const Mn="5",lr="v",cr="s",hr="r",ur="f",dr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fr="ls",pr="p",dn="ac",_r="websocket",mr="long_polling";/**
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
 */class gr{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=de.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&de.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Jc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function yr(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let i;if(e===_r)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===mr)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Jc(n)&&(t.ns=n.namespace);const s=[];return B(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Zc{constructor(){this.counters_={}}incrementCounter(e,t=1){Z(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return So(this.counters_)}}/**
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
 */const Qt={},Xt={};function Ln(n){const e=n.toString();return Qt[e]||(Qt[e]=new Zc),Qt[e]}function eh(n,e){const t=n.toString();return Xt[t]||(Xt[t]=e()),Xt[t]}/**
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
 */class th{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Me(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Hi="start",nh="close",ih="pLPCommand",sh="pRTLPCB",vr="id",Cr="pw",Er="ser",rh="cb",oh="seg",ah="ts",lh="d",ch="dframe",Ir=1870,wr=30,hh=Ir-wr,uh=25e3,dh=3e4;class we{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=st(e),this.stats_=Ln(t),this.urlFn=l=>(this.appCheckToken&&(l[dn]=this.appCheckToken),yr(t,mr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new th(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dh)),Hc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fn((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hi)this.id=a,this.password=l;else if(o===nh)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Hi]="t",i[Er]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[rh]=this.scriptTagHolder.uniqueCallbackIdentifier),i[lr]=Mn,this.transportSessionId&&(i[cr]=this.transportSessionId),this.lastSessionId&&(i[fr]=this.lastSessionId),this.applicationId&&(i[pr]=this.applicationId),this.appCheckToken&&(i[dn]=this.appCheckToken),typeof location<"u"&&location.hostname&&dr.test(location.hostname)&&(i[hr]=ur);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){we.forceAllow_=!0}static forceDisallow(){we.forceDisallow_=!0}static isAvailable(){return we.forceAllow_?!0:!we.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Vc()&&!qc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=D(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Cs(t),s=or(i,hh);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[ch]="t",i[vr]=e,i[Cr]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=D(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fn{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Bc(),window[ih+this.uniqueCallbackIdentifier]=e,window[sh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){x("frame writing exception"),a.stack&&x(a.stack),x(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||x("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[vr]=this.myID,e[Cr]=this.myPW,e[Er]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wr+i.length<=Ir;){const o=this.pendingSegs.shift();i=i+"&"+oh+s+"="+o.seg+"&"+ah+s+"="+o.ts+"&"+lh+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(uh)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{x("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const fh=16384,ph=45e3;let mt=null;typeof MozWebSocket<"u"?mt=MozWebSocket:typeof WebSocket<"u"&&(mt=WebSocket);class W{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=st(this.connId),this.stats_=Ln(t),this.connURL=W.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[lr]=Mn,typeof location<"u"&&location.hostname&&dr.test(location.hostname)&&(o[hr]=ur),t&&(o[cr]=t),i&&(o[fr]=i),s&&(o[dn]=s),r&&(o[pr]=r),yr(e,_r,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,de.set("previous_websocket_failure",!0);try{let i;$o(),this.mySock=new mt(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){W.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&mt!==null&&!W.forceDisallow_}static previouslyFailed(){return de.isInMemoryStorage||de.get("previous_websocket_failure")===!0}markConnectionHealthy(){de.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=je(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=D(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=or(t,fh);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ph))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}W.responsesRequiredToBeHealthy=2;W.healthyTimeout=3e4;/**
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
 */class Qe{static get ALL_TRANSPORTS(){return[we,W]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=W&&W.isAvailable();let i=t&&!W.previouslyFailed();if(e.webSocketOnly&&(t||F("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[W];else{const s=this.transports_=[];for(const r of Qe.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Qe.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qe.globalTransportInitialized_=!1;/**
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
 */const _h=6e4,mh=5e3,gh=10*1024,yh=100*1024,Jt="t",$i="d",vh="s",Vi="r",Ch="e",qi="o",Gi="a",zi="n",ji="p",Eh="h";class Ih{constructor(e,t,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=st("c:"+this.id+":"),this.transportManager_=new Qe(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ve(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jt in e){const t=e[Jt];t===Gi?this.upgradeIfSecondaryHealthy_():t===Vi?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===qi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Fe("t",e),i=Fe("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ji,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zi,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Fe("t",e),i=Fe("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Fe(Jt,e);if($i in e){const i=e[$i];if(t===Eh){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===zi){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===vh?this.onConnectionShutdown_(i):t===Vi?this.onReset_(i):t===Ch?un("Server Error: "+i):t===qi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):un("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Mn!==i&&F("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Ve(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(_h))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ve(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ji,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(de.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class br{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Tr{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class gt extends Tr{static getInstance(){return new gt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ki=32,Yi=768;class I{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function C(){return new I("")}function g(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function re(n){return n.pieces_.length-n.pieceNum_}function b(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new I(n.pieces_,e)}function Sr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function wh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Nr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Rr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new I(e,0)}function R(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof I)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new I(t,0)}function v(n){return n.pieceNum_>=n.pieces_.length}function M(n,e){const t=g(n),i=g(e);if(t===null)return e;if(t===i)return M(b(n),b(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Bn(n,e){if(re(n)!==re(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function H(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(re(n)>re(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class bh{constructor(e,t){this.errorPrefix_=t,this.parts_=Nr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Dt(this.parts_[i]);Ar(this)}}function Th(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Dt(e),Ar(n)}function Sh(n){const e=n.parts_.pop();n.byteLength_-=Dt(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ar(n){if(n.byteLength_>Yi)throw new Error(n.errorPrefix_+"has a key path longer than "+Yi+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ki)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ki+") or object contains a cycle "+he(n))}function he(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Un extends Tr{static getInstance(){return new Un}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Be=1e3,Nh=300*1e3,Qi=30*1e3,Rh=1.3,Ah=3e4,kh="server_kill",Xi=3;class K extends br{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=K.nextPersistentConnectionId_++,this.log_=st("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Be,this.maxReconnectDelay_=Nh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Un.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&gt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(D(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new At,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;K.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Z(e,"w")){const i=Re(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();F(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ko(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=jo(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+D(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):un("Unrecognized action received from server: "+D(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Be,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Be,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ah&&(this.reconnectDelay_=Be),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Rh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+K.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(u){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?x("getToken() completed but was canceled"):(x("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new Ih(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{F(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(kh)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&F(u),l())}}}interrupt(e){x("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){x("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gi(this.interruptReasons_)&&(this.reconnectDelay_=Be,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>On(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new I(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){x("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xi&&(this.reconnectDelay_=Qi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){x("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+nr.replace(/\./g,"-")]=1,bs()?e["framework.cordova"]=1:Ho()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=gt.getInstance().currentlyOnline();return gi(this.interruptReasons_)&&e}}K.nextPersistentConnectionId_=0;K.nextConnectionId_=0;/**
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
 */class y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new y(e,t)}}/**
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
 */class Ot{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new y(Ae,e),s=new y(Ae,t);return this.compare(i,s)!==0}minPost(){return y.MIN}}/**
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
 */let lt;class kr extends Ot{static get __EMPTY_NODE(){return lt}static set __EMPTY_NODE(e){lt=e}compare(e,t){return Oe(e.name,t.name)}isDefinedOn(e){throw xe("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return y.MIN}maxPost(){return new y(me,lt)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,lt)}toString(){return".key"}}const Se=new kr;/**
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
 */class ct{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class k{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??k.RED,this.left=s??L.EMPTY_NODE,this.right=r??L.EMPTY_NODE}copy(e,t,i,s,r){return new k(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return L.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return L.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,k.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,k.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}k.RED=!0;k.BLACK=!1;class Dh{copy(e,t,i,s,r){return this}insert(e,t,i){return new k(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class L{constructor(e,t=L.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new L(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,k.BLACK,null,null))}remove(e){return new L(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,k.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ct(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ct(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ct(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ct(this.root_,null,this.comparator_,!0,e)}}L.EMPTY_NODE=new Dh;/**
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
 */function Ph(n,e){return Oe(n.name,e.name)}function Wn(n,e){return Oe(n,e)}/**
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
 */let fn;function xh(n){fn=n}const Dr=function(n){return typeof n=="number"?"number:"+ar(n):"string:"+n},Pr=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Z(e,".sv"),"Priority must be a string or number.")}else f(n===fn||n.isEmpty(),"priority of unexpected type.");f(n===fn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ji;class A{static set __childrenNodeConstructor(e){Ji=e}static get __childrenNodeConstructor(){return Ji}constructor(e,t=A.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Pr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new A(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:A.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:g(e)===".priority"?this.priorityNode_:A.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:A.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=g(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(f(i!==".priority"||re(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,A.__childrenNodeConstructor.EMPTY_NODE.updateChild(b(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ar(this.value_):e+=this.value_,this.lazyHash_=sr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===A.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof A.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=A.VALUE_TYPE_ORDER.indexOf(t),r=A.VALUE_TYPE_ORDER.indexOf(i);return f(s>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}A.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let xr,Or;function Oh(n){xr=n}function Mh(n){Or=n}class Lh extends Ot{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Oe(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return y.MIN}maxPost(){return new y(me,new A("[PRIORITY-POST]",Or))}makePost(e,t){const i=xr(e);return new y(t,new A("[PRIORITY-POST]",i))}toString(){return".priority"}}const S=new Lh;/**
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
 */const Fh=Math.log(2);class Bh{constructor(e){const t=r=>parseInt(Math.log(r)/Fh,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yt=function(n,e,t,i){n.sort(e);const s=function(l,c){const d=c-l;let u,h;if(d===0)return null;if(d===1)return u=n[l],h=t?t(u):u,new k(h,u.node,k.BLACK,null,null);{const p=parseInt(d/2,10)+l,_=s(l,p),E=s(p+1,c);return u=n[p],h=t?t(u):u,new k(h,u.node,k.BLACK,_,E)}},r=function(l){let c=null,d=null,u=n.length;const h=function(_,E){const N=u-_,G=u;u-=_;const z=s(N+1,G),le=n[N],$t=t?t(le):le;p(new k($t,le.node,E,null,z))},p=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const E=l.nextBitIsOne(),N=Math.pow(2,l.count-(_+1));E?h(N,k.BLACK):(h(N,k.BLACK),h(N,k.RED))}return d},o=new Bh(n.length),a=r(o);return new L(i||e,a)};/**
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
 */let Zt;const Ie={};class j{static get Default(){return f(Ie&&S,"ChildrenNode.ts has not been loaded"),Zt=Zt||new j({".priority":Ie},{".priority":S}),Zt}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Re(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof L?t:null}hasIndex(e){return Z(this.indexSet_,e.toString())}addIndex(e,t){f(e!==Se,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(y.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=yt(i,e.getCompare()):a=Ie;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new j(d,c)}addToIndexes(e,t){const i=dt(this.indexes_,(s,r)=>{const o=Re(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),s===Ie)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),yt(a,o.getCompare())}else return Ie;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new y(e.name,a))),l.insert(e,e.node)}});return new j(i,this.indexSet_)}removeFromIndexes(e,t){const i=dt(this.indexes_,s=>{if(s===Ie)return s;{const r=t.get(e.name);return r?s.remove(new y(e.name,r)):s}});return new j(i,this.indexSet_)}}/**
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
 */let Ue;class m{static get EMPTY_NODE(){return Ue||(Ue=new m(new L(Wn),null,j.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Pr(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ue}updatePriority(e){return this.children_.isEmpty()?this:new m(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ue:t}}getChild(e){const t=g(e);return t===null?this:this.getImmediateChild(t).getChild(b(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new y(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ue:this.priorityNode_;return new m(s,o,r)}}updateChild(e,t){const i=g(e);if(i===null)return t;{f(g(e)!==".priority"||re(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(b(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(S,(o,a)=>{t[o]=a.val(e),i++,r&&m.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dr(this.getPriority().val())+":"),this.forEachChild(S,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":sr(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new y(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new y(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,y.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===rt?-1:0}withIndex(e){if(e===Se||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new m(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Se||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(S),s=t.getIterator(S);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Se?null:this.indexMap_.get(e.toString())}}m.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Uh extends m{constructor(){super(new L(Wn),m.EMPTY_NODE,j.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return m.EMPTY_NODE}isEmpty(){return!1}}const rt=new Uh;Object.defineProperties(y,{MIN:{value:new y(Ae,m.EMPTY_NODE)},MAX:{value:new y(me,rt)}});kr.__EMPTY_NODE=m.EMPTY_NODE;A.__childrenNodeConstructor=m;xh(rt);Mh(rt);/**
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
 */const Wh=!0;function P(n,e=null){if(n===null)return m.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new A(t,P(e))}if(!(n instanceof Array)&&Wh){const t=[];let i=!1;if(B(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=P(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new y(o,l)))}}),t.length===0)return m.EMPTY_NODE;const r=yt(t,Ph,o=>o.name,Wn);if(i){const o=yt(t,S.getCompare());return new m(r,P(e),new j({".priority":o},{".priority":S}))}else return new m(r,P(e),j.Default)}else{let t=m.EMPTY_NODE;return B(n,(i,s)=>{if(Z(n,i)&&i.substring(0,1)!=="."){const r=P(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(P(e))}}Oh(P);/**
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
 */class Hh extends Ot{constructor(e){super(),this.indexPath_=e,f(!v(e)&&g(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Oe(e.name,t.name):r}makePost(e,t){const i=P(e),s=m.EMPTY_NODE.updateChild(this.indexPath_,i);return new y(t,s)}maxPost(){const e=m.EMPTY_NODE.updateChild(this.indexPath_,rt);return new y(me,e)}toString(){return Nr(this.indexPath_,0).join("/")}}/**
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
 */class $h extends Ot{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Oe(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,t){const i=P(e);return new y(t,i)}toString(){return".value"}}const Vh=new $h;/**
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
 */function Mr(n){return{type:"value",snapshotNode:n}}function ke(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Xe(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Je(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function qh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Hn{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){f(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Xe(t,a)):f(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ke(t,i)):o.trackChildChange(Je(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(S,(s,r)=>{t.hasChild(s)||i.trackChildChange(Xe(s,r))}),t.isLeafNode()||t.forEachChild(S,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Je(s,r,o))}else i.trackChildChange(ke(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ze{constructor(e){this.indexedFilter_=new Hn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ze.getStartPost_(e),this.endPost_=Ze.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new y(t,i))||(i=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=m.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(m.EMPTY_NODE);const r=this;return t.forEachChild(S,(o,a)=>{r.matches(new y(o,a))||(s=s.updateImmediateChild(o,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Gh{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ze(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new y(t,i))||(i=m.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=m.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(m.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,p)=>u(p,h)}else o=this.index_.getCompare();const a=e;f(a.numChildren()===this.limit_,"");const l=new y(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(d&&!i.isEmpty()&&p>=0)return r?.trackChildChange(Je(t,i,u)),a.updateImmediateChild(t,i);{r?.trackChildChange(Xe(t,u));const E=a.updateImmediateChild(t,m.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r?.trackChildChange(ke(h.name,h.node)),E.updateImmediateChild(h.name,h.node)):E}}else return i.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Xe(c.name,c.node)),r.trackChildChange(ke(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,m.EMPTY_NODE)):e}}/**
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
 */class $n{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=S}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ae}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:me}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===S}copy(){const e=new $n;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zh(n){return n.loadsAllData()?new Hn(n.getIndex()):n.hasLimit()?new Gh(n):new Ze(n)}function Zi(n){const e={};if(n.isDefault())return e;let t;if(n.index_===S?t="$priority":n.index_===Vh?t="$value":n.index_===Se?t="$key":(f(n.index_ instanceof Hh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=D(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=D(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+D(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=D(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+D(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function es(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==S&&(e.i=n.index_.toString()),e}/**
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
 */class vt extends br{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=st("p:rest:"),this.listens_={}}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=vt.getListenId_(e,i),a={};this.listens_[o]=a;const l=Zi(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,i),Re(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const i=vt.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Zi(e._queryParams),i=e._path.toString(),s=new At;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yo(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=je(a.responseText)}catch{F("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&F("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class jh{constructor(){this.rootNode_=m.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ct(){return{value:null,children:new Map}}function Lr(n,e,t){if(v(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=g(e);n.children.has(i)||n.children.set(i,Ct());const s=n.children.get(i);e=b(e),Lr(s,e,t)}}function pn(n,e,t){n.value!==null?t(e,n.value):Kh(n,(i,s)=>{const r=new I(e.toString()+"/"+i);pn(s,r,t)})}function Kh(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class Yh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&B(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const ts=10*1e3,Qh=30*1e3,Xh=300*1e3;class Jh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Yh(e);const i=ts+(Qh-ts)*Math.random();Ve(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;B(e,(s,r)=>{r>0&&Z(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Ve(this.reportStats_.bind(this),Math.floor(Math.random()*2*Xh))}}/**
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
 */var $;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($||($={}));function Fr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qn(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Et{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=$.ACK_USER_WRITE,this.source=Fr()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new I(e));return new Et(C(),t,this.revert)}}else return f(g(this.path)===e,"operationForChild called for unrelated child."),new Et(b(this.path),this.affectedTree,this.revert)}}/**
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
 */class et{constructor(e,t){this.source=e,this.path=t,this.type=$.LISTEN_COMPLETE}operationForChild(e){return v(this.path)?new et(this.source,C()):new et(this.source,b(this.path))}}/**
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
 */class ge{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=$.OVERWRITE}operationForChild(e){return v(this.path)?new ge(this.source,C(),this.snap.getImmediateChild(e)):new ge(this.source,b(this.path),this.snap)}}/**
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
 */class tt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=$.MERGE}operationForChild(e){if(v(this.path)){const t=this.children.subtree(new I(e));return t.isEmpty()?null:t.value?new ge(this.source,C(),t.value):new tt(this.source,C(),t)}else return f(g(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new tt(this.source,b(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ye{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const t=g(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Zh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eu(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(qh(o.childName,o.snapshotNode))}),We(n,s,"child_removed",e,i,t),We(n,s,"child_added",e,i,t),We(n,s,"child_moved",r,i,t),We(n,s,"child_changed",e,i,t),We(n,s,"value",e,i,t),s}function We(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>nu(n,a,l)),o.forEach(a=>{const l=tu(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function tu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function nu(n,e,t){if(e.childName==null||t.childName==null)throw xe("Should only compare child_ events.");const i=new y(e.childName,e.snapshotNode),s=new y(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function Mt(n,e){return{eventCache:n,serverCache:e}}function qe(n,e,t,i){return Mt(new ye(e,t,i),n.serverCache)}function Br(n,e,t,i){return Mt(n.eventCache,new ye(e,t,i))}function _n(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ve(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let en;const iu=()=>(en||(en=new L($c)),en);class T{static fromObject(e){let t=new T(null);return B(e,(i,s)=>{t=t.set(new I(i),s)}),t}constructor(e,t=iu()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:C(),value:this.value};if(v(e))return null;{const i=g(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(b(e),t);return r!=null?{path:R(new I(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const t=g(e),i=this.children.get(t);return i!==null?i.subtree(b(e)):new T(null)}}set(e,t){if(v(e))return new T(t,this.children);{const i=g(e),r=(this.children.get(i)||new T(null)).set(b(e),t),o=this.children.insert(i,r);return new T(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new T(null):new T(null,this.children);{const t=g(e),i=this.children.get(t);if(i){const s=i.remove(b(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new T(null):new T(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const t=g(e),i=this.children.get(t);return i?i.get(b(e)):null}}setTree(e,t){if(v(e))return t;{const i=g(e),r=(this.children.get(i)||new T(null)).setTree(b(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new T(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(R(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,C(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(v(e))return null;{const r=g(e),o=this.children.get(r);return o?o.findOnPath_(b(e),R(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,C(),t)}foreachOnPath_(e,t,i){if(v(e))return this;{this.value&&i(t,this.value);const s=g(e),r=this.children.get(s);return r?r.foreachOnPath_(b(e),R(t,s),i):new T(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(R(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class V{constructor(e){this.writeTree_=e}static empty(){return new V(new T(null))}}function Ge(n,e,t){if(v(e))return new V(new T(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=M(s,e);return r=r.updateChild(o,t),new V(n.writeTree_.set(s,r))}else{const s=new T(t),r=n.writeTree_.setTree(e,s);return new V(r)}}}function ns(n,e,t){let i=n;return B(t,(s,r)=>{i=Ge(i,R(e,s),r)}),i}function is(n,e){if(v(e))return V.empty();{const t=n.writeTree_.setTree(e,new T(null));return new V(t)}}function mn(n,e){return Ee(n,e)!=null}function Ee(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(M(t.path,e)):null}function ss(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(S,(i,s)=>{e.push(new y(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new y(i,s.value))}),e}function ie(n,e){if(v(e))return n;{const t=Ee(n,e);return t!=null?new V(new T(t)):new V(n.writeTree_.subtree(e))}}function gn(n){return n.writeTree_.isEmpty()}function De(n,e){return Ur(C(),n.writeTree_,e)}function Ur(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Ur(R(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(R(n,".priority"),i)),t}}/**
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
 */function Gn(n,e){return Vr(e,n)}function su(n,e,t,i,s){f(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Ge(n.visibleWrites,e,t)),n.lastWriteId=i}function ru(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function ou(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&au(a,i.path)?s=!1:H(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return lu(n),!0;if(i.snap)n.visibleWrites=is(n.visibleWrites,i.path);else{const a=i.children;B(a,l=>{n.visibleWrites=is(n.visibleWrites,R(i.path,l))})}return!0}else return!1}function au(n,e){if(n.snap)return H(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&H(R(n.path,t),e))return!0;return!1}function lu(n){n.visibleWrites=Wr(n.allWrites,cu,C()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function cu(n){return n.visible}function Wr(n,e,t){let i=V.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)H(t,o)?(a=M(t,o),i=Ge(i,a,r.snap)):H(o,t)&&(a=M(o,t),i=Ge(i,C(),r.snap.getChild(a)));else if(r.children){if(H(t,o))a=M(t,o),i=ns(i,a,r.children);else if(H(o,t))if(a=M(o,t),v(a))i=ns(i,C(),r.children);else{const l=Re(r.children,g(a));if(l){const c=l.getChild(b(a));i=Ge(i,C(),c)}}}else throw xe("WriteRecord should have .snap or .children")}}return i}function Hr(n,e,t,i,s){if(!i&&!s){const r=Ee(n.visibleWrites,e);if(r!=null)return r;{const o=ie(n.visibleWrites,e);if(gn(o))return t;if(t==null&&!mn(o,C()))return null;{const a=t||m.EMPTY_NODE;return De(o,a)}}}else{const r=ie(n.visibleWrites,e);if(!s&&gn(r))return t;if(!s&&t==null&&!mn(r,C()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(H(c.path,e)||H(e,c.path))},a=Wr(n.allWrites,o,e),l=t||m.EMPTY_NODE;return De(a,l)}}}function hu(n,e,t){let i=m.EMPTY_NODE;const s=Ee(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(S,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=ie(n.visibleWrites,e);return t.forEachChild(S,(o,a)=>{const l=De(ie(r,new I(o)),a);i=i.updateImmediateChild(o,l)}),ss(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ie(n.visibleWrites,e);return ss(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function uu(n,e,t,i,s){f(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=R(e,t);if(mn(n.visibleWrites,r))return null;{const o=ie(n.visibleWrites,r);return gn(o)?s.getChild(t):De(o,s.getChild(t))}}function du(n,e,t,i){const s=R(e,t),r=Ee(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=ie(n.visibleWrites,s);return De(o,i.getNode().getImmediateChild(t))}else return null}function fu(n,e){return Ee(n.visibleWrites,e)}function pu(n,e,t,i,s,r,o){let a;const l=ie(n.visibleWrites,e),c=Ee(l,C());if(c!=null)a=c;else if(t!=null)a=De(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=h.getNext();for(;p&&d.length<s;)u(p,i)!==0&&d.push(p),p=h.getNext();return d}else return[]}function _u(){return{visibleWrites:V.empty(),allWrites:[],lastWriteId:-1}}function It(n,e,t,i){return Hr(n.writeTree,n.treePath,e,t,i)}function zn(n,e){return hu(n.writeTree,n.treePath,e)}function rs(n,e,t,i){return uu(n.writeTree,n.treePath,e,t,i)}function wt(n,e){return fu(n.writeTree,R(n.treePath,e))}function mu(n,e,t,i,s,r){return pu(n.writeTree,n.treePath,e,t,i,s,r)}function jn(n,e,t){return du(n.writeTree,n.treePath,e,t)}function $r(n,e){return Vr(R(n.treePath,e),n.writeTree)}function Vr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class gu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Je(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Xe(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,ke(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Je(i,e.snapshotNode,s.oldSnap));else throw xe("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class yu{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const qr=new yu;class Kn{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ye(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return jn(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ve(this.viewCache_),r=mu(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function vu(n){return{filter:n}}function Cu(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Eu(n,e,t,i,s){const r=new gu;let o,a;if(t.type===$.OVERWRITE){const c=t;c.source.fromUser?o=yn(n,e,c.path,c.snap,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!v(c.path),o=bt(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===$.MERGE){const c=t;c.source.fromUser?o=wu(n,e,c.path,c.children,i,s,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=vn(n,e,c.path,c.children,i,s,a,r))}else if(t.type===$.ACK_USER_WRITE){const c=t;c.revert?o=Su(n,e,c.path,i,s,r):o=bu(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===$.LISTEN_COMPLETE)o=Tu(n,e,t.path,i,r);else throw xe("Unknown operation type: "+t.type);const l=r.getChanges();return Iu(e,o,l),{viewCache:o,changes:l}}function Iu(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=_n(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Mr(_n(e)))}}function Gr(n,e,t,i,s,r){const o=e.eventCache;if(wt(i,t)!=null)return e;{let a,l;if(v(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ve(e),d=c instanceof m?c:m.EMPTY_NODE,u=zn(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=It(i,ve(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=g(t);if(c===".priority"){f(re(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=rs(i,t,d,l);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{const d=b(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=rs(i,t,o.getNode(),l);h!=null?u=o.getNode().getImmediateChild(c).updateChild(d,h):u=o.getNode().getImmediateChild(c)}else u=jn(i,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,d,s,r):a=o.getNode()}}return qe(e,a,o.isFullyInitialized()||v(t),n.filter.filtersNodes())}}function bt(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(v(t))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,i);c=d.updateFullNode(l.getNode(),p,null)}else{const p=g(t);if(!l.isCompleteForPath(t)&&re(t)>1)return e;const _=b(t),N=l.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=d.updatePriority(l.getNode(),N):c=d.updateChild(l.getNode(),p,N,_,qr,null)}const u=Br(e,c,l.isFullyInitialized()||v(t),d.filtersNodes()),h=new Kn(s,u,r);return Gr(n,u,t,s,h,a)}function yn(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const d=new Kn(s,e,r);if(v(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=qe(e,c,!0,n.filter.filtersNodes());else{const u=g(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=qe(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=b(t),p=a.getNode().getImmediateChild(u);let _;if(v(h))_=i;else{const E=d.getCompleteChild(u);E!=null?Sr(h)===".priority"&&E.getChild(Rr(h)).isEmpty()?_=E:_=E.updateChild(h,i):_=m.EMPTY_NODE}if(p.equals(_))l=e;else{const E=n.filter.updateChild(a.getNode(),u,_,h,d,o);l=qe(e,E,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function os(n,e){return n.eventCache.isCompleteForChild(e)}function wu(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=R(t,l);os(e,g(d))&&(a=yn(n,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=R(t,l);os(e,g(d))||(a=yn(n,a,d,c,s,r,o))}),a}function as(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function vn(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;v(t)?c=i:c=new T(null).setTree(t,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),_=as(n,p,h);l=bt(n,l,new I(u),_,s,r,o,a)}}),c.children.inorderTraversal((u,h)=>{const p=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!p){const _=e.serverCache.getNode().getImmediateChild(u),E=as(n,_,h);l=bt(n,l,new I(u),E,s,r,o,a)}}),l}function bu(n,e,t,i,s,r,o){if(wt(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(v(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return bt(n,e,t,l.getNode().getChild(t),s,r,a,o);if(v(t)){let c=new T(null);return l.getNode().forEachChild(Se,(d,u)=>{c=c.set(new I(d),u)}),vn(n,e,t,c,s,r,a,o)}else return e}else{let c=new T(null);return i.foreach((d,u)=>{const h=R(t,d);l.isCompleteForPath(h)&&(c=c.set(d,l.getNode().getChild(h)))}),vn(n,e,t,c,s,r,a,o)}}function Tu(n,e,t,i,s){const r=e.serverCache,o=Br(e,r.getNode(),r.isFullyInitialized()||v(t),r.isFiltered());return Gr(n,o,t,i,qr,s)}function Su(n,e,t,i,s,r){let o;if(wt(i,t)!=null)return e;{const a=new Kn(i,e,s),l=e.eventCache.getNode();let c;if(v(t)||g(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=It(i,ve(e));else{const u=e.serverCache.getNode();f(u instanceof m,"serverChildren would be complete if leaf node"),d=zn(i,u)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=g(t);let u=jn(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=n.filter.updateChild(l,d,u,b(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,m.EMPTY_NODE,b(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=It(i,ve(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||wt(i,C())!=null,qe(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Nu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Hn(i.getIndex()),r=zh(i);this.processor_=vu(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(m.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(m.EMPTY_NODE,a.getNode(),null),d=new ye(l,o.isFullyInitialized(),s.filtersNodes()),u=new ye(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Mt(u,d),this.eventGenerator_=new Zh(this.query_)}get query(){return this.query_}}function Ru(n){return n.viewCache_.serverCache.getNode()}function Au(n,e){const t=ve(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!v(e)&&!t.getImmediateChild(g(e)).isEmpty())?t.getChild(e):null}function ls(n){return n.eventRegistrations_.length===0}function ku(n,e){n.eventRegistrations_.push(e)}function cs(n,e,t){const i=[];if(t){f(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function hs(n,e,t,i){e.type===$.MERGE&&e.source.queryId!==null&&(f(ve(n.viewCache_),"We should always have a full cache before handling merges"),f(_n(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Eu(n.processor_,s,e,t,i);return Cu(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,zr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Du(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(S,(r,o)=>{i.push(ke(r,o))}),t.isFullyInitialized()&&i.push(Mr(t.getNode())),zr(n,i,t.getNode(),e)}function zr(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return eu(n.eventGenerator_,e,t,s)}/**
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
 */let Tt;class Pu{constructor(){this.views=new Map}}function xu(n){f(!Tt,"__referenceConstructor has already been defined"),Tt=n}function Ou(){return f(Tt,"Reference.ts has not been loaded"),Tt}function Mu(n){return n.views.size===0}function Yn(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return f(r!=null,"SyncTree gave us an op for an invalid query."),hs(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(hs(o,e,t,i));return r}}function Lu(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=It(t,s?i:null),l=!1;a?l=!0:i instanceof m?(a=zn(t,i),l=!1):(a=m.EMPTY_NODE,l=!1);const c=Mt(new ye(a,l,!1),new ye(i,s,!1));return new Nu(e,c)}return o}function Fu(n,e,t,i,s,r){const o=Lu(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),ku(o,t),Du(o,t)}function Bu(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=oe(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(cs(c,t,i)),ls(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(cs(l,t,i)),ls(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!oe(n)&&r.push(new(Ou())(e._repo,e._path)),{removed:r,events:o}}function jr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ne(n,e){let t=null;for(const i of n.views.values())t=t||Au(i,e);return t}function Kr(n,e){if(e._queryParams.loadsAllData())return Lt(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Yr(n,e){return Kr(n,e)!=null}function oe(n){return Lt(n)!=null}function Lt(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let St;function Uu(n){f(!St,"__referenceConstructor has already been defined"),St=n}function Wu(){return f(St,"Reference.ts has not been loaded"),St}let Hu=1;class us{constructor(e){this.listenProvider_=e,this.syncPointTree_=new T(null),this.pendingWriteTree_=_u(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Qr(n,e,t,i,s){return su(n.pendingWriteTree_,e,t,i,s),s?ot(n,new ge(Fr(),e,t)):[]}function fe(n,e,t=!1){const i=ru(n.pendingWriteTree_,e);if(ou(n.pendingWriteTree_,e)){let r=new T(null);return i.snap!=null?r=r.set(C(),!0):B(i.children,o=>{r=r.set(new I(o),!0)}),ot(n,new Et(i.path,r,t))}else return[]}function Ft(n,e,t){return ot(n,new ge(Vn(),e,t))}function $u(n,e,t){const i=T.fromObject(t);return ot(n,new tt(Vn(),e,i))}function Vu(n,e){return ot(n,new et(Vn(),e))}function qu(n,e,t){const i=Xn(n,t);if(i){const s=Jn(i),r=s.path,o=s.queryId,a=M(r,e),l=new et(qn(o),a);return Zn(n,r,l)}else return[]}function Cn(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Yr(o,e))){const l=Bu(o,e,t,i);Mu(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(h,p)=>oe(p));if(d&&!u){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=ju(h);for(let _=0;_<p.length;++_){const E=p[_],N=E.query,G=Zr(n,E);n.listenProvider_.startListening(ze(N),Nt(n,N),G.hashFn,G.onComplete)}}}!u&&c.length>0&&!i&&(d?n.listenProvider_.stopListening(ze(e),null):c.forEach(h=>{const p=n.queryToTagMap.get(Bt(h));n.listenProvider_.stopListening(ze(h),p)}))}Ku(n,c)}return a}function Gu(n,e,t,i){const s=Xn(n,i);if(s!=null){const r=Jn(s),o=r.path,a=r.queryId,l=M(o,e),c=new ge(qn(a),l,t);return Zn(n,o,c)}else return[]}function zu(n,e,t,i){const s=Xn(n,i);if(s){const r=Jn(s),o=r.path,a=r.queryId,l=M(o,e),c=T.fromObject(t),d=new tt(qn(a),l,c);return Zn(n,o,d)}else return[]}function ds(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,p)=>{const _=M(h,s);r=r||Ne(p,_),o=o||oe(p)});let a=n.syncPointTree_.get(s);a?(o=o||oe(a),r=r||Ne(a,C())):(a=new Pu,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=m.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,_)=>{const E=Ne(_,C());E&&(r=r.updateImmediateChild(p,E))}));const c=Yr(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Bt(e);f(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=Yu();n.queryToTagMap.set(h,p),n.tagToQueryMap.set(p,h)}const d=Gn(n.pendingWriteTree_,s);let u=Fu(a,e,t,d,r,l);if(!c&&!o&&!i){const h=Kr(a,e);u=u.concat(Qu(n,e,h))}return u}function Qn(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=M(o,e),c=Ne(a,l);if(c)return c});return Hr(s,e,r,t,!0)}function ot(n,e){return Xr(e,n.syncPointTree_,null,Gn(n.pendingWriteTree_,C()))}function Xr(n,e,t,i){if(v(n.path))return Jr(n,e,t,i);{const s=e.get(C());t==null&&s!=null&&(t=Ne(s,C()));let r=[];const o=g(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=$r(i,o);r=r.concat(Xr(a,l,c,d))}return s&&(r=r.concat(Yn(s,n,i,t))),r}}function Jr(n,e,t,i){const s=e.get(C());t==null&&s!=null&&(t=Ne(s,C()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=$r(i,o),d=n.operationForChild(o);d&&(r=r.concat(Jr(d,a,l,c)))}),s&&(r=r.concat(Yn(s,n,i,t))),r}function Zr(n,e){const t=e.query,i=Nt(n,t);return{hashFn:()=>(Ru(e)||m.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?qu(n,t._path,i):Vu(n,t._path);{const r=Gc(s,t);return Cn(n,t,null,r)}}}}function Nt(n,e){const t=Bt(e);return n.queryToTagMap.get(t)}function Bt(n){return n._path.toString()+"$"+n._queryIdentifier}function Xn(n,e){return n.tagToQueryMap.get(e)}function Jn(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new I(n.substr(0,e))}}function Zn(n,e,t){const i=n.syncPointTree_.get(e);f(i,"Missing sync point for query tag that we're tracking");const s=Gn(n.pendingWriteTree_,e);return Yn(i,t,s,null)}function ju(n){return n.fold((e,t,i)=>{if(t&&oe(t))return[Lt(t)];{let s=[];return t&&(s=jr(t)),B(i,(r,o)=>{s=s.concat(o)}),s}})}function ze(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Wu())(n._repo,n._path):n}function Ku(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Bt(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Yu(){return Hu++}function Qu(n,e,t){const i=e._path,s=Nt(n,e),r=Zr(n,t),o=n.listenProvider_.startListening(ze(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)f(!oe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!v(c)&&d&&oe(d))return[Lt(d).query];{let h=[];return d&&(h=h.concat(jr(d).map(p=>p.query))),B(u,(p,_)=>{h=h.concat(_)}),h}});for(let c=0;c<l.length;++c){const d=l[c];n.listenProvider_.stopListening(ze(d),Nt(n,d))}}return o}/**
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
 */class ei{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ei(t)}node(){return this.node_}}class ti{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=R(this.path_,e);return new ti(this.syncTree_,t)}node(){return Qn(this.syncTree_,this.path_)}}const Xu=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},fs=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Ju(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Zu(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Ju=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},Zu=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&f(!1,"Unexpected increment value: "+i);const s=e.node();if(f(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},ed=function(n,e,t,i){return ni(e,new ti(t,n),i)},eo=function(n,e,t){return ni(n,new ei(e),t)};function ni(n,e,t){const i=n.getPriority().val(),s=fs(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=fs(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new A(a,P(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new A(s))),o.forEachChild(S,(a,l)=>{const c=ni(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class ii{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function si(n,e){let t=e instanceof I?e:new I(e),i=n,s=g(t);for(;s!==null;){const r=Re(i.node.children,s)||{children:{},childCount:0};i=new ii(s,i,r),t=b(t),s=g(t)}return i}function Le(n){return n.node.value}function to(n,e){n.node.value=e,En(n)}function no(n){return n.node.childCount>0}function td(n){return Le(n)===void 0&&!no(n)}function Ut(n,e){B(n.node.children,(t,i)=>{e(new ii(t,n,i))})}function io(n,e,t,i){t&&e(n),Ut(n,s=>{io(s,e,!0)})}function nd(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function at(n){return new I(n.parent===null?n.name:at(n.parent)+"/"+n.name)}function En(n){n.parent!==null&&id(n.parent,n.name,n)}function id(n,e,t){const i=td(t),s=Z(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,En(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,En(n))}/**
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
 */const sd=/[\[\].#$\/\u0000-\u001F\u007F]/,rd=/[\[\].#$\u0000-\u001F\u007F]/,tn=10*1024*1024,so=function(n){return typeof n=="string"&&n.length!==0&&!sd.test(n)},ro=function(n){return typeof n=="string"&&n.length!==0&&!rd.test(n)},od=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ro(n)},oo=function(n,e,t,i){i&&e===void 0||ri(Tn(n,"value"),e,t)},ri=function(n,e,t){const i=t instanceof I?new bh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+he(i));if(typeof e=="function")throw new Error(n+"contains a function "+he(i)+" with contents = "+e.toString());if(rr(e))throw new Error(n+"contains "+e.toString()+" "+he(i));if(typeof e=="string"&&e.length>tn/3&&Dt(e)>tn)throw new Error(n+"contains a string greater than "+tn+" utf8 bytes "+he(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(B(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!so(o)))throw new Error(n+" contains an invalid key ("+o+") "+he(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Th(i,o),ri(n,a,i),Sh(i)}),s&&r)throw new Error(n+' contains ".value" child '+he(i)+" in addition to actual children.")}},ao=function(n,e,t,i){if(!ro(t))throw new Error(Tn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ad=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ao(n,e,t)},lo=function(n,e){if(g(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ld=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!so(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!od(t))throw new Error(Tn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class cd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oi(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Bn(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function co(n,e,t){oi(n,t),ho(n,i=>Bn(i,e))}function J(n,e,t){oi(n,t),ho(n,i=>H(i,e)||H(e,i))}function ho(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(hd(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function hd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();$e&&x("event: "+t.toString()),Me(i)}}}/**
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
 */const ud="repo_interrupt",dd=25;class fd{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ct(),this.transactionQueueTree_=new ii,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pd(n,e,t){if(n.stats_=Ln(n.repoInfo_),n.forceRestClient_||Yc())n.server_=new vt(n.repoInfo_,(i,s,r,o)=>{ps(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>_s(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{D(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new K(n.repoInfo_,e,(i,s,r,o)=>{ps(n,i,s,r,o)},i=>{_s(n,i)},i=>{_d(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=eh(n.repoInfo_,()=>new Jh(n.stats_,n.server_)),n.infoData_=new jh,n.infoSyncTree_=new us({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Ft(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),li(n,"connected",!1),n.serverSyncTree_=new us({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);J(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function uo(n){const t=n.infoData_.getNode(new I(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ai(n){return Xu({timestamp:uo(n)})}function ps(n,e,t,i,s){n.dataUpdateCount++;const r=new I(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=dt(t,c=>P(c));o=zu(n.serverSyncTree_,r,l,s)}else{const l=P(t);o=Gu(n.serverSyncTree_,r,l,s)}else if(i){const l=dt(t,c=>P(c));o=$u(n.serverSyncTree_,r,l)}else{const l=P(t);o=Ft(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Wt(n,r)),J(n.eventQueue_,a,o)}function _s(n,e){li(n,"connected",e),e===!1&&gd(n)}function _d(n,e){B(e,(t,i)=>{li(n,t,i)})}function li(n,e,t){const i=new I("/.info/"+e),s=P(t);n.infoData_.updateSnapshot(i,s);const r=Ft(n.infoSyncTree_,i,s);J(n.eventQueue_,i,r)}function fo(n){return n.nextWriteId_++}function md(n,e,t,i,s){ci(n,"set",{path:e.toString(),value:t,priority:i});const r=ai(n),o=P(t,i),a=Qn(n.serverSyncTree_,e),l=eo(o,a,r),c=fo(n),d=Qr(n.serverSyncTree_,e,l,c,!0);oi(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,p)=>{const _=h==="ok";_||F("set at "+e+" failed: "+h);const E=fe(n.serverSyncTree_,c,!_);J(n.eventQueue_,e,E),Ed(n,s,h,p)});const u=yo(n,e);Wt(n,u),J(n.eventQueue_,u,[])}function gd(n){ci(n,"onDisconnectEvents");const e=ai(n),t=Ct();pn(n.onDisconnect_,C(),(s,r)=>{const o=ed(s,r,n.serverSyncTree_,e);Lr(t,s,o)});let i=[];pn(t,C(),(s,r)=>{i=i.concat(Ft(n.serverSyncTree_,s,r));const o=yo(n,s);Wt(n,o)}),n.onDisconnect_=Ct(),J(n.eventQueue_,C(),i)}function yd(n,e,t){let i;g(e._path)===".info"?i=ds(n.infoSyncTree_,e,t):i=ds(n.serverSyncTree_,e,t),co(n.eventQueue_,e._path,i)}function vd(n,e,t){let i;g(e._path)===".info"?i=Cn(n.infoSyncTree_,e,t):i=Cn(n.serverSyncTree_,e,t),co(n.eventQueue_,e._path,i)}function Cd(n){n.persistentConnection_&&n.persistentConnection_.interrupt(ud)}function ci(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),x(t,...e)}function Ed(n,e,t,i){e&&Me(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function po(n,e,t){return Qn(n.serverSyncTree_,e,t)||m.EMPTY_NODE}function hi(n,e=n.transactionQueueTree_){if(e||Ht(n,e),Le(e)){const t=mo(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Id(n,at(e),t)}else no(e)&&Ut(e,t=>{hi(n,t)})}function Id(n,e,t){const i=t.map(c=>c.currentWriteId),s=po(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const d=t[c];f(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=M(e,d.path);r=r.updateChild(u,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{ci(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(fe(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();Ht(n,si(n.transactionQueueTree_,e)),hi(n,n.transactionQueueTree_),J(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)Me(u[h])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{F("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}Wt(n,e)}},o)}function Wt(n,e){const t=_o(n,e),i=at(t),s=mo(n,t);return wd(n,s,i),i}function wd(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=M(t,l.path);let d=!1,u;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,s=s.concat(fe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=dd)d=!0,u="maxretry",s=s.concat(fe(n.serverSyncTree_,l.currentWriteId,!0));else{const h=po(n,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){ri("transaction failed: Data returned ",p,l.path);let _=P(p);typeof p=="object"&&p!=null&&Z(p,".priority")||(_=_.updatePriority(h.getPriority()));const N=l.currentWriteId,G=ai(n),z=eo(_,h,G);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=z,l.currentWriteId=fo(n),o.splice(o.indexOf(N),1),s=s.concat(Qr(n.serverSyncTree_,l.path,z,l.currentWriteId,l.applyLocally)),s=s.concat(fe(n.serverSyncTree_,N,!0))}else d=!0,u="nodata",s=s.concat(fe(n.serverSyncTree_,l.currentWriteId,!0))}J(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,(function(h){setTimeout(h,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}Ht(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Me(i[a]);hi(n,n.transactionQueueTree_)}function _o(n,e){let t,i=n.transactionQueueTree_;for(t=g(e);t!==null&&Le(i)===void 0;)i=si(i,t),e=b(e),t=g(e);return i}function mo(n,e){const t=[];return go(n,e,t),t.sort((i,s)=>i.order-s.order),t}function go(n,e,t){const i=Le(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Ut(e,s=>{go(n,s,t)})}function Ht(n,e){const t=Le(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,to(e,t.length>0?t:void 0)}Ut(e,i=>{Ht(n,i)})}function yo(n,e){const t=at(_o(n,e)),i=si(n.transactionQueueTree_,e);return nd(i,s=>{nn(n,s)}),nn(n,i),io(i,s=>{nn(n,s)}),t}function nn(n,e){const t=Le(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(fe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?to(e,void 0):t.length=r+1,J(n.eventQueue_,at(e),s);for(let o=0;o<i.length;o++)Me(i[o])}}/**
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
 */function bd(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Td(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):F(`Invalid query segment '${t}' in query '${n}'`)}return e}const ms=function(n,e){const t=Sd(n),i=t.namespace;t.domain==="firebase.com"&&X(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&X("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Wc();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new gr(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new I(t.pathString)}},Sd=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(s=bd(n.substring(d,u)));const h=Td(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const gs="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Nd=(function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=gs.charAt(t%64),t=Math.floor(t/64);f(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=gs.charAt(e[s]);return f(o.length===20,"nextPushId: Length should be 20."),o}})();/**
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
 */class Rd{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+D(this.snapshot.exportVal())}}class Ad{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class kd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return f(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ui{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return v(this._path)?null:Sr(this._path)}get ref(){return new ae(this._repo,this._path)}get _queryIdentifier(){const e=es(this._queryParams),t=On(e);return t==="{}"?"default":t}get _queryObject(){return es(this._queryParams)}isEqual(e){if(e=ee(e),!(e instanceof ui))return!1;const t=this._repo===e._repo,i=Bn(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+wh(this._path)}}class ae extends ui{constructor(e,t){super(e,t,new $n,!1)}get parent(){const e=Rr(this._path);return e===null?null:new ae(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new I(e),i=Pe(this.ref,e);return new Rt(this._node.getChild(t),i,S)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Rt(s,Pe(this.ref,i),S)))}hasChild(e){const t=new I(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function di(n,e){return n=ee(n),n._checkNotDeleted("ref"),e!==void 0?Pe(n._root,e):n._root}function Pe(n,e){return n=ee(n),g(n._path)===null?ad("child","path",e):ao("child","path",e),new ae(n._repo,R(n._path,e))}function Dd(n,e){n=ee(n),lo("push",n._path),oo("push",e,n._path,!0);const t=uo(n._repo),i=Nd(t),s=Pe(n,i),r=Pe(n,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function vo(n,e){n=ee(n),lo("set",n._path),oo("set",e,n._path,!1);const t=new At;return md(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class fi{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ad(this,e,t):null}createEvent(e,t){f(e.childName!=null,"Child events should have a childName.");const i=Pe(new ae(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new Rd(e.type,this,new Rt(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof fi?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Pd(n,e,t,i,s){const r=new kd(t,void 0),o=new fi(e,r);return yd(n._repo,n,o),()=>vd(n._repo,n,o)}function xd(n,e,t,i){return Pd(n,"child_added",e)}xu(ae);Uu(ae);/**
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
 */const Od="FIREBASE_DATABASE_EMULATOR_HOST",In={};let Md=!1;function Ld(n,e,t,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=bn(r);n.repoInfo_=new gr(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function Fd(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||X("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),x("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=ms(r,s),a=o.repoInfo,l;typeof process<"u"&&Li&&(l=Li[Od]),l?(r=`http://${l}?ns=${a.namespace}`,o=ms(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Xc(n.name,n.options,e);ld("Invalid Firebase Database URL",o),v(o.path)||X("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Ud(a,n,c,new Qc(n,t));return new Wd(d,n)}function Bd(n,e){const t=In[e];(!t||t[n.key]!==n)&&X(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Cd(n),delete t[n.key]}function Ud(n,e,t,i){let s=In[e.name];s||(s={},In[e.name]=s);let r=s[n.toURLString()];return r&&X("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new fd(n,Md,t,i),s[n.toURLString()]=r,r}class Wd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ae(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Bd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&X("Cannot call "+e+" on a deleted database.")}}function Hd(n=Ps(),e){const t=nt(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=xo("database");i&&$d(t,...i)}return t}function $d(n,e,t,i={}){n=ee(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Ke(i,r.repoInfo_.emulatorOptions))return;X("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&X('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ht(ht.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:Mo(i.mockUserToken,n.app.options.projectId);o=new ht(a)}bn(e)&&(Oo(e),Bo("Database",!0)),Ld(r,s,i,o)}/**
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
 */function Vd(n){Oc(el),se(new Y("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Fd(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),q(Fi,Bi,n),q(Fi,Bi,"esm2020")}/**
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
 */const qd={".sv":"timestamp"};function Co(){return qd}K.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};K.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Vd();const Gd={apiKey:"AIzaSyD9821q_YpfGHH9ZFPBXgVXQSyxbAfSGvk",authDomain:"aera-3f59e.firebaseapp.com",projectId:"aera-3f59e",storageBucket:"aera-3f59e.firebasestorage.app",messagingSenderId:"533520508445",appId:"1:533520508445:web:a0906e788e0d6e524888f4",measurementId:"G-J7K9HKBL6K",databaseURL:"https://aera-3f59e-default-rtdb.firebaseio.com"},Eo=Ds(Gd);Ac(Eo);const pi=Hd(Eo);window.addEventListener("DOMContentLoaded",function(){document.getElementById("Typing-Region").focus()});document.getElementById("send").addEventListener("click",Io);document.getElementById("Typing-Region").addEventListener("keypress",n=>{n.key==="Enter"&&(n.preventDefault(),Io())});function Io(){const n=document.getElementById("Typing-Region").innerText.trim();n!==""&&jd(n).then(e=>null)}document.querySelector("form").addEventListener("submit",async n=>{n.preventDefault();const e=document.querySelector("input").value.trim();if(e){const t=zd();sessionStorage.setItem("userId",t),sessionStorage.setItem("userName",e);const i=di(pi,`users/${t}`);await vo(i,{username:e,userId:t,online:!0,lastActive:Co()}),alert(`Welcome ${e}! You are now logged in.`),document.getElementsByClassName("FirstView")[0].style.display="none",document.querySelector("main").style.display="block",Kd()}});function zd(){if(crypto?.randomUUID)return crypto.randomUUID();if(crypto?.getRandomValues){const n=new Uint32Array(4);return crypto.getRandomValues(n),n.join("-")}else return"user-"+Math.floor(Math.random()*1e6)}async function jd(n){const e=Dd(di(pi,"Messages")),t={userID:sessionStorage.getItem("userId"),userName:sessionStorage.getItem("userName"),msg:n,timeStamp:Co()};await vo(e,t),console.log("Message sent successfully")}function Kd(){const n=di(pi,"Messages");xd(n,e=>{const t=e.val();Yd(t.msg)})}function Yd(n){const e=document.createElement("div");e.classList.add("NewMessage"),e.textContent=n,document.getElementById("Chat-Box").appendChild(e),document.getElementById("Typing-Region").innerText="",document.getElementById("Typing-Region").focus()}
