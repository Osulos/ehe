import{a,b as x,c as s,d as h,f as E,j as R}from"./chunk-7V7WNOD5.js";var T=E(R(),1),G=(0,T.proxyTexts)({},"",{Db:{Administration:{Language:{},Role:{},RolePermission:{},Translation:{},User:{},UserPermission:{},UserRole:{}},DosyaUrunler:{UrunCesitleri:{},UrunEkleme:{},Urunler:{}}},Forms:{Membership:{Login:{},SendActivation:{},SignUp:{}}},Site:{AccessDenied:{},Layout:{},RolePermissionDialog:{},UserDialog:{},UserPermissionDialog:{},ValidationError:{}},Validation:{}});var y=Object.keys;function I(t){return typeof t=="boolean"}s(I,"isBoolean");function L(t){return t&&typeof t.nodeType=="number"}s(L,"isElement");function S(t){return typeof t=="string"}s(S,"isString");function D(t){return typeof t=="number"}s(D,"isNumber");function i(t){return typeof t=="object"?t!==null:p(t)}s(i,"isObject");function p(t){return typeof t=="function"}s(p,"isFunction");function N(t){return!!(t&&t.isComponent)}s(N,"isComponentClass");function j(t){return i(t)&&typeof t.length=="number"&&typeof t.nodeType!="number"}s(j,"isArrayLike");function d(t,e){if(t)for(let n of y(t))e(t[n],n)}s(d,"forEach");function M(t){return i(t)&&"current"in t}s(M,"isRef");var F=Symbol.for("jsx-dom:type"),A=function(t){return t.ShadowRoot="ShadowRoot",t}(A||{});function B(t){return t!=null&&t[F]===A.ShadowRoot}s(B,"isShadowRoot");function P(t){return!I(t)&&t!=null}s(P,"isVisibleChild");function U(t){return Array.isArray(t)?t.map(U).filter(Boolean).join(" "):i(t)?Symbol.iterator in t?U(Array.from(t)):y(t).filter(e=>t[e]).join(" "):P(t)?""+t:""}s(U,"className");function H(t){let e=document.createDocumentFragment();return l(t.children,e),e}s(H,"Fragment");function O(t,e,n){e=x(a({},e),{children:n});let r=new t(e),o=r.render();return"ref"in e&&C(e.ref,r),o}s(O,"initComponentClass");function w(t,e){let c=e,{children:n}=c,r=h(c,["children"]),o;if(S(t)){if(o=r.namespaceURI?document.createElementNS(r.namespaceURI,t):document.createElement(t),V(r,o),l(n,o),o instanceof window.HTMLSelectElement&&r.value!=null)if(r.multiple===!0&&Array.isArray(r.value)){let m=r.value.map(u=>String(u));o.querySelectorAll("option").forEach(u=>u.selected=m.includes(u.value))}else o.value=r.value;C(r.ref,o)}else if(p(t))i(t.defaultProps)&&(r=a(a({},t.defaultProps),r)),o=N(t)?O(t,r,n):t(x(a({},r),{children:n}));else throw new TypeError(`Invalid JSX element type: ${t}`);return o}s(w,"jsx");function C(t,e){M(t)?t.current=e:p(t)&&t(e)}s(C,"attachRef");function l(t,e){if(j(t))K(t,e);else if(S(t)||D(t))f(document.createTextNode(t),e);else if(t===null)f(document.createComment(""),e);else if(L(t))f(t,e);else if(B(t)){let n=e.attachShadow(t.attr);l(t.children,n),C(t.ref,n)}}s(l,"appendChild");function K(t,e){for(let n of[...t])l(n,e);return e}s(K,"appendChildren");function f(t,e){e instanceof window.HTMLTemplateElement?e.content.appendChild(t):e.appendChild(t)}s(f,"appendChildToNode");function b(t,e){e==null||e===!1||(Array.isArray(e)?e.forEach(n=>b(t,n)):S(e)?t.setAttribute("style",e):i(e)&&d(e,(n,r)=>{r.indexOf("-")===0?t.style.setProperty(r,n):t.style[r]=n}))}s(b,"style");function k(t,e,n){switch(t){case"htmlFor":g(n,"for",e);return;case"dataset":d(e,(r,o)=>{r!=null&&(n.dataset[o]=r)});return;case"innerHTML":case"innerText":case"textContent":P(e)&&(n[t]=e);return;case"dangerouslySetInnerHTML":i(e)&&(n.innerHTML=e.__html);return;case"value":if(e==null||n instanceof window.HTMLSelectElement)return;if(n instanceof window.HTMLTextAreaElement){n.value=e;return}break;case"spellCheck":n.spellcheck=e;return;case"class":case"className":p(e)?e(n):g(n,"class",U(e));return;case"ref":case"namespaceURI":return;case"style":b(n,e);return;case"on":case"onCapture":d(e,(r,o)=>{n.addEventListener(o,r,t==="onCapture")});return}if(p(e)){if(t[0]==="o"&&t[1]==="n"){let r=t.toLowerCase(),o=r.endsWith("capture");if(r==="ondoubleclick"?r="ondblclick":o&&r==="ondoubleclickcapture"&&(r="ondblclickcapture"),!o&&n[r]===null)n[r]=e;else if(o)n.addEventListener(r.substring(2,r.length-7),e,!0);else{let c;r in window?c=r.substring(2):c=r[2]+t.slice(3),n.addEventListener(c,e)}}}else i(e)?n[t]=e:e===!0?g(n,t,""):e!==!1&&e!=null&&g(n,t,e)}s(k,"attribute");function g(t,e,n){t.setAttribute(e,n)}s(g,"attr");function V(t,e){for(let n of y(t))k(n,t[n],e);return e}s(V,"attributes");export{G as a,H as b,w as c};
//# sourceMappingURL=chunk-CMRQV4IR.js.map