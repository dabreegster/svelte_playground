(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const y of o.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&n(y)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function $(){}function V(t,e){for(const r in e)t[r]=e[r];return t}function Wt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function Ot(t){return t()}function tt(){return Object.create(null)}function _e(t){t.forEach(Ot)}function oe(t){return typeof t=="function"}function ae(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function zt(t){return Object.keys(t).length===0}function Ht(t,...e){if(t==null)return $;const r=t.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function or(t,e,r){t.$$.on_destroy.push(Ht(e,r))}function ye(t,e,r,n){if(t){const a=Lt(t,e,r,n);return t[0](a)}}function Lt(t,e,r,n){return t[1]&&n?V(r.ctx.slice(),t[1](n(e))):r.ctx}function le(t,e,r,n){if(t[2]&&n){const a=t[2](n(r));if(e.dirty===void 0)return a;if(typeof a=="object"){const o=[],y=Math.max(e.dirty.length,a.length);for(let m=0;m<y;m+=1)o[m]=e.dirty[m]|a[m];return o}return e.dirty|a}return e.dirty}function fe(t,e,r,n,a,o){if(a){const y=Lt(e,r,n,o);t.p(y,a)}}function ie(t){if(t.ctx.length>32){const e=[],r=t.ctx.length/32;for(let n=0;n<r;n++)e[n]=-1;return e}return-1}function ke(t){const e={};for(const r in t)r[0]!=="$"&&(e[r]=t[r]);return e}function Y(t,e){const r={};e=new Set(e);for(const n in t)!e.has(n)&&n[0]!=="$"&&(r[n]=t[n]);return r}function Bt(t){const e={};for(const r in t)e[r]=!0;return e}function jr(t,e,r){return t.set(r),e}function J(t){return t&&oe(t.destroy)?t.destroy:$}function Re(t,e){t.appendChild(e)}function D(t,e,r){t.insertBefore(e,r||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function q(t){return document.createElement(t)}function Nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Ee(t){return document.createTextNode(t)}function ue(){return Ee(" ")}function Me(){return Ee("")}function te(t,e,r,n){return t.addEventListener(e,r,n),()=>t.removeEventListener(e,r,n)}function Kt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Gt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Le(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function Q(t,e){const r=Object.getOwnPropertyDescriptors(t.__proto__);for(const n in e)e[n]==null?t.removeAttribute(n):n==="style"?t.style.cssText=e[n]:n==="__value"?t.value=t[n]=e[n]:r[n]&&r[n].set?t[n]=e[n]:Le(t,n,e[n])}function nt(t,e){for(const r in e)Le(t,r,e[r])}function Dr(t,e){Object.keys(e).forEach(r=>{Xt(t,r,e[r])})}function Xt(t,e,r){e in t?t[e]=typeof t[e]=="boolean"&&r===""?!0:r:Le(t,e,r)}function qt(t){return Array.from(t.childNodes)}function Pt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function We(t,e){return new t(e)}let sr;function Ge(t){sr=t}function me(){if(!sr)throw new Error("Function called outside component initialization");return sr}function ur(t){me().$$.on_mount.push(t)}function Zt(t){me().$$.on_destroy.push(t)}function Xe(t,e){return me().$$.context.set(t,e),e}function Oe(t){return me().$$.context.get(t)}function Yt(t,e){const r=t.$$.callbacks[e.type];r&&r.slice().forEach(n=>n.call(this,e))}const pr=[],X=[],Ar=[],Nr=[],Qt=Promise.resolve();let Kr=!1;function Jt(){Kr||(Kr=!0,Qt.then(Yr))}function Gr(t){Ar.push(t)}function Cr(t){Nr.push(t)}const Fr=new Set;let cr=0;function Yr(){const t=sr;do{for(;cr<pr.length;){const e=pr[cr];cr++,Ge(e),$t(e.$$)}for(Ge(null),pr.length=0,cr=0;X.length;)X.pop()();for(let e=0;e<Ar.length;e+=1){const r=Ar[e];Fr.has(r)||(Fr.add(r),r())}Ar.length=0}while(pr.length);for(;Nr.length;)Nr.pop()();Kr=!1,Fr.clear(),Ge(t)}function $t(t){if(t.fragment!==null){t.update(),_e(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Gr)}}const Er=new Set;let er;function Pe(){er={r:0,c:[],p:er}}function Ze(){er.r||_e(er.c),er=er.p}function R(t,e){t&&t.i&&(Er.delete(t),t.i(e))}function L(t,e,r,n){if(t&&t.o){if(Er.has(t))return;Er.add(t),er.c.push(()=>{Er.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}else n&&n()}function xt(t,e){const r=e.token={};function n(a,o,y,m){if(e.token!==r)return;e.resolved=m;let l=e.ctx;y!==void 0&&(l=l.slice(),l[y]=m);const f=a&&(e.current=a)(l);let p=!1;e.block&&(e.blocks?e.blocks.forEach((i,w)=>{w!==o&&i&&(Pe(),L(i,1,1,()=>{e.blocks[w]===i&&(e.blocks[w]=null)}),Ze())}):e.block.d(1),f.c(),R(f,1),f.m(e.mount(),e.anchor),p=!0),e.block=f,e.blocks&&(e.blocks[o]=f),p&&Yr()}if(Wt(t)){const a=me();if(t.then(o=>{Ge(a),n(e.then,1,e.value,o),Ge(null)},o=>{if(Ge(a),n(e.catch,2,e.error,o),Ge(null),!e.hasCatch)throw o}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,t),!0;e.resolved=t}}function en(t,e,r){const n=e.slice(),{resolved:a}=t;t.current===t.then&&(n[t.value]=a),t.current===t.catch&&(n[t.error]=a),t.block.p(n,r)}function rn(t,e){L(t,1,1,()=>{e.delete(t.key)})}function tn(t,e,r,n,a,o,y,m,l,f,p,i){let w=t.length,c=o.length,h=w;const T={};for(;h--;)T[t[h].key]=h;const u=[],b=new Map,s=new Map;for(h=c;h--;){const v=i(a,o,h),d=r(v);let I=y.get(d);I?n&&I.p(v,e):(I=f(d,v),I.c()),b.set(d,u[h]=I),d in T&&s.set(d,Math.abs(h-T[d]))}const _=new Set,g=new Set;function j(v){R(v,1),v.m(m,p),y.set(v.key,v),p=v.first,c--}for(;w&&c;){const v=u[c-1],d=t[w-1],I=v.key,F=d.key;v===d?(p=v.first,w--,c--):b.has(F)?!y.has(I)||_.has(I)?j(v):g.has(F)?w--:s.get(I)>s.get(F)?(g.add(I),j(v)):(_.add(F),w--):(l(d,y),w--)}for(;w--;){const v=t[w];b.has(v.key)||l(v,y)}for(;c;)j(u[c-1]);return u}function x(t,e){const r={},n={},a={$$scope:1};let o=t.length;for(;o--;){const y=t[o],m=e[o];if(m){for(const l in y)l in m||(n[l]=1);for(const l in m)a[l]||(r[l]=m[l],a[l]=1);t[o]=m}else for(const l in y)a[l]=1}for(const y in n)y in r||(r[y]=void 0);return r}function ce(t){return typeof t=="object"&&t!==null?t:{}}function Ir(t,e,r,n){const a=t.$$.props[e];a!==void 0&&(t.$$.bound[a]=r,n===void 0&&r(t.$$.ctx[a]))}function B(t){t&&t.c()}function W(t,e,r,n){const{fragment:a,after_update:o}=t.$$;a&&a.m(e,r),n||Gr(()=>{const y=t.$$.on_mount.map(Ot).filter(oe);t.$$.on_destroy?t.$$.on_destroy.push(...y):_e(y),t.$$.on_mount=[]}),o.forEach(Gr)}function z(t,e){const r=t.$$;r.fragment!==null&&(_e(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function nn(t,e){t.$$.dirty[0]===-1&&(pr.push(t),Jt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pe(t,e,r,n,a,o,y,m=[-1]){const l=sr;Ge(t);const f=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:a,bound:tt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:tt(),dirty:m,skip_bound:!1,root:e.target||l.$$.root};y&&y(f.root);let p=!1;if(f.ctx=r?r(t,e.props||{},(i,w,...c)=>{const h=c.length?c[0]:w;return f.ctx&&a(f.ctx[i],f.ctx[i]=h)&&(!f.skip_bound&&f.bound[i]&&f.bound[i](h),p&&nn(t,i)),w}):[],f.update(),p=!0,_e(f.before_update),f.fragment=n?n(f.ctx):!1,e.target){if(e.hydrate){const i=qt(e.target);f.fragment&&f.fragment.l(i),i.forEach(M)}else f.fragment&&f.fragment.c();e.intro&&R(t.$$.fragment),W(t,e.target,e.anchor,e.customElement),Yr()}Ge(l)}class we{$destroy(){z(this,1),this.$destroy=$}$on(e,r){if(!oe(r))return $;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(r),()=>{const a=n.indexOf(r);a!==-1&&n.splice(a,1)}}$set(e){this.$$set&&!zt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var Xr=function(t,e){return Xr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(r[a]=n[a])},Xr(t,e)};function Ue(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Xr(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var ge=function(){return ge=Object.assign||function(e){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},ge.apply(this,arguments)};function gr(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function an(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),a,o=[],y;try{for(;(e===void 0||e-- >0)&&!(a=n.next()).done;)o.push(a.value)}catch(m){y={error:m}}finally{try{a&&!a.done&&(r=n.return)&&r.call(n)}finally{if(y)throw y.error}}return o}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var yr=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function on(t){return t===void 0&&(t=window),mn(t)?{passive:!0}:!1}function mn(t){t===void 0&&(t=window);var e=!1;try{var r={get passive(){return e=!0,!1}},n=function(){};t.document.addEventListener("test",n,r),t.document.removeEventListener("test",n,r)}catch{e=!1}return e}const yn=Object.freeze(Object.defineProperty({__proto__:null,applyPassive:on},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function ln(t,e){if(t.closest)return t.closest(e);for(var r=t;r;){if(Mt(r,e))return r;r=r.parentElement}return null}function Mt(t,e){var r=t.matches||t.webkitMatchesSelector||t.msMatchesSelector;return r.call(t,e)}function fn(t){var e=t;if(e.offsetParent!==null)return e.scrollWidth;var r=e.cloneNode(!0);r.style.setProperty("position","absolute"),r.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(r);var n=r.scrollWidth;return document.documentElement.removeChild(r),n}const Dt=Object.freeze(Object.defineProperty({__proto__:null,closest:ln,matches:Mt,estimateScrollWidth:fn},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var pn={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},wn={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},at={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},hr;function sn(t,e){e===void 0&&(e=!1);var r=t.CSS,n=hr;if(typeof hr=="boolean"&&!e)return hr;var a=r&&typeof r.supports=="function";if(!a)return!1;var o=r.supports("--css-vars","yes"),y=r.supports("(--css-vars: yes)")&&r.supports("color","#00000000");return n=o||y,e||(hr=n),n}function bn(t,e,r){if(!t)return{x:0,y:0};var n=e.x,a=e.y,o=n+r.left,y=a+r.top,m,l;if(t.type==="touchstart"){var f=t;m=f.changedTouches[0].pageX-o,l=f.changedTouches[0].pageY-y}else{var p=t;m=p.pageX-o,l=p.pageY-y}return{x:m,y:l}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ot=["touchstart","pointerdown","mousedown","keydown"],mt=["touchend","pointerup","mouseup","contextmenu"],vr=[],dn=function(t){Ue(e,t);function e(r){var n=t.call(this,ge(ge({},e.defaultAdapter),r))||this;return n.activationAnimationHasEnded=!1,n.activationTimer=0,n.fgDeactivationRemovalTimer=0,n.fgScale="0",n.frame={width:0,height:0},n.initialSize=0,n.layoutFrame=0,n.maxRadius=0,n.unboundedCoords={left:0,top:0},n.activationState=n.defaultActivationState(),n.activationTimerCallback=function(){n.activationAnimationHasEnded=!0,n.runDeactivationUXLogicIfReady()},n.activateHandler=function(a){n.activateImpl(a)},n.deactivateHandler=function(){n.deactivateImpl()},n.focusHandler=function(){n.handleFocus()},n.blurHandler=function(){n.handleBlur()},n.resizeHandler=function(){n.layout()},n}return Object.defineProperty(e,"cssClasses",{get:function(){return pn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return wn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return at},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var r=this,n=this.supportsPressRipple();if(this.registerRootHandlers(n),n){var a=e.cssClasses,o=a.ROOT,y=a.UNBOUNDED;requestAnimationFrame(function(){r.adapter.addClass(o),r.adapter.isUnbounded()&&(r.adapter.addClass(y),r.layoutInternal())})}},e.prototype.destroy=function(){var r=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,a=n.ROOT,o=n.UNBOUNDED;requestAnimationFrame(function(){r.adapter.removeClass(a),r.adapter.removeClass(o),r.removeCssVars()})}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},e.prototype.activate=function(r){this.activateImpl(r)},e.prototype.deactivate=function(){this.deactivateImpl()},e.prototype.layout=function(){var r=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame(function(){r.layoutInternal(),r.layoutFrame=0})},e.prototype.setUnbounded=function(r){var n=e.cssClasses.UNBOUNDED;r?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var r=this;requestAnimationFrame(function(){return r.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var r=this;requestAnimationFrame(function(){return r.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers=function(r){var n,a;if(r){try{for(var o=gr(ot),y=o.next();!y.done;y=o.next()){var m=y.value;this.adapter.registerInteractionHandler(m,this.activateHandler)}}catch(l){n={error:l}}finally{try{y&&!y.done&&(a=o.return)&&a.call(o)}finally{if(n)throw n.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},e.prototype.registerDeactivationHandlers=function(r){var n,a;if(r.type==="keydown")this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var o=gr(mt),y=o.next();!y.done;y=o.next()){var m=y.value;this.adapter.registerDocumentInteractionHandler(m,this.deactivateHandler)}}catch(l){n={error:l}}finally{try{y&&!y.done&&(a=o.return)&&a.call(o)}finally{if(n)throw n.error}}},e.prototype.deregisterRootHandlers=function(){var r,n;try{for(var a=gr(ot),o=a.next();!o.done;o=a.next()){var y=o.value;this.adapter.deregisterInteractionHandler(y,this.activateHandler)}}catch(m){r={error:m}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},e.prototype.deregisterDeactivationHandlers=function(){var r,n;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var a=gr(mt),o=a.next();!o.done;o=a.next()){var y=o.value;this.adapter.deregisterDocumentInteractionHandler(y,this.deactivateHandler)}}catch(m){r={error:m}}finally{try{o&&!o.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}},e.prototype.removeCssVars=function(){var r=this,n=e.strings,a=Object.keys(n);a.forEach(function(o){o.indexOf("VAR_")===0&&r.adapter.updateCssVariable(n[o],null)})},e.prototype.activateImpl=function(r){var n=this;if(!this.adapter.isSurfaceDisabled()){var a=this.activationState;if(!a.isActivated){var o=this.previousActivationEvent,y=o&&r!==void 0&&o.type!==r.type;if(!y){a.isActivated=!0,a.isProgrammatic=r===void 0,a.activationEvent=r,a.wasActivatedByPointer=a.isProgrammatic?!1:r!==void 0&&(r.type==="mousedown"||r.type==="touchstart"||r.type==="pointerdown");var m=r!==void 0&&vr.length>0&&vr.some(function(l){return n.adapter.containsEventTarget(l)});if(m){this.resetActivationState();return}r!==void 0&&(vr.push(r.target),this.registerDeactivationHandlers(r)),a.wasElementMadeActive=this.checkElementMadeActive(r),a.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame(function(){vr=[],!a.wasElementMadeActive&&r!==void 0&&(r.key===" "||r.keyCode===32)&&(a.wasElementMadeActive=n.checkElementMadeActive(r),a.wasElementMadeActive&&n.animateActivation()),a.wasElementMadeActive||(n.activationState=n.defaultActivationState())})}}}},e.prototype.checkElementMadeActive=function(r){return r!==void 0&&r.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation=function(){var r=this,n=e.strings,a=n.VAR_FG_TRANSLATE_START,o=n.VAR_FG_TRANSLATE_END,y=e.cssClasses,m=y.FG_DEACTIVATION,l=y.FG_ACTIVATION,f=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var p="",i="";if(!this.adapter.isUnbounded()){var w=this.getFgTranslationCoordinates(),c=w.startPoint,h=w.endPoint;p=c.x+"px, "+c.y+"px",i=h.x+"px, "+h.y+"px"}this.adapter.updateCssVariable(a,p),this.adapter.updateCssVariable(o,i),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(m),this.adapter.computeBoundingRect(),this.adapter.addClass(l),this.activationTimer=setTimeout(function(){r.activationTimerCallback()},f)},e.prototype.getFgTranslationCoordinates=function(){var r=this.activationState,n=r.activationEvent,a=r.wasActivatedByPointer,o;a?o=bn(n,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):o={x:this.frame.width/2,y:this.frame.height/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2};var y={x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2};return{startPoint:o,endPoint:y}},e.prototype.runDeactivationUXLogicIfReady=function(){var r=this,n=e.cssClasses.FG_DEACTIVATION,a=this.activationState,o=a.hasDeactivationUXRun,y=a.isActivated,m=o||!y;m&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer=setTimeout(function(){r.adapter.removeClass(n)},at.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses=function(){var r=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(r),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState=function(){var r=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout(function(){return r.previousActivationEvent=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivateImpl=function(){var r=this,n=this.activationState;if(n.isActivated){var a=ge({},n);n.isProgrammatic?(requestAnimationFrame(function(){r.animateDeactivation(a)}),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame(function(){r.activationState.hasDeactivationUXRun=!0,r.animateDeactivation(a),r.resetActivationState()}))}},e.prototype.animateDeactivation=function(r){var n=r.wasActivatedByPointer,a=r.wasElementMadeActive;(n||a)&&this.runDeactivationUXLogicIfReady()},e.prototype.layoutInternal=function(){var r=this;this.frame=this.adapter.computeBoundingRect();var n=Math.max(this.frame.height,this.frame.width),a=function(){var y=Math.sqrt(Math.pow(r.frame.width,2)+Math.pow(r.frame.height,2));return y+e.numbers.PADDING};this.maxRadius=this.adapter.isUnbounded()?n:a();var o=Math.floor(n*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&o%2!==0?this.initialSize=o-1:this.initialSize=o,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},e.prototype.updateLayoutCssVars=function(){var r=e.strings,n=r.VAR_FG_SIZE,a=r.VAR_LEFT,o=r.VAR_TOP,y=r.VAR_FG_SCALE;this.adapter.updateCssVariable(n,this.initialSize+"px"),this.adapter.updateCssVariable(y,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(a,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(o,this.unboundedCoords.top+"px"))},e}(yr);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _r={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},He={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var un=function(t){Ue(e,t);function e(r){var n=t.call(this,ge(ge({},e.defaultAdapter),r))||this;return n.hasToggledAriaLabel=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return _r},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return He},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var r=this.adapter.getAttr(He.DATA_ARIA_LABEL_ON),n=this.adapter.getAttr(He.DATA_ARIA_LABEL_OFF);if(r&&n){if(this.adapter.getAttr(He.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(He.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(_r.ICON_BUTTON_ON)},e.prototype.toggle=function(r){if(r===void 0&&(r=!this.isOn()),r?this.adapter.addClass(_r.ICON_BUTTON_ON):this.adapter.removeClass(_r.ICON_BUTTON_ON),this.hasToggledAriaLabel){var n=r?this.adapter.getAttr(He.DATA_ARIA_LABEL_ON):this.adapter.getAttr(He.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(He.ARIA_LABEL,n||"")}else this.adapter.setAttr(He.ARIA_PRESSED,""+r)},e}(yr);function H(t){return Object.entries(t).filter(([e,r])=>e!==""&&r).map(([e])=>e).join(" ")}function he(t,e,r,n={bubbles:!0},a=!1){if(typeof Event<"u"&&t){const o=new CustomEvent(e,Object.assign(Object.assign({},n),{detail:r}));if(t==null||t.dispatchEvent(o),a&&e.startsWith("SMUI")){const y=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},n),{detail:r}));t==null||t.dispatchEvent(y),y.defaultPrevented&&o.preventDefault()}return o}}function Ye(t,e){let r=Object.getOwnPropertyNames(t);const n={};for(let a=0;a<r.length;a++){const o=r[a],y=o.indexOf("$");y!==-1&&e.indexOf(o.substring(0,y+1))!==-1||e.indexOf(o)===-1&&(n[o]=t[o])}return n}const yt=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,cn=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Se(t){let e,r=[];t.$on=(a,o)=>{let y=a,m=()=>{};return e?m=e(y,o):r.push([y,o]),y.match(yt)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',y),()=>{m()}};function n(a){Yt(t,a)}return a=>{const o=[],y={};e=(m,l)=>{let f=m,p=l,i=!1;const w=f.match(yt),c=f.match(cn),h=w||c;if(f.match(/^SMUI:\w+:/)){const b=f.split(":");let s="";for(let _=0;_<b.length;_++)s+=_===b.length-1?":"+b[_]:b[_].split("-").map(g=>g.slice(0,1).toUpperCase()+g.slice(1)).join("");console.warn(`The event ${f.split("$")[0]} has been renamed to ${s.split("$")[0]}.`),f=s}if(h){const b=f.split(w?":":"$");f=b[0];const s=b.slice(1).reduce((_,g)=>(_[g]=!0,_),{});s.passive&&(i=i||{},i.passive=!0),s.nonpassive&&(i=i||{},i.passive=!1),s.capture&&(i=i||{},i.capture=!0),s.once&&(i=i||{},i.once=!0),s.preventDefault&&(p=Kt(p)),s.stopPropagation&&(p=Gt(p))}const T=te(a,f,p,i),u=()=>{T();const b=o.indexOf(u);b>-1&&o.splice(b,1)};return o.push(u),f in y||(y[f]=te(a,f,n)),u};for(let m=0;m<r.length;m++)e(r[m][0],r[m][1]);return{destroy:()=>{for(let m=0;m<o.length;m++)o[m]();for(let m of Object.entries(y))m[1]()}}}}function ve(t,e){let r=Object.getOwnPropertyNames(t);const n={};for(let a=0;a<r.length;a++){const o=r[a];o.substring(0,e.length)===e&&(n[o.substring(e.length)]=t[o])}return n}function Ce(t,e){let r=[];if(e)for(let n=0;n<e.length;n++){const a=e[n],o=Array.isArray(a)?a[0]:a;Array.isArray(a)&&a.length>1?r.push(o(t,a[1])):r.push(o(t))}return{update(n){if((n&&n.length||0)!=r.length)throw new Error("You must not change the length of an actions array.");if(n)for(let a=0;a<n.length;a++){const o=r[a];if(o&&o.update){const y=n[a];Array.isArray(y)&&y.length>1?o.update(y[1]):o.update()}}},destroy(){for(let n=0;n<r.length;n++){const a=r[n];a&&a.destroy&&a.destroy()}}}}const{applyPassive:kr}=yn,{matches:gn}=Dt;function br(t,{ripple:e=!0,surface:r=!1,unbounded:n=!1,disabled:a=!1,color:o,active:y,rippleElement:m,eventTarget:l,activeTarget:f,addClass:p=h=>t.classList.add(h),removeClass:i=h=>t.classList.remove(h),addStyle:w=(h,T)=>t.style.setProperty(h,T),initPromise:c=Promise.resolve()}={}){let h,T=Oe("SMUI:addLayoutListener"),u,b=y,s=l,_=f;function g(){r?(p("mdc-ripple-surface"),o==="primary"?(p("smui-ripple-surface--primary"),i("smui-ripple-surface--secondary")):o==="secondary"?(i("smui-ripple-surface--primary"),p("smui-ripple-surface--secondary")):(i("smui-ripple-surface--primary"),i("smui-ripple-surface--secondary"))):(i("mdc-ripple-surface"),i("smui-ripple-surface--primary"),i("smui-ripple-surface--secondary")),h&&b!==y&&(b=y,y?h.activate():y===!1&&h.deactivate()),e&&!h?(h=new dn({addClass:p,browserSupportsCssVars:()=>sn(window),computeBoundingRect:()=>(m||t).getBoundingClientRect(),containsEventTarget:v=>t.contains(v),deregisterDocumentInteractionHandler:(v,d)=>document.documentElement.removeEventListener(v,d,kr()),deregisterInteractionHandler:(v,d)=>(l||t).removeEventListener(v,d,kr()),deregisterResizeHandler:v=>window.removeEventListener("resize",v),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset}),isSurfaceActive:()=>y??gn(f||t,":active"),isSurfaceDisabled:()=>!!a,isUnbounded:()=>!!n,registerDocumentInteractionHandler:(v,d)=>document.documentElement.addEventListener(v,d,kr()),registerInteractionHandler:(v,d)=>(l||t).addEventListener(v,d,kr()),registerResizeHandler:v=>window.addEventListener("resize",v),removeClass:i,updateCssVariable:w}),c.then(()=>{h&&(h.init(),h.setUnbounded(n))})):h&&!e&&c.then(()=>{h&&(h.destroy(),h=void 0)}),h&&(s!==l||_!==f)&&(s=l,_=f,h.destroy(),requestAnimationFrame(()=>{h&&(h.init(),h.setUnbounded(n))})),!e&&n&&p("mdc-ripple-upgraded--unbounded")}g(),T&&(u=T(j));function j(){h&&h.layout()}return{update(v){({ripple:e,surface:r,unbounded:n,disabled:a,color:o,active:y,rippleElement:m,eventTarget:l,activeTarget:f,addClass:p,removeClass:i,addStyle:w,initPromise:c}=Object.assign({ripple:!0,surface:!1,unbounded:!1,disabled:!1,color:void 0,active:void 0,rippleElement:void 0,eventTarget:void 0,activeTarget:void 0,addClass:d=>t.classList.add(d),removeClass:d=>t.classList.remove(d),addStyle:(d,I)=>t.style.setProperty(d,I),initPromise:Promise.resolve()},v)),g()},destroy(){h&&(h.destroy(),h=void 0,i("mdc-ripple-surface"),i("smui-ripple-surface--primary"),i("smui-ripple-surface--secondary")),u&&u()}}}function hn(t){let e;const r=t[10].default,n=ye(r,t,t[12],null);return{c(){n&&n.c()},m(a,o){n&&n.m(a,o),e=!0},p(a,o){n&&n.p&&(!e||o&4096)&&fe(n,r,a,a[12],e?le(r,a[12],o,null):ie(a[12]),null)},i(a){e||(R(n,a),e=!0)},o(a){L(n,a),e=!1},d(a){n&&n.d(a)}}}function vn(t){let e,r,n;const a=[{tag:t[3]},{use:[t[5],...t[0]]},{class:H({[t[1]]:!0,"mdc-button__label":t[6]==="button","mdc-fab__label":t[6]==="fab","mdc-tab__text-label":t[6]==="tab","mdc-image-list__label":t[6]==="image-list","mdc-snackbar__label":t[6]==="snackbar","mdc-banner__text":t[6]==="banner","mdc-segmented-button__label":t[6]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":t[6]==="data-table:pagination","mdc-data-table__header-cell-label":t[6]==="data-table:sortable-header-cell"})},t[6]==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:t[7]},t[8]];var o=t[2];function y(m){let l={$$slots:{default:[hn]},$$scope:{ctx:m}};for(let f=0;f<a.length;f+=1)l=V(l,a[f]);return{props:l}}return o&&(e=We(o,y(t)),t[11](e)),{c(){e&&B(e.$$.fragment),r=Me()},m(m,l){e&&W(e,m,l),D(m,r,l),n=!0},p(m,[l]){const f=l&491?x(a,[l&8&&{tag:m[3]},l&33&&{use:[m[5],...m[0]]},l&66&&{class:H({[m[1]]:!0,"mdc-button__label":m[6]==="button","mdc-fab__label":m[6]==="fab","mdc-tab__text-label":m[6]==="tab","mdc-image-list__label":m[6]==="image-list","mdc-snackbar__label":m[6]==="snackbar","mdc-banner__text":m[6]==="banner","mdc-segmented-button__label":m[6]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":m[6]==="data-table:pagination","mdc-data-table__header-cell-label":m[6]==="data-table:sortable-header-cell"})},l&64&&ce(m[6]==="snackbar"?{"aria-atomic":"false"}:{}),l&128&&{tabindex:m[7]},l&256&&ce(m[8])]):{};if(l&4096&&(f.$$scope={dirty:l,ctx:m}),o!==(o=m[2])){if(e){Pe();const p=e;L(p.$$.fragment,1,0,()=>{z(p,1)}),Ze()}o?(e=We(o,y(m)),m[11](e),B(e.$$.fragment),R(e.$$.fragment,1),W(e,r.parentNode,r)):e=null}else o&&e.$set(f)},i(m){n||(e&&R(e.$$.fragment,m),n=!0)},o(m){e&&L(e.$$.fragment,m),n=!1},d(m){t[11](null),m&&M(r),e&&z(e,m)}}}function _n(t,e,r){const n=["use","class","component","tag","getElement"];let a=Y(e,n),{$$slots:o={},$$scope:y}=e;const m=Se(me());let{use:l=[]}=e,{class:f=""}=e,p,{component:i=ze}=e,{tag:w=i===ze?"span":void 0}=e;const c=Oe("SMUI:label:context"),h=Oe("SMUI:label:tabindex");function T(){return p.getElement()}function u(b){X[b?"unshift":"push"](()=>{p=b,r(4,p)})}return t.$$set=b=>{e=V(V({},e),ke(b)),r(8,a=Y(e,n)),"use"in b&&r(0,l=b.use),"class"in b&&r(1,f=b.class),"component"in b&&r(2,i=b.component),"tag"in b&&r(3,w=b.tag),"$$scope"in b&&r(12,y=b.$$scope)},[l,f,i,w,p,m,c,h,a,T,o,u,y]}class kn extends we{constructor(e){super(),pe(this,e,_n,vn,ae,{use:0,class:1,component:2,tag:3,getElement:9})}get getElement(){return this.$$.ctx[9]}}function Sn(t){let e;const r=t[11].default,n=ye(r,t,t[13],null);return{c(){n&&n.c()},m(a,o){n&&n.m(a,o),e=!0},p(a,o){n&&n.p&&(!e||o&8192)&&fe(n,r,a,a[13],e?le(r,a[13],o,null):ie(a[13]),null)},i(a){e||(R(n,a),e=!0)},o(a){L(n,a),e=!1},d(a){n&&n.d(a)}}}function Tn(t){let e,r,n;const a=[{tag:t[4]},{use:[t[6],...t[0]]},{class:H({[t[1]]:!0,"mdc-button__icon":t[8]==="button","mdc-fab__icon":t[8]==="fab","mdc-icon-button__icon":t[8]==="icon-button","mdc-icon-button__icon--on":t[8]==="icon-button"&&t[2],"mdc-tab__icon":t[8]==="tab","mdc-banner__icon":t[8]==="banner","mdc-segmented-button__icon":t[8]==="segmented-button"})},{"aria-hidden":"true"},t[7]?{focusable:"false",tabindex:"-1"}:{},t[9]];var o=t[3];function y(m){let l={$$slots:{default:[Sn]},$$scope:{ctx:m}};for(let f=0;f<a.length;f+=1)l=V(l,a[f]);return{props:l}}return o&&(e=We(o,y(t)),t[12](e)),{c(){e&&B(e.$$.fragment),r=Me()},m(m,l){e&&W(e,m,l),D(m,r,l),n=!0},p(m,[l]){const f=l&983?x(a,[l&16&&{tag:m[4]},l&65&&{use:[m[6],...m[0]]},l&262&&{class:H({[m[1]]:!0,"mdc-button__icon":m[8]==="button","mdc-fab__icon":m[8]==="fab","mdc-icon-button__icon":m[8]==="icon-button","mdc-icon-button__icon--on":m[8]==="icon-button"&&m[2],"mdc-tab__icon":m[8]==="tab","mdc-banner__icon":m[8]==="banner","mdc-segmented-button__icon":m[8]==="segmented-button"})},a[3],l&128&&ce(m[7]?{focusable:"false",tabindex:"-1"}:{}),l&512&&ce(m[9])]):{};if(l&8192&&(f.$$scope={dirty:l,ctx:m}),o!==(o=m[3])){if(e){Pe();const p=e;L(p.$$.fragment,1,0,()=>{z(p,1)}),Ze()}o?(e=We(o,y(m)),m[12](e),B(e.$$.fragment),R(e.$$.fragment,1),W(e,r.parentNode,r)):e=null}else o&&e.$set(f)},i(m){n||(e&&R(e.$$.fragment,m),n=!0)},o(m){e&&L(e.$$.fragment,m),n=!1},d(m){t[12](null),m&&M(r),e&&z(e,m)}}}function An(t,e,r){const n=["use","class","on","component","tag","getElement"];let a=Y(e,n),{$$slots:o={},$$scope:y}=e;const m=Se(me());let{use:l=[]}=e,{class:f=""}=e,{on:p=!1}=e,i,{component:w=ze}=e,{tag:c=w===ze?"i":void 0}=e;const h=w===Pn,T=Oe("SMUI:icon:context");function u(){return i.getElement()}function b(s){X[s?"unshift":"push"](()=>{i=s,r(5,i)})}return t.$$set=s=>{e=V(V({},e),ke(s)),r(9,a=Y(e,n)),"use"in s&&r(0,l=s.use),"class"in s&&r(1,f=s.class),"on"in s&&r(2,p=s.on),"component"in s&&r(3,w=s.component),"tag"in s&&r(4,c=s.tag),"$$scope"in s&&r(13,y=s.$$scope)},[l,f,p,w,c,i,m,h,T,a,u,o,b,y]}class lt extends we{constructor(e){super(),pe(this,e,An,Tn,ae,{use:0,class:1,on:2,component:3,tag:4,getElement:10})}get getElement(){return this.$$.ctx[10]}}function Cn(t){let e=t[1],r,n,a=t[1]&&Ur(t);return{c(){a&&a.c(),r=Me()},m(o,y){a&&a.m(o,y),D(o,r,y),n=!0},p(o,y){o[1]?e?ae(e,o[1])?(a.d(1),a=Ur(o),a.c(),a.m(r.parentNode,r)):a.p(o,y):(a=Ur(o),a.c(),a.m(r.parentNode,r)):e&&(a.d(1),a=null),e=o[1]},i(o){n||(R(a),n=!0)},o(o){L(a),n=!1},d(o){o&&M(r),a&&a.d(o)}}}function En(t){let e=t[1],r,n=t[1]&&Wr(t);return{c(){n&&n.c(),r=Me()},m(a,o){n&&n.m(a,o),D(a,r,o)},p(a,o){a[1]?e?ae(e,a[1])?(n.d(1),n=Wr(a),n.c(),n.m(r.parentNode,r)):n.p(a,o):(n=Wr(a),n.c(),n.m(r.parentNode,r)):e&&(n.d(1),n=null),e=a[1]},i:$,o:$,d(a){a&&M(r),n&&n.d(a)}}}function Ur(t){let e,r,n,a,o;const y=t[8].default,m=ye(y,t,t[7],null);let l=[t[5]],f={};for(let p=0;p<l.length;p+=1)f=V(f,l[p]);return{c(){e=q(t[1]),m&&m.c(),/-/.test(t[1])?Dr(e,f):Q(e,f)},m(p,i){D(p,e,i),m&&m.m(e,null),t[10](e),n=!0,a||(o=[J(r=Ce.call(null,e,t[0])),J(t[4].call(null,e))],a=!0)},p(p,i){m&&m.p&&(!n||i&128)&&fe(m,y,p,p[7],n?le(y,p[7],i,null):ie(p[7]),null),f=x(l,[i&32&&p[5]]),/-/.test(p[1])?Dr(e,f):Q(e,f),r&&oe(r.update)&&i&1&&r.update.call(null,p[0])},i(p){n||(R(m,p),n=!0)},o(p){L(m,p),n=!1},d(p){p&&M(e),m&&m.d(p),t[10](null),a=!1,_e(o)}}}function Wr(t){let e,r,n,a,o=[t[5]],y={};for(let m=0;m<o.length;m+=1)y=V(y,o[m]);return{c(){e=q(t[1]),/-/.test(t[1])?Dr(e,y):Q(e,y)},m(m,l){D(m,e,l),t[9](e),n||(a=[J(r=Ce.call(null,e,t[0])),J(t[4].call(null,e))],n=!0)},p(m,l){y=x(o,[l&32&&m[5]]),/-/.test(m[1])?Dr(e,y):Q(e,y),r&&oe(r.update)&&l&1&&r.update.call(null,m[0])},d(m){m&&M(e),t[9](null),n=!1,_e(a)}}}function In(t){let e,r,n,a;const o=[En,Cn],y=[];function m(l,f){return l[3]?0:1}return e=m(t),r=y[e]=o[e](t),{c(){r.c(),n=Me()},m(l,f){y[e].m(l,f),D(l,n,f),a=!0},p(l,[f]){let p=e;e=m(l),e===p?y[e].p(l,f):(Pe(),L(y[p],1,1,()=>{y[p]=null}),Ze(),r=y[e],r?r.p(l,f):(r=y[e]=o[e](l),r.c()),R(r,1),r.m(n.parentNode,n))},i(l){a||(R(r),a=!0)},o(l){L(r),a=!1},d(l){y[e].d(l),l&&M(n)}}}function Rn(t,e,r){let n;const a=["use","tag","getElement"];let o=Y(e,a),{$$slots:y={},$$scope:m}=e,{use:l=[]}=e,{tag:f}=e;const p=Se(me());let i;function w(){return i}function c(T){X[T?"unshift":"push"](()=>{i=T,r(2,i)})}function h(T){X[T?"unshift":"push"](()=>{i=T,r(2,i)})}return t.$$set=T=>{e=V(V({},e),ke(T)),r(5,o=Y(e,a)),"use"in T&&r(0,l=T.use),"tag"in T&&r(1,f=T.tag),"$$scope"in T&&r(7,m=T.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&r(3,n=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(f)>-1)},[l,f,i,n,p,o,w,m,y,c,h]}class ze extends we{constructor(e){super(),pe(this,e,Rn,In,ae,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}function On(t){let e,r,n,a,o;const y=t[6].default,m=ye(y,t,t[5],null);let l=[t[3]],f={};for(let p=0;p<l.length;p+=1)f=V(f,l[p]);return{c(){e=Nt("svg"),m&&m.c(),nt(e,f)},m(p,i){D(p,e,i),m&&m.m(e,null),t[7](e),n=!0,a||(o=[J(r=Ce.call(null,e,t[0])),J(t[2].call(null,e))],a=!0)},p(p,[i]){m&&m.p&&(!n||i&32)&&fe(m,y,p,p[5],n?le(y,p[5],i,null):ie(p[5]),null),nt(e,f=x(l,[i&8&&p[3]])),r&&oe(r.update)&&i&1&&r.update.call(null,p[0])},i(p){n||(R(m,p),n=!0)},o(p){L(m,p),n=!1},d(p){p&&M(e),m&&m.d(p),t[7](null),a=!1,_e(o)}}}function Ln(t,e,r){const n=["use","getElement"];let a=Y(e,n),{$$slots:o={},$$scope:y}=e,{use:m=[]}=e;const l=Se(me());let f;function p(){return f}function i(w){X[w?"unshift":"push"](()=>{f=w,r(1,f)})}return t.$$set=w=>{e=V(V({},e),ke(w)),r(3,a=Y(e,n)),"use"in w&&r(0,m=w.use),"$$scope"in w&&r(5,y=w.$$scope)},[m,f,l,a,p,y,o,i]}class Pn extends we{constructor(e){super(),pe(this,e,Ln,On,ae,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}const nr=[];function zr(t,e=$){let r;const n=new Set;function a(m){if(ae(t,m)&&(t=m,r)){const l=!nr.length;for(const f of n)f[1](),nr.push(f,t);if(l){for(let f=0;f<nr.length;f+=2)nr[f][0](nr[f+1]);nr.length=0}}}function o(m){a(m(t))}function y(m,l=$){const f=[m,l];return n.add(f),n.size===1&&(r=e(a)||$),m(t),()=>{n.delete(f),n.size===0&&(r(),r=null)}}return{set:a,update:o,subscribe:y}}function ft(t){let e;return{c(){e=q("div"),Le(e,"class","mdc-icon-button__touch")},m(r,n){D(r,e,n)},d(r){r&&M(e)}}}function Zn(t){let e,r,n,a;const o=t[33].default,y=ye(o,t,t[37],null);let m=t[8]&&ft();return{c(){e=q("div"),r=ue(),y&&y.c(),m&&m.c(),n=Me(),Le(e,"class","mdc-icon-button__ripple")},m(l,f){D(l,e,f),D(l,r,f),y&&y.m(l,f),m&&m.m(l,f),D(l,n,f),a=!0},p(l,f){y&&y.p&&(!a||f[1]&64)&&fe(y,o,l,l[37],a?le(o,l[37],f,null):ie(l[37]),null),l[8]?m||(m=ft(),m.c(),m.m(n.parentNode,n)):m&&(m.d(1),m=null)},i(l){a||(R(y,l),a=!0)},o(l){L(y,l),a=!1},d(l){l&&M(e),l&&M(r),y&&y.d(l),m&&m.d(l),l&&M(n)}}}function Mn(t){let e,r,n;const a=[{tag:t[14]},{use:[[br,{ripple:t[4],unbounded:!0,color:t[5],disabled:!!t[29].disabled,addClass:t[26],removeClass:t[27],addStyle:t[28]}],t[22],...t[1]]},{class:H({[t[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!t[23](t[0])&&t[0],"mdc-icon-button--touch":t[8],"mdc-icon-button--display-flex":t[9],"smui-icon-button--size-button":t[10]==="button","smui-icon-button--size-mini":t[10]==="mini","mdc-icon-button--reduced-size":t[10]==="mini"||t[10]==="button","mdc-card__action":t[24]==="card:action","mdc-card__action--icon":t[24]==="card:action","mdc-top-app-bar__navigation-icon":t[24]==="top-app-bar:navigation","mdc-top-app-bar__action-item":t[24]==="top-app-bar:action","mdc-snackbar__dismiss":t[24]==="snackbar:actions","mdc-data-table__pagination-button":t[24]==="data-table:pagination","mdc-data-table__sort-icon-button":t[24]==="data-table:sortable-header-cell","mdc-dialog__close":(t[24]==="dialog:header"||t[24]==="dialog:sheet")&&t[12]==="close",...t[18]})},{style:Object.entries(t[19]).map(it).concat([t[3]]).join(" ")},{"aria-pressed":t[23](t[0])?null:t[0]?"true":"false"},{"aria-label":t[0]?t[6]:t[7]},{"data-aria-label-on":t[6]},{"data-aria-label-off":t[7]},{"aria-describedby":t[25]},{href:t[11]},t[21],t[20],t[29]];var o=t[13];function y(m){let l={$$slots:{default:[Zn]},$$scope:{ctx:m}};for(let f=0;f<a.length;f+=1)l=V(l,a[f]);return{props:l}}return o&&(e=We(o,y(t)),t[34](e),e.$on("click",t[35]),e.$on("click",t[36])),{c(){e&&B(e.$$.fragment),r=Me()},m(m,l){e&&W(e,m,l),D(m,r,l),n=!0},p(m,l){const f=l[0]&1073504255?x(a,[l[0]&16384&&{tag:m[14]},l[0]&1010827314&&{use:[[br,{ripple:m[4],unbounded:!0,color:m[5],disabled:!!m[29].disabled,addClass:m[26],removeClass:m[27],addStyle:m[28]}],m[22],...m[1]]},l[0]&25433861&&{class:H({[m[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!m[23](m[0])&&m[0],"mdc-icon-button--touch":m[8],"mdc-icon-button--display-flex":m[9],"smui-icon-button--size-button":m[10]==="button","smui-icon-button--size-mini":m[10]==="mini","mdc-icon-button--reduced-size":m[10]==="mini"||m[10]==="button","mdc-card__action":m[24]==="card:action","mdc-card__action--icon":m[24]==="card:action","mdc-top-app-bar__navigation-icon":m[24]==="top-app-bar:navigation","mdc-top-app-bar__action-item":m[24]==="top-app-bar:action","mdc-snackbar__dismiss":m[24]==="snackbar:actions","mdc-data-table__pagination-button":m[24]==="data-table:pagination","mdc-data-table__sort-icon-button":m[24]==="data-table:sortable-header-cell","mdc-dialog__close":(m[24]==="dialog:header"||m[24]==="dialog:sheet")&&m[12]==="close",...m[18]})},l[0]&524296&&{style:Object.entries(m[19]).map(it).concat([m[3]]).join(" ")},l[0]&8388609&&{"aria-pressed":m[23](m[0])?null:m[0]?"true":"false"},l[0]&193&&{"aria-label":m[0]?m[6]:m[7]},l[0]&64&&{"data-aria-label-on":m[6]},l[0]&128&&{"data-aria-label-off":m[7]},l[0]&33554432&&{"aria-describedby":m[25]},l[0]&2048&&{href:m[11]},l[0]&2097152&&ce(m[21]),l[0]&1048576&&ce(m[20]),l[0]&536870912&&ce(m[29])]):{};if(l[0]&256|l[1]&64&&(f.$$scope={dirty:l,ctx:m}),o!==(o=m[13])){if(e){Pe();const p=e;L(p.$$.fragment,1,0,()=>{z(p,1)}),Ze()}o?(e=We(o,y(m)),m[34](e),e.$on("click",m[35]),e.$on("click",m[36]),B(e.$$.fragment),R(e.$$.fragment,1),W(e,r.parentNode,r)):e=null}else o&&e.$set(f)},i(m){n||(e&&R(e.$$.fragment,m),n=!0)},o(m){e&&L(e.$$.fragment,m),n=!1},d(m){t[34](null),m&&M(r),e&&z(e,m)}}}const it=([t,e])=>`${t}: ${e};`;function Dn(t,e,r){let n;const a=["use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","touch","displayFlex","size","href","action","component","tag","getElement"];let o=Y(e,a),{$$slots:y={},$$scope:m}=e;const l=Se(me());let f=()=>{};function p(O){return O===f}let{use:i=[]}=e,{class:w=""}=e,{style:c=""}=e,{ripple:h=!0}=e,{color:T=void 0}=e,{toggle:u=!1}=e,{pressed:b=f}=e,{ariaLabelOn:s=void 0}=e,{ariaLabelOff:_=void 0}=e,{touch:g=!1}=e,{displayFlex:j=!0}=e,{size:v="normal"}=e,{href:d=void 0}=e,{action:I=void 0}=e,F,G,N={},ee={},P={},re=Oe("SMUI:icon-button:context"),Ie=Oe("SMUI:icon-button:aria-describedby"),{component:k=ze}=e,{tag:S=k===ze?d==null?"button":"a":void 0}=e,E=o.disabled;Xe("SMUI:icon:context","icon-button");let K=null;Zt(()=>{G&&G.destroy()});function Qe(O){return O in N?N[O]:De().classList.contains(O)}function Je(O){N[O]||r(18,N[O]=!0,N)}function $e(O){(!(O in N)||N[O])&&r(18,N[O]=!1,N)}function xe(O,Ve){ee[O]!=Ve&&(Ve===""||Ve==null?(delete ee[O],r(19,ee)):r(19,ee[O]=Ve,ee))}function Te(O){var Ve;return O in P?(Ve=P[O])!==null&&Ve!==void 0?Ve:null:De().getAttribute(O)}function lr(O,Ve){P[O]!==Ve&&r(20,P[O]=Ve,P)}function fr(O){r(0,b=O.isOn)}function De(){return F.getElement()}function Z(O){X[O?"unshift":"push"](()=>{F=O,r(16,F)})}const C=()=>G&&G.handleClick(),se=()=>re==="top-app-bar:navigation"&&he(De(),"SMUITopAppBarIconButton:nav");return t.$$set=O=>{e=V(V({},e),ke(O)),r(29,o=Y(e,a)),"use"in O&&r(1,i=O.use),"class"in O&&r(2,w=O.class),"style"in O&&r(3,c=O.style),"ripple"in O&&r(4,h=O.ripple),"color"in O&&r(5,T=O.color),"toggle"in O&&r(30,u=O.toggle),"pressed"in O&&r(0,b=O.pressed),"ariaLabelOn"in O&&r(6,s=O.ariaLabelOn),"ariaLabelOff"in O&&r(7,_=O.ariaLabelOff),"touch"in O&&r(8,g=O.touch),"displayFlex"in O&&r(9,j=O.displayFlex),"size"in O&&r(10,v=O.size),"href"in O&&r(11,d=O.href),"action"in O&&r(12,I=O.action),"component"in O&&r(13,k=O.component),"tag"in O&&r(14,S=O.tag),"$$scope"in O&&r(37,m=O.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&4096&&r(21,n=(()=>{if(re==="data-table:pagination")switch(I){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}else return re==="dialog:header"||re==="dialog:sheet"?{"data-mdc-dialog-action":I}:{action:I}})()),E!==o.disabled){const O=De();"blur"in O&&O.blur(),r(31,E=o.disabled)}t.$$.dirty[0]&1073938432|t.$$.dirty[1]&2&&F&&De()&&u!==K&&(u&&!G?(r(17,G=new un({addClass:Je,hasClass:Qe,notifyChange:O=>{fr(O),he(De(),"SMUIIconButtonToggle:change",O,void 0,!0)},removeClass:$e,getAttr:Te,setAttr:lr})),G.init()):!u&&G&&(G.destroy(),r(17,G=void 0),r(18,N={}),r(20,P={})),r(32,K=u)),t.$$.dirty[0]&131073&&G&&!p(b)&&G.isOn()!==b&&G.toggle(b)},[b,i,w,c,h,T,s,_,g,j,v,d,I,k,S,De,F,G,N,ee,P,n,l,p,re,Ie,Je,$e,xe,o,u,E,K,y,Z,C,se,m]}class Vn extends we{constructor(e){super(),pe(this,e,Dn,Mn,ae,{use:1,class:2,style:3,ripple:4,color:5,toggle:30,pressed:0,ariaLabelOn:6,ariaLabelOff:7,touch:8,displayFlex:9,size:10,href:11,action:12,component:13,tag:14,getElement:15},null,[-1,-1])}get getElement(){return this.$$.ctx[15]}}function jn(t){let e;return{c(){e=Ee("expand_less")},m(r,n){D(r,e,n)},d(r){r&&M(e)}}}function Fn(t){let e;return{c(){e=Ee("expand_more")},m(r,n){D(r,e,n)},d(r){r&&M(e)}}}function Un(t){let e,r,n,a;return e=new lt({props:{class:"material-icons",on:!0,$$slots:{default:[jn]},$$scope:{ctx:t}}}),n=new lt({props:{class:"material-icons",$$slots:{default:[Fn]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment),r=ue(),B(n.$$.fragment)},m(o,y){W(e,o,y),D(o,r,y),W(n,o,y),a=!0},p(o,y){const m={};y&2&&(m.$$scope={dirty:y,ctx:o}),e.$set(m);const l={};y&2&&(l.$$scope={dirty:y,ctx:o}),n.$set(l)},i(o){a||(R(e.$$.fragment,o),R(n.$$.fragment,o),a=!0)},o(o){L(e.$$.fragment,o),L(n.$$.fragment,o),a=!1},d(o){z(e,o),o&&M(r),z(n,o)}}}function Wn(t){let e,r;return e=new Vn({props:{toggle:!0,pressed:t[0],$$slots:{default:[Un]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(n,a){W(e,n,a),r=!0},p(n,[a]){const o={};a&1&&(o.pressed=n[0]),a&2&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(n){r||(R(e.$$.fragment,n),r=!0)},o(n){L(e.$$.fragment,n),r=!1},d(n){z(e,n)}}}function zn(t,e,r){let{open:n=!1}=e;return t.$$set=a=>{"open"in a&&r(0,n=a.open)},[n]}class Qr extends we{constructor(e){super(),pe(this,e,zn,Wn,ae,{open:0})}}function Hn(t){let e,r,n,a,o;return{c(){e=q("button"),r=Ee("count is "),n=Ee(t[0])},m(y,m){D(y,e,m),Re(e,r),Re(e,n),a||(o=te(e,"click",t[1]),a=!0)},p(y,[m]){m&1&&Pt(n,y[0])},i:$,o:$,d(y){y&&M(e),a=!1,o()}}}function Bn(t,e,r){let n=0;return[n,()=>{r(0,n+=1)}]}class Nn extends we{constructor(e){super(),pe(this,e,Bn,Hn,ae,{})}}function Kn(t){let e,r,n,a,o,y;const m=t[13].default,l=ye(m,t,t[12],null);let f=[{class:r=H({[t[1]]:!0,"smui-accordion":!0,"smui-accordion--multiple":t[2],"smui-accordion--with-open-dialog":t[4]})},t[10]],p={};for(let i=0;i<f.length;i+=1)p=V(p,f[i]);return{c(){e=q("div"),l&&l.c(),Q(e,p)},m(i,w){D(i,e,w),l&&l.m(e,null),t[14](e),a=!0,o||(y=[J(n=Ce.call(null,e,t[0])),J(t[5].call(null,e)),te(e,"SMUIAccordionPanel:mount",t[6]),te(e,"SMUIAccordionPanel:unmount",t[7]),te(e,"SMUIAccordionPanel:activate",t[8]),te(e,"SMUIAccordionPanel:opening",t[9]),te(e,"SMUIDialog:opening",t[15],!0),te(e,"SMUIDialog:closed",t[16],!0)],o=!0)},p(i,[w]){l&&l.p&&(!a||w&4096)&&fe(l,m,i,i[12],a?le(m,i[12],w,null):ie(i[12]),null),Q(e,p=x(f,[(!a||w&22&&r!==(r=H({[i[1]]:!0,"smui-accordion":!0,"smui-accordion--multiple":i[2],"smui-accordion--with-open-dialog":i[4]})))&&{class:r},w&1024&&i[10]])),n&&oe(n.update)&&w&1&&n.update.call(null,i[0])},i(i){a||(R(l,i),a=!0)},o(i){L(l,i),a=!1},d(i){i&&M(e),l&&l.d(i),t[14](null),o=!1,_e(y)}}}function Gn(t,e,r){const n=["use","class","multiple","getElement"];let a=Y(e,n),{$$slots:o={},$$scope:y}=e;const m=Se(me());let{use:l=[]}=e,{class:f=""}=e,{multiple:p=!1}=e,i,w=new Set,c=!1;function h(v){const d=v.detail;if(v.stopPropagation(),!p&&d.open){const I=Array.from(w).find(F=>F.open);I&&I.setOpen(!1)}w.add(d)}function T(v){const d=v.detail;w.has(d)&&(v.stopPropagation(),w.delete(d))}function u(v){const{accessor:d}=v.detail;if(w.has(d)){if(!p&&!d.open){const I=Array.from(w).find(F=>F.open);I&&I.setOpen(!1)}d.setOpen(!d.open)}}function b(v){const{accessor:d}=v.detail;w.has(d)&&(p||Array.from(w).filter(F=>F!==d&&F.open).forEach(F=>F.setOpen(!1)))}function s(){return i}function _(v){X[v?"unshift":"push"](()=>{i=v,r(3,i)})}const g=()=>r(4,c=!0),j=()=>r(4,c=!1);return t.$$set=v=>{e=V(V({},e),ke(v)),r(10,a=Y(e,n)),"use"in v&&r(0,l=v.use),"class"in v&&r(1,f=v.class),"multiple"in v&&r(2,p=v.multiple),"$$scope"in v&&r(12,y=v.$$scope)},[l,f,p,i,c,m,h,T,u,b,a,s,y,o,_,g,j]}class Xn extends we{constructor(e){super(),pe(this,e,Gn,Kn,ae,{use:0,class:1,multiple:2,getElement:11})}get getElement(){return this.$$.ctx[11]}}function qn(t){let e,r,n,a,o,y;const m=t[12].default,l=ye(m,t,t[11],null);let f=[{class:r=H({[t[1]]:!0,"smui-paper":!0,"smui-paper--raised":t[2]==="raised","smui-paper--unelevated":t[2]==="unelevated","smui-paper--outlined":t[2]==="outlined",["smui-paper--elevation-z"+t[5]]:t[5]!==0&&t[2]==="raised","smui-paper--rounded":!t[3],["smui-paper--color-"+t[4]]:t[4]!=="default","smui-paper-transition":t[6]})},t[9]],p={};for(let i=0;i<f.length;i+=1)p=V(p,f[i]);return{c(){e=q("div"),l&&l.c(),Q(e,p)},m(i,w){D(i,e,w),l&&l.m(e,null),t[13](e),a=!0,o||(y=[J(n=Ce.call(null,e,t[0])),J(t[8].call(null,e))],o=!0)},p(i,[w]){l&&l.p&&(!a||w&2048)&&fe(l,m,i,i[11],a?le(m,i[11],w,null):ie(i[11]),null),Q(e,p=x(f,[(!a||w&126&&r!==(r=H({[i[1]]:!0,"smui-paper":!0,"smui-paper--raised":i[2]==="raised","smui-paper--unelevated":i[2]==="unelevated","smui-paper--outlined":i[2]==="outlined",["smui-paper--elevation-z"+i[5]]:i[5]!==0&&i[2]==="raised","smui-paper--rounded":!i[3],["smui-paper--color-"+i[4]]:i[4]!=="default","smui-paper-transition":i[6]})))&&{class:r},w&512&&i[9]])),n&&oe(n.update)&&w&1&&n.update.call(null,i[0])},i(i){a||(R(l,i),a=!0)},o(i){L(l,i),a=!1},d(i){i&&M(e),l&&l.d(i),t[13](null),o=!1,_e(y)}}}function Yn(t,e,r){const n=["use","class","variant","square","color","elevation","transition","getElement"];let a=Y(e,n),{$$slots:o={},$$scope:y}=e;const m=Se(me());let{use:l=[]}=e,{class:f=""}=e,{variant:p="raised"}=e,{square:i=!1}=e,{color:w="default"}=e,{elevation:c=1}=e,{transition:h=!1}=e,T;function u(){return T}function b(s){X[s?"unshift":"push"](()=>{T=s,r(7,T)})}return t.$$set=s=>{e=V(V({},e),ke(s)),r(9,a=Y(e,n)),"use"in s&&r(0,l=s.use),"class"in s&&r(1,f=s.class),"variant"in s&&r(2,p=s.variant),"square"in s&&r(3,i=s.square),"color"in s&&r(4,w=s.color),"elevation"in s&&r(5,c=s.elevation),"transition"in s&&r(6,h=s.transition),"$$scope"in s&&r(11,y=s.$$scope)},[l,f,p,i,w,c,h,T,m,a,u,y,o,b]}class Qn extends we{constructor(e){super(),pe(this,e,Yn,qn,ae,{use:0,class:1,variant:2,square:3,color:4,elevation:5,transition:6,getElement:10})}get getElement(){return this.$$.ctx[10]}}function Jn(t){let e;const r=t[11].default,n=ye(r,t,t[13],null);return{c(){n&&n.c()},m(a,o){n&&n.m(a,o),e=!0},p(a,o){n&&n.p&&(!e||o&8192)&&fe(n,r,a,a[13],e?le(r,a[13],o,null):ie(a[13]),null)},i(a){e||(R(n,a),e=!0)},o(a){L(n,a),e=!1},d(a){n&&n.d(a)}}}function $n(t){let e,r,n;const a=[{tag:t[3]},{use:[t[8],...t[0]]},{class:H({[t[1]]:!0,[t[6]]:!0,...t[5]})},t[7],t[9]];var o=t[2];function y(m){let l={$$slots:{default:[Jn]},$$scope:{ctx:m}};for(let f=0;f<a.length;f+=1)l=V(l,a[f]);return{props:l}}return o&&(e=We(o,y(t)),t[12](e)),{c(){e&&B(e.$$.fragment),r=Me()},m(m,l){e&&W(e,m,l),D(m,r,l),n=!0},p(m,[l]){const f=l&1003?x(a,[l&8&&{tag:m[3]},l&257&&{use:[m[8],...m[0]]},l&98&&{class:H({[m[1]]:!0,[m[6]]:!0,...m[5]})},l&128&&ce(m[7]),l&512&&ce(m[9])]):{};if(l&8192&&(f.$$scope={dirty:l,ctx:m}),o!==(o=m[2])){if(e){Pe();const p=e;L(p.$$.fragment,1,0,()=>{z(p,1)}),Ze()}o?(e=We(o,y(m)),m[12](e),B(e.$$.fragment),R(e.$$.fragment,1),W(e,r.parentNode,r)):e=null}else o&&e.$set(f)},i(m){n||(e&&R(e.$$.fragment,m),n=!0)},o(m){e&&L(e.$$.fragment,m),n=!1},d(m){t[12](null),m&&M(r),e&&z(e,m)}}}const Ne={component:ze,tag:"div",class:"",classMap:{},contexts:{},props:{}};function xn(t,e,r){const n=["use","class","component","tag","getElement"];let a=Y(e,n),{$$slots:o={},$$scope:y}=e,{use:m=[]}=e,{class:l=""}=e,f;const p=Ne.class,i={},w=[],c=Ne.contexts,h=Ne.props;let{component:T=Ne.component}=e,{tag:u=T===ze?Ne.tag:void 0}=e;Object.entries(Ne.classMap).forEach(([g,j])=>{const v=Oe(j);v&&"subscribe"in v&&w.push(v.subscribe(d=>{r(5,i[g]=d,i)}))});const b=Se(me());for(let g in c)c.hasOwnProperty(g)&&Xe(g,c[g]);Zt(()=>{for(const g of w)g()});function s(){return f.getElement()}function _(g){X[g?"unshift":"push"](()=>{f=g,r(4,f)})}return t.$$set=g=>{e=V(V({},e),ke(g)),r(9,a=Y(e,n)),"use"in g&&r(0,m=g.use),"class"in g&&r(1,l=g.class),"component"in g&&r(2,T=g.component),"tag"in g&&r(3,u=g.tag),"$$scope"in g&&r(13,y=g.$$scope)},[m,l,T,u,f,i,p,h,b,a,s,o,_,y]}class ea extends we{constructor(e){super(),pe(this,e,xn,$n,ae,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const pt=Object.assign({},Ne);function Jr(t){return new Proxy(ea,{construct:function(e,r){return Object.assign(Ne,pt,t),new e(...r)},get:function(e,r){return Object.assign(Ne,pt,t),e[r]}})}const $r=Jr({class:"smui-paper__content",tag:"div"});Jr({class:"smui-paper__title",tag:"h5"});Jr({class:"smui-paper__subtitle",tag:"h6"});function ra(t){let e;const r=t[23].default,n=ye(r,t,t[25],null);return{c(){n&&n.c()},m(a,o){n&&n.m(a,o),e=!0},p(a,o){n&&n.p&&(!e||o&33554432)&&fe(n,r,a,a[25],e?le(r,a[25],o,null):ie(a[25]),null)},i(a){e||(R(n,a),e=!0)},o(a){L(n,a),e=!1},d(a){n&&n.d(a)}}}function ta(t){let e,r;const n=[{use:t[11]},{class:H({[t[1]]:!0,"smui-accordion__panel":!0,"smui-accordion__panel--open":t[0],"smui-accordion__panel--opened":t[10],"smui-accordion__panel--disabled":t[5],"smui-accordion__panel--non-interactive":t[6],"smui-accordion__panel--raised":t[2]==="raised","smui-accordion__panel--extend":t[7],["smui-accordion__panel--elevation-z"+(t[7]&&t[0]?t[8]:t[4])]:t[4]!==0&&t[2]==="raised"||t[8]!==0&&t[2]==="raised"&&t[7]&&t[0]})},{color:t[3]},{variant:t[2]==="raised"?"unelevated":t[2]},t[16]];let a={$$slots:{default:[ra]},$$scope:{ctx:t}};for(let o=0;o<n.length;o+=1)a=V(a,n[o]);return e=new Qn({props:a}),t[24](e),e.$on("SMUIAccordionHeader:activate",t[15]),{c(){B(e.$$.fragment)},m(o,y){W(e,o,y),r=!0},p(o,[y]){const m=y&69119?x(n,[y&2048&&{use:o[11]},y&1527&&{class:H({[o[1]]:!0,"smui-accordion__panel":!0,"smui-accordion__panel--open":o[0],"smui-accordion__panel--opened":o[10],"smui-accordion__panel--disabled":o[5],"smui-accordion__panel--non-interactive":o[6],"smui-accordion__panel--raised":o[2]==="raised","smui-accordion__panel--extend":o[7],["smui-accordion__panel--elevation-z"+(o[7]&&o[0]?o[8]:o[4])]:o[4]!==0&&o[2]==="raised"||o[8]!==0&&o[2]==="raised"&&o[7]&&o[0]})},y&8&&{color:o[3]},y&4&&{variant:o[2]==="raised"?"unelevated":o[2]},y&65536&&ce(o[16])]):{};y&33554432&&(m.$$scope={dirty:y,ctx:o}),e.$set(m)},i(o){r||(R(e.$$.fragment,o),r=!0)},o(o){L(e.$$.fragment,o),r=!1},d(o){t[24](null),z(e,o)}}}function na(t,e,r){let n;const a=["use","class","variant","color","elevation","open","disabled","nonInteractive","extend","extendedElevation","isOpen","setOpen","getElement"];let o=Y(e,a),y,m,l,{$$slots:f={},$$scope:p}=e;const i=Se(me());let{use:w=[]}=e,{class:c=""}=e,{variant:h="raised"}=e,{color:T="default"}=e,{elevation:u=1}=e,{open:b=!1}=e,{disabled:s=!1}=e,{nonInteractive:_=!1}=e,{extend:g=!1}=e,{extendedElevation:j=3}=e,v,d,I=b;const F=zr(s);or(t,F,E=>r(28,l=E)),Xe("SMUI:accordion:panel:disabled",F);const G=zr(_);or(t,G,E=>r(27,m=E)),Xe("SMUI:accordion:panel:nonInteractive",G);const N=zr(b);or(t,N,E=>r(26,y=E)),Xe("SMUI:accordion:panel:open",N);let ee=b;ur(()=>(r(21,d={get open(){return b},setOpen:Ie}),Array.from(k().children).forEach(E=>{E.classList.contains("smui-paper__content")&&E.setAttribute("aria-hidden",b?"false":"true")}),he(k(),"SMUIAccordionPanel:mount",d),()=>{he(k(),"SMUIAccordionPanel:unmount",d)}));function P(E){E.stopPropagation(),!(s||_)&&he(k(),"SMUIAccordionPanel:activate",{accessor:d,event:E})}function re(){return b}function Ie(E){r(0,b=E)}function k(){return v.getElement()}function S(E){X[E?"unshift":"push"](()=>{v=E,r(9,v)})}return t.$$set=E=>{e=V(V({},e),ke(E)),r(16,o=Y(e,a)),"use"in E&&r(17,w=E.use),"class"in E&&r(1,c=E.class),"variant"in E&&r(2,h=E.variant),"color"in E&&r(3,T=E.color),"elevation"in E&&r(4,u=E.elevation),"open"in E&&r(0,b=E.open),"disabled"in E&&r(5,s=E.disabled),"nonInteractive"in E&&r(6,_=E.nonInteractive),"extend"in E&&r(7,g=E.extend),"extendedElevation"in E&&r(8,j=E.extendedElevation),"$$scope"in E&&r(25,p=E.$$scope)},t.$$.update=()=>{t.$$.dirty&131072&&r(11,n=[i,...w]),t.$$.dirty&32&&jr(F,l=s,l),t.$$.dirty&64&&jr(G,m=_,m),t.$$.dirty&1&&jr(N,y=b,y),t.$$.dirty&6291457&&ee!==b&&(r(22,ee=b),Array.from(k().children).forEach(E=>{if(E.classList.contains("smui-paper__content")){const K=E;if(b){K.classList.add("smui-accordion__content--no-transition"),K.classList.add("smui-accordion__content--force-open");const{height:Qe}=K.getBoundingClientRect();K.classList.remove("smui-accordion__content--force-open"),K.getBoundingClientRect(),K.classList.remove("smui-accordion__content--no-transition"),K.style.height=Qe+"px",K.addEventListener("transitionend",()=>{K&&(K.style.height=""),r(10,I=b),he(k(),"SMUIAccordionPanel:opened",{accessor:d})},{once:!0})}else K.style.height=K.getBoundingClientRect().height+"px",K.getBoundingClientRect(),requestAnimationFrame(()=>{K&&(K.style.height=""),he(k(),"SMUIAccordionPanel:closed",{accessor:d})}),r(10,I=!1);K.setAttribute("aria-hidden",b?"false":"true")}}),he(k(),b?"SMUIAccordionPanel:opening":"SMUIAccordionPanel:closing",{accessor:d}))},[b,c,h,T,u,s,_,g,j,v,I,n,F,G,N,P,o,w,re,Ie,k,d,ee,f,S,p]}class Hr extends we{constructor(e){super(),pe(this,e,na,ta,ae,{use:17,class:1,variant:2,color:3,elevation:4,open:0,disabled:5,nonInteractive:6,extend:7,extendedElevation:8,isOpen:18,setOpen:19,getElement:20})}get isOpen(){return this.$$.ctx[18]}get setOpen(){return this.$$.ctx[19]}get getElement(){return this.$$.ctx[20]}}const aa=t=>({}),wt=t=>({}),oa=t=>({}),st=t=>({});function bt(t){let e;return{c(){e=q("div"),Le(e,"class","smui-accordion__header__ripple")},m(r,n){D(r,e,n)},d(r){r&&M(e)}}}function dt(t){let e,r;const n=t[23].description,a=ye(n,t,t[22],st);return{c(){e=q("div"),a&&a.c(),Le(e,"class","smui-accordion__header__description")},m(o,y){D(o,e,y),a&&a.m(e,null),r=!0},p(o,y){a&&a.p&&(!r||y&4194304)&&fe(a,n,o,o[22],r?le(n,o[22],y,oa):ie(o[22]),st)},i(o){r||(R(a,o),r=!0)},o(o){L(a,o),r=!1},d(o){o&&M(e),a&&a.d(o)}}}function ut(t){let e,r;const n=t[23].icon,a=ye(n,t,t[22],wt);return{c(){e=q("div"),a&&a.c(),Le(e,"class","smui-accordion__header__icon")},m(o,y){D(o,e,y),a&&a.m(e,null),r=!0},p(o,y){a&&a.p&&(!r||y&4194304)&&fe(a,n,o,o[22],r?le(n,o[22],y,aa):ie(o[22]),wt)},i(o){r||(R(a,o),r=!0)},o(o){L(a,o),r=!1},d(o){o&&M(e),a&&a.d(o)}}}function ma(t){let e,r,n,a,o,y,m,l,f,p,i,w,c,h,T,u=t[3]&&bt();const b=t[23].default,s=ye(b,t,t[22],null);let _=t[20].description&&dt(t),g=t[20].icon&&ut(t),j=[{class:m=H({[t[1]]:!0,"smui-accordion__header":!0,...t[5]})},{style:l=Object.entries(t[6]).map(ct).concat([t[2]]).join(" ")},{role:"button"},{tabindex:f=t[7]?-1:0},{"aria-expanded":p=t[9]?"true":"false"},t[19]],v={};for(let d=0;d<j.length;d+=1)v=V(v,j[d]);return{c(){e=q("div"),u&&u.c(),r=ue(),n=q("div"),s&&s.c(),o=ue(),_&&_.c(),y=ue(),g&&g.c(),Le(n,"class",a=H({"smui-accordion__header__title":!0,"smui-accordion__header__title--with-description":t[20].description})),Q(e,v)},m(d,I){D(d,e,I),u&&u.m(e,null),Re(e,r),Re(e,n),s&&s.m(n,null),Re(e,o),_&&_.m(e,null),Re(e,y),g&&g.m(e,null),t[24](e),c=!0,h||(T=[J(i=Ce.call(null,e,t[0])),J(t[10].call(null,e)),J(w=br.call(null,e,{ripple:t[3],unbounded:!1,surface:!t[7],disabled:t[8]||t[7],addClass:t[16],removeClass:t[17],addStyle:t[18]})),te(e,"click",t[14]),te(e,"keydown",t[15])],h=!0)},p(d,[I]){d[3]?u||(u=bt(),u.c(),u.m(e,r)):u&&(u.d(1),u=null),s&&s.p&&(!c||I&4194304)&&fe(s,b,d,d[22],c?le(b,d[22],I,null):ie(d[22]),null),(!c||I&1048576&&a!==(a=H({"smui-accordion__header__title":!0,"smui-accordion__header__title--with-description":d[20].description})))&&Le(n,"class",a),d[20].description?_?(_.p(d,I),I&1048576&&R(_,1)):(_=dt(d),_.c(),R(_,1),_.m(e,y)):_&&(Pe(),L(_,1,1,()=>{_=null}),Ze()),d[20].icon?g?(g.p(d,I),I&1048576&&R(g,1)):(g=ut(d),g.c(),R(g,1),g.m(e,null)):g&&(Pe(),L(g,1,1,()=>{g=null}),Ze()),Q(e,v=x(j,[(!c||I&34&&m!==(m=H({[d[1]]:!0,"smui-accordion__header":!0,...d[5]})))&&{class:m},(!c||I&68&&l!==(l=Object.entries(d[6]).map(ct).concat([d[2]]).join(" ")))&&{style:l},{role:"button"},(!c||I&128&&f!==(f=d[7]?-1:0))&&{tabindex:f},(!c||I&512&&p!==(p=d[9]?"true":"false"))&&{"aria-expanded":p},I&524288&&d[19]])),i&&oe(i.update)&&I&1&&i.update.call(null,d[0]),w&&oe(w.update)&&I&392&&w.update.call(null,{ripple:d[3],unbounded:!1,surface:!d[7],disabled:d[8]||d[7],addClass:d[16],removeClass:d[17],addStyle:d[18]})},i(d){c||(R(s,d),R(_),R(g),c=!0)},o(d){L(s,d),L(_),L(g),c=!1},d(d){d&&M(e),u&&u.d(),s&&s.d(d),_&&_.d(),g&&g.d(),t[24](null),h=!1,_e(T)}}}const ct=([t,e])=>`${t}: ${e};`;function ya(t,e,r){const n=["use","class","style","ripple","getElement"];let a=Y(e,n),o,y,m,{$$slots:l={},$$scope:f}=e;const p=Bt(l),i=Se(me());let{use:w=[]}=e,{class:c=""}=e,{style:h=""}=e,{ripple:T=!0}=e,u,b={},s={};const _=Oe("SMUI:accordion:panel:disabled");or(t,_,P=>r(8,y=P));const g=Oe("SMUI:accordion:panel:nonInteractive");or(t,g,P=>r(7,o=P));const j=Oe("SMUI:accordion:panel:open");or(t,j,P=>r(9,m=P));function v(P){P=P,P.button===0&&he(N(),"SMUIAccordionHeader:activate",{event:P})}function d(P){P=P,P.key==="Enter"&&he(N(),"SMUIAccordionHeader:activate",{event:P})}function I(P){b[P]||r(5,b[P]=!0,b)}function F(P){(!(P in b)||b[P])&&r(5,b[P]=!1,b)}function G(P,re){s[P]!=re&&(re===""||re==null?(delete s[P],r(6,s)):r(6,s[P]=re,s))}function N(){return u}function ee(P){X[P?"unshift":"push"](()=>{u=P,r(4,u)})}return t.$$set=P=>{e=V(V({},e),ke(P)),r(19,a=Y(e,n)),"use"in P&&r(0,w=P.use),"class"in P&&r(1,c=P.class),"style"in P&&r(2,h=P.style),"ripple"in P&&r(3,T=P.ripple),"$$scope"in P&&r(22,f=P.$$scope)},[w,c,h,T,u,b,s,o,y,m,i,_,g,j,v,d,I,F,G,a,p,N,f,l,ee]}class xr extends we{constructor(e){super(),pe(this,e,ya,ma,ae,{use:0,class:1,style:2,ripple:3,getElement:21})}get getElement(){return this.$$.ctx[21]}}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var la={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},fa={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ke=function(t){Ue(e,t);function e(r){return t.call(this,ge(ge({},e.defaultAdapter),r))||this}return Object.defineProperty(e,"cssClasses",{get:function(){return la},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return fa},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(yr);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ia=function(t){Ue(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.activate=function(){this.adapter.addClass(Ke.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(Ke.cssClasses.ACTIVE)},e}(Ke);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var gt=function(t){Ue(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.activate=function(r){if(!r){this.adapter.addClass(Ke.cssClasses.ACTIVE);return}var n=this.computeContentClientRect(),a=r.width/n.width,o=r.left-n.left;this.adapter.addClass(Ke.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+o+"px) scaleX("+a+")"),this.computeContentClientRect(),this.adapter.removeClass(Ke.cssClasses.NO_TRANSITION),this.adapter.addClass(Ke.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},e.prototype.deactivate=function(){this.adapter.removeClass(Ke.cssClasses.ACTIVE)},e}(Ke);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Sr={ACTIVE:"mdc-tab--active"},ir={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var pa=function(t){Ue(e,t);function e(r){var n=t.call(this,ge(ge({},e.defaultAdapter),r))||this;return n.focusOnActivate=!0,n}return Object.defineProperty(e,"cssClasses",{get:function(){return Sr},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ir},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(Sr.ACTIVE)},e.prototype.setFocusOnActivate=function(r){this.focusOnActivate=r},e.prototype.activate=function(r){this.adapter.addClass(Sr.ACTIVE),this.adapter.setAttr(ir.ARIA_SELECTED,"true"),this.adapter.setAttr(ir.TABINDEX,"0"),this.adapter.activateIndicator(r),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(Sr.ACTIVE),this.adapter.setAttr(ir.ARIA_SELECTED,"false"),this.adapter.setAttr(ir.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var r=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),a=this.adapter.getContentOffsetWidth(),o=this.adapter.getContentOffsetLeft();return{contentLeft:n+o,contentRight:n+o+a,rootLeft:n,rootRight:n+r}},e}(yr);function wa(t){let e,r,n,a,o,y,m,l,f,p,i;const w=t[21].default,c=ye(w,t,t[20],null);let h=[{class:n=H({[t[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":t[3]==="underline","mdc-tab-indicator__content--icon":t[3]==="icon"})},{style:a=Object.entries(t[10]).map(ht).join(" ")},{"aria-hidden":o=t[3]==="icon"?"true":void 0},ve(t[12],"content$")],T={};for(let s=0;s<h.length;s+=1)T=V(T,h[s]);let u=[{class:m=H({[t[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":t[0],"mdc-tab-indicator--fade":t[4]==="fade",...t[9]})},Ye(t[12],["content$"])],b={};for(let s=0;s<u.length;s+=1)b=V(b,u[s]);return{c(){e=q("span"),r=q("span"),c&&c.c(),Q(r,T),Q(e,b)},m(s,_){D(s,e,_),Re(e,r),c&&c.m(r,null),t[22](r),t[23](e),f=!0,p||(i=[J(y=Ce.call(null,r,t[5])),J(l=Ce.call(null,e,t[1])),J(t[11].call(null,e))],p=!0)},p(s,[_]){c&&c.p&&(!f||_&1048576)&&fe(c,w,s,s[20],f?le(w,s[20],_,null):ie(s[20]),null),Q(r,T=x(h,[(!f||_&72&&n!==(n=H({[s[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":s[3]==="underline","mdc-tab-indicator__content--icon":s[3]==="icon"})))&&{class:n},(!f||_&1024&&a!==(a=Object.entries(s[10]).map(ht).join(" ")))&&{style:a},(!f||_&8&&o!==(o=s[3]==="icon"?"true":void 0))&&{"aria-hidden":o},_&4096&&ve(s[12],"content$")])),y&&oe(y.update)&&_&32&&y.update.call(null,s[5]),Q(e,b=x(u,[(!f||_&533&&m!==(m=H({[s[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":s[0],"mdc-tab-indicator--fade":s[4]==="fade",...s[9]})))&&{class:m},_&4096&&Ye(s[12],["content$"])])),l&&oe(l.update)&&_&2&&l.update.call(null,s[1])},i(s){f||(R(c,s),f=!0)},o(s){L(c,s),f=!1},d(s){s&&M(e),c&&c.d(s),t[22](null),t[23](null),p=!1,_e(i)}}}const ht=([t,e])=>`${t}: ${e};`;function sa(t,e,r){const n=["use","class","active","type","transition","content$use","content$class","activate","deactivate","computeContentClientRect","getElement"];let a=Y(e,n),{$$slots:o={},$$scope:y}=e;const m=Se(me());let{use:l=[]}=e,{class:f=""}=e,{active:p=!1}=e,{type:i="underline"}=e,{transition:w="slide"}=e,{content$use:c=[]}=e,{content$class:h=""}=e,T,u,b,s={},_={},g=[],j=w;ur(()=>(r(17,u=v()),u.init(),()=>{u.destroy()}));function v(){const S={fade:ia,slide:gt}[w]||gt;return new S({addClass:(...E)=>d(()=>I(...E)),removeClass:(...E)=>d(()=>F(...E)),computeContentClientRect:P,setContentStyleProperty:(...E)=>d(()=>G(...E))})}function d(S){g.length?g[g.length-1].push(S):S()}function I(S){s[S]||r(9,s[S]=!0,s)}function F(S){(!(S in s)||s[S])&&r(9,s[S]=!1,s)}function G(S,E){_[S]!=E&&(E===""||E==null?(delete _[S],r(10,_),r(19,j),r(4,w),r(17,u)):r(10,_[S]=E,_))}function N(S){r(0,p=!0),u.activate(S)}function ee(){r(0,p=!1),u.deactivate()}function P(){return g.push([]),r(18,g),b.getBoundingClientRect()}function re(){return T}function Ie(S){X[S?"unshift":"push"](()=>{b=S,r(8,b)})}function k(S){X[S?"unshift":"push"](()=>{T=S,r(7,T)})}return t.$$set=S=>{e=V(V({},e),ke(S)),r(12,a=Y(e,n)),"use"in S&&r(1,l=S.use),"class"in S&&r(2,f=S.class),"active"in S&&r(0,p=S.active),"type"in S&&r(3,i=S.type),"transition"in S&&r(4,w=S.transition),"content$use"in S&&r(5,c=S.content$use),"content$class"in S&&r(6,h=S.content$class),"$$scope"in S&&r(20,y=S.$$scope)},t.$$.update=()=>{t.$$.dirty&655376&&j!==w&&(r(19,j=w),u&&u.destroy(),r(9,s={}),r(10,_={}),r(17,u=v()),u.init()),t.$$.dirty&262144&&g.length&&requestAnimationFrame(()=>{var S;const E=(S=g.shift())!==null&&S!==void 0?S:[];r(18,g);for(const K of E)K()})},[p,l,f,i,w,c,h,T,b,s,_,m,a,N,ee,P,re,u,g,j,y,o,Ie,k]}class Vt extends we{constructor(e){super(),pe(this,e,sa,wa,ae,{use:1,class:2,active:0,type:3,transition:4,content$use:5,content$class:6,activate:13,deactivate:14,computeContentClientRect:15,getElement:16})}get activate(){return this.$$.ctx[13]}get deactivate(){return this.$$.ctx[14]}get computeContentClientRect(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}const ba=t=>({}),vt=t=>({}),da=t=>({}),_t=t=>({});function kt(t){let e,r;const n=[{active:t[18]},ve(t[25],"tabIndicator$")];let a={$$slots:{default:[ua]},$$scope:{ctx:t}};for(let o=0;o<n.length;o+=1)a=V(a,n[o]);return e=new Vt({props:a}),t[33](e),{c(){B(e.$$.fragment)},m(o,y){W(e,o,y),r=!0},p(o,y){const m=y[0]&33816576?x(n,[y[0]&262144&&{active:o[18]},y[0]&33554432&&ce(ve(o[25],"tabIndicator$"))]):{};y[1]&64&&(m.$$scope={dirty:y,ctx:o}),e.$set(m)},i(o){r||(R(e.$$.fragment,o),r=!0)},o(o){L(e.$$.fragment,o),r=!1},d(o){t[33](null),z(e,o)}}}function ua(t){let e;const r=t[32]["tab-indicator"],n=ye(r,t,t[37],_t);return{c(){n&&n.c()},m(a,o){n&&n.m(a,o),e=!0},p(a,o){n&&n.p&&(!e||o[1]&64)&&fe(n,r,a,a[37],e?le(r,a[37],o,da):ie(a[37]),_t)},i(a){e||(R(n,a),e=!0)},o(a){L(n,a),e=!1},d(a){n&&n.d(a)}}}function St(t){let e,r;const n=[{active:t[18]},ve(t[25],"tabIndicator$")];let a={$$slots:{default:[ca]},$$scope:{ctx:t}};for(let o=0;o<n.length;o+=1)a=V(a,n[o]);return e=new Vt({props:a}),t[35](e),{c(){B(e.$$.fragment)},m(o,y){W(e,o,y),r=!0},p(o,y){const m=y[0]&33816576?x(n,[y[0]&262144&&{active:o[18]},y[0]&33554432&&ce(ve(o[25],"tabIndicator$"))]):{};y[1]&64&&(m.$$scope={dirty:y,ctx:o}),e.$set(m)},i(o){r||(R(e.$$.fragment,o),r=!0)},o(o){L(e.$$.fragment,o),r=!1},d(o){t[35](null),z(e,o)}}}function ca(t){let e;const r=t[32]["tab-indicator"],n=ye(r,t,t[37],vt);return{c(){n&&n.c()},m(a,o){n&&n.m(a,o),e=!0},p(a,o){n&&n.p&&(!e||o[1]&64)&&fe(n,r,a,a[37],e?le(r,a[37],o,ba):ie(a[37]),vt)},i(a){e||(R(n,a),e=!0)},o(a){L(n,a),e=!1},d(a){n&&n.d(a)}}}function ga(t){let e,r,n,a,o,y,m,l,f,p;const i=t[32].default,w=ye(i,t,t[37],null);let c=t[6]&&kt(t),h=[{class:n=H({[t[9]]:!0,"mdc-tab__content":!0})},ve(t[25],"content$")],T={};for(let b=0;b<h.length;b+=1)T=V(T,h[b]);let u=!t[6]&&St(t);return{c(){e=q("span"),w&&w.c(),r=ue(),c&&c.c(),o=ue(),u&&u.c(),y=ue(),m=q("span"),Q(e,T),Le(m,"class","mdc-tab__ripple")},m(b,s){D(b,e,s),w&&w.m(e,null),Re(e,r),c&&c.m(e,null),t[34](e),D(b,o,s),u&&u.m(b,s),D(b,y,s),D(b,m,s),l=!0,f||(p=J(a=Ce.call(null,e,t[8])),f=!0)},p(b,s){w&&w.p&&(!l||s[1]&64)&&fe(w,i,b,b[37],l?le(i,b[37],s,null):ie(b[37]),null),b[6]?c?(c.p(b,s),s[0]&64&&R(c,1)):(c=kt(b),c.c(),R(c,1),c.m(e,null)):c&&(Pe(),L(c,1,1,()=>{c=null}),Ze()),Q(e,T=x(h,[(!l||s[0]&512&&n!==(n=H({[b[9]]:!0,"mdc-tab__content":!0})))&&{class:n},s[0]&33554432&&ve(b[25],"content$")])),a&&oe(a.update)&&s[0]&256&&a.update.call(null,b[8]),b[6]?u&&(Pe(),L(u,1,1,()=>{u=null}),Ze()):u?(u.p(b,s),s[0]&64&&R(u,1)):(u=St(b),u.c(),R(u,1),u.m(y.parentNode,y))},i(b){l||(R(w,b),R(c),R(u),l=!0)},o(b){L(w,b),L(c),L(u),l=!1},d(b){b&&M(e),w&&w.d(b),c&&c.d(),t[34](null),b&&M(o),u&&u.d(b),b&&M(y),b&&M(m),f=!1,p()}}}function ha(t){let e,r,n;const a=[{tag:t[11]},{use:[[br,{ripple:t[3],unbounded:!1,addClass:t[21],removeClass:t[22],addStyle:t[23]}],t[20],...t[0]]},{class:H({[t[1]]:!0,"mdc-tab":!0,"mdc-tab--active":t[18],"mdc-tab--stacked":t[4],"mdc-tab--min-width":t[5],...t[15]})},{style:Object.entries(t[16]).map(Tt).concat([t[2]]).join(" ")},{role:"tab"},{"aria-selected":t[18]?"true":"false"},{tabindex:t[18]||t[19]?"0":"-1"},{href:t[7]},t[17],Ye(t[25],["content$","tabIndicator$"])];var o=t[10];function y(m){let l={$$slots:{default:[ga]},$$scope:{ctx:m}};for(let f=0;f<a.length;f+=1)l=V(l,a[f]);return{props:l}}return o&&(e=We(o,y(t)),t[36](e),e.$on("click",t[24])),{c(){e&&B(e.$$.fragment),r=Me()},m(m,l){e&&W(e,m,l),D(m,r,l),n=!0},p(m,l){const f=l[0]&50301119?x(a,[l[0]&2048&&{tag:m[11]},l[0]&15728649&&{use:[[br,{ripple:m[3],unbounded:!1,addClass:m[21],removeClass:m[22],addStyle:m[23]}],m[20],...m[0]]},l[0]&294962&&{class:H({[m[1]]:!0,"mdc-tab":!0,"mdc-tab--active":m[18],"mdc-tab--stacked":m[4],"mdc-tab--min-width":m[5],...m[15]})},l[0]&65540&&{style:Object.entries(m[16]).map(Tt).concat([m[2]]).join(" ")},a[4],l[0]&262144&&{"aria-selected":m[18]?"true":"false"},l[0]&786432&&{tabindex:m[18]||m[19]?"0":"-1"},l[0]&128&&{href:m[7]},l[0]&131072&&ce(m[17]),l[0]&33554432&&ce(Ye(m[25],["content$","tabIndicator$"]))]):{};if(l[0]&33841984|l[1]&64&&(f.$$scope={dirty:l,ctx:m}),o!==(o=m[10])){if(e){Pe();const p=e;L(p.$$.fragment,1,0,()=>{z(p,1)}),Ze()}o?(e=We(o,y(m)),m[36](e),e.$on("click",m[24]),B(e.$$.fragment),R(e.$$.fragment,1),W(e,r.parentNode,r)):e=null}else o&&e.$set(f)},i(m){n||(e&&R(e.$$.fragment,m),n=!0)},o(m){e&&L(e.$$.fragment,m),n=!1},d(m){t[36](null),m&&M(r),e&&z(e,m)}}}const Tt=([t,e])=>`${t}: ${e};`;function va(t,e,r){const n=["use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","tag","activate","deactivate","focus","getElement"];let a=Y(e,n),{$$slots:o={},$$scope:y}=e;const m=Se(me());let{use:l=[]}=e,{class:f=""}=e,{style:p=""}=e,{tab:i}=e,{ripple:w=!0}=e,{stacked:c=!1}=e,{minWidth:h=!1}=e,{indicatorSpanOnlyContent:T=!1}=e,{href:u=void 0}=e,{content$use:b=[]}=e,{content$class:s=""}=e,_,g,j,v,d={},I={},F={},G=Oe("SMUI:tab:focusOnActivate"),N=i===Oe("SMUI:tab:initialActive"),ee=!1,{component:P=ze}=e,{tag:re=P===ze?u==null?"button":"a":void 0}=e;if(Xe("SMUI:label:context","tab"),Xe("SMUI:icon:context","tab"),!i)throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");ur(()=>{r(31,g=new pa({setAttr:K,addClass:k,removeClass:S,hasClass:Ie,activateIndicator:se=>v.activate(se),deactivateIndicator:()=>v.deactivate(),notifyInteracted:()=>he(Te(),"SMUITab:interacted",{tabId:i},void 0,!0),getOffsetLeft:()=>Te().offsetLeft,getOffsetWidth:()=>Te().offsetWidth,getContentOffsetLeft:()=>j.offsetLeft,getContentOffsetWidth:()=>j.offsetWidth,focus:xe}));const C={tabId:i,get element(){return Te()},get active(){return N},forceAccessible(se){r(19,ee=se)},computeIndicatorClientRect:()=>v.computeContentClientRect(),computeDimensions:()=>g.computeDimensions(),focus:xe,activate:Je,deactivate:$e};return he(Te(),"SMUITab:mount",C),g.init(),()=>{he(Te(),"SMUITab:unmount",C),g.destroy()}});function Ie(C){return C in d?d[C]:Te().classList.contains(C)}function k(C){d[C]||r(15,d[C]=!0,d)}function S(C){(!(C in d)||d[C])&&r(15,d[C]=!1,d)}function E(C,se){I[C]!=se&&(se===""||se==null?(delete I[C],r(16,I)):r(16,I[C]=se,I))}function K(C,se){F[C]!==se&&r(17,F[C]=se,F)}function Qe(C){!C.defaultPrevented&&g&&g.handleClick()}function Je(C,se){r(18,N=!0),se&&g.setFocusOnActivate(!1),g.activate(C),se&&g.setFocusOnActivate(G)}function $e(){r(18,N=!1),g.deactivate()}function xe(){Te().focus()}function Te(){return _.getElement()}function lr(C){X[C?"unshift":"push"](()=>{v=C,r(14,v)})}function fr(C){X[C?"unshift":"push"](()=>{j=C,r(13,j)})}function De(C){X[C?"unshift":"push"](()=>{v=C,r(14,v)})}function Z(C){X[C?"unshift":"push"](()=>{_=C,r(12,_)})}return t.$$set=C=>{e=V(V({},e),ke(C)),r(25,a=Y(e,n)),"use"in C&&r(0,l=C.use),"class"in C&&r(1,f=C.class),"style"in C&&r(2,p=C.style),"tab"in C&&r(26,i=C.tab),"ripple"in C&&r(3,w=C.ripple),"stacked"in C&&r(4,c=C.stacked),"minWidth"in C&&r(5,h=C.minWidth),"indicatorSpanOnlyContent"in C&&r(6,T=C.indicatorSpanOnlyContent),"href"in C&&r(7,u=C.href),"content$use"in C&&r(8,b=C.content$use),"content$class"in C&&r(9,s=C.content$class),"component"in C&&r(10,P=C.component),"tag"in C&&r(11,re=C.tag),"$$scope"in C&&r(37,y=C.$$scope)},t.$$.update=()=>{t.$$.dirty[1]&1&&g&&g.setFocusOnActivate(G)},[l,f,p,w,c,h,T,u,b,s,P,re,_,j,v,d,I,F,N,ee,m,k,S,E,Qe,a,i,Je,$e,xe,Te,g,o,lr,fr,De,Z,y]}class _a extends we{constructor(e){super(),pe(this,e,va,ha,ae,{use:0,class:1,style:2,tab:26,ripple:3,stacked:4,minWidth:5,indicatorSpanOnlyContent:6,href:7,content$use:8,content$class:9,component:10,tag:11,activate:27,deactivate:28,focus:29,getElement:30},null,[-1,-1])}get activate(){return this.$$.ctx[27]}get deactivate(){return this.$$.ctx[28]}get focus(){return this.$$.ctx[29]}get getElement(){return this.$$.ctx[30]}}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var jt={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},ka={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var et=function(){function t(e){this.adapter=e}return t}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Sa=function(t){Ue(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(){var r=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges().right;return Math.round(n-r)},e.prototype.scrollToRTL=function(r){var n=this.calculateScrollEdges(),a=this.adapter.getScrollAreaScrollLeft(),o=this.clampScrollValue(n.right-r);return{finalScrollPosition:o,scrollDelta:o-a}},e.prototype.incrementScrollRTL=function(r){var n=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(n-r);return{finalScrollPosition:a,scrollDelta:a-n}},e.prototype.getAnimatingScrollPosition=function(r){return r},e.prototype.calculateScrollEdges=function(){var r=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:r-n}},e.prototype.clampScrollValue=function(r){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,r),n.right)},e}(et);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ta=function(t){Ue(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(r){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(r-n)},e.prototype.scrollToRTL=function(r){var n=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(-r);return{finalScrollPosition:a,scrollDelta:a-n}},e.prototype.incrementScrollRTL=function(r){var n=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(n-r);return{finalScrollPosition:a,scrollDelta:a-n}},e.prototype.getAnimatingScrollPosition=function(r,n){return r-n},e.prototype.calculateScrollEdges=function(){var r=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:n-r,right:0}},e.prototype.clampScrollValue=function(r){var n=this.calculateScrollEdges();return Math.max(Math.min(n.right,r),n.left)},e}(et);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Aa=function(t){Ue(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getScrollPositionRTL=function(r){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-r)},e.prototype.scrollToRTL=function(r){var n=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(r);return{finalScrollPosition:a,scrollDelta:n-a}},e.prototype.incrementScrollRTL=function(r){var n=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(n+r);return{finalScrollPosition:a,scrollDelta:n-a}},e.prototype.getAnimatingScrollPosition=function(r,n){return r+n},e.prototype.calculateScrollEdges=function(){var r=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:r-n,right:0}},e.prototype.clampScrollValue=function(r){var n=this.calculateScrollEdges();return Math.min(Math.max(n.right,r),n.left)},e}(et);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ca=function(t){Ue(e,t);function e(r){var n=t.call(this,ge(ge({},e.defaultAdapter),r))||this;return n.isAnimating=!1,n}return Object.defineProperty(e,"cssClasses",{get:function(){return jt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return ka},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var r=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-r+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var r=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return n-r},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(r){var n=r.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(r){r!==0&&this.animate(this.getIncrementScrollOperation(r))},e.prototype.incrementScrollImmediate=function(r){if(r!==0){var n=this.getIncrementScrollOperation(r);n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},e.prototype.scrollTo=function(r){if(this.isRTL()){this.scrollToImplRTL(r);return}this.scrollToImpl(r)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var r=this.adapter.getScrollContentStyleValue("transform");if(r==="none")return 0;var n=/\((.+?)\)/.exec(r);if(!n)return 0;var a=n[1],o=an(a.split(","),6);o[0],o[1],o[2],o[3];var y=o[4];return o[5],parseFloat(y)},e.prototype.clampScrollValue=function(r){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,r),n.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var r=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(r)},e.prototype.calculateScrollEdges=function(){var r=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:r-n}},e.prototype.scrollToImpl=function(r){var n=this.getScrollPosition(),a=this.clampScrollValue(r),o=a-n;this.animate({finalScrollPosition:a,scrollDelta:o})},e.prototype.scrollToImplRTL=function(r){var n=this.getRTLScroller().scrollToRTL(r);this.animate(n)},e.prototype.getIncrementScrollOperation=function(r){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(r);var n=this.getScrollPosition(),a=r+n,o=this.clampScrollValue(a),y=o-n;return{finalScrollPosition:o,scrollDelta:y}},e.prototype.animate=function(r){var n=this;r.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(r.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+r.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var r=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(r)},e.prototype.getAnimatingScrollPosition=function(){var r=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(n,r):n-r},e.prototype.rtlScrollerFactory=function(){var r=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(r-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(r),new Ta(this.adapter);var a=this.adapter.computeScrollAreaClientRect(),o=this.adapter.computeScrollContentClientRect(),y=Math.round(o.right-a.right);return this.adapter.setScrollAreaScrollLeft(r),y===n?new Aa(this.adapter):new Sa(this.adapter)},e.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},e}(yr);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Br;function Ea(t,e){if(e===void 0&&(e=!0),e&&typeof Br<"u")return Br;var r=t.createElement("div");r.classList.add(jt.SCROLL_TEST),t.body.appendChild(r);var n=r.offsetHeight-r.clientHeight;return t.body.removeChild(r),e&&(Br=n),n}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ne={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},je={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var rr=new Set;rr.add(ne.ARROW_LEFT_KEY);rr.add(ne.ARROW_RIGHT_KEY);rr.add(ne.END_KEY);rr.add(ne.HOME_KEY);rr.add(ne.ENTER_KEY);rr.add(ne.SPACE_KEY);var tr=new Map;tr.set(je.ARROW_LEFT_KEYCODE,ne.ARROW_LEFT_KEY);tr.set(je.ARROW_RIGHT_KEYCODE,ne.ARROW_RIGHT_KEY);tr.set(je.END_KEYCODE,ne.END_KEY);tr.set(je.HOME_KEYCODE,ne.HOME_KEY);tr.set(je.ENTER_KEYCODE,ne.ENTER_KEY);tr.set(je.SPACE_KEYCODE,ne.SPACE_KEY);var Ia=function(t){Ue(e,t);function e(r){var n=t.call(this,ge(ge({},e.defaultAdapter),r))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(e,"strings",{get:function(){return ne},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return je},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(r){this.useAutomaticActivation=r},e.prototype.activateTab=function(r){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(r)||r===n)){var a;n!==-1&&(this.adapter.deactivateTabAtIndex(n),a=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(r,a),this.scrollIntoView(r),this.adapter.notifyTabActivated(r)}},e.prototype.handleKeyDown=function(r){var n=this.getKeyFromEvent(r);if(n!==void 0)if(this.isActivationKey(n)||r.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(n))return;var a=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),n);this.adapter.setActiveTab(a),this.scrollIntoView(a)}else{var o=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n))this.adapter.setActiveTab(o);else{var a=this.determineTargetFromKey(o,n);this.adapter.focusTabAtIndex(a),this.scrollIntoView(a)}}},e.prototype.handleTabInteraction=function(r){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(r.detail.tabId))},e.prototype.scrollIntoView=function(r){if(this.indexIsInRange(r)){if(r===0){this.adapter.scrollTo(0);return}if(r===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(r);return}this.scrollIntoViewImpl(r)}},e.prototype.determineTargetFromKey=function(r,n){var a=this.isRTL(),o=this.adapter.getTabListLength()-1,y=n===ne.END_KEY,m=n===ne.ARROW_LEFT_KEY&&!a||n===ne.ARROW_RIGHT_KEY&&a,l=n===ne.ARROW_RIGHT_KEY&&!a||n===ne.ARROW_LEFT_KEY&&a,f=r;return y?f=o:m?f-=1:l?f+=1:f=0,f<0?f=o:f>o&&(f=0),f},e.prototype.calculateScrollIncrement=function(r,n,a,o){var y=this.adapter.getTabDimensionsAtIndex(n),m=y.contentLeft-a-o,l=y.contentRight-a,f=l-je.EXTRA_SCROLL_AMOUNT,p=m+je.EXTRA_SCROLL_AMOUNT;return n<r?Math.min(f,0):Math.max(p,0)},e.prototype.calculateScrollIncrementRTL=function(r,n,a,o,y){var m=this.adapter.getTabDimensionsAtIndex(n),l=y-m.contentLeft-a,f=y-m.contentRight-a-o,p=f+je.EXTRA_SCROLL_AMOUNT,i=l-je.EXTRA_SCROLL_AMOUNT;return n>r?Math.max(p,0):Math.min(i,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(r,n,a,o){var y=n.rootLeft-a,m=n.rootRight-a-o,l=y+m,f=y<0||l<0,p=m>0||l>0;return f?r-1:p?r+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(r,n,a,o,y){var m=y-n.rootLeft-o-a,l=y-n.rootRight-a,f=m+l,p=m>0||f>0,i=l<0||f<0;return p?r+1:i?r-1:-1},e.prototype.getKeyFromEvent=function(r){return rr.has(r.key)?r.key:tr.get(r.keyCode)},e.prototype.isActivationKey=function(r){return r===ne.SPACE_KEY||r===ne.ENTER_KEY},e.prototype.indexIsInRange=function(r){return r>=0&&r<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(r){var n=this.adapter.getScrollPosition(),a=this.adapter.getOffsetWidth(),o=this.adapter.getTabDimensionsAtIndex(r),y=this.findAdjacentTabIndexClosestToEdge(r,o,n,a);if(this.indexIsInRange(y)){var m=this.calculateScrollIncrement(r,y,n,a);this.adapter.incrementScroll(m)}},e.prototype.scrollIntoViewImplRTL=function(r){var n=this.adapter.getScrollPosition(),a=this.adapter.getOffsetWidth(),o=this.adapter.getTabDimensionsAtIndex(r),y=this.adapter.getScrollContentWidth(),m=this.findAdjacentTabIndexClosestToEdgeRTL(r,o,n,a,y);if(this.indexIsInRange(m)){var l=this.calculateScrollIncrementRTL(r,m,n,a,y);this.adapter.incrementScroll(l)}},e}(yr);function Ra(t){let e,r,n,a,o,y,m,l,f,p,i,w,c,h;const T=t[23].default,u=ye(T,t,t[22],null);let b=[{class:a=H({[t[6]]:!0,"mdc-tab-scroller__scroll-content":!0})},{style:o=Object.entries(t[14]).map(At).join(" ")},ve(t[16],"scrollContent$")],s={};for(let d=0;d<b.length;d+=1)s=V(s,b[d]);let _=[{class:m=H({[t[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...t[12]})},{style:l=Object.entries(t[13]).map(Ct).join(" ")},ve(t[16],"scrollArea$")],g={};for(let d=0;d<_.length;d+=1)g=V(g,_[d]);let j=[{class:p=H({[t[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":t[2]==="start","mdc-tab-scroller--align-end":t[2]==="end","mdc-tab-scroller--align-center":t[2]==="center",...t[11]})},Ye(t[16],["scrollArea$","scrollContent$"])],v={};for(let d=0;d<j.length;d+=1)v=V(v,j[d]);return{c(){e=q("div"),r=q("div"),n=q("div"),u&&u.c(),Q(n,s),Q(r,g),Q(e,v)},m(d,I){D(d,e,I),Re(e,r),Re(r,n),u&&u.m(n,null),t[24](n),t[26](r),t[32](e),w=!0,c||(h=[J(y=Ce.call(null,n,t[5])),te(n,"transitionend",t[25]),J(f=Ce.call(null,r,t[3])),te(r,"wheel",t[27],{passive:!0}),te(r,"touchstart",t[28],{passive:!0}),te(r,"pointerdown",t[29]),te(r,"mousedown",t[30]),te(r,"keydown",t[31]),J(i=Ce.call(null,e,t[0])),J(t[15].call(null,e))],c=!0)},p(d,I){u&&u.p&&(!w||I[0]&4194304)&&fe(u,T,d,d[22],w?le(T,d[22],I,null):ie(d[22]),null),Q(n,s=x(b,[(!w||I[0]&64&&a!==(a=H({[d[6]]:!0,"mdc-tab-scroller__scroll-content":!0})))&&{class:a},(!w||I[0]&16384&&o!==(o=Object.entries(d[14]).map(At).join(" ")))&&{style:o},I[0]&65536&&ve(d[16],"scrollContent$")])),y&&oe(y.update)&&I[0]&32&&y.update.call(null,d[5]),Q(r,g=x(_,[(!w||I[0]&4112&&m!==(m=H({[d[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...d[12]})))&&{class:m},(!w||I[0]&8192&&l!==(l=Object.entries(d[13]).map(Ct).join(" ")))&&{style:l},I[0]&65536&&ve(d[16],"scrollArea$")])),f&&oe(f.update)&&I[0]&8&&f.update.call(null,d[3]),Q(e,v=x(j,[(!w||I[0]&2054&&p!==(p=H({[d[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":d[2]==="start","mdc-tab-scroller--align-end":d[2]==="end","mdc-tab-scroller--align-center":d[2]==="center",...d[11]})))&&{class:p},I[0]&65536&&Ye(d[16],["scrollArea$","scrollContent$"])])),i&&oe(i.update)&&I[0]&1&&i.update.call(null,d[0])},i(d){w||(R(u,d),w=!0)},o(d){L(u,d),w=!1},d(d){d&&M(e),u&&u.d(d),t[24](null),t[26](null),t[32](null),c=!1,_e(h)}}}const At=([t,e])=>`${t}: ${e};`,Ct=([t,e])=>`${t}: ${e};`;function Oa(t,e,r){const n=["use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class","getScrollPosition","getScrollContentWidth","incrementScroll","scrollTo","getElement"];let a=Y(e,n),{$$slots:o={},$$scope:y}=e;const{matches:m}=Dt,l=Se(me());let{use:f=[]}=e,{class:p=""}=e,{align:i=void 0}=e,{scrollArea$use:w=[]}=e,{scrollArea$class:c=""}=e,{scrollContent$use:h=[]}=e,{scrollContent$class:T=""}=e,u,b,s,_,g={},j={},v={},d={};ur(()=>(r(8,b=new Ca({eventTargetMatchesSelector:(Z,C)=>m(Z,C),addClass:I,removeClass:F,addScrollAreaClass:G,setScrollAreaStyleProperty:N,setScrollContentStyleProperty:ee,getScrollContentStyleValue:P,setScrollAreaScrollLeft:Z=>r(9,s.scrollLeft=Z,s),getScrollAreaScrollLeft:()=>s.scrollLeft,getScrollContentOffsetWidth:()=>_.offsetWidth,getScrollAreaOffsetWidth:()=>s.offsetWidth,computeScrollAreaClientRect:()=>s.getBoundingClientRect(),computeScrollContentClientRect:()=>_.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>Ea(document)})),b.init(),()=>{b.destroy()}));function I(Z){g[Z]||r(11,g[Z]=!0,g)}function F(Z){(!(Z in g)||g[Z])&&r(11,g[Z]=!1,g)}function G(Z){j[Z]||r(12,j[Z]=!0,j)}function N(Z,C){v[Z]!=C&&(C===""||C==null?(delete v[Z],r(13,v)):r(13,v[Z]=C,v))}function ee(Z,C){d[Z]!=C&&(C===""||C==null?(delete d[Z],r(14,d)):r(14,d[Z]=C,d))}function P(Z){return Z in d?d[Z]:getComputedStyle(_).getPropertyValue(Z)}function re(){return b.getScrollPosition()}function Ie(){return _.offsetWidth}function k(Z){b.incrementScroll(Z)}function S(Z){b.scrollTo(Z)}function E(){return u}function K(Z){X[Z?"unshift":"push"](()=>{_=Z,r(10,_)})}const Qe=Z=>b&&b.handleTransitionEnd(Z);function Je(Z){X[Z?"unshift":"push"](()=>{s=Z,r(9,s)})}const $e=()=>b&&b.handleInteraction(),xe=()=>b&&b.handleInteraction(),Te=()=>b&&b.handleInteraction(),lr=()=>b&&b.handleInteraction(),fr=()=>b&&b.handleInteraction();function De(Z){X[Z?"unshift":"push"](()=>{u=Z,r(7,u)})}return t.$$set=Z=>{e=V(V({},e),ke(Z)),r(16,a=Y(e,n)),"use"in Z&&r(0,f=Z.use),"class"in Z&&r(1,p=Z.class),"align"in Z&&r(2,i=Z.align),"scrollArea$use"in Z&&r(3,w=Z.scrollArea$use),"scrollArea$class"in Z&&r(4,c=Z.scrollArea$class),"scrollContent$use"in Z&&r(5,h=Z.scrollContent$use),"scrollContent$class"in Z&&r(6,T=Z.scrollContent$class),"$$scope"in Z&&r(22,y=Z.$$scope)},[f,p,i,w,c,h,T,u,b,s,_,g,j,v,d,l,a,re,Ie,k,S,E,y,o,K,Qe,Je,$e,xe,Te,lr,fr,De]}class La extends we{constructor(e){super(),pe(this,e,Oa,Ra,ae,{use:0,class:1,align:2,scrollArea$use:3,scrollArea$class:4,scrollContent$use:5,scrollContent$class:6,getScrollPosition:17,getScrollContentWidth:18,incrementScroll:19,scrollTo:20,getElement:21},null,[-1,-1])}get getScrollPosition(){return this.$$.ctx[17]}get getScrollContentWidth(){return this.$$.ctx[18]}get incrementScroll(){return this.$$.ctx[19]}get scrollTo(){return this.$$.ctx[20]}get getElement(){return this.$$.ctx[21]}}function Et(t,e,r){const n=t.slice();return n[28]=e[r],n}const Pa=t=>({tab:t&4}),It=t=>({tab:t[28]});function Rt(t,e){let r,n;const a=e[20].default,o=ye(a,e,e[23],It);return{key:t,first:null,c(){r=Me(),o&&o.c(),this.first=r},m(y,m){D(y,r,m),o&&o.m(y,m),n=!0},p(y,m){e=y,o&&o.p&&(!n||m&8388612)&&fe(o,a,e,e[23],n?le(a,e[23],m,Pa):ie(e[23]),It)},i(y){n||(R(o,y),n=!0)},o(y){L(o,y),n=!1},d(y){y&&M(r),o&&o.d(y)}}}function Za(t){let e=[],r=new Map,n,a,o=t[2];const y=m=>m[3](m[28]);for(let m=0;m<o.length;m+=1){let l=Et(t,o,m),f=y(l);r.set(f,e[m]=Rt(f,l))}return{c(){for(let m=0;m<e.length;m+=1)e[m].c();n=Me()},m(m,l){for(let f=0;f<e.length;f+=1)e[f].m(m,l);D(m,n,l),a=!0},p(m,l){l&8388620&&(o=m[2],Pe(),e=tn(e,l,y,1,m,o,r,n.parentNode,rn,Rt,n,Et),Ze())},i(m){if(!a){for(let l=0;l<o.length;l+=1)R(e[l]);a=!0}},o(m){for(let l=0;l<e.length;l+=1)L(e[l]);a=!1},d(m){for(let l=0;l<e.length;l+=1)e[l].d(m);m&&M(n)}}}function Ma(t){let e,r,n,a,o,y,m;const l=[ve(t[10],"tabScroller$")];let f={$$slots:{default:[Za]},$$scope:{ctx:t}};for(let w=0;w<l.length;w+=1)f=V(f,l[w]);r=new La({props:f}),t[21](r);let p=[{class:n=H({[t[1]]:!0,"mdc-tab-bar":!0})},{role:"tablist"},Ye(t[10],["tabScroller$"])],i={};for(let w=0;w<p.length;w+=1)i=V(i,p[w]);return{c(){e=q("div"),B(r.$$.fragment),Q(e,i)},m(w,c){D(w,e,c),W(r,e,null),t[22](e),o=!0,y||(m=[J(a=Ce.call(null,e,t[0])),J(t[7].call(null,e)),te(e,"SMUITab:mount",t[8]),te(e,"SMUITab:unmount",t[9]),te(e,"SMUITab:interacted",function(){oe(t[4]&&t[4].handleTabInteraction.bind(t[4]))&&(t[4]&&t[4].handleTabInteraction.bind(t[4])).apply(this,arguments)}),te(e,"keydown",function(){oe(t[4]&&t[4].handleKeyDown.bind(t[4]))&&(t[4]&&t[4].handleKeyDown.bind(t[4])).apply(this,arguments)})],y=!0)},p(w,[c]){t=w;const h=c&1024?x(l,[ce(ve(t[10],"tabScroller$"))]):{};c&8388612&&(h.$$scope={dirty:c,ctx:t}),r.$set(h),Q(e,i=x(p,[(!o||c&2&&n!==(n=H({[t[1]]:!0,"mdc-tab-bar":!0})))&&{class:n},{role:"tablist"},c&1024&&Ye(t[10],["tabScroller$"])])),a&&oe(a.update)&&c&1&&a.update.call(null,t[0])},i(w){o||(R(r.$$.fragment,w),o=!0)},o(w){L(r.$$.fragment,w),o=!1},d(w){w&&M(e),t[21](null),z(r),t[22](null),y=!1,_e(m)}}}function Da(t,e,r){const n=["use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","scrollIntoView","getElement"];let a=Y(e,n),{$$slots:o={},$$scope:y}=e;const m=Se(me());let{use:l=[]}=e,{class:f=""}=e,{tabs:p=[]}=e,{key:i=k=>k}=e,{focusOnActivate:w=!0}=e,{focusOnProgrammatic:c=!1}=e,{useAutomaticActivation:h=!0}=e,{active:T=void 0}=e,u,b,s,_=p.indexOf(T),g={},j=new WeakMap,v=!1;Xe("SMUI:tab:focusOnActivate",w),Xe("SMUI:tab:initialActive",T),ur(()=>(r(4,b=new Ia({scrollTo:k=>s.scrollTo(k),incrementScroll:k=>s.incrementScroll(k),getScrollPosition:()=>s.getScrollPosition(),getScrollContentWidth:()=>s.getScrollContentWidth(),getOffsetWidth:()=>P().offsetWidth,isRTL:()=>getComputedStyle(P()).getPropertyValue("direction")==="rtl",setActiveTab:k=>{r(11,T=p[k]),r(17,_=k),b.activateTab(k)},activateTabAtIndex:(k,S)=>{var E;return(E=F(p[k]))===null||E===void 0?void 0:E.activate(S,v)},deactivateTabAtIndex:k=>{var S;return(S=F(p[k]))===null||S===void 0?void 0:S.deactivate()},focusTabAtIndex:k=>{var S;return(S=F(p[k]))===null||S===void 0?void 0:S.focus()},getTabIndicatorClientRectAtIndex:k=>{var S,E;return(E=(S=F(p[k]))===null||S===void 0?void 0:S.computeIndicatorClientRect())!==null&&E!==void 0?E:new DOMRect},getTabDimensionsAtIndex:k=>{var S,E;return(E=(S=F(p[k]))===null||S===void 0?void 0:S.computeDimensions())!==null&&E!==void 0?E:{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>{var k;for(let S=0;S<p.length;S++)if(!((k=F(p[S]))===null||k===void 0)&&k.active)return S;return-1},getFocusedTabIndex:()=>{const k=p.map(E=>{var K;return(K=F(E))===null||K===void 0?void 0:K.element}),S=document.activeElement;return k.indexOf(S)},getIndexOfTabById:k=>p.indexOf(k),getTabListLength:()=>p.length,notifyTabActivated:k=>he(P(),"SMUITabBar:activated",{index:k},void 0,!0)})),b.init(),()=>{b.destroy()}));function d(k){const S=k.detail;G(S.tabId,S)}function I(k){const S=k.detail;N(S.tabId)}function F(k){return k instanceof Object?j.get(k):g[k]}function G(k,S){k instanceof Object?(j.set(k,S),r(19,j)):(r(18,g[k]=S,g),r(18,g))}function N(k){k instanceof Object?(j.delete(k),r(19,j)):(delete g[k],r(18,g))}function ee(k){b.scrollIntoView(k)}function P(){return u}function re(k){X[k?"unshift":"push"](()=>{s=k,r(6,s)})}function Ie(k){X[k?"unshift":"push"](()=>{u=k,r(5,u)})}return t.$$set=k=>{e=V(V({},e),ke(k)),r(10,a=Y(e,n)),"use"in k&&r(0,l=k.use),"class"in k&&r(1,f=k.class),"tabs"in k&&r(2,p=k.tabs),"key"in k&&r(3,i=k.key),"focusOnActivate"in k&&r(12,w=k.focusOnActivate),"focusOnProgrammatic"in k&&r(13,c=k.focusOnProgrammatic),"useAutomaticActivation"in k&&r(14,h=k.useAutomaticActivation),"active"in k&&r(11,T=k.active),"$$scope"in k&&r(23,y=k.$$scope)},t.$$.update=()=>{if(t.$$.dirty&141332&&T!==p[_]&&(r(17,_=p.indexOf(T)),b&&(v=!c,b.activateTab(_),v=!1)),t.$$.dirty&917508&&p.length){const k=p[0]instanceof Object?j.get(p[0]):g[p[0]];k&&k.forceAccessible(_===-1)}t.$$.dirty&16400&&b&&b.setUseAutomaticActivation(h)},[l,f,p,i,b,u,s,m,d,I,a,T,w,c,h,ee,P,_,g,j,o,re,Ie,y]}class Va extends we{constructor(e){super(),pe(this,e,Da,Ma,ae,{use:0,class:1,tabs:2,key:3,focusOnActivate:12,focusOnProgrammatic:13,useAutomaticActivation:14,active:11,scrollIntoView:15,getElement:16})}get scrollIntoView(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}let A;const Fe=new Array(32).fill(void 0);Fe.push(void 0,null,!0,!1);function be(t){return Fe[t]}let qe=0,Rr;function Or(){return Rr.byteLength===0&&(Rr=new Uint8Array(A.memory.buffer)),Rr}const Lr=new TextEncoder("utf-8"),ja=typeof Lr.encodeInto=="function"?function(t,e){return Lr.encodeInto(t,e)}:function(t,e){const r=Lr.encode(t);return e.set(r),{read:t.length,written:r.length}};function mr(t,e,r){if(r===void 0){const m=Lr.encode(t),l=e(m.length);return Or().subarray(l,l+m.length).set(m),qe=m.length,l}let n=t.length,a=e(n);const o=Or();let y=0;for(;y<n;y++){const m=t.charCodeAt(y);if(m>127)break;o[a+y]=m}if(y!==n){y!==0&&(t=t.slice(y)),a=r(a,n,n=y+t.length*3);const m=Or().subarray(a+y,a+n),l=ja(t,m);y+=l.written}return qe=y,a}let Pr;function U(){return Pr.byteLength===0&&(Pr=new Int32Array(A.memory.buffer)),Pr}const Ft=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});Ft.decode();function de(t,e){return Ft.decode(Or().subarray(t,t+e))}let wr=Fe.length;function Ae(t){wr===Fe.length&&Fe.push(Fe.length+1);const e=wr;return wr=Fe[e],Fe[e]=t,e}function Fa(t){t<36||(Fe[t]=wr,wr=t)}function Vr(t){const e=be(t);return Fa(t),e}function qr(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const a=t.description;return a==null?"Symbol":`Symbol(${a})`}if(e=="function"){const a=t.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(t)){const a=t.length;let o="[";a>0&&(o+=qr(t[0]));for(let y=1;y<a;y++)o+=", "+qr(t[y]);return o+="]",o}const r=/\[object ([^\]]+)\]/.exec(toString.call(t));let n;if(r.length>1)n=r[1];else return toString.call(t);if(n=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:n}let Zr=32;function Ua(t){if(Zr==1)throw new Error("out of js stack");return Fe[--Zr]=t,Zr}let Mr;function Wa(){return Mr.byteLength===0&&(Mr=new Uint32Array(A.memory.buffer)),Mr}function za(t,e){const n=Wa().subarray(t/4,t/4+e),a=[];for(let o=0;o<n.length;o++)a.push(Vr(n[o]));return a}const Be=new Uint32Array(2),Tr=new BigInt64Array(Be.buffer);function ar(t,e){try{return t.apply(this,e)}catch(r){A.__wbindgen_exn_store(Ae(r))}}class rt{static __wrap(e){const r=Object.create(rt.prototype);return r.ptr=e,r}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();A.__wbg_jsdebugstreets_free(e)}getLabel(){try{const n=A.__wbindgen_add_to_stack_pointer(-16);A.jsdebugstreets_getLabel(n,this.ptr);var e=U()[n/4+0],r=U()[n/4+1];return de(e,r)}finally{A.__wbindgen_add_to_stack_pointer(16),A.__wbindgen_free(e,r)}}getNetwork(){const e=A.jsdebugstreets_getNetwork(this.ptr);return Vr(e)}toDebugGeojson(){try{const n=A.__wbindgen_add_to_stack_pointer(-16);A.jsdebugstreets_toDebugGeojson(n,this.ptr);var e=U()[n/4+0],r=U()[n/4+1];let a;return e!==0&&(a=de(e,r).slice(),A.__wbindgen_free(e,r*1)),a}finally{A.__wbindgen_add_to_stack_pointer(16)}}}class dr{static __wrap(e){const r=Object.create(dr.prototype);return r.ptr=e,r}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();A.__wbg_jsstreetnetwork_free(e)}constructor(e,r,n){try{const m=A.__wbindgen_add_to_stack_pointer(-16),l=mr(e,A.__wbindgen_malloc,A.__wbindgen_realloc),f=qe,p=mr(r,A.__wbindgen_malloc,A.__wbindgen_realloc),i=qe;A.jsstreetnetwork_new(m,l,f,p,i,Ua(n));var a=U()[m/4+0],o=U()[m/4+1],y=U()[m/4+2];if(y)throw Vr(o);return dr.__wrap(a)}finally{A.__wbindgen_add_to_stack_pointer(16),Fe[Zr++]=void 0}}toGeojsonPlain(){try{const n=A.__wbindgen_add_to_stack_pointer(-16);A.jsstreetnetwork_toGeojsonPlain(n,this.ptr);var e=U()[n/4+0],r=U()[n/4+1];return de(e,r)}finally{A.__wbindgen_add_to_stack_pointer(16),A.__wbindgen_free(e,r)}}toLanePolygonsGeojson(){try{const n=A.__wbindgen_add_to_stack_pointer(-16);A.jsstreetnetwork_toLanePolygonsGeojson(n,this.ptr);var e=U()[n/4+0],r=U()[n/4+1];return de(e,r)}finally{A.__wbindgen_add_to_stack_pointer(16),A.__wbindgen_free(e,r)}}toLaneMarkingsGeojson(){try{const n=A.__wbindgen_add_to_stack_pointer(-16);A.jsstreetnetwork_toLaneMarkingsGeojson(n,this.ptr);var e=U()[n/4+0],r=U()[n/4+1];return de(e,r)}finally{A.__wbindgen_add_to_stack_pointer(16),A.__wbindgen_free(e,r)}}toIntersectionMarkingsGeojson(){try{const n=A.__wbindgen_add_to_stack_pointer(-16);A.jsstreetnetwork_toIntersectionMarkingsGeojson(n,this.ptr);var e=U()[n/4+0],r=U()[n/4+1];return de(e,r)}finally{A.__wbindgen_add_to_stack_pointer(16),A.__wbindgen_free(e,r)}}toGraphviz(){try{const n=A.__wbindgen_add_to_stack_pointer(-16);A.jsstreetnetwork_toGraphviz(n,this.ptr);var e=U()[n/4+0],r=U()[n/4+1];return de(e,r)}finally{A.__wbindgen_add_to_stack_pointer(16),A.__wbindgen_free(e,r)}}getDebugSteps(){try{const a=A.__wbindgen_add_to_stack_pointer(-16);A.jsstreetnetwork_getDebugSteps(a,this.ptr);var e=U()[a/4+0],r=U()[a/4+1],n=za(e,r).slice();return A.__wbindgen_free(e,r*4),n}finally{A.__wbindgen_add_to_stack_pointer(16)}}debugClockwiseOrderingGeojson(){try{const n=A.__wbindgen_add_to_stack_pointer(-16);A.jsstreetnetwork_debugClockwiseOrderingGeojson(n,this.ptr);var e=U()[n/4+0],r=U()[n/4+1];return de(e,r)}finally{A.__wbindgen_add_to_stack_pointer(16),A.__wbindgen_free(e,r)}}debugMovementsGeojson(){try{const n=A.__wbindgen_add_to_stack_pointer(-16);A.jsstreetnetwork_debugMovementsGeojson(n,this.ptr);var e=U()[n/4+0],r=U()[n/4+1];return de(e,r)}finally{A.__wbindgen_add_to_stack_pointer(16),A.__wbindgen_free(e,r)}}getOsmTagsForWay(e){try{const a=A.__wbindgen_add_to_stack_pointer(-16);Tr[0]=e;const o=Be[0],y=Be[1];A.jsstreetnetwork_getOsmTagsForWay(a,this.ptr,o,y);var r=U()[a/4+0],n=U()[a/4+1];return de(r,n)}finally{A.__wbindgen_add_to_stack_pointer(16),A.__wbindgen_free(r,n)}}getGeometryForWay(e){try{const a=A.__wbindgen_add_to_stack_pointer(-16);Tr[0]=e;const o=Be[0],y=Be[1];A.jsstreetnetwork_getGeometryForWay(a,this.ptr,o,y);var r=U()[a/4+0],n=U()[a/4+1];return de(r,n)}finally{A.__wbindgen_add_to_stack_pointer(16),A.__wbindgen_free(r,n)}}overwriteOsmTagsForWay(e,r){Tr[0]=e;const n=Be[0],a=Be[1],o=mr(r,A.__wbindgen_malloc,A.__wbindgen_realloc),y=qe;A.jsstreetnetwork_overwriteOsmTagsForWay(this.ptr,n,a,o,y)}wayToXml(e){try{const a=A.__wbindgen_add_to_stack_pointer(-16);Tr[0]=e;const o=Be[0],y=Be[1];A.jsstreetnetwork_wayToXml(a,this.ptr,o,y);var r=U()[a/4+0],n=U()[a/4+1];return de(r,n)}finally{A.__wbindgen_add_to_stack_pointer(16),A.__wbindgen_free(r,n)}}}async function Ha(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(n){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n);else throw n}const r=await t.arrayBuffer();return await WebAssembly.instantiate(r,e)}else{const r=await WebAssembly.instantiate(t,e);return r instanceof WebAssembly.Instance?{instance:r,module:t}:r}}function Ba(){const t={};return t.wbg={},t.wbg.__wbg_jsdebugstreets_new=function(e){const r=rt.__wrap(e);return Ae(r)},t.wbg.__wbindgen_json_serialize=function(e,r){const n=be(r),a=JSON.stringify(n===void 0?null:n),o=mr(a,A.__wbindgen_malloc,A.__wbindgen_realloc),y=qe;U()[e/4+1]=y,U()[e/4+0]=o},t.wbg.__wbg_jsstreetnetwork_new=function(e){const r=dr.__wrap(e);return Ae(r)},t.wbg.__wbindgen_string_new=function(e,r){const n=de(e,r);return Ae(n)},t.wbg.__wbg_new_693216e109162396=function(){const e=new Error;return Ae(e)},t.wbg.__wbg_stack_0ddaca5d1abfb52f=function(e,r){const n=be(r).stack,a=mr(n,A.__wbindgen_malloc,A.__wbindgen_realloc),o=qe;U()[e/4+1]=o,U()[e/4+0]=a},t.wbg.__wbg_error_09919627ac0992f5=function(e,r){try{console.error(de(e,r))}finally{A.__wbindgen_free(e,r)}},t.wbg.__wbindgen_object_drop_ref=function(e){Vr(e)},t.wbg.__wbg_now_9c64828adecad05e=function(e){return be(e).now()},t.wbg.__wbg_debug_68178c61250ae699=function(e){console.debug(be(e))},t.wbg.__wbg_error_e2677af4c7f31a14=function(e){console.error(be(e))},t.wbg.__wbg_info_2fe3b57d78190c6d=function(e){console.info(be(e))},t.wbg.__wbg_log_7761a8b8a8c1864e=function(e){console.log(be(e))},t.wbg.__wbg_warn_8b29c6b80217b0e4=function(e){console.warn(be(e))},t.wbg.__wbg_newnoargs_fc5356289219b93b=function(e,r){const n=new Function(de(e,r));return Ae(n)},t.wbg.__wbg_get_89247d3aeaa38cc5=function(){return ar(function(e,r){const n=Reflect.get(be(e),be(r));return Ae(n)},arguments)},t.wbg.__wbg_call_4573f605ca4b5f10=function(){return ar(function(e,r){const n=be(e).call(be(r));return Ae(n)},arguments)},t.wbg.__wbindgen_object_clone_ref=function(e){const r=be(e);return Ae(r)},t.wbg.__wbg_self_ba1ddafe9ea7a3a2=function(){return ar(function(){const e=self.self;return Ae(e)},arguments)},t.wbg.__wbg_window_be3cc430364fd32c=function(){return ar(function(){const e=window.window;return Ae(e)},arguments)},t.wbg.__wbg_globalThis_56d9c9f814daeeee=function(){return ar(function(){const e=globalThis.globalThis;return Ae(e)},arguments)},t.wbg.__wbg_global_8c35aeee4ac77f2b=function(){return ar(function(){const e=global.global;return Ae(e)},arguments)},t.wbg.__wbindgen_is_undefined=function(e){return be(e)===void 0},t.wbg.__wbindgen_debug_string=function(e,r){const n=qr(be(r)),a=mr(n,A.__wbindgen_malloc,A.__wbindgen_realloc),o=qe;U()[e/4+1]=o,U()[e/4+0]=a},t.wbg.__wbindgen_throw=function(e,r){throw new Error(de(e,r))},t}function Na(t,e){return A=t.exports,Ut.__wbindgen_wasm_module=e,Pr=new Int32Array(A.memory.buffer),Mr=new Uint32Array(A.memory.buffer),Rr=new Uint8Array(A.memory.buffer),A}async function Ut(t){typeof t>"u"&&(t="/svelte_playground/assets/osm2streets_js_bg.wasm");const e=Ba();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:r,module:n}=await Ha(await t,e);return Na(r,n)}const Ka=`<?xml version="1.0" encoding="UTF-8"?>
<osm version="0.6" generator="CGImap 0.8.6 (3092880 spike-06.openstreetmap.org)" copyright="OpenStreetMap and contributors" attribution="http://www.openstreetmap.org/copyright" license="http://opendatacommons.org/licenses/odbl/1-0/">
 <bounds minlat="47.6915700" minlon="-122.3449200" maxlat="47.6926000" maxlon="-122.3442600"/>
 <node id="53122087" visible="true" version="7" changeset="83572086" timestamp="2020-04-15T07:23:11Z" user="vsahith" uid="9196087" lat="47.6920187" lon="-122.3446310"/>
 <node id="53178613" visible="true" version="6" changeset="9222229" timestamp="2011-09-05T20:58:39Z" user="Baloo Uriza" uid="92286" lat="47.6927393" lon="-122.3445482"/>
 <node id="429692074" visible="true" version="3" changeset="83572086" timestamp="2020-04-15T07:23:11Z" user="vsahith" uid="9196087" lat="47.6923843" lon="-122.3445574"/>
 <node id="462671246" visible="true" version="2" changeset="6774773" timestamp="2010-12-27T07:43:31Z" user="zephyr" uid="121241" lat="47.6913068" lon="-122.3443270"/>
 <node id="462671255" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:29Z" user="zephyr" uid="121241" lat="47.6913069" lon="-122.3435678"/>
 <node id="462671283" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:30Z" user="zephyr" uid="121241" lat="47.6915823" lon="-122.3435579"/>
 <node id="462671296" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:30Z" user="zephyr" uid="121241" lat="47.6915850" lon="-122.3443403"/>
 <node id="462671315" visible="true" version="2" changeset="6774773" timestamp="2010-12-27T07:43:31Z" user="zephyr" uid="121241" lat="47.6918706" lon="-122.3443332"/>
 <node id="462671323" visible="true" version="2" changeset="6774773" timestamp="2010-12-27T07:43:32Z" user="zephyr" uid="121241" lat="47.6918649" lon="-122.3435707"/>
 <node id="462671344" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:32Z" user="zephyr" uid="121241" lat="47.6921491" lon="-122.3443423"/>
 <node id="462671358" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:33Z" user="zephyr" uid="121241" lat="47.6921411" lon="-122.3435797"/>
 <node id="462671384" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:34Z" user="zephyr" uid="121241" lat="47.6923042" lon="-122.3443403"/>
 <node id="462671400" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:34Z" user="zephyr" uid="121241" lat="47.6922988" lon="-122.3435817"/>
 <node id="462671422" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:35Z" user="zephyr" uid="121241" lat="47.6928924" lon="-122.3443562"/>
 <node id="462671431" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:36Z" user="zephyr" uid="121241" lat="47.6924874" lon="-122.3443443"/>
 <node id="462671432" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:36Z" user="zephyr" uid="121241" lat="47.6924793" lon="-122.3435776"/>
 <node id="462671437" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:36Z" user="zephyr" uid="121241" lat="47.6928897" lon="-122.3435837"/>
 <node id="462969792" visible="true" version="3" changeset="4416828" timestamp="2010-04-13T19:18:19Z" user="zephyr" uid="121241" lat="47.6913718" lon="-122.3450438"/>
 <node id="462969802" visible="true" version="3" changeset="4416828" timestamp="2010-04-13T19:18:19Z" user="zephyr" uid="121241" lat="47.6913674" lon="-122.3446950"/>
 <node id="462969803" visible="true" version="3" changeset="4416828" timestamp="2010-04-13T19:18:19Z" user="zephyr" uid="121241" lat="47.6919393" lon="-122.3446981"/>
 <node id="462969804" visible="true" version="2" changeset="2296102" timestamp="2009-08-29T00:38:24Z" user="jtreuting" uid="164673" lat="47.6919383" lon="-122.3450481"/>
 <node id="462969811" visible="true" version="1" changeset="2125126" timestamp="2009-08-13T00:40:41Z" user="zephyr" uid="121241" lat="47.6926630" lon="-122.3452493"/>
 <node id="462969821" visible="true" version="1" changeset="2125126" timestamp="2009-08-13T00:40:42Z" user="zephyr" uid="121241" lat="47.6920951" lon="-122.3452529"/>
 <node id="462969829" visible="true" version="1" changeset="2125126" timestamp="2009-08-13T00:40:42Z" user="zephyr" uid="121241" lat="47.6920880" lon="-122.3447162"/>
 <node id="462969834" visible="true" version="1" changeset="2125126" timestamp="2009-08-13T00:40:42Z" user="zephyr" uid="121241" lat="47.6926655" lon="-122.3447198"/>
 <node id="695734906" visible="true" version="3" changeset="16243510" timestamp="2013-05-22T20:04:26Z" user="SeattleImport" uid="1382179" lat="47.6917601" lon="-122.3443250"/>
 <node id="695734909" visible="true" version="2" changeset="16243510" timestamp="2013-05-22T20:04:26Z" user="SeattleImport" uid="1382179" lat="47.6917411" lon="-122.3437639"/>
 <node id="695734913" visible="true" version="2" changeset="16243510" timestamp="2013-05-22T20:04:26Z" user="SeattleImport" uid="1382179" lat="47.6916169" lon="-122.3437403"/>
 <node id="695734916" visible="true" version="3" changeset="16243510" timestamp="2013-05-22T20:04:26Z" user="SeattleImport" uid="1382179" lat="47.6916176" lon="-122.3435508"/>
 <node id="1424516769" visible="true" version="1" changeset="9222229" timestamp="2011-09-05T20:57:56Z" user="Baloo Uriza" uid="92286" lat="47.6915460" lon="-122.3445375"/>
 <node id="1708948597" visible="true" version="2" changeset="37402781" timestamp="2016-02-24T01:12:03Z" user="sctrojan79" uid="2601744" lat="47.6923762" lon="-122.3435182"/>
 <node id="2316282761" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:37Z" user="SeattleImport" uid="1382179" lat="47.6916347" lon="-122.3437630"/>
 <node id="2316282859" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:39Z" user="SeattleImport" uid="1382179" lat="47.6917389" lon="-122.3443003"/>
 <node id="2316282877" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:39Z" user="SeattleImport" uid="1382179" lat="47.6917517" lon="-122.3443250"/>
 <node id="2316282890" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:39Z" user="SeattleImport" uid="1382179" lat="47.6917600" lon="-122.3443480"/>
 <node id="2316282967" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:41Z" user="SeattleImport" uid="1382179" lat="47.6918588" lon="-122.3443489"/>
 <node id="2316282968" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:41Z" user="SeattleImport" uid="1382179" lat="47.6918619" lon="-122.3435485"/>
 <node id="2316283265" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:46Z" user="SeattleImport" uid="1382179" lat="47.6924758" lon="-122.3439411"/>
 <node id="2316283270" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:46Z" user="SeattleImport" uid="1382179" lat="47.6924791" lon="-122.3443390"/>
 <node id="2316283318" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:47Z" user="SeattleImport" uid="1382179" lat="47.6925592" lon="-122.3439396"/>
 <node id="2316283319" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:47Z" user="SeattleImport" uid="1382179" lat="47.6925595" lon="-122.3439719"/>
 <node id="2316283361" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:48Z" user="SeattleImport" uid="1382179" lat="47.6926232" lon="-122.3441357"/>
 <node id="2316283362" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:48Z" user="SeattleImport" uid="1382179" lat="47.6926249" lon="-122.3443363"/>
 <node id="2316283363" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:48Z" user="SeattleImport" uid="1382179" lat="47.6926264" lon="-122.3439707"/>
 <node id="2316283364" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:48Z" user="SeattleImport" uid="1382179" lat="47.6926273" lon="-122.3440746"/>
 <node id="2316283367" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:48Z" user="SeattleImport" uid="1382179" lat="47.6926347" lon="-122.3440745"/>
 <node id="2316283368" visible="true" version="1" changeset="16243510" timestamp="2013-05-22T20:03:48Z" user="SeattleImport" uid="1382179" lat="47.6926352" lon="-122.3441355"/>
 <node id="2328650062" visible="true" version="1" changeset="16384670" timestamp="2013-06-01T23:06:30Z" user="Foundatron" uid="290960" lat="47.6917616" lon="-122.3448326">
  <tag k="addr:city" v="Seattle"/>
  <tag k="addr:housenumber" v="8615"/>
  <tag k="addr:postcode" v="98103"/>
  <tag k="addr:street" v="Aurora Avenue North"/>
  <tag k="source" v="King County GIS;data.seattle.gov"/>
 </node>
 <node id="4555813144" visible="true" version="2" changeset="83572086" timestamp="2020-04-15T07:23:11Z" user="vsahith" uid="9196087" lat="47.6916685" lon="-122.3445485"/>
 <node id="4555813145" visible="true" version="2" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6916645" lon="-122.3438646"/>
 <node id="5443848862" visible="true" version="1" changeset="56768861" timestamp="2018-02-28T21:31:27Z" user="shpakudza" uid="6794149" lat="47.6927403" lon="-122.3448792"/>
 <node id="5443848863" visible="true" version="1" changeset="56768861" timestamp="2018-02-28T21:31:27Z" user="shpakudza" uid="6794149" lat="47.6921327" lon="-122.3448752"/>
 <node id="5443848864" visible="true" version="1" changeset="56768861" timestamp="2018-02-28T21:31:27Z" user="shpakudza" uid="6794149" lat="47.6924215" lon="-122.3448873"/>
 <node id="5443848865" visible="true" version="1" changeset="56768861" timestamp="2018-02-28T21:31:27Z" user="shpakudza" uid="6794149" lat="47.6924261" lon="-122.3450696"/>
 <node id="5443848866" visible="true" version="1" changeset="56768861" timestamp="2018-02-28T21:31:27Z" user="shpakudza" uid="6794149" lat="47.6924468" lon="-122.3450857"/>
 <node id="5443848867" visible="true" version="1" changeset="56768861" timestamp="2018-02-28T21:31:27Z" user="shpakudza" uid="6794149" lat="47.6927410" lon="-122.3451045"/>
 <node id="5443848870" visible="true" version="1" changeset="56768861" timestamp="2018-02-28T21:31:27Z" user="shpakudza" uid="6794149" lat="47.6916804" lon="-122.3448859"/>
 <node id="5443848871" visible="true" version="1" changeset="56768861" timestamp="2018-02-28T21:31:27Z" user="shpakudza" uid="6794149" lat="47.6918032" lon="-122.3448819"/>
 <node id="5443848872" visible="true" version="1" changeset="56768861" timestamp="2018-02-28T21:31:27Z" user="shpakudza" uid="6794149" lat="47.6918429" lon="-122.3449047"/>
 <node id="5443848873" visible="true" version="1" changeset="56768861" timestamp="2018-02-28T21:31:27Z" user="shpakudza" uid="6794149" lat="47.6918510" lon="-122.3449221"/>
 <node id="5443848874" visible="true" version="1" changeset="56768861" timestamp="2018-02-28T21:31:27Z" user="shpakudza" uid="6794149" lat="47.6918781" lon="-122.3449436"/>
 <node id="5443848875" visible="true" version="1" changeset="56768861" timestamp="2018-02-28T21:31:27Z" user="shpakudza" uid="6794149" lat="47.6920176" lon="-122.3449637"/>
 <node id="6888045645" visible="true" version="1" changeset="75815354" timestamp="2019-10-17T07:02:03Z" user="uhhany1" uid="10116163" lat="47.6923789" lon="-122.3438555"/>
 <node id="6888045648" visible="true" version="2" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6920146" lon="-122.3443297">
  <tag k="barrier" v="gate"/>
 </node>
 <node id="6888045649" visible="true" version="1" changeset="75815354" timestamp="2019-10-17T07:02:03Z" user="uhhany1" uid="10116163" lat="47.6920175" lon="-122.3442648"/>
 <node id="6888045650" visible="true" version="1" changeset="75815354" timestamp="2019-10-17T07:02:03Z" user="uhhany1" uid="10116163" lat="47.6920202" lon="-122.3442070"/>
 <node id="6888045651" visible="true" version="1" changeset="75815354" timestamp="2019-10-17T07:02:03Z" user="uhhany1" uid="10116163" lat="47.6920548" lon="-122.3441537"/>
 <node id="6888045652" visible="true" version="1" changeset="75815354" timestamp="2019-10-17T07:02:03Z" user="uhhany1" uid="10116163" lat="47.6920553" lon="-122.3439100"/>
 <node id="6888045653" visible="true" version="1" changeset="75815354" timestamp="2019-10-17T07:02:03Z" user="uhhany1" uid="10116163" lat="47.6920374" lon="-122.3438357"/>
 <node id="6888045654" visible="true" version="1" changeset="75815354" timestamp="2019-10-17T07:02:03Z" user="uhhany1" uid="10116163" lat="47.6919822" lon="-122.3438138"/>
 <node id="6888045655" visible="true" version="1" changeset="75815354" timestamp="2019-10-17T07:02:03Z" user="uhhany1" uid="10116163" lat="47.6919793" lon="-122.3437646"/>
 <node id="6888045656" visible="true" version="1" changeset="75815354" timestamp="2019-10-17T07:02:03Z" user="uhhany1" uid="10116163" lat="47.6919763" lon="-122.3436226">
  <tag k="barrier" v="gate"/>
 </node>
 <node id="6888045657" visible="true" version="1" changeset="75815354" timestamp="2019-10-17T07:02:03Z" user="uhhany1" uid="10116163" lat="47.6919712" lon="-122.3434652"/>
 <node id="7404463392" visible="true" version="1" changeset="83572086" timestamp="2020-04-15T07:23:11Z" user="vsahith" uid="9196087" lat="47.6918999" lon="-122.3446244"/>
 <node id="7404463393" visible="true" version="1" changeset="83572086" timestamp="2020-04-15T07:23:11Z" user="vsahith" uid="9196087" lat="47.6921558" lon="-122.3446244"/>
 <node id="7404463394" visible="true" version="1" changeset="83572086" timestamp="2020-04-15T07:23:11Z" user="vsahith" uid="9196087" lat="47.6921688" lon="-122.3444997"/>
 <node id="7404463395" visible="true" version="1" changeset="83572086" timestamp="2020-04-15T07:23:11Z" user="vsahith" uid="9196087" lat="47.6918907" lon="-122.3444903"/>
 <node id="7404463396" visible="true" version="1" changeset="83572086" timestamp="2020-04-15T07:23:11Z" user="vsahith" uid="9196087" lat="47.6917914" lon="-122.3445547"/>
 <node id="7404463397" visible="true" version="1" changeset="83572086" timestamp="2020-04-15T07:23:11Z" user="vsahith" uid="9196087" lat="47.6922247" lon="-122.3445573"/>
 <node id="7404463398" visible="true" version="1" changeset="83572086" timestamp="2020-04-15T07:23:11Z" user="vsahith" uid="9196087" lat="47.6920142" lon="-122.3444902"/>
 <node id="7654649122" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6941123" lon="-122.3444094">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649131" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6941126" lon="-122.3443966"/>
 <node id="7654649132" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6941289" lon="-122.3443966"/>
 <node id="7654649133" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6941352" lon="-122.3443874"/>
 <node id="7654649134" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6941293" lon="-122.3435814"/>
 <node id="7654649135" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6924681" lon="-122.3435654"/>
 <node id="7654649136" visible="true" version="3" changeset="119981921" timestamp="2022-04-21T05:45:49Z" user="Cy R" uid="15592083" lat="47.6941308" lon="-122.3437912">
  <tag k="crossing" v="unmarked"/>
  <tag k="highway" v="crossing"/>
  <tag k="tactile_paving" v="no"/>
 </node>
 <node id="7654649137" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6924695" lon="-122.3438570">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654649138" visible="true" version="3" changeset="119981921" timestamp="2022-04-21T05:45:50Z" user="Cy R" uid="15592083" lat="47.6941329" lon="-122.3440831">
  <tag k="crossing" v="unmarked"/>
  <tag k="highway" v="crossing"/>
  <tag k="tactile_paving" v="no"/>
 </node>
 <node id="7654649139" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6927384" lon="-122.3443698">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654649140" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6933850" lon="-122.3443824">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654649141" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6934943" lon="-122.3443845">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654649142" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6937964" lon="-122.3443904">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654649161" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6934100" lon="-122.3443829"/>
 <node id="7654649162" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6926873" lon="-122.3447192">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649166" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6924765" lon="-122.3443843">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649167" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6924233" lon="-122.3443500">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649168" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6924723" lon="-122.3446893">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649169" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6923072" lon="-122.3446868">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649170" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6923336" lon="-122.3443488">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649171" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6923076" lon="-122.3443793">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649172" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6920725" lon="-122.3446924">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649173" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6920522" lon="-122.3447326">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649174" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6919744" lon="-122.3447519">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649175" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6919489" lon="-122.3446891">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649176" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6920887" lon="-122.3443795">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654649177" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6919354" lon="-122.3443768">
  <tag k="barrier" v="kerb"/>
  <tag k="kerb" v="lowered"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654686189" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6926674" lon="-122.3447197"/>
 <node id="7654686190" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6926605" lon="-122.3447060"/>
 <node id="7654686191" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6920854" lon="-122.3447040"/>
 <node id="7654686192" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6920827" lon="-122.3451560"/>
 <node id="7654686193" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6920714" lon="-122.3447418"/>
 <node id="7654686194" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6920852" lon="-122.3447422"/>
 <node id="7654686195" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6923079" lon="-122.3447047"/>
 <node id="7654686196" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6924722" lon="-122.3447053"/>
 <node id="7654686197" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6927778" lon="-122.3443705"/>
 <node id="7654686198" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6923827" lon="-122.3443495">
  <tag k="crossing" v="unmarked"/>
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686199" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6923074" lon="-122.3445574">
  <tag k="crossing" v="unmarked"/>
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686200" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6924742" lon="-122.3445551">
  <tag k="crossing" v="unmarked"/>
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686201" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6924563" lon="-122.3443212"/>
 <node id="7654686202" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6924718" lon="-122.3443212"/>
 <node id="7654686203" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6924764" lon="-122.3443646"/>
 <node id="7654686204" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6923124" lon="-122.3443265"/>
 <node id="7654686205" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6923013" lon="-122.3443491"/>
 <node id="7654686206" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6922925" lon="-122.3443694"/>
 <node id="7654686207" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6906753" lon="-122.3443414"/>
 <node id="7654686208" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6906457" lon="-122.3442908"/>
 <node id="7654686209" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6906423" lon="-122.3435557"/>
 <node id="7654686210" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6906490" lon="-122.3435398"/>
 <node id="7654686211" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6916176" lon="-122.3435577"/>
 <node id="7654686212" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6923050" lon="-122.3435557"/>
 <node id="7654686213" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6920884" lon="-122.3443659"/>
 <node id="7654686214" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6919348" lon="-122.3443632"/>
 <node id="7654686215" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6919421" lon="-122.3447517"/>
 <node id="7654686216" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6919416" lon="-122.3447036"/>
 <node id="7654686217" visible="true" version="2" changeset="94925945" timestamp="2020-11-28T04:54:49Z" user="Dustin C" uid="449970" lat="47.6919534" lon="-122.3471490"/>
 <node id="7654686218" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6919315" lon="-122.3446968"/>
 <node id="7654686219" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6913610" lon="-122.3446905"/>
 <node id="7654686220" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6913530" lon="-122.3447064"/>
 <node id="7654686221" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6913556" lon="-122.3451924"/>
 <node id="7654686222" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6913532" lon="-122.3447359"/>
 <node id="7654686232" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6906579" lon="-122.3443118"/>
 <node id="7654686234" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6906616" lon="-122.3443181"/>
 <node id="7654686235" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6920902" lon="-122.3445098"/>
 <node id="7654686236" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6920902" lon="-122.3445493"/>
 <node id="7654686237" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6919369" lon="-122.3445071"/>
 <node id="7654686238" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6919369" lon="-122.3445465"/>
 <node id="7654686239" visible="true" version="3" changeset="121121658" timestamp="2022-05-18T00:58:05Z" user="Cy R" uid="15592083" lat="47.6920183" lon="-122.3447410">
  <tag k="crossing" v="unmarked"/>
  <tag k="crossing:island" v="no"/>
  <tag k="highway" v="crossing"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654686240" visible="true" version="2" changeset="121121658" timestamp="2022-05-18T00:57:36Z" user="Cy R" uid="15592083" lat="47.6919437" lon="-122.3446268">
  <tag k="crossing" v="unmarked"/>
  <tag k="highway" v="crossing"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654686241" visible="true" version="2" changeset="121121658" timestamp="2022-05-18T00:57:29Z" user="Cy R" uid="15592083" lat="47.6920805" lon="-122.3446280">
  <tag k="crossing" v="unmarked"/>
  <tag k="highway" v="crossing"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654686242" visible="true" version="2" changeset="121121658" timestamp="2022-05-18T00:57:29Z" user="Cy R" uid="15592083" lat="47.6920900" lon="-122.3444949">
  <tag k="crossing" v="unmarked"/>
  <tag k="highway" v="crossing"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654686243" visible="true" version="2" changeset="121121658" timestamp="2022-05-18T00:57:36Z" user="Cy R" uid="15592083" lat="47.6919367" lon="-122.3444903">
  <tag k="crossing" v="unmarked"/>
  <tag k="highway" v="crossing"/>
  <tag k="tactile_paving" v="yes"/>
 </node>
 <node id="7654686244" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6918619" lon="-122.3435592"/>
 <node id="7654686245" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6919742" lon="-122.3435583">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686246" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6908610" lon="-122.3435437">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686247" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6915431" lon="-122.3435563">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686248" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6906433" lon="-122.3437629">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686249" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6907275" lon="-122.3443423">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686250" visible="true" version="3" changeset="120995612" timestamp="2022-05-14T23:26:57Z" user="Cy R" uid="15592083" lat="47.6910105" lon="-122.3443472">
  <tag k="crossing" v="unmarked"/>
  <tag k="highway" v="crossing"/>
  <tag k="tactile_paving" v="no"/>
 </node>
 <node id="7654686251" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6911438" lon="-122.3443495">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686252" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6915455" lon="-122.3443565">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686253" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6915990" lon="-122.3437176"/>
 <node id="7654686254" visible="true" version="2" changeset="87794275" timestamp="2020-07-10T05:09:17Z" user="VigilantPenguin" uid="10353387" lat="47.6916003" lon="-122.3434626"/>
 <node id="7654686255" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6915999" lon="-122.3435574">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686256" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6916674" lon="-122.3443586">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686259" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6913472" lon="-122.3443530"/>
 <node id="7654686260" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6912384" lon="-122.3443511"/>
 <node id="7654686280" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6920145" lon="-122.3443646">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686281" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6919431" lon="-122.3449530">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7654686282" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387" lat="47.6913540" lon="-122.3448957">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="7701140504" visible="true" version="1" changeset="87794275" timestamp="2020-07-10T05:09:17Z" user="VigilantPenguin" uid="10353387" lat="47.6906594" lon="-122.3435400"/>
 <node id="7712126658" visible="true" version="1" changeset="87946438" timestamp="2020-07-14T00:26:16Z" user="VigilantPenguin" uid="10353387" lat="47.6923763" lon="-122.3435296">
  <tag k="crossing" v="unmarked"/>
  <tag k="highway" v="crossing"/>
 </node>
 <node id="8172634374" visible="true" version="1" changeset="94925945" timestamp="2020-11-28T04:54:49Z" user="Dustin C" uid="449970" lat="47.6926705" lon="-122.3448808"/>
 <node id="8172634375" visible="true" version="1" changeset="94925945" timestamp="2020-11-28T04:54:49Z" user="Dustin C" uid="449970" lat="47.6926718" lon="-122.3450995"/>
 <node id="8172634378" visible="true" version="1" changeset="94925945" timestamp="2020-11-28T04:54:49Z" user="Dustin C" uid="449970" lat="47.6913657" lon="-122.3471409"/>
 <node id="8719240051" visible="true" version="1" changeset="104467170" timestamp="2021-05-10T17:34:26Z" user="VigilantPenguin" uid="10353387" lat="47.6923427" lon="-122.3445570"/>
 <node id="9029531320" visible="true" version="1" changeset="110132302" timestamp="2021-08-23T18:31:46Z" user="austinsnow" uid="11517143" lat="47.6920216" lon="-122.3471731"/>
 <node id="9146790627" visible="true" version="1" changeset="112094668" timestamp="2021-10-04T20:34:07Z" user="jmilot" uid="9342683" lat="47.6920215" lon="-122.3471392">
  <tag k="crossing" v="unmarked"/>
  <tag k="highway" v="crossing"/>
 </node>
 <node id="9580500968" visible="true" version="1" changeset="118510595" timestamp="2022-03-15T12:55:28Z" user="mariusg_telenav" uid="10345763" lat="47.6922004" lon="-122.3442938"/>
 <node id="9580500969" visible="true" version="1" changeset="118510595" timestamp="2022-03-15T12:55:28Z" user="mariusg_telenav" uid="10345763" lat="47.6921977" lon="-122.3441490"/>
 <node id="9580500970" visible="true" version="1" changeset="118510595" timestamp="2022-03-15T12:55:28Z" user="mariusg_telenav" uid="10345763" lat="47.6923811" lon="-122.3441456"/>
 <node id="9595183559" visible="true" version="1" changeset="118743296" timestamp="2022-03-21T16:29:47Z" user="Andrew Kvalheim" uid="5849225" lat="47.6929218" lon="-122.3443733">
  <tag k="highway" v="crossing"/>
 </node>
 <node id="9595183560" visible="true" version="1" changeset="118743296" timestamp="2022-03-21T16:29:47Z" user="Andrew Kvalheim" uid="5849225" lat="47.6923107" lon="-122.3441469">
  <tag k="highway" v="crossing"/>
 </node>
 <way id="36954059" visible="true" version="15" changeset="118510595" timestamp="2022-03-15T12:55:28Z" user="mariusg_telenav" uid="10345763">
  <nd ref="429692074"/>
  <nd ref="7654686198"/>
  <nd ref="9580500970"/>
  <nd ref="6888045645"/>
  <nd ref="7712126658"/>
  <nd ref="1708948597"/>
  <tag k="highway" v="unclassified"/>
  <tag k="lanes" v="2"/>
  <tag k="maxspeed" v="20 mph"/>
  <tag k="name" v="North 88th Street"/>
  <tag k="tiger:cfcc" v="A41"/>
  <tag k="tiger:county" v="King, WA"/>
  <tag k="tiger:name_base" v="88th"/>
  <tag k="tiger:name_direction_prefix" v="N"/>
  <tag k="tiger:name_type" v="St"/>
 </way>
 <way id="38931554" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:31Z" user="zephyr" uid="121241">
  <nd ref="462671283"/>
  <nd ref="462671296"/>
  <nd ref="462671246"/>
  <nd ref="462671255"/>
  <nd ref="462671283"/>
  <tag k="landuse" v="residential"/>
  <tag k="source" v="yahoo_wms;knowledge"/>
 </way>
 <way id="38931558" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:32Z" user="zephyr" uid="121241">
  <nd ref="462671315"/>
  <nd ref="462671296"/>
  <nd ref="462671283"/>
  <nd ref="462671323"/>
  <nd ref="462671315"/>
  <tag k="landuse" v="retail"/>
  <tag k="source" v="yahoo_wms;knowledge"/>
 </way>
 <way id="38931562" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:33Z" user="zephyr" uid="121241">
  <nd ref="462671344"/>
  <nd ref="462671315"/>
  <nd ref="462671323"/>
  <nd ref="462671358"/>
  <nd ref="462671344"/>
  <tag k="landuse" v="commercial"/>
  <tag k="source" v="yahoo_wms;knowledge"/>
 </way>
 <way id="38931566" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:35Z" user="zephyr" uid="121241">
  <nd ref="462671384"/>
  <nd ref="462671344"/>
  <nd ref="462671358"/>
  <nd ref="462671400"/>
  <nd ref="462671384"/>
  <tag k="landuse" v="retail"/>
  <tag k="source" v="yahoo_wms;knowledge"/>
 </way>
 <way id="38931571" visible="true" version="1" changeset="2122614" timestamp="2009-08-12T19:57:37Z" user="zephyr" uid="121241">
  <nd ref="462671422"/>
  <nd ref="462671431"/>
  <nd ref="462671432"/>
  <nd ref="462671437"/>
  <nd ref="462671422"/>
  <tag k="landuse" v="retail"/>
  <tag k="source" v="yahoo_wms;knowledge"/>
 </way>
 <way id="38944497" visible="true" version="1" changeset="2125126" timestamp="2009-08-13T00:40:41Z" user="zephyr" uid="121241">
  <nd ref="462969792"/>
  <nd ref="462969802"/>
  <nd ref="462969803"/>
  <nd ref="462969804"/>
  <nd ref="462969792"/>
  <tag k="landuse" v="retail"/>
  <tag k="source" v="yahoo_wms;knowledge"/>
 </way>
 <way id="38944503" visible="true" version="1" changeset="2125126" timestamp="2009-08-13T00:40:43Z" user="zephyr" uid="121241">
  <nd ref="462969811"/>
  <nd ref="462969821"/>
  <nd ref="462969829"/>
  <nd ref="462969834"/>
  <nd ref="462969811"/>
  <tag k="landuse" v="retail"/>
  <tag k="source" v="yahoo_wms;knowledge"/>
 </way>
 <way id="55379461" visible="true" version="4" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="2316282968"/>
  <nd ref="695734916"/>
  <nd ref="7654686211"/>
  <nd ref="695734913"/>
  <nd ref="2316282761"/>
  <nd ref="695734909"/>
  <nd ref="2316282859"/>
  <nd ref="2316282877"/>
  <nd ref="695734906"/>
  <nd ref="2316282890"/>
  <nd ref="2316282967"/>
  <nd ref="7654686244"/>
  <nd ref="2316282968"/>
  <tag k="addr:housenumber" v="8610"/>
  <tag k="addr:postcode" v="98103"/>
  <tag k="addr:street" v="Aurora Avenue North"/>
  <tag k="building" v="yes"/>
  <tag k="name" v="Blumenthal Uniforms &amp; Equipment"/>
  <tag k="shop" v="clothes"/>
  <tag k="source" v="data.seattle.gov"/>
  <tag k="website" v="http://www.blumenthaluniforms.com/"/>
 </way>
 <way id="222689296" visible="true" version="2" changeset="46588599" timestamp="2017-03-05T06:53:05Z" user="Paul McCombs" uid="1778296">
  <nd ref="2316283270"/>
  <nd ref="2316283362"/>
  <nd ref="2316283361"/>
  <nd ref="2316283368"/>
  <nd ref="2316283367"/>
  <nd ref="2316283364"/>
  <nd ref="2316283363"/>
  <nd ref="2316283319"/>
  <nd ref="2316283318"/>
  <nd ref="2316283265"/>
  <nd ref="2316283270"/>
  <tag k="addr:city" v="Seattle"/>
  <tag k="addr:housenumber" v="8800"/>
  <tag k="addr:postcode" v="98103"/>
  <tag k="addr:street" v="Aurora Avenue North"/>
  <tag k="building" v="yes"/>
  <tag k="name" v="Aurora Rents"/>
  <tag k="shop" v="rental"/>
  <tag k="source" v="King County GIS;data.seattle.gov"/>
 </way>
 <way id="459849852" visible="true" version="2" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="4555813144"/>
  <nd ref="7654686256"/>
  <nd ref="4555813145"/>
  <nd ref="7654686253"/>
  <nd ref="7654686255"/>
  <nd ref="7654686254"/>
  <tag k="highway" v="service"/>
  <tag k="oneway" v="yes"/>
  <tag k="service" v="parking_aisle"/>
 </way>
 <way id="518371186" visible="true" version="6" changeset="104467170" timestamp="2021-05-10T17:34:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="7404463396"/>
  <nd ref="4555813144"/>
  <tag k="access:lanes:backward" v="yes|yes|no"/>
  <tag k="access:lanes:forward" v="yes|yes|no"/>
  <tag k="bus:backward" v="designated"/>
  <tag k="bus:forward" v="designated"/>
  <tag k="bus:lanes:backward" v="yes|yes|designated"/>
  <tag k="bus:lanes:forward" v="yes|yes|designated"/>
  <tag k="highway" v="primary"/>
  <tag k="lanes" v="5"/>
  <tag k="lanes:backward" v="2"/>
  <tag k="lanes:both_ways" v="1"/>
  <tag k="lanes:forward" v="2"/>
  <tag k="maxspeed" v="30 mph"/>
  <tag k="name" v="Aurora Avenue North"/>
  <tag k="old_ref" v="US 99;PSH 1"/>
  <tag k="parking:lane:both" v="no_stopping"/>
  <tag k="ref" v="WA 99"/>
  <tag k="surface" v="asphalt"/>
  <tag k="turn:lanes:both_ways" v="left"/>
 </way>
 <way id="518371192" visible="true" version="7" changeset="104467170" timestamp="2021-05-10T17:34:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="53178613"/>
  <nd ref="7654686200"/>
  <nd ref="429692074"/>
  <tag k="access:lanes:backward" v="yes|yes|no"/>
  <tag k="access:lanes:forward" v="yes|yes|no"/>
  <tag k="bus:backward" v="designated"/>
  <tag k="bus:forward" v="designated"/>
  <tag k="bus:lanes:backward" v="yes|yes|designated"/>
  <tag k="bus:lanes:forward" v="yes|yes|designated"/>
  <tag k="highway" v="primary"/>
  <tag k="lanes" v="5"/>
  <tag k="lanes:backward" v="2"/>
  <tag k="lanes:both_ways" v="1"/>
  <tag k="lanes:forward" v="2"/>
  <tag k="maxspeed" v="30 mph"/>
  <tag k="name" v="Aurora Avenue North"/>
  <tag k="old_ref" v="US 99;PSH 1"/>
  <tag k="parking:lane:both" v="no_stopping"/>
  <tag k="ref" v="WA 99"/>
  <tag k="surface" v="asphalt"/>
  <tag k="turn:lanes:both_ways" v="left"/>
 </way>
 <way id="565152048" visible="true" version="3" changeset="118440255" timestamp="2022-03-13T17:56:52Z" user="aldimond" uid="250336">
  <nd ref="5443848863"/>
  <nd ref="5443848864"/>
  <nd ref="8172634374"/>
  <nd ref="5443848862"/>
  <tag k="highway" v="service"/>
  <tag k="service" v="parking_aisle"/>
 </way>
 <way id="565152049" visible="true" version="3" changeset="118440255" timestamp="2022-03-13T17:56:52Z" user="aldimond" uid="250336">
  <nd ref="5443848867"/>
  <nd ref="8172634375"/>
  <nd ref="5443848866"/>
  <nd ref="5443848865"/>
  <nd ref="5443848864"/>
  <tag k="highway" v="service"/>
  <tag k="service" v="parking_aisle"/>
 </way>
 <way id="565152051" visible="true" version="3" changeset="118440255" timestamp="2022-03-13T17:56:52Z" user="aldimond" uid="250336">
  <nd ref="5443848875"/>
  <nd ref="7654686281"/>
  <nd ref="5443848874"/>
  <nd ref="5443848873"/>
  <nd ref="5443848872"/>
  <nd ref="5443848871"/>
  <nd ref="5443848870"/>
  <tag k="highway" v="service"/>
  <tag k="service" v="parking_aisle"/>
 </way>
 <way id="735407291" visible="true" version="3" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="7404463398"/>
  <nd ref="7654686280"/>
  <nd ref="6888045648"/>
  <nd ref="6888045649"/>
  <nd ref="6888045650"/>
  <nd ref="6888045651"/>
  <nd ref="6888045652"/>
  <nd ref="6888045653"/>
  <nd ref="6888045654"/>
  <nd ref="6888045655"/>
  <nd ref="6888045656"/>
  <nd ref="7654686245"/>
  <nd ref="6888045657"/>
  <tag k="access" v="private"/>
  <tag k="highway" v="service"/>
 </way>
 <way id="792024856" visible="true" version="5" changeset="121121672" timestamp="2022-05-18T00:58:04Z" user="Cy R" uid="15592083">
  <nd ref="53122087"/>
  <nd ref="7654686240"/>
  <nd ref="7404463392"/>
  <nd ref="7404463396"/>
  <tag k="access:lanes:backward" v="yes|yes|no"/>
  <tag k="access:lanes:forward" v="yes|yes|no"/>
  <tag k="bus:backward" v="designated"/>
  <tag k="bus:forward" v="designated"/>
  <tag k="bus:lanes:backward" v="yes|yes|designated"/>
  <tag k="bus:lanes:forward" v="yes|yes|designated"/>
  <tag k="highway" v="primary"/>
  <tag k="lanes" v="2"/>
  <tag k="lit" v="yes"/>
  <tag k="maxspeed" v="30 mph"/>
  <tag k="name" v="Aurora Avenue North"/>
  <tag k="old_ref" v="US 99;PSH 1"/>
  <tag k="oneway" v="yes"/>
  <tag k="parking:lane:both" v="no_stopping"/>
  <tag k="ref" v="WA 99"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="792024857" visible="true" version="7" changeset="121121759" timestamp="2022-05-18T00:58:45Z" user="Cy R" uid="15592083">
  <nd ref="7404463397"/>
  <nd ref="7404463393"/>
  <nd ref="7654686241"/>
  <nd ref="53122087"/>
  <tag k="access:lanes:backward" v="yes|yes|no"/>
  <tag k="access:lanes:forward" v="yes|yes|no"/>
  <tag k="bus:backward" v="designated"/>
  <tag k="bus:forward" v="designated"/>
  <tag k="bus:lanes:backward" v="yes|yes|designated"/>
  <tag k="bus:lanes:forward" v="yes|yes|designated"/>
  <tag k="cycleway:right" v="no"/>
  <tag k="highway" v="primary"/>
  <tag k="lanes" v="2"/>
  <tag k="lit" v="yes"/>
  <tag k="maxspeed" v="30 mph"/>
  <tag k="name" v="Aurora Avenue North"/>
  <tag k="old_ref" v="US 99;PSH 1"/>
  <tag k="oneway" v="yes"/>
  <tag k="parking:lane:both" v="no_stopping"/>
  <tag k="ref" v="WA 99"/>
  <tag k="sidewalk:left" v="no"/>
  <tag k="sidewalk:right" v="separate"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="792024858" visible="true" version="7" changeset="121121759" timestamp="2022-05-18T00:59:52Z" user="Cy R" uid="15592083">
  <nd ref="7404463396"/>
  <nd ref="7404463395"/>
  <nd ref="7654686243"/>
  <nd ref="7404463398"/>
  <tag k="access:lanes:backward" v="yes|yes|no"/>
  <tag k="access:lanes:forward" v="yes|yes|no"/>
  <tag k="bus:backward" v="designated"/>
  <tag k="bus:forward" v="designated"/>
  <tag k="bus:lanes:backward" v="yes|yes|designated"/>
  <tag k="bus:lanes:forward" v="yes|yes|designated"/>
  <tag k="cycleway:right" v="no"/>
  <tag k="highway" v="primary"/>
  <tag k="lanes" v="2"/>
  <tag k="lit" v="yes"/>
  <tag k="maxspeed" v="30 mph"/>
  <tag k="name" v="Aurora Avenue North"/>
  <tag k="old_ref" v="US 99;PSH 1"/>
  <tag k="oneway" v="yes"/>
  <tag k="parking:lane:both" v="no_stopping"/>
  <tag k="ref" v="WA 99"/>
  <tag k="sidewalk:left" v="no"/>
  <tag k="sidewalk:right" v="separate"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="792024859" visible="true" version="7" changeset="121121759" timestamp="2022-05-18T00:59:12Z" user="Cy R" uid="15592083">
  <nd ref="7404463398"/>
  <nd ref="7654686242"/>
  <nd ref="7404463394"/>
  <nd ref="7404463397"/>
  <tag k="access:lanes:backward" v="yes|yes|no"/>
  <tag k="access:lanes:forward" v="yes|yes|no"/>
  <tag k="bus:backward" v="designated"/>
  <tag k="bus:forward" v="designated"/>
  <tag k="bus:lanes:backward" v="yes|yes|designated"/>
  <tag k="bus:lanes:forward" v="yes|yes|designated"/>
  <tag k="cycleway:right" v="no"/>
  <tag k="highway" v="primary"/>
  <tag k="lanes" v="2"/>
  <tag k="lit" v="yes"/>
  <tag k="maxspeed" v="30 mph"/>
  <tag k="name" v="Aurora Avenue North"/>
  <tag k="old_ref" v="US 99;PSH 1"/>
  <tag k="oneway" v="yes"/>
  <tag k="parking:lane:both" v="no_stopping"/>
  <tag k="ref" v="WA 99"/>
  <tag k="sidewalk:left" v="no"/>
  <tag k="sidewalk:right" v="separate"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="819689689" visible="true" version="2" changeset="118743296" timestamp="2022-03-21T16:29:47Z" user="Andrew Kvalheim" uid="5849225">
  <nd ref="7654649122"/>
  <nd ref="7654649131"/>
  <nd ref="7654649132"/>
  <nd ref="7654649133"/>
  <nd ref="7654649138"/>
  <nd ref="7654649136"/>
  <nd ref="7654649134"/>
  <nd ref="7654649135"/>
  <nd ref="7654649137"/>
  <nd ref="7654686202"/>
  <nd ref="7654686203"/>
  <nd ref="7654649139"/>
  <nd ref="7654686197"/>
  <nd ref="9595183559"/>
  <nd ref="7654649140"/>
  <nd ref="7654649161"/>
  <nd ref="7654649141"/>
  <nd ref="7654649142"/>
  <nd ref="7654649131"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689705" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="7654649162"/>
  <nd ref="7654686189"/>
  <nd ref="7654686190"/>
  <nd ref="7654686196"/>
  <nd ref="7654686195"/>
  <nd ref="7654686191"/>
  <nd ref="7654686194"/>
  <nd ref="7654686192"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689706" visible="true" version="3" changeset="121121672" timestamp="2022-05-18T00:58:21Z" user="Cy R" uid="15592083">
  <nd ref="7654649173"/>
  <nd ref="7654686193"/>
  <nd ref="7654686194"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
  <tag k="lit" v="yes"/>
  <tag k="surface" v="concrete"/>
 </way>
 <way id="819689707" visible="true" version="3" changeset="121121672" timestamp="2022-05-18T00:58:20Z" user="Cy R" uid="15592083">
  <nd ref="7654649172"/>
  <nd ref="7654686191"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
  <tag k="lit" v="yes"/>
  <tag k="surface" v="concrete"/>
 </way>
 <way id="819689708" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="7654649169"/>
  <nd ref="7654686195"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689709" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="7654649168"/>
  <nd ref="7654686196"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689711" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="7654649168"/>
  <nd ref="7654686200"/>
  <nd ref="7654649166"/>
  <tag k="crossing" v="unmarked"/>
  <tag k="footway" v="crossing"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689712" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="7654649169"/>
  <nd ref="7654686199"/>
  <nd ref="7654649171"/>
  <tag k="crossing" v="unmarked"/>
  <tag k="footway" v="crossing"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689713" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="7654649167"/>
  <nd ref="7654686198"/>
  <nd ref="7654649170"/>
  <tag k="crossing" v="unmarked"/>
  <tag k="footway" v="crossing"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689714" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="7654649167"/>
  <nd ref="7654686201"/>
  <nd ref="7654686202"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689715" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="7654649166"/>
  <nd ref="7654686203"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689716" visible="true" version="1" changeset="87167147" timestamp="2020-06-26T04:23:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="7654649170"/>
  <nd ref="7654686204"/>
  <nd ref="7654686205"/>
  <nd ref="7654649171"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689717" visible="true" version="2" changeset="87794275" timestamp="2020-07-10T05:09:17Z" user="VigilantPenguin" uid="10353387">
  <nd ref="7654686205"/>
  <nd ref="7654686206"/>
  <nd ref="7654686213"/>
  <nd ref="7654686280"/>
  <nd ref="7654686214"/>
  <nd ref="7654686256"/>
  <nd ref="7654686252"/>
  <nd ref="7654686259"/>
  <nd ref="7654686260"/>
  <nd ref="7654686251"/>
  <nd ref="7654686250"/>
  <nd ref="7654686249"/>
  <nd ref="7654686207"/>
  <nd ref="7654686234"/>
  <nd ref="7654686232"/>
  <nd ref="7654686208"/>
  <nd ref="7654686248"/>
  <nd ref="7654686209"/>
  <nd ref="7654686210"/>
  <nd ref="7701140504"/>
  <nd ref="7654686246"/>
  <nd ref="7654686247"/>
  <nd ref="7654686255"/>
  <nd ref="7654686211"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689718" visible="true" version="2" changeset="118743296" timestamp="2022-03-21T16:29:47Z" user="Andrew Kvalheim" uid="5849225">
  <nd ref="7654686204"/>
  <nd ref="9595183560"/>
  <nd ref="7654686212"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689719" visible="true" version="3" changeset="121121672" timestamp="2022-05-18T00:59:04Z" user="Cy R" uid="15592083">
  <nd ref="7654649176"/>
  <nd ref="7654686213"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
  <tag k="lit" v="yes"/>
  <tag k="surface" v="concrete"/>
 </way>
 <way id="819689720" visible="true" version="3" changeset="121121672" timestamp="2022-05-18T00:59:56Z" user="Cy R" uid="15592083">
  <nd ref="7654649177"/>
  <nd ref="7654686214"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
  <tag k="lit" v="yes"/>
  <tag k="surface" v="concrete"/>
 </way>
 <way id="819689721" visible="true" version="3" changeset="121121672" timestamp="2022-05-18T00:58:17Z" user="Cy R" uid="15592083">
  <nd ref="7654649174"/>
  <nd ref="7654686215"/>
  <nd ref="7654686216"/>
  <nd ref="7654649175"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
  <tag k="lit" v="yes"/>
  <tag k="surface" v="concrete"/>
 </way>
 <way id="819689722" visible="true" version="2" changeset="94925945" timestamp="2020-11-28T04:54:49Z" user="Dustin C" uid="449970">
  <nd ref="7654686215"/>
  <nd ref="7654686281"/>
  <nd ref="7654686217"/>
  <nd ref="8172634378"/>
  <nd ref="7654686221"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
 </way>
 <way id="819689723" visible="true" version="2" changeset="119981920" timestamp="2022-04-21T05:45:51Z" user="Cy R" uid="15592083">
  <nd ref="7654686216"/>
  <nd ref="7654686218"/>
  <nd ref="7654686219"/>
  <nd ref="7654686220"/>
  <nd ref="7654686222"/>
  <nd ref="7654686282"/>
  <nd ref="7654686221"/>
  <tag k="footway" v="sidewalk"/>
  <tag k="highway" v="footway"/>
  <tag k="surface" v="concrete"/>
 </way>
 <way id="819689732" visible="true" version="3" changeset="121121672" timestamp="2022-05-18T00:59:15Z" user="Cy R" uid="15592083">
  <nd ref="7654649176"/>
  <nd ref="7654686242"/>
  <nd ref="7654686235"/>
  <tag k="crossing" v="unmarked"/>
  <tag k="footway" v="crossing"/>
  <tag k="highway" v="footway"/>
  <tag k="lit" v="yes"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="819689733" visible="true" version="3" changeset="121121672" timestamp="2022-05-18T00:59:52Z" user="Cy R" uid="15592083">
  <nd ref="7654649177"/>
  <nd ref="7654686243"/>
  <nd ref="7654686237"/>
  <tag k="crossing" v="unmarked"/>
  <tag k="footway" v="crossing"/>
  <tag k="highway" v="footway"/>
  <tag k="lit" v="yes"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="819689734" visible="true" version="3" changeset="121121672" timestamp="2022-05-18T00:57:51Z" user="Cy R" uid="15592083">
  <nd ref="7654686238"/>
  <nd ref="7654686240"/>
  <nd ref="7654649175"/>
  <tag k="crossing" v="unmarked"/>
  <tag k="footway" v="crossing"/>
  <tag k="highway" v="footway"/>
  <tag k="lit" v="yes"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="819689735" visible="true" version="3" changeset="121121672" timestamp="2022-05-18T00:59:25Z" user="Cy R" uid="15592083">
  <nd ref="7654686237"/>
  <nd ref="7654686238"/>
  <tag k="crossing:island" v="yes"/>
  <tag k="footway" v="crossing"/>
  <tag k="highway" v="footway"/>
  <tag k="lit" v="yes"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="819689736" visible="true" version="3" changeset="121121672" timestamp="2022-05-18T00:58:28Z" user="Cy R" uid="15592083">
  <nd ref="7654686236"/>
  <nd ref="7654686241"/>
  <nd ref="7654649172"/>
  <tag k="crossing" v="unmarked"/>
  <tag k="footway" v="crossing"/>
  <tag k="highway" v="footway"/>
  <tag k="lit" v="yes"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="819689737" visible="true" version="3" changeset="121121672" timestamp="2022-05-18T00:58:55Z" user="Cy R" uid="15592083">
  <nd ref="7654686235"/>
  <nd ref="7654686236"/>
  <tag k="crossing:island" v="yes"/>
  <tag k="footway" v="crossing"/>
  <tag k="highway" v="footway"/>
  <tag k="lit" v="yes"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="819689738" visible="true" version="3" changeset="121121672" timestamp="2022-05-18T00:58:11Z" user="Cy R" uid="15592083">
  <nd ref="7654649174"/>
  <nd ref="7654686239"/>
  <nd ref="7654649173"/>
  <tag k="crossing" v="unmarked"/>
  <tag k="footway" v="crossing"/>
  <tag k="highway" v="footway"/>
  <tag k="lit" v="yes"/>
  <tag k="surface" v="asphalt"/>
 </way>
 <way id="893136311" visible="true" version="2" changeset="104467170" timestamp="2021-05-10T17:34:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="4555813144"/>
  <nd ref="1424516769"/>
  <tag k="access:lanes:backward" v="yes|yes|no"/>
  <tag k="access:lanes:forward" v="yes|yes|no"/>
  <tag k="bus:backward" v="designated"/>
  <tag k="bus:forward" v="designated"/>
  <tag k="bus:lanes:backward" v="yes|yes|designated"/>
  <tag k="bus:lanes:forward" v="yes|yes|designated"/>
  <tag k="highway" v="primary"/>
  <tag k="lanes" v="5"/>
  <tag k="lanes:backward" v="2"/>
  <tag k="lanes:both_ways" v="1"/>
  <tag k="lanes:forward" v="2"/>
  <tag k="maxspeed" v="30 mph"/>
  <tag k="name" v="Aurora Avenue North"/>
  <tag k="old_ref" v="US 99;PSH 1"/>
  <tag k="parking:lane:both" v="no_stopping"/>
  <tag k="ref" v="WA 99"/>
  <tag k="surface" v="asphalt"/>
  <tag k="turn:lanes:both_ways" v="left"/>
 </way>
 <way id="893136312" visible="true" version="2" changeset="104467170" timestamp="2021-05-10T17:34:26Z" user="VigilantPenguin" uid="10353387">
  <nd ref="429692074"/>
  <nd ref="8719240051"/>
  <nd ref="7654686199"/>
  <nd ref="7404463397"/>
  <tag k="access:lanes:backward" v="yes|yes|no"/>
  <tag k="access:lanes:forward" v="yes|yes|no"/>
  <tag k="bus:backward" v="designated"/>
  <tag k="bus:forward" v="designated"/>
  <tag k="bus:lanes:backward" v="yes|yes|designated"/>
  <tag k="bus:lanes:forward" v="yes|yes|designated"/>
  <tag k="highway" v="primary"/>
  <tag k="lanes" v="5"/>
  <tag k="lanes:backward" v="2"/>
  <tag k="lanes:both_ways" v="1"/>
  <tag k="lanes:forward" v="2"/>
  <tag k="maxspeed" v="30 mph"/>
  <tag k="name" v="Aurora Avenue North"/>
  <tag k="old_ref" v="US 99;PSH 1"/>
  <tag k="parking:lane:both" v="no_stopping"/>
  <tag k="ref" v="WA 99"/>
  <tag k="surface" v="asphalt"/>
  <tag k="turn:lanes:both_ways" v="left"/>
 </way>
 <way id="975775897" visible="true" version="3" changeset="112094668" timestamp="2021-10-04T20:34:07Z" user="jmilot" uid="9342683">
  <nd ref="9029531320"/>
  <nd ref="9146790627"/>
  <nd ref="5443848875"/>
  <nd ref="7654686239"/>
  <nd ref="53122087"/>
  <tag k="highway" v="residential"/>
  <tag k="lanes" v="2"/>
  <tag k="maxspeed" v="20 mph"/>
  <tag k="name" v="North 87th Street"/>
  <tag k="surface" v="asphalt"/>
  <tag k="tiger:cfcc" v="A41"/>
  <tag k="tiger:county" v="King, WA"/>
  <tag k="tiger:name_base" v="87th"/>
  <tag k="tiger:name_direction_prefix" v="N"/>
  <tag k="tiger:name_type" v="St"/>
 </way>
 <way id="1040519450" visible="true" version="2" changeset="118743296" timestamp="2022-03-21T16:29:47Z" user="Andrew Kvalheim" uid="5849225">
  <nd ref="9580500970"/>
  <nd ref="9595183560"/>
  <nd ref="9580500969"/>
  <nd ref="9580500968"/>
  <tag k="highway" v="service"/>
 </way>
 <relation id="2317217" visible="true" version="630" changeset="121034847" timestamp="2022-05-16T06:30:38Z" user="kmarkish_lyft" uid="11824233">
  <member type="way" ref="936428114" role=""/>
  <member type="way" ref="936428113" role=""/>
  <member type="way" ref="476867469" role=""/>
  <member type="way" ref="936428109" role=""/>
  <member type="way" ref="936428112" role=""/>
  <member type="way" ref="936428111" role=""/>
  <member type="way" ref="936428110" role=""/>
  <member type="way" ref="214811141" role=""/>
  <member type="way" ref="52328314" role=""/>
  <member type="way" ref="163116338" role=""/>
  <member type="way" ref="163116339" role=""/>
  <member type="way" ref="815232324" role=""/>
  <member type="way" ref="160270971" role=""/>
  <member type="way" ref="163860130" role=""/>
  <member type="way" ref="778159683" role=""/>
  <member type="way" ref="5868568" role=""/>
  <member type="way" ref="464823438" role=""/>
  <member type="way" ref="5865139" role=""/>
  <member type="way" ref="173554520" role=""/>
  <member type="way" ref="1060088556" role=""/>
  <member type="way" ref="145302960" role=""/>
  <member type="way" ref="418541210" role=""/>
  <member type="way" ref="1060088557" role=""/>
  <member type="way" ref="1060088561" role=""/>
  <member type="way" ref="418541213" role=""/>
  <member type="way" ref="163986410" role=""/>
  <member type="way" ref="760230560" role=""/>
  <member type="way" ref="163986411" role=""/>
  <member type="way" ref="418541209" role=""/>
  <member type="way" ref="145302959" role=""/>
  <member type="way" ref="399567164" role=""/>
  <member type="way" ref="1060088575" role=""/>
  <member type="way" ref="145302955" role=""/>
  <member type="way" ref="1060088574" role=""/>
  <member type="way" ref="1060088576" role=""/>
  <member type="way" ref="1060088569" role=""/>
  <member type="way" ref="418788329" role=""/>
  <member type="way" ref="418788349" role=""/>
  <member type="way" ref="418788343" role=""/>
  <member type="way" ref="1060088568" role=""/>
  <member type="way" ref="1060088567" role=""/>
  <member type="way" ref="1060088566" role=""/>
  <member type="way" ref="1060088565" role=""/>
  <member type="way" ref="399567163" role=""/>
  <member type="way" ref="418788335" role=""/>
  <member type="way" ref="418788340" role=""/>
  <member type="way" ref="418792142" role=""/>
  <member type="way" ref="418792143" role=""/>
  <member type="way" ref="418792144" role=""/>
  <member type="way" ref="52328336" role=""/>
  <member type="way" ref="465520094" role=""/>
  <member type="way" ref="418797738" role=""/>
  <member type="way" ref="52328340" role=""/>
  <member type="way" ref="164075310" role=""/>
  <member type="way" ref="105181323" role=""/>
  <member type="way" ref="108384584" role=""/>
  <member type="way" ref="46418178" role=""/>
  <member type="way" ref="5867252" role=""/>
  <member type="way" ref="34944770" role=""/>
  <member type="way" ref="418739377" role=""/>
  <member type="way" ref="52328300" role=""/>
  <member type="way" ref="418739375" role=""/>
  <member type="way" ref="749420353" role=""/>
  <member type="way" ref="749420351" role=""/>
  <member type="way" ref="749420352" role=""/>
  <member type="way" ref="418739371" role=""/>
  <member type="way" ref="418739370" role=""/>
  <member type="way" ref="1021086813" role=""/>
  <member type="way" ref="418739369" role=""/>
  <member type="way" ref="1021086811" role=""/>
  <member type="way" ref="418739372" role=""/>
  <member type="way" ref="418739374" role=""/>
  <member type="way" ref="418902638" role=""/>
  <member type="way" ref="418902639" role=""/>
  <member type="way" ref="418739376" role=""/>
  <member type="way" ref="418739378" role=""/>
  <member type="way" ref="418739373" role=""/>
  <member type="way" ref="118473615" role=""/>
  <member type="way" ref="332484556" role="forward"/>
  <member type="way" ref="368097102" role="forward"/>
  <member type="way" ref="418744577" role="forward"/>
  <member type="way" ref="418744600" role="forward"/>
  <member type="way" ref="332484553" role="forward"/>
  <member type="way" ref="368097103" role="forward"/>
  <member type="way" ref="942799233" role="forward"/>
  <member type="way" ref="418744605" role="forward"/>
  <member type="way" ref="332484551" role="forward"/>
  <member type="way" ref="418744563" role="forward"/>
  <member type="way" ref="332484563" role="forward"/>
  <member type="way" ref="418744582" role=""/>
  <member type="way" ref="856740630" role=""/>
  <member type="way" ref="856740631" role=""/>
  <member type="way" ref="418744588" role=""/>
  <member type="way" ref="418744570" role=""/>
  <member type="way" ref="418744611" role=""/>
  <member type="way" ref="418732311" role=""/>
  <member type="way" ref="418732310" role=""/>
  <member type="way" ref="418732312" role=""/>
  <member type="way" ref="363541369" role="forward"/>
  <member type="way" ref="418732314" role="forward"/>
  <member type="way" ref="363541371" role="forward"/>
  <member type="way" ref="760479007" role="forward"/>
  <member type="way" ref="163848761" role=""/>
  <member type="way" ref="418732320" role=""/>
  <member type="way" ref="418732318" role=""/>
  <member type="way" ref="418732319" role=""/>
  <member type="way" ref="466810329" role=""/>
  <member type="way" ref="363541368" role=""/>
  <member type="way" ref="418732317" role=""/>
  <member type="way" ref="418732316" role=""/>
  <member type="way" ref="418732309" role=""/>
  <member type="way" ref="418732315" role=""/>
  <member type="way" ref="418732321" role=""/>
  <member type="way" ref="749735485" role=""/>
  <member type="way" ref="775877952" role=""/>
  <member type="way" ref="418575620" role=""/>
  <member type="way" ref="418575618" role=""/>
  <member type="way" ref="418575619" role=""/>
  <member type="way" ref="118480798" role="forward"/>
  <member type="way" ref="80675606" role="forward"/>
  <member type="way" ref="418784793" role="forward"/>
  <member type="way" ref="80675607" role="forward"/>
  <member type="way" ref="151430228" role="forward"/>
  <member type="way" ref="418575621" role="forward"/>
  <member type="way" ref="358391105" role="forward"/>
  <member type="way" ref="151430226" role="forward"/>
  <member type="way" ref="418784794" role=""/>
  <member type="way" ref="151430229" role=""/>
  <member type="way" ref="418784795" role=""/>
  <member type="way" ref="418784792" role=""/>
  <member type="way" ref="362110193" role=""/>
  <member type="way" ref="37740901" role=""/>
  <member type="way" ref="376179474" role=""/>
  <member type="way" ref="163848760" role=""/>
  <member type="way" ref="418551053" role=""/>
  <member type="way" ref="376179473" role=""/>
  <member type="way" ref="418551056" role=""/>
  <member type="way" ref="418551057" role=""/>
  <member type="way" ref="418551058" role=""/>
  <member type="way" ref="332230698" role=""/>
  <member type="way" ref="418547753" role=""/>
  <member type="way" ref="418547751" role=""/>
  <member type="way" ref="418547752" role=""/>
  <member type="way" ref="114154576" role=""/>
  <member type="way" ref="332230699" role=""/>
  <member type="way" ref="173554607" role=""/>
  <member type="way" ref="173554609" role=""/>
  <member type="way" ref="173554526" role=""/>
  <member type="way" ref="5870282" role=""/>
  <member type="way" ref="410988391" role=""/>
  <member type="way" ref="410988390" role=""/>
  <member type="way" ref="376176307" role=""/>
  <member type="way" ref="742416951" role=""/>
  <member type="way" ref="742416950" role=""/>
  <member type="way" ref="749687629" role=""/>
  <member type="way" ref="764042952" role=""/>
  <member type="way" ref="764042953" role=""/>
  <member type="way" ref="776416905" role=""/>
  <member type="way" ref="532426303" role=""/>
  <member type="way" ref="532426302" role=""/>
  <member type="way" ref="114150934" role=""/>
  <member type="way" ref="118644187" role=""/>
  <member type="way" ref="118644190" role=""/>
  <member type="way" ref="409390994" role=""/>
  <member type="way" ref="5868034" role=""/>
  <member type="way" ref="5868035" role=""/>
  <member type="way" ref="5867657" role=""/>
  <member type="way" ref="118650800" role=""/>
  <member type="way" ref="173554578" role=""/>
  <member type="way" ref="365622585" role=""/>
  <member type="way" ref="5869244" role=""/>
  <member type="way" ref="5861301" role=""/>
  <member type="way" ref="118650797" role=""/>
  <member type="way" ref="118651221" role=""/>
  <member type="way" ref="116244165" role=""/>
  <member type="way" ref="116241270" role=""/>
  <member type="way" ref="116241273" role=""/>
  <member type="way" ref="116240104" role=""/>
  <member type="way" ref="116239837" role=""/>
  <member type="way" ref="173554529" role=""/>
  <member type="way" ref="62094721" role=""/>
  <member type="way" ref="5878284" role=""/>
  <member type="way" ref="62094722" role=""/>
  <member type="way" ref="485391381" role=""/>
  <member type="way" ref="376480147" role=""/>
  <member type="way" ref="173554518" role=""/>
  <member type="way" ref="376480148" role=""/>
  <member type="way" ref="376480150" role=""/>
  <member type="way" ref="372299002" role=""/>
  <member type="way" ref="370492819" role=""/>
  <member type="way" ref="485397559" role=""/>
  <member type="way" ref="62094723" role=""/>
  <member type="way" ref="1031928591" role=""/>
  <member type="way" ref="62094719" role=""/>
  <member type="way" ref="485397557" role=""/>
  <member type="way" ref="5882240" role=""/>
  <member type="way" ref="173554535" role=""/>
  <member type="way" ref="173554511" role=""/>
  <member type="way" ref="5882597" role=""/>
  <member type="way" ref="962600944" role=""/>
  <member type="way" ref="5881452" role=""/>
  <member type="way" ref="5882294" role=""/>
  <member type="way" ref="5880035" role=""/>
  <member type="way" ref="5879266" role=""/>
  <member type="way" ref="5878384" role=""/>
  <member type="way" ref="16410608" role=""/>
  <member type="way" ref="16410610" role=""/>
  <member type="way" ref="1002376850" role=""/>
  <member type="way" ref="173554568" role=""/>
  <member type="way" ref="1002376856" role=""/>
  <member type="way" ref="173554536" role=""/>
  <member type="way" ref="5882301" role=""/>
  <member type="way" ref="962527788" role=""/>
  <member type="way" ref="368270677" role=""/>
  <member type="way" ref="233403978" role=""/>
  <member type="way" ref="173554495" role=""/>
  <member type="way" ref="5879646" role=""/>
  <member type="way" ref="34952493" role=""/>
  <member type="way" ref="34952492" role=""/>
  <member type="way" ref="742443807" role=""/>
  <member type="way" ref="914572323" role=""/>
  <member type="way" ref="915564417" role=""/>
  <member type="way" ref="173554497" role=""/>
  <member type="way" ref="5879415" role=""/>
  <member type="way" ref="914576847" role=""/>
  <member type="way" ref="793738891" role=""/>
  <member type="way" ref="914572327" role=""/>
  <member type="way" ref="32818905" role=""/>
  <member type="way" ref="914576836" role=""/>
  <member type="way" ref="914576840" role=""/>
  <member type="way" ref="186826420" role=""/>
  <member type="way" ref="915564423" role=""/>
  <member type="way" ref="5879871" role=""/>
  <member type="way" ref="914583520" role=""/>
  <member type="way" ref="5881016" role=""/>
  <member type="way" ref="477137142" role=""/>
  <member type="way" ref="55267318" role=""/>
  <member type="way" ref="32818907" role=""/>
  <member type="way" ref="26318396" role=""/>
  <member type="way" ref="173554542" role=""/>
  <member type="way" ref="173554504" role=""/>
  <member type="way" ref="30737428" role=""/>
  <member type="way" ref="542029892" role=""/>
  <member type="way" ref="5880104" role=""/>
  <member type="way" ref="270356068" role=""/>
  <member type="way" ref="5880079" role=""/>
  <member type="way" ref="542029891" role=""/>
  <member type="way" ref="186819078" role=""/>
  <member type="way" ref="186819081" role=""/>
  <member type="way" ref="142994972" role=""/>
  <member type="way" ref="34953003" role=""/>
  <member type="way" ref="5881525" role=""/>
  <member type="way" ref="34953004" role=""/>
  <member type="way" ref="35200099" role=""/>
  <member type="way" ref="5882237" role=""/>
  <member type="way" ref="542027947" role=""/>
  <member type="way" ref="412627047" role=""/>
  <member type="way" ref="5882239" role=""/>
  <member type="way" ref="5880802" role=""/>
  <member type="way" ref="34953183" role=""/>
  <member type="way" ref="5880799" role=""/>
  <member type="way" ref="6069098" role=""/>
  <member type="way" ref="6063360" role=""/>
  <member type="way" ref="173554514" role=""/>
  <member type="way" ref="966134730" role=""/>
  <member type="way" ref="966134731" role=""/>
  <member type="way" ref="6067454" role=""/>
  <member type="way" ref="173554564" role=""/>
  <member type="way" ref="6061555" role=""/>
  <member type="way" ref="59191605" role=""/>
  <member type="way" ref="6074365" role=""/>
  <member type="way" ref="53188114" role=""/>
  <member type="way" ref="6072576" role=""/>
  <member type="way" ref="6073519" role=""/>
  <member type="way" ref="705027072" role=""/>
  <member type="way" ref="963455662" role=""/>
  <member type="way" ref="705027073" role=""/>
  <member type="way" ref="963455661" role=""/>
  <member type="way" ref="963455656" role=""/>
  <member type="way" ref="963455667" role=""/>
  <member type="way" ref="963455655" role=""/>
  <member type="way" ref="963455650" role=""/>
  <member type="way" ref="6071010" role=""/>
  <member type="way" ref="6072455" role=""/>
  <member type="way" ref="718155816" role=""/>
  <member type="way" ref="517835393" role=""/>
  <member type="way" ref="991409010" role=""/>
  <member type="way" ref="991409020" role=""/>
  <member type="way" ref="517835398" role=""/>
  <member type="way" ref="991409019" role=""/>
  <member type="way" ref="293127667" role=""/>
  <member type="way" ref="991414503" role=""/>
  <member type="way" ref="963455648" role=""/>
  <member type="way" ref="1051685764" role=""/>
  <member type="way" ref="293127668" role=""/>
  <member type="way" ref="963455647" role=""/>
  <member type="way" ref="173554525" role=""/>
  <member type="way" ref="173554524" role=""/>
  <member type="way" ref="1051684997" role=""/>
  <member type="way" ref="963455645" role=""/>
  <member type="way" ref="6062948" role=""/>
  <member type="way" ref="906406871" role=""/>
  <member type="way" ref="906406872" role=""/>
  <member type="way" ref="731782630" role=""/>
  <member type="way" ref="173554553" role=""/>
  <member type="way" ref="638180789" role=""/>
  <member type="way" ref="173554552" role=""/>
  <member type="way" ref="6062086" role=""/>
  <member type="way" ref="173554580" role=""/>
  <member type="way" ref="239240957" role=""/>
  <member type="way" ref="6065166" role=""/>
  <member type="way" ref="173554558" role=""/>
  <member type="way" ref="128239470" role=""/>
  <member type="way" ref="963459168" role=""/>
  <member type="way" ref="963461618" role=""/>
  <member type="way" ref="732487081" role=""/>
  <member type="way" ref="6063487" role=""/>
  <member type="way" ref="963461634" role=""/>
  <member type="way" ref="23924470" role=""/>
  <member type="way" ref="963461621" role=""/>
  <member type="way" ref="221845686" role=""/>
  <member type="way" ref="221845685" role=""/>
  <member type="way" ref="782867757" role=""/>
  <member type="way" ref="857421949" role=""/>
  <member type="way" ref="6181585" role=""/>
  <member type="way" ref="392015872" role=""/>
  <member type="way" ref="392015873" role=""/>
  <member type="way" ref="6181595" role=""/>
  <member type="way" ref="857924198" role=""/>
  <member type="way" ref="857924199" role=""/>
  <member type="way" ref="6181241" role=""/>
  <member type="way" ref="857924220" role=""/>
  <member type="way" ref="857924221" role=""/>
  <member type="way" ref="6187894" role=""/>
  <member type="way" ref="129584122" role=""/>
  <member type="way" ref="6187550" role=""/>
  <member type="way" ref="6183650" role=""/>
  <member type="way" ref="6181723" role=""/>
  <member type="way" ref="826097660" role=""/>
  <member type="way" ref="826097661" role=""/>
  <member type="way" ref="6194996" role=""/>
  <member type="way" ref="6181254" role=""/>
  <member type="way" ref="257366361" role=""/>
  <member type="way" ref="257366359" role=""/>
  <member type="way" ref="816296353" role=""/>
  <member type="way" ref="816296352" role=""/>
  <member type="way" ref="785857305" role=""/>
  <member type="way" ref="930560251" role=""/>
  <member type="way" ref="287110889" role=""/>
  <member type="way" ref="127788877" role=""/>
  <member type="way" ref="127788876" role=""/>
  <member type="way" ref="634078815" role=""/>
  <member type="way" ref="699988067" role=""/>
  <member type="way" ref="699218968" role=""/>
  <member type="way" ref="287110888" role=""/>
  <member type="way" ref="23837164" role=""/>
  <member type="way" ref="23837163" role=""/>
  <member type="way" ref="6194004" role=""/>
  <member type="way" ref="391057185" role=""/>
  <member type="way" ref="699988010" role=""/>
  <member type="way" ref="202898176" role=""/>
  <member type="way" ref="1034348458" role=""/>
  <member type="way" ref="640382433" role=""/>
  <member type="way" ref="1052683384" role=""/>
  <member type="way" ref="6188876" role=""/>
  <member type="way" ref="929423066" role=""/>
  <member type="way" ref="6185705" role=""/>
  <member type="way" ref="699302839" role=""/>
  <member type="way" ref="699988053" role=""/>
  <member type="way" ref="699302807" role=""/>
  <member type="way" ref="699302862" role=""/>
  <member type="way" ref="699302865" role=""/>
  <member type="way" ref="699302863" role=""/>
  <member type="way" ref="615797064" role=""/>
  <member type="way" ref="114000765" role=""/>
  <member type="way" ref="745016672" role=""/>
  <member type="way" ref="129601974" role=""/>
  <member type="way" ref="860918996" role=""/>
  <member type="way" ref="860918995" role=""/>
  <member type="way" ref="778743599" role=""/>
  <member type="way" ref="699530796" role=""/>
  <member type="way" ref="699530789" role=""/>
  <member type="way" ref="129601975" role="forward"/>
  <member type="way" ref="129601976" role="forward"/>
  <member type="way" ref="634027441" role=""/>
  <member type="way" ref="23921479" role=""/>
  <member type="way" ref="699988064" role=""/>
  <member type="way" ref="32883475" role=""/>
  <member type="way" ref="1020642698" role=""/>
  <member type="way" ref="633459919" role=""/>
  <member type="way" ref="1020642703" role=""/>
  <member type="way" ref="699988063" role=""/>
  <member type="way" ref="699988062" role=""/>
  <member type="way" ref="633812216" role=""/>
  <member type="way" ref="784218925" role=""/>
  <member type="way" ref="784218923" role=""/>
  <member type="way" ref="784218924" role=""/>
  <member type="way" ref="699218967" role=""/>
  <member type="way" ref="699530786" role=""/>
  <member type="way" ref="999277586" role=""/>
  <member type="way" ref="287195560" role=""/>
  <member type="way" ref="23691677" role=""/>
  <member type="way" ref="699988017" role=""/>
  <member type="way" ref="129609810" role=""/>
  <member type="way" ref="699988018" role=""/>
  <member type="way" ref="699988021" role=""/>
  <member type="way" ref="389821959" role=""/>
  <member type="way" ref="285759530" role=""/>
  <member type="way" ref="813061797" role=""/>
  <member type="way" ref="738217485" role=""/>
  <member type="way" ref="852524127" role=""/>
  <member type="way" ref="852524125" role=""/>
  <member type="way" ref="852524126" role=""/>
  <member type="way" ref="852570351" role=""/>
  <member type="way" ref="852570350" role=""/>
  <member type="way" ref="773829748" role=""/>
  <member type="way" ref="852570346" role=""/>
  <member type="way" ref="852570345" role=""/>
  <member type="way" ref="773829751" role=""/>
  <member type="way" ref="852570347" role=""/>
  <member type="way" ref="773829749" role=""/>
  <member type="way" ref="737536107" role=""/>
  <member type="way" ref="737536108" role=""/>
  <member type="way" ref="737536109" role=""/>
  <member type="way" ref="855715957" role=""/>
  <member type="way" ref="855715958" role=""/>
  <member type="way" ref="285759533" role=""/>
  <member type="way" ref="782982576" role=""/>
  <member type="way" ref="51353068" role=""/>
  <member type="way" ref="699800835" role=""/>
  <member type="way" ref="699800869" role=""/>
  <member type="way" ref="699800837" role=""/>
  <member type="way" ref="699800852" role=""/>
  <member type="way" ref="51353069" role=""/>
  <member type="way" ref="51353071" role=""/>
  <member type="way" ref="51353073" role=""/>
  <member type="way" ref="6192726" role=""/>
  <member type="way" ref="6178318" role=""/>
  <member type="way" ref="35019448" role=""/>
  <member type="way" ref="35019447" role=""/>
  <member type="way" ref="23690922" role=""/>
  <member type="way" ref="23691360" role=""/>
  <member type="way" ref="35019837" role=""/>
  <member type="way" ref="1060424642" role=""/>
  <member type="way" ref="547717669" role=""/>
  <member type="way" ref="547717670" role=""/>
  <member type="way" ref="23690916" role=""/>
  <member type="way" ref="31813426" role=""/>
  <member type="way" ref="623957658" role=""/>
  <member type="way" ref="450280325" role=""/>
  <member type="way" ref="450280326" role=""/>
  <member type="way" ref="23690762" role=""/>
  <member type="way" ref="23690763" role=""/>
  <member type="way" ref="1026993570" role=""/>
  <member type="way" ref="1026993569" role=""/>
  <member type="way" ref="23690510" role=""/>
  <member type="way" ref="23690511" role=""/>
  <member type="way" ref="1026987771" role=""/>
  <member type="way" ref="450280329" role=""/>
  <member type="way" ref="450280331" role=""/>
  <member type="way" ref="450280333" role=""/>
  <member type="way" ref="124045496" role=""/>
  <member type="way" ref="177665302" role=""/>
  <member type="way" ref="127788925" role=""/>
  <member type="way" ref="623957715" role=""/>
  <member type="way" ref="261560692" role=""/>
  <member type="way" ref="785789293" role=""/>
  <member type="way" ref="623957687" role=""/>
  <member type="way" ref="623957688" role=""/>
  <member type="way" ref="623957663" role=""/>
  <member type="way" ref="623957662" role=""/>
  <member type="way" ref="261560693" role=""/>
  <member type="way" ref="687481428" role=""/>
  <member type="way" ref="687421215" role=""/>
  <member type="way" ref="349584328" role=""/>
  <member type="way" ref="687421214" role=""/>
  <member type="way" ref="261426367" role=""/>
  <member type="way" ref="735469461" role=""/>
  <member type="way" ref="1035139776" role=""/>
  <member type="way" ref="735469460" role=""/>
  <member type="way" ref="261426370" role=""/>
  <member type="way" ref="687472106" role=""/>
  <member type="way" ref="687421181" role=""/>
  <member type="way" ref="678963992" role=""/>
  <member type="way" ref="1014018946" role=""/>
  <member type="way" ref="676837600" role=""/>
  <member type="way" ref="1014018948" role=""/>
  <member type="way" ref="676837606" role=""/>
  <member type="way" ref="676837609" role=""/>
  <member type="way" ref="1014018943" role=""/>
  <member type="way" ref="623957723" role=""/>
  <member type="way" ref="1014018944" role=""/>
  <member type="way" ref="858784097" role=""/>
  <member type="way" ref="687421207" role=""/>
  <member type="way" ref="12231881" role=""/>
  <member type="way" ref="654870787" role=""/>
  <member type="way" ref="737524652" role=""/>
  <member type="way" ref="737524650" role=""/>
  <member type="way" ref="261564899" role=""/>
  <member type="way" ref="621245082" role=""/>
  <member type="way" ref="621245080" role=""/>
  <member type="way" ref="621245078" role=""/>
  <member type="way" ref="621245079" role=""/>
  <member type="way" ref="621245076" role=""/>
  <member type="way" ref="621245077" role=""/>
  <member type="way" ref="621245075" role=""/>
  <member type="way" ref="621245071" role=""/>
  <member type="way" ref="621245069" role=""/>
  <member type="way" ref="621245068" role=""/>
  <member type="way" ref="621245065" role=""/>
  <member type="way" ref="654870785" role=""/>
  <member type="way" ref="13985110" role=""/>
  <member type="way" ref="12238150" role=""/>
  <member type="way" ref="12233225" role=""/>
  <member type="way" ref="687481437" role=""/>
  <member type="way" ref="89562987" role=""/>
  <member type="way" ref="623957727" role=""/>
  <member type="way" ref="89563099" role=""/>
  <member type="way" ref="12235277" role=""/>
  <member type="way" ref="623957674" role=""/>
  <member type="way" ref="349584319" role=""/>
  <member type="way" ref="349584321" role=""/>
  <member type="way" ref="757223005" role=""/>
  <member type="way" ref="349584322" role=""/>
  <member type="way" ref="349584320" role=""/>
  <member type="way" ref="757223006" role=""/>
  <member type="way" ref="127788927" role=""/>
  <member type="way" ref="12243529" role=""/>
  <member type="way" ref="613495559" role=""/>
  <member type="way" ref="89385834" role=""/>
  <member type="way" ref="349584308" role=""/>
  <member type="way" ref="23349412" role=""/>
  <member type="way" ref="378984358" role=""/>
  <member type="way" ref="12246082" role=""/>
  <member type="way" ref="191141275" role=""/>
  <member type="way" ref="378984362" role=""/>
  <member type="way" ref="751514041" role=""/>
  <member type="way" ref="23350544" role=""/>
  <member type="way" ref="963101746" role=""/>
  <member type="way" ref="963101747" role=""/>
  <member type="way" ref="245987928" role=""/>
  <member type="way" ref="1034467028" role=""/>
  <member type="way" ref="678859679" role=""/>
  <member type="way" ref="23350552" role=""/>
  <member type="way" ref="464451277" role=""/>
  <member type="way" ref="959680157" role=""/>
  <member type="way" ref="959680154" role=""/>
  <member type="way" ref="959680153" role=""/>
  <member type="way" ref="771261057" role=""/>
  <member type="way" ref="162685297" role="forward"/>
  <member type="way" ref="738042890" role="forward"/>
  <member type="way" ref="428021481" role="forward"/>
  <member type="way" ref="428021473" role="forward"/>
  <member type="way" ref="428021472" role="forward"/>
  <member type="way" ref="428021469" role="forward"/>
  <member type="way" ref="428021475" role="forward"/>
  <member type="way" ref="428024487" role="forward"/>
  <member type="way" ref="428024492" role="forward"/>
  <member type="way" ref="428024502" role="forward"/>
  <member type="way" ref="1053341512" role="forward"/>
  <member type="way" ref="428024495" role="forward"/>
  <member type="way" ref="428024498" role="forward"/>
  <member type="way" ref="306133430" role="forward"/>
  <member type="way" ref="428024499" role="forward"/>
  <member type="way" ref="428024490" role="forward"/>
  <member type="way" ref="402799845" role="forward"/>
  <member type="way" ref="428024500" role="forward"/>
  <member type="way" ref="428024491" role="forward"/>
  <member type="way" ref="428024501" role="forward"/>
  <member type="way" ref="685203217" role="forward"/>
  <member type="way" ref="306137786" role="forward"/>
  <member type="way" ref="162685290" role="forward"/>
  <member type="way" ref="428024814" role="forward"/>
  <member type="way" ref="402799844" role="forward"/>
  <member type="way" ref="428024815" role="forward"/>
  <member type="way" ref="428024489" role="forward"/>
  <member type="way" ref="428024493" role="forward"/>
  <member type="way" ref="306137789" role="forward"/>
  <member type="way" ref="428024496" role="forward"/>
  <member type="way" ref="428024497" role="forward"/>
  <member type="way" ref="428024503" role="forward"/>
  <member type="way" ref="428024494" role="forward"/>
  <member type="way" ref="428024488" role="forward"/>
  <member type="way" ref="428021476" role="forward"/>
  <member type="way" ref="428021470" role="forward"/>
  <member type="way" ref="428021482" role="forward"/>
  <member type="way" ref="428021477" role="forward"/>
  <member type="way" ref="428021474" role="forward"/>
  <member type="way" ref="428021479" role="forward"/>
  <member type="way" ref="428021480" role="forward"/>
  <member type="way" ref="428021471" role="forward"/>
  <member type="way" ref="306133429" role="forward"/>
  <member type="way" ref="428021478" role=""/>
  <member type="way" ref="162685294" role=""/>
  <member type="way" ref="959680159" role=""/>
  <member type="way" ref="959680156" role=""/>
  <member type="way" ref="959670803" role=""/>
  <member type="way" ref="959670802" role=""/>
  <member type="way" ref="959670801" role=""/>
  <member type="way" ref="959670800" role=""/>
  <member type="way" ref="248200500" role=""/>
  <member type="way" ref="428019388" role="forward"/>
  <member type="way" ref="428019392" role="forward"/>
  <member type="way" ref="428019389" role="forward"/>
  <member type="way" ref="138883228" role="forward"/>
  <member type="way" ref="427893557" role="forward"/>
  <member type="way" ref="427893558" role="forward"/>
  <member type="way" ref="882315333" role="forward"/>
  <member type="way" ref="427894962" role="forward"/>
  <member type="way" ref="427894955" role="forward"/>
  <member type="way" ref="138883222" role="forward"/>
  <member type="way" ref="427896642" role="forward"/>
  <member type="way" ref="427896641" role="forward"/>
  <member type="way" ref="427903975" role="forward"/>
  <member type="way" ref="427903963" role="forward"/>
  <member type="way" ref="427903976" role="forward"/>
  <member type="way" ref="427903974" role="forward"/>
  <member type="way" ref="427903965" role="forward"/>
  <member type="way" ref="427896643" role="forward"/>
  <member type="way" ref="138883229" role="forward"/>
  <member type="way" ref="428045794" role="forward"/>
  <member type="way" ref="804520479" role="forward"/>
  <member type="way" ref="428045787" role="forward"/>
  <member type="way" ref="428045791" role="forward"/>
  <member type="way" ref="138883230" role="forward"/>
  <member type="way" ref="333927559" role="forward"/>
  <member type="way" ref="295752198" role="forward"/>
  <member type="way" ref="428068828" role="forward"/>
  <member type="way" ref="428068822" role="forward"/>
  <member type="way" ref="428068826" role="forward"/>
  <member type="way" ref="428068827" role="forward"/>
  <member type="way" ref="428068833" role="forward"/>
  <member type="way" ref="430778699" role="forward"/>
  <member type="way" ref="428068831" role="forward"/>
  <member type="way" ref="428068830" role="forward"/>
  <member type="way" ref="65584416" role="forward"/>
  <member type="way" ref="428066038" role="forward"/>
  <member type="way" ref="428066029" role="forward"/>
  <member type="way" ref="428066033" role="forward"/>
  <member type="way" ref="440450623" role="forward"/>
  <member type="way" ref="935184441" role="forward"/>
  <member type="way" ref="428066028" role="forward"/>
  <member type="way" ref="428066032" role="forward"/>
  <member type="way" ref="693723537" role="forward"/>
  <member type="way" ref="428066023" role="forward"/>
  <member type="way" ref="428066030" role="forward"/>
  <member type="way" ref="1055040825" role="forward"/>
  <member type="way" ref="124940487" role="forward"/>
  <member type="way" ref="428066034" role="forward"/>
  <member type="way" ref="428066040" role="forward"/>
  <member type="way" ref="369422779" role="forward"/>
  <member type="way" ref="479818878" role="forward"/>
  <member type="way" ref="369422778" role="forward"/>
  <member type="way" ref="124940498" role="forward"/>
  <member type="way" ref="428292574" role="forward"/>
  <member type="way" ref="428056668" role="forward"/>
  <member type="way" ref="124940472" role="forward"/>
  <member type="way" ref="65588356" role="forward"/>
  <member type="way" ref="138883225" role="forward"/>
  <member type="way" ref="428033859" role="forward"/>
  <member type="way" ref="428033860" role="forward"/>
  <member type="way" ref="248199106" role="forward"/>
  <member type="way" ref="427893554" role="forward"/>
  <member type="way" ref="427894958" role="forward"/>
  <member type="way" ref="427894952" role="forward"/>
  <member type="way" ref="427894950" role="forward"/>
  <member type="way" ref="427894965" role="forward"/>
  <member type="way" ref="427893555" role="forward"/>
  <member type="way" ref="427893556" role="forward"/>
  <member type="way" ref="138883223" role="forward"/>
  <member type="way" ref="428019390" role="forward"/>
  <member type="way" ref="428019391" role="forward"/>
  <member type="way" ref="428045792" role="forward"/>
  <member type="way" ref="428045786" role="forward"/>
  <member type="way" ref="428022112" role="forward"/>
  <member type="way" ref="428022113" role="forward"/>
  <member type="way" ref="428022114" role="forward"/>
  <member type="way" ref="427903969" role="forward"/>
  <member type="way" ref="427903977" role="forward"/>
  <member type="way" ref="427903964" role="forward"/>
  <member type="way" ref="427903973" role="forward"/>
  <member type="way" ref="427903978" role="forward"/>
  <member type="way" ref="265727844" role="forward"/>
  <member type="way" ref="333927558" role="forward"/>
  <member type="way" ref="295752199" role="forward"/>
  <member type="way" ref="622910842" role="forward"/>
  <member type="way" ref="428045788" role="forward"/>
  <member type="way" ref="305358263" role="forward"/>
  <member type="way" ref="265727843" role="forward"/>
  <member type="way" ref="428068834" role="forward"/>
  <member type="way" ref="428068825" role="forward"/>
  <member type="way" ref="428068829" role="forward"/>
  <member type="way" ref="68522649" role="forward"/>
  <member type="way" ref="428068824" role="forward"/>
  <member type="way" ref="428068832" role="forward"/>
  <member type="way" ref="428068823" role="forward"/>
  <member type="way" ref="722365713" role="forward"/>
  <member type="way" ref="765150870" role="forward"/>
  <member type="way" ref="722365712" role="forward"/>
  <member type="way" ref="124940492" role="forward"/>
  <member type="way" ref="722355244" role="forward"/>
  <member type="way" ref="621396741" role="forward"/>
  <member type="way" ref="369422780" role="forward"/>
  <member type="way" ref="428066035" role="forward"/>
  <member type="way" ref="428250236" role="forward"/>
  <member type="way" ref="428250243" role="forward"/>
  <member type="way" ref="428066024" role="forward"/>
  <member type="way" ref="428066027" role="forward"/>
  <member type="way" ref="1051435431" role="forward"/>
  <member type="way" ref="428066036" role="forward"/>
  <member type="way" ref="428066026" role="forward"/>
  <member type="way" ref="428066037" role="forward"/>
  <member type="way" ref="935184442" role="forward"/>
  <member type="way" ref="428066025" role="forward"/>
  <member type="way" ref="428066031" role="forward"/>
  <member type="way" ref="369422781" role="forward"/>
  <member type="way" ref="428068820" role="forward"/>
  <member type="way" ref="428056673" role=""/>
  <member type="way" ref="23723890" role=""/>
  <member type="way" ref="428056671" role=""/>
  <member type="way" ref="428056672" role=""/>
  <member type="way" ref="402799843" role=""/>
  <member type="way" ref="428056674" role=""/>
  <member type="way" ref="428056669" role=""/>
  <member type="way" ref="734783718" role=""/>
  <member type="way" ref="214924332" role=""/>
  <member type="way" ref="428293025" role=""/>
  <member type="way" ref="6443754" role=""/>
  <member type="way" ref="734783719" role=""/>
  <member type="way" ref="428056670" role=""/>
  <member type="way" ref="428056684" role=""/>
  <member type="way" ref="428056682" role=""/>
  <member type="way" ref="428056675" role=""/>
  <member type="way" ref="428056680" role=""/>
  <member type="way" ref="428293026" role=""/>
  <member type="way" ref="428056681" role=""/>
  <member type="way" ref="428056683" role=""/>
  <member type="way" ref="68522646" role=""/>
  <member type="way" ref="165476988" role=""/>
  <member type="way" ref="165476987" role="forward"/>
  <member type="way" ref="165476986" role="forward"/>
  <member type="way" ref="157035087" role=""/>
  <member type="way" ref="353720572" role=""/>
  <member type="way" ref="353720575" role=""/>
  <member type="way" ref="353720577" role=""/>
  <member type="way" ref="353720579" role=""/>
  <member type="way" ref="428290275" role=""/>
  <member type="way" ref="353720581" role=""/>
  <member type="way" ref="353720584" role=""/>
  <member type="way" ref="214924330" role=""/>
  <member type="way" ref="23946299" role=""/>
  <member type="way" ref="23946298" role=""/>
  <member type="way" ref="6327494" role=""/>
  <member type="way" ref="173554561" role=""/>
  <member type="way" ref="155228478" role="forward"/>
  <member type="way" ref="458813405" role="forward"/>
  <member type="way" ref="505346950" role="forward"/>
  <member type="way" ref="297594723" role="forward"/>
  <member type="way" ref="297594718" role="forward"/>
  <member type="way" ref="297594726" role="forward"/>
  <member type="way" ref="297594719" role="forward"/>
  <member type="way" ref="285350848" role="forward"/>
  <member type="way" ref="297594724" role="forward"/>
  <member type="way" ref="297594725" role="forward"/>
  <member type="way" ref="297594727" role="forward"/>
  <member type="way" ref="458812960" role="forward"/>
  <member type="way" ref="458813288" role="forward"/>
  <member type="way" ref="6461371" role="forward"/>
  <member type="way" ref="173554562" role="forward"/>
  <member type="way" ref="433205279" role="forward"/>
  <member type="way" ref="332495681" role=""/>
  <member type="way" ref="260374047" role=""/>
  <member type="way" ref="426488108" role=""/>
  <member type="way" ref="499998236" role=""/>
  <member type="way" ref="260374049" role=""/>
  <member type="way" ref="997182278" role=""/>
  <member type="way" ref="263820699" role=""/>
  <member type="way" ref="173554486" role=""/>
  <member type="way" ref="428017296" role=""/>
  <member type="way" ref="428263004" role=""/>
  <member type="way" ref="428017297" role=""/>
  <member type="way" ref="428017300" role=""/>
  <member type="way" ref="428017299" role=""/>
  <member type="way" ref="428017298" role=""/>
  <member type="way" ref="245838589" role=""/>
  <member type="way" ref="35535098" role=""/>
  <member type="way" ref="1024232885" role=""/>
  <member type="way" ref="32223083" role=""/>
  <member type="way" ref="340110576" role=""/>
  <member type="way" ref="340110577" role=""/>
  <member type="way" ref="340110578" role=""/>
  <member type="way" ref="828412981" role=""/>
  <member type="way" ref="427899024" role=""/>
  <member type="way" ref="828412982" role=""/>
  <member type="way" ref="340369824" role=""/>
  <member type="way" ref="32223055" role="forward"/>
  <member type="way" ref="171072526" role="forward"/>
  <member type="way" ref="531923482" role="forward"/>
  <member type="way" ref="105496506" role="forward"/>
  <member type="way" ref="436178671" role="forward"/>
  <member type="way" ref="32223078" role="forward"/>
  <member type="way" ref="436178672" role="forward"/>
  <member type="way" ref="157184877" role=""/>
  <member type="way" ref="389138193" role=""/>
  <member type="way" ref="427906208" role=""/>
  <member type="way" ref="427906209" role=""/>
  <member type="way" ref="389138192" role=""/>
  <member type="way" ref="427906210" role=""/>
  <member type="way" ref="427906211" role=""/>
  <member type="way" ref="389138194" role=""/>
  <member type="way" ref="427907131" role=""/>
  <member type="way" ref="427907057" role=""/>
  <member type="way" ref="389138195" role=""/>
  <member type="way" ref="435898454" role="forward"/>
  <member type="way" ref="159591156" role="forward"/>
  <member type="way" ref="427907056" role="forward"/>
  <member type="way" ref="620762201" role="forward"/>
  <member type="way" ref="620762202" role="forward"/>
  <member type="way" ref="159591157" role="forward"/>
  <member type="way" ref="435898455" role="forward"/>
  <member type="way" ref="428246448" role=""/>
  <member type="way" ref="456673729" role=""/>
  <member type="way" ref="127697550" role=""/>
  <member type="way" ref="621378266" role=""/>
  <member type="way" ref="127697547" role=""/>
  <member type="way" ref="428245585" role=""/>
  <member type="way" ref="428245584" role=""/>
  <member type="way" ref="22927949" role=""/>
  <member type="way" ref="428245583" role=""/>
  <member type="way" ref="428230590" role=""/>
  <member type="way" ref="452336735" role=""/>
  <member type="way" ref="1049331466" role=""/>
  <member type="way" ref="6383712" role=""/>
  <member type="way" ref="256998429" role=""/>
  <member type="way" ref="925940823" role=""/>
  <member type="way" ref="398951345" role=""/>
  <member type="way" ref="925940822" role=""/>
  <member type="way" ref="370785081" role=""/>
  <member type="way" ref="428230587" role=""/>
  <member type="way" ref="263673735" role=""/>
  <member type="way" ref="993384194" role=""/>
  <member type="way" ref="6522905" role=""/>
  <member type="way" ref="428243941" role=""/>
  <member type="way" ref="428243940" role=""/>
  <member type="way" ref="428243942" role=""/>
  <member type="way" ref="428243943" role=""/>
  <member type="way" ref="1053891486" role=""/>
  <member type="way" ref="993382884" role=""/>
  <member type="way" ref="894783360" role=""/>
  <member type="way" ref="428243939" role=""/>
  <member type="way" ref="163419189" role=""/>
  <member type="way" ref="620595348" role=""/>
  <member type="way" ref="580425582" role=""/>
  <member type="way" ref="580425578" role=""/>
  <member type="way" ref="428244185" role=""/>
  <member type="way" ref="428248114" role=""/>
  <member type="way" ref="6483622" role=""/>
  <member type="way" ref="38940711" role=""/>
  <member type="way" ref="380116994" role=""/>
  <member type="way" ref="462696738" role=""/>
  <member type="way" ref="391421595" role=""/>
  <member type="way" ref="163419191" role=""/>
  <member type="way" ref="215869731" role=""/>
  <member type="way" ref="215870359" role=""/>
  <member type="way" ref="22927954" role=""/>
  <member type="way" ref="4794449" role="forward"/>
  <member type="way" ref="1047887475" role="forward"/>
  <member type="way" ref="1047887476" role="forward"/>
  <member type="way" ref="791135493" role="forward"/>
  <member type="way" ref="791135498" role="forward"/>
  <member type="way" ref="52840083" role="forward"/>
  <member type="way" ref="791135499" role="forward"/>
  <member type="way" ref="367069125" role="forward"/>
  <member type="way" ref="116614537" role="forward"/>
  <member type="way" ref="25792589" role="forward"/>
  <member type="way" ref="25792593" role="forward"/>
  <member type="way" ref="25792594" role="forward"/>
  <member type="way" ref="668153336" role="forward"/>
  <member type="way" ref="533313902" role="forward"/>
  <member type="way" ref="60914402" role="forward"/>
  <member type="way" ref="368829106" role="forward"/>
  <member type="way" ref="466223584" role="forward"/>
  <member type="way" ref="466223583" role="forward"/>
  <member type="way" ref="947125437" role="forward"/>
  <member type="way" ref="947125438" role="forward"/>
  <member type="way" ref="947125439" role="forward"/>
  <member type="way" ref="12907832" role="forward"/>
  <member type="way" ref="116721546" role="forward"/>
  <member type="way" ref="60914400" role="forward"/>
  <member type="way" ref="466223582" role="forward"/>
  <member type="way" ref="466223585" role="forward"/>
  <member type="way" ref="13518560" role="forward"/>
  <member type="way" ref="457542648" role="forward"/>
  <member type="way" ref="13518554" role="forward"/>
  <member type="way" ref="909825611" role="forward"/>
  <member type="way" ref="8591493" role="forward"/>
  <member type="way" ref="621319691" role="forward"/>
  <member type="way" ref="43044392" role="forward"/>
  <member type="way" ref="43044394" role="forward"/>
  <member type="way" ref="37125674" role="forward"/>
  <member type="way" ref="37125675" role="forward"/>
  <member type="way" ref="180075105" role="forward"/>
  <member type="way" ref="345465231" role="forward"/>
  <member type="way" ref="48003046" role="forward"/>
  <member type="way" ref="4864595" role="forward"/>
  <member type="way" ref="398813067" role="forward"/>
  <member type="way" ref="398813065" role="forward"/>
  <member type="way" ref="52840110" role="forward"/>
  <member type="way" ref="739663856" role="forward"/>
  <member type="way" ref="393066997" role="forward"/>
  <member type="way" ref="428082192" role="forward"/>
  <member type="way" ref="60980719" role="forward"/>
  <member type="way" ref="428082942" role="forward"/>
  <member type="way" ref="428082932" role="forward"/>
  <member type="way" ref="52840106" role="forward"/>
  <member type="way" ref="336155509" role="forward"/>
  <member type="way" ref="428082940" role="forward"/>
  <member type="way" ref="60699572" role="forward"/>
  <member type="way" ref="129030992" role="forward"/>
  <member type="way" ref="428082937" role="forward"/>
  <member type="way" ref="60699573" role="forward"/>
  <member type="way" ref="428082934" role="forward"/>
  <member type="way" ref="428082941" role="forward"/>
  <member type="way" ref="933043815" role="forward"/>
  <member type="way" ref="428082933" role="forward"/>
  <member type="way" ref="428082944" role="forward"/>
  <member type="way" ref="428082939" role="forward"/>
  <member type="way" ref="52847322" role="forward"/>
  <member type="way" ref="791135494" role="forward"/>
  <member type="way" ref="791135495" role="forward"/>
  <member type="way" ref="4755100" role="forward"/>
  <member type="way" ref="791135496" role="forward"/>
  <member type="way" ref="465991354" role="forward"/>
  <member type="way" ref="393067000" role="forward"/>
  <member type="way" ref="720086515" role="forward"/>
  <member type="way" ref="25792605" role="forward"/>
  <member type="way" ref="25792603" role="forward"/>
  <member type="way" ref="25792612" role="forward"/>
  <member type="way" ref="116614533" role="forward"/>
  <member type="way" ref="25792614" role="forward"/>
  <member type="way" ref="367069126" role="forward"/>
  <member type="way" ref="791135497" role="forward"/>
  <member type="way" ref="378090317" role="forward"/>
  <member type="way" ref="13518558" role="forward"/>
  <member type="way" ref="13518557" role="forward"/>
  <member type="way" ref="13518555" role="forward"/>
  <member type="way" ref="909825612" role="forward"/>
  <member type="way" ref="8591490" role="forward"/>
  <member type="way" ref="621319692" role="forward"/>
  <member type="way" ref="338894965" role="forward"/>
  <member type="way" ref="393066998" role="forward"/>
  <member type="way" ref="331577293" role="forward"/>
  <member type="way" ref="43044393" role="forward"/>
  <member type="way" ref="37125672" role="forward"/>
  <member type="way" ref="180075106" role="forward"/>
  <member type="way" ref="4798548" role="forward"/>
  <member type="way" ref="180075108" role="forward"/>
  <member type="way" ref="48003053" role="forward"/>
  <member type="way" ref="48003054" role="forward"/>
  <member type="way" ref="398813064" role="forward"/>
  <member type="way" ref="398813066" role="forward"/>
  <member type="way" ref="52840112" role="forward"/>
  <member type="way" ref="60980717" role="forward"/>
  <member type="way" ref="398813068" role="forward"/>
  <member type="way" ref="129030994" role="forward"/>
  <member type="way" ref="428082936" role="forward"/>
  <member type="way" ref="428082938" role="forward"/>
  <member type="way" ref="129030995" role="forward"/>
  <member type="way" ref="428082935" role="forward"/>
  <member type="way" ref="428082943" role="forward"/>
  <member type="way" ref="129030993" role=""/>
  <member type="way" ref="738061809" role=""/>
  <member type="way" ref="518371192" role=""/>
  <member type="way" ref="893136312" role=""/>
  <member type="way" ref="792024859" role=""/>
  <member type="way" ref="792024858" role=""/>
  <member type="way" ref="518371186" role=""/>
  <member type="way" ref="893136311" role=""/>
  <member type="way" ref="35449757" role=""/>
  <member type="way" ref="428079964" role=""/>
  <member type="way" ref="428079961" role=""/>
  <member type="way" ref="428079987" role=""/>
  <member type="way" ref="428079972" role=""/>
  <member type="way" ref="428079965" role=""/>
  <member type="way" ref="428079970" role=""/>
  <member type="way" ref="975512756" role=""/>
  <member type="way" ref="282809756" role=""/>
  <member type="way" ref="368670632" role=""/>
  <member type="way" ref="591108191" role=""/>
  <member type="way" ref="428093881" role=""/>
  <member type="way" ref="591108189" role=""/>
  <member type="way" ref="428093886" role=""/>
  <member type="way" ref="59716360" role=""/>
  <member type="way" ref="383904285" role=""/>
  <member type="way" ref="428093888" role="forward"/>
  <member type="way" ref="428093883" role="forward"/>
  <member type="way" ref="428093887" role="forward"/>
  <member type="way" ref="428093875" role="forward"/>
  <member type="way" ref="428093889" role="forward"/>
  <member type="way" ref="428093879" role="forward"/>
  <member type="way" ref="428093884" role="forward"/>
  <member type="way" ref="428093882" role="forward"/>
  <member type="way" ref="428093885" role="forward"/>
  <member type="way" ref="170778350" role="forward"/>
  <member type="way" ref="332333392" role="forward"/>
  <member type="way" ref="428090330" role="forward"/>
  <member type="way" ref="428090337" role="forward"/>
  <member type="way" ref="622519732" role="forward"/>
  <member type="way" ref="428090380" role="forward"/>
  <member type="way" ref="428090339" role="forward"/>
  <member type="way" ref="428090370" role="forward"/>
  <member type="way" ref="428090338" role="forward"/>
  <member type="way" ref="428090378" role="forward"/>
  <member type="way" ref="428090367" role="forward"/>
  <member type="way" ref="428090340" role="forward"/>
  <member type="way" ref="428090376" role="forward"/>
  <member type="way" ref="428090333" role="forward"/>
  <member type="way" ref="428090332" role="forward"/>
  <member type="way" ref="428090335" role="forward"/>
  <member type="way" ref="428090334" role="forward"/>
  <member type="way" ref="428090374" role="forward"/>
  <member type="way" ref="484846145" role="forward"/>
  <member type="way" ref="428090381" role="forward"/>
  <member type="way" ref="428090336" role="forward"/>
  <member type="way" ref="428090375" role="forward"/>
  <member type="way" ref="428090360" role="forward"/>
  <member type="way" ref="428090371" role="forward"/>
  <member type="way" ref="371236483" role="forward"/>
  <member type="way" ref="371236481" role=""/>
  <member type="way" ref="170778349" role="forward"/>
  <member type="way" ref="1056798608" role="forward"/>
  <member type="way" ref="1056798607" role="forward"/>
  <member type="way" ref="428090368" role="forward"/>
  <member type="way" ref="428090377" role="forward"/>
  <member type="way" ref="428090343" role="forward"/>
  <member type="way" ref="428090372" role="forward"/>
  <member type="way" ref="622519699" role="forward"/>
  <member type="way" ref="428090354" role="forward"/>
  <member type="way" ref="428090369" role="forward"/>
  <member type="way" ref="428090350" role="forward"/>
  <member type="way" ref="371236482" role="forward"/>
  <member type="way" ref="484846149" role="forward"/>
  <member type="way" ref="428090383" role="forward"/>
  <member type="way" ref="428090379" role="forward"/>
  <member type="way" ref="882820179" role="forward"/>
  <member type="way" ref="428090382" role="forward"/>
  <member type="way" ref="428090366" role="forward"/>
  <member type="way" ref="428090331" role="forward"/>
  <member type="way" ref="428090347" role="forward"/>
  <member type="way" ref="428090373" role="forward"/>
  <member type="way" ref="309274292" role="forward"/>
  <member type="way" ref="332333391" role="forward"/>
  <member type="way" ref="428093874" role="forward"/>
  <member type="way" ref="428093877" role="forward"/>
  <member type="way" ref="428093880" role="forward"/>
  <member type="way" ref="428093878" role="forward"/>
  <member type="way" ref="428093873" role="forward"/>
  <member type="way" ref="428093876" role="forward"/>
  <member type="way" ref="428093872" role="forward"/>
  <member type="way" ref="393066999" role="forward"/>
  <member type="way" ref="429678421" role="forward"/>
  <member type="way" ref="264249257" role="forward"/>
  <member type="way" ref="340868155" role="forward"/>
  <member type="way" ref="6134893" role=""/>
  <member type="way" ref="340868158" role=""/>
  <member type="way" ref="55199748" role=""/>
  <member type="way" ref="55199749" role=""/>
  <member type="way" ref="225166172" role=""/>
  <member type="way" ref="225166182" role=""/>
  <member type="way" ref="368376593" role=""/>
  <member type="way" ref="374372961" role=""/>
  <member type="way" ref="624379326" role=""/>
  <member type="way" ref="758492830" role=""/>
  <member type="way" ref="1029329143" role=""/>
  <member type="way" ref="428087927" role=""/>
  <member type="way" ref="289487358" role=""/>
  <member type="way" ref="369918381" role=""/>
  <member type="way" ref="289487356" role=""/>
  <member type="way" ref="428087378" role=""/>
  <member type="way" ref="428087379" role=""/>
  <member type="way" ref="369918382" role=""/>
  <member type="way" ref="340226478" role=""/>
  <member type="way" ref="340226474" role=""/>
  <member type="way" ref="738293635" role=""/>
  <member type="way" ref="428074287" role=""/>
  <member type="way" ref="368214241" role=""/>
  <member type="way" ref="289487353" role=""/>
  <member type="way" ref="289487355" role=""/>
  <member type="way" ref="368214242" role=""/>
  <member type="way" ref="428074285" role=""/>
  <member type="way" ref="368214240" role=""/>
  <member type="way" ref="428074284" role=""/>
  <member type="way" ref="368212456" role=""/>
  <member type="way" ref="289492491" role=""/>
  <member type="way" ref="428074288" role=""/>
  <member type="way" ref="428074290" role=""/>
  <member type="way" ref="428074283" role=""/>
  <member type="way" ref="289492521" role=""/>
  <member type="way" ref="428284374" role=""/>
  <member type="way" ref="289487329" role=""/>
  <member type="way" ref="428284370" role=""/>
  <member type="way" ref="289492490" role=""/>
  <member type="way" ref="289492481" role=""/>
  <member type="way" ref="428070322" role=""/>
  <member type="way" ref="428070314" role=""/>
  <member type="way" ref="428070320" role=""/>
  <member type="way" ref="428070319" role=""/>
  <member type="way" ref="763001432" role=""/>
  <member type="way" ref="428070313" role=""/>
  <member type="way" ref="428070311" role=""/>
  <member type="way" ref="428070318" role=""/>
  <member type="way" ref="289492482" role=""/>
  <member type="way" ref="1038617080" role=""/>
  <member type="way" ref="428070316" role=""/>
  <member type="way" ref="428070312" role=""/>
  <member type="way" ref="428070315" role=""/>
  <member type="way" ref="428070317" role=""/>
  <member type="way" ref="1038617079" role=""/>
  <member type="way" ref="396298420" role=""/>
  <member type="way" ref="761160184" role=""/>
  <member type="way" ref="428286751" role=""/>
  <member type="way" ref="428286747" role=""/>
  <member type="way" ref="635146829" role=""/>
  <member type="way" ref="428286749" role=""/>
  <member type="way" ref="428286746" role=""/>
  <member type="way" ref="428286752" role=""/>
  <member type="way" ref="634567346" role=""/>
  <member type="way" ref="340226481" role=""/>
  <member type="way" ref="340226480" role=""/>
  <member type="way" ref="428072706" role=""/>
  <member type="way" ref="428072709" role=""/>
  <member type="way" ref="428072708" role=""/>
  <member type="way" ref="428072713" role=""/>
  <member type="way" ref="428072711" role=""/>
  <member type="way" ref="428072714" role=""/>
  <member type="way" ref="1010488771" role=""/>
  <member type="way" ref="428291308" role=""/>
  <member type="way" ref="1000739744" role=""/>
  <member type="way" ref="1000739747" role=""/>
  <member type="way" ref="1000739745" role=""/>
  <member type="way" ref="340226479" role=""/>
  <member type="way" ref="340226477" role=""/>
  <member type="way" ref="700649826" role=""/>
  <member type="way" ref="700649827" role=""/>
  <member type="way" ref="771639071" role=""/>
  <member type="way" ref="661081862" role=""/>
  <member type="way" ref="686373009" role=""/>
  <member type="way" ref="792021391" role=""/>
  <member type="way" ref="340226482" role=""/>
  <member type="way" ref="792021393" role=""/>
  <member type="way" ref="701270070" role=""/>
  <member type="way" ref="661081861" role=""/>
  <member type="way" ref="291219269" role=""/>
  <member type="way" ref="289490202" role=""/>
  <member type="way" ref="771639070" role=""/>
  <member type="way" ref="289490201" role=""/>
  <member type="way" ref="289490196" role=""/>
  <member type="way" ref="339795157" role=""/>
  <member type="way" ref="289490197" role=""/>
  <member type="way" ref="289490198" role=""/>
  <member type="way" ref="289490199" role=""/>
  <member type="way" ref="289490200" role=""/>
  <member type="way" ref="339795152" role=""/>
  <member type="way" ref="693914913" role=""/>
  <member type="way" ref="693914916" role=""/>
  <member type="way" ref="339795151" role=""/>
  <member type="way" ref="339795160" role=""/>
  <member type="way" ref="339795155" role=""/>
  <member type="way" ref="339795156" role=""/>
  <member type="way" ref="339795154" role=""/>
  <member type="way" ref="290619882" role=""/>
  <member type="way" ref="339795153" role=""/>
  <member type="way" ref="290619883" role=""/>
  <member type="way" ref="971535682" role=""/>
  <member type="way" ref="971535681" role=""/>
  <member type="way" ref="340246955" role=""/>
  <member type="way" ref="838032371" role=""/>
  <member type="way" ref="339795149" role=""/>
  <member type="way" ref="838032367" role=""/>
  <member type="way" ref="838032368" role=""/>
  <member type="way" ref="838032369" role=""/>
  <member type="way" ref="838032370" role=""/>
  <member type="way" ref="773762993" role=""/>
  <member type="way" ref="773762994" role=""/>
  <member type="way" ref="1031572027" role=""/>
  <member type="way" ref="1031572024" role=""/>
  <member type="way" ref="1031572026" role=""/>
  <member type="way" ref="1031572025" role=""/>
  <member type="way" ref="289489664" role=""/>
  <member type="way" ref="289490181" role=""/>
  <member type="way" ref="340387311" role=""/>
  <member type="way" ref="340387314" role=""/>
  <member type="way" ref="340387313" role=""/>
  <member type="way" ref="476758719" role=""/>
  <member type="way" ref="927497094" role=""/>
  <member type="way" ref="476758715" role=""/>
  <member type="way" ref="476758716" role=""/>
  <member type="way" ref="640258378" role=""/>
  <member type="way" ref="640258377" role=""/>
  <member type="way" ref="476758717" role=""/>
  <member type="way" ref="476758718" role=""/>
  <member type="way" ref="927497104" role=""/>
  <member type="way" ref="289489666" role=""/>
  <member type="way" ref="476758721" role=""/>
  <member type="way" ref="476758722" role=""/>
  <member type="way" ref="605259955" role=""/>
  <member type="way" ref="476758725" role=""/>
  <member type="way" ref="951579737" role=""/>
  <member type="way" ref="638994166" role=""/>
  <member type="way" ref="476758723" role=""/>
  <member type="way" ref="476758724" role=""/>
  <member type="way" ref="431072109" role=""/>
  <member type="way" ref="290619881" role=""/>
  <member type="way" ref="125113304" role=""/>
  <member type="way" ref="476758695" role=""/>
  <member type="way" ref="476758706" role=""/>
  <member type="way" ref="908622724" role=""/>
  <member type="way" ref="908622718" role=""/>
  <member type="way" ref="476758704" role=""/>
  <member type="way" ref="476758703" role=""/>
  <member type="way" ref="6125718" role=""/>
  <member type="way" ref="430797513" role=""/>
  <member type="way" ref="430797512" role=""/>
  <member type="way" ref="476758696" role=""/>
  <member type="way" ref="430797514" role=""/>
  <member type="way" ref="476758697" role=""/>
  <member type="way" ref="476758698" role=""/>
  <member type="way" ref="430813199" role=""/>
  <member type="way" ref="476758699" role=""/>
  <member type="way" ref="476758700" role=""/>
  <member type="way" ref="430813198" role=""/>
  <member type="way" ref="476758701" role=""/>
  <member type="way" ref="476758702" role=""/>
  <member type="way" ref="61014863" role=""/>
  <member type="way" ref="6130338" role="forward"/>
  <member type="way" ref="289490221" role="forward"/>
  <member type="way" ref="61014862" role="forward"/>
  <member type="way" ref="340392694" role="forward"/>
  <member type="way" ref="290090731" role=""/>
  <member type="way" ref="431072108" role=""/>
  <member type="way" ref="772623691" role=""/>
  <member type="way" ref="772623690" role=""/>
  <member type="way" ref="437078516" role=""/>
  <member type="way" ref="173554479" role=""/>
  <member type="way" ref="37419352" role=""/>
  <member type="way" ref="37419354" role=""/>
  <member type="way" ref="6134896" role=""/>
  <member type="way" ref="37405619" role=""/>
  <member type="way" ref="37405620" role=""/>
  <member type="way" ref="289490215" role=""/>
  <member type="way" ref="289490214" role=""/>
  <member type="way" ref="289490216" role=""/>
  <member type="way" ref="156900971" role=""/>
  <member type="way" ref="951360930" role=""/>
  <member type="way" ref="437078534" role=""/>
  <member type="way" ref="289490217" role=""/>
  <member type="way" ref="476758686" role=""/>
  <member type="way" ref="340392693" role=""/>
  <member type="way" ref="437078517" role=""/>
  <member type="way" ref="107644836" role=""/>
  <member type="way" ref="290776345" role=""/>
  <member type="way" ref="340561337" role=""/>
  <member type="way" ref="340561334" role=""/>
  <member type="way" ref="340561335" role=""/>
  <member type="way" ref="886603235" role=""/>
  <member type="way" ref="340470388" role=""/>
  <member type="way" ref="215344024" role=""/>
  <member type="way" ref="951261477" role=""/>
  <member type="way" ref="951261475" role=""/>
  <member type="way" ref="951261476" role=""/>
  <member type="way" ref="951261479" role=""/>
  <member type="way" ref="92458277" role=""/>
  <member type="way" ref="92458306" role=""/>
  <member type="way" ref="343544182" role=""/>
  <member type="way" ref="430919748" role=""/>
  <member type="way" ref="430876292" role=""/>
  <member type="way" ref="374045742" role=""/>
  <member type="way" ref="340470426" role=""/>
  <member type="way" ref="89694844" role=""/>
  <member type="way" ref="340470422" role=""/>
  <member type="way" ref="340470424" role=""/>
  <member type="way" ref="340470425" role=""/>
  <member type="way" ref="372877051" role=""/>
  <member type="way" ref="430876308" role=""/>
  <member type="way" ref="220971379" role=""/>
  <member type="way" ref="6130177" role=""/>
  <member type="way" ref="37023497" role="forward"/>
  <member type="way" ref="61015011" role="forward"/>
  <member type="way" ref="118776267" role="forward"/>
  <member type="way" ref="239007534" role="forward"/>
  <member type="way" ref="239007535" role="forward"/>
  <member type="way" ref="38522580" role="forward"/>
  <member type="way" ref="38522581" role="forward"/>
  <member type="way" ref="61015105" role="forward"/>
  <member type="way" ref="61015106" role="forward"/>
  <member type="way" ref="61015101" role="forward"/>
  <member type="way" ref="61015100" role="forward"/>
  <member type="way" ref="118776283" role="forward"/>
  <member type="way" ref="61015099" role="forward"/>
  <member type="way" ref="38522578" role="forward"/>
  <member type="way" ref="38522579" role="forward"/>
  <member type="way" ref="239007539" role="forward"/>
  <member type="way" ref="239007540" role="forward"/>
  <member type="way" ref="61015013" role="forward"/>
  <member type="way" ref="340470423" role="forward"/>
  <member type="way" ref="61015107" role="forward"/>
  <member type="way" ref="61015102" role="forward"/>
  <member type="way" ref="61015103" role="forward"/>
  <member type="way" ref="220970708" role="forward"/>
  <member type="way" ref="118776304" role="forward"/>
  <member type="way" ref="39015442" role="forward"/>
  <member type="way" ref="39015443" role=""/>
  <member type="way" ref="686373027" role=""/>
  <member type="way" ref="220427471" role=""/>
  <member type="way" ref="220427472" role=""/>
  <member type="way" ref="220195173" role=""/>
  <member type="way" ref="685999122" role=""/>
  <member type="way" ref="220198097" role=""/>
  <member type="way" ref="6139136" role=""/>
  <member type="way" ref="305677029" role=""/>
  <member type="way" ref="219620419" role=""/>
  <member type="way" ref="6136634" role=""/>
  <member type="way" ref="6139139" role=""/>
  <member type="way" ref="685999117" role=""/>
  <member type="way" ref="662524253" role=""/>
  <member type="way" ref="6139143" role=""/>
  <member type="way" ref="799537911" role=""/>
  <member type="way" ref="685999091" role=""/>
  <member type="way" ref="685999116" role=""/>
  <member type="way" ref="622937977" role=""/>
  <member type="way" ref="662524252" role=""/>
  <member type="way" ref="685999105" role=""/>
  <member type="way" ref="35134866" role=""/>
  <member type="way" ref="35134867" role=""/>
  <member type="way" ref="964855814" role=""/>
  <member type="way" ref="35156490" role=""/>
  <member type="way" ref="35156489" role=""/>
  <member type="way" ref="173554507" role=""/>
  <member type="way" ref="177665287" role=""/>
  <member type="way" ref="220947787" role=""/>
  <member type="way" ref="479444923" role=""/>
  <member type="way" ref="479444906" role=""/>
  <member type="way" ref="479444895" role=""/>
  <member type="way" ref="220947788" role=""/>
  <member type="way" ref="22711625" role=""/>
  <member type="way" ref="173554477" role=""/>
  <member type="way" ref="35136365" role=""/>
  <member type="way" ref="500267298" role=""/>
  <member type="way" ref="500267296" role=""/>
  <member type="way" ref="35136366" role=""/>
  <member type="way" ref="29376926" role=""/>
  <member type="way" ref="173554480" role=""/>
  <member type="way" ref="173554483" role=""/>
  <member type="way" ref="366586455" role=""/>
  <member type="way" ref="366586473" role=""/>
  <member type="way" ref="22711757" role=""/>
  <member type="way" ref="37317918" role=""/>
  <member type="way" ref="754168345" role=""/>
  <member type="way" ref="318750462" role=""/>
  <member type="way" ref="374376136" role=""/>
  <member type="way" ref="318750463" role=""/>
  <member type="way" ref="669854154" role=""/>
  <member type="way" ref="669854153" role=""/>
  <member type="way" ref="318414284" role=""/>
  <member type="way" ref="318414285" role=""/>
  <member type="way" ref="22712936" role=""/>
  <member type="way" ref="909184815" role=""/>
  <member type="way" ref="926451280" role=""/>
  <member type="way" ref="669249797" role=""/>
  <member type="way" ref="318414286" role=""/>
  <member type="way" ref="374757838" role=""/>
  <member type="way" ref="36871179" role=""/>
  <member type="way" ref="318161807" role=""/>
  <member type="way" ref="35136500" role=""/>
  <member type="way" ref="22709503" role=""/>
  <member type="way" ref="35136499" role=""/>
  <member type="way" ref="374757835" role=""/>
  <member type="way" ref="22712925" role=""/>
  <member type="way" ref="891763931" role=""/>
  <member type="way" ref="224740205" role=""/>
  <member type="way" ref="355756837" role=""/>
  <member type="way" ref="853105892" role=""/>
  <member type="way" ref="853105890" role=""/>
  <member type="way" ref="853105891" role=""/>
  <member type="way" ref="908516707" role=""/>
  <member type="way" ref="908516930" role=""/>
  <member type="way" ref="317325906" role=""/>
  <member type="way" ref="168821527" role=""/>
  <member type="way" ref="168821528" role=""/>
  <member type="way" ref="286324635" role=""/>
  <member type="way" ref="168821526" role=""/>
  <member type="way" ref="168821529" role=""/>
  <member type="way" ref="222973251" role=""/>
  <member type="way" ref="222973249" role=""/>
  <member type="way" ref="222973248" role=""/>
  <member type="way" ref="222973250" role=""/>
  <member type="way" ref="222973253" role="forward"/>
  <member type="way" ref="222973252" role="forward"/>
  <member type="way" ref="209490325" role=""/>
  <member type="way" ref="224740204" role=""/>
  <member type="way" ref="68668162" role=""/>
  <member type="way" ref="22709196" role=""/>
  <member type="way" ref="377796656" role=""/>
  <member type="way" ref="1031561349" role=""/>
  <member type="way" ref="125924751" role=""/>
  <member type="way" ref="758470757" role=""/>
  <member type="way" ref="191174683" role=""/>
  <member type="way" ref="191174687" role=""/>
  <member type="way" ref="218846124" role=""/>
  <member type="way" ref="833688121" role=""/>
  <member type="way" ref="22711047" role=""/>
  <member type="way" ref="479213594" role=""/>
  <member type="way" ref="22710763" role=""/>
  <member type="way" ref="169411755" role=""/>
  <member type="way" ref="1029059063" role=""/>
  <member type="way" ref="1022000709" role=""/>
  <member type="way" ref="1022000336" role=""/>
  <member type="way" ref="169411754" role=""/>
  <member type="way" ref="22711049" role=""/>
  <member type="way" ref="223312769" role=""/>
  <member type="way" ref="223312761" role=""/>
  <member type="way" ref="223312764" role=""/>
  <member type="way" ref="223312771" role=""/>
  <member type="way" ref="374010395" role=""/>
  <member type="way" ref="374010396" role=""/>
  <member type="way" ref="22710762" role=""/>
  <member type="way" ref="22711050" role=""/>
  <member type="way" ref="914533918" role=""/>
  <member type="way" ref="914533917" role=""/>
  <member type="way" ref="578300640" role=""/>
  <member type="way" ref="22710764" role=""/>
  <member type="way" ref="578289992" role=""/>
  <member type="way" ref="22711046" role=""/>
  <member type="way" ref="577365164" role=""/>
  <member type="way" ref="273292497" role=""/>
  <member type="way" ref="273292496" role=""/>
  <member type="way" ref="22710761" role=""/>
  <member type="way" ref="22711048" role=""/>
  <member type="way" ref="417746550" role=""/>
  <member type="way" ref="5263682" role=""/>
  <member type="way" ref="285829466" role=""/>
  <member type="way" ref="173554537" role=""/>
  <member type="way" ref="173554485" role=""/>
  <member type="way" ref="23283305" role=""/>
  <member type="way" ref="68830774" role=""/>
  <member type="way" ref="5257101" role=""/>
  <member type="way" ref="32232036" role=""/>
  <member type="way" ref="5260213" role=""/>
  <member type="way" ref="958988306" role=""/>
  <member type="way" ref="958988307" role=""/>
  <member type="way" ref="889135351" role=""/>
  <member type="way" ref="607411237" role=""/>
  <member type="way" ref="173554557" role=""/>
  <member type="way" ref="5260200" role=""/>
  <member type="way" ref="23283322" role=""/>
  <member type="way" ref="23283318" role=""/>
  <member type="way" ref="607052431" role=""/>
  <member type="way" ref="607052432" role=""/>
  <member type="way" ref="755350422" role=""/>
  <member type="way" ref="5260194" role=""/>
  <member type="way" ref="612020551" role=""/>
  <member type="way" ref="612020550" role=""/>
  <member type="way" ref="611865263" role=""/>
  <member type="way" ref="614480419" role=""/>
  <member type="way" ref="612338252" role=""/>
  <member type="way" ref="612338253" role=""/>
  <member type="way" ref="612020524" role=""/>
  <member type="way" ref="886339803" role=""/>
  <member type="way" ref="611866316" role=""/>
  <member type="way" ref="611865254" role=""/>
  <member type="way" ref="611865255" role=""/>
  <member type="way" ref="612338251" role=""/>
  <member type="way" ref="612338249" role=""/>
  <member type="way" ref="755350409" role=""/>
  <member type="way" ref="5265255" role=""/>
  <member type="way" ref="1005386402" role=""/>
  <member type="way" ref="755350408" role=""/>
  <member type="way" ref="540121638" role=""/>
  <member type="way" ref="338075762" role=""/>
  <member type="way" ref="865808793" role=""/>
  <member type="way" ref="5262483" role=""/>
  <member type="way" ref="215457191" role=""/>
  <member type="way" ref="753827152" role=""/>
  <member type="way" ref="103220560" role=""/>
  <member type="way" ref="890917530" role=""/>
  <member type="way" ref="5264369" role=""/>
  <member type="way" ref="122422342" role=""/>
  <member type="way" ref="122422350" role=""/>
  <member type="way" ref="5262581" role=""/>
  <member type="way" ref="5259818" role=""/>
  <member type="way" ref="861292043" role=""/>
  <member type="way" ref="111559167" role=""/>
  <member type="way" ref="958941313" role=""/>
  <member type="way" ref="122438212" role=""/>
  <member type="way" ref="32199598" role=""/>
  <member type="way" ref="32199559" role=""/>
  <member type="way" ref="936428157" role=""/>
  <member type="way" ref="173554538" role=""/>
  <member type="way" ref="440151987" role=""/>
  <member type="way" ref="5263363" role=""/>
  <member type="way" ref="936428152" role=""/>
  <member type="way" ref="32198573" role=""/>
  <member type="way" ref="677541487" role=""/>
  <member type="way" ref="173554508" role=""/>
  <member type="way" ref="665130400" role=""/>
  <member type="way" ref="936428124" role=""/>
  <member type="way" ref="5909072" role=""/>
  <member type="way" ref="936428120" role=""/>
  <member type="way" ref="665130399" role=""/>
  <member type="way" ref="261089226" role=""/>
  <member type="way" ref="261089225" role=""/>
  <member type="way" ref="53830423" role=""/>
  <member type="way" ref="665130854" role=""/>
  <member type="way" ref="23590024" role=""/>
  <member type="way" ref="550165129" role=""/>
  <member type="way" ref="936428100" role=""/>
  <member type="way" ref="23590022" role=""/>
  <member type="way" ref="173554541" role=""/>
  <member type="way" ref="476867472" role=""/>
  <member type="way" ref="261435460" role=""/>
  <member type="way" ref="32198567" role=""/>
  <member type="way" ref="673653980" role=""/>
  <member type="way" ref="5265854" role=""/>
  <member type="way" ref="215457335" role=""/>
  <member type="way" ref="173554543" role=""/>
  <member type="way" ref="936428142" role=""/>
  <member type="way" ref="32198034" role=""/>
  <member type="way" ref="550007918" role=""/>
  <member type="way" ref="673653981" role=""/>
  <member type="way" ref="32198568" role=""/>
  <member type="way" ref="215457334" role=""/>
  <member type="way" ref="936428153" role=""/>
  <member type="way" ref="936428155" role=""/>
  <member type="way" ref="215457337" role=""/>
  <member type="way" ref="215459752" role=""/>
  <member type="way" ref="215459753" role=""/>
  <member type="way" ref="225166180" role=""/>
  <member type="way" ref="225166177" role=""/>
  <member type="way" ref="1051284785" role=""/>
  <member type="way" ref="225166174" role=""/>
  <member type="way" ref="984375988" role=""/>
  <member type="way" ref="340868157" role=""/>
  <member type="way" ref="170781639" role="forward"/>
  <member type="way" ref="340868156" role="forward"/>
  <member type="way" ref="362110184" role="forward"/>
  <member type="way" ref="418780885" role="forward"/>
  <member type="way" ref="362110186" role="forward"/>
  <member type="way" ref="376482403" role="forward"/>
  <member type="way" ref="362110185" role="forward"/>
  <member type="way" ref="362110188" role=""/>
  <member type="way" ref="362110189" role="forward"/>
  <member type="way" ref="362110192" role="forward"/>
  <member type="way" ref="362110191" role="forward"/>
  <member type="way" ref="418780878" role="forward"/>
  <member type="way" ref="362110190" role="forward"/>
  <member type="way" ref="418780892" role="forward"/>
  <member type="way" ref="363541370" role="forward"/>
  <member type="way" ref="363661814" role="forward"/>
  <member type="way" ref="418744621" role="forward"/>
  <member type="way" ref="363661816" role="forward"/>
  <member type="way" ref="363661815" role="forward"/>
  <member type="way" ref="418744616" role="forward"/>
  <member type="way" ref="363661818" role="forward"/>
  <member type="way" ref="418744626" role="forward"/>
  <member type="way" ref="428092551" role=""/>
  <member type="way" ref="428092547" role=""/>
  <member type="way" ref="428092560" role=""/>
  <member type="way" ref="62149965" role=""/>
  <member type="way" ref="428092550" role=""/>
  <member type="way" ref="170778334" role="forward"/>
  <member type="way" ref="738297438" role="forward"/>
  <member type="way" ref="738297437" role="forward"/>
  <member type="way" ref="428092549" role=""/>
  <member type="way" ref="170778347" role=""/>
  <member type="way" ref="428092559" role=""/>
  <member type="way" ref="428092557" role=""/>
  <member type="way" ref="428092555" role=""/>
  <member type="way" ref="742686380" role=""/>
  <member type="way" ref="170778345" role="forward"/>
  <member type="way" ref="400497084" role="forward"/>
  <member type="way" ref="1051783209" role="forward"/>
  <member type="way" ref="428092548" role=""/>
  <member type="way" ref="428092552" role=""/>
  <member type="way" ref="428092558" role=""/>
  <member type="way" ref="428092553" role=""/>
  <member type="way" ref="170778339" role=""/>
  <member type="way" ref="170778344" role="forward"/>
  <member type="way" ref="170778338" role="forward"/>
  <member type="way" ref="428079968" role=""/>
  <member type="way" ref="428079963" role=""/>
  <member type="way" ref="428079969" role=""/>
  <member type="way" ref="368670627" role=""/>
  <member type="way" ref="428079960" role=""/>
  <member type="way" ref="428079966" role=""/>
  <member type="way" ref="428300269" role=""/>
  <member type="way" ref="420088413" role=""/>
  <member type="way" ref="420088404" role=""/>
  <member type="way" ref="420088408" role=""/>
  <member type="way" ref="754168334" role=""/>
  <member type="way" ref="393080329" role=""/>
  <member type="way" ref="754168333" role=""/>
  <member type="way" ref="420088411" role=""/>
  <member type="way" ref="420088402" role=""/>
  <member type="way" ref="450175340" role="forward"/>
  <member type="way" ref="450175339" role="forward"/>
  <member type="way" ref="131272727" role=""/>
  <member type="way" ref="450175338" role="forward"/>
  <member type="way" ref="1031921153" role="forward"/>
  <member type="way" ref="1031921152" role="forward"/>
  <member type="way" ref="963461633" role="forward"/>
  <member type="way" ref="732487080" role=""/>
  <member type="way" ref="732487067" role=""/>
  <member type="way" ref="131272717" role=""/>
  <member type="way" ref="1033885108" role=""/>
  <member type="way" ref="963461628" role=""/>
  <member type="way" ref="450175337" role="forward"/>
  <member type="way" ref="1031921151" role="forward"/>
  <member type="way" ref="547717672" role=""/>
  <member type="way" ref="677542641" role=""/>
  <member type="way" ref="738217484" role=""/>
  <member type="way" ref="738293638" role=""/>
  <member type="way" ref="738293639" role=""/>
  <member type="way" ref="738293636" role=""/>
  <member type="way" ref="738293637" role=""/>
  <member type="way" ref="751514040" role=""/>
  <member type="way" ref="751514039" role=""/>
  <member type="way" ref="761160183" role=""/>
  <member type="way" ref="761160182" role=""/>
  <member type="way" ref="761160181" role=""/>
  <member type="way" ref="761160180" role=""/>
  <member type="way" ref="761160179" role=""/>
  <member type="way" ref="761160178" role=""/>
  <member type="way" ref="761160177" role=""/>
  <member type="way" ref="761160176" role=""/>
  <member type="way" ref="761160175" role=""/>
  <member type="way" ref="761160174" role=""/>
  <member type="way" ref="761160173" role=""/>
  <member type="way" ref="761160172" role=""/>
  <member type="way" ref="761160171" role=""/>
  <member type="way" ref="761160170" role=""/>
  <member type="way" ref="791916817" role=""/>
  <member type="way" ref="791916816" role=""/>
  <member type="way" ref="791916815" role=""/>
  <member type="way" ref="792021392" role=""/>
  <member type="way" ref="1053291748" role=""/>
  <member type="way" ref="792024856" role=""/>
  <member type="way" ref="792024857" role=""/>
  <member type="way" ref="828412980" role=""/>
  <member type="way" ref="828412979" role=""/>
  <member type="way" ref="828412978" role=""/>
  <member type="way" ref="855715956" role=""/>
  <member type="way" ref="855715955" role=""/>
  <member type="way" ref="890917531" role=""/>
  <member type="way" ref="890917532" role=""/>
  <member type="way" ref="927497099" role=""/>
  <member type="way" ref="927497100" role=""/>
  <member type="way" ref="927497101" role=""/>
  <member type="way" ref="927497102" role=""/>
  <member type="way" ref="927497103" role=""/>
  <member type="way" ref="971535683" role=""/>
  <member type="way" ref="1000739746" role=""/>
  <member type="way" ref="1014018947" role=""/>
  <member type="way" ref="1014018951" role=""/>
  <member type="way" ref="1014018949" role=""/>
  <member type="way" ref="1031561350" role=""/>
  <member type="way" ref="1031561351" role=""/>
  <member type="way" ref="1038617081" role=""/>
  <tag k="is_in:state" v="WA"/>
  <tag k="name" v="US 99 alignment (former)"/>
  <tag k="note" v="last pre-freeway alignment of US 99"/>
  <tag k="old_ref" v="US 99"/>
  <tag k="route" v="road"/>
  <tag k="source" v="old USGS topos;county maps from 1940 census"/>
  <tag k="type" v="route"/>
 </relation>
 <relation id="2855416" visible="true" version="229" changeset="121232122" timestamp="2022-05-20T09:09:04Z" user="pmarkina_lyft" uid="12195744">
  <member type="way" ref="37405620" role=""/>
  <member type="way" ref="289490215" role=""/>
  <member type="way" ref="289490214" role=""/>
  <member type="way" ref="289490216" role=""/>
  <member type="way" ref="156900971" role=""/>
  <member type="way" ref="951360930" role=""/>
  <member type="way" ref="437078534" role=""/>
  <member type="way" ref="289490217" role=""/>
  <member type="way" ref="476758686" role=""/>
  <member type="way" ref="290090731" role=""/>
  <member type="way" ref="61014862" role="forward"/>
  <member type="way" ref="340392694" role="forward"/>
  <member type="way" ref="289490221" role="forward"/>
  <member type="way" ref="6130338" role="forward"/>
  <member type="way" ref="430797513" role=""/>
  <member type="way" ref="430797512" role=""/>
  <member type="way" ref="476758696" role=""/>
  <member type="way" ref="430797514" role=""/>
  <member type="way" ref="476758697" role=""/>
  <member type="way" ref="476758698" role=""/>
  <member type="way" ref="430813199" role=""/>
  <member type="way" ref="476758699" role=""/>
  <member type="way" ref="476758700" role=""/>
  <member type="way" ref="430813198" role=""/>
  <member type="way" ref="476758701" role=""/>
  <member type="way" ref="476758702" role=""/>
  <member type="way" ref="61014863" role=""/>
  <member type="way" ref="6125718" role=""/>
  <member type="way" ref="476758703" role=""/>
  <member type="way" ref="476758704" role=""/>
  <member type="way" ref="908622718" role=""/>
  <member type="way" ref="908622724" role=""/>
  <member type="way" ref="476758706" role=""/>
  <member type="way" ref="173554559" role="forward"/>
  <member type="way" ref="368212457" role="forward"/>
  <member type="way" ref="173554560" role="forward"/>
  <member type="way" ref="125113304" role="forward"/>
  <member type="way" ref="476758695" role="forward"/>
  <member type="way" ref="290619881" role=""/>
  <member type="way" ref="431072109" role=""/>
  <member type="way" ref="476758724" role=""/>
  <member type="way" ref="476758723" role=""/>
  <member type="way" ref="638994166" role=""/>
  <member type="way" ref="951579737" role=""/>
  <member type="way" ref="476758725" role=""/>
  <member type="way" ref="605259955" role=""/>
  <member type="way" ref="476758722" role=""/>
  <member type="way" ref="476758721" role=""/>
  <member type="way" ref="289489666" role=""/>
  <member type="way" ref="927497104" role=""/>
  <member type="way" ref="476758718" role=""/>
  <member type="way" ref="476758717" role=""/>
  <member type="way" ref="640258377" role=""/>
  <member type="way" ref="640258378" role=""/>
  <member type="way" ref="476758716" role=""/>
  <member type="way" ref="476758715" role=""/>
  <member type="way" ref="927497094" role=""/>
  <member type="way" ref="476758719" role=""/>
  <member type="way" ref="340387313" role=""/>
  <member type="way" ref="340387314" role=""/>
  <member type="way" ref="340387311" role=""/>
  <member type="way" ref="289490181" role=""/>
  <member type="way" ref="289489664" role=""/>
  <member type="way" ref="1031572025" role=""/>
  <member type="way" ref="1031572026" role=""/>
  <member type="way" ref="1031572024" role=""/>
  <member type="way" ref="1031572027" role=""/>
  <member type="way" ref="773762994" role=""/>
  <member type="way" ref="773762993" role=""/>
  <member type="way" ref="838032370" role=""/>
  <member type="way" ref="838032368" role=""/>
  <member type="way" ref="339795160" role=""/>
  <member type="way" ref="339795151" role=""/>
  <member type="way" ref="693914916" role=""/>
  <member type="way" ref="693914913" role=""/>
  <member type="way" ref="339795152" role=""/>
  <member type="way" ref="289490200" role=""/>
  <member type="way" ref="289490199" role=""/>
  <member type="way" ref="289490198" role=""/>
  <member type="way" ref="289490197" role=""/>
  <member type="way" ref="339795157" role=""/>
  <member type="way" ref="289490196" role=""/>
  <member type="way" ref="289490201" role=""/>
  <member type="way" ref="771639070" role=""/>
  <member type="way" ref="289490202" role=""/>
  <member type="way" ref="291219269" role=""/>
  <member type="way" ref="661081861" role=""/>
  <member type="way" ref="771639071" role=""/>
  <member type="way" ref="661081862" role=""/>
  <member type="way" ref="686373009" role=""/>
  <member type="way" ref="792021391" role=""/>
  <member type="way" ref="340226482" role=""/>
  <member type="way" ref="792021393" role=""/>
  <member type="way" ref="701270070" role=""/>
  <member type="way" ref="700649827" role=""/>
  <member type="way" ref="700649826" role=""/>
  <member type="way" ref="340226477" role=""/>
  <member type="way" ref="340226479" role=""/>
  <member type="way" ref="1000739745" role=""/>
  <member type="way" ref="1000739747" role=""/>
  <member type="way" ref="1000739744" role=""/>
  <member type="way" ref="428291308" role=""/>
  <member type="way" ref="1010488771" role=""/>
  <member type="way" ref="428072714" role=""/>
  <member type="way" ref="428072711" role=""/>
  <member type="way" ref="428072713" role=""/>
  <member type="way" ref="428072708" role=""/>
  <member type="way" ref="428072709" role=""/>
  <member type="way" ref="428072706" role=""/>
  <member type="way" ref="340226480" role=""/>
  <member type="way" ref="340226481" role=""/>
  <member type="way" ref="634567346" role=""/>
  <member type="way" ref="428286752" role=""/>
  <member type="way" ref="428286746" role=""/>
  <member type="way" ref="428286749" role=""/>
  <member type="way" ref="635146829" role=""/>
  <member type="way" ref="428286747" role=""/>
  <member type="way" ref="428286751" role=""/>
  <member type="way" ref="761160184" role=""/>
  <member type="way" ref="396298420" role=""/>
  <member type="way" ref="1038617079" role=""/>
  <member type="way" ref="428070317" role=""/>
  <member type="way" ref="428070315" role=""/>
  <member type="way" ref="428070312" role=""/>
  <member type="way" ref="428070316" role=""/>
  <member type="way" ref="1038617080" role=""/>
  <member type="way" ref="289492482" role=""/>
  <member type="way" ref="428070318" role=""/>
  <member type="way" ref="428070311" role=""/>
  <member type="way" ref="428070313" role=""/>
  <member type="way" ref="763001432" role=""/>
  <member type="way" ref="428070319" role=""/>
  <member type="way" ref="428070320" role=""/>
  <member type="way" ref="428070314" role=""/>
  <member type="way" ref="428070322" role=""/>
  <member type="way" ref="289492481" role="forward"/>
  <member type="way" ref="428284374" role="forward"/>
  <member type="way" ref="289487329" role="forward"/>
  <member type="way" ref="428284370" role="forward"/>
  <member type="way" ref="289492490" role="forward"/>
  <member type="way" ref="428074289" role="forward"/>
  <member type="way" ref="428074282" role="forward"/>
  <member type="way" ref="428074286" role="forward"/>
  <member type="way" ref="289941198" role="forward"/>
  <member type="way" ref="340086099" role="forward"/>
  <member type="way" ref="289492523" role="forward"/>
  <member type="way" ref="289492521" role="forward"/>
  <member type="way" ref="428074283" role="forward"/>
  <member type="way" ref="428074290" role="forward"/>
  <member type="way" ref="428074288" role="forward"/>
  <member type="way" ref="289492491" role="forward"/>
  <member type="way" ref="368212456" role=""/>
  <member type="way" ref="428074284" role=""/>
  <member type="way" ref="368214240" role=""/>
  <member type="way" ref="428074285" role=""/>
  <member type="way" ref="368214242" role=""/>
  <member type="way" ref="289487355" role=""/>
  <member type="way" ref="289487353" role=""/>
  <member type="way" ref="368214241" role=""/>
  <member type="way" ref="428074287" role=""/>
  <member type="way" ref="738293635" role=""/>
  <member type="way" ref="340226474" role=""/>
  <member type="way" ref="340226478" role=""/>
  <member type="way" ref="738607667" role=""/>
  <member type="way" ref="738607665" role=""/>
  <member type="way" ref="738607668" role=""/>
  <member type="way" ref="428080694" role=""/>
  <member type="way" ref="369918382" role=""/>
  <member type="way" ref="428080638" role=""/>
  <member type="way" ref="428080659" role=""/>
  <member type="way" ref="428080678" role=""/>
  <member type="way" ref="428080707" role=""/>
  <member type="way" ref="428080665" role=""/>
  <member type="way" ref="428080629" role=""/>
  <member type="way" ref="428080672" role=""/>
  <member type="way" ref="428080682" role=""/>
  <member type="way" ref="428080649" role=""/>
  <member type="way" ref="428080633" role=""/>
  <member type="way" ref="428080623" role=""/>
  <member type="way" ref="428080643" role=""/>
  <member type="way" ref="428080618" role=""/>
  <member type="way" ref="428080715" role=""/>
  <member type="way" ref="739610307" role=""/>
  <member type="way" ref="739610305" role=""/>
  <member type="way" ref="428080725" role=""/>
  <member type="way" ref="428080654" role=""/>
  <member type="way" ref="428080688" role=""/>
  <member type="way" ref="428087741" role=""/>
  <member type="way" ref="428087380" role=""/>
  <member type="way" ref="624379321" role="forward"/>
  <member type="way" ref="624379317" role="forward"/>
  <member type="way" ref="624379312" role="forward"/>
  <member type="way" ref="624379307" role="forward"/>
  <member type="way" ref="624379302" role="forward"/>
  <member type="way" ref="624379298" role="forward"/>
  <member type="way" ref="624379293" role="forward"/>
  <member type="way" ref="624379288" role="forward"/>
  <member type="way" ref="624379284" role="forward"/>
  <member type="way" ref="624379279" role="forward"/>
  <member type="way" ref="624379274" role="forward"/>
  <member type="way" ref="980853549" role="forward"/>
  <member type="way" ref="747900862" role="forward"/>
  <member type="way" ref="624379326" role="forward"/>
  <member type="way" ref="758492830" role="forward"/>
  <member type="way" ref="1029329143" role="forward"/>
  <member type="way" ref="428087927" role="forward"/>
  <member type="way" ref="289487358" role="forward"/>
  <member type="way" ref="369918381" role="forward"/>
  <member type="way" ref="289487356" role="forward"/>
  <member type="way" ref="428087377" role="forward"/>
  <member type="way" ref="428087379" role="forward"/>
  <member type="way" ref="428087378" role="forward"/>
  <member type="way" ref="624379332" role="forward"/>
  <member type="way" ref="737703756" role="forward"/>
  <member type="way" ref="428080699" role="forward"/>
  <member type="way" ref="428087381" role="forward"/>
  <member type="way" ref="374372961" role=""/>
  <member type="way" ref="428093430" role=""/>
  <member type="way" ref="368376593" role=""/>
  <member type="way" ref="428093433" role=""/>
  <member type="way" ref="686214500" role=""/>
  <member type="way" ref="428093431" role=""/>
  <member type="way" ref="649219375" role=""/>
  <member type="way" ref="649219374" role=""/>
  <member type="way" ref="649219376" role=""/>
  <member type="way" ref="649219377" role=""/>
  <member type="way" ref="428093434" role=""/>
  <member type="way" ref="428093432" role=""/>
  <member type="way" ref="225166182" role=""/>
  <member type="way" ref="225166180" role="forward"/>
  <member type="way" ref="1051284785" role="forward"/>
  <member type="way" ref="225166177" role="forward"/>
  <member type="way" ref="428093429" role="forward"/>
  <member type="way" ref="225166174" role="forward"/>
  <member type="way" ref="984375988" role="forward"/>
  <member type="way" ref="340868157" role="forward"/>
  <member type="way" ref="170781639" role="forward"/>
  <member type="way" ref="340868156" role="forward"/>
  <member type="way" ref="428093420" role="forward"/>
  <member type="way" ref="983899944" role="forward"/>
  <member type="way" ref="170778349" role="forward"/>
  <member type="way" ref="428090368" role="forward"/>
  <member type="way" ref="428090377" role="forward"/>
  <member type="way" ref="428090343" role="forward"/>
  <member type="way" ref="428090372" role="forward"/>
  <member type="way" ref="622519699" role="forward"/>
  <member type="way" ref="428090354" role="forward"/>
  <member type="way" ref="428090369" role="forward"/>
  <member type="way" ref="428090350" role="forward"/>
  <member type="way" ref="371236482" role="forward"/>
  <member type="way" ref="484846149" role="forward"/>
  <member type="way" ref="428090383" role="forward"/>
  <member type="way" ref="428090379" role="forward"/>
  <member type="way" ref="882820179" role="forward"/>
  <member type="way" ref="428090382" role="forward"/>
  <member type="way" ref="428090366" role="forward"/>
  <member type="way" ref="428090331" role="forward"/>
  <member type="way" ref="428090347" role="forward"/>
  <member type="way" ref="428090373" role="forward"/>
  <member type="way" ref="622519738" role="forward"/>
  <member type="way" ref="428092126" role="forward"/>
  <member type="way" ref="428092278" role="forward"/>
  <member type="way" ref="428092279" role="forward"/>
  <member type="way" ref="428092110" role="forward"/>
  <member type="way" ref="428092112" role="forward"/>
  <member type="way" ref="428092120" role="forward"/>
  <member type="way" ref="758034460" role="forward"/>
  <member type="way" ref="428092095" role="forward"/>
  <member type="way" ref="309274292" role="forward"/>
  <member type="way" ref="428092108" role="forward"/>
  <member type="way" ref="428092111" role="forward"/>
  <member type="way" ref="428092118" role="forward"/>
  <member type="way" ref="428092105" role="forward"/>
  <member type="way" ref="428092107" role="forward"/>
  <member type="way" ref="428092117" role="forward"/>
  <member type="way" ref="428092096" role="forward"/>
  <member type="way" ref="428092094" role="forward"/>
  <member type="way" ref="428092106" role="forward"/>
  <member type="way" ref="428092114" role="forward"/>
  <member type="way" ref="428092088" role="forward"/>
  <member type="way" ref="428092092" role="forward"/>
  <member type="way" ref="428092119" role="forward"/>
  <member type="way" ref="428092115" role="forward"/>
  <member type="way" ref="428092141" role="forward"/>
  <member type="way" ref="428092140" role="forward"/>
  <member type="way" ref="332333391" role="forward"/>
  <member type="way" ref="428093874" role="forward"/>
  <member type="way" ref="428093877" role="forward"/>
  <member type="way" ref="428093880" role="forward"/>
  <member type="way" ref="428093878" role="forward"/>
  <member type="way" ref="428093873" role="forward"/>
  <member type="way" ref="428093876" role="forward"/>
  <member type="way" ref="428093872" role="forward"/>
  <member type="way" ref="393066999" role="forward"/>
  <member type="way" ref="225166172" role="forward"/>
  <member type="way" ref="55199749" role="forward"/>
  <member type="way" ref="55199748" role="forward"/>
  <member type="way" ref="340868158" role="forward"/>
  <member type="way" ref="6134893" role="forward"/>
  <member type="way" ref="340868155" role="forward"/>
  <member type="way" ref="428093415" role="forward"/>
  <member type="way" ref="428093419" role="forward"/>
  <member type="way" ref="264249257" role="forward"/>
  <member type="way" ref="429678421" role="forward"/>
  <member type="way" ref="428093418" role="forward"/>
  <member type="way" ref="371236481" role="forward"/>
  <member type="way" ref="371236483" role="forward"/>
  <member type="way" ref="428093421" role="forward"/>
  <member type="way" ref="428093422" role="forward"/>
  <member type="way" ref="428090371" role="forward"/>
  <member type="way" ref="428090360" role="forward"/>
  <member type="way" ref="428090375" role="forward"/>
  <member type="way" ref="428090336" role="forward"/>
  <member type="way" ref="428090381" role="forward"/>
  <member type="way" ref="484846145" role="forward"/>
  <member type="way" ref="428090374" role="forward"/>
  <member type="way" ref="428090334" role="forward"/>
  <member type="way" ref="428090335" role="forward"/>
  <member type="way" ref="428090332" role="forward"/>
  <member type="way" ref="428090333" role="forward"/>
  <member type="way" ref="428090376" role="forward"/>
  <member type="way" ref="428090340" role="forward"/>
  <member type="way" ref="428090367" role="forward"/>
  <member type="way" ref="428090378" role="forward"/>
  <member type="way" ref="428090338" role="forward"/>
  <member type="way" ref="428090370" role="forward"/>
  <member type="way" ref="428090339" role="forward"/>
  <member type="way" ref="428090380" role="forward"/>
  <member type="way" ref="622519732" role="forward"/>
  <member type="way" ref="428090337" role="forward"/>
  <member type="way" ref="428090330" role="forward"/>
  <member type="way" ref="428092124" role="forward"/>
  <member type="way" ref="428092101" role="forward"/>
  <member type="way" ref="332333392" role="forward"/>
  <member type="way" ref="428092098" role="forward"/>
  <member type="way" ref="428092121" role="forward"/>
  <member type="way" ref="428092109" role="forward"/>
  <member type="way" ref="428092091" role="forward"/>
  <member type="way" ref="428092104" role="forward"/>
  <member type="way" ref="428092113" role="forward"/>
  <member type="way" ref="428092090" role="forward"/>
  <member type="way" ref="428092103" role="forward"/>
  <member type="way" ref="428092123" role="forward"/>
  <member type="way" ref="428092097" role="forward"/>
  <member type="way" ref="428092116" role="forward"/>
  <member type="way" ref="428092087" role="forward"/>
  <member type="way" ref="428092089" role="forward"/>
  <member type="way" ref="428092125" role="forward"/>
  <member type="way" ref="428092122" role="forward"/>
  <member type="way" ref="428092093" role="forward"/>
  <member type="way" ref="170778350" role="forward"/>
  <member type="way" ref="428093885" role="forward"/>
  <member type="way" ref="428093882" role="forward"/>
  <member type="way" ref="428093884" role="forward"/>
  <member type="way" ref="428093879" role="forward"/>
  <member type="way" ref="428093889" role="forward"/>
  <member type="way" ref="428093875" role="forward"/>
  <member type="way" ref="428093887" role="forward"/>
  <member type="way" ref="428093883" role="forward"/>
  <member type="way" ref="428093888" role="forward"/>
  <member type="way" ref="383904285" role=""/>
  <member type="way" ref="59716360" role=""/>
  <member type="way" ref="428093886" role=""/>
  <member type="way" ref="591108189" role=""/>
  <member type="way" ref="428093881" role=""/>
  <member type="way" ref="591108191" role=""/>
  <member type="way" ref="170778339" role=""/>
  <member type="way" ref="428092553" role=""/>
  <member type="way" ref="428092558" role=""/>
  <member type="way" ref="428092552" role=""/>
  <member type="way" ref="428092548" role=""/>
  <member type="way" ref="170778344" role="forward"/>
  <member type="way" ref="170778345" role="forward"/>
  <member type="way" ref="400497084" role="forward"/>
  <member type="way" ref="1051783209" role="forward"/>
  <member type="way" ref="742686380" role=""/>
  <member type="way" ref="428092555" role=""/>
  <member type="way" ref="428092557" role=""/>
  <member type="way" ref="428092559" role=""/>
  <member type="way" ref="170778347" role=""/>
  <member type="way" ref="428092549" role=""/>
  <member type="way" ref="170778338" role="forward"/>
  <member type="way" ref="170778334" role="forward"/>
  <member type="way" ref="738297438" role="forward"/>
  <member type="way" ref="738297437" role="forward"/>
  <member type="way" ref="428092550" role=""/>
  <member type="way" ref="62149965" role=""/>
  <member type="way" ref="428092560" role=""/>
  <member type="way" ref="428092547" role=""/>
  <member type="way" ref="428092551" role=""/>
  <member type="way" ref="428300267" role=""/>
  <member type="way" ref="428300272" role=""/>
  <member type="way" ref="428300271" role=""/>
  <member type="way" ref="805978441" role=""/>
  <member type="way" ref="805978440" role=""/>
  <member type="way" ref="428300273" role=""/>
  <member type="way" ref="428300268" role=""/>
  <member type="way" ref="368670632" role=""/>
  <member type="way" ref="428079976" role="forward"/>
  <member type="way" ref="428079967" role="forward"/>
  <member type="way" ref="975512755" role="forward"/>
  <member type="way" ref="368670630" role="forward"/>
  <member type="way" ref="738596998" role="forward"/>
  <member type="way" ref="537708777" role="forward"/>
  <member type="way" ref="975514055" role="forward"/>
  <member type="way" ref="428079971" role="forward"/>
  <member type="way" ref="428079980" role="forward"/>
  <member type="way" ref="428079975" role="forward"/>
  <member type="way" ref="35449757" role="forward"/>
  <member type="way" ref="428079964" role="forward"/>
  <member type="way" ref="428079961" role="forward"/>
  <member type="way" ref="428079987" role="forward"/>
  <member type="way" ref="428079972" role="forward"/>
  <member type="way" ref="428079965" role="forward"/>
  <member type="way" ref="428079970" role="forward"/>
  <member type="way" ref="975512756" role="forward"/>
  <member type="way" ref="282809756" role="forward"/>
  <member type="way" ref="428079968" role=""/>
  <member type="way" ref="428079963" role=""/>
  <member type="way" ref="428079969" role=""/>
  <member type="way" ref="368670627" role=""/>
  <member type="way" ref="428300270" role=""/>
  <member type="way" ref="428079960" role=""/>
  <member type="way" ref="428079966" role=""/>
  <member type="way" ref="428300269" role=""/>
  <member type="way" ref="428300266" role=""/>
  <member type="way" ref="428082943" role="forward"/>
  <member type="way" ref="428082935" role="forward"/>
  <member type="way" ref="129030995" role="forward"/>
  <member type="way" ref="428082938" role="forward"/>
  <member type="way" ref="428082936" role="forward"/>
  <member type="way" ref="129030994" role="forward"/>
  <member type="way" ref="129030993" role=""/>
  <member type="way" ref="738061809" role=""/>
  <member type="way" ref="518371192" role=""/>
  <member type="way" ref="893136312" role=""/>
  <member type="way" ref="792024859" role=""/>
  <member type="way" ref="792024858" role=""/>
  <member type="way" ref="518371186" role=""/>
  <member type="way" ref="893136311" role=""/>
  <member type="way" ref="398813068" role="forward"/>
  <member type="way" ref="60980717" role="forward"/>
  <member type="way" ref="52840112" role="forward"/>
  <member type="way" ref="398813066" role="forward"/>
  <member type="way" ref="398813064" role="forward"/>
  <member type="way" ref="48003054" role="forward"/>
  <member type="way" ref="48003053" role="forward"/>
  <member type="way" ref="60980719" role="forward"/>
  <member type="way" ref="428082942" role="forward"/>
  <member type="way" ref="428082932" role="forward"/>
  <member type="way" ref="52840106" role="forward"/>
  <member type="way" ref="336155509" role="forward"/>
  <member type="way" ref="428082940" role="forward"/>
  <member type="way" ref="60699572" role="forward"/>
  <member type="way" ref="129030992" role="forward"/>
  <member type="way" ref="428082937" role="forward"/>
  <member type="way" ref="60699573" role="forward"/>
  <member type="way" ref="428082934" role="forward"/>
  <member type="way" ref="428082941" role="forward"/>
  <member type="way" ref="933043815" role="forward"/>
  <member type="way" ref="428082933" role="forward"/>
  <member type="way" ref="428082944" role="forward"/>
  <member type="way" ref="428082939" role="forward"/>
  <member type="way" ref="52847322" role="forward"/>
  <member type="way" ref="428082192" role="forward"/>
  <member type="way" ref="393066997" role="forward"/>
  <member type="way" ref="739663856" role="forward"/>
  <member type="way" ref="52840110" role="forward"/>
  <member type="way" ref="398813065" role="forward"/>
  <member type="way" ref="398813067" role="forward"/>
  <member type="way" ref="4864595" role="forward"/>
  <member type="way" ref="48003046" role="forward"/>
  <member type="way" ref="345465231" role="forward"/>
  <member type="way" ref="180075105" role="forward"/>
  <member type="way" ref="180075108" role=""/>
  <member type="way" ref="4798548" role=""/>
  <member type="way" ref="180075106" role="forward"/>
  <member type="way" ref="37125672" role="forward"/>
  <member type="way" ref="43044393" role="forward"/>
  <member type="way" ref="331577293" role="forward"/>
  <member type="way" ref="8591490" role="forward"/>
  <member type="way" ref="621319692" role="forward"/>
  <member type="way" ref="338894965" role="forward"/>
  <member type="way" ref="393066998" role="forward"/>
  <member type="way" ref="909825612" role="forward"/>
  <member type="way" ref="13518555" role="forward"/>
  <member type="way" ref="13518557" role="forward"/>
  <member type="way" ref="13518558" role="forward"/>
  <member type="way" ref="37125675" role="forward"/>
  <member type="way" ref="37125674" role="forward"/>
  <member type="way" ref="43044394" role="forward"/>
  <member type="way" ref="43044392" role="forward"/>
  <member type="way" ref="621319691" role="forward"/>
  <member type="way" ref="8591493" role="forward"/>
  <member type="way" ref="909825611" role="forward"/>
  <member type="way" ref="13518554" role="forward"/>
  <member type="way" ref="457542648" role="forward"/>
  <member type="way" ref="13518560" role="forward"/>
  <member type="way" ref="378090317" role=""/>
  <member type="way" ref="116721546" role="forward"/>
  <member type="way" ref="60914400" role="forward"/>
  <member type="way" ref="466223582" role="forward"/>
  <member type="way" ref="466223585" role="forward"/>
  <member type="way" ref="465991354" role="forward"/>
  <member type="way" ref="393067000" role="forward"/>
  <member type="way" ref="720086515" role="forward"/>
  <member type="way" ref="243738299" role="forward"/>
  <member type="way" ref="548757678" role="forward"/>
  <member type="way" ref="548597253" role="forward"/>
  <member type="way" ref="367065138" role="forward"/>
  <member type="way" ref="548597251" role="forward"/>
  <member type="way" ref="635762265" role="forward"/>
  <member type="way" ref="635715148" role="forward"/>
  <member type="way" ref="664237600" role="forward"/>
  <member type="way" ref="1024764233" role="forward"/>
  <member type="way" ref="662476039" role="forward"/>
  <member type="way" ref="1010477876" role="forward"/>
  <member type="way" ref="135475704" role="forward"/>
  <member type="way" ref="427917734" role="forward"/>
  <member type="way" ref="191979945" role="forward"/>
  <member type="way" ref="135475705" role="forward"/>
  <member type="way" ref="31868107" role="forward"/>
  <member type="way" ref="370819902" role="forward"/>
  <member type="way" ref="52840005" role="forward"/>
  <member type="way" ref="1056639621" role="forward"/>
  <member type="way" ref="31867395" role="forward"/>
  <member type="way" ref="49889559" role="forward"/>
  <member type="way" ref="427902701" role="forward"/>
  <member type="way" ref="427902696" role="forward"/>
  <member type="way" ref="31867257" role="forward"/>
  <member type="way" ref="427902704" role="forward"/>
  <member type="way" ref="49889558" role="forward"/>
  <member type="way" ref="1056639622" role="forward"/>
  <member type="way" ref="52840002" role="forward"/>
  <member type="way" ref="1020471454" role="forward"/>
  <member type="way" ref="12907832" role="forward"/>
  <member type="way" ref="947125439" role="forward"/>
  <member type="way" ref="947125438" role="forward"/>
  <member type="way" ref="947125437" role="forward"/>
  <member type="way" ref="466223583" role="forward"/>
  <member type="way" ref="466223584" role="forward"/>
  <member type="way" ref="368829106" role="forward"/>
  <member type="way" ref="60914402" role="forward"/>
  <member type="way" ref="533313902" role="forward"/>
  <member type="way" ref="668153336" role="forward"/>
  <member type="way" ref="668313615" role="forward"/>
  <member type="way" ref="548757679" role="forward"/>
  <member type="way" ref="243738296" role="forward"/>
  <member type="way" ref="548597250" role="forward"/>
  <member type="way" ref="635718965" role="forward"/>
  <member type="way" ref="668520065" role="forward"/>
  <member type="way" ref="668520066" role="forward"/>
  <member type="way" ref="664237602" role="forward"/>
  <member type="way" ref="667504465" role="forward"/>
  <member type="way" ref="635718964" role="forward"/>
  <member type="way" ref="135475703" role="forward"/>
  <member type="way" ref="427914151" role="forward"/>
  <member type="way" ref="135475702" role="forward"/>
  <member type="way" ref="135475710" role="forward"/>
  <member type="way" ref="135475707" role="forward"/>
  <member type="way" ref="31868075" role="forward"/>
  <member type="way" ref="513403548" role="forward"/>
  <member type="way" ref="92002262" role="forward"/>
  <member type="way" ref="427903993" role=""/>
  <member type="way" ref="428019203" role=""/>
  <member type="way" ref="428019204" role=""/>
  <member type="way" ref="428019202" role=""/>
  <member type="way" ref="8116623" role=""/>
  <member type="way" ref="699073150" role=""/>
  <member type="way" ref="428019209" role=""/>
  <member type="way" ref="428019205" role=""/>
  <member type="way" ref="428019201" role=""/>
  <member type="way" ref="428019206" role=""/>
  <member type="way" ref="428019212" role=""/>
  <member type="way" ref="428017302" role=""/>
  <member type="way" ref="52840051" role=""/>
  <member type="way" ref="872173911" role=""/>
  <member type="way" ref="872173910" role=""/>
  <member type="way" ref="428017301" role=""/>
  <member type="way" ref="8044763" role="forward"/>
  <member type="way" ref="507675972" role="forward"/>
  <member type="way" ref="4856785" role="forward"/>
  <member type="way" ref="432302005" role="forward"/>
  <member type="way" ref="1039476783" role="forward"/>
  <member type="way" ref="245579463" role="forward"/>
  <member type="way" ref="428020226" role="forward"/>
  <member type="way" ref="4856784" role="forward"/>
  <member type="way" ref="4848787" role="forward"/>
  <member type="way" ref="245193735" role="forward"/>
  <member type="way" ref="347402554" role="forward"/>
  <member type="way" ref="347402551" role="forward"/>
  <member type="way" ref="347250333" role="forward"/>
  <member type="way" ref="347250327" role="forward"/>
  <member type="way" ref="347402552" role="forward"/>
  <member type="way" ref="347250330" role="forward"/>
  <member type="way" ref="4856789" role="forward"/>
  <member type="way" ref="347250340" role="forward"/>
  <member type="way" ref="297224937" role="forward"/>
  <member type="way" ref="347402575" role="forward"/>
  <member type="way" ref="347402578" role="forward"/>
  <member type="way" ref="347402576" role="forward"/>
  <member type="way" ref="347250361" role="forward"/>
  <member type="way" ref="1055608297" role="forward"/>
  <member type="way" ref="347402579" role="forward"/>
  <member type="way" ref="4856796" role="forward"/>
  <member type="way" ref="428021333" role="forward"/>
  <member type="way" ref="428021335" role="forward"/>
  <member type="way" ref="428028574" role="forward"/>
  <member type="way" ref="245193481" role="forward"/>
  <member type="way" ref="51865292" role="forward"/>
  <member type="way" ref="6448179" role="forward"/>
  <member type="way" ref="987933720" role="forward"/>
  <member type="way" ref="987936927" role="forward"/>
  <member type="way" ref="23550950" role="forward"/>
  <member type="way" ref="332485175" role="forward"/>
  <member type="way" ref="332485174" role="forward"/>
  <member type="way" ref="26231312" role="forward"/>
  <member type="way" ref="245579465" role="forward"/>
  <member type="way" ref="428020232" role="forward"/>
  <member type="way" ref="1039476782" role="forward"/>
  <member type="way" ref="432302004" role="forward"/>
  <member type="way" ref="1039476784" role="forward"/>
  <member type="way" ref="26231313" role="forward"/>
  <member type="way" ref="214922553" role="forward"/>
  <member type="way" ref="245193634" role="forward"/>
  <member type="way" ref="4856798" role="forward"/>
  <member type="way" ref="621426680" role="forward"/>
  <member type="way" ref="332485443" role="forward"/>
  <member type="way" ref="32142507" role="forward"/>
  <member type="way" ref="1062018471" role="forward"/>
  <member type="way" ref="428021334" role="forward"/>
  <member type="way" ref="68522661" role="forward"/>
  <member type="way" ref="51865290" role="forward"/>
  <member type="way" ref="51865293" role="forward"/>
  <member type="way" ref="68522648" role="forward"/>
  <member type="way" ref="68522663" role="forward"/>
  <member type="way" ref="880153972" role="forward"/>
  <member type="way" ref="880068574" role="forward"/>
  <member type="way" ref="990868190" role="forward"/>
  <member type="way" ref="157035809" role="forward"/>
  <member type="way" ref="428290276" role="forward"/>
  <member type="way" ref="428290277" role="forward"/>
  <member type="way" ref="880055174" role="forward"/>
  <member type="way" ref="23623353" role="forward"/>
  <member type="way" ref="738293638" role=""/>
  <member type="way" ref="738293639" role=""/>
  <member type="way" ref="738293636" role=""/>
  <member type="way" ref="738293637" role=""/>
  <member type="way" ref="761160183" role=""/>
  <member type="way" ref="761160182" role=""/>
  <member type="way" ref="761160181" role=""/>
  <member type="way" ref="761160180" role=""/>
  <member type="way" ref="761160179" role=""/>
  <member type="way" ref="761160178" role=""/>
  <member type="way" ref="761160177" role=""/>
  <member type="way" ref="761160176" role=""/>
  <member type="way" ref="761160175" role=""/>
  <member type="way" ref="761160174" role=""/>
  <member type="way" ref="761160173" role=""/>
  <member type="way" ref="761160172" role=""/>
  <member type="way" ref="761160171" role=""/>
  <member type="way" ref="761160170" role=""/>
  <member type="way" ref="792021392" role=""/>
  <member type="way" ref="1053291748" role=""/>
  <member type="way" ref="792024856" role=""/>
  <member type="way" ref="792024857" role=""/>
  <member type="way" ref="814161073" role=""/>
  <member type="way" ref="814161074" role=""/>
  <member type="way" ref="838032369" role=""/>
  <member type="way" ref="838032367" role=""/>
  <member type="way" ref="339795149" role=""/>
  <member type="way" ref="838032371" role=""/>
  <member type="way" ref="340246955" role=""/>
  <member type="way" ref="971535681" role=""/>
  <member type="way" ref="971535682" role=""/>
  <member type="way" ref="290619883" role=""/>
  <member type="way" ref="339795153" role=""/>
  <member type="way" ref="290619882" role=""/>
  <member type="way" ref="339795154" role=""/>
  <member type="way" ref="339795156" role=""/>
  <member type="way" ref="339795155" role=""/>
  <member type="way" ref="927497099" role=""/>
  <member type="way" ref="927497100" role=""/>
  <member type="way" ref="927497101" role=""/>
  <member type="way" ref="927497102" role=""/>
  <member type="way" ref="927497103" role=""/>
  <member type="way" ref="971535683" role=""/>
  <member type="way" ref="1000739746" role=""/>
  <member type="way" ref="1038617081" role=""/>
  <tag k="name" v="WA 99 northern section"/>
  <tag k="network" v="US:WA"/>
  <tag k="ref" v="99"/>
  <tag k="route" v="road"/>
  <tag k="type" v="route"/>
  <tag k="wikipedia" v="en:Washington State Route 99"/>
 </relation>
 <relation id="2855420" visible="true" version="16" changeset="116612196" timestamp="2022-01-26T07:50:42Z" user="ashybko_lyft" uid="11249764">
  <member type="way" ref="635718964" role=""/>
  <member type="way" ref="667504465" role=""/>
  <member type="way" ref="664237602" role=""/>
  <member type="way" ref="668520066" role=""/>
  <member type="way" ref="668520065" role=""/>
  <member type="way" ref="635718965" role=""/>
  <member type="way" ref="548597250" role=""/>
  <member type="way" ref="243738296" role=""/>
  <member type="way" ref="1024764233" role=""/>
  <member type="way" ref="664237600" role=""/>
  <member type="way" ref="635715148" role=""/>
  <member type="way" ref="1010477876" role=""/>
  <member type="way" ref="635762265" role=""/>
  <member type="way" ref="548597251" role=""/>
  <member type="way" ref="367065138" role="wa"/>
  <member type="way" ref="548597253" role=""/>
  <member type="way" ref="671471380" role=""/>
  <member type="relation" ref="2855416" role=""/>
  <member type="relation" ref="2855439" role=""/>
  <member type="relation" ref="2858666" role=""/>
  <member type="relation" ref="2858675" role="Defunct Middle Section"/>
  <tag k="name" v="WA 99"/>
  <tag k="network" v="US:WA"/>
  <tag k="ref" v="99"/>
  <tag k="route" v="road"/>
  <tag k="symbol" v="http://upload.wikimedia.org/wikipedia/commons/a/a5/WA-99.svg"/>
  <tag k="type" v="route"/>
 </relation>
 <relation id="2859142" visible="true" version="653" changeset="121034847" timestamp="2022-05-16T06:30:38Z" user="kmarkish_lyft" uid="11824233">
  <member type="way" ref="52840083" role=""/>
  <member type="way" ref="791135499" role=""/>
  <member type="way" ref="731998731" role=""/>
  <member type="way" ref="367069125" role=""/>
  <member type="way" ref="25792593" role=""/>
  <member type="way" ref="60914402" role=""/>
  <member type="way" ref="368829106" role=""/>
  <member type="way" ref="466223584" role=""/>
  <member type="way" ref="466223583" role=""/>
  <member type="way" ref="947125437" role=""/>
  <member type="way" ref="947125438" role=""/>
  <member type="way" ref="947125439" role=""/>
  <member type="way" ref="12907832" role=""/>
  <member type="way" ref="378090317" role=""/>
  <member type="way" ref="25792614" role=""/>
  <member type="way" ref="367069126" role=""/>
  <member type="way" ref="791135497" role=""/>
  <member type="way" ref="791135496" role=""/>
  <member type="way" ref="25792594" role=""/>
  <member type="way" ref="668153336" role=""/>
  <member type="way" ref="533313902" role=""/>
  <member type="way" ref="357012703" role=""/>
  <member type="way" ref="214546594" role=""/>
  <member type="way" ref="214546596" role=""/>
  <member type="way" ref="135475707" role=""/>
  <member type="way" ref="427917734" role=""/>
  <member type="way" ref="191979945" role=""/>
  <member type="way" ref="31868075" role=""/>
  <member type="way" ref="135475705" role=""/>
  <member type="way" ref="92002262" role=""/>
  <member type="way" ref="1020471454" role=""/>
  <member type="way" ref="52840002" role=""/>
  <member type="way" ref="1056639622" role=""/>
  <member type="way" ref="49889558" role=""/>
  <member type="way" ref="513403548" role=""/>
  <member type="way" ref="31868107" role=""/>
  <member type="way" ref="370819902" role=""/>
  <member type="way" ref="52840005" role=""/>
  <member type="way" ref="1056639621" role=""/>
  <member type="way" ref="31867395" role=""/>
  <member type="way" ref="49889559" role=""/>
  <member type="way" ref="31867257" role=""/>
  <member type="way" ref="8116623" role=""/>
  <member type="way" ref="699073150" role=""/>
  <member type="way" ref="428017302" role=""/>
  <member type="way" ref="52840051" role=""/>
  <member type="way" ref="872173911" role=""/>
  <member type="way" ref="872173910" role=""/>
  <member type="way" ref="428017301" role=""/>
  <member type="way" ref="428018933" role=""/>
  <member type="way" ref="61956400" role=""/>
  <member type="way" ref="428018932" role=""/>
  <member type="way" ref="428018930" role=""/>
  <member type="way" ref="428018931" role=""/>
  <member type="way" ref="260374047" role=""/>
  <member type="way" ref="426488108" role=""/>
  <member type="way" ref="499998236" role=""/>
  <member type="way" ref="332495681" role=""/>
  <member type="way" ref="6461371" role=""/>
  <member type="way" ref="433205279" role=""/>
  <member type="way" ref="260374049" role=""/>
  <member type="way" ref="997182278" role=""/>
  <member type="way" ref="263820699" role=""/>
  <member type="way" ref="173554486" role=""/>
  <member type="way" ref="458813288" role=""/>
  <member type="way" ref="458812960" role=""/>
  <member type="way" ref="297594725" role=""/>
  <member type="way" ref="297594727" role=""/>
  <member type="way" ref="285350848" role=""/>
  <member type="way" ref="297594718" role=""/>
  <member type="way" ref="297594723" role=""/>
  <member type="way" ref="505346950" role=""/>
  <member type="way" ref="458813405" role=""/>
  <member type="way" ref="297594724" role=""/>
  <member type="way" ref="297594719" role=""/>
  <member type="way" ref="297594726" role=""/>
  <member type="way" ref="173554562" role=""/>
  <member type="way" ref="155228478" role=""/>
  <member type="way" ref="173554561" role=""/>
  <member type="way" ref="6327494" role=""/>
  <member type="way" ref="23946299" role=""/>
  <member type="way" ref="23946298" role=""/>
  <member type="way" ref="214924330" role=""/>
  <member type="way" ref="353720584" role=""/>
  <member type="way" ref="428290275" role=""/>
  <member type="way" ref="353720581" role=""/>
  <member type="way" ref="353720579" role=""/>
  <member type="way" ref="353720577" role=""/>
  <member type="way" ref="353720575" role=""/>
  <member type="way" ref="157035087" role=""/>
  <member type="way" ref="353720572" role=""/>
  <member type="way" ref="99028701" role=""/>
  <member type="way" ref="345802128" role=""/>
  <member type="way" ref="345802139" role=""/>
  <member type="way" ref="5520312" role=""/>
  <member type="way" ref="214811141" role=""/>
  <member type="way" ref="52328314" role=""/>
  <member type="way" ref="163116338" role=""/>
  <member type="way" ref="163116339" role=""/>
  <member type="way" ref="815232324" role=""/>
  <member type="way" ref="160270971" role=""/>
  <member type="way" ref="163860130" role=""/>
  <member type="way" ref="778159683" role=""/>
  <member type="way" ref="5868568" role=""/>
  <member type="way" ref="464823438" role=""/>
  <member type="way" ref="5865139" role=""/>
  <member type="way" ref="173554520" role=""/>
  <member type="way" ref="1060088556" role=""/>
  <member type="way" ref="145302960" role=""/>
  <member type="way" ref="418541210" role=""/>
  <member type="way" ref="1060088557" role=""/>
  <member type="way" ref="1060088561" role=""/>
  <member type="way" ref="418541213" role=""/>
  <member type="way" ref="163986410" role=""/>
  <member type="way" ref="760230560" role=""/>
  <member type="way" ref="5257029" role=""/>
  <member type="way" ref="456709134" role=""/>
  <member type="way" ref="510843974" role=""/>
  <member type="way" ref="510843975" role=""/>
  <member type="way" ref="510843973" role=""/>
  <member type="way" ref="511084449" role=""/>
  <member type="way" ref="511084450" role=""/>
  <member type="way" ref="592835523" role=""/>
  <member type="way" ref="456709132" role=""/>
  <member type="way" ref="144827279" role=""/>
  <member type="way" ref="215333389" role=""/>
  <member type="way" ref="157518072" role=""/>
  <member type="way" ref="173554541" role=""/>
  <member type="way" ref="23590022" role=""/>
  <member type="way" ref="936428100" role=""/>
  <member type="way" ref="550165129" role=""/>
  <member type="way" ref="23590024" role=""/>
  <member type="way" ref="665130854" role=""/>
  <member type="way" ref="53830423" role=""/>
  <member type="way" ref="261089225" role=""/>
  <member type="way" ref="261089226" role=""/>
  <member type="way" ref="665130399" role=""/>
  <member type="way" ref="936428120" role=""/>
  <member type="way" ref="5909072" role=""/>
  <member type="way" ref="936428124" role=""/>
  <member type="way" ref="665130400" role=""/>
  <member type="way" ref="673653981" role=""/>
  <member type="way" ref="550007918" role=""/>
  <member type="way" ref="32198034" role=""/>
  <member type="way" ref="936428142" role=""/>
  <member type="way" ref="173554543" role=""/>
  <member type="way" ref="5265854" role=""/>
  <member type="way" ref="673653980" role=""/>
  <member type="way" ref="215457335" role=""/>
  <member type="way" ref="378984362" role=""/>
  <member type="way" ref="751514041" role=""/>
  <member type="way" ref="23350544" role=""/>
  <member type="way" ref="963101746" role=""/>
  <member type="way" ref="963101747" role=""/>
  <member type="way" ref="245987928" role=""/>
  <member type="way" ref="1034467028" role=""/>
  <member type="way" ref="678859679" role=""/>
  <member type="way" ref="261435460" role=""/>
  <member type="way" ref="191141275" role=""/>
  <member type="way" ref="12246082" role=""/>
  <member type="way" ref="378984358" role=""/>
  <member type="way" ref="23349412" role=""/>
  <member type="way" ref="349584308" role=""/>
  <member type="way" ref="89385834" role=""/>
  <member type="way" ref="613495559" role=""/>
  <member type="way" ref="12243529" role=""/>
  <member type="way" ref="127788927" role=""/>
  <member type="way" ref="757223006" role=""/>
  <member type="way" ref="349584320" role=""/>
  <member type="way" ref="349584322" role=""/>
  <member type="way" ref="757223005" role=""/>
  <member type="way" ref="349584321" role=""/>
  <member type="way" ref="349584319" role=""/>
  <member type="way" ref="89563099" role=""/>
  <member type="way" ref="623957727" role=""/>
  <member type="way" ref="623957674" role=""/>
  <member type="way" ref="12235277" role=""/>
  <member type="way" ref="89562987" role=""/>
  <member type="way" ref="687481437" role=""/>
  <member type="way" ref="12233225" role=""/>
  <member type="way" ref="12238150" role=""/>
  <member type="way" ref="13985110" role=""/>
  <member type="way" ref="687421215" role=""/>
  <member type="way" ref="349584328" role=""/>
  <member type="way" ref="687421214" role=""/>
  <member type="way" ref="261426367" role=""/>
  <member type="way" ref="735469461" role=""/>
  <member type="way" ref="1035139776" role=""/>
  <member type="way" ref="735469460" role=""/>
  <member type="way" ref="261426370" role=""/>
  <member type="way" ref="621245082" role=""/>
  <member type="way" ref="621245080" role=""/>
  <member type="way" ref="621245078" role=""/>
  <member type="way" ref="621245079" role=""/>
  <member type="way" ref="621245076" role=""/>
  <member type="way" ref="621245077" role=""/>
  <member type="way" ref="621245075" role=""/>
  <member type="way" ref="621245071" role=""/>
  <member type="way" ref="621245069" role=""/>
  <member type="way" ref="621245068" role=""/>
  <member type="way" ref="621245065" role=""/>
  <member type="way" ref="654870785" role=""/>
  <member type="way" ref="654870787" role=""/>
  <member type="way" ref="737524652" role=""/>
  <member type="way" ref="737524650" role=""/>
  <member type="way" ref="687472106" role=""/>
  <member type="way" ref="687421181" role=""/>
  <member type="way" ref="678963992" role=""/>
  <member type="way" ref="1014018946" role=""/>
  <member type="way" ref="858784097" role=""/>
  <member type="way" ref="676837600" role=""/>
  <member type="way" ref="1014018948" role=""/>
  <member type="way" ref="676837606" role=""/>
  <member type="way" ref="676837609" role=""/>
  <member type="way" ref="1014018943" role=""/>
  <member type="way" ref="623957723" role=""/>
  <member type="way" ref="1014018944" role=""/>
  <member type="way" ref="261564899" role=""/>
  <member type="way" ref="687421207" role=""/>
  <member type="way" ref="12231881" role=""/>
  <member type="way" ref="623957715" role=""/>
  <member type="way" ref="261560692" role=""/>
  <member type="way" ref="785789293" role=""/>
  <member type="way" ref="623957687" role=""/>
  <member type="way" ref="623957688" role=""/>
  <member type="way" ref="623957663" role=""/>
  <member type="way" ref="623957662" role=""/>
  <member type="way" ref="261560693" role=""/>
  <member type="way" ref="687481428" role=""/>
  <member type="way" ref="127788925" role=""/>
  <member type="way" ref="177665302" role=""/>
  <member type="way" ref="124045496" role=""/>
  <member type="way" ref="450280333" role=""/>
  <member type="way" ref="6178318" role=""/>
  <member type="way" ref="6192726" role=""/>
  <member type="way" ref="51353073" role=""/>
  <member type="way" ref="51353071" role=""/>
  <member type="way" ref="51353069" role=""/>
  <member type="way" ref="699800837" role=""/>
  <member type="way" ref="782982576" role=""/>
  <member type="way" ref="51353068" role=""/>
  <member type="way" ref="699800835" role=""/>
  <member type="way" ref="699800869" role=""/>
  <member type="way" ref="699800852" role=""/>
  <member type="way" ref="285759533" role=""/>
  <member type="way" ref="855715958" role=""/>
  <member type="way" ref="855715957" role=""/>
  <member type="way" ref="737536109" role=""/>
  <member type="way" ref="737536108" role=""/>
  <member type="way" ref="737536107" role=""/>
  <member type="way" ref="773829749" role=""/>
  <member type="way" ref="852570347" role=""/>
  <member type="way" ref="773829751" role=""/>
  <member type="way" ref="852570345" role=""/>
  <member type="way" ref="852570346" role=""/>
  <member type="way" ref="773829748" role=""/>
  <member type="way" ref="852570350" role=""/>
  <member type="way" ref="852570351" role=""/>
  <member type="way" ref="852524126" role=""/>
  <member type="way" ref="852524125" role=""/>
  <member type="way" ref="852524127" role=""/>
  <member type="way" ref="738217485" role=""/>
  <member type="way" ref="813061797" role=""/>
  <member type="way" ref="285759530" role=""/>
  <member type="way" ref="389821959" role=""/>
  <member type="way" ref="699988021" role=""/>
  <member type="way" ref="699988018" role=""/>
  <member type="way" ref="129609810" role=""/>
  <member type="way" ref="699988017" role=""/>
  <member type="way" ref="23691677" role=""/>
  <member type="way" ref="287195560" role=""/>
  <member type="way" ref="999277586" role=""/>
  <member type="way" ref="35019448" role=""/>
  <member type="way" ref="35019447" role=""/>
  <member type="way" ref="23690922" role=""/>
  <member type="way" ref="23691360" role=""/>
  <member type="way" ref="215335794" role=""/>
  <member type="way" ref="35019837" role=""/>
  <member type="way" ref="1060424642" role=""/>
  <member type="way" ref="547717669" role=""/>
  <member type="way" ref="547717670" role=""/>
  <member type="way" ref="23690916" role=""/>
  <member type="way" ref="31813426" role=""/>
  <member type="way" ref="623957658" role=""/>
  <member type="way" ref="450280325" role=""/>
  <member type="way" ref="450280326" role=""/>
  <member type="way" ref="23690762" role=""/>
  <member type="way" ref="23690763" role=""/>
  <member type="way" ref="1026993570" role=""/>
  <member type="way" ref="1026993569" role=""/>
  <member type="way" ref="23690510" role=""/>
  <member type="way" ref="23690511" role=""/>
  <member type="way" ref="1026987771" role=""/>
  <member type="way" ref="450280329" role=""/>
  <member type="way" ref="450280331" role=""/>
  <member type="way" ref="699530786" role=""/>
  <member type="way" ref="699302863" role=""/>
  <member type="way" ref="699530789" role=""/>
  <member type="way" ref="699530796" role=""/>
  <member type="way" ref="778743599" role=""/>
  <member type="way" ref="860918995" role=""/>
  <member type="way" ref="860918996" role=""/>
  <member type="way" ref="129601974" role=""/>
  <member type="way" ref="745016672" role=""/>
  <member type="way" ref="114000765" role=""/>
  <member type="way" ref="615797064" role=""/>
  <member type="way" ref="699302865" role=""/>
  <member type="way" ref="699302862" role=""/>
  <member type="way" ref="699302807" role=""/>
  <member type="way" ref="699988053" role=""/>
  <member type="way" ref="699302839" role=""/>
  <member type="way" ref="6185705" role=""/>
  <member type="way" ref="929423066" role=""/>
  <member type="way" ref="6188876" role=""/>
  <member type="way" ref="1052683384" role=""/>
  <member type="way" ref="640382433" role=""/>
  <member type="way" ref="391059059" role=""/>
  <member type="way" ref="1034348458" role=""/>
  <member type="way" ref="202898176" role=""/>
  <member type="way" ref="699988010" role=""/>
  <member type="way" ref="391057185" role=""/>
  <member type="way" ref="6186334" role=""/>
  <member type="way" ref="699218962" role=""/>
  <member type="way" ref="662825087" role=""/>
  <member type="way" ref="699219054" role=""/>
  <member type="way" ref="929423065" role=""/>
  <member type="way" ref="699219055" role=""/>
  <member type="way" ref="699302805" role=""/>
  <member type="way" ref="662825084" role=""/>
  <member type="way" ref="6190789" role=""/>
  <member type="way" ref="129246617" role=""/>
  <member type="way" ref="6194004" role=""/>
  <member type="way" ref="23837163" role=""/>
  <member type="way" ref="23837164" role=""/>
  <member type="way" ref="287110888" role=""/>
  <member type="way" ref="634078815" role=""/>
  <member type="way" ref="699988067" role=""/>
  <member type="way" ref="699218968" role=""/>
  <member type="way" ref="634027441" role=""/>
  <member type="way" ref="23921479" role=""/>
  <member type="way" ref="699988064" role=""/>
  <member type="way" ref="32883475" role=""/>
  <member type="way" ref="1020642698" role=""/>
  <member type="way" ref="633459919" role=""/>
  <member type="way" ref="1020642703" role=""/>
  <member type="way" ref="699988063" role=""/>
  <member type="way" ref="699988062" role=""/>
  <member type="way" ref="633812216" role=""/>
  <member type="way" ref="784218925" role=""/>
  <member type="way" ref="784218923" role=""/>
  <member type="way" ref="784218924" role=""/>
  <member type="way" ref="699218967" role=""/>
  <member type="way" ref="127788876" role=""/>
  <member type="way" ref="127788877" role=""/>
  <member type="way" ref="287110889" role=""/>
  <member type="way" ref="257366359" role=""/>
  <member type="way" ref="257366361" role=""/>
  <member type="way" ref="6181254" role=""/>
  <member type="way" ref="6194996" role=""/>
  <member type="way" ref="826097661" role=""/>
  <member type="way" ref="826097660" role=""/>
  <member type="way" ref="6181723" role=""/>
  <member type="way" ref="6183650" role=""/>
  <member type="way" ref="6187550" role=""/>
  <member type="way" ref="816296353" role=""/>
  <member type="way" ref="816296352" role=""/>
  <member type="way" ref="785857305" role=""/>
  <member type="way" ref="930560251" role=""/>
  <member type="way" ref="129584122" role=""/>
  <member type="way" ref="6187894" role=""/>
  <member type="way" ref="857924221" role=""/>
  <member type="way" ref="857924220" role=""/>
  <member type="way" ref="6181241" role=""/>
  <member type="way" ref="857924199" role=""/>
  <member type="way" ref="857924198" role=""/>
  <member type="way" ref="6181595" role=""/>
  <member type="way" ref="68522646" role=""/>
  <member type="way" ref="428056683" role=""/>
  <member type="way" ref="428056681" role=""/>
  <member type="way" ref="428293026" role=""/>
  <member type="way" ref="428056680" role=""/>
  <member type="way" ref="428056675" role=""/>
  <member type="way" ref="428056682" role=""/>
  <member type="way" ref="428056684" role=""/>
  <member type="way" ref="6443754" role=""/>
  <member type="way" ref="734783719" role=""/>
  <member type="way" ref="428056670" role=""/>
  <member type="way" ref="734783718" role=""/>
  <member type="way" ref="428056669" role=""/>
  <member type="way" ref="428056674" role=""/>
  <member type="way" ref="165476988" role=""/>
  <member type="way" ref="165476987" role=""/>
  <member type="way" ref="165476986" role=""/>
  <member type="way" ref="428293025" role=""/>
  <member type="way" ref="214924332" role=""/>
  <member type="way" ref="402799843" role=""/>
  <member type="way" ref="428056672" role=""/>
  <member type="way" ref="428056671" role=""/>
  <member type="way" ref="23723890" role=""/>
  <member type="way" ref="428056673" role=""/>
  <member type="way" ref="124940472" role=""/>
  <member type="way" ref="428056668" role=""/>
  <member type="way" ref="428292574" role=""/>
  <member type="way" ref="124940498" role=""/>
  <member type="way" ref="65588356" role=""/>
  <member type="way" ref="722365713" role=""/>
  <member type="way" ref="765150870" role=""/>
  <member type="way" ref="722365712" role=""/>
  <member type="way" ref="124940492" role=""/>
  <member type="way" ref="722355244" role=""/>
  <member type="way" ref="621396741" role=""/>
  <member type="way" ref="369422780" role=""/>
  <member type="way" ref="428066035" role=""/>
  <member type="way" ref="428250236" role=""/>
  <member type="way" ref="428250243" role=""/>
  <member type="way" ref="428066024" role=""/>
  <member type="way" ref="428066027" role=""/>
  <member type="way" ref="1051435431" role=""/>
  <member type="way" ref="428066036" role=""/>
  <member type="way" ref="428066026" role=""/>
  <member type="way" ref="428066037" role=""/>
  <member type="way" ref="935184442" role=""/>
  <member type="way" ref="428066025" role=""/>
  <member type="way" ref="428066031" role=""/>
  <member type="way" ref="369422781" role=""/>
  <member type="way" ref="428068820" role=""/>
  <member type="way" ref="428066038" role=""/>
  <member type="way" ref="428066029" role=""/>
  <member type="way" ref="428066033" role=""/>
  <member type="way" ref="440450623" role=""/>
  <member type="way" ref="935184441" role=""/>
  <member type="way" ref="428066028" role=""/>
  <member type="way" ref="428066032" role=""/>
  <member type="way" ref="693723537" role=""/>
  <member type="way" ref="428066023" role=""/>
  <member type="way" ref="428066030" role=""/>
  <member type="way" ref="1055040825" role=""/>
  <member type="way" ref="124940487" role=""/>
  <member type="way" ref="428066034" role=""/>
  <member type="way" ref="428066040" role=""/>
  <member type="way" ref="369422779" role=""/>
  <member type="way" ref="479818878" role=""/>
  <member type="way" ref="369422778" role=""/>
  <member type="way" ref="65584416" role=""/>
  <member type="way" ref="428068830" role=""/>
  <member type="way" ref="428068831" role=""/>
  <member type="way" ref="430778699" role=""/>
  <member type="way" ref="428068833" role=""/>
  <member type="way" ref="428068827" role=""/>
  <member type="way" ref="428068826" role=""/>
  <member type="way" ref="428068822" role=""/>
  <member type="way" ref="428068828" role=""/>
  <member type="way" ref="295752198" role=""/>
  <member type="way" ref="333927559" role=""/>
  <member type="way" ref="428068834" role=""/>
  <member type="way" ref="428068825" role=""/>
  <member type="way" ref="428068829" role=""/>
  <member type="way" ref="68522649" role=""/>
  <member type="way" ref="428068824" role=""/>
  <member type="way" ref="428068832" role=""/>
  <member type="way" ref="428068823" role=""/>
  <member type="way" ref="265727843" role=""/>
  <member type="way" ref="305358263" role=""/>
  <member type="way" ref="265727844" role=""/>
  <member type="way" ref="333927558" role=""/>
  <member type="way" ref="295752199" role=""/>
  <member type="way" ref="622910842" role=""/>
  <member type="way" ref="428045788" role=""/>
  <member type="way" ref="804520479" role=""/>
  <member type="way" ref="428045794" role=""/>
  <member type="way" ref="138883229" role=""/>
  <member type="way" ref="428045787" role=""/>
  <member type="way" ref="428045791" role=""/>
  <member type="way" ref="138883230" role=""/>
  <member type="way" ref="428045792" role=""/>
  <member type="way" ref="428045786" role=""/>
  <member type="way" ref="428022112" role=""/>
  <member type="way" ref="428022113" role=""/>
  <member type="way" ref="428022114" role=""/>
  <member type="way" ref="427903969" role=""/>
  <member type="way" ref="427903977" role=""/>
  <member type="way" ref="427903964" role=""/>
  <member type="way" ref="427903973" role=""/>
  <member type="way" ref="427903978" role=""/>
  <member type="way" ref="427893554" role=""/>
  <member type="way" ref="427894958" role=""/>
  <member type="way" ref="427894952" role=""/>
  <member type="way" ref="427894950" role=""/>
  <member type="way" ref="427894965" role=""/>
  <member type="way" ref="427893555" role=""/>
  <member type="way" ref="427893556" role=""/>
  <member type="way" ref="138883223" role=""/>
  <member type="way" ref="428019390" role=""/>
  <member type="way" ref="428019391" role=""/>
  <member type="way" ref="248199106" role=""/>
  <member type="way" ref="138883222" role=""/>
  <member type="way" ref="427894955" role=""/>
  <member type="way" ref="427894962" role=""/>
  <member type="way" ref="882315333" role=""/>
  <member type="way" ref="427893558" role=""/>
  <member type="way" ref="427893557" role=""/>
  <member type="way" ref="138883228" role=""/>
  <member type="way" ref="427896642" role=""/>
  <member type="way" ref="427896641" role=""/>
  <member type="way" ref="427903975" role=""/>
  <member type="way" ref="427903963" role=""/>
  <member type="way" ref="427903976" role=""/>
  <member type="way" ref="427903974" role=""/>
  <member type="way" ref="427903965" role=""/>
  <member type="way" ref="427896643" role=""/>
  <member type="way" ref="138883225" role=""/>
  <member type="way" ref="428033859" role=""/>
  <member type="way" ref="428033860" role=""/>
  <member type="way" ref="428019388" role=""/>
  <member type="way" ref="428019392" role=""/>
  <member type="way" ref="428019389" role=""/>
  <member type="way" ref="248200500" role=""/>
  <member type="way" ref="738042890" role=""/>
  <member type="way" ref="162685297" role=""/>
  <member type="way" ref="771261057" role=""/>
  <member type="way" ref="959680153" role=""/>
  <member type="way" ref="959680154" role=""/>
  <member type="way" ref="959680157" role=""/>
  <member type="way" ref="464451277" role=""/>
  <member type="way" ref="428021481" role=""/>
  <member type="way" ref="428021473" role=""/>
  <member type="way" ref="428021472" role=""/>
  <member type="way" ref="428021469" role=""/>
  <member type="way" ref="428021475" role=""/>
  <member type="way" ref="428024487" role=""/>
  <member type="way" ref="428024492" role=""/>
  <member type="way" ref="428024502" role=""/>
  <member type="way" ref="1053341512" role=""/>
  <member type="way" ref="428024495" role=""/>
  <member type="way" ref="428024498" role=""/>
  <member type="way" ref="306133430" role=""/>
  <member type="way" ref="428024499" role=""/>
  <member type="way" ref="428024490" role=""/>
  <member type="way" ref="402799845" role=""/>
  <member type="way" ref="428024500" role=""/>
  <member type="way" ref="428024491" role=""/>
  <member type="way" ref="428024501" role=""/>
  <member type="way" ref="685203217" role=""/>
  <member type="way" ref="306137786" role=""/>
  <member type="way" ref="162685290" role=""/>
  <member type="way" ref="428024814" role=""/>
  <member type="way" ref="402799844" role=""/>
  <member type="way" ref="428024815" role=""/>
  <member type="way" ref="428024489" role=""/>
  <member type="way" ref="428024493" role=""/>
  <member type="way" ref="306137789" role=""/>
  <member type="way" ref="428024496" role=""/>
  <member type="way" ref="428024497" role=""/>
  <member type="way" ref="428024503" role=""/>
  <member type="way" ref="428024494" role=""/>
  <member type="way" ref="428024488" role=""/>
  <member type="way" ref="428021476" role=""/>
  <member type="way" ref="428021470" role=""/>
  <member type="way" ref="428021482" role=""/>
  <member type="way" ref="428021477" role=""/>
  <member type="way" ref="428021474" role=""/>
  <member type="way" ref="428021479" role=""/>
  <member type="way" ref="428021480" role=""/>
  <member type="way" ref="959670800" role=""/>
  <member type="way" ref="959670801" role=""/>
  <member type="way" ref="959670802" role=""/>
  <member type="way" ref="959670803" role=""/>
  <member type="way" ref="959680156" role=""/>
  <member type="way" ref="959680159" role=""/>
  <member type="way" ref="162685294" role=""/>
  <member type="way" ref="428021478" role=""/>
  <member type="way" ref="306133429" role=""/>
  <member type="way" ref="428021471" role=""/>
  <member type="way" ref="23350552" role=""/>
  <member type="way" ref="886603235" role=""/>
  <member type="way" ref="340470388" role=""/>
  <member type="way" ref="340470426" role=""/>
  <member type="way" ref="89694844" role=""/>
  <member type="way" ref="340470424" role=""/>
  <member type="way" ref="340470425" role=""/>
  <member type="way" ref="372877051" role=""/>
  <member type="way" ref="430876308" role=""/>
  <member type="way" ref="220971379" role=""/>
  <member type="way" ref="6130177" role=""/>
  <member type="way" ref="37023497" role=""/>
  <member type="way" ref="61015011" role=""/>
  <member type="way" ref="118776267" role=""/>
  <member type="way" ref="239007534" role=""/>
  <member type="way" ref="239007535" role=""/>
  <member type="way" ref="38522580" role=""/>
  <member type="way" ref="38522581" role=""/>
  <member type="way" ref="430956275" role=""/>
  <member type="way" ref="37007334" role=""/>
  <member type="way" ref="430856627" role=""/>
  <member type="way" ref="430876303" role=""/>
  <member type="way" ref="785061549" role=""/>
  <member type="way" ref="215344023" role=""/>
  <member type="way" ref="264249259" role=""/>
  <member type="way" ref="731998730" role=""/>
  <member type="way" ref="784774971" role=""/>
  <member type="way" ref="951348982" role=""/>
  <member type="way" ref="951347052" role=""/>
  <member type="way" ref="6128535" role=""/>
  <member type="way" ref="623704123" role=""/>
  <member type="way" ref="623704121" role=""/>
  <member type="way" ref="760483624" role=""/>
  <member type="way" ref="760483623" role=""/>
  <member type="way" ref="430856629" role=""/>
  <member type="way" ref="1032438965" role=""/>
  <member type="way" ref="1042942553" role=""/>
  <member type="way" ref="289490211" role=""/>
  <member type="way" ref="340387315" role=""/>
  <member type="way" ref="56522937" role=""/>
  <member type="way" ref="951356478" role=""/>
  <member type="way" ref="56523006" role=""/>
  <member type="way" ref="476758761" role=""/>
  <member type="way" ref="289490213" role=""/>
  <member type="way" ref="989288789" role=""/>
  <member type="way" ref="340387320" role=""/>
  <member type="way" ref="340387322" role=""/>
  <member type="way" ref="476758760" role=""/>
  <member type="way" ref="476758759" role=""/>
  <member type="way" ref="951577805" role=""/>
  <member type="way" ref="340387316" role=""/>
  <member type="way" ref="476758758" role=""/>
  <member type="way" ref="476758755" role=""/>
  <member type="way" ref="476758754" role=""/>
  <member type="way" ref="340387327" role=""/>
  <member type="way" ref="476758753" role=""/>
  <member type="way" ref="340387321" role=""/>
  <member type="way" ref="755279731" role=""/>
  <member type="way" ref="340387318" role=""/>
  <member type="way" ref="755279732" role=""/>
  <member type="way" ref="476758750" role=""/>
  <member type="way" ref="340387317" role=""/>
  <member type="way" ref="772392886" role=""/>
  <member type="way" ref="772392885" role=""/>
  <member type="way" ref="772392882" role=""/>
  <member type="way" ref="772392883" role=""/>
  <member type="way" ref="476758746" role=""/>
  <member type="way" ref="476758726" role=""/>
  <member type="way" ref="431275974" role=""/>
  <member type="way" ref="368212455" role=""/>
  <member type="way" ref="173554560" role=""/>
  <member type="way" ref="290619881" role=""/>
  <member type="way" ref="431072109" role=""/>
  <member type="way" ref="476758724" role=""/>
  <member type="way" ref="476758723" role=""/>
  <member type="way" ref="638994166" role=""/>
  <member type="way" ref="951579737" role=""/>
  <member type="way" ref="476758725" role=""/>
  <member type="way" ref="605259955" role=""/>
  <member type="way" ref="476758722" role=""/>
  <member type="way" ref="476758721" role=""/>
  <member type="way" ref="289489666" role=""/>
  <member type="way" ref="927497104" role=""/>
  <member type="way" ref="476758718" role=""/>
  <member type="way" ref="476758717" role=""/>
  <member type="way" ref="640258377" role=""/>
  <member type="way" ref="640258378" role=""/>
  <member type="way" ref="476758716" role=""/>
  <member type="way" ref="476758715" role=""/>
  <member type="way" ref="927497094" role=""/>
  <member type="way" ref="476758719" role=""/>
  <member type="way" ref="340387313" role=""/>
  <member type="way" ref="340387314" role=""/>
  <member type="way" ref="340387311" role=""/>
  <member type="way" ref="289490181" role=""/>
  <member type="way" ref="289489664" role=""/>
  <member type="way" ref="1031572025" role=""/>
  <member type="way" ref="1031572026" role=""/>
  <member type="way" ref="1031572024" role=""/>
  <member type="way" ref="1031572027" role=""/>
  <member type="way" ref="773762994" role=""/>
  <member type="way" ref="773762993" role=""/>
  <member type="way" ref="838032370" role=""/>
  <member type="way" ref="838032367" role=""/>
  <member type="way" ref="225166182" role=""/>
  <member type="way" ref="225166172" role=""/>
  <member type="way" ref="55199749" role=""/>
  <member type="way" ref="368376593" role=""/>
  <member type="way" ref="374372961" role=""/>
  <member type="way" ref="624379326" role=""/>
  <member type="way" ref="758492830" role=""/>
  <member type="way" ref="1029329143" role=""/>
  <member type="way" ref="428087927" role=""/>
  <member type="way" ref="289487358" role=""/>
  <member type="way" ref="369918381" role=""/>
  <member type="way" ref="289487356" role=""/>
  <member type="way" ref="428087378" role=""/>
  <member type="way" ref="428087379" role=""/>
  <member type="way" ref="369918382" role=""/>
  <member type="way" ref="340226478" role=""/>
  <member type="way" ref="340226474" role=""/>
  <member type="way" ref="738293635" role=""/>
  <member type="way" ref="428074287" role=""/>
  <member type="way" ref="368214241" role=""/>
  <member type="way" ref="289487353" role=""/>
  <member type="way" ref="289487355" role=""/>
  <member type="way" ref="368214242" role=""/>
  <member type="way" ref="428074285" role=""/>
  <member type="way" ref="368214240" role=""/>
  <member type="way" ref="428074284" role=""/>
  <member type="way" ref="368212456" role=""/>
  <member type="way" ref="289492491" role=""/>
  <member type="way" ref="428074288" role=""/>
  <member type="way" ref="428074290" role=""/>
  <member type="way" ref="428074283" role=""/>
  <member type="way" ref="289492521" role=""/>
  <member type="way" ref="428284374" role=""/>
  <member type="way" ref="289487329" role=""/>
  <member type="way" ref="428284370" role=""/>
  <member type="way" ref="289492490" role=""/>
  <member type="way" ref="289492481" role=""/>
  <member type="way" ref="428070322" role=""/>
  <member type="way" ref="428070314" role=""/>
  <member type="way" ref="428070320" role=""/>
  <member type="way" ref="428070319" role=""/>
  <member type="way" ref="763001432" role=""/>
  <member type="way" ref="428070313" role=""/>
  <member type="way" ref="428070311" role=""/>
  <member type="way" ref="428070318" role=""/>
  <member type="way" ref="289492482" role=""/>
  <member type="way" ref="1038617080" role=""/>
  <member type="way" ref="428070316" role=""/>
  <member type="way" ref="428070312" role=""/>
  <member type="way" ref="428070315" role=""/>
  <member type="way" ref="428070317" role=""/>
  <member type="way" ref="1038617079" role=""/>
  <member type="way" ref="396298420" role=""/>
  <member type="way" ref="761160184" role=""/>
  <member type="way" ref="428286751" role=""/>
  <member type="way" ref="428286747" role=""/>
  <member type="way" ref="635146829" role=""/>
  <member type="way" ref="428286749" role=""/>
  <member type="way" ref="428286746" role=""/>
  <member type="way" ref="428286752" role=""/>
  <member type="way" ref="634567346" role=""/>
  <member type="way" ref="340226481" role=""/>
  <member type="way" ref="340226480" role=""/>
  <member type="way" ref="428072706" role=""/>
  <member type="way" ref="428072709" role=""/>
  <member type="way" ref="428072708" role=""/>
  <member type="way" ref="428072713" role=""/>
  <member type="way" ref="428072711" role=""/>
  <member type="way" ref="428072714" role=""/>
  <member type="way" ref="1010488771" role=""/>
  <member type="way" ref="428291308" role=""/>
  <member type="way" ref="1000739744" role=""/>
  <member type="way" ref="1000739747" role=""/>
  <member type="way" ref="1000739745" role=""/>
  <member type="way" ref="340226479" role=""/>
  <member type="way" ref="340226477" role=""/>
  <member type="way" ref="700649826" role=""/>
  <member type="way" ref="700649827" role=""/>
  <member type="way" ref="771639071" role=""/>
  <member type="way" ref="661081862" role=""/>
  <member type="way" ref="686373009" role=""/>
  <member type="way" ref="792021391" role=""/>
  <member type="way" ref="340226482" role=""/>
  <member type="way" ref="792021393" role=""/>
  <member type="way" ref="701270070" role=""/>
  <member type="way" ref="661081861" role=""/>
  <member type="way" ref="291219269" role=""/>
  <member type="way" ref="289490202" role=""/>
  <member type="way" ref="771639070" role=""/>
  <member type="way" ref="289490201" role=""/>
  <member type="way" ref="289490196" role=""/>
  <member type="way" ref="339795157" role=""/>
  <member type="way" ref="289490197" role=""/>
  <member type="way" ref="289490198" role=""/>
  <member type="way" ref="289490199" role=""/>
  <member type="way" ref="289490200" role=""/>
  <member type="way" ref="339795152" role=""/>
  <member type="way" ref="693914913" role=""/>
  <member type="way" ref="693914916" role=""/>
  <member type="way" ref="339795151" role=""/>
  <member type="way" ref="339795160" role=""/>
  <member type="way" ref="339795155" role=""/>
  <member type="way" ref="339795156" role=""/>
  <member type="way" ref="339795154" role=""/>
  <member type="way" ref="290619882" role=""/>
  <member type="way" ref="339795153" role=""/>
  <member type="way" ref="290619883" role=""/>
  <member type="way" ref="971535682" role=""/>
  <member type="way" ref="971535681" role=""/>
  <member type="way" ref="340246955" role=""/>
  <member type="way" ref="838032371" role=""/>
  <member type="way" ref="339795149" role=""/>
  <member type="way" ref="838032368" role=""/>
  <member type="way" ref="838032369" role=""/>
  <member type="way" ref="55199748" role=""/>
  <member type="way" ref="340868158" role=""/>
  <member type="way" ref="6134893" role=""/>
  <member type="way" ref="340868155" role=""/>
  <member type="way" ref="60914400" role=""/>
  <member type="way" ref="466223582" role=""/>
  <member type="way" ref="466223585" role=""/>
  <member type="way" ref="465991354" role=""/>
  <member type="way" ref="393067000" role=""/>
  <member type="way" ref="720086515" role=""/>
  <member type="way" ref="25792605" role=""/>
  <member type="way" ref="25792603" role=""/>
  <member type="way" ref="25792612" role=""/>
  <member type="way" ref="116614533" role=""/>
  <member type="way" ref="116614537" role=""/>
  <member type="way" ref="25792589" role=""/>
  <member type="way" ref="13518560" role=""/>
  <member type="way" ref="457542648" role=""/>
  <member type="way" ref="13518557" role=""/>
  <member type="way" ref="13518554" role=""/>
  <member type="way" ref="909825611" role=""/>
  <member type="way" ref="909825612" role=""/>
  <member type="way" ref="13518555" role=""/>
  <member type="way" ref="8591490" role=""/>
  <member type="way" ref="621319692" role=""/>
  <member type="way" ref="338894965" role=""/>
  <member type="way" ref="393066998" role=""/>
  <member type="way" ref="8591493" role=""/>
  <member type="way" ref="621319691" role=""/>
  <member type="way" ref="43044392" role=""/>
  <member type="way" ref="43044393" role=""/>
  <member type="way" ref="331577293" role=""/>
  <member type="way" ref="43044394" role=""/>
  <member type="way" ref="37125674" role=""/>
  <member type="way" ref="37125672" role=""/>
  <member type="way" ref="37125675" role=""/>
  <member type="way" ref="180075106" role=""/>
  <member type="way" ref="4798548" role=""/>
  <member type="way" ref="180075108" role=""/>
  <member type="way" ref="180075105" role=""/>
  <member type="way" ref="345465231" role=""/>
  <member type="way" ref="48003053" role=""/>
  <member type="way" ref="48003046" role=""/>
  <member type="way" ref="48003054" role=""/>
  <member type="way" ref="398813064" role=""/>
  <member type="way" ref="398813066" role=""/>
  <member type="way" ref="52840112" role=""/>
  <member type="way" ref="4864595" role=""/>
  <member type="way" ref="398813067" role=""/>
  <member type="way" ref="398813065" role=""/>
  <member type="way" ref="52840110" role=""/>
  <member type="way" ref="739663856" role=""/>
  <member type="way" ref="393066997" role=""/>
  <member type="way" ref="428082192" role=""/>
  <member type="way" ref="398813068" role=""/>
  <member type="way" ref="60980717" role=""/>
  <member type="way" ref="60980719" role=""/>
  <member type="way" ref="428082942" role=""/>
  <member type="way" ref="428082932" role=""/>
  <member type="way" ref="52840106" role=""/>
  <member type="way" ref="336155509" role=""/>
  <member type="way" ref="428082940" role=""/>
  <member type="way" ref="60699572" role=""/>
  <member type="way" ref="129030992" role=""/>
  <member type="way" ref="428082937" role=""/>
  <member type="way" ref="60699573" role=""/>
  <member type="way" ref="428082934" role=""/>
  <member type="way" ref="428082941" role=""/>
  <member type="way" ref="933043815" role=""/>
  <member type="way" ref="428082933" role=""/>
  <member type="way" ref="428082944" role=""/>
  <member type="way" ref="428082939" role=""/>
  <member type="way" ref="52847322" role=""/>
  <member type="way" ref="129030994" role=""/>
  <member type="way" ref="428082936" role=""/>
  <member type="way" ref="428082938" role=""/>
  <member type="way" ref="129030995" role=""/>
  <member type="way" ref="428082935" role=""/>
  <member type="way" ref="428082943" role=""/>
  <member type="way" ref="129030993" role=""/>
  <member type="way" ref="738061809" role=""/>
  <member type="way" ref="518371192" role=""/>
  <member type="way" ref="893136312" role=""/>
  <member type="way" ref="792024859" role=""/>
  <member type="way" ref="792024858" role=""/>
  <member type="way" ref="518371186" role=""/>
  <member type="way" ref="893136311" role=""/>
  <member type="way" ref="35449757" role=""/>
  <member type="way" ref="428079964" role=""/>
  <member type="way" ref="428079961" role=""/>
  <member type="way" ref="428079987" role=""/>
  <member type="way" ref="428079972" role=""/>
  <member type="way" ref="428079965" role=""/>
  <member type="way" ref="428079970" role=""/>
  <member type="way" ref="975512756" role=""/>
  <member type="way" ref="282809756" role=""/>
  <member type="way" ref="368670632" role=""/>
  <member type="way" ref="428093888" role=""/>
  <member type="way" ref="428093883" role=""/>
  <member type="way" ref="428093887" role=""/>
  <member type="way" ref="428093875" role=""/>
  <member type="way" ref="428093889" role=""/>
  <member type="way" ref="428093879" role=""/>
  <member type="way" ref="428093884" role=""/>
  <member type="way" ref="428093882" role=""/>
  <member type="way" ref="428093885" role=""/>
  <member type="way" ref="170778350" role=""/>
  <member type="way" ref="332333392" role=""/>
  <member type="way" ref="428090330" role=""/>
  <member type="way" ref="428090337" role=""/>
  <member type="way" ref="622519732" role=""/>
  <member type="way" ref="428090380" role=""/>
  <member type="way" ref="428090339" role=""/>
  <member type="way" ref="428090370" role=""/>
  <member type="way" ref="428090338" role=""/>
  <member type="way" ref="428090378" role=""/>
  <member type="way" ref="428090367" role=""/>
  <member type="way" ref="428090340" role=""/>
  <member type="way" ref="428090376" role=""/>
  <member type="way" ref="428090333" role=""/>
  <member type="way" ref="428090332" role=""/>
  <member type="way" ref="428090335" role=""/>
  <member type="way" ref="428090334" role=""/>
  <member type="way" ref="428090374" role=""/>
  <member type="way" ref="484846145" role=""/>
  <member type="way" ref="428090381" role=""/>
  <member type="way" ref="428090336" role=""/>
  <member type="way" ref="428090375" role=""/>
  <member type="way" ref="428090360" role=""/>
  <member type="way" ref="428090371" role=""/>
  <member type="way" ref="371236483" role=""/>
  <member type="way" ref="170778349" role=""/>
  <member type="way" ref="428090368" role=""/>
  <member type="way" ref="428090377" role=""/>
  <member type="way" ref="428090343" role=""/>
  <member type="way" ref="428090372" role=""/>
  <member type="way" ref="622519699" role=""/>
  <member type="way" ref="428090354" role=""/>
  <member type="way" ref="428090369" role=""/>
  <member type="way" ref="428090350" role=""/>
  <member type="way" ref="371236482" role=""/>
  <member type="way" ref="484846149" role=""/>
  <member type="way" ref="428090383" role=""/>
  <member type="way" ref="428090379" role=""/>
  <member type="way" ref="882820179" role=""/>
  <member type="way" ref="428090382" role=""/>
  <member type="way" ref="428090366" role=""/>
  <member type="way" ref="428090331" role=""/>
  <member type="way" ref="428090347" role=""/>
  <member type="way" ref="428090373" role=""/>
  <member type="way" ref="309274292" role=""/>
  <member type="way" ref="332333391" role=""/>
  <member type="way" ref="428093874" role=""/>
  <member type="way" ref="428093877" role=""/>
  <member type="way" ref="428093880" role=""/>
  <member type="way" ref="428093878" role=""/>
  <member type="way" ref="428093873" role=""/>
  <member type="way" ref="428093876" role=""/>
  <member type="way" ref="428093872" role=""/>
  <member type="way" ref="393066999" role=""/>
  <member type="way" ref="383904285" role=""/>
  <member type="way" ref="170778344" role=""/>
  <member type="way" ref="170778345" role=""/>
  <member type="way" ref="400497084" role=""/>
  <member type="way" ref="1051783209" role=""/>
  <member type="way" ref="428092548" role=""/>
  <member type="way" ref="428092552" role=""/>
  <member type="way" ref="428092558" role=""/>
  <member type="way" ref="428092553" role=""/>
  <member type="way" ref="170778339" role=""/>
  <member type="way" ref="591108191" role=""/>
  <member type="way" ref="428093881" role=""/>
  <member type="way" ref="591108189" role=""/>
  <member type="way" ref="428093886" role=""/>
  <member type="way" ref="59716360" role=""/>
  <member type="way" ref="742686380" role=""/>
  <member type="way" ref="428092555" role=""/>
  <member type="way" ref="428092557" role=""/>
  <member type="way" ref="428092559" role=""/>
  <member type="way" ref="170778347" role=""/>
  <member type="way" ref="428092549" role=""/>
  <member type="way" ref="170778338" role=""/>
  <member type="way" ref="170778334" role=""/>
  <member type="way" ref="738297438" role=""/>
  <member type="way" ref="738297437" role=""/>
  <member type="way" ref="428092550" role=""/>
  <member type="way" ref="62149965" role=""/>
  <member type="way" ref="428092560" role=""/>
  <member type="way" ref="428092547" role=""/>
  <member type="way" ref="428092551" role=""/>
  <member type="way" ref="371236481" role=""/>
  <member type="way" ref="429678421" role=""/>
  <member type="way" ref="264249257" role=""/>
  <member type="way" ref="340470422" role=""/>
  <member type="way" ref="340470423" role=""/>
  <member type="way" ref="61015013" role=""/>
  <member type="way" ref="239007540" role=""/>
  <member type="way" ref="239007539" role=""/>
  <member type="way" ref="38522579" role=""/>
  <member type="way" ref="38522578" role=""/>
  <member type="way" ref="61015099" role=""/>
  <member type="way" ref="61015105" role=""/>
  <member type="way" ref="61015107" role=""/>
  <member type="way" ref="61015102" role=""/>
  <member type="way" ref="61015106" role=""/>
  <member type="way" ref="61015101" role=""/>
  <member type="way" ref="61015103" role=""/>
  <member type="way" ref="220970708" role=""/>
  <member type="way" ref="118776304" role=""/>
  <member type="way" ref="61015100" role=""/>
  <member type="way" ref="39015442" role=""/>
  <member type="way" ref="118776283" role=""/>
  <member type="way" ref="39015443" role=""/>
  <member type="way" ref="686373027" role=""/>
  <member type="way" ref="220427471" role=""/>
  <member type="way" ref="220427472" role=""/>
  <member type="way" ref="220195173" role=""/>
  <member type="way" ref="685999122" role=""/>
  <member type="way" ref="220198097" role=""/>
  <member type="way" ref="6139139" role=""/>
  <member type="way" ref="685999117" role=""/>
  <member type="way" ref="662524253" role=""/>
  <member type="way" ref="6139143" role=""/>
  <member type="way" ref="799537911" role=""/>
  <member type="way" ref="685999091" role=""/>
  <member type="way" ref="685999116" role=""/>
  <member type="way" ref="622937977" role=""/>
  <member type="way" ref="662524252" role=""/>
  <member type="way" ref="685999105" role=""/>
  <member type="way" ref="6136634" role=""/>
  <member type="way" ref="219620419" role=""/>
  <member type="way" ref="6139136" role=""/>
  <member type="way" ref="305677029" role=""/>
  <member type="way" ref="215346038" role=""/>
  <member type="way" ref="686373081" role=""/>
  <member type="way" ref="35135232" role=""/>
  <member type="way" ref="35135231" role=""/>
  <member type="way" ref="35134865" role=""/>
  <member type="way" ref="964633784" role=""/>
  <member type="way" ref="35134864" role=""/>
  <member type="way" ref="215346039" role=""/>
  <member type="way" ref="177665287" role=""/>
  <member type="way" ref="220947787" role=""/>
  <member type="way" ref="479444923" role=""/>
  <member type="way" ref="479444906" role=""/>
  <member type="way" ref="479444895" role=""/>
  <member type="way" ref="220947788" role=""/>
  <member type="way" ref="22711625" role=""/>
  <member type="way" ref="35136363" role=""/>
  <member type="way" ref="450138796" role=""/>
  <member type="way" ref="450138795" role=""/>
  <member type="way" ref="215346066" role=""/>
  <member type="way" ref="35136364" role=""/>
  <member type="way" ref="173554480" role=""/>
  <member type="way" ref="173554483" role=""/>
  <member type="way" ref="366586455" role=""/>
  <member type="way" ref="366586473" role=""/>
  <member type="way" ref="22711757" role=""/>
  <member type="way" ref="37317918" role=""/>
  <member type="way" ref="754168345" role=""/>
  <member type="way" ref="318750462" role=""/>
  <member type="way" ref="374376136" role=""/>
  <member type="way" ref="318750463" role=""/>
  <member type="way" ref="669854154" role=""/>
  <member type="way" ref="669854153" role=""/>
  <member type="way" ref="318414284" role=""/>
  <member type="way" ref="318414285" role=""/>
  <member type="way" ref="22712936" role=""/>
  <member type="way" ref="909184815" role=""/>
  <member type="way" ref="926451280" role=""/>
  <member type="way" ref="669249797" role=""/>
  <member type="way" ref="318414286" role=""/>
  <member type="way" ref="374757838" role=""/>
  <member type="way" ref="36871179" role=""/>
  <member type="way" ref="318161807" role=""/>
  <member type="way" ref="35136500" role=""/>
  <member type="way" ref="22709503" role=""/>
  <member type="way" ref="35136499" role=""/>
  <member type="way" ref="374757835" role=""/>
  <member type="way" ref="22712925" role=""/>
  <member type="way" ref="891763931" role=""/>
  <member type="way" ref="224740205" role=""/>
  <member type="way" ref="355756837" role=""/>
  <member type="way" ref="853105892" role=""/>
  <member type="way" ref="853105890" role=""/>
  <member type="way" ref="853105891" role=""/>
  <member type="way" ref="908516707" role=""/>
  <member type="way" ref="908516930" role=""/>
  <member type="way" ref="317325906" role=""/>
  <member type="way" ref="168821527" role=""/>
  <member type="way" ref="168821528" role=""/>
  <member type="way" ref="286324635" role=""/>
  <member type="way" ref="168821526" role=""/>
  <member type="way" ref="168821529" role=""/>
  <member type="way" ref="222973251" role=""/>
  <member type="way" ref="222973249" role=""/>
  <member type="way" ref="222973248" role=""/>
  <member type="way" ref="222973250" role=""/>
  <member type="way" ref="222973253" role="forward"/>
  <member type="way" ref="222973252" role="forward"/>
  <member type="way" ref="209490325" role=""/>
  <member type="way" ref="224740204" role=""/>
  <member type="way" ref="68668162" role=""/>
  <member type="way" ref="22709196" role=""/>
  <member type="way" ref="377796656" role=""/>
  <member type="way" ref="1031561349" role=""/>
  <member type="way" ref="125924751" role=""/>
  <member type="way" ref="758470757" role=""/>
  <member type="way" ref="191174687" role=""/>
  <member type="way" ref="218846124" role=""/>
  <member type="way" ref="833688121" role=""/>
  <member type="way" ref="22711047" role=""/>
  <member type="way" ref="479213594" role=""/>
  <member type="way" ref="22710763" role=""/>
  <member type="way" ref="169411755" role=""/>
  <member type="way" ref="1029059063" role=""/>
  <member type="way" ref="1022000709" role=""/>
  <member type="way" ref="1022000336" role=""/>
  <member type="way" ref="169411754" role=""/>
  <member type="way" ref="22711049" role=""/>
  <member type="way" ref="223312769" role=""/>
  <member type="way" ref="223312761" role=""/>
  <member type="way" ref="223312764" role=""/>
  <member type="way" ref="223312771" role=""/>
  <member type="way" ref="374010395" role=""/>
  <member type="way" ref="374010396" role=""/>
  <member type="way" ref="22711050" role=""/>
  <member type="way" ref="914533918" role=""/>
  <member type="way" ref="914533917" role=""/>
  <member type="way" ref="578300640" role=""/>
  <member type="way" ref="22710762" role=""/>
  <member type="way" ref="22710764" role=""/>
  <member type="way" ref="578289992" role=""/>
  <member type="way" ref="22711046" role=""/>
  <member type="way" ref="577365164" role=""/>
  <member type="way" ref="273292497" role=""/>
  <member type="way" ref="273292496" role=""/>
  <member type="way" ref="22711048" role=""/>
  <member type="way" ref="417746550" role=""/>
  <member type="way" ref="5263682" role=""/>
  <member type="way" ref="285829466" role=""/>
  <member type="way" ref="173554537" role=""/>
  <member type="way" ref="173554485" role=""/>
  <member type="way" ref="23283305" role=""/>
  <member type="way" ref="68830774" role=""/>
  <member type="way" ref="5257101" role=""/>
  <member type="way" ref="32232036" role=""/>
  <member type="way" ref="5260213" role=""/>
  <member type="way" ref="958988306" role=""/>
  <member type="way" ref="958988307" role=""/>
  <member type="way" ref="889135351" role=""/>
  <member type="way" ref="607411237" role=""/>
  <member type="way" ref="173554557" role=""/>
  <member type="way" ref="5260200" role=""/>
  <member type="way" ref="23283322" role=""/>
  <member type="way" ref="23283318" role=""/>
  <member type="way" ref="607052431" role=""/>
  <member type="way" ref="607052432" role=""/>
  <member type="way" ref="755350422" role=""/>
  <member type="way" ref="5260194" role=""/>
  <member type="way" ref="612020551" role=""/>
  <member type="way" ref="612020550" role=""/>
  <member type="way" ref="611865263" role=""/>
  <member type="way" ref="614480419" role=""/>
  <member type="way" ref="612338252" role=""/>
  <member type="way" ref="612338253" role=""/>
  <member type="way" ref="612020524" role=""/>
  <member type="way" ref="886339803" role=""/>
  <member type="way" ref="611866316" role=""/>
  <member type="way" ref="611865254" role=""/>
  <member type="way" ref="611865255" role=""/>
  <member type="way" ref="612338251" role=""/>
  <member type="way" ref="612338249" role=""/>
  <member type="way" ref="755350409" role=""/>
  <member type="way" ref="5265255" role=""/>
  <member type="way" ref="1005386402" role=""/>
  <member type="way" ref="755350408" role=""/>
  <member type="way" ref="540121638" role=""/>
  <member type="way" ref="338075762" role=""/>
  <member type="way" ref="865808793" role=""/>
  <member type="way" ref="5262483" role=""/>
  <member type="way" ref="215457191" role=""/>
  <member type="way" ref="753827152" role=""/>
  <member type="way" ref="103220560" role=""/>
  <member type="way" ref="890917530" role=""/>
  <member type="way" ref="5264369" role=""/>
  <member type="way" ref="122422342" role=""/>
  <member type="way" ref="122422350" role=""/>
  <member type="way" ref="5262581" role=""/>
  <member type="way" ref="5259818" role=""/>
  <member type="way" ref="861292043" role=""/>
  <member type="way" ref="111559167" role=""/>
  <member type="way" ref="958941313" role=""/>
  <member type="way" ref="122438212" role=""/>
  <member type="way" ref="32199598" role=""/>
  <member type="way" ref="32199559" role=""/>
  <member type="way" ref="936428157" role=""/>
  <member type="way" ref="173554538" role=""/>
  <member type="way" ref="440151987" role=""/>
  <member type="way" ref="5263363" role=""/>
  <member type="way" ref="32198567" role=""/>
  <member type="way" ref="32198568" role=""/>
  <member type="way" ref="215457334" role=""/>
  <member type="way" ref="936428153" role=""/>
  <member type="way" ref="936428155" role=""/>
  <member type="way" ref="215457337" role=""/>
  <member type="way" ref="163986411" role=""/>
  <member type="way" ref="418541209" role=""/>
  <member type="way" ref="145302959" role=""/>
  <member type="way" ref="399567164" role=""/>
  <member type="way" ref="1060088575" role=""/>
  <member type="way" ref="145302955" role=""/>
  <member type="way" ref="1060088574" role=""/>
  <member type="way" ref="1060088576" role=""/>
  <member type="way" ref="1060088569" role=""/>
  <member type="way" ref="418788329" role=""/>
  <member type="way" ref="418788349" role=""/>
  <member type="way" ref="418788343" role=""/>
  <member type="way" ref="1060088568" role=""/>
  <member type="way" ref="1060088567" role=""/>
  <member type="way" ref="1060088566" role=""/>
  <member type="way" ref="1060088565" role=""/>
  <member type="way" ref="399567163" role=""/>
  <member type="way" ref="418788335" role=""/>
  <member type="way" ref="418788340" role=""/>
  <member type="way" ref="418792142" role=""/>
  <member type="way" ref="418792143" role=""/>
  <member type="way" ref="418792144" role=""/>
  <member type="way" ref="52328336" role=""/>
  <member type="way" ref="465520094" role=""/>
  <member type="way" ref="418797738" role=""/>
  <member type="way" ref="164075310" role=""/>
  <member type="way" ref="52328340" role=""/>
  <member type="way" ref="105181323" role=""/>
  <member type="way" ref="5867252" role=""/>
  <member type="way" ref="108384584" role=""/>
  <member type="way" ref="46418178" role=""/>
  <member type="way" ref="34944770" role=""/>
  <member type="way" ref="418739377" role=""/>
  <member type="way" ref="52328300" role=""/>
  <member type="way" ref="418739375" role=""/>
  <member type="way" ref="749420353" role=""/>
  <member type="way" ref="749420351" role=""/>
  <member type="way" ref="749420352" role=""/>
  <member type="way" ref="418739371" role=""/>
  <member type="way" ref="418739370" role=""/>
  <member type="way" ref="1021086813" role=""/>
  <member type="way" ref="418739369" role=""/>
  <member type="way" ref="1021086811" role=""/>
  <member type="way" ref="418739372" role=""/>
  <member type="way" ref="418739374" role=""/>
  <member type="way" ref="418902638" role=""/>
  <member type="way" ref="418902639" role=""/>
  <member type="way" ref="418739376" role=""/>
  <member type="way" ref="418739378" role=""/>
  <member type="way" ref="418739373" role=""/>
  <member type="way" ref="118473615" role=""/>
  <member type="way" ref="332484556" role="forward"/>
  <member type="way" ref="368097102" role="forward"/>
  <member type="way" ref="418744577" role="forward"/>
  <member type="way" ref="418744600" role="forward"/>
  <member type="way" ref="332484553" role="forward"/>
  <member type="way" ref="368097103" role="forward"/>
  <member type="way" ref="942799233" role="forward"/>
  <member type="way" ref="418744605" role="forward"/>
  <member type="way" ref="332484551" role="forward"/>
  <member type="way" ref="418744563" role="forward"/>
  <member type="way" ref="332484563" role="forward"/>
  <member type="way" ref="418744582" role=""/>
  <member type="way" ref="856740630" role=""/>
  <member type="way" ref="856740631" role=""/>
  <member type="way" ref="418744588" role=""/>
  <member type="way" ref="418744570" role=""/>
  <member type="way" ref="418744611" role=""/>
  <member type="way" ref="418732311" role=""/>
  <member type="way" ref="418732310" role=""/>
  <member type="way" ref="418732312" role=""/>
  <member type="way" ref="363541369" role="forward"/>
  <member type="way" ref="418732314" role="forward"/>
  <member type="way" ref="363541371" role="forward"/>
  <member type="way" ref="760479007" role="forward"/>
  <member type="way" ref="163848761" role=""/>
  <member type="way" ref="418732320" role=""/>
  <member type="way" ref="418732318" role=""/>
  <member type="way" ref="418732319" role=""/>
  <member type="way" ref="466810329" role=""/>
  <member type="way" ref="363541368" role=""/>
  <member type="way" ref="418732317" role=""/>
  <member type="way" ref="418732316" role=""/>
  <member type="way" ref="418732309" role=""/>
  <member type="way" ref="418732315" role=""/>
  <member type="way" ref="418732321" role=""/>
  <member type="way" ref="749735485" role=""/>
  <member type="way" ref="775877952" role=""/>
  <member type="way" ref="418575620" role=""/>
  <member type="way" ref="418575618" role=""/>
  <member type="way" ref="418575619" role=""/>
  <member type="way" ref="118480798" role=""/>
  <member type="way" ref="418575621" role=""/>
  <member type="way" ref="151430228" role=""/>
  <member type="way" ref="358391105" role=""/>
  <member type="way" ref="80675606" role=""/>
  <member type="way" ref="418784794" role=""/>
  <member type="way" ref="151430229" role=""/>
  <member type="way" ref="418784795" role=""/>
  <member type="way" ref="418784792" role=""/>
  <member type="way" ref="151430226" role=""/>
  <member type="way" ref="80675607" role=""/>
  <member type="way" ref="418784793" role=""/>
  <member type="way" ref="362110193" role=""/>
  <member type="way" ref="37740901" role=""/>
  <member type="way" ref="376179474" role=""/>
  <member type="way" ref="163848760" role=""/>
  <member type="way" ref="418551053" role=""/>
  <member type="way" ref="376179473" role=""/>
  <member type="way" ref="418551056" role=""/>
  <member type="way" ref="418551057" role=""/>
  <member type="way" ref="418551058" role=""/>
  <member type="way" ref="332230698" role=""/>
  <member type="way" ref="418547753" role=""/>
  <member type="way" ref="418547751" role=""/>
  <member type="way" ref="418547752" role=""/>
  <member type="way" ref="114154576" role=""/>
  <member type="way" ref="173554526" role=""/>
  <member type="way" ref="173554609" role=""/>
  <member type="way" ref="173554607" role=""/>
  <member type="way" ref="332230699" role=""/>
  <member type="way" ref="215459752" role=""/>
  <member type="way" ref="215459753" role=""/>
  <member type="way" ref="410988390" role=""/>
  <member type="way" ref="5870282" role=""/>
  <member type="way" ref="410988391" role=""/>
  <member type="way" ref="376176307" role=""/>
  <member type="way" ref="742416951" role=""/>
  <member type="way" ref="742416950" role=""/>
  <member type="way" ref="749687629" role=""/>
  <member type="way" ref="764042952" role=""/>
  <member type="way" ref="764042953" role=""/>
  <member type="way" ref="776416905" role=""/>
  <member type="way" ref="532426303" role=""/>
  <member type="way" ref="532426302" role=""/>
  <member type="way" ref="114150934" role=""/>
  <member type="way" ref="118644190" role=""/>
  <member type="way" ref="409390994" role=""/>
  <member type="way" ref="118644187" role=""/>
  <member type="way" ref="5868034" role=""/>
  <member type="way" ref="5868035" role=""/>
  <member type="way" ref="5867657" role=""/>
  <member type="way" ref="118650800" role=""/>
  <member type="way" ref="173554578" role=""/>
  <member type="way" ref="365622585" role=""/>
  <member type="way" ref="5869244" role=""/>
  <member type="way" ref="5861301" role=""/>
  <member type="way" ref="118650797" role=""/>
  <member type="way" ref="116244165" role=""/>
  <member type="way" ref="118651221" role=""/>
  <member type="way" ref="116241270" role=""/>
  <member type="way" ref="116240104" role=""/>
  <member type="way" ref="116239837" role=""/>
  <member type="way" ref="62094721" role=""/>
  <member type="way" ref="5878284" role=""/>
  <member type="way" ref="62094722" role=""/>
  <member type="way" ref="485391381" role=""/>
  <member type="way" ref="376480147" role=""/>
  <member type="way" ref="173554518" role=""/>
  <member type="way" ref="376480148" role=""/>
  <member type="way" ref="376480150" role=""/>
  <member type="way" ref="372299002" role=""/>
  <member type="way" ref="370492819" role=""/>
  <member type="way" ref="5882240" role=""/>
  <member type="way" ref="485397557" role=""/>
  <member type="way" ref="62094719" role=""/>
  <member type="way" ref="1031928591" role=""/>
  <member type="way" ref="62094723" role=""/>
  <member type="way" ref="485397559" role=""/>
  <member type="way" ref="173554535" role=""/>
  <member type="way" ref="215475647" role=""/>
  <member type="way" ref="173554511" role=""/>
  <member type="way" ref="5882597" role=""/>
  <member type="way" ref="962600944" role=""/>
  <member type="way" ref="5881452" role=""/>
  <member type="way" ref="5882294" role=""/>
  <member type="way" ref="5880035" role=""/>
  <member type="way" ref="5879266" role=""/>
  <member type="way" ref="5878384" role=""/>
  <member type="way" ref="16410610" role=""/>
  <member type="way" ref="16410608" role=""/>
  <member type="way" ref="1002376850" role=""/>
  <member type="way" ref="173554568" role=""/>
  <member type="way" ref="1002376856" role=""/>
  <member type="way" ref="173554536" role=""/>
  <member type="way" ref="5882301" role=""/>
  <member type="way" ref="962527788" role=""/>
  <member type="way" ref="368270677" role=""/>
  <member type="way" ref="233403978" role=""/>
  <member type="way" ref="173554495" role=""/>
  <member type="way" ref="5879646" role=""/>
  <member type="way" ref="215476711" role=""/>
  <member type="way" ref="34952493" role=""/>
  <member type="way" ref="34952492" role=""/>
  <member type="way" ref="742443807" role=""/>
  <member type="way" ref="914572323" role=""/>
  <member type="way" ref="915564417" role=""/>
  <member type="way" ref="173554497" role=""/>
  <member type="way" ref="5879415" role=""/>
  <member type="way" ref="914576847" role=""/>
  <member type="way" ref="793738891" role=""/>
  <member type="way" ref="914572327" role=""/>
  <member type="way" ref="32818905" role=""/>
  <member type="way" ref="914576836" role=""/>
  <member type="way" ref="914576840" role=""/>
  <member type="way" ref="186826420" role=""/>
  <member type="way" ref="915564423" role=""/>
  <member type="way" ref="5879871" role=""/>
  <member type="way" ref="914583520" role=""/>
  <member type="way" ref="5881016" role=""/>
  <member type="way" ref="477137142" role=""/>
  <member type="way" ref="32818907" role=""/>
  <member type="way" ref="55267318" role=""/>
  <member type="way" ref="26318396" role=""/>
  <member type="way" ref="215476714" role=""/>
  <member type="way" ref="173554542" role=""/>
  <member type="way" ref="173554504" role=""/>
  <member type="way" ref="30737428" role=""/>
  <member type="way" ref="542029892" role=""/>
  <member type="way" ref="5880104" role=""/>
  <member type="way" ref="270356068" role=""/>
  <member type="way" ref="5880079" role=""/>
  <member type="way" ref="542029891" role=""/>
  <member type="way" ref="186819078" role=""/>
  <member type="way" ref="186819081" role=""/>
  <member type="way" ref="142994972" role=""/>
  <member type="way" ref="5881525" role=""/>
  <member type="way" ref="34953003" role=""/>
  <member type="way" ref="34953004" role=""/>
  <member type="way" ref="35200099" role=""/>
  <member type="way" ref="5882237" role=""/>
  <member type="way" ref="542027947" role=""/>
  <member type="way" ref="412627047" role=""/>
  <member type="way" ref="5882239" role=""/>
  <member type="way" ref="5880802" role=""/>
  <member type="way" ref="34953183" role=""/>
  <member type="way" ref="5880799" role=""/>
  <member type="way" ref="6069098" role=""/>
  <member type="way" ref="6063360" role=""/>
  <member type="way" ref="215476713" role=""/>
  <member type="way" ref="173554514" role=""/>
  <member type="way" ref="966134730" role=""/>
  <member type="way" ref="966134731" role=""/>
  <member type="way" ref="6067454" role=""/>
  <member type="way" ref="173554564" role=""/>
  <member type="way" ref="6061555" role=""/>
  <member type="way" ref="59191605" role=""/>
  <member type="way" ref="6074365" role=""/>
  <member type="way" ref="53188114" role=""/>
  <member type="way" ref="6072576" role=""/>
  <member type="way" ref="6073519" role=""/>
  <member type="way" ref="705027072" role=""/>
  <member type="way" ref="963455662" role=""/>
  <member type="way" ref="705027073" role=""/>
  <member type="way" ref="963455661" role=""/>
  <member type="way" ref="963455656" role=""/>
  <member type="way" ref="963455667" role=""/>
  <member type="way" ref="963455655" role=""/>
  <member type="way" ref="963455650" role=""/>
  <member type="way" ref="6071010" role=""/>
  <member type="way" ref="6072455" role=""/>
  <member type="way" ref="718155816" role=""/>
  <member type="way" ref="517835393" role=""/>
  <member type="way" ref="991409010" role=""/>
  <member type="way" ref="991409020" role=""/>
  <member type="way" ref="517835398" role=""/>
  <member type="way" ref="991409019" role=""/>
  <member type="way" ref="293127667" role=""/>
  <member type="way" ref="991414503" role=""/>
  <member type="way" ref="963455648" role=""/>
  <member type="way" ref="1051685764" role=""/>
  <member type="way" ref="293127668" role=""/>
  <member type="way" ref="963455647" role=""/>
  <member type="way" ref="173554525" role=""/>
  <member type="way" ref="173554524" role=""/>
  <member type="way" ref="1051684997" role=""/>
  <member type="way" ref="963455645" role=""/>
  <member type="way" ref="6062948" role=""/>
  <member type="way" ref="906406872" role=""/>
  <member type="way" ref="906406871" role=""/>
  <member type="way" ref="731782630" role=""/>
  <member type="way" ref="173554553" role=""/>
  <member type="way" ref="638180789" role=""/>
  <member type="way" ref="173554552" role=""/>
  <member type="way" ref="173554580" role=""/>
  <member type="way" ref="239240957" role=""/>
  <member type="way" ref="6062086" role=""/>
  <member type="way" ref="6065166" role=""/>
  <member type="way" ref="173554558" role=""/>
  <member type="way" ref="128239470" role=""/>
  <member type="way" ref="963459168" role=""/>
  <member type="way" ref="963461618" role=""/>
  <member type="way" ref="732487081" role=""/>
  <member type="way" ref="6063487" role=""/>
  <member type="way" ref="963461634" role=""/>
  <member type="way" ref="23924470" role=""/>
  <member type="way" ref="963461621" role=""/>
  <member type="way" ref="221845686" role=""/>
  <member type="way" ref="221845685" role=""/>
  <member type="way" ref="782867757" role=""/>
  <member type="way" ref="857421949" role=""/>
  <member type="way" ref="6181585" role=""/>
  <member type="way" ref="392015872" role=""/>
  <member type="way" ref="392015873" role=""/>
  <member type="way" ref="428017296" role=""/>
  <member type="way" ref="428263004" role=""/>
  <member type="way" ref="428017297" role=""/>
  <member type="way" ref="428017300" role=""/>
  <member type="way" ref="428017299" role=""/>
  <member type="way" ref="428017298" role=""/>
  <member type="way" ref="245838589" role=""/>
  <member type="way" ref="35535098" role=""/>
  <member type="way" ref="1024232885" role=""/>
  <member type="way" ref="32223083" role=""/>
  <member type="way" ref="340110576" role=""/>
  <member type="way" ref="340110577" role=""/>
  <member type="way" ref="340110578" role=""/>
  <member type="way" ref="828412981" role=""/>
  <member type="way" ref="427899024" role=""/>
  <member type="way" ref="828412982" role=""/>
  <member type="way" ref="340369824" role=""/>
  <member type="way" ref="171072526" role=""/>
  <member type="way" ref="531923482" role=""/>
  <member type="way" ref="436178672" role=""/>
  <member type="way" ref="32223078" role=""/>
  <member type="way" ref="436178671" role=""/>
  <member type="way" ref="105496506" role=""/>
  <member type="way" ref="32223055" role=""/>
  <member type="way" ref="157184877" role=""/>
  <member type="way" ref="389138193" role=""/>
  <member type="way" ref="427906208" role=""/>
  <member type="way" ref="427906209" role=""/>
  <member type="way" ref="389138192" role=""/>
  <member type="way" ref="427906210" role=""/>
  <member type="way" ref="427906211" role=""/>
  <member type="way" ref="389138194" role=""/>
  <member type="way" ref="427907131" role=""/>
  <member type="way" ref="427907057" role=""/>
  <member type="way" ref="389138195" role=""/>
  <member type="way" ref="435898454" role=""/>
  <member type="way" ref="159591156" role=""/>
  <member type="way" ref="427907056" role=""/>
  <member type="way" ref="620762201" role=""/>
  <member type="way" ref="620762202" role=""/>
  <member type="way" ref="159591157" role=""/>
  <member type="way" ref="435898455" role=""/>
  <member type="way" ref="428246448" role=""/>
  <member type="way" ref="456673729" role=""/>
  <member type="way" ref="127697550" role=""/>
  <member type="way" ref="621378266" role=""/>
  <member type="way" ref="127697547" role=""/>
  <member type="way" ref="428245585" role=""/>
  <member type="way" ref="428245584" role=""/>
  <member type="way" ref="22927949" role=""/>
  <member type="way" ref="428245583" role=""/>
  <member type="way" ref="428230590" role=""/>
  <member type="way" ref="452336735" role=""/>
  <member type="way" ref="1049331466" role=""/>
  <member type="way" ref="6383712" role=""/>
  <member type="way" ref="256998429" role=""/>
  <member type="way" ref="925940823" role=""/>
  <member type="way" ref="398951345" role=""/>
  <member type="way" ref="925940822" role=""/>
  <member type="way" ref="370785081" role=""/>
  <member type="way" ref="428230587" role=""/>
  <member type="way" ref="263673735" role=""/>
  <member type="way" ref="993384194" role=""/>
  <member type="way" ref="6522905" role=""/>
  <member type="way" ref="428243941" role=""/>
  <member type="way" ref="428243940" role=""/>
  <member type="way" ref="428243942" role=""/>
  <member type="way" ref="428243943" role=""/>
  <member type="way" ref="1053891486" role=""/>
  <member type="way" ref="993382884" role=""/>
  <member type="way" ref="894783360" role=""/>
  <member type="way" ref="428243939" role=""/>
  <member type="way" ref="163419189" role=""/>
  <member type="way" ref="620595348" role=""/>
  <member type="way" ref="580425582" role=""/>
  <member type="way" ref="580425578" role=""/>
  <member type="way" ref="428244185" role=""/>
  <member type="way" ref="428248114" role=""/>
  <member type="way" ref="6483622" role=""/>
  <member type="way" ref="38940711" role=""/>
  <member type="way" ref="380116994" role=""/>
  <member type="way" ref="462696738" role=""/>
  <member type="way" ref="391421595" role=""/>
  <member type="way" ref="163419191" role=""/>
  <member type="way" ref="215869731" role=""/>
  <member type="way" ref="215870359" role=""/>
  <member type="way" ref="225166180" role=""/>
  <member type="way" ref="1051284785" role=""/>
  <member type="way" ref="225166177" role=""/>
  <member type="way" ref="225166174" role=""/>
  <member type="way" ref="984375988" role=""/>
  <member type="way" ref="340868157" role=""/>
  <member type="way" ref="170781639" role=""/>
  <member type="way" ref="340868156" role=""/>
  <member type="way" ref="362110184" role="forward"/>
  <member type="way" ref="418780885" role="forward"/>
  <member type="way" ref="362110186" role="forward"/>
  <member type="way" ref="376482403" role="forward"/>
  <member type="way" ref="362110185" role="forward"/>
  <member type="way" ref="362110188" role="forward"/>
  <member type="way" ref="362110189" role="forward"/>
  <member type="way" ref="362110192" role="forward"/>
  <member type="way" ref="362110191" role="forward"/>
  <member type="way" ref="418780878" role="forward"/>
  <member type="way" ref="362110190" role="forward"/>
  <member type="way" ref="418780892" role="forward"/>
  <member type="way" ref="363541370" role="forward"/>
  <member type="way" ref="363661814" role="forward"/>
  <member type="way" ref="418744621" role="forward"/>
  <member type="way" ref="363661816" role="forward"/>
  <member type="way" ref="363661815" role="forward"/>
  <member type="way" ref="418744616" role="forward"/>
  <member type="way" ref="363661818" role="forward"/>
  <member type="way" ref="418744626" role="forward"/>
  <member type="way" ref="428079968" role=""/>
  <member type="way" ref="428079963" role=""/>
  <member type="way" ref="428079969" role=""/>
  <member type="way" ref="368670627" role=""/>
  <member type="way" ref="428079960" role=""/>
  <member type="way" ref="428079966" role=""/>
  <member type="way" ref="428300269" role=""/>
  <member type="way" ref="578289990" role=""/>
  <member type="way" ref="578289989" role=""/>
  <member type="way" ref="578289988" role=""/>
  <member type="way" ref="754168335" role=""/>
  <member type="way" ref="326129661" role=""/>
  <member type="way" ref="754168340" role=""/>
  <member type="way" ref="754168339" role=""/>
  <member type="way" ref="754168338" role=""/>
  <member type="way" ref="450175337" role="forward"/>
  <member type="way" ref="1031921151" role="forward"/>
  <member type="way" ref="450175340" role="forward"/>
  <member type="way" ref="450175339" role="forward"/>
  <member type="way" ref="131272727" role=""/>
  <member type="way" ref="450175338" role="forward"/>
  <member type="way" ref="1031921153" role="forward"/>
  <member type="way" ref="1031921152" role="forward"/>
  <member type="way" ref="963461633" role="forward"/>
  <member type="way" ref="732487080" role=""/>
  <member type="way" ref="732487067" role=""/>
  <member type="way" ref="131272717" role=""/>
  <member type="way" ref="1033885108" role=""/>
  <member type="way" ref="963461628" role=""/>
  <member type="way" ref="936428114" role=""/>
  <member type="way" ref="936428113" role=""/>
  <member type="way" ref="476867469" role=""/>
  <member type="way" ref="936428109" role=""/>
  <member type="way" ref="936428112" role=""/>
  <member type="way" ref="936428111" role=""/>
  <member type="way" ref="936428110" role=""/>
  <member type="way" ref="547717672" role=""/>
  <member type="way" ref="738217484" role=""/>
  <member type="way" ref="738293638" role=""/>
  <member type="way" ref="738293639" role=""/>
  <member type="way" ref="738293636" role=""/>
  <member type="way" ref="738293637" role=""/>
  <member type="way" ref="751514040" role=""/>
  <member type="way" ref="751514039" role=""/>
  <member type="way" ref="761160183" role=""/>
  <member type="way" ref="761160182" role=""/>
  <member type="way" ref="761160181" role=""/>
  <member type="way" ref="761160180" role=""/>
  <member type="way" ref="761160179" role=""/>
  <member type="way" ref="761160178" role=""/>
  <member type="way" ref="761160177" role=""/>
  <member type="way" ref="761160176" role=""/>
  <member type="way" ref="761160175" role=""/>
  <member type="way" ref="761160174" role=""/>
  <member type="way" ref="761160173" role=""/>
  <member type="way" ref="761160172" role=""/>
  <member type="way" ref="761160171" role=""/>
  <member type="way" ref="761160170" role=""/>
  <member type="way" ref="785078998" role=""/>
  <member type="way" ref="785078997" role=""/>
  <member type="way" ref="791916817" role=""/>
  <member type="way" ref="791916816" role=""/>
  <member type="way" ref="791916815" role=""/>
  <member type="way" ref="792021392" role=""/>
  <member type="way" ref="1053291748" role=""/>
  <member type="way" ref="792024856" role=""/>
  <member type="way" ref="792024857" role=""/>
  <member type="way" ref="813061796" role=""/>
  <member type="way" ref="828412980" role=""/>
  <member type="way" ref="828412979" role=""/>
  <member type="way" ref="828412978" role=""/>
  <member type="way" ref="855715956" role=""/>
  <member type="way" ref="855715955" role=""/>
  <member type="way" ref="890917532" role=""/>
  <member type="way" ref="890917531" role=""/>
  <member type="way" ref="927497099" role=""/>
  <member type="way" ref="927497100" role=""/>
  <member type="way" ref="927497101" role=""/>
  <member type="way" ref="927497102" role=""/>
  <member type="way" ref="927497103" role=""/>
  <member type="way" ref="971535683" role=""/>
  <member type="way" ref="1000739746" role=""/>
  <member type="way" ref="1014018947" role=""/>
  <member type="way" ref="1014018951" role=""/>
  <member type="way" ref="1014018949" role=""/>
  <member type="way" ref="1031561350" role=""/>
  <member type="way" ref="1031561351" role=""/>
  <member type="way" ref="1032438966" role=""/>
  <member type="way" ref="1038617081" role=""/>
  <tag k="name" v="Former Primary State Highway 1 (US 99 in Washington State)"/>
  <tag k="old_ref" v="US 99;PSH 1"/>
  <tag k="route" v="road"/>
  <tag k="symbol" v="http://upload.wikimedia.org/wikipedia/commons/6/6a/WA-PSH1.svg"/>
  <tag k="type" v="route"/>
  <tag k="wikipedia" v="en:Interstate 5 in Washington#History"/>
 </relation>
 <relation id="4653628" visible="true" version="2" changeset="40376938" timestamp="2016-06-29T21:01:49Z" user="Luis36995" uid="1829683">
  <member type="way" ref="60699572" role="from"/>
  <member type="node" ref="1424516769" role="via"/>
  <member type="way" ref="129030992" role="to"/>
  <tag k="restriction" v="no_u_turn"/>
  <tag k="type" v="restriction"/>
 </relation>
 <relation id="5145486" visible="true" version="95" changeset="120486164" timestamp="2022-05-03T05:36:54Z" user="VigilantPenguin" uid="10353387">
  <member type="node" ref="3665232730" role="platform"/>
  <member type="node" ref="3748250740" role="stop"/>
  <member type="node" ref="3748249687" role="platform"/>
  <member type="node" ref="3748249686" role="stop"/>
  <member type="node" ref="3559868721" role="platform"/>
  <member type="node" ref="3748250737" role="stop"/>
  <member type="node" ref="3748250735" role="platform"/>
  <member type="node" ref="3748250734" role="stop"/>
  <member type="node" ref="3631951733" role="platform"/>
  <member type="node" ref="3748250739" role="stop"/>
  <member type="node" ref="1630853985" role="platform"/>
  <member type="node" ref="3748249683" role="stop"/>
  <member type="node" ref="3748249689" role="platform"/>
  <member type="node" ref="3748249688" role="stop"/>
  <member type="node" ref="3674036011" role="platform"/>
  <member type="node" ref="3748249692" role="stop"/>
  <member type="node" ref="3692564165" role="platform"/>
  <member type="node" ref="3748249693" role="stop"/>
  <member type="node" ref="3692007185" role="platform"/>
  <member type="node" ref="3748249715" role="stop"/>
  <member type="node" ref="3748249717" role="platform"/>
  <member type="node" ref="3715846592" role="stop"/>
  <member type="node" ref="3748249718" role="platform"/>
  <member type="node" ref="357799278" role="stop"/>
  <member type="node" ref="3301519961" role="platform"/>
  <member type="node" ref="3748249719" role="stop"/>
  <member type="node" ref="3748249724" role="platform"/>
  <member type="node" ref="3748250725" role="stop"/>
  <member type="node" ref="1032409373" role="platform"/>
  <member type="node" ref="3748250727" role="stop"/>
  <member type="node" ref="1069717726" role="platform"/>
  <member type="node" ref="3748250729" role="stop"/>
  <member type="node" ref="3301526263" role="platform"/>
  <member type="node" ref="3748250731" role="stop"/>
  <member type="node" ref="3748249697" role="platform"/>
  <member type="node" ref="3748249696" role="stop"/>
  <member type="node" ref="3301534453" role="platform"/>
  <member type="node" ref="3748249699" role="stop"/>
  <member type="node" ref="3301537961" role="platform"/>
  <member type="node" ref="1819221403" role="stop"/>
  <member type="node" ref="3301537966" role="platform"/>
  <member type="node" ref="3748249702" role="stop"/>
  <member type="node" ref="3748249707" role="platform"/>
  <member type="node" ref="3748249708" role="stop"/>
  <member type="node" ref="3324327959" role="platform"/>
  <member type="node" ref="3748249710" role="stop"/>
  <member type="node" ref="3748249713" role="platform"/>
  <member type="node" ref="3748249712" role="stop"/>
  <member type="node" ref="3746616827" role="platform"/>
  <member type="node" ref="3746616828" role="stop"/>
  <member type="node" ref="3746616832" role="platform"/>
  <member type="node" ref="3746616831" role="stop"/>
  <member type="node" ref="3746616835" role="platform"/>
  <member type="node" ref="3746616836" role="stop"/>
  <member type="node" ref="3746616840" role="platform"/>
  <member type="node" ref="3746616839" role="stop"/>
  <member type="node" ref="3746616843" role="platform"/>
  <member type="node" ref="3746616844" role="stop"/>
  <member type="node" ref="3746595232" role="platform"/>
  <member type="node" ref="3746595231" role="stop"/>
  <member type="node" ref="3746595241" role="platform"/>
  <member type="node" ref="3746595234" role="stop"/>
  <member type="node" ref="3746595243" role="platform"/>
  <member type="node" ref="1819221427" role="stop"/>
  <member type="node" ref="3051175477" role="platform"/>
  <member type="node" ref="3746595237" role="stop"/>
  <member type="node" ref="4015375240" role="platform"/>
  <member type="node" ref="4491461026" role="stop"/>
  <member type="node" ref="3749447976" role="platform"/>
  <member type="node" ref="3746578023" role="stop"/>
  <member type="way" ref="452330582" role=""/>
  <member type="way" ref="6493491" role=""/>
  <member type="way" ref="428230584" role=""/>
  <member type="way" ref="450919736" role=""/>
  <member type="way" ref="332591270" role=""/>
  <member type="way" ref="531945769" role=""/>
  <member type="way" ref="370819897" role=""/>
  <member type="way" ref="532864853" role=""/>
  <member type="way" ref="462696720" role=""/>
  <member type="way" ref="421777784" role=""/>
  <member type="way" ref="458064438" role=""/>
  <member type="way" ref="370819899" role=""/>
  <member type="way" ref="671432782" role=""/>
  <member type="way" ref="532243339" role=""/>
  <member type="way" ref="460425665" role=""/>
  <member type="way" ref="465991370" role=""/>
  <member type="way" ref="621396781" role=""/>
  <member type="way" ref="460423529" role=""/>
  <member type="way" ref="206883229" role=""/>
  <member type="way" ref="399134509" role=""/>
  <member type="way" ref="621396782" role=""/>
  <member type="way" ref="621319687" role=""/>
  <member type="way" ref="399134508" role=""/>
  <member type="way" ref="370819890" role=""/>
  <member type="way" ref="621378229" role=""/>
  <member type="way" ref="462696721" role=""/>
  <member type="way" ref="239828328" role=""/>
  <member type="way" ref="791136342" role=""/>
  <member type="way" ref="215869725" role=""/>
  <member type="way" ref="458058812" role=""/>
  <member type="way" ref="169473536" role=""/>
  <member type="way" ref="385667403" role=""/>
  <member type="way" ref="4794449" role=""/>
  <member type="way" ref="1047887475" role=""/>
  <member type="way" ref="1047887476" role=""/>
  <member type="way" ref="791135493" role=""/>
  <member type="way" ref="791135498" role=""/>
  <member type="way" ref="52840083" role=""/>
  <member type="way" ref="1025109942" role=""/>
  <member type="way" ref="791135499" role=""/>
  <member type="way" ref="243738297" role=""/>
  <member type="way" ref="243738306" role=""/>
  <member type="way" ref="548267481" role=""/>
  <member type="way" ref="243738307" role=""/>
  <member type="way" ref="367065793" role=""/>
  <member type="way" ref="367067754" role=""/>
  <member type="way" ref="367192355" role=""/>
  <member type="way" ref="25792594" role=""/>
  <member type="way" ref="668153336" role=""/>
  <member type="way" ref="533313902" role=""/>
  <member type="way" ref="60914402" role=""/>
  <member type="way" ref="368829106" role=""/>
  <member type="way" ref="466223584" role=""/>
  <member type="way" ref="466223583" role=""/>
  <member type="way" ref="947125437" role=""/>
  <member type="way" ref="947125438" role=""/>
  <member type="way" ref="947125439" role=""/>
  <member type="way" ref="12907832" role=""/>
  <member type="way" ref="378090317" role=""/>
  <member type="way" ref="13518560" role=""/>
  <member type="way" ref="457542648" role=""/>
  <member type="way" ref="13518554" role=""/>
  <member type="way" ref="909825611" role=""/>
  <member type="way" ref="8591493" role=""/>
  <member type="way" ref="621319691" role=""/>
  <member type="way" ref="43044392" role=""/>
  <member type="way" ref="43044394" role=""/>
  <member type="way" ref="37125674" role=""/>
  <member type="way" ref="37125675" role=""/>
  <member type="way" ref="4798548" role=""/>
  <member type="way" ref="180075108" role=""/>
  <member type="way" ref="180075105" role=""/>
  <member type="way" ref="8026829" role=""/>
  <member type="way" ref="8026830" role=""/>
  <member type="way" ref="331588701" role=""/>
  <member type="way" ref="9026594" role=""/>
  <member type="way" ref="8095337" role=""/>
  <member type="way" ref="332085447" role=""/>
  <member type="way" ref="9026308" role=""/>
  <member type="way" ref="6458048" role=""/>
  <member type="way" ref="257836843" role=""/>
  <member type="way" ref="428083354" role=""/>
  <member type="way" ref="331588704" role=""/>
  <member type="way" ref="60980719" role=""/>
  <member type="way" ref="428082942" role=""/>
  <member type="way" ref="428082932" role=""/>
  <member type="way" ref="52840106" role=""/>
  <member type="way" ref="336155509" role=""/>
  <member type="way" ref="428082940" role=""/>
  <member type="way" ref="60699572" role=""/>
  <member type="way" ref="893136311" role=""/>
  <member type="way" ref="518371186" role=""/>
  <member type="way" ref="792024858" role=""/>
  <member type="way" ref="792024859" role=""/>
  <member type="way" ref="893136312" role=""/>
  <member type="way" ref="518371192" role=""/>
  <member type="way" ref="738061809" role=""/>
  <member type="way" ref="129030993" role=""/>
  <member type="way" ref="428082938" role=""/>
  <member type="way" ref="428082936" role=""/>
  <member type="way" ref="129030994" role=""/>
  <member type="way" ref="428300266" role=""/>
  <member type="way" ref="428300269" role=""/>
  <member type="way" ref="428079966" role=""/>
  <member type="way" ref="428079960" role=""/>
  <member type="way" ref="428300270" role=""/>
  <member type="way" ref="368670627" role=""/>
  <member type="way" ref="428079969" role=""/>
  <member type="way" ref="428079963" role=""/>
  <member type="way" ref="428079968" role=""/>
  <member type="way" ref="35449757" role=""/>
  <member type="way" ref="428079964" role=""/>
  <member type="way" ref="428079961" role=""/>
  <member type="way" ref="428079987" role=""/>
  <member type="way" ref="428079972" role=""/>
  <member type="way" ref="428079965" role=""/>
  <member type="way" ref="428079970" role=""/>
  <member type="way" ref="975512756" role=""/>
  <member type="way" ref="282809756" role=""/>
  <member type="way" ref="368670632" role=""/>
  <member type="way" ref="428300268" role=""/>
  <member type="way" ref="428300273" role=""/>
  <member type="way" ref="805978440" role=""/>
  <member type="way" ref="805978441" role=""/>
  <member type="way" ref="428300271" role=""/>
  <member type="way" ref="428300272" role=""/>
  <member type="way" ref="428300267" role=""/>
  <member type="way" ref="428092551" role=""/>
  <member type="way" ref="428092547" role=""/>
  <member type="way" ref="428092560" role=""/>
  <member type="way" ref="62149965" role=""/>
  <member type="way" ref="428092550" role=""/>
  <member type="way" ref="170778334" role=""/>
  <member type="way" ref="738297438" role=""/>
  <member type="way" ref="738297437" role=""/>
  <member type="way" ref="428092549" role=""/>
  <member type="way" ref="170778347" role=""/>
  <member type="way" ref="428092559" role=""/>
  <member type="way" ref="428092557" role=""/>
  <member type="way" ref="428092555" role=""/>
  <member type="way" ref="742686380" role=""/>
  <member type="way" ref="170778345" role=""/>
  <member type="way" ref="400497084" role=""/>
  <member type="way" ref="1051783209" role=""/>
  <member type="way" ref="428092548" role=""/>
  <member type="way" ref="428092552" role=""/>
  <member type="way" ref="428092558" role=""/>
  <member type="way" ref="428092553" role=""/>
  <member type="way" ref="170778339" role=""/>
  <member type="way" ref="591108191" role=""/>
  <member type="way" ref="428093881" role=""/>
  <member type="way" ref="591108189" role=""/>
  <member type="way" ref="428093886" role=""/>
  <member type="way" ref="59716360" role=""/>
  <member type="way" ref="383904285" role=""/>
  <member type="way" ref="428093888" role=""/>
  <member type="way" ref="428093883" role=""/>
  <member type="way" ref="428093887" role=""/>
  <member type="way" ref="428093875" role=""/>
  <member type="way" ref="428093889" role=""/>
  <member type="way" ref="428093879" role=""/>
  <member type="way" ref="428093884" role=""/>
  <member type="way" ref="428093882" role=""/>
  <member type="way" ref="428093885" role=""/>
  <member type="way" ref="170778350" role=""/>
  <member type="way" ref="428092093" role=""/>
  <member type="way" ref="428092122" role=""/>
  <member type="way" ref="428092125" role=""/>
  <member type="way" ref="428092089" role=""/>
  <member type="way" ref="428092087" role=""/>
  <member type="way" ref="428092116" role=""/>
  <member type="way" ref="428092097" role=""/>
  <member type="way" ref="428092123" role=""/>
  <member type="way" ref="428092103" role=""/>
  <member type="way" ref="428092090" role=""/>
  <member type="way" ref="428092113" role=""/>
  <member type="way" ref="428092104" role=""/>
  <member type="way" ref="428092091" role=""/>
  <member type="way" ref="428092109" role=""/>
  <member type="way" ref="428092121" role=""/>
  <member type="way" ref="428092098" role=""/>
  <member type="way" ref="332333392" role=""/>
  <member type="way" ref="428092101" role=""/>
  <member type="way" ref="428092124" role=""/>
  <member type="way" ref="428090330" role=""/>
  <member type="way" ref="428090337" role=""/>
  <member type="way" ref="622519732" role=""/>
  <member type="way" ref="428090380" role=""/>
  <member type="way" ref="428090339" role=""/>
  <member type="way" ref="428090370" role=""/>
  <member type="way" ref="428090338" role=""/>
  <member type="way" ref="428090378" role=""/>
  <member type="way" ref="428090367" role=""/>
  <member type="way" ref="428090340" role=""/>
  <member type="way" ref="428090376" role=""/>
  <member type="way" ref="428090333" role=""/>
  <member type="way" ref="428090332" role=""/>
  <member type="way" ref="428090335" role=""/>
  <member type="way" ref="428090334" role=""/>
  <member type="way" ref="428090374" role=""/>
  <member type="way" ref="484846145" role=""/>
  <member type="way" ref="428090381" role=""/>
  <member type="way" ref="428090336" role=""/>
  <member type="way" ref="428090375" role=""/>
  <member type="way" ref="428090360" role=""/>
  <member type="way" ref="428090371" role=""/>
  <member type="way" ref="428093422" role=""/>
  <member type="way" ref="428093421" role=""/>
  <member type="way" ref="371236483" role=""/>
  <member type="way" ref="371236481" role=""/>
  <member type="way" ref="428093418" role=""/>
  <member type="way" ref="842554944" role=""/>
  <member type="way" ref="264249256" role=""/>
  <member type="way" ref="35085334" role=""/>
  <member type="way" ref="264249253" role=""/>
  <member type="way" ref="1056798633" role=""/>
  <member type="way" ref="35085337" role=""/>
  <member type="way" ref="1056798632" role=""/>
  <member type="way" ref="792024856" role=""/>
  <member type="way" ref="792024857" role=""/>
  <member type="way" ref="842554943" role=""/>
  <tag k="colour" v="#B40936"/>
  <tag k="from" v="Downtown Seattle"/>
  <tag k="gtfs:agency_id" v="KCM"/>
  <tag k="gtfs:dataset_id" v="KCGIS"/>
  <tag k="gtfs:trip_id" v="41983955"/>
  <tag k="gtfs:trip_marker" v="11675003:0"/>
  <tag k="name" v="Route E Line: Aurora Village Transit Center"/>
  <tag k="network" v="King County Metro"/>
  <tag k="network:wikidata" v="Q6411393"/>
  <tag k="network:wikipedia" v="en:King County Metro"/>
  <tag k="operator" v="Metro Transit"/>
  <tag k="public_transport:version" v="2"/>
  <tag k="ref" v="E"/>
  <tag k="route" v="bus"/>
  <tag k="source" v="King County GIS"/>
  <tag k="to" v="Aurora Village"/>
  <tag k="type" v="route"/>
  <tag k="via" v="Aurora Corridor"/>
  <tag k="website" v="http://metro.kingcounty.gov/travel-options/bus/rapidride/e-line/"/>
 </relation>
 <relation id="5511938" visible="true" version="86" changeset="120486164" timestamp="2022-05-03T05:36:54Z" user="VigilantPenguin" uid="10353387">
  <member type="node" ref="3749447959" role="platform"/>
  <member type="node" ref="3746578019" role="stop"/>
  <member type="node" ref="3746595245" role="platform"/>
  <member type="node" ref="3746595239" role="stop"/>
  <member type="node" ref="3051175478" role="platform"/>
  <member type="node" ref="3746595236" role="stop"/>
  <member type="node" ref="3746595242" role="platform"/>
  <member type="node" ref="3746595235" role="stop"/>
  <member type="node" ref="3746595240" role="platform"/>
  <member type="node" ref="3746595233" role="stop"/>
  <member type="node" ref="3746595229" role="platform"/>
  <member type="node" ref="3746595230" role="stop"/>
  <member type="node" ref="3746616842" role="platform"/>
  <member type="node" ref="3746616841" role="stop"/>
  <member type="node" ref="3746616837" role="platform"/>
  <member type="node" ref="3746616838" role="stop"/>
  <member type="node" ref="3746616833" role="platform"/>
  <member type="node" ref="3746616834" role="stop"/>
  <member type="node" ref="3746616829" role="platform"/>
  <member type="node" ref="3746616830" role="stop"/>
  <member type="node" ref="3746616825" role="platform"/>
  <member type="node" ref="3746616826" role="stop"/>
  <member type="node" ref="3748249711" role="platform"/>
  <member type="node" ref="1819221386" role="stop"/>
  <member type="node" ref="3324359239" role="platform"/>
  <member type="node" ref="3748249709" role="stop"/>
  <member type="node" ref="3748249706" role="platform"/>
  <member type="node" ref="3748249705" role="stop"/>
  <member type="node" ref="3748249703" role="platform"/>
  <member type="node" ref="3748249704" role="stop"/>
  <member type="node" ref="3748249701" role="platform"/>
  <member type="node" ref="3748249700" role="stop"/>
  <member type="node" ref="3327275907" role="platform"/>
  <member type="node" ref="3748249698" role="stop"/>
  <member type="node" ref="3748249695" role="platform"/>
  <member type="node" ref="3748249694" role="stop"/>
  <member type="node" ref="3327276832" role="platform"/>
  <member type="node" ref="3748250730" role="stop"/>
  <member type="node" ref="1069717741" role="platform"/>
  <member type="node" ref="3748250728" role="stop"/>
  <member type="node" ref="1032409367" role="platform"/>
  <member type="node" ref="3748250726" role="stop"/>
  <member type="node" ref="3748249723" role="platform"/>
  <member type="node" ref="3748249722" role="stop"/>
  <member type="node" ref="3748249721" role="platform"/>
  <member type="node" ref="3748249720" role="stop"/>
  <member type="node" ref="3748249716" role="platform"/>
  <member type="node" ref="30759915" role="stop"/>
  <member type="node" ref="3692007182" role="platform"/>
  <member type="node" ref="3748249714" role="stop"/>
  <member type="node" ref="3031028646" role="platform"/>
  <member type="node" ref="30760190" role="stop"/>
  <member type="node" ref="3674036010" role="platform"/>
  <member type="node" ref="3748249691" role="stop"/>
  <member type="node" ref="2303576059" role="platform"/>
  <member type="node" ref="4491461028" role="stop"/>
  <member type="node" ref="3716167026" role="platform"/>
  <member type="node" ref="3748249682" role="stop"/>
  <member type="node" ref="3631951732" role="platform"/>
  <member type="node" ref="3748250738" role="stop"/>
  <member type="node" ref="3748250732" role="platform"/>
  <member type="node" ref="3748250733" role="stop"/>
  <member type="node" ref="3655950332" role="platform"/>
  <member type="node" ref="3748250736" role="stop"/>
  <member type="node" ref="3748249684" role="platform"/>
  <member type="node" ref="3748249685" role="stop"/>
  <member type="node" ref="2356265161" role="platform"/>
  <member type="node" ref="4478179548" role="stop"/>
  <member type="node" ref="4017182683" role="platform"/>
  <member type="node" ref="1729942128" role="stop"/>
  <member type="way" ref="264249256" role=""/>
  <member type="way" ref="842554944" role=""/>
  <member type="way" ref="38497505" role=""/>
  <member type="way" ref="170778349" role=""/>
  <member type="way" ref="1056798608" role=""/>
  <member type="way" ref="1056798607" role=""/>
  <member type="way" ref="428090368" role=""/>
  <member type="way" ref="428090377" role=""/>
  <member type="way" ref="428090343" role=""/>
  <member type="way" ref="428090372" role=""/>
  <member type="way" ref="622519699" role=""/>
  <member type="way" ref="428090354" role=""/>
  <member type="way" ref="428090369" role=""/>
  <member type="way" ref="428090350" role=""/>
  <member type="way" ref="371236482" role=""/>
  <member type="way" ref="484846149" role=""/>
  <member type="way" ref="428090383" role=""/>
  <member type="way" ref="428090379" role=""/>
  <member type="way" ref="882820179" role=""/>
  <member type="way" ref="428090382" role=""/>
  <member type="way" ref="428090366" role=""/>
  <member type="way" ref="428090331" role=""/>
  <member type="way" ref="428090347" role=""/>
  <member type="way" ref="428090373" role=""/>
  <member type="way" ref="622519738" role=""/>
  <member type="way" ref="428092126" role=""/>
  <member type="way" ref="428092278" role=""/>
  <member type="way" ref="428092279" role=""/>
  <member type="way" ref="428092110" role=""/>
  <member type="way" ref="428092112" role=""/>
  <member type="way" ref="428092120" role=""/>
  <member type="way" ref="758034460" role=""/>
  <member type="way" ref="428092095" role=""/>
  <member type="way" ref="309274292" role=""/>
  <member type="way" ref="428092108" role=""/>
  <member type="way" ref="428092111" role=""/>
  <member type="way" ref="428092118" role=""/>
  <member type="way" ref="428092105" role=""/>
  <member type="way" ref="428092107" role=""/>
  <member type="way" ref="428092117" role=""/>
  <member type="way" ref="428092096" role=""/>
  <member type="way" ref="428092094" role=""/>
  <member type="way" ref="428092106" role=""/>
  <member type="way" ref="428092114" role=""/>
  <member type="way" ref="428092088" role=""/>
  <member type="way" ref="428092092" role=""/>
  <member type="way" ref="428092119" role=""/>
  <member type="way" ref="428092115" role=""/>
  <member type="way" ref="428092141" role=""/>
  <member type="way" ref="428092140" role=""/>
  <member type="way" ref="332333391" role=""/>
  <member type="way" ref="428093874" role=""/>
  <member type="way" ref="428093877" role=""/>
  <member type="way" ref="428093880" role=""/>
  <member type="way" ref="428093878" role=""/>
  <member type="way" ref="428093873" role=""/>
  <member type="way" ref="428093876" role=""/>
  <member type="way" ref="428093872" role=""/>
  <member type="way" ref="393066999" role=""/>
  <member type="way" ref="383904285" role=""/>
  <member type="way" ref="59716360" role=""/>
  <member type="way" ref="428093886" role=""/>
  <member type="way" ref="591108189" role=""/>
  <member type="way" ref="428093881" role=""/>
  <member type="way" ref="591108191" role=""/>
  <member type="way" ref="170778339" role=""/>
  <member type="way" ref="428092553" role=""/>
  <member type="way" ref="428092558" role=""/>
  <member type="way" ref="428092552" role=""/>
  <member type="way" ref="428092548" role=""/>
  <member type="way" ref="170778344" role=""/>
  <member type="way" ref="742686380" role=""/>
  <member type="way" ref="428092555" role=""/>
  <member type="way" ref="428092557" role=""/>
  <member type="way" ref="428092559" role=""/>
  <member type="way" ref="170778347" role=""/>
  <member type="way" ref="428092549" role=""/>
  <member type="way" ref="170778338" role=""/>
  <member type="way" ref="428092550" role=""/>
  <member type="way" ref="62149965" role=""/>
  <member type="way" ref="428092560" role=""/>
  <member type="way" ref="428092547" role=""/>
  <member type="way" ref="428092551" role=""/>
  <member type="way" ref="428300267" role=""/>
  <member type="way" ref="428300272" role=""/>
  <member type="way" ref="428300271" role=""/>
  <member type="way" ref="805978441" role=""/>
  <member type="way" ref="805978440" role=""/>
  <member type="way" ref="428300273" role=""/>
  <member type="way" ref="428300268" role=""/>
  <member type="way" ref="368670632" role=""/>
  <member type="way" ref="428079976" role=""/>
  <member type="way" ref="428079967" role=""/>
  <member type="way" ref="975512755" role=""/>
  <member type="way" ref="368670630" role=""/>
  <member type="way" ref="738596998" role=""/>
  <member type="way" ref="537708777" role=""/>
  <member type="way" ref="975514055" role=""/>
  <member type="way" ref="428079971" role=""/>
  <member type="way" ref="428079980" role=""/>
  <member type="way" ref="428079975" role=""/>
  <member type="way" ref="428079968" role=""/>
  <member type="way" ref="428079963" role=""/>
  <member type="way" ref="428079969" role=""/>
  <member type="way" ref="368670627" role=""/>
  <member type="way" ref="428300270" role=""/>
  <member type="way" ref="428079960" role=""/>
  <member type="way" ref="428079966" role=""/>
  <member type="way" ref="428300269" role=""/>
  <member type="way" ref="428300266" role=""/>
  <member type="way" ref="428082943" role=""/>
  <member type="way" ref="428082935" role=""/>
  <member type="way" ref="129030995" role=""/>
  <member type="way" ref="129030993" role=""/>
  <member type="way" ref="738061809" role=""/>
  <member type="way" ref="518371192" role=""/>
  <member type="way" ref="893136312" role=""/>
  <member type="way" ref="792024859" role=""/>
  <member type="way" ref="792024858" role=""/>
  <member type="way" ref="518371186" role=""/>
  <member type="way" ref="893136311" role=""/>
  <member type="way" ref="129030992" role=""/>
  <member type="way" ref="428082937" role=""/>
  <member type="way" ref="60699573" role=""/>
  <member type="way" ref="428082934" role=""/>
  <member type="way" ref="428082941" role=""/>
  <member type="way" ref="933043815" role=""/>
  <member type="way" ref="428082933" role=""/>
  <member type="way" ref="428082944" role=""/>
  <member type="way" ref="428082939" role=""/>
  <member type="way" ref="52847322" role=""/>
  <member type="way" ref="398813068" role=""/>
  <member type="way" ref="60980717" role=""/>
  <member type="way" ref="52840112" role=""/>
  <member type="way" ref="398813066" role=""/>
  <member type="way" ref="398813064" role=""/>
  <member type="way" ref="48003054" role=""/>
  <member type="way" ref="48003053" role=""/>
  <member type="way" ref="180075108" role=""/>
  <member type="way" ref="4798548" role=""/>
  <member type="way" ref="180075106" role=""/>
  <member type="way" ref="37125672" role=""/>
  <member type="way" ref="43044393" role=""/>
  <member type="way" ref="331577293" role=""/>
  <member type="way" ref="8591490" role=""/>
  <member type="way" ref="621319692" role=""/>
  <member type="way" ref="338894965" role=""/>
  <member type="way" ref="393066998" role=""/>
  <member type="way" ref="909825612" role=""/>
  <member type="way" ref="13518555" role=""/>
  <member type="way" ref="13518557" role=""/>
  <member type="way" ref="13518558" role=""/>
  <member type="way" ref="378090317" role=""/>
  <member type="way" ref="116721546" role=""/>
  <member type="way" ref="60914400" role=""/>
  <member type="way" ref="466223582" role=""/>
  <member type="way" ref="466223585" role=""/>
  <member type="way" ref="465991354" role=""/>
  <member type="way" ref="393067000" role=""/>
  <member type="way" ref="720086515" role=""/>
  <member type="way" ref="243738299" role=""/>
  <member type="way" ref="668153335" role=""/>
  <member type="way" ref="367068002" role=""/>
  <member type="way" ref="243738308" role=""/>
  <member type="way" ref="243738305" role=""/>
  <member type="way" ref="367069126" role=""/>
  <member type="way" ref="791135497" role=""/>
  <member type="way" ref="791135496" role=""/>
  <member type="way" ref="4755100" role=""/>
  <member type="way" ref="791135495" role=""/>
  <member type="way" ref="791135494" role=""/>
  <member type="way" ref="173554582" role=""/>
  <member type="way" ref="22927959" role=""/>
  <member type="way" ref="458058813" role=""/>
  <member type="way" ref="484846952" role=""/>
  <member type="way" ref="1025109944" role=""/>
  <member type="way" ref="206883228" role=""/>
  <member type="way" ref="1047851366" role=""/>
  <member type="way" ref="370785079" role=""/>
  <member type="way" ref="462696721" role=""/>
  <member type="way" ref="621378229" role=""/>
  <member type="way" ref="370819890" role=""/>
  <member type="way" ref="399134508" role=""/>
  <member type="way" ref="621319687" role=""/>
  <member type="way" ref="621396782" role=""/>
  <member type="way" ref="399134509" role=""/>
  <member type="way" ref="206883229" role=""/>
  <member type="way" ref="460423529" role=""/>
  <member type="way" ref="621396781" role=""/>
  <member type="way" ref="465991370" role=""/>
  <member type="way" ref="460425665" role=""/>
  <member type="way" ref="532243339" role=""/>
  <member type="way" ref="671432782" role=""/>
  <member type="way" ref="370819899" role=""/>
  <member type="way" ref="458064438" role=""/>
  <member type="way" ref="421777784" role=""/>
  <member type="way" ref="462696720" role=""/>
  <member type="way" ref="532864853" role=""/>
  <member type="way" ref="370819897" role=""/>
  <member type="way" ref="531945769" role=""/>
  <member type="way" ref="332591270" role=""/>
  <member type="way" ref="450919736" role=""/>
  <member type="way" ref="428230584" role=""/>
  <member type="way" ref="6493491" role=""/>
  <member type="way" ref="6347526" role=""/>
  <member type="way" ref="240874287" role=""/>
  <member type="way" ref="452330584" role=""/>
  <member type="way" ref="456673720" role=""/>
  <member type="way" ref="400679677" role=""/>
  <member type="way" ref="1049837575" role=""/>
  <member type="way" ref="389302666" role=""/>
  <member type="way" ref="400679671" role=""/>
  <member type="way" ref="428230572" role=""/>
  <member type="way" ref="164242785" role=""/>
  <member type="way" ref="452336741" role=""/>
  <member type="way" ref="585995094" role=""/>
  <member type="way" ref="442512168" role=""/>
  <member type="way" ref="164241876" role=""/>
  <member type="way" ref="428230574" role=""/>
  <member type="way" ref="6367020" role=""/>
  <member type="way" ref="428245583" role=""/>
  <member type="way" ref="22927949" role=""/>
  <member type="way" ref="428245584" role=""/>
  <member type="way" ref="428245585" role=""/>
  <member type="way" ref="127697547" role=""/>
  <member type="way" ref="621378266" role=""/>
  <member type="way" ref="127697550" role=""/>
  <member type="way" ref="456673729" role=""/>
  <member type="way" ref="428246448" role=""/>
  <member type="way" ref="55698565" role=""/>
  <member type="way" ref="428246462" role=""/>
  <member type="way" ref="428246463" role=""/>
  <member type="way" ref="537607366" role=""/>
  <member type="way" ref="398982875" role=""/>
  <member type="way" ref="792024856" role=""/>
  <member type="way" ref="792024857" role=""/>
  <member type="way" ref="842554943" role=""/>
  <tag k="colour" v="#B40936"/>
  <tag k="from" v="Aurora Village"/>
  <tag k="gtfs:agency_id" v="KCM"/>
  <tag k="gtfs:dataset_id" v="KCGIS"/>
  <tag k="gtfs:trip_id" v="45300354"/>
  <tag k="gtfs:trip_marker" v="20675005:1"/>
  <tag k="name" v="Route E Line: Stadium Station Downtown Seattle"/>
  <tag k="network" v="King County Metro"/>
  <tag k="network:wikidata" v="Q6411393"/>
  <tag k="network:wikipedia" v="en:King County Metro"/>
  <tag k="operator" v="Metro Transit"/>
  <tag k="public_transport:version" v="2"/>
  <tag k="ref" v="E"/>
  <tag k="route" v="bus"/>
  <tag k="source" v="King County GIS"/>
  <tag k="to" v="Downtown Seattle"/>
  <tag k="type" v="route"/>
  <tag k="via" v="Aurora Corridor"/>
 </relation>
 <relation id="5511939" visible="true" version="11" changeset="115725610" timestamp="2022-01-03T19:27:44Z" user="doublah" uid="4948143">
  <member type="relation" ref="5145486" role=""/>
  <member type="relation" ref="5511938" role=""/>
  <tag k="colour" v="#B40936"/>
  <tag k="from" v="Aurora Village Transit Center"/>
  <tag k="gtfs:agency_id" v="KCM"/>
  <tag k="gtfs:dataset_id" v="KCGIS"/>
  <tag k="gtfs:route_id" v="102615"/>
  <tag k="name" v="Route E Line"/>
  <tag k="network" v="King County Metro"/>
  <tag k="network:wikidata" v="Q6411393"/>
  <tag k="network:wikipedia" v="en:King County Metro"/>
  <tag k="operator" v="King County Metro"/>
  <tag k="public_transport:version" v="2"/>
  <tag k="ref" v="E"/>
  <tag k="route_master" v="bus"/>
  <tag k="to" v="Downtown Seattle"/>
  <tag k="type" v="route_master"/>
  <tag k="website" v="http://metro.kingcounty.gov/schedules/675/n0.html"/>
  <tag k="wikidata" v="Q18156872"/>
  <tag k="wikipedia" v="en:RapidRide E Line"/>
 </relation>
 <relation id="7505656" visible="true" version="3" changeset="110132302" timestamp="2021-08-23T18:31:46Z" user="austinsnow" uid="11517143">
  <member type="way" ref="518371192" role="from"/>
  <member type="node" ref="53178613" role="via"/>
  <member type="way" ref="975775894" role="to"/>
  <tag k="restriction" v="no_left_turn"/>
  <tag k="type" v="restriction"/>
 </relation>
 <relation id="12147988" visible="true" version="1" changeset="97127196" timestamp="2021-01-07T19:21:44Z" user="Dustin C" uid="449970">
  <member type="way" ref="792024856" role="from"/>
  <member type="node" ref="7404463396" role="via"/>
  <member type="way" ref="792024858" role="to"/>
  <tag k="restriction" v="no_left_turn"/>
  <tag k="type" v="restriction"/>
 </relation>
 <relation id="12147989" visible="true" version="1" changeset="97127196" timestamp="2021-01-07T19:21:44Z" user="Dustin C" uid="449970">
  <member type="way" ref="792024859" role="from"/>
  <member type="node" ref="7404463397" role="via"/>
  <member type="way" ref="792024857" role="to"/>
  <tag k="restriction" v="no_left_turn"/>
  <tag k="type" v="restriction"/>
 </relation>
</osm>
`,Ga=' {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"coordinates":[[[-122.34485637402513,47.692542375442635],[-122.34424365879015,47.69253914074448],[-122.34421722793687,47.69167870390754],[-122.344946802417,47.69169164291247],[-122.34485637402513,47.692542375442635]]],"type":"Polygon"}}]}';function Xa(t){let e;return{c(){e=Ee("Counter")},m(r,n){D(r,e,n)},d(r){r&&M(e)}}}function qa(t){let e,r;return e=new Qr({props:{slot:"icon",open:"panel1"}}),{c(){B(e.$$.fragment)},m(n,a){W(e,n,a),r=!0},p:$,i(n){r||(R(e.$$.fragment,n),r=!0)},o(n){L(e.$$.fragment,n),r=!1},d(n){z(e,n)}}}function Ya(t){let e,r,n,a;return n=new Nn({}),{c(){e=Ee(`The content for panel 1.
      `),r=q("div"),B(n.$$.fragment),Le(r,"class","card svelte-1vgvyon")},m(o,y){D(o,e,y),D(o,r,y),W(n,r,null),a=!0},p:$,i(o){a||(R(n.$$.fragment,o),a=!0)},o(o){L(n.$$.fragment,o),a=!1},d(o){o&&M(e),o&&M(r),z(n)}}}function Qa(t){let e,r,n,a;return e=new xr({props:{$$slots:{icon:[qa],default:[Xa]},$$scope:{ctx:t}}}),n=new $r({props:{$$slots:{default:[Ya]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment),r=ue(),B(n.$$.fragment)},m(o,y){W(e,o,y),D(o,r,y),W(n,o,y),a=!0},p(o,y){const m={};y&2048&&(m.$$scope={dirty:y,ctx:o}),e.$set(m);const l={};y&2048&&(l.$$scope={dirty:y,ctx:o}),n.$set(l)},i(o){a||(R(e.$$.fragment,o),R(n.$$.fragment,o),a=!0)},o(o){L(e.$$.fragment,o),L(n.$$.fragment,o),a=!1},d(o){z(e,o),o&&M(r),z(n,o)}}}function Ja(t){let e;return{c(){e=Ee("3 forms with tabs")},m(r,n){D(r,e,n)},d(r){r&&M(e)}}}function $a(t){let e,r;return e=new Qr({props:{slot:"icon",open:"panel2"}}),{c(){B(e.$$.fragment)},m(n,a){W(e,n,a),r=!0},p:$,i(n){r||(R(e.$$.fragment,n),r=!0)},o(n){L(e.$$.fragment,n),r=!1},d(n){z(e,n)}}}function xa(t){let e=t[10]+"",r;return{c(){r=Ee(e)},m(n,a){D(n,r,a)},p(n,a){a&1024&&e!==(e=n[10]+"")&&Pt(r,e)},d(n){n&&M(r)}}}function eo(t){let e,r;return e=new kn({props:{$$slots:{default:[xa]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(n,a){W(e,n,a),r=!0},p(n,a){const o={};a&3072&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(n){r||(R(e.$$.fragment,n),r=!0)},o(n){L(e.$$.fragment,n),r=!1},d(n){z(e,n)}}}function ro(t){let e,r;return e=new _a({props:{tab:t[10],$$slots:{default:[eo]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(n,a){W(e,n,a),r=!0},p(n,a){const o={};a&1024&&(o.tab=n[10]),a&3072&&(o.$$scope={dirty:a,ctx:n}),e.$set(o)},i(n){r||(R(e.$$.fragment,n),r=!0)},o(n){L(e.$$.fragment,n),r=!1},d(n){z(e,n)}}}function to(t){let e;return{c(){e=q("p"),e.textContent="Form 3"},m(r,n){D(r,e,n)},d(r){r&&M(e)}}}function no(t){let e;return{c(){e=q("p"),e.textContent="Form 2"},m(r,n){D(r,e,n)},d(r){r&&M(e)}}}function ao(t){let e;return{c(){e=q("p"),e.textContent="Form 1"},m(r,n){D(r,e,n)},d(r){r&&M(e)}}}function oo(t){let e,r,n,a,o,y;function m(w){t[6](w)}let l={tabs:["Residential","Commercial","Other"],$$slots:{default:[ro,({tab:w})=>({10:w}),({tab:w})=>w?1024:0]},$$scope:{ctx:t}};t[3]!==void 0&&(l.active=t[3]),n=new Va({props:l}),X.push(()=>Ir(n,"active",m,t[3]));function f(w,c){if(w[3]=="Residential")return ao;if(w[3]=="Commercial")return no;if(w[3]=="Other")return to}let p=f(t),i=p&&p(t);return{c(){e=Ee(`The content for panel 2.
      `),r=q("div"),B(n.$$.fragment),o=ue(),i&&i.c()},m(w,c){D(w,e,c),D(w,r,c),W(n,r,null),Re(r,o),i&&i.m(r,null),y=!0},p(w,c){const h={};c&3072&&(h.$$scope={dirty:c,ctx:w}),!a&&c&8&&(a=!0,h.active=w[3],Cr(()=>a=!1)),n.$set(h),p!==(p=f(w))&&(i&&i.d(1),i=p&&p(w),i&&(i.c(),i.m(r,null)))},i(w){y||(R(n.$$.fragment,w),y=!0)},o(w){L(n.$$.fragment,w),y=!1},d(w){w&&M(e),w&&M(r),z(n),i&&i.d()}}}function mo(t){let e,r,n,a;return e=new xr({props:{$$slots:{icon:[$a],default:[Ja]},$$scope:{ctx:t}}}),n=new $r({props:{$$slots:{default:[oo]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment),r=ue(),B(n.$$.fragment)},m(o,y){W(e,o,y),D(o,r,y),W(n,o,y),a=!0},p(o,y){const m={};y&2048&&(m.$$scope={dirty:y,ctx:o}),e.$set(m);const l={};y&2056&&(l.$$scope={dirty:y,ctx:o}),n.$set(l)},i(o){a||(R(e.$$.fragment,o),R(n.$$.fragment,o),a=!0)},o(o){L(e.$$.fragment,o),L(n.$$.fragment,o),a=!1},d(o){z(e,o),o&&M(r),z(n,o)}}}function yo(t){let e;return{c(){e=Ee("osm2streets")},m(r,n){D(r,e,n)},d(r){r&&M(e)}}}function lo(t){let e,r;return e=new Qr({props:{slot:"icon",open:"panel3"}}),{c(){B(e.$$.fragment)},m(n,a){W(e,n,a),r=!0},p:$,i(n){r||(R(e.$$.fragment,n),r=!0)},o(n){L(e.$$.fragment,n),r=!1},d(n){z(e,n)}}}function fo(t){return{c:$,m:$,p:$,d:$}}function io(t){let e,r=t[9]+"",n;return{c(){e=q("pre"),n=Ee(r)},m(a,o){D(a,e,o),Re(e,n)},p:$,d(a){a&&M(e)}}}function po(t){let e;return{c(){e=q("p"),e.textContent="Loading..."},m(r,n){D(r,e,n)},p:$,d(r){r&&M(e)}}}function wo(t){let e,r={ctx:t,current:null,token:null,hasCatch:!1,pending:po,then:io,catch:fo,value:9};return xt(t[4](),r),{c(){e=Me(),r.block.c()},m(n,a){D(n,e,a),r.block.m(n,r.anchor=a),r.mount=()=>e.parentNode,r.anchor=e},p(n,a){t=n,en(r,t,a)},d(n){n&&M(e),r.block.d(n),r.token=null,r=null}}}function so(t){let e,r,n,a;return e=new xr({props:{$$slots:{icon:[lo],default:[yo]},$$scope:{ctx:t}}}),n=new $r({props:{$$slots:{default:[wo]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment),r=ue(),B(n.$$.fragment)},m(o,y){W(e,o,y),D(o,r,y),W(n,o,y),a=!0},p(o,y){const m={};y&2048&&(m.$$scope={dirty:y,ctx:o}),e.$set(m);const l={};y&2048&&(l.$$scope={dirty:y,ctx:o}),n.$set(l)},i(o){a||(R(e.$$.fragment,o),R(n.$$.fragment,o),a=!0)},o(o){L(e.$$.fragment,o),L(n.$$.fragment,o),a=!1},d(o){z(e,o),o&&M(r),z(n,o)}}}function bo(t){let e,r,n,a,o,y,m,l,f;function p(u){t[5](u)}let i={$$slots:{default:[Qa]},$$scope:{ctx:t}};t[0]!==void 0&&(i.open=t[0]),e=new Hr({props:i}),X.push(()=>Ir(e,"open",p,t[0]));function w(u){t[7](u)}let c={$$slots:{default:[mo]},$$scope:{ctx:t}};t[1]!==void 0&&(c.open=t[1]),a=new Hr({props:c}),X.push(()=>Ir(a,"open",w,t[1]));function h(u){t[8](u)}let T={$$slots:{default:[so]},$$scope:{ctx:t}};return t[2]!==void 0&&(T.open=t[2]),m=new Hr({props:T}),X.push(()=>Ir(m,"open",h,t[2])),{c(){B(e.$$.fragment),n=ue(),B(a.$$.fragment),y=ue(),B(m.$$.fragment)},m(u,b){W(e,u,b),D(u,n,b),W(a,u,b),D(u,y,b),W(m,u,b),f=!0},p(u,b){const s={};b&2048&&(s.$$scope={dirty:b,ctx:u}),!r&&b&1&&(r=!0,s.open=u[0],Cr(()=>r=!1)),e.$set(s);const _={};b&2056&&(_.$$scope={dirty:b,ctx:u}),!o&&b&2&&(o=!0,_.open=u[1],Cr(()=>o=!1)),a.$set(_);const g={};b&2048&&(g.$$scope={dirty:b,ctx:u}),!l&&b&4&&(l=!0,g.open=u[2],Cr(()=>l=!1)),m.$set(g)},i(u){f||(R(e.$$.fragment,u),R(a.$$.fragment,u),R(m.$$.fragment,u),f=!0)},o(u){L(e.$$.fragment,u),L(a.$$.fragment,u),L(m.$$.fragment,u),f=!1},d(u){z(e,u),u&&M(n),z(a,u),u&&M(y),z(m,u)}}}function uo(t){let e,r,n,a;return n=new Xn({props:{$$slots:{default:[bo]},$$scope:{ctx:t}}}),{c(){e=q("h1"),e.textContent="Playground",r=ue(),B(n.$$.fragment)},m(o,y){D(o,e,y),D(o,r,y),W(n,o,y),a=!0},p(o,[y]){const m={};y&2063&&(m.$$scope={dirty:y,ctx:o}),n.$set(m)},i(o){a||(R(n.$$.fragment,o),a=!0)},o(o){L(n.$$.fragment,o),a=!1},d(o){o&&M(e),o&&M(r),z(n,o)}}}function co(t,e,r){let n=!1,a=!1,o=!1,y="Residential";async function m(){await Ut(),console.log("Importing streets");const w=new dr(Ka,Ga,{debug_each_step:!1,dual_carriageway_experiment:!1,cycletrack_snapping_experiment:!1,inferred_sidewalks:!1,osm2lanes:!1});return await new Promise(c=>setTimeout(c,5e3)),w.toGeojsonPlain()}function l(w){n=w,r(0,n)}function f(w){y=w,r(3,y)}function p(w){a=w,r(1,a)}function i(w){o=w,r(2,o)}return[n,a,o,y,m,l,f,p,i]}class go extends we{constructor(e){super(),pe(this,e,co,uo,ae,{})}}new go({target:document.getElementById("app")});
