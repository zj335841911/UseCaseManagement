const e="ionicons";let n,t,l=0,o=!1;const s="undefined"!=typeof window?window:{},c=s.CSS,r=s.document||{head:{}},i={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,n,t,l)=>e.addEventListener(n,t,l),rel:(e,n,t,l)=>e.removeEventListener(n,t,l),ce:(e,n)=>new CustomEvent(e,n)},a=(()=>(r.head.attachShadow+"").indexOf("[native")>-1)(),u=e=>Promise.resolve(e),f=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),d=new WeakMap,p=e=>"sc-"+e.o,y={},$=e=>"object"==(e=typeof e)||"function"===e,h="undefined"!=typeof Deno,m=!(h||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),b=(h&&Deno,m?process:h&&Deno,m?process:h&&Deno,(e,n,...t)=>{let l=null,o=!1,s=!1,c=[];const r=n=>{for(let t=0;t<n.length;t++)l=n[t],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!$(l))&&(l+=""),o&&s?c[c.length-1].s+=l:c.push(o?w(null,l):l),s=o)};if(r(t),n){const e=n.className||n.class;e&&(n.class="object"!=typeof e?e:Object.keys(e).filter(n=>e[n]).join(" "))}const i=w(e,null);return i.i=n,c.length>0&&(i.u=c),i}),w=(e,n)=>({t:0,p:e,s:n,$:null,u:null,i:null}),g={},_=(e,n,t,l,o,s)=>{if(t!==l){let r=K(e,n);if(n.toLowerCase(),"class"===n){const n=e.classList,o=v(t),s=v(l);n.remove(...o.filter(e=>e&&!s.includes(e))),n.add(...s.filter(e=>e&&!o.includes(e)))}else{const i=$(l);if((r||i&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[n]=l;else{let o=null==l?"":l;"list"===n?r=!1:null!=t&&e[n]==o||(e[n]=o)}}catch(c){}null==l||!1===l?!1===l&&""!==e.getAttribute(n)||e.removeAttribute(n):(!r||4&s||o)&&!i&&e.setAttribute(n,l=!0===l?"":l)}}},j=/\s/,v=e=>e?e.split(j):[],M=(e,n,t,l)=>{const o=11===n.$.nodeType&&n.$.host?n.$.host:n.$,s=e&&e.i||y,c=n.i||y;for(l in s)l in c||_(o,l,s[l],void 0,t,n.t);for(l in c)_(o,l,s[l],c[l],t,n.t)},S=(e,t,l)=>{let o,s,c=t.u[l],i=0;if(null!==c.s)o=c.$=r.createTextNode(c.s);else if(o=c.$=r.createElement(c.p),M(null,c,!1),null!=n&&o["s-si"]!==n&&o.classList.add(o["s-si"]=n),c.u)for(i=0;i<c.u.length;++i)s=S(e,c,i),s&&o.appendChild(s);return o},k=(e,n,l,o,s,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);s<=c;++s)o[s]&&(r=S(null,l,s),r&&(o[s].$=r,i.insertBefore(r,n)))},C=(e,n,t,l)=>{for(;n<=t;++n)(l=e[n])&&l.$.remove()},O=(e,n)=>e.p===n.p,D=(e,n)=>{const t=n.$=e.$,l=e.u,o=n.u,s=n.s;null===s?(M(e,n,!1),null!==l&&null!==o?((e,n,t,l)=>{let o,s=0,c=0,r=n.length-1,i=n[0],a=n[r],u=l.length-1,f=l[0],d=l[u];for(;s<=r&&c<=u;)null==i?i=n[++s]:null==a?a=n[--r]:null==f?f=l[++c]:null==d?d=l[--u]:O(i,f)?(D(i,f),i=n[++s],f=l[++c]):O(a,d)?(D(a,d),a=n[--r],d=l[--u]):O(i,d)?(D(i,d),e.insertBefore(i.$,a.$.nextSibling),i=n[++s],d=l[--u]):O(a,f)?(D(a,f),e.insertBefore(a.$,i.$),a=n[--r],f=l[++c]):(o=S(n&&n[c],t,c),f=l[++c],o&&i.$.parentNode.insertBefore(o,i.$));s>r?k(e,null==l[u+1]?null:l[u+1].$,t,l,c,u):c>u&&C(n,s,r)})(t,l,n,o):null!==o?(null!==e.s&&(t.textContent=""),k(t,null,n,o,0,o.length-1)):null!==l&&C(l,0,l.length-1)):e.s!==s&&(t.data=s)},P=e=>G(e).h,R=(e,n)=>{n&&!e.m&&n["s-p"]&&n["s-p"].push(new Promise(n=>e.m=n))},U=(e,n)=>{if(e.t|=16,!(4&e.t))return R(e,e.g),re(()=>x(e,n));e.t|=512},x=(e,n)=>{const t=e._;return H(void 0,()=>E(e,t,n))},E=(e,l,o)=>{const s=e.h,c=s["s-rc"];o&&(e=>{const n=e.j,t=e.h,l=n.t,o=((e,n)=>{let t=p(n),l=Z.get(t);if(e=11===e.nodeType?e:r,l)if("string"==typeof l){let n,o=d.get(e=e.head||e);o||d.set(e,o=new Set),o.has(t)||(n=r.createElement("style"),n.innerHTML=l,e.insertBefore(n,e.querySelector("link")),o&&o.add(t))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return t})(a&&t.shadowRoot?t.shadowRoot:t.getRootNode(),n);10&l&&(t["s-sc"]=o,t.classList.add(o+"-h"))})(e);((e,l)=>{const o=e.h,s=e.j,c=e.v||w(null,null),r=(e=>e&&e.p===g)(l)?l:b(null,null,l);t=o.tagName,s.M&&(r.i=r.i||{},s.M.map(([e,n])=>r.i[n]=o[e])),r.p=null,r.t|=4,e.v=r,r.$=c.$=o.shadowRoot||o,n=o["s-sc"],D(c,r)})(e,L(e,l)),c&&(c.map(e=>e()),s["s-rc"]=void 0);{const n=s["s-p"],t=()=>T(e);0===n.length?t():(Promise.all(n).then(t),e.t|=4,n.length=0)}},L=(e,n)=>{try{n=n.render(),e.t&=-17,e.t|=2}catch(t){Q(t)}return n},T=e=>{const n=e.h,t=e.g;64&e.t||(e.t|=64,N(n),e.S(n),t||q()),e.m&&(e.m(),e.m=void 0),512&e.t&&ce(()=>U(e,!1)),e.t&=-517},q=()=>{N(r.documentElement),i.t|=2,ce(()=>(e=>{const n=i.ce("appload",{detail:{namespace:"ionicons"}});return e.dispatchEvent(n),n})(s))},A=(e,n,t)=>{if(e&&e[n])try{return e[n](t)}catch(l){Q(l)}},H=(e,n)=>e&&e.then?e.then(n):n(),N=e=>e.classList.add("hydrated"),W=(e,n,t)=>{if(n.k){e.watchers&&(n.C=e.watchers);const l=Object.entries(n.k),o=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&t&&32&l)&&Object.defineProperty(o,e,{get(){return((e,n)=>G(this).O.get(n))(0,e)},set(t){((e,n,t,l)=>{const o=G(e),s=o.O.get(n),c=o.t,r=o._;if(t=((e,n)=>null==e||$(e)?e:4&n?"false"!==e&&(""===e||!!e):1&n?e+"":e)(t,l.k[n][0]),!(8&c&&void 0!==s||t===s)&&(o.O.set(n,t),r)){if(l.C&&128&c){const e=l.C[n];e&&e.map(e=>{try{r[e](t,s,n)}catch(l){Q(l)}})}2==(18&c)&&U(o,!1)}})(this,e,t,n)},configurable:!0,enumerable:!0})}),1&t){const t=new Map;o.attributeChangedCallback=function(e,n,l){i.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,n])=>15&n[0]).map(([e,l])=>{const o=l[1]||e;return t.set(o,e),512&l[0]&&n.M.push([e,o]),o})}}return e},F=e=>{A(e,"connectedCallback")},V=(e,n={})=>{const t=[],l=n.exclude||[],o=s.customElements,c=r.head,u=c.querySelector("meta[charset]"),d=r.createElement("style"),y=[];let $,h=!0;Object.assign(i,n),i.l=new URL(n.resourcesUrl||"./",r.baseURI).href,n.syncQueue&&(i.t|=4),e.map(e=>e[1].map(n=>{const s={t:n[0],o:n[1],k:n[2],D:n[3]};s.k=n[2],s.M=[],s.C={},!a&&1&s.t&&(s.t|=8);const c=s.o,r=class extends HTMLElement{constructor(e){super(e),J(e=this,s),1&s.t&&(a?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){$&&(clearTimeout($),$=null),h?y.push(this):i.jmp(()=>(e=>{if(0==(1&i.t)){const n=G(e),t=n.j,l=()=>{};if(1&n.t)F(n._);else{n.t|=1;{let t=e;for(;t=t.parentNode||t.host;)if(t["s-p"]){R(n,n.g=t);break}}t.k&&Object.entries(t.k).map(([n,[t]])=>{if(31&t&&e.hasOwnProperty(n)){const t=e[n];delete e[n],e[n]=t}}),ce(()=>(async(e,n,t,l,o)=>{if(0==(32&n.t)){{if(n.t|=32,(o=Y(t)).then){const e=()=>{};o=await o,e()}o.isProxied||(t.C=o.watchers,W(o,t,2),o.isProxied=!0);const e=()=>{};n.t|=8;try{new o(n)}catch(r){Q(r)}n.t&=-9,n.t|=128,e(),F(n._)}if(o.style){let e=o.style;const n=p(t);if(!Z.has(n)){const l=()=>{};8&t.t&&(e=await __sc_import_ionicons("./p-ebb4d602.js").then(t=>t.scopeCss(e,n,!1))),((e,n,t)=>{let l=Z.get(e);f&&t?(l=l||new CSSStyleSheet,l.replace(n)):l=n,Z.set(e,l)})(n,e,!!(1&t.t)),l()}}}const s=n.g,c=()=>U(n,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,n,t))}l()}})(this))}disconnectedCallback(){i.jmp(()=>(()=>{0==(1&i.t)&&A(G(this)._,"disconnectedCallback")})())}forceUpdate(){(()=>{{const e=G(this);e.h.isConnected&&2==(18&e.t)&&U(e,!1)}})()}componentOnReady(){return G(this).P}};s.R=e[0],l.includes(c)||o.get(c)||(t.push(c),o.define(c,W(r,s,1)))})),d.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),c.insertBefore(d,u?u.nextSibling:c.firstChild),h=!1,y.length?y.map(e=>e.connectedCallback()):i.jmp(()=>$=setTimeout(q,30))},z=e=>{const n=new URL(e,i.l);return n.origin!==s.location.origin?n.href:n.pathname},B=new WeakMap,G=e=>B.get(e),I=(e,n)=>B.set(n._=e,n),J=(e,n)=>{const t={t:0,h:e,j:n,O:new Map};return t.P=new Promise(e=>t.S=e),e["s-p"]=[],e["s-rc"]=[],B.set(e,t)},K=(e,n)=>n in e,Q=e=>console.error(e),X=new Map,Y=e=>{const n=e.o.replace(/-/g,"_"),t=e.R,l=X.get(t);return l?l[n]:__sc_import_ionicons(`./${t}.entry.js`).then(e=>(X.set(t,e),e[n]),Q)},Z=new Map,ee=[],ne=[],te=[],le=(e,n)=>t=>{e.push(t),o||(o=!0,n&&4&i.t?ce(se):i.raf(se))},oe=(e,n)=>{let t=0,l=0;for(;t<e.length&&(l=performance.now())<n;)try{e[t++](l)}catch(o){Q(o)}t===e.length?e.length=0:0!==t&&e.splice(0,t)},se=()=>{l++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){Q(n)}e.length=0})(ee);{const e=2==(6&i.t)?performance.now()+14*Math.ceil(.1*l):1/0;oe(ne,e),oe(te,e),ne.length>0&&(te.push(...ne),ne.length=0),(o=ee.length+ne.length+te.length>0)?i.raf(se):l=0}},ce=e=>u().then(e),re=le(ne,!0);export{c as C,g as H,e as N,u as a,V as b,P as c,r as d,z as g,b as h,i as p,I as r,s as w}