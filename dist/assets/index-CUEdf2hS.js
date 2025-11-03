(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const fc=()=>{};var hs={};/**
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
 */const Tr={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(t,e){if(!t)throw Ke(e)},Ke=function(t){return new Error("Firebase Database ("+Tr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Sr=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pc=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},di={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(u=64)),i.push(n[h],n[d],n[u],n[p])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new mc;const u=r<<2|a>>4;if(i.push(u),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const _=c<<6&192|d;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kr=function(t){const e=Sr(t);return di.encodeByteArray(e,!0)},Lt=function(t){return kr(t).replace(/\./g,"")},Un=function(t){try{return di.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _c(t){return Ar(void 0,t)}function Ar(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gc(n)||(t[n]=Ar(t[n],e[n]));return t}function gc(t){return t!=="__proto__"}/**
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
 */function yc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vc=()=>yc().__FIREBASE_DEFAULTS__,Ec=()=>{if(typeof process>"u"||typeof hs>"u")return;const t=hs.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Un(t[1]);return e&&JSON.parse(e)},Nr=()=>{try{return fc()||vc()||Ec()||bc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wc=t=>Nr()?.emulatorHosts?.[t],Cc=t=>{const e=wc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Rr=()=>Nr()?.config;/**
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
 */class sn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function hi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ic(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Tc(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Lt(JSON.stringify(n)),Lt(JSON.stringify(o)),""].join(".")}const rt={};function Sc(){const t={prod:[],emulator:[]};for(const e of Object.keys(rt))rt[e]?t.emulator.push(e):t.prod.push(e);return t}function kc(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let fs=!1;function Ac(t,e){if(typeof window>"u"||typeof document>"u"||!hi(window.location.host)||rt[t]===e||rt[t]||fs)return;rt[t]=e;function n(u){return`__firebase__banner__${u}`}const i="__firebase__banner",r=Sc().prod.length>0;function o(){const u=document.getElementById(i);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,p){u.setAttribute("width","24"),u.setAttribute("id",p),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{fs=!0,o()},u}function h(u,p){u.setAttribute("id",p),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function d(){const u=kc(i),p=n("text"),_=document.getElementById(p)||document.createElement("span"),E=n("learnmore"),k=document.getElementById(E)||document.createElement("a"),U=n("preprendIcon"),y=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const I=u.element;a(I),h(k,E);const O=c();l(y,U),I.append(y,_,k,O),document.body.appendChild(I)}r?(_.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function Nc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nc())}function Rc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dc(){return Tr.NODE_ADMIN===!0}function Dr(){try{return typeof indexedDB=="object"}catch{return!1}}function Pr(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function Pc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Oc="FirebaseError";class De extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Oc,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rn.prototype.create)}}class rn{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Mc(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new De(s,a,i)}}function Mc(t,e){return t.replace(Lc,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Lc=/\{\$([^}]+)}/g;/**
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
 */function ht(t){return JSON.parse(t)}function j(t){return JSON.stringify(t)}/**
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
 */const Or=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=ht(Un(r[0])||""),n=ht(Un(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Fc=function(t){const e=Or(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jc=function(t){const e=Or(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ue(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function We(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ps(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ft(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function ft(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(ms(r)&&ms(o)){if(!ft(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function ms(t){return t!==null&&typeof t=="object"}/**
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
 */function Bc(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class $c{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const u=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):d<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const u=(s<<5|s>>>27)+c+l+h+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function fi(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Uc=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,m(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},on=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Wc=1e3,Hc=2,Vc=14400*1e3,zc=.5;function _s(t,e=Wc,n=Hc){const i=e*Math.pow(n,t),s=Math.round(zc*i*(Math.random()-.5)*2);return Math.min(Vc,i+s)}/**
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
 */function de(t){return t&&t._delegate?t._delegate:t}class oe{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ee="[DEFAULT]";/**
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
 */class Gc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new sn;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kc(e))try{this.getOrInitializeService({instanceIdentifier:Ee})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ee){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ee){return this.instances.has(e)}getOptions(e=Ee){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:qc(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ee){return this.component?this.component.multipleInstances?e:Ee:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qc(t){return t===Ee?void 0:t}function Kc(t){return t.instantiationMode==="EAGER"}/**
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
 */class Yc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const Qc={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Xc=R.INFO,Jc={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},Zc=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Jc[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pi{constructor(e){this.name=e,this._logLevel=Xc,this._logHandler=Zc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const el=(t,e)=>e.some(n=>t instanceof n);let gs,ys;function tl(){return gs||(gs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nl(){return ys||(ys=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mr=new WeakMap,Wn=new WeakMap,Lr=new WeakMap,vn=new WeakMap,mi=new WeakMap;function il(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(fe(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Mr.set(n,t)}).catch(()=>{}),mi.set(e,t),e}function sl(t){if(Wn.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Wn.set(t,e)}let Hn={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rl(t){Hn=t(Hn)}function ol(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(En(this),e,...n);return Lr.set(i,e.sort?e.sort():[e]),fe(i)}:nl().includes(t)?function(...e){return t.apply(En(this),e),fe(Mr.get(this))}:function(...e){return fe(t.apply(En(this),e))}}function al(t){return typeof t=="function"?ol(t):(t instanceof IDBTransaction&&sl(t),el(t,tl())?new Proxy(t,Hn):t)}function fe(t){if(t instanceof IDBRequest)return il(t);if(vn.has(t))return vn.get(t);const e=al(t);return e!==t&&(vn.set(t,e),mi.set(e,t)),e}const En=t=>mi.get(t);function Fr(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=fe(o);return i&&o.addEventListener("upgradeneeded",l=>{i(fe(o.result),l.oldVersion,l.newVersion,fe(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const cl=["get","getKey","getAll","getAllKeys","count"],ll=["put","add","delete","clear"],bn=new Map;function vs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bn.get(e))return bn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=ll.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||cl.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return bn.set(e,r),r}rl(t=>({...t,get:(e,n,i)=>vs(e,n)||t.get(e,n,i),has:(e,n)=>!!vs(e,n)||t.has(e,n)}));/**
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
 */class ul{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dl(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function dl(t){return t.getComponent()?.type==="VERSION"}const Vn="@firebase/app",Es="0.14.4";/**
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
 */const ae=new pi("@firebase/app"),hl="@firebase/app-compat",fl="@firebase/analytics-compat",pl="@firebase/analytics",ml="@firebase/app-check-compat",_l="@firebase/app-check",gl="@firebase/auth",yl="@firebase/auth-compat",vl="@firebase/database",El="@firebase/data-connect",bl="@firebase/database-compat",wl="@firebase/functions",Cl="@firebase/functions-compat",Il="@firebase/installations",Tl="@firebase/installations-compat",Sl="@firebase/messaging",kl="@firebase/messaging-compat",Al="@firebase/performance",Nl="@firebase/performance-compat",Rl="@firebase/remote-config",xl="@firebase/remote-config-compat",Dl="@firebase/storage",Pl="@firebase/storage-compat",Ol="@firebase/firestore",Ml="@firebase/ai",Ll="@firebase/firestore-compat",Fl="firebase",jl="12.4.0";/**
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
 */const zn="[DEFAULT]",Bl={[Vn]:"fire-core",[hl]:"fire-core-compat",[pl]:"fire-analytics",[fl]:"fire-analytics-compat",[_l]:"fire-app-check",[ml]:"fire-app-check-compat",[gl]:"fire-auth",[yl]:"fire-auth-compat",[vl]:"fire-rtdb",[El]:"fire-data-connect",[bl]:"fire-rtdb-compat",[wl]:"fire-fn",[Cl]:"fire-fn-compat",[Il]:"fire-iid",[Tl]:"fire-iid-compat",[Sl]:"fire-fcm",[kl]:"fire-fcm-compat",[Al]:"fire-perf",[Nl]:"fire-perf-compat",[Rl]:"fire-rc",[xl]:"fire-rc-compat",[Dl]:"fire-gcs",[Pl]:"fire-gcs-compat",[Ol]:"fire-fst",[Ll]:"fire-fst-compat",[Ml]:"fire-vertex","fire-js":"fire-js",[Fl]:"fire-js-all"};/**
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
 */const jt=new Map,$l=new Map,Gn=new Map;function bs(t,e){try{t.container.addComponent(e)}catch(n){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _e(t){const e=t.name;if(Gn.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;Gn.set(e,t);for(const n of jt.values())bs(n,t);for(const n of $l.values())bs(n,t);return!0}function bt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ul(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Wl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pe=new rn("app","Firebase",Wl);/**
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
 */class Hl{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}/**
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
 */const Vl=jl;function jr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:zn,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw pe.create("bad-app-name",{appName:String(s)});if(n||(n=Rr()),!n)throw pe.create("no-options");const r=jt.get(s);if(r){if(ft(n,r.options)&&ft(i,r.config))return r;throw pe.create("duplicate-app",{appName:s})}const o=new Yc(s);for(const l of Gn.values())o.addComponent(l);const a=new Hl(n,i,o);return jt.set(s,a),a}function Br(t=zn){const e=jt.get(t);if(!e&&t===zn&&Rr())return jr();if(!e)throw pe.create("no-app",{appName:t});return e}function ie(t,e,n){let i=Bl[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(o.join(" "));return}_e(new oe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const zl="firebase-heartbeat-database",Gl=1,pt="firebase-heartbeat-store";let wn=null;function $r(){return wn||(wn=Fr(zl,Gl,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pt)}catch(n){console.warn(n)}}}}).catch(t=>{throw pe.create("idb-open",{originalErrorMessage:t.message})})),wn}async function ql(t){try{const n=(await $r()).transaction(pt),i=await n.objectStore(pt).get(Ur(t));return await n.done,i}catch(e){if(e instanceof De)ae.warn(e.message);else{const n=pe.create("idb-get",{originalErrorMessage:e?.message});ae.warn(n.message)}}}async function ws(t,e){try{const i=(await $r()).transaction(pt,"readwrite");await i.objectStore(pt).put(e,Ur(t)),await i.done}catch(n){if(n instanceof De)ae.warn(n.message);else{const i=pe.create("idb-set",{originalErrorMessage:n?.message});ae.warn(i.message)}}}function Ur(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Kl=1024,Yl=30;class Ql{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jl(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Cs();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>Yl){const s=Zl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ae.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cs(),{heartbeatsToSend:n,unsentEntries:i}=Xl(this._heartbeatsCache.heartbeats),s=Lt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ae.warn(e),""}}}function Cs(){return new Date().toISOString().substring(0,10)}function Xl(t,e=Kl){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Is(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Is(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Jl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dr()?Pr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ql(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ws(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ws(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Is(t){return Lt(JSON.stringify({version:2,heartbeats:t})).length}function Zl(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function eu(t){_e(new oe("platform-logger",e=>new ul(e),"PRIVATE")),_e(new oe("heartbeat",e=>new Ql(e),"PRIVATE")),ie(Vn,Es,t),ie(Vn,Es,"esm2020"),ie("fire-js","")}eu("");var tu="firebase",nu="12.4.0";/**
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
 */ie(tu,nu,"app");const Wr="@firebase/installations",_i="0.6.19";/**
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
 */const Hr=1e4,Vr=`w:${_i}`,zr="FIS_v2",iu="https://firebaseinstallations.googleapis.com/v1",su=3600*1e3,ru="installations",ou="Installations";/**
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
 */const au={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Te=new rn(ru,ou,au);function Gr(t){return t instanceof De&&t.code.includes("request-failed")}/**
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
 */function qr({projectId:t}){return`${iu}/projects/${t}/installations`}function Kr(t){return{token:t.token,requestStatus:2,expiresIn:lu(t.expiresIn),creationTime:Date.now()}}async function Yr(t,e){const i=(await e.json()).error;return Te.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Qr({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function cu(t,{refreshToken:e}){const n=Qr(t);return n.append("Authorization",uu(e)),n}async function Xr(t){const e=await t();return e.status>=500&&e.status<600?t():e}function lu(t){return Number(t.replace("s","000"))}function uu(t){return`${zr} ${t}`}/**
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
 */async function du({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=qr(t),s=Qr(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:zr,appId:t.appId,sdkVersion:Vr},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Xr(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Kr(c.authToken)}}else throw await Yr("Create Installation",l)}/**
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
 */function Jr(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function hu(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const fu=/^[cdef][\w-]{21}$/,qn="";function pu(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mu(t);return fu.test(n)?n:qn}catch{return qn}}function mu(t){return hu(t).substr(0,22)}/**
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
 */function an(t){return`${t.appName}!${t.appId}`}/**
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
 */const Zr=new Map;function eo(t,e){const n=an(t);to(n,e),_u(n,e)}function to(t,e){const n=Zr.get(t);if(n)for(const i of n)i(e)}function _u(t,e){const n=gu();n&&n.postMessage({key:t,fid:e}),yu()}let we=null;function gu(){return!we&&"BroadcastChannel"in self&&(we=new BroadcastChannel("[Firebase] FID Change"),we.onmessage=t=>{to(t.data.key,t.data.fid)}),we}function yu(){Zr.size===0&&we&&(we.close(),we=null)}/**
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
 */const vu="firebase-installations-database",Eu=1,Se="firebase-installations-store";let Cn=null;function gi(){return Cn||(Cn=Fr(vu,Eu,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Se)}}})),Cn}async function Bt(t,e){const n=an(t),s=(await gi()).transaction(Se,"readwrite"),r=s.objectStore(Se),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&eo(t,e.fid),e}async function no(t){const e=an(t),i=(await gi()).transaction(Se,"readwrite");await i.objectStore(Se).delete(e),await i.done}async function cn(t,e){const n=an(t),s=(await gi()).transaction(Se,"readwrite"),r=s.objectStore(Se),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&eo(t,a.fid),a}/**
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
 */async function yi(t){let e;const n=await cn(t.appConfig,i=>{const s=bu(i),r=wu(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===qn?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function bu(t){const e=t||{fid:pu(),registrationStatus:0};return io(e)}function wu(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Te.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Cu(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Iu(t)}:{installationEntry:e}}async function Cu(t,e){try{const n=await du(t,e);return Bt(t.appConfig,n)}catch(n){throw Gr(n)&&n.customData.serverCode===409?await no(t.appConfig):await Bt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Iu(t){let e=await Ts(t.appConfig);for(;e.registrationStatus===1;)await Jr(100),e=await Ts(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await yi(t);return i||n}return e}function Ts(t){return cn(t,e=>{if(!e)throw Te.create("installation-not-found");return io(e)})}function io(t){return Tu(t)?{fid:t.fid,registrationStatus:0}:t}function Tu(t){return t.registrationStatus===1&&t.registrationTime+Hr<Date.now()}/**
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
 */async function Su({appConfig:t,heartbeatServiceProvider:e},n){const i=ku(t,n),s=cu(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Vr,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Xr(()=>fetch(i,a));if(l.ok){const c=await l.json();return Kr(c)}else throw await Yr("Generate Auth Token",l)}function ku(t,{fid:e}){return`${qr(t)}/${e}/authTokens:generate`}/**
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
 */async function vi(t,e=!1){let n;const i=await cn(t.appConfig,r=>{if(!so(r))throw Te.create("not-registered");const o=r.authToken;if(!e&&Ru(o))return r;if(o.requestStatus===1)return n=Au(t,e),r;{if(!navigator.onLine)throw Te.create("app-offline");const a=Du(r);return n=Nu(t,a),a}});return n?await n:i.authToken}async function Au(t,e){let n=await Ss(t.appConfig);for(;n.authToken.requestStatus===1;)await Jr(100),n=await Ss(t.appConfig);const i=n.authToken;return i.requestStatus===0?vi(t,e):i}function Ss(t){return cn(t,e=>{if(!so(e))throw Te.create("not-registered");const n=e.authToken;return Pu(n)?{...e,authToken:{requestStatus:0}}:e})}async function Nu(t,e){try{const n=await Su(t,e),i={...e,authToken:n};return await Bt(t.appConfig,i),n}catch(n){if(Gr(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await no(t.appConfig);else{const i={...e,authToken:{requestStatus:0}};await Bt(t.appConfig,i)}throw n}}function so(t){return t!==void 0&&t.registrationStatus===2}function Ru(t){return t.requestStatus===2&&!xu(t)}function xu(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+su}function Du(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Pu(t){return t.requestStatus===1&&t.requestTime+Hr<Date.now()}/**
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
 */async function Ou(t){const e=t,{installationEntry:n,registrationPromise:i}=await yi(e);return i?i.catch(console.error):vi(e).catch(console.error),n.fid}/**
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
 */async function Mu(t,e=!1){const n=t;return await Lu(n),(await vi(n,e)).token}async function Lu(t){const{registrationPromise:e}=await yi(t);e&&await e}/**
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
 */function Fu(t){if(!t||!t.options)throw In("App Configuration");if(!t.name)throw In("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw In(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function In(t){return Te.create("missing-app-config-values",{valueName:t})}/**
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
 */const ro="installations",ju="installations-internal",Bu=t=>{const e=t.getProvider("app").getImmediate(),n=Fu(e),i=bt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},$u=t=>{const e=t.getProvider("app").getImmediate(),n=bt(e,ro).getImmediate();return{getId:()=>Ou(n),getToken:s=>Mu(n,s)}};function Uu(){_e(new oe(ro,Bu,"PUBLIC")),_e(new oe(ju,$u,"PRIVATE"))}Uu();ie(Wr,_i);ie(Wr,_i,"esm2020");/**
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
 */const $t="analytics",Wu="firebase_id",Hu="origin",Vu=60*1e3,zu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ei="https://www.googletagmanager.com/gtag/js";/**
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
 */const V=new pi("@firebase/analytics");/**
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
 */const Gu={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Y=new rn("analytics","Analytics",Gu);/**
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
 */function qu(t){if(!t.startsWith(Ei)){const e=Y.create("invalid-gtag-resource",{gtagURL:t});return V.warn(e.message),""}return t}function oo(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ku(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Yu(t,e){const n=Ku("firebase-js-sdk-policy",{createScriptURL:qu}),i=document.createElement("script"),s=`${Ei}?l=${t}&id=${e}`;i.src=n?n?.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Qu(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Xu(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await oo(n)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){V.error(a)}t("config",s,r)}async function Ju(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await oo(n);for(const l of o){const c=a.find(d=>d.measurementId===l),h=c&&e[c.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){V.error(r)}}function Zu(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await Ju(t,e,n,a,l)}else if(r==="config"){const[a,l]=o;await Xu(t,e,n,i,a,l)}else if(r==="consent"){const[a,l]=o;t("consent",a,l)}else if(r==="get"){const[a,l,c]=o;t("get",a,l,c)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){V.error(a)}}return s}function ed(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Zu(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function td(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ei)&&n.src.includes(t))return n;return null}/**
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
 */const nd=30,id=1e3;class sd{constructor(e={},n=id){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ao=new sd;function rd(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function od(t){const{appId:e,apiKey:n}=t,i={method:"GET",headers:rd(n)},s=zu.replace("{app-id}",e),r=await fetch(s,i);if(r.status!==200&&r.status!==304){let o="";try{const a=await r.json();a.error?.message&&(o=a.error.message)}catch{}throw Y.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function ad(t,e=ao,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Y.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Y.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ud;return setTimeout(async()=>{a.abort()},Vu),co({appId:i,apiKey:s,measurementId:r},o,a,e)}async function co(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=ao){const{appId:r,measurementId:o}=t;try{await cd(i,e)}catch(a){if(o)return V.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:r,measurementId:o};throw a}try{const a=await od(t);return s.deleteThrottleMetadata(r),a}catch(a){const l=a;if(!ld(l)){if(s.deleteThrottleMetadata(r),o)return V.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw a}const c=Number(l?.customData?.httpStatus)===503?_s(n,s.intervalMillis,nd):_s(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return s.setThrottleMetadata(r,h),V.debug(`Calling attemptFetch again in ${c} millis`),co(t,h,i,s)}}function cd(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(Y.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ld(t){if(!(t instanceof De)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ud{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function dd(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o={...i,send_to:r};t("event",n,o)}}async function hd(t,e,n,i){if(i&&i.global){const s={};for(const r of Object.keys(n))s[`user_properties.${r}`]=n[r];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
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
 */async function fd(){if(Dr())try{await Pr()}catch(t){return V.warn(Y.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return V.warn(Y.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function pd(t,e,n,i,s,r,o){const a=ad(t);a.then(u=>{n[u.measurementId]=u.appId,t.options.measurementId&&u.measurementId!==t.options.measurementId&&V.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${u.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(u=>V.error(u)),e.push(a);const l=fd().then(u=>{if(u)return i.getId()}),[c,h]=await Promise.all([a,l]);td(r)||Yu(r,c.measurementId),s("js",new Date);const d=o?.config??{};return d[Hu]="firebase",d.update=!0,h!=null&&(d[Wu]=h),s("config",c.measurementId,d),c.measurementId}/**
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
 */class md{constructor(e){this.app=e}_delete(){return delete Fe[this.app.options.appId],Promise.resolve()}}let Fe={},ks=[];const As={};let Tn="dataLayer",_d="gtag",Ns,bi,Rs=!1;function gd(){const t=[];if(Rc()&&t.push("This is a browser extension environment."),Pc()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=Y.create("invalid-analytics-context",{errorInfo:e});V.warn(n.message)}}function yd(t,e,n){gd();const i=t.options.appId;if(!i)throw Y.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)V.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Y.create("no-api-key");if(Fe[i]!=null)throw Y.create("already-exists",{id:i});if(!Rs){Qu(Tn);const{wrappedGtag:r,gtagCore:o}=ed(Fe,ks,As,Tn,_d);bi=r,Ns=o,Rs=!0}return Fe[i]=pd(t,ks,As,e,Ns,Tn,n),new md(t)}function vd(t=Br()){t=de(t);const e=bt(t,$t);return e.isInitialized()?e.getImmediate():Ed(t)}function Ed(t,e={}){const n=bt(t,$t);if(n.isInitialized()){const s=n.getImmediate();if(ft(e,n.getOptions()))return s;throw Y.create("already-initialized")}return n.initialize({options:e})}function bd(t,e,n){t=de(t),hd(bi,Fe[t.app.options.appId],e,n).catch(i=>V.error(i))}function wd(t,e,n,i){t=de(t),dd(bi,Fe[t.app.options.appId],e,n,i).catch(s=>V.error(s))}const xs="@firebase/analytics",Ds="0.10.19";function Cd(){_e(new oe($t,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return yd(i,s,n)},"PUBLIC")),_e(new oe("analytics-internal",t,"PRIVATE")),ie(xs,Ds),ie(xs,Ds,"esm2020");function t(e){try{const n=e.getProvider($t).getImmediate();return{logEvent:(i,s,r)=>wd(n,i,s,r),setUserProperties:(i,s)=>bd(n,i,s)}}catch(n){throw Y.create("interop-component-reg-failed",{reason:n})}}}Cd();var Ps={};const Os="@firebase/database",Ms="1.1.0";/**
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
 */let lo="";function Id(t){lo=t}/**
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
 */class Td{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),j(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ht(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Sd{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ue(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const uo=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Td(e)}}catch{}return new Sd},Ce=uo("localStorage"),kd=uo("sessionStorage");/**
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
 */const je=new pi("@firebase/database"),Ad=(function(){let t=1;return function(){return t++}})(),ho=function(t){const e=Uc(t),n=new $c;n.update(e);const i=n.digest();return di.encodeByteArray(i)},wt=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=wt.apply(null,i):typeof i=="object"?e+=j(i):e+=i,e+=" "}return e};let ot=null,Ls=!0;const Nd=function(t,e){m(!0,"Can't turn on custom loggers persistently."),je.logLevel=R.VERBOSE,ot=je.log.bind(je)},H=function(...t){if(Ls===!0&&(Ls=!1,ot===null&&kd.get("logging_enabled")===!0&&Nd()),ot){const e=wt.apply(null,t);ot(e)}},Ct=function(t){return function(...e){H(t,...e)}},Kn=function(...t){const e="FIREBASE INTERNAL ERROR: "+wt(...t);je.error(e)},ce=function(...t){const e=`FIREBASE FATAL ERROR: ${wt(...t)}`;throw je.error(e),new Error(e)},q=function(...t){const e="FIREBASE WARNING: "+wt(...t);je.warn(e)},Rd=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},xd=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},He="[MIN_NAME]",ke="[MAX_NAME]",Ye=function(t,e){if(t===e)return 0;if(t===He||e===ke)return-1;if(e===He||t===ke)return 1;{const n=Fs(t),i=Fs(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},Dd=function(t,e){return t===e?0:t<e?-1:1},et=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+j(e))},wi=function(t){if(typeof t!="object"||t===null)return j(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=j(e[i]),n+=":",n+=wi(t[e[i]]);return n+="}",n},po=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function K(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mo=function(t){m(!fo(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,l;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const h=c.join("");let d="";for(l=0;l<64;l+=8){let u=parseInt(h.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},Pd=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Od=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Md(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Ld=new RegExp("^-?(0*)\\d{1,10}$"),Fd=-2147483648,jd=2147483647,Fs=function(t){if(Ld.test(t)){const e=Number(t);if(e>=Fd&&e<=jd)return e}return null},Qe=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw q("Exception was thrown by user callback.",n),e},Math.floor(0))}},Bd=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},at=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class $d{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ul(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){q(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ud{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(H("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',q(e)}}class Pt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pt.OWNER="owner";/**
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
 */const Ci="5",_o="v",go="s",yo="r",vo="f",Eo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,bo="ls",wo="p",Yn="ac",Co="websocket",Io="long_polling";/**
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
 */class To{constructor(e,n,i,s,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ce.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ce.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Wd(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function So(t,e,n){m(typeof e=="string","typeof type must == string"),m(typeof n=="object","typeof params must == object");let i;if(e===Co)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Io)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Wd(t)&&(n.ns=t.namespace);const s=[];return K(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Hd{constructor(){this.counters_={}}incrementCounter(e,n=1){ue(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _c(this.counters_)}}/**
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
 */const Sn={},kn={};function Ii(t){const e=t.toString();return Sn[e]||(Sn[e]=new Hd),Sn[e]}function Vd(t,e){const n=t.toString();return kn[n]||(kn[n]=e()),kn[n]}/**
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
 */class zd{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Qe(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const js="start",Gd="close",qd="pLPCommand",Kd="pRTLPCB",ko="id",Ao="pw",No="ser",Yd="cb",Qd="seg",Xd="ts",Jd="d",Zd="dframe",Ro=1870,xo=30,eh=Ro-xo,th=25e3,nh=3e4;class Le{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ct(e),this.stats_=Ii(n),this.urlFn=l=>(this.appCheckToken&&(l[Yn]=this.appCheckToken),So(n,Io,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new zd(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nh)),xd(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ti((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===js)this.id=a,this.password=l;else if(o===Gd)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[js]="t",i[No]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Yd]=this.scriptTagHolder.uniqueCallbackIdentifier),i[_o]=Ci,this.transportSessionId&&(i[go]=this.transportSessionId),this.lastSessionId&&(i[bo]=this.lastSessionId),this.applicationId&&(i[wo]=this.applicationId),this.appCheckToken&&(i[Yn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Eo.test(location.hostname)&&(i[yo]=vo);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Le.forceAllow_=!0}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){return Le.forceAllow_?!0:!Le.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Pd()&&!Od()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=j(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=kr(n),s=po(i,eh);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Zd]="t",i[ko]=e,i[Ao]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=j(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ti{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ad(),window[qd+this.uniqueCallbackIdentifier]=e,window[Kd+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ti.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){H("frame writing exception"),a.stack&&H(a.stack),H(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||H("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ko]=this.myID,e[Ao]=this.myPW,e[No]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xo+i.length<=Ro;){const o=this.pendingSegs.shift();i=i+"&"+Qd+s+"="+o.seg+"&"+Xd+s+"="+o.ts+"&"+Jd+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(th)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{H("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const ih=16384,sh=45e3;let Ut=null;typeof MozWebSocket<"u"?Ut=MozWebSocket:typeof WebSocket<"u"&&(Ut=WebSocket);class J{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ct(this.connId),this.stats_=Ii(n),this.connURL=J.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[_o]=Ci,typeof location<"u"&&location.hostname&&Eo.test(location.hostname)&&(o[yo]=vo),n&&(o[go]=n),i&&(o[bo]=i),s&&(o[Yn]=s),r&&(o[wo]=r),So(e,Co,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ce.set("previous_websocket_failure",!0);try{let i;Dc(),this.mySock=new Ut(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){J.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ut!==null&&!J.forceDisallow_}static previouslyFailed(){return Ce.isInMemoryStorage||Ce.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ce.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ht(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=j(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=po(n,ih);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sh))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}J.responsesRequiredToBeHealthy=2;J.healthyTimeout=3e4;/**
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
 */class mt{static get ALL_TRANSPORTS(){return[Le,J]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=J&&J.isAvailable();let i=n&&!J.previouslyFailed();if(e.webSocketOnly&&(n||q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[J];else{const s=this.transports_=[];for(const r of mt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);mt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}mt.globalTransportInitialized_=!1;/**
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
 */const rh=6e4,oh=5e3,ah=10*1024,ch=100*1024,An="t",Bs="d",lh="s",$s="r",uh="e",Us="o",Ws="a",Hs="n",Vs="p",dh="h";class hh{constructor(e,n,i,s,r,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ct("c:"+this.id+":"),this.transportManager_=new mt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=at(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ch?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ah?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(An in e){const n=e[An];n===Ws?this.upgradeIfSecondaryHealthy_():n===$s?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Us&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=et("t",e),i=et("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vs,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ws,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Hs,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=et("t",e),i=et("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=et(An,e);if(Bs in e){const i=e[Bs];if(n===dh){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Hs){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lh?this.onConnectionShutdown_(i):n===$s?this.onReset_(i):n===uh?Kn("Server Error: "+i):n===Us?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kn("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ci!==i&&q("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),at(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):at(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vs,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ce.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Do{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Po{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Wt extends Po{static getInstance(){return new Wt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xr()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const zs=32,Gs=768;class N{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function A(){return new N("")}function w(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function ge(t){return t.pieces_.length-t.pieceNum_}function x(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new N(t.pieces_,e)}function Oo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fh(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Mo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Lo(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new N(e,0)}function M(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof N)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new N(n,0)}function T(t){return t.pieceNum_>=t.pieces_.length}function z(t,e){const n=w(t),i=w(e);if(n===null)return e;if(n===i)return z(x(t),x(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Si(t,e){if(ge(t)!==ge(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Z(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(ge(t)>ge(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class ph{constructor(e,n){this.errorPrefix_=n,this.parts_=Mo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=on(this.parts_[i]);Fo(this)}}function mh(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=on(e),Fo(t)}function _h(t){const e=t.parts_.pop();t.byteLength_-=on(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fo(t){if(t.byteLength_>Gs)throw new Error(t.errorPrefix_+"has a key path longer than "+Gs+" bytes ("+t.byteLength_+").");if(t.parts_.length>zs)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zs+") or object contains a cycle "+be(t))}function be(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ki extends Po{static getInstance(){return new ki}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const tt=1e3,gh=300*1e3,qs=30*1e3,yh=1.3,vh=3e4,Eh="server_kill",Ks=3;class re extends Do{constructor(e,n,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=re.nextPersistentConnectionId_++,this.log_=Ct("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=tt,this.maxReconnectDelay_=gh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ki.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Wt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_(j(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new sn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;re.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ue(e,"w")){const i=We(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();q(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qs)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Fc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+j(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Kn("Unrecognized action received from server: "+j(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=tt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=tt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vh&&(this.reconnectDelay_=tt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+re.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?H("getToken() completed but was canceled"):(H("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new hh(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,p=>{q(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Eh)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&q(d),l())}}}interrupt(e){H("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){H("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ps(this.interruptReasons_)&&(this.reconnectDelay_=tt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>wi(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new N(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){H("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ks&&(this.reconnectDelay_=qs,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){H("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ks&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+lo.replace(/\./g,"-")]=1,xr()?e["framework.cordova"]=1:xc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Wt.getInstance().currentlyOnline();return ps(this.interruptReasons_)&&e}}re.nextPersistentConnectionId_=0;re.nextConnectionId_=0;/**
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
 */class C{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new C(e,n)}}/**
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
 */class ln{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new C(He,e),s=new C(He,n);return this.compare(i,s)!==0}minPost(){return C.MIN}}/**
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
 */let At;class jo extends ln{static get __EMPTY_NODE(){return At}static set __EMPTY_NODE(e){At=e}compare(e,n){return Ye(e.name,n.name)}isDefinedOn(e){throw Ke("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return C.MIN}maxPost(){return new C(ke,At)}makePost(e,n){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new C(e,At)}toString(){return".key"}}const Be=new jo;/**
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
 */class Nt{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class F{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??F.RED,this.left=s??G.EMPTY_NODE,this.right=r??G.EMPTY_NODE}copy(e,n,i,s,r){return new F(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return G.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return G.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,F.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,F.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}F.RED=!0;F.BLACK=!1;class bh{copy(e,n,i,s,r){return this}insert(e,n,i){return new F(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class G{constructor(e,n=G.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new G(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,F.BLACK,null,null))}remove(e){return new G(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,F.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Nt(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Nt(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Nt(this.root_,null,this.comparator_,!0,e)}}G.EMPTY_NODE=new bh;/**
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
 */function wh(t,e){return Ye(t.name,e.name)}function Ai(t,e){return Ye(t,e)}/**
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
 */let Qn;function Ch(t){Qn=t}const Bo=function(t){return typeof t=="number"?"number:"+mo(t):"string:"+t},$o=function(t){if(t.isLeafNode()){const e=t.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ue(e,".sv"),"Priority must be a string or number.")}else m(t===Qn||t.isEmpty(),"priority of unexpected type.");m(t===Qn||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ys;class L{static set __childrenNodeConstructor(e){Ys=e}static get __childrenNodeConstructor(){return Ys}constructor(e,n=L.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$o(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new L(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:L.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return T(e)?this:w(e)===".priority"?this.priorityNode_:L.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:L.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=w(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||ge(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,L.__childrenNodeConstructor.EMPTY_NODE.updateChild(x(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Bo(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mo(this.value_):e+=this.value_,this.lazyHash_=ho(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===L.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof L.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=L.VALUE_TYPE_ORDER.indexOf(n),r=L.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+n),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}L.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Uo,Wo;function Ih(t){Uo=t}function Th(t){Wo=t}class Sh extends ln{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?Ye(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return C.MIN}maxPost(){return new C(ke,new L("[PRIORITY-POST]",Wo))}makePost(e,n){const i=Uo(e);return new C(n,new L("[PRIORITY-POST]",i))}toString(){return".priority"}}const P=new Sh;/**
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
 */const kh=Math.log(2);class Ah{constructor(e){const n=r=>parseInt(Math.log(r)/kh,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ht=function(t,e,n,i){t.sort(e);const s=function(l,c){const h=c-l;let d,u;if(h===0)return null;if(h===1)return d=t[l],u=n?n(d):d,new F(u,d.node,F.BLACK,null,null);{const p=parseInt(h/2,10)+l,_=s(l,p),E=s(p+1,c);return d=t[p],u=n?n(d):d,new F(u,d.node,F.BLACK,_,E)}},r=function(l){let c=null,h=null,d=t.length;const u=function(_,E){const k=d-_,U=d;d-=_;const y=s(k+1,U),I=t[k],O=n?n(I):I;p(new F(O,I.node,E,null,y))},p=function(_){c?(c.left=_,c=_):(h=_,c=_)};for(let _=0;_<l.count;++_){const E=l.nextBitIsOne(),k=Math.pow(2,l.count-(_+1));E?u(k,F.BLACK):(u(k,F.BLACK),u(k,F.RED))}return h},o=new Ah(t.length),a=r(o);return new G(i||e,a)};/**
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
 */let Nn;const Me={};class se{static get Default(){return m(Me&&P,"ChildrenNode.ts has not been loaded"),Nn=Nn||new se({".priority":Me},{".priority":P}),Nn}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=We(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof G?n:null}hasIndex(e){return ue(this.indexSet_,e.toString())}addIndex(e,n){m(e!==Be,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(C.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Ht(i,e.getCompare()):a=Me;const l=e.toString(),c={...this.indexSet_};c[l]=e;const h={...this.indexes_};return h[l]=a,new se(h,c)}addToIndexes(e,n){const i=Ft(this.indexes_,(s,r)=>{const o=We(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===Me)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(C.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ht(a,o.getCompare())}else return Me;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new C(e.name,a))),l.insert(e,e.node)}});return new se(i,this.indexSet_)}removeFromIndexes(e,n){const i=Ft(this.indexes_,s=>{if(s===Me)return s;{const r=n.get(e.name);return r?s.remove(new C(e.name,r)):s}});return new se(i,this.indexSet_)}}/**
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
 */let nt;class v{static get EMPTY_NODE(){return nt||(nt=new v(new G(Ai),null,se.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&$o(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||nt}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?nt:n}}getChild(e){const n=w(e);return n===null?this:this.getImmediateChild(n).getChild(x(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(m(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new C(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?nt:this.priorityNode_;return new v(s,o,r)}}updateChild(e,n){const i=w(e);if(i===null)return n;{m(w(e)!==".priority"||ge(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(x(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(P,(o,a)=>{n[o]=a.val(e),i++,r&&v.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Bo(this.getPriority().val())+":"),this.forEachChild(P,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":ho(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new C(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new C(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new C(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,C.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,C.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===It?-1:0}withIndex(e){if(e===Be||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Be||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(P),s=n.getIterator(P);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Be?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Nh extends v{constructor(){super(new G(Ai),v.EMPTY_NODE,se.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const It=new Nh;Object.defineProperties(C,{MIN:{value:new C(He,v.EMPTY_NODE)},MAX:{value:new C(ke,It)}});jo.__EMPTY_NODE=v.EMPTY_NODE;L.__childrenNodeConstructor=v;Ch(It);Th(It);/**
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
 */const Rh=!0;function $(t,e=null){if(t===null)return v.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new L(n,$(e))}if(!(t instanceof Array)&&Rh){const n=[];let i=!1;if(K(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=$(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new C(o,l)))}}),n.length===0)return v.EMPTY_NODE;const r=Ht(n,wh,o=>o.name,Ai);if(i){const o=Ht(n,P.getCompare());return new v(r,$(e),new se({".priority":o},{".priority":P}))}else return new v(r,$(e),se.Default)}else{let n=v.EMPTY_NODE;return K(t,(i,s)=>{if(ue(t,i)&&i.substring(0,1)!=="."){const r=$(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority($(e))}}Ih($);/**
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
 */class xh extends ln{constructor(e){super(),this.indexPath_=e,m(!T(e)&&w(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?Ye(e.name,n.name):r}makePost(e,n){const i=$(e),s=v.EMPTY_NODE.updateChild(this.indexPath_,i);return new C(n,s)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,It);return new C(ke,e)}toString(){return Mo(this.indexPath_,0).join("/")}}/**
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
 */class Dh extends ln{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Ye(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return C.MIN}maxPost(){return C.MAX}makePost(e,n){const i=$(e);return new C(n,i)}toString(){return".value"}}const Ph=new Dh;/**
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
 */function Ho(t){return{type:"value",snapshotNode:t}}function Ve(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _t(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function gt(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Oh(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Ni{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(_t(n,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ve(n,i)):o.trackChildChange(gt(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(P,(s,r)=>{n.hasChild(s)||i.trackChildChange(_t(s,r))}),n.isLeafNode()||n.forEachChild(P,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(gt(s,r,o))}else i.trackChildChange(Ve(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class yt{constructor(e){this.indexedFilter_=new Ni(e.getIndex()),this.index_=e.getIndex(),this.startPost_=yt.getStartPost_(e),this.endPost_=yt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new C(n,i))||(i=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=v.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(v.EMPTY_NODE);const r=this;return n.forEachChild(P,(o,a)=>{r.matches(new C(o,a))||(s=s.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Mh{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new yt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new C(n,i))||(i=v.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,p)=>d(p,u)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new C(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let u=s.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===n||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const p=u==null?1:o(u,l);if(h&&!i.isEmpty()&&p>=0)return r?.trackChildChange(gt(n,i,d)),a.updateImmediateChild(n,i);{r?.trackChildChange(_t(n,d));const E=a.updateImmediateChild(n,v.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r?.trackChildChange(Ve(u.name,u.node)),E.updateImmediateChild(u.name,u.node)):E}}else return i.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(_t(c.name,c.node)),r.trackChildChange(Ve(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
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
 */class Ri{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=P}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:He}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ke}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===P}copy(){const e=new Ri;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Lh(t){return t.loadsAllData()?new Ni(t.getIndex()):t.hasLimit()?new Mh(t):new yt(t)}function Qs(t){const e={};if(t.isDefault())return e;let n;if(t.index_===P?n="$priority":t.index_===Ph?n="$value":t.index_===Be?n="$key":(m(t.index_ instanceof xh,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=j(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=j(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+j(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=j(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+j(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Xs(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==P&&(e.i=t.index_.toString()),e}/**
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
 */class Vt extends Do{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ct("p:rest:"),this.listens_={}}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Vt.getListenId_(e,i),a={};this.listens_[o]=a;const l=Qs(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),We(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",s(u,null)}})}unlisten(e,n){const i=Vt.getListenId_(e,n);delete this.listens_[i]}get(e){const n=Qs(e._queryParams),i=e._path.toString(),s=new sn;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Bc(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ht(a.responseText)}catch{q("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&q("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Fh{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function zt(){return{value:null,children:new Map}}function Vo(t,e,n){if(T(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=w(e);t.children.has(i)||t.children.set(i,zt());const s=t.children.get(i);e=x(e),Vo(s,e,n)}}function Xn(t,e,n){t.value!==null?n(e,t.value):jh(t,(i,s)=>{const r=new N(e.toString()+"/"+i);Xn(s,r,n)})}function jh(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Bh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&K(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const Js=10*1e3,$h=30*1e3,Uh=300*1e3;class Wh{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Bh(e);const i=Js+($h-Js)*Math.random();at(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;K(e,(s,r)=>{r>0&&ue(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),at(this.reportStats_.bind(this),Math.floor(Math.random()*2*Uh))}}/**
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
 */var ee;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ee||(ee={}));function zo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Di(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Gt{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=ee.ACK_USER_WRITE,this.source=zo()}operationForChild(e){if(T(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new N(e));return new Gt(A(),n,this.revert)}}else return m(w(this.path)===e,"operationForChild called for unrelated child."),new Gt(x(this.path),this.affectedTree,this.revert)}}/**
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
 */class vt{constructor(e,n){this.source=e,this.path=n,this.type=ee.LISTEN_COMPLETE}operationForChild(e){return T(this.path)?new vt(this.source,A()):new vt(this.source,x(this.path))}}/**
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
 */class Ae{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=ee.OVERWRITE}operationForChild(e){return T(this.path)?new Ae(this.source,A(),this.snap.getImmediateChild(e)):new Ae(this.source,x(this.path),this.snap)}}/**
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
 */class Et{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=ee.MERGE}operationForChild(e){if(T(this.path)){const n=this.children.subtree(new N(e));return n.isEmpty()?null:n.value?new Ae(this.source,A(),n.value):new Et(this.source,A(),n)}else return m(w(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Et(this.source,x(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ne{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(T(e))return this.isFullyInitialized()&&!this.filtered_;const n=w(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Hh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Vh(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Oh(o.childName,o.snapshotNode))}),it(t,s,"child_removed",e,i,n),it(t,s,"child_added",e,i,n),it(t,s,"child_moved",r,i,n),it(t,s,"child_changed",e,i,n),it(t,s,"value",e,i,n),s}function it(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,l)=>Gh(t,a,l)),o.forEach(a=>{const l=zh(t,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function zh(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Gh(t,e,n){if(e.childName==null||n.childName==null)throw Ke("Should only compare child_ events.");const i=new C(e.childName,e.snapshotNode),s=new C(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function un(t,e){return{eventCache:t,serverCache:e}}function ct(t,e,n,i){return un(new Ne(e,n,i),t.serverCache)}function Go(t,e,n,i){return un(t.eventCache,new Ne(e,n,i))}function Jn(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Re(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Rn;const qh=()=>(Rn||(Rn=new G(Dd)),Rn);class D{static fromObject(e){let n=new D(null);return K(e,(i,s)=>{n=n.set(new N(i),s)}),n}constructor(e,n=qh()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:A(),value:this.value};if(T(e))return null;{const i=w(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(x(e),n);return r!=null?{path:M(new N(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(T(e))return this;{const n=w(e),i=this.children.get(n);return i!==null?i.subtree(x(e)):new D(null)}}set(e,n){if(T(e))return new D(n,this.children);{const i=w(e),r=(this.children.get(i)||new D(null)).set(x(e),n),o=this.children.insert(i,r);return new D(this.value,o)}}remove(e){if(T(e))return this.children.isEmpty()?new D(null):new D(null,this.children);{const n=w(e),i=this.children.get(n);if(i){const s=i.remove(x(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new D(null):new D(this.value,r)}else return this}}get(e){if(T(e))return this.value;{const n=w(e),i=this.children.get(n);return i?i.get(x(e)):null}}setTree(e,n){if(T(e))return n;{const i=w(e),r=(this.children.get(i)||new D(null)).setTree(x(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new D(this.value,o)}}fold(e){return this.fold_(A(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(M(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,A(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(T(e))return null;{const r=w(e),o=this.children.get(r);return o?o.findOnPath_(x(e),M(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,A(),n)}foreachOnPath_(e,n,i){if(T(e))return this;{this.value&&i(n,this.value);const s=w(e),r=this.children.get(s);return r?r.foreachOnPath_(x(e),M(n,s),i):new D(null)}}foreach(e){this.foreach_(A(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(M(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class te{constructor(e){this.writeTree_=e}static empty(){return new te(new D(null))}}function lt(t,e,n){if(T(e))return new te(new D(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=z(s,e);return r=r.updateChild(o,n),new te(t.writeTree_.set(s,r))}else{const s=new D(n),r=t.writeTree_.setTree(e,s);return new te(r)}}}function Zs(t,e,n){let i=t;return K(n,(s,r)=>{i=lt(i,M(e,s),r)}),i}function er(t,e){if(T(e))return te.empty();{const n=t.writeTree_.setTree(e,new D(null));return new te(n)}}function Zn(t,e){return Pe(t,e)!=null}function Pe(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(z(n.path,e)):null}function tr(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(P,(i,s)=>{e.push(new C(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new C(i,s.value))}),e}function me(t,e){if(T(e))return t;{const n=Pe(t,e);return n!=null?new te(new D(n)):new te(t.writeTree_.subtree(e))}}function ei(t){return t.writeTree_.isEmpty()}function ze(t,e){return qo(A(),t.writeTree_,e)}function qo(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=qo(M(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(M(t,".priority"),i)),n}}/**
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
 */function Pi(t,e){return Xo(e,t)}function Kh(t,e,n,i,s){m(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=lt(t.visibleWrites,e,n)),t.lastWriteId=i}function Yh(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Qh(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);m(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Xh(a,i.path)?s=!1:Z(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Jh(t),!0;if(i.snap)t.visibleWrites=er(t.visibleWrites,i.path);else{const a=i.children;K(a,l=>{t.visibleWrites=er(t.visibleWrites,M(i.path,l))})}return!0}else return!1}function Xh(t,e){if(t.snap)return Z(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Z(M(t.path,n),e))return!0;return!1}function Jh(t){t.visibleWrites=Ko(t.allWrites,Zh,A()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Zh(t){return t.visible}function Ko(t,e,n){let i=te.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)Z(n,o)?(a=z(n,o),i=lt(i,a,r.snap)):Z(o,n)&&(a=z(o,n),i=lt(i,A(),r.snap.getChild(a)));else if(r.children){if(Z(n,o))a=z(n,o),i=Zs(i,a,r.children);else if(Z(o,n))if(a=z(o,n),T(a))i=Zs(i,A(),r.children);else{const l=We(r.children,w(a));if(l){const c=l.getChild(x(a));i=lt(i,A(),c)}}}else throw Ke("WriteRecord should have .snap or .children")}}return i}function Yo(t,e,n,i,s){if(!i&&!s){const r=Pe(t.visibleWrites,e);if(r!=null)return r;{const o=me(t.visibleWrites,e);if(ei(o))return n;if(n==null&&!Zn(o,A()))return null;{const a=n||v.EMPTY_NODE;return ze(o,a)}}}else{const r=me(t.visibleWrites,e);if(!s&&ei(r))return n;if(!s&&n==null&&!Zn(r,A()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(Z(c.path,e)||Z(e,c.path))},a=Ko(t.allWrites,o,e),l=n||v.EMPTY_NODE;return ze(a,l)}}}function ef(t,e,n){let i=v.EMPTY_NODE;const s=Pe(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(P,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=me(t.visibleWrites,e);return n.forEachChild(P,(o,a)=>{const l=ze(me(r,new N(o)),a);i=i.updateImmediateChild(o,l)}),tr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=me(t.visibleWrites,e);return tr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function tf(t,e,n,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=M(e,n);if(Zn(t.visibleWrites,r))return null;{const o=me(t.visibleWrites,r);return ei(o)?s.getChild(n):ze(o,s.getChild(n))}}function nf(t,e,n,i){const s=M(e,n),r=Pe(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=me(t.visibleWrites,s);return ze(o,i.getNode().getImmediateChild(n))}else return null}function sf(t,e){return Pe(t.visibleWrites,e)}function rf(t,e,n,i,s,r,o){let a;const l=me(t.visibleWrites,e),c=Pe(l,A());if(c!=null)a=c;else if(n!=null)a=ze(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=u.getNext();for(;p&&h.length<s;)d(p,i)!==0&&h.push(p),p=u.getNext();return h}else return[]}function of(){return{visibleWrites:te.empty(),allWrites:[],lastWriteId:-1}}function qt(t,e,n,i){return Yo(t.writeTree,t.treePath,e,n,i)}function Oi(t,e){return ef(t.writeTree,t.treePath,e)}function nr(t,e,n,i){return tf(t.writeTree,t.treePath,e,n,i)}function Kt(t,e){return sf(t.writeTree,M(t.treePath,e))}function af(t,e,n,i,s,r){return rf(t.writeTree,t.treePath,e,n,i,s,r)}function Mi(t,e,n){return nf(t.writeTree,t.treePath,e,n)}function Qo(t,e){return Xo(M(t.treePath,e),t.writeTree)}function Xo(t,e){return{treePath:t,writeTree:e}}/**
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
 */class cf{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;m(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,gt(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,_t(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Ve(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,gt(i,e.snapshotNode,s.oldSnap));else throw Ke("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class lf{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const Jo=new lf;class Li{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ne(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Mi(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Re(this.viewCache_),r=af(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function uf(t){return{filter:t}}function df(t,e){m(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hf(t,e,n,i,s){const r=new cf;let o,a;if(n.type===ee.OVERWRITE){const c=n;c.source.fromUser?o=ti(t,e,c.path,c.snap,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!T(c.path),o=Yt(t,e,c.path,c.snap,i,s,a,r))}else if(n.type===ee.MERGE){const c=n;c.source.fromUser?o=pf(t,e,c.path,c.children,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ni(t,e,c.path,c.children,i,s,a,r))}else if(n.type===ee.ACK_USER_WRITE){const c=n;c.revert?o=gf(t,e,c.path,i,s,r):o=mf(t,e,c.path,c.affectedTree,i,s,r)}else if(n.type===ee.LISTEN_COMPLETE)o=_f(t,e,n.path,i,r);else throw Ke("Unknown operation type: "+n.type);const l=r.getChanges();return ff(e,o,l),{viewCache:o,changes:l}}function ff(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Jn(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(Ho(Jn(e)))}}function Zo(t,e,n,i,s,r){const o=e.eventCache;if(Kt(i,n)!=null)return e;{let a,l;if(T(n))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Re(e),h=c instanceof v?c:v.EMPTY_NODE,d=Oi(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=qt(i,Re(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=w(n);if(c===".priority"){m(ge(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=nr(i,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=x(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=nr(i,n,o.getNode(),l);u!=null?d=o.getNode().getImmediateChild(c).updateChild(h,u):d=o.getNode().getImmediateChild(c)}else d=Mi(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,h,s,r):a=o.getNode()}}return ct(e,a,o.isFullyInitialized()||T(n),t.filter.filtersNodes())}}function Yt(t,e,n,i,s,r,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(T(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),p,null)}else{const p=w(n);if(!l.isCompleteForPath(n)&&ge(n)>1)return e;const _=x(n),k=l.getNode().getImmediateChild(p).updateChild(_,i);p===".priority"?c=h.updatePriority(l.getNode(),k):c=h.updateChild(l.getNode(),p,k,_,Jo,null)}const d=Go(e,c,l.isFullyInitialized()||T(n),h.filtersNodes()),u=new Li(s,d,r);return Zo(t,d,n,s,u,a)}function ti(t,e,n,i,s,r,o){const a=e.eventCache;let l,c;const h=new Li(s,e,r);if(T(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=ct(e,c,!0,t.filter.filtersNodes());else{const d=w(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=ct(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=x(n),p=a.getNode().getImmediateChild(d);let _;if(T(u))_=i;else{const E=h.getCompleteChild(d);E!=null?Oo(u)===".priority"&&E.getChild(Lo(u)).isEmpty()?_=E:_=E.updateChild(u,i):_=v.EMPTY_NODE}if(p.equals(_))l=e;else{const E=t.filter.updateChild(a.getNode(),d,_,u,h,o);l=ct(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ir(t,e){return t.eventCache.isCompleteForChild(e)}function pf(t,e,n,i,s,r,o){let a=e;return i.foreach((l,c)=>{const h=M(n,l);ir(e,w(h))&&(a=ti(t,a,h,c,s,r,o))}),i.foreach((l,c)=>{const h=M(n,l);ir(e,w(h))||(a=ti(t,a,h,c,s,r,o))}),a}function sr(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function ni(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;T(n)?c=i:c=new D(null).setTree(n,i);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(h.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),_=sr(t,p,u);l=Yt(t,l,new N(d),_,s,r,o,a)}}),c.children.inorderTraversal((d,u)=>{const p=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!h.hasChild(d)&&!p){const _=e.serverCache.getNode().getImmediateChild(d),E=sr(t,_,u);l=Yt(t,l,new N(d),E,s,r,o,a)}}),l}function mf(t,e,n,i,s,r,o){if(Kt(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(T(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Yt(t,e,n,l.getNode().getChild(n),s,r,a,o);if(T(n)){let c=new D(null);return l.getNode().forEachChild(Be,(h,d)=>{c=c.set(new N(h),d)}),ni(t,e,n,c,s,r,a,o)}else return e}else{let c=new D(null);return i.foreach((h,d)=>{const u=M(n,h);l.isCompleteForPath(u)&&(c=c.set(h,l.getNode().getChild(u)))}),ni(t,e,n,c,s,r,a,o)}}function _f(t,e,n,i,s){const r=e.serverCache,o=Go(e,r.getNode(),r.isFullyInitialized()||T(n),r.isFiltered());return Zo(t,o,n,i,Jo,s)}function gf(t,e,n,i,s,r){let o;if(Kt(i,n)!=null)return e;{const a=new Li(i,e,s),l=e.eventCache.getNode();let c;if(T(n)||w(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=qt(i,Re(e));else{const d=e.serverCache.getNode();m(d instanceof v,"serverChildren would be complete if leaf node"),h=Oi(i,d)}h=h,c=t.filter.updateFullNode(l,h,r)}else{const h=w(n);let d=Mi(i,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=t.filter.updateChild(l,h,d,x(n),a,r):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,v.EMPTY_NODE,x(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=qt(i,Re(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Kt(i,A())!=null,ct(e,c,o,t.filter.filtersNodes())}}/**
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
 */class yf{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ni(i.getIndex()),r=Lh(i);this.processor_=uf(r);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),h=new Ne(l,o.isFullyInitialized(),s.filtersNodes()),d=new Ne(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=un(d,h),this.eventGenerator_=new Hh(this.query_)}get query(){return this.query_}}function vf(t){return t.viewCache_.serverCache.getNode()}function Ef(t,e){const n=Re(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!T(e)&&!n.getImmediateChild(w(e)).isEmpty())?n.getChild(e):null}function rr(t){return t.eventRegistrations_.length===0}function bf(t,e){t.eventRegistrations_.push(e)}function or(t,e,n){const i=[];if(n){m(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function ar(t,e,n,i){e.type===ee.MERGE&&e.source.queryId!==null&&(m(Re(t.viewCache_),"We should always have a full cache before handling merges"),m(Jn(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=hf(t.processor_,s,e,n,i);return df(t.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,ea(t,r.changes,r.viewCache.eventCache.getNode(),null)}function wf(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(P,(r,o)=>{i.push(Ve(r,o))}),n.isFullyInitialized()&&i.push(Ho(n.getNode())),ea(t,i,n.getNode(),e)}function ea(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Vh(t.eventGenerator_,e,n,s)}/**
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
 */let Qt;class Cf{constructor(){this.views=new Map}}function If(t){m(!Qt,"__referenceConstructor has already been defined"),Qt=t}function Tf(){return m(Qt,"Reference.ts has not been loaded"),Qt}function Sf(t){return t.views.size===0}function Fi(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),ar(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(ar(o,e,n,i));return r}}function kf(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=qt(n,s?i:null),l=!1;a?l=!0:i instanceof v?(a=Oi(n,i),l=!1):(a=v.EMPTY_NODE,l=!1);const c=un(new Ne(a,l,!1),new Ne(i,s,!1));return new yf(e,c)}return o}function Af(t,e,n,i,s,r){const o=kf(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),bf(o,n),wf(o,n)}function Nf(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=ye(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(or(c,n,i)),rr(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(or(l,n,i)),rr(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ye(t)&&r.push(new(Tf())(e._repo,e._path)),{removed:r,events:o}}function ta(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $e(t,e){let n=null;for(const i of t.views.values())n=n||Ef(i,e);return n}function na(t,e){if(e._queryParams.loadsAllData())return dn(t);{const i=e._queryIdentifier;return t.views.get(i)}}function ia(t,e){return na(t,e)!=null}function ye(t){return dn(t)!=null}function dn(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Xt;function Rf(t){m(!Xt,"__referenceConstructor has already been defined"),Xt=t}function xf(){return m(Xt,"Reference.ts has not been loaded"),Xt}let Df=1;class cr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new D(null),this.pendingWriteTree_=of(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function sa(t,e,n,i,s){return Kh(t.pendingWriteTree_,e,n,i,s),s?Tt(t,new Ae(zo(),e,n)):[]}function Ie(t,e,n=!1){const i=Yh(t.pendingWriteTree_,e);if(Qh(t.pendingWriteTree_,e)){let r=new D(null);return i.snap!=null?r=r.set(A(),!0):K(i.children,o=>{r=r.set(new N(o),!0)}),Tt(t,new Gt(i.path,r,n))}else return[]}function hn(t,e,n){return Tt(t,new Ae(xi(),e,n))}function Pf(t,e,n){const i=D.fromObject(n);return Tt(t,new Et(xi(),e,i))}function Of(t,e){return Tt(t,new vt(xi(),e))}function Mf(t,e,n){const i=Bi(t,n);if(i){const s=$i(i),r=s.path,o=s.queryId,a=z(r,e),l=new vt(Di(o),a);return Ui(t,r,l)}else return[]}function ii(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ia(o,e))){const l=Nf(o,e,n,i);Sf(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const h=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(u,p)=>ye(p));if(h&&!d){const u=t.syncPointTree_.subtree(r);if(!u.isEmpty()){const p=jf(u);for(let _=0;_<p.length;++_){const E=p[_],k=E.query,U=aa(t,E);t.listenProvider_.startListening(ut(k),Jt(t,k),U.hashFn,U.onComplete)}}}!d&&c.length>0&&!i&&(h?t.listenProvider_.stopListening(ut(e),null):c.forEach(u=>{const p=t.queryToTagMap.get(fn(u));t.listenProvider_.stopListening(ut(u),p)}))}Bf(t,c)}return a}function Lf(t,e,n,i){const s=Bi(t,i);if(s!=null){const r=$i(s),o=r.path,a=r.queryId,l=z(o,e),c=new Ae(Di(a),l,n);return Ui(t,o,c)}else return[]}function Ff(t,e,n,i){const s=Bi(t,i);if(s){const r=$i(s),o=r.path,a=r.queryId,l=z(o,e),c=D.fromObject(n),h=new Et(Di(a),l,c);return Ui(t,o,h)}else return[]}function lr(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(u,p)=>{const _=z(u,s);r=r||$e(p,_),o=o||ye(p)});let a=t.syncPointTree_.get(s);a?(o=o||ye(a),r=r||$e(a,A())):(a=new Cf,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,_)=>{const E=$e(_,A());E&&(r=r.updateImmediateChild(p,E))}));const c=ia(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=fn(e);m(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const p=$f();t.queryToTagMap.set(u,p),t.tagToQueryMap.set(p,u)}const h=Pi(t.pendingWriteTree_,s);let d=Af(a,e,n,h,r,l);if(!c&&!o&&!i){const u=na(a,e);d=d.concat(Uf(t,e,u))}return d}function ji(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=z(o,e),c=$e(a,l);if(c)return c});return Yo(s,e,r,n,!0)}function Tt(t,e){return ra(e,t.syncPointTree_,null,Pi(t.pendingWriteTree_,A()))}function ra(t,e,n,i){if(T(t.path))return oa(t,e,n,i);{const s=e.get(A());n==null&&s!=null&&(n=$e(s,A()));let r=[];const o=w(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=Qo(i,o);r=r.concat(ra(a,l,c,h))}return s&&(r=r.concat(Fi(s,t,i,n))),r}}function oa(t,e,n,i){const s=e.get(A());n==null&&s!=null&&(n=$e(s,A()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Qo(i,o),h=t.operationForChild(o);h&&(r=r.concat(oa(h,a,l,c)))}),s&&(r=r.concat(Fi(s,t,i,n))),r}function aa(t,e){const n=e.query,i=Jt(t,n);return{hashFn:()=>(vf(e)||v.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Mf(t,n._path,i):Of(t,n._path);{const r=Md(s,n);return ii(t,n,null,r)}}}}function Jt(t,e){const n=fn(e);return t.queryToTagMap.get(n)}function fn(t){return t._path.toString()+"$"+t._queryIdentifier}function Bi(t,e){return t.tagToQueryMap.get(e)}function $i(t){const e=t.indexOf("$");return m(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new N(t.substr(0,e))}}function Ui(t,e,n){const i=t.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const s=Pi(t.pendingWriteTree_,e);return Fi(i,n,s,null)}function jf(t){return t.fold((e,n,i)=>{if(n&&ye(n))return[dn(n)];{let s=[];return n&&(s=ta(n)),K(i,(r,o)=>{s=s.concat(o)}),s}})}function ut(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(xf())(t._repo,t._path):t}function Bf(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=fn(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function $f(){return Df++}function Uf(t,e,n){const i=e._path,s=Jt(t,e),r=aa(t,n),o=t.listenProvider_.startListening(ut(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)m(!ye(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,d)=>{if(!T(c)&&h&&ye(h))return[dn(h).query];{let u=[];return h&&(u=u.concat(ta(h).map(p=>p.query))),K(d,(p,_)=>{u=u.concat(_)}),u}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(ut(h),Jt(t,h))}}return o}/**
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
 */class Wi{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Wi(n)}node(){return this.node_}}class Hi{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=M(this.path_,e);return new Hi(this.syncTree_,n)}node(){return ji(this.syncTree_,this.path_)}}const Wf=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},ur=function(t,e,n){if(!t||typeof t!="object")return t;if(m(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Hf(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Vf(t[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Hf=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:m(!1,"Unexpected server value: "+t)}},Vf=function(t,e,n){t.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const s=e.node();if(m(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},zf=function(t,e,n,i){return Vi(e,new Hi(n,t),i)},ca=function(t,e,n){return Vi(t,new Wi(e),n)};function Vi(t,e,n){const i=t.getPriority().val(),s=ur(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=ur(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new L(a,$(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new L(s))),o.forEachChild(P,(a,l)=>{const c=Vi(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class zi{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Gi(t,e){let n=e instanceof N?e:new N(e),i=t,s=w(n);for(;s!==null;){const r=We(i.node.children,s)||{children:{},childCount:0};i=new zi(s,i,r),n=x(n),s=w(n)}return i}function Xe(t){return t.node.value}function la(t,e){t.node.value=e,si(t)}function ua(t){return t.node.childCount>0}function Gf(t){return Xe(t)===void 0&&!ua(t)}function pn(t,e){K(t.node.children,(n,i)=>{e(new zi(n,t,i))})}function da(t,e,n,i){n&&e(t),pn(t,s=>{da(s,e,!0)})}function qf(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function St(t){return new N(t.parent===null?t.name:St(t.parent)+"/"+t.name)}function si(t){t.parent!==null&&Kf(t.parent,t.name,t)}function Kf(t,e,n){const i=Gf(n),s=ue(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,si(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,si(t))}/**
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
 */const Yf=/[\[\].#$\/\u0000-\u001F\u007F]/,Qf=/[\[\].#$\u0000-\u001F\u007F]/,xn=10*1024*1024,ha=function(t){return typeof t=="string"&&t.length!==0&&!Yf.test(t)},fa=function(t){return typeof t=="string"&&t.length!==0&&!Qf.test(t)},Xf=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fa(t)},pa=function(t,e,n,i){i&&e===void 0||qi(fi(t,"value"),e,n)},qi=function(t,e,n){const i=n instanceof N?new ph(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+be(i));if(typeof e=="function")throw new Error(t+"contains a function "+be(i)+" with contents = "+e.toString());if(fo(e))throw new Error(t+"contains "+e.toString()+" "+be(i));if(typeof e=="string"&&e.length>xn/3&&on(e)>xn)throw new Error(t+"contains a string greater than "+xn+" utf8 bytes "+be(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(K(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!ha(o)))throw new Error(t+" contains an invalid key ("+o+") "+be(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mh(i,o),qi(t,a,i),_h(i)}),s&&r)throw new Error(t+' contains ".value" child '+be(i)+" in addition to actual children.")}},ma=function(t,e,n,i){if(!fa(n))throw new Error(fi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Jf=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ma(t,e,n)},_a=function(t,e){if(w(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Zf=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ha(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Xf(n))throw new Error(fi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ep{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ki(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Si(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function ga(t,e,n){Ki(t,n),ya(t,i=>Si(i,e))}function le(t,e,n){Ki(t,n),ya(t,i=>Z(i,e)||Z(e,i))}function ya(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(tp(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function tp(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();ot&&H("event: "+n.toString()),Qe(i)}}}/**
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
 */const np="repo_interrupt",ip=25;class sp{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ep,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zt(),this.transactionQueueTree_=new zi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rp(t,e,n){if(t.stats_=Ii(t.repoInfo_),t.forceRestClient_||Bd())t.server_=new Vt(t.repoInfo_,(i,s,r,o)=>{dr(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>hr(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{j(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new re(t.repoInfo_,e,(i,s,r,o)=>{dr(t,i,s,r,o)},i=>{hr(t,i)},i=>{op(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Vd(t.repoInfo_,()=>new Wh(t.stats_,t.server_)),t.infoData_=new Fh,t.infoSyncTree_=new cr({startListening:(i,s,r,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=hn(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Qi(t,"connected",!1),t.serverSyncTree_=new cr({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);le(t.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function va(t){const n=t.infoData_.getNode(new N(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Yi(t){return Wf({timestamp:va(t)})}function dr(t,e,n,i,s){t.dataUpdateCount++;const r=new N(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const l=Ft(n,c=>$(c));o=Ff(t.serverSyncTree_,r,l,s)}else{const l=$(n);o=Lf(t.serverSyncTree_,r,l,s)}else if(i){const l=Ft(n,c=>$(c));o=Pf(t.serverSyncTree_,r,l)}else{const l=$(n);o=hn(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=mn(t,r)),le(t.eventQueue_,a,o)}function hr(t,e){Qi(t,"connected",e),e===!1&&cp(t)}function op(t,e){K(e,(n,i)=>{Qi(t,n,i)})}function Qi(t,e,n){const i=new N("/.info/"+e),s=$(n);t.infoData_.updateSnapshot(i,s);const r=hn(t.infoSyncTree_,i,s);le(t.eventQueue_,i,r)}function Ea(t){return t.nextWriteId_++}function ap(t,e,n,i,s){Xi(t,"set",{path:e.toString(),value:n,priority:i});const r=Yi(t),o=$(n,i),a=ji(t.serverSyncTree_,e),l=ca(o,a,r),c=Ea(t),h=sa(t.serverSyncTree_,e,l,c,!0);Ki(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(u,p)=>{const _=u==="ok";_||q("set at "+e+" failed: "+u);const E=Ie(t.serverSyncTree_,c,!_);le(t.eventQueue_,e,E),hp(t,s,u,p)});const d=Ta(t,e);mn(t,d),le(t.eventQueue_,d,[])}function cp(t){Xi(t,"onDisconnectEvents");const e=Yi(t),n=zt();Xn(t.onDisconnect_,A(),(s,r)=>{const o=zf(s,r,t.serverSyncTree_,e);Vo(n,s,o)});let i=[];Xn(n,A(),(s,r)=>{i=i.concat(hn(t.serverSyncTree_,s,r));const o=Ta(t,s);mn(t,o)}),t.onDisconnect_=zt(),le(t.eventQueue_,A(),i)}function lp(t,e,n){let i;w(e._path)===".info"?i=lr(t.infoSyncTree_,e,n):i=lr(t.serverSyncTree_,e,n),ga(t.eventQueue_,e._path,i)}function up(t,e,n){let i;w(e._path)===".info"?i=ii(t.infoSyncTree_,e,n):i=ii(t.serverSyncTree_,e,n),ga(t.eventQueue_,e._path,i)}function dp(t){t.persistentConnection_&&t.persistentConnection_.interrupt(np)}function Xi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),H(n,...e)}function hp(t,e,n,i){e&&Qe(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function ba(t,e,n){return ji(t.serverSyncTree_,e,n)||v.EMPTY_NODE}function Ji(t,e=t.transactionQueueTree_){if(e||_n(t,e),Xe(e)){const n=Ca(t,e);m(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&fp(t,St(e),n)}else ua(e)&&pn(e,n=>{Ji(t,n)})}function fp(t,e,n){const i=n.map(c=>c.currentWriteId),s=ba(t,e,i);let r=s;const o=s.hash();for(let c=0;c<n.length;c++){const h=n[c];m(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=z(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Xi(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let u=0;u<n.length;u++)n[u].status=2,h=h.concat(Ie(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&d.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();_n(t,Gi(t.transactionQueueTree_,e)),Ji(t,t.transactionQueueTree_),le(t.eventQueue_,e,h);for(let u=0;u<d.length;u++)Qe(d[u])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{q("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}mn(t,e)}},o)}function mn(t,e){const n=wa(t,e),i=St(n),s=Ca(t,n);return pp(t,s,i),i}function pp(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=z(n,l.path);let h=!1,d;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,s=s.concat(Ie(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ip)h=!0,d="maxretry",s=s.concat(Ie(t.serverSyncTree_,l.currentWriteId,!0));else{const u=ba(t,l.path,o);l.currentInputSnapshot=u;const p=e[a].update(u.val());if(p!==void 0){qi("transaction failed: Data returned ",p,l.path);let _=$(p);typeof p=="object"&&p!=null&&ue(p,".priority")||(_=_.updatePriority(u.getPriority()));const k=l.currentWriteId,U=Yi(t),y=ca(_,u,U);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=y,l.currentWriteId=Ea(t),o.splice(o.indexOf(k),1),s=s.concat(sa(t.serverSyncTree_,l.path,y,l.currentWriteId,l.applyLocally)),s=s.concat(Ie(t.serverSyncTree_,k,!0))}else h=!0,d="nodata",s=s.concat(Ie(t.serverSyncTree_,l.currentWriteId,!0))}le(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}_n(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Qe(i[a]);Ji(t,t.transactionQueueTree_)}function wa(t,e){let n,i=t.transactionQueueTree_;for(n=w(e);n!==null&&Xe(i)===void 0;)i=Gi(i,n),e=x(e),n=w(e);return i}function Ca(t,e){const n=[];return Ia(t,e,n),n.sort((i,s)=>i.order-s.order),n}function Ia(t,e,n){const i=Xe(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);pn(e,s=>{Ia(t,s,n)})}function _n(t,e){const n=Xe(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,la(e,n.length>0?n:void 0)}pn(e,i=>{_n(t,i)})}function Ta(t,e){const n=St(wa(t,e)),i=Gi(t.transactionQueueTree_,e);return qf(i,s=>{Dn(t,s)}),Dn(t,i),da(i,s=>{Dn(t,s)}),n}function Dn(t,e){const n=Xe(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(m(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Ie(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?la(e,void 0):n.length=r+1,le(t.eventQueue_,St(e),s);for(let o=0;o<i.length;o++)Qe(i[o])}}/**
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
 */function mp(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function _p(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):q(`Invalid query segment '${n}' in query '${t}'`)}return e}const fr=function(t,e){const n=gp(t),i=n.namespace;n.domain==="firebase.com"&&ce(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&ce("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Rd();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new To(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new N(n.pathString)}},gp=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=mp(t.substring(h,d)));const u=_p(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=i}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const pr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",yp=(function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=pr.charAt(n%64),n=Math.floor(n/64);m(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=pr.charAt(e[s]);return m(o.length===20,"nextPushId: Length should be 20."),o}})();/**
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
 */class vp{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+j(this.snapshot.exportVal())}}class Ep{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class bp{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Zi{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return T(this._path)?null:Oo(this._path)}get ref(){return new ve(this._repo,this._path)}get _queryIdentifier(){const e=Xs(this._queryParams),n=wi(e);return n==="{}"?"default":n}get _queryObject(){return Xs(this._queryParams)}isEqual(e){if(e=de(e),!(e instanceof Zi))return!1;const n=this._repo===e._repo,i=Si(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+fh(this._path)}}class ve extends Zi{constructor(e,n){super(e,n,new Ri,!1)}get parent(){const e=Lo(this._path);return e===null?null:new ve(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Zt{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new N(e),i=Ge(this.ref,e);return new Zt(this._node.getChild(n),i,P)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Zt(s,Ge(this.ref,i),P)))}hasChild(e){const n=new N(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function es(t,e){return t=de(t),t._checkNotDeleted("ref"),e!==void 0?Ge(t._root,e):t._root}function Ge(t,e){return t=de(t),w(t._path)===null?Jf("child","path",e):ma("child","path",e),new ve(t._repo,M(t._path,e))}function wp(t,e){t=de(t),_a("push",t._path),pa("push",e,t._path,!0);const n=va(t._repo),i=yp(n),s=Ge(t,i),r=Ge(t,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Sa(t,e){t=de(t),_a("set",t._path),pa("set",e,t._path,!1);const n=new sn;return ap(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class ts{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Ep(this,e,n):null}createEvent(e,n){m(e.childName!=null,"Child events should have a childName.");const i=Ge(new ve(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new vp(e.type,this,new Zt(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ts?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Cp(t,e,n,i,s){const r=new bp(n,void 0),o=new ts(e,r);return lp(t._repo,t,o),()=>up(t._repo,t,o)}function Ip(t,e,n,i){return Cp(t,"child_added",e)}If(ve);Rf(ve);/**
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
 */const Tp="FIREBASE_DATABASE_EMULATOR_HOST",ri={};let Sp=!1;function kp(t,e,n,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=hi(r);t.repoInfo_=new To(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function Ap(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||ce("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),H("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fr(r,s),a=o.repoInfo,l;typeof process<"u"&&Ps&&(l=Ps[Tp]),l?(r=`http://${l}?ns=${a.namespace}`,o=fr(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Ud(t.name,t.options,e);Zf("Invalid Firebase Database URL",o),T(o.path)||ce("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Rp(a,t,c,new $d(t,n));return new xp(h,t)}function Np(t,e){const n=ri[e];(!n||n[t.key]!==t)&&ce(`Database ${e}(${t.repoInfo_}) has already been deleted.`),dp(t),delete n[t.key]}function Rp(t,e,n,i){let s=ri[e.name];s||(s={},ri[e.name]=s);let r=s[t.toURLString()];return r&&ce("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new sp(t,Sp,n,i),s[t.toURLString()]=r,r}let xp=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ve(this._repo,A())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Np(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ce("Cannot call "+e+" on a deleted database.")}};function Dp(t=Br(),e){const n=bt(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=Cc("database");i&&Pp(n,...i)}return n}function Pp(t,e,n,i={}){t=de(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&ft(i,r.repoInfo_.emulatorOptions))return;ce("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&ce('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Pt(Pt.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:Tc(i.mockUserToken,t.app.options.projectId);o=new Pt(a)}hi(e)&&(Ic(e),Ac("Database",!0)),kp(r,s,i,o)}/**
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
 */function Op(t){Id(Vl),_e(new oe("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ap(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),ie(Os,Ms,t),ie(Os,Ms,"esm2020")}/**
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
 */const Mp={".sv":"timestamp"};function ka(){return Mp}re.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};re.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Op();const Lp={apiKey:"AIzaSyD9821q_YpfGHH9ZFPBXgVXQSyxbAfSGvk",authDomain:"aera-3f59e.firebaseapp.com",projectId:"aera-3f59e",storageBucket:"aera-3f59e.firebasestorage.app",messagingSenderId:"533520508445",appId:"1:533520508445:web:a0906e788e0d6e524888f4",measurementId:"G-J7K9HKBL6K",databaseURL:"https://aera-3f59e-default-rtdb.firebaseio.com"},Aa=jr(Lp);vd(Aa);const ns=Dp(Aa);window.addEventListener("DOMContentLoaded",function(){document.getElementById("Typing-Region").focus()});document.getElementById("send").addEventListener("click",Na);document.getElementById("Typing-Region").addEventListener("keypress",t=>{t.key==="Enter"&&(t.preventDefault(),Na())});function Na(){const t=document.getElementById("Typing-Region").innerText.trim();t!==""&&jp(t).then(e=>null)}document.querySelector("form").addEventListener("submit",async t=>{t.preventDefault();const e=document.querySelector("input").value.trim();if(e){const n=Fp();sessionStorage.setItem("userId",n),sessionStorage.setItem("userName",e);const i=es(ns,`users/${n}`);await Sa(i,{username:e,userId:n,online:!0,lastActive:ka()}),alert(`Welcome ${e}! You are now logged in.`),document.getElementsByClassName("FirstView")[0].style.display="none",document.querySelector("main").style.display="block",Bp()}});function Fp(){if(crypto?.randomUUID)return crypto.randomUUID();if(crypto?.getRandomValues){const t=new Uint32Array(4);return crypto.getRandomValues(t),t.join("-")}else return"user-"+Math.floor(Math.random()*1e6)}async function jp(t){const e=wp(es(ns,"Messages")),n={userID:sessionStorage.getItem("userId"),userName:sessionStorage.getItem("userName"),msg:t,timeStamp:ka()};await Sa(e,n),console.log("Message sent successfully")}function Bp(){const t=es(ns,"Messages");Ip(t,e=>{const n=e.val();$p(n)})}function $p(t){var e;t.userID===sessionStorage.getItem("userId")?e=`You : ${t.msg}`:e=`${t.userName} : ${t.msg}`;const n=document.createElement("div");n.classList.add("NewMessage"),n.textContent=e,document.getElementById("Chat-Box").appendChild(n),document.getElementById("Typing-Region").innerText="",document.getElementById("Typing-Region").focus()}function Rt(t){if(typeof t!="string"||!t)throw new Error("expected a non-empty string, got: "+t)}function Pn(t){if(typeof t!="number")throw new Error("expected a number, got: "+t)}const Up=1,Wp=1,Oe="emoji",qe="keyvalue",is="favorites",Hp="tokens",Ra="tokens",Vp="unicode",xa="count",zp="group",Gp="order",Da="group-order",oi="eTag",en="url",mr="skinTone",Je="readonly",ss="readwrite",Pa="skinUnicodes",qp="skinUnicodes",Kp="https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",Yp="en";function Qp(t,e){const n=new Set,i=[];for(const s of t){const r=e(s);n.has(r)||(n.add(r),i.push(s))}return i}function _r(t){return Qp(t,e=>e.unicode)}function Xp(t){function e(n,i,s){const r=i?t.createObjectStore(n,{keyPath:i}):t.createObjectStore(n);if(s)for(const[o,[a,l]]of Object.entries(s))r.createIndex(o,a,{multiEntry:l});return r}e(qe),e(Oe,Vp,{[Ra]:[Hp,!0],[Da]:[[zp,Gp]],[Pa]:[qp,!0]}),e(is,void 0,{[xa]:[""]})}const ai={},Ot={},tn={};function Oa(t,e,n){n.onerror=()=>e(n.error),n.onblocked=()=>e(new Error("IDB blocked")),n.onsuccess=()=>t(n.result)}async function Jp(t){const e=await new Promise((n,i)=>{const s=indexedDB.open(t,Up);ai[t]=s,s.onupgradeneeded=r=>{r.oldVersion<Wp&&Xp(s.result)},Oa(n,i,s)});return e.onclose=()=>rs(t),e}function Zp(t){return Ot[t]||(Ot[t]=Jp(t)),Ot[t]}function he(t,e,n,i){return new Promise((s,r)=>{const o=t.transaction(e,n,{durability:"relaxed"}),a=typeof e=="string"?o.objectStore(e):e.map(c=>o.objectStore(c));let l;i(a,o,c=>{l=c}),o.oncomplete=()=>s(l),o.onerror=()=>r(o.error)})}function rs(t){const e=ai[t],n=e&&e.result;if(n){n.close();const i=tn[t];if(i)for(const s of i)s()}delete ai[t],delete Ot[t],delete tn[t]}function em(t){return new Promise((e,n)=>{rs(t);const i=indexedDB.deleteDatabase(t);Oa(e,n,i)})}function tm(t,e){let n=tn[t];n||(n=tn[t]=[]),n.push(e)}const nm=new Set([":D","XD",":'D","O:)",":X",":P",";P","XP",":L",":Z",":j","8D","XO","8)",":B",":O",":S",":'o","Dx","X(","D:",":C",">0)",":3","</3","<3","\\M/",":E","8#"]);function Ue(t){return t.split(/[\s_]+/).map(e=>!e.match(/\w/)||nm.has(e)?e.toLowerCase():e.replace(/[)(:,]/g,"").replace(/’/g,"'").toLowerCase()).filter(Boolean)}const im=2;function Ma(t){return t.filter(Boolean).map(e=>e.toLowerCase()).filter(e=>e.length>=im)}function sm(t){return t.map(({annotation:n,emoticon:i,group:s,order:r,shortcodes:o,skins:a,tags:l,emoji:c,version:h})=>{const d=[...new Set(Ma([...(o||[]).map(Ue).flat(),...(l||[]).map(Ue).flat(),...Ue(n),i]))].sort(),u={annotation:n,group:s,order:r,tags:l,tokens:d,unicode:c,version:h};if(i&&(u.emoticon=i),o&&(u.shortcodes=o),a){u.skinTones=[],u.skinUnicodes=[],u.skinVersions=[];for(const{tone:p,emoji:_,version:E}of a)u.skinTones.push(p),u.skinUnicodes.push(_),u.skinVersions.push(E)}return u})}function La(t,e,n,i){t[e](n).onsuccess=s=>i&&i(s.target.result)}function xe(t,e,n){La(t,"get",e,n)}function Fa(t,e,n){La(t,"getAll",e,n)}function os(t){t.commit&&t.commit()}function rm(t,e){let n=t[0];for(let i=1;i<t.length;i++){const s=t[i];e(n)>e(s)&&(n=s)}return n}function ja(t,e){const n=rm(t,s=>s.length),i=[];for(const s of n)t.some(r=>r.findIndex(o=>e(o)===e(s))===-1)||i.push(s);return i}async function om(t){return!await as(t,qe,en)}async function am(t,e,n){const[i,s]=await Promise.all([oi,en].map(r=>as(t,qe,r)));return i===n&&s===e}async function cm(t,e){return he(t,Oe,Je,(i,s,r)=>{let o;const a=()=>{i.getAll(o&&IDBKeyRange.lowerBound(o,!0),50).onsuccess=l=>{const c=l.target.result;for(const h of c)if(o=h.unicode,e(h))return r(h);if(c.length<50)return r();a()}};a()})}async function Ba(t,e,n,i){try{const s=sm(e);await he(t,[Oe,qe],ss,([r,o],a)=>{let l,c,h=0;function d(){++h===2&&u()}function u(){if(!(l===i&&c===n)){r.clear();for(const p of s)r.put(p);o.put(i,oi),o.put(n,en),os(a)}}xe(o,oi,p=>{l=p,d()}),xe(o,en,p=>{c=p,d()})})}finally{}}async function lm(t,e){return he(t,Oe,Je,(n,i,s)=>{const r=IDBKeyRange.bound([e,0],[e+1,0],!1,!0);Fa(n.index(Da),r,s)})}async function $a(t,e){const n=Ma(Ue(e));return n.length?he(t,Oe,Je,(i,s,r)=>{const o=[],a=()=>{o.length===n.length&&l()},l=()=>{const c=ja(o,h=>h.unicode);r(c.sort((h,d)=>h.order<d.order?-1:1))};for(let c=0;c<n.length;c++){const h=n[c],d=c===n.length-1?IDBKeyRange.bound(h,h+"￿",!1,!0):IDBKeyRange.only(h);Fa(i.index(Ra),d,u=>{o.push(u),a()})}}):[]}async function um(t,e){const n=await $a(t,e);return n.length?n.filter(i=>(i.shortcodes||[]).map(r=>r.toLowerCase()).includes(e.toLowerCase()))[0]||null:await cm(t,s=>(s.shortcodes||[]).includes(e.toLowerCase()))||null}async function dm(t,e){return he(t,Oe,Je,(n,i,s)=>xe(n,e,r=>{if(r)return s(r);xe(n.index(Pa),e,o=>s(o||null))}))}function as(t,e,n){return he(t,e,Je,(i,s,r)=>xe(i,n,r))}function hm(t,e,n,i){return he(t,e,ss,(s,r)=>{s.put(i,n),os(r)})}function fm(t,e){return he(t,is,ss,(n,i)=>xe(n,e,s=>{n.put((s||0)+1,e),os(i)}))}function pm(t,e,n){return n===0?[]:he(t,[is,Oe],Je,([i,s],r,o)=>{const a=[];i.index(xa).openCursor(void 0,"prev").onsuccess=l=>{const c=l.target.result;if(!c)return o(a);function h(p){if(a.push(p),a.length===n)return o(a);c.continue()}const d=c.primaryKey,u=e.byName(d);if(u)return h(u);xe(s,d,p=>{if(p)return h(p);c.continue()})}})}const xt="";function mm(t,e){const n=new Map;for(const s of t){const r=e(s);for(const o of r){let a=n;for(let c=0;c<o.length;c++){const h=o.charAt(c);let d=a.get(h);d||(d=new Map,a.set(h,d)),a=d}let l=a.get(xt);l||(l=[],a.set(xt,l)),l.push(s)}}return(s,r)=>{let o=n;for(let c=0;c<s.length;c++){const h=s.charAt(c),d=o.get(h);if(d)o=d;else return[]}if(r)return o.get(xt)||[];const a=[],l=[o];for(;l.length;){const h=[...l.shift().entries()].sort((d,u)=>d[0]<u[0]?-1:1);for(const[d,u]of h)d===xt?a.push(...u):l.push(u)}return a}}const _m=["name","url"];function gm(t){const e=t&&Array.isArray(t),n=e&&t.length&&(!t[0]||_m.some(i=>!(i in t[0])));if(!e||n)throw new Error("Custom emojis are in the wrong format")}function gr(t){gm(t);const e=(u,p)=>u.name.toLowerCase()<p.name.toLowerCase()?-1:1,n=t.sort(e),s=mm(t,u=>{const p=new Set;if(u.shortcodes)for(const _ of u.shortcodes)for(const E of Ue(_))p.add(E);return p}),r=u=>s(u,!0),o=u=>s(u,!1),a=u=>{const p=Ue(u),_=p.map((E,k)=>(k<p.length-1?r:o)(E));return ja(_,E=>E.name).sort(e)},l=new Map,c=new Map;for(const u of t){c.set(u.name.toLowerCase(),u);for(const p of u.shortcodes||[])l.set(p.toLowerCase(),u)}return{all:n,search:a,byShortcode:u=>l.get(u.toLowerCase()),byName:u=>c.get(u.toLowerCase())}}const ym=typeof wrappedJSObject<"u";function st(t){if(!t)return t;if(ym&&(t=structuredClone(t)),delete t.tokens,t.skinTones){const e=t.skinTones.length;t.skins=Array(e);for(let n=0;n<e;n++)t.skins[n]={tone:t.skinTones[n],unicode:t.skinUnicodes[n],version:t.skinVersions[n]};delete t.skinTones,delete t.skinUnicodes,delete t.skinVersions}return t}function Ua(t){t||console.warn("emoji-picker-element is more efficient if the dataSource server exposes an ETag header.")}const vm=["annotation","emoji","group","order","version"];function Em(t){if(!t||!Array.isArray(t)||!t[0]||typeof t[0]!="object"||vm.some(e=>!(e in t[0])))throw new Error("Emoji data is in the wrong format")}function Wa(t,e){if(Math.floor(t.status/100)!==2)throw new Error("Failed to fetch: "+e+":  "+t.status)}async function bm(t){const e=await fetch(t,{method:"HEAD"});Wa(e,t);const n=e.headers.get("etag");return Ua(n),n}async function ci(t){const e=await fetch(t);Wa(e,t);const n=e.headers.get("etag");Ua(n);const i=await e.json();return Em(i),[n,i]}function wm(t){for(var e="",n=new Uint8Array(t),i=n.byteLength,s=-1;++s<i;)e+=String.fromCharCode(n[s]);return e}function Cm(t){for(var e=t.length,n=new ArrayBuffer(e),i=new Uint8Array(n),s=-1;++s<e;)i[s]=t.charCodeAt(s);return n}async function Ha(t){const e=JSON.stringify(t);let n=Cm(e);const i=await crypto.subtle.digest("SHA-1",n),s=wm(i);return btoa(s)}async function Im(t,e){let n,i=await bm(e);if(!i){const s=await ci(e);i=s[0],n=s[1],i||(i=await Ha(n))}await am(t,e,i)||(n||(n=(await ci(e))[1]),await Ba(t,n,e,i))}async function Tm(t,e){let[n,i]=await ci(e);n||(n=await Ha(i)),await Ba(t,i,e,n)}async function Sm(t,e){try{await Im(t,e)}catch(n){if(n.name!=="InvalidStateError")throw n}}class km{constructor({dataSource:e=Kp,locale:n=Yp,customEmoji:i=[]}={}){this.dataSource=e,this.locale=n,this._dbName=`emoji-picker-element-${this.locale}`,this._db=void 0,this._lazyUpdate=void 0,this._custom=gr(i),this._clear=this._clear.bind(this),this._ready=this._init()}async _init(){const e=this._db=await Zp(this._dbName);tm(this._dbName,this._clear);const n=this.dataSource;await om(e)?await Tm(e,n):this._lazyUpdate=Sm(e,n)}async ready(){const e=async()=>(this._ready||(this._ready=this._init()),this._ready);await e(),this._db||await e()}async getEmojiByGroup(e){return Pn(e),await this.ready(),_r(await lm(this._db,e)).map(st)}async getEmojiBySearchQuery(e){Rt(e),await this.ready();const n=this._custom.search(e),i=_r(await $a(this._db,e)).map(st);return[...n,...i]}async getEmojiByShortcode(e){Rt(e),await this.ready();const n=this._custom.byShortcode(e);return n||st(await um(this._db,e))}async getEmojiByUnicodeOrName(e){Rt(e),await this.ready();const n=this._custom.byName(e);return n||st(await dm(this._db,e))}async getPreferredSkinTone(){return await this.ready(),await as(this._db,qe,mr)||0}async setPreferredSkinTone(e){return Pn(e),await this.ready(),hm(this._db,qe,mr,e)}async incrementFavoriteEmojiCount(e){return Rt(e),await this.ready(),fm(this._db,e)}async getTopFavoriteEmoji(e){return Pn(e),await this.ready(),(await pm(this._db,this._custom,e)).map(st)}set customEmoji(e){this._custom=gr(e)}get customEmoji(){return this._custom.all}async _shutdown(){await this.ready();try{await this._lazyUpdate}catch{}}_clear(){this._db=this._ready=this._lazyUpdate=void 0}async close(){await this._shutdown(),await rs(this._dbName)}async delete(){await this._shutdown(),await em(this._dbName)}}const li=[[-1,"✨","custom"],[0,"😀","smileys-emotion"],[1,"👋","people-body"],[3,"🐱","animals-nature"],[4,"🍎","food-drink"],[5,"🏠️","travel-places"],[6,"⚽","activities"],[7,"📝","objects"],[8,"⛔️","symbols"],[9,"🏁","flags"]].map(([t,e,n])=>({id:t,emoji:e,name:n})),On=li.slice(1),Am=2,yr=6,Va=typeof requestIdleCallback=="function"?requestIdleCallback:setTimeout;function vr(t){return t.unicode.includes("‍")}const Nm={"🫩":16,"🫨":15.1,"🫠":14,"🥲":13.1,"🥻":12.1,"🥰":11,"🤩":5,"👱‍♀️":4,"🤣":3,"👁️‍🗨️":2,"😀":1,"😐️":.7,"😃":.6},Rm=1e3,xm="🖐️",Dm=8,Pm=["😊","😒","❤️","👍️","😍","😂","😭","☺️","😔","😩","😏","💕","🙌","😘"],za='"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif',Om=(t,e)=>t<e?-1:t>e?1:0,Er=(t,e)=>{const n=document.createElement("canvas");n.width=n.height=1;const i=n.getContext("2d",{willReadFrequently:!0});return i.textBaseline="top",i.font=`100px ${za}`,i.fillStyle=e,i.scale(.01,.01),i.fillText(t,0,0),i.getImageData(0,0,1,1).data},Mm=(t,e)=>{const n=[...t].join(","),i=[...e].join(",");return n===i&&!n.startsWith("0,0,0,")};function Lm(t){const e=Er(t,"#000"),n=Er(t,"#fff");return e&&n&&Mm(e,n)}function Fm(){const t=Object.entries(Nm);try{for(const[e,n]of t)if(Lm(e))return n}catch{}finally{}return t[0][1]}let Mn;const Ln=()=>(Mn||(Mn=new Promise(t=>Va(()=>t(Fm())))),Mn),ui=new Map,jm="️",Bm="\uD83C",$m="‍",Um=127995,Wm=57339;function Hm(t,e){if(e===0)return t;const n=t.indexOf($m);return n!==-1?t.substring(0,n)+String.fromCodePoint(Um+e-1)+t.substring(n):(t.endsWith(jm)&&(t=t.substring(0,t.length-1)),t+Bm+String.fromCodePoint(Wm+e-1))}function ne(t){t.preventDefault(),t.stopPropagation()}function Fn(t,e,n){return e+=t?-1:1,e<0?e=n.length-1:e>=n.length&&(e=0),e}function Ga(t,e){const n=new Set,i=[];for(const s of t){const r=e(s);n.has(r)||(n.add(r),i.push(s))}return i}function Vm(t,e){const n=i=>{const s={};for(const r of i)typeof r.tone=="number"&&r.version<=e&&(s[r.tone]=r.unicode);return s};return t.map(({unicode:i,skins:s,shortcodes:r,url:o,name:a,category:l,annotation:c})=>({unicode:i,name:a,shortcodes:r,url:o,category:l,annotation:c,id:i||a,skins:s&&n(s)}))}const Mt=requestAnimationFrame;let zm=typeof ResizeObserver=="function";function Gm(t,e,n){let i;zm?(i=new ResizeObserver(n),i.observe(t)):Mt(n),e.addEventListener("abort",()=>{i&&i.disconnect()})}function br(t){{const e=document.createRange();return e.selectNode(t.firstChild),e.getBoundingClientRect().width}}let jn;function qm(t,e,n){let i=!0;for(const s of t){const r=n(s);if(!r)continue;const o=br(r);typeof jn>"u"&&(jn=br(e));const a=o/1.8<jn;ui.set(s.unicode,a),a||(i=!1)}return i}function Km(t){return Ga(t,e=>e)}function Ym(t){t&&(t.scrollTop=0)}function dt(t,e,n){let i=t.get(e);return i||(i=n(),t.set(e,i)),i}function wr(t){return""+t}function Qm(t){const e=document.createElement("template");return e.innerHTML=t,e}const Xm=new WeakMap,Jm=new WeakMap,Zm=Symbol("un-keyed"),e_="replaceChildren"in Element.prototype;function t_(t,e){e_?t.replaceChildren(...e):(t.innerHTML="",t.append(...e))}function n_(t,e){let n=t.firstChild,i=0;for(;n;){if(e[i]!==n)return!0;n=n.nextSibling,i++}return i!==e.length}function i_(t,e){const{targetNode:n}=e;let{targetParentNode:i}=e,s=!1;i?s=n_(i,t):(s=!0,e.targetNode=void 0,e.targetParentNode=i=n.parentNode),s&&t_(i,t)}function s_(t,e){for(const n of e){const{targetNode:i,currentExpression:s,binding:{expressionIndex:r,attributeName:o,attributeValuePre:a,attributeValuePost:l}}=n,c=t[r];if(s!==c)if(n.currentExpression=c,o)if(c===null)i.removeAttribute(o);else{const h=a+wr(c)+l;i.setAttribute(o,h)}else{let h;Array.isArray(c)?i_(c,n):c instanceof Element?(h=c,i.replaceWith(h)):i.nodeValue=wr(c),h&&(n.targetNode=h)}}}function r_(t){let e="",n=!1,i=!1,s=-1;const r=new Map,o=[];let a=0;for(let c=0,h=t.length;c<h;c++){const d=t[c];if(e+=d.slice(a),c===h-1)break;for(let y=0;y<d.length;y++)switch(d.charAt(y)){case"<":{d.charAt(y+1)==="/"?o.pop():(n=!0,o.push(++s));break}case">":{n=!1,i=!1;break}case"=":{i=!0;break}}const u=o[o.length-1],p=dt(r,u,()=>[]);let _,E,k;if(i){const y=/(\S+)="?([^"=]*)$/.exec(d);_=y[1],E=y[2];const I=/^([^">]*)("?)/.exec(t[c+1]);k=I[1],e=e.slice(0,-1*y[0].length),a=I[0].length}else a=0;const U={attributeName:_,attributeValuePre:E,attributeValuePost:k,expressionIndex:c};p.push(U),!n&&!i&&(e+=" ")}return{template:Qm(e),elementsToBindings:r}}function Cr(t,e,n){for(let i=0;i<t.length;i++){const s=t[i],r=s.attributeName?e:e.firstChild,o={binding:s,targetNode:r,targetParentNode:void 0,currentExpression:void 0};n.push(o)}}function o_(t,e){const n=[];let i;if(e.size===1&&(i=e.get(0)))Cr(i,t,n);else{const s=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);let r=t,o=-1;do{const a=e.get(++o);a&&Cr(a,r,n)}while(r=s.nextNode())}return n}function a_(t){const{template:e,elementsToBindings:n}=dt(Xm,t,()=>r_(t)),i=e.cloneNode(!0).content.firstElementChild,s=o_(i,n);return function(o){return s_(o,s),i}}function c_(t){const e=dt(Jm,t,()=>new Map);let n=Zm;function i(r,...o){const a=dt(e,r,()=>new Map);return dt(a,n,()=>a_(r))(o)}function s(r,o,a){return r.map((l,c)=>{const h=n;n=a(l);try{return o(l,c)}finally{n=h}})}return{map:s,html:i}}function l_(t,e,n,i,s,r,o,a,l){const{labelWithSkin:c,titleForEmoji:h,unicodeWithSkin:d}=n,{html:u,map:p}=c_(e);function _(y,I,O){return p(y,(Q,Ze)=>u`<button role="${I?"option":"menuitem"}" aria-selected="${I?Ze===e.activeSearchItem:null}" aria-label="${c(Q,e.currentSkinTone)}" title="${h(Q)}" class="${"emoji"+(I&&Ze===e.activeSearchItem?" active":"")+(Q.unicode?"":" custom-emoji")}" id="${`${O}-${Q.id}`}" style="${Q.unicode?null:`--custom-emoji-background: url(${JSON.stringify(Q.url)})`}">${Q.unicode?d(Q,e.currentSkinTone):""}</button>`,Q=>`${O}-${Q.id}`)}const k=u`<section data-ref="rootElement" class="picker" aria-label="${e.i18n.regionLabel}" style="${e.pickerStyle||""}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${e.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!!(e.searchMode&&e.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${e.activeSearchItemId?`emo-${e.activeSearchItemId}`:null}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${e.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${e.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${e.skinTonePickerExpandedAfterAnimation?"expanded":""}"><button id="skintone-button" class="emoji ${e.skinTonePickerExpanded?"hide-focus":""}" aria-label="${e.skinToneButtonLabel}" title="${e.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${e.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${e.skinToneButtonText||""}</button></div><span id="skintone-description" class="sr-only">${e.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${e.skinTonePickerExpanded?"":"hidden no-animate"}" style="transform:translateY(${e.skinTonePickerExpanded?0:"calc(-1 * var(--num-skintones) * var(--total-emoji-size))"})" role="listbox" aria-label="${e.i18n.skinTonesLabel}" aria-activedescendant="skintone-${e.activeSkinTone}" aria-hidden="${!e.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${p(e.skinTones,(y,I)=>u`<div id="skintone-${I}" class="emoji ${I===e.activeSkinTone?"active":""}" aria-selected="${I===e.activeSkinTone}" role="option" title="${e.i18n.skinTones[I]}" aria-label="${e.i18n.skinTones[I]}">${y}</div>`,y=>y)}</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${e.groups.length},1fr)" aria-label="${e.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${p(e.groups,y=>u`<button role="tab" class="nav-button" aria-controls="tab-${y.id}" aria-label="${e.i18n.categories[y.name]}" aria-selected="${!e.searchMode&&e.currentGroup.id===y.id}" title="${e.i18n.categories[y.name]}" data-group-id="${y.id}"><div class="nav-emoji emoji">${y.emoji}</div></button>`,y=>y.id)}</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${(e.isRtl?-1:1)*e.currentGroupIndex*100}%)"></div></div><div class="message ${e.message?"":"gone"}" role="alert" aria-live="polite">${e.message||""}</div><div data-ref="tabpanelElement" class="tabpanel ${!e.databaseLoaded||e.message?"gone":""}" role="${e.searchMode?"region":"tabpanel"}" aria-label="${e.searchMode?e.i18n.searchResultsLabel:e.i18n.categories[e.currentGroup.name]}" id="${e.searchMode?null:`tab-${e.currentGroup.id}`}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${p(e.currentEmojisWithCategories,(y,I)=>u`<div><div id="menu-label-${I}" class="category ${e.currentEmojisWithCategories.length===1&&e.currentEmojisWithCategories[0].category===""?"gone":""}" aria-hidden="true">${e.searchMode?e.i18n.searchResultsLabel:y.category?y.category:e.currentEmojisWithCategories.length>1?e.i18n.categories.custom:e.i18n.categories[e.currentGroup.name]}</div><div class="emoji-menu ${I!==0&&!e.searchMode&&e.currentGroup.id===-1?"visibility-auto":""}" style="${`--num-rows: ${Math.ceil(y.emojis.length/e.numColumns)}`}" data-action="updateOnIntersection" role="${e.searchMode?"listbox":"menu"}" aria-labelledby="menu-label-${I}" id="${e.searchMode?"search-results":null}">${_(y.emojis,e.searchMode,"emo")}</div></div>`,y=>y.category)}</div></div><div class="favorites onscreen emoji-menu ${e.message?"gone":""}" role="menu" aria-label="${e.i18n.favoritesLabel}" data-on-click="onEmojiClick">${_(e.currentFavorites,!1,"fav")}</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`,U=(y,I)=>{for(const O of t.querySelectorAll(`[${y}]`))I(O,O.getAttribute(y))};if(l){t.appendChild(k);for(const y of["click","focusout","input","keydown","keyup"])U(`data-on-${y}`,(I,O)=>{I.addEventListener(y,i[O])});U("data-ref",(y,I)=>{r[I]=y}),o.addEventListener("abort",()=>{t.removeChild(k)})}U("data-action",(y,I)=>{let O=a.get(I);O||a.set(I,O=new WeakSet),O.has(y)||(O.add(y),s[I](y))})}const nn=typeof queueMicrotask=="function"?queueMicrotask:t=>Promise.resolve().then(t);function u_(t){let e=!1,n;const i=new Map,s=new Set;let r;const o=()=>{if(e)return;const c=[...s];s.clear();try{for(const h of c)h()}finally{r=!1,s.size&&(r=!0,nn(o))}},a=new Proxy({},{get(c,h){if(n){let d=i.get(h);d||(d=new Set,i.set(h,d)),d.add(n)}return c[h]},set(c,h,d){if(c[h]!==d){c[h]=d;const u=i.get(h);if(u){for(const p of u)s.add(p);r||(r=!0,nn(o))}}return!0}}),l=c=>{const h=()=>{const d=n;n=h;try{return c()}finally{n=d}};return h()};return t.addEventListener("abort",()=>{e=!0}),{state:a,createEffect:l}}function Bn(t,e,n){if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(!n(t[i],e[i]))return!1;return!0}const Ir=new WeakMap;function d_(t,e,n){{const i=t.closest(".tabpanel");let s=Ir.get(i);s||(s=new IntersectionObserver(n,{root:i,rootMargin:"50% 0px 50% 0px",threshold:0}),Ir.set(i,s),e.addEventListener("abort",()=>{s.disconnect()})),s.observe(t)}}const $n=[],{assign:Dt}=Object;function h_(t,e){const n={},i=new AbortController,s=i.signal,{state:r,createEffect:o}=u_(s),a=new Map;Dt(r,{skinToneEmoji:void 0,i18n:void 0,database:void 0,customEmoji:void 0,customCategorySorting:void 0,emojiVersion:void 0}),Dt(r,e),Dt(r,{initialLoad:!0,currentEmojis:[],currentEmojisWithCategories:[],rawSearchText:"",searchText:"",searchMode:!1,activeSearchItem:-1,message:void 0,skinTonePickerExpanded:!1,skinTonePickerExpandedAfterAnimation:!1,currentSkinTone:0,activeSkinTone:0,skinToneButtonText:void 0,pickerStyle:void 0,skinToneButtonLabel:"",skinTones:[],currentFavorites:[],defaultFavoriteEmojis:void 0,numColumns:Dm,isRtl:!1,currentGroupIndex:0,groups:On,databaseLoaded:!1,activeSearchItemId:void 0}),o(()=>{r.currentGroup!==r.groups[r.currentGroupIndex]&&(r.currentGroup=r.groups[r.currentGroupIndex])});const l=f=>{t.getElementById(f).focus()},c=f=>t.getElementById(`emo-${f.id}`),h=(f,g)=>{n.rootElement.dispatchEvent(new CustomEvent(f,{detail:g,bubbles:!0,composed:!0}))},d=(f,g)=>f.id===g.id,u=(f,g)=>{const{category:b,emojis:S}=f,{category:B,emojis:W}=g;return b!==B?!1:Bn(S,W,d)},p=f=>{Bn(r.currentEmojis,f,d)||(r.currentEmojis=f)},_=f=>{r.searchMode!==f&&(r.searchMode=f)},E=f=>{Bn(r.currentEmojisWithCategories,f,u)||(r.currentEmojisWithCategories=f)},k=(f,g)=>g&&f.skins&&f.skins[g]||f.unicode,I={labelWithSkin:(f,g)=>Km([f.name||k(f,g),f.annotation,...f.shortcodes||$n].filter(Boolean)).join(", "),titleForEmoji:f=>f.annotation||(f.shortcodes||$n).join(", "),unicodeWithSkin:k},O={onClickSkinToneButton:cc,onEmojiClick:oc,onNavClick:ic,onNavKeydown:sc,onSearchKeydown:nc,onSkinToneOptionsClick:ac,onSkinToneOptionsFocusOut:dc,onSkinToneOptionsKeydown:lc,onSkinToneOptionsKeyup:uc,onSearchInput:hc},Q={calculateEmojiGridStyle:Qa,updateOnIntersection:Xa};let Ze=!0;o(()=>{l_(t,r,I,O,Q,n,s,a,Ze),Ze=!1}),r.emojiVersion||Ln().then(f=>{f||(r.message=r.i18n.emojiUnsupportedMessage)}),o(()=>{async function f(){let g=!1;const b=setTimeout(()=>{g=!0,r.message=r.i18n.loadingMessage},Rm);try{await r.database.ready(),r.databaseLoaded=!0}catch(S){console.error(S),r.message=r.i18n.networkErrorMessage}finally{clearTimeout(b),g&&(g=!1,r.message="")}}r.database&&f()}),o(()=>{r.pickerStyle=`
      --num-groups: ${r.groups.length}; 
      --indicator-opacity: ${r.searchMode?0:1}; 
      --num-skintones: ${yr};`}),o(()=>{r.customEmoji&&r.database&&cs()}),o(()=>{r.customEmoji&&r.customEmoji.length?r.groups!==li&&(r.groups=li):r.groups!==On&&(r.currentGroupIndex&&r.currentGroupIndex--,r.groups=On)}),o(()=>{async function f(){r.databaseLoaded&&(r.currentSkinTone=await r.database.getPreferredSkinTone())}f()}),o(()=>{r.skinTones=Array(yr).fill().map((f,g)=>Hm(r.skinToneEmoji,g))}),o(()=>{r.skinToneButtonText=r.skinTones[r.currentSkinTone]}),o(()=>{r.skinToneButtonLabel=r.i18n.skinToneLabel.replace("{skinTone}",r.i18n.skinTones[r.currentSkinTone])}),o(()=>{async function f(){const{database:g}=r,b=(await Promise.all(Pm.map(S=>g.getEmojiByUnicodeOrName(S)))).filter(Boolean);r.defaultFavoriteEmojis=b}r.databaseLoaded&&f()});function cs(){const{customEmoji:f,database:g}=r,b=f||$n;g.customEmoji!==b&&(g.customEmoji=b)}o(()=>{async function f(){cs();const{database:g,defaultFavoriteEmojis:b,numColumns:S}=r,B=await g.getTopFavoriteEmoji(S),W=await gn(Ga([...B,...b],X=>X.unicode||X.name).slice(0,S));r.currentFavorites=W}r.databaseLoaded&&r.defaultFavoriteEmojis&&f()});function Qa(f){Gm(f,s,()=>{{const g=getComputedStyle(n.rootElement),b=parseInt(g.getPropertyValue("--num-columns"),10),S=g.getPropertyValue("direction")==="rtl";r.numColumns=b,r.isRtl=S}})}function Xa(f){d_(f,s,g=>{for(const{target:b,isIntersecting:S}of g)b.classList.toggle("onscreen",S)})}o(()=>{async function f(){const{searchText:g,currentGroup:b,databaseLoaded:S,customEmoji:B}=r;if(!S)r.currentEmojis=[],r.searchMode=!1;else if(g.length>=Am){const W=await tc(g);r.searchText===g&&(p(W),_(!0))}else{const{id:W}=b;if(W!==-1||B&&B.length){const X=await ec(W);r.currentGroup.id===W&&(p(X),_(!1))}}}f()});const ls=()=>{Mt(()=>Ym(n.tabpanelElement))};o(()=>{const{currentEmojis:f,emojiVersion:g}=r,b=f.filter(S=>S.unicode).filter(S=>vr(S)&&!ui.has(S.unicode));if(!g&&b.length)p(f),Mt(()=>Ja(b));else{const S=g?f:f.filter(Za);p(S),ls()}});function Ja(f){qm(f,n.baselineEmoji,c)?ls():r.currentEmojis=[...r.currentEmojis]}function Za(f){return!f.unicode||!vr(f)||ui.get(f.unicode)}async function us(f){const g=r.emojiVersion||await Ln();return f.filter(({version:b})=>!b||b<=g)}async function gn(f){return Vm(f,r.emojiVersion||await Ln())}async function ec(f){const g=f===-1?r.customEmoji:await r.database.getEmojiByGroup(f);return gn(await us(g))}async function tc(f){return gn(await us(await r.database.getEmojiBySearchQuery(f)))}o(()=>{}),o(()=>{function f(){const{searchMode:b,currentEmojis:S}=r;if(b)return[{category:"",emojis:S}];const B=new Map;for(const W of S){const X=W.category||"";let kt=B.get(X);kt||(kt=[],B.set(X,kt)),kt.push(W)}return[...B.entries()].map(([W,X])=>({category:W,emojis:X})).sort((W,X)=>r.customCategorySorting(W.category,X.category))}const g=f();E(g)}),o(()=>{r.activeSearchItemId=r.activeSearchItem!==-1&&r.currentEmojis[r.activeSearchItem].id}),o(()=>{const{rawSearchText:f}=r;Va(()=>{r.searchText=(f||"").trim(),r.activeSearchItem=-1})});function nc(f){if(!r.searchMode||!r.currentEmojis.length)return;const g=b=>{ne(f),r.activeSearchItem=Fn(b,r.activeSearchItem,r.currentEmojis)};switch(f.key){case"ArrowDown":return g(!1);case"ArrowUp":return g(!0);case"Enter":if(r.activeSearchItem===-1)r.activeSearchItem=0;else return ne(f),ds(r.currentEmojis[r.activeSearchItem].id)}}function ic(f){const{target:g}=f,b=g.closest(".nav-button");if(!b)return;const S=parseInt(b.dataset.groupId,10);n.searchElement.value="",r.rawSearchText="",r.searchText="",r.activeSearchItem=-1,r.currentGroupIndex=r.groups.findIndex(B=>B.id===S)}function sc(f){const{target:g,key:b}=f,S=B=>{B&&(ne(f),B.focus())};switch(b){case"ArrowLeft":return S(g.previousElementSibling);case"ArrowRight":return S(g.nextElementSibling);case"Home":return S(g.parentElement.firstElementChild);case"End":return S(g.parentElement.lastElementChild)}}async function rc(f){const g=await r.database.getEmojiByUnicodeOrName(f),b=[...r.currentEmojis,...r.currentFavorites].find(B=>B.id===f),S=b.unicode&&k(b,r.currentSkinTone);return await r.database.incrementFavoriteEmojiCount(f),{emoji:g,skinTone:r.currentSkinTone,...S&&{unicode:S},...b.name&&{name:b.name}}}async function ds(f){const g=rc(f);h("emoji-click-sync",g),h("emoji-click",await g)}function oc(f){const{target:g}=f;if(!g.classList.contains("emoji"))return;ne(f);const b=g.id.substring(4);ds(b)}function yn(f){r.currentSkinTone=f,r.skinTonePickerExpanded=!1,l("skintone-button"),h("skin-tone-change",{skinTone:f}),r.database.setPreferredSkinTone(f)}function ac(f){const{target:{id:g}}=f,b=g&&g.match(/^skintone-(\d)/);if(!b)return;ne(f);const S=parseInt(b[1],10);yn(S)}function cc(f){r.skinTonePickerExpanded=!r.skinTonePickerExpanded,r.activeSkinTone=r.currentSkinTone,r.skinTonePickerExpanded&&(ne(f),Mt(()=>l("skintone-list")))}o(()=>{r.skinTonePickerExpanded?n.skinToneDropdown.addEventListener("transitionend",()=>{r.skinTonePickerExpandedAfterAnimation=!0},{once:!0}):r.skinTonePickerExpandedAfterAnimation=!1});function lc(f){if(!r.skinTonePickerExpanded)return;const g=async b=>{ne(f),r.activeSkinTone=b};switch(f.key){case"ArrowUp":return g(Fn(!0,r.activeSkinTone,r.skinTones));case"ArrowDown":return g(Fn(!1,r.activeSkinTone,r.skinTones));case"Home":return g(0);case"End":return g(r.skinTones.length-1);case"Enter":return ne(f),yn(r.activeSkinTone);case"Escape":return ne(f),r.skinTonePickerExpanded=!1,l("skintone-button")}}function uc(f){if(r.skinTonePickerExpanded)switch(f.key){case" ":return ne(f),yn(r.activeSkinTone)}}async function dc(f){const{relatedTarget:g}=f;(!g||g.id!=="skintone-list")&&(r.skinTonePickerExpanded=!1)}function hc(f){r.rawSearchText=f.target.value}return{$set(f){Dt(r,f)},$destroy(){i.abort()}}}const f_="https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",p_="en";var m_={categoriesLabel:"Categories",emojiUnsupportedMessage:"Your browser does not support color emoji.",favoritesLabel:"Favorites",loadingMessage:"Loading…",networkErrorMessage:"Could not load emoji.",regionLabel:"Emoji picker",searchDescription:"When search results are available, press up or down to select and enter to choose.",searchLabel:"Search",searchResultsLabel:"Search results",skinToneDescription:"When expanded, press up or down to select and enter to choose.",skinToneLabel:"Choose a skin tone (currently {skinTone})",skinTonesLabel:"Skin tones",skinTones:["Default","Light","Medium-Light","Medium","Medium-Dark","Dark"],categories:{custom:"Custom","smileys-emotion":"Smileys and emoticons","people-body":"People and body","animals-nature":"Animals and nature","food-drink":"Food and drink","travel-places":"Travel and places",activities:"Activities",objects:"Objects",symbols:"Symbols",flags:"Flags"}},__=':host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--border-radius:0;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);border-radius:var(--border-radius);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;scrollbar-gutter:stable;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.emoji-menu.visibility-auto{content-visibility:auto;contain-intrinsic-size:calc(var(--num-columns)*var(--total-emoji-size)) calc(var(--num-rows)*var(--total-emoji-size))}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;height:var(--total-emoji-size);width:var(--total-emoji-size);line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.onscreen .custom-emoji::after{content:"";width:var(--emoji-size);height:var(--emoji-size);background-repeat:no-repeat;background-position:center center;background-size:contain;background-image:var(--custom-emoji-background)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{overflow-y:auto;scrollbar-gutter:stable;display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}';const qa=["customEmoji","customCategorySorting","database","dataSource","i18n","locale","skinToneEmoji","emojiVersion"],g_=`:host{--emoji-font-family:${za}}`;class Ka extends HTMLElement{constructor(e){super(),this.attachShadow({mode:"open"});const n=document.createElement("style");n.textContent=__+g_,this.shadowRoot.appendChild(n),this._ctx={locale:p_,dataSource:f_,skinToneEmoji:xm,customCategorySorting:Om,customEmoji:null,i18n:m_,emojiVersion:null,...e};for(const i of qa)i!=="database"&&Object.prototype.hasOwnProperty.call(this,i)&&(this._ctx[i]=this[i],delete this[i]);this._dbFlush()}connectedCallback(){this._cmp||(this._cmp=h_(this.shadowRoot,this._ctx))}disconnectedCallback(){nn(()=>{if(!this.isConnected&&this._cmp){this._cmp.$destroy(),this._cmp=void 0;const{database:e}=this._ctx;e.close().catch(n=>console.error(n))}})}static get observedAttributes(){return["locale","data-source","skin-tone-emoji","emoji-version"]}attributeChangedCallback(e,n,i){this._set(e.replace(/-([a-z])/g,(s,r)=>r.toUpperCase()),e==="emoji-version"?parseFloat(i):i)}_set(e,n){this._ctx[e]=n,this._cmp&&this._cmp.$set({[e]:n}),["locale","dataSource"].includes(e)&&this._dbFlush()}_dbCreate(){const{locale:e,dataSource:n,database:i}=this._ctx;(!i||i.locale!==e||i.dataSource!==n)&&this._set("database",new km({locale:e,dataSource:n}))}_dbFlush(){nn(()=>this._dbCreate())}}const Ya={};for(const t of qa)Ya[t]={get(){return t==="database"&&this._dbCreate(),this._ctx[t]},set(e){if(t==="database")throw new Error("database is read-only");this._set(t,e)}};Object.defineProperties(Ka.prototype,Ya);customElements.get("emoji-picker")||customElements.define("emoji-picker",Ka);document.querySelector("emoji-picker").addEventListener("emoji-click",t=>{const e=t.detail.unicode;y_(e)});function y_(t){const e=window.getSelection();if(!e||!e.rangeCount)return;const n=e.getRangeAt(0);n.deleteContents();const i=document.createTextNode(t);n.insertNode(i),n.setStart(i),n.setEndAfter(i),e.removeAllRanges(),e.addRange(n)}
