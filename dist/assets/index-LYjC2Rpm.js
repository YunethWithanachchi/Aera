(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Vr=()=>{};var Wn={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=function(n,e){if(!n)throw Re(e)},Re=function(n){return new Error("Firebase Database ("+$s.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Gr=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},rn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(u=64)),s.push(t[d],t[h],t[u],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Vs(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Gr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new qr;const u=r<<2|a>>4;if(s.push(u),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const _=c<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gs=function(n){const e=Vs(n);return rn.encodeByteArray(e,!0)},et=function(n){return Gs(n).replace(/\./g,"")},Ut=function(n){try{return rn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n){return qs(void 0,n)}function qs(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!jr(t)||(n[t]=qs(n[t],e[t]));return n}function jr(n){return n!=="__proto__"}/**
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
 */function Kr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yr=()=>Kr().__FIREBASE_DEFAULTS__,Qr=()=>{if(typeof process>"u"||typeof Wn>"u")return;const n=Wn.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xr=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ut(n[1]);return e&&JSON.parse(e)},zs=()=>{try{return Vr()||Yr()||Qr()||Xr()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jr=n=>zs()?.emulatorHosts?.[n],Zr=n=>{const e=Jr(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},js=()=>zs()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function on(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function eo(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function to(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[et(JSON.stringify(t)),et(JSON.stringify(o)),""].join(".")}const Le={};function no(){const n={prod:[],emulator:[]};for(const e of Object.keys(Le))Le[e]?n.emulator.push(e):n.prod.push(e);return n}function so(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Hn=!1;function io(n,e){if(typeof window>"u"||typeof document>"u"||!on(window.location.host)||Le[n]===e||Le[n]||Hn)return;Le[n]=e;function t(u){return`__firebase__banner__${u}`}const s="__firebase__banner",r=no().prod.length>0;function o(){const u=document.getElementById(s);u&&u.remove()}function a(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function l(u,p){u.setAttribute("width","24"),u.setAttribute("id",p),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function c(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Hn=!0,o()},u}function d(u,p){u.setAttribute("id",p),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function h(){const u=so(s),p=t("text"),_=document.getElementById(p)||document.createElement("span"),S=t("learnmore"),M=document.getElementById(S)||document.createElement("a"),Ce=t("preprendIcon"),q=document.getElementById(Ce)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const re=u.element;a(re),d(M,S);const bt=c();l(q,Ce),re.append(q,_,M,bt),document.body.appendChild(re)}r?(_.innerText="Preview backend disconnected.",q.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(q.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ks(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ro())}function oo(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ao(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lo(){return $s.NODE_ADMIN===!0}function Ys(){try{return typeof indexedDB=="object"}catch{return!1}}function Qs(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}function co(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="FirebaseError";class me extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ho,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pt.prototype.create)}}class pt{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?uo(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new me(i,a,s)}}function uo(n,e){return n.replace(fo,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const fo=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n){return JSON.parse(n)}function k(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=He(Ut(r[0])||""),t=He(Ut(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},po=function(n){const e=Xs(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},_o=function(n){const e=Xs(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Se(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function $n(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function tt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function $e(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Vn(r)&&Vn(o)){if(!$e(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Vn(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const u=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):h<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const u=(i<<5|i>>>27)+c+l+d+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function an(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,f(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},_t=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const Co=1e3,vo=2,Io=14400*1e3,wo=.5;function Gn(n,e=Co,t=vo){const s=e*Math.pow(t,n),i=Math.round(wo*s*(Math.random()-.5)*2);return Math.min(Io,s+i)}/**
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
 */function ie(n){return n&&n._delegate?n._delegate:n}class K{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const oe="[DEFAULT]";/**
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
 */class Eo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ft;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(So(e))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=oe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oe){return this.instances.has(e)}getOptions(e=oe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:bo(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=oe){return this.component?this.component.multipleInstances?e:oe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bo(n){return n===oe?void 0:n}function So(n){return n.instantiationMode==="EAGER"}/**
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
 */class To{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Eo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(I||(I={}));const Ao={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},Ro=I.INFO,No={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},ko=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=No[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ln{constructor(e){this.name=e,this._logLevel=Ro,this._logHandler=ko,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ao[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const Do=(n,e)=>e.some(t=>n instanceof t);let qn,zn;function Oo(){return qn||(qn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mo(){return zn||(zn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Js=new WeakMap,Wt=new WeakMap,Zs=new WeakMap,St=new WeakMap,cn=new WeakMap;function Po(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Z(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Js.set(t,n)}).catch(()=>{}),cn.set(e,n),e}function xo(n){if(Wt.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Wt.set(n,e)}let Ht={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wt.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Zs.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Z(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Lo(n){Ht=n(Ht)}function Fo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Tt(this),e,...t);return Zs.set(s,e.sort?e.sort():[e]),Z(s)}:Mo().includes(n)?function(...e){return n.apply(Tt(this),e),Z(Js.get(this))}:function(...e){return Z(n.apply(Tt(this),e))}}function Bo(n){return typeof n=="function"?Fo(n):(n instanceof IDBTransaction&&xo(n),Do(n,Oo())?new Proxy(n,Ht):n)}function Z(n){if(n instanceof IDBRequest)return Po(n);if(St.has(n))return St.get(n);const e=Bo(n);return e!==n&&(St.set(n,e),cn.set(e,n)),e}const Tt=n=>cn.get(n);function ei(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Z(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Z(o.result),l.oldVersion,l.newVersion,Z(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Uo=["get","getKey","getAll","getAllKeys","count"],Wo=["put","add","delete","clear"],At=new Map;function jn(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(At.get(e))return At.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Wo.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Uo.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return At.set(e,r),r}Lo(n=>({...n,get:(e,t,s)=>jn(e,t)||n.get(e,t,s),has:(e,t)=>!!jn(e,t)||n.has(e,t)}));/**
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
 */class Ho{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($o(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function $o(n){return n.getComponent()?.type==="VERSION"}const $t="@firebase/app",Kn="0.14.4";/**
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
 */const Y=new ln("@firebase/app"),Vo="@firebase/app-compat",Go="@firebase/analytics-compat",qo="@firebase/analytics",zo="@firebase/app-check-compat",jo="@firebase/app-check",Ko="@firebase/auth",Yo="@firebase/auth-compat",Qo="@firebase/database",Xo="@firebase/data-connect",Jo="@firebase/database-compat",Zo="@firebase/functions",ea="@firebase/functions-compat",ta="@firebase/installations",na="@firebase/installations-compat",sa="@firebase/messaging",ia="@firebase/messaging-compat",ra="@firebase/performance",oa="@firebase/performance-compat",aa="@firebase/remote-config",la="@firebase/remote-config-compat",ca="@firebase/storage",ha="@firebase/storage-compat",ua="@firebase/firestore",da="@firebase/ai",fa="@firebase/firestore-compat",pa="firebase",_a="12.4.0";/**
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
 */const Vt="[DEFAULT]",ma={[$t]:"fire-core",[Vo]:"fire-core-compat",[qo]:"fire-analytics",[Go]:"fire-analytics-compat",[jo]:"fire-app-check",[zo]:"fire-app-check-compat",[Ko]:"fire-auth",[Yo]:"fire-auth-compat",[Qo]:"fire-rtdb",[Xo]:"fire-data-connect",[Jo]:"fire-rtdb-compat",[Zo]:"fire-fn",[ea]:"fire-fn-compat",[ta]:"fire-iid",[na]:"fire-iid-compat",[sa]:"fire-fcm",[ia]:"fire-fcm-compat",[ra]:"fire-perf",[oa]:"fire-perf-compat",[aa]:"fire-rc",[la]:"fire-rc-compat",[ca]:"fire-gcs",[ha]:"fire-gcs-compat",[ua]:"fire-fst",[fa]:"fire-fst-compat",[da]:"fire-vertex","fire-js":"fire-js",[pa]:"fire-js-all"};/**
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
 */const nt=new Map,ga=new Map,Gt=new Map;function Yn(n,e){try{n.container.addComponent(e)}catch(t){Y.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ne(n){const e=n.name;if(Gt.has(e))return Y.debug(`There were multiple attempts to register component ${e}.`),!1;Gt.set(e,n);for(const t of nt.values())Yn(t,n);for(const t of ga.values())Yn(t,n);return!0}function ze(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ya(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ca={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ee=new pt("app","Firebase",Ca);/**
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
 */class va{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new K("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ee.create("app-deleted",{appName:this._name})}}/**
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
 */const Ia=_a;function ti(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Vt,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw ee.create("bad-app-name",{appName:String(i)});if(t||(t=js()),!t)throw ee.create("no-options");const r=nt.get(i);if(r){if($e(t,r.options)&&$e(s,r.config))return r;throw ee.create("duplicate-app",{appName:i})}const o=new To(i);for(const l of Gt.values())o.addComponent(l);const a=new va(t,s,o);return nt.set(i,a),a}function ni(n=Vt){const e=nt.get(n);if(!e&&n===Vt&&js())return ti();if(!e)throw ee.create("no-app",{appName:n});return e}function G(n,e,t){let s=ma[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Y.warn(o.join(" "));return}ne(new K(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wa="firebase-heartbeat-database",Ea=1,Ve="firebase-heartbeat-store";let Rt=null;function si(){return Rt||(Rt=ei(wa,Ea,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ve)}catch(t){console.warn(t)}}}}).catch(n=>{throw ee.create("idb-open",{originalErrorMessage:n.message})})),Rt}async function ba(n){try{const t=(await si()).transaction(Ve),s=await t.objectStore(Ve).get(ii(n));return await t.done,s}catch(e){if(e instanceof me)Y.warn(e.message);else{const t=ee.create("idb-get",{originalErrorMessage:e?.message});Y.warn(t.message)}}}async function Qn(n,e){try{const s=(await si()).transaction(Ve,"readwrite");await s.objectStore(Ve).put(e,ii(n)),await s.done}catch(t){if(t instanceof me)Y.warn(t.message);else{const s=ee.create("idb-set",{originalErrorMessage:t?.message});Y.warn(s.message)}}}function ii(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Sa=1024,Ta=30;class Aa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Na(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xn();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>Ta){const i=ka(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Y.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xn(),{heartbeatsToSend:t,unsentEntries:s}=Ra(this._heartbeatsCache.heartbeats),i=et(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return Y.warn(e),""}}}function Xn(){return new Date().toISOString().substring(0,10)}function Ra(n,e=Sa){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Jn(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Jn(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Na{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ys()?Qs().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ba(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Qn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Qn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Jn(n){return et(JSON.stringify({version:2,heartbeats:n})).length}function ka(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Da(n){ne(new K("platform-logger",e=>new Ho(e),"PRIVATE")),ne(new K("heartbeat",e=>new Aa(e),"PRIVATE")),G($t,Kn,n),G($t,Kn,"esm2020"),G("fire-js","")}Da("");var Oa="firebase",Ma="12.4.0";/**
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
 */G(Oa,Ma,"app");const ri="@firebase/installations",hn="0.6.19";/**
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
 */const oi=1e4,ai=`w:${hn}`,li="FIS_v2",Pa="https://firebaseinstallations.googleapis.com/v1",xa=3600*1e3,La="installations",Fa="Installations";/**
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
 */const Ba={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ue=new pt(La,Fa,Ba);function ci(n){return n instanceof me&&n.code.includes("request-failed")}/**
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
 */function hi({projectId:n}){return`${Pa}/projects/${n}/installations`}function ui(n){return{token:n.token,requestStatus:2,expiresIn:Wa(n.expiresIn),creationTime:Date.now()}}async function di(n,e){const s=(await e.json()).error;return ue.create("request-failed",{requestName:n,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function fi({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Ua(n,{refreshToken:e}){const t=fi(n);return t.append("Authorization",Ha(e)),t}async function pi(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Wa(n){return Number(n.replace("s","000"))}function Ha(n){return`${li} ${n}`}/**
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
 */async function $a({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const s=hi(n),i=fi(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:t,authVersion:li,appId:n.appId,sdkVersion:ai},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await pi(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:ui(c.authToken)}}else throw await di("Create Installation",l)}/**
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
 */function _i(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Va(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Ga=/^[cdef][\w-]{21}$/,qt="";function qa(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=za(n);return Ga.test(t)?t:qt}catch{return qt}}function za(n){return Va(n).substr(0,22)}/**
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
 */function mt(n){return`${n.appName}!${n.appId}`}/**
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
 */const mi=new Map;function gi(n,e){const t=mt(n);yi(t,e),ja(t,e)}function yi(n,e){const t=mi.get(n);if(t)for(const s of t)s(e)}function ja(n,e){const t=Ka();t&&t.postMessage({key:n,fid:e}),Ya()}let le=null;function Ka(){return!le&&"BroadcastChannel"in self&&(le=new BroadcastChannel("[Firebase] FID Change"),le.onmessage=n=>{yi(n.data.key,n.data.fid)}),le}function Ya(){mi.size===0&&le&&(le.close(),le=null)}/**
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
 */const Qa="firebase-installations-database",Xa=1,de="firebase-installations-store";let Nt=null;function un(){return Nt||(Nt=ei(Qa,Xa,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(de)}}})),Nt}async function st(n,e){const t=mt(n),i=(await un()).transaction(de,"readwrite"),r=i.objectStore(de),o=await r.get(t);return await r.put(e,t),await i.done,(!o||o.fid!==e.fid)&&gi(n,e.fid),e}async function Ci(n){const e=mt(n),s=(await un()).transaction(de,"readwrite");await s.objectStore(de).delete(e),await s.done}async function gt(n,e){const t=mt(n),i=(await un()).transaction(de,"readwrite"),r=i.objectStore(de),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&gi(n,a.fid),a}/**
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
 */async function dn(n){let e;const t=await gt(n.appConfig,s=>{const i=Ja(s),r=Za(n,i);return e=r.registrationPromise,r.installationEntry});return t.fid===qt?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Ja(n){const e=n||{fid:qa(),registrationStatus:0};return vi(e)}function Za(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ue.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=el(n,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:tl(n)}:{installationEntry:e}}async function el(n,e){try{const t=await $a(n,e);return st(n.appConfig,t)}catch(t){throw ci(t)&&t.customData.serverCode===409?await Ci(n.appConfig):await st(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function tl(n){let e=await Zn(n.appConfig);for(;e.registrationStatus===1;)await _i(100),e=await Zn(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await dn(n);return s||t}return e}function Zn(n){return gt(n,e=>{if(!e)throw ue.create("installation-not-found");return vi(e)})}function vi(n){return nl(n)?{fid:n.fid,registrationStatus:0}:n}function nl(n){return n.registrationStatus===1&&n.registrationTime+oi<Date.now()}/**
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
 */async function sl({appConfig:n,heartbeatServiceProvider:e},t){const s=il(n,t),i=Ua(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:ai,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await pi(()=>fetch(s,a));if(l.ok){const c=await l.json();return ui(c)}else throw await di("Generate Auth Token",l)}function il(n,{fid:e}){return`${hi(n)}/${e}/authTokens:generate`}/**
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
 */async function fn(n,e=!1){let t;const s=await gt(n.appConfig,r=>{if(!Ii(r))throw ue.create("not-registered");const o=r.authToken;if(!e&&al(o))return r;if(o.requestStatus===1)return t=rl(n,e),r;{if(!navigator.onLine)throw ue.create("app-offline");const a=cl(r);return t=ol(n,a),a}});return t?await t:s.authToken}async function rl(n,e){let t=await es(n.appConfig);for(;t.authToken.requestStatus===1;)await _i(100),t=await es(n.appConfig);const s=t.authToken;return s.requestStatus===0?fn(n,e):s}function es(n){return gt(n,e=>{if(!Ii(e))throw ue.create("not-registered");const t=e.authToken;return hl(t)?{...e,authToken:{requestStatus:0}}:e})}async function ol(n,e){try{const t=await sl(n,e),s={...e,authToken:t};return await st(n.appConfig,s),t}catch(t){if(ci(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ci(n.appConfig);else{const s={...e,authToken:{requestStatus:0}};await st(n.appConfig,s)}throw t}}function Ii(n){return n!==void 0&&n.registrationStatus===2}function al(n){return n.requestStatus===2&&!ll(n)}function ll(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+xa}function cl(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function hl(n){return n.requestStatus===1&&n.requestTime+oi<Date.now()}/**
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
 */async function ul(n){const e=n,{installationEntry:t,registrationPromise:s}=await dn(e);return s?s.catch(console.error):fn(e).catch(console.error),t.fid}/**
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
 */async function dl(n,e=!1){const t=n;return await fl(t),(await fn(t,e)).token}async function fl(n){const{registrationPromise:e}=await dn(n);e&&await e}/**
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
 */function pl(n){if(!n||!n.options)throw kt("App Configuration");if(!n.name)throw kt("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw kt(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function kt(n){return ue.create("missing-app-config-values",{valueName:n})}/**
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
 */const wi="installations",_l="installations-internal",ml=n=>{const e=n.getProvider("app").getImmediate(),t=pl(e),s=ze(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},gl=n=>{const e=n.getProvider("app").getImmediate(),t=ze(e,wi).getImmediate();return{getId:()=>ul(t),getToken:i=>dl(t,i)}};function yl(){ne(new K(wi,ml,"PUBLIC")),ne(new K(_l,gl,"PRIVATE"))}yl();G(ri,hn);G(ri,hn,"esm2020");/**
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
 */const it="analytics",Cl="firebase_id",vl="origin",Il=60*1e3,wl="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pn="https://www.googletagmanager.com/gtag/js";/**
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
 */const P=new ln("@firebase/analytics");/**
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
 */const El={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},F=new pt("analytics","Analytics",El);/**
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
 */function bl(n){if(!n.startsWith(pn)){const e=F.create("invalid-gtag-resource",{gtagURL:n});return P.warn(e.message),""}return n}function Ei(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Sl(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Tl(n,e){const t=Sl("firebase-js-sdk-policy",{createScriptURL:bl}),s=document.createElement("script"),i=`${pn}?l=${n}&id=${e}`;s.src=t?t?.createScriptURL(i):i,s.async=!0,document.head.appendChild(s)}function Al(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Rl(n,e,t,s,i,r){const o=s[i];try{if(o)await e[o];else{const l=(await Ei(t)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){P.error(a)}n("config",i,r)}async function Nl(n,e,t,s,i){try{let r=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Ei(t);for(const l of o){const c=a.find(h=>h.measurementId===l),d=c&&e[c.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",s,i||{})}catch(r){P.error(r)}}function kl(n,e,t,s){async function i(r,...o){try{if(r==="event"){const[a,l]=o;await Nl(n,e,t,a,l)}else if(r==="config"){const[a,l]=o;await Rl(n,e,t,s,a,l)}else if(r==="consent"){const[a,l]=o;n("consent",a,l)}else if(r==="get"){const[a,l,c]=o;n("get",a,l,c)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){P.error(a)}}return i}function Dl(n,e,t,s,i){let r=function(...o){window[s].push(arguments)};return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=kl(r,n,e,t),{gtagCore:r,wrappedGtag:window[i]}}function Ol(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(pn)&&t.src.includes(n))return t;return null}/**
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
 */const Ml=30,Pl=1e3;class xl{constructor(e={},t=Pl){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const bi=new xl;function Ll(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Fl(n){const{appId:e,apiKey:t}=n,s={method:"GET",headers:Ll(t)},i=wl.replace("{app-id}",e),r=await fetch(i,s);if(r.status!==200&&r.status!==304){let o="";try{const a=await r.json();a.error?.message&&(o=a.error.message)}catch{}throw F.create("config-fetch-failed",{httpStatus:r.status,responseMessage:o})}return r.json()}async function Bl(n,e=bi,t){const{appId:s,apiKey:i,measurementId:r}=n.options;if(!s)throw F.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw F.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Hl;return setTimeout(async()=>{a.abort()},Il),Si({appId:s,apiKey:i,measurementId:r},o,a,e)}async function Si(n,{throttleEndTimeMillis:e,backoffCount:t},s,i=bi){const{appId:r,measurementId:o}=n;try{await Ul(s,e)}catch(a){if(o)return P.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:r,measurementId:o};throw a}try{const a=await Fl(n);return i.deleteThrottleMetadata(r),a}catch(a){const l=a;if(!Wl(l)){if(i.deleteThrottleMetadata(r),o)return P.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:r,measurementId:o};throw a}const c=Number(l?.customData?.httpStatus)===503?Gn(t,i.intervalMillis,Ml):Gn(t,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:t+1};return i.setThrottleMetadata(r,d),P.debug(`Calling attemptFetch again in ${c} millis`),Si(n,d,s,i)}}function Ul(n,e){return new Promise((t,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(r),s(F.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Wl(n){if(!(n instanceof me)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Hl{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function $l(n,e,t,s,i){if(i&&i.global){n("event",t,s);return}else{const r=await e,o={...s,send_to:r};n("event",t,o)}}async function Vl(n,e,t,s){if(s&&s.global){const i={};for(const r of Object.keys(t))i[`user_properties.${r}`]=t[r];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}/**
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
 */async function Gl(){if(Ys())try{await Qs()}catch(n){return P.warn(F.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return P.warn(F.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ql(n,e,t,s,i,r,o){const a=Bl(n);a.then(u=>{t[u.measurementId]=u.appId,n.options.measurementId&&u.measurementId!==n.options.measurementId&&P.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${u.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(u=>P.error(u)),e.push(a);const l=Gl().then(u=>{if(u)return s.getId()}),[c,d]=await Promise.all([a,l]);Ol(r)||Tl(r,c.measurementId),i("js",new Date);const h=o?.config??{};return h[vl]="firebase",h.update=!0,d!=null&&(h[Cl]=d),i("config",c.measurementId,h),c.measurementId}/**
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
 */class zl{constructor(e){this.app=e}_delete(){return delete we[this.app.options.appId],Promise.resolve()}}let we={},ts=[];const ns={};let Dt="dataLayer",jl="gtag",ss,_n,is=!1;function Kl(){const n=[];if(oo()&&n.push("This is a browser extension environment."),co()||n.push("Cookies are not available."),n.length>0){const e=n.map((s,i)=>`(${i+1}) ${s}`).join(" "),t=F.create("invalid-analytics-context",{errorInfo:e});P.warn(t.message)}}function Yl(n,e,t){Kl();const s=n.options.appId;if(!s)throw F.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)P.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw F.create("no-api-key");if(we[s]!=null)throw F.create("already-exists",{id:s});if(!is){Al(Dt);const{wrappedGtag:r,gtagCore:o}=Dl(we,ts,ns,Dt,jl);_n=r,ss=o,is=!0}return we[s]=ql(n,ts,ns,e,ss,Dt,t),new zl(n)}function Ql(n=ni()){n=ie(n);const e=ze(n,it);return e.isInitialized()?e.getImmediate():Xl(n)}function Xl(n,e={}){const t=ze(n,it);if(t.isInitialized()){const i=t.getImmediate();if($e(e,t.getOptions()))return i;throw F.create("already-initialized")}return t.initialize({options:e})}function Jl(n,e,t){n=ie(n),Vl(_n,we[n.app.options.appId],e,t).catch(s=>P.error(s))}function Zl(n,e,t,s){n=ie(n),$l(_n,we[n.app.options.appId],e,t,s).catch(i=>P.error(i))}const rs="@firebase/analytics",os="0.10.19";function ec(){ne(new K(it,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Yl(s,i,t)},"PUBLIC")),ne(new K("analytics-internal",n,"PRIVATE")),G(rs,os),G(rs,os,"esm2020");function n(e){try{const t=e.getProvider(it).getImmediate();return{logEvent:(s,i,r)=>Zl(t,s,i,r),setUserProperties:(s,i)=>Jl(t,s,i)}}catch(t){throw F.create("interop-component-reg-failed",{reason:t})}}}ec();var as={};const ls="@firebase/database",cs="1.1.0";/**
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
 */let Ti="";function tc(n){Ti=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),k(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:He(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return J(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new nc(e)}}catch{}return new sc},ce=Ai("localStorage"),ic=Ai("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new ln("@firebase/database"),rc=(function(){let n=1;return function(){return n++}})(),Ri=function(n){const e=yo(n),t=new go;t.update(e);const s=t.digest();return rn.encodeByteArray(s)},je=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=je.apply(null,s):typeof s=="object"?e+=k(s):e+=s,e+=" "}return e};let Fe=null,hs=!0;const oc=function(n,e){f(!0,"Can't turn on custom loggers persistently."),Ee.logLevel=I.VERBOSE,Fe=Ee.log.bind(Ee)},D=function(...n){if(hs===!0&&(hs=!1,Fe===null&&ic.get("logging_enabled")===!0&&oc()),Fe){const e=je.apply(null,n);Fe(e)}},Ke=function(n){return function(...e){D(n,...e)}},zt=function(...n){const e="FIREBASE INTERNAL ERROR: "+je(...n);Ee.error(e)},Q=function(...n){const e=`FIREBASE FATAL ERROR: ${je(...n)}`;throw Ee.error(e),new Error(e)},L=function(...n){const e="FIREBASE WARNING: "+je(...n);Ee.warn(e)},ac=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&L("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ni=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},lc=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Te="[MIN_NAME]",fe="[MAX_NAME]",Ne=function(n,e){if(n===e)return 0;if(n===Te||e===fe)return-1;if(e===Te||n===fe)return 1;{const t=us(n),s=us(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},cc=function(n,e){return n===e?0:n<e?-1:1},Oe=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+k(e))},mn=function(n){if(typeof n!="object"||n===null)return k(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=k(e[s]),t+=":",t+=mn(n[e[s]]);return t+="}",t},ki=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function U(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Di=function(n){f(!Ni(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let u=parseInt(d.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},hc=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uc=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},dc=new RegExp("^-?(0*)\\d{1,10}$"),fc=-2147483648,pc=2147483647,us=function(n){if(dc.test(n)){const e=Number(n);if(e>=fc&&e<=pc)return e}return null},ke=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw L("Exception was thrown by user callback.",t),e},Math.floor(0))}},_c=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Be=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class mc{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ya(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){L(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(D("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',L(e)}}class Ze{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ze.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="5",Oi="v",Mi="s",Pi="r",xi="f",Li=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Fi="ls",Bi="p",jt="ac",Ui="websocket",Wi="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ce.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ce.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function yc(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function $i(n,e,t){f(typeof e=="string","typeof type must == string"),f(typeof t=="object","typeof params must == object");let s;if(e===Ui)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Wi)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);yc(n)&&(t.ns=n.namespace);const i=[];return U(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this.counters_={}}incrementCounter(e,t=1){J(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return zr(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot={},Mt={};function yn(n){const e=n.toString();return Ot[e]||(Ot[e]=new Cc),Ot[e]}function vc(n,e){const t=n.toString();return Mt[t]||(Mt[t]=e()),Mt[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ke(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="start",wc="close",Ec="pLPCommand",bc="pRTLPCB",Vi="id",Gi="pw",qi="ser",Sc="cb",Tc="seg",Ac="ts",Rc="d",Nc="dframe",zi=1870,ji=30,kc=zi-ji,Dc=25e3,Oc=3e4;class Ie{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ke(e),this.stats_=yn(t),this.urlFn=l=>(this.appCheckToken&&(l[jt]=this.appCheckToken),$i(t,Wi,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ic(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Oc)),lc(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cn((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ds)this.id=a,this.password=l;else if(o===wc)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ds]="t",s[qi]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Sc]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Oi]=gn,this.transportSessionId&&(s[Mi]=this.transportSessionId),this.lastSessionId&&(s[Fi]=this.lastSessionId),this.applicationId&&(s[Bi]=this.applicationId),this.appCheckToken&&(s[jt]=this.appCheckToken),typeof location<"u"&&location.hostname&&Li.test(location.hostname)&&(s[Pi]=xi);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ie.forceAllow_=!0}static forceDisallow(){Ie.forceDisallow_=!0}static isAvailable(){return Ie.forceAllow_?!0:!Ie.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!hc()&&!uc()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=k(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Gs(t),i=ki(s,kc);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Nc]="t",s[Vi]=e,s[Gi]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=k(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Cn{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rc(),window[Ec+this.uniqueCallbackIdentifier]=e,window[bc+this.uniqueCallbackIdentifier]=t,this.myIFrame=Cn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){D("frame writing exception"),a.stack&&D(a.stack),D(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||D("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vi]=this.myID,e[Gi]=this.myPW,e[qi]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ji+s.length<=zi;){const o=this.pendingSegs.shift();s=s+"&"+Tc+i+"="+o.seg+"&"+Ac+i+"="+o.ts+"&"+Rc+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Dc)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{D("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=16384,Pc=45e3;let rt=null;typeof MozWebSocket<"u"?rt=MozWebSocket:typeof WebSocket<"u"&&(rt=WebSocket);class W{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ke(this.connId),this.stats_=yn(t),this.connURL=W.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Oi]=gn,typeof location<"u"&&location.hostname&&Li.test(location.hostname)&&(o[Pi]=xi),t&&(o[Mi]=t),s&&(o[Fi]=s),i&&(o[jt]=i),r&&(o[Bi]=r),$i(e,Ui,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ce.set("previous_websocket_failure",!0);try{let s;lo(),this.mySock=new rt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){W.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&rt!==null&&!W.forceDisallow_}static previouslyFailed(){return ce.isInMemoryStorage||ce.get("previous_websocket_failure")===!0}markConnectionHealthy(){ce.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=He(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(f(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=k(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ki(t,Mc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Pc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}W.responsesRequiredToBeHealthy=2;W.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{static get ALL_TRANSPORTS(){return[Ie,W]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=W&&W.isAvailable();let s=t&&!W.previouslyFailed();if(e.webSocketOnly&&(t||L("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[W];else{const i=this.transports_=[];for(const r of Ge.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ge.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ge.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=6e4,Lc=5e3,Fc=10*1024,Bc=100*1024,Pt="t",fs="d",Uc="s",ps="r",Wc="e",_s="o",ms="a",gs="n",ys="p",Hc="h";class $c{constructor(e,t,s,i,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ke("c:"+this.id+":"),this.transportManager_=new Ge(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Be(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Pt in e){const t=e[Pt];t===ms?this.upgradeIfSecondaryHealthy_():t===ps?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===_s&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Oe("t",e),s=Oe("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ys,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ms,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gs,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Oe("t",e),s=Oe("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Oe(Pt,e);if(fs in e){const s=e[fs];if(t===Hc){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===gs){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Uc?this.onConnectionShutdown_(s):t===ps?this.onReset_(s):t===Wc?zt("Server Error: "+s):t===_s?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):zt("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),gn!==s&&L("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Be(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Be(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Lc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ys,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ce.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.allowedEvents_=e,this.listeners_={},f(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){f(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Yi{static getInstance(){return new ot}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ks()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return f(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=32,vs=768;class b{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function v(){return new b("")}function m(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function se(n){return n.pieces_.length-n.pieceNum_}function E(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new b(n.pieces_,e)}function Qi(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Vc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Xi(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ji(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new b(e,0)}function T(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof b)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new b(t,0)}function g(n){return n.pieceNum_>=n.pieces_.length}function B(n,e){const t=m(n),s=m(e);if(t===null)return e;if(t===s)return B(E(n),E(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Zi(n,e){if(se(n)!==se(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function H(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(se(n)>se(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Gc{constructor(e,t){this.errorPrefix_=t,this.parts_=Xi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_t(this.parts_[s]);er(this)}}function qc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=_t(e),er(n)}function zc(n){const e=n.parts_.pop();n.byteLength_-=_t(e),n.parts_.length>0&&(n.byteLength_-=1)}function er(n){if(n.byteLength_>vs)throw new Error(n.errorPrefix_+"has a key path longer than "+vs+" bytes ("+n.byteLength_+").");if(n.parts_.length>Cs)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Cs+") or object contains a cycle "+ae(n))}function ae(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Yi{static getInstance(){return new vn}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return f(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=1e3,jc=300*1e3,Is=30*1e3,Kc=1.3,Yc=3e4,Qc="server_kill",ws=3;class j extends Ki{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=j.nextPersistentConnectionId_++,this.log_=Ke("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Me,this.maxReconnectDelay_=jc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(k(r)),f(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ft,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),f(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;j.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&J(e,"w")){const s=Se(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();L(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_o(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Is)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=po(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),f(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+k(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):zt("Unrecognized action received from server: "+k(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){f(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Me,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Me,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Yc&&(this.reconnectDelay_=Me),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Kc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+j.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){f(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?D("getToken() completed but was canceled"):(D("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,a=new $c(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{L(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Qc)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&L(h),l())}}}interrupt(e){D("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){D("Resuming connection for reason: "+e),delete this.interruptReasons_[e],$n(this.interruptReasons_)&&(this.reconnectDelay_=Me,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>mn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new b(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){D("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ws&&(this.reconnectDelay_=Is,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){D("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ws&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ti.replace(/\./g,"-")]=1,Ks()?e["framework.cordova"]=1:ao()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return $n(this.interruptReasons_)&&e}}j.nextPersistentConnectionId_=0;j.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new y(Te,e),i=new y(Te,t);return this.compare(s,i)!==0}minPost(){return y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xe;class tr extends yt{static get __EMPTY_NODE(){return Xe}static set __EMPTY_NODE(e){Xe=e}compare(e,t){return Ne(e.name,t.name)}isDefinedOn(e){throw Re("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return y.MIN}maxPost(){return new y(fe,Xe)}makePost(e,t){return f(typeof e=="string","KeyIndex indexValue must always be a string."),new y(e,Xe)}toString(){return".key"}}const be=new tr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class R{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??R.RED,this.left=i??x.EMPTY_NODE,this.right=r??x.EMPTY_NODE}copy(e,t,s,i,r){return new R(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return x.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return x.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,R.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,R.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}R.RED=!0;R.BLACK=!1;class Xc{copy(e,t,s,i,r){return this}insert(e,t,s){return new R(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class x{constructor(e,t=x.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new x(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,R.BLACK,null,null))}remove(e){return new x(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,R.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Je(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Je(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Je(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Je(this.root_,null,this.comparator_,!0,e)}}x.EMPTY_NODE=new Xc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(n,e){return Ne(n.name,e.name)}function In(n,e){return Ne(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt;function Zc(n){Kt=n}const nr=function(n){return typeof n=="number"?"number:"+Di(n):"string:"+n},sr=function(n){if(n.isLeafNode()){const e=n.val();f(typeof e=="string"||typeof e=="number"||typeof e=="object"&&J(e,".sv"),"Priority must be a string or number.")}else f(n===Kt||n.isEmpty(),"priority of unexpected type.");f(n===Kt||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;class A{static set __childrenNodeConstructor(e){Es=e}static get __childrenNodeConstructor(){return Es}constructor(e,t=A.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,f(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new A(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:A.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return g(e)?this:m(e)===".priority"?this.priorityNode_:A.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:A.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=m(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(f(s!==".priority"||se(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,A.__childrenNodeConstructor.EMPTY_NODE.updateChild(E(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Di(this.value_):e+=this.value_,this.lazyHash_=Ri(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===A.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof A.__childrenNodeConstructor?-1:(f(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=A.VALUE_TYPE_ORDER.indexOf(t),r=A.VALUE_TYPE_ORDER.indexOf(s);return f(i>=0,"Unknown leaf type: "+t),f(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}A.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir,rr;function eh(n){ir=n}function th(n){rr=n}class nh extends yt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Ne(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return y.MIN}maxPost(){return new y(fe,new A("[PRIORITY-POST]",rr))}makePost(e,t){const s=ir(e);return new y(t,new A("[PRIORITY-POST]",s))}toString(){return".priority"}}const O=new nh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=Math.log(2);class ih{constructor(e){const t=r=>parseInt(Math.log(r)/sh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const at=function(n,e,t,s){n.sort(e);const i=function(l,c){const d=c-l;let h,u;if(d===0)return null;if(d===1)return h=n[l],u=t?t(h):h,new R(u,h.node,R.BLACK,null,null);{const p=parseInt(d/2,10)+l,_=i(l,p),S=i(p+1,c);return h=n[p],u=t?t(h):h,new R(u,h.node,R.BLACK,_,S)}},r=function(l){let c=null,d=null,h=n.length;const u=function(_,S){const M=h-_,Ce=h;h-=_;const q=i(M+1,Ce),re=n[M],bt=t?t(re):re;p(new R(bt,re.node,S,null,q))},p=function(_){c?(c.left=_,c=_):(d=_,c=_)};for(let _=0;_<l.count;++_){const S=l.nextBitIsOne(),M=Math.pow(2,l.count-(_+1));S?u(M,R.BLACK):(u(M,R.BLACK),u(M,R.RED))}return d},o=new ih(n.length),a=r(o);return new x(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xt;const ve={};class z{static get Default(){return f(ve&&O,"ChildrenNode.ts has not been loaded"),xt=xt||new z({".priority":ve},{".priority":O}),xt}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Se(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof x?t:null}hasIndex(e){return J(this.indexSet_,e.toString())}addIndex(e,t){f(e!==be,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=at(s,e.getCompare()):a=ve;const l=e.toString(),c={...this.indexSet_};c[l]=e;const d={...this.indexes_};return d[l]=a,new z(d,c)}addToIndexes(e,t){const s=tt(this.indexes_,(i,r)=>{const o=Se(this.indexSet_,r);if(f(o,"Missing index implementation for "+r),i===ve)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),at(a,o.getCompare())}else return ve;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new y(e.name,a))),l.insert(e,e.node)}});return new z(s,this.indexSet_)}removeFromIndexes(e,t){const s=tt(this.indexes_,i=>{if(i===ve)return i;{const r=t.get(e.name);return r?i.remove(new y(e.name,r)):i}});return new z(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pe;class C{static get EMPTY_NODE(){return Pe||(Pe=new C(new x(In),null,z.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&sr(this.priorityNode_),this.children_.isEmpty()&&f(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pe}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Pe:t}}getChild(e){const t=m(e);return t===null?this:this.getImmediateChild(t).getChild(E(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(f(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new y(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Pe:this.priorityNode_;return new C(i,o,r)}}updateChild(e,t){const s=m(e);if(s===null)return t;{f(m(e)!==".priority"||se(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(E(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(O,(o,a)=>{t[o]=a.val(e),s++,r&&C.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nr(this.getPriority().val())+":"),this.forEachChild(O,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Ri(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new y(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new y(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,y.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ye?-1:0}withIndex(e){if(e===be||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===be||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(O),i=t.getIterator(O);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===be?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rh extends C{constructor(){super(new x(In),C.EMPTY_NODE,z.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const Ye=new rh;Object.defineProperties(y,{MIN:{value:new y(Te,C.EMPTY_NODE)},MAX:{value:new y(fe,Ye)}});tr.__EMPTY_NODE=C.EMPTY_NODE;A.__childrenNodeConstructor=C;Zc(Ye);th(Ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=!0;function N(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),f(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new A(t,N(e))}if(!(n instanceof Array)&&oh){const t=[];let s=!1;if(U(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=N(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new y(o,l)))}}),t.length===0)return C.EMPTY_NODE;const r=at(t,Jc,o=>o.name,In);if(s){const o=at(t,O.getCompare());return new C(r,N(e),new z({".priority":o},{".priority":O}))}else return new C(r,N(e),z.Default)}else{let t=C.EMPTY_NODE;return U(n,(s,i)=>{if(J(n,s)&&s.substring(0,1)!=="."){const r=N(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(N(e))}}eh(N);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends yt{constructor(e){super(),this.indexPath_=e,f(!g(e)&&m(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Ne(e.name,t.name):r}makePost(e,t){const s=N(e),i=C.EMPTY_NODE.updateChild(this.indexPath_,s);return new y(t,i)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,Ye);return new y(fe,e)}toString(){return Xi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends yt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ne(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return y.MIN}maxPost(){return y.MAX}makePost(e,t){const s=N(e);return new y(t,s)}toString(){return".value"}}const ch=new lh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n){return{type:"value",snapshotNode:n}}function uh(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function dh(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function bs(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function fh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=O}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return f(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return f(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Te}hasEnd(){return this.endSet_}getIndexEndValue(){return f(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return f(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return f(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===O}copy(){const e=new wn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ss(n){const e={};if(n.isDefault())return e;let t;if(n.index_===O?t="$priority":n.index_===ch?t="$value":n.index_===be?t="$key":(f(n.index_ instanceof ah,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=k(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=k(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+k(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=k(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+k(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ts(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==O&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Ki{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(f(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ke("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=lt.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ss(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Se(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,t){const s=lt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Ss(e._queryParams),s=e._path.toString(),i=new ft;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mo(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=He(a.responseText)}catch{L("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&L("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return{value:null,children:new Map}}function or(n,e,t){if(g(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=m(e);n.children.has(s)||n.children.set(s,ct());const i=n.children.get(s);e=E(e),or(i,e,t)}}function Yt(n,e,t){n.value!==null?t(e,n.value):_h(n,(s,i)=>{const r=new b(e.toString()+"/"+s);Yt(i,r,t)})}function _h(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&U(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=10*1e3,gh=30*1e3,yh=300*1e3;class Ch{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new mh(e);const s=As+(gh-As)*Math.random();Be(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;U(e,(i,r)=>{r>0&&J(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Be(this.reportStats_.bind(this),Math.floor(Math.random()*2*yh))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(V||(V={}));function ar(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lr(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=V.ACK_USER_WRITE,this.source=ar()}operationForChild(e){if(g(this.path)){if(this.affectedTree.value!=null)return f(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new b(e));return new ht(v(),t,this.revert)}}else return f(m(this.path)===e,"operationForChild called for unrelated child."),new ht(E(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=V.OVERWRITE}operationForChild(e){return g(this.path)?new pe(this.source,v(),this.snap.getImmediateChild(e)):new pe(this.source,E(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=V.MERGE}operationForChild(e){if(g(this.path)){const t=this.children.subtree(new b(e));return t.isEmpty()?null:t.value?new pe(this.source,v(),t.value):new qe(this.source,v(),t)}else return f(m(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qe(this.source,E(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(g(e))return this.isFullyInitialized()&&!this.filtered_;const t=m(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function vh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(fh(o.childName,o.snapshotNode))}),xe(n,i,"child_removed",e,s,t),xe(n,i,"child_added",e,s,t),xe(n,i,"child_moved",r,s,t),xe(n,i,"child_changed",e,s,t),xe(n,i,"value",e,s,t),i}function xe(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>wh(n,a,l)),o.forEach(a=>{const l=Ih(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Ih(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function wh(n,e,t){if(e.childName==null||t.childName==null)throw Re("Should only compare child_ events.");const s=new y(e.childName,e.snapshotNode),i=new y(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n,e){return{eventCache:n,serverCache:e}}function Ue(n,e,t,s){return hr(new En(e,t,s),n.serverCache)}function ur(n,e,t,s){return hr(n.eventCache,new En(e,t,s))}function Qt(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function _e(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt;const Eh=()=>(Lt||(Lt=new x(cc)),Lt);class w{static fromObject(e){let t=new w(null);return U(e,(s,i)=>{t=t.set(new b(s),i)}),t}constructor(e,t=Eh()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:v(),value:this.value};if(g(e))return null;{const s=m(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(E(e),t);return r!=null?{path:T(new b(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(g(e))return this;{const t=m(e),s=this.children.get(t);return s!==null?s.subtree(E(e)):new w(null)}}set(e,t){if(g(e))return new w(t,this.children);{const s=m(e),r=(this.children.get(s)||new w(null)).set(E(e),t),o=this.children.insert(s,r);return new w(this.value,o)}}remove(e){if(g(e))return this.children.isEmpty()?new w(null):new w(null,this.children);{const t=m(e),s=this.children.get(t);if(s){const i=s.remove(E(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new w(null):new w(this.value,r)}else return this}}get(e){if(g(e))return this.value;{const t=m(e),s=this.children.get(t);return s?s.get(E(e)):null}}setTree(e,t){if(g(e))return t;{const s=m(e),r=(this.children.get(s)||new w(null)).setTree(E(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new w(this.value,o)}}fold(e){return this.fold_(v(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(T(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,v(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(g(e))return null;{const r=m(e),o=this.children.get(r);return o?o.findOnPath_(E(e),T(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,v(),t)}foreachOnPath_(e,t,s){if(g(e))return this;{this.value&&s(t,this.value);const i=m(e),r=this.children.get(i);return r?r.foreachOnPath_(E(e),T(t,i),s):new w(null)}}foreach(e){this.foreach_(v(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(T(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.writeTree_=e}static empty(){return new $(new w(null))}}function We(n,e,t){if(g(e))return new $(new w(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=B(i,e);return r=r.updateChild(o,t),new $(n.writeTree_.set(i,r))}else{const i=new w(t),r=n.writeTree_.setTree(e,i);return new $(r)}}}function Rs(n,e,t){let s=n;return U(t,(i,r)=>{s=We(s,T(e,i),r)}),s}function Ns(n,e){if(g(e))return $.empty();{const t=n.writeTree_.setTree(e,new w(null));return new $(t)}}function Xt(n,e){return ge(n,e)!=null}function ge(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(B(t.path,e)):null}function ks(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(O,(s,i)=>{e.push(new y(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new y(s,i.value))}),e}function te(n,e){if(g(e))return n;{const t=ge(n,e);return t!=null?new $(new w(t)):new $(n.writeTree_.subtree(e))}}function Jt(n){return n.writeTree_.isEmpty()}function Ae(n,e){return dr(v(),n.writeTree_,e)}function dr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(f(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=dr(T(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(T(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(n,e){return yr(e,n)}function bh(n,e,t,s,i){f(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=We(n.visibleWrites,e,t)),n.lastWriteId=s}function Sh(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Th(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);f(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Ah(a,s.path)?i=!1:H(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Rh(n),!0;if(s.snap)n.visibleWrites=Ns(n.visibleWrites,s.path);else{const a=s.children;U(a,l=>{n.visibleWrites=Ns(n.visibleWrites,T(s.path,l))})}return!0}else return!1}function Ah(n,e){if(n.snap)return H(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&H(T(n.path,t),e))return!0;return!1}function Rh(n){n.visibleWrites=pr(n.allWrites,Nh,v()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Nh(n){return n.visible}function pr(n,e,t){let s=$.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)H(t,o)?(a=B(t,o),s=We(s,a,r.snap)):H(o,t)&&(a=B(o,t),s=We(s,v(),r.snap.getChild(a)));else if(r.children){if(H(t,o))a=B(t,o),s=Rs(s,a,r.children);else if(H(o,t))if(a=B(o,t),g(a))s=Rs(s,v(),r.children);else{const l=Se(r.children,m(a));if(l){const c=l.getChild(E(a));s=We(s,v(),c)}}}else throw Re("WriteRecord should have .snap or .children")}}return s}function _r(n,e,t,s,i){if(!s&&!i){const r=ge(n.visibleWrites,e);if(r!=null)return r;{const o=te(n.visibleWrites,e);if(Jt(o))return t;if(t==null&&!Xt(o,v()))return null;{const a=t||C.EMPTY_NODE;return Ae(o,a)}}}else{const r=te(n.visibleWrites,e);if(!i&&Jt(r))return t;if(!i&&t==null&&!Xt(r,v()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(H(c.path,e)||H(e,c.path))},a=pr(n.allWrites,o,e),l=t||C.EMPTY_NODE;return Ae(a,l)}}}function kh(n,e,t){let s=C.EMPTY_NODE;const i=ge(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(O,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=te(n.visibleWrites,e);return t.forEachChild(O,(o,a)=>{const l=Ae(te(r,new b(o)),a);s=s.updateImmediateChild(o,l)}),ks(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=te(n.visibleWrites,e);return ks(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Dh(n,e,t,s,i){f(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=T(e,t);if(Xt(n.visibleWrites,r))return null;{const o=te(n.visibleWrites,r);return Jt(o)?i.getChild(t):Ae(o,i.getChild(t))}}function Oh(n,e,t,s){const i=T(e,t),r=ge(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=te(n.visibleWrites,i);return Ae(o,s.getNode().getImmediateChild(t))}else return null}function Mh(n,e){return ge(n.visibleWrites,e)}function Ph(n,e,t,s,i,r,o){let a;const l=te(n.visibleWrites,e),c=ge(l,v());if(c!=null)a=c;else if(t!=null)a=Ae(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),u=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=u.getNext();for(;p&&d.length<i;)h(p,s)!==0&&d.push(p),p=u.getNext();return d}else return[]}function xh(){return{visibleWrites:$.empty(),allWrites:[],lastWriteId:-1}}function Zt(n,e,t,s){return _r(n.writeTree,n.treePath,e,t,s)}function mr(n,e){return kh(n.writeTree,n.treePath,e)}function Ds(n,e,t,s){return Dh(n.writeTree,n.treePath,e,t,s)}function ut(n,e){return Mh(n.writeTree,T(n.treePath,e))}function Lh(n,e,t,s,i,r){return Ph(n.writeTree,n.treePath,e,t,s,i,r)}function bn(n,e,t){return Oh(n.writeTree,n.treePath,e,t)}function gr(n,e){return yr(T(n.treePath,e),n.writeTree)}function yr(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;f(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),f(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,bs(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,dh(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,uh(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,bs(s,e.snapshotNode,i.oldSnap));else throw Re("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Cr=new Bh;class Sn{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new En(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bn(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_e(this.viewCache_),r=Lh(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}function Uh(n,e){f(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),f(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Wh(n,e,t,s,i){const r=new Fh;let o,a;if(t.type===V.OVERWRITE){const c=t;c.source.fromUser?o=en(n,e,c.path,c.snap,s,i,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!g(c.path),o=dt(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===V.MERGE){const c=t;c.source.fromUser?o=$h(n,e,c.path,c.children,s,i,r):(f(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=tn(n,e,c.path,c.children,s,i,a,r))}else if(t.type===V.ACK_USER_WRITE){const c=t;c.revert?o=qh(n,e,c.path,s,i,r):o=Vh(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===V.LISTEN_COMPLETE)o=Gh(n,e,t.path,s,r);else throw Re("Unknown operation type: "+t.type);const l=r.getChanges();return Hh(e,o,l),{viewCache:o,changes:l}}function Hh(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Qt(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(hh(Qt(e)))}}function vr(n,e,t,s,i,r){const o=e.eventCache;if(ut(s,t)!=null)return e;{let a,l;if(g(t))if(f(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=_e(e),d=c instanceof C?c:C.EMPTY_NODE,h=mr(s,d);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Zt(s,_e(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=m(t);if(c===".priority"){f(se(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=Ds(s,t,d,l);h!=null?a=n.filter.updatePriority(d,h):a=o.getNode()}else{const d=E(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=Ds(s,t,o.getNode(),l);u!=null?h=o.getNode().getImmediateChild(c).updateChild(d,u):h=o.getNode().getImmediateChild(c)}else h=bn(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,d,i,r):a=o.getNode()}}return Ue(e,a,o.isFullyInitialized()||g(t),n.filter.filtersNodes())}}function dt(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(g(t))c=d.updateFullNode(l.getNode(),s,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,s);c=d.updateFullNode(l.getNode(),p,null)}else{const p=m(t);if(!l.isCompleteForPath(t)&&se(t)>1)return e;const _=E(t),M=l.getNode().getImmediateChild(p).updateChild(_,s);p===".priority"?c=d.updatePriority(l.getNode(),M):c=d.updateChild(l.getNode(),p,M,_,Cr,null)}const h=ur(e,c,l.isFullyInitialized()||g(t),d.filtersNodes()),u=new Sn(i,h,r);return vr(n,h,t,i,u,a)}function en(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const d=new Sn(i,e,r);if(g(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ue(e,c,!0,n.filter.filtersNodes());else{const h=m(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Ue(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=E(t),p=a.getNode().getImmediateChild(h);let _;if(g(u))_=s;else{const S=d.getCompleteChild(h);S!=null?Qi(u)===".priority"&&S.getChild(Ji(u)).isEmpty()?_=S:_=S.updateChild(u,s):_=C.EMPTY_NODE}if(p.equals(_))l=e;else{const S=n.filter.updateChild(a.getNode(),h,_,u,d,o);l=Ue(e,S,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Os(n,e){return n.eventCache.isCompleteForChild(e)}function $h(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const d=T(t,l);Os(e,m(d))&&(a=en(n,a,d,c,i,r,o))}),s.foreach((l,c)=>{const d=T(t,l);Os(e,m(d))||(a=en(n,a,d,c,i,r,o))}),a}function Ms(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function tn(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;g(t)?c=s:c=new w(null).setTree(t,s);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,u)=>{if(d.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),_=Ms(n,p,u);l=dt(n,l,new b(h),_,i,r,o,a)}}),c.children.inorderTraversal((h,u)=>{const p=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!d.hasChild(h)&&!p){const _=e.serverCache.getNode().getImmediateChild(h),S=Ms(n,_,u);l=dt(n,l,new b(h),S,i,r,o,a)}}),l}function Vh(n,e,t,s,i,r,o){if(ut(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(g(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return dt(n,e,t,l.getNode().getChild(t),i,r,a,o);if(g(t)){let c=new w(null);return l.getNode().forEachChild(be,(d,h)=>{c=c.set(new b(d),h)}),tn(n,e,t,c,i,r,a,o)}else return e}else{let c=new w(null);return s.foreach((d,h)=>{const u=T(t,d);l.isCompleteForPath(u)&&(c=c.set(d,l.getNode().getChild(u)))}),tn(n,e,t,c,i,r,a,o)}}function Gh(n,e,t,s,i){const r=e.serverCache,o=ur(e,r.getNode(),r.isFullyInitialized()||g(t),r.isFiltered());return vr(n,o,t,s,Cr,i)}function qh(n,e,t,s,i,r){let o;if(ut(s,t)!=null)return e;{const a=new Sn(s,e,i),l=e.eventCache.getNode();let c;if(g(t)||m(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Zt(s,_e(e));else{const h=e.serverCache.getNode();f(h instanceof C,"serverChildren would be complete if leaf node"),d=mr(s,h)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=m(t);let h=bn(s,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=n.filter.updateChild(l,d,h,E(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,C.EMPTY_NODE,E(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zt(s,_e(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ut(s,v())!=null,Ue(e,c,o,n.filter.filtersNodes())}}function zh(n,e){const t=_e(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!g(e)&&!t.getImmediateChild(m(e)).isEmpty())?t.getChild(e):null}function Ps(n,e,t,s){e.type===V.MERGE&&e.source.queryId!==null&&(f(_e(n.viewCache_),"We should always have a full cache before handling merges"),f(Qt(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Wh(n.processor_,i,e,t,s);return Uh(n.processor_,r.viewCache),f(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,jh(n,r.changes,r.viewCache.eventCache.getNode())}function jh(n,e,t,s){const i=n.eventRegistrations_;return vh(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs;function Kh(n){f(!xs,"__referenceConstructor has already been defined"),xs=n}function Tn(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return f(r!=null,"SyncTree gave us an op for an invalid query."),Ps(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Ps(o,e,t,s));return r}}function An(n,e){let t=null;for(const s of n.views.values())t=t||zh(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;function Yh(n){f(!Ls,"__referenceConstructor has already been defined"),Ls=n}class Fs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new w(null),this.pendingWriteTree_=xh(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ir(n,e,t,s,i){return bh(n.pendingWriteTree_,e,t,s,i),i?vt(n,new pe(ar(),e,t)):[]}function he(n,e,t=!1){const s=Sh(n.pendingWriteTree_,e);if(Th(n.pendingWriteTree_,e)){let r=new w(null);return s.snap!=null?r=r.set(v(),!0):U(s.children,o=>{r=r.set(new b(o),!0)}),vt(n,new ht(s.path,r,t))}else return[]}function Ct(n,e,t){return vt(n,new pe(lr(),e,t))}function Qh(n,e,t){const s=w.fromObject(t);return vt(n,new qe(lr(),e,s))}function Xh(n,e,t,s){const i=br(n,s);if(i!=null){const r=Sr(i),o=r.path,a=r.queryId,l=B(o,e),c=new pe(cr(a),l,t);return Tr(n,o,c)}else return[]}function Jh(n,e,t,s){const i=br(n,s);if(i){const r=Sr(i),o=r.path,a=r.queryId,l=B(o,e),c=w.fromObject(t),d=new qe(cr(a),l,c);return Tr(n,o,d)}else return[]}function Rn(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=B(o,e),c=An(a,l);if(c)return c});return _r(i,e,r,t,!0)}function vt(n,e){return wr(e,n.syncPointTree_,null,fr(n.pendingWriteTree_,v()))}function wr(n,e,t,s){if(g(n.path))return Er(n,e,t,s);{const i=e.get(v());t==null&&i!=null&&(t=An(i,v()));let r=[];const o=m(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=gr(s,o);r=r.concat(wr(a,l,c,d))}return i&&(r=r.concat(Tn(i,n,s,t))),r}}function Er(n,e,t,s){const i=e.get(v());t==null&&i!=null&&(t=An(i,v()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=gr(s,o),d=n.operationForChild(o);d&&(r=r.concat(Er(d,a,l,c)))}),i&&(r=r.concat(Tn(i,n,s,t))),r}function br(n,e){return n.tagToQueryMap.get(e)}function Sr(n){const e=n.indexOf("$");return f(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new b(n.substr(0,e))}}function Tr(n,e,t){const s=n.syncPointTree_.get(e);f(s,"Missing sync point for query tag that we're tracking");const i=fr(n.pendingWriteTree_,e);return Tn(s,t,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Nn(t)}node(){return this.node_}}class kn{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=T(this.path_,e);return new kn(this.syncTree_,t)}node(){return Rn(this.syncTree_,this.path_)}}const Zh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Bs=function(n,e,t){if(!n||typeof n!="object")return n;if(f(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return eu(n[".sv"],e,t);if(typeof n[".sv"]=="object")return tu(n[".sv"],e);f(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},eu=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:f(!1,"Unexpected server value: "+n)}},tu=function(n,e,t){n.hasOwnProperty("increment")||f(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&f(!1,"Unexpected increment value: "+s);const i=e.node();if(f(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},nu=function(n,e,t,s){return Dn(e,new kn(t,n),s)},Ar=function(n,e,t){return Dn(n,new Nn(e),t)};function Dn(n,e,t){const s=n.getPriority().val(),i=Bs(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Bs(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new A(a,N(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new A(i))),o.forEachChild(O,(a,l)=>{const c=Dn(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Mn(n,e){let t=e instanceof b?e:new b(e),s=n,i=m(t);for(;i!==null;){const r=Se(s.node.children,i)||{children:{},childCount:0};s=new On(i,s,r),t=E(t),i=m(t)}return s}function De(n){return n.node.value}function Rr(n,e){n.node.value=e,nn(n)}function Nr(n){return n.node.childCount>0}function su(n){return De(n)===void 0&&!Nr(n)}function It(n,e){U(n.node.children,(t,s)=>{e(new On(t,n,s))})}function kr(n,e,t,s){t&&e(n),It(n,i=>{kr(i,e,!0)})}function iu(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Qe(n){return new b(n.parent===null?n.name:Qe(n.parent)+"/"+n.name)}function nn(n){n.parent!==null&&ru(n.parent,n.name,n)}function ru(n,e,t){const s=su(t),i=J(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,nn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,nn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=/[\[\].#$\/\u0000-\u001F\u007F]/,au=/[\[\].#$\u0000-\u001F\u007F]/,Ft=10*1024*1024,Dr=function(n){return typeof n=="string"&&n.length!==0&&!ou.test(n)},Or=function(n){return typeof n=="string"&&n.length!==0&&!au.test(n)},lu=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Or(n)},cu=function(n,e,t,s){Pn(an(n,"value"),e,t)},Pn=function(n,e,t){const s=t instanceof b?new Gc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+ae(s));if(typeof e=="function")throw new Error(n+"contains a function "+ae(s)+" with contents = "+e.toString());if(Ni(e))throw new Error(n+"contains "+e.toString()+" "+ae(s));if(typeof e=="string"&&e.length>Ft/3&&_t(e)>Ft)throw new Error(n+"contains a string greater than "+Ft+" utf8 bytes "+ae(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(U(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Dr(o)))throw new Error(n+" contains an invalid key ("+o+") "+ae(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qc(s,o),Pn(n,a,s),zc(s)}),i&&r)throw new Error(n+' contains ".value" child '+ae(s)+" in addition to actual children.")}},Mr=function(n,e,t,s){if(!Or(t))throw new Error(an(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},hu=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Mr(n,e,t)},uu=function(n,e){if(m(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},du=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Dr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!lu(t))throw new Error(an(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Pr(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Zi(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function X(n,e,t){Pr(n,t),pu(n,s=>H(s,e)||H(e,s))}function pu(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(_u(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function _u(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Fe&&D("event: "+t.toString()),ke(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="repo_interrupt",gu=25;class yu{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ct(),this.transactionQueueTree_=new On,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Cu(n,e,t){if(n.stats_=yn(n.repoInfo_),n.forceRestClient_||_c())n.server_=new lt(n.repoInfo_,(s,i,r,o)=>{Us(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ws(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{k(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new j(n.repoInfo_,e,(s,i,r,o)=>{Us(n,s,i,r,o)},s=>{Ws(n,s)},s=>{Iu(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=vc(n.repoInfo_,()=>new Ch(n.stats_,n.server_)),n.infoData_=new ph,n.infoSyncTree_=new Fs({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Ct(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ln(n,"connected",!1),n.serverSyncTree_=new Fs({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);X(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function vu(n){const t=n.infoData_.getNode(new b(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function xn(n){return Zh({timestamp:vu(n)})}function Us(n,e,t,s,i){n.dataUpdateCount++;const r=new b(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=tt(t,c=>N(c));o=Jh(n.serverSyncTree_,r,l,i)}else{const l=N(t);o=Xh(n.serverSyncTree_,r,l,i)}else if(s){const l=tt(t,c=>N(c));o=Qh(n.serverSyncTree_,r,l)}else{const l=N(t);o=Ct(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=wt(n,r)),X(n.eventQueue_,a,o)}function Ws(n,e){Ln(n,"connected",e),e===!1&&Eu(n)}function Iu(n,e){U(e,(t,s)=>{Ln(n,t,s)})}function Ln(n,e,t){const s=new b("/.info/"+e),i=N(t);n.infoData_.updateSnapshot(s,i);const r=Ct(n.infoSyncTree_,s,i);X(n.eventQueue_,s,r)}function xr(n){return n.nextWriteId_++}function wu(n,e,t,s,i){Fn(n,"set",{path:e.toString(),value:t,priority:s});const r=xn(n),o=N(t,s),a=Rn(n.serverSyncTree_,e),l=Ar(o,a,r),c=xr(n),d=Ir(n.serverSyncTree_,e,l,c,!0);Pr(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(u,p)=>{const _=u==="ok";_||L("set at "+e+" failed: "+u);const S=he(n.serverSyncTree_,c,!_);X(n.eventQueue_,e,S),Su(n,i,u,p)});const h=Wr(n,e);wt(n,h),X(n.eventQueue_,h,[])}function Eu(n){Fn(n,"onDisconnectEvents");const e=xn(n),t=ct();Yt(n.onDisconnect_,v(),(i,r)=>{const o=nu(i,r,n.serverSyncTree_,e);or(t,i,o)});let s=[];Yt(t,v(),(i,r)=>{s=s.concat(Ct(n.serverSyncTree_,i,r));const o=Wr(n,i);wt(n,o)}),n.onDisconnect_=ct(),X(n.eventQueue_,v(),s)}function bu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(mu)}function Fn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),D(t,...e)}function Su(n,e,t,s){e&&ke(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Lr(n,e,t){return Rn(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function Bn(n,e=n.transactionQueueTree_){if(e||Et(n,e),De(e)){const t=Br(n,e);f(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Tu(n,Qe(e),t)}else Nr(e)&&It(e,t=>{Bn(n,t)})}function Tu(n,e,t){const s=t.map(c=>c.currentWriteId),i=Lr(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const d=t[c];f(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=B(e,d.path);r=r.updateChild(h,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Fn(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let u=0;u<t.length;u++)t[u].status=2,d=d.concat(he(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&h.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();Et(n,Mn(n.transactionQueueTree_,e)),Bn(n,n.transactionQueueTree_),X(n.eventQueue_,e,d);for(let u=0;u<h.length;u++)ke(h[u])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{L("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}wt(n,e)}},o)}function wt(n,e){const t=Fr(n,e),s=Qe(t),i=Br(n,t);return Au(n,i,s),s}function Au(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=B(t,l.path);let d=!1,h;if(f(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,i=i.concat(he(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=gu)d=!0,h="maxretry",i=i.concat(he(n.serverSyncTree_,l.currentWriteId,!0));else{const u=Lr(n,l.path,o);l.currentInputSnapshot=u;const p=e[a].update(u.val());if(p!==void 0){Pn("transaction failed: Data returned ",p,l.path);let _=N(p);typeof p=="object"&&p!=null&&J(p,".priority")||(_=_.updatePriority(u.getPriority()));const M=l.currentWriteId,Ce=xn(n),q=Ar(_,u,Ce);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=q,l.currentWriteId=xr(n),o.splice(o.indexOf(M),1),i=i.concat(Ir(n.serverSyncTree_,l.path,q,l.currentWriteId,l.applyLocally)),i=i.concat(he(n.serverSyncTree_,M,!0))}else d=!0,h="nodata",i=i.concat(he(n.serverSyncTree_,l.currentWriteId,!0))}X(n.eventQueue_,t,i),i=[],d&&(e[a].status=2,(function(u){setTimeout(u,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Et(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)ke(s[a]);Bn(n,n.transactionQueueTree_)}function Fr(n,e){let t,s=n.transactionQueueTree_;for(t=m(e);t!==null&&De(s)===void 0;)s=Mn(s,t),e=E(e),t=m(e);return s}function Br(n,e){const t=[];return Ur(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Ur(n,e,t){const s=De(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);It(e,i=>{Ur(n,i,t)})}function Et(n,e){const t=De(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Rr(e,t.length>0?t:void 0)}It(e,s=>{Et(n,s)})}function Wr(n,e){const t=Qe(Fr(n,e)),s=Mn(n.transactionQueueTree_,e);return iu(s,i=>{Bt(n,i)}),Bt(n,s),kr(s,i=>{Bt(n,i)}),t}function Bt(n,e){const t=De(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(f(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(f(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(he(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Rr(e,void 0):t.length=r+1,X(n.eventQueue_,Qe(e),i);for(let o=0;o<s.length;o++)ke(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Nu(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):L(`Invalid query segment '${t}' in query '${n}'`)}return e}const Hs=function(n,e){const t=ku(n),s=t.namespace;t.domain==="firebase.com"&&Q(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Q("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ac();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Hi(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new b(t.pathString)}},ku=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(d,h)),d<h&&(i=Ru(n.substring(d,h)));const u=Nu(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=s}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Un{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return g(this._path)?null:Qi(this._path)}get ref(){return new ye(this._repo,this._path)}get _queryIdentifier(){const e=Ts(this._queryParams),t=mn(e);return t==="{}"?"default":t}get _queryObject(){return Ts(this._queryParams)}isEqual(e){if(e=ie(e),!(e instanceof Un))return!1;const t=this._repo===e._repo,s=Zi(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Vc(this._path)}}class ye extends Un{constructor(e,t){super(e,t,new wn,!1)}get parent(){const e=Ji(this._path);return e===null?null:new ye(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}function Du(n,e){return n=ie(n),n._checkNotDeleted("ref"),e!==void 0?Ou(n._root,e):n._root}function Ou(n,e){return n=ie(n),m(n._path)===null?hu("child","path",e):Mr("child","path",e),new ye(n._repo,T(n._path,e))}function Mu(n,e){n=ie(n),uu("set",n._path),cu("set",e,n._path);const t=new ft;return wu(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}Kh(ye);Yh(ye);/**
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
 */const Pu="FIREBASE_DATABASE_EMULATOR_HOST",sn={};let xu=!1;function Lu(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=on(r);n.repoInfo_=new Hi(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Fu(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Q("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),D("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Hs(r,i),a=o.repoInfo,l;typeof process<"u"&&as&&(l=as[Pu]),l?(r=`http://${l}?ns=${a.namespace}`,o=Hs(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new gc(n.name,n.options,e);du("Invalid Firebase Database URL",o),g(o.path)||Q("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Uu(a,n,c,new mc(n,t));return new Wu(d,n)}function Bu(n,e){const t=sn[e];(!t||t[n.key]!==n)&&Q(`Database ${e}(${n.repoInfo_}) has already been deleted.`),bu(n),delete t[n.key]}function Uu(n,e,t,s){let i=sn[e.name];i||(i={},sn[e.name]=i);let r=i[n.toURLString()];return r&&Q("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new yu(n,xu,t,s),i[n.toURLString()]=r,r}class Wu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Cu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ye(this._repo,v())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Bu(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Q("Cannot call "+e+" on a deleted database.")}}function Hu(n=ni(),e){const t=ze(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Zr("database");s&&$u(t,...s)}return t}function $u(n,e,t,s={}){n=ie(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&$e(s,r.repoInfo_.emulatorOptions))return;Q("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Q('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ze(Ze.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:to(s.mockUserToken,n.app.options.projectId);o=new Ze(a)}on(e)&&(eo(e),io("Database",!0)),Lu(r,i,s,o)}/**
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
 */function Vu(n){tc(Ia),ne(new K("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Fu(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),G(ls,cs,n),G(ls,cs,"esm2020")}/**
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
 */const Gu={".sv":"timestamp"};function qu(){return Gu}j.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};j.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Vu();const zu={apiKey:"AIzaSyD9821q_YpfGHH9ZFPBXgVXQSyxbAfSGvk",authDomain:"aera-3f59e.firebaseapp.com",projectId:"aera-3f59e",storageBucket:"aera-3f59e.firebasestorage.app",messagingSenderId:"533520508445",appId:"1:533520508445:web:a0906e788e0d6e524888f4",measurementId:"G-J7K9HKBL6K",databaseURL:"https://aera-3f59e-default-rtdb.firebaseio.com"},Hr=ti(zu);Ql(Hr);const ju=Hu(Hr);window.addEventListener("DOMContentLoaded",function(){document.getElementById("Typing-Region").focus()});document.getElementById("send").addEventListener("click",$r);document.getElementById("Typing-Region").addEventListener("keypress",n=>{n.key==="Enter"&&(n.preventDefault(),$r())});function $r(){const n=document.getElementById("Typing-Region").innerText.trim();if(n==="")return;const e=document.createElement("div");e.classList.add("NewMessage"),e.textContent=n,document.getElementById("Chat-Box").appendChild(e),document.getElementById("Typing-Region").innerText="",document.getElementById("Typing-Region").focus()}document.querySelector("form").addEventListener("submit",async n=>{n.preventDefault();const e=document.querySelector("input").value.trim();if(e){const t=Ku();console.log(t,e),sessionStorage.setItem("userId",t),sessionStorage.setItem("userName",e);const s=Du(ju,`users/${t}`);await Mu(s,{username:e,userId:t,online:!0,lastActive:qu()}),alert(`Welcome ${e}! You are now logged in.`)}});function Ku(){if(crypto?.randomUUID)return crypto.randomUUID();if(crypto?.getRandomValues){const n=new Uint32Array(4);return crypto.getRandomValues(n),n.join("-")}else return"user-"+Math.floor(Math.random()*1e6)}
