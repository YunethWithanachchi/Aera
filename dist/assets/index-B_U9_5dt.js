(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const cl=()=>{};var Ms={};/**
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
 */const Zr={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(t,e){if(!t)throw it(e)},it=function(t){return new Error("Firebase Database ("+Zr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const eo=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ll=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ai={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let u=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(u=64)),i.push(n[h],n[d],n[u],n[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(eo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ll(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||d==null)throw new ul;const u=r<<2|a>>4;if(i.push(u),l!==64){const f=a<<4&240|l>>2;if(i.push(f),d!==64){const _=l<<6&192|d;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ul extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const to=function(t){const e=eo(t);return Ai.encodeByteArray(e,!0)},Xt=function(t){return to(t).replace(/\./g,"")},si=function(t){try{return Ai.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function hl(t){return no(void 0,t)}function no(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!dl(n)||(t[n]=no(t[n],e[n]));return t}function dl(t){return t!=="__proto__"}/**
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
 */function fl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const pl=()=>fl().__FIREBASE_DEFAULTS__,ml=()=>{if(typeof process>"u"||typeof Ms>"u")return;const t=Ms.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_l=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&si(t[1]);return e&&JSON.parse(e)},io=()=>{try{return cl()||pl()||ml()||_l()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gl=t=>io()?.emulatorHosts?.[t],so=t=>{const e=gl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},ro=()=>io()?.config;/**
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
 */class vn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Pt(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function oo(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function ao(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Xt(JSON.stringify(n)),Xt(JSON.stringify(o)),""].join(".")}const _t={};function yl(){const t={prod:[],emulator:[]};for(const e of Object.keys(_t))_t[e]?t.emulator.push(e):t.prod.push(e);return t}function vl(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ls=!1;function co(t,e){if(typeof window>"u"||typeof document>"u"||!Pt(window.location.host)||_t[t]===e||_t[t]||Ls)return;_t[t]=e;function n(u){return`__firebase__banner__${u}`}const i="__firebase__banner",r=yl().prod.length>0;function o(){const u=document.getElementById(i);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function c(u,f){u.setAttribute("width","24"),u.setAttribute("id",f),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function l(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Ls=!0,o()},u}function h(u,f){u.setAttribute("id",f),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function d(){const u=vl(i),f=n("text"),_=document.getElementById(f)||document.createElement("span"),v=n("learnmore"),w=document.getElementById(v)||document.createElement("a"),O=n("preprendIcon"),y=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const E=u.element;a(E),h(w,v);const R=l();c(y,O),E.append(y,_,w,R),document.body.appendChild(E)}r?(_.innerText="Preview backend disconnected.",y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",f)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function El(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(El())}function bl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cl(){return Zr.NODE_ADMIN===!0}function uo(){try{return typeof indexedDB=="object"}catch{return!1}}function ho(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(n){e(n)}})}function Il(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Tl="FirebaseError";class Se extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Tl,Object.setPrototypeOf(this,Se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,En.prototype.create)}}class En{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Sl(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Se(s,a,i)}}function Sl(t,e){return t.replace(kl,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const kl=/\{\$([^}]+)}/g;/**
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
 */function It(t){return JSON.parse(t)}function $(t){return JSON.stringify(t)}/**
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
 */const fo=function(t){let e={},n={},i={},s="";try{const r=t.split(".");e=It(si(r[0])||""),n=It(si(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:s}},Rl=function(t){const e=fo(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Al=function(t){const e=fo(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ye(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Xe(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Fs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Jt(t,e,n){const i={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=e.call(n,t[s],s,t));return i}function Tt(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Us(r)&&Us(o)){if(!Tt(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Us(t){return t!==null&&typeof t=="object"}/**
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
 */function Nl(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class xl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const u=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(u<<1|u>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,h;for(let d=0;d<80;d++){d<40?d<20?(l=a^r&(o^a),h=1518500249):(l=r^o^a,h=1859775393):d<60?(l=r&o|a&(r|o),h=2400959708):(l=r^o^a,h=3395469782);const u=(s<<5|s>>>27)+l+c+h+i[d]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=u}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<n;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Ni(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Dl=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,m(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bn=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Pl=1e3,Ol=2,Ml=14400*1e3,Ll=.5;function Bs(t,e=Pl,n=Ol){const i=e*Math.pow(n,t),s=Math.round(Ll*i*(Math.random()-.5)*2);return Math.min(Ml,i+s)}/**
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
 */function te(t){return t&&t._delegate?t._delegate:t}class ue{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Re="[DEFAULT]";/**
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
 */class Fl{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new vn;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bl(e))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Re){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Re){return this.instances.has(e)}getOptions(e=Re){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ul(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Re){return this.component?this.component.multipleInstances?e:Re:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ul(t){return t===Re?void 0:t}function Bl(t){return t.instantiationMode==="EAGER"}/**
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
 */class jl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fl(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(x||(x={}));const $l={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Wl=x.INFO,Hl={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Vl=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Hl[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xi{constructor(e){this.name=e,this._logLevel=Wl,this._logHandler=Vl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$l[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const zl=(t,e)=>e.some(n=>t instanceof n);let js,$s;function ql(){return js||(js=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gl(){return $s||($s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const po=new WeakMap,ri=new WeakMap,mo=new WeakMap,On=new WeakMap,Di=new WeakMap;function Kl(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(be(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&po.set(n,t)}).catch(()=>{}),Di.set(e,t),e}function Yl(t){if(ri.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ri.set(t,e)}let oi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ri.get(t);if(e==="objectStoreNames")return t.objectStoreNames||mo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return be(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ql(t){oi=t(oi)}function Xl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Mn(this),e,...n);return mo.set(i,e.sort?e.sort():[e]),be(i)}:Gl().includes(t)?function(...e){return t.apply(Mn(this),e),be(po.get(this))}:function(...e){return be(t.apply(Mn(this),e))}}function Jl(t){return typeof t=="function"?Xl(t):(t instanceof IDBTransaction&&Yl(t),zl(t,ql())?new Proxy(t,oi):t)}function be(t){if(t instanceof IDBRequest)return Kl(t);if(On.has(t))return On.get(t);const e=Jl(t);return e!==t&&(On.set(t,e),Di.set(e,t)),e}const Mn=t=>Di.get(t);function _o(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=be(o);return i&&o.addEventListener("upgradeneeded",c=>{i(be(o.result),c.oldVersion,c.newVersion,be(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Zl=["get","getKey","getAll","getAllKeys","count"],eu=["put","add","delete","clear"],Ln=new Map;function Ws(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ln.get(e))return Ln.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=eu.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Zl.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ln.set(e,r),r}Ql(t=>({...t,get:(e,n,i)=>Ws(e,n)||t.get(e,n,i),has:(e,n)=>!!Ws(e,n)||t.has(e,n)}));/**
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
 */class tu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function nu(t){return t.getComponent()?.type==="VERSION"}const ai="@firebase/app",Hs="0.14.4";/**
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
 */const pe=new xi("@firebase/app"),iu="@firebase/app-compat",su="@firebase/analytics-compat",ru="@firebase/analytics",ou="@firebase/app-check-compat",au="@firebase/app-check",cu="@firebase/auth",lu="@firebase/auth-compat",uu="@firebase/database",hu="@firebase/data-connect",du="@firebase/database-compat",fu="@firebase/functions",pu="@firebase/functions-compat",mu="@firebase/installations",_u="@firebase/installations-compat",gu="@firebase/messaging",yu="@firebase/messaging-compat",vu="@firebase/performance",Eu="@firebase/performance-compat",bu="@firebase/remote-config",wu="@firebase/remote-config-compat",Cu="@firebase/storage",Iu="@firebase/storage-compat",Tu="@firebase/firestore",Su="@firebase/ai",ku="@firebase/firestore-compat",Ru="firebase",Au="12.4.0";/**
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
 */const ci="[DEFAULT]",Nu={[ai]:"fire-core",[iu]:"fire-core-compat",[ru]:"fire-analytics",[su]:"fire-analytics-compat",[au]:"fire-app-check",[ou]:"fire-app-check-compat",[cu]:"fire-auth",[lu]:"fire-auth-compat",[uu]:"fire-rtdb",[hu]:"fire-data-connect",[du]:"fire-rtdb-compat",[fu]:"fire-fn",[pu]:"fire-fn-compat",[mu]:"fire-iid",[_u]:"fire-iid-compat",[gu]:"fire-fcm",[yu]:"fire-fcm-compat",[vu]:"fire-perf",[Eu]:"fire-perf-compat",[bu]:"fire-rc",[wu]:"fire-rc-compat",[Cu]:"fire-gcs",[Iu]:"fire-gcs-compat",[Tu]:"fire-fst",[ku]:"fire-fst-compat",[Su]:"fire-vertex","fire-js":"fire-js",[Ru]:"fire-js-all"};/**
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
 */const Zt=new Map,xu=new Map,li=new Map;function Vs(t,e){try{t.container.addComponent(e)}catch(n){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function me(t){const e=t.name;if(li.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;li.set(e,t);for(const n of Zt.values())Vs(n,t);for(const n of xu.values())Vs(n,t);return!0}function st(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function go(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Du={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},we=new En("app","Firebase",Du);/**
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
 */class Pu{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw we.create("app-deleted",{appName:this._name})}}/**
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
 */const yo=Au;function vo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:ci,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw we.create("bad-app-name",{appName:String(s)});if(n||(n=ro()),!n)throw we.create("no-options");const r=Zt.get(s);if(r){if(Tt(n,r.options)&&Tt(i,r.config))return r;throw we.create("duplicate-app",{appName:s})}const o=new jl(s);for(const c of li.values())o.addComponent(c);const a=new Pu(n,i,o);return Zt.set(s,a),a}function Pi(t=ci){const e=Zt.get(t);if(!e&&t===ci&&ro())return vo();if(!e)throw we.create("no-app",{appName:t});return e}function ne(t,e,n){let i=Nu[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pe.warn(o.join(" "));return}me(new ue(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ou="firebase-heartbeat-database",Mu=1,St="firebase-heartbeat-store";let Fn=null;function Eo(){return Fn||(Fn=_o(Ou,Mu,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(St)}catch(n){console.warn(n)}}}}).catch(t=>{throw we.create("idb-open",{originalErrorMessage:t.message})})),Fn}async function Lu(t){try{const n=(await Eo()).transaction(St),i=await n.objectStore(St).get(bo(t));return await n.done,i}catch(e){if(e instanceof Se)pe.warn(e.message);else{const n=we.create("idb-get",{originalErrorMessage:e?.message});pe.warn(n.message)}}}async function zs(t,e){try{const i=(await Eo()).transaction(St,"readwrite");await i.objectStore(St).put(e,bo(t)),await i.done}catch(n){if(n instanceof Se)pe.warn(n.message);else{const i=we.create("idb-set",{originalErrorMessage:n?.message});pe.warn(i.message)}}}function bo(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fu=1024,Uu=30;class Bu{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $u(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qs();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>Uu){const s=Wu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){pe.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qs(),{heartbeatsToSend:n,unsentEntries:i}=ju(this._heartbeatsCache.heartbeats),s=Xt(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return pe.warn(e),""}}}function qs(){return new Date().toISOString().substring(0,10)}function ju(t,e=Fu){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Gs(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gs(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class $u{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uo()?ho().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Lu(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return zs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return zs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gs(t){return Xt(JSON.stringify({version:2,heartbeats:t})).length}function Wu(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function Hu(t){me(new ue("platform-logger",e=>new tu(e),"PRIVATE")),me(new ue("heartbeat",e=>new Bu(e),"PRIVATE")),ne(ai,Hs,t),ne(ai,Hs,"esm2020"),ne("fire-js","")}Hu("");var Vu="firebase",zu="12.4.0";/**
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
 */ne(Vu,zu,"app");const wo="@firebase/installations",Oi="0.6.19";/**
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
 */const Co=1e4,Io=`w:${Oi}`,To="FIS_v2",qu="https://firebaseinstallations.googleapis.com/v1",Gu=3600*1e3,Ku="installations",Yu="Installations";/**
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
 */const Qu={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Oe=new En(Ku,Yu,Qu);function So(t){return t instanceof Se&&t.code.includes("request-failed")}/**
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
 */function ko({projectId:t}){return`${qu}/projects/${t}/installations`}function Ro(t){return{token:t.token,requestStatus:2,expiresIn:Ju(t.expiresIn),creationTime:Date.now()}}async function Ao(t,e){const i=(await e.json()).error;return Oe.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function No({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Xu(t,{refreshToken:e}){const n=No(t);return n.append("Authorization",Zu(e)),n}async function xo(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ju(t){return Number(t.replace("s","000"))}function Zu(t){return`${To} ${t}`}/**
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
 */async function eh({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=ko(t),s=No(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:To,appId:t.appId,sdkVersion:Io},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await xo(()=>fetch(i,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ro(l.authToken)}}else throw await Ao("Create Installation",c)}/**
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
 */function Do(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function th(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nh=/^[cdef][\w-]{21}$/,ui="";function ih(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=sh(t);return nh.test(n)?n:ui}catch{return ui}}function sh(t){return th(t).substr(0,22)}/**
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
 */function wn(t){return`${t.appName}!${t.appId}`}/**
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
 */const Po=new Map;function Oo(t,e){const n=wn(t);Mo(n,e),rh(n,e)}function Mo(t,e){const n=Po.get(t);if(n)for(const i of n)i(e)}function rh(t,e){const n=oh();n&&n.postMessage({key:t,fid:e}),ah()}let Ne=null;function oh(){return!Ne&&"BroadcastChannel"in self&&(Ne=new BroadcastChannel("[Firebase] FID Change"),Ne.onmessage=t=>{Mo(t.data.key,t.data.fid)}),Ne}function ah(){Po.size===0&&Ne&&(Ne.close(),Ne=null)}/**
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
 */const ch="firebase-installations-database",lh=1,Me="firebase-installations-store";let Un=null;function Mi(){return Un||(Un=_o(ch,lh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Me)}}})),Un}async function en(t,e){const n=wn(t),s=(await Mi()).transaction(Me,"readwrite"),r=s.objectStore(Me),o=await r.get(n);return await r.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Oo(t,e.fid),e}async function Lo(t){const e=wn(t),i=(await Mi()).transaction(Me,"readwrite");await i.objectStore(Me).delete(e),await i.done}async function Cn(t,e){const n=wn(t),s=(await Mi()).transaction(Me,"readwrite"),r=s.objectStore(Me),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Oo(t,a.fid),a}/**
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
 */async function Li(t){let e;const n=await Cn(t.appConfig,i=>{const s=uh(i),r=hh(t,s);return e=r.registrationPromise,r.installationEntry});return n.fid===ui?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uh(t){const e=t||{fid:ih(),registrationStatus:0};return Fo(e)}function hh(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Oe.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=dh(t,n);return{installationEntry:n,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fh(t)}:{installationEntry:e}}async function dh(t,e){try{const n=await eh(t,e);return en(t.appConfig,n)}catch(n){throw So(n)&&n.customData.serverCode===409?await Lo(t.appConfig):await en(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function fh(t){let e=await Ks(t.appConfig);for(;e.registrationStatus===1;)await Do(100),e=await Ks(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await Li(t);return i||n}return e}function Ks(t){return Cn(t,e=>{if(!e)throw Oe.create("installation-not-found");return Fo(e)})}function Fo(t){return ph(t)?{fid:t.fid,registrationStatus:0}:t}function ph(t){return t.registrationStatus===1&&t.registrationTime+Co<Date.now()}/**
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
 */async function mh({appConfig:t,heartbeatServiceProvider:e},n){const i=_h(t,n),s=Xu(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Io,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await xo(()=>fetch(i,a));if(c.ok){const l=await c.json();return Ro(l)}else throw await Ao("Generate Auth Token",c)}function _h(t,{fid:e}){return`${ko(t)}/${e}/authTokens:generate`}/**
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
 */async function Fi(t,e=!1){let n;const i=await Cn(t.appConfig,r=>{if(!Uo(r))throw Oe.create("not-registered");const o=r.authToken;if(!e&&vh(o))return r;if(o.requestStatus===1)return n=gh(t,e),r;{if(!navigator.onLine)throw Oe.create("app-offline");const a=bh(r);return n=yh(t,a),a}});return n?await n:i.authToken}async function gh(t,e){let n=await Ys(t.appConfig);for(;n.authToken.requestStatus===1;)await Do(100),n=await Ys(t.appConfig);const i=n.authToken;return i.requestStatus===0?Fi(t,e):i}function Ys(t){return Cn(t,e=>{if(!Uo(e))throw Oe.create("not-registered");const n=e.authToken;return wh(n)?{...e,authToken:{requestStatus:0}}:e})}async function yh(t,e){try{const n=await mh(t,e),i={...e,authToken:n};return await en(t.appConfig,i),n}catch(n){if(So(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Lo(t.appConfig);else{const i={...e,authToken:{requestStatus:0}};await en(t.appConfig,i)}throw n}}function Uo(t){return t!==void 0&&t.registrationStatus===2}function vh(t){return t.requestStatus===2&&!Eh(t)}function Eh(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Gu}function bh(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function wh(t){return t.requestStatus===1&&t.requestTime+Co<Date.now()}/**
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
 */async function Ch(t){const e=t,{installationEntry:n,registrationPromise:i}=await Li(e);return i?i.catch(console.error):Fi(e).catch(console.error),n.fid}/**
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
 */async function Ih(t,e=!1){const n=t;return await Th(n),(await Fi(n,e)).token}async function Th(t){const{registrationPromise:e}=await Li(t);e&&await e}/**
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
 */function Sh(t){if(!t||!t.options)throw Bn("App Configuration");if(!t.name)throw Bn("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Bn(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Bn(t){return Oe.create("missing-app-config-values",{valueName:t})}/**
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
 */const Bo="installations",kh="installations-internal",Rh=t=>{const e=t.getProvider("app").getImmediate(),n=Sh(e),i=st(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Ah=t=>{const e=t.getProvider("app").getImmediate(),n=st(e,Bo).getImmediate();return{getId:()=>Ch(n),getToken:s=>Ih(n,s)}};function Nh(){me(new ue(Bo,Rh,"PUBLIC")),me(new ue(kh,Ah,"PRIVATE"))}Nh();ne(wo,Oi);ne(wo,Oi,"esm2020");/**
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
 */const tn="analytics",xh="firebase_id",Dh="origin",Ph=60*1e3,Oh="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ui="https://www.googletagmanager.com/gtag/js";/**
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
 */const K=new xi("@firebase/analytics");/**
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
 */const Mh={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ee=new En("analytics","Analytics",Mh);/**
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
 */function Lh(t){if(!t.startsWith(Ui)){const e=ee.create("invalid-gtag-resource",{gtagURL:t});return K.warn(e.message),""}return t}function jo(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Fh(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Uh(t,e){const n=Fh("firebase-js-sdk-policy",{createScriptURL:Lh}),i=document.createElement("script"),s=`${Ui}?l=${t}&id=${e}`;i.src=n?n?.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function Bh(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function jh(t,e,n,i,s,r){const o=i[s];try{if(o)await e[o];else{const c=(await jo(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){K.error(a)}t("config",s,r)}async function $h(t,e,n,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await jo(n);for(const c of o){const l=a.find(d=>d.measurementId===c),h=l&&e[l.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",i,s||{})}catch(r){K.error(r)}}function Wh(t,e,n,i){async function s(r,...o){try{if(r==="event"){const[a,c]=o;await $h(t,e,n,a,c)}else if(r==="config"){const[a,c]=o;await jh(t,e,n,i,a,c)}else if(r==="consent"){const[a,c]=o;t("consent",a,c)}else if(r==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(r==="set"){const[a]=o;t("set",a)}else t(r,...o)}catch(a){K.error(a)}}return s}function Hh(t,e,n,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Wh(r,t,e,n),{gtagCore:r,wrappedGtag:window[s]}}function Vh(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ui)&&n.src.includes(t))return n;return null}/**
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
 */const zh=30,qh=1e3;class Gh{constructor(e={},n=qh){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $o=new Gh;function Kh(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Yh(t){const{appId:e,apiKey:n}=t,i={method:"GET",headers:Kh(n)},s=Oh.replace("{app-id}",e),r=await fetch(s,i);if(r.status!==200&&r.status!==304){let o="";try{const a=await r.json();a.error?.message&&(o=a.error.message)}catch{}throw ee.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function Qh(t,e=$o,n){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw ee.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw ee.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Zh;return setTimeout(async()=>{a.abort()},Ph),Wo({appId:i,apiKey:s,measurementId:r},o,a,e)}async function Wo(t,{throttleEndTimeMillis:e,backoffCount:n},i,s=$o){const{appId:r,measurementId:o}=t;try{await Xh(i,e)}catch(a){if(o)return K.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:r,measurementId:o};throw a}try{const a=await Yh(t);return s.deleteThrottleMetadata(r),a}catch(a){const c=a;if(!Jh(c)){if(s.deleteThrottleMetadata(r),o)return K.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c?.message}]`),{appId:r,measurementId:o};throw a}const l=Number(c?.customData?.httpStatus)===503?Bs(n,s.intervalMillis,zh):Bs(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return s.setThrottleMetadata(r,h),K.debug(`Calling attemptFetch again in ${l} millis`),Wo(t,h,i,s)}}function Xh(t,e){return new Promise((n,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(r),i(ee.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Jh(t){if(!(t instanceof Se)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Zh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ed(t,e,n,i,s){if(s&&s.global){t("event",n,i);return}else{const r=await e,o={...i,send_to:r};t("event",n,o)}}async function td(t,e,n,i){if(i&&i.global){const s={};for(const r of Object.keys(n))s[`user_properties.${r}`]=n[r];return t("set",s),Promise.resolve()}else{const s=await e;t("config",s,{update:!0,user_properties:n})}}/**
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
 */async function nd(){if(uo())try{await ho()}catch(t){return K.warn(ee.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return K.warn(ee.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function id(t,e,n,i,s,r,o){const a=Qh(t);a.then(u=>{n[u.measurementId]=u.appId,t.options.measurementId&&u.measurementId!==t.options.measurementId&&K.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${u.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(u=>K.error(u)),e.push(a);const c=nd().then(u=>{if(u)return i.getId()}),[l,h]=await Promise.all([a,c]);Vh(r)||Uh(r,l.measurementId),s("js",new Date);const d=o?.config??{};return d[Dh]="firebase",d.update=!0,h!=null&&(d[xh]=h),s("config",l.measurementId,d),l.measurementId}/**
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
 */class sd{constructor(e){this.app=e}_delete(){return delete qe[this.app.options.appId],Promise.resolve()}}let qe={},Qs=[];const Xs={};let jn="dataLayer",rd="gtag",Js,Bi,Zs=!1;function od(){const t=[];if(bl()&&t.push("This is a browser extension environment."),Il()||t.push("Cookies are not available."),t.length>0){const e=t.map((i,s)=>`(${s+1}) ${i}`).join(" "),n=ee.create("invalid-analytics-context",{errorInfo:e});K.warn(n.message)}}function ad(t,e,n){od();const i=t.options.appId;if(!i)throw ee.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)K.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ee.create("no-api-key");if(qe[i]!=null)throw ee.create("already-exists",{id:i});if(!Zs){Bh(jn);const{wrappedGtag:r,gtagCore:o}=Hh(qe,Qs,Xs,jn,rd);Bi=r,Js=o,Zs=!0}return qe[i]=id(t,Qs,Xs,e,Js,jn,n),new sd(t)}function cd(t=Pi()){t=te(t);const e=st(t,tn);return e.isInitialized()?e.getImmediate():ld(t)}function ld(t,e={}){const n=st(t,tn);if(n.isInitialized()){const s=n.getImmediate();if(Tt(e,n.getOptions()))return s;throw ee.create("already-initialized")}return n.initialize({options:e})}function ud(t,e,n){t=te(t),td(Bi,qe[t.app.options.appId],e,n).catch(i=>K.error(i))}function hd(t,e,n,i){t=te(t),ed(Bi,qe[t.app.options.appId],e,n,i).catch(s=>K.error(s))}const er="@firebase/analytics",tr="0.10.19";function dd(){me(new ue(tn,(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ad(i,s,n)},"PUBLIC")),me(new ue("analytics-internal",t,"PRIVATE")),ne(er,tr),ne(er,tr,"esm2020");function t(e){try{const n=e.getProvider(tn).getImmediate();return{logEvent:(i,s,r)=>hd(n,i,s,r),setUserProperties:(i,s)=>ud(n,i,s)}}catch(n){throw ee.create("interop-component-reg-failed",{reason:n})}}}dd();var nr={};const ir="@firebase/database",sr="1.1.0";/**
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
 */let Ho="";function fd(t){Ho=t}/**
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
 */class pd{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:It(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class md{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ye(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Vo=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pd(e)}}catch{}return new md},xe=Vo("localStorage"),_d=Vo("sessionStorage");/**
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
 */const Ge=new xi("@firebase/database"),gd=(function(){let t=1;return function(){return t++}})(),zo=function(t){const e=Dl(t),n=new xl;n.update(e);const i=n.digest();return Ai.encodeByteArray(i)},Ot=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ot.apply(null,i):typeof i=="object"?e+=$(i):e+=i,e+=" "}return e};let gt=null,rr=!0;const yd=function(t,e){m(!0,"Can't turn on custom loggers persistently."),Ge.logLevel=x.VERBOSE,gt=Ge.log.bind(Ge)},q=function(...t){if(rr===!0&&(rr=!1,gt===null&&_d.get("logging_enabled")===!0&&yd()),gt){const e=Ot.apply(null,t);gt(e)}},Mt=function(t){return function(...e){q(t,...e)}},hi=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ot(...t);Ge.error(e)},_e=function(...t){const e=`FIREBASE FATAL ERROR: ${Ot(...t)}`;throw Ge.error(e),new Error(e)},X=function(...t){const e="FIREBASE WARNING: "+Ot(...t);Ge.warn(e)},vd=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&X("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ed=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Je="[MIN_NAME]",Le="[MAX_NAME]",rt=function(t,e){if(t===e)return 0;if(t===Je||e===Le)return-1;if(e===Je||t===Le)return 1;{const n=or(t),i=or(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},bd=function(t,e){return t===e?0:t<e?-1:1},ut=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+$(e))},ji=function(t){if(typeof t!="object"||t===null)return $(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=$(e[i]),n+=":",n+=ji(t[e[i]]);return n+="}",n},Go=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function J(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ko=function(t){m(!qo(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let s,r,o,a,c;t===0?(r=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),r=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-i-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const h=l.join("");let d="";for(c=0;c<64;c+=8){let u=parseInt(h.substr(c,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},wd=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Cd=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Id(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const Td=new RegExp("^-?(0*)\\d{1,10}$"),Sd=-2147483648,kd=2147483647,or=function(t){if(Td.test(t)){const e=Number(t);if(e>=Sd&&e<=kd)return e}return null},ot=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw X("Exception was thrown by user callback.",n),e},Math.floor(0))}},Rd=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},yt=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Ad{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,go(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){X(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Nd{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(q("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',X(e)}}class Kt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Kt.OWNER="owner";/**
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
 */const $i="5",Yo="v",Qo="s",Xo="r",Jo="f",Zo=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ea="ls",ta="p",di="ac",na="websocket",ia="long_polling";/**
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
 */class sa{constructor(e,n,i,s,r=!1,o="",a=!1,c=!1,l=null){this.secure=n,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function xd(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ra(t,e,n){m(typeof e=="string","typeof type must == string"),m(typeof n=="object","typeof params must == object");let i;if(e===na)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ia)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xd(t)&&(n.ns=t.namespace);const s=[];return J(n,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Dd{constructor(){this.counters_={}}incrementCounter(e,n=1){ye(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return hl(this.counters_)}}/**
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
 */const $n={},Wn={};function Wi(t){const e=t.toString();return $n[e]||($n[e]=new Dd),$n[e]}function Pd(t,e){const n=t.toString();return Wn[n]||(Wn[n]=e()),Wn[n]}/**
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
 */class Od{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ot(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ar="start",Md="close",Ld="pLPCommand",Fd="pRTLPCB",oa="id",aa="pw",ca="ser",Ud="cb",Bd="seg",jd="ts",$d="d",Wd="dframe",la=1870,ua=30,Hd=la-ua,Vd=25e3,zd=3e4;class ze{constructor(e,n,i,s,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mt(e),this.stats_=Wi(n),this.urlFn=c=>(this.appCheckToken&&(c[di]=this.appCheckToken),ra(n,ia,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Od(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zd)),Ed(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hi((...r)=>{const[o,a,c,l,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ar)this.id=a,this.password=c;else if(o===Md)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ar]="t",i[ca]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Ud]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Yo]=$i,this.transportSessionId&&(i[Qo]=this.transportSessionId),this.lastSessionId&&(i[ea]=this.lastSessionId),this.applicationId&&(i[ta]=this.applicationId),this.appCheckToken&&(i[di]=this.appCheckToken),typeof location<"u"&&location.hostname&&Zo.test(location.hostname)&&(i[Xo]=Jo);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ze.forceAllow_=!0}static forceDisallow(){ze.forceDisallow_=!0}static isAvailable(){return ze.forceAllow_?!0:!ze.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wd()&&!Cd()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=$(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=to(n),s=Go(i,Hd);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[Wd]="t",i[oa]=e,i[aa]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=$(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Hi{constructor(e,n,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=gd(),window[Ld+this.uniqueCallbackIdentifier]=e,window[Fd+this.uniqueCallbackIdentifier]=n,this.myIFrame=Hi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){q("frame writing exception"),a.stack&&q(a.stack),q(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||q("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[oa]=this.myID,e[aa]=this.myPW,e[ca]=this.currentSerial;let n=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ua+i.length<=la;){const o=this.pendingSegs.shift();i=i+"&"+Bd+s+"="+o.seg+"&"+jd+s+"="+o.ts+"&"+$d+s+"="+o.d,s++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(i,Math.floor(Vd)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{q("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const qd=16384,Gd=45e3;let nn=null;typeof MozWebSocket<"u"?nn=MozWebSocket:typeof WebSocket<"u"&&(nn=WebSocket);class se{constructor(e,n,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mt(this.connId),this.stats_=Wi(n),this.connURL=se.connectionURL_(n,o,a,s,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,s,r){const o={};return o[Yo]=$i,typeof location<"u"&&location.hostname&&Zo.test(location.hostname)&&(o[Xo]=Jo),n&&(o[Qo]=n),i&&(o[ea]=i),s&&(o[di]=s),r&&(o[ta]=r),ra(e,na,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xe.set("previous_websocket_failure",!0);try{let i;Cl(),this.mySock=new nn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){se.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&nn!==null&&!se.forceDisallow_}static previouslyFailed(){return xe.isInMemoryStorage||xe.get("previous_websocket_failure")===!0}markConnectionHealthy(){xe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=It(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=$(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Go(n,qd);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Gd))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}se.responsesRequiredToBeHealthy=2;se.healthyTimeout=3e4;/**
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
 */class kt{static get ALL_TRANSPORTS(){return[ze,se]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=se&&se.isAvailable();let i=n&&!se.previouslyFailed();if(e.webSocketOnly&&(n||X("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[se];else{const s=this.transports_=[];for(const r of kt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);kt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}kt.globalTransportInitialized_=!1;/**
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
 */const Kd=6e4,Yd=5e3,Qd=10*1024,Xd=100*1024,Hn="t",cr="d",Jd="s",lr="r",Zd="e",ur="o",hr="a",dr="n",fr="p",ef="h";class tf{constructor(e,n,i,s,r,o,a,c,l,h){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mt("c:"+this.id+":"),this.transportManager_=new kt(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=yt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Xd?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Qd?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Hn in e){const n=e[Hn];n===hr?this.upgradeIfSecondaryHealthy_():n===lr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ur&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ut("t",e),i=ut("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ut("t",e),i=ut("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ut(Hn,e);if(cr in e){const i=e[cr];if(n===ef){const s={...i};this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===dr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Jd?this.onConnectionShutdown_(i):n===lr?this.onReset_(i):n===Zd?hi("Server Error: "+i):n===ur?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hi("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),$i!==i&&X("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),yt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Kd))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):yt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yd))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ha{put(e,n,i,s){}merge(e,n,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class da{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const s=this.getInitialEvent(e);s&&n.apply(i,s)}off(e,n,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===n&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class sn extends da{static getInstance(){return new sn}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!lo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const pr=32,mr=768;class N{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function A(){return new N("")}function I(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ie(t){return t.pieces_.length-t.pieceNum_}function D(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new N(t.pieces_,e)}function fa(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function nf(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function pa(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ma(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new N(e,0)}function U(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof N)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&n.push(i[s])}return new N(n,0)}function S(t){return t.pieceNum_>=t.pieces_.length}function Y(t,e){const n=I(t),i=I(e);if(n===null)return e;if(n===i)return Y(D(t),D(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Vi(t,e){if(Ie(t)!==Ie(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function re(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ie(t)>Ie(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class sf{constructor(e,n){this.errorPrefix_=n,this.parts_=pa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=bn(this.parts_[i]);_a(this)}}function rf(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bn(e),_a(t)}function of(t){const e=t.parts_.pop();t.byteLength_-=bn(e),t.parts_.length>0&&(t.byteLength_-=1)}function _a(t){if(t.byteLength_>mr)throw new Error(t.errorPrefix_+"has a key path longer than "+mr+" bytes ("+t.byteLength_+").");if(t.parts_.length>pr)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pr+") or object contains a cycle "+Ae(t))}function Ae(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class zi extends da{static getInstance(){return new zi}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ht=1e3,af=300*1e3,_r=30*1e3,cf=1.3,lf=3e4,uf="server_kill",gr=3;class fe extends ha{constructor(e,n,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=fe.nextPersistentConnectionId_++,this.log_=Mt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ht,this.maxReconnectDelay_=af,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zi.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&sn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const s=++this.requestNumber_,r={r:s,a:e,b:n};this.log_($(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const n=new vn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;fe.warnOnListenWarnings_(c,n),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ye(e,"w")){const i=Xe(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();X(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Al(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_r)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Rl(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,n)}sendUnlisten_(e,n,i,s){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,s){const r={p:n,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,i,s){this.putInternal("p",e,n,i,s)}merge(e,n,i,s){this.putInternal("m",e,n,i,s)}putInternal(e,n,i,s,r){this.initConnection_();const o={p:n,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):hi("Unrecognized action received from server: "+$(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ht,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ht,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lf&&(this.reconnectDelay_=ht),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*cf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+fe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(d){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?q("getToken() completed but was canceled"):(q("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new tf(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,f=>{X(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(uf)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&X(d),c())}}}interrupt(e){q("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){q("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Fs(this.interruptReasons_)&&(this.reconnectDelay_=ht,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(r=>ji(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const i=new N(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(n),r.delete(n),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,n){q("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gr&&(this.reconnectDelay_=_r,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){q("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ho.replace(/\./g,"-")]=1,lo()?e["framework.cordova"]=1:wl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=sn.getInstance().currentlyOnline();return Fs(this.interruptReasons_)&&e}}fe.nextPersistentConnectionId_=0;fe.nextConnectionId_=0;/**
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
 */class T{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new T(e,n)}}/**
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
 */class In{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new T(Je,e),s=new T(Je,n);return this.compare(i,s)!==0}minPost(){return T.MIN}}/**
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
 */let $t;class ga extends In{static get __EMPTY_NODE(){return $t}static set __EMPTY_NODE(e){$t=e}compare(e,n){return rt(e.name,n.name)}isDefinedOn(e){throw it("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return T.MIN}maxPost(){return new T(Le,$t)}makePost(e,n){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new T(e,$t)}toString(){return".key"}}const Ke=new ga;/**
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
 */class Wt{constructor(e,n,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class j{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??j.RED,this.left=s??Q.EMPTY_NODE,this.right=r??Q.EMPTY_NODE}copy(e,n,i,s,r){return new j(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Q.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,s;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return Q.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}j.RED=!0;j.BLACK=!1;class hf{copy(e,n,i,s,r){return this}insert(e,n,i){return new j(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Q{constructor(e,n=Q.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Q(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,j.BLACK,null,null))}remove(e){return new Q(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,j.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,s=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Wt(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Wt(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Wt(this.root_,null,this.comparator_,!0,e)}}Q.EMPTY_NODE=new hf;/**
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
 */function df(t,e){return rt(t.name,e.name)}function qi(t,e){return rt(t,e)}/**
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
 */let fi;function ff(t){fi=t}const ya=function(t){return typeof t=="number"?"number:"+Ko(t):"string:"+t},va=function(t){if(t.isLeafNode()){const e=t.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ye(e,".sv"),"Priority must be a string or number.")}else m(t===fi||t.isEmpty(),"priority of unexpected type.");m(t===fi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let yr;class B{static set __childrenNodeConstructor(e){yr=e}static get __childrenNodeConstructor(){return yr}constructor(e,n=B.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),va(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new B(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:B.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return S(e)?this:I(e)===".priority"?this.priorityNode_:B.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:B.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=I(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||Ie(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,B.__childrenNodeConstructor.EMPTY_NODE.updateChild(D(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ya(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ko(this.value_):e+=this.value_,this.lazyHash_=zo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===B.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof B.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,s=B.VALUE_TYPE_ORDER.indexOf(n),r=B.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+n),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}B.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ea,ba;function pf(t){Ea=t}function mf(t){ba=t}class _f extends In{compare(e,n){const i=e.node.getPriority(),s=n.node.getPriority(),r=i.compareTo(s);return r===0?rt(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return T.MIN}maxPost(){return new T(Le,new B("[PRIORITY-POST]",ba))}makePost(e,n){const i=Ea(e);return new T(n,new B("[PRIORITY-POST]",i))}toString(){return".priority"}}const M=new _f;/**
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
 */const gf=Math.log(2);class yf{constructor(e){const n=r=>parseInt(Math.log(r)/gf,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const rn=function(t,e,n,i){t.sort(e);const s=function(c,l){const h=l-c;let d,u;if(h===0)return null;if(h===1)return d=t[c],u=n?n(d):d,new j(u,d.node,j.BLACK,null,null);{const f=parseInt(h/2,10)+c,_=s(c,f),v=s(f+1,l);return d=t[f],u=n?n(d):d,new j(u,d.node,j.BLACK,_,v)}},r=function(c){let l=null,h=null,d=t.length;const u=function(_,v){const w=d-_,O=d;d-=_;const y=s(w+1,O),E=t[w],R=n?n(E):E;f(new j(R,E.node,v,null,y))},f=function(_){l?(l.left=_,l=_):(h=_,l=_)};for(let _=0;_<c.count;++_){const v=c.nextBitIsOne(),w=Math.pow(2,c.count-(_+1));v?u(w,j.BLACK):(u(w,j.BLACK),u(w,j.RED))}return h},o=new yf(t.length),a=r(o);return new Q(i||e,a)};/**
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
 */let Vn;const Ve={};class de{static get Default(){return m(Ve&&M,"ChildrenNode.ts has not been loaded"),Vn=Vn||new de({".priority":Ve},{".priority":M}),Vn}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Xe(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Q?n:null}hasIndex(e){return ye(this.indexSet_,e.toString())}addIndex(e,n){m(e!==Ke,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=n.getIterator(T.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=rn(i,e.getCompare()):a=Ve;const c=e.toString(),l={...this.indexSet_};l[c]=e;const h={...this.indexes_};return h[c]=a,new de(h,l)}addToIndexes(e,n){const i=Jt(this.indexes_,(s,r)=>{const o=Xe(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===Ve)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(T.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),rn(a,o.getCompare())}else return Ve;else{const a=n.get(e.name);let c=s;return a&&(c=c.remove(new T(e.name,a))),c.insert(e,e.node)}});return new de(i,this.indexSet_)}removeFromIndexes(e,n){const i=Jt(this.indexes_,s=>{if(s===Ve)return s;{const r=n.get(e.name);return r?s.remove(new T(e.name,r)):s}});return new de(i,this.indexSet_)}}/**
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
 */let dt;class b{static get EMPTY_NODE(){return dt||(dt=new b(new Q(qi),null,de.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&va(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||dt}updatePriority(e){return this.children_.isEmpty()?this:new b(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?dt:n}}getChild(e){const n=I(e);return n===null?this:this.getImmediateChild(n).getChild(D(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(m(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new T(e,n);let s,r;n.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?dt:this.priorityNode_;return new b(s,o,r)}}updateChild(e,n){const i=I(e);if(i===null)return n;{m(I(e)!==".priority"||Ie(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(D(e),n);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,s=0,r=!0;if(this.forEachChild(M,(o,a)=>{n[o]=a.val(e),i++,r&&b.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ya(this.getPriority().val())+":"),this.forEachChild(M,(n,i)=>{const s=i.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":zo(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new T(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new T(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new T(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,T.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,T.Wrap);let r=s.peek();for(;r!=null&&n.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Lt?-1:0}withIndex(e){if(e===Ke||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new b(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ke||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(M),s=n.getIterator(M);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ke?null:this.indexMap_.get(e.toString())}}b.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vf extends b{constructor(){super(new Q(qi),b.EMPTY_NODE,de.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return b.EMPTY_NODE}isEmpty(){return!1}}const Lt=new vf;Object.defineProperties(T,{MIN:{value:new T(Je,b.EMPTY_NODE)},MAX:{value:new T(Le,Lt)}});ga.__EMPTY_NODE=b.EMPTY_NODE;B.__childrenNodeConstructor=b;ff(Lt);mf(Lt);/**
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
 */const Ef=!0;function V(t,e=null){if(t===null)return b.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new B(n,V(e))}if(!(t instanceof Array)&&Ef){const n=[];let i=!1;if(J(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=V(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),n.push(new T(o,c)))}}),n.length===0)return b.EMPTY_NODE;const r=rn(n,df,o=>o.name,qi);if(i){const o=rn(n,M.getCompare());return new b(r,V(e),new de({".priority":o},{".priority":M}))}else return new b(r,V(e),de.Default)}else{let n=b.EMPTY_NODE;return J(t,(i,s)=>{if(ye(t,i)&&i.substring(0,1)!=="."){const r=V(s);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(i,r))}}),n.updatePriority(V(e))}}pf(V);/**
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
 */class bf extends In{constructor(e){super(),this.indexPath_=e,m(!S(e)&&I(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),s=this.extractChild(n.node),r=i.compareTo(s);return r===0?rt(e.name,n.name):r}makePost(e,n){const i=V(e),s=b.EMPTY_NODE.updateChild(this.indexPath_,i);return new T(n,s)}maxPost(){const e=b.EMPTY_NODE.updateChild(this.indexPath_,Lt);return new T(Le,e)}toString(){return pa(this.indexPath_,0).join("/")}}/**
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
 */class wf extends In{compare(e,n){const i=e.node.compareTo(n.node);return i===0?rt(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return T.MIN}maxPost(){return T.MAX}makePost(e,n){const i=V(e);return new T(n,i)}toString(){return".value"}}const Cf=new wf;/**
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
 */function wa(t){return{type:"value",snapshotNode:t}}function Ze(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Rt(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function At(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function If(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Gi{constructor(e){this.index_=e}updateChild(e,n,i,s,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(Rt(n,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ze(n,i)):o.trackChildChange(At(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(M,(s,r)=>{n.hasChild(s)||i.trackChildChange(Rt(s,r))}),n.isLeafNode()||n.forEachChild(M,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(At(s,r,o))}else i.trackChildChange(Ze(s,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?b.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Nt{constructor(e){this.indexedFilter_=new Gi(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nt.getStartPost_(e),this.endPost_=Nt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,s,r,o){return this.matches(new T(n,i))||(i=b.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,s,r,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=b.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(b.EMPTY_NODE);const r=this;return n.forEachChild(M,(o,a)=>{r.matches(new T(o,a))||(s=s.updateImmediateChild(o,b.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Tf{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Nt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,s,r,o){return this.rangedFilter_.matches(new T(n,i))||(i=b.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,s,r,o):this.fullLimitUpdateChild_(e,n,i,r,o)}updateFullNode(e,n,i){let s;if(n.isLeafNode()||n.isEmpty())s=b.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=b.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(b.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,b.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,f)=>d(f,u)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const c=new T(n,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(n)){const d=a.getImmediateChild(n);let u=s.getChildAfterChild(this.index_,l,this.reverse_);for(;u!=null&&(u.name===n||a.hasChild(u.name));)u=s.getChildAfterChild(this.index_,u,this.reverse_);const f=u==null?1:o(u,c);if(h&&!i.isEmpty()&&f>=0)return r?.trackChildChange(At(n,i,d)),a.updateImmediateChild(n,i);{r?.trackChildChange(Rt(n,d));const v=a.updateImmediateChild(n,b.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r?.trackChildChange(Ze(u.name,u.node)),v.updateImmediateChild(u.name,u.node)):v}}else return i.isEmpty()?e:h&&o(l,c)>=0?(r!=null&&(r.trackChildChange(Rt(l.name,l.node)),r.trackChildChange(Ze(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(l.name,b.EMPTY_NODE)):e}}/**
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
 */class Ki{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=M}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Je}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Le}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===M}copy(){const e=new Ki;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Sf(t){return t.loadsAllData()?new Gi(t.getIndex()):t.hasLimit()?new Tf(t):new Nt(t)}function vr(t){const e={};if(t.isDefault())return e;let n;if(t.index_===M?n="$priority":t.index_===Cf?n="$value":t.index_===Ke?n="$key":(m(t.index_ instanceof bf,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=$(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=$(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+$(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=$(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+$(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Er(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==M&&(e.i=t.index_.toString()),e}/**
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
 */class on extends ha{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Mt("p:rest:"),this.listens_={}}listen(e,n,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=on.getListenId_(e,i),a={};this.listens_[o]=a;const c=vr(e._queryParams);this.restRequest_(r+".json",c,(l,h)=>{let d=h;if(l===404&&(d=null,l=null),l===null&&this.onDataUpdate_(r,d,!1,i),Xe(this.listens_,o)===a){let u;l?l===401?u="permission_denied":u="rest_error:"+l:u="ok",s(u,null)}})}unlisten(e,n){const i=on.getListenId_(e,n);delete this.listens_[i]}get(e){const n=vr(e._queryParams),i=e._path.toString(),s=new vn;return this.restRequest_(i+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(n.auth=s.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Nl(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=It(a.responseText)}catch{X("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&X("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class kf{constructor(){this.rootNode_=b.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function an(){return{value:null,children:new Map}}function Ca(t,e,n){if(S(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=I(e);t.children.has(i)||t.children.set(i,an());const s=t.children.get(i);e=D(e),Ca(s,e,n)}}function pi(t,e,n){t.value!==null?n(e,t.value):Rf(t,(i,s)=>{const r=new N(e.toString()+"/"+i);pi(s,r,n)})}function Rf(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Af{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&J(this.last_,(i,s)=>{n[i]=n[i]-s}),this.last_=e,n}}/**
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
 */const br=10*1e3,Nf=30*1e3,xf=300*1e3;class Df{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Af(e);const i=br+(Nf-br)*Math.random();yt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;J(e,(s,r)=>{r>0&&ye(this.statsToReport_,s)&&(n[s]=r,i=!0)}),i&&this.server_.reportStats(n),yt(this.reportStats_.bind(this),Math.floor(Math.random()*2*xf))}}/**
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
 */var oe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(oe||(oe={}));function Ia(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qi(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class cn{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=oe.ACK_USER_WRITE,this.source=Ia()}operationForChild(e){if(S(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new N(e));return new cn(A(),n,this.revert)}}else return m(I(this.path)===e,"operationForChild called for unrelated child."),new cn(D(this.path),this.affectedTree,this.revert)}}/**
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
 */class xt{constructor(e,n){this.source=e,this.path=n,this.type=oe.LISTEN_COMPLETE}operationForChild(e){return S(this.path)?new xt(this.source,A()):new xt(this.source,D(this.path))}}/**
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
 */class Fe{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=oe.OVERWRITE}operationForChild(e){return S(this.path)?new Fe(this.source,A(),this.snap.getImmediateChild(e)):new Fe(this.source,D(this.path),this.snap)}}/**
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
 */class Dt{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=oe.MERGE}operationForChild(e){if(S(this.path)){const n=this.children.subtree(new N(e));return n.isEmpty()?null:n.value?new Fe(this.source,A(),n.value):new Dt(this.source,A(),n)}else return m(I(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Dt(this.source,D(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ue{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(S(e))return this.isFullyInitialized()&&!this.filtered_;const n=I(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Pf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Of(t,e,n,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(If(o.childName,o.snapshotNode))}),ft(t,s,"child_removed",e,i,n),ft(t,s,"child_added",e,i,n),ft(t,s,"child_moved",r,i,n),ft(t,s,"child_changed",e,i,n),ft(t,s,"value",e,i,n),s}function ft(t,e,n,i,s,r){const o=i.filter(a=>a.type===n);o.sort((a,c)=>Lf(t,a,c)),o.forEach(a=>{const c=Mf(t,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function Mf(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Lf(t,e,n){if(e.childName==null||n.childName==null)throw it("Should only compare child_ events.");const i=new T(e.childName,e.snapshotNode),s=new T(n.childName,n.snapshotNode);return t.index_.compare(i,s)}/**
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
 */function Tn(t,e){return{eventCache:t,serverCache:e}}function vt(t,e,n,i){return Tn(new Ue(e,n,i),t.serverCache)}function Ta(t,e,n,i){return Tn(t.eventCache,new Ue(e,n,i))}function mi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Be(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let zn;const Ff=()=>(zn||(zn=new Q(bd)),zn);class P{static fromObject(e){let n=new P(null);return J(e,(i,s)=>{n=n.set(new N(i),s)}),n}constructor(e,n=Ff()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:A(),value:this.value};if(S(e))return null;{const i=I(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(D(e),n);return r!=null?{path:U(new N(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(S(e))return this;{const n=I(e),i=this.children.get(n);return i!==null?i.subtree(D(e)):new P(null)}}set(e,n){if(S(e))return new P(n,this.children);{const i=I(e),r=(this.children.get(i)||new P(null)).set(D(e),n),o=this.children.insert(i,r);return new P(this.value,o)}}remove(e){if(S(e))return this.children.isEmpty()?new P(null):new P(null,this.children);{const n=I(e),i=this.children.get(n);if(i){const s=i.remove(D(e));let r;return s.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,s),this.value===null&&r.isEmpty()?new P(null):new P(this.value,r)}else return this}}get(e){if(S(e))return this.value;{const n=I(e),i=this.children.get(n);return i?i.get(D(e)):null}}setTree(e,n){if(S(e))return n;{const i=I(e),r=(this.children.get(i)||new P(null)).setTree(D(e),n);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new P(this.value,o)}}fold(e){return this.fold_(A(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(U(e,s),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,A(),n)}findOnPath_(e,n,i){const s=this.value?i(n,this.value):!1;if(s)return s;if(S(e))return null;{const r=I(e),o=this.children.get(r);return o?o.findOnPath_(D(e),U(n,r),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,A(),n)}foreachOnPath_(e,n,i){if(S(e))return this;{this.value&&i(n,this.value);const s=I(e),r=this.children.get(s);return r?r.foreachOnPath_(D(e),U(n,s),i):new P(null)}}foreach(e){this.foreach_(A(),e)}foreach_(e,n){this.children.inorderTraversal((i,s)=>{s.foreach_(U(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class ae{constructor(e){this.writeTree_=e}static empty(){return new ae(new P(null))}}function Et(t,e,n){if(S(e))return new ae(new P(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Y(s,e);return r=r.updateChild(o,n),new ae(t.writeTree_.set(s,r))}else{const s=new P(n),r=t.writeTree_.setTree(e,s);return new ae(r)}}}function wr(t,e,n){let i=t;return J(n,(s,r)=>{i=Et(i,U(e,s),r)}),i}function Cr(t,e){if(S(e))return ae.empty();{const n=t.writeTree_.setTree(e,new P(null));return new ae(n)}}function _i(t,e){return We(t,e)!=null}function We(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Y(n.path,e)):null}function Ir(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(M,(i,s)=>{e.push(new T(i,s))}):t.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new T(i,s.value))}),e}function Ce(t,e){if(S(e))return t;{const n=We(t,e);return n!=null?new ae(new P(n)):new ae(t.writeTree_.subtree(e))}}function gi(t){return t.writeTree_.isEmpty()}function et(t,e){return Sa(A(),t.writeTree_,e)}function Sa(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):n=Sa(U(t,s),r,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(U(t,".priority"),i)),n}}/**
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
 */function Xi(t,e){return Na(e,t)}function Uf(t,e,n,i,s){m(i>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Et(t.visibleWrites,e,n)),t.lastWriteId=i}function Bf(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function jf(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);m(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$f(a,i.path)?s=!1:re(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Wf(t),!0;if(i.snap)t.visibleWrites=Cr(t.visibleWrites,i.path);else{const a=i.children;J(a,c=>{t.visibleWrites=Cr(t.visibleWrites,U(i.path,c))})}return!0}else return!1}function $f(t,e){if(t.snap)return re(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&re(U(t.path,n),e))return!0;return!1}function Wf(t){t.visibleWrites=ka(t.allWrites,Hf,A()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Hf(t){return t.visible}function ka(t,e,n){let i=ae.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const o=r.path;let a;if(r.snap)re(n,o)?(a=Y(n,o),i=Et(i,a,r.snap)):re(o,n)&&(a=Y(o,n),i=Et(i,A(),r.snap.getChild(a)));else if(r.children){if(re(n,o))a=Y(n,o),i=wr(i,a,r.children);else if(re(o,n))if(a=Y(o,n),S(a))i=wr(i,A(),r.children);else{const c=Xe(r.children,I(a));if(c){const l=c.getChild(D(a));i=Et(i,A(),l)}}}else throw it("WriteRecord should have .snap or .children")}}return i}function Ra(t,e,n,i,s){if(!i&&!s){const r=We(t.visibleWrites,e);if(r!=null)return r;{const o=Ce(t.visibleWrites,e);if(gi(o))return n;if(n==null&&!_i(o,A()))return null;{const a=n||b.EMPTY_NODE;return et(o,a)}}}else{const r=Ce(t.visibleWrites,e);if(!s&&gi(r))return n;if(!s&&n==null&&!_i(r,A()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(re(l.path,e)||re(e,l.path))},a=ka(t.allWrites,o,e),c=n||b.EMPTY_NODE;return et(a,c)}}}function Vf(t,e,n){let i=b.EMPTY_NODE;const s=We(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(M,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(n){const r=Ce(t.visibleWrites,e);return n.forEachChild(M,(o,a)=>{const c=et(Ce(r,new N(o)),a);i=i.updateImmediateChild(o,c)}),Ir(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ce(t.visibleWrites,e);return Ir(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function zf(t,e,n,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=U(e,n);if(_i(t.visibleWrites,r))return null;{const o=Ce(t.visibleWrites,r);return gi(o)?s.getChild(n):et(o,s.getChild(n))}}function qf(t,e,n,i){const s=U(e,n),r=We(t.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(n)){const o=Ce(t.visibleWrites,s);return et(o,i.getNode().getImmediateChild(n))}else return null}function Gf(t,e){return We(t.visibleWrites,e)}function Kf(t,e,n,i,s,r,o){let a;const c=Ce(t.visibleWrites,e),l=We(c,A());if(l!=null)a=l;else if(n!=null)a=et(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=u.getNext();for(;f&&h.length<s;)d(f,i)!==0&&h.push(f),f=u.getNext();return h}else return[]}function Yf(){return{visibleWrites:ae.empty(),allWrites:[],lastWriteId:-1}}function ln(t,e,n,i){return Ra(t.writeTree,t.treePath,e,n,i)}function Ji(t,e){return Vf(t.writeTree,t.treePath,e)}function Tr(t,e,n,i){return zf(t.writeTree,t.treePath,e,n,i)}function un(t,e){return Gf(t.writeTree,U(t.treePath,e))}function Qf(t,e,n,i,s,r){return Kf(t.writeTree,t.treePath,e,n,i,s,r)}function Zi(t,e,n){return qf(t.writeTree,t.treePath,e,n)}function Aa(t,e){return Na(U(t.treePath,e),t.writeTree)}function Na(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Xf{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;m(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(i,At(i,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(i,Rt(i,s.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(i,Ze(i,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(i,At(i,e.snapshotNode,s.oldSnap));else throw it("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Jf{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const xa=new Jf;class es{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ue(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zi(this.writes_,e,i)}}getChildAfterChild(e,n,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Be(this.viewCache_),r=Qf(this.writes_,s,n,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Zf(t){return{filter:t}}function ep(t,e){m(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tp(t,e,n,i,s){const r=new Xf;let o,a;if(n.type===oe.OVERWRITE){const l=n;l.source.fromUser?o=yi(t,e,l.path,l.snap,i,s,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!S(l.path),o=hn(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===oe.MERGE){const l=n;l.source.fromUser?o=ip(t,e,l.path,l.children,i,s,r):(m(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=vi(t,e,l.path,l.children,i,s,a,r))}else if(n.type===oe.ACK_USER_WRITE){const l=n;l.revert?o=op(t,e,l.path,i,s,r):o=sp(t,e,l.path,l.affectedTree,i,s,r)}else if(n.type===oe.LISTEN_COMPLETE)o=rp(t,e,n.path,i,r);else throw it("Unknown operation type: "+n.type);const c=r.getChanges();return np(e,o,c),{viewCache:o,changes:c}}function np(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=mi(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(wa(mi(e)))}}function Da(t,e,n,i,s,r){const o=e.eventCache;if(un(i,n)!=null)return e;{let a,c;if(S(n))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Be(e),h=l instanceof b?l:b.EMPTY_NODE,d=Ji(i,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const l=ln(i,Be(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=I(n);if(l===".priority"){m(Ie(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=Tr(i,n,h,c);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=D(n);let d;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const u=Tr(i,n,o.getNode(),c);u!=null?d=o.getNode().getImmediateChild(l).updateChild(h,u):d=o.getNode().getImmediateChild(l)}else d=Zi(i,l,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),l,d,h,s,r):a=o.getNode()}}return vt(e,a,o.isFullyInitialized()||S(n),t.filter.filtersNodes())}}function hn(t,e,n,i,s,r,o,a){const c=e.serverCache;let l;const h=o?t.filter:t.filter.getIndexedFilter();if(S(n))l=h.updateFullNode(c.getNode(),i,null);else if(h.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(n,i);l=h.updateFullNode(c.getNode(),f,null)}else{const f=I(n);if(!c.isCompleteForPath(n)&&Ie(n)>1)return e;const _=D(n),w=c.getNode().getImmediateChild(f).updateChild(_,i);f===".priority"?l=h.updatePriority(c.getNode(),w):l=h.updateChild(c.getNode(),f,w,_,xa,null)}const d=Ta(e,l,c.isFullyInitialized()||S(n),h.filtersNodes()),u=new es(s,d,r);return Da(t,d,n,s,u,a)}function yi(t,e,n,i,s,r,o){const a=e.eventCache;let c,l;const h=new es(s,e,r);if(S(n))l=t.filter.updateFullNode(e.eventCache.getNode(),i,o),c=vt(e,l,!0,t.filter.filtersNodes());else{const d=I(n);if(d===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),i),c=vt(e,l,a.isFullyInitialized(),a.isFiltered());else{const u=D(n),f=a.getNode().getImmediateChild(d);let _;if(S(u))_=i;else{const v=h.getCompleteChild(d);v!=null?fa(u)===".priority"&&v.getChild(ma(u)).isEmpty()?_=v:_=v.updateChild(u,i):_=b.EMPTY_NODE}if(f.equals(_))c=e;else{const v=t.filter.updateChild(a.getNode(),d,_,u,h,o);c=vt(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Sr(t,e){return t.eventCache.isCompleteForChild(e)}function ip(t,e,n,i,s,r,o){let a=e;return i.foreach((c,l)=>{const h=U(n,c);Sr(e,I(h))&&(a=yi(t,a,h,l,s,r,o))}),i.foreach((c,l)=>{const h=U(n,c);Sr(e,I(h))||(a=yi(t,a,h,l,s,r,o))}),a}function kr(t,e,n){return n.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function vi(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;S(n)?l=i:l=new P(null).setTree(n,i);const h=e.serverCache.getNode();return l.children.inorderTraversal((d,u)=>{if(h.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),_=kr(t,f,u);c=hn(t,c,new N(d),_,s,r,o,a)}}),l.children.inorderTraversal((d,u)=>{const f=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!h.hasChild(d)&&!f){const _=e.serverCache.getNode().getImmediateChild(d),v=kr(t,_,u);c=hn(t,c,new N(d),v,s,r,o,a)}}),c}function sp(t,e,n,i,s,r,o){if(un(s,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(S(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return hn(t,e,n,c.getNode().getChild(n),s,r,a,o);if(S(n)){let l=new P(null);return c.getNode().forEachChild(Ke,(h,d)=>{l=l.set(new N(h),d)}),vi(t,e,n,l,s,r,a,o)}else return e}else{let l=new P(null);return i.foreach((h,d)=>{const u=U(n,h);c.isCompleteForPath(u)&&(l=l.set(h,c.getNode().getChild(u)))}),vi(t,e,n,l,s,r,a,o)}}function rp(t,e,n,i,s){const r=e.serverCache,o=Ta(e,r.getNode(),r.isFullyInitialized()||S(n),r.isFiltered());return Da(t,o,n,i,xa,s)}function op(t,e,n,i,s,r){let o;if(un(i,n)!=null)return e;{const a=new es(i,e,s),c=e.eventCache.getNode();let l;if(S(n)||I(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ln(i,Be(e));else{const d=e.serverCache.getNode();m(d instanceof b,"serverChildren would be complete if leaf node"),h=Ji(i,d)}h=h,l=t.filter.updateFullNode(c,h,r)}else{const h=I(n);let d=Zi(i,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?l=t.filter.updateChild(c,h,d,D(n),a,r):e.eventCache.getNode().hasChild(h)?l=t.filter.updateChild(c,h,b.EMPTY_NODE,D(n),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ln(i,Be(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||un(i,A())!=null,vt(e,l,o,t.filter.filtersNodes())}}/**
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
 */class ap{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Gi(i.getIndex()),r=Sf(i);this.processor_=Zf(r);const o=n.serverCache,a=n.eventCache,c=s.updateFullNode(b.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(b.EMPTY_NODE,a.getNode(),null),h=new Ue(c,o.isFullyInitialized(),s.filtersNodes()),d=new Ue(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Tn(d,h),this.eventGenerator_=new Pf(this.query_)}get query(){return this.query_}}function cp(t){return t.viewCache_.serverCache.getNode()}function lp(t,e){const n=Be(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!S(e)&&!n.getImmediateChild(I(e)).isEmpty())?n.getChild(e):null}function Rr(t){return t.eventRegistrations_.length===0}function up(t,e){t.eventRegistrations_.push(e)}function Ar(t,e,n){const i=[];if(n){m(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return i}function Nr(t,e,n,i){e.type===oe.MERGE&&e.source.queryId!==null&&(m(Be(t.viewCache_),"We should always have a full cache before handling merges"),m(mi(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=tp(t.processor_,s,e,n,i);return ep(t.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Pa(t,r.changes,r.viewCache.eventCache.getNode(),null)}function hp(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(M,(r,o)=>{i.push(Ze(r,o))}),n.isFullyInitialized()&&i.push(wa(n.getNode())),Pa(t,i,n.getNode(),e)}function Pa(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return Of(t.eventGenerator_,e,n,s)}/**
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
 */let dn;class dp{constructor(){this.views=new Map}}function fp(t){m(!dn,"__referenceConstructor has already been defined"),dn=t}function pp(){return m(dn,"Reference.ts has not been loaded"),dn}function mp(t){return t.views.size===0}function ts(t,e,n,i){const s=e.source.queryId;if(s!==null){const r=t.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),Nr(r,e,n,i)}else{let r=[];for(const o of t.views.values())r=r.concat(Nr(o,e,n,i));return r}}function _p(t,e,n,i,s){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=ln(n,s?i:null),c=!1;a?c=!0:i instanceof b?(a=Ji(n,i),c=!1):(a=b.EMPTY_NODE,c=!1);const l=Tn(new Ue(a,c,!1),new Ue(i,s,!1));return new ap(e,l)}return o}function gp(t,e,n,i,s,r){const o=_p(t,e,i,s,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),up(o,n),hp(o,n)}function yp(t,e,n,i){const s=e._queryIdentifier,r=[];let o=[];const a=Te(t);if(s==="default")for(const[c,l]of t.views.entries())o=o.concat(Ar(l,n,i)),Rr(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=t.views.get(s);c&&(o=o.concat(Ar(c,n,i)),Rr(c)&&(t.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Te(t)&&r.push(new(pp())(e._repo,e._path)),{removed:r,events:o}}function Oa(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ye(t,e){let n=null;for(const i of t.views.values())n=n||lp(i,e);return n}function Ma(t,e){if(e._queryParams.loadsAllData())return Sn(t);{const i=e._queryIdentifier;return t.views.get(i)}}function La(t,e){return Ma(t,e)!=null}function Te(t){return Sn(t)!=null}function Sn(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let fn;function vp(t){m(!fn,"__referenceConstructor has already been defined"),fn=t}function Ep(){return m(fn,"Reference.ts has not been loaded"),fn}let bp=1;class xr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new P(null),this.pendingWriteTree_=Yf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Fa(t,e,n,i,s){return Uf(t.pendingWriteTree_,e,n,i,s),s?Ft(t,new Fe(Ia(),e,n)):[]}function De(t,e,n=!1){const i=Bf(t.pendingWriteTree_,e);if(jf(t.pendingWriteTree_,e)){let r=new P(null);return i.snap!=null?r=r.set(A(),!0):J(i.children,o=>{r=r.set(new N(o),!0)}),Ft(t,new cn(i.path,r,n))}else return[]}function kn(t,e,n){return Ft(t,new Fe(Yi(),e,n))}function wp(t,e,n){const i=P.fromObject(n);return Ft(t,new Dt(Yi(),e,i))}function Cp(t,e){return Ft(t,new xt(Yi(),e))}function Ip(t,e,n){const i=is(t,n);if(i){const s=ss(i),r=s.path,o=s.queryId,a=Y(r,e),c=new xt(Qi(o),a);return rs(t,r,c)}else return[]}function Ei(t,e,n,i,s=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||La(o,e))){const c=yp(o,e,n,i);mp(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const h=l.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(u,f)=>Te(f));if(h&&!d){const u=t.syncPointTree_.subtree(r);if(!u.isEmpty()){const f=kp(u);for(let _=0;_<f.length;++_){const v=f[_],w=v.query,O=ja(t,v);t.listenProvider_.startListening(bt(w),pn(t,w),O.hashFn,O.onComplete)}}}!d&&l.length>0&&!i&&(h?t.listenProvider_.stopListening(bt(e),null):l.forEach(u=>{const f=t.queryToTagMap.get(Rn(u));t.listenProvider_.stopListening(bt(u),f)}))}Rp(t,l)}return a}function Tp(t,e,n,i){const s=is(t,i);if(s!=null){const r=ss(s),o=r.path,a=r.queryId,c=Y(o,e),l=new Fe(Qi(a),c,n);return rs(t,o,l)}else return[]}function Sp(t,e,n,i){const s=is(t,i);if(s){const r=ss(s),o=r.path,a=r.queryId,c=Y(o,e),l=P.fromObject(n),h=new Dt(Qi(a),c,l);return rs(t,o,h)}else return[]}function Dr(t,e,n,i=!1){const s=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(s,(u,f)=>{const _=Y(u,s);r=r||Ye(f,_),o=o||Te(f)});let a=t.syncPointTree_.get(s);a?(o=o||Te(a),r=r||Ye(a,A())):(a=new dp,t.syncPointTree_=t.syncPointTree_.set(s,a));let c;r!=null?c=!0:(c=!1,r=b.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((f,_)=>{const v=Ye(_,A());v&&(r=r.updateImmediateChild(f,v))}));const l=La(a,e);if(!l&&!e._queryParams.loadsAllData()){const u=Rn(e);m(!t.queryToTagMap.has(u),"View does not exist, but we have a tag");const f=Ap();t.queryToTagMap.set(u,f),t.tagToQueryMap.set(f,u)}const h=Xi(t.pendingWriteTree_,s);let d=gp(a,e,n,h,r,c);if(!l&&!o&&!i){const u=Ma(a,e);d=d.concat(Np(t,e,u))}return d}function ns(t,e,n){const s=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=Y(o,e),l=Ye(a,c);if(l)return l});return Ra(s,e,r,n,!0)}function Ft(t,e){return Ua(e,t.syncPointTree_,null,Xi(t.pendingWriteTree_,A()))}function Ua(t,e,n,i){if(S(t.path))return Ba(t,e,n,i);{const s=e.get(A());n==null&&s!=null&&(n=Ye(s,A()));let r=[];const o=I(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,h=Aa(i,o);r=r.concat(Ua(a,c,l,h))}return s&&(r=r.concat(ts(s,t,i,n))),r}}function Ba(t,e,n,i){const s=e.get(A());n==null&&s!=null&&(n=Ye(s,A()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=Aa(i,o),h=t.operationForChild(o);h&&(r=r.concat(Ba(h,a,c,l)))}),s&&(r=r.concat(ts(s,t,i,n))),r}function ja(t,e){const n=e.query,i=pn(t,n);return{hashFn:()=>(cp(e)||b.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Ip(t,n._path,i):Cp(t,n._path);{const r=Id(s,n);return Ei(t,n,null,r)}}}}function pn(t,e){const n=Rn(e);return t.queryToTagMap.get(n)}function Rn(t){return t._path.toString()+"$"+t._queryIdentifier}function is(t,e){return t.tagToQueryMap.get(e)}function ss(t){const e=t.indexOf("$");return m(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new N(t.substr(0,e))}}function rs(t,e,n){const i=t.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const s=Xi(t.pendingWriteTree_,e);return ts(i,n,s,null)}function kp(t){return t.fold((e,n,i)=>{if(n&&Te(n))return[Sn(n)];{let s=[];return n&&(s=Oa(n)),J(i,(r,o)=>{s=s.concat(o)}),s}})}function bt(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ep())(t._repo,t._path):t}function Rp(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const s=Rn(i),r=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(r)}}}function Ap(){return bp++}function Np(t,e,n){const i=e._path,s=pn(t,e),r=ja(t,n),o=t.listenProvider_.startListening(bt(e),s,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(i);if(s)m(!Te(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,h,d)=>{if(!S(l)&&h&&Te(h))return[Sn(h).query];{let u=[];return h&&(u=u.concat(Oa(h).map(f=>f.query))),J(d,(f,_)=>{u=u.concat(_)}),u}});for(let l=0;l<c.length;++l){const h=c[l];t.listenProvider_.stopListening(bt(h),pn(t,h))}}return o}/**
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
 */class os{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new os(n)}node(){return this.node_}}class as{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=U(this.path_,e);return new as(this.syncTree_,n)}node(){return ns(this.syncTree_,this.path_)}}const xp=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pr=function(t,e,n){if(!t||typeof t!="object")return t;if(m(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Dp(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Pp(t[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Dp=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:m(!1,"Unexpected server value: "+t)}},Pp=function(t,e,n){t.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const s=e.node();if(m(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Op=function(t,e,n,i){return cs(e,new as(n,t),i)},$a=function(t,e,n){return cs(t,new os(e),n)};function cs(t,e,n){const i=t.getPriority().val(),s=Pr(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Pr(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new B(a,V(s)):t}else{const o=t;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new B(s))),o.forEachChild(M,(a,c)=>{const l=cs(c,e.getImmediateChild(a),n);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class ls{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function us(t,e){let n=e instanceof N?e:new N(e),i=t,s=I(n);for(;s!==null;){const r=Xe(i.node.children,s)||{children:{},childCount:0};i=new ls(s,i,r),n=D(n),s=I(n)}return i}function at(t){return t.node.value}function Wa(t,e){t.node.value=e,bi(t)}function Ha(t){return t.node.childCount>0}function Mp(t){return at(t)===void 0&&!Ha(t)}function An(t,e){J(t.node.children,(n,i)=>{e(new ls(n,t,i))})}function Va(t,e,n,i){n&&e(t),An(t,s=>{Va(s,e,!0)})}function Lp(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ut(t){return new N(t.parent===null?t.name:Ut(t.parent)+"/"+t.name)}function bi(t){t.parent!==null&&Fp(t.parent,t.name,t)}function Fp(t,e,n){const i=Mp(n),s=ye(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,bi(t)):!i&&!s&&(t.node.children[e]=n.node,t.node.childCount++,bi(t))}/**
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
 */const Up=/[\[\].#$\/\u0000-\u001F\u007F]/,Bp=/[\[\].#$\u0000-\u001F\u007F]/,qn=10*1024*1024,za=function(t){return typeof t=="string"&&t.length!==0&&!Up.test(t)},qa=function(t){return typeof t=="string"&&t.length!==0&&!Bp.test(t)},jp=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),qa(t)},Ga=function(t,e,n,i){i&&e===void 0||hs(Ni(t,"value"),e,n)},hs=function(t,e,n){const i=n instanceof N?new sf(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ae(i));if(typeof e=="function")throw new Error(t+"contains a function "+Ae(i)+" with contents = "+e.toString());if(qo(e))throw new Error(t+"contains "+e.toString()+" "+Ae(i));if(typeof e=="string"&&e.length>qn/3&&bn(e)>qn)throw new Error(t+"contains a string greater than "+qn+" utf8 bytes "+Ae(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(J(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!za(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ae(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rf(i,o),hs(t,a,i),of(i)}),s&&r)throw new Error(t+' contains ".value" child '+Ae(i)+" in addition to actual children.")}},Ka=function(t,e,n,i){if(!qa(n))throw new Error(Ni(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$p=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ka(t,e,n)},Ya=function(t,e){if(I(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Wp=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!za(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!jp(n))throw new Error(Ni(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Hp{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ds(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();n!==null&&!Vi(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function Qa(t,e,n){ds(t,n),Xa(t,i=>Vi(i,e))}function ge(t,e,n){ds(t,n),Xa(t,i=>re(i,e)||re(e,i))}function Xa(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){const r=s.path;e(r)?(Vp(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Vp(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();gt&&q("event: "+n.toString()),ot(i)}}}/**
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
 */const zp="repo_interrupt",qp=25;class Gp{constructor(e,n,i,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Hp,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=an(),this.transactionQueueTree_=new ls,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Kp(t,e,n){if(t.stats_=Wi(t.repoInfo_),t.forceRestClient_||Rd())t.server_=new on(t.repoInfo_,(i,s,r,o)=>{Or(t,i,s,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Mr(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new fe(t.repoInfo_,e,(i,s,r,o)=>{Or(t,i,s,r,o)},i=>{Mr(t,i)},i=>{Yp(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=Pd(t.repoInfo_,()=>new Df(t.stats_,t.server_)),t.infoData_=new kf,t.infoSyncTree_=new xr({startListening:(i,s,r,o)=>{let a=[];const c=t.infoData_.getNode(i._path);return c.isEmpty()||(a=kn(t.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ps(t,"connected",!1),t.serverSyncTree_=new xr({startListening:(i,s,r,o)=>(t.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);ge(t.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{t.server_.unlisten(i,s)}})}function Ja(t){const n=t.infoData_.getNode(new N(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function fs(t){return xp({timestamp:Ja(t)})}function Or(t,e,n,i,s){t.dataUpdateCount++;const r=new N(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const c=Jt(n,l=>V(l));o=Sp(t.serverSyncTree_,r,c,s)}else{const c=V(n);o=Tp(t.serverSyncTree_,r,c,s)}else if(i){const c=Jt(n,l=>V(l));o=wp(t.serverSyncTree_,r,c)}else{const c=V(n);o=kn(t.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Nn(t,r)),ge(t.eventQueue_,a,o)}function Mr(t,e){ps(t,"connected",e),e===!1&&Xp(t)}function Yp(t,e){J(e,(n,i)=>{ps(t,n,i)})}function ps(t,e,n){const i=new N("/.info/"+e),s=V(n);t.infoData_.updateSnapshot(i,s);const r=kn(t.infoSyncTree_,i,s);ge(t.eventQueue_,i,r)}function Za(t){return t.nextWriteId_++}function Qp(t,e,n,i,s){ms(t,"set",{path:e.toString(),value:n,priority:i});const r=fs(t),o=V(n,i),a=ns(t.serverSyncTree_,e),c=$a(o,a,r),l=Za(t),h=Fa(t.serverSyncTree_,e,c,l,!0);ds(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(u,f)=>{const _=u==="ok";_||X("set at "+e+" failed: "+u);const v=De(t.serverSyncTree_,l,!_);ge(t.eventQueue_,e,v),tm(t,s,u,f)});const d=sc(t,e);Nn(t,d),ge(t.eventQueue_,d,[])}function Xp(t){ms(t,"onDisconnectEvents");const e=fs(t),n=an();pi(t.onDisconnect_,A(),(s,r)=>{const o=Op(s,r,t.serverSyncTree_,e);Ca(n,s,o)});let i=[];pi(n,A(),(s,r)=>{i=i.concat(kn(t.serverSyncTree_,s,r));const o=sc(t,s);Nn(t,o)}),t.onDisconnect_=an(),ge(t.eventQueue_,A(),i)}function Jp(t,e,n){let i;I(e._path)===".info"?i=Dr(t.infoSyncTree_,e,n):i=Dr(t.serverSyncTree_,e,n),Qa(t.eventQueue_,e._path,i)}function Zp(t,e,n){let i;I(e._path)===".info"?i=Ei(t.infoSyncTree_,e,n):i=Ei(t.serverSyncTree_,e,n),Qa(t.eventQueue_,e._path,i)}function em(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zp)}function ms(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),q(n,...e)}function tm(t,e,n,i){e&&ot(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function ec(t,e,n){return ns(t.serverSyncTree_,e,n)||b.EMPTY_NODE}function _s(t,e=t.transactionQueueTree_){if(e||xn(t,e),at(e)){const n=nc(t,e);m(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&nm(t,Ut(e),n)}else Ha(e)&&An(e,n=>{_s(t,n)})}function nm(t,e,n){const i=n.map(l=>l.currentWriteId),s=ec(t,e,i);let r=s;const o=s.hash();for(let l=0;l<n.length;l++){const h=n[l];m(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=Y(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;t.server_.put(c.toString(),a,l=>{ms(t,"transaction put response",{path:c.toString(),status:l});let h=[];if(l==="ok"){const d=[];for(let u=0;u<n.length;u++)n[u].status=2,h=h.concat(De(t.serverSyncTree_,n[u].currentWriteId)),n[u].onComplete&&d.push(()=>n[u].onComplete(null,!0,n[u].currentOutputSnapshotResolved)),n[u].unwatcher();xn(t,us(t.transactionQueueTree_,e)),_s(t,t.transactionQueueTree_),ge(t.eventQueue_,e,h);for(let u=0;u<d.length;u++)ot(d[u])}else{if(l==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{X("transaction at "+c.toString()+" failed: "+l);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=l}Nn(t,e)}},o)}function Nn(t,e){const n=tc(t,e),i=Ut(n),s=nc(t,n);return im(t,s,i),i}function im(t,e,n){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=Y(n,c.path);let h=!1,d;if(m(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,s=s.concat(De(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=qp)h=!0,d="maxretry",s=s.concat(De(t.serverSyncTree_,c.currentWriteId,!0));else{const u=ec(t,c.path,o);c.currentInputSnapshot=u;const f=e[a].update(u.val());if(f!==void 0){hs("transaction failed: Data returned ",f,c.path);let _=V(f);typeof f=="object"&&f!=null&&ye(f,".priority")||(_=_.updatePriority(u.getPriority()));const w=c.currentWriteId,O=fs(t),y=$a(_,u,O);c.currentOutputSnapshotRaw=_,c.currentOutputSnapshotResolved=y,c.currentWriteId=Za(t),o.splice(o.indexOf(w),1),s=s.concat(Fa(t.serverSyncTree_,c.path,y,c.currentWriteId,c.applyLocally)),s=s.concat(De(t.serverSyncTree_,w,!0))}else h=!0,d="nodata",s=s.concat(De(t.serverSyncTree_,c.currentWriteId,!0))}ge(t.eventQueue_,n,s),s=[],h&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}xn(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)ot(i[a]);_s(t,t.transactionQueueTree_)}function tc(t,e){let n,i=t.transactionQueueTree_;for(n=I(e);n!==null&&at(i)===void 0;)i=us(i,n),e=D(e),n=I(e);return i}function nc(t,e){const n=[];return ic(t,e,n),n.sort((i,s)=>i.order-s.order),n}function ic(t,e,n){const i=at(e);if(i)for(let s=0;s<i.length;s++)n.push(i[s]);An(e,s=>{ic(t,s,n)})}function xn(t,e){const n=at(e);if(n){let i=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[i]=n[s],i++);n.length=i,Wa(e,n.length>0?n:void 0)}An(e,i=>{xn(t,i)})}function sc(t,e){const n=Ut(tc(t,e)),i=us(t.transactionQueueTree_,e);return Lp(i,s=>{Gn(t,s)}),Gn(t,i),Va(i,s=>{Gn(t,s)}),n}function Gn(t,e){const n=at(e);if(n){const i=[];let s=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(m(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(De(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Wa(e,void 0):n.length=r+1,ge(t.eventQueue_,Ut(e),s);for(let o=0;o<i.length;o++)ot(i[o])}}/**
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
 */function sm(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let s=n[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function rm(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):X(`Invalid query segment '${n}' in query '${t}'`)}return e}const Lr=function(t,e){const n=om(t),i=n.namespace;n.domain==="firebase.com"&&_e(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&_e("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||vd();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new sa(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new N(n.pathString)}},om=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(s=sm(t.substring(h,d)));const u=rm(t.substring(Math.min(t.length,d)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=i}"ns"in u&&(r=u.ns)}return{host:e,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const Fr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",am=(function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Fr.charAt(n%64),n=Math.floor(n/64);m(n===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Fr.charAt(e[s]);return m(o.length===20,"nextPushId: Length should be 20."),o}})();/**
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
 */class cm{constructor(e,n,i,s){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$(this.snapshot.exportVal())}}class lm{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class um{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class gs{constructor(e,n,i,s){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=s}get key(){return S(this._path)?null:fa(this._path)}get ref(){return new ke(this._repo,this._path)}get _queryIdentifier(){const e=Er(this._queryParams),n=ji(e);return n==="{}"?"default":n}get _queryObject(){return Er(this._queryParams)}isEqual(e){if(e=te(e),!(e instanceof gs))return!1;const n=this._repo===e._repo,i=Vi(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+nf(this._path)}}class ke extends gs{constructor(e,n){super(e,n,new Ki,!1)}get parent(){const e=ma(this._path);return e===null?null:new ke(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class mn{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new N(e),i=tt(this.ref,e);return new mn(this._node.getChild(n),i,M)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new mn(s,tt(this.ref,i),M)))}hasChild(e){const n=new N(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ys(t,e){return t=te(t),t._checkNotDeleted("ref"),e!==void 0?tt(t._root,e):t._root}function tt(t,e){return t=te(t),I(t._path)===null?$p("child","path",e):Ka("child","path",e),new ke(t._repo,U(t._path,e))}function hm(t,e){t=te(t),Ya("push",t._path),Ga("push",e,t._path,!0);const n=Ja(t._repo),i=am(n),s=tt(t,i),r=tt(t,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function rc(t,e){t=te(t),Ya("set",t._path),Ga("set",e,t._path,!1);const n=new vn;return Qp(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class vs{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lm(this,e,n):null}createEvent(e,n){m(e.childName!=null,"Child events should have a childName.");const i=tt(new ke(n._repo,n._path),e.childName),s=n._queryParams.getIndex();return new cm(e.type,this,new mn(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof vs?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function dm(t,e,n,i,s){const r=new um(n,void 0),o=new vs(e,r);return Jp(t._repo,t,o),()=>Zp(t._repo,t,o)}function fm(t,e,n,i){return dm(t,"child_added",e)}fp(ke);vp(ke);/**
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
 */const pm="FIREBASE_DATABASE_EMULATOR_HOST",wi={};let mm=!1;function _m(t,e,n,i){const s=e.lastIndexOf(":"),r=e.substring(0,s),o=Pt(r);t.repoInfo_=new sa(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function gm(t,e,n,i,s){let r=i||t.options.databaseURL;r===void 0&&(t.options.projectId||_e("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),q("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Lr(r,s),a=o.repoInfo,c;typeof process<"u"&&nr&&(c=nr[pm]),c?(r=`http://${c}?ns=${a.namespace}`,o=Lr(r,s),a=o.repoInfo):o.repoInfo.secure;const l=new Nd(t.name,t.options,e);Wp("Invalid Firebase Database URL",o),S(o.path)||_e("Database URL must point to the root of a Firebase Database (not including a child path).");const h=vm(a,t,l,new Ad(t,n));return new Em(h,t)}function ym(t,e){const n=wi[e];(!n||n[t.key]!==t)&&_e(`Database ${e}(${t.repoInfo_}) has already been deleted.`),em(t),delete n[t.key]}function vm(t,e,n,i){let s=wi[e.name];s||(s={},wi[e.name]=s);let r=s[t.toURLString()];return r&&_e("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Gp(t,mm,n,i),s[t.toURLString()]=r,r}let Em=class{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Kp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ke(this._repo,A())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ym(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_e("Cannot call "+e+" on a deleted database.")}};function bm(t=Pi(),e){const n=st(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=so("database");i&&wm(n,...i)}return n}function wm(t,e,n,i={}){t=te(t),t._checkNotDeleted("useEmulator");const s=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(s===t._repoInternal.repoInfo_.host&&Tt(i,r.repoInfo_.emulatorOptions))return;_e("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&_e('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Kt(Kt.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:ao(i.mockUserToken,t.app.options.projectId);o=new Kt(a)}Pt(e)&&(oo(e),co("Database",!0)),_m(r,s,i,o)}/**
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
 */function Cm(t){fd(yo),me(new ue("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return gm(i,s,r,n)},"PUBLIC").setMultipleInstances(!0)),ne(ir,sr,t),ne(ir,sr,"esm2020")}/**
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
 */const Im={".sv":"timestamp"};function oc(){return Im}fe.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};fe.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Cm();/**
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
 */const ac="firebasestorage.googleapis.com",cc="storageBucket",Tm=120*1e3,Sm=600*1e3;/**
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
 */class F extends Se{constructor(e,n,i=0){super(Kn(e),`Firebase Storage: ${n} (${Kn(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,F.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kn(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var L;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(L||(L={}));function Kn(t){return"storage/"+t}function Es(){const t="An unknown error occurred, please check the error payload for server response.";return new F(L.UNKNOWN,t)}function km(t){return new F(L.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Rm(t){return new F(L.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Am(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new F(L.UNAUTHENTICATED,t)}function Nm(){return new F(L.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function xm(t){return new F(L.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Dm(){return new F(L.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Pm(){return new F(L.CANCELED,"User canceled the upload/download.")}function Om(t){return new F(L.INVALID_URL,"Invalid URL '"+t+"'.")}function Mm(t){return new F(L.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Lm(){return new F(L.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+cc+"' property when initializing the app?")}function Fm(){return new F(L.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Um(){return new F(L.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Bm(t){return new F(L.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ci(t){return new F(L.INVALID_ARGUMENT,t)}function lc(){return new F(L.APP_DELETED,"The Firebase app was deleted.")}function jm(t){return new F(L.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wt(t,e){return new F(L.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function pt(t){throw new F(L.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Z{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=Z.makeFromUrl(e,n)}catch{return new Z(e,"")}if(i.path==="")return i;throw Mm(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(R){R.path_=decodeURIComponent(R.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),u="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${h}/b/${s}/o${u}`,"i"),_={bucket:1,path:3},v=n===ac?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",O=new RegExp(`^https?://${v}/${s}/${w}`,"i"),E=[{regex:a,indices:c,postModify:r},{regex:f,indices:_,postModify:l},{regex:O,indices:{bucket:1,path:2},postModify:l}];for(let R=0;R<E.length;R++){const W=E[R],he=W.regex.exec(e);if(he){const Bt=he[W.indices.bucket];let lt=he[W.indices.path];lt||(lt=""),i=new Z(Bt,lt),W.postModify(i);break}}if(i==null)throw Om(e);return i}}class $m{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Wm(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return a===2}let l=!1;function h(...w){l||(l=!0,e.apply(null,w))}function d(w){s=setTimeout(()=>{s=null,t(f,c())},w)}function u(){r&&clearTimeout(r)}function f(w,...O){if(l){u();return}if(w){u(),h.call(null,w,...O);return}if(c()||o){u(),h.call(null,w,...O);return}i<64&&(i*=2);let E;a===1?(a=2,E=0):E=(i+Math.random())*1e3,d(E)}let _=!1;function v(w){_||(_=!0,u(),!l&&(s!==null?(w||(a=2),clearTimeout(s),d(0)):w||(a=1)))}return d(0),r=setTimeout(()=>{o=!0,v(!0)},n),v}function Hm(t){t(!1)}/**
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
 */function Vm(t){return t!==void 0}function zm(t){return typeof t=="object"&&!Array.isArray(t)}function bs(t){return typeof t=="string"||t instanceof String}function Ur(t){return ws()&&t instanceof Blob}function ws(){return typeof Blob<"u"}function Br(t,e,n,i){if(i<e)throw Ci(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Ci(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Cs(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function uc(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}var Pe;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Pe||(Pe={}));/**
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
 */function qm(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||s||r}/**
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
 */class Gm{constructor(e,n,i,s,r,o,a,c,l,h,d,u=!0,f=!1){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=d,this.retry=u,this.isUsingEmulator=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Ht(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Pe.NO_ERROR,c=r.getStatus();if(!a||qm(c,this.additionalRetryCodes_)&&this.retry){const h=r.getErrorCode()===Pe.ABORT;i(!1,new Ht(!1,null,h));return}const l=this.successCodes_.indexOf(c)!==-1;i(!0,new Ht(l,r))})},n=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Vm(c)?r(c):r()}catch(c){o(c)}else if(a!==null){const c=Es();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?lc():Pm();o(c)}else{const c=Dm();o(c)}};this.canceled_?n(!1,new Ht(!1,null,!0)):this.backoffId_=Wm(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Hm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ht{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function Km(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ym(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Qm(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Xm(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Jm(t,e,n,i,s,r,o=!0,a=!1){const c=uc(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return Qm(h,e),Km(h,n),Ym(h,r),Xm(h,i),new Gm(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o,a)}/**
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
 */function Zm(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function e_(...t){const e=Zm();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(ws())return new Blob(t);throw new F(L.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function t_(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function n_(t){if(typeof atob>"u")throw Bm("base-64");return atob(t)}/**
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
 */const le={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yn{constructor(e,n){this.data=e,this.contentType=n||null}}function i_(t,e){switch(t){case le.RAW:return new Yn(hc(e));case le.BASE64:case le.BASE64URL:return new Yn(dc(t,e));case le.DATA_URL:return new Yn(r_(e),o_(e))}throw Es()}function hc(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=t.charCodeAt(++n);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function s_(t){let e;try{e=decodeURIComponent(t)}catch{throw wt(le.DATA_URL,"Malformed data URL.")}return hc(e)}function dc(t,e){switch(t){case le.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw wt(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case le.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw wt(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=n_(e)}catch(s){throw s.message.includes("polyfill")?s:wt(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class fc{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wt(le.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=a_(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function r_(t){const e=new fc(t);return e.base64?dc(le.BASE64,e.rest):s_(e.rest)}function o_(t){return new fc(t).contentType}function a_(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ee{constructor(e,n){let i=0,s="";Ur(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ur(this.data_)){const i=this.data_,s=t_(i,e,n);return s===null?null:new Ee(s)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new Ee(i,!0)}}static getBlob(...e){if(ws()){const n=e.map(i=>i instanceof Ee?i.data_:i);return new Ee(e_.apply(null,n))}else{const n=e.map(o=>bs(o)?i_(le.RAW,o).data:o.data_);let i=0;n.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[r++]=o[a]}),new Ee(s,!0)}}uploadData(){return this.data_}}/**
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
 */function pc(t){let e;try{e=JSON.parse(t)}catch{return null}return zm(e)?e:null}/**
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
 */function c_(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function l_(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function mc(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function u_(t,e){return e}class G{constructor(e,n,i,s){this.server=e,this.local=n||e,this.writable=!!i,this.xform=s||u_}}let Vt=null;function h_(t){return!bs(t)||t.length<2?t:mc(t)}function _c(){if(Vt)return Vt;const t=[];t.push(new G("bucket")),t.push(new G("generation")),t.push(new G("metageneration")),t.push(new G("name","fullPath",!0));function e(r,o){return h_(o)}const n=new G("name");n.xform=e,t.push(n);function i(r,o){return o!==void 0?Number(o):o}const s=new G("size");return s.xform=i,t.push(s),t.push(new G("timeCreated")),t.push(new G("updated")),t.push(new G("md5Hash",null,!0)),t.push(new G("cacheControl",null,!0)),t.push(new G("contentDisposition",null,!0)),t.push(new G("contentEncoding",null,!0)),t.push(new G("contentLanguage",null,!0)),t.push(new G("contentType",null,!0)),t.push(new G("metadata","customMetadata",!0)),Vt=t,Vt}function d_(t,e){function n(){const i=t.bucket,s=t.fullPath,r=new Z(i,s);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function f_(t,e,n){const i={};i.type="file";const s=n.length;for(let r=0;r<s;r++){const o=n[r];i[o.local]=o.xform(i,e[o.server])}return d_(i,t),i}function gc(t,e,n){const i=pc(e);return i===null?null:f_(t,i,n)}function p_(t,e,n,i){const s=pc(e);if(s===null||!bs(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(l=>{const h=t.bucket,d=t.fullPath,u="/b/"+o(h)+"/o/"+o(d),f=Cs(u,n,i),_=uc({alt:"media",token:l});return f+_})[0]}function m_(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class yc{constructor(e,n,i,s){this.url=e,this.method=n,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function vc(t){if(!t)throw Es()}function __(t,e){function n(i,s){const r=gc(t,s,e);return vc(r!==null),r}return n}function g_(t,e){function n(i,s){const r=gc(t,s,e);return vc(r!==null),p_(r,s,t.host,t._protocol)}return n}function Ec(t){function e(n,i){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Nm():s=Am():n.getStatus()===402?s=Rm(t.bucket):n.getStatus()===403?s=xm(t.path):s=i,s.status=n.getStatus(),s.serverResponse=i.serverResponse,s}return e}function y_(t){const e=Ec(t);function n(i,s){let r=e(i,s);return i.getStatus()===404&&(r=km(t.path)),r.serverResponse=s.serverResponse,r}return n}function v_(t,e,n){const i=e.fullServerUrl(),s=Cs(i,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new yc(s,r,g_(t,n),o);return a.errorHandler=y_(e),a}function E_(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function b_(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=E_(null,e)),i}function w_(t,e,n,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let E="";for(let R=0;R<2;R++)E=E+Math.random().toString().slice(2);return E}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=b_(e,i,s),h=m_(l,n),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,u=`\r
--`+c+"--",f=Ee.getBlob(d,i,u);if(f===null)throw Fm();const _={name:l.fullPath},v=Cs(r,t.host,t._protocol),w="POST",O=t.maxUploadRetryTime,y=new yc(v,w,__(t,n),O);return y.urlParams=_,y.headers=o,y.body=f.uploadData(),y.errorHandler=Ec(e),y}class C_{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Pe.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Pe.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Pe.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,s,r){if(this.sent_)throw pt("cannot .send() more than once");if(Pt(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw pt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw pt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw pt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw pt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class I_ extends C_{initXhr(){this.xhr_.responseType="text"}}function bc(){return new I_}/**
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
 */class je{constructor(e,n){this._service=e,n instanceof Z?this._location=n:this._location=Z.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new je(e,n)}get root(){const e=new Z(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mc(this._location.path)}get storage(){return this._service}get parent(){const e=c_(this._location.path);if(e===null)return null;const n=new Z(this._location.bucket,e);return new je(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw jm(e)}}function T_(t,e,n){t._throwIfRoot("uploadBytes");const i=w_(t.storage,t._location,_c(),new Ee(e,!0),n);return t.storage.makeRequestWithTokens(i,bc).then(s=>({metadata:s,ref:t}))}function S_(t){t._throwIfRoot("getDownloadURL");const e=v_(t.storage,t._location,_c());return t.storage.makeRequestWithTokens(e,bc).then(n=>{if(n===null)throw Um();return n})}function k_(t,e){const n=l_(t._location.path,e),i=new Z(t._location.bucket,n);return new je(t.storage,i)}/**
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
 */function R_(t){return/^[A-Za-z]+:\/\//.test(t)}function A_(t,e){return new je(t,e)}function wc(t,e){if(t instanceof Is){const n=t;if(n._bucket==null)throw Lm();const i=new je(n,n._bucket);return e!=null?wc(i,e):i}else return e!==void 0?k_(t,e):t}function N_(t,e){if(e&&R_(e)){if(t instanceof Is)return A_(t,e);throw Ci("To use ref(service, url), the first argument must be a Storage instance.")}else return wc(t,e)}function jr(t,e){const n=e?.[cc];return n==null?null:Z.makeFromBucketSpec(n,t)}function x_(t,e,n,i={}){t.host=`${e}:${n}`;const s=Pt(e);s&&(oo(`https://${t.host}/b`),co("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken=typeof r=="string"?r:ao(r,t.app.options.projectId))}class Is{constructor(e,n,i,s,r,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=ac,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Tm,this._maxUploadRetryTime=Sm,this._requests=new Set,s!=null?this._bucket=Z.makeFromBucketSpec(s,this._host):this._bucket=jr(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Z.makeFromBucketSpec(this._url,e):this._bucket=jr(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Br("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Br("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(go(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new je(this,e)}_makeRequest(e,n,i,s,r=!0){if(this._deleted)return new $m(lc());{const o=Jm(e,this._appId,i,s,n,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const $r="@firebase/storage",Wr="0.14.0";/**
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
 */const Cc="storage";function D_(t,e,n){return t=te(t),T_(t,e,n)}function P_(t){return t=te(t),S_(t)}function O_(t,e){return t=te(t),N_(t,e)}function M_(t=Pi(),e){t=te(t);const i=st(t,Cc).getImmediate({identifier:e}),s=so("storage");return s&&L_(i,...s),i}function L_(t,e,n,i={}){x_(t,e,n,i)}function F_(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Is(n,i,s,e,yo)}function U_(){me(new ue(Cc,F_,"PUBLIC").setMultipleInstances(!0)),ne($r,Wr,""),ne($r,Wr,"esm2020")}U_();const B_={apiKey:"AIzaSyD9821q_YpfGHH9ZFPBXgVXQSyxbAfSGvk",authDomain:"aera-3f59e.firebaseapp.com",projectId:"aera-3f59e",storageBucket:"aera-3f59e.firebasestorage.app",messagingSenderId:"533520508445",appId:"1:533520508445:web:a0906e788e0d6e524888f4",measurementId:"G-J7K9HKBL6K",databaseURL:"https://aera-3f59e-default-rtdb.firebaseio.com"},Ts=vo(B_);cd(Ts);const Ss=bm(Ts),j_=M_(Ts);window.addEventListener("DOMContentLoaded",function(){document.getElementById("Typing-Region").focus()});document.getElementById("send").addEventListener("click",Ic);document.getElementById("Typing-Region").addEventListener("keypress",t=>{t.key==="Enter"&&(t.preventDefault(),Ic())});function Ic(){const t=document.getElementById("Typing-Region").innerText.trim();t!==""&&Tc(t,"text").then(e=>null)}document.querySelector("form").addEventListener("submit",async t=>{t.preventDefault();const e=document.querySelector("input").value.trim();if(e){const n=$_();sessionStorage.setItem("userId",n),sessionStorage.setItem("userName",e);const i=ys(Ss,`users/${n}`);await rc(i,{username:e,userId:n,online:!0,lastActive:oc()}),alert(`Welcome ${e}! You are now logged in.`),document.getElementsByClassName("FirstView")[0].style.display="none",document.querySelector("main").style.display="block",W_()}});function $_(){if(crypto?.randomUUID)return crypto.randomUUID();if(crypto?.getRandomValues){const t=new Uint32Array(4);return crypto.getRandomValues(t),t.join("-")}else return"user-"+Math.floor(Math.random()*1e6)}async function Tc(t,e){const n=hm(ys(Ss,"Messages")),i={userID:sessionStorage.getItem("userId"),userName:sessionStorage.getItem("userName"),type:e,msg:t,timeStamp:oc()};await rc(n,i),console.log("Message sent successfully")}function W_(){const t=ys(Ss,"Messages");fm(t,e=>{const n=e.val();H_(n)})}function H_(t){var e;t.userID===sessionStorage.getItem("userId")?e="You :":e=`${t.userName} :`;var n;if(t.type==="image")n=document.createElement("img"),n.src=t.msg,n.style.maxWidth="50vw",n.style.borderRadius="10px",n.style.margin="5px 0";else{var i=`${e} ${t.msg}`;n=document.createElement("div"),n.classList.add("NewMessage"),n.textContent=i,document.getElementById("Typing-Region").innerText=""}document.getElementById("Chat-Box").appendChild(n),document.getElementById("Typing-Region").focus()}document.getElementById("uploadBtn").addEventListener("click",()=>{document.getElementById("imageInput").click()});document.getElementById("imageInput").addEventListener("change",async t=>{const e=t.target.files[0];if(e)await V_(e);else return});async function V_(t){const e=`chatImages/${sessionStorage.getItem("userId")}/${Date.now()}_${t.name}`,n=O_(j_,e);await D_(n,t);const i=await P_(n);await Tc(i,"image")}function zt(t){if(typeof t!="string"||!t)throw new Error("expected a non-empty string, got: "+t)}function Qn(t){if(typeof t!="number")throw new Error("expected a number, got: "+t)}const z_=1,q_=1,He="emoji",nt="keyvalue",ks="favorites",G_="tokens",Sc="tokens",K_="unicode",kc="count",Y_="group",Q_="order",Rc="group-order",Ii="eTag",_n="url",Hr="skinTone",ct="readonly",Rs="readwrite",Ac="skinUnicodes",X_="skinUnicodes",J_="https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",Z_="en";function eg(t,e){const n=new Set,i=[];for(const s of t){const r=e(s);n.has(r)||(n.add(r),i.push(s))}return i}function Vr(t){return eg(t,e=>e.unicode)}function tg(t){function e(n,i,s){const r=i?t.createObjectStore(n,{keyPath:i}):t.createObjectStore(n);if(s)for(const[o,[a,c]]of Object.entries(s))r.createIndex(o,a,{multiEntry:c});return r}e(nt),e(He,K_,{[Sc]:[G_,!0],[Rc]:[[Y_,Q_]],[Ac]:[X_,!0]}),e(ks,void 0,{[kc]:[""]})}const Ti={},Yt={},gn={};function Nc(t,e,n){n.onerror=()=>e(n.error),n.onblocked=()=>e(new Error("IDB blocked")),n.onsuccess=()=>t(n.result)}async function ng(t){const e=await new Promise((n,i)=>{const s=indexedDB.open(t,z_);Ti[t]=s,s.onupgradeneeded=r=>{r.oldVersion<q_&&tg(s.result)},Nc(n,i,s)});return e.onclose=()=>As(t),e}function ig(t){return Yt[t]||(Yt[t]=ng(t)),Yt[t]}function ve(t,e,n,i){return new Promise((s,r)=>{const o=t.transaction(e,n,{durability:"relaxed"}),a=typeof e=="string"?o.objectStore(e):e.map(l=>o.objectStore(l));let c;i(a,o,l=>{c=l}),o.oncomplete=()=>s(c),o.onerror=()=>r(o.error)})}function As(t){const e=Ti[t],n=e&&e.result;if(n){n.close();const i=gn[t];if(i)for(const s of i)s()}delete Ti[t],delete Yt[t],delete gn[t]}function sg(t){return new Promise((e,n)=>{As(t);const i=indexedDB.deleteDatabase(t);Nc(e,n,i)})}function rg(t,e){let n=gn[t];n||(n=gn[t]=[]),n.push(e)}const og=new Set([":D","XD",":'D","O:)",":X",":P",";P","XP",":L",":Z",":j","8D","XO","8)",":B",":O",":S",":'o","Dx","X(","D:",":C",">0)",":3","</3","<3","\\M/",":E","8#"]);function Qe(t){return t.split(/[\s_]+/).map(e=>!e.match(/\w/)||og.has(e)?e.toLowerCase():e.replace(/[)(:,]/g,"").replace(/’/g,"'").toLowerCase()).filter(Boolean)}const ag=2;function xc(t){return t.filter(Boolean).map(e=>e.toLowerCase()).filter(e=>e.length>=ag)}function cg(t){return t.map(({annotation:n,emoticon:i,group:s,order:r,shortcodes:o,skins:a,tags:c,emoji:l,version:h})=>{const d=[...new Set(xc([...(o||[]).map(Qe).flat(),...(c||[]).map(Qe).flat(),...Qe(n),i]))].sort(),u={annotation:n,group:s,order:r,tags:c,tokens:d,unicode:l,version:h};if(i&&(u.emoticon=i),o&&(u.shortcodes=o),a){u.skinTones=[],u.skinUnicodes=[],u.skinVersions=[];for(const{tone:f,emoji:_,version:v}of a)u.skinTones.push(f),u.skinUnicodes.push(_),u.skinVersions.push(v)}return u})}function Dc(t,e,n,i){t[e](n).onsuccess=s=>i&&i(s.target.result)}function $e(t,e,n){Dc(t,"get",e,n)}function Pc(t,e,n){Dc(t,"getAll",e,n)}function Ns(t){t.commit&&t.commit()}function lg(t,e){let n=t[0];for(let i=1;i<t.length;i++){const s=t[i];e(n)>e(s)&&(n=s)}return n}function Oc(t,e){const n=lg(t,s=>s.length),i=[];for(const s of n)t.some(r=>r.findIndex(o=>e(o)===e(s))===-1)||i.push(s);return i}async function ug(t){return!await xs(t,nt,_n)}async function hg(t,e,n){const[i,s]=await Promise.all([Ii,_n].map(r=>xs(t,nt,r)));return i===n&&s===e}async function dg(t,e){return ve(t,He,ct,(i,s,r)=>{let o;const a=()=>{i.getAll(o&&IDBKeyRange.lowerBound(o,!0),50).onsuccess=c=>{const l=c.target.result;for(const h of l)if(o=h.unicode,e(h))return r(h);if(l.length<50)return r();a()}};a()})}async function Mc(t,e,n,i){try{const s=cg(e);await ve(t,[He,nt],Rs,([r,o],a)=>{let c,l,h=0;function d(){++h===2&&u()}function u(){if(!(c===i&&l===n)){r.clear();for(const f of s)r.put(f);o.put(i,Ii),o.put(n,_n),Ns(a)}}$e(o,Ii,f=>{c=f,d()}),$e(o,_n,f=>{l=f,d()})})}finally{}}async function fg(t,e){return ve(t,He,ct,(n,i,s)=>{const r=IDBKeyRange.bound([e,0],[e+1,0],!1,!0);Pc(n.index(Rc),r,s)})}async function Lc(t,e){const n=xc(Qe(e));return n.length?ve(t,He,ct,(i,s,r)=>{const o=[],a=()=>{o.length===n.length&&c()},c=()=>{const l=Oc(o,h=>h.unicode);r(l.sort((h,d)=>h.order<d.order?-1:1))};for(let l=0;l<n.length;l++){const h=n[l],d=l===n.length-1?IDBKeyRange.bound(h,h+"￿",!1,!0):IDBKeyRange.only(h);Pc(i.index(Sc),d,u=>{o.push(u),a()})}}):[]}async function pg(t,e){const n=await Lc(t,e);return n.length?n.filter(i=>(i.shortcodes||[]).map(r=>r.toLowerCase()).includes(e.toLowerCase()))[0]||null:await dg(t,s=>(s.shortcodes||[]).includes(e.toLowerCase()))||null}async function mg(t,e){return ve(t,He,ct,(n,i,s)=>$e(n,e,r=>{if(r)return s(r);$e(n.index(Ac),e,o=>s(o||null))}))}function xs(t,e,n){return ve(t,e,ct,(i,s,r)=>$e(i,n,r))}function _g(t,e,n,i){return ve(t,e,Rs,(s,r)=>{s.put(i,n),Ns(r)})}function gg(t,e){return ve(t,ks,Rs,(n,i)=>$e(n,e,s=>{n.put((s||0)+1,e),Ns(i)}))}function yg(t,e,n){return n===0?[]:ve(t,[ks,He],ct,([i,s],r,o)=>{const a=[];i.index(kc).openCursor(void 0,"prev").onsuccess=c=>{const l=c.target.result;if(!l)return o(a);function h(f){if(a.push(f),a.length===n)return o(a);l.continue()}const d=l.primaryKey,u=e.byName(d);if(u)return h(u);$e(s,d,f=>{if(f)return h(f);l.continue()})}})}const qt="";function vg(t,e){const n=new Map;for(const s of t){const r=e(s);for(const o of r){let a=n;for(let l=0;l<o.length;l++){const h=o.charAt(l);let d=a.get(h);d||(d=new Map,a.set(h,d)),a=d}let c=a.get(qt);c||(c=[],a.set(qt,c)),c.push(s)}}return(s,r)=>{let o=n;for(let l=0;l<s.length;l++){const h=s.charAt(l),d=o.get(h);if(d)o=d;else return[]}if(r)return o.get(qt)||[];const a=[],c=[o];for(;c.length;){const h=[...c.shift().entries()].sort((d,u)=>d[0]<u[0]?-1:1);for(const[d,u]of h)d===qt?a.push(...u):c.push(u)}return a}}const Eg=["name","url"];function bg(t){const e=t&&Array.isArray(t),n=e&&t.length&&(!t[0]||Eg.some(i=>!(i in t[0])));if(!e||n)throw new Error("Custom emojis are in the wrong format")}function zr(t){bg(t);const e=(u,f)=>u.name.toLowerCase()<f.name.toLowerCase()?-1:1,n=t.sort(e),s=vg(t,u=>{const f=new Set;if(u.shortcodes)for(const _ of u.shortcodes)for(const v of Qe(_))f.add(v);return f}),r=u=>s(u,!0),o=u=>s(u,!1),a=u=>{const f=Qe(u),_=f.map((v,w)=>(w<f.length-1?r:o)(v));return Oc(_,v=>v.name).sort(e)},c=new Map,l=new Map;for(const u of t){l.set(u.name.toLowerCase(),u);for(const f of u.shortcodes||[])c.set(f.toLowerCase(),u)}return{all:n,search:a,byShortcode:u=>c.get(u.toLowerCase()),byName:u=>l.get(u.toLowerCase())}}const wg=typeof wrappedJSObject<"u";function mt(t){if(!t)return t;if(wg&&(t=structuredClone(t)),delete t.tokens,t.skinTones){const e=t.skinTones.length;t.skins=Array(e);for(let n=0;n<e;n++)t.skins[n]={tone:t.skinTones[n],unicode:t.skinUnicodes[n],version:t.skinVersions[n]};delete t.skinTones,delete t.skinUnicodes,delete t.skinVersions}return t}function Fc(t){t||console.warn("emoji-picker-element is more efficient if the dataSource server exposes an ETag header.")}const Cg=["annotation","emoji","group","order","version"];function Ig(t){if(!t||!Array.isArray(t)||!t[0]||typeof t[0]!="object"||Cg.some(e=>!(e in t[0])))throw new Error("Emoji data is in the wrong format")}function Uc(t,e){if(Math.floor(t.status/100)!==2)throw new Error("Failed to fetch: "+e+":  "+t.status)}async function Tg(t){const e=await fetch(t,{method:"HEAD"});Uc(e,t);const n=e.headers.get("etag");return Fc(n),n}async function Si(t){const e=await fetch(t);Uc(e,t);const n=e.headers.get("etag");Fc(n);const i=await e.json();return Ig(i),[n,i]}function Sg(t){for(var e="",n=new Uint8Array(t),i=n.byteLength,s=-1;++s<i;)e+=String.fromCharCode(n[s]);return e}function kg(t){for(var e=t.length,n=new ArrayBuffer(e),i=new Uint8Array(n),s=-1;++s<e;)i[s]=t.charCodeAt(s);return n}async function Bc(t){const e=JSON.stringify(t);let n=kg(e);const i=await crypto.subtle.digest("SHA-1",n),s=Sg(i);return btoa(s)}async function Rg(t,e){let n,i=await Tg(e);if(!i){const s=await Si(e);i=s[0],n=s[1],i||(i=await Bc(n))}await hg(t,e,i)||(n||(n=(await Si(e))[1]),await Mc(t,n,e,i))}async function Ag(t,e){let[n,i]=await Si(e);n||(n=await Bc(i)),await Mc(t,i,e,n)}async function Ng(t,e){try{await Rg(t,e)}catch(n){if(n.name!=="InvalidStateError")throw n}}class xg{constructor({dataSource:e=J_,locale:n=Z_,customEmoji:i=[]}={}){this.dataSource=e,this.locale=n,this._dbName=`emoji-picker-element-${this.locale}`,this._db=void 0,this._lazyUpdate=void 0,this._custom=zr(i),this._clear=this._clear.bind(this),this._ready=this._init()}async _init(){const e=this._db=await ig(this._dbName);rg(this._dbName,this._clear);const n=this.dataSource;await ug(e)?await Ag(e,n):this._lazyUpdate=Ng(e,n)}async ready(){const e=async()=>(this._ready||(this._ready=this._init()),this._ready);await e(),this._db||await e()}async getEmojiByGroup(e){return Qn(e),await this.ready(),Vr(await fg(this._db,e)).map(mt)}async getEmojiBySearchQuery(e){zt(e),await this.ready();const n=this._custom.search(e),i=Vr(await Lc(this._db,e)).map(mt);return[...n,...i]}async getEmojiByShortcode(e){zt(e),await this.ready();const n=this._custom.byShortcode(e);return n||mt(await pg(this._db,e))}async getEmojiByUnicodeOrName(e){zt(e),await this.ready();const n=this._custom.byName(e);return n||mt(await mg(this._db,e))}async getPreferredSkinTone(){return await this.ready(),await xs(this._db,nt,Hr)||0}async setPreferredSkinTone(e){return Qn(e),await this.ready(),_g(this._db,nt,Hr,e)}async incrementFavoriteEmojiCount(e){return zt(e),await this.ready(),gg(this._db,e)}async getTopFavoriteEmoji(e){return Qn(e),await this.ready(),(await yg(this._db,this._custom,e)).map(mt)}set customEmoji(e){this._custom=zr(e)}get customEmoji(){return this._custom.all}async _shutdown(){await this.ready();try{await this._lazyUpdate}catch{}}_clear(){this._db=this._ready=this._lazyUpdate=void 0}async close(){await this._shutdown(),await As(this._dbName)}async delete(){await this._shutdown(),await sg(this._dbName)}}const ki=[[-1,"✨","custom"],[0,"😀","smileys-emotion"],[1,"👋","people-body"],[3,"🐱","animals-nature"],[4,"🍎","food-drink"],[5,"🏠️","travel-places"],[6,"⚽","activities"],[7,"📝","objects"],[8,"⛔️","symbols"],[9,"🏁","flags"]].map(([t,e,n])=>({id:t,emoji:e,name:n})),Xn=ki.slice(1),Dg=2,qr=6,jc=typeof requestIdleCallback=="function"?requestIdleCallback:setTimeout;function Gr(t){return t.unicode.includes("‍")}const Pg={"🫩":16,"🫨":15.1,"🫠":14,"🥲":13.1,"🥻":12.1,"🥰":11,"🤩":5,"👱‍♀️":4,"🤣":3,"👁️‍🗨️":2,"😀":1,"😐️":.7,"😃":.6},Og=1e3,Mg="🖐️",Lg=8,Fg=["😊","😒","❤️","👍️","😍","😂","😭","☺️","😔","😩","😏","💕","🙌","😘"],$c='"Twemoji Mozilla","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji","EmojiOne Color","Android Emoji",sans-serif',Ug=(t,e)=>t<e?-1:t>e?1:0,Kr=(t,e)=>{const n=document.createElement("canvas");n.width=n.height=1;const i=n.getContext("2d",{willReadFrequently:!0});return i.textBaseline="top",i.font=`100px ${$c}`,i.fillStyle=e,i.scale(.01,.01),i.fillText(t,0,0),i.getImageData(0,0,1,1).data},Bg=(t,e)=>{const n=[...t].join(","),i=[...e].join(",");return n===i&&!n.startsWith("0,0,0,")};function jg(t){const e=Kr(t,"#000"),n=Kr(t,"#fff");return e&&n&&Bg(e,n)}function $g(){const t=Object.entries(Pg);try{for(const[e,n]of t)if(jg(e))return n}catch{}finally{}return t[0][1]}let Jn;const Zn=()=>(Jn||(Jn=new Promise(t=>jc(()=>t($g())))),Jn),Ri=new Map,Wg="️",Hg="\uD83C",Vg="‍",zg=127995,qg=57339;function Gg(t,e){if(e===0)return t;const n=t.indexOf(Vg);return n!==-1?t.substring(0,n)+String.fromCodePoint(zg+e-1)+t.substring(n):(t.endsWith(Wg)&&(t=t.substring(0,t.length-1)),t+Hg+String.fromCodePoint(qg+e-1))}function ce(t){t.preventDefault(),t.stopPropagation()}function ei(t,e,n){return e+=t?-1:1,e<0?e=n.length-1:e>=n.length&&(e=0),e}function Wc(t,e){const n=new Set,i=[];for(const s of t){const r=e(s);n.has(r)||(n.add(r),i.push(s))}return i}function Kg(t,e){const n=i=>{const s={};for(const r of i)typeof r.tone=="number"&&r.version<=e&&(s[r.tone]=r.unicode);return s};return t.map(({unicode:i,skins:s,shortcodes:r,url:o,name:a,category:c,annotation:l})=>({unicode:i,name:a,shortcodes:r,url:o,category:c,annotation:l,id:i||a,skins:s&&n(s)}))}const Qt=requestAnimationFrame;let Yg=typeof ResizeObserver=="function";function Qg(t,e,n){let i;Yg?(i=new ResizeObserver(n),i.observe(t)):Qt(n),e.addEventListener("abort",()=>{i&&i.disconnect()})}function Yr(t){{const e=document.createRange();return e.selectNode(t.firstChild),e.getBoundingClientRect().width}}let ti;function Xg(t,e,n){let i=!0;for(const s of t){const r=n(s);if(!r)continue;const o=Yr(r);typeof ti>"u"&&(ti=Yr(e));const a=o/1.8<ti;Ri.set(s.unicode,a),a||(i=!1)}return i}function Jg(t){return Wc(t,e=>e)}function Zg(t){t&&(t.scrollTop=0)}function Ct(t,e,n){let i=t.get(e);return i||(i=n(),t.set(e,i)),i}function Qr(t){return""+t}function ey(t){const e=document.createElement("template");return e.innerHTML=t,e}const ty=new WeakMap,ny=new WeakMap,iy=Symbol("un-keyed"),sy="replaceChildren"in Element.prototype;function ry(t,e){sy?t.replaceChildren(...e):(t.innerHTML="",t.append(...e))}function oy(t,e){let n=t.firstChild,i=0;for(;n;){if(e[i]!==n)return!0;n=n.nextSibling,i++}return i!==e.length}function ay(t,e){const{targetNode:n}=e;let{targetParentNode:i}=e,s=!1;i?s=oy(i,t):(s=!0,e.targetNode=void 0,e.targetParentNode=i=n.parentNode),s&&ry(i,t)}function cy(t,e){for(const n of e){const{targetNode:i,currentExpression:s,binding:{expressionIndex:r,attributeName:o,attributeValuePre:a,attributeValuePost:c}}=n,l=t[r];if(s!==l)if(n.currentExpression=l,o)if(l===null)i.removeAttribute(o);else{const h=a+Qr(l)+c;i.setAttribute(o,h)}else{let h;Array.isArray(l)?ay(l,n):l instanceof Element?(h=l,i.replaceWith(h)):i.nodeValue=Qr(l),h&&(n.targetNode=h)}}}function ly(t){let e="",n=!1,i=!1,s=-1;const r=new Map,o=[];let a=0;for(let l=0,h=t.length;l<h;l++){const d=t[l];if(e+=d.slice(a),l===h-1)break;for(let y=0;y<d.length;y++)switch(d.charAt(y)){case"<":{d.charAt(y+1)==="/"?o.pop():(n=!0,o.push(++s));break}case">":{n=!1,i=!1;break}case"=":{i=!0;break}}const u=o[o.length-1],f=Ct(r,u,()=>[]);let _,v,w;if(i){const y=/(\S+)="?([^"=]*)$/.exec(d);_=y[1],v=y[2];const E=/^([^">]*)("?)/.exec(t[l+1]);w=E[1],e=e.slice(0,-1*y[0].length),a=E[0].length}else a=0;const O={attributeName:_,attributeValuePre:v,attributeValuePost:w,expressionIndex:l};f.push(O),!n&&!i&&(e+=" ")}return{template:ey(e),elementsToBindings:r}}function Xr(t,e,n){for(let i=0;i<t.length;i++){const s=t[i],r=s.attributeName?e:e.firstChild,o={binding:s,targetNode:r,targetParentNode:void 0,currentExpression:void 0};n.push(o)}}function uy(t,e){const n=[];let i;if(e.size===1&&(i=e.get(0)))Xr(i,t,n);else{const s=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);let r=t,o=-1;do{const a=e.get(++o);a&&Xr(a,r,n)}while(r=s.nextNode())}return n}function hy(t){const{template:e,elementsToBindings:n}=Ct(ty,t,()=>ly(t)),i=e.cloneNode(!0).content.firstElementChild,s=uy(i,n);return function(o){return cy(o,s),i}}function dy(t){const e=Ct(ny,t,()=>new Map);let n=iy;function i(r,...o){const a=Ct(e,r,()=>new Map);return Ct(a,n,()=>hy(r))(o)}function s(r,o,a){return r.map((c,l)=>{const h=n;n=a(c);try{return o(c,l)}finally{n=h}})}return{map:s,html:i}}function fy(t,e,n,i,s,r,o,a,c){const{labelWithSkin:l,titleForEmoji:h,unicodeWithSkin:d}=n,{html:u,map:f}=dy(e);function _(y,E,R){return f(y,(W,he)=>u`<button role="${E?"option":"menuitem"}" aria-selected="${E?he===e.activeSearchItem:null}" aria-label="${l(W,e.currentSkinTone)}" title="${h(W)}" class="${"emoji"+(E&&he===e.activeSearchItem?" active":"")+(W.unicode?"":" custom-emoji")}" id="${`${R}-${W.id}`}" style="${W.unicode?null:`--custom-emoji-background: url(${JSON.stringify(W.url)})`}">${W.unicode?d(W,e.currentSkinTone):""}</button>`,W=>`${R}-${W.id}`)}const w=u`<section data-ref="rootElement" class="picker" aria-label="${e.i18n.regionLabel}" style="${e.pickerStyle||""}"><div class="pad-top"></div><div class="search-row"><div class="search-wrapper"><input id="search" class="search" type="search" role="combobox" enterkeyhint="search" placeholder="${e.i18n.searchLabel}" autocapitalize="none" autocomplete="off" spellcheck="true" aria-expanded="${!!(e.searchMode&&e.currentEmojis.length)}" aria-controls="search-results" aria-describedby="search-description" aria-autocomplete="list" aria-activedescendant="${e.activeSearchItemId?`emo-${e.activeSearchItemId}`:null}" data-ref="searchElement" data-on-input="onSearchInput" data-on-keydown="onSearchKeydown"><label class="sr-only" for="search">${e.i18n.searchLabel}</label> <span id="search-description" class="sr-only">${e.i18n.searchDescription}</span></div><div class="skintone-button-wrapper ${e.skinTonePickerExpandedAfterAnimation?"expanded":""}"><button id="skintone-button" class="emoji ${e.skinTonePickerExpanded?"hide-focus":""}" aria-label="${e.skinToneButtonLabel}" title="${e.skinToneButtonLabel}" aria-describedby="skintone-description" aria-haspopup="listbox" aria-expanded="${e.skinTonePickerExpanded}" aria-controls="skintone-list" data-on-click="onClickSkinToneButton">${e.skinToneButtonText||""}</button></div><span id="skintone-description" class="sr-only">${e.i18n.skinToneDescription}</span><div data-ref="skinToneDropdown" id="skintone-list" class="skintone-list hide-focus ${e.skinTonePickerExpanded?"":"hidden no-animate"}" style="transform:translateY(${e.skinTonePickerExpanded?0:"calc(-1 * var(--num-skintones) * var(--total-emoji-size))"})" role="listbox" aria-label="${e.i18n.skinTonesLabel}" aria-activedescendant="skintone-${e.activeSkinTone}" aria-hidden="${!e.skinTonePickerExpanded}" tabIndex="-1" data-on-focusout="onSkinToneOptionsFocusOut" data-on-click="onSkinToneOptionsClick" data-on-keydown="onSkinToneOptionsKeydown" data-on-keyup="onSkinToneOptionsKeyup">${f(e.skinTones,(y,E)=>u`<div id="skintone-${E}" class="emoji ${E===e.activeSkinTone?"active":""}" aria-selected="${E===e.activeSkinTone}" role="option" title="${e.i18n.skinTones[E]}" aria-label="${e.i18n.skinTones[E]}">${y}</div>`,y=>y)}</div></div><div class="nav" role="tablist" style="grid-template-columns:repeat(${e.groups.length},1fr)" aria-label="${e.i18n.categoriesLabel}" data-on-keydown="onNavKeydown" data-on-click="onNavClick">${f(e.groups,y=>u`<button role="tab" class="nav-button" aria-controls="tab-${y.id}" aria-label="${e.i18n.categories[y.name]}" aria-selected="${!e.searchMode&&e.currentGroup.id===y.id}" title="${e.i18n.categories[y.name]}" data-group-id="${y.id}"><div class="nav-emoji emoji">${y.emoji}</div></button>`,y=>y.id)}</div><div class="indicator-wrapper"><div class="indicator" style="transform:translateX(${(e.isRtl?-1:1)*e.currentGroupIndex*100}%)"></div></div><div class="message ${e.message?"":"gone"}" role="alert" aria-live="polite">${e.message||""}</div><div data-ref="tabpanelElement" class="tabpanel ${!e.databaseLoaded||e.message?"gone":""}" role="${e.searchMode?"region":"tabpanel"}" aria-label="${e.searchMode?e.i18n.searchResultsLabel:e.i18n.categories[e.currentGroup.name]}" id="${e.searchMode?null:`tab-${e.currentGroup.id}`}" tabIndex="0" data-on-click="onEmojiClick"><div data-action="calculateEmojiGridStyle">${f(e.currentEmojisWithCategories,(y,E)=>u`<div><div id="menu-label-${E}" class="category ${e.currentEmojisWithCategories.length===1&&e.currentEmojisWithCategories[0].category===""?"gone":""}" aria-hidden="true">${e.searchMode?e.i18n.searchResultsLabel:y.category?y.category:e.currentEmojisWithCategories.length>1?e.i18n.categories.custom:e.i18n.categories[e.currentGroup.name]}</div><div class="emoji-menu ${E!==0&&!e.searchMode&&e.currentGroup.id===-1?"visibility-auto":""}" style="${`--num-rows: ${Math.ceil(y.emojis.length/e.numColumns)}`}" data-action="updateOnIntersection" role="${e.searchMode?"listbox":"menu"}" aria-labelledby="menu-label-${E}" id="${e.searchMode?"search-results":null}">${_(y.emojis,e.searchMode,"emo")}</div></div>`,y=>y.category)}</div></div><div class="favorites onscreen emoji-menu ${e.message?"gone":""}" role="menu" aria-label="${e.i18n.favoritesLabel}" data-on-click="onEmojiClick">${_(e.currentFavorites,!1,"fav")}</div><button data-ref="baselineEmoji" aria-hidden="true" tabindex="-1" class="abs-pos hidden emoji baseline-emoji">😀</button></section>`,O=(y,E)=>{for(const R of t.querySelectorAll(`[${y}]`))E(R,R.getAttribute(y))};if(c){t.appendChild(w);for(const y of["click","focusout","input","keydown","keyup"])O(`data-on-${y}`,(E,R)=>{E.addEventListener(y,i[R])});O("data-ref",(y,E)=>{r[E]=y}),o.addEventListener("abort",()=>{t.removeChild(w)})}O("data-action",(y,E)=>{let R=a.get(E);R||a.set(E,R=new WeakSet),R.has(y)||(R.add(y),s[E](y))})}const yn=typeof queueMicrotask=="function"?queueMicrotask:t=>Promise.resolve().then(t);function py(t){let e=!1,n;const i=new Map,s=new Set;let r;const o=()=>{if(e)return;const l=[...s];s.clear();try{for(const h of l)h()}finally{r=!1,s.size&&(r=!0,yn(o))}},a=new Proxy({},{get(l,h){if(n){let d=i.get(h);d||(d=new Set,i.set(h,d)),d.add(n)}return l[h]},set(l,h,d){if(l[h]!==d){l[h]=d;const u=i.get(h);if(u){for(const f of u)s.add(f);r||(r=!0,yn(o))}}return!0}}),c=l=>{const h=()=>{const d=n;n=h;try{return l()}finally{n=d}};return h()};return t.addEventListener("abort",()=>{e=!0}),{state:a,createEffect:c}}function ni(t,e,n){if(t.length!==e.length)return!1;for(let i=0;i<t.length;i++)if(!n(t[i],e[i]))return!1;return!0}const Jr=new WeakMap;function my(t,e,n){{const i=t.closest(".tabpanel");let s=Jr.get(i);s||(s=new IntersectionObserver(n,{root:i,rootMargin:"50% 0px 50% 0px",threshold:0}),Jr.set(i,s),e.addEventListener("abort",()=>{s.disconnect()})),s.observe(t)}}const ii=[],{assign:Gt}=Object;function _y(t,e){const n={},i=new AbortController,s=i.signal,{state:r,createEffect:o}=py(s),a=new Map;Gt(r,{skinToneEmoji:void 0,i18n:void 0,database:void 0,customEmoji:void 0,customCategorySorting:void 0,emojiVersion:void 0}),Gt(r,e),Gt(r,{initialLoad:!0,currentEmojis:[],currentEmojisWithCategories:[],rawSearchText:"",searchText:"",searchMode:!1,activeSearchItem:-1,message:void 0,skinTonePickerExpanded:!1,skinTonePickerExpandedAfterAnimation:!1,currentSkinTone:0,activeSkinTone:0,skinToneButtonText:void 0,pickerStyle:void 0,skinToneButtonLabel:"",skinTones:[],currentFavorites:[],defaultFavoriteEmojis:void 0,numColumns:Lg,isRtl:!1,currentGroupIndex:0,groups:Xn,databaseLoaded:!1,activeSearchItemId:void 0}),o(()=>{r.currentGroup!==r.groups[r.currentGroupIndex]&&(r.currentGroup=r.groups[r.currentGroupIndex])});const c=p=>{t.getElementById(p).focus()},l=p=>t.getElementById(`emo-${p.id}`),h=(p,g)=>{n.rootElement.dispatchEvent(new CustomEvent(p,{detail:g,bubbles:!0,composed:!0}))},d=(p,g)=>p.id===g.id,u=(p,g)=>{const{category:C,emojis:k}=p,{category:H,emojis:z}=g;return C!==H?!1:ni(k,z,d)},f=p=>{ni(r.currentEmojis,p,d)||(r.currentEmojis=p)},_=p=>{r.searchMode!==p&&(r.searchMode=p)},v=p=>{ni(r.currentEmojisWithCategories,p,u)||(r.currentEmojisWithCategories=p)},w=(p,g)=>g&&p.skins&&p.skins[g]||p.unicode,E={labelWithSkin:(p,g)=>Jg([p.name||w(p,g),p.annotation,...p.shortcodes||ii].filter(Boolean)).join(", "),titleForEmoji:p=>p.annotation||(p.shortcodes||ii).join(", "),unicodeWithSkin:w},R={onClickSkinToneButton:il,onEmojiClick:tl,onNavClick:Jc,onNavKeydown:Zc,onSearchKeydown:Xc,onSkinToneOptionsClick:nl,onSkinToneOptionsFocusOut:ol,onSkinToneOptionsKeydown:sl,onSkinToneOptionsKeyup:rl,onSearchInput:al},W={calculateEmojiGridStyle:lt,updateOnIntersection:qc};let he=!0;o(()=>{fy(t,r,E,R,W,n,s,a,he),he=!1}),r.emojiVersion||Zn().then(p=>{p||(r.message=r.i18n.emojiUnsupportedMessage)}),o(()=>{async function p(){let g=!1;const C=setTimeout(()=>{g=!0,r.message=r.i18n.loadingMessage},Og);try{await r.database.ready(),r.databaseLoaded=!0}catch(k){console.error(k),r.message=r.i18n.networkErrorMessage}finally{clearTimeout(C),g&&(g=!1,r.message="")}}r.database&&p()}),o(()=>{r.pickerStyle=`
      --num-groups: ${r.groups.length}; 
      --indicator-opacity: ${r.searchMode?0:1}; 
      --num-skintones: ${qr};`}),o(()=>{r.customEmoji&&r.database&&Bt()}),o(()=>{r.customEmoji&&r.customEmoji.length?r.groups!==ki&&(r.groups=ki):r.groups!==Xn&&(r.currentGroupIndex&&r.currentGroupIndex--,r.groups=Xn)}),o(()=>{async function p(){r.databaseLoaded&&(r.currentSkinTone=await r.database.getPreferredSkinTone())}p()}),o(()=>{r.skinTones=Array(qr).fill().map((p,g)=>Gg(r.skinToneEmoji,g))}),o(()=>{r.skinToneButtonText=r.skinTones[r.currentSkinTone]}),o(()=>{r.skinToneButtonLabel=r.i18n.skinToneLabel.replace("{skinTone}",r.i18n.skinTones[r.currentSkinTone])}),o(()=>{async function p(){const{database:g}=r,C=(await Promise.all(Fg.map(k=>g.getEmojiByUnicodeOrName(k)))).filter(Boolean);r.defaultFavoriteEmojis=C}r.databaseLoaded&&p()});function Bt(){const{customEmoji:p,database:g}=r,C=p||ii;g.customEmoji!==C&&(g.customEmoji=C)}o(()=>{async function p(){Bt();const{database:g,defaultFavoriteEmojis:C,numColumns:k}=r,H=await g.getTopFavoriteEmoji(k),z=await Dn(Wc([...H,...C],ie=>ie.unicode||ie.name).slice(0,k));r.currentFavorites=z}r.databaseLoaded&&r.defaultFavoriteEmojis&&p()});function lt(p){Qg(p,s,()=>{{const g=getComputedStyle(n.rootElement),C=parseInt(g.getPropertyValue("--num-columns"),10),k=g.getPropertyValue("direction")==="rtl";r.numColumns=C,r.isRtl=k}})}function qc(p){my(p,s,g=>{for(const{target:C,isIntersecting:k}of g)C.classList.toggle("onscreen",k)})}o(()=>{async function p(){const{searchText:g,currentGroup:C,databaseLoaded:k,customEmoji:H}=r;if(!k)r.currentEmojis=[],r.searchMode=!1;else if(g.length>=Dg){const z=await Qc(g);r.searchText===g&&(f(z),_(!0))}else{const{id:z}=C;if(z!==-1||H&&H.length){const ie=await Yc(z);r.currentGroup.id===z&&(f(ie),_(!1))}}}p()});const Ds=()=>{Qt(()=>Zg(n.tabpanelElement))};o(()=>{const{currentEmojis:p,emojiVersion:g}=r,C=p.filter(k=>k.unicode).filter(k=>Gr(k)&&!Ri.has(k.unicode));if(!g&&C.length)f(p),Qt(()=>Gc(C));else{const k=g?p:p.filter(Kc);f(k),Ds()}});function Gc(p){Xg(p,n.baselineEmoji,l)?Ds():r.currentEmojis=[...r.currentEmojis]}function Kc(p){return!p.unicode||!Gr(p)||Ri.get(p.unicode)}async function Ps(p){const g=r.emojiVersion||await Zn();return p.filter(({version:C})=>!C||C<=g)}async function Dn(p){return Kg(p,r.emojiVersion||await Zn())}async function Yc(p){const g=p===-1?r.customEmoji:await r.database.getEmojiByGroup(p);return Dn(await Ps(g))}async function Qc(p){return Dn(await Ps(await r.database.getEmojiBySearchQuery(p)))}o(()=>{}),o(()=>{function p(){const{searchMode:C,currentEmojis:k}=r;if(C)return[{category:"",emojis:k}];const H=new Map;for(const z of k){const ie=z.category||"";let jt=H.get(ie);jt||(jt=[],H.set(ie,jt)),jt.push(z)}return[...H.entries()].map(([z,ie])=>({category:z,emojis:ie})).sort((z,ie)=>r.customCategorySorting(z.category,ie.category))}const g=p();v(g)}),o(()=>{r.activeSearchItemId=r.activeSearchItem!==-1&&r.currentEmojis[r.activeSearchItem].id}),o(()=>{const{rawSearchText:p}=r;jc(()=>{r.searchText=(p||"").trim(),r.activeSearchItem=-1})});function Xc(p){if(!r.searchMode||!r.currentEmojis.length)return;const g=C=>{ce(p),r.activeSearchItem=ei(C,r.activeSearchItem,r.currentEmojis)};switch(p.key){case"ArrowDown":return g(!1);case"ArrowUp":return g(!0);case"Enter":if(r.activeSearchItem===-1)r.activeSearchItem=0;else return ce(p),Os(r.currentEmojis[r.activeSearchItem].id)}}function Jc(p){const{target:g}=p,C=g.closest(".nav-button");if(!C)return;const k=parseInt(C.dataset.groupId,10);n.searchElement.value="",r.rawSearchText="",r.searchText="",r.activeSearchItem=-1,r.currentGroupIndex=r.groups.findIndex(H=>H.id===k)}function Zc(p){const{target:g,key:C}=p,k=H=>{H&&(ce(p),H.focus())};switch(C){case"ArrowLeft":return k(g.previousElementSibling);case"ArrowRight":return k(g.nextElementSibling);case"Home":return k(g.parentElement.firstElementChild);case"End":return k(g.parentElement.lastElementChild)}}async function el(p){const g=await r.database.getEmojiByUnicodeOrName(p),C=[...r.currentEmojis,...r.currentFavorites].find(H=>H.id===p),k=C.unicode&&w(C,r.currentSkinTone);return await r.database.incrementFavoriteEmojiCount(p),{emoji:g,skinTone:r.currentSkinTone,...k&&{unicode:k},...C.name&&{name:C.name}}}async function Os(p){const g=el(p);h("emoji-click-sync",g),h("emoji-click",await g)}function tl(p){const{target:g}=p;if(!g.classList.contains("emoji"))return;ce(p);const C=g.id.substring(4);Os(C)}function Pn(p){r.currentSkinTone=p,r.skinTonePickerExpanded=!1,c("skintone-button"),h("skin-tone-change",{skinTone:p}),r.database.setPreferredSkinTone(p)}function nl(p){const{target:{id:g}}=p,C=g&&g.match(/^skintone-(\d)/);if(!C)return;ce(p);const k=parseInt(C[1],10);Pn(k)}function il(p){r.skinTonePickerExpanded=!r.skinTonePickerExpanded,r.activeSkinTone=r.currentSkinTone,r.skinTonePickerExpanded&&(ce(p),Qt(()=>c("skintone-list")))}o(()=>{r.skinTonePickerExpanded?n.skinToneDropdown.addEventListener("transitionend",()=>{r.skinTonePickerExpandedAfterAnimation=!0},{once:!0}):r.skinTonePickerExpandedAfterAnimation=!1});function sl(p){if(!r.skinTonePickerExpanded)return;const g=async C=>{ce(p),r.activeSkinTone=C};switch(p.key){case"ArrowUp":return g(ei(!0,r.activeSkinTone,r.skinTones));case"ArrowDown":return g(ei(!1,r.activeSkinTone,r.skinTones));case"Home":return g(0);case"End":return g(r.skinTones.length-1);case"Enter":return ce(p),Pn(r.activeSkinTone);case"Escape":return ce(p),r.skinTonePickerExpanded=!1,c("skintone-button")}}function rl(p){if(r.skinTonePickerExpanded)switch(p.key){case" ":return ce(p),Pn(r.activeSkinTone)}}async function ol(p){const{relatedTarget:g}=p;(!g||g.id!=="skintone-list")&&(r.skinTonePickerExpanded=!1)}function al(p){r.rawSearchText=p.target.value}return{$set(p){Gt(r,p)},$destroy(){i.abort()}}}const gy="https://cdn.jsdelivr.net/npm/emoji-picker-element-data@^1/en/emojibase/data.json",yy="en";var vy={categoriesLabel:"Categories",emojiUnsupportedMessage:"Your browser does not support color emoji.",favoritesLabel:"Favorites",loadingMessage:"Loading…",networkErrorMessage:"Could not load emoji.",regionLabel:"Emoji picker",searchDescription:"When search results are available, press up or down to select and enter to choose.",searchLabel:"Search",searchResultsLabel:"Search results",skinToneDescription:"When expanded, press up or down to select and enter to choose.",skinToneLabel:"Choose a skin tone (currently {skinTone})",skinTonesLabel:"Skin tones",skinTones:["Default","Light","Medium-Light","Medium","Medium-Dark","Dark"],categories:{custom:"Custom","smileys-emotion":"Smileys and emoticons","people-body":"People and body","animals-nature":"Animals and nature","food-drink":"Food and drink","travel-places":"Travel and places",activities:"Activities",objects:"Objects",symbols:"Symbols",flags:"Flags"}},Ey=':host{--emoji-size:1.375rem;--emoji-padding:0.5rem;--category-emoji-size:var(--emoji-size);--category-emoji-padding:var(--emoji-padding);--indicator-height:3px;--input-border-radius:0.5rem;--input-border-size:1px;--input-font-size:1rem;--input-line-height:1.5;--input-padding:0.25rem;--num-columns:8;--outline-size:2px;--border-size:1px;--border-radius:0;--skintone-border-radius:1rem;--category-font-size:1rem;display:flex;width:min-content;height:400px}:host,:host(.light){color-scheme:light;--background:#fff;--border-color:#e0e0e0;--indicator-color:#385ac1;--input-border-color:#999;--input-font-color:#111;--input-placeholder-color:#999;--outline-color:#999;--category-font-color:#111;--button-active-background:#e6e6e6;--button-hover-background:#d9d9d9}:host(.dark){color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}@media (prefers-color-scheme:dark){:host{color-scheme:dark;--background:#222;--border-color:#444;--indicator-color:#5373ec;--input-border-color:#ccc;--input-font-color:#efefef;--input-placeholder-color:#ccc;--outline-color:#fff;--category-font-color:#efefef;--button-active-background:#555555;--button-hover-background:#484848}}:host([hidden]){display:none}button{margin:0;padding:0;border:0;background:0 0;box-shadow:none;-webkit-tap-highlight-color:transparent}button::-moz-focus-inner{border:0}input{padding:0;margin:0;line-height:1.15;font-family:inherit}input[type=search]{-webkit-appearance:none}:focus{outline:var(--outline-color) solid var(--outline-size);outline-offset:calc(-1*var(--outline-size))}:host([data-js-focus-visible]) :focus:not([data-focus-visible-added]){outline:0}:focus:not(:focus-visible){outline:0}.hide-focus{outline:0}*{box-sizing:border-box}.picker{contain:content;display:flex;flex-direction:column;background:var(--background);border:var(--border-size) solid var(--border-color);border-radius:var(--border-radius);width:100%;height:100%;overflow:hidden;--total-emoji-size:calc(var(--emoji-size) + (2 * var(--emoji-padding)));--total-category-emoji-size:calc(var(--category-emoji-size) + (2 * var(--category-emoji-padding)))}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.hidden{opacity:0;pointer-events:none}.abs-pos{position:absolute;left:0;top:0}.gone{display:none!important}.skintone-button-wrapper,.skintone-list{background:var(--background);z-index:3}.skintone-button-wrapper.expanded{z-index:1}.skintone-list{position:absolute;inset-inline-end:0;top:0;z-index:2;overflow:visible;border-bottom:var(--border-size) solid var(--border-color);border-radius:0 0 var(--skintone-border-radius) var(--skintone-border-radius);will-change:transform;transition:transform .2s ease-in-out;transform-origin:center 0}@media (prefers-reduced-motion:reduce){.skintone-list{transition-duration:.001s}}@supports not (inset-inline-end:0){.skintone-list{right:0}}.skintone-list.no-animate{transition:none}.tabpanel{overflow-y:auto;scrollbar-gutter:stable;-webkit-overflow-scrolling:touch;will-change:transform;min-height:0;flex:1;contain:content}.emoji-menu{display:grid;grid-template-columns:repeat(var(--num-columns),var(--total-emoji-size));justify-content:space-around;align-items:flex-start;width:100%}.emoji-menu.visibility-auto{content-visibility:auto;contain-intrinsic-size:calc(var(--num-columns)*var(--total-emoji-size)) calc(var(--num-rows)*var(--total-emoji-size))}.category{padding:var(--emoji-padding);font-size:var(--category-font-size);color:var(--category-font-color)}.emoji,button.emoji{font-size:var(--emoji-size);display:flex;align-items:center;justify-content:center;border-radius:100%;height:var(--total-emoji-size);width:var(--total-emoji-size);line-height:1;overflow:hidden;font-family:var(--emoji-font-family);cursor:pointer}@media (hover:hover) and (pointer:fine){.emoji:hover,button.emoji:hover{background:var(--button-hover-background)}}.emoji.active,.emoji:active,button.emoji.active,button.emoji:active{background:var(--button-active-background)}.onscreen .custom-emoji::after{content:"";width:var(--emoji-size);height:var(--emoji-size);background-repeat:no-repeat;background-position:center center;background-size:contain;background-image:var(--custom-emoji-background)}.nav,.nav-button{align-items:center}.nav{display:grid;justify-content:space-between;contain:content}.nav-button{display:flex;justify-content:center}.nav-emoji{font-size:var(--category-emoji-size);width:var(--total-category-emoji-size);height:var(--total-category-emoji-size)}.indicator-wrapper{display:flex;border-bottom:1px solid var(--border-color)}.indicator{width:calc(100%/var(--num-groups));height:var(--indicator-height);opacity:var(--indicator-opacity);background-color:var(--indicator-color);will-change:transform,opacity;transition:opacity .1s linear,transform .25s ease-in-out}@media (prefers-reduced-motion:reduce){.indicator{will-change:opacity;transition:opacity .1s linear}}.pad-top,input.search{background:var(--background);width:100%}.pad-top{height:var(--emoji-padding);z-index:3}.search-row{display:flex;align-items:center;position:relative;padding-inline-start:var(--emoji-padding);padding-bottom:var(--emoji-padding)}.search-wrapper{flex:1;min-width:0}input.search{padding:var(--input-padding);border-radius:var(--input-border-radius);border:var(--input-border-size) solid var(--input-border-color);color:var(--input-font-color);font-size:var(--input-font-size);line-height:var(--input-line-height)}input.search::placeholder{color:var(--input-placeholder-color)}.favorites{overflow-y:auto;scrollbar-gutter:stable;display:flex;flex-direction:row;border-top:var(--border-size) solid var(--border-color);contain:content}.message{padding:var(--emoji-padding)}';const Hc=["customEmoji","customCategorySorting","database","dataSource","i18n","locale","skinToneEmoji","emojiVersion"],by=`:host{--emoji-font-family:${$c}}`;class Vc extends HTMLElement{constructor(e){super(),this.attachShadow({mode:"open"});const n=document.createElement("style");n.textContent=Ey+by,this.shadowRoot.appendChild(n),this._ctx={locale:yy,dataSource:gy,skinToneEmoji:Mg,customCategorySorting:Ug,customEmoji:null,i18n:vy,emojiVersion:null,...e};for(const i of Hc)i!=="database"&&Object.prototype.hasOwnProperty.call(this,i)&&(this._ctx[i]=this[i],delete this[i]);this._dbFlush()}connectedCallback(){this._cmp||(this._cmp=_y(this.shadowRoot,this._ctx))}disconnectedCallback(){yn(()=>{if(!this.isConnected&&this._cmp){this._cmp.$destroy(),this._cmp=void 0;const{database:e}=this._ctx;e.close().catch(n=>console.error(n))}})}static get observedAttributes(){return["locale","data-source","skin-tone-emoji","emoji-version"]}attributeChangedCallback(e,n,i){this._set(e.replace(/-([a-z])/g,(s,r)=>r.toUpperCase()),e==="emoji-version"?parseFloat(i):i)}_set(e,n){this._ctx[e]=n,this._cmp&&this._cmp.$set({[e]:n}),["locale","dataSource"].includes(e)&&this._dbFlush()}_dbCreate(){const{locale:e,dataSource:n,database:i}=this._ctx;(!i||i.locale!==e||i.dataSource!==n)&&this._set("database",new xg({locale:e,dataSource:n}))}_dbFlush(){yn(()=>this._dbCreate())}}const zc={};for(const t of Hc)zc[t]={get(){return t==="database"&&this._dbCreate(),this._ctx[t]},set(e){if(t==="database")throw new Error("database is read-only");this._set(t,e)}};Object.defineProperties(Vc.prototype,zc);customElements.get("emoji-picker")||customElements.define("emoji-picker",Vc);document.querySelector("emoji-picker").addEventListener("emoji-click",t=>{const e=t.detail.unicode;wy(e)});function wy(t){const e=window.getSelection();if(!e||!e.rangeCount)return;const n=e.getRangeAt(0);n.deleteContents();const i=document.createTextNode(t);n.insertNode(i),n.setStart(i),n.setEndAfter(i),e.removeAllRanges(),e.addRange(n)}
