var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(t.hasOwnProperty(r))e[r]=t[r]};return e(t,r)};return function(t,r){e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function o(e){try{s(n.next(e))}catch(t){i(t)}}function l(e){try{s(n["throw"](e))}catch(t){i(t)}}function s(e){e.done?r(e.value):a(e.value).then(o,l)}s((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(t){return s([e,t])}}function s(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;a=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}if(i[2])r.ops.pop();r.trys.pop();continue}o=t.call(e,r)}catch(l){o=[6,l];a=0}finally{n=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),a=0,t=0;t<r;t++)for(var i=arguments[t],o=0,l=i.length;o<l;o++,a++)n[a]=i[o];return n};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","ionicons");var a;var i;var o=false;var l=0;var s=false;var f=e("w",typeof window!=="undefined"?window:{});var u=e("C",f.CSS);var $=e("d",f.document||{head:{}});var c=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}});var v=function(){return($.head.attachShadow+"").indexOf("[native")>-1}();var h=e("a",(function(e){return Promise.resolve(e)}));var d=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var p="{visibility:hidden}.hydrated{visibility:inherit}";var m=function(e,t){if(t===void 0){t=""}{return function(){return}}};var g=function(e,t){{return function(){return}}};var y=new WeakMap;var w=function(e,t,r){var n=xe.get(e);if(d&&r){n=n||new CSSStyleSheet;n.replace(t)}else{n=t}xe.set(e,n)};var b=function(e,t,r,n){var a=_(t);var i=xe.get(a);e=e.nodeType===11?e:$;if(i){if(typeof i==="string"){e=e.head||e;var o=y.get(e);var l=void 0;if(!o){y.set(e,o=new Set)}if(!o.has(a)){{if(c.$cssShim$){l=c.$cssShim$.createHostStyle(n,a,i,!!(t.$flags$&10));var s=l["s-sc"];if(s){a=s;o=null}}else{l=$.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var S=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=m("attachStyles",t.$tagName$);var i=b(v&&r.shadowRoot?r.shadowRoot:r.getRootNode(),t,e.$modeName$,r);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h")}a()};var _=function(e,t){return"sc-"+e.$tagName$};var R={};var x=function(e){return e!=null};var C=function(){};var N=function(e){e=typeof e;return e==="object"||e==="function"};var E=typeof Deno!=="undefined";var M=!E&&typeof global!=="undefined"&&typeof require==="function"&&!!global.process&&typeof __filename==="string"&&(!global.origin||typeof global.origin!=="string");var j=E&&Deno.build.os==="windows";var k=M?process.cwd:E?Deno.cwd:function(){return"/"};var A=M?process.exit:E?Deno.exit:C;var P=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=false;var o=false;var l=[];var s=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){s(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!N(a)){a=String(a)}if(i&&o){l[l.length-1].$text$+=a}else{l.push(i?T(null,a):a)}o=i}}};s(r);if(t){{var f=t.className||t.class;if(f){t.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}var u=T(e,null);u.$attrs$=t;if(l.length>0){u.$children$=l}return u}));var T=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}return r};var L=e("H",{});var O=function(e){return e&&e.$tag$===L};var I=function(e,t,r,n,a,i){if(r!==n){var o=be(e,t);var l=t.toLowerCase();if(t==="class"){var s=e.classList;var f=z(r);var u=z(n);s.remove.apply(s,f.filter((function(e){return e&&!u.includes(e)})));s.add.apply(s,u.filter((function(e){return e&&!f.includes(e)})))}else{var $=N(n);if((o||$&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var c=n==null?"":n;if(t==="list"){o=false}else if(r==null||e[t]!=c){e[t]=c}}else{e[t]=n}}catch(v){}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){{e.removeAttribute(t)}}}else if((!o||i&4||a)&&!$){n=n===true?"":n;{e.setAttribute(t,n)}}}}};var U=/\s/;var z=function(e){return!e?[]:e.split(U)};var B=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||R;var o=t.$attrs$||R;{for(n in i){if(!(n in o)){I(a,n,i[n],undefined,r,t.$flags$)}}}for(n in o){I(a,n,i[n],o[n],r,t.$flags$)}};var H=function(e,t,r,n){var i=t.$children$[r];var l=0;var s;var f;if(i.$text$!==null){s=i.$elm$=$.createTextNode(i.$text$)}else{s=i.$elm$=$.createElement(i.$tag$);{B(null,i,o)}if(x(a)&&s["s-si"]!==a){s.classList.add(s["s-si"]=a)}if(i.$children$){for(l=0;l<i.$children$.length;++l){f=H(e,i,l);if(f){s.appendChild(f)}}}}return s};var q=function(e,t,r,n,a,o){var l=e;var s;if(l.shadowRoot&&l.tagName===i){l=l.shadowRoot}for(;a<=o;++a){if(n[a]){s=H(null,r,a);if(s){n[a].$elm$=s;l.insertBefore(s,t)}}}};var D=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;a.remove()}}};var V=function(e,t,r,n){var a=0;var i=0;var o=t.length-1;var l=t[0];var s=t[o];var f=n.length-1;var u=n[0];var $=n[f];var c;while(a<=o&&i<=f){if(l==null){l=t[++a]}else if(s==null){s=t[--o]}else if(u==null){u=n[++i]}else if($==null){$=n[--f]}else if(W(l,u)){F(l,u);l=t[++a];u=n[++i]}else if(W(s,$)){F(s,$);s=t[--o];$=n[--f]}else if(W(l,$)){F(l,$);e.insertBefore(l.$elm$,s.$elm$.nextSibling);l=t[++a];$=n[--f]}else if(W(s,u)){F(s,u);e.insertBefore(s.$elm$,l.$elm$);s=t[--o];u=n[++i]}else{{c=H(t&&t[i],r,i);u=n[++i]}if(c){{l.$elm$.parentNode.insertBefore(c,l.$elm$)}}}}if(a>o){q(e,n[f+1]==null?null:n[f+1].$elm$,r,n,i,f)}else if(i>f){D(t,a,o)}};var W=function(e,t){if(e.$tag$===t.$tag$){return true}return false};var F=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$text$;if(i===null){{{B(e,t,o)}}if(n!==null&&a!==null){V(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}q(r,null,t,a,0,a.length-1)}else if(n!==null){D(n,0,n.length-1)}}else if(e.$text$!==i){r.data=i}};var G=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var o=e.$vnode$||T(null,null);var l=O(t)?t:P(null,null,t);i=r.tagName;if(n.$attrsToReflect$){l.$attrs$=l.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return l.$attrs$[n]=r[t]}))}l.$tag$=null;l.$flags$|=4;e.$vnode$=l;l.$elm$=o.$elm$=r.shadowRoot||r;{a=r["s-sc"]}F(o,l)};var Q=e("c",(function(e){return ge(e).$hostElement$}));var J=function(e,t,r){var n=c.ce(t,r);e.dispatchEvent(n);return n};var K=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var X=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}K(e,e.$ancestorComponent$);var r=function(){return Y(e,t)};return Te(r)};var Y=function(e,t){var r=m("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;r();return ie(a,(function(){return Z(e,n,t)}))};var Z=function(e,t,r){var n=e.$hostElement$;var a=m("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(r){S(e)}var o=m("render",e.$cmpMeta$.$tagName$);{{G(e,ee(e,t))}}if(c.$cssShim$){c.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}o();a();{var l=n["s-p"];var s=function(){return te(e)};if(l.length===0){s()}else{Promise.all(l).then(s);e.$flags$|=4;l.length=0}}};var ee=function(e,t){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(r){Se(r)}return t};var te=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=m("postUpdate",t);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{oe(r)}n();{e.$onReadyResolve$(r);if(!a){ne()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Pe((function(){return X(e,false)}))}e.$flags$&=~(4|512)}};var re=function(e){{var t=ge(e);var r=t.$hostElement$.isConnected;if(r&&(t.$flags$&(2|16))===2){X(t,false)}return r}};var ne=function(e){{oe($.documentElement)}{c.$flags$|=2}Pe((function(){return J(f,"appload",{detail:{namespace:n}})}))};var ae=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(n){Se(n)}}return undefined};var ie=function(e,t){return e&&e.then?e.then(t):t()};var oe=function(e){return e.classList.add("hydrated")};var le=function(e,t){if(e!=null&&!N(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&1){return String(e)}return e}return e};var se=function(e,t){return ge(e).$instanceValues$.get(t)};var fe=function(e,t,r,n){var a=ge(e);var i=a.$instanceValues$.get(t);var o=a.$flags$;var l=a.$lazyInstance$;r=le(r,n.$members$[t][0]);if((!(o&8)||i===undefined)&&r!==i){a.$instanceValues$.set(t,r);if(l){if(n.$watchers$&&o&128){var s=n.$watchers$[t];if(s){s.map((function(e){try{l[e](r,i,t)}catch(n){Se(n)}}))}}if((o&(2|16))===2){X(a,false)}}}};var ue=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return se(this,n)},set:function(e){fe(this,n,e,t)},configurable:true,enumerable:true})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;c.jmp((function(){var t=i.get(e);n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var $e=function(e,n,a,i,o){return __awaiter(r,void 0,void 0,(function(){var e,r,i,l,s,f,u;return __generator(this,(function($){switch($.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;o=Re(a);if(!o.then)return[3,2];e=g();return[4,o];case 1:o=$.sent();e();$.label=2;case 2:if(!o.isProxied){{a.$watchers$=o.watchers}ue(o,a,2);o.isProxied=true}r=m("createInstance",a.$tagName$);{n.$flags$|=8}try{new o(n)}catch(c){Se(c)}{n.$flags$&=~8}{n.$flags$|=128}r();ce(n.$lazyInstance$);if(!o.style)return[3,5];i=o.style;l=_(a);if(!!xe.has(l))return[3,5];s=m("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-7f0a8d9c.system.js").then((function(e){return e.scopeCss(i,l,false)}))];case 3:i=$.sent();$.label=4;case 4:w(l,i,!!(a.$flags$&1));s();$.label=5;case 5:f=n.$ancestorComponent$;u=function(){return X(n,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var ce=function(e){{ae(e,"connectedCallback")}};var ve=function(e){if((c.$flags$&1)===0){var t=ge(e);var r=t.$cmpMeta$;var n=m("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){K(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{Pe((function(){return $e(e,t,r)}))}}else{ce(t.$lazyInstance$)}n()}};var he=function(e){if((c.$flags$&1)===0){var t=ge(e);var r=t.$lazyInstance$;if(c.$cssShim$){c.$cssShim$.removeHost(e)}{ae(r,"disconnectedCallback")}}};var de=e("b",(function(e,t){if(t===void 0){t={}}var r=m();var n=[];var a=t.exclude||[];var i=f.customElements;var o=$.head;var l=o.querySelector("meta[charset]");var s=$.createElement("style");var u=[];var h;var d=true;Object.assign(c,t);c.$resourcesUrl$=new URL(t.resourcesUrl||"./",$.baseURI).href;{if(t.syncQueue){c.$flags$|=4}}e.map((function(e){return e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$attrsToReflect$=[]}{r.$watchers$={}}if(!v&&r.$flags$&1){r.$flags$|=8}var o=r.$tagName$;var l=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;we(t,r);if(r.$flags$&1){if(v){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return n}t.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(d){u.push(this)}else{c.jmp((function(){return ve(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;c.jmp((function(){return he(e)}))};t.prototype.forceUpdate=function(){re(this)};t.prototype.componentOnReady=function(){return ge(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(o)&&!i.get(o)){n.push(o);i.define(o,ue(l,r,1))}}))}));{s.innerHTML=n+p;s.setAttribute("data-styles","");o.insertBefore(s,l?l.nextSibling:o.firstChild)}d=false;if(u.length){u.map((function(e){return e.connectedCallback()}))}else{{c.jmp((function(){return h=setTimeout(ne,30)}))}}r()}));var pe=e("g",(function(e){var t=new URL(e,c.$resourcesUrl$);return t.origin!==f.location.origin?t.href:t.pathname}));var me=new WeakMap;var ge=function(e){return me.get(e)};var ye=e("r",(function(e,t){return me.set(t.$lazyInstance$=e,t)}));var we=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return me.set(e,r)};var be=function(e,t){return t in e};var Se=function(e){return console.error(e)};var _e=new Map;var Re=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var o=_e.get(i);if(o){return o[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{_e.set(i,e)}return e[a]}),Se)};var xe=new Map;var Ce=[];var Ne=[];var Ee=[];var Me=function(e,t){return function(r){e.push(r);if(!s){s=true;if(t&&c.$flags$&4){Pe(Ae)}else{c.raf(Ae)}}}};var je=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(r){Se(r)}}e.length=0};var ke=function(e,t){var r=0;var n=0;while(r<e.length&&(n=performance.now())<t){try{e[r++](n)}catch(a){Se(a)}}if(r===e.length){e.length=0}else if(r!==0){e.splice(0,r)}};var Ae=function(){{l++}je(Ce);{var e=(c.$flags$&6)===2?performance.now()+14*Math.ceil(l*(1/10)):Infinity;ke(Ne,e);ke(Ee,e);if(Ne.length>0){Ee.push.apply(Ee,Ne);Ne.length=0}if(s=Ce.length+Ne.length+Ee.length>0){c.raf(Ae)}else{l=0}}};var Pe=function(e){return h().then(e)};var Te=Me(Ne,true)}}}));