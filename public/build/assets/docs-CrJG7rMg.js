function G(y){return y&&y.__esModule&&Object.prototype.hasOwnProperty.call(y,"default")?y.default:y}var k={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */var K=k.exports,R;function Q(){return R||(R=1,function(y,E){(function(h,b){y.exports=b()})(K,function(){return function(){var w={686:function(s,i,t){t.d(i,{default:function(){return X}});var c=t(279),u=t.n(c),f=t(370),g=t.n(f),v=t(817),S=t.n(v);function d(a){try{return document.execCommand(a)}catch{return!1}}var m=function(n){var e=S()(n);return d("cut"),e},p=m;function C(a){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(r,"px"),e.setAttribute("readonly",""),e.value=a,e}var N=function(n,e){var r=C(n);e.container.appendChild(r);var o=S()(r);return d("copy"),r.remove(),o},q=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},r="";return typeof n=="string"?r=N(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?r=N(n.value,e):(r=S()(n),d("copy")),r},O=q;function x(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(e){return typeof e}:x=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(a)}var z=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,r=e===void 0?"copy":e,o=n.container,l=n.target,T=n.text;if(r!=="copy"&&r!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(l!==void 0)if(l&&x(l)==="object"&&l.nodeType===1){if(r==="copy"&&l.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(r==="cut"&&(l.hasAttribute("readonly")||l.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(T)return O(T,{container:o});if(l)return r==="cut"?p(l):O(l,{container:o})},B=z;function _(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?_=function(e){return typeof e}:_=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(a)}function I(a,n){if(!(a instanceof n))throw new TypeError("Cannot call a class as a function")}function P(a,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(a,r.key,r)}}function $(a,n,e){return n&&P(a.prototype,n),e&&P(a,e),a}function F(a,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(n&&n.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),n&&M(a,n)}function M(a,n){return M=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},M(a,n)}function U(a){var n=J();return function(){var r=A(a),o;if(n){var l=A(this).constructor;o=Reflect.construct(r,arguments,l)}else o=r.apply(this,arguments);return V(this,o)}}function V(a,n){return n&&(_(n)==="object"||typeof n=="function")?n:Y(a)}function Y(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function J(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function A(a){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(a)}function D(a,n){var e="data-clipboard-".concat(a);if(n.hasAttribute(e))return n.getAttribute(e)}var W=function(a){F(e,a);var n=U(e);function e(r,o){var l;return I(this,e),l=n.call(this),l.resolveOptions(o),l.listenClick(r),l}return $(e,[{key:"resolveOptions",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof o.action=="function"?o.action:this.defaultAction,this.target=typeof o.target=="function"?o.target:this.defaultTarget,this.text=typeof o.text=="function"?o.text:this.defaultText,this.container=_(o.container)==="object"?o.container:document.body}},{key:"listenClick",value:function(o){var l=this;this.listener=g()(o,"click",function(T){return l.onClick(T)})}},{key:"onClick",value:function(o){var l=o.delegateTarget||o.currentTarget,T=this.action(l)||"copy",L=B({action:T,container:this.container,target:this.target(l),text:this.text(l)});this.emit(L?"success":"error",{action:T,text:L,trigger:l,clearSelection:function(){l&&l.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(o){return D("action",o)}},{key:"defaultTarget",value:function(o){var l=D("target",o);if(l)return document.querySelector(l)}},{key:"defaultText",value:function(o){return D("text",o)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(o){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return O(o,l)}},{key:"cut",value:function(o){return p(o)}},{key:"isSupported",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],l=typeof o=="string"?[o]:o,T=!!document.queryCommandSupported;return l.forEach(function(L){T=T&&!!document.queryCommandSupported(L)}),T}}]),e}(u()),X=W},828:function(s){var i=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function c(u,f){for(;u&&u.nodeType!==i;){if(typeof u.matches=="function"&&u.matches(f))return u;u=u.parentNode}}s.exports=c},438:function(s,i,t){var c=t(828);function u(v,S,d,m,p){var C=g.apply(this,arguments);return v.addEventListener(d,C,p),{destroy:function(){v.removeEventListener(d,C,p)}}}function f(v,S,d,m,p){return typeof v.addEventListener=="function"?u.apply(null,arguments):typeof d=="function"?u.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(C){return u(C,S,d,m,p)}))}function g(v,S,d,m){return function(p){p.delegateTarget=c(p.target,S),p.delegateTarget&&m.call(v,p)}}s.exports=f},879:function(s,i){i.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},i.nodeList=function(t){var c=Object.prototype.toString.call(t);return t!==void 0&&(c==="[object NodeList]"||c==="[object HTMLCollection]")&&"length"in t&&(t.length===0||i.node(t[0]))},i.string=function(t){return typeof t=="string"||t instanceof String},i.fn=function(t){var c=Object.prototype.toString.call(t);return c==="[object Function]"}},370:function(s,i,t){var c=t(879),u=t(438);function f(d,m,p){if(!d&&!m&&!p)throw new Error("Missing required arguments");if(!c.string(m))throw new TypeError("Second argument must be a String");if(!c.fn(p))throw new TypeError("Third argument must be a Function");if(c.node(d))return g(d,m,p);if(c.nodeList(d))return v(d,m,p);if(c.string(d))return S(d,m,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function g(d,m,p){return d.addEventListener(m,p),{destroy:function(){d.removeEventListener(m,p)}}}function v(d,m,p){return Array.prototype.forEach.call(d,function(C){C.addEventListener(m,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(C){C.removeEventListener(m,p)})}}}function S(d,m,p){return u(document.body,d,m,p)}s.exports=f},817:function(s){function i(t){var c;if(t.nodeName==="SELECT")t.focus(),c=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var u=t.hasAttribute("readonly");u||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),u||t.removeAttribute("readonly"),c=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var f=window.getSelection(),g=document.createRange();g.selectNodeContents(t),f.removeAllRanges(),f.addRange(g),c=f.toString()}return c}s.exports=i},279:function(s){function i(){}i.prototype={on:function(t,c,u){var f=this.e||(this.e={});return(f[t]||(f[t]=[])).push({fn:c,ctx:u}),this},once:function(t,c,u){var f=this;function g(){f.off(t,g),c.apply(u,arguments)}return g._=c,this.on(t,g,u)},emit:function(t){var c=[].slice.call(arguments,1),u=((this.e||(this.e={}))[t]||[]).slice(),f=0,g=u.length;for(f;f<g;f++)u[f].fn.apply(u[f].ctx,c);return this},off:function(t,c){var u=this.e||(this.e={}),f=u[t],g=[];if(f&&c)for(var v=0,S=f.length;v<S;v++)f[v].fn!==c&&f[v].fn._!==c&&g.push(f[v]);return g.length?u[t]=g:delete u[t],this}},s.exports=i,s.exports.TinyEmitter=i}},h={};function b(s){if(h[s])return h[s].exports;var i=h[s]={exports:{}};return w[s](i,i.exports,b),i.exports}return function(){b.n=function(s){var i=s&&s.__esModule?function(){return s.default}:function(){return s};return b.d(i,{a:i}),i}}(),function(){b.d=function(s,i){for(var t in i)b.o(i,t)&&!b.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:i[t]})}}(),function(){b.o=function(s,i){return Object.prototype.hasOwnProperty.call(s,i)}}(),b(686)}().default})}(k)),k.exports}var Z=Q();const tt=G(Z),H='<svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path></svg>',et='<svg fill="currentColor" class="fill-current text-white h-5 w-5" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>';let nt=document.querySelectorAll("#main-content pre");nt.forEach((y,E)=>{var w=document.createElement("div");["relative","code-block-wrapper"].forEach(i=>{w.classList.add(i)}),y.parentNode.insertBefore(w,y),w.appendChild(y);let h=document.createElement("button");h.innerHTML=H,h.id=`clipButton-${E}`,["md:block","hidden"].forEach(i=>{h.classList.add(i)}),h.setAttribute("aria-label","Copy to Clipboard"),h.setAttribute("title","Copy to Clipboard"),h.classList.add("copyBtn"),w.appendChild(h),new tt(`#${h.id}`).on("success",i=>{h.innerHTML=et,i.clearSelection(),setTimeout(()=>{h.innerHTML=H},1500)});let s=y.querySelector("code");s.id=`clipText-${E}`,h.dataset.clipboardTarget=`#${s.id}`});window.toDarkMode=()=>{localStorage.theme="dark",window.updateTheme()};window.toLightMode=()=>{localStorage.theme="light",window.updateTheme()};window.toSystemMode=()=>{localStorage.theme="system",window.updateTheme()};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",y=>{localStorage.theme==="system"&&(y.matches?(document.documentElement.classList.add("dark"),document.documentElement.setAttribute("data-theme","dark")):(document.documentElement.classList.remove("dark"),document.documentElement.setAttribute("data-theme","light"))),updateThemeAndSchemeColor()});document.addEventListener("DOMContentLoaded",()=>{rt(),ot();const y=document.querySelector("#skip-to-content-link"),E=document.querySelector("#main-content");y.addEventListener("click",w=>{w.preventDefault(),E.setAttribute("tabindex",-1),E.focus()}),E.addEventListener("blur",()=>{E.removeAttribute("tabindex")})});function rt(){[...document.querySelectorAll(".docs_sidebar h2")].forEach(y=>{y.addEventListener("click",E=>{E.preventDefault();const w=y.parentNode.classList.contains("sub--on");[...document.querySelectorAll(".docs_sidebar ul li")].forEach(h=>h.classList.remove("sub--on")),w||y.parentNode.classList.add("sub--on")})})}function ot(){function y(h){const b=new Date().valueOf();Array.from(h.rows).forEach((s,i)=>{if(i>0){const t=s.cells,c=t[0],u=j(t[t.length-2]),f=j(t[t.length-1]);b>f?c.classList.add("bg-red-500","support-policy-highlight"):b<=f&&b>u&&c.classList.add("bg-orange-600","support-policy-highlight")}})}const E=document.querySelector(".docs_main #support-policy ~ div table:first-of-type");if(E){y(E);return}const w=document.querySelector(".docs_main #support-policy ~ table:first-of-type");w&&y(w)}function j(y){return Date.parse(y.innerHTML.replace(/(\d+)(st|nd|rd|th)/,"$1"))}