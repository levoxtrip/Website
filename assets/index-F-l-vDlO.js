(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var eh={exports:{}},Bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function Ux(){if(g_)return Bo;g_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Bo.Fragment=t,Bo.jsx=i,Bo.jsxs=i,Bo}var __;function Lx(){return __||(__=1,eh.exports=Ux()),eh.exports}var vt=Lx(),nh={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function Nx(){if(v_)return ce;v_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function x(L,at,Tt){this.props=L,this.context=at,this.refs=b,this.updater=Tt||S}x.prototype.isReactComponent={},x.prototype.setState=function(L,at){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,at,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=x.prototype;function N(L,at,Tt){this.props=L,this.context=at,this.refs=b,this.updater=Tt||S}var D=N.prototype=new _;D.constructor=N,E(D,x.prototype),D.isPureReactComponent=!0;var U=Array.isArray,z={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function B(L,at,Tt,wt,q,mt){return Tt=mt.ref,{$$typeof:s,type:L,key:at,ref:Tt!==void 0?Tt:null,props:mt}}function j(L,at){return B(L.type,at,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function A(L){var at={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Tt){return at[Tt]})}var H=/\/+/g;function st(L,at){return typeof L=="object"&&L!==null&&L.key!=null?A(""+L.key):at.toString(36)}function Q(){}function ut(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(Q,Q):(L.status="pending",L.then(function(at){L.status==="pending"&&(L.status="fulfilled",L.value=at)},function(at){L.status==="pending"&&(L.status="rejected",L.reason=at)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ht(L,at,Tt,wt,q){var mt=typeof L;(mt==="undefined"||mt==="boolean")&&(L=null);var Mt=!1;if(L===null)Mt=!0;else switch(mt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(L.$$typeof){case s:case t:Mt=!0;break;case g:return Mt=L._init,ht(Mt(L._payload),at,Tt,wt,q)}}if(Mt)return q=q(L),Mt=wt===""?"."+st(L,0):wt,U(q)?(Tt="",Mt!=null&&(Tt=Mt.replace(H,"$&/")+"/"),ht(q,at,Tt,"",function(Jt){return Jt})):q!=null&&(C(q)&&(q=j(q,Tt+(q.key==null||L&&L.key===q.key?"":(""+q.key).replace(H,"$&/")+"/")+Mt)),at.push(q)),1;Mt=0;var At=wt===""?".":wt+":";if(U(L))for(var Ct=0;Ct<L.length;Ct++)wt=L[Ct],mt=At+st(wt,Ct),Mt+=ht(wt,at,Tt,mt,q);else if(Ct=y(L),typeof Ct=="function")for(L=Ct.call(L),Ct=0;!(wt=L.next()).done;)wt=wt.value,mt=At+st(wt,Ct++),Mt+=ht(wt,at,Tt,mt,q);else if(mt==="object"){if(typeof L.then=="function")return ht(ut(L),at,Tt,wt,q);throw at=String(L),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function k(L,at,Tt){if(L==null)return L;var wt=[],q=0;return ht(L,wt,"","",function(mt){return at.call(Tt,mt,q++)}),wt}function rt(L){if(L._status===-1){var at=L._result;at=at(),at.then(function(Tt){(L._status===0||L._status===-1)&&(L._status=1,L._result=Tt)},function(Tt){(L._status===0||L._status===-1)&&(L._status=2,L._result=Tt)}),L._status===-1&&(L._status=0,L._result=at)}if(L._status===1)return L._result.default;throw L._result}var Y=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function xt(){}return ce.Children={map:k,forEach:function(L,at,Tt){k(L,function(){at.apply(this,arguments)},Tt)},count:function(L){var at=0;return k(L,function(){at++}),at},toArray:function(L){return k(L,function(at){return at})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},ce.Component=x,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=N,ce.StrictMode=r,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ce.act=function(){throw Error("act(...) is not supported in production builds of React.")},ce.cache=function(L){return function(){return L.apply(null,arguments)}},ce.cloneElement=function(L,at,Tt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var wt=E({},L.props),q=L.key,mt=void 0;if(at!=null)for(Mt in at.ref!==void 0&&(mt=void 0),at.key!==void 0&&(q=""+at.key),at)!I.call(at,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&at.ref===void 0||(wt[Mt]=at[Mt]);var Mt=arguments.length-2;if(Mt===1)wt.children=Tt;else if(1<Mt){for(var At=Array(Mt),Ct=0;Ct<Mt;Ct++)At[Ct]=arguments[Ct+2];wt.children=At}return B(L.type,q,void 0,void 0,mt,wt)},ce.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},ce.createElement=function(L,at,Tt){var wt,q={},mt=null;if(at!=null)for(wt in at.key!==void 0&&(mt=""+at.key),at)I.call(at,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(q[wt]=at[wt]);var Mt=arguments.length-2;if(Mt===1)q.children=Tt;else if(1<Mt){for(var At=Array(Mt),Ct=0;Ct<Mt;Ct++)At[Ct]=arguments[Ct+2];q.children=At}if(L&&L.defaultProps)for(wt in Mt=L.defaultProps,Mt)q[wt]===void 0&&(q[wt]=Mt[wt]);return B(L,mt,void 0,void 0,null,q)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(L){return{$$typeof:d,render:L}},ce.isValidElement=C,ce.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:rt}},ce.memo=function(L,at){return{$$typeof:p,type:L,compare:at===void 0?null:at}},ce.startTransition=function(L){var at=z.T,Tt={};z.T=Tt;try{var wt=L(),q=z.S;q!==null&&q(Tt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(xt,Y)}catch(mt){Y(mt)}finally{z.T=at}},ce.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ce.use=function(L){return z.H.use(L)},ce.useActionState=function(L,at,Tt){return z.H.useActionState(L,at,Tt)},ce.useCallback=function(L,at){return z.H.useCallback(L,at)},ce.useContext=function(L){return z.H.useContext(L)},ce.useDebugValue=function(){},ce.useDeferredValue=function(L,at){return z.H.useDeferredValue(L,at)},ce.useEffect=function(L,at){return z.H.useEffect(L,at)},ce.useId=function(){return z.H.useId()},ce.useImperativeHandle=function(L,at,Tt){return z.H.useImperativeHandle(L,at,Tt)},ce.useInsertionEffect=function(L,at){return z.H.useInsertionEffect(L,at)},ce.useLayoutEffect=function(L,at){return z.H.useLayoutEffect(L,at)},ce.useMemo=function(L,at){return z.H.useMemo(L,at)},ce.useOptimistic=function(L,at){return z.H.useOptimistic(L,at)},ce.useReducer=function(L,at,Tt){return z.H.useReducer(L,at,Tt)},ce.useRef=function(L){return z.H.useRef(L)},ce.useState=function(L){return z.H.useState(L)},ce.useSyncExternalStore=function(L,at,Tt){return z.H.useSyncExternalStore(L,at,Tt)},ce.useTransition=function(){return z.H.useTransition()},ce.version="19.0.0",ce}var y_;function Cd(){return y_||(y_=1,nh.exports=Nx()),nh.exports}var ct=Cd(),ih={exports:{}},Io={},ah={exports:{}},rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function Ox(){return x_||(x_=1,function(s){function t(k,rt){var Y=k.length;k.push(rt);t:for(;0<Y;){var xt=Y-1>>>1,L=k[xt];if(0<l(L,rt))k[xt]=rt,k[Y]=L,Y=xt;else break t}}function i(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var rt=k[0],Y=k.pop();if(Y!==rt){k[0]=Y;t:for(var xt=0,L=k.length,at=L>>>1;xt<at;){var Tt=2*(xt+1)-1,wt=k[Tt],q=Tt+1,mt=k[q];if(0>l(wt,Y))q<L&&0>l(mt,wt)?(k[xt]=mt,k[q]=Y,xt=q):(k[xt]=wt,k[Tt]=Y,xt=Tt);else if(q<L&&0>l(mt,Y))k[xt]=mt,k[q]=Y,xt=q;else break t}}return rt}function l(k,rt){var Y=k.sortIndex-rt.sortIndex;return Y!==0?Y:k.id-rt.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,v=null,y=3,S=!1,E=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(k){for(var rt=i(p);rt!==null;){if(rt.callback===null)r(p);else if(rt.startTime<=k)r(p),rt.sortIndex=rt.expirationTime,t(m,rt);else break;rt=i(p)}}function U(k){if(b=!1,D(k),!E)if(i(m)!==null)E=!0,ut();else{var rt=i(p);rt!==null&&ht(U,rt.startTime-k)}}var z=!1,I=-1,B=5,j=-1;function C(){return!(s.unstable_now()-j<B)}function A(){if(z){var k=s.unstable_now();j=k;var rt=!0;try{t:{E=!1,b&&(b=!1,_(I),I=-1),S=!0;var Y=y;try{e:{for(D(k),v=i(m);v!==null&&!(v.expirationTime>k&&C());){var xt=v.callback;if(typeof xt=="function"){v.callback=null,y=v.priorityLevel;var L=xt(v.expirationTime<=k);if(k=s.unstable_now(),typeof L=="function"){v.callback=L,D(k),rt=!0;break e}v===i(m)&&r(m),D(k)}else r(m);v=i(m)}if(v!==null)rt=!0;else{var at=i(p);at!==null&&ht(U,at.startTime-k),rt=!1}}break t}finally{v=null,y=Y,S=!1}rt=void 0}}finally{rt?H():z=!1}}}var H;if(typeof N=="function")H=function(){N(A)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Q=st.port2;st.port1.onmessage=A,H=function(){Q.postMessage(null)}}else H=function(){x(A,0)};function ut(){z||(z=!0,H())}function ht(k,rt){I=x(function(){k(s.unstable_now())},rt)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ut())},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return i(m)},s.unstable_next=function(k){switch(y){case 1:case 2:case 3:var rt=3;break;default:rt=y}var Y=y;y=rt;try{return k()}finally{y=Y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,rt){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Y=y;y=k;try{return rt()}finally{y=Y}},s.unstable_scheduleCallback=function(k,rt,Y){var xt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?xt+Y:xt):Y=xt,k){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Y+L,k={id:g++,callback:rt,priorityLevel:k,startTime:Y,expirationTime:L,sortIndex:-1},Y>xt?(k.sortIndex=Y,t(p,k),i(m)===null&&k===i(p)&&(b?(_(I),I=-1):b=!0,ht(U,Y-xt))):(k.sortIndex=L,t(m,k),E||S||(E=!0,ut())),k},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(k){var rt=y;return function(){var Y=y;y=rt;try{return k.apply(this,arguments)}finally{y=Y}}}}(rh)),rh}var S_;function Px(){return S_||(S_=1,ah.exports=Ox()),ah.exports}var sh={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function zx(){if(M_)return Tn;M_=1;var s=Cd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Tn.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Tn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Tn.version="19.0.0",Tn}var E_;function Bx(){if(E_)return sh.exports;E_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),sh.exports=zx(),sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function Ix(){if(b_)return Io;b_=1;var s=Px(),t=Cd(),i=Bx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var c=Symbol.for("react.element"),f=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),y=Symbol.for("react.consumer"),S=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),x=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),D=Symbol.for("react.offscreen"),U=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var B=Symbol.for("react.client.reference");function j(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===B?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case d:return"Portal";case g:return"Profiler";case p:return"StrictMode";case b:return"Suspense";case x:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case S:return(e.displayName||"Context")+".Provider";case y:return(e._context.displayName||"Context")+".Consumer";case E:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return n=e.displayName||null,n!==null?n:j(e.type)||"Memo";case N:n=e._payload,e=e._init;try{return j(e(n))}catch{}}return null}var C=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,H,st;function Q(e){if(H===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);H=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+H+e+st}var ut=!1;function ht(e,n){if(!e||ut)return"";ut=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(lt){var it=lt}Reflect.construct(e,[],yt)}else{try{yt.call()}catch(lt){it=lt}e.call(yt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(yt=e())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],R=h[1];if(M&&R){var P=M.split(`
`),V=R.split(`
`);for(u=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;if(o===P.length||u===V.length)for(o=P.length-1,u=V.length-1;1<=o&&0<=u&&P[o]!==V[u];)u--;for(;1<=o&&0<=u;o--,u--)if(P[o]!==V[u]){if(o!==1||u!==1)do if(o--,u--,0>u||P[o]!==V[u]){var ft=`
`+P[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{ut=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Q(a):""}function k(e){switch(e.tag){case 26:case 27:case 5:return Q(e.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 15:return e=ht(e.type,!1),e;case 11:return e=ht(e.type.render,!1),e;case 1:return e=ht(e.type,!0),e;default:return""}}function rt(e){try{var n="";do n+=k(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Y(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function xt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function L(e){if(Y(e)!==e)throw Error(r(188))}function at(e){var n=e.alternate;if(!n){if(n=Y(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return L(u),e;if(h===o)return L(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,R=u.child;R;){if(R===a){M=!0,a=u,o=h;break}if(R===o){M=!0,o=u,a=h;break}R=R.sibling}if(!M){for(R=h.child;R;){if(R===a){M=!0,a=h,o=u;break}if(R===o){M=!0,o=h,a=u;break}R=R.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function Tt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Tt(e),n!==null)return n;e=e.sibling}return null}var wt=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,mt={pending:!1,data:null,method:null,action:null},Mt=[],At=-1;function Ct(e){return{current:e}}function Jt(e){0>At||(e.current=Mt[At],Mt[At]=null,At--)}function Bt(e,n){At++,Mt[At]=e.current,e.current=n}var Ee=Ct(null),De=Ct(null),re=Ct(null),F=Ct(null);function vn(e,n){switch(Bt(re,n),Bt(De,e),Bt(Ee,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?Wg(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=Wg(e),n=qg(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Jt(Ee),Bt(Ee,n)}function le(){Jt(Ee),Jt(De),Jt(re)}function de(e){e.memoizedState!==null&&Bt(F,e);var n=Ee.current,a=qg(n,e.type);n!==a&&(Bt(De,e),Bt(Ee,a))}function Wt(e){De.current===e&&(Jt(Ee),Jt(De)),F.current===e&&(Jt(F),Lo._currentValue=mt)}var Ue=Object.prototype.hasOwnProperty,qt=s.unstable_scheduleCallback,O=s.unstable_cancelCallback,T=s.unstable_shouldYield,nt=s.unstable_requestPaint,dt=s.unstable_now,St=s.unstable_getCurrentPriorityLevel,pt=s.unstable_ImmediatePriority,Vt=s.unstable_UserBlockingPriority,Ut=s.unstable_NormalPriority,It=s.unstable_LowPriority,_e=s.unstable_IdlePriority,bt=s.log,Ft=s.unstable_setDisableYieldValue,Qt=null,kt=null;function Ht(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Qt,e,void 0,(e.current.flags&128)===128)}catch{}}function se(e){if(typeof bt=="function"&&Ft(e),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Qt,e)}catch{}}var Zt=Math.clz32?Math.clz32:Ot,Le=Math.log,X=Math.LN2;function Ot(e){return e>>>=0,e===0?32:31-(Le(e)/X|0)|0}var ot=128,_t=4194304;function Dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lt(e,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,u=e.suspendedLanes,h=e.pingedLanes,M=e.warmLanes;e=e.finishedLanes!==0;var R=a&134217727;return R!==0?(a=R&~u,a!==0?o=Dt(a):(h&=R,h!==0?o=Dt(h):e||(M=R&~M,M!==0&&(o=Dt(M))))):(R=a&~u,R!==0?o=Dt(R):h!==0?o=Dt(h):e||(M=a&~M,M!==0&&(o=Dt(M)))),o===0?0:n!==0&&n!==o&&(n&u)===0&&(u=o&-o,M=n&-n,u>=M||u===32&&(M&4194176)!==0)?n:o}function te(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ve(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function an(){var e=ot;return ot<<=1,(ot&4194176)===0&&(ot=128),e}function be(){var e=_t;return _t<<=1,(_t&62914560)===0&&(_t=4194304),e}function Cn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function il(e,n,a,o,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,P=e.expirationTimes,V=e.hiddenUpdates;for(a=M&~a;0<a;){var ft=31-Zt(a),yt=1<<ft;R[ft]=0,P[ft]=-1;var it=V[ft];if(it!==null)for(V[ft]=null,ft=0;ft<it.length;ft++){var lt=it[ft];lt!==null&&(lt.lane&=-536870913)}a&=~yt}o!==0&&Vs(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function Vs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194218}function Ti(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Ur(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ks(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:u_(e.type))}function al(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Xn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Xn,sn="__reactProps$"+Xn,Bi="__reactContainer$"+Xn,Lr="__reactEvents$"+Xn,Jc="__reactListeners$"+Xn,$c="__reactHandles$"+Xn,rl="__reactResources$"+Xn,Ya="__reactMarker$"+Xn;function Xs(e){delete e[rn],delete e[sn],delete e[Lr],delete e[Jc],delete e[$c]}function Ii(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Bi]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Zg(e);e!==null;){if(a=e[rn])return a;e=Zg(e)}return n}e=a,a=e.parentNode}return null}function w(e){if(e=e[rn]||e[Bi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function W(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function tt(e){var n=e[rl];return n||(n=e[rl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function J(e){e[Ya]=!0}var Z=new Set,Et={};function Rt(e,n){zt(e,n),zt(e+"Capture",n)}function zt(e,n){for(Et[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},jt={};function ve(e){return Ue.call(jt,e)?!0:Ue.call(ne,e)?!1:ee.test(e)?jt[e]=!0:(ne[e]=!0,!1)}function ye(e,n,a){if(ve(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ge(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Te(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function ie(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function on(e){var n=Kt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xe(e){e._valueTracker||(e._valueTracker=on(e))}function Bn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Kt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Un=/[\n"\\]/g;function dn(e){return e.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ne(e,n,a,o,u,h,M,R){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ie(n)):e.value!==""+ie(n)&&(e.value=""+ie(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?En(e,M,ie(n)):a!=null?En(e,M,ie(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ie(R):e.removeAttribute("name")}function Ln(e,n,a,o,u,h,M,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+ie(a):"",n=n!=null?""+ie(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=R?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function En(e,n,a){n==="number"&&fi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ye(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ie(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+ie(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ie(a):""}function Nr(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(wt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ie(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function In(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var w0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $d(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||w0.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function tp(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&$d(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&$d(e,h,n[h])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var C0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),D0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return D0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var eu=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Pr=null;function ep(e){var n=w(e);if(n&&(e=n.stateNode)){var a=e[sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ne(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+dn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[sn]||null;if(!u)throw Error(r(90));Ne(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Bn(o)}break t;case"textarea":yn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Ye(e,!!a.multiple,n,!1)}}}var iu=!1;function np(e,n,a){if(iu)return e(n,a);iu=!0;try{var o=e(n);return o}finally{if(iu=!1,(Or!==null||Pr!==null)&&(kl(),Or&&(n=Or,e=Pr,Pr=Or=null,ep(n),e)))for(n=0;n<e.length;n++)ep(e[n])}}function Ws(e,n){var a=e.stateNode;if(a===null)return null;var o=a[sn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var au=!1;if(Pt)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){au=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{au=!1}var fa=null,ru=null,ol=null;function ip(){if(ol)return ol;var e,n=ru,a=n.length,o,u="value"in fa?fa.value:fa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return ol=u.slice(e,1<o?1-o:void 0)}function ll(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function cl(){return!0}function ap(){return!1}function Fn(e){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?cl:ap,this.isPropagationStopped=ap,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ul=Fn(ja),Ys=A({},ja,{view:0,detail:0}),U0=Fn(Ys),su,ou,js,fl=A({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(su=e.screenX-js.screenX,ou=e.screenY-js.screenY):ou=su=0,js=e),su)},movementY:function(e){return"movementY"in e?e.movementY:ou}}),rp=Fn(fl),L0=A({},fl,{dataTransfer:0}),N0=Fn(L0),O0=A({},Ys,{relatedTarget:0}),lu=Fn(O0),P0=A({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=Fn(P0),B0=A({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),I0=Fn(B0),F0=A({},ja,{data:0}),sp=Fn(F0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function k0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=V0[e])?!!n[e]:!1}function cu(){return k0}var X0=A({},Ys,{key:function(e){if(e.key){var n=H0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ll(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?G0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?ll(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ll(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W0=Fn(X0),q0=A({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=Fn(q0),Y0=A({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),j0=Fn(Y0),Z0=A({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),K0=Fn(Z0),Q0=A({},fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),J0=Fn(Q0),$0=A({},ja,{newState:0,oldState:0}),ty=Fn($0),ey=[9,13,27,32],uu=Pt&&"CompositionEvent"in window,Zs=null;Pt&&"documentMode"in document&&(Zs=document.documentMode);var ny=Pt&&"TextEvent"in window&&!Zs,lp=Pt&&(!uu||Zs&&8<Zs&&11>=Zs),cp=" ",up=!1;function fp(e,n){switch(e){case"keyup":return ey.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function iy(e,n){switch(e){case"compositionend":return hp(n);case"keypress":return n.which!==32?null:(up=!0,cp);case"textInput":return e=n.data,e===cp&&up?null:e;default:return null}}function ay(e,n){if(zr)return e==="compositionend"||!uu&&fp(e,n)?(e=ip(),ol=ru=fa=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lp&&n.locale!=="ko"?null:n.data;default:return null}}var ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ry[e.type]:n==="textarea"}function pp(e,n,a,o){Or?Pr?Pr.push(o):Pr=[o]:Or=o,n=jl(n,"onChange"),0<n.length&&(a=new ul("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Ks=null,Qs=null;function sy(e){Hg(e,0)}function hl(e){var n=W(e);if(Bn(n))return e}function mp(e,n){if(e==="change")return n}var gp=!1;if(Pt){var fu;if(Pt){var hu="oninput"in document;if(!hu){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),hu=typeof _p.oninput=="function"}fu=hu}else fu=!1;gp=fu&&(!document.documentMode||9<document.documentMode)}function vp(){Ks&&(Ks.detachEvent("onpropertychange",yp),Qs=Ks=null)}function yp(e){if(e.propertyName==="value"&&hl(Qs)){var n=[];pp(n,Qs,e,nu(e)),np(sy,n)}}function oy(e,n,a){e==="focusin"?(vp(),Ks=n,Qs=a,Ks.attachEvent("onpropertychange",yp)):e==="focusout"&&vp()}function ly(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(Qs)}function cy(e,n){if(e==="click")return hl(n)}function uy(e,n){if(e==="input"||e==="change")return hl(n)}function fy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:fy;function Js(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ue.call(n,u)||!Wn(e[u],n[u]))return!1}return!0}function xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sp(e,n){var a=xp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=xp(a)}}function Mp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Mp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ep(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=fi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=fi(e.document)}return n}function du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function hy(e,n){var a=Ep(n);n=e.focusedElem;var o=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&Mp(n.ownerDocument.documentElement,n)){if(o!==null&&du(n)){if(e=o.start,a=o.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var u=n.textContent.length,h=Math.min(o.start,u);o=o.end===void 0?h:Math.min(o.end,u),!a.extend&&h>o&&(u=o,o=h,h=u),u=Sp(n,h);var M=Sp(n,o);u&&M&&(a.rangeCount!==1||a.anchorNode!==u.node||a.anchorOffset!==u.offset||a.focusNode!==M.node||a.focusOffset!==M.offset)&&(e=e.createRange(),e.setStart(u.node,u.offset),a.removeAllRanges(),h>o?(a.addRange(e),a.extend(M.node,M.offset)):(e.setEnd(M.node,M.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var dy=Pt&&"documentMode"in document&&11>=document.documentMode,Br=null,pu=null,$s=null,mu=!1;function bp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mu||Br==null||Br!==fi(o)||(o=Br,"selectionStart"in o&&du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$s&&Js($s,o)||($s=o,o=jl(pu,"onSelect"),0<o.length&&(n=new ul("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Br)))}function Za(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ir={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},gu={},Tp={};Pt&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function Ka(e){if(gu[e])return gu[e];if(!Ir[e])return e;var n=Ir[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tp)return gu[e]=n[a];return e}var Ap=Ka("animationend"),Rp=Ka("animationiteration"),wp=Ka("animationstart"),py=Ka("transitionrun"),my=Ka("transitionstart"),gy=Ka("transitioncancel"),Cp=Ka("transitionend"),Dp=new Map,Up="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function hi(e,n){Dp.set(e,n),Rt(n,[e])}var $n=[],Fr=0,_u=0;function dl(){for(var e=Fr,n=_u=Fr=0;n<e;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var u=$n[n];$n[n++]=null;var h=$n[n];if($n[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&Lp(a,u,h)}}function pl(e,n,a,o){$n[Fr++]=e,$n[Fr++]=n,$n[Fr++]=a,$n[Fr++]=o,_u|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function vu(e,n,a,o){return pl(e,n,a,o),ml(e)}function ha(e,n){return pl(e,null,null,n),ml(e)}function Lp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;u&&n!==null&&e.tag===3&&(h=e.stateNode,u=31-Zt(a),h=h.hiddenUpdates,e=h[u],e===null?h[u]=[n]:e.push(n),n.lane=a|536870912)}function ml(e){if(50<To)throw To=0,Tf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Hr={},Np=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=Np.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rt(n)},Np.set(e,n),n)}return{value:e,source:n,stack:rt(n)}}var Gr=[],Vr=0,gl=null,_l=0,ei=[],ni=0,Qa=null,Fi=1,Hi="";function Ja(e,n){Gr[Vr++]=_l,Gr[Vr++]=gl,gl=e,_l=n}function Op(e,n,a){ei[ni++]=Fi,ei[ni++]=Hi,ei[ni++]=Qa,Qa=e;var o=Fi;e=Hi;var u=32-Zt(o)-1;o&=~(1<<u),a+=1;var h=32-Zt(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Fi=1<<32-Zt(n)+u|a<<u|o,Hi=h+e}else Fi=1<<h|a<<u|o,Hi=e}function yu(e){e.return!==null&&(Ja(e,1),Op(e,1,0))}function xu(e){for(;e===gl;)gl=Gr[--Vr],Gr[Vr]=null,_l=Gr[--Vr],Gr[Vr]=null;for(;e===Qa;)Qa=ei[--ni],ei[ni]=null,Hi=ei[--ni],ei[ni]=null,Fi=ei[--ni],ei[ni]=null}var Nn=null,xn=null,Ae=!1,di=null,Ai=!1,Su=Error(r(519));function $a(e){var n=Error(r(418,""));throw no(ti(n,e)),Su}function Pp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[sn]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<Ro.length;a++)Se(Ro[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Ln(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),xe(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Nr(n,o.value,o.defaultValue,o.children),xe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Xg(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=Zl),n=!0):n=!1,n||$a(e)}function zp(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 3:case 27:Ai=!0;return;case 5:case 13:Ai=!1;return;default:Nn=Nn.return}}function to(e){if(e!==Nn)return!1;if(!Ae)return zp(e),Ae=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&xn&&$a(e),zp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){xn=mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}xn=null}}else xn=Nn?mi(e.stateNode.nextSibling):null;return!0}function eo(){xn=Nn=null,Ae=!1}function no(e){di===null?di=[e]:di.push(e)}var io=Error(r(460)),Bp=Error(r(474)),Mu={then:function(){}};function Ip(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vl(){}function Fp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(vl,vl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===io?Error(r(483)):e;default:if(typeof n.status=="string")n.then(vl,vl);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===io?Error(r(483)):e}throw ao=n,io}}var ao=null;function Hp(){if(ao===null)throw Error(r(459));var e=ao;return ao=null,e}var kr=null,ro=0;function yl(e){var n=ro;return ro+=1,kr===null&&(kr=[]),Fp(kr,e,n)}function so(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function xl(e,n){throw n.$$typeof===c?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Gp(e){var n=e._init;return n(e._payload)}function Vp(e){function n(K,G){if(e){var $=K.deletions;$===null?(K.deletions=[G],K.flags|=16):$.push(G)}}function a(K,G){if(!e)return null;for(;G!==null;)n(K,G),G=G.sibling;return null}function o(K){for(var G=new Map;K!==null;)K.key!==null?G.set(K.key,K):G.set(K.index,K),K=K.sibling;return G}function u(K,G){return K=ba(K,G),K.index=0,K.sibling=null,K}function h(K,G,$){return K.index=$,e?($=K.alternate,$!==null?($=$.index,$<G?(K.flags|=33554434,G):$):(K.flags|=33554434,G)):(K.flags|=1048576,G)}function M(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function R(K,G,$,gt){return G===null||G.tag!==6?(G=_f($,K.mode,gt),G.return=K,G):(G=u(G,$),G.return=K,G)}function P(K,G,$,gt){var Gt=$.type;return Gt===m?ft(K,G,$.props.children,gt,$.key):G!==null&&(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===N&&Gp(Gt)===G.type)?(G=u(G,$.props),so(G,$),G.return=K,G):(G=Il($.type,$.key,$.props,null,K.mode,gt),so(G,$),G.return=K,G)}function V(K,G,$,gt){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=vf($,K.mode,gt),G.return=K,G):(G=u(G,$.children||[]),G.return=K,G)}function ft(K,G,$,gt,Gt){return G===null||G.tag!==7?(G=cr($,K.mode,gt,Gt),G.return=K,G):(G=u(G,$),G.return=K,G)}function yt(K,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=_f(""+G,K.mode,$),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case f:return $=Il(G.type,G.key,G.props,null,K.mode,$),so($,G),$.return=K,$;case d:return G=vf(G,K.mode,$),G.return=K,G;case N:var gt=G._init;return G=gt(G._payload),yt(K,G,$)}if(wt(G)||I(G))return G=cr(G,K.mode,$,null),G.return=K,G;if(typeof G.then=="function")return yt(K,yl(G),$);if(G.$$typeof===S)return yt(K,Pl(K,G),$);xl(K,G)}return null}function it(K,G,$,gt){var Gt=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Gt!==null?null:R(K,G,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case f:return $.key===Gt?P(K,G,$,gt):null;case d:return $.key===Gt?V(K,G,$,gt):null;case N:return Gt=$._init,$=Gt($._payload),it(K,G,$,gt)}if(wt($)||I($))return Gt!==null?null:ft(K,G,$,gt,null);if(typeof $.then=="function")return it(K,G,yl($),gt);if($.$$typeof===S)return it(K,G,Pl(K,$),gt);xl(K,$)}return null}function lt(K,G,$,gt,Gt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return K=K.get($)||null,R(G,K,""+gt,Gt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case f:return K=K.get(gt.key===null?$:gt.key)||null,P(G,K,gt,Gt);case d:return K=K.get(gt.key===null?$:gt.key)||null,V(G,K,gt,Gt);case N:var pe=gt._init;return gt=pe(gt._payload),lt(K,G,$,gt,Gt)}if(wt(gt)||I(gt))return K=K.get($)||null,ft(G,K,gt,Gt,null);if(typeof gt.then=="function")return lt(K,G,$,yl(gt),Gt);if(gt.$$typeof===S)return lt(K,G,$,Pl(G,gt),Gt);xl(G,gt)}return null}function Xt(K,G,$,gt){for(var Gt=null,pe=null,Yt=G,$t=G=0,gn=null;Yt!==null&&$t<$.length;$t++){Yt.index>$t?(gn=Yt,Yt=null):gn=Yt.sibling;var Re=it(K,Yt,$[$t],gt);if(Re===null){Yt===null&&(Yt=gn);break}e&&Yt&&Re.alternate===null&&n(K,Yt),G=h(Re,G,$t),pe===null?Gt=Re:pe.sibling=Re,pe=Re,Yt=gn}if($t===$.length)return a(K,Yt),Ae&&Ja(K,$t),Gt;if(Yt===null){for(;$t<$.length;$t++)Yt=yt(K,$[$t],gt),Yt!==null&&(G=h(Yt,G,$t),pe===null?Gt=Yt:pe.sibling=Yt,pe=Yt);return Ae&&Ja(K,$t),Gt}for(Yt=o(Yt);$t<$.length;$t++)gn=lt(Yt,K,$t,$[$t],gt),gn!==null&&(e&&gn.alternate!==null&&Yt.delete(gn.key===null?$t:gn.key),G=h(gn,G,$t),pe===null?Gt=gn:pe.sibling=gn,pe=gn);return e&&Yt.forEach(function(Ua){return n(K,Ua)}),Ae&&Ja(K,$t),Gt}function ae(K,G,$,gt){if($==null)throw Error(r(151));for(var Gt=null,pe=null,Yt=G,$t=G=0,gn=null,Re=$.next();Yt!==null&&!Re.done;$t++,Re=$.next()){Yt.index>$t?(gn=Yt,Yt=null):gn=Yt.sibling;var Ua=it(K,Yt,Re.value,gt);if(Ua===null){Yt===null&&(Yt=gn);break}e&&Yt&&Ua.alternate===null&&n(K,Yt),G=h(Ua,G,$t),pe===null?Gt=Ua:pe.sibling=Ua,pe=Ua,Yt=gn}if(Re.done)return a(K,Yt),Ae&&Ja(K,$t),Gt;if(Yt===null){for(;!Re.done;$t++,Re=$.next())Re=yt(K,Re.value,gt),Re!==null&&(G=h(Re,G,$t),pe===null?Gt=Re:pe.sibling=Re,pe=Re);return Ae&&Ja(K,$t),Gt}for(Yt=o(Yt);!Re.done;$t++,Re=$.next())Re=lt(Yt,K,$t,Re.value,gt),Re!==null&&(e&&Re.alternate!==null&&Yt.delete(Re.key===null?$t:Re.key),G=h(Re,G,$t),pe===null?Gt=Re:pe.sibling=Re,pe=Re);return e&&Yt.forEach(function(Dx){return n(K,Dx)}),Ae&&Ja(K,$t),Gt}function Ke(K,G,$,gt){if(typeof $=="object"&&$!==null&&$.type===m&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case f:t:{for(var Gt=$.key;G!==null;){if(G.key===Gt){if(Gt=$.type,Gt===m){if(G.tag===7){a(K,G.sibling),gt=u(G,$.props.children),gt.return=K,K=gt;break t}}else if(G.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===N&&Gp(Gt)===G.type){a(K,G.sibling),gt=u(G,$.props),so(gt,$),gt.return=K,K=gt;break t}a(K,G);break}else n(K,G);G=G.sibling}$.type===m?(gt=cr($.props.children,K.mode,gt,$.key),gt.return=K,K=gt):(gt=Il($.type,$.key,$.props,null,K.mode,gt),so(gt,$),gt.return=K,K=gt)}return M(K);case d:t:{for(Gt=$.key;G!==null;){if(G.key===Gt)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(K,G.sibling),gt=u(G,$.children||[]),gt.return=K,K=gt;break t}else{a(K,G);break}else n(K,G);G=G.sibling}gt=vf($,K.mode,gt),gt.return=K,K=gt}return M(K);case N:return Gt=$._init,$=Gt($._payload),Ke(K,G,$,gt)}if(wt($))return Xt(K,G,$,gt);if(I($)){if(Gt=I($),typeof Gt!="function")throw Error(r(150));return $=Gt.call($),ae(K,G,$,gt)}if(typeof $.then=="function")return Ke(K,G,yl($),gt);if($.$$typeof===S)return Ke(K,G,Pl(K,$),gt);xl(K,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(K,G.sibling),gt=u(G,$),gt.return=K,K=gt):(a(K,G),gt=_f($,K.mode,gt),gt.return=K,K=gt),M(K)):a(K,G)}return function(K,G,$,gt){try{ro=0;var Gt=Ke(K,G,$,gt);return kr=null,Gt}catch(Yt){if(Yt===io)throw Yt;var pe=si(29,Yt,null,K.mode);return pe.lanes=gt,pe.return=K,pe}finally{}}}var tr=Vp(!0),kp=Vp(!1),Xr=Ct(null),Sl=Ct(0);function Xp(e,n){e=Qi,Bt(Sl,e),Bt(Xr,n),Qi=e|n.baseLanes}function Eu(){Bt(Sl,Qi),Bt(Xr,Xr.current)}function bu(){Qi=Sl.current,Jt(Xr),Jt(Sl)}var ii=Ct(null),Ri=null;function da(e){var n=e.alternate;Bt(ln,ln.current&1),Bt(ii,e),Ri===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(Ri=e)}function Wp(e){if(e.tag===22){if(Bt(ln,ln.current),Bt(ii,e),Ri===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ri=e)}}else pa()}function pa(){Bt(ln,ln.current),Bt(ii,ii.current)}function Gi(e){Jt(ii),Ri===e&&(Ri=null),Jt(ln)}var ln=Ct(0);function Ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _y=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vy=s.unstable_scheduleCallback,yy=s.unstable_NormalPriority,cn={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new _y,data:new Map,refCount:0}}function oo(e){e.refCount--,e.refCount===0&&vy(yy,function(){e.controller.abort()})}var lo=null,Au=0,Wr=0,qr=null;function xy(e,n){if(lo===null){var a=lo=[];Au=0,Wr=Nf(),qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Au++,n.then(qp,qp),n}function qp(){if(--Au===0&&lo!==null){qr!==null&&(qr.status="fulfilled");var e=lo;lo=null,Wr=0,qr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Sy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Yp=C.S;C.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&xy(e,n),Yp!==null&&Yp(e,n)};var er=Ct(null);function Ru(){var e=er.current;return e!==null?e:Fe.pooledCache}function El(e,n){n===null?Bt(er,er.current):Bt(er,n.pool)}function jp(){var e=Ru();return e===null?null:{parent:cn._currentValue,pool:e}}var ma=0,he=null,Oe=null,$e=null,bl=!1,Yr=!1,nr=!1,Tl=0,co=0,jr=null,My=0;function Je(){throw Error(r(321))}function wu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Cu(e,n,a,o,u,h){return ma=h,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?ir:ga,nr=!1,h=a(o,u),nr=!1,Yr&&(h=Kp(n,a,o,u)),Zp(e),h}function Zp(e){C.H=wi;var n=Oe!==null&&Oe.next!==null;if(ma=0,$e=Oe=he=null,bl=!1,co=0,jr=null,n)throw Error(r(300));e===null||pn||(e=e.dependencies,e!==null&&Ol(e)&&(pn=!0))}function Kp(e,n,a,o){he=e;var u=0;do{if(Yr&&(jr=null),co=0,Yr=!1,25<=u)throw Error(r(301));if(u+=1,$e=Oe=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}C.H=ar,h=n(a,o)}while(Yr);return h}function Ey(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?uo(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(he.flags|=1024),n}function Du(){var e=Tl!==0;return Tl=0,e}function Uu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Lu(e){if(bl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}bl=!1}ma=0,$e=Oe=he=null,Yr=!1,co=Tl=0,jr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?he.memoizedState=$e=e:$e=$e.next=e,$e}function tn(){if(Oe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=$e===null?he.memoizedState:$e.next;if(n!==null)$e=n,Oe=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},$e===null?he.memoizedState=$e=e:$e=$e.next=e}return $e}var Al;Al=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function uo(e){var n=co;return co+=1,jr===null&&(jr=[]),e=Fp(jr,e,n),n=he,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?ir:ga),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===S)return bn(e)}throw Error(r(438,String(e)))}function Nu(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=U;return n.index++,a}function Vi(e,n){return typeof n=="function"?n(e):n}function wl(e){var n=tn();return Ou(n,Oe,e)}function Ou(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var R=M=null,P=null,V=n,ft=!1;do{var yt=V.lane&-536870913;if(yt!==V.lane?(Me&yt)===yt:(ma&yt)===yt){var it=V.revertLane;if(it===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),yt===Wr&&(ft=!0);else if((ma&it)===it){V=V.next,it===Wr&&(ft=!0);continue}else yt={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(R=P=yt,M=h):P=P.next=yt,he.lanes|=it,Ta|=it;yt=V.action,nr&&a(h,yt),h=V.hasEagerState?V.eagerState:a(h,yt)}else it={lane:yt,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},P===null?(R=P=it,M=h):P=P.next=it,he.lanes|=yt,Ta|=yt;V=V.next}while(V!==null&&V!==n);if(P===null?M=h:P.next=R,!Wn(h,e.memoizedState)&&(pn=!0,ft&&(a=qr,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=P,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Pu(e){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);Wn(h,n.memoizedState)||(pn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Qp(e,n,a){var o=he,u=tn(),h=Ae;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Wn((Oe||u).memoizedState,a);if(M&&(u.memoizedState=a,pn=!0),u=u.queue,Iu(tm.bind(null,o,u,e),[e]),u.getSnapshot!==n||M||$e!==null&&$e.memoizedState.tag&1){if(o.flags|=2048,Zr(9,$p.bind(null,o,u,a,n),{destroy:void 0},null),Fe===null)throw Error(r(349));h||(ma&60)!==0||Jp(o,n,a)}return a}function Jp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Al(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function $p(e,n,a,o){n.value=a,n.getSnapshot=o,em(n)&&nm(e)}function tm(e,n,a){return a(function(){em(n)&&nm(e)})}function em(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function nm(e){var n=ha(e,2);n!==null&&On(n,e,2)}function zu(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),nr){se(!0);try{a()}finally{se(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},n}function im(e,n,a,o){return e.baseState=a,Ou(e,Oe,typeof o=="function"?o:Vi)}function by(e,n,a,o,u){if(Ul(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};C.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,am(n,h)):(h.next=a.next,n.pending=a.next=h)}}function am(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=C.T,M={};C.T=M;try{var R=a(u,o),P=C.S;P!==null&&P(M,R),rm(e,n,R)}catch(V){Bu(e,n,V)}finally{C.T=h}}else try{h=a(u,o),rm(e,n,h)}catch(V){Bu(e,n,V)}}function rm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){sm(e,n,o)},function(o){return Bu(e,n,o)}):sm(e,n,a)}function sm(e,n,a){n.status="fulfilled",n.value=a,om(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,am(e,a)))}function Bu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,om(n),n=n.next;while(n!==o)}e.action=null}function om(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function lm(e,n){return n}function cm(e,n){if(Ae){var a=Fe.formState;if(a!==null){t:{var o=he;if(Ae){if(xn){e:{for(var u=xn,h=Ai;u.nodeType!==8;){if(!h){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){xn=mi(u.nextSibling),o=u.data==="F!";break t}}$a(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:n},a.queue=o,a=Rm.bind(null,he,o),o.dispatch=a,o=zu(!1),h=ku.bind(null,he,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=by.bind(null,he,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function um(e){var n=tn();return fm(n,Oe,e)}function fm(e,n,a){n=Ou(e,n,lm)[0],e=wl(Vi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?uo(n):n;var o=tn(),u=o.queue,h=u.dispatch;return a!==o.memoizedState&&(he.flags|=2048,Zr(9,Ty.bind(null,u,a),{destroy:void 0},null)),[n,h,e]}function Ty(e,n){e.action=n}function hm(e){var n=tn(),a=Oe;if(a!==null)return fm(n,a,e);tn(),n=n.memoizedState,a=tn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Zr(e,n,a,o){return e={tag:e,create:n,inst:a,deps:o,next:null},n=he.updateQueue,n===null&&(n=Al(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function dm(){return tn().memoizedState}function Cl(e,n,a,o){var u=Hn();he.flags|=e,u.memoizedState=Zr(1|n,a,{destroy:void 0},o===void 0?null:o)}function Dl(e,n,a,o){var u=tn();o=o===void 0?null:o;var h=u.memoizedState.inst;Oe!==null&&o!==null&&wu(o,Oe.memoizedState.deps)?u.memoizedState=Zr(n,a,h,o):(he.flags|=e,u.memoizedState=Zr(1|n,a,h,o))}function pm(e,n){Cl(8390656,8,e,n)}function Iu(e,n){Dl(2048,8,e,n)}function mm(e,n){return Dl(4,2,e,n)}function gm(e,n){return Dl(4,4,e,n)}function _m(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vm(e,n,a){a=a!=null?a.concat([e]):null,Dl(4,4,_m.bind(null,n,e),a)}function Fu(){}function ym(e,n){var a=tn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&wu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function xm(e,n){var a=tn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&wu(n,o[1]))return o[0];if(o=e(),nr){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[o,n],o}function Hu(e,n,a){return a===void 0||(ma&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Mg(),he.lanes|=e,Ta|=e,a)}function Sm(e,n,a,o){return Wn(a,n)?a:Xr.current!==null?(e=Hu(e,a,o),Wn(e,n)||(pn=!0),e):(ma&42)===0?(pn=!0,e.memoizedState=a):(e=Mg(),he.lanes|=e,Ta|=e,n)}function Mm(e,n,a,o,u){var h=q.p;q.p=h!==0&&8>h?h:8;var M=C.T,R={};C.T=R,ku(e,!1,n,a);try{var P=u(),V=C.S;if(V!==null&&V(R,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ft=Sy(P,o);fo(e,n,ft,Zn(e))}else fo(e,n,o,Zn(e))}catch(yt){fo(e,n,{then:function(){},status:"rejected",reason:yt},Zn())}finally{q.p=h,C.T=M}}function Ay(){}function Gu(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Em(e).queue;Mm(e,u,n,mt,a===null?Ay:function(){return bm(e),a(o)})}function Em(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:mt,baseState:mt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:mt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function bm(e){var n=Em(e).next.queue;fo(e,n,{},Zn())}function Vu(){return bn(Lo)}function Tm(){return tn().memoizedState}function Am(){return tn().memoizedState}function Ry(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=ya(a);var o=xa(n,e,a);o!==null&&(On(o,n,a),mo(o,n,a)),n={cache:Tu()},e.payload=n;return}n=n.return}}function wy(e,n,a){var o=Zn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(e)?wm(n,a):(a=vu(e,n,a,o),a!==null&&(On(a,e,o),Cm(a,n,o)))}function Rm(e,n,a){var o=Zn();fo(e,n,a,o)}function fo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))wm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,R=h(M,a);if(u.hasEagerState=!0,u.eagerState=R,Wn(R,M))return pl(e,n,u,0),Fe===null&&dl(),!1}catch{}finally{}if(a=vu(e,n,u,o),a!==null)return On(a,e,o),Cm(a,n,o),!0}return!1}function ku(e,n,a,o){if(o={lane:2,revertLane:Nf(),action:o,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(n)throw Error(r(479))}else n=vu(e,a,o,2),n!==null&&On(n,e,2)}function Ul(e){var n=e.alternate;return e===he||n!==null&&n===he}function wm(e,n){Yr=bl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Cm(e,n,a){if((a&4194176)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ti(e,a)}}var wi={readContext:bn,use:Rl,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je};wi.useCacheRefresh=Je,wi.useMemoCache=Je,wi.useHostTransitionStatus=Je,wi.useFormState=Je,wi.useActionState=Je,wi.useOptimistic=Je;var ir={readContext:bn,use:Rl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Cl(4194308,4,_m.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Cl(4194308,4,e,n)},useInsertionEffect:function(e,n){Cl(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(nr){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(nr){se(!0);try{a(n)}finally{se(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=wy.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=zu(e);var n=e.queue,a=Rm.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Fu,useDeferredValue:function(e,n){var a=Hn();return Hu(a,e,n)},useTransition:function(){var e=zu(!1);return e=Mm.bind(null,he,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Hn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Fe===null)throw Error(r(349));(Me&60)!==0||Jp(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,pm(tm.bind(null,o,h,e),[e]),o.flags|=2048,Zr(9,$p.bind(null,o,h,a,n),{destroy:void 0},null),a},useId:function(){var e=Hn(),n=Fe.identifierPrefix;if(Ae){var a=Hi,o=Fi;a=(o&~(1<<32-Zt(o)-1)).toString(32)+a,n=":"+n+"R"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=My++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Hn().memoizedState=Ry.bind(null,he)}};ir.useMemoCache=Nu,ir.useHostTransitionStatus=Vu,ir.useFormState=cm,ir.useActionState=cm,ir.useOptimistic=function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ku.bind(null,he,!0,a),a.dispatch=n,[e,n]};var ga={readContext:bn,use:Rl,useCallback:ym,useContext:bn,useEffect:Iu,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:xm,useReducer:wl,useRef:dm,useState:function(){return wl(Vi)},useDebugValue:Fu,useDeferredValue:function(e,n){var a=tn();return Sm(a,Oe.memoizedState,e,n)},useTransition:function(){var e=wl(Vi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:Qp,useId:Tm};ga.useCacheRefresh=Am,ga.useMemoCache=Nu,ga.useHostTransitionStatus=Vu,ga.useFormState=um,ga.useActionState=um,ga.useOptimistic=function(e,n){var a=tn();return im(a,Oe,e,n)};var ar={readContext:bn,use:Rl,useCallback:ym,useContext:bn,useEffect:Iu,useImperativeHandle:vm,useInsertionEffect:mm,useLayoutEffect:gm,useMemo:xm,useReducer:Pu,useRef:dm,useState:function(){return Pu(Vi)},useDebugValue:Fu,useDeferredValue:function(e,n){var a=tn();return Oe===null?Hu(a,e,n):Sm(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Pu(Vi)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:Qp,useId:Tm};ar.useCacheRefresh=Am,ar.useMemoCache=Nu,ar.useHostTransitionStatus=Vu,ar.useFormState=hm,ar.useActionState=hm,ar.useOptimistic=function(e,n){var a=tn();return Oe!==null?im(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Xu(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:A({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Wu={isMounted:function(e){return(e=e._reactInternals)?Y(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Zn(),u=ya(o);u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(On(n,e,o),mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Zn(),u=ya(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,o),n!==null&&(On(n,e,o),mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),o=ya(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(On(n,e,a),mo(n,e,a))}};function Dm(e,n,a,o,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!Js(a,o)||!Js(u,h):!0}function Um(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Wu.enqueueReplaceState(n,n.state,null)}function rr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=A({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Lm(e){Ll(e)}function Nm(e){console.error(e)}function Om(e){Ll(e)}function Nl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Pm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function qu(e,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Nl(e,n)},a}function zm(e){return e=ya(e),e.tag=3,e}function Bm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Pm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Pm(n,a,o),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Cy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&po(n,a,u,!0),a=ii.current,a!==null){switch(a.tag){case 13:return Ri===null?wf():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Mu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Df(e,o,u)),!1;case 22:return a.flags|=65536,o===Mu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Df(e,o,u)),!1}throw Error(r(435,a.tag))}return Df(e,o,u),wf(),!1}if(Ae)return n=ii.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Su&&(e=Error(r(422),{cause:o}),no(ti(e,a)))):(o!==Su&&(n=Error(r(423),{cause:o}),no(ti(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ti(o,a),u=qu(e.stateNode,o,u),lf(e,u),Ze!==4&&(Ze=2)),!1;var h=Error(r(520),{cause:o});if(h=ti(h,a),Eo===null?Eo=[h]:Eo.push(h),Ze!==4&&(Ze=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=qu(a.stateNode,o,e),lf(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Aa===null||!Aa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=zm(u),Bm(u,e,a,o),lf(a,u),!1}a=a.return}while(a!==null);return!1}var Im=Error(r(461)),pn=!1;function Sn(e,n,a,o){n.child=e===null?kp(n,null,a,o):tr(n,e.child,a,o)}function Fm(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var R in o)R!=="ref"&&(M[R]=o[R])}else M=o;return or(n),o=Cu(e,n,a,M,h,u),R=Du(),e!==null&&!pn?(Uu(e,n,u),ki(e,n,u)):(Ae&&R&&yu(n),n.flags|=1,Sn(e,n,o,u),n.child)}function Hm(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!gf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Gm(e,n,h,o,u)):(e=Il(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!ef(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Js,a(M,o)&&e.ref===n.ref)return ki(e,n,u)}return n.flags|=1,e=ba(h,o),e.ref=n.ref,e.return=n,n.child=e}function Gm(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Js(h,o)&&e.ref===n.ref)if(pn=!1,n.pendingProps=o=h,ef(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ki(e,n,u)}return Yu(e,n,a,o,u)}function Vm(e,n,a){var o=n.pendingProps,u=o.children,h=(n.stateNode._pendingVisibility&2)!==0,M=e!==null?e.memoizedState:null;if(ho(e,n),o.mode==="hidden"||h){if((n.flags&128)!==0){if(o=M!==null?M.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return km(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,M!==null?M.cachePool:null),M!==null?Xp(n,M):Eu(),Wp(n);else return n.lanes=n.childLanes=536870912,km(e,n,M!==null?M.baseLanes|a:a,a)}else M!==null?(El(n,M.cachePool),Xp(n,M),pa(),n.memoizedState=null):(e!==null&&El(n,null),Eu(),pa());return Sn(e,n,u,a),n.child}function km(e,n,a,o){var u=Ru();return u=u===null?null:{parent:cn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&El(n,null),Eu(),Wp(n),e!==null&&po(e,n,o,!0),null}function ho(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Yu(e,n,a,o,u){return or(n),a=Cu(e,n,a,o,void 0,u),o=Du(),e!==null&&!pn?(Uu(e,n,u),ki(e,n,u)):(Ae&&o&&yu(n),n.flags|=1,Sn(e,n,a,u),n.child)}function Xm(e,n,a,o,u,h){return or(n),n.updateQueue=null,a=Kp(n,o,a,u),Zp(e),o=Du(),e!==null&&!pn?(Uu(e,n,h),ki(e,n,h)):(Ae&&o&&yu(n),n.flags|=1,Sn(e,n,a,h),n.child)}function Wm(e,n,a,o,u){if(or(n),n.stateNode===null){var h=Hr,M=a.contextType;typeof M=="object"&&M!==null&&(h=bn(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Wu,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},sf(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?bn(M):Hr,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Xu(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Wu.enqueueReplaceState(h,h.state,null),_o(n,o,h,u),go(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var R=n.memoizedProps,P=rr(a,R);h.props=P;var V=h.context,ft=a.contextType;M=Hr,typeof ft=="object"&&ft!==null&&(M=bn(ft));var yt=a.getDerivedStateFromProps;ft=typeof yt=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ft||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||V!==M)&&Um(n,h,o,M),va=!1;var it=n.memoizedState;h.state=it,_o(n,o,h,u),go(),V=n.memoizedState,R||it!==V||va?(typeof yt=="function"&&(Xu(n,a,yt,o),V=n.memoizedState),(P=va||Dm(n,a,P,o,it,V,M))?(ft||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=V),h.props=o,h.state=V,h.context=M,o=P):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,of(e,n),M=n.memoizedProps,ft=rr(a,M),h.props=ft,yt=n.pendingProps,it=h.context,V=a.contextType,P=Hr,typeof V=="object"&&V!==null&&(P=bn(V)),R=a.getDerivedStateFromProps,(V=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==yt||it!==P)&&Um(n,h,o,P),va=!1,it=n.memoizedState,h.state=it,_o(n,o,h,u),go();var lt=n.memoizedState;M!==yt||it!==lt||va||e!==null&&e.dependencies!==null&&Ol(e.dependencies)?(typeof R=="function"&&(Xu(n,a,R,o),lt=n.memoizedState),(ft=va||Dm(n,a,ft,o,it,lt,P)||e!==null&&e.dependencies!==null&&Ol(e.dependencies))?(V||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,lt,P),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,lt,P)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),h.props=o,h.state=lt,h.context=P,o=ft):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,ho(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=tr(n,e.child,null,u),n.child=tr(n,null,a,u)):Sn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=ki(e,n,u),e}function qm(e,n,a,o){return eo(),n.flags|=256,Sn(e,n,a,o),n.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Zu(e){return{baseLanes:e,cachePool:jp()}}function Ku(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function Ym(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(ln.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?da(n):pa(),Ae){var R=xn,P;if(P=R){t:{for(P=R,R=Ai;P.nodeType!==8;){if(!R){R=null;break t}if(P=mi(P.nextSibling),P===null){R=null;break t}}R=P}R!==null?(n.memoizedState={dehydrated:R,treeContext:Qa!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912},P=si(18,null,null,0),P.stateNode=R,P.return=n,n.child=P,Nn=n,xn=null,P=!0):P=!1}P||$a(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return R.data==="$!"?n.lanes=16:n.lanes=536870912,null;Gi(n)}return R=o.children,o=o.fallback,u?(pa(),u=n.mode,R=Ju({mode:"hidden",children:R},u),o=cr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=Zu(a),u.childLanes=Ku(e,M,a),n.memoizedState=ju,o):(da(n),Qu(n,R))}if(P=e.memoizedState,P!==null&&(R=P.dehydrated,R!==null)){if(h)n.flags&256?(da(n),n.flags&=-257,n=$u(e,n,a)):n.memoizedState!==null?(pa(),n.child=e.child,n.flags|=128,n=null):(pa(),u=o.fallback,R=n.mode,o=Ju({mode:"visible",children:o.children},R),u=cr(u,R,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,tr(n,e.child,null,a),o=n.child,o.memoizedState=Zu(a),o.childLanes=Ku(e,M,a),n.memoizedState=ju,n=u);else if(da(n),R.data==="$!"){if(M=R.nextSibling&&R.nextSibling.dataset,M)var V=M.dgst;M=V,o=Error(r(419)),o.stack="",o.digest=M,no({value:o,source:null,stack:null}),n=$u(e,n,a)}else if(pn||po(e,n,a,!1),M=(a&e.childLanes)!==0,pn||M){if(M=Fe,M!==null){if(o=a&-a,(o&42)!==0)o=1;else switch(o){case 2:o=1;break;case 8:o=4;break;case 32:o=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:o=64;break;case 268435456:o=134217728;break;default:o=0}if(o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane)throw P.retryLane=o,ha(e,o),On(M,e,o),Im}R.data==="$?"||wf(),n=$u(e,n,a)}else R.data==="$?"?(n.flags|=128,n.child=e.child,n=Xy.bind(null,e),R._reactRetry=n,n=null):(e=P.treeContext,xn=mi(R.nextSibling),Nn=n,Ae=!0,di=null,Ai=!1,e!==null&&(ei[ni++]=Fi,ei[ni++]=Hi,ei[ni++]=Qa,Fi=e.id,Hi=e.overflow,Qa=n),n=Qu(n,o.children),n.flags|=4096);return n}return u?(pa(),u=o.fallback,R=n.mode,P=e.child,V=P.sibling,o=ba(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&31457280,V!==null?u=ba(V,u):(u=cr(u,R,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=e.child.memoizedState,R===null?R=Zu(a):(P=R.cachePool,P!==null?(V=cn._currentValue,P=P.parent!==V?{parent:V,pool:V}:P):P=jp(),R={baseLanes:R.baseLanes|a,cachePool:P}),u.memoizedState=R,u.childLanes=Ku(e,M,a),n.memoizedState=ju,o):(da(n),a=e.child,e=a.sibling,a=ba(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Qu(e,n){return n=Ju({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ju(e,n){return yg(e,n,0,null)}function $u(e,n,a){return tr(n,e.child,null,a),e=Qu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),af(e.return,n,a)}function tf(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function Zm(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(Sn(e,n,o.children,a),o=ln.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jm(e,a,n);else if(e.tag===19)jm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Bt(ln,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ml(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),tf(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ml(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}tf(n,!0,a,null,h);break;case"together":tf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(po(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ba(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ba(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ef(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ol(e)))}function Dy(e,n,a){switch(n.tag){case 3:vn(n,n.stateNode.containerInfo),_a(n,cn,e.memoizedState.cache),eo();break;case 27:case 5:de(n);break;case 4:vn(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ym(e,n,a):(da(n),e=ki(e,n,a),e!==null?e.sibling:null);da(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(po(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Zm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Bt(ln,ln.current),o)break;return null;case 22:case 23:return n.lanes=0,Vm(e,n,a);case 24:_a(n,cn,e.memoizedState.cache)}return ki(e,n,a)}function Km(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!ef(e,a)&&(n.flags&128)===0)return pn=!1,Dy(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Ae&&(n.flags&1048576)!==0&&Op(n,_l,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")gf(o)?(e=rr(o,e),n.tag=1,n=Wm(null,n,o,e,a)):(n.tag=0,n=Yu(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===E){n.tag=11,n=Fm(null,n,o,e,a);break t}else if(u===_){n.tag=14,n=Hm(null,n,o,e,a);break t}}throw n=j(o)||o,Error(r(306,n,""))}}return n;case 0:return Yu(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=rr(o,n.pendingProps),Wm(e,n,o,u,a);case 3:t:{if(vn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var h=n.pendingProps;u=n.memoizedState,o=u.element,of(e,n),_o(n,h,null,a);var M=n.memoizedState;if(h=M.cache,_a(n,cn,h),h!==u.cache&&rf(n,[cn],a,!0),go(),h=M.element,u.isDehydrated)if(u={element:h,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=qm(e,n,h,a);break t}else if(h!==o){o=ti(Error(r(424)),n),no(o),n=qm(e,n,h,a);break t}else for(xn=mi(n.stateNode.containerInfo.firstChild),Nn=n,Ae=!0,di=null,Ai=!0,a=kp(n,null,h,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(eo(),h===o){n=ki(e,n,a);break t}Sn(e,n,h,a)}n=n.child}return n;case 26:return ho(e,n),e===null?(a=$g(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=Kl(re.current).createElement(a),o[rn]=n,o[sn]=e,Mn(o,a,e),J(o),n.stateNode=o):n.memoizedState=$g(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return de(n),e===null&&Ae&&(o=n.stateNode=Kg(n.type,n.pendingProps,re.current),Nn=n,Ai=!0,xn=mi(o.firstChild)),o=n.pendingProps.children,e!==null||Ae?Sn(e,n,o,a):n.child=tr(n,null,o,a),ho(e,n),n.child;case 5:return e===null&&Ae&&((u=o=xn)&&(o=sx(o,n.type,n.pendingProps,Ai),o!==null?(n.stateNode=o,Nn=n,xn=mi(o.firstChild),Ai=!1,u=!0):u=!1),u||$a(n)),de(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,Vf(u,h)?o=null:M!==null&&Vf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=Cu(e,n,Ey,null,null,a),Lo._currentValue=u),ho(e,n),Sn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=xn)&&(a=ox(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,Nn=n,xn=null,e=!0):e=!1),e||$a(n)),null;case 13:return Ym(e,n,a);case 4:return vn(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=tr(n,null,o,a):Sn(e,n,o,a),n.child;case 11:return Fm(e,n,n.type,n.pendingProps,a);case 7:return Sn(e,n,n.pendingProps,a),n.child;case 8:return Sn(e,n,n.pendingProps.children,a),n.child;case 12:return Sn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,_a(n,n.type,o.value),Sn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,or(n),u=bn(u),o=o(u),n.flags|=1,Sn(e,n,o,a),n.child;case 14:return Hm(e,n,n.type,n.pendingProps,a);case 15:return Gm(e,n,n.type,n.pendingProps,a);case 19:return Zm(e,n,a);case 22:return Vm(e,n,a);case 24:return or(n),o=bn(cn),e===null?(u=Ru(),u===null&&(u=Fe,h=Tu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},sf(n),_a(n,cn,u)):((e.lanes&a)!==0&&(of(e,n),_o(n,null,null,a),go()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),_a(n,cn,o)):(o=h.cache,_a(n,cn,o),o!==u.cache&&rf(n,[cn],a,!0))),Sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var nf=Ct(null),sr=null,Xi=null;function _a(e,n,a){Bt(nf,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=nf.current,Jt(nf)}function af(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function rf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var R=h;h=u;for(var P=0;P<n.length;P++)if(R.context===n[P]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),af(h.return,a,e),o||(M=null);break t}h=R.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),af(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function po(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var R=u.type;Wn(u.pendingProps.value,M.value)||(e!==null?e.push(R):e=[R])}}else if(u===F.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}u=u.return}e!==null&&rf(n,e,a,o),n.flags|=262144}function Ol(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function or(e){sr=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return Qm(sr,e)}function Pl(e,n){return sr===null&&or(e),Qm(e,n)}function Qm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(r(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var va=!1;function sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(We&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=ml(e),Lp(e,null,a),n}return pl(e,o,n,a),ml(e)}function mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ti(e,a)}}function lf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var cf=!1;function go(){if(cf){var e=qr;if(e!==null)throw e}}function _o(e,n,a,o){cf=!1;var u=e.updateQueue;va=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var P=R,V=P.next;P.next=null,M===null?h=V:M.next=V,M=P;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,R=ft.lastBaseUpdate,R!==M&&(R===null?ft.firstBaseUpdate=V:R.next=V,ft.lastBaseUpdate=P))}if(h!==null){var yt=u.baseState;M=0,ft=V=P=null,R=h;do{var it=R.lane&-536870913,lt=it!==R.lane;if(lt?(Me&it)===it:(o&it)===it){it!==0&&it===Wr&&(cf=!0),ft!==null&&(ft=ft.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Xt=e,ae=R;it=n;var Ke=a;switch(ae.tag){case 1:if(Xt=ae.payload,typeof Xt=="function"){yt=Xt.call(Ke,yt,it);break t}yt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ae.payload,it=typeof Xt=="function"?Xt.call(Ke,yt,it):Xt,it==null)break t;yt=A({},yt,it);break t;case 2:va=!0}}it=R.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ft===null?(V=ft=lt,P=yt):ft=ft.next=lt,M|=it;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;lt=R,R=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ft===null&&(P=yt),u.baseState=P,u.firstBaseUpdate=V,u.lastBaseUpdate=ft,h===null&&(u.shared.lanes=0),Ta|=M,e.lanes=M,e.memoizedState=yt}}function Jm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function $m(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Jm(a[e],n)}function vo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(R){Ie(n,n.return,R)}}function Sa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var M=o.inst,R=M.destroy;if(R!==void 0){M.destroy=void 0,u=n;var P=a;try{R()}catch(V){Ie(u,P,V)}}}o=o.next}while(o!==h)}}catch(V){Ie(n,n.return,V)}}function tg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{$m(n,a)}catch(o){Ie(e,e.return,o)}}}function eg(e,n,a){a.props=rr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(e,n,o)}}function lr(e,n){try{var a=e.ref;if(a!==null){var o=e.stateNode;switch(e.tag){case 26:case 27:case 5:var u=o;break;default:u=o}typeof a=="function"?e.refCleanup=a(u):a.current=u}}catch(h){Ie(e,n,h)}}function qn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ie(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(e,n,u)}else a.current=null}function ng(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ie(e,e.return,u)}}function ig(e,n,a){try{var o=e.stateNode;ex(o,e.type,a,n),o[sn]=n}catch(u){Ie(e,e.return,u)}}function ag(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||ag(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zl));else if(o!==4&&o!==27&&(e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function zl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&o!==27&&(e=e.child,e!==null))for(zl(e,n,a),e=e.sibling;e!==null;)zl(e,n,a),e=e.sibling}var qi=!1,je=!1,hf=!1,rg=typeof WeakSet=="function"?WeakSet:Set,mn=null,sg=!1;function Uy(e,n){if(e=e.containerInfo,Hf=nc,e=Ep(e),du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,R=-1,P=-1,V=0,ft=0,yt=e,it=null;e:for(;;){for(var lt;yt!==a||u!==0&&yt.nodeType!==3||(R=M+u),yt!==h||o!==0&&yt.nodeType!==3||(P=M+o),yt.nodeType===3&&(M+=yt.nodeValue.length),(lt=yt.firstChild)!==null;)it=yt,yt=lt;for(;;){if(yt===e)break e;if(it===a&&++V===u&&(R=M),it===h&&++ft===o&&(P=M),(lt=yt.nextSibling)!==null)break;yt=it,it=yt.parentNode}yt=lt}a=R===-1||P===-1?null:{start:R,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gf={focusedElem:e,selectionRange:a},nc=!1,mn=n;mn!==null;)if(n=mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,mn=e;else for(;mn!==null;){switch(n=mn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Xt=rr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(Xt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ie(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Wf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,mn=e;break}mn=n.return}return Xt=sg,sg=!1,Xt}function og(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),o&4&&vo(5,a);break;case 1:if(ji(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(R){Ie(a,a.return,R)}else{var u=rr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(R){Ie(a,a.return,R)}}o&64&&tg(a),o&512&&lr(a,a.return);break;case 3:if(ji(e,a),o&64&&(o=a.updateQueue,o!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{$m(o,e)}catch(R){Ie(a,a.return,R)}}break;case 26:ji(e,a),o&512&&lr(a,a.return);break;case 27:case 5:ji(e,a),n===null&&o&4&&ng(a),o&512&&lr(a,a.return);break;case 12:ji(e,a);break;case 13:ji(e,a),o&4&&ug(e,a);break;case 22:if(u=a.memoizedState!==null||qi,!u){n=n!==null&&n.memoizedState!==null||je;var h=qi,M=je;qi=u,(je=n)&&!M?Ma(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),qi=h,je=M}o&512&&(a.memoizedProps.mode==="manual"?lr(a,a.return):qn(a,a.return));break;default:ji(e,a)}}function lg(e){var n=e.alternate;n!==null&&(e.alternate=null,lg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Yn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)cg(e,n,a),a=a.sibling}function cg(e,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 26:je||qn(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:je||qn(a,n);var o=en,u=Yn;for(en=a.stateNode,Yi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Xs(a),en=o,Yn=u;break;case 5:je||qn(a,n);case 6:u=en;var h=Yn;if(en=null,Yi(e,n,a),en=u,Yn=h,en!==null)if(Yn)try{e=en,o=a.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)}catch(M){Ie(a,n,M)}else try{en.removeChild(a.stateNode)}catch(M){Ie(a,n,M)}break;case 18:en!==null&&(Yn?(n=en,a=a.stateNode,n.nodeType===8?Xf(n.parentNode,a):n.nodeType===1&&Xf(n,a),zo(n)):Xf(en,a.stateNode));break;case 4:o=en,u=Yn,en=a.stateNode.containerInfo,Yn=!0,Yi(e,n,a),en=o,Yn=u;break;case 0:case 11:case 14:case 15:je||Sa(2,a,n),je||Sa(4,a,n),Yi(e,n,a);break;case 1:je||(qn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&eg(a,n,o)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:je||qn(a,n),je=(o=je)||a.memoizedState!==null,Yi(e,n,a),je=o;break;default:Yi(e,n,a)}}function ug(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zo(e)}catch(a){Ie(n,n.return,a)}}function Ly(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new rg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new rg),n;default:throw Error(r(435,e.tag))}}function df(e,n){var a=Ly(e);n.forEach(function(o){var u=Wy.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function ai(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,M=n,R=M;t:for(;R!==null;){switch(R.tag){case 27:case 5:en=R.stateNode,Yn=!1;break t;case 3:en=R.stateNode.containerInfo,Yn=!0;break t;case 4:en=R.stateNode.containerInfo,Yn=!0;break t}R=R.return}if(en===null)throw Error(r(160));cg(h,M,u),en=null,Yn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)fg(n,e),n=n.sibling}var pi=null;function fg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ai(n,e),ri(e),o&4&&(Sa(3,e,e.return),vo(3,e),Sa(5,e,e.return));break;case 1:ai(n,e),ri(e),o&512&&(je||a===null||qn(a,a.return)),o&64&&qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=pi;if(ai(n,e),ri(e),o&512&&(je||a===null||qn(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ya]||h[rn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Mn(h,o,a),h[rn]=e,J(h),o=h;break t;case"link":var M=n_("link","href",u).get(o+(a.href||""));if(M){for(var R=0;R<M.length;R++)if(h=M[R],h.getAttribute("href")===(a.href==null?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(R,1);break e}}h=u.createElement(o),Mn(h,o,a),u.head.appendChild(h);break;case"meta":if(M=n_("meta","content",u).get(o+(a.content||""))){for(R=0;R<M.length;R++)if(h=M[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(R,1);break e}}h=u.createElement(o),Mn(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[rn]=e,J(h),o=h}e.stateNode=o}else i_(u,e.type,e.stateNode);else e.stateNode=e_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?i_(u,e.type,e.stateNode):e_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&ig(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(o&4&&e.alternate===null){u=e.stateNode,h=e.memoizedProps;try{for(var P=u.firstChild;P;){var V=P.nextSibling,ft=P.nodeName;P[Ya]||ft==="HEAD"||ft==="BODY"||ft==="SCRIPT"||ft==="STYLE"||ft==="LINK"&&P.rel.toLowerCase()==="stylesheet"||u.removeChild(P),P=V}for(var yt=e.type,it=u.attributes;it.length;)u.removeAttributeNode(it[0]);Mn(u,yt,h),u[rn]=e,u[sn]=h}catch(Xt){Ie(e,e.return,Xt)}}case 5:if(ai(n,e),ri(e),o&512&&(je||a===null||qn(a,a.return)),e.flags&32){u=e.stateNode;try{In(u,"")}catch(Xt){Ie(e,e.return,Xt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,ig(e,u,a!==null?a.memoizedProps:u)),o&1024&&(hf=!0);break;case 6:if(ai(n,e),ri(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Xt){Ie(e,e.return,Xt)}}break;case 3:if($l=null,u=pi,pi=Ql(n.containerInfo),ai(n,e),pi=u,ri(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{zo(n.containerInfo)}catch(Xt){Ie(e,e.return,Xt)}hf&&(hf=!1,hg(e));break;case 4:o=pi,pi=Ql(e.stateNode.containerInfo),ai(n,e),ri(e),pi=o;break;case 12:ai(n,e),ri(e);break;case 13:ai(n,e),ri(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mf=dt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,df(e,o)));break;case 22:if(o&512&&(je||a===null||qn(a,a.return)),P=e.memoizedState!==null,V=a!==null&&a.memoizedState!==null,ft=qi,yt=je,qi=ft||P,je=yt||V,ai(n,e),je=yt,qi=ft,ri(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,o&8192&&(n._visibility=P?n._visibility&-2:n._visibility|1,P&&(n=qi||je,a===null||V||n||Kr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){V=a=n;try{if(u=V.stateNode,P)h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none";else{M=V.stateNode,R=V.memoizedProps.style;var lt=R!=null&&R.hasOwnProperty("display")?R.display:null;M.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(Xt){Ie(V,V.return,Xt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=P?"":V.memoizedProps}catch(Xt){Ie(V,V.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,df(e,a))));break;case 19:ai(n,e),ri(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,df(e,o)));break;case 21:break;default:ai(n,e),ri(e)}}function ri(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(ag(a)){var o=a;break t}a=a.return}throw Error(r(160))}switch(o.tag){case 27:var u=o.stateNode,h=uf(e);zl(e,h,u);break;case 5:var M=o.stateNode;o.flags&32&&(In(M,""),o.flags&=-33);var R=uf(e);zl(e,R,M);break;case 3:case 4:var P=o.stateNode.containerInfo,V=uf(e);ff(e,V,P);break;default:throw Error(r(161))}}}catch(ft){Ie(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function hg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)og(e,n.alternate,n),n=n.sibling}function Kr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),Kr(n);break;case 1:qn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&eg(n,n.return,a),Kr(n);break;case 26:case 27:case 5:qn(n,n.return),Kr(n);break;case 22:qn(n,n.return),n.memoizedState===null&&Kr(n);break;default:Kr(n)}e=e.sibling}}function Ma(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:Ma(u,h,a),vo(4,h);break;case 1:if(Ma(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(V){Ie(o,o.return,V)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)Jm(P[u],R)}catch(V){Ie(o,o.return,V)}}a&&M&64&&tg(h),lr(h,h.return);break;case 26:case 27:case 5:Ma(u,h,a),a&&o===null&&M&4&&ng(h),lr(h,h.return);break;case 12:Ma(u,h,a);break;case 13:Ma(u,h,a),a&&M&4&&ug(u,h);break;case 22:h.memoizedState===null&&Ma(u,h,a),lr(h,h.return);break;default:Ma(u,h,a)}n=n.sibling}}function pf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&oo(a))}function mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e))}function Ea(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dg(e,n,a,o),n=n.sibling}function dg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ea(e,n,a,o),u&2048&&vo(9,n);break;case 3:Ea(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&oo(e)));break;case 12:if(u&2048){Ea(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,R=h.onPostCommit;typeof R=="function"&&R(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ie(n,n.return,P)}}else Ea(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,n.memoizedState!==null?h._visibility&4?Ea(e,n,a,o):yo(e,n):h._visibility&4?Ea(e,n,a,o):(h._visibility|=4,Qr(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&pf(n.alternate,n);break;case 24:Ea(e,n,a,o),u&2048&&mf(n.alternate,n);break;default:Ea(e,n,a,o)}}function Qr(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,M=n,R=a,P=o,V=M.flags;switch(M.tag){case 0:case 11:case 15:Qr(h,M,R,P,u),vo(8,M);break;case 23:break;case 22:var ft=M.stateNode;M.memoizedState!==null?ft._visibility&4?Qr(h,M,R,P,u):yo(h,M):(ft._visibility|=4,Qr(h,M,R,P,u)),u&&V&2048&&pf(M.alternate,M);break;case 24:Qr(h,M,R,P,u),u&&V&2048&&mf(M.alternate,M);break;default:Qr(h,M,R,P,u)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:yo(a,o),u&2048&&pf(o.alternate,o);break;case 24:yo(a,o),u&2048&&mf(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var xo=8192;function Jr(e){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)pg(e),e=e.sibling}function pg(e){switch(e.tag){case 26:Jr(e),e.flags&xo&&e.memoizedState!==null&&xx(pi,e.memoizedState,e.memoizedProps);break;case 5:Jr(e);break;case 3:case 4:var n=pi;pi=Ql(e.stateNode.containerInfo),Jr(e),pi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=xo,xo=16777216,Jr(e),xo=n):Jr(e));break;default:Jr(e)}}function mg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,_g(o,e)}mg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)gg(e),e=e.sibling}function gg(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Bl(e)):So(e);break;default:So(e)}}function Bl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];mn=o,_g(o,e)}mg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Bl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Bl(n));break;default:Bl(n)}e=e.sibling}}function _g(e,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,mn=o;else t:for(a=e;mn!==null;){o=mn;var u=o.sibling,h=o.return;if(lg(o),o===a){mn=null;break t}if(u!==null){u.return=h,mn=u;break t}mn=h}}}function Ny(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,n,a,o){return new Ny(e,n,a,o)}function gf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ba(e,n){var a=e.alternate;return a===null?(a=si(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vg(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Il(e,n,a,o,u,h){var M=0;if(o=e,typeof e=="function")gf(e)&&(M=1);else if(typeof e=="string")M=vx(e,a,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return cr(a.children,u,h,n);case p:M=8,u|=24;break;case g:return e=si(12,a,n,u|2),e.elementType=g,e.lanes=h,e;case b:return e=si(13,a,n,u),e.elementType=b,e.lanes=h,e;case x:return e=si(19,a,n,u),e.elementType=x,e.lanes=h,e;case D:return yg(a,u,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v:case S:M=10;break t;case y:M=9;break t;case E:M=11;break t;case _:M=14;break t;case N:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=si(M,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function cr(e,n,a,o){return e=si(7,e,o,n),e.lanes=a,e}function yg(e,n,a,o){e=si(22,e,o,n),e.elementType=D,e.lanes=a;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var h=u._current;if(h===null)throw Error(r(456));if((u._pendingVisibility&2)===0){var M=ha(h,2);M!==null&&(u._pendingVisibility|=2,On(M,h,2))}},attach:function(){var h=u._current;if(h===null)throw Error(r(456));if((u._pendingVisibility&2)!==0){var M=ha(h,2);M!==null&&(u._pendingVisibility&=-3,On(M,h,2))}}};return e.stateNode=u,e}function _f(e,n,a){return e=si(6,e,null,n),e.lanes=a,e}function vf(e,n,a){return n=si(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Zi(e){e.flags|=4}function xg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!a_(n)){if(n=ii.current,n!==null&&((Me&4194176)===Me?Ri!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Ri))throw ao=Mu,Bp;e.flags|=8192}}function Fl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?be():536870912,e.lanes|=n,ts|=n)}function Mo(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Xe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&31457280,o|=u.flags&31457280,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Oy(e,n,a){var o=n.pendingProps;switch(xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Wi(cn),le(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(to(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,di!==null&&(Af(di),di=null))),Xe(n),null;case 26:return a=n.memoizedState,e===null?(Zi(n),a!==null?(Xe(n),xg(n,a)):(Xe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Zi(n),Xe(n),xg(n,a)):(Xe(n),n.flags&=-16777217):(e.memoizedProps!==o&&Zi(n),Xe(n),n.flags&=-16777217),null;case 27:Wt(n),a=re.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}e=Ee.current,to(n)?Pp(n):(e=Kg(u,o,a),n.stateNode=e,Zi(n))}return Xe(n),null;case 5:if(Wt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(e=Ee.current,to(n))Pp(n);else{switch(u=Kl(re.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[rn]=n,e[sn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Mn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zi(n)}}return Xe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Zi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=re.current,to(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Nn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Xg(e.nodeValue,a)),e||$a(n)}else e=Kl(e).createTextNode(o),e[rn]=n,n.stateNode=e}return Xe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=to(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[rn]=n}else eo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),u=!1}else di!==null&&(Af(di),di=null),u=!0;if(!u)return n.flags&256?(Gi(n),n):(Gi(n),null)}if(Gi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),Xe(n),null;case 4:return le(),e===null&&Bf(n.stateNode.containerInfo),Xe(n),null;case 10:return Wi(n.type),Xe(n),null;case 19:if(Jt(ln),u=n.memoizedState,u===null)return Xe(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)Mo(u,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Ml(e),h!==null){for(n.flags|=128,Mo(u,!1),e=h.updateQueue,n.updateQueue=e,Fl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)vg(a,e),a=a.sibling;return Bt(ln,ln.current&1|2),n.child}e=e.sibling}u.tail!==null&&dt()>Hl&&(n.flags|=128,o=!0,Mo(u,!1),n.lanes=4194304)}else{if(!o)if(e=Ml(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Fl(n,e),Mo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Ae)return Xe(n),null}else 2*dt()-u.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,o=!0,Mo(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=dt(),n.sibling=null,e=ln.current,Bt(ln,o?e&1|2:e&1),n):(Xe(n),null);case 22:case 23:return Gi(n),bu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Jt(er),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(cn),Xe(n),null;case 25:return null}throw Error(r(156,n.tag))}function Py(e,n){switch(xu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(cn),le(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Wt(n),null;case 13:if(Gi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));eo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Jt(ln),null;case 4:return le(),null;case 10:return Wi(n.type),null;case 22:case 23:return Gi(n),bu(),e!==null&&Jt(er),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(cn),null;case 25:return null;default:return null}}function Sg(e,n){switch(xu(n),n.tag){case 3:Wi(cn),le();break;case 26:case 27:case 5:Wt(n);break;case 4:le();break;case 13:Gi(n);break;case 19:Jt(ln);break;case 10:Wi(n.type);break;case 22:case 23:Gi(n),bu(),e!==null&&Jt(er);break;case 24:Wi(cn)}}var zy={getCacheForType:function(e){var n=bn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},By=typeof WeakMap=="function"?WeakMap:Map,We=0,Fe=null,me=null,Me=0,He=0,jn=null,Ki=!1,$r=!1,yf=!1,Qi=0,Ze=0,Ta=0,ur=0,xf=0,oi=0,ts=0,Eo=null,Ci=null,Sf=!1,Mf=0,Hl=1/0,Gl=null,Aa=null,Vl=!1,fr=null,bo=0,Ef=0,bf=null,To=0,Tf=null;function Zn(){if((We&2)!==0&&Me!==0)return Me&-Me;if(C.T!==null){var e=Wr;return e!==0?e:Nf()}return ks()}function Mg(){oi===0&&(oi=(Me&536870912)===0||Ae?an():536870912);var e=ii.current;return e!==null&&(e.flags|=32),oi}function On(e,n,a){(e===Fe&&He===2||e.cancelPendingCommit!==null)&&(es(e,0),Ji(e,Me,oi,!1)),Dn(e,a),((We&2)===0||e!==Fe)&&(e===Fe&&((We&2)===0&&(ur|=a),Ze===4&&Ji(e,Me,oi,!1)),Di(e))}function Eg(e,n,a){if((We&6)!==0)throw Error(r(327));var o=!a&&(n&60)===0&&(n&e.expiredLanes)===0||te(e,n),u=o?Hy(e,n):Cf(e,n,!0),h=o;do{if(u===0){$r&&!o&&Ji(e,n,0,!1);break}else if(u===6)Ji(e,n,0,!Ki);else{if(a=e.current.alternate,h&&!Iy(a)){u=Cf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var R=e;u=Eo;var P=R.current.memoizedState.isDehydrated;if(P&&(es(R,M).flags|=256),M=Cf(R,M,!1),M!==2){if(yf&&!P){R.errorRecoveryDisabledLanes|=h,ur|=h,u=4;break t}h=Ci,Ci=u,h!==null&&Af(h)}u=M}if(h=!1,u!==2)continue}}if(u===1){es(e,0),Ji(e,n,0,!0);break}t:{switch(o=e,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){Ji(o,n,oi,!Ki);break t}break;case 2:Ci=null;break;case 3:case 5:break;default:throw Error(r(329))}if(o.finishedWork=a,o.finishedLanes=n,(n&62914560)===n&&(h=Mf+300-dt(),10<h)){if(Ji(o,n,oi,!Ki),Lt(o,0)!==0)break t;o.timeoutHandle=Yg(bg.bind(null,o,a,Ci,Gl,Sf,n,oi,ur,ts,Ki,2,-0,0),h);break t}bg(o,a,Ci,Gl,Sf,n,oi,ur,ts,Ki,0,-0,0)}}break}while(!0);Di(e)}function Af(e){Ci===null?Ci=e:Ci.push.apply(Ci,e)}function bg(e,n,a,o,u,h,M,R,P,V,ft,yt,it){var lt=n.subtreeFlags;if((lt&8192||(lt&16785408)===16785408)&&(Uo={stylesheets:null,count:0,unsuspend:yx},pg(n),n=Sx(),n!==null)){e.cancelPendingCommit=n(Ug.bind(null,e,a,o,u,M,R,P,1,yt,it)),Ji(e,h,M,!V);return}Ug(e,a,o,u,M,R,P,ft,yt,it)}function Iy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Wn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ji(e,n,a,o){n&=~xf,n&=~ur,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Zt(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&Vs(e,a,n)}function kl(){return(We&6)===0?(Ao(0),!1):!0}function Rf(){if(me!==null){if(He===0)var e=me.return;else e=me,Xi=sr=null,Lu(e),kr=null,ro=0,e=me;for(;e!==null;)Sg(e.alternate,e),e=e.return;me=null}}function es(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ix(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Rf(),Fe=e,me=a=ba(e.current,null),Me=n,He=0,jn=null,Ki=!1,$r=te(e,n),yf=!1,ts=oi=xf=ur=Ta=Ze=0,Ci=Eo=null,Sf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Zt(o),h=1<<u;n|=e[u],o&=~h}return Qi=n,dl(),a}function Tg(e,n){he=null,C.H=wi,n===io?(n=Hp(),He=3):n===Bp?(n=Hp(),He=4):He=n===Im?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,me===null&&(Ze=1,Nl(e,ti(n,e.current)))}function Ag(){var e=C.H;return C.H=wi,e===null?wi:e}function Rg(){var e=C.A;return C.A=zy,e}function wf(){Ze=4,Ki||(Me&4194176)!==Me&&ii.current!==null||($r=!0),(Ta&134217727)===0&&(ur&134217727)===0||Fe===null||Ji(Fe,Me,oi,!1)}function Cf(e,n,a){var o=We;We|=2;var u=Ag(),h=Rg();(Fe!==e||Me!==n)&&(Gl=null,es(e,n)),n=!1;var M=Ze;t:do try{if(He!==0&&me!==null){var R=me,P=jn;switch(He){case 8:Rf(),M=6;break t;case 3:case 2:case 6:ii.current===null&&(n=!0);var V=He;if(He=0,jn=null,ns(e,R,P,V),a&&$r){M=0;break t}break;default:V=He,He=0,jn=null,ns(e,R,P,V)}}Fy(),M=Ze;break}catch(ft){Tg(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Xi=sr=null,We=o,C.H=u,C.A=h,me===null&&(Fe=null,Me=0,dl()),M}function Fy(){for(;me!==null;)wg(me)}function Hy(e,n){var a=We;We|=2;var o=Ag(),u=Rg();Fe!==e||Me!==n?(Gl=null,Hl=dt()+500,es(e,n)):$r=te(e,n);t:do try{if(He!==0&&me!==null){n=me;var h=jn;e:switch(He){case 1:He=0,jn=null,ns(e,n,h,1);break;case 2:if(Ip(h)){He=0,jn=null,Cg(n);break}n=function(){He===2&&Fe===e&&(He=7),Di(e)},h.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Ip(h)?(He=0,jn=null,Cg(n)):(He=0,jn=null,ns(e,n,h,7));break;case 5:var M=null;switch(me.tag){case 26:M=me.memoizedState;case 5:case 27:var R=me;if(!M||a_(M)){He=0,jn=null;var P=R.sibling;if(P!==null)me=P;else{var V=R.return;V!==null?(me=V,Xl(V)):me=null}break e}}He=0,jn=null,ns(e,n,h,5);break;case 6:He=0,jn=null,ns(e,n,h,6);break;case 8:Rf(),Ze=6;break t;default:throw Error(r(462))}}Gy();break}catch(ft){Tg(e,ft)}while(!0);return Xi=sr=null,C.H=o,C.A=u,We=a,me!==null?0:(Fe=null,Me=0,dl(),Ze)}function Gy(){for(;me!==null&&!T();)wg(me)}function wg(e){var n=Km(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Xl(e):me=n}function Cg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Xm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Xm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Lu(n);default:Sg(a,n),n=me=vg(n,Qi),n=Km(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Xl(e):me=n}function ns(e,n,a,o){Xi=sr=null,Lu(n),kr=null,ro=0;var u=n.return;try{if(Cy(e,u,n,a,Me)){Ze=1,Nl(e,ti(a,e.current)),me=null;return}}catch(h){if(u!==null)throw me=u,h;Ze=1,Nl(e,ti(a,e.current)),me=null;return}n.flags&32768?(Ae||o===1?e=!0:$r||(Me&536870912)!==0?e=!1:(Ki=e=!0,(o===2||o===3||o===6)&&(o=ii.current,o!==null&&o.tag===13&&(o.flags|=16384))),Dg(n,e)):Xl(n)}function Xl(e){var n=e;do{if((n.flags&32768)!==0){Dg(n,Ki);return}e=n.return;var a=Oy(n.alternate,n,Qi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Ze===0&&(Ze=5)}function Dg(e,n){do{var a=Py(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);Ze=6,me=null}function Ug(e,n,a,o,u,h,M,R,P,V){var ft=C.T,yt=q.p;try{q.p=2,C.T=null,Vy(e,n,a,o,yt,u,h,M,R,P,V)}finally{C.T=ft,q.p=yt}}function Vy(e,n,a,o,u,h,M,R){do is();while(fr!==null);if((We&6)!==0)throw Error(r(327));var P=e.finishedWork;if(o=e.finishedLanes,P===null)return null;if(e.finishedWork=null,e.finishedLanes=0,P===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var V=P.lanes|P.childLanes;if(V|=_u,il(e,o,V,h,M,R),e===Fe&&(me=Fe=null,Me=0),(P.subtreeFlags&10256)===0&&(P.flags&10256)===0||Vl||(Vl=!0,Ef=V,bf=a,qy(Ut,function(){return is(),null})),a=(P.flags&15990)!==0,(P.subtreeFlags&15990)!==0||a?(a=C.T,C.T=null,h=q.p,q.p=2,M=We,We|=4,Uy(e,P),fg(P,e),hy(Gf,e.containerInfo),nc=!!Hf,Gf=Hf=null,e.current=P,og(e,P.alternate,P),nt(),We=M,q.p=h,C.T=a):e.current=P,Vl?(Vl=!1,fr=e,bo=o):Lg(e,V),V=e.pendingLanes,V===0&&(Aa=null),Ht(P.stateNode),Di(e),n!==null)for(u=e.onRecoverableError,P=0;P<n.length;P++)V=n[P],u(V.value,{componentStack:V.stack});return(bo&3)!==0&&is(),V=e.pendingLanes,(o&4194218)!==0&&(V&42)!==0?e===Tf?To++:(To=0,Tf=e):To=0,Ao(0),null}function Lg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,oo(n)))}function is(){if(fr!==null){var e=fr,n=Ef;Ef=0;var a=Ur(bo),o=C.T,u=q.p;try{if(q.p=32>a?32:a,C.T=null,fr===null)var h=!1;else{a=bf,bf=null;var M=fr,R=bo;if(fr=null,bo=0,(We&6)!==0)throw Error(r(331));var P=We;if(We|=4,gg(M.current),dg(M,M.current,R,a),We=P,Ao(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Qt,M)}catch{}h=!0}return h}finally{q.p=u,C.T=o,Lg(e,n)}}return!1}function Ng(e,n,a){n=ti(a,n),n=qu(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(Dn(e,2),Di(e))}function Ie(e,n,a){if(e.tag===3)Ng(e,e,a);else for(;n!==null;){if(n.tag===3){Ng(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=ti(a,e),a=zm(2),o=xa(n,a,2),o!==null&&(Bm(a,o,n,e),Dn(o,2),Di(o));break}}n=n.return}}function Df(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new By;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(yf=!0,u.add(a),e=ky.bind(null,e,n,a),n.then(e,e))}function ky(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Fe===e&&(Me&a)===a&&(Ze===4||Ze===3&&(Me&62914560)===Me&&300>dt()-Mf?(We&2)===0&&es(e,0):xf|=a,ts===Me&&(ts=0)),Di(e)}function Og(e,n){n===0&&(n=be()),e=ha(e,n),e!==null&&(Dn(e,n),Di(e))}function Xy(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Og(e,a)}function Wy(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Og(e,a)}function qy(e,n){return qt(e,n)}var Wl=null,as=null,Uf=!1,ql=!1,Lf=!1,hr=0;function Di(e){e!==as&&e.next===null&&(as===null?Wl=as=e:as=as.next=e),ql=!0,Uf||(Uf=!0,jy(Yy))}function Ao(e,n){if(!Lf&&ql){Lf=!0;do for(var a=!1,o=Wl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Zt(42|e)+1)-1,h&=u&~(M&~R),h=h&201326677?h&201326677|1:h?h|2:0}h!==0&&(a=!0,Bg(o,h))}else h=Me,h=Lt(o,o===Fe?h:0),(h&3)===0||te(o,h)||(a=!0,Bg(o,h));o=o.next}while(a);Lf=!1}}function Yy(){ql=Uf=!1;var e=0;hr!==0&&(nx()&&(e=hr),hr=0);for(var n=dt(),a=null,o=Wl;o!==null;){var u=o.next,h=Pg(o,n);h===0?(o.next=null,a===null?Wl=u:a.next=u,u===null&&(as=a)):(a=o,(e!==0||(h&3)!==0)&&(ql=!0)),o=u}Ao(e)}function Pg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Zt(h),R=1<<M,P=u[M];P===-1?((R&a)===0||(R&o)!==0)&&(u[M]=Ve(R,n)):P<=n&&(e.expiredLanes|=R),h&=~R}if(n=Fe,a=Me,a=Lt(e,e===n?a:0),o=e.callbackNode,a===0||e===n&&He===2||e.cancelPendingCommit!==null)return o!==null&&o!==null&&O(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||te(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&O(o),Ur(a)){case 2:case 8:a=Vt;break;case 32:a=Ut;break;case 268435456:a=_e;break;default:a=Ut}return o=zg.bind(null,e),a=qt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&O(o),e.callbackPriority=2,e.callbackNode=null,2}function zg(e,n){var a=e.callbackNode;if(is()&&e.callbackNode!==a)return null;var o=Me;return o=Lt(e,e===Fe?o:0),o===0?null:(Eg(e,o,n),Pg(e,dt()),e.callbackNode!=null&&e.callbackNode===a?zg.bind(null,e):null)}function Bg(e,n){if(is())return null;Eg(e,n,!0)}function jy(e){ax(function(){(We&6)!==0?qt(pt,e):e()})}function Nf(){return hr===0&&(hr=an()),hr}function Ig(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function Fg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Zy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Ig((u[sn]||null).action),M=o.submitter;M&&(n=(n=M[sn]||null)?Ig(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var R=new ul("action","action",null,o,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(hr!==0){var P=M?Fg(u,M):new FormData(u);Gu(a,{pending:!0,data:P,method:u.method,action:h},null,P)}}else typeof h=="function"&&(R.preventDefault(),P=M?Fg(u,M):new FormData(u),Gu(a,{pending:!0,data:P,method:u.method,action:h},h,P))},currentTarget:u}]})}}for(var Of=0;Of<Up.length;Of++){var Pf=Up[Of],Ky=Pf.toLowerCase(),Qy=Pf[0].toUpperCase()+Pf.slice(1);hi(Ky,"on"+Qy)}hi(Ap,"onAnimationEnd"),hi(Rp,"onAnimationIteration"),hi(wp,"onAnimationStart"),hi("dblclick","onDoubleClick"),hi("focusin","onFocus"),hi("focusout","onBlur"),hi(py,"onTransitionRun"),hi(my,"onTransitionStart"),hi(gy,"onTransitionCancel"),hi(Cp,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ro));function Hg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var R=o[M],P=R.instance,V=R.currentTarget;if(R=R.listener,P!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=V;try{h(u)}catch(ft){Ll(ft)}u.currentTarget=null,h=P}else for(M=0;M<o.length;M++){if(R=o[M],P=R.instance,V=R.currentTarget,R=R.listener,P!==h&&u.isPropagationStopped())break t;h=R,u.currentTarget=V;try{h(u)}catch(ft){Ll(ft)}u.currentTarget=null,h=P}}}}function Se(e,n){var a=n[Lr];a===void 0&&(a=n[Lr]=new Set);var o=e+"__bubble";a.has(o)||(Gg(n,e,2,!1),a.add(o))}function zf(e,n,a){var o=0;n&&(o|=4),Gg(a,e,o,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Bf(e){if(!e[Yl]){e[Yl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(Jy.has(a)||zf(a,!1,e),zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,zf("selectionchange",!1,n))}}function Gg(e,n,a,o){switch(u_(n)){case 2:var u=bx;break;case 8:u=Tx;break;default:u=Kf}a=u.bind(null,n,a,e),u=void 0,!au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function If(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var R=o.stateNode.containerInfo;if(R===u||R.nodeType===8&&R.parentNode===u)break;if(M===4)for(M=o.return;M!==null;){var P=M.tag;if((P===3||P===4)&&(P=M.stateNode.containerInfo,P===u||P.nodeType===8&&P.parentNode===u))return;M=M.return}for(;R!==null;){if(M=Ii(R),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){o=h=M;continue t}R=R.parentNode}}o=o.return}np(function(){var V=h,ft=nu(a),yt=[];t:{var it=Dp.get(e);if(it!==void 0){var lt=ul,Xt=e;switch(e){case"keypress":if(ll(a)===0)break t;case"keydown":case"keyup":lt=W0;break;case"focusin":Xt="focus",lt=lu;break;case"focusout":Xt="blur",lt=lu;break;case"beforeblur":case"afterblur":lt=lu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=rp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=N0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=j0;break;case Ap:case Rp:case wp:lt=z0;break;case Cp:lt=K0;break;case"scroll":case"scrollend":lt=U0;break;case"wheel":lt=J0;break;case"copy":case"cut":case"paste":lt=I0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=op;break;case"toggle":case"beforetoggle":lt=ty}var ae=(n&4)!==0,Ke=!ae&&(e==="scroll"||e==="scrollend"),K=ae?it!==null?it+"Capture":null:it;ae=[];for(var G=V,$;G!==null;){var gt=G;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||K===null||(gt=Ws(G,K),gt!=null&&ae.push(wo(G,gt,$))),Ke)break;G=G.return}0<ae.length&&(it=new lt(it,Xt,null,a,ft),yt.push({event:it,listeners:ae}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==eu&&(Xt=a.relatedTarget||a.fromElement)&&(Ii(Xt)||Xt[Bi]))break t;if((lt||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Xt=a.relatedTarget||a.toElement,lt=V,Xt=Xt?Ii(Xt):null,Xt!==null&&(Ke=Y(Xt),ae=Xt.tag,Xt!==Ke||ae!==5&&ae!==27&&ae!==6)&&(Xt=null)):(lt=null,Xt=V),lt!==Xt)){if(ae=rp,gt="onMouseLeave",K="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ae=op,gt="onPointerLeave",K="onPointerEnter",G="pointer"),Ke=lt==null?it:W(lt),$=Xt==null?it:W(Xt),it=new ae(gt,G+"leave",lt,a,ft),it.target=Ke,it.relatedTarget=$,gt=null,Ii(ft)===V&&(ae=new ae(K,G+"enter",Xt,a,ft),ae.target=$,ae.relatedTarget=Ke,gt=ae),Ke=gt,lt&&Xt)e:{for(ae=lt,K=Xt,G=0,$=ae;$;$=rs($))G++;for($=0,gt=K;gt;gt=rs(gt))$++;for(;0<G-$;)ae=rs(ae),G--;for(;0<$-G;)K=rs(K),$--;for(;G--;){if(ae===K||K!==null&&ae===K.alternate)break e;ae=rs(ae),K=rs(K)}ae=null}else ae=null;lt!==null&&Vg(yt,it,lt,ae,!1),Xt!==null&&Ke!==null&&Vg(yt,Ke,Xt,ae,!0)}}t:{if(it=V?W(V):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var Gt=mp;else if(dp(it))if(gp)Gt=uy;else{Gt=ly;var pe=oy}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?V&&tu(V.elementType)&&(Gt=mp):Gt=cy;if(Gt&&(Gt=Gt(e,V))){pp(yt,Gt,a,ft);break t}pe&&pe(e,it,V),e==="focusout"&&V&&it.type==="number"&&V.memoizedProps.value!=null&&En(it,"number",it.value)}switch(pe=V?W(V):window,e){case"focusin":(dp(pe)||pe.contentEditable==="true")&&(Br=pe,pu=V,$s=null);break;case"focusout":$s=pu=Br=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,bp(yt,a,ft);break;case"selectionchange":if(dy)break;case"keydown":case"keyup":bp(yt,a,ft)}var Yt;if(uu)t:{switch(e){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else zr?fp(e,a)&&($t="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(lp&&a.locale!=="ko"&&(zr||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&zr&&(Yt=ip()):(fa=ft,ru="value"in fa?fa.value:fa.textContent,zr=!0)),pe=jl(V,$t),0<pe.length&&($t=new sp($t,e,null,a,ft),yt.push({event:$t,listeners:pe}),Yt?$t.data=Yt:(Yt=hp(a),Yt!==null&&($t.data=Yt)))),(Yt=ny?iy(e,a):ay(e,a))&&($t=jl(V,"onBeforeInput"),0<$t.length&&(pe=new sp("onBeforeInput","beforeinput",null,a,ft),yt.push({event:pe,listeners:$t}),pe.data=Yt)),Zy(yt,e,V,a,ft)}Hg(yt,n)})}function wo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Ws(e,a),u!=null&&o.unshift(wo(e,u,h)),u=Ws(e,n),u!=null&&o.push(wo(e,u,h))),e=e.return}return o}function rs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Vg(e,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var R=a,P=R.alternate,V=R.stateNode;if(R=R.tag,P!==null&&P===o)break;R!==5&&R!==26&&R!==27||V===null||(P=V,u?(V=Ws(a,h),V!=null&&M.unshift(wo(a,V,P))):u||(V=Ws(a,h),V!=null&&M.push(wo(a,V,P)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var $y=/\r\n?/g,tx=/\u0000|\uFFFD/g;function kg(e){return(typeof e=="string"?e:""+e).replace($y,`
`).replace(tx,"")}function Xg(e,n){return n=kg(n),kg(e)===n}function Zl(){}function Pe(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||In(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&In(e,""+o);break;case"className":Ge(e,"class",o);break;case"tabIndex":Ge(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ge(e,a,o);break;case"style":tp(e,o,h);break;case"data":if(n!=="object"){Ge(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",u.name,u,null),Pe(e,n,"formEncType",u.formEncType,u,null),Pe(e,n,"formMethod",u.formMethod,u,null),Pe(e,n,"formTarget",u.formTarget,u,null)):(Pe(e,n,"encType",u.encType,u,null),Pe(e,n,"method",u.method,u,null),Pe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=sl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Zl);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),ye(e,"popover",o);break;case"xlinkActuate":Te(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Te(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Te(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Te(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Te(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Te(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Te(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ye(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=C0.get(a)||a,ye(e,a,o))}}function Ff(e,n,a,o,u,h){switch(a){case"style":tp(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?In(e,o):(typeof o=="number"||typeof o=="bigint")&&In(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Et.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ye(e,a,o)}}}function Mn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,h,M,a,null)}}u&&Pe(e,n,"srcSet",a.srcSet,a,null),o&&Pe(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var R=h=M=u=null,P=null,V=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":M=ft;break;case"checked":P=ft;break;case"defaultChecked":V=ft;break;case"value":h=ft;break;case"defaultValue":R=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Pe(e,n,o,ft,a,null)}}Ln(e,h,R,P,V,M,u,!1),xe(e);return;case"select":Se("invalid",e),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":M=R;break;case"multiple":o=R;default:Pe(e,n,u,R,a,null)}n=h,a=M,e.multiple=!!o,n!=null?Ye(e,!!o,n,!1):a!=null&&Ye(e,!!o,a,!0);return;case"textarea":Se("invalid",e),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(R=a[M],R!=null))switch(M){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Pe(e,n,M,R,a,null)}Nr(e,o,u,h),xe(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pe(e,n,P,o,a,null)}return;case"dialog":Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<Ro.length;o++)Se(Ro[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(e,n,V,o,a,null)}return;default:if(tu(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Ff(e,n,ft,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Pe(e,n,R,o,a,null))}function ex(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,R=null,P=null,V=null,ft=null;for(lt in a){var yt=a[lt];if(a.hasOwnProperty(lt)&&yt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":P=yt;default:o.hasOwnProperty(lt)||Pe(e,n,lt,null,o,yt)}}for(var it in o){var lt=o[it];if(yt=a[it],o.hasOwnProperty(it)&&(lt!=null||yt!=null))switch(it){case"type":h=lt;break;case"name":u=lt;break;case"checked":V=lt;break;case"defaultChecked":ft=lt;break;case"value":M=lt;break;case"defaultValue":R=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==yt&&Pe(e,n,it,lt,o,yt)}}Ne(e,M,R,P,V,ft,h,u);return;case"select":lt=M=R=it=null;for(h in a)if(P=a[h],a.hasOwnProperty(h)&&P!=null)switch(h){case"value":break;case"multiple":lt=P;default:o.hasOwnProperty(h)||Pe(e,n,h,null,o,P)}for(u in o)if(h=o[u],P=a[u],o.hasOwnProperty(u)&&(h!=null||P!=null))switch(u){case"value":it=h;break;case"defaultValue":R=h;break;case"multiple":M=h;default:h!==P&&Pe(e,n,u,h,o,P)}n=R,a=M,o=lt,it!=null?Ye(e,!!a,it,!1):!!o!=!!a&&(n!=null?Ye(e,!!a,n,!0):Ye(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Pe(e,n,R,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":it=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Pe(e,n,M,u,o,h)}yn(e,it,lt);return;case"option":for(var Xt in a)if(it=a[Xt],a.hasOwnProperty(Xt)&&it!=null&&!o.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:Pe(e,n,Xt,null,o,it)}for(P in o)if(it=o[P],lt=a[P],o.hasOwnProperty(P)&&it!==lt&&(it!=null||lt!=null))switch(P){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Pe(e,n,P,it,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)it=a[ae],a.hasOwnProperty(ae)&&it!=null&&!o.hasOwnProperty(ae)&&Pe(e,n,ae,null,o,it);for(V in o)if(it=o[V],lt=a[V],o.hasOwnProperty(V)&&it!==lt&&(it!=null||lt!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Pe(e,n,V,it,o,lt)}return;default:if(tu(n)){for(var Ke in a)it=a[Ke],a.hasOwnProperty(Ke)&&it!==void 0&&!o.hasOwnProperty(Ke)&&Ff(e,n,Ke,void 0,o,it);for(ft in o)it=o[ft],lt=a[ft],!o.hasOwnProperty(ft)||it===lt||it===void 0&&lt===void 0||Ff(e,n,ft,it,o,lt);return}}for(var K in a)it=a[K],a.hasOwnProperty(K)&&it!=null&&!o.hasOwnProperty(K)&&Pe(e,n,K,null,o,it);for(yt in o)it=o[yt],lt=a[yt],!o.hasOwnProperty(yt)||it===lt||it==null&&lt==null||Pe(e,n,yt,it,o,lt)}var Hf=null,Gf=null;function Kl(e){return e.nodeType===9?e:e.ownerDocument}function Wg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Vf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kf=null;function nx(){var e=window.event;return e&&e.type==="popstate"?e===kf?!1:(kf=e,!0):(kf=null,!1)}var Yg=typeof setTimeout=="function"?setTimeout:void 0,ix=typeof clearTimeout=="function"?clearTimeout:void 0,jg=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof jg<"u"?function(e){return jg.resolve(null).then(e).catch(rx)}:Yg;function rx(e){setTimeout(function(){throw e})}function Xf(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(o===0){e.removeChild(u),zo(n);return}o--}else a!=="$"&&a!=="$?"&&a!=="$!"||o++;a=u}while(a);zo(n)}function Wf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wf(a),Xs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function sx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ya])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function ox(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function Zg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Kg(e,n,a){switch(n=Kl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var li=new Map,Qg=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var $i=q.d;q.d={f:lx,r:cx,D:ux,C:fx,L:hx,m:dx,X:mx,S:px,M:gx};function lx(){var e=$i.f(),n=kl();return e||n}function cx(e){var n=w(e);n!==null&&n.tag===5&&n.type==="form"?bm(n):$i.r(e)}var ss=typeof document>"u"?null:document;function Jg(e,n,a){var o=ss;if(o&&typeof n=="string"&&n){var u=dn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Qg.has(u)||(Qg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Mn(n,"link",e),J(n),o.head.appendChild(n)))}}function ux(e){$i.D(e),Jg("dns-prefetch",e,null)}function fx(e,n){$i.C(e,n),Jg("preconnect",e,n)}function hx(e,n,a){$i.L(e,n,a);var o=ss;if(o&&e&&n){var u='link[rel="preload"][as="'+dn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+dn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+dn(a.imageSizes)+'"]')):u+='[href="'+dn(e)+'"]';var h=u;switch(n){case"style":h=os(e);break;case"script":h=ls(e)}li.has(h)||(e=A({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(h))||n==="script"&&o.querySelector(Do(h))||(n=o.createElement("link"),Mn(n,"link",e),J(n),o.head.appendChild(n)))}}function dx(e,n){$i.m(e,n);var a=ss;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+dn(o)+'"][href="'+dn(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=ls(e)}if(!li.has(h)&&(e=A({rel:"modulepreload",href:e},n),li.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(h)))return}o=a.createElement("link"),Mn(o,"link",e),J(o),a.head.appendChild(o)}}}function px(e,n,a){$i.S(e,n,a);var o=ss;if(o&&e){var u=tt(o).hoistableStyles,h=os(e);n=n||"default";var M=u.get(h);if(!M){var R={loading:0,preload:null};if(M=o.querySelector(Co(h)))R.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(h))&&qf(e,a);var P=M=o.createElement("link");J(P),Mn(P,"link",e),P._p=new Promise(function(V,ft){P.onload=V,P.onerror=ft}),P.addEventListener("load",function(){R.loading|=1}),P.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Jl(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:R},u.set(h,M)}}}function mx(e,n){$i.X(e,n);var a=ss;if(a&&e){var o=tt(a).hoistableScripts,u=ls(e),h=o.get(u);h||(h=a.querySelector(Do(u)),h||(e=A({src:e,async:!0},n),(n=li.get(u))&&Yf(e,n),h=a.createElement("script"),J(h),Mn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function gx(e,n){$i.M(e,n);var a=ss;if(a&&e){var o=tt(a).hoistableScripts,u=ls(e),h=o.get(u);h||(h=a.querySelector(Do(u)),h||(e=A({src:e,async:!0,type:"module"},n),(n=li.get(u))&&Yf(e,n),h=a.createElement("script"),J(h),Mn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function $g(e,n,a,o){var u=(u=re.current)?Ql(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=os(a.href),a=tt(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=os(a.href);var h=tt(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(Co(e)))&&!h._p&&(M.instance=h,M.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),h||_x(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ls(a),a=tt(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function os(e){return'href="'+dn(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function t_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function _x(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Mn(n,"link",a),J(n),e.head.appendChild(n))}function ls(e){return'[src="'+dn(e)+'"]'}function Do(e){return"script[async]"+e}function e_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+dn(a.href)+'"]');if(o)return n.instance=o,J(o),o;var u=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),J(o),Mn(o,"style",u),Jl(o,a.precedence,e),n.instance=o;case"stylesheet":u=os(a.href);var h=e.querySelector(Co(u));if(h)return n.state.loading|=4,n.instance=h,J(h),h;o=t_(a),(u=li.get(u))&&qf(o,u),h=(e.ownerDocument||e).createElement("link"),J(h);var M=h;return M._p=new Promise(function(R,P){M.onload=R,M.onerror=P}),Mn(h,"link",o),n.state.loading|=4,Jl(h,a.precedence,e),n.instance=h;case"script":return h=ls(a.src),(u=e.querySelector(Do(h)))?(n.instance=u,J(u),u):(o=a,(u=li.get(h))&&(o=A({},a),Yf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),J(u),Mn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Jl(o,a.precedence,e));return n.instance}function Jl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var R=o[M];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var $l=null;function n_(e,n,a){if($l===null){var o=new Map,u=$l=new Map;u.set(a,o)}else u=$l,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Ya]||h[rn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var R=o.get(M);R?R.push(h):o.set(M,[h])}}return o}function i_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function vx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function a_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Uo=null;function yx(){}function xx(e,n,a){if(Uo===null)throw Error(r(475));var o=Uo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=os(a.href),h=e.querySelector(Co(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=tc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,J(h);return}h=e.ownerDocument||e,a=t_(a),(u=li.get(u))&&qf(a,u),h=h.createElement("link"),J(h);var M=h;M._p=new Promise(function(R,P){M.onload=R,M.onerror=P}),Mn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=tc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Sx(){if(Uo===null)throw Error(r(475));var e=Uo;return e.stylesheets&&e.count===0&&jf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&jf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function tc(){if(this.count--,this.count===0){if(this.stylesheets)jf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ec=null;function jf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ec=new Map,n.forEach(Mx,e),ec=null,tc.call(e))}function Mx(e,n){if(!(n.state.loading&4)){var a=ec.get(e);if(a)var o=a.get(null);else{a=new Map,ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=tc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Lo={$$typeof:S,Provider:null,Consumer:null,_currentValue:mt,_currentValue2:mt,_threadCount:0};function Ex(e,n,a,o,u,h,M,R){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cn(0),this.hiddenUpdates=Cn(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function r_(e,n,a,o,u,h,M,R,P,V,ft,yt){return e=new Ex(e,n,a,M,R,P,V,yt),n=1,h===!0&&(n|=24),h=si(3,null,null,n),e.current=h,h.stateNode=e,n=Tu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},sf(h),e}function s_(e){return e?(e=Hr,e):Hr}function o_(e,n,a,o,u,h){u=s_(u),o.context===null?o.context=u:o.pendingContext=u,o=ya(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=xa(e,o,n),a!==null&&(On(a,e,n),mo(a,e,n))}function l_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Zf(e,n){l_(e,n),(e=e.alternate)&&l_(e,n)}function c_(e){if(e.tag===13){var n=ha(e,67108864);n!==null&&On(n,e,67108864),Zf(e,67108864)}}var nc=!0;function bx(e,n,a,o){var u=C.T;C.T=null;var h=q.p;try{q.p=2,Kf(e,n,a,o)}finally{q.p=h,C.T=u}}function Tx(e,n,a,o){var u=C.T;C.T=null;var h=q.p;try{q.p=8,Kf(e,n,a,o)}finally{q.p=h,C.T=u}}function Kf(e,n,a,o){if(nc){var u=Qf(o);if(u===null)If(e,n,o,ic,a),f_(e,o);else if(Rx(u,e,n,a,o))o.stopPropagation();else if(f_(e,o),n&4&&-1<Ax.indexOf(e)){for(;u!==null;){var h=w(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Dt(h.pendingLanes);if(M!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;M;){var P=1<<31-Zt(M);R.entanglements[1]|=P,M&=~P}Di(h),(We&6)===0&&(Hl=dt()+500,Ao(0))}}break;case 13:R=ha(h,2),R!==null&&On(R,h,2),kl(),Zf(h,2)}if(h=Qf(o),h===null&&If(e,n,o,ic,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else If(e,n,o,null,a)}}function Qf(e){return e=nu(e),Jf(e)}var ic=null;function Jf(e){if(ic=null,e=Ii(e),e!==null){var n=Y(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=xt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ic=e,null}function u_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case pt:return 2;case Vt:return 8;case Ut:case It:return 32;case _e:return 268435456;default:return 32}default:return 32}}var $f=!1,Ra=null,wa=null,Ca=null,No=new Map,Oo=new Map,Da=[],Ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f_(e,n){switch(e){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(n.pointerId)}}function Po(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=w(n),n!==null&&c_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Rx(e,n,a,o,u){switch(n){case"focusin":return Ra=Po(Ra,e,n,a,o,u),!0;case"dragenter":return wa=Po(wa,e,n,a,o,u),!0;case"mouseover":return Ca=Po(Ca,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return No.set(h,Po(No.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Oo.set(h,Po(Oo.get(h)||null,e,n,a,o,u)),!0}return!1}function h_(e){var n=Ii(e.target);if(n!==null){var a=Y(n);if(a!==null){if(n=a.tag,n===13){if(n=xt(a),n!==null){e.blockedOn=n,al(e.priority,function(){if(a.tag===13){var o=Zn(),u=ha(a,o);u!==null&&On(u,a,o),Zf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);eu=o,a.target.dispatchEvent(o),eu=null}else return n=w(a),n!==null&&c_(n),e.blockedOn=a,!1;n.shift()}return!0}function d_(e,n,a){ac(e)&&a.delete(n)}function wx(){$f=!1,Ra!==null&&ac(Ra)&&(Ra=null),wa!==null&&ac(wa)&&(wa=null),Ca!==null&&ac(Ca)&&(Ca=null),No.forEach(d_),Oo.forEach(d_)}function rc(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,wx)))}var sc=null;function p_(e){sc!==e&&(sc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){sc===e&&(sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Jf(o||a)===null)continue;break}var h=w(a);h!==null&&(e.splice(n,3),n-=3,Gu(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function zo(e){function n(P){return rc(P,e)}Ra!==null&&rc(Ra,e),wa!==null&&rc(wa,e),Ca!==null&&rc(Ca,e),No.forEach(n),Oo.forEach(n);for(var a=0;a<Da.length;a++){var o=Da[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)h_(a),a.blockedOn===null&&Da.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[sn]||null;if(typeof h=="function")M||p_(a);else if(M){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[sn]||null)R=M.formAction;else if(Jf(u)!==null)continue}else R=M.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),p_(a)}}}function th(e){this._internalRoot=e}oc.prototype.render=th.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Zn();o_(a,o,e,n,null,null)},oc.prototype.unmount=th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&is(),o_(e.current,2,null,e,null,null),kl(),n[Bi]=null}};function oc(e){this._internalRoot=e}oc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ks();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,e),a===0&&h_(e)}};var m_=t.version;if(m_!=="19.0.0")throw Error(r(527,m_,"19.0.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=at(n),e=e!==null?Tt(e):null,e=e===null?null:e.stateNode,e};var Cx={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:Ii,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lc.isDisabled&&lc.supportsFiber)try{Qt=lc.inject(Cx),kt=lc}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Lm,h=Nm,M=Om,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=r_(e,1,!1,null,null,a,o,u,h,M,R,null),e[Bi]=n.current,Bf(e.nodeType===8?e.parentNode:e),new th(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=Lm,M=Nm,R=Om,P=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),n=r_(e,1,!0,n,a??null,o,u,h,M,R,P,V),n.context=s_(null),a=n.current,o=Zn(),u=ya(o),u.callback=null,xa(a,u,o),n.current.lanes=o,Dn(n,o),Di(n),e[Bi]=n.current,Bf(e),new oc(n)},Io.version="19.0.0",Io}var T_;function Fx(){if(T_)return ih.exports;T_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),ih.exports=Ix(),ih.exports}var Hx=Fx(),Fo={},A_;function Gx(){if(A_)return Fo;A_=1,Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.parse=f,Fo.serialize=p;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function f(y,S){const E=new c,b=y.length;if(b<2)return E;const x=(S==null?void 0:S.decode)||g;let _=0;do{const N=y.indexOf("=",_);if(N===-1)break;const D=y.indexOf(";",_),U=D===-1?b:D;if(N>U){_=y.lastIndexOf(";",N-1)+1;continue}const z=d(y,_,N),I=m(y,N,z),B=y.slice(z,I);if(E[B]===void 0){let j=d(y,N+1,U),C=m(y,U,j);const A=x(y.slice(j,C));E[B]=A}_=U+1}while(_<b);return E}function d(y,S,E){do{const b=y.charCodeAt(S);if(b!==32&&b!==9)return S}while(++S<E);return E}function m(y,S,E){for(;S>E;){const b=y.charCodeAt(--S);if(b!==32&&b!==9)return S+1}return E}function p(y,S,E){const b=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(y))throw new TypeError(`argument name is invalid: ${y}`);const x=b(S);if(!t.test(x))throw new TypeError(`argument val is invalid: ${S}`);let _=y+"="+x;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!v(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function v(y){return l.call(y)==="[object Date]"}return Fo}Gx();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var R_="popstate";function Vx(s={}){function t(r,l){let{pathname:c,search:f,hash:d}=r.location;return Hh("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:jo(l)}return Xx(t,i,null,s)}function ke(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Mi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kx(){return Math.random().toString(36).substring(2,10)}function w_(s,t){return{usr:s.state,key:s.key,idx:t}}function Hh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?zs(t):t,state:i,key:t&&t.key||r||kx()}}function jo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function zs(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function Xx(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,d="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function v(){d="POP";let x=g(),_=x==null?null:x-p;p=x,m&&m({action:d,location:b.location,delta:_})}function y(x,_){d="PUSH";let N=Hh(b.location,x,_);p=g()+1;let D=w_(N,p),U=b.createHref(N);try{f.pushState(D,"",U)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;l.location.assign(U)}c&&m&&m({action:d,location:b.location,delta:1})}function S(x,_){d="REPLACE";let N=Hh(b.location,x,_);p=g();let D=w_(N,p),U=b.createHref(N);f.replaceState(D,"",U),c&&m&&m({action:d,location:b.location,delta:0})}function E(x){let _=l.location.origin!=="null"?l.location.origin:l.location.href,N=typeof x=="string"?x:jo(x);return N=N.replace(/ $/,"%20"),ke(_,`No window.location.(origin|href) available to create URL for href: ${N}`),new URL(N,_)}let b={get action(){return d},get location(){return s(l,f)},listen(x){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(R_,v),m=x,()=>{l.removeEventListener(R_,v),m=null}},createHref(x){return t(l,x)},createURL:E,encodeLocation(x){let _=E(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:S,go(x){return f.go(x)}};return b}function Bv(s,t,i="/"){return Wx(s,t,i,!1)}function Wx(s,t,i,r){let l=typeof t=="string"?zs(t):t,c=ka(l.pathname||"/",i);if(c==null)return null;let f=Iv(s);qx(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=iS(c);d=eS(f[m],p,r)}return d}function Iv(s,t=[],i=[],r=""){let l=(c,f,d)=>{let m={relativePath:d===void 0?c.path||"":d,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};m.relativePath.startsWith("/")&&(ke(m.relativePath.startsWith(r),`Absolute route path "${m.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(r.length));let p=la([r,m.relativePath]),g=i.concat(m);c.children&&c.children.length>0&&(ke(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Iv(c.children,t,g,p)),!(c.path==null&&!c.index)&&t.push({path:p,score:$x(p,c.index),routesMeta:g})};return s.forEach((c,f)=>{var d;if(c.path===""||!((d=c.path)!=null&&d.includes("?")))l(c,f);else for(let m of Fv(c.path))l(c,f,m)}),t}function Fv(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=Fv(r.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>s.startsWith("/")&&m===""?"/":m)}function qx(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:tS(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Yx=/^:[\w-]+$/,jx=3,Zx=2,Kx=1,Qx=10,Jx=-2,C_=s=>s==="*";function $x(s,t){let i=s.split("/"),r=i.length;return i.some(C_)&&(r+=Jx),t&&(r+=Zx),i.filter(l=>!C_(l)).reduce((l,c)=>l+(Yx.test(c)?jx:c===""?Kx:Qx),r)}function tS(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function eS(s,t,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],p=d===r.length-1,g=c==="/"?t:t.slice(c.length)||"/",v=Vc({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),y=m.route;if(!v&&p&&i&&!r[r.length-1].route.index&&(v=Vc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:la([c,v.pathname]),pathnameBase:oS(la([c,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(c=la([c,v.pathnameBase]))}return f}function Vc(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=nS(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},y)=>{if(g==="*"){let E=d[y]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const S=d[y];return v&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function nS(s,t=!1,i=!0){Mi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function iS(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ka(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function aS(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?zs(s):s;return{pathname:i?i.startsWith("/")?i:rS(i,t):t,search:lS(r),hash:cS(l)}}function rS(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function oh(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sS(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Dd(s){let t=sS(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Ud(s,t,i,r=!1){let l;typeof s=="string"?l=zs(s):(l={...s},ke(!l.pathname||!l.pathname.includes("?"),oh("?","pathname","search",l)),ke(!l.pathname||!l.pathname.includes("#"),oh("#","pathname","hash",l)),ke(!l.search||!l.search.includes("#"),oh("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let v=t.length-1;if(!r&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),v-=1;l.pathname=y.join("/")}d=v>=0?t[v]:"/"}let m=aS(l,d),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var la=s=>s.join("/").replace(/\/\/+/g,"/"),oS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),lS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,cS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function uS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Hv=["POST","PUT","PATCH","DELETE"];new Set(Hv);var fS=["GET",...Hv];new Set(fS);var Bs=ct.createContext(null);Bs.displayName="DataRouter";var Yc=ct.createContext(null);Yc.displayName="DataRouterState";var Gv=ct.createContext({isTransitioning:!1});Gv.displayName="ViewTransition";var hS=ct.createContext(new Map);hS.displayName="Fetchers";var dS=ct.createContext(null);dS.displayName="Await";var Ei=ct.createContext(null);Ei.displayName="Navigation";var Qo=ct.createContext(null);Qo.displayName="Location";var bi=ct.createContext({outlet:null,matches:[],isDataRoute:!1});bi.displayName="Route";var Ld=ct.createContext(null);Ld.displayName="RouteError";function pS(s,{relative:t}={}){ke(Is(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=ct.useContext(Ei),{hash:l,pathname:c,search:f}=Jo(s,{relative:t}),d=c;return i!=="/"&&(d=c==="/"?i:la([i,c])),r.createHref({pathname:d,search:f,hash:l})}function Is(){return ct.useContext(Qo)!=null}function qa(){return ke(Is(),"useLocation() may be used only in the context of a <Router> component."),ct.useContext(Qo).location}var Vv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function kv(s){ct.useContext(Ei).static||ct.useLayoutEffect(s)}function Fs(){let{isDataRoute:s}=ct.useContext(bi);return s?wS():mS()}function mS(){ke(Is(),"useNavigate() may be used only in the context of a <Router> component.");let s=ct.useContext(Bs),{basename:t,navigator:i}=ct.useContext(Ei),{matches:r}=ct.useContext(bi),{pathname:l}=qa(),c=JSON.stringify(Dd(r)),f=ct.useRef(!1);return kv(()=>{f.current=!0}),ct.useCallback((m,p={})=>{if(Mi(f.current,Vv),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=Ud(m,JSON.parse(c),l,p.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:la([t,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[t,i,c,l,s])}ct.createContext(null);function gS(){let{matches:s}=ct.useContext(bi),t=s[s.length-1];return t?t.params:{}}function Jo(s,{relative:t}={}){let{matches:i}=ct.useContext(bi),{pathname:r}=qa(),l=JSON.stringify(Dd(i));return ct.useMemo(()=>Ud(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function _S(s,t){return Xv(s,t)}function Xv(s,t,i,r){var N;ke(Is(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=ct.useContext(Ei),{matches:f}=ct.useContext(bi),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let D=v&&v.path||"";Wv(p,!v||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let y=qa(),S;if(t){let D=typeof t=="string"?zs(t):t;ke(g==="/"||((N=D.pathname)==null?void 0:N.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),S=D}else S=y;let E=S.pathname||"/",b=E;if(g!=="/"){let D=g.replace(/^\//,"").split("/");b="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let x=!c&&i&&i.matches&&i.matches.length>0?i.matches:Bv(s,{pathname:b});Mi(v||x!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Mi(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=MS(x&&x.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:la([g,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:la([g,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,i,r);return t&&_?ct.createElement(Qo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},_):_}function vS(){let s=RS(),t=uS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=ct.createElement(ct.Fragment,null,ct.createElement("p",null,"💿 Hey developer 👋"),ct.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ct.createElement("code",{style:c},"ErrorBoundary")," or"," ",ct.createElement("code",{style:c},"errorElement")," prop on your route.")),ct.createElement(ct.Fragment,null,ct.createElement("h2",null,"Unexpected Application Error!"),ct.createElement("h3",{style:{fontStyle:"italic"}},t),i?ct.createElement("pre",{style:l},i):null,f)}var yS=ct.createElement(vS,null),xS=class extends ct.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?ct.createElement(bi.Provider,{value:this.props.routeContext},ct.createElement(Ld.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function SS({routeContext:s,match:t,children:i}){let r=ct.useContext(Bs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ct.createElement(bi.Provider,{value:s},i)}function MS(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,c=i==null?void 0:i.errors;if(c!=null){let m=l.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);ke(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,m+1))}let f=!1,d=-1;if(i)for(let m=0;m<l.length;m++){let p=l[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=m),p.route.id){let{loaderData:g,errors:v}=i,y=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!v||v[p.route.id]===void 0);if(p.route.lazy||y){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((m,p,g)=>{let v,y=!1,S=null,E=null;i&&(v=c&&p.route.id?c[p.route.id]:void 0,S=p.route.errorElement||yS,f&&(d<0&&g===0?(Wv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,E=null):d===g&&(y=!0,E=p.route.hydrateFallbackElement||null)));let b=t.concat(l.slice(0,g+1)),x=()=>{let _;return v?_=S:y?_=E:p.route.Component?_=ct.createElement(p.route.Component,null):p.route.element?_=p.route.element:_=m,ct.createElement(SS,{match:p,routeContext:{outlet:m,matches:b,isDataRoute:i!=null},children:_})};return i&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?ct.createElement(xS,{location:i.location,revalidation:i.revalidation,component:S,error:v,children:x(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):x()},null)}function Nd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ES(s){let t=ct.useContext(Bs);return ke(t,Nd(s)),t}function bS(s){let t=ct.useContext(Yc);return ke(t,Nd(s)),t}function TS(s){let t=ct.useContext(bi);return ke(t,Nd(s)),t}function Od(s){let t=TS(s),i=t.matches[t.matches.length-1];return ke(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function AS(){return Od("useRouteId")}function RS(){var r;let s=ct.useContext(Ld),t=bS("useRouteError"),i=Od("useRouteError");return s!==void 0?s:(r=t.errors)==null?void 0:r[i]}function wS(){let{router:s}=ES("useNavigate"),t=Od("useNavigate"),i=ct.useRef(!1);return kv(()=>{i.current=!0}),ct.useCallback(async(l,c={})=>{Mi(i.current,Vv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...c}))},[s,t])}var D_={};function Wv(s,t,i){!t&&!D_[s]&&(D_[s]=!0,Mi(!1,i))}ct.memo(CS);function CS({routes:s,future:t,state:i}){return Xv(s,void 0,i,t)}function DS({to:s,replace:t,state:i,relative:r}){ke(Is(),"<Navigate> may be used only in the context of a <Router> component.");let{static:l}=ct.useContext(Ei);Mi(!l,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=ct.useContext(bi),{pathname:f}=qa(),d=Fs(),m=Ud(s,Dd(c),f,r==="path"),p=JSON.stringify(m);return ct.useEffect(()=>{d(JSON.parse(p),{replace:t,state:i,relative:r})},[d,p,r,t,i]),null}function qo(s){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function US({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){ke(!Is(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=ct.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=zs(i));let{pathname:m="/",search:p="",hash:g="",state:v=null,key:y="default"}=i,S=ct.useMemo(()=>{let E=ka(m,f);return E==null?null:{location:{pathname:E,search:p,hash:g,state:v,key:y},navigationType:r}},[f,m,p,g,v,y,r]);return Mi(S!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:ct.createElement(Ei.Provider,{value:d},ct.createElement(Qo.Provider,{children:t,value:S}))}function LS({children:s,location:t}){return _S(Gh(s),t)}function Gh(s,t=[]){let i=[];return ct.Children.forEach(s,(r,l)=>{if(!ct.isValidElement(r))return;let c=[...t,l];if(r.type===ct.Fragment){i.push.apply(i,Gh(r.props.children,c));return}ke(r.type===qo,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Gh(r.props.children,c)),i.push(f)}),i}var Nc="get",Oc="application/x-www-form-urlencoded";function jc(s){return s!=null&&typeof s.tagName=="string"}function NS(s){return jc(s)&&s.tagName.toLowerCase()==="button"}function OS(s){return jc(s)&&s.tagName.toLowerCase()==="form"}function PS(s){return jc(s)&&s.tagName.toLowerCase()==="input"}function zS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function BS(s,t){return s.button===0&&(!t||t==="_self")&&!zS(s)}var cc=null;function IS(){if(cc===null)try{new FormData(document.createElement("form"),0),cc=!1}catch{cc=!0}return cc}var FS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function lh(s){return s!=null&&!FS.has(s)?(Mi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Oc}"`),null):s}function HS(s,t){let i,r,l,c,f;if(OS(s)){let d=s.getAttribute("action");r=d?ka(d,t):null,i=s.getAttribute("method")||Nc,l=lh(s.getAttribute("enctype"))||Oc,c=new FormData(s)}else if(NS(s)||PS(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||d.getAttribute("action");if(r=m?ka(m,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Nc,l=lh(s.getAttribute("formenctype"))||lh(d.getAttribute("enctype"))||Oc,c=new FormData(d,s),!IS()){let{name:p,type:g,value:v}=s;if(g==="image"){let y=p?`${p}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else p&&c.append(p,v)}}else{if(jc(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Nc,r=null,l=Oc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}function Pd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function GS(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function VS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function kS(s,t,i){let r=await Promise.all(s.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await GS(c,i);return f.links?f.links():[]}return[]}));return YS(r.flat(1).filter(VS).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function U_(s,t,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>{var g;return i[p].pathname!==m.pathname||((g=i[p].route.path)==null?void 0:g.endsWith("*"))&&i[p].params["*"]!==m.params["*"]};return c==="assets"?t.filter((m,p)=>f(m,p)||d(m,p)):c==="data"?t.filter((m,p)=>{var v;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let y=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=i[0])==null?void 0:v.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function XS(s,t,{includeHydrateFallback:i}={}){return WS(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function WS(s){return[...new Set(s)]}function qS(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function YS(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let c=JSON.stringify(qS(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function jS(s){let t=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function ZS(){let s=ct.useContext(Bs);return Pd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function KS(){let s=ct.useContext(Yc);return Pd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var zd=ct.createContext(void 0);zd.displayName="FrameworkContext";function qv(){let s=ct.useContext(zd);return Pd(s,"You must render this element inside a <HydratedRouter> element"),s}function QS(s,t){let i=ct.useContext(zd),[r,l]=ct.useState(!1),[c,f]=ct.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=t,y=ct.useRef(null);ct.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let b=_=>{_.forEach(N=>{f(N.isIntersecting)})},x=new IntersectionObserver(b,{threshold:.5});return y.current&&x.observe(y.current),()=>{x.disconnect()}}},[s]),ct.useEffect(()=>{if(r){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[r]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,y,{}]:[c,y,{onFocus:Ho(d,S),onBlur:Ho(m,E),onMouseEnter:Ho(p,S),onMouseLeave:Ho(g,E),onTouchStart:Ho(v,S)}]:[!1,y,{}]}function Ho(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function JS({page:s,...t}){let{router:i}=ZS(),r=ct.useMemo(()=>Bv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?ct.createElement(tM,{page:s,matches:r,...t}):null}function $S(s){let{manifest:t,routeModules:i}=qv(),[r,l]=ct.useState([]);return ct.useEffect(()=>{let c=!1;return kS(s,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,t,i]),r}function tM({page:s,matches:t,...i}){let r=qa(),{manifest:l,routeModules:c}=qv(),{loaderData:f,matches:d}=KS(),m=ct.useMemo(()=>U_(s,t,d,l,r,"data"),[s,t,d,l,r]),p=ct.useMemo(()=>U_(s,t,d,l,r,"assets"),[s,t,d,l,r]),g=ct.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let S=new Set,E=!1;if(t.forEach(x=>{var N;let _=l.routes[x.route.id];!_||!_.hasLoader||(!m.some(D=>D.route.id===x.route.id)&&x.route.id in f&&((N=c[x.route.id])!=null&&N.shouldRevalidate)||_.hasClientLoader?E=!0:S.add(x.route.id))}),S.size===0)return[];let b=jS(s);return E&&S.size>0&&b.searchParams.set("_routes",t.filter(x=>S.has(x.route.id)).map(x=>x.route.id).join(",")),[b.pathname+b.search]},[f,r,l,m,t,s,c]),v=ct.useMemo(()=>XS(p,l),[p,l]),y=$S(p);return ct.createElement(ct.Fragment,null,g.map(S=>ct.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...i})),v.map(S=>ct.createElement("link",{key:S,rel:"modulepreload",href:S,...i})),y.map(({key:S,link:E})=>ct.createElement("link",{key:S,...E})))}function eM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var Yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Yv&&(window.__reactRouterVersion="7.2.0")}catch{}function nM({basename:s,children:t,window:i}){let r=ct.useRef();r.current==null&&(r.current=Vx({window:i,v5Compat:!0}));let l=r.current,[c,f]=ct.useState({action:l.action,location:l.location}),d=ct.useCallback(m=>{ct.startTransition(()=>f(m))},[f]);return ct.useLayoutEffect(()=>l.listen(d),[l,d]),ct.createElement(US,{basename:s,children:t,location:c.location,navigationType:c.action,navigator:l})}var jv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kc=ct.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:d,target:m,to:p,preventScrollReset:g,viewTransition:v,...y},S){let{basename:E}=ct.useContext(Ei),b=typeof p=="string"&&jv.test(p),x,_=!1;if(typeof p=="string"&&b&&(x=p,Yv))try{let C=new URL(window.location.href),A=p.startsWith("//")?new URL(C.protocol+p):new URL(p),H=ka(A.pathname,E);A.origin===C.origin&&H!=null?p=H+A.search+A.hash:_=!0}catch{Mi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=pS(p,{relative:l}),[D,U,z]=QS(r,y),I=sM(p,{replace:f,state:d,target:m,preventScrollReset:g,relative:l,viewTransition:v});function B(C){t&&t(C),C.defaultPrevented||I(C)}let j=ct.createElement("a",{...y,...z,href:x||N,onClick:_||c?t:B,ref:eM(S,U),target:m,"data-discover":!b&&i==="render"?"true":void 0});return D&&!b?ct.createElement(ct.Fragment,null,j,ct.createElement(JS,{page:N})):j});kc.displayName="Link";var iM=ct.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...p},g){let v=Jo(f,{relative:p.relative}),y=qa(),S=ct.useContext(Yc),{navigator:E,basename:b}=ct.useContext(Ei),x=S!=null&&fM(v)&&d===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,N=y.pathname,D=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(N=N.toLowerCase(),D=D?D.toLowerCase():null,_=_.toLowerCase()),D&&b&&(D=ka(D,b)||D);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let z=N===_||!l&&N.startsWith(_)&&N.charAt(U)==="/",I=D!=null&&(D===_||!l&&D.startsWith(_)&&D.charAt(_.length)==="/"),B={isActive:z,isPending:I,isTransitioning:x},j=z?t:void 0,C;typeof r=="function"?C=r(B):C=[r,z?"active":null,I?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let A=typeof c=="function"?c(B):c;return ct.createElement(kc,{...p,"aria-current":j,className:C,ref:g,style:A,to:f,viewTransition:d},typeof m=="function"?m(B):m)});iM.displayName="NavLink";var aM=ct.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Nc,action:d,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,...y},S)=>{let E=cM(),b=uM(d,{relative:p}),x=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&jv.test(d),N=D=>{if(m&&m(D),D.defaultPrevented)return;D.preventDefault();let U=D.nativeEvent.submitter,z=(U==null?void 0:U.getAttribute("formmethod"))||f;E(U||D.currentTarget,{fetcherKey:t,method:z,navigate:i,replace:l,state:c,relative:p,preventScrollReset:g,viewTransition:v})};return ct.createElement("form",{ref:S,method:x,action:b,onSubmit:r?m:N,...y,"data-discover":!_&&s==="render"?"true":void 0})});aM.displayName="Form";function rM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zv(s){let t=ct.useContext(Bs);return ke(t,rM(s)),t}function sM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=Fs(),m=qa(),p=Jo(s,{relative:c});return ct.useCallback(g=>{if(BS(g,t)){g.preventDefault();let v=i!==void 0?i:jo(m)===jo(p);d(s,{replace:v,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[m,d,p,i,r,t,s,l,c,f])}var oM=0,lM=()=>`__${String(++oM)}__`;function cM(){let{router:s}=Zv("useSubmit"),{basename:t}=ct.useContext(Ei),i=AS();return ct.useCallback(async(r,l={})=>{let{action:c,method:f,encType:d,formData:m,body:p}=HS(r,t);if(l.navigate===!1){let g=l.fetcherKey||lM();await s.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function uM(s,{relative:t}={}){let{basename:i}=ct.useContext(Ei),r=ct.useContext(bi);ke(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...Jo(s||".",{relative:t})},f=qa();if(s==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:la([i,c.pathname])),jo(c)}function fM(s,t={}){let i=ct.useContext(Gv);ke(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Zv("useViewTransitionState"),l=Jo(s,{relative:t.relative});if(!i.isTransitioning)return!1;let c=ka(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ka(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Vc(l.pathname,f)!=null||Vc(l.pathname,c)!=null}new TextEncoder;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bd="174",Ts={ROTATE:0,DOLLY:1,PAN:2},Es={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hM=0,L_=1,dM=2,Kv=1,pM=2,ra=3,Xa=0,kn=1,Li=2,Ga=0,As=1,N_=2,O_=3,P_=4,mM=5,Sr=100,gM=101,_M=102,vM=103,yM=104,xM=200,SM=201,MM=202,EM=203,Vh=204,kh=205,bM=206,TM=207,AM=208,RM=209,wM=210,CM=211,DM=212,UM=213,LM=214,Xh=0,Wh=1,qh=2,Cs=3,Yh=4,jh=5,Zh=6,Kh=7,Id=0,NM=1,OM=2,Va=0,PM=1,zM=2,BM=3,IM=4,FM=5,HM=6,GM=7,Qv=300,Ds=301,Us=302,Qh=303,Jh=304,Zc=306,$h=1e3,Er=1001,td=1002,Si=1003,VM=1004,uc=1005,Ni=1006,ch=1007,br=1008,ua=1009,Jv=1010,$v=1011,Zo=1012,Fd=1013,Ar=1014,sa=1015,$o=1016,Hd=1017,Gd=1018,Ls=1020,t0=35902,e0=1021,n0=1022,xi=1023,i0=1024,a0=1025,Rs=1026,Ns=1027,r0=1028,Vd=1029,s0=1030,kd=1031,Xd=1033,Pc=33776,zc=33777,Bc=33778,Ic=33779,ed=35840,nd=35841,id=35842,ad=35843,rd=36196,sd=37492,od=37496,ld=37808,cd=37809,ud=37810,fd=37811,hd=37812,dd=37813,pd=37814,md=37815,gd=37816,_d=37817,vd=37818,yd=37819,xd=37820,Sd=37821,Fc=36492,Md=36494,Ed=36495,o0=36283,bd=36284,Td=36285,Ad=36286,kM=3200,XM=3201,l0=0,WM=1,Ha="",ui="srgb",Os="srgb-linear",Xc="linear",ze="srgb",cs=7680,z_=519,qM=512,YM=513,jM=514,c0=515,ZM=516,KM=517,QM=518,JM=519,B_=35044,I_="300 es",oa=2e3,Wc=2001;class Cr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hc=Math.PI/180,qc=180/Math.PI;function tl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function ge(s,t,i){return Math.max(t,Math.min(i,s))}function $M(s,t){return(s%t+t)%t}function uh(s,t,i){return(1-i)*s+i*t}function Go(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const tE={DEG2RAD:Hc};class oe{constructor(t=0,i=0){oe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ge(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(t,i,r,l,c,f,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p)}set(t,i,r,l,c,f,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],g=r[4],v=r[7],y=r[2],S=r[5],E=r[8],b=l[0],x=l[3],_=l[6],N=l[1],D=l[4],U=l[7],z=l[2],I=l[5],B=l[8];return c[0]=f*b+d*N+m*z,c[3]=f*x+d*D+m*I,c[6]=f*_+d*U+m*B,c[1]=p*b+g*N+v*z,c[4]=p*x+g*D+v*I,c[7]=p*_+g*U+v*B,c[2]=y*b+S*N+E*z,c[5]=y*x+S*D+E*I,c[8]=y*_+S*U+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*d*p-r*c*g+r*d*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=g*f-d*p,y=d*m-g*c,S=p*c-f*m,E=i*v+r*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=v*b,t[1]=(l*p-g*r)*b,t[2]=(d*r-l*f)*b,t[3]=y*b,t[4]=(g*i-l*m)*b,t[5]=(l*c-d*i)*b,t[6]=S*b,t[7]=(r*m-p*i)*b,t[8]=(f*i-r*c)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(fh.makeScale(t,i)),this}rotate(t){return this.premultiply(fh.makeRotation(-t)),this}translate(t,i){return this.premultiply(fh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fh=new ue;function u0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ko(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function eE(){const s=Ko("canvas");return s.style.display="block",s}const F_={};function yr(s){s in F_||(F_[s]=!0,console.warn(s))}function nE(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function iE(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function aE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const H_=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G_=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rE(){const s={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ze&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ze&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?Xc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Os]:{primaries:t,whitePoint:r,transfer:Xc,toXYZ:H_,fromXYZ:G_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:H_,fromXYZ:G_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const we=rE();function ca(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let us;class sE{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{us===void 0&&(us=Ko("canvas")),us.width=t.width,us.height=t.height;const r=us.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=us}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ko("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ca(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ca(i[r]/255)*255):i[r]=ca(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oE=0;class Wd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oE++}),this.uuid=tl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(hh(l[f].image)):c.push(hh(l[f]))}else c=hh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function hh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lE=0;class zn extends Cr{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=Er,l=Er,c=Ni,f=br,d=xi,m=ua,p=zn.DEFAULT_ANISOTROPY,g=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=tl(),this.name="",this.source=new Wd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $h:t.x=t.x-Math.floor(t.x);break;case Er:t.x=t.x<0?0:1;break;case td:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $h:t.y=t.y-Math.floor(t.y);break;case Er:t.y=t.y<0?0:1;break;case td:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Qv;zn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,r=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],v=m[8],y=m[1],S=m[5],E=m[9],b=m[2],x=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(v-b)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+b)<.1&&Math.abs(E+x)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,U=(S+1)/2,z=(_+1)/2,I=(g+y)/4,B=(v+b)/4,j=(E+x)/4;return D>U&&D>z?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=I/r,c=B/r):U>z?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=I/l,c=j/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=B/c,l=j/c),this.set(r,l,c,i),this}let N=Math.sqrt((x-E)*(x-E)+(v-b)*(v-b)+(y-g)*(y-g));return Math.abs(N)<.001&&(N=1),this.x=(x-E)/N,this.y=(v-b)/N,this.z=(y-g)/N,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this.w=ge(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this.w=ge(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cE extends Cr{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new zn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Wd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends cE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class f0 extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uE extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const y=c[f+0],S=c[f+1],E=c[f+2],b=c[f+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=y,t[i+1]=S,t[i+2]=E,t[i+3]=b;return}if(v!==b||m!==y||p!==S||g!==E){let x=1-d;const _=m*y+p*S+g*E+v*b,N=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const z=Math.sqrt(D),I=Math.atan2(z,_*N);x=Math.sin(x*I)/z,d=Math.sin(d*I)/z}const U=d*N;if(m=m*x+y*U,p=p*x+S*U,g=g*x+E*U,v=v*x+b*U,x===1-d){const z=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=z,p*=z,g*=z,v*=z}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[f],y=c[f+1],S=c[f+2],E=c[f+3];return t[i]=d*E+g*v+m*S-p*y,t[i+1]=m*E+g*y+p*v-d*S,t[i+2]=p*E+g*S+d*y-m*v,t[i+3]=g*E-d*v-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),v=d(c/2),y=m(r/2),S=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=y*g*v+p*S*E,this._y=p*S*v-y*g*E,this._z=p*g*E+y*S*v,this._w=p*g*v-y*S*E;break;case"YXZ":this._x=y*g*v+p*S*E,this._y=p*S*v-y*g*E,this._z=p*g*E-y*S*v,this._w=p*g*v+y*S*E;break;case"ZXY":this._x=y*g*v-p*S*E,this._y=p*S*v+y*g*E,this._z=p*g*E+y*S*v,this._w=p*g*v-y*S*E;break;case"ZYX":this._x=y*g*v-p*S*E,this._y=p*S*v+y*g*E,this._z=p*g*E-y*S*v,this._w=p*g*v+y*S*E;break;case"YZX":this._x=y*g*v+p*S*E,this._y=p*S*v+y*g*E,this._z=p*g*E-y*S*v,this._w=p*g*v-y*S*E;break;case"XZY":this._x=y*g*v-p*S*E,this._y=p*S*v-y*g*E,this._z=p*g*E+y*S*v,this._w=p*g*v+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],v=i[10],y=r+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ge(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-r*p,this._z=c*g+f*p+r*m-l*d,this._w=f*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),v=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=f*v+this._w*y,this._x=r*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,r=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(V_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(V_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*r),g=2*(d*i-c*l),v=2*(c*r-f*i);return this.x=i+m*p+f*v-d*g,this.y=r+m*g+d*p-c*v,this.z=l+m*v+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ge(this.x,t.x,i.x),this.y=ge(this.y,t.y,i.y),this.z=ge(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ge(this.x,t,i),this.y=ge(this.y,t,i),this.z=ge(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ge(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-r*m,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return dh.copy(this).projectOnVector(t),this.sub(dh)}reflect(t){return this.sub(dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ge(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dh=new et,V_=new wr;class el{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,gi):gi.fromBufferAttribute(c,f),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fc.copy(r.boundingBox)),fc.applyMatrix4(t.matrixWorld),this.union(fc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vo),hc.subVectors(this.max,Vo),fs.subVectors(t.a,Vo),hs.subVectors(t.b,Vo),ds.subVectors(t.c,Vo),La.subVectors(hs,fs),Na.subVectors(ds,hs),dr.subVectors(fs,ds);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-dr.z,dr.y,La.z,0,-La.x,Na.z,0,-Na.x,dr.z,0,-dr.x,-La.y,La.x,0,-Na.y,Na.x,0,-dr.y,dr.x,0];return!ph(i,fs,hs,ds,hc)||(i=[1,0,0,0,1,0,0,0,1],!ph(i,fs,hs,ds,hc))?!1:(dc.crossVectors(La,Na),i=[dc.x,dc.y,dc.z],ph(i,fs,hs,ds,hc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ta=[new et,new et,new et,new et,new et,new et,new et,new et],gi=new et,fc=new el,fs=new et,hs=new et,ds=new et,La=new et,Na=new et,dr=new et,Vo=new et,hc=new et,dc=new et,pr=new et;function ph(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){pr.fromArray(s,c);const d=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),m=t.dot(pr),p=i.dot(pr),g=r.dot(pr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const fE=new el,ko=new et,mh=new et;class qd{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):fE.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ko.subVectors(t,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ko,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ko.copy(t.center).add(mh)),this.expandByPoint(ko.copy(t.center).sub(mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ea=new et,gh=new et,pc=new et,Oa=new et,_h=new et,mc=new et,vh=new et;class Yd{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){gh.copy(t).add(i).multiplyScalar(.5),pc.copy(i).sub(t).normalize(),Oa.copy(this.origin).sub(gh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(pc),d=Oa.dot(this.direction),m=-Oa.dot(pc),p=Oa.lengthSq(),g=Math.abs(1-f*f);let v,y,S,E;if(g>0)if(v=f*m-d,y=f*d-m,E=c*g,v>=0)if(y>=-E)if(y<=E){const b=1/g;v*=b,y*=b,S=v*(v+f*y+2*d)+y*(f*v+y+2*m)+p}else y=c,v=Math.max(0,-(f*y+d)),S=-v*v+y*(y+2*m)+p;else y=-c,v=Math.max(0,-(f*y+d)),S=-v*v+y*(y+2*m)+p;else y<=-E?(v=Math.max(0,-(-f*c+d)),y=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+y*(y+2*m)+p):y<=E?(v=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(v=Math.max(0,-(f*c+d)),y=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+y*(y+2*m)+p);else y=f>0?-c:c,v=Math.max(0,-(f*y+d)),S=-v*v+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(gh).addScaledVector(pc,y),S}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(r=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(r=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(c=(t.min.y-y.y)*g,f=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,f=(t.min.y-y.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-y.z)*v,m=(t.max.z-y.z)*v):(d=(t.max.z-y.z)*v,m=(t.min.z-y.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,r,l,c){_h.subVectors(i,t),mc.subVectors(r,t),vh.crossVectors(_h,mc);let f=this.direction.dot(vh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Oa.subVectors(this.origin,t);const m=d*this.direction.dot(mc.crossVectors(Oa,mc));if(m<0)return null;const p=d*this.direction.dot(_h.cross(Oa));if(p<0||m+p>f)return null;const g=-d*Oa.dot(vh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,i,r,l,c,f,d,m,p,g,v,y,S,E,b,x){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,m,p,g,v,y,S,E,b,x)}set(t,i,r,l,c,f,d,m,p,g,v,y,S,E,b,x){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=y,_[3]=S,_[7]=E,_[11]=b,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ps.setFromMatrixColumn(t,0).length(),c=1/ps.setFromMatrixColumn(t,1).length(),f=1/ps.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const y=f*g,S=f*v,E=d*g,b=d*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=S+E*p,i[5]=y-b*p,i[9]=-d*m,i[2]=b-y*p,i[6]=E+S*p,i[10]=f*m}else if(t.order==="YXZ"){const y=m*g,S=m*v,E=p*g,b=p*v;i[0]=y+b*d,i[4]=E*d-S,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=S*d-E,i[6]=b+y*d,i[10]=f*m}else if(t.order==="ZXY"){const y=m*g,S=m*v,E=p*g,b=p*v;i[0]=y-b*d,i[4]=-f*v,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*g,i[9]=b-y*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const y=f*g,S=f*v,E=d*g,b=d*v;i[0]=m*g,i[4]=E*p-S,i[8]=y*p+b,i[1]=m*v,i[5]=b*p+y,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const y=f*m,S=f*p,E=d*m,b=d*p;i[0]=m*g,i[4]=b-y*v,i[8]=E*v+S,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*v+E,i[10]=y-b*v}else if(t.order==="XZY"){const y=f*m,S=f*p,E=d*m,b=d*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=y*v+b,i[5]=f*g,i[9]=S*v-E,i[2]=E*v-S,i[6]=d*g,i[10]=b*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hE,t,dE)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Pa.crossVectors(r,Kn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Pa.crossVectors(r,Kn)),Pa.normalize(),gc.crossVectors(Kn,Pa),l[0]=Pa.x,l[4]=gc.x,l[8]=Kn.x,l[1]=Pa.y,l[5]=gc.y,l[9]=Kn.y,l[2]=Pa.z,l[6]=gc.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],g=r[1],v=r[5],y=r[9],S=r[13],E=r[2],b=r[6],x=r[10],_=r[14],N=r[3],D=r[7],U=r[11],z=r[15],I=l[0],B=l[4],j=l[8],C=l[12],A=l[1],H=l[5],st=l[9],Q=l[13],ut=l[2],ht=l[6],k=l[10],rt=l[14],Y=l[3],xt=l[7],L=l[11],at=l[15];return c[0]=f*I+d*A+m*ut+p*Y,c[4]=f*B+d*H+m*ht+p*xt,c[8]=f*j+d*st+m*k+p*L,c[12]=f*C+d*Q+m*rt+p*at,c[1]=g*I+v*A+y*ut+S*Y,c[5]=g*B+v*H+y*ht+S*xt,c[9]=g*j+v*st+y*k+S*L,c[13]=g*C+v*Q+y*rt+S*at,c[2]=E*I+b*A+x*ut+_*Y,c[6]=E*B+b*H+x*ht+_*xt,c[10]=E*j+b*st+x*k+_*L,c[14]=E*C+b*Q+x*rt+_*at,c[3]=N*I+D*A+U*ut+z*Y,c[7]=N*B+D*H+U*ht+z*xt,c[11]=N*j+D*st+U*k+z*L,c[15]=N*C+D*Q+U*rt+z*at,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],m=t[9],p=t[13],g=t[2],v=t[6],y=t[10],S=t[14],E=t[3],b=t[7],x=t[11],_=t[15];return E*(+c*m*v-l*p*v-c*d*y+r*p*y+l*d*S-r*m*S)+b*(+i*m*S-i*p*y+c*f*y-l*f*S+l*p*g-c*m*g)+x*(+i*p*v-i*d*S-c*f*v+r*f*S+c*d*g-r*p*g)+_*(-l*d*g-i*m*v+i*d*y+l*f*v-r*f*y+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],m=t[6],p=t[7],g=t[8],v=t[9],y=t[10],S=t[11],E=t[12],b=t[13],x=t[14],_=t[15],N=v*x*p-b*y*p+b*m*S-d*x*S-v*m*_+d*y*_,D=E*y*p-g*x*p-E*m*S+f*x*S+g*m*_-f*y*_,U=g*b*p-E*v*p+E*d*S-f*b*S-g*d*_+f*v*_,z=E*v*m-g*b*m-E*d*y+f*b*y+g*d*x-f*v*x,I=i*N+r*D+l*U+c*z;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return t[0]=N*B,t[1]=(b*y*c-v*x*c-b*l*S+r*x*S+v*l*_-r*y*_)*B,t[2]=(d*x*c-b*m*c+b*l*p-r*x*p-d*l*_+r*m*_)*B,t[3]=(v*m*c-d*y*c-v*l*p+r*y*p+d*l*S-r*m*S)*B,t[4]=D*B,t[5]=(g*x*c-E*y*c+E*l*S-i*x*S-g*l*_+i*y*_)*B,t[6]=(E*m*c-f*x*c-E*l*p+i*x*p+f*l*_-i*m*_)*B,t[7]=(f*y*c-g*m*c+g*l*p-i*y*p-f*l*S+i*m*S)*B,t[8]=U*B,t[9]=(E*v*c-g*b*c-E*r*S+i*b*S+g*r*_-i*v*_)*B,t[10]=(f*b*c-E*d*c+E*r*p-i*b*p-f*r*_+i*d*_)*B,t[11]=(g*d*c-f*v*c-g*r*p+i*v*p+f*r*S-i*d*S)*B,t[12]=z*B,t[13]=(g*b*l-E*v*l+E*r*y-i*b*y-g*r*x+i*v*x)*B,t[14]=(E*d*l-f*b*l-E*r*m+i*b*m+f*r*x-i*d*x)*B,t[15]=(f*v*l-g*d*l+g*r*m-i*v*m-f*r*y+i*d*y)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,m=t.z,p=c*f,g=c*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,v=d+d,y=c*p,S=c*g,E=c*v,b=f*g,x=f*v,_=d*v,N=m*p,D=m*g,U=m*v,z=r.x,I=r.y,B=r.z;return l[0]=(1-(b+_))*z,l[1]=(S+U)*z,l[2]=(E-D)*z,l[3]=0,l[4]=(S-U)*I,l[5]=(1-(y+_))*I,l[6]=(x+N)*I,l[7]=0,l[8]=(E+D)*B,l[9]=(x-N)*B,l[10]=(1-(y+b))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=ps.set(l[0],l[1],l[2]).length();const f=ps.set(l[4],l[5],l[6]).length(),d=ps.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/c,g=1/f,v=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=v,_i.elements[9]*=v,_i.elements[10]*=v,i.setFromRotationMatrix(_i),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=oa){const m=this.elements,p=2*c/(i-t),g=2*c/(r-l),v=(i+t)/(i-t),y=(r+l)/(r-l);let S,E;if(d===oa)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===Wc)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=g,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=S,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=oa){const m=this.elements,p=1/(i-t),g=1/(r-l),v=1/(f-c),y=(i+t)*p,S=(r+l)*g;let E,b;if(d===oa)E=(f+c)*v,b=-2*v;else if(d===Wc)E=c*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-S,m[2]=0,m[6]=0,m[10]=b,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ps=new et,_i=new qe,hE=new et(0,0,0),dE=new et(1,1,1),Pa=new et,gc=new et,Kn=new et,k_=new qe,X_=new wr;class zi{constructor(t=0,i=0,r=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],v=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(ge(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ge(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ge(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ge(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(ge(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-ge(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return k_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(k_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return X_.setFromEuler(this),this.setFromQuaternion(X_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class jd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pE=0;const W_=new et,ms=new wr,na=new qe,_c=new et,Xo=new et,mE=new et,gE=new wr,q_=new et(1,0,0),Y_=new et(0,1,0),j_=new et(0,0,1),Z_={type:"added"},_E={type:"removed"},gs={type:"childadded",child:null},yh={type:"childremoved",child:null};class wn extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new et,i=new zi,r=new wr,l=new et(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new ue}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ms.setFromAxisAngle(t,i),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,i){return ms.setFromAxisAngle(t,i),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(q_,t)}rotateY(t){return this.rotateOnAxis(Y_,t)}rotateZ(t){return this.rotateOnAxis(j_,t)}translateOnAxis(t,i){return W_.copy(t).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(q_,t)}translateY(t){return this.translateOnAxis(Y_,t)}translateZ(t){return this.translateOnAxis(j_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?_c.copy(t):_c.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Xo,_c,this.up):na.lookAt(_c,Xo,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),ms.setFromRotationMatrix(na),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Z_),gs.child=t,this.dispatchEvent(gs),gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(_E),yh.child=t,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Z_),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,t,mE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,gE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),v=f(t.shapes),y=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new et(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new et,ia=new et,xh=new et,aa=new et,_s=new et,vs=new et,K_=new et,Sh=new et,Mh=new et,Eh=new et,bh=new Qe,Th=new Qe,Ah=new Qe;class yi{constructor(t=new et,i=new et,r=new et){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),vi.subVectors(t,i),l.cross(vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){vi.subVectors(l,i),ia.subVectors(r,i),xh.subVectors(t,i);const f=vi.dot(vi),d=vi.dot(ia),m=vi.dot(xh),p=ia.dot(ia),g=ia.dot(xh),v=f*p-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,S=(p*m-d*g)*y,E=(f*g-d*m)*y;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,r,l,c,f,d,m){return this.getBarycoord(t,i,r,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(f,aa.y),m.addScaledVector(d,aa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,f){return bh.setScalar(0),Th.setScalar(0),Ah.setScalar(0),bh.fromBufferAttribute(t,i),Th.fromBufferAttribute(t,r),Ah.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(bh,c.x),f.addScaledVector(Th,c.y),f.addScaledVector(Ah,c.z),f}static isFrontFacing(t,i,r,l){return vi.subVectors(r,i),ia.subVectors(t,i),vi.cross(ia).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),vi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;_s.subVectors(l,r),vs.subVectors(c,r),Sh.subVectors(t,r);const m=_s.dot(Sh),p=vs.dot(Sh);if(m<=0&&p<=0)return i.copy(r);Mh.subVectors(t,l);const g=_s.dot(Mh),v=vs.dot(Mh);if(g>=0&&v<=g)return i.copy(l);const y=m*v-g*p;if(y<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(_s,f);Eh.subVectors(t,c);const S=_s.dot(Eh),E=vs.dot(Eh);if(E>=0&&S<=E)return i.copy(c);const b=S*p-m*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(vs,d);const x=g*E-S*v;if(x<=0&&v-g>=0&&S-E>=0)return K_.subVectors(c,l),d=(v-g)/(v-g+(S-E)),i.copy(l).addScaledVector(K_,d);const _=1/(x+b+y);return f=b*_,d=y*_,i.copy(r).addScaledVector(_s,f).addScaledVector(vs,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const h0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Rh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ce{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=r,we.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=we.workingColorSpace){if(t=$M(t,1),i=ge(i,0,1),r=ge(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Rh(f,c,t+1/3),this.g=Rh(f,c,t),this.b=Rh(f,c,t-1/3)}return we.toWorkingColorSpace(this,l),this}setStyle(t,i=ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const r=h0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return we.fromWorkingColorSpace(Rn.copy(this),t),Math.round(ge(Rn.r*255,0,255))*65536+Math.round(ge(Rn.g*255,0,255))*256+Math.round(ge(Rn.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.fromWorkingColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,c=Rn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const v=f-d;switch(p=g<=.5?v/(f+d):v/(2-f-d),f){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.fromWorkingColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=ui){we.fromWorkingColorSpace(Rn.copy(this),t);const i=Rn.r,r=Rn.g,l=Rn.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(za),this.setHSL(za.h+t,za.s+i,za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(za),t.getHSL(vc);const r=uh(za.h,vc.h,i),l=uh(za.s,vc.s,i),c=uh(za.l,vc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ce;Ce.NAMES=h0;let vE=0;class nl extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vE++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=As,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=kh,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==Xa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Vh&&(r.blendSrc=this.blendSrc),this.blendDst!==kh&&(r.blendDst=this.blendDst),this.blendEquation!==Sr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class d0 extends nl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const nn=new et,yc=new oe;let yE=0;class Pi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=B_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(t),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix3(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyMatrix4(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.applyNormalMatrix(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)nn.fromBufferAttribute(this,i),nn.transformDirection(t),this.setXYZ(i,nn.x,nn.y,nn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Go(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Go(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Go(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Go(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Go(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==B_&&(t.usage=this.usage),t}}class p0 extends Pi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class m0 extends Pi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Tr extends Pi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let xE=0;const ci=new qe,wh=new wn,ys=new et,Qn=new el,Wo=new el,_n=new et;class Dr extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xE++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(u0(t)?m0:p0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ue().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return wh.lookAt(t),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Tr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Qn.setFromBufferAttribute(c),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qd);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(Qn.min,Wo.min),Qn.expandByPoint(_n),_n.addVectors(Qn.max,Wo.max),Qn.expandByPoint(_n)):(Qn.expandByPoint(Wo.min),Qn.expandByPoint(Wo.max))}Qn.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)_n.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(_n));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)_n.fromBufferAttribute(d,p),m&&(ys.fromBufferAttribute(t,p),_n.add(ys)),l=Math.max(l,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new et,m[j]=new et;const p=new et,g=new et,v=new et,y=new oe,S=new oe,E=new oe,b=new et,x=new et;function _(j,C,A){p.fromBufferAttribute(r,j),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,A),y.fromBufferAttribute(c,j),S.fromBufferAttribute(c,C),E.fromBufferAttribute(c,A),g.sub(p),v.sub(p),S.sub(y),E.sub(y);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(v,-S.y).multiplyScalar(H),x.copy(v).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(H),d[j].add(b),d[C].add(b),d[A].add(b),m[j].add(x),m[C].add(x),m[A].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let j=0,C=N.length;j<C;++j){const A=N[j],H=A.start,st=A.count;for(let Q=H,ut=H+st;Q<ut;Q+=3)_(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const D=new et,U=new et,z=new et,I=new et;function B(j){z.fromBufferAttribute(l,j),I.copy(z);const C=d[j];D.copy(C),D.sub(z.multiplyScalar(z.dot(C))).normalize(),U.crossVectors(I,C);const H=U.dot(m[j])<0?-1:1;f.setXYZW(j,D.x,D.y,D.z,H)}for(let j=0,C=N.length;j<C;++j){const A=N[j],H=A.start,st=A.count;for(let Q=H,ut=H+st;Q<ut;Q+=3)B(t.getX(Q+0)),B(t.getX(Q+1)),B(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new et,c=new et,f=new et,d=new et,m=new et,p=new et,g=new et,v=new et;if(t)for(let y=0,S=t.count;y<S;y+=3){const E=t.getX(y+0),b=t.getX(y+1),x=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,x),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,x),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,v=d.normalized,y=new p.constructor(m.length*g);let S=0,E=0;for(let b=0,x=m.length;b<x;b++){d.isInterleavedBufferAttribute?S=m[b]*d.data.stride+d.offset:S=m[b]*g;for(let _=0;_<g;_++)y[E++]=p[S++]}return new Pi(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Dr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,v=p.length;g<v;g++){const y=p[g],S=t(y,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,y=p.length;v<y;v++){const S=p[v];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],v=c[p];for(let y=0,S=v.length;y<S;y++)g.push(v[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Q_=new qe,mr=new Yd,xc=new qd,J_=new et,Sc=new et,Mc=new et,Ec=new et,Ch=new et,bc=new et,$_=new et,Tc=new et;class Oi extends wn{constructor(t=new Dr,i=new d0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],v=c[m];g!==0&&(Ch.fromBufferAttribute(v,t),f?bc.addScaledVector(Ch,g):bc.addScaledVector(Ch.sub(i),g))}i.add(bc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(c),mr.copy(t.ray).recast(t.near),!(xc.containsPoint(mr.origin)===!1&&(mr.intersectSphere(xc,J_)===null||mr.origin.distanceToSquared(J_)>(t.far-t.near)**2))&&(Q_.copy(c).invert(),mr.copy(t.ray).applyMatrix4(Q_),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,mr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const x=y[E],_=f[x.materialIndex],N=Math.max(x.start,S.start),D=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let U=N,z=D;U<z;U+=3){const I=d.getX(U),B=d.getX(U+1),j=d.getX(U+2);l=Ac(this,_,t,r,p,g,v,I,B,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let x=E,_=b;x<_;x+=3){const N=d.getX(x),D=d.getX(x+1),U=d.getX(x+2);l=Ac(this,f,t,r,p,g,v,N,D,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const x=y[E],_=f[x.materialIndex],N=Math.max(x.start,S.start),D=Math.min(m.count,Math.min(x.start+x.count,S.start+S.count));for(let U=N,z=D;U<z;U+=3){const I=U,B=U+1,j=U+2;l=Ac(this,_,t,r,p,g,v,I,B,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let x=E,_=b;x<_;x+=3){const N=x,D=x+1,U=x+2;l=Ac(this,f,t,r,p,g,v,N,D,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function SE(s,t,i,r,l,c,f,d){let m;if(t.side===kn?m=r.intersectTriangle(f,c,l,!0,d):m=r.intersectTriangle(l,c,f,t.side===Xa,d),m===null)return null;Tc.copy(d),Tc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Tc);return p<i.near||p>i.far?null:{distance:p,point:Tc.clone(),object:s}}function Ac(s,t,i,r,l,c,f,d,m,p){s.getVertexPosition(d,Sc),s.getVertexPosition(m,Mc),s.getVertexPosition(p,Ec);const g=SE(s,t,i,r,Sc,Mc,Ec,$_);if(g){const v=new et;yi.getBarycoord($_,Sc,Mc,Ec,v),l&&(g.uv=yi.getInterpolatedAttribute(l,d,m,p,v,new oe)),c&&(g.uv1=yi.getInterpolatedAttribute(c,d,m,p,v,new oe)),f&&(g.normal=yi.getInterpolatedAttribute(f,d,m,p,v,new et),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new et,materialIndex:0};yi.getNormal(Sc,Mc,Ec,y.normal),g.face=y,g.barycoord=v}return g}class Hs extends Dr{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let y=0,S=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Tr(p,3)),this.setAttribute("normal",new Tr(g,3)),this.setAttribute("uv",new Tr(v,2));function E(b,x,_,N,D,U,z,I,B,j,C){const A=U/B,H=z/j,st=U/2,Q=z/2,ut=I/2,ht=B+1,k=j+1;let rt=0,Y=0;const xt=new et;for(let L=0;L<k;L++){const at=L*H-Q;for(let Tt=0;Tt<ht;Tt++){const wt=Tt*A-st;xt[b]=wt*N,xt[x]=at*D,xt[_]=ut,p.push(xt.x,xt.y,xt.z),xt[b]=0,xt[x]=0,xt[_]=I>0?1:-1,g.push(xt.x,xt.y,xt.z),v.push(Tt/B),v.push(1-L/j),rt+=1}}for(let L=0;L<j;L++)for(let at=0;at<B;at++){const Tt=y+at+ht*L,wt=y+at+ht*(L+1),q=y+(at+1)+ht*(L+1),mt=y+(at+1)+ht*L;m.push(Tt,wt,mt),m.push(wt,q,mt),Y+=6}d.addGroup(S,Y,C),S+=Y,y+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ps(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Pn(s){const t={};for(let i=0;i<s.length;i++){const r=Ps(s[i]);for(const l in r)t[l]=r[l]}return t}function ME(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function g0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const EE={clone:Ps,merge:Pn};var bE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wa extends nl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bE,this.fragmentShader=TE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=ME(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class _0 extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=oa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new et,tv=new oe,ev=new oe;class Jn extends _0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=qc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qc*2*Math.atan(Math.tan(Hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,i){return this.getViewBounds(t,tv,ev),i.subVectors(ev,tv)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Hc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,Ss=1;class AE extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Jn(xs,Ss,t,i);l.layers=this.layers,this.add(l);const c=new Jn(xs,Ss,t,i);c.layers=this.layers,this.add(c);const f=new Jn(xs,Ss,t,i);f.layers=this.layers,this.add(f);const d=new Jn(xs,Ss,t,i);d.layers=this.layers,this.add(d);const m=new Jn(xs,Ss,t,i);m.layers=this.layers,this.add(m);const p=new Jn(xs,Ss,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(t===oa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,v=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=b,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,y,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class v0 extends zn{constructor(t,i,r,l,c,f,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:Ds,super(t,i,r,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class RE extends Rr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new v0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ni}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Hs(5,5,5),c=new Wa({name:"CubemapFromEquirect",uniforms:Ps(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Ga});c.uniforms.tEquirect.value=i;const f=new Oi(l,c),d=i.minFilter;return i.minFilter===br&&(i.minFilter=Ni),new AE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,r,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class Rc extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wE={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const b of t.hand.values()){const x=i.getJointPose(b,r),_=this._getHandJoint(p,b);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(wE)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Rc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class CE extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Uh=new et,DE=new et,UE=new ue;class Ia{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Uh.subVectors(r,i).cross(DE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Uh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||UE.getNormalMatrix(t),l=this.coplanarPoint(Uh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new qd,wc=new et;class Zd{constructor(t=new Ia,i=new Ia,r=new Ia,l=new Ia,c=new Ia,f=new Ia){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=oa){const r=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],m=l[3],p=l[4],g=l[5],v=l[6],y=l[7],S=l[8],E=l[9],b=l[10],x=l[11],_=l[12],N=l[13],D=l[14],U=l[15];if(r[0].setComponents(m-c,y-p,x-S,U-_).normalize(),r[1].setComponents(m+c,y+p,x+S,U+_).normalize(),r[2].setComponents(m+f,y+g,x+E,U+N).normalize(),r[3].setComponents(m-f,y-g,x-E,U-N).normalize(),r[4].setComponents(m-d,y-v,x-b,U-D).normalize(),i===oa)r[5].setComponents(m+d,y+v,x+b,U+D).normalize();else if(i===Wc)r[5].setComponents(d,v,b,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(t){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(wc.x=l.normal.x>0?t.max.x:t.min.x,wc.y=l.normal.y>0?t.max.y:t.min.y,wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class y0 extends zn{constructor(t,i,r,l,c,f,d,m,p,g=Rs){if(g!==Rs&&g!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Rs&&(r=Ar),r===void 0&&g===Ns&&(r=Ls),super(null,l,c,f,d,m,g,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Si,this.minFilter=m!==void 0?m:Si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Kc extends Dr{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,v=t/d,y=i/m,S=[],E=[],b=[],x=[];for(let _=0;_<g;_++){const N=_*y-f;for(let D=0;D<p;D++){const U=D*v-c;E.push(U,-N,0),b.push(0,0,1),x.push(D/d),x.push(1-_/m)}}for(let _=0;_<m;_++)for(let N=0;N<d;N++){const D=N+p*_,U=N+p*(_+1),z=N+1+p*(_+1),I=N+1+p*_;S.push(D,U,I),S.push(U,z,I)}this.setIndex(S),this.setAttribute("position",new Tr(E,3)),this.setAttribute("normal",new Tr(b,3)),this.setAttribute("uv",new Tr(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.width,t.height,t.widthSegments,t.heightSegments)}}class nv extends nl{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=l0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class LE extends nl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class NE extends nl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const iv={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class OE{constructor(t,i,r){const l=this;let c=!1,f=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,f,d),c=!0},this.itemEnd=function(g){f++,l.onProgress!==void 0&&l.onProgress(g,f,d),f===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,v){return p.push(g,v),this},this.removeHandler=function(g){const v=p.indexOf(g);return v!==-1&&p.splice(v,2),this},this.getHandler=function(g){for(let v=0,y=p.length;v<y;v+=2){const S=p[v],E=p[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null}}}const PE=new OE;class Kd{constructor(t){this.manager=t!==void 0?t:PE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Kd.DEFAULT_MATERIAL_NAME="__DEFAULT";class zE extends Kd{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,f=iv.get(t);if(f!==void 0)return c.manager.itemStart(t),setTimeout(function(){i&&i(f),c.manager.itemEnd(t)},0),f;const d=Ko("img");function m(){g(),iv.add(t,this),i&&i(this),c.manager.itemEnd(t)}function p(v){g(),l&&l(v),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),c.manager.itemStart(t),d.src=t,d}}class BE extends Kd{constructor(t){super(t)}load(t,i,r,l){const c=new zn,f=new zE(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class x0 extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Lh=new qe,av=new et,rv=new et;class IE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zd,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;av.setFromMatrixPosition(t.matrixWorld),i.position.copy(av),rv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(rv),i.updateMatrixWorld(),Lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Lh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class FE extends IE{constructor(){super(new Jn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const i=this.camera,r=qc*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height,c=t.distance||i.far;(r!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=r,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class HE extends x0{constructor(t,i,r=0,l=Math.PI/3,c=0,f=2){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.distance=r,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new FE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class GE extends _0{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class VE extends x0{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class kE extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}const sv=new qe;class ov{constructor(t,i,r=0,l=1/0){this.ray=new Yd(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new jd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return sv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sv),this}intersectObject(t,i=!0,r=[]){return Rd(t,this,r,i),r.sort(lv),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Rd(t[l],this,r,i);return r.sort(lv),r}}function lv(s,t){return s.distance-t.distance}function Rd(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let f=0,d=c.length;f<d;f++)Rd(c[f],t,i,!0)}}class cv{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ge(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(ge(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class XE extends Cr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function uv(s,t,i,r){const l=WE(r);switch(i){case e0:return s*t;case i0:return s*t;case a0:return s*t*2;case r0:return s*t/l.components*l.byteLength;case Vd:return s*t/l.components*l.byteLength;case s0:return s*t*2/l.components*l.byteLength;case kd:return s*t*2/l.components*l.byteLength;case n0:return s*t*3/l.components*l.byteLength;case xi:return s*t*4/l.components*l.byteLength;case Xd:return s*t*4/l.components*l.byteLength;case Pc:case zc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Bc:case Ic:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case nd:case ad:return Math.max(s,16)*Math.max(t,8)/4;case ed:case id:return Math.max(s,8)*Math.max(t,8)/2;case rd:case sd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case od:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case cd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ud:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case hd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case pd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case md:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case gd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _d:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case vd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case yd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case xd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fc:case Md:case Ed:return Math.ceil(s/4)*Math.ceil(t/4)*16;case o0:case bd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Td:case Ad:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function WE(s){switch(s){case ua:case Jv:return{byteLength:1,components:1};case Zo:case $v:case $o:return{byteLength:2,components:1};case Hd:case Gd:return{byteLength:2,components:4};case Ar:case Fd:case sa:return{byteLength:4,components:1};case t0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function S0(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function qE(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,v=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,g);else{v.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<v.length;S++){const E=v[y],b=v[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,v[y]=b)}v.length=y+1;for(let S=0,E=v.length;S<E;S++){const b=v[S];s.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var YE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$E=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ib=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ob=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_b=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",bb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ub=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ob=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ib=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Wb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_T=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ST=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,MT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ET=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,AT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,RT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,UT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,HT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,GT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$T=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_A=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:YE,alphahash_pars_fragment:jE,alphamap_fragment:ZE,alphamap_pars_fragment:KE,alphatest_fragment:QE,alphatest_pars_fragment:JE,aomap_fragment:$E,aomap_pars_fragment:tb,batching_pars_vertex:eb,batching_vertex:nb,begin_vertex:ib,beginnormal_vertex:ab,bsdfs:rb,iridescence_fragment:sb,bumpmap_pars_fragment:ob,clipping_planes_fragment:lb,clipping_planes_pars_fragment:cb,clipping_planes_pars_vertex:ub,clipping_planes_vertex:fb,color_fragment:hb,color_pars_fragment:db,color_pars_vertex:pb,color_vertex:mb,common:gb,cube_uv_reflection_fragment:_b,defaultnormal_vertex:vb,displacementmap_pars_vertex:yb,displacementmap_vertex:xb,emissivemap_fragment:Sb,emissivemap_pars_fragment:Mb,colorspace_fragment:Eb,colorspace_pars_fragment:bb,envmap_fragment:Tb,envmap_common_pars_fragment:Ab,envmap_pars_fragment:Rb,envmap_pars_vertex:wb,envmap_physical_pars_fragment:Fb,envmap_vertex:Cb,fog_vertex:Db,fog_pars_vertex:Ub,fog_fragment:Lb,fog_pars_fragment:Nb,gradientmap_pars_fragment:Ob,lightmap_pars_fragment:Pb,lights_lambert_fragment:zb,lights_lambert_pars_fragment:Bb,lights_pars_begin:Ib,lights_toon_fragment:Hb,lights_toon_pars_fragment:Gb,lights_phong_fragment:Vb,lights_phong_pars_fragment:kb,lights_physical_fragment:Xb,lights_physical_pars_fragment:Wb,lights_fragment_begin:qb,lights_fragment_maps:Yb,lights_fragment_end:jb,logdepthbuf_fragment:Zb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Qb,logdepthbuf_vertex:Jb,map_fragment:$b,map_pars_fragment:tT,map_particle_fragment:eT,map_particle_pars_fragment:nT,metalnessmap_fragment:iT,metalnessmap_pars_fragment:aT,morphinstance_vertex:rT,morphcolor_vertex:sT,morphnormal_vertex:oT,morphtarget_pars_vertex:lT,morphtarget_vertex:cT,normal_fragment_begin:uT,normal_fragment_maps:fT,normal_pars_fragment:hT,normal_pars_vertex:dT,normal_vertex:pT,normalmap_pars_fragment:mT,clearcoat_normal_fragment_begin:gT,clearcoat_normal_fragment_maps:_T,clearcoat_pars_fragment:vT,iridescence_pars_fragment:yT,opaque_fragment:xT,packing:ST,premultiplied_alpha_fragment:MT,project_vertex:ET,dithering_fragment:bT,dithering_pars_fragment:TT,roughnessmap_fragment:AT,roughnessmap_pars_fragment:RT,shadowmap_pars_fragment:wT,shadowmap_pars_vertex:CT,shadowmap_vertex:DT,shadowmask_pars_fragment:UT,skinbase_vertex:LT,skinning_pars_vertex:NT,skinning_vertex:OT,skinnormal_vertex:PT,specularmap_fragment:zT,specularmap_pars_fragment:BT,tonemapping_fragment:IT,tonemapping_pars_fragment:FT,transmission_fragment:HT,transmission_pars_fragment:GT,uv_pars_fragment:VT,uv_pars_vertex:kT,uv_vertex:XT,worldpos_vertex:WT,background_vert:qT,background_frag:YT,backgroundCube_vert:jT,backgroundCube_frag:ZT,cube_vert:KT,cube_frag:QT,depth_vert:JT,depth_frag:$T,distanceRGBA_vert:tA,distanceRGBA_frag:eA,equirect_vert:nA,equirect_frag:iA,linedashed_vert:aA,linedashed_frag:rA,meshbasic_vert:sA,meshbasic_frag:oA,meshlambert_vert:lA,meshlambert_frag:cA,meshmatcap_vert:uA,meshmatcap_frag:fA,meshnormal_vert:hA,meshnormal_frag:dA,meshphong_vert:pA,meshphong_frag:mA,meshphysical_vert:gA,meshphysical_frag:_A,meshtoon_vert:vA,meshtoon_frag:yA,points_vert:xA,points_frag:SA,shadow_vert:MA,shadow_frag:EA,sprite_vert:bA,sprite_frag:TA},Nt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Ui={basic:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Pn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Pn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Pn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Pn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Pn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Pn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Pn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Pn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Pn([Nt.common,Nt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Pn([Nt.lights,Nt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ui.physical={uniforms:Pn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Cc={r:0,b:0,g:0},_r=new zi,AA=new qe;function RA(s,t,i,r,l,c,f){const d=new Ce(0);let m=c===!0?0:1,p,g,v=null,y=0,S=null;function E(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?i:t).get(U)),U}function b(D){let U=!1;const z=E(D);z===null?_(d,m):z&&z.isColor&&(_(z,1),U=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,f):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(D,U){const z=E(U);z&&(z.isCubeTexture||z.mapping===Zc)?(g===void 0&&(g=new Oi(new Hs(1,1,1),new Wa({name:"BackgroundCubeMaterial",uniforms:Ps(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,B,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),_r.copy(U.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(AA.makeRotationFromEuler(_r)),g.material.toneMapped=we.getTransfer(z.colorSpace)!==ze,(v!==z||y!==z.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,v=z,y=z.version,S=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Oi(new Kc(2,2),new Wa({name:"BackgroundMaterial",uniforms:Ps(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=we.getTransfer(z.colorSpace)!==ze,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(v!==z||y!==z.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=z,y=z.version,S=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function _(D,U){D.getRGB(Cc,g0(s)),r.buffers.color.setClear(Cc.r,Cc.g,Cc.b,U,f)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,U=1){d.set(D),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,_(d,m)},render:b,addToRenderList:x,dispose:N}}function wA(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function d(A,H,st,Q,ut){let ht=!1;const k=v(Q,st,H);c!==k&&(c=k,p(c.object)),ht=S(A,Q,st,ut),ht&&E(A,Q,st,ut),ut!==null&&t.update(ut,s.ELEMENT_ARRAY_BUFFER),(ht||f)&&(f=!1,U(A,H,st,Q),ut!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return s.createVertexArray()}function p(A){return s.bindVertexArray(A)}function g(A){return s.deleteVertexArray(A)}function v(A,H,st){const Q=st.wireframe===!0;let ut=r[A.id];ut===void 0&&(ut={},r[A.id]=ut);let ht=ut[H.id];ht===void 0&&(ht={},ut[H.id]=ht);let k=ht[Q];return k===void 0&&(k=y(m()),ht[Q]=k),k}function y(A){const H=[],st=[],Q=[];for(let ut=0;ut<i;ut++)H[ut]=0,st[ut]=0,Q[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:st,attributeDivisors:Q,object:A,attributes:{},index:null}}function S(A,H,st,Q){const ut=c.attributes,ht=H.attributes;let k=0;const rt=st.getAttributes();for(const Y in rt)if(rt[Y].location>=0){const L=ut[Y];let at=ht[Y];if(at===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(at=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(at=A.instanceColor)),L===void 0||L.attribute!==at||at&&L.data!==at.data)return!0;k++}return c.attributesNum!==k||c.index!==Q}function E(A,H,st,Q){const ut={},ht=H.attributes;let k=0;const rt=st.getAttributes();for(const Y in rt)if(rt[Y].location>=0){let L=ht[Y];L===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(L=A.instanceColor));const at={};at.attribute=L,L&&L.data&&(at.data=L.data),ut[Y]=at,k++}c.attributes=ut,c.attributesNum=k,c.index=Q}function b(){const A=c.newAttributes;for(let H=0,st=A.length;H<st;H++)A[H]=0}function x(A){_(A,0)}function _(A,H){const st=c.newAttributes,Q=c.enabledAttributes,ut=c.attributeDivisors;st[A]=1,Q[A]===0&&(s.enableVertexAttribArray(A),Q[A]=1),ut[A]!==H&&(s.vertexAttribDivisor(A,H),ut[A]=H)}function N(){const A=c.newAttributes,H=c.enabledAttributes;for(let st=0,Q=H.length;st<Q;st++)H[st]!==A[st]&&(s.disableVertexAttribArray(st),H[st]=0)}function D(A,H,st,Q,ut,ht,k){k===!0?s.vertexAttribIPointer(A,H,st,ut,ht):s.vertexAttribPointer(A,H,st,Q,ut,ht)}function U(A,H,st,Q){b();const ut=Q.attributes,ht=st.getAttributes(),k=H.defaultAttributeValues;for(const rt in ht){const Y=ht[rt];if(Y.location>=0){let xt=ut[rt];if(xt===void 0&&(rt==="instanceMatrix"&&A.instanceMatrix&&(xt=A.instanceMatrix),rt==="instanceColor"&&A.instanceColor&&(xt=A.instanceColor)),xt!==void 0){const L=xt.normalized,at=xt.itemSize,Tt=t.get(xt);if(Tt===void 0)continue;const wt=Tt.buffer,q=Tt.type,mt=Tt.bytesPerElement,Mt=q===s.INT||q===s.UNSIGNED_INT||xt.gpuType===Fd;if(xt.isInterleavedBufferAttribute){const At=xt.data,Ct=At.stride,Jt=xt.offset;if(At.isInstancedInterleavedBuffer){for(let Bt=0;Bt<Y.locationSize;Bt++)_(Y.location+Bt,At.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Bt=0;Bt<Y.locationSize;Bt++)x(Y.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let Bt=0;Bt<Y.locationSize;Bt++)D(Y.location+Bt,at/Y.locationSize,q,L,Ct*mt,(Jt+at/Y.locationSize*Bt)*mt,Mt)}else{if(xt.isInstancedBufferAttribute){for(let At=0;At<Y.locationSize;At++)_(Y.location+At,xt.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let At=0;At<Y.locationSize;At++)x(Y.location+At);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let At=0;At<Y.locationSize;At++)D(Y.location+At,at/Y.locationSize,q,L,at*mt,at/Y.locationSize*At*mt,Mt)}}else if(k!==void 0){const L=k[rt];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(Y.location,L);break;case 3:s.vertexAttrib3fv(Y.location,L);break;case 4:s.vertexAttrib4fv(Y.location,L);break;default:s.vertexAttrib1fv(Y.location,L)}}}}N()}function z(){j();for(const A in r){const H=r[A];for(const st in H){const Q=H[st];for(const ut in Q)g(Q[ut].object),delete Q[ut];delete H[st]}delete r[A]}}function I(A){if(r[A.id]===void 0)return;const H=r[A.id];for(const st in H){const Q=H[st];for(const ut in Q)g(Q[ut].object),delete Q[ut];delete H[st]}delete r[A.id]}function B(A){for(const H in r){const st=r[H];if(st[A.id]===void 0)continue;const Q=st[A.id];for(const ut in Q)g(Q[ut].object),delete Q[ut];delete st[A.id]}}function j(){C(),f=!0,c!==l&&(c=l,p(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:b,enableAttribute:x,disableUnusedAttributes:N}}function CA(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function d(p,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let S=0;for(let E=0;E<v;E++)S+=g[E];i.update(S,r,1)}function m(p,g,v,y){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],g[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b]*y[b];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function DA(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==xi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const j=B===$o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ua&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==sa&&!j)}function m(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,y=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=E>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:U,vertexTextures:z,maxSamples:I}}function UA(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new Ia,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||l;return l=y,r=v.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,S){const E=v.clippingPlanes,b=v.clipIntersection,x=v.clipShadows,_=s.get(v);if(!l||E===null||E.length===0||c&&!x)c?g(null):p();else{const N=c?0:r,D=N*4;let U=_.clippingState||null;m.value=U,U=g(E,y,D,S);for(let z=0;z!==D;++z)U[z]=i[z];_.clippingState=U,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,y,S,E){const b=v!==null?v.length:0;let x=null;if(b!==0){if(x=m.value,E!==!0||x===null){const _=S+b*4,N=y.matrixWorldInverse;d.getNormalMatrix(N),(x===null||x.length<_)&&(x=new Float32Array(_));for(let D=0,U=S;D!==b;++D,U+=4)f.copy(v[D]).applyMatrix4(N,d),f.normal.toArray(x,U),x[U+3]=f.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function LA(s){let t=new WeakMap;function i(f,d){return d===Qh?f.mapping=Ds:d===Jh&&(f.mapping=Us),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Qh||d===Jh)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new RE(m.height);return p.fromEquirectangularTexture(s,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const bs=4,fv=[.125,.215,.35,.446,.526,.582],Mr=20,Nh=new GE,hv=new Ce;let Oh=null,Ph=0,zh=0,Bh=!1;const xr=(1+Math.sqrt(5))/2,Ms=1/xr,dv=[new et(-xr,Ms,0),new et(xr,Ms,0),new et(-Ms,0,xr),new et(Ms,0,xr),new et(0,xr,-Ms),new et(0,xr,Ms),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)],NA=new et;class pv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=NA}=c;Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oh,Ph,zh),this._renderer.xr.enabled=Bh,t.scissorTest=!1,Dc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ds||t.mapping===Us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oh=this._renderer.getRenderTarget(),Ph=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:$o,format:xi,colorSpace:Os,depthBuffer:!1},l=mv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mv(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OA(c)),this._blurMaterial=PA(c,t,i)}return l}_compileMaterial(t){const i=new Oi(this._lodPlanes[0],t);this._renderer.compile(i,Nh)}_sceneToCubeUV(t,i,r,l,c){const m=new Jn(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(hv),v.toneMapping=Va,v.autoClear=!1;const E=new d0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),b=new Oi(new Hs,E);let x=!1;const _=t.background;_?_.isColor&&(E.color.copy(_),t.background=null,x=!0):(E.color.copy(hv),x=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):D===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const U=this._cubeSize;Dc(l,D*U,N>2?U:0,U,U),v.setRenderTarget(l),x&&v.render(b,m),v.render(t,m)}b.geometry.dispose(),b.material.dispose(),v.toneMapping=S,v.autoClear=y,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ds||t.mapping===Us;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Oi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Dc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Nh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=dv[(l-c-1)%dv.length];this._blur(t,c-1,c,f,d)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Oi(this._lodPlanes[l],p),y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Mr-1),b=c/E,x=isFinite(c)?1+Math.floor(g*b):Mr;x>Mr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Mr}`);const _=[];let N=0;for(let B=0;B<Mr;++B){const j=B/b,C=Math.exp(-j*j/2);_.push(C),B===0?N+=C:B<x&&(N+=2*C)}for(let B=0;B<_.length;B++)_[B]=_[B]/N;y.envMap.value=t.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=E,y.mipInt.value=D-r;const U=this._sizeLods[l],z=3*U*(l>D-bs?l-D+bs:0),I=4*(this._cubeSize-U);Dc(i,z,I,3*U,2*U),m.setRenderTarget(i),m.render(v,Nh)}}function OA(s){const t=[],i=[],r=[];let l=s;const c=s-bs+1+fv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let m=1/d;f>s-bs?m=fv[f-s+bs-1]:f===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,E=6,b=3,x=2,_=1,N=new Float32Array(b*E*S),D=new Float32Array(x*E*S),U=new Float32Array(_*E*S);for(let I=0;I<S;I++){const B=I%3*2/3-1,j=I>2?0:-1,C=[B,j,0,B+2/3,j,0,B+2/3,j+1,0,B,j,0,B+2/3,j+1,0,B,j+1,0];N.set(C,b*E*I),D.set(y,x*E*I);const A=[I,I,I,I,I,I];U.set(A,_*E*I)}const z=new Dr;z.setAttribute("position",new Pi(N,b)),z.setAttribute("uv",new Pi(D,x)),z.setAttribute("faceIndex",new Pi(U,_)),t.push(z),l>bs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function mv(s,t,i){const r=new Rr(s,t,i);return r.texture.mapping=Zc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dc(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function PA(s,t,i){const r=new Float32Array(Mr),l=new et(0,1,0);return new Wa({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function gv(){return new Wa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function _v(){return new Wa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zA(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Qh||m===Jh,g=m===Ds||m===Us;if(p||g){let v=t.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new pv(s)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new pv(s)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function BA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&yr("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function IA(s,t,i,r){const l={},c=new WeakMap;function f(v){const y=v.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const S in y)t.update(y[S],s.ARRAY_BUFFER)}function p(v){const y=[],S=v.index,E=v.attributes.position;let b=0;if(S!==null){const N=S.array;b=S.version;for(let D=0,U=N.length;D<U;D+=3){const z=N[D+0],I=N[D+1],B=N[D+2];y.push(z,I,I,B,B,z)}}else if(E!==void 0){const N=E.array;b=E.version;for(let D=0,U=N.length/3-1;D<U;D+=3){const z=D+0,I=D+1,B=D+2;y.push(z,I,I,B,B,z)}}else return;const x=new(u0(y)?m0:p0)(y,1);x.version=b;const _=c.get(v);_&&t.remove(_),c.set(v,x)}function g(v){const y=c.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:g}}function FA(s,t,i){let r;function l(y){r=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function m(y,S){s.drawElements(r,S,c,y*f),i.update(S,r,1)}function p(y,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,y*f,E),i.update(S,r,E))}function g(y,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let x=0;for(let _=0;_<E;_++)x+=S[_];i.update(x,r,1)}function v(y,S,E,b){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)p(y[_]/f,S[_],b[_]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,b,0,E);let _=0;for(let N=0;N<E;N++)_+=S[N]*b[N];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function HA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function GA(s,t,i){const r=new WeakMap,l=new Qe;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let A=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var S=A;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),b===!0&&(U=2),x===!0&&(U=3);let z=d.attributes.position.count*U,I=1;z>t.maxTextureSize&&(I=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const B=new Float32Array(z*I*4*v),j=new f0(B,z,I,v);j.type=sa,j.needsUpdate=!0;const C=U*4;for(let H=0;H<v;H++){const st=_[H],Q=N[H],ut=D[H],ht=z*I*4*H;for(let k=0;k<st.count;k++){const rt=k*C;E===!0&&(l.fromBufferAttribute(st,k),B[ht+rt+0]=l.x,B[ht+rt+1]=l.y,B[ht+rt+2]=l.z,B[ht+rt+3]=0),b===!0&&(l.fromBufferAttribute(Q,k),B[ht+rt+4]=l.x,B[ht+rt+5]=l.y,B[ht+rt+6]=l.z,B[ht+rt+7]=0),x===!0&&(l.fromBufferAttribute(ut,k),B[ht+rt+8]=l.x,B[ht+rt+9]=l.y,B[ht+rt+10]=l.z,B[ht+rt+11]=ut.itemSize===4?l.w:1)}}y={count:v,texture:j,size:new oe(z,I)},r.set(d,y),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",b),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function VA(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=t.get(m,g);if(l.get(v)!==p&&(t.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const M0=new zn,vv=new y0(1,1),E0=new f0,b0=new uE,T0=new v0,yv=[],xv=[],Sv=new Float32Array(16),Mv=new Float32Array(9),Ev=new Float32Array(4);function Gs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=yv[l];if(c===void 0&&(c=new Float32Array(l),yv[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function fn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function hn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Qc(s,t){let i=xv[t];i===void 0&&(i=new Int32Array(t),xv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function kA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function XA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2fv(this.addr,t),hn(i,t)}}function WA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;s.uniform3fv(this.addr,t),hn(i,t)}}function qA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4fv(this.addr,t),hn(i,t)}}function YA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;Ev.set(r),s.uniformMatrix2fv(this.addr,!1,Ev),hn(i,r)}}function jA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;Mv.set(r),s.uniformMatrix3fv(this.addr,!1,Mv),hn(i,r)}}function ZA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;Sv.set(r),s.uniformMatrix4fv(this.addr,!1,Sv),hn(i,r)}}function KA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function QA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2iv(this.addr,t),hn(i,t)}}function JA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3iv(this.addr,t),hn(i,t)}}function $A(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4iv(this.addr,t),hn(i,t)}}function t1(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function e1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2uiv(this.addr,t),hn(i,t)}}function n1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3uiv(this.addr,t),hn(i,t)}}function i1(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4uiv(this.addr,t),hn(i,t)}}function a1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(vv.compareFunction=c0,c=vv):c=M0,i.setTexture2D(t||c,l)}function r1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||b0,l)}function s1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||T0,l)}function o1(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||E0,l)}function l1(s){switch(s){case 5126:return kA;case 35664:return XA;case 35665:return WA;case 35666:return qA;case 35674:return YA;case 35675:return jA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return $A;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return o1}}function c1(s,t){s.uniform1fv(this.addr,t)}function u1(s,t){const i=Gs(t,this.size,2);s.uniform2fv(this.addr,i)}function f1(s,t){const i=Gs(t,this.size,3);s.uniform3fv(this.addr,i)}function h1(s,t){const i=Gs(t,this.size,4);s.uniform4fv(this.addr,i)}function d1(s,t){const i=Gs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function p1(s,t){const i=Gs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function m1(s,t){const i=Gs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function g1(s,t){s.uniform1iv(this.addr,t)}function _1(s,t){s.uniform2iv(this.addr,t)}function v1(s,t){s.uniform3iv(this.addr,t)}function y1(s,t){s.uniform4iv(this.addr,t)}function x1(s,t){s.uniform1uiv(this.addr,t)}function S1(s,t){s.uniform2uiv(this.addr,t)}function M1(s,t){s.uniform3uiv(this.addr,t)}function E1(s,t){s.uniform4uiv(this.addr,t)}function b1(s,t,i){const r=this.cache,l=t.length,c=Qc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||M0,c[f])}function T1(s,t,i){const r=this.cache,l=t.length,c=Qc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||b0,c[f])}function A1(s,t,i){const r=this.cache,l=t.length,c=Qc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||T0,c[f])}function R1(s,t,i){const r=this.cache,l=t.length,c=Qc(i,l);fn(r,c)||(s.uniform1iv(this.addr,c),hn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||E0,c[f])}function w1(s){switch(s){case 5126:return c1;case 35664:return u1;case 35665:return f1;case 35666:return h1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return y1;case 5125:return x1;case 36294:return S1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}class C1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=l1(i.type)}}class D1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=w1(i.type)}}class U1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Ih=/(\w+)(\])?(\[|\.)?/g;function bv(s,t){s.seq.push(t),s.map[t.id]=t}function L1(s,t,i){const r=s.name,l=r.length;for(Ih.lastIndex=0;;){const c=Ih.exec(r),f=Ih.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){bv(i,p===void 0?new C1(d,s,t):new D1(d,s,t));break}else{let v=i.map[d];v===void 0&&(v=new U1(d),bv(i,v)),i=v}}}class Gc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);L1(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function Tv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const N1=37297;let O1=0;function P1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const Av=new ue;function z1(s){we._getMatrix(Av,we.workingColorSpace,s);const t=`mat3( ${Av.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(s)){case Xc:return[t,"LinearTransferOETF"];case ze:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Rv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+P1(s.getShaderSource(t),f)}else return l}function B1(s,t){const i=z1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function I1(s,t){let i;switch(t){case PM:i="Linear";break;case zM:i="Reinhard";break;case BM:i="Cineon";break;case IM:i="ACESFilmic";break;case HM:i="AgX";break;case GM:i="Neutral";break;case FM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new et;function F1(){we.getLuminanceCoefficients(Uc);const s=Uc.x.toFixed(4),t=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function G1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function V1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function Yo(s){return s!==""}function wv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const k1=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(s){return s.replace(k1,W1)}const X1=new Map;function W1(s,t){let i=fe[t];if(i===void 0){const r=X1.get(t);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return wd(i)}const q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dv(s){return s.replace(q1,Y1)}function Y1(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Uv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function j1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===pM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function Z1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Us:t="ENVMAP_TYPE_CUBE";break;case Zc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:t="ENVMAP_MODE_REFRACTION";break}return t}function Q1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Id:t="ENVMAP_BLENDING_MULTIPLY";break;case NM:t="ENVMAP_BLENDING_MIX";break;case OM:t="ENVMAP_BLENDING_ADD";break}return t}function J1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function $1(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=j1(i),p=Z1(i),g=K1(i),v=Q1(i),y=J1(i),S=H1(i),E=G1(c),b=l.createProgram();let x,_,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Yo).join(`
`),_.length>0&&(_+=`
`)):(x=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),_=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?fe.tonemapping_pars_fragment:"",i.toneMapping!==Va?I1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,B1("linearToOutputTexel",i.outputColorSpace),F1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),f=wd(f),f=wv(f,i),f=Cv(f,i),d=wd(d),d=wv(d,i),d=Cv(d,i),f=Dv(f),d=Dv(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===I_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===I_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=N+x+f,U=N+_+d,z=Tv(l,l.VERTEX_SHADER,D),I=Tv(l,l.FRAGMENT_SHADER,U);l.attachShader(b,z),l.attachShader(b,I),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function B(H){if(s.debug.checkShaderErrors){const st=l.getProgramInfoLog(b).trim(),Q=l.getShaderInfoLog(z).trim(),ut=l.getShaderInfoLog(I).trim();let ht=!0,k=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(ht=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,z,I);else{const rt=Rv(l,z,"vertex"),Y=Rv(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+st+`
`+rt+`
`+Y)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(Q===""||ut==="")&&(k=!1);k&&(H.diagnostics={runnable:ht,programLog:st,vertexShader:{log:Q,prefix:x},fragmentShader:{log:ut,prefix:_}})}l.deleteShader(z),l.deleteShader(I),j=new Gc(l,b),C=V1(l,b)}let j;this.getUniforms=function(){return j===void 0&&B(this),j};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(b,N1)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=O1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=z,this.fragmentShader=I,this}let tR=0;class eR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new nR(t),i.set(t,r)),r}}class nR{constructor(t){this.id=tR++,this.code=t,this.usedTimes=0}}function iR(s,t,i,r,l,c,f){const d=new jd,m=new eR,p=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return p.add(C),C===0?"uv":`uv${C}`}function x(C,A,H,st,Q){const ut=st.fog,ht=Q.geometry,k=C.isMeshStandardMaterial?st.environment:null,rt=(C.isMeshStandardMaterial?i:t).get(C.envMap||k),Y=rt&&rt.mapping===Zc?rt.image.height:null,xt=E[C.type];C.precision!==null&&(S=l.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const L=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,at=L!==void 0?L.length:0;let Tt=0;ht.morphAttributes.position!==void 0&&(Tt=1),ht.morphAttributes.normal!==void 0&&(Tt=2),ht.morphAttributes.color!==void 0&&(Tt=3);let wt,q,mt,Mt;if(xt){const be=Ui[xt];wt=be.vertexShader,q=be.fragmentShader}else wt=C.vertexShader,q=C.fragmentShader,m.update(C),mt=m.getVertexShaderID(C),Mt=m.getFragmentShaderID(C);const At=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),Jt=Q.isInstancedMesh===!0,Bt=Q.isBatchedMesh===!0,Ee=!!C.map,De=!!C.matcap,re=!!rt,F=!!C.aoMap,vn=!!C.lightMap,le=!!C.bumpMap,de=!!C.normalMap,Wt=!!C.displacementMap,Ue=!!C.emissiveMap,qt=!!C.metalnessMap,O=!!C.roughnessMap,T=C.anisotropy>0,nt=C.clearcoat>0,dt=C.dispersion>0,St=C.iridescence>0,pt=C.sheen>0,Vt=C.transmission>0,Ut=T&&!!C.anisotropyMap,It=nt&&!!C.clearcoatMap,_e=nt&&!!C.clearcoatNormalMap,bt=nt&&!!C.clearcoatRoughnessMap,Ft=St&&!!C.iridescenceMap,Qt=St&&!!C.iridescenceThicknessMap,kt=pt&&!!C.sheenColorMap,Ht=pt&&!!C.sheenRoughnessMap,se=!!C.specularMap,Zt=!!C.specularColorMap,Le=!!C.specularIntensityMap,X=Vt&&!!C.transmissionMap,Ot=Vt&&!!C.thicknessMap,ot=!!C.gradientMap,_t=!!C.alphaMap,Dt=C.alphaTest>0,Lt=!!C.alphaHash,te=!!C.extensions;let Ve=Va;C.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Ve=s.toneMapping);const an={shaderID:xt,shaderType:C.type,shaderName:C.name,vertexShader:wt,fragmentShader:q,defines:C.defines,customVertexShaderID:mt,customFragmentShaderID:Mt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Bt,batchingColor:Bt&&Q._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&Q.instanceColor!==null,instancingMorph:Jt&&Q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Os,alphaToCoverage:!!C.alphaToCoverage,map:Ee,matcap:De,envMap:re,envMapMode:re&&rt.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:vn,bumpMap:le,normalMap:de,displacementMap:y&&Wt,emissiveMap:Ue,normalMapObjectSpace:de&&C.normalMapType===WM,normalMapTangentSpace:de&&C.normalMapType===l0,metalnessMap:qt,roughnessMap:O,anisotropy:T,anisotropyMap:Ut,clearcoat:nt,clearcoatMap:It,clearcoatNormalMap:_e,clearcoatRoughnessMap:bt,dispersion:dt,iridescence:St,iridescenceMap:Ft,iridescenceThicknessMap:Qt,sheen:pt,sheenColorMap:kt,sheenRoughnessMap:Ht,specularMap:se,specularColorMap:Zt,specularIntensityMap:Le,transmission:Vt,transmissionMap:X,thicknessMap:Ot,gradientMap:ot,opaque:C.transparent===!1&&C.blending===As&&C.alphaToCoverage===!1,alphaMap:_t,alphaTest:Dt,alphaHash:Lt,combine:C.combine,mapUv:Ee&&b(C.map.channel),aoMapUv:F&&b(C.aoMap.channel),lightMapUv:vn&&b(C.lightMap.channel),bumpMapUv:le&&b(C.bumpMap.channel),normalMapUv:de&&b(C.normalMap.channel),displacementMapUv:Wt&&b(C.displacementMap.channel),emissiveMapUv:Ue&&b(C.emissiveMap.channel),metalnessMapUv:qt&&b(C.metalnessMap.channel),roughnessMapUv:O&&b(C.roughnessMap.channel),anisotropyMapUv:Ut&&b(C.anisotropyMap.channel),clearcoatMapUv:It&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:_e&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(C.sheenRoughnessMap.channel),specularMapUv:se&&b(C.specularMap.channel),specularColorMapUv:Zt&&b(C.specularColorMap.channel),specularIntensityMapUv:Le&&b(C.specularIntensityMap.channel),transmissionMapUv:X&&b(C.transmissionMap.channel),thicknessMapUv:Ot&&b(C.thicknessMap.channel),alphaMapUv:_t&&b(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(de||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ht.attributes.uv&&(Ee||_t),fog:!!ut,useFog:C.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ct,skinning:Q.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Tt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ee&&C.map.isVideoTexture===!0&&we.getTransfer(C.map.colorSpace)===ze,decodeVideoTextureEmissive:Ue&&C.emissiveMap.isVideoTexture===!0&&we.getTransfer(C.emissiveMap.colorSpace)===ze,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Li,flipSided:C.side===kn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:te&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&C.extensions.multiDraw===!0||Bt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return an.vertexUv1s=p.has(1),an.vertexUv2s=p.has(2),an.vertexUv3s=p.has(3),p.clear(),an}function _(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)A.push(H),A.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(N(A,C),D(A,C),A.push(s.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function N(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function D(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const A=E[C.type];let H;if(A){const st=Ui[A];H=EE.clone(st.uniforms)}else H=C.uniforms;return H}function z(C,A){let H;for(let st=0,Q=g.length;st<Q;st++){const ut=g[st];if(ut.cacheKey===A){H=ut,++H.usedTimes;break}}return H===void 0&&(H=new $1(s,A,C,c),g.push(H)),H}function I(C){if(--C.usedTimes===0){const A=g.indexOf(C);g[A]=g[g.length-1],g.pop(),C.destroy()}}function B(C){m.remove(C)}function j(){m.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:U,acquireProgram:z,releaseProgram:I,releaseShaderCache:B,programs:g,dispose:j}}function aR(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function rR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Lv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Nv(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(v,y,S,E,b,x){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:E,renderOrder:v.renderOrder,z:b,group:x},s[t]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=b,_.group=x),t++,_}function d(v,y,S,E,b,x){const _=f(v,y,S,E,b,x);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function m(v,y,S,E,b,x){const _=f(v,y,S,E,b,x);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,y){i.length>1&&i.sort(v||rR),r.length>1&&r.sort(y||Lv),l.length>1&&l.sort(y||Lv)}function g(){for(let v=t,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function sR(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new Nv,s.set(r,[f])):l>=c.length?(f=new Nv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function oR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new Ce};break;case"SpotLight":i={position:new et,direction:new et,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new et,halfWidth:new et,halfHeight:new et};break}return s[t.id]=i,i}}}function lR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let cR=0;function uR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function fR(s){const t=new oR,i=lR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new et);const l=new et,c=new qe,f=new qe;function d(p){let g=0,v=0,y=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,E=0,b=0,x=0,_=0,N=0,D=0,U=0,z=0,I=0,B=0;p.sort(uR);for(let C=0,A=p.length;C<A;C++){const H=p[C],st=H.color,Q=H.intensity,ut=H.distance,ht=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=st.r*Q,v+=st.g*Q,y+=st.b*Q;else if(H.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(H.sh.coefficients[k],Q);B++}else if(H.isDirectionalLight){const k=t.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const rt=H.shadow,Y=i.get(H);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=ht,r.directionalShadowMatrix[S]=H.shadow.matrix,N++}r.directional[S]=k,S++}else if(H.isSpotLight){const k=t.get(H);k.position.setFromMatrixPosition(H.matrixWorld),k.color.copy(st).multiplyScalar(Q),k.distance=ut,k.coneCos=Math.cos(H.angle),k.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),k.decay=H.decay,r.spot[b]=k;const rt=H.shadow;if(H.map&&(r.spotLightMap[z]=H.map,z++,rt.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[b]=rt.matrix,H.castShadow){const Y=i.get(H);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,r.spotShadow[b]=Y,r.spotShadowMap[b]=ht,U++}b++}else if(H.isRectAreaLight){const k=t.get(H);k.color.copy(st).multiplyScalar(Q),k.halfWidth.set(H.width*.5,0,0),k.halfHeight.set(0,H.height*.5,0),r.rectArea[x]=k,x++}else if(H.isPointLight){const k=t.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),k.distance=H.distance,k.decay=H.decay,H.castShadow){const rt=H.shadow,Y=i.get(H);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,Y.shadowCameraNear=rt.camera.near,Y.shadowCameraFar=rt.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=ht,r.pointShadowMatrix[E]=H.shadow.matrix,D++}r.point[E]=k,E++}else if(H.isHemisphereLight){const k=t.get(H);k.skyColor.copy(H.color).multiplyScalar(Q),k.groundColor.copy(H.groundColor).multiplyScalar(Q),r.hemi[_]=k,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=y;const j=r.hash;(j.directionalLength!==S||j.pointLength!==E||j.spotLength!==b||j.rectAreaLength!==x||j.hemiLength!==_||j.numDirectionalShadows!==N||j.numPointShadows!==D||j.numSpotShadows!==U||j.numSpotMaps!==z||j.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=x,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=U+z-I,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=B,j.directionalLength=S,j.pointLength=E,j.spotLength=b,j.rectAreaLength=x,j.hemiLength=_,j.numDirectionalShadows=N,j.numPointShadows=D,j.numSpotShadows=U,j.numSpotMaps=z,j.numLightProbes=B,r.version=cR++)}function m(p,g){let v=0,y=0,S=0,E=0,b=0;const x=g.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const D=p[_];if(D.isDirectionalLight){const U=r.directional[v];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),v++}else if(D.isSpotLight){const U=r.spot[S];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),S++}else if(D.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),f.identity(),c.copy(D.matrixWorld),c.premultiply(x),f.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const U=r.point[y];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(x),y++}else if(D.isHemisphereLight){const U=r.hemi[b];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(x),b++}}}return{setup:d,setupView:m,state:r}}function Ov(s){const t=new fR(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function hR(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Ov(s),t.set(l,[d])):c>=f.length?(d=new Ov(s),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mR(s,t,i){let r=new Zd;const l=new oe,c=new oe,f=new Qe,d=new LE({depthPacking:XM}),m=new NE,p={},g=i.maxTextureSize,v={[Xa]:kn,[kn]:Xa,[Li]:Li},y=new Wa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:dR,fragmentShader:pR}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Dr;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Oi(E,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kv;let _=this.type;this.render=function(I,B,j){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const C=s.getRenderTarget(),A=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),st=s.state;st.setBlending(Ga),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const Q=_!==ra&&this.type===ra,ut=_===ra&&this.type!==ra;for(let ht=0,k=I.length;ht<k;ht++){const rt=I[ht],Y=rt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const xt=Y.getFrameExtents();if(l.multiply(xt),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/xt.x),l.x=c.x*xt.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/xt.y),l.y=c.y*xt.y,Y.mapSize.y=c.y)),Y.map===null||Q===!0||ut===!0){const at=this.type!==ra?{minFilter:Si,magFilter:Si}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Rr(l.x,l.y,at),Y.map.texture.name=rt.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const L=Y.getViewportCount();for(let at=0;at<L;at++){const Tt=Y.getViewport(at);f.set(c.x*Tt.x,c.y*Tt.y,c.x*Tt.z,c.y*Tt.w),st.viewport(f),Y.updateMatrices(rt,at),r=Y.getFrustum(),U(B,j,Y.camera,rt,this.type)}Y.isPointLightShadow!==!0&&this.type===ra&&N(Y,j),Y.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(C,A,H)};function N(I,B){const j=t.update(b);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Rr(l.x,l.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(B,null,j,y,b,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(B,null,j,S,b,null)}function D(I,B,j,C){let A=null;const H=j.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)A=H;else if(A=j.isPointLight===!0?m:d,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const st=A.uuid,Q=B.uuid;let ut=p[st];ut===void 0&&(ut={},p[st]=ut);let ht=ut[Q];ht===void 0&&(ht=A.clone(),ut[Q]=ht,B.addEventListener("dispose",z)),A=ht}if(A.visible=B.visible,A.wireframe=B.wireframe,C===ra?A.side=B.shadowSide!==null?B.shadowSide:B.side:A.side=B.shadowSide!==null?B.shadowSide:v[B.side],A.alphaMap=B.alphaMap,A.alphaTest=B.alphaTest,A.map=B.map,A.clipShadows=B.clipShadows,A.clippingPlanes=B.clippingPlanes,A.clipIntersection=B.clipIntersection,A.displacementMap=B.displacementMap,A.displacementScale=B.displacementScale,A.displacementBias=B.displacementBias,A.wireframeLinewidth=B.wireframeLinewidth,A.linewidth=B.linewidth,j.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const st=s.properties.get(A);st.light=j}return A}function U(I,B,j,C,A){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===ra)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld);const Q=t.update(I),ut=I.material;if(Array.isArray(ut)){const ht=Q.groups;for(let k=0,rt=ht.length;k<rt;k++){const Y=ht[k],xt=ut[Y.materialIndex];if(xt&&xt.visible){const L=D(I,xt,C,A);I.onBeforeShadow(s,I,B,j,Q,L,Y),s.renderBufferDirect(j,null,Q,L,I,Y),I.onAfterShadow(s,I,B,j,Q,L,Y)}}}else if(ut.visible){const ht=D(I,ut,C,A);I.onBeforeShadow(s,I,B,j,Q,ht,null),s.renderBufferDirect(j,null,Q,ht,I,null),I.onAfterShadow(s,I,B,j,Q,ht,null)}}const st=I.children;for(let Q=0,ut=st.length;Q<ut;Q++)U(st[Q],B,j,C,A)}function z(I){I.target.removeEventListener("dispose",z);for(const j in p){const C=p[j],A=I.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const gR={[Xh]:Wh,[qh]:Zh,[Yh]:Kh,[Cs]:jh,[Wh]:Xh,[Zh]:qh,[Kh]:Yh,[jh]:Cs};function _R(s,t){function i(){let X=!1;const Ot=new Qe;let ot=null;const _t=new Qe(0,0,0,0);return{setMask:function(Dt){ot!==Dt&&!X&&(s.colorMask(Dt,Dt,Dt,Dt),ot=Dt)},setLocked:function(Dt){X=Dt},setClear:function(Dt,Lt,te,Ve,an){an===!0&&(Dt*=Ve,Lt*=Ve,te*=Ve),Ot.set(Dt,Lt,te,Ve),_t.equals(Ot)===!1&&(s.clearColor(Dt,Lt,te,Ve),_t.copy(Ot))},reset:function(){X=!1,ot=null,_t.set(-1,0,0,0)}}}function r(){let X=!1,Ot=!1,ot=null,_t=null,Dt=null;return{setReversed:function(Lt){if(Ot!==Lt){const te=t.get("EXT_clip_control");Ot?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT);const Ve=Dt;Dt=null,this.setClear(Ve)}Ot=Lt},getReversed:function(){return Ot},setTest:function(Lt){Lt?At(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(Lt){ot!==Lt&&!X&&(s.depthMask(Lt),ot=Lt)},setFunc:function(Lt){if(Ot&&(Lt=gR[Lt]),_t!==Lt){switch(Lt){case Xh:s.depthFunc(s.NEVER);break;case Wh:s.depthFunc(s.ALWAYS);break;case qh:s.depthFunc(s.LESS);break;case Cs:s.depthFunc(s.LEQUAL);break;case Yh:s.depthFunc(s.EQUAL);break;case jh:s.depthFunc(s.GEQUAL);break;case Zh:s.depthFunc(s.GREATER);break;case Kh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Lt}},setLocked:function(Lt){X=Lt},setClear:function(Lt){Dt!==Lt&&(Ot&&(Lt=1-Lt),s.clearDepth(Lt),Dt=Lt)},reset:function(){X=!1,ot=null,_t=null,Dt=null,Ot=!1}}}function l(){let X=!1,Ot=null,ot=null,_t=null,Dt=null,Lt=null,te=null,Ve=null,an=null;return{setTest:function(be){X||(be?At(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(be){Ot!==be&&!X&&(s.stencilMask(be),Ot=be)},setFunc:function(be,Cn,Dn){(ot!==be||_t!==Cn||Dt!==Dn)&&(s.stencilFunc(be,Cn,Dn),ot=be,_t=Cn,Dt=Dn)},setOp:function(be,Cn,Dn){(Lt!==be||te!==Cn||Ve!==Dn)&&(s.stencilOp(be,Cn,Dn),Lt=be,te=Cn,Ve=Dn)},setLocked:function(be){X=be},setClear:function(be){an!==be&&(s.clearStencil(be),an=be)},reset:function(){X=!1,Ot=null,ot=null,_t=null,Dt=null,Lt=null,te=null,Ve=null,an=null}}}const c=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},v={},y=new WeakMap,S=[],E=null,b=!1,x=null,_=null,N=null,D=null,U=null,z=null,I=null,B=new Ce(0,0,0),j=0,C=!1,A=null,H=null,st=null,Q=null,ut=null;const ht=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,rt=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=rt>=1):Y.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=rt>=2);let xt=null,L={};const at=s.getParameter(s.SCISSOR_BOX),Tt=s.getParameter(s.VIEWPORT),wt=new Qe().fromArray(at),q=new Qe().fromArray(Tt);function mt(X,Ot,ot,_t){const Dt=new Uint8Array(4),Lt=s.createTexture();s.bindTexture(X,Lt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let te=0;te<ot;te++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ot,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,Dt):s.texImage2D(Ot+te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Dt);return Lt}const Mt={};Mt[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),At(s.DEPTH_TEST),f.setFunc(Cs),le(!1),de(L_),At(s.CULL_FACE),F(Ga);function At(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Ct(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function Jt(X,Ot){return v[X]!==Ot?(s.bindFramebuffer(X,Ot),v[X]=Ot,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ot),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Bt(X,Ot){let ot=S,_t=!1;if(X){ot=y.get(Ot),ot===void 0&&(ot=[],y.set(Ot,ot));const Dt=X.textures;if(ot.length!==Dt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let Lt=0,te=Dt.length;Lt<te;Lt++)ot[Lt]=s.COLOR_ATTACHMENT0+Lt;ot.length=Dt.length,_t=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,_t=!0);_t&&s.drawBuffers(ot)}function Ee(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const De={[Sr]:s.FUNC_ADD,[gM]:s.FUNC_SUBTRACT,[_M]:s.FUNC_REVERSE_SUBTRACT};De[vM]=s.MIN,De[yM]=s.MAX;const re={[xM]:s.ZERO,[SM]:s.ONE,[MM]:s.SRC_COLOR,[Vh]:s.SRC_ALPHA,[wM]:s.SRC_ALPHA_SATURATE,[AM]:s.DST_COLOR,[bM]:s.DST_ALPHA,[EM]:s.ONE_MINUS_SRC_COLOR,[kh]:s.ONE_MINUS_SRC_ALPHA,[RM]:s.ONE_MINUS_DST_COLOR,[TM]:s.ONE_MINUS_DST_ALPHA,[CM]:s.CONSTANT_COLOR,[DM]:s.ONE_MINUS_CONSTANT_COLOR,[UM]:s.CONSTANT_ALPHA,[LM]:s.ONE_MINUS_CONSTANT_ALPHA};function F(X,Ot,ot,_t,Dt,Lt,te,Ve,an,be){if(X===Ga){b===!0&&(Ct(s.BLEND),b=!1);return}if(b===!1&&(At(s.BLEND),b=!0),X!==mM){if(X!==x||be!==C){if((_!==Sr||U!==Sr)&&(s.blendEquation(s.FUNC_ADD),_=Sr,U=Sr),be)switch(X){case As:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case N_:s.blendFunc(s.ONE,s.ONE);break;case O_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case P_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case As:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case N_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case O_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case P_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,D=null,z=null,I=null,B.set(0,0,0),j=0,x=X,C=be}return}Dt=Dt||Ot,Lt=Lt||ot,te=te||_t,(Ot!==_||Dt!==U)&&(s.blendEquationSeparate(De[Ot],De[Dt]),_=Ot,U=Dt),(ot!==N||_t!==D||Lt!==z||te!==I)&&(s.blendFuncSeparate(re[ot],re[_t],re[Lt],re[te]),N=ot,D=_t,z=Lt,I=te),(Ve.equals(B)===!1||an!==j)&&(s.blendColor(Ve.r,Ve.g,Ve.b,an),B.copy(Ve),j=an),x=X,C=!1}function vn(X,Ot){X.side===Li?Ct(s.CULL_FACE):At(s.CULL_FACE);let ot=X.side===kn;Ot&&(ot=!ot),le(ot),X.blending===As&&X.transparent===!1?F(Ga):F(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const _t=X.stencilWrite;d.setTest(_t),_t&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ue(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?At(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(X){A!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),A=X)}function de(X){X!==hM?(At(s.CULL_FACE),X!==H&&(X===L_?s.cullFace(s.BACK):X===dM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),H=X}function Wt(X){X!==st&&(k&&s.lineWidth(X),st=X)}function Ue(X,Ot,ot){X?(At(s.POLYGON_OFFSET_FILL),(Q!==Ot||ut!==ot)&&(s.polygonOffset(Ot,ot),Q=Ot,ut=ot)):Ct(s.POLYGON_OFFSET_FILL)}function qt(X){X?At(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function O(X){X===void 0&&(X=s.TEXTURE0+ht-1),xt!==X&&(s.activeTexture(X),xt=X)}function T(X,Ot,ot){ot===void 0&&(xt===null?ot=s.TEXTURE0+ht-1:ot=xt);let _t=L[ot];_t===void 0&&(_t={type:void 0,texture:void 0},L[ot]=_t),(_t.type!==X||_t.texture!==Ot)&&(xt!==ot&&(s.activeTexture(ot),xt=ot),s.bindTexture(X,Ot||Mt[X]),_t.type=X,_t.texture=Ot)}function nt(){const X=L[xt];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function dt(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Vt(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ft(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qt(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(X){wt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),wt.copy(X))}function Ht(X){q.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),q.copy(X))}function se(X,Ot){let ot=p.get(Ot);ot===void 0&&(ot=new WeakMap,p.set(Ot,ot));let _t=ot.get(X);_t===void 0&&(_t=s.getUniformBlockIndex(Ot,X.name),ot.set(X,_t))}function Zt(X,Ot){const _t=p.get(Ot).get(X);m.get(Ot)!==_t&&(s.uniformBlockBinding(Ot,_t,X.__bindingPointIndex),m.set(Ot,_t))}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},xt=null,L={},v={},y=new WeakMap,S=[],E=null,b=!1,x=null,_=null,N=null,D=null,U=null,z=null,I=null,B=new Ce(0,0,0),j=0,C=!1,A=null,H=null,st=null,Q=null,ut=null,wt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:At,disable:Ct,bindFramebuffer:Jt,drawBuffers:Bt,useProgram:Ee,setBlending:F,setMaterial:vn,setFlipSided:le,setCullFace:de,setLineWidth:Wt,setPolygonOffset:Ue,setScissorTest:qt,activeTexture:O,bindTexture:T,unbindTexture:nt,compressedTexImage2D:dt,compressedTexImage3D:St,texImage2D:Ft,texImage3D:Qt,updateUBOMapping:se,uniformBlockBinding:Zt,texStorage2D:_e,texStorage3D:bt,texSubImage2D:pt,texSubImage3D:Vt,compressedTexSubImage2D:Ut,compressedTexSubImage3D:It,scissor:kt,viewport:Ht,reset:Le}}function vR(s,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new oe,g=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return S?new OffscreenCanvas(O,T):Ko("canvas")}function b(O,T,nt){let dt=1;const St=qt(O);if((St.width>nt||St.height>nt)&&(dt=nt/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const pt=Math.floor(dt*St.width),Vt=Math.floor(dt*St.height);v===void 0&&(v=E(pt,Vt));const Ut=T?E(pt,Vt):v;return Ut.width=pt,Ut.height=Vt,Ut.getContext("2d").drawImage(O,0,0,pt,Vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+pt+"x"+Vt+")."),Ut}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),O;return O}function x(O){return O.generateMipmaps}function _(O){s.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(O,T,nt,dt,St=!1){if(O!==null){if(s[O]!==void 0)return s[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pt=T;if(T===s.RED&&(nt===s.FLOAT&&(pt=s.R32F),nt===s.HALF_FLOAT&&(pt=s.R16F),nt===s.UNSIGNED_BYTE&&(pt=s.R8)),T===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.R8UI),nt===s.UNSIGNED_SHORT&&(pt=s.R16UI),nt===s.UNSIGNED_INT&&(pt=s.R32UI),nt===s.BYTE&&(pt=s.R8I),nt===s.SHORT&&(pt=s.R16I),nt===s.INT&&(pt=s.R32I)),T===s.RG&&(nt===s.FLOAT&&(pt=s.RG32F),nt===s.HALF_FLOAT&&(pt=s.RG16F),nt===s.UNSIGNED_BYTE&&(pt=s.RG8)),T===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.RG8UI),nt===s.UNSIGNED_SHORT&&(pt=s.RG16UI),nt===s.UNSIGNED_INT&&(pt=s.RG32UI),nt===s.BYTE&&(pt=s.RG8I),nt===s.SHORT&&(pt=s.RG16I),nt===s.INT&&(pt=s.RG32I)),T===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(pt=s.RGB16UI),nt===s.UNSIGNED_INT&&(pt=s.RGB32UI),nt===s.BYTE&&(pt=s.RGB8I),nt===s.SHORT&&(pt=s.RGB16I),nt===s.INT&&(pt=s.RGB32I)),T===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(pt=s.RGBA16UI),nt===s.UNSIGNED_INT&&(pt=s.RGBA32UI),nt===s.BYTE&&(pt=s.RGBA8I),nt===s.SHORT&&(pt=s.RGBA16I),nt===s.INT&&(pt=s.RGBA32I)),T===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(pt=s.RGB9_E5),T===s.RGBA){const Vt=St?Xc:we.getTransfer(dt);nt===s.FLOAT&&(pt=s.RGBA32F),nt===s.HALF_FLOAT&&(pt=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(pt=Vt===ze?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)}return(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function U(O,T){let nt;return O?T===null||T===Ar||T===Ls?nt=s.DEPTH24_STENCIL8:T===sa?nt=s.DEPTH32F_STENCIL8:T===Zo&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ar||T===Ls?nt=s.DEPTH_COMPONENT24:T===sa?nt=s.DEPTH_COMPONENT32F:T===Zo&&(nt=s.DEPTH_COMPONENT16),nt}function z(O,T){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Si&&O.minFilter!==Ni?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function I(O){const T=O.target;T.removeEventListener("dispose",I),j(T),T.isVideoTexture&&g.delete(T)}function B(O){const T=O.target;T.removeEventListener("dispose",B),A(T)}function j(O){const T=r.get(O);if(T.__webglInit===void 0)return;const nt=O.source,dt=y.get(nt);if(dt){const St=dt[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&C(O),Object.keys(dt).length===0&&y.delete(nt)}r.remove(O)}function C(O){const T=r.get(O);s.deleteTexture(T.__webglTexture);const nt=O.source,dt=y.get(nt);delete dt[T.__cacheKey],f.memory.textures--}function A(O){const T=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let St=0;St<T.__webglFramebuffer[dt].length;St++)s.deleteFramebuffer(T.__webglFramebuffer[dt][St]);else s.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)s.deleteFramebuffer(T.__webglFramebuffer[dt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=O.textures;for(let dt=0,St=nt.length;dt<St;dt++){const pt=r.get(nt[dt]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),f.memory.textures--),r.remove(nt[dt])}r.remove(O)}let H=0;function st(){H=0}function Q(){const O=H;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),H+=1,O}function ut(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ht(O,T){const nt=r.get(O);if(O.isVideoTexture&&Wt(O),O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){const dt=O.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(nt,O,T);return}}i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+T)}function k(O,T){const nt=r.get(O);if(O.version>0&&nt.__version!==O.version){q(nt,O,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+T)}function rt(O,T){const nt=r.get(O);if(O.version>0&&nt.__version!==O.version){q(nt,O,T);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+T)}function Y(O,T){const nt=r.get(O);if(O.version>0&&nt.__version!==O.version){mt(nt,O,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+T)}const xt={[$h]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[td]:s.MIRRORED_REPEAT},L={[Si]:s.NEAREST,[VM]:s.NEAREST_MIPMAP_NEAREST,[uc]:s.NEAREST_MIPMAP_LINEAR,[Ni]:s.LINEAR,[ch]:s.LINEAR_MIPMAP_NEAREST,[br]:s.LINEAR_MIPMAP_LINEAR},at={[qM]:s.NEVER,[JM]:s.ALWAYS,[YM]:s.LESS,[c0]:s.LEQUAL,[jM]:s.EQUAL,[QM]:s.GEQUAL,[ZM]:s.GREATER,[KM]:s.NOTEQUAL};function Tt(O,T){if(T.type===sa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ni||T.magFilter===ch||T.magFilter===uc||T.magFilter===br||T.minFilter===Ni||T.minFilter===ch||T.minFilter===uc||T.minFilter===br)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,xt[T.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,xt[T.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,xt[T.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,L[T.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,at[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Si||T.minFilter!==uc&&T.minFilter!==br||T.type===sa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(O,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function wt(O,T){let nt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",I));const dt=T.source;let St=y.get(dt);St===void 0&&(St={},y.set(dt,St));const pt=ut(T);if(pt!==O.__cacheKey){St[pt]===void 0&&(St[pt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,nt=!0),St[pt].usedTimes++;const Vt=St[O.__cacheKey];Vt!==void 0&&(St[O.__cacheKey].usedTimes--,Vt.usedTimes===0&&C(T)),O.__cacheKey=pt,O.__webglTexture=St[pt].texture}return nt}function q(O,T,nt){let dt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=s.TEXTURE_3D);const St=wt(O,T),pt=T.source;i.bindTexture(dt,O.__webglTexture,s.TEXTURE0+nt);const Vt=r.get(pt);if(pt.version!==Vt.__version||St===!0){i.activeTexture(s.TEXTURE0+nt);const Ut=we.getPrimaries(we.workingColorSpace),It=T.colorSpace===Ha?null:we.getPrimaries(T.colorSpace),_e=T.colorSpace===Ha||Ut===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let bt=b(T.image,!1,l.maxTextureSize);bt=Ue(T,bt);const Ft=c.convert(T.format,T.colorSpace),Qt=c.convert(T.type);let kt=D(T.internalFormat,Ft,Qt,T.colorSpace,T.isVideoTexture);Tt(dt,T);let Ht;const se=T.mipmaps,Zt=T.isVideoTexture!==!0,Le=Vt.__version===void 0||St===!0,X=pt.dataReady,Ot=z(T,bt);if(T.isDepthTexture)kt=U(T.format===Ns,T.type),Le&&(Zt?i.texStorage2D(s.TEXTURE_2D,1,kt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,kt,bt.width,bt.height,0,Ft,Qt,null));else if(T.isDataTexture)if(se.length>0){Zt&&Le&&i.texStorage2D(s.TEXTURE_2D,Ot,kt,se[0].width,se[0].height);for(let ot=0,_t=se.length;ot<_t;ot++)Ht=se[ot],Zt?X&&i.texSubImage2D(s.TEXTURE_2D,ot,0,0,Ht.width,Ht.height,Ft,Qt,Ht.data):i.texImage2D(s.TEXTURE_2D,ot,kt,Ht.width,Ht.height,0,Ft,Qt,Ht.data);T.generateMipmaps=!1}else Zt?(Le&&i.texStorage2D(s.TEXTURE_2D,Ot,kt,bt.width,bt.height),X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,Ft,Qt,bt.data)):i.texImage2D(s.TEXTURE_2D,0,kt,bt.width,bt.height,0,Ft,Qt,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Zt&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,kt,se[0].width,se[0].height,bt.depth);for(let ot=0,_t=se.length;ot<_t;ot++)if(Ht=se[ot],T.format!==xi)if(Ft!==null)if(Zt){if(X)if(T.layerUpdates.size>0){const Dt=uv(Ht.width,Ht.height,T.format,T.type);for(const Lt of T.layerUpdates){const te=Ht.data.subarray(Lt*Dt/Ht.data.BYTES_PER_ELEMENT,(Lt+1)*Dt/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,Lt,Ht.width,Ht.height,1,Ft,te)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,Ht.width,Ht.height,bt.depth,Ft,Ht.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,kt,Ht.width,Ht.height,bt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?X&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,Ht.width,Ht.height,bt.depth,Ft,Qt,Ht.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ot,kt,Ht.width,Ht.height,bt.depth,0,Ft,Qt,Ht.data)}else{Zt&&Le&&i.texStorage2D(s.TEXTURE_2D,Ot,kt,se[0].width,se[0].height);for(let ot=0,_t=se.length;ot<_t;ot++)Ht=se[ot],T.format!==xi?Ft!==null?Zt?X&&i.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,Ht.width,Ht.height,Ft,Ht.data):i.compressedTexImage2D(s.TEXTURE_2D,ot,kt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?X&&i.texSubImage2D(s.TEXTURE_2D,ot,0,0,Ht.width,Ht.height,Ft,Qt,Ht.data):i.texImage2D(s.TEXTURE_2D,ot,kt,Ht.width,Ht.height,0,Ft,Qt,Ht.data)}else if(T.isDataArrayTexture)if(Zt){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ot,kt,bt.width,bt.height,bt.depth),X)if(T.layerUpdates.size>0){const ot=uv(bt.width,bt.height,T.format,T.type);for(const _t of T.layerUpdates){const Dt=bt.data.subarray(_t*ot/bt.data.BYTES_PER_ELEMENT,(_t+1)*ot/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Ft,Qt,Dt)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Qt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,kt,bt.width,bt.height,bt.depth,0,Ft,Qt,bt.data);else if(T.isData3DTexture)Zt?(Le&&i.texStorage3D(s.TEXTURE_3D,Ot,kt,bt.width,bt.height,bt.depth),X&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ft,Qt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,kt,bt.width,bt.height,bt.depth,0,Ft,Qt,bt.data);else if(T.isFramebufferTexture){if(Le)if(Zt)i.texStorage2D(s.TEXTURE_2D,Ot,kt,bt.width,bt.height);else{let ot=bt.width,_t=bt.height;for(let Dt=0;Dt<Ot;Dt++)i.texImage2D(s.TEXTURE_2D,Dt,kt,ot,_t,0,Ft,Qt,null),ot>>=1,_t>>=1}}else if(se.length>0){if(Zt&&Le){const ot=qt(se[0]);i.texStorage2D(s.TEXTURE_2D,Ot,kt,ot.width,ot.height)}for(let ot=0,_t=se.length;ot<_t;ot++)Ht=se[ot],Zt?X&&i.texSubImage2D(s.TEXTURE_2D,ot,0,0,Ft,Qt,Ht):i.texImage2D(s.TEXTURE_2D,ot,kt,Ft,Qt,Ht);T.generateMipmaps=!1}else if(Zt){if(Le){const ot=qt(bt);i.texStorage2D(s.TEXTURE_2D,Ot,kt,ot.width,ot.height)}X&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ft,Qt,bt)}else i.texImage2D(s.TEXTURE_2D,0,kt,Ft,Qt,bt);x(T)&&_(dt),Vt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function mt(O,T,nt){if(T.image.length!==6)return;const dt=wt(O,T),St=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+nt);const pt=r.get(St);if(St.version!==pt.__version||dt===!0){i.activeTexture(s.TEXTURE0+nt);const Vt=we.getPrimaries(we.workingColorSpace),Ut=T.colorSpace===Ha?null:we.getPrimaries(T.colorSpace),It=T.colorSpace===Ha||Vt===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const _e=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Ft=[];for(let _t=0;_t<6;_t++)!_e&&!bt?Ft[_t]=b(T.image[_t],!0,l.maxCubemapSize):Ft[_t]=bt?T.image[_t].image:T.image[_t],Ft[_t]=Ue(T,Ft[_t]);const Qt=Ft[0],kt=c.convert(T.format,T.colorSpace),Ht=c.convert(T.type),se=D(T.internalFormat,kt,Ht,T.colorSpace),Zt=T.isVideoTexture!==!0,Le=pt.__version===void 0||dt===!0,X=St.dataReady;let Ot=z(T,Qt);Tt(s.TEXTURE_CUBE_MAP,T);let ot;if(_e){Zt&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ot,se,Qt.width,Qt.height);for(let _t=0;_t<6;_t++){ot=Ft[_t].mipmaps;for(let Dt=0;Dt<ot.length;Dt++){const Lt=ot[Dt];T.format!==xi?kt!==null?Zt?X&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,0,0,Lt.width,Lt.height,kt,Lt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,se,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,0,0,Lt.width,Lt.height,kt,Ht,Lt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,se,Lt.width,Lt.height,0,kt,Ht,Lt.data)}}}else{if(ot=T.mipmaps,Zt&&Le){ot.length>0&&Ot++;const _t=qt(Ft[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ot,se,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){Zt?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ft[_t].width,Ft[_t].height,kt,Ht,Ft[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,Ft[_t].width,Ft[_t].height,0,kt,Ht,Ft[_t].data);for(let Dt=0;Dt<ot.length;Dt++){const te=ot[Dt].image[_t].image;Zt?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,0,0,te.width,te.height,kt,Ht,te.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,se,te.width,te.height,0,kt,Ht,te.data)}}else{Zt?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,kt,Ht,Ft[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,se,kt,Ht,Ft[_t]);for(let Dt=0;Dt<ot.length;Dt++){const Lt=ot[Dt];Zt?X&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,0,0,kt,Ht,Lt.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,se,kt,Ht,Lt.image[_t])}}}x(T)&&_(s.TEXTURE_CUBE_MAP),pt.__version=St.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function Mt(O,T,nt,dt,St,pt){const Vt=c.convert(nt.format,nt.colorSpace),Ut=c.convert(nt.type),It=D(nt.internalFormat,Vt,Ut,nt.colorSpace),_e=r.get(T),bt=r.get(nt);if(bt.__renderTarget=T,!_e.__hasExternalTextures){const Ft=Math.max(1,T.width>>pt),Qt=Math.max(1,T.height>>pt);St===s.TEXTURE_3D||St===s.TEXTURE_2D_ARRAY?i.texImage3D(St,pt,It,Ft,Qt,T.depth,0,Vt,Ut,null):i.texImage2D(St,pt,It,Ft,Qt,0,Vt,Ut,null)}i.bindFramebuffer(s.FRAMEBUFFER,O),de(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,St,bt.__webglTexture,0,le(T)):(St===s.TEXTURE_2D||St>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,St,bt.__webglTexture,pt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function At(O,T,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,O),T.depthBuffer){const dt=T.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,pt=U(T.stencilBuffer,St),Vt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ut=le(T);de(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ut,pt,T.width,T.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,pt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,pt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Vt,s.RENDERBUFFER,O)}else{const dt=T.textures;for(let St=0;St<dt.length;St++){const pt=dt[St],Vt=c.convert(pt.format,pt.colorSpace),Ut=c.convert(pt.type),It=D(pt.internalFormat,Vt,Ut,pt.colorSpace),_e=le(T);nt&&de(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,It,T.width,T.height):de(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,It,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,It,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=r.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ht(T.depthTexture,0);const St=dt.__webglTexture,pt=le(T);if(T.depthTexture.format===Rs)de(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,St,0);else if(T.depthTexture.format===Ns)de(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Jt(O){const T=r.get(O),nt=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const dt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=dt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");Ct(T.__webglFramebuffer,O)}else if(nt){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=s.createRenderbuffer(),At(T.__webglDepthbuffer[dt],O,!1);else{const St=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),At(T.__webglDepthbuffer,O,!1);else{const dt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,St),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,St)}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(O,T,nt){const dt=r.get(O);T!==void 0&&Mt(dt.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&Jt(O)}function Ee(O){const T=O.texture,nt=r.get(O),dt=r.get(T);O.addEventListener("dispose",B);const St=O.textures,pt=O.isWebGLCubeRenderTarget===!0,Vt=St.length>1;if(Vt||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=T.version,f.memory.textures++),pt){nt.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[Ut]=[];for(let It=0;It<T.mipmaps.length;It++)nt.__webglFramebuffer[Ut][It]=s.createFramebuffer()}else nt.__webglFramebuffer[Ut]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)nt.__webglFramebuffer[Ut]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Vt)for(let Ut=0,It=St.length;Ut<It;Ut++){const _e=r.get(St[Ut]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),f.memory.textures++)}if(O.samples>0&&de(O)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ut=0;Ut<St.length;Ut++){const It=St[Ut];nt.__webglColorRenderbuffer[Ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[Ut]);const _e=c.convert(It.format,It.colorSpace),bt=c.convert(It.type),Ft=D(It.internalFormat,_e,bt,It.colorSpace,O.isXRRenderTarget===!0),Qt=le(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qt,Ft,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),At(nt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){i.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let It=0;It<T.mipmaps.length;It++)Mt(nt.__webglFramebuffer[Ut][It],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,It);else Mt(nt.__webglFramebuffer[Ut],O,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);x(T)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Ut=0,It=St.length;Ut<It;Ut++){const _e=St[Ut],bt=r.get(_e);i.bindTexture(s.TEXTURE_2D,bt.__webglTexture),Tt(s.TEXTURE_2D,_e),Mt(nt.__webglFramebuffer,O,_e,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,0),x(_e)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Ut=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ut=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ut,dt.__webglTexture),Tt(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let It=0;It<T.mipmaps.length;It++)Mt(nt.__webglFramebuffer[It],O,T,s.COLOR_ATTACHMENT0,Ut,It);else Mt(nt.__webglFramebuffer,O,T,s.COLOR_ATTACHMENT0,Ut,0);x(T)&&_(Ut),i.unbindTexture()}O.depthBuffer&&Jt(O)}function De(O){const T=O.textures;for(let nt=0,dt=T.length;nt<dt;nt++){const St=T[nt];if(x(St)){const pt=N(O),Vt=r.get(St).__webglTexture;i.bindTexture(pt,Vt),_(pt),i.unbindTexture()}}}const re=[],F=[];function vn(O){if(O.samples>0){if(de(O)===!1){const T=O.textures,nt=O.width,dt=O.height;let St=s.COLOR_BUFFER_BIT;const pt=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Vt=r.get(O),Ut=T.length>1;if(Ut)for(let It=0;It<T.length;It++)i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let It=0;It<T.length;It++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(St|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(St|=s.STENCIL_BUFFER_BIT)),Ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[It]);const _e=r.get(T[It]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,St,s.NEAREST),m===!0&&(re.length=0,F.length=0,re.push(s.COLOR_ATTACHMENT0+It),O.depthBuffer&&O.resolveDepthBuffer===!1&&(re.push(pt),F.push(pt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ut)for(let It=0;It<T.length;It++){i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[It]);const _e=r.get(T[It]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,_e,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function le(O){return Math.min(l.maxSamples,O.samples)}function de(O){const T=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(O){const T=f.render.frame;g.get(O)!==T&&(g.set(O,T),O.update())}function Ue(O,T){const nt=O.colorSpace,dt=O.format,St=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||nt!==Os&&nt!==Ha&&(we.getTransfer(nt)===ze?(dt!==xi||St!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),T}function qt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=st,this.setTexture2D=ht,this.setTexture2DArray=k,this.setTexture3D=rt,this.setTextureCube=Y,this.rebindTextures=Bt,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=de}function yR(s,t){function i(r,l=Ha){let c;const f=we.getTransfer(l);if(r===ua)return s.UNSIGNED_BYTE;if(r===Hd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===t0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Jv)return s.BYTE;if(r===$v)return s.SHORT;if(r===Zo)return s.UNSIGNED_SHORT;if(r===Fd)return s.INT;if(r===Ar)return s.UNSIGNED_INT;if(r===sa)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===e0)return s.ALPHA;if(r===n0)return s.RGB;if(r===xi)return s.RGBA;if(r===i0)return s.LUMINANCE;if(r===a0)return s.LUMINANCE_ALPHA;if(r===Rs)return s.DEPTH_COMPONENT;if(r===Ns)return s.DEPTH_STENCIL;if(r===r0)return s.RED;if(r===Vd)return s.RED_INTEGER;if(r===s0)return s.RG;if(r===kd)return s.RG_INTEGER;if(r===Xd)return s.RGBA_INTEGER;if(r===Pc||r===zc||r===Bc||r===Ic)if(f===ze)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Pc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Pc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ic)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ed||r===nd||r===id||r===ad)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ed)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===nd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===id)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ad)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rd||r===sd||r===od)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===rd||r===sd)return f===ze?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===od)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ld||r===cd||r===ud||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d||r===vd||r===yd||r===xd||r===Sd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===ld)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ud)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===dd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===md)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===gd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_d)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===vd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sd)return f===ze?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fc||r===Md||r===Ed)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Fc)return f===ze?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ed)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===o0||r===bd||r===Td||r===Ad)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Fc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Td)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ad)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ls?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const xR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new zn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Wa({vertexShader:xR,fragmentShader:SR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Oi(new Kc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ER extends Cr{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,v=null,y=null,S=null,E=null;const b=new MR,x=i.getContextAttributes();let _=null,N=null;const D=[],U=[],z=new oe;let I=null;const B=new Jn;B.viewport=new Qe;const j=new Jn;j.viewport=new Qe;const C=[B,j],A=new kE;let H=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let mt=D[q];return mt===void 0&&(mt=new Dh,D[q]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(q){let mt=D[q];return mt===void 0&&(mt=new Dh,D[q]=mt),mt.getGripSpace()},this.getHand=function(q){let mt=D[q];return mt===void 0&&(mt=new Dh,D[q]=mt),mt.getHandSpace()};function Q(q){const mt=U.indexOf(q.inputSource);if(mt===-1)return;const Mt=D[mt];Mt!==void 0&&(Mt.update(q.inputSource,q.frame,p||f),Mt.dispatchEvent({type:q.type,data:q.inputSource}))}function ut(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",ht);for(let q=0;q<D.length;q++){const mt=U[q];mt!==null&&(U[q]=null,D[q].disconnect(mt))}H=null,st=null,b.reset(),t.setRenderTarget(_),S=null,y=null,v=null,l=null,N=null,wt.stop(),r.isPresenting=!1,t.setPixelRatio(I),t.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){c=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",ht),x.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(z),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,At=null,Ct=null;x.depth&&(Ct=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=x.stencil?Ns:Rs,At=x.stencil?Ls:Ar);const Jt={colorFormat:i.RGBA8,depthFormat:Ct,scaleFactor:c};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(Jt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),N=new Rr(y.textureWidth,y.textureHeight,{format:xi,type:ua,depthTexture:new y0(y.textureWidth,y.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Rr(S.framebufferWidth,S.framebufferHeight,{format:xi,type:ua,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ht(q){for(let mt=0;mt<q.removed.length;mt++){const Mt=q.removed[mt],At=U.indexOf(Mt);At>=0&&(U[At]=null,D[At].disconnect(Mt))}for(let mt=0;mt<q.added.length;mt++){const Mt=q.added[mt];let At=U.indexOf(Mt);if(At===-1){for(let Jt=0;Jt<D.length;Jt++)if(Jt>=U.length){U.push(Mt),At=Jt;break}else if(U[Jt]===null){U[Jt]=Mt,At=Jt;break}if(At===-1)break}const Ct=D[At];Ct&&Ct.connect(Mt)}}const k=new et,rt=new et;function Y(q,mt,Mt){k.setFromMatrixPosition(mt.matrixWorld),rt.setFromMatrixPosition(Mt.matrixWorld);const At=k.distanceTo(rt),Ct=mt.projectionMatrix.elements,Jt=Mt.projectionMatrix.elements,Bt=Ct[14]/(Ct[10]-1),Ee=Ct[14]/(Ct[10]+1),De=(Ct[9]+1)/Ct[5],re=(Ct[9]-1)/Ct[5],F=(Ct[8]-1)/Ct[0],vn=(Jt[8]+1)/Jt[0],le=Bt*F,de=Bt*vn,Wt=At/(-F+vn),Ue=Wt*-F;if(mt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ue),q.translateZ(Wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ct[10]===-1)q.projectionMatrix.copy(mt.projectionMatrix),q.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const qt=Bt+Wt,O=Ee+Wt,T=le-Ue,nt=de+(At-Ue),dt=De*Ee/O*qt,St=re*Ee/O*qt;q.projectionMatrix.makePerspective(T,nt,dt,St,qt,O),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function xt(q,mt){mt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(mt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let mt=q.near,Mt=q.far;b.texture!==null&&(b.depthNear>0&&(mt=b.depthNear),b.depthFar>0&&(Mt=b.depthFar)),A.near=j.near=B.near=mt,A.far=j.far=B.far=Mt,(H!==A.near||st!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,st=A.far),B.layers.mask=q.layers.mask|2,j.layers.mask=q.layers.mask|4,A.layers.mask=B.layers.mask|j.layers.mask;const At=q.parent,Ct=A.cameras;xt(A,At);for(let Jt=0;Jt<Ct.length;Jt++)xt(Ct[Jt],At);Ct.length===2?Y(A,B,j):A.projectionMatrix.copy(B.projectionMatrix),L(q,A,At)};function L(q,mt,Mt){Mt===null?q.matrix.copy(mt.matrixWorld):(q.matrix.copy(Mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(mt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(mt.projectionMatrix),q.projectionMatrixInverse.copy(mt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(q){m=q,y!==null&&(y.fixedFoveation=q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(A)};let at=null;function Tt(q,mt){if(g=mt.getViewerPose(p||f),E=mt,g!==null){const Mt=g.views;S!==null&&(t.setRenderTargetFramebuffer(N,S.framebuffer),t.setRenderTarget(N));let At=!1;Mt.length!==A.cameras.length&&(A.cameras.length=0,At=!0);for(let Bt=0;Bt<Mt.length;Bt++){const Ee=Mt[Bt];let De=null;if(S!==null)De=S.getViewport(Ee);else{const F=v.getViewSubImage(y,Ee);De=F.viewport,Bt===0&&(t.setRenderTargetTextures(N,F.colorTexture,y.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(N))}let re=C[Bt];re===void 0&&(re=new Jn,re.layers.enable(Bt),re.viewport=new Qe,C[Bt]=re),re.matrix.fromArray(Ee.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Ee.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(De.x,De.y,De.width,De.height),Bt===0&&(A.matrix.copy(re.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),At===!0&&A.cameras.push(re)}const Ct=l.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Bt=v.getDepthInformation(Mt[0]);Bt&&Bt.isValid&&Bt.texture&&b.init(t,Bt,l.renderState)}}for(let Mt=0;Mt<D.length;Mt++){const At=U[Mt],Ct=D[Mt];At!==null&&Ct!==void 0&&Ct.update(At,mt,p||f)}at&&at(q,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),E=null}const wt=new S0;wt.setAnimationLoop(Tt),this.setAnimationLoop=function(q){at=q},this.dispose=function(){}}}const vr=new zi,bR=new qe;function TR(s,t){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,g0(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,N,D,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(x,_):_.isMeshToonMaterial?(c(x,_),v(x,_)):_.isMeshPhongMaterial?(c(x,_),g(x,_)):_.isMeshStandardMaterial?(c(x,_),y(x,_),_.isMeshPhysicalMaterial&&S(x,_,U)):_.isMeshMatcapMaterial?(c(x,_),E(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),b(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(f(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?m(x,_,N,D):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===kn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===kn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const N=t.get(_),D=N.envMap,U=N.envMapRotation;D&&(x.envMap.value=D,vr.copy(U),vr.x*=-1,vr.y*=-1,vr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),x.envMapRotation.value.setFromMatrix4(bR.makeRotationFromEuler(vr)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function m(x,_,N,D){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*N,x.scale.value=D*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,N){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function b(x,_){const N=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function AR(s,t,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,D){const U=D.program;r.uniformBlockBinding(N,U)}function p(N,D){let U=l[N.id];U===void 0&&(E(N),U=g(N),l[N.id]=U,N.addEventListener("dispose",x));const z=D.program;r.updateUBOMapping(N,z);const I=t.render.frame;c[N.id]!==I&&(y(N),c[N.id]=I)}function g(N){const D=v();N.__bindingPointIndex=D;const U=s.createBuffer(),z=N.__size,I=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,z,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,U),U}function v(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const D=l[N.id],U=N.uniforms,z=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let I=0,B=U.length;I<B;I++){const j=Array.isArray(U[I])?U[I]:[U[I]];for(let C=0,A=j.length;C<A;C++){const H=j[C];if(S(H,I,C,z)===!0){const st=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let ht=0;ht<Q.length;ht++){const k=Q[ht],rt=b(k);typeof k=="number"||typeof k=="boolean"?(H.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,st+ut,H.__data)):k.isMatrix3?(H.__data[0]=k.elements[0],H.__data[1]=k.elements[1],H.__data[2]=k.elements[2],H.__data[3]=0,H.__data[4]=k.elements[3],H.__data[5]=k.elements[4],H.__data[6]=k.elements[5],H.__data[7]=0,H.__data[8]=k.elements[6],H.__data[9]=k.elements[7],H.__data[10]=k.elements[8],H.__data[11]=0):(k.toArray(H.__data,ut),ut+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,st,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(N,D,U,z){const I=N.value,B=D+"_"+U;if(z[B]===void 0)return typeof I=="number"||typeof I=="boolean"?z[B]=I:z[B]=I.clone(),!0;{const j=z[B];if(typeof I=="number"||typeof I=="boolean"){if(j!==I)return z[B]=I,!0}else if(j.equals(I)===!1)return j.copy(I),!0}return!1}function E(N){const D=N.uniforms;let U=0;const z=16;for(let B=0,j=D.length;B<j;B++){const C=Array.isArray(D[B])?D[B]:[D[B]];for(let A=0,H=C.length;A<H;A++){const st=C[A],Q=Array.isArray(st.value)?st.value:[st.value];for(let ut=0,ht=Q.length;ut<ht;ut++){const k=Q[ut],rt=b(k),Y=U%z,xt=Y%rt.boundary,L=Y+xt;U+=xt,L!==0&&z-L<rt.storage&&(U+=z-L),st.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=U,U+=rt.storage}}}const I=U%z;return I>0&&(U+=z-I),N.__size=U,N.__cache={},this}function b(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),D}function x(N){const D=N.target;D.removeEventListener("dispose",x);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function _(){for(const N in l)s.deleteBuffer(l[N]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class RR{constructor(t={}){const{canvas:i=eE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),b=new Int32Array(4);let x=null,_=null;const N=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=Va,this.toneMappingExposure=1;const U=this;let z=!1,I=0,B=0,j=null,C=-1,A=null;const H=new Qe,st=new Qe;let Q=null;const ut=new Ce(0);let ht=0,k=i.width,rt=i.height,Y=1,xt=null,L=null;const at=new Qe(0,0,k,rt),Tt=new Qe(0,0,k,rt);let wt=!1;const q=new Zd;let mt=!1,Mt=!1;this.transmissionResolutionScale=1;const At=new qe,Ct=new qe,Jt=new et,Bt=new Qe,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function re(){return j===null?Y:1}let F=r;function vn(w,W){return i.getContext(w,W)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Bd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Dt,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),F===null){const W="webgl2";if(F=vn(W,w),F===null)throw vn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let le,de,Wt,Ue,qt,O,T,nt,dt,St,pt,Vt,Ut,It,_e,bt,Ft,Qt,kt,Ht,se,Zt,Le,X;function Ot(){le=new BA(F),le.init(),Zt=new yR(F,le),de=new DA(F,le,t,Zt),Wt=new _R(F,le),de.reverseDepthBuffer&&y&&Wt.buffers.depth.setReversed(!0),Ue=new HA(F),qt=new aR,O=new vR(F,le,Wt,qt,de,Zt,Ue),T=new LA(U),nt=new zA(U),dt=new qE(F),Le=new wA(F,dt),St=new IA(F,dt,Ue,Le),pt=new VA(F,St,dt,Ue),kt=new GA(F,de,O),bt=new UA(qt),Vt=new iR(U,T,nt,le,de,Le,bt),Ut=new TR(U,qt),It=new sR,_e=new hR(le),Qt=new RA(U,T,nt,Wt,pt,S,m),Ft=new mR(U,pt,de),X=new AR(F,Ue,de,Wt),Ht=new CA(F,le,Ue),se=new FA(F,le,Ue),Ue.programs=Vt.programs,U.capabilities=de,U.extensions=le,U.properties=qt,U.renderLists=It,U.shadowMap=Ft,U.state=Wt,U.info=Ue}Ot();const ot=new ER(U,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=le.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=le.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(k,rt,!1))},this.getSize=function(w){return w.set(k,rt)},this.setSize=function(w,W,tt=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,rt=W,i.width=Math.floor(w*Y),i.height=Math.floor(W*Y),tt===!0&&(i.style.width=w+"px",i.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(k*Y,rt*Y).floor()},this.setDrawingBufferSize=function(w,W,tt){k=w,rt=W,Y=tt,i.width=Math.floor(w*tt),i.height=Math.floor(W*tt),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(at)},this.setViewport=function(w,W,tt,J){w.isVector4?at.set(w.x,w.y,w.z,w.w):at.set(w,W,tt,J),Wt.viewport(H.copy(at).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Tt)},this.setScissor=function(w,W,tt,J){w.isVector4?Tt.set(w.x,w.y,w.z,w.w):Tt.set(w,W,tt,J),Wt.scissor(st.copy(Tt).multiplyScalar(Y).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(w){Wt.setScissorTest(wt=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){L=w},this.getClearColor=function(w){return w.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,tt=!0){let J=0;if(w){let Z=!1;if(j!==null){const Et=j.texture.format;Z=Et===Xd||Et===kd||Et===Vd}if(Z){const Et=j.texture.type,Rt=Et===ua||Et===Ar||Et===Zo||Et===Ls||Et===Hd||Et===Gd,zt=Qt.getClearColor(),Pt=Qt.getClearAlpha(),ee=zt.r,ne=zt.g,jt=zt.b;Rt?(E[0]=ee,E[1]=ne,E[2]=jt,E[3]=Pt,F.clearBufferuiv(F.COLOR,0,E)):(b[0]=ee,b[1]=ne,b[2]=jt,b[3]=Pt,F.clearBufferiv(F.COLOR,0,b))}else J|=F.COLOR_BUFFER_BIT}W&&(J|=F.DEPTH_BUFFER_BIT),tt&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Dt,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),Qt.dispose(),It.dispose(),_e.dispose(),qt.dispose(),T.dispose(),nt.dispose(),pt.dispose(),Le.dispose(),X.dispose(),Vt.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",il),ot.removeEventListener("sessionend",Vs),Ti.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const w=Ue.autoReset,W=Ft.enabled,tt=Ft.autoUpdate,J=Ft.needsUpdate,Z=Ft.type;Ot(),Ue.autoReset=w,Ft.enabled=W,Ft.autoUpdate=tt,Ft.needsUpdate=J,Ft.type=Z}function Lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function te(w){const W=w.target;W.removeEventListener("dispose",te),Ve(W)}function Ve(w){an(w),qt.remove(w)}function an(w){const W=qt.get(w).programs;W!==void 0&&(W.forEach(function(tt){Vt.releaseProgram(tt)}),w.isShaderMaterial&&Vt.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,tt,J,Z,Et){W===null&&(W=Ee);const Rt=Z.isMesh&&Z.matrixWorld.determinant()<0,zt=Jc(w,W,tt,J,Z);Wt.setMaterial(J,Rt);let Pt=tt.index,ee=1;if(J.wireframe===!0){if(Pt=St.getWireframeAttribute(tt),Pt===void 0)return;ee=2}const ne=tt.drawRange,jt=tt.attributes.position;let ve=ne.start*ee,ye=(ne.start+ne.count)*ee;Et!==null&&(ve=Math.max(ve,Et.start*ee),ye=Math.min(ye,(Et.start+Et.count)*ee)),Pt!==null?(ve=Math.max(ve,0),ye=Math.min(ye,Pt.count)):jt!=null&&(ve=Math.max(ve,0),ye=Math.min(ye,jt.count));const Ge=ye-ve;if(Ge<0||Ge===1/0)return;Le.setup(Z,J,zt,tt,Pt);let Te,ie=Ht;if(Pt!==null&&(Te=dt.get(Pt),ie=se,ie.setIndex(Te)),Z.isMesh)J.wireframe===!0?(Wt.setLineWidth(J.wireframeLinewidth*re()),ie.setMode(F.LINES)):ie.setMode(F.TRIANGLES);else if(Z.isLine){let Kt=J.linewidth;Kt===void 0&&(Kt=1),Wt.setLineWidth(Kt*re()),Z.isLineSegments?ie.setMode(F.LINES):Z.isLineLoop?ie.setMode(F.LINE_LOOP):ie.setMode(F.LINE_STRIP)}else Z.isPoints?ie.setMode(F.POINTS):Z.isSprite&&ie.setMode(F.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)yr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))ie.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,on=Z._multiDrawCounts,xe=Z._multiDrawCount,Bn=Pt?dt.get(Pt).bytesPerElement:1,fi=qt.get(J).currentProgram.getUniforms();for(let Un=0;Un<xe;Un++)fi.setValue(F,"_gl_DrawID",Un),ie.render(Kt[Un]/Bn,on[Un])}else if(Z.isInstancedMesh)ie.renderInstances(ve,Ge,Z.count);else if(tt.isInstancedBufferGeometry){const Kt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,on=Math.min(tt.instanceCount,Kt);ie.renderInstances(ve,Ge,on)}else ie.render(ve,Ge)};function be(w,W,tt){w.transparent===!0&&w.side===Li&&w.forceSinglePass===!1?(w.side=kn,w.needsUpdate=!0,sn(w,W,tt),w.side=Xa,w.needsUpdate=!0,sn(w,W,tt),w.side=Li):sn(w,W,tt)}this.compile=function(w,W,tt=null){tt===null&&(tt=w),_=_e.get(tt),_.init(W),D.push(_),tt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),w!==tt&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const J=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Et=Z.material;if(Et)if(Array.isArray(Et))for(let Rt=0;Rt<Et.length;Rt++){const zt=Et[Rt];be(zt,tt,Z),J.add(zt)}else be(Et,tt,Z),J.add(Et)}),_=D.pop(),J},this.compileAsync=function(w,W,tt=null){const J=this.compile(w,W,tt);return new Promise(Z=>{function Et(){if(J.forEach(function(Rt){qt.get(Rt).currentProgram.isReady()&&J.delete(Rt)}),J.size===0){Z(w);return}setTimeout(Et,10)}le.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Cn=null;function Dn(w){Cn&&Cn(w)}function il(){Ti.stop()}function Vs(){Ti.start()}const Ti=new S0;Ti.setAnimationLoop(Dn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(w){Cn=w,ot.setAnimationLoop(w),w===null?Ti.stop():Ti.start()},ot.addEventListener("sessionstart",il),ot.addEventListener("sessionend",Vs),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(W),W=ot.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,W,j),_=_e.get(w,D.length),_.init(W),D.push(_),Ct.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),q.setFromProjectionMatrix(Ct),Mt=this.localClippingEnabled,mt=bt.init(this.clippingPlanes,Mt),x=It.get(w,N.length),x.init(),N.push(x),ot.enabled===!0&&ot.isPresenting===!0){const Et=U.xr.getDepthSensingMesh();Et!==null&&Ur(Et,W,-1/0,U.sortObjects)}Ur(w,W,0,U.sortObjects),x.finish(),U.sortObjects===!0&&x.sort(xt,L),De=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,De&&Qt.addToRenderList(x,w),this.info.render.frame++,mt===!0&&bt.beginShadows();const tt=_.state.shadowsArray;Ft.render(tt,w,W),mt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=x.opaque,Z=x.transmissive;if(_.setupLights(),W.isArrayCamera){const Et=W.cameras;if(Z.length>0)for(let Rt=0,zt=Et.length;Rt<zt;Rt++){const Pt=Et[Rt];al(J,Z,w,Pt)}De&&Qt.render(w);for(let Rt=0,zt=Et.length;Rt<zt;Rt++){const Pt=Et[Rt];ks(x,w,Pt,Pt.viewport)}}else Z.length>0&&al(J,Z,w,W),De&&Qt.render(w),ks(x,w,W);j!==null&&B===0&&(O.updateMultisampleRenderTarget(j),O.updateRenderTargetMipmap(j)),w.isScene===!0&&w.onAfterRender(U,w,W),Le.resetDefaultState(),C=-1,A=null,D.pop(),D.length>0?(_=D[D.length-1],mt===!0&&bt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?x=N[N.length-1]:x=null};function Ur(w,W,tt,J){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)tt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){J&&Bt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ct);const Rt=pt.update(w),zt=w.material;zt.visible&&x.push(w,Rt,zt,tt,Bt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const Rt=pt.update(w),zt=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Bt.copy(w.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Bt.copy(Rt.boundingSphere.center)),Bt.applyMatrix4(w.matrixWorld).applyMatrix4(Ct)),Array.isArray(zt)){const Pt=Rt.groups;for(let ee=0,ne=Pt.length;ee<ne;ee++){const jt=Pt[ee],ve=zt[jt.materialIndex];ve&&ve.visible&&x.push(w,Rt,ve,tt,Bt.z,jt)}}else zt.visible&&x.push(w,Rt,zt,tt,Bt.z,null)}}const Et=w.children;for(let Rt=0,zt=Et.length;Rt<zt;Rt++)Ur(Et[Rt],W,tt,J)}function ks(w,W,tt,J){const Z=w.opaque,Et=w.transmissive,Rt=w.transparent;_.setupLightsView(tt),mt===!0&&bt.setGlobalState(U.clippingPlanes,tt),J&&Wt.viewport(H.copy(J)),Z.length>0&&Xn(Z,W,tt),Et.length>0&&Xn(Et,W,tt),Rt.length>0&&Xn(Rt,W,tt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function al(w,W,tt,J){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[J.id]===void 0&&(_.state.transmissionRenderTarget[J.id]=new Rr(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?$o:ua,minFilter:br,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const Et=_.state.transmissionRenderTarget[J.id],Rt=J.viewport||H;Et.setSize(Rt.z*U.transmissionResolutionScale,Rt.w*U.transmissionResolutionScale);const zt=U.getRenderTarget();U.setRenderTarget(Et),U.getClearColor(ut),ht=U.getClearAlpha(),ht<1&&U.setClearColor(16777215,.5),U.clear(),De&&Qt.render(tt);const Pt=U.toneMapping;U.toneMapping=Va;const ee=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),_.setupLightsView(J),mt===!0&&bt.setGlobalState(U.clippingPlanes,J),Xn(w,tt,J),O.updateMultisampleRenderTarget(Et),O.updateRenderTargetMipmap(Et),le.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let jt=0,ve=W.length;jt<ve;jt++){const ye=W[jt],Ge=ye.object,Te=ye.geometry,ie=ye.material,Kt=ye.group;if(ie.side===Li&&Ge.layers.test(J.layers)){const on=ie.side;ie.side=kn,ie.needsUpdate=!0,rn(Ge,tt,J,Te,ie,Kt),ie.side=on,ie.needsUpdate=!0,ne=!0}}ne===!0&&(O.updateMultisampleRenderTarget(Et),O.updateRenderTargetMipmap(Et))}U.setRenderTarget(zt),U.setClearColor(ut,ht),ee!==void 0&&(J.viewport=ee),U.toneMapping=Pt}function Xn(w,W,tt){const J=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Et=w.length;Z<Et;Z++){const Rt=w[Z],zt=Rt.object,Pt=Rt.geometry,ee=J===null?Rt.material:J,ne=Rt.group;zt.layers.test(tt.layers)&&rn(zt,W,tt,Pt,ee,ne)}}function rn(w,W,tt,J,Z,Et){w.onBeforeRender(U,W,tt,J,Z,Et),w.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(U,W,tt,J,w,Et),Z.transparent===!0&&Z.side===Li&&Z.forceSinglePass===!1?(Z.side=kn,Z.needsUpdate=!0,U.renderBufferDirect(tt,W,J,Z,w,Et),Z.side=Xa,Z.needsUpdate=!0,U.renderBufferDirect(tt,W,J,Z,w,Et),Z.side=Li):U.renderBufferDirect(tt,W,J,Z,w,Et),w.onAfterRender(U,W,tt,J,Z,Et)}function sn(w,W,tt){W.isScene!==!0&&(W=Ee);const J=qt.get(w),Z=_.state.lights,Et=_.state.shadowsArray,Rt=Z.state.version,zt=Vt.getParameters(w,Z.state,Et,W,tt),Pt=Vt.getProgramCacheKey(zt);let ee=J.programs;J.environment=w.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(w.isMeshStandardMaterial?nt:T).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,ee===void 0&&(w.addEventListener("dispose",te),ee=new Map,J.programs=ee);let ne=ee.get(Pt);if(ne!==void 0){if(J.currentProgram===ne&&J.lightsStateVersion===Rt)return Lr(w,zt),ne}else zt.uniforms=Vt.getUniforms(w),w.onBeforeCompile(zt,U),ne=Vt.acquireProgram(zt,Pt),ee.set(Pt,ne),J.uniforms=zt.uniforms;const jt=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(jt.clippingPlanes=bt.uniform),Lr(w,zt),J.needsLights=rl(w),J.lightsStateVersion=Rt,J.needsLights&&(jt.ambientLightColor.value=Z.state.ambient,jt.lightProbe.value=Z.state.probe,jt.directionalLights.value=Z.state.directional,jt.directionalLightShadows.value=Z.state.directionalShadow,jt.spotLights.value=Z.state.spot,jt.spotLightShadows.value=Z.state.spotShadow,jt.rectAreaLights.value=Z.state.rectArea,jt.ltc_1.value=Z.state.rectAreaLTC1,jt.ltc_2.value=Z.state.rectAreaLTC2,jt.pointLights.value=Z.state.point,jt.pointLightShadows.value=Z.state.pointShadow,jt.hemisphereLights.value=Z.state.hemi,jt.directionalShadowMap.value=Z.state.directionalShadowMap,jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,jt.spotShadowMap.value=Z.state.spotShadowMap,jt.spotLightMatrix.value=Z.state.spotLightMatrix,jt.spotLightMap.value=Z.state.spotLightMap,jt.pointShadowMap.value=Z.state.pointShadowMap,jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=ne,J.uniformsList=null,ne}function Bi(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Gc.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Lr(w,W){const tt=qt.get(w);tt.outputColorSpace=W.outputColorSpace,tt.batching=W.batching,tt.batchingColor=W.batchingColor,tt.instancing=W.instancing,tt.instancingColor=W.instancingColor,tt.instancingMorph=W.instancingMorph,tt.skinning=W.skinning,tt.morphTargets=W.morphTargets,tt.morphNormals=W.morphNormals,tt.morphColors=W.morphColors,tt.morphTargetsCount=W.morphTargetsCount,tt.numClippingPlanes=W.numClippingPlanes,tt.numIntersection=W.numClipIntersection,tt.vertexAlphas=W.vertexAlphas,tt.vertexTangents=W.vertexTangents,tt.toneMapping=W.toneMapping}function Jc(w,W,tt,J,Z){W.isScene!==!0&&(W=Ee),O.resetTextureUnits();const Et=W.fog,Rt=J.isMeshStandardMaterial?W.environment:null,zt=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Os,Pt=(J.isMeshStandardMaterial?nt:T).get(J.envMap||Rt),ee=J.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ne=!!tt.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),jt=!!tt.morphAttributes.position,ve=!!tt.morphAttributes.normal,ye=!!tt.morphAttributes.color;let Ge=Va;J.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ge=U.toneMapping);const Te=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ie=Te!==void 0?Te.length:0,Kt=qt.get(J),on=_.state.lights;if(mt===!0&&(Mt===!0||w!==A)){const Ye=w===A&&J.id===C;bt.setState(J,w,Ye)}let xe=!1;J.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==on.state.version||Kt.outputColorSpace!==zt||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Pt||J.fog===!0&&Kt.fog!==Et||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==bt.numPlanes||Kt.numIntersection!==bt.numIntersection)||Kt.vertexAlphas!==ee||Kt.vertexTangents!==ne||Kt.morphTargets!==jt||Kt.morphNormals!==ve||Kt.morphColors!==ye||Kt.toneMapping!==Ge||Kt.morphTargetsCount!==ie)&&(xe=!0):(xe=!0,Kt.__version=J.version);let Bn=Kt.currentProgram;xe===!0&&(Bn=sn(J,W,Z));let fi=!1,Un=!1,dn=!1;const Ne=Bn.getUniforms(),Ln=Kt.uniforms;if(Wt.useProgram(Bn.program)&&(fi=!0,Un=!0,dn=!0),J.id!==C&&(C=J.id,Un=!0),fi||A!==w){Wt.buffers.depth.getReversed()?(At.copy(w.projectionMatrix),iE(At),aE(At),Ne.setValue(F,"projectionMatrix",At)):Ne.setValue(F,"projectionMatrix",w.projectionMatrix),Ne.setValue(F,"viewMatrix",w.matrixWorldInverse);const yn=Ne.map.cameraPosition;yn!==void 0&&yn.setValue(F,Jt.setFromMatrixPosition(w.matrixWorld)),de.logarithmicDepthBuffer&&Ne.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ne.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),A!==w&&(A=w,Un=!0,dn=!0)}if(Z.isSkinnedMesh){Ne.setOptional(F,Z,"bindMatrix"),Ne.setOptional(F,Z,"bindMatrixInverse");const Ye=Z.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Ne.setValue(F,"boneTexture",Ye.boneTexture,O))}Z.isBatchedMesh&&(Ne.setOptional(F,Z,"batchingTexture"),Ne.setValue(F,"batchingTexture",Z._matricesTexture,O),Ne.setOptional(F,Z,"batchingIdTexture"),Ne.setValue(F,"batchingIdTexture",Z._indirectTexture,O),Ne.setOptional(F,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ne.setValue(F,"batchingColorTexture",Z._colorsTexture,O));const En=tt.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&kt.update(Z,tt,Bn),(Un||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,Ne.setValue(F,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ln.envMap.value=Pt,Ln.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(Ln.envMapIntensity.value=W.environmentIntensity),Un&&(Ne.setValue(F,"toneMappingExposure",U.toneMappingExposure),Kt.needsLights&&$c(Ln,dn),Et&&J.fog===!0&&Ut.refreshFogUniforms(Ln,Et),Ut.refreshMaterialUniforms(Ln,J,Y,rt,_.state.transmissionRenderTarget[w.id]),Gc.upload(F,Bi(Kt),Ln,O)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Gc.upload(F,Bi(Kt),Ln,O),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ne.setValue(F,"center",Z.center),Ne.setValue(F,"modelViewMatrix",Z.modelViewMatrix),Ne.setValue(F,"normalMatrix",Z.normalMatrix),Ne.setValue(F,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ye=J.uniformsGroups;for(let yn=0,Nr=Ye.length;yn<Nr;yn++){const In=Ye[yn];X.update(In,Bn),X.bind(In,Bn)}}return Bn}function $c(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function rl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,W,tt){qt.get(w.texture).__webglTexture=W,qt.get(w.depthTexture).__webglTexture=tt;const J=qt.get(w);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=tt===void 0,J.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,W){const tt=qt.get(w);tt.__webglFramebuffer=W,tt.__useDefaultFramebuffer=W===void 0};const Ya=F.createFramebuffer();this.setRenderTarget=function(w,W=0,tt=0){j=w,I=W,B=tt;let J=!0,Z=null,Et=!1,Rt=!1;if(w){const Pt=qt.get(w);if(Pt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(F.FRAMEBUFFER,null),J=!1;else if(Pt.__webglFramebuffer===void 0)O.setupRenderTarget(w);else if(Pt.__hasExternalTextures)O.rebindTextures(w,qt.get(w.texture).__webglTexture,qt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const jt=w.depthTexture;if(Pt.__boundDepthTexture!==jt){if(jt!==null&&qt.has(jt)&&(w.width!==jt.image.width||w.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(w)}}const ee=w.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Rt=!0);const ne=qt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ne[W])?Z=ne[W][tt]:Z=ne[W],Et=!0):w.samples>0&&O.useMultisampledRTT(w)===!1?Z=qt.get(w).__webglMultisampledFramebuffer:Array.isArray(ne)?Z=ne[tt]:Z=ne,H.copy(w.viewport),st.copy(w.scissor),Q=w.scissorTest}else H.copy(at).multiplyScalar(Y).floor(),st.copy(Tt).multiplyScalar(Y).floor(),Q=wt;if(tt!==0&&(Z=Ya),Wt.bindFramebuffer(F.FRAMEBUFFER,Z)&&J&&Wt.drawBuffers(w,Z),Wt.viewport(H),Wt.scissor(st),Wt.setScissorTest(Q),Et){const Pt=qt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pt.__webglTexture,tt)}else if(Rt){const Pt=qt.get(w.texture),ee=W;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.__webglTexture,tt,ee)}else if(w!==null&&tt!==0){const Pt=qt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pt.__webglTexture,tt)}C=-1},this.readRenderTargetPixels=function(w,W,tt,J,Z,Et,Rt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=qt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){Wt.bindFramebuffer(F.FRAMEBUFFER,zt);try{const Pt=w.texture,ee=Pt.format,ne=Pt.type;if(!de.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-J&&tt>=0&&tt<=w.height-Z&&F.readPixels(W,tt,J,Z,Zt.convert(ee),Zt.convert(ne),Et)}finally{const Pt=j!==null?qt.get(j).__webglFramebuffer:null;Wt.bindFramebuffer(F.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,W,tt,J,Z,Et,Rt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=qt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(zt=zt[Rt]),zt){const Pt=w.texture,ee=Pt.format,ne=Pt.type;if(!de.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=w.width-J&&tt>=0&&tt<=w.height-Z){Wt.bindFramebuffer(F.FRAMEBUFFER,zt);const jt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,jt),F.bufferData(F.PIXEL_PACK_BUFFER,Et.byteLength,F.STREAM_READ),F.readPixels(W,tt,J,Z,Zt.convert(ee),Zt.convert(ne),0);const ve=j!==null?qt.get(j).__webglFramebuffer:null;Wt.bindFramebuffer(F.FRAMEBUFFER,ve);const ye=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await nE(F,ye,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,jt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Et),F.deleteBuffer(jt),F.deleteSync(ye),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,W=null,tt=0){w.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1]);const J=Math.pow(2,-tt),Z=Math.floor(w.image.width*J),Et=Math.floor(w.image.height*J),Rt=W!==null?W.x:0,zt=W!==null?W.y:0;O.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,tt,0,0,Rt,zt,Z,Et),Wt.unbindTexture()};const Xs=F.createFramebuffer(),Ii=F.createFramebuffer();this.copyTextureToTexture=function(w,W,tt=null,J=null,Z=0,Et=null){w.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,w=arguments[1],W=arguments[2],Et=arguments[3]||0,tt=null),Et===null&&(Z!==0?(yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Et=Z,Z=0):Et=0);let Rt,zt,Pt,ee,ne,jt,ve,ye,Ge;const Te=w.isCompressedTexture?w.mipmaps[Et]:w.image;if(tt!==null)Rt=tt.max.x-tt.min.x,zt=tt.max.y-tt.min.y,Pt=tt.isBox3?tt.max.z-tt.min.z:1,ee=tt.min.x,ne=tt.min.y,jt=tt.isBox3?tt.min.z:0;else{const En=Math.pow(2,-Z);Rt=Math.floor(Te.width*En),zt=Math.floor(Te.height*En),w.isDataArrayTexture?Pt=Te.depth:w.isData3DTexture?Pt=Math.floor(Te.depth*En):Pt=1,ee=0,ne=0,jt=0}J!==null?(ve=J.x,ye=J.y,Ge=J.z):(ve=0,ye=0,Ge=0);const ie=Zt.convert(W.format),Kt=Zt.convert(W.type);let on;W.isData3DTexture?(O.setTexture3D(W,0),on=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(O.setTexture2DArray(W,0),on=F.TEXTURE_2D_ARRAY):(O.setTexture2D(W,0),on=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const xe=F.getParameter(F.UNPACK_ROW_LENGTH),Bn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),fi=F.getParameter(F.UNPACK_SKIP_PIXELS),Un=F.getParameter(F.UNPACK_SKIP_ROWS),dn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Te.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Te.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ee),F.pixelStorei(F.UNPACK_SKIP_ROWS,ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,jt);const Ne=w.isDataArrayTexture||w.isData3DTexture,Ln=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const En=qt.get(w),Ye=qt.get(W),yn=qt.get(En.__renderTarget),Nr=qt.get(Ye.__renderTarget);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,yn.__webglFramebuffer),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Nr.__webglFramebuffer);for(let In=0;In<Pt;In++)Ne&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.get(w).__webglTexture,Z,jt+In),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,qt.get(W).__webglTexture,Et,Ge+In)),F.blitFramebuffer(ee,ne,Rt,zt,ve,ye,Rt,zt,F.DEPTH_BUFFER_BIT,F.NEAREST);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||qt.has(w)){const En=qt.get(w),Ye=qt.get(W);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,Xs),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ii);for(let yn=0;yn<Pt;yn++)Ne?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,En.__webglTexture,Z,jt+yn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,En.__webglTexture,Z),Ln?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.__webglTexture,Et,Ge+yn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ye.__webglTexture,Et),Z!==0?F.blitFramebuffer(ee,ne,Rt,zt,ve,ye,Rt,zt,F.COLOR_BUFFER_BIT,F.NEAREST):Ln?F.copyTexSubImage3D(on,Et,ve,ye,Ge+yn,ee,ne,Rt,zt):F.copyTexSubImage2D(on,Et,ve,ye,ee,ne,Rt,zt);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ln?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(on,Et,ve,ye,Ge,Rt,zt,Pt,ie,Kt,Te.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(on,Et,ve,ye,Ge,Rt,zt,Pt,ie,Te.data):F.texSubImage3D(on,Et,ve,ye,Ge,Rt,zt,Pt,ie,Kt,Te):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Et,ve,ye,Rt,zt,ie,Kt,Te.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Et,ve,ye,Te.width,Te.height,ie,Te.data):F.texSubImage2D(F.TEXTURE_2D,Et,ve,ye,Rt,zt,ie,Kt,Te);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Bn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,fi),F.pixelStorei(F.UNPACK_SKIP_ROWS,Un),F.pixelStorei(F.UNPACK_SKIP_IMAGES,dn),Et===0&&W.generateMipmaps&&F.generateMipmap(on),Wt.unbindTexture()},this.copyTextureToTexture3D=function(w,W,tt=null,J=null,Z=0){return w.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,J=arguments[1]||null,w=arguments[2],W=arguments[3],Z=arguments[4]||0),yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,tt,J,Z)},this.initRenderTarget=function(w){qt.get(w).__webglFramebuffer===void 0&&O.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?O.setTextureCube(w,0):w.isData3DTexture?O.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?O.setTexture2DArray(w,0):O.setTexture2D(w,0),Wt.unbindTexture()},this.resetState=function(){I=0,B=0,j=null,Wt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const Pv={type:"change"},Jd={type:"start"},A0={type:"end"},Lc=new Yd,zv=new Ia,wR=Math.cos(70*tE.DEG2RAD),un=new et,Vn=2*Math.PI,Be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Fh=1e-6;class CR extends XE{constructor(t,i=null){super(t,i),this.state=Be.NONE,this.enabled=!0,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:Es.ROTATE,TWO:Es.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new wr,this._lastTargetPosition=new et,this._quat=new wr().setFromUnitVectors(t.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cv,this._sphericalDelta=new cv,this._scale=1,this._panOffset=new et,this._rotateStart=new oe,this._rotateEnd=new oe,this._rotateDelta=new oe,this._panStart=new oe,this._panEnd=new oe,this._panDelta=new oe,this._dollyStart=new oe,this._dollyEnd=new oe,this._dollyDelta=new oe,this._dollyDirection=new et,this._mouse=new oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UR.bind(this),this._onPointerDown=DR.bind(this),this._onPointerUp=LR.bind(this),this._onContextMenu=FR.bind(this),this._onMouseWheel=PR.bind(this),this._onKeyDown=zR.bind(this),this._onTouchStart=BR.bind(this),this._onTouchMove=IR.bind(this),this._onMouseDown=NR.bind(this),this._onMouseMove=OR.bind(this),this._interceptControlDown=HR.bind(this),this._interceptControlUp=GR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pv),this.update(),this.state=Be.NONE}update(t=null){const i=this.object.position;un.copy(i).sub(this.target),un.applyQuaternion(this._quat),this._spherical.setFromVector3(un),this.autoRotate&&this.state===Be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Vn:r>Math.PI&&(r-=Vn),l<-Math.PI?l+=Vn:l>Math.PI&&(l-=Vn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(un.setFromSpherical(this._spherical),un.applyQuaternion(this._quatInverse),i.copy(this.target).add(un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=un.length();f=this._clampDistance(d*this._scale);const m=d-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new et(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new et(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),f=un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Lc.origin.copy(this.object.position),Lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lc.direction))<wR?this.object.lookAt(this.target):(zv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lc.intersectPlane(zv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Fh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Fh||this._lastTargetPosition.distanceToSquared(this.target)>Fh?(this.dispatchEvent(Pv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){un.setFromMatrixColumn(i,0),un.multiplyScalar(-t),this._panOffset.add(un)}_panUp(t,i){this.screenSpacePanning===!0?un.setFromMatrixColumn(i,1):(un.setFromMatrixColumn(i,0),un.crossVectors(this.object.up,un)),un.multiplyScalar(t),this._panOffset.add(un)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;un.copy(l).sub(this.target);let c=un.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,f=r.width,d=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new oe,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function DR(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function UR(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function LR(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(A0),this.state=Be.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function NR(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Be.DOLLY;break;case Ts.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Be.ROTATE}break;case Ts.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Be.PAN}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(Jd)}function OR(s){switch(this.state){case Be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function PR(s){this.enabled===!1||this.enableZoom===!1||this.state!==Be.NONE||(s.preventDefault(),this.dispatchEvent(Jd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(A0))}function zR(s){this.enabled!==!1&&this._handleKeyDown(s)}function BR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Es.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Be.TOUCH_ROTATE;break;case Es.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Be.TOUCH_PAN;break;default:this.state=Be.NONE}break;case 2:switch(this.touches.TWO){case Es.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Be.TOUCH_DOLLY_PAN;break;case Es.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Be.TOUCH_DOLLY_ROTATE;break;default:this.state=Be.NONE}break;default:this.state=Be.NONE}this.state!==Be.NONE&&this.dispatchEvent(Jd)}function IR(s){switch(this._trackPointer(s),this.state){case Be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Be.NONE}}function FR(s){this.enabled!==!1&&s.preventDefault()}function HR(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function GR(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Fa=[{id:" GoExplora Barcelona",title:" GoExplora Barcelona",shortDescription:"Live-Coding performance for the responsive dreams festival 2024 in Barcelona.",description:`
      Live Coding performance for the responsive dreams festival 2024 in Barcelona.`,technologies:["Javascript","P5js"],layout:"video",thumbnailUrl:"/Website/img/levoxtrip/GoExplora-Earth.png",videoUrl:"https://youtu.be/S-7YaXTwAbg?si=nGp9meniTtQc1H3o",detailImages:[],githubUrl:""},{id:"Inf[ern]o",title:"Inf[ern]o",shortDescription:"A live-coding performance fighting the flood of information.",description:`
    In the digital age, people are faced with the enormous challenge of processing an unprecedented amount of information. Whether it's through social media,
                digital, or analogue channels, adequately managing this flood of information is a struggle for many. This often leads to overwhelm and can generate a desire
                for alternative explanatory models to navigate this deluge of information.

                In this complex landscape, we frequently neglect critical thinking, fact-checking, and source evaluation. This tendency forces us to critically question whether we are
                still capable of recognizing the urgent need for information assessment and putting it into practice.

                In a live coding performance, I aim to address these questions and explore the stories and narratives that emerge amid this ceaseless stream of information.
                Through this exploration, I hope to gain insights into how we cope with this daily information overload and investigate whether this creative practice can help
                generate new insights and conclusions.`,technologies:["Javascript","P5js"],layout:"video",thumbnailUrl:"src/assets/img/levoxtrip/Inferno.png",videoUrl:"https://www.youtube.com/embed/dNzhQpZ6GSs?si=GuoRAssJ0LHk5vYF",detailImages:[],githubUrl:""},{id:"Coloring Code",title:"Coloring Code",shortDescription:"A live-coding performance fighting the flood of information.",description:` The Groovy Hearts Club is a playful and vibrant live performance that delves into the dynamic interplay between digital illustration and live coding.

                Creating a kaleidoscope of color and joy, it resembles an improvisational dance between the two mediums. The performance unfolds as the illustrator creates colorful and entertaining images, while the live coder transforms these drawings into mesmerizing visual pattern using the p5live
                programming environment.

                The Groovy Hearts Club invites spectators to experience a unique feedback loop, where each generated image sparks a dynamic response in code, resulting in a continuously evolving visual narrative. Immerse yourself in a world of fun and imagination, where creativity and code converge for a truly distinctive experience.`,technologies:["Javascript","P5js"],layout:"video",thumbnailUrl:"src/assets/img/levoxtrip/ColoringCode.png",videoUrl:"https://youtu.be/TJ7hZ3tDyaY?si=uR233KMWv4YYwzuG",detailImages:[],githubUrl:""},{id:"Sensus autem machine",title:"Sensus autem machine",shortDescription:"A 360° VR video that deals with the situation how a world could look like, that has been completely overhauled by humans towards themselves.",description:`
    We live in an age in which cameras are omnipresent in public space and it seems that the people got used to the video surveillance around them. Whether in large places, in small shops or in their private space, surveillance cameras promise people security.
In addition, in recent years due to the increased performance from computer, machine learning has found its way more and more into our lives and technology seem to be getting more and more "intelligent". A technological consequence is the use of the increased "intelligence" to raise the efficiency of the surveillance.

In the installation “Sensus autem machina” (perception of the machine) I want to ask what kind of narrative arises when machines evaluate the image material from surveillance cameras and make statements about what is represented on the basis of object recognition.

With the installation my goal is to raise important questions. How “intelligent” are these machines
really? What conclusions do machines draw from what they “see”?
And what consequences can the use of machine learning have on us being monitored, if we blindly trust the machines?

This project has be exhibited at the ars electronica satellite event 2021 in Berlin.`,technologies:["Python"],layout:"standard",thumbnailUrl:"src/assets/img/sensus_autem_machina/thum.jpg",detailImages:["src/assets/img/sensus_autem_machina/sensur1.jpg","src/assets/img/sensus_autem_machina/sensus2.jpg","src/assets/img/sensus_autem_machina/sensus3.jpg","src/assets/img/sensus_autem_machina/sensus4.jpg","src/assets/img/sensus_autem_machina/7_sensus_ars4.png","src/assets/img/sensus_autem_machina/7_sensus_ars5.png","src/assets/img/sensus_autem_machina/7_sensus_ars6.png","src/assets/img/sensus_autem_machina/7_sensus_ars7.png","src/assets/img/sensus_autem_machina/7_sensus_ars8.png"],githubUrl:""},{id:"Did they meet",title:"Did they meet",shortDescription:"Did they meet is an multi-sensory interface experience.",description:`
    The object is a freestanding black box with two holes on the sides, on top of a waist-high stand.
    Close to it, you can find black rubber gloves in a hanger. Which signals to the viewer to reach into the box

    In the poetic interface, the sense of touch and sight are stimulated. Above all, however, the installation plays with the question of what perception can be achieved in the viewer,
when the two sensory impressions are not coupled with one another like the viewer is used to know. To alter the feeling, a black box is used to make a connection to the psychological meaning of black box.
The two holes on both sides add another level of encounter through the hands of another person.

The viewers only see on the screen an alienated version of what they feel in the black box.
Our interface thus creates a new aesthetic level of perception that contrasts with the haptic experience.
The decoupling of the visual and the sense of touch creates a poetic quality of the experience and opens up a new level of perception for the recipient. 

The project was developed in collaboration with Marina Engelhardt and Nora Schiller.`,technologies:["Processing"],layout:"standard",thumbnailUrl:"src/assets/img/Poetic_interfaces/7.jpg",detailImages:["src/assets/img/Poetic_interfaces/7.jpg","src/assets/img/Poetic_interfaces/1.jpg","src/assets/img/Poetic_interfaces/2.jpg","src/assets/img/Poetic_interfaces/3.png"],githubUrl:"https://github.com/yourusername/project1"},{id:"Bursting glass",title:"Bursting glass",shortDescription:"An audiovisual live performance based on a recording of a knock on a glass bottle.",description:`"Bursting glass" is an audiovisual live performance based on a recording of a knock on a glass bottle.
              In the beginning the sound loops and as time goes by it gets altered through layered effects like amps, echo and delay till these create a feedback loop.
              The bursting of the original sounds through the effects leads to complete distortion and a new rhythmic dimension of the sound till everything falls apart again.`,technologies:["TouchDesigner","Ableton"],layout:"standard",thumbnailUrl:"src/assets/img/bursting_glas/6.jpg",detailImages:["src/assets/img/bursting_glas/1.jpg","src/assets/img/bursting_glas/2.jpg","src/assets/img/bursting_glas/3.jpg","src/assets/img/bursting_glas/5.jpg","src/assets/img/bursting_glas/6.jpg"],githubUrl:"https://github.com/yourusername/project1"},{id:"N_FXTURE",title:"N_FXTURE",shortDescription:`The Color of the city is an interactive multimedia installation
               that invites the audience to explore the colorful urban life of Mexico City.`,description:` "We are in the year X after the sea level has risen over the landmasses.
              Humans used their last chance to survive, forced to develop new forms of living spaces.
              Hyper efficient technologies enabled them a life above the water. 
              These new living conditions led to new forms of nature.
              Organisms and structures emerged that only can exist under these new circumstances.
              Forms of life that coexist with the humans and generate high quality of life."

              N/FXTURE deals with the question of how human living space and nature could change in a
              speculative future if certain scenarios such as a profound climate change will become reality.`,technologies:["Blender"],layout:"video",thumbnailUrl:"src/assets/img/N_FXTURE/4_s.jpg",videoUrl:"https://player.vimeo.com/video/775036275?h=ffae6baa70&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",detailImages:["src/assets/img/N_FXTURE/1_s.jpg","src/assets/img/N_FXTURE/2_s.jpg","src/assets/img/N_FXTURE/3_s.jpg","src/assets/img/N_FXTURE/4_s.jpg","src/assets/img/N_FXTURE/5_s.jpg","src/assets/img/N_FXTURE/6_s.jpg","src/assets/img/N_FXTURE/7_s.jpg"],githubUrl:""},{id:"transmorphosis",title:"transmorphosis",shortDescription:"A 360° VR video that deals with the situation how a world could look like, that has been completely overhauled by humans towards themselves.",description:`As a result of decades of human transformation of the earth, the "Anthropocene" appears to have entered as a new geological age in which humans
are the most powerful geophysical influence on the Earth’s systems.

But the man-made interventions in their environment and the resulting transformation of their own living environment not only worked in their favor.
They also led to negative consequences such as climatic changes, which threaten their own lives.

The virtual reality project "transmorphosis" is a 360° VR video that deals with the situation how a world could look like, that has been completely overhauled by humans towards themselves. It further raises the questions how the relationships between people and their environment and nature would develop under these new circumstances. To emphasize the notion that for many advocates of the Anthropocene hypothesis, the main culprits, the western industrialized nations and their "technocratic elite[s]" are—I consciously chose "white" skin color for this project.`,technologies:["Blender"],layout:"standard",thumbnailUrl:"src/assets/img/transmorphosis/2_s.jpg",detailImages:["src/assets/img/transmorphosis/1_s.jpg","src/assets/img/transmorphosis/2_s.jpg","src/assets/img/transmorphosis/3_s.jpg","src/assets/img/transmorphosis/4_s.jpg","src/assets/img/transmorphosis/5_s.jpg","src/assets/img/transmorphosis/6_s.jpg","src/assets/img/transmorphosis/7_s.jpg","src/assets/img/transmorphosis/8_s.jpg","src/assets/img/transmorphosis/9_s.jpg"],githubUrl:"https://github.com/yourusername/project1"},{id:"[PART]",title:"[PART]",shortDescription:"[PART] is an augmented reality installation that generates an active and participatory experience of painting as an art form. The interplay of movement and resistance, interaction and immersion invites the viewer to participatory engagement with the medium of painting.",description:`The traditional experience of painting is based on a passive relationship between audience and artwork. The viewer positions herself in front of the artwork and expects to be brought into a phase of contemplation.

[PART] is an augmented reality installation that generates an active and participatory experience of painting as an art form. The interplay of movement and resistance, interaction and immersion invites the viewer to participatory engagement with the medium of painting.

The artwork for the project was created by painter Dennis Henning. Through the medium of augmented reality, the painting expands into the virtual space generates a symbiosis between the analogue and digital artwork which leads to new horizons of aesthetic experiences.

Painting by Dennis Henning. Sound by Samuele Nestola. Project was realized in Unity and Blender.`,technologies:["Unity","Blender"],layout:"standard",thumbnailUrl:"src/assets/img/[part]/1_s.jpg",detailImages:["src/assets/img/[part]/1_s.jpg","src/assets/img/[part]/2_s.jpg","src/assets/img/[part]/3_s.jpg","src/assets/img/[part]/4_s.jpg","src/assets/img/[part]/5_s.jpg","src/assets/img/[part]/6_s.jpg","src/assets/img/[part]/7_s.jpg","src/assets/img/[part]/8_s.jpg","src/assets/img/[part]/9_s.jpg"],githubUrl:"https://github.com/yourusername/project1"},{id:"Shift Space",title:"Shift Space",shortDescription:"Shift Space is an interactive online art gallery where the Artworks react to the users behavior",description:`
    Due to the corona pandemic, digital cultural areas are becoming more relevant. The resulting events, however, differ greatly from ‘normal’ cultural events and must be thought and implemented differently.
Our project is a digital art exhibition that uses the opportunities of the digital room to create an alternative to the existing solutions.

In the shift space, users can explore the works of various artists by moving and looking around almost like in real life. The gallery comprises ten rooms in which nine artists are exhibited.
But that's not all. In order to enhance the experience of a typical analogue art exhibition we used the opportunities of the digital room. Above all, the change in the physics and space of the exhibition as well as the direct intervention in the movement and field of vision of the user enable the new experience a traditional exhibition couldn’t create. In the course of the gallery visit, these interventions increase and thus maintain the tension. In addition, the project is designed to be interactive so that viewers can influence the gallery and the works through their movement and behavior.
The project was developed in Unity. Individual works of art and models were designed in Cinema4D and Blender. 

We curated a selection of the artists works for the exhibition ourselves as part of the project. If the user is interested in further works by the artists there is the option of being forwarded directly to the artist's Instagram accounts.

                    The project was developed and designed in collaboration with Lukas Ruoff and Basil Boyacos`,technologies:["Unity"],layout:"standard",thumbnailUrl:"src/assets/img/shift_space/1.png",detailImages:["src/assets/img/shift_space/1.png","src/assets/img/shift_space/2.png","src/assets/img/shift_space/11.png","src/assets/img/shift_space/12.png","src/assets/img/shift_space/14.png"],githubUrl:"https://github.com/yourusername/project1"},{id:"ColorOfCity",title:"The Color of the City",shortDescription:`The Color of the city is an interactive multimedia installation
               that invites the audience to explore the colorful urban life of Mexico City.`,description:`The Color of the city is an interactive multimedia installation
               that invites the audience to explore the colorful urban life of Mexico City.
               Based on video and photo material of daily life situations, visual patterns are
               generated and translated into a stream of colors and lights.
               By moving through the space, the visitor can discover the vibrant life of one of the biggest
               cities in the world.`,technologies:["TouchDesigner"],layout:"standard",thumbnailUrl:"src/assets/img/Color_City/1.jpg",detailImages:["src/assets/img/Color_City/1.jpg","src/assets/img/Color_City/2.jpg","src/assets/img/Color_City/3.jpg","src/assets/img/Color_City/4.jpg"],githubUrl:""},{id:"01101000EIS01110011",title:"01101000EIS01110011",shortDescription:"A 360° VR video that deals with the situation how a world could look like, that has been completely overhauled by humans towards themselves.",description:`The idea of ​​melting ice masses destroyed by us human beings is there, but still remains abstract. What happens when individual parts of these masses face each other? 
                
                The installation 01101000EIS01110011 brings the viewer into this situation. Abstract from the outside, inside it shows a dissolving, dripping block of ice.
                A heat lamp constantly deforms it and changes the visual output outside the box together with other sensors and through human influence.

                Seen from the outside, only the abstract visualization is perceptible on the screen.
                In the second step, visitors are led into the interior of the 2 × 1.25 × 2.5 m box and see the glowing red block of ice on the base.
                The shape influenced by the heat lamp shows the outlines of the visualization, which are captured by a Kinect camera and transmitted to a Touchdesigner sketch.
                There the edge is tracked and the pixel image is converted into forms, while at the same time the threshold of the recorded video is continuously
                changed by a sine curve. This creates a kind of crystal structure or mosaic effect, which expands and shrinks inside the block and is reminiscent
                of an accelerated melting process. In addition, a colored veil emerges from the white edges, which is created by the sensor input and feedback loops.

                The red block of ice is visually and haptically interesting and the visitors can approach it, look at it from all sides and also touch it.
                A proximity sensor detects the distance between the visitor and the ice and changes the color value of the visualization to a warmer color spectrum,
                up to yellow, as the distance decreases. The temperature sensor influences the strength of the wiping effect, which becomes more extreme with increasing values.
                In addition, the experience is dramatized by the sounds of the dripping ice water, which are amplified by a steel sheet in the collecting container.`,technologies:["TouchDesigner"],layout:"standard",thumbnailUrl:"src/assets/img/gloomy_prospects/5.png",detailImages:["src/assets/img/gloomy_prospects/4.jpg","src/assets/img/gloomy_prospects/5.png","src/assets/img/gloomy_prospects/Inside_portfolio_eng.jpg","src/assets/img/gloomy_prospects/outside_3_final.png"],githubUrl:""}],VR=5e3,kR=2e3,XR=100,WR=()=>{const s=ct.useRef(null),t=Fs(),[i,r]=ct.useState(null),l=ct.useRef(null),c=ct.useRef([]),f=ct.useRef(new ov),d=ct.useRef(new oe),m=ct.useRef(!1),p=ct.useRef(0),g=ct.useRef(Date.now()),v=ct.useRef([]);ct.useEffect(()=>{if(!s.current)return;const E=new CE;l.current=E;const b=new Jn(50,window.innerWidth/window.innerHeight,1,1e3);b.position.z=200;const x=new RR({canvas:s.current,antialias:!0});x.setSize(window.innerWidth,window.innerHeight*.8),x.setClearColor(0,0);const _=new VE(16777215,1);_.castShadow=!0,E.add(_);const N=new HE(16777215,1);N.castShadow=!0,N.position.set(0,64,32),E.add(N);const D=[],U=[];c.current=[];for(let st=0;st<Fa.length;st++){const Q=20+Math.random()*40,ut=20+Math.random()*40,ht=20+Math.random()*40,k=new Hs(Q,ut,ht),rt=new BE,Y=new nv({map:rt.load(Fa[st].thumbnailUrl),transparent:!0,side:Li,opacity:.7}),xt=new nv({map:rt.load(Fa[st].thumbnailUrl),transparent:!1,opacity:4}),L=new Oi(k,Y);L.position.x=100*(Math.random()*2-1),L.position.y=100*(Math.random()*2-1),L.position.z=100*(Math.random()*2-1)-15,L.userData={projectIndex:st},D[st]=Y,U[st]=xt,c.current.push(L),E.add(L)}y(c.current);const z=new CR(b,x.domElement);z.autoRotate=!0,z.enableDamping=!0;const I=new ov;f.current=I;const B=()=>{p.current=0,m.current=!1},j=st=>{var ut;const Q=(ut=s.current)==null?void 0:ut.getBoundingClientRect();Q&&(d.current.x=(st.clientX-Q.left)/Q.width*2-1,d.current.y=-((st.clientY-Q.top)/Q.height)*2+1,st.buttons>0&&(p.current++,p.current>3&&(m.current=!0)))},C=st=>{var ht;if(m.current||p.current>3){console.log("Ignoring click because we were dragging");return}console.log("Processing click");const Q=(ht=s.current)==null?void 0:ht.getBoundingClientRect();if(!Q)return;d.current.x=(st.clientX-Q.left)/Q.width*2-1,d.current.y=-((st.clientY-Q.top)/Q.height)*2+1,I.setFromCamera(d.current,b);const ut=I.intersectObjects(c.current);if(ut.length>0){const rt=ut[0].object.userData.projectIndex;t(`/projects/${Fa[rt].id}`)}else console.log("Click detected but no box was hit")};window.addEventListener("mousemove",j),x.domElement.addEventListener("mousedown",B),x.domElement.addEventListener("mouseup",C);const A=()=>{I.setFromCamera(d.current,b);const st=I.intersectObjects(c.current);S(c.current);for(let Q=0;Q<c.current.length;Q++)c.current[Q].material=D[Q];if(st.length>0){const Q=st[0].object,ut=Q.userData.projectIndex;Q.material=U[ut],r(ut),document.body.style.cursor="pointer"}else document.body.style.cursor="auto",r(null);z.update(),x.render(E,b),window.requestAnimationFrame(A)},H=()=>{s.current&&(b.aspect=window.innerWidth/(window.innerHeight*.8),b.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight*.8))};return window.addEventListener("resize",H),A(),()=>{window.removeEventListener("mousemove",j),window.removeEventListener("resize",H),x.domElement.removeEventListener("mousedown",B),x.domElement.removeEventListener("mouseup",C)}},[t]);function y(E){g.current=Date.now(),v.current=[];for(let b=0;b<E.length;b++)v.current[b]={startPosition:new et(E[b].position.x,E[b].position.y,E[b].position.z),targetPosition:new et(E[b].position.x,E[b].position.y,E[b].position.z),animationProgress:1,lastUpdateAxis:"none"}}function S(E){const b=Date.now(),x=b-g.current;if(b-g.current>VR){g.current=b;for(let _=0;_<E.length;_++){const N=E[_],D=v.current[_];D.startPosition.copy(N.position);const U=["x","y","z"];let z;do z=U[Math.floor(Math.random()*U.length)];while(z===D.lastUpdateAxis);D.lastUpdateAxis=z,D.targetPosition.copy(N.position),D.targetPosition[z]=XR*(Math.random()*2-1),D.animationProgress=0}}for(let _=0;_<E.length;_++){const N=E[_],D=v.current[_];if(D.animationProgress<1){D.animationProgress+=x/kR,D.animationProgress>1&&(D.animationProgress=1);const z=(I=>I<.5?4*I*I*I:1-Math.pow(-2*I+2,3)/2)(D.animationProgress);N.position.x=D.startPosition.x+(D.targetPosition.x-D.startPosition.x)*z,N.position.y=D.startPosition.y+(D.targetPosition.y-D.startPosition.y)*z,N.position.z=D.startPosition.z+(D.targetPosition.z-D.startPosition.z)*z}}}return vt.jsxs("div",{className:"welcome-canvas",children:[vt.jsx("canvas",{ref:s,id:"WelcomeCanvas"}),i!==null&&vt.jsxs("div",{className:"hovered-box-info",children:[vt.jsx("h3",{className:"hovered-box-info-header",children:Fa[i].title}),vt.jsx("p",{className:"hovered-box-info-text",children:Fa[i].shortDescription}),vt.jsx("p",{className:"hovered-box-info-btn",children:"Click to view project"})]})]})},R0=()=>vt.jsxs("div",{className:"projects-page",children:[vt.jsx("h1",{children:"My Projects"}),vt.jsx("div",{className:"projects-grid",children:Fa.map(s=>vt.jsxs("div",{className:"project-prev",children:[vt.jsx(kc,{to:`/projects/${s.id}`,className:"project-thumb",children:vt.jsx("img",{src:s.thumbnailUrl,alt:s.title,className:"project-thumbnail"})},s.id),vt.jsxs("div",{className:"prev-proj-info",children:[vt.jsx(kc,{to:`/projects/${s.id}`,className:"project-thumb-btn",children:vt.jsx("h2",{className:"prev-proj-title",children:s.title})},s.id+"btn"),vt.jsxs("p",{children:[" ",s.shortDescription]}),vt.jsx("div",{className:"technologies",children:s.technologies.map((t,i)=>vt.jsxs("p",{className:"technologies-text",children:[" ",t]},i))})]})]}))})]}),qR=()=>vt.jsx("div",{children:"Welcome to my website"}),YR=()=>vt.jsx("div",{children:"Footer"}),jR=()=>vt.jsxs("div",{children:[vt.jsx(qR,{}),vt.jsx(WR,{}),vt.jsx(R0,{}),vt.jsx(YR,{})]}),ZR=({project:s})=>{const t=Fs();return vt.jsxs("div",{className:"standard-layout",children:[vt.jsx("div",{className:"back-button",children:vt.jsx("button",{onClick:()=>t("/"),children:"Back to Gallery"})}),vt.jsx("img",{className:"standard-hero-img",src:`../../${s.thumbnailUrl}`}),vt.jsx("h1",{className:"proj-title",children:s.title}),vt.jsx("p",{className:"proj-description",children:s.description}),vt.jsxs("div",{className:"technologies",children:[vt.jsx("h3",{children:"Technologies Used"}),vt.jsx("ul",{children:s.technologies.map((i,r)=>vt.jsx("li",{children:i},r))})]}),s.detailImages&&vt.jsx("div",{className:"detail-images-grid",children:s.detailImages.map((i,r)=>vt.jsx("img",{src:`../../${i}`,alt:`${s.title} ${i} ${r+1}`},r))}),vt.jsxs("div",{className:"links",children:[s.githubUrl&&vt.jsx("a",{href:s.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"GitHub Repository"}),s.demoUrl&&vt.jsx("a",{href:s.demoUrl,target:"_blank",rel:"noopener noreferrer",children:"Live Demo"})]})]})},KR=({project:s})=>vt.jsxs("div",{className:"gallery-layout",children:[vt.jsx("h1",{children:s.title}),s.detailImages&&vt.jsx("div",{className:"gallery-grid",children:s.detailImages.map((t,i)=>vt.jsx("div",{className:"gallery-item",children:vt.jsx("img",{src:t,alt:`${s.title} gallery item ${i+1}`})},i))}),vt.jsxs("div",{className:"project-details",children:[vt.jsx("p",{className:"description",children:s.description}),vt.jsxs("div",{className:"technologies",children:[vt.jsx("h3",{children:"Technologies Used"}),vt.jsx("div",{className:"tech-tags",children:s.technologies.map((t,i)=>vt.jsx("span",{className:"tech-tag",children:t},i))})]})]}),vt.jsxs("div",{className:"links",children:[s.githubUrl&&vt.jsx("a",{href:s.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"GitHub Repository"}),s.demoUrl&&vt.jsx("a",{href:s.demoUrl,target:"_blank",rel:"noopener noreferrer",children:"Live Demo"})]})]}),QR=({project:s})=>{const t=Fs();return vt.jsxs("div",{className:"video-layout",children:[vt.jsx("div",{className:"back-button",children:vt.jsx("button",{onClick:()=>t("/"),children:"Back to Gallery"})}),s.videoUrl&&vt.jsx("div",{className:"video-container",children:vt.jsx("iframe",{src:s.videoUrl,title:s.title,width:"1280",height:"720",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),vt.jsx("h1",{className:"proj-title",children:s.title}),vt.jsxs("div",{className:"project-details",children:[vt.jsx("p",{className:"proj-description",children:s.description}),vt.jsxs("div",{className:"technologies",children:[vt.jsx("h3",{children:"Technologies Used"}),vt.jsx("ul",{children:s.technologies.map((i,r)=>vt.jsx("li",{children:i},r))})]})]}),s.detailImages&&vt.jsx("div",{className:"detail-images-grid",children:s.detailImages.map((i,r)=>vt.jsx("img",{src:`../../${i}`,alt:`${s.title} ${i} ${r+1}`},r))}),vt.jsxs("div",{className:"links",children:[s.githubUrl&&vt.jsx("a",{href:s.githubUrl,target:"_blank",rel:"noopener noreferrer",children:"GitHub Repository"}),s.demoUrl&&vt.jsx("a",{href:s.demoUrl,target:"_blank",rel:"noopener noreferrer",children:"Live Demo"})]})]})},JR=({project:s})=>vt.jsxs("div",{className:"interactive-layout",children:[vt.jsx("h1",{children:s.title}),vt.jsx("div",{className:"interactive-demo",children:s.demoUrl?vt.jsx("div",{className:"demo-frame",children:vt.jsx("iframe",{src:s.demoUrl,title:`${s.title} Interactive Demo`,sandbox:"allow-same-origin allow-scripts"})}):vt.jsx("div",{className:"demo-placeholder",children:vt.jsx("p",{children:"Interactive demo not available"})})}),vt.jsxs("div",{className:"project-details",children:[vt.jsx("p",{className:"description",children:s.description}),vt.jsxs("div",{className:"technologies",children:[vt.jsx("h3",{children:"Technologies Used"}),vt.jsx("div",{className:"tech-badges",children:s.technologies.map((t,i)=>vt.jsx("span",{className:"tech-badge",children:t},i))})]})]}),vt.jsx("div",{className:"links",children:s.githubUrl&&vt.jsx("a",{href:s.githubUrl,className:"github-link",target:"_blank",rel:"noopener noreferrer",children:"View Source Code"})})]}),$R=({project:s})=>{switch(s.layout){case"gallery":return vt.jsx(KR,{project:s});case"video":return vt.jsx(QR,{project:s});case"interactive":return vt.jsx(JR,{project:s});case"standard":default:return vt.jsx(ZR,{project:s})}},tw=()=>{const{projectId:s}=gS(),t=Fa.find(i=>i.id===s);return t?vt.jsx("div",{className:"project-detail-page",children:vt.jsx($R,{project:t})}):vt.jsx(DS,{to:"/not-found",replace:!0})},ew=()=>{const s=Fs();return vt.jsxs("div",{children:[vt.jsx("p",{children:"Sadly the site you are looking for is not found "}),vt.jsx("button",{onClick:()=>s("/"),children:"Back to Gallery"})]})};function nw(){return vt.jsx(nM,{children:vt.jsxs(LS,{children:[vt.jsx(qo,{path:"/",element:vt.jsx(jR,{})}),vt.jsx(qo,{path:"/projects",element:vt.jsx(R0,{})}),vt.jsx(qo,{path:"/projects/:projectId",element:vt.jsx(tw,{})}),vt.jsx(qo,{path:"*",element:vt.jsx(ew,{})})]})})}Hx.createRoot(document.getElementById("root")).render(vt.jsx(ct.StrictMode,{children:vt.jsx(nw,{})}));
