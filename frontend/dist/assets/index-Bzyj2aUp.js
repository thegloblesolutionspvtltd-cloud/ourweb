function By(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function jy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fx={exports:{}},Rc={},Ox={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),zy=Symbol.for("react.portal"),Hy=Symbol.for("react.fragment"),Vy=Symbol.for("react.strict_mode"),Gy=Symbol.for("react.profiler"),Wy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),qy=Symbol.for("react.forward_ref"),$y=Symbol.for("react.suspense"),Yy=Symbol.for("react.memo"),Ky=Symbol.for("react.lazy"),$p=Symbol.iterator;function Zy(t){return t===null||typeof t!="object"?null:(t=$p&&t[$p]||t["@@iterator"],typeof t=="function"?t:null)}var kx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bx=Object.assign,jx={};function la(t,e,n){this.props=t,this.context=e,this.refs=jx,this.updater=n||kx}la.prototype.isReactComponent={};la.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};la.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zx(){}zx.prototype=la.prototype;function fh(t,e,n){this.props=t,this.context=e,this.refs=jx,this.updater=n||kx}var hh=fh.prototype=new zx;hh.constructor=fh;Bx(hh,la.prototype);hh.isPureReactComponent=!0;var Yp=Array.isArray,Hx=Object.prototype.hasOwnProperty,ph={current:null},Vx={key:!0,ref:!0,__self:!0,__source:!0};function Gx(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Hx.call(e,i)&&!Vx.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:yo,type:t,key:s,ref:a,props:r,_owner:ph.current}}function Jy(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function Qy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kp=/\/+/g;function au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Qy(""+t.key):e.toString(36)}function El(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case yo:case zy:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+au(a,0):i,Yp(r)?(n="",t!=null&&(n=t.replace(Kp,"$&/")+"/"),El(r,e,n,"",function(u){return u})):r!=null&&(mh(r)&&(r=Jy(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Kp,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Yp(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+au(s,l);a+=El(s,e,n,c,r)}else if(c=Zy(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+au(s,l++),a+=El(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Oo(t,e,n){if(t==null)return t;var i=[],r=0;return El(t,i,"","",function(s){return e.call(n,s,r++)}),i}function eS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},Tl={transition:null},tS={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:ph};function Wx(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:Oo,forEach:function(t,e,n){Oo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oo(t,function(){e++}),e},toArray:function(t){return Oo(t,function(e){return e})||[]},only:function(t){if(!mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=la;Je.Fragment=Hy;Je.Profiler=Gy;Je.PureComponent=fh;Je.StrictMode=Vy;Je.Suspense=$y;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tS;Je.act=Wx;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Bx({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ph.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Hx.call(e,c)&&!Vx.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:yo,type:t.type,key:r,ref:s,props:i,_owner:a}};Je.createContext=function(t){return t={$$typeof:Xy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Wy,_context:t},t.Consumer=t};Je.createElement=Gx;Je.createFactory=function(t){var e=Gx.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:qy,render:t}};Je.isValidElement=mh;Je.lazy=function(t){return{$$typeof:Ky,_payload:{_status:-1,_result:t},_init:eS}};Je.memo=function(t,e){return{$$typeof:Yy,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};Je.unstable_act=Wx;Je.useCallback=function(t,e){return mn.current.useCallback(t,e)};Je.useContext=function(t){return mn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return mn.current.useEffect(t,e)};Je.useId=function(){return mn.current.useId()};Je.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return mn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};Je.useRef=function(t){return mn.current.useRef(t)};Je.useState=function(t){return mn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return mn.current.useTransition()};Je.version="18.3.1";Ox.exports=Je;var X=Ox.exports;const Xx=jy(X),nS=By({__proto__:null,default:Xx},[X]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iS=X,rS=Symbol.for("react.element"),sS=Symbol.for("react.fragment"),aS=Object.prototype.hasOwnProperty,oS=iS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lS={key:!0,ref:!0,__self:!0,__source:!0};function qx(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)aS.call(e,i)&&!lS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:rS,type:t,key:s,ref:a,props:r,_owner:oS.current}}Rc.Fragment=sS;Rc.jsx=qx;Rc.jsxs=qx;Fx.exports=Rc;var o=Fx.exports,gd={},$x={exports:{}},On={},Yx={exports:{}},Kx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,Y){var ee=F.length;F.push(Y);e:for(;0<ee;){var re=ee-1>>>1,se=F[re];if(0<r(se,Y))F[re]=Y,F[ee]=se,ee=re;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var Y=F[0],ee=F.pop();if(ee!==Y){F[0]=ee;e:for(var re=0,se=F.length,De=se>>>1;re<De;){var ke=2*(re+1)-1,He=F[ke],H=ke+1,oe=F[H];if(0>r(He,ee))H<se&&0>r(oe,He)?(F[re]=oe,F[H]=ee,re=H):(F[re]=He,F[ke]=ee,re=ke);else if(H<se&&0>r(oe,ee))F[re]=oe,F[H]=ee,re=H;else break e}}return Y}function r(F,Y){var ee=F.sortIndex-Y.sortIndex;return ee!==0?ee:F.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,f=null,p=3,m=!1,v=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(F){for(var Y=n(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=F)i(u),Y.sortIndex=Y.expirationTime,e(c,Y);else break;Y=n(u)}}function y(F){if(w=!1,_(F),!v)if(n(c)!==null)v=!0,Z(M);else{var Y=n(u);Y!==null&&z(y,Y.startTime-F)}}function M(F,Y){v=!1,w&&(w=!1,h(S),S=-1),m=!0;var ee=p;try{for(_(Y),f=n(c);f!==null&&(!(f.expirationTime>Y)||F&&!P());){var re=f.callback;if(typeof re=="function"){f.callback=null,p=f.priorityLevel;var se=re(f.expirationTime<=Y);Y=t.unstable_now(),typeof se=="function"?f.callback=se:f===n(c)&&i(c),_(Y)}else i(c);f=n(c)}if(f!==null)var De=!0;else{var ke=n(u);ke!==null&&z(y,ke.startTime-Y),De=!1}return De}finally{f=null,p=ee,m=!1}}var T=!1,C=null,S=-1,A=5,N=-1;function P(){return!(t.unstable_now()-N<A)}function I(){if(C!==null){var F=t.unstable_now();N=F;var Y=!0;try{Y=C(!0,F)}finally{Y?K():(T=!1,C=null)}}else T=!1}var K;if(typeof g=="function")K=function(){g(I)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,k=J.port2;J.port1.onmessage=I,K=function(){k.postMessage(null)}}else K=function(){x(I,0)};function Z(F){C=F,T||(T=!0,K())}function z(F,Y){S=x(function(){F(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,Z(M))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(F){switch(p){case 1:case 2:case 3:var Y=3;break;default:Y=p}var ee=p;p=Y;try{return F()}finally{p=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,Y){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ee=p;p=F;try{return Y()}finally{p=ee}},t.unstable_scheduleCallback=function(F,Y,ee){var re=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?re+ee:re):ee=re,F){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ee+se,F={id:d++,callback:Y,priorityLevel:F,startTime:ee,expirationTime:se,sortIndex:-1},ee>re?(F.sortIndex=ee,e(u,F),n(c)===null&&F===n(u)&&(w?(h(S),S=-1):w=!0,z(y,ee-re))):(F.sortIndex=se,e(c,F),v||m||(v=!0,Z(M))),F},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(F){var Y=p;return function(){var ee=p;p=Y;try{return F.apply(this,arguments)}finally{p=ee}}}})(Kx);Yx.exports=Kx;var cS=Yx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uS=X,Fn=cS;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zx=new Set,Ya={};function ss(t,e){Ys(t,e),Ys(t+"Capture",e)}function Ys(t,e){for(Ya[t]=e,t=0;t<e.length;t++)Zx.add(e[t])}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=Object.prototype.hasOwnProperty,dS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zp={},Jp={};function fS(t){return vd.call(Jp,t)?!0:vd.call(Zp,t)?!1:dS.test(t)?Jp[t]=!0:(Zp[t]=!0,!1)}function hS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pS(t,e,n,i){if(e===null||typeof e>"u"||hS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xh,gh);Kt[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xh,gh);Kt[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xh,gh);Kt[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function vh(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pS(e,n,r,i)&&(n=null),i||r===null?fS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var $i=uS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),Rs=Symbol.for("react.fragment"),_h=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),Jx=Symbol.for("react.provider"),Qx=Symbol.for("react.context"),yh=Symbol.for("react.forward_ref"),yd=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),Sh=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),eg=Symbol.for("react.offscreen"),Qp=Symbol.iterator;function ga(t){return t===null||typeof t!="object"?null:(t=Qp&&t[Qp]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,ou;function Da(t){if(ou===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ou=e&&e[1]||""}return`
`+ou+t}var lu=!1;function cu(t,e){if(!t||lu)return"";lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Da(t):""}function mS(t){switch(t.tag){case 5:return Da(t.type);case 16:return Da("Lazy");case 13:return Da("Suspense");case 19:return Da("SuspenseList");case 0:case 2:case 15:return t=cu(t.type,!1),t;case 11:return t=cu(t.type.render,!1),t;case 1:return t=cu(t.type,!0),t;default:return""}}function bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rs:return"Fragment";case Cs:return"Portal";case _d:return"Profiler";case _h:return"StrictMode";case yd:return"Suspense";case Sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qx:return(t.displayName||"Context")+".Consumer";case Jx:return(t._context.displayName||"Context")+".Provider";case yh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sh:return e=t.displayName||null,e!==null?e:bd(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return bd(t(e))}catch{}}return null}function xS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bd(e);case 8:return e===_h?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gS(t){var e=tg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bo(t){t._valueTracker||(t._valueTracker=gS(t))}function ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=tg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ql(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wd(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function em(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ig(t,e){e=e.checked,e!=null&&vh(t,"checked",e,!1)}function Md(t,e){ig(t,e);var n=wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ed(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ed(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ed(t,e,n){(e!=="number"||ql(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function js(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Td(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Ia(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function rg(t,e){var n=wr(e.value),i=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function im(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var jo,ag=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=jo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ja={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vS=["Webkit","ms","Moz","O"];Object.keys(ja).forEach(function(t){vS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ja[e]=ja[t]})});function og(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ja.hasOwnProperty(t)&&ja[t]?(""+e).trim():e+"px"}function lg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=og(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var _S=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cd(t,e){if(e){if(_S[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Rd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nd=null;function bh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pd=null,zs=null,Hs=null;function rm(t){if(t=wo(t)){if(typeof Pd!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Ic(e),Pd(t.stateNode,t.type,e))}}function cg(t){zs?Hs?Hs.push(t):Hs=[t]:zs=t}function ug(){if(zs){var t=zs,e=Hs;if(Hs=zs=null,rm(t),e)for(t=0;t<e.length;t++)rm(e[t])}}function dg(t,e){return t(e)}function fg(){}var uu=!1;function hg(t,e,n){if(uu)return t(e,n);uu=!0;try{return dg(t,e,n)}finally{uu=!1,(zs!==null||Hs!==null)&&(fg(),ug())}}function Za(t,e){var n=t.stateNode;if(n===null)return null;var i=Ic(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Ld=!1;if(zi)try{var va={};Object.defineProperty(va,"passive",{get:function(){Ld=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{Ld=!1}function yS(t,e,n,i,r,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var za=!1,$l=null,Yl=!1,Dd=null,SS={onError:function(t){za=!0,$l=t}};function bS(t,e,n,i,r,s,a,l,c){za=!1,$l=null,yS.apply(SS,arguments)}function wS(t,e,n,i,r,s,a,l,c){if(bS.apply(this,arguments),za){if(za){var u=$l;za=!1,$l=null}else throw Error(ce(198));Yl||(Yl=!0,Dd=u)}}function as(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sm(t){if(as(t)!==t)throw Error(ce(188))}function MS(t){var e=t.alternate;if(!e){if(e=as(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return sm(r),t;if(s===i)return sm(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function mg(t){return t=MS(t),t!==null?xg(t):null}function xg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xg(t);if(e!==null)return e;t=t.sibling}return null}var gg=Fn.unstable_scheduleCallback,am=Fn.unstable_cancelCallback,ES=Fn.unstable_shouldYield,TS=Fn.unstable_requestPaint,It=Fn.unstable_now,AS=Fn.unstable_getCurrentPriorityLevel,wh=Fn.unstable_ImmediatePriority,vg=Fn.unstable_UserBlockingPriority,Kl=Fn.unstable_NormalPriority,CS=Fn.unstable_LowPriority,_g=Fn.unstable_IdlePriority,Nc=null,yi=null;function RS(t){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(Nc,t,void 0,(t.current.flags&128)===128)}catch{}}var si=Math.clz32?Math.clz32:LS,NS=Math.log,PS=Math.LN2;function LS(t){return t>>>=0,t===0?32:31-(NS(t)/PS|0)|0}var zo=64,Ho=4194304;function Ua(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=Ua(l):(s&=a,s!==0&&(i=Ua(s)))}else a=n&~r,a!==0?i=Ua(a):s!==0&&(i=Ua(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-si(e),r=1<<n,i|=t[n],e&=~r;return i}function DS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-si(s),l=1<<a,c=r[a];c===-1?(!(l&n)||l&i)&&(r[a]=DS(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yg(){var t=zo;return zo<<=1,!(zo&4194240)&&(zo=64),t}function du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function So(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-si(e),t[e]=n}function US(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-si(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Mh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-si(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function Sg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bg,Eh,wg,Mg,Eg,Ud=!1,Vo=[],pr=null,mr=null,xr=null,Ja=new Map,Qa=new Map,or=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function om(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function _a(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=wo(e),e!==null&&Eh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function OS(t,e,n,i,r){switch(e){case"focusin":return pr=_a(pr,t,e,n,i,r),!0;case"dragenter":return mr=_a(mr,t,e,n,i,r),!0;case"mouseover":return xr=_a(xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ja.set(s,_a(Ja.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qa.set(s,_a(Qa.get(s)||null,t,e,n,i,r)),!0}return!1}function Tg(t){var e=jr(t.target);if(e!==null){var n=as(e);if(n!==null){if(e=n.tag,e===13){if(e=pg(n),e!==null){t.blockedOn=e,Eg(t.priority,function(){wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nd=i,n.target.dispatchEvent(i),Nd=null}else return e=wo(n),e!==null&&Eh(e),t.blockedOn=n,!1;e.shift()}return!0}function lm(t,e,n){Al(t)&&n.delete(e)}function kS(){Ud=!1,pr!==null&&Al(pr)&&(pr=null),mr!==null&&Al(mr)&&(mr=null),xr!==null&&Al(xr)&&(xr=null),Ja.forEach(lm),Qa.forEach(lm)}function ya(t,e){t.blockedOn===e&&(t.blockedOn=null,Ud||(Ud=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,kS)))}function eo(t){function e(r){return ya(r,t)}if(0<Vo.length){ya(Vo[0],t);for(var n=1;n<Vo.length;n++){var i=Vo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(pr!==null&&ya(pr,t),mr!==null&&ya(mr,t),xr!==null&&ya(xr,t),Ja.forEach(e),Qa.forEach(e),n=0;n<or.length;n++)i=or[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)Tg(n),n.blockedOn===null&&or.shift()}var Vs=$i.ReactCurrentBatchConfig,Jl=!0;function BS(t,e,n,i){var r=lt,s=Vs.transition;Vs.transition=null;try{lt=1,Th(t,e,n,i)}finally{lt=r,Vs.transition=s}}function jS(t,e,n,i){var r=lt,s=Vs.transition;Vs.transition=null;try{lt=4,Th(t,e,n,i)}finally{lt=r,Vs.transition=s}}function Th(t,e,n,i){if(Jl){var r=Fd(t,e,n,i);if(r===null)Su(t,e,i,Ql,n),om(t,i);else if(OS(r,t,e,n,i))i.stopPropagation();else if(om(t,i),e&4&&-1<FS.indexOf(t)){for(;r!==null;){var s=wo(r);if(s!==null&&bg(s),s=Fd(t,e,n,i),s===null&&Su(t,e,i,Ql,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Su(t,e,i,null,n)}}var Ql=null;function Fd(t,e,n,i){if(Ql=null,t=bh(i),t=jr(t),t!==null)if(e=as(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ql=t,null}function Ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AS()){case wh:return 1;case vg:return 4;case Kl:case CS:return 16;case _g:return 536870912;default:return 16}default:return 16}}var ur=null,Ah=null,Cl=null;function Cg(){if(Cl)return Cl;var t,e=Ah,n=e.length,i,r="value"in ur?ur.value:ur.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Cl=r.slice(t,1<i?1-i:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function cm(){return!1}function kn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Go:cm,this.isPropagationStopped=cm,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),e}var ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=kn(ca),bo=At({},ca,{view:0,detail:0}),zS=kn(bo),fu,hu,Sa,Pc=At({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Sa&&(Sa&&t.type==="mousemove"?(fu=t.screenX-Sa.screenX,hu=t.screenY-Sa.screenY):hu=fu=0,Sa=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),um=kn(Pc),HS=At({},Pc,{dataTransfer:0}),VS=kn(HS),GS=At({},bo,{relatedTarget:0}),pu=kn(GS),WS=At({},ca,{animationName:0,elapsedTime:0,pseudoElement:0}),XS=kn(WS),qS=At({},ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$S=kn(qS),YS=At({},ca,{data:0}),dm=kn(YS),KS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=JS[t])?!!e[t]:!1}function Rh(){return QS}var eb=At({},bo,{key:function(t){if(t.key){var e=KS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ZS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rh,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tb=kn(eb),nb=At({},Pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=kn(nb),ib=At({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rh}),rb=kn(ib),sb=At({},ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),ab=kn(sb),ob=At({},Pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lb=kn(ob),cb=[9,13,27,32],Nh=zi&&"CompositionEvent"in window,Ha=null;zi&&"documentMode"in document&&(Ha=document.documentMode);var ub=zi&&"TextEvent"in window&&!Ha,Rg=zi&&(!Nh||Ha&&8<Ha&&11>=Ha),hm=" ",pm=!1;function Ng(t,e){switch(t){case"keyup":return cb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ns=!1;function db(t,e){switch(t){case"compositionend":return Pg(e);case"keypress":return e.which!==32?null:(pm=!0,hm);case"textInput":return t=e.data,t===hm&&pm?null:t;default:return null}}function fb(t,e){if(Ns)return t==="compositionend"||!Nh&&Ng(t,e)?(t=Cg(),Cl=Ah=ur=null,Ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rg&&e.locale!=="ko"?null:e.data;default:return null}}var hb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hb[t.type]:e==="textarea"}function Lg(t,e,n,i){cg(i),e=ec(e,"onChange"),0<e.length&&(n=new Ch("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Va=null,to=null;function pb(t){Vg(t,0)}function Lc(t){var e=Ds(t);if(ng(e))return t}function mb(t,e){if(t==="change")return e}var Dg=!1;if(zi){var mu;if(zi){var xu="oninput"in document;if(!xu){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),xu=typeof xm.oninput=="function"}mu=xu}else mu=!1;Dg=mu&&(!document.documentMode||9<document.documentMode)}function gm(){Va&&(Va.detachEvent("onpropertychange",Ig),to=Va=null)}function Ig(t){if(t.propertyName==="value"&&Lc(to)){var e=[];Lg(e,to,t,bh(t)),hg(pb,e)}}function xb(t,e,n){t==="focusin"?(gm(),Va=e,to=n,Va.attachEvent("onpropertychange",Ig)):t==="focusout"&&gm()}function gb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Lc(to)}function vb(t,e){if(t==="click")return Lc(e)}function _b(t,e){if(t==="input"||t==="change")return Lc(e)}function yb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:yb;function no(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vd.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _m(t,e){var n=vm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vm(n)}}function Ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fg(){for(var t=window,e=ql();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ql(t.document)}return e}function Ph(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Sb(t){var e=Fg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ug(n.ownerDocument.documentElement,n)){if(i!==null&&Ph(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=_m(n,s);var a=_m(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bb=zi&&"documentMode"in document&&11>=document.documentMode,Ps=null,Od=null,Ga=null,kd=!1;function ym(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kd||Ps==null||Ps!==ql(i)||(i=Ps,"selectionStart"in i&&Ph(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ga&&no(Ga,i)||(Ga=i,i=ec(Od,"onSelect"),0<i.length&&(e=new Ch("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ps)))}function Wo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ls={animationend:Wo("Animation","AnimationEnd"),animationiteration:Wo("Animation","AnimationIteration"),animationstart:Wo("Animation","AnimationStart"),transitionend:Wo("Transition","TransitionEnd")},gu={},Og={};zi&&(Og=document.createElement("div").style,"AnimationEvent"in window||(delete Ls.animationend.animation,delete Ls.animationiteration.animation,delete Ls.animationstart.animation),"TransitionEvent"in window||delete Ls.transitionend.transition);function Dc(t){if(gu[t])return gu[t];if(!Ls[t])return t;var e=Ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Og)return gu[t]=e[n];return t}var kg=Dc("animationend"),Bg=Dc("animationiteration"),jg=Dc("animationstart"),zg=Dc("transitionend"),Hg=new Map,Sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){Hg.set(t,e),ss(e,[t])}for(var vu=0;vu<Sm.length;vu++){var _u=Sm[vu],wb=_u.toLowerCase(),Mb=_u[0].toUpperCase()+_u.slice(1);Ar(wb,"on"+Mb)}Ar(kg,"onAnimationEnd");Ar(Bg,"onAnimationIteration");Ar(jg,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(zg,"onTransitionEnd");Ys("onMouseEnter",["mouseout","mouseover"]);Ys("onMouseLeave",["mouseout","mouseover"]);Ys("onPointerEnter",["pointerout","pointerover"]);Ys("onPointerLeave",["pointerout","pointerover"]);ss("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ss("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ss("onBeforeInput",["compositionend","keypress","textInput","paste"]);ss("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ss("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function bm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wS(i,e,void 0,t),t.currentTarget=null}function Vg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;bm(r,l,u),s=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;bm(r,l,u),s=c}}}if(Yl)throw t=Dd,Yl=!1,Dd=null,t}function vt(t,e){var n=e[Vd];n===void 0&&(n=e[Vd]=new Set);var i=t+"__bubble";n.has(i)||(Gg(e,t,2,!1),n.add(i))}function yu(t,e,n){var i=0;e&&(i|=4),Gg(n,t,i,e)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[Xo]){t[Xo]=!0,Zx.forEach(function(n){n!=="selectionchange"&&(Eb.has(n)||yu(n,!1,t),yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xo]||(e[Xo]=!0,yu("selectionchange",!1,e))}}function Gg(t,e,n,i){switch(Ag(e)){case 1:var r=BS;break;case 4:r=jS;break;default:r=Th}n=r.bind(null,e,n,t),r=void 0,!Ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Su(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;l!==null;){if(a=jr(l),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}l=l.parentNode}}i=i.return}hg(function(){var u=s,d=bh(n),f=[];e:{var p=Hg.get(t);if(p!==void 0){var m=Ch,v=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":m=tb;break;case"focusin":v="focus",m=pu;break;case"focusout":v="blur",m=pu;break;case"beforeblur":case"afterblur":m=pu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=VS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=rb;break;case kg:case Bg:case jg:m=XS;break;case zg:m=ab;break;case"scroll":m=zS;break;case"wheel":m=lb;break;case"copy":case"cut":case"paste":m=$S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=fm}var w=(e&4)!==0,x=!w&&t==="scroll",h=w?p!==null?p+"Capture":null:p;w=[];for(var g=u,_;g!==null;){_=g;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,h!==null&&(y=Za(g,h),y!=null&&w.push(ro(g,y,_)))),x)break;g=g.return}0<w.length&&(p=new m(p,v,null,n,d),f.push({event:p,listeners:w}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==Nd&&(v=n.relatedTarget||n.fromElement)&&(jr(v)||v[Hi]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?jr(v):null,v!==null&&(x=as(v),v!==x||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=um,y="onMouseLeave",h="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(w=fm,y="onPointerLeave",h="onPointerEnter",g="pointer"),x=m==null?p:Ds(m),_=v==null?p:Ds(v),p=new w(y,g+"leave",m,n,d),p.target=x,p.relatedTarget=_,y=null,jr(d)===u&&(w=new w(h,g+"enter",v,n,d),w.target=_,w.relatedTarget=x,y=w),x=y,m&&v)t:{for(w=m,h=v,g=0,_=w;_;_=fs(_))g++;for(_=0,y=h;y;y=fs(y))_++;for(;0<g-_;)w=fs(w),g--;for(;0<_-g;)h=fs(h),_--;for(;g--;){if(w===h||h!==null&&w===h.alternate)break t;w=fs(w),h=fs(h)}w=null}else w=null;m!==null&&wm(f,p,m,w,!1),v!==null&&x!==null&&wm(f,x,v,w,!0)}}e:{if(p=u?Ds(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var M=mb;else if(mm(p))if(Dg)M=_b;else{M=gb;var T=xb}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(M=vb);if(M&&(M=M(t,u))){Lg(f,M,n,d);break e}T&&T(t,p,u),t==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Ed(p,"number",p.value)}switch(T=u?Ds(u):window,t){case"focusin":(mm(T)||T.contentEditable==="true")&&(Ps=T,Od=u,Ga=null);break;case"focusout":Ga=Od=Ps=null;break;case"mousedown":kd=!0;break;case"contextmenu":case"mouseup":case"dragend":kd=!1,ym(f,n,d);break;case"selectionchange":if(bb)break;case"keydown":case"keyup":ym(f,n,d)}var C;if(Nh)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Ns?Ng(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Rg&&n.locale!=="ko"&&(Ns||S!=="onCompositionStart"?S==="onCompositionEnd"&&Ns&&(C=Cg()):(ur=d,Ah="value"in ur?ur.value:ur.textContent,Ns=!0)),T=ec(u,S),0<T.length&&(S=new dm(S,t,null,n,d),f.push({event:S,listeners:T}),C?S.data=C:(C=Pg(n),C!==null&&(S.data=C)))),(C=ub?db(t,n):fb(t,n))&&(u=ec(u,"onBeforeInput"),0<u.length&&(d=new dm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}Vg(f,e)})}function ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Za(t,n),s!=null&&i.unshift(ro(t,s,r)),s=Za(t,e),s!=null&&i.push(ro(t,s,r))),t=t.return}return i}function fs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wm(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&u!==null&&(l=u,r?(c=Za(n,s),c!=null&&a.unshift(ro(n,c,l))):r||(c=Za(n,s),c!=null&&a.push(ro(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Tb=/\r\n?/g,Ab=/\u0000|\uFFFD/g;function Mm(t){return(typeof t=="string"?t:""+t).replace(Tb,`
`).replace(Ab,"")}function qo(t,e,n){if(e=Mm(e),Mm(t)!==e&&n)throw Error(ce(425))}function tc(){}var Bd=null,jd=null;function zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hd=typeof setTimeout=="function"?setTimeout:void 0,Cb=typeof clearTimeout=="function"?clearTimeout:void 0,Em=typeof Promise=="function"?Promise:void 0,Rb=typeof queueMicrotask=="function"?queueMicrotask:typeof Em<"u"?function(t){return Em.resolve(null).then(t).catch(Nb)}:Hd;function Nb(t){setTimeout(function(){throw t})}function bu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),eo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);eo(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ua=Math.random().toString(36).slice(2),gi="__reactFiber$"+ua,so="__reactProps$"+ua,Hi="__reactContainer$"+ua,Vd="__reactEvents$"+ua,Pb="__reactListeners$"+ua,Lb="__reactHandles$"+ua;function jr(t){var e=t[gi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Hi]||n[gi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tm(t);t!==null;){if(n=t[gi])return n;t=Tm(t)}return e}t=n,n=t.parentNode}return null}function wo(t){return t=t[gi]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Ic(t){return t[so]||null}var Gd=[],Is=-1;function Cr(t){return{current:t}}function _t(t){0>Is||(t.current=Gd[Is],Gd[Is]=null,Is--)}function gt(t,e){Is++,Gd[Is]=t.current,t.current=e}var Mr={},on=Cr(Mr),Sn=Cr(!1),Yr=Mr;function Ks(t,e){var n=t.type.contextTypes;if(!n)return Mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function nc(){_t(Sn),_t(on)}function Am(t,e,n){if(on.current!==Mr)throw Error(ce(168));gt(on,e),gt(Sn,n)}function Wg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,xS(t)||"Unknown",r));return At({},n,i)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mr,Yr=on.current,gt(on,t),gt(Sn,Sn.current),!0}function Cm(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Wg(t,e,Yr),i.__reactInternalMemoizedMergedChildContext=t,_t(Sn),_t(on),gt(on,t)):_t(Sn),gt(Sn,n)}var Li=null,Uc=!1,wu=!1;function Xg(t){Li===null?Li=[t]:Li.push(t)}function Db(t){Uc=!0,Xg(t)}function Rr(){if(!wu&&Li!==null){wu=!0;var t=0,e=lt;try{var n=Li;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,Uc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),gg(wh,Rr),r}finally{lt=e,wu=!1}}return null}var Us=[],Fs=0,rc=null,sc=0,Vn=[],Gn=0,Kr=null,Ii=1,Ui="";function Ur(t,e){Us[Fs++]=sc,Us[Fs++]=rc,rc=t,sc=e}function qg(t,e,n){Vn[Gn++]=Ii,Vn[Gn++]=Ui,Vn[Gn++]=Kr,Kr=t;var i=Ii;t=Ui;var r=32-si(i)-1;i&=~(1<<r),n+=1;var s=32-si(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ii=1<<32-si(e)+r|n<<r|i,Ui=s+t}else Ii=1<<s|n<<r|i,Ui=t}function Lh(t){t.return!==null&&(Ur(t,1),qg(t,1,0))}function Dh(t){for(;t===rc;)rc=Us[--Fs],Us[Fs]=null,sc=Us[--Fs],Us[Fs]=null;for(;t===Kr;)Kr=Vn[--Gn],Vn[Gn]=null,Ui=Vn[--Gn],Vn[Gn]=null,Ii=Vn[--Gn],Vn[Gn]=null}var Un=null,Dn=null,bt=!1,ni=null;function $g(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,Dn=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kr!==null?{id:Ii,overflow:Ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,Dn=null,!0):!1;default:return!1}}function Wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xd(t){if(bt){var e=Dn;if(e){var n=e;if(!Rm(t,e)){if(Wd(t))throw Error(ce(418));e=gr(n.nextSibling);var i=Un;e&&Rm(t,e)?$g(i,n):(t.flags=t.flags&-4097|2,bt=!1,Un=t)}}else{if(Wd(t))throw Error(ce(418));t.flags=t.flags&-4097|2,bt=!1,Un=t}}}function Nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function $o(t){if(t!==Un)return!1;if(!bt)return Nm(t),bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zd(t.type,t.memoizedProps)),e&&(e=Dn)){if(Wd(t))throw Yg(),Error(ce(418));for(;e;)$g(t,e),e=gr(e.nextSibling)}if(Nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=Un?gr(t.stateNode.nextSibling):null;return!0}function Yg(){for(var t=Dn;t;)t=gr(t.nextSibling)}function Zs(){Dn=Un=null,bt=!1}function Ih(t){ni===null?ni=[t]:ni.push(t)}var Ib=$i.ReactCurrentBatchConfig;function ba(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Yo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pm(t){var e=t._init;return e(t._payload)}function Kg(t){function e(h,g){if(t){var _=h.deletions;_===null?(h.deletions=[g],h.flags|=16):_.push(g)}}function n(h,g){if(!t)return null;for(;g!==null;)e(h,g),g=g.sibling;return null}function i(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function r(h,g){return h=Sr(h,g),h.index=0,h.sibling=null,h}function s(h,g,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<g?(h.flags|=2,g):_):(h.flags|=2,g)):(h.flags|=1048576,g)}function a(h){return t&&h.alternate===null&&(h.flags|=2),h}function l(h,g,_,y){return g===null||g.tag!==6?(g=Nu(_,h.mode,y),g.return=h,g):(g=r(g,_),g.return=h,g)}function c(h,g,_,y){var M=_.type;return M===Rs?d(h,g,_.props.children,y,_.key):g!==null&&(g.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===sr&&Pm(M)===g.type)?(y=r(g,_.props),y.ref=ba(h,g,_),y.return=h,y):(y=Fl(_.type,_.key,_.props,null,h.mode,y),y.ref=ba(h,g,_),y.return=h,y)}function u(h,g,_,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Pu(_,h.mode,y),g.return=h,g):(g=r(g,_.children||[]),g.return=h,g)}function d(h,g,_,y,M){return g===null||g.tag!==7?(g=qr(_,h.mode,y,M),g.return=h,g):(g=r(g,_),g.return=h,g)}function f(h,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Nu(""+g,h.mode,_),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ko:return _=Fl(g.type,g.key,g.props,null,h.mode,_),_.ref=ba(h,null,g),_.return=h,_;case Cs:return g=Pu(g,h.mode,_),g.return=h,g;case sr:var y=g._init;return f(h,y(g._payload),_)}if(Ia(g)||ga(g))return g=qr(g,h.mode,_,null),g.return=h,g;Yo(h,g)}return null}function p(h,g,_,y){var M=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:l(h,g,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ko:return _.key===M?c(h,g,_,y):null;case Cs:return _.key===M?u(h,g,_,y):null;case sr:return M=_._init,p(h,g,M(_._payload),y)}if(Ia(_)||ga(_))return M!==null?null:d(h,g,_,y,null);Yo(h,_)}return null}function m(h,g,_,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(_)||null,l(g,h,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ko:return h=h.get(y.key===null?_:y.key)||null,c(g,h,y,M);case Cs:return h=h.get(y.key===null?_:y.key)||null,u(g,h,y,M);case sr:var T=y._init;return m(h,g,_,T(y._payload),M)}if(Ia(y)||ga(y))return h=h.get(_)||null,d(g,h,y,M,null);Yo(g,y)}return null}function v(h,g,_,y){for(var M=null,T=null,C=g,S=g=0,A=null;C!==null&&S<_.length;S++){C.index>S?(A=C,C=null):A=C.sibling;var N=p(h,C,_[S],y);if(N===null){C===null&&(C=A);break}t&&C&&N.alternate===null&&e(h,C),g=s(N,g,S),T===null?M=N:T.sibling=N,T=N,C=A}if(S===_.length)return n(h,C),bt&&Ur(h,S),M;if(C===null){for(;S<_.length;S++)C=f(h,_[S],y),C!==null&&(g=s(C,g,S),T===null?M=C:T.sibling=C,T=C);return bt&&Ur(h,S),M}for(C=i(h,C);S<_.length;S++)A=m(C,h,S,_[S],y),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?S:A.key),g=s(A,g,S),T===null?M=A:T.sibling=A,T=A);return t&&C.forEach(function(P){return e(h,P)}),bt&&Ur(h,S),M}function w(h,g,_,y){var M=ga(_);if(typeof M!="function")throw Error(ce(150));if(_=M.call(_),_==null)throw Error(ce(151));for(var T=M=null,C=g,S=g=0,A=null,N=_.next();C!==null&&!N.done;S++,N=_.next()){C.index>S?(A=C,C=null):A=C.sibling;var P=p(h,C,N.value,y);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(h,C),g=s(P,g,S),T===null?M=P:T.sibling=P,T=P,C=A}if(N.done)return n(h,C),bt&&Ur(h,S),M;if(C===null){for(;!N.done;S++,N=_.next())N=f(h,N.value,y),N!==null&&(g=s(N,g,S),T===null?M=N:T.sibling=N,T=N);return bt&&Ur(h,S),M}for(C=i(h,C);!N.done;S++,N=_.next())N=m(C,h,S,N.value,y),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?S:N.key),g=s(N,g,S),T===null?M=N:T.sibling=N,T=N);return t&&C.forEach(function(I){return e(h,I)}),bt&&Ur(h,S),M}function x(h,g,_,y){if(typeof _=="object"&&_!==null&&_.type===Rs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ko:e:{for(var M=_.key,T=g;T!==null;){if(T.key===M){if(M=_.type,M===Rs){if(T.tag===7){n(h,T.sibling),g=r(T,_.props.children),g.return=h,h=g;break e}}else if(T.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===sr&&Pm(M)===T.type){n(h,T.sibling),g=r(T,_.props),g.ref=ba(h,T,_),g.return=h,h=g;break e}n(h,T);break}else e(h,T);T=T.sibling}_.type===Rs?(g=qr(_.props.children,h.mode,y,_.key),g.return=h,h=g):(y=Fl(_.type,_.key,_.props,null,h.mode,y),y.ref=ba(h,g,_),y.return=h,h=y)}return a(h);case Cs:e:{for(T=_.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(h,g.sibling),g=r(g,_.children||[]),g.return=h,h=g;break e}else{n(h,g);break}else e(h,g);g=g.sibling}g=Pu(_,h.mode,y),g.return=h,h=g}return a(h);case sr:return T=_._init,x(h,g,T(_._payload),y)}if(Ia(_))return v(h,g,_,y);if(ga(_))return w(h,g,_,y);Yo(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(h,g.sibling),g=r(g,_),g.return=h,h=g):(n(h,g),g=Nu(_,h.mode,y),g.return=h,h=g),a(h)):n(h,g)}return x}var Js=Kg(!0),Zg=Kg(!1),ac=Cr(null),oc=null,Os=null,Uh=null;function Fh(){Uh=Os=oc=null}function Oh(t){var e=ac.current;_t(ac),t._currentValue=e}function qd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){oc=t,Uh=Os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Uh!==t)if(t={context:t,memoizedValue:e,next:null},Os===null){if(oc===null)throw Error(ce(308));Os=t,oc.dependencies={lanes:0,firstContext:t}}else Os=Os.next=t;return e}var zr=null;function kh(t){zr===null?zr=[t]:zr.push(t)}function Jg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Vi(t,i)}function Vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,st&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Vi(t,n)}return r=i.interleaved,r===null?(e.next=e,kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Vi(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mh(t,n)}}function Lm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,i){var r=t.updateQueue;ar=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var f=r.baseState;a=0,d=u=c=null,l=s;do{var p=l.lane,m=l.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(p=e,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(m,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,p=typeof v=="function"?v.call(m,f,p):v,p==null)break e;f=At({},f,p);break e;case 2:ar=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[l]:p.push(l))}else m={eventTime:m,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,c=f):d=d.next=m,a|=p;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;p=l,l=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(c=f),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Jr|=a,t.lanes=a,t.memoizedState=f}}function Dm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Mo={},Si=Cr(Mo),ao=Cr(Mo),oo=Cr(Mo);function Hr(t){if(t===Mo)throw Error(ce(174));return t}function jh(t,e){switch(gt(oo,e),gt(ao,t),gt(Si,Mo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ad(e,t)}_t(Si),gt(Si,e)}function Qs(){_t(Si),_t(ao),_t(oo)}function ev(t){Hr(oo.current);var e=Hr(Si.current),n=Ad(e,t.type);e!==n&&(gt(ao,t),gt(Si,n))}function zh(t){ao.current===t&&(_t(Si),_t(ao))}var wt=Cr(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mu=[];function Hh(){for(var t=0;t<Mu.length;t++)Mu[t]._workInProgressVersionPrimary=null;Mu.length=0}var Pl=$i.ReactCurrentDispatcher,Eu=$i.ReactCurrentBatchConfig,Zr=0,Et=null,Bt=null,Gt=null,uc=!1,Wa=!1,lo=0,Ub=0;function Jt(){throw Error(ce(321))}function Vh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function Gh(t,e,n,i,r,s){if(Zr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?Bb:jb,t=n(i,r),Wa){s=0;do{if(Wa=!1,lo=0,25<=s)throw Error(ce(301));s+=1,Gt=Bt=null,e.updateQueue=null,Pl.current=zb,t=n(i,r)}while(Wa)}if(Pl.current=dc,e=Bt!==null&&Bt.next!==null,Zr=0,Gt=Bt=Et=null,uc=!1,e)throw Error(ce(300));return t}function Wh(){var t=lo!==0;return lo=0,t}function mi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Et.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Yn(){if(Bt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=Gt===null?Et.memoizedState:Gt.next;if(e!==null)Gt=e,Bt=t;else{if(t===null)throw Error(ce(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},Gt===null?Et.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function co(t,e){return typeof e=="function"?e(t):e}function Tu(t){var e=Yn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((Zr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=f,a=i):c=c.next=f,Et.lanes|=d,Jr|=d}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=l,oi(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Au(t){var e=Yn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);oi(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function tv(){}function nv(t,e){var n=Et,i=Yn(),r=e(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,Xh(sv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,uo(9,rv.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(ce(349));Zr&30||iv(n,e,r)}return r}function iv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rv(t,e,n,i){e.value=n,e.getSnapshot=i,av(e)&&ov(t)}function sv(t,e,n){return n(function(){av(e)&&ov(t)})}function av(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function ov(t){var e=Vi(t,1);e!==null&&ai(e,t,1,-1)}function Im(t){var e=mi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:t},e.queue=t,t=t.dispatch=kb.bind(null,Et,t),[e.memoizedState,t]}function uo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function lv(){return Yn().memoizedState}function Ll(t,e,n,i){var r=mi();Et.flags|=t,r.memoizedState=uo(1|e,n,void 0,i===void 0?null:i)}function Fc(t,e,n,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var a=Bt.memoizedState;if(s=a.destroy,i!==null&&Vh(i,a.deps)){r.memoizedState=uo(e,n,s,i);return}}Et.flags|=t,r.memoizedState=uo(1|e,n,s,i)}function Um(t,e){return Ll(8390656,8,t,e)}function Xh(t,e){return Fc(2048,8,t,e)}function cv(t,e){return Fc(4,2,t,e)}function uv(t,e){return Fc(4,4,t,e)}function dv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function fv(t,e,n){return n=n!=null?n.concat([t]):null,Fc(4,4,dv.bind(null,e,t),n)}function qh(){}function hv(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function pv(t,e){var n=Yn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function mv(t,e,n){return Zr&21?(oi(n,e)||(n=yg(),Et.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function Fb(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Eu.transition;Eu.transition={};try{t(!1),e()}finally{lt=n,Eu.transition=i}}function xv(){return Yn().memoizedState}function Ob(t,e,n){var i=yr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},gv(t))vv(e,n);else if(n=Jg(t,e,n,i),n!==null){var r=un();ai(n,t,i,r),_v(n,e,i)}}function kb(t,e,n){var i=yr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(gv(t))vv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,oi(l,a)){var c=e.interleaved;c===null?(r.next=r,kh(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Jg(t,e,r,i),n!==null&&(r=un(),ai(n,t,i,r),_v(n,e,i))}}function gv(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function vv(t,e){Wa=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _v(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Mh(t,n)}}var dc={readContext:$n,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},Bb={readContext:$n,useCallback:function(t,e){return mi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:Um,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,dv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=mi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=mi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ob.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=mi();return t={current:t},e.memoizedState=t},useState:Im,useDebugValue:qh,useDeferredValue:function(t){return mi().memoizedState=t},useTransition:function(){var t=Im(!1),e=t[0];return t=Fb.bind(null,t[1]),mi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=mi();if(bt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Wt===null)throw Error(ce(349));Zr&30||iv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Um(sv.bind(null,i,s,t),[t]),i.flags|=2048,uo(9,rv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=mi(),e=Wt.identifierPrefix;if(bt){var n=Ui,i=Ii;n=(i&~(1<<32-si(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ub++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jb={readContext:$n,useCallback:hv,useContext:$n,useEffect:Xh,useImperativeHandle:fv,useInsertionEffect:cv,useLayoutEffect:uv,useMemo:pv,useReducer:Tu,useRef:lv,useState:function(){return Tu(co)},useDebugValue:qh,useDeferredValue:function(t){var e=Yn();return mv(e,Bt.memoizedState,t)},useTransition:function(){var t=Tu(co)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:xv,unstable_isNewReconciler:!1},zb={readContext:$n,useCallback:hv,useContext:$n,useEffect:Xh,useImperativeHandle:fv,useInsertionEffect:cv,useLayoutEffect:uv,useMemo:pv,useReducer:Au,useRef:lv,useState:function(){return Au(co)},useDebugValue:qh,useDeferredValue:function(t){var e=Yn();return Bt===null?e.memoizedState=t:mv(e,Bt.memoizedState,t)},useTransition:function(){var t=Au(co)[0],e=Yn().memoizedState;return[t,e]},useMutableSource:tv,useSyncExternalStore:nv,useId:xv,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $d(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Oc={isMounted:function(t){return(t=t._reactInternals)?as(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=yr(t),s=Oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(ai(e,t,r,i),Nl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=yr(t),s=Oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,r),e!==null&&(ai(e,t,r,i),Nl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=yr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=vr(t,r,i),e!==null&&(ai(e,t,i,n),Nl(e,t,i))}};function Fm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!no(n,i)||!no(r,s):!0}function yv(t,e,n){var i=!1,r=Mr,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=bn(e)?Yr:on.current,i=e.contextTypes,s=(i=i!=null)?Ks(t,r):Mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Oc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Om(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Oc.enqueueReplaceState(e,e.state,null)}function Yd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=bn(e)?Yr:on.current,r.context=Ks(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($d(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Oc.enqueueReplaceState(r,r.state,null),lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ea(t,e){try{var n="",i=e;do n+=mS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Cu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Hb=typeof WeakMap=="function"?WeakMap:Map;function Sv(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hc||(hc=!0,of=i),Kd(t,e)},n}function bv(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Kd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kd(t,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function km(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Hb;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=n1.bind(null,t,e,n),e.then(t,t))}function Bm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var Vb=$i.ReactCurrentOwner,yn=!1;function cn(t,e,n,i){e.child=t===null?Zg(e,null,n,i):Js(e,t.child,n,i)}function zm(t,e,n,i,r){n=n.render;var s=e.ref;return Gs(e,r),i=Gh(t,e,n,i,s,r),n=Wh(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(bt&&n&&Lh(e),e.flags|=1,cn(t,e,i,r),e.child)}function Hm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!tp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,wv(t,e,s,i,r)):(t=Fl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(a,i)&&t.ref===e.ref)return Gi(t,e,r)}return e.flags|=1,t=Sr(s,i),t.ref=e.ref,t.return=e,e.child=t}function wv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(no(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Gi(t,e,r)}return Zd(t,e,n,i,r)}function Mv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(Bs,Nn),Nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(Bs,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(Bs,Nn),Nn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(Bs,Nn),Nn|=i;return cn(t,e,r,n),e.child}function Ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zd(t,e,n,i,r){var s=bn(n)?Yr:on.current;return s=Ks(e,s),Gs(e,r),n=Gh(t,e,n,i,s,r),i=Wh(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Gi(t,e,r)):(bt&&i&&Lh(e),e.flags|=1,cn(t,e,n,r),e.child)}function Vm(t,e,n,i,r){if(bn(n)){var s=!0;ic(e)}else s=!1;if(Gs(e,r),e.stateNode===null)Dl(t,e),yv(e,n,i),Yd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=$n(u):(u=bn(n)?Yr:on.current,u=Ks(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==u)&&Om(e,a,i,u),ar=!1;var p=e.memoizedState;a.state=p,lc(e,i,a,r),c=e.memoizedState,l!==i||p!==c||Sn.current||ar?(typeof d=="function"&&($d(e,n,d,i),c=e.memoizedState),(l=ar||Fm(e,n,l,i,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Qg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ei(e.type,l),a.props=u,f=e.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=$n(c):(c=bn(n)?Yr:on.current,c=Ks(e,c));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==f||p!==c)&&Om(e,a,i,c),ar=!1,p=e.memoizedState,a.state=p,lc(e,i,a,r);var v=e.memoizedState;l!==f||p!==v||Sn.current||ar?(typeof m=="function"&&($d(e,n,m,i),v=e.memoizedState),(u=ar||Fm(e,n,u,i,p,v,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Jd(t,e,n,i,s,r)}function Jd(t,e,n,i,r,s){Ev(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Cm(e,n,!1),Gi(t,e,s);i=e.stateNode,Vb.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Js(e,t.child,null,s),e.child=Js(e,null,l,s)):cn(t,e,l,s),e.memoizedState=i.state,r&&Cm(e,n,!0),e.child}function Tv(t){var e=t.stateNode;e.pendingContext?Am(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Am(t,e.context,!1),jh(t,e.containerInfo)}function Gm(t,e,n,i,r){return Zs(),Ih(r),e.flags|=256,cn(t,e,n,i),e.child}var Qd={dehydrated:null,treeContext:null,retryLane:0};function ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function Av(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(wt,r&1),t===null)return Xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=jc(a,i,0,null),t=qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ef(n),e.memoizedState=Qd,t):$h(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Gb(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Sr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=Sr(l,s):(s=qr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ef(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Qd,i}return s=t.child,t=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function $h(t,e){return e=jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ko(t,e,n,i){return i!==null&&Ih(i),Js(e,t.child,null,n),t=$h(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gb(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Cu(Error(ce(422))),Ko(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=jc({mode:"visible",children:i.children},r,0,null),s=qr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Js(e,t.child,null,a),e.child.memoizedState=ef(a),e.memoizedState=Qd,s);if(!(e.mode&1))return Ko(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(ce(419)),i=Cu(s,i,void 0),Ko(t,e,a,i)}if(l=(a&t.childLanes)!==0,yn||l){if(i=Wt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Vi(t,r),ai(i,t,r,-1))}return ep(),i=Cu(Error(ce(421))),Ko(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=i1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Dn=gr(r.nextSibling),Un=e,bt=!0,ni=null,t!==null&&(Vn[Gn++]=Ii,Vn[Gn++]=Ui,Vn[Gn++]=Kr,Ii=t.id,Ui=t.overflow,Kr=e),e=$h(e,i.children),e.flags|=4096,e)}function Wm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),qd(t.return,e,n)}function Ru(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Cv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wm(t,n,e);else if(t.tag===19)Wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ru(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ru(e,!0,n,null,s);break;case"together":Ru(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wb(t,e,n){switch(e.tag){case 3:Tv(e),Zs();break;case 5:ev(e);break;case 1:bn(e.type)&&ic(e);break;case 4:jh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(ac,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?Av(t,e,n):(gt(wt,wt.current&1),t=Gi(t,e,n),t!==null?t.sibling:null);gt(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Cv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,Mv(t,e,n)}return Gi(t,e,n)}var Rv,tf,Nv,Pv;Rv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tf=function(){};Nv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Hr(Si.current);var s=null;switch(n){case"input":r=wd(t,r),i=wd(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Td(t,r),i=Td(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tc)}Cd(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ya.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(l=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&vt("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Pv=function(t,e,n,i){n!==i&&(e.flags|=4)};function wa(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Xb(t,e,n){var i=e.pendingProps;switch(Dh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return bn(e.type)&&nc(),Qt(e),null;case 3:return i=e.stateNode,Qs(),_t(Sn),_t(on),Hh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&($o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(uf(ni),ni=null))),tf(t,e),Qt(e),null;case 5:zh(e);var r=Hr(oo.current);if(n=e.type,t!==null&&e.stateNode!=null)Nv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Qt(e),null}if(t=Hr(Si.current),$o(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[so]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<Fa.length;r++)vt(Fa[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":em(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":nm(i,s),vt("invalid",i)}Cd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&qo(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&qo(i.textContent,l,t),r=["children",""+l]):Ya.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&vt("scroll",i)}switch(n){case"input":Bo(i),tm(i,s,!0);break;case"textarea":Bo(i),im(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[gi]=e,t[so]=i,Rv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Rd(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Fa.length;r++)vt(Fa[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":em(t,i),r=wd(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),vt("invalid",t);break;case"textarea":nm(t,i),r=Td(t,i),vt("invalid",t);break;default:r=i}Cd(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?lg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ag(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ka(t,c):typeof c=="number"&&Ka(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ya.hasOwnProperty(s)?c!=null&&s==="onScroll"&&vt("scroll",t):c!=null&&vh(t,s,c,a))}switch(n){case"input":Bo(t),tm(t,i,!1);break;case"textarea":Bo(t),im(t);break;case"option":i.value!=null&&t.setAttribute("value",""+wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?js(t,!!i.multiple,s,!1):i.defaultValue!=null&&js(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)Pv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Hr(oo.current),Hr(Si.current),$o(e)){if(i=e.stateNode,n=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:qo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return Qt(e),null;case 13:if(_t(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&Dn!==null&&e.mode&1&&!(e.flags&128))Yg(),Zs(),e.flags|=98560,s=!1;else if(s=$o(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[gi]=e}else Zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else ni!==null&&(uf(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?jt===0&&(jt=3):ep())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Qs(),tf(t,e),t===null&&io(e.stateNode.containerInfo),Qt(e),null;case 10:return Oh(e.type._context),Qt(e),null;case 17:return bn(e.type)&&nc(),Qt(e),null;case 19:if(_t(wt),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)wa(s,!1);else{if(jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=cc(t),a!==null){for(e.flags|=128,wa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>ta&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304)}else{if(!i)if(t=cc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),wa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!bt)return Qt(e),null}else 2*It()-s.renderingStartTime>ta&&n!==1073741824&&(e.flags|=128,i=!0,wa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=wt.current,gt(wt,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return Qh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function qb(t,e){switch(Dh(e),e.tag){case 1:return bn(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qs(),_t(Sn),_t(on),Hh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zh(e),null;case 13:if(_t(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _t(wt),null;case 4:return Qs(),null;case 10:return Oh(e.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var Zo=!1,rn=!1,$b=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function nf(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Xm=!1;function Yb(t,e){if(Bd=Jl,t=Fg(),Ph(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,f=t,p=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(l=a+r),f!==s||i!==0&&f.nodeType!==3||(c=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===t)break t;if(p===n&&++u===r&&(l=a),p===s&&++d===i&&(c=a),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(jd={focusedElem:t,selectionRange:n},Jl=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,x=v.memoizedState,h=e.stateNode,g=h.getSnapshotBeforeUpdate(e.elementType===e.type?w:ei(e.type,w),x);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){Nt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return v=Xm,Xm=!1,v}function Xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nf(e,n,s)}r=r.next}while(r!==i)}}function kc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Lv(t){var e=t.alternate;e!==null&&(t.alternate=null,Lv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gi],delete e[so],delete e[Vd],delete e[Pb],delete e[Lb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dv(t){return t.tag===5||t.tag===3||t.tag===4}function qm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(i!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}function af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var Xt=null,ti=!1;function Ji(t,e,n){for(n=n.child;n!==null;)Iv(t,e,n),n=n.sibling}function Iv(t,e,n){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(Nc,n)}catch{}switch(n.tag){case 5:rn||ks(n,e);case 6:var i=Xt,r=ti;Xt=null,Ji(t,e,n),Xt=i,ti=r,Xt!==null&&(ti?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(ti?(t=Xt,n=n.stateNode,t.nodeType===8?bu(t.parentNode,n):t.nodeType===1&&bu(t,n),eo(t)):bu(Xt,n.stateNode));break;case 4:i=Xt,r=ti,Xt=n.stateNode.containerInfo,ti=!0,Ji(t,e,n),Xt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&nf(n,e,a),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!rn&&(ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){Nt(n,e,l)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,Ji(t,e,n),rn=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function $m(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $b),e.forEach(function(i){var r=r1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Xt=l.stateNode,ti=!1;break e;case 3:Xt=l.stateNode.containerInfo,ti=!0;break e;case 4:Xt=l.stateNode.containerInfo,ti=!0;break e}l=l.return}if(Xt===null)throw Error(ce(160));Iv(s,a,r),Xt=null,ti=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Nt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Uv(e,t),e=e.sibling}function Uv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),fi(t),i&4){try{Xa(3,t,t.return),kc(3,t)}catch(w){Nt(t,t.return,w)}try{Xa(5,t,t.return)}catch(w){Nt(t,t.return,w)}}break;case 1:Kn(e,t),fi(t),i&512&&n!==null&&ks(n,n.return);break;case 5:if(Kn(e,t),fi(t),i&512&&n!==null&&ks(n,n.return),t.flags&32){var r=t.stateNode;try{Ka(r,"")}catch(w){Nt(t,t.return,w)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&ig(r,s),Rd(l,a);var u=Rd(l,s);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?lg(r,f):d==="dangerouslySetInnerHTML"?ag(r,f):d==="children"?Ka(r,f):vh(r,d,f,u)}switch(l){case"input":Md(r,s);break;case"textarea":rg(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?js(r,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?js(r,!!s.multiple,s.defaultValue,!0):js(r,!!s.multiple,s.multiple?[]:"",!1))}r[so]=s}catch(w){Nt(t,t.return,w)}}break;case 6:if(Kn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){Nt(t,t.return,w)}}break;case 3:if(Kn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(e.containerInfo)}catch(w){Nt(t,t.return,w)}break;case 4:Kn(e,t),fi(t);break;case 13:Kn(e,t),fi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zh=It())),i&4&&$m(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(u=rn)||d,Kn(e,t),rn=u):Kn(e,t),fi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(Ee=t,d=t.child;d!==null;){for(f=Ee=d;Ee!==null;){switch(p=Ee,m=p.child,p.tag){case 0:case 11:case 14:case 15:Xa(4,p,p.return);break;case 1:ks(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Nt(i,n,w)}}break;case 5:ks(p,p.return);break;case 22:if(p.memoizedState!==null){Km(f);continue}}m!==null?(m.return=p,Ee=m):Km(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=og("display",a))}catch(w){Nt(t,t.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){Nt(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Kn(e,t),fi(t),i&4&&$m(t);break;case 21:break;default:Kn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dv(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ka(r,""),i.flags&=-33);var s=qm(t);af(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=qm(t);sf(t,l,a);break;default:throw Error(ce(161))}}catch(c){Nt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Kb(t,e,n){Ee=t,Fv(t)}function Fv(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Zo;if(!a){var l=r.alternate,c=l!==null&&l.memoizedState!==null||rn;l=Zo;var u=rn;if(Zo=a,(rn=c)&&!u)for(Ee=r;Ee!==null;)a=Ee,c=a.child,a.tag===22&&a.memoizedState!==null?Zm(r):c!==null?(c.return=a,Ee=c):Zm(r);for(;s!==null;)Ee=s,Fv(s),s=s.sibling;Ee=r,Zo=l,rn=u}Ym(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Ym(t)}}function Ym(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||kc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dm(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&eo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}rn||e.flags&512&&rf(e)}catch(p){Nt(e,e.return,p)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Km(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Zm(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kc(4,e)}catch(c){Nt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){Nt(e,r,c)}}var s=e.return;try{rf(e)}catch(c){Nt(e,s,c)}break;case 5:var a=e.return;try{rf(e)}catch(c){Nt(e,a,c)}}}catch(c){Nt(e,e.return,c)}if(e===t){Ee=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Ee=l;break}Ee=e.return}}var Zb=Math.ceil,fc=$i.ReactCurrentDispatcher,Yh=$i.ReactCurrentOwner,Xn=$i.ReactCurrentBatchConfig,st=0,Wt=null,Ot=null,Yt=0,Nn=0,Bs=Cr(0),jt=0,fo=null,Jr=0,Bc=0,Kh=0,qa=null,_n=null,Zh=0,ta=1/0,Pi=null,hc=!1,of=null,_r=null,Jo=!1,dr=null,pc=0,$a=0,lf=null,Il=-1,Ul=0;function un(){return st&6?It():Il!==-1?Il:Il=It()}function yr(t){return t.mode&1?st&2&&Yt!==0?Yt&-Yt:Ib.transition!==null?(Ul===0&&(Ul=yg()),Ul):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Ag(t.type)),t):1}function ai(t,e,n,i){if(50<$a)throw $a=0,lf=null,Error(ce(185));So(t,n,i),(!(st&2)||t!==Wt)&&(t===Wt&&(!(st&2)&&(Bc|=n),jt===4&&lr(t,Yt)),wn(t,i),n===1&&st===0&&!(e.mode&1)&&(ta=It()+500,Uc&&Rr()))}function wn(t,e){var n=t.callbackNode;IS(t,e);var i=Zl(t,t===Wt?Yt:0);if(i===0)n!==null&&am(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&am(n),e===1)t.tag===0?Db(Jm.bind(null,t)):Xg(Jm.bind(null,t)),Rb(function(){!(st&6)&&Rr()}),n=null;else{switch(Sg(i)){case 1:n=wh;break;case 4:n=vg;break;case 16:n=Kl;break;case 536870912:n=_g;break;default:n=Kl}n=Gv(n,Ov.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ov(t,e){if(Il=-1,Ul=0,st&6)throw Error(ce(327));var n=t.callbackNode;if(Ws()&&t.callbackNode!==n)return null;var i=Zl(t,t===Wt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=mc(t,i);else{e=i;var r=st;st|=2;var s=Bv();(Wt!==t||Yt!==e)&&(Pi=null,ta=It()+500,Xr(t,e));do try{e1();break}catch(l){kv(t,l)}while(!0);Fh(),fc.current=s,st=r,Ot!==null?e=0:(Wt=null,Yt=0,e=jt)}if(e!==0){if(e===2&&(r=Id(t),r!==0&&(i=r,e=cf(t,r))),e===1)throw n=fo,Xr(t,0),lr(t,i),wn(t,It()),n;if(e===6)lr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Jb(r)&&(e=mc(t,i),e===2&&(s=Id(t),s!==0&&(i=s,e=cf(t,s))),e===1))throw n=fo,Xr(t,0),lr(t,i),wn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Fr(t,_n,Pi);break;case 3:if(lr(t,i),(i&130023424)===i&&(e=Zh+500-It(),10<e)){if(Zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Hd(Fr.bind(null,t,_n,Pi),e);break}Fr(t,_n,Pi);break;case 4:if(lr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-si(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Zb(i/1960))-i,10<i){t.timeoutHandle=Hd(Fr.bind(null,t,_n,Pi),i);break}Fr(t,_n,Pi);break;case 5:Fr(t,_n,Pi);break;default:throw Error(ce(329))}}}return wn(t,It()),t.callbackNode===n?Ov.bind(null,t):null}function cf(t,e){var n=qa;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=mc(t,e),t!==2&&(e=_n,_n=n,e!==null&&uf(e)),t}function uf(t){_n===null?_n=t:_n.push.apply(_n,t)}function Jb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!oi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e){for(e&=~Kh,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-si(e),i=1<<n;t[n]=-1,e&=~i}}function Jm(t){if(st&6)throw Error(ce(327));Ws();var e=Zl(t,0);if(!(e&1))return wn(t,It()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var i=Id(t);i!==0&&(e=i,n=cf(t,i))}if(n===1)throw n=fo,Xr(t,0),lr(t,e),wn(t,It()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Fr(t,_n,Pi),wn(t,It()),null}function Jh(t,e){var n=st;st|=1;try{return t(e)}finally{st=n,st===0&&(ta=It()+500,Uc&&Rr())}}function Qr(t){dr!==null&&dr.tag===0&&!(st&6)&&Ws();var e=st;st|=1;var n=Xn.transition,i=lt;try{if(Xn.transition=null,lt=1,t)return t()}finally{lt=i,Xn.transition=n,st=e,!(st&6)&&Rr()}}function Qh(){Nn=Bs.current,_t(Bs)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cb(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(Dh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nc();break;case 3:Qs(),_t(Sn),_t(on),Hh();break;case 5:zh(i);break;case 4:Qs();break;case 13:_t(wt);break;case 19:_t(wt);break;case 10:Oh(i.type._context);break;case 22:case 23:Qh()}n=n.return}if(Wt=t,Ot=t=Sr(t.current,null),Yt=Nn=e,jt=0,fo=null,Kh=Bc=Jr=0,_n=qa=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}zr=null}return t}function kv(t,e){do{var n=Ot;try{if(Fh(),Pl.current=dc,uc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uc=!1}if(Zr=0,Gt=Bt=Et=null,Wa=!1,lo=0,Yh.current=null,n===null||n.return===null){jt=1,fo=e,Ot=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=Yt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Bm(a);if(m!==null){m.flags&=-257,jm(m,a,l,s,e),m.mode&1&&km(s,u,e),e=m,c=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(c),e.updateQueue=w}else v.add(c);break e}else{if(!(e&1)){km(s,u,e),ep();break e}c=Error(ce(426))}}else if(bt&&l.mode&1){var x=Bm(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),jm(x,a,l,s,e),Ih(ea(c,l));break e}}s=c=ea(c,l),jt!==4&&(jt=2),qa===null?qa=[s]:qa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Sv(s,c,e);Lm(s,h);break e;case 1:l=c;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(_r===null||!_r.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=bv(s,l,e);Lm(s,y);break e}}s=s.return}while(s!==null)}zv(n)}catch(M){e=M,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function Bv(){var t=fc.current;return fc.current=dc,t===null?dc:t}function ep(){(jt===0||jt===3||jt===2)&&(jt=4),Wt===null||!(Jr&268435455)&&!(Bc&268435455)||lr(Wt,Yt)}function mc(t,e){var n=st;st|=2;var i=Bv();(Wt!==t||Yt!==e)&&(Pi=null,Xr(t,e));do try{Qb();break}catch(r){kv(t,r)}while(!0);if(Fh(),st=n,fc.current=i,Ot!==null)throw Error(ce(261));return Wt=null,Yt=0,jt}function Qb(){for(;Ot!==null;)jv(Ot)}function e1(){for(;Ot!==null&&!ES();)jv(Ot)}function jv(t){var e=Vv(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?zv(t):Ot=e,Yh.current=null}function zv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qb(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Ot=null;return}}else if(n=Xb(n,e,Nn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);jt===0&&(jt=5)}function Fr(t,e,n){var i=lt,r=Xn.transition;try{Xn.transition=null,lt=1,t1(t,e,n,i)}finally{Xn.transition=r,lt=i}return null}function t1(t,e,n,i){do Ws();while(dr!==null);if(st&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(US(t,s),t===Wt&&(Ot=Wt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jo||(Jo=!0,Gv(Kl,function(){return Ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var a=lt;lt=1;var l=st;st|=4,Yh.current=null,Yb(t,n),Uv(n,t),Sb(jd),Jl=!!Bd,jd=Bd=null,t.current=n,Kb(n),TS(),st=l,lt=a,Xn.transition=s}else t.current=n;if(Jo&&(Jo=!1,dr=t,pc=r),s=t.pendingLanes,s===0&&(_r=null),RS(n.stateNode),wn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hc)throw hc=!1,t=of,of=null,t;return pc&1&&t.tag!==0&&Ws(),s=t.pendingLanes,s&1?t===lf?$a++:($a=0,lf=t):$a=0,Rr(),null}function Ws(){if(dr!==null){var t=Sg(pc),e=Xn.transition,n=lt;try{if(Xn.transition=null,lt=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,pc=0,st&6)throw Error(ce(331));var r=st;for(st|=4,Ee=t.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(Ee=u;Ee!==null;){var d=Ee;switch(d.tag){case 0:case 11:case 15:Xa(8,d,s)}var f=d.child;if(f!==null)f.return=d,Ee=f;else for(;Ee!==null;){d=Ee;var p=d.sibling,m=d.return;if(Lv(d),d===u){Ee=null;break}if(p!==null){p.return=m,Ee=p;break}Ee=m}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Xa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var g=t.current;for(Ee=g;Ee!==null;){a=Ee;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,Ee=_;else e:for(a=g;Ee!==null;){if(l=Ee,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:kc(9,l)}}catch(M){Nt(l,l.return,M)}if(l===a){Ee=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,Ee=y;break e}Ee=l.return}}if(st=r,Rr(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(Nc,t)}catch{}i=!0}return i}finally{lt=n,Xn.transition=e}}return!1}function Qm(t,e,n){e=ea(n,e),e=Sv(t,e,1),t=vr(t,e,1),e=un(),t!==null&&(So(t,1,e),wn(t,e))}function Nt(t,e,n){if(t.tag===3)Qm(t,t,n);else for(;e!==null;){if(e.tag===3){Qm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){t=ea(n,t),t=bv(e,t,1),e=vr(e,t,1),t=un(),e!==null&&(So(e,1,t),wn(e,t));break}}e=e.return}}function n1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Yt&n)===n&&(jt===4||jt===3&&(Yt&130023424)===Yt&&500>It()-Zh?Xr(t,0):Kh|=n),wn(t,e)}function Hv(t,e){e===0&&(t.mode&1?(e=Ho,Ho<<=1,!(Ho&130023424)&&(Ho=4194304)):e=1);var n=un();t=Vi(t,e),t!==null&&(So(t,e,n),wn(t,n))}function i1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hv(t,n)}function r1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Hv(t,n)}var Vv;Vv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,Wb(t,e,n);yn=!!(t.flags&131072)}else yn=!1,bt&&e.flags&1048576&&qg(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Dl(t,e),t=e.pendingProps;var r=Ks(e,on.current);Gs(e,n),r=Gh(null,e,i,t,r,n);var s=Wh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,ic(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bh(e),r.updater=Oc,e.stateNode=r,r._reactInternals=e,Yd(e,i,t,n),e=Jd(null,e,i,!0,s,n)):(e.tag=0,bt&&s&&Lh(e),cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=a1(i),t=ei(i,t),r){case 0:e=Zd(null,e,i,t,n);break e;case 1:e=Vm(null,e,i,t,n);break e;case 11:e=zm(null,e,i,t,n);break e;case 14:e=Hm(null,e,i,ei(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Zd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Vm(t,e,i,r,n);case 3:e:{if(Tv(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Qg(t,e),lc(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ea(Error(ce(423)),e),e=Gm(t,e,i,n,r);break e}else if(i!==r){r=ea(Error(ce(424)),e),e=Gm(t,e,i,n,r);break e}else for(Dn=gr(e.stateNode.containerInfo.firstChild),Un=e,bt=!0,ni=null,n=Zg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zs(),i===r){e=Gi(t,e,n);break e}cn(t,e,i,n)}e=e.child}return e;case 5:return ev(e),t===null&&Xd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,zd(i,r)?a=null:s!==null&&zd(i,s)&&(e.flags|=32),Ev(t,e),cn(t,e,a,n),e.child;case 6:return t===null&&Xd(e),null;case 13:return Av(t,e,n);case 4:return jh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Js(e,null,i,n):cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),zm(t,e,i,r,n);case 7:return cn(t,e,e.pendingProps,n),e.child;case 8:return cn(t,e,e.pendingProps.children,n),e.child;case 12:return cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt(ac,i._currentValue),i._currentValue=a,s!==null)if(oi(s.value,a)){if(s.children===r.children&&!Sn.current){e=Gi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Oi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),qd(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),qd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Gs(e,n),r=$n(r),i=i(r),e.flags|=1,cn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),Hm(t,e,i,r,n);case 15:return wv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Dl(t,e),e.tag=1,bn(i)?(t=!0,ic(e)):t=!1,Gs(e,n),yv(e,i,r),Yd(e,i,r,n),Jd(null,e,i,!0,t,n);case 19:return Cv(t,e,n);case 22:return Mv(t,e,n)}throw Error(ce(156,e.tag))};function Gv(t,e){return gg(t,e)}function s1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new s1(t,e,n,i)}function tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function a1(t){if(typeof t=="function")return tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yh)return 11;if(t===Sh)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Fl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")tp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Rs:return qr(n.children,r,s,e);case _h:a=8,r|=8;break;case _d:return t=Wn(12,n,e,r|2),t.elementType=_d,t.lanes=s,t;case yd:return t=Wn(13,n,e,r),t.elementType=yd,t.lanes=s,t;case Sd:return t=Wn(19,n,e,r),t.elementType=Sd,t.lanes=s,t;case eg:return jc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jx:a=10;break e;case Qx:a=9;break e;case yh:a=11;break e;case Sh:a=14;break e;case sr:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Wn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function qr(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function jc(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=eg,t.lanes=n,t.stateNode={isHidden:!1},t}function Nu(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function Pu(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function o1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=du(0),this.expirationTimes=du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function np(t,e,n,i,r,s,a,l,c){return t=new o1(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bh(s),t}function l1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Wv(t){if(!t)return Mr;t=t._reactInternals;e:{if(as(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(bn(n))return Wg(t,n,e)}return e}function Xv(t,e,n,i,r,s,a,l,c){return t=np(n,i,!0,t,r,s,a,l,c),t.context=Wv(null),n=t.current,i=un(),r=yr(n),s=Oi(i,r),s.callback=e??null,vr(n,s,r),t.current.lanes=r,So(t,r,i),wn(t,i),t}function zc(t,e,n,i){var r=e.current,s=un(),a=yr(r);return n=Wv(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=vr(r,e,a),t!==null&&(ai(t,r,a,s),Nl(t,r,a)),a}function xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function e0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ip(t,e){e0(t,e),(t=t.alternate)&&e0(t,e)}function c1(){return null}var qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function rp(t){this._internalRoot=t}Hc.prototype.render=rp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));zc(t,e,null,null)};Hc.prototype.unmount=rp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Qr(function(){zc(null,t,null,null)}),e[Hi]=null}};function Hc(t){this._internalRoot=t}Hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&Tg(t)}};function sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function t0(){}function u1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=xc(a);s.call(u)}}var a=Xv(e,i,t,0,null,!1,!1,"",t0);return t._reactRootContainer=a,t[Hi]=a.current,io(t.nodeType===8?t.parentNode:t),Qr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var u=xc(c);l.call(u)}}var c=np(t,0,!1,null,null,!1,!1,"",t0);return t._reactRootContainer=c,t[Hi]=c.current,io(t.nodeType===8?t.parentNode:t),Qr(function(){zc(e,c,n,i)}),c}function Gc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var c=xc(a);l.call(c)}}zc(e,a,t,r)}else a=u1(n,e,t,r,i);return xc(a)}bg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ua(e.pendingLanes);n!==0&&(Mh(e,n|1),wn(e,It()),!(st&6)&&(ta=It()+500,Rr()))}break;case 13:Qr(function(){var i=Vi(t,1);if(i!==null){var r=un();ai(i,t,1,r)}}),ip(t,1)}};Eh=function(t){if(t.tag===13){var e=Vi(t,134217728);if(e!==null){var n=un();ai(e,t,134217728,n)}ip(t,134217728)}};wg=function(t){if(t.tag===13){var e=yr(t),n=Vi(t,e);if(n!==null){var i=un();ai(n,t,e,i)}ip(t,e)}};Mg=function(){return lt};Eg=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Pd=function(t,e,n){switch(e){case"input":if(Md(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ic(i);if(!r)throw Error(ce(90));ng(i),Md(i,r)}}}break;case"textarea":rg(t,n);break;case"select":e=n.value,e!=null&&js(t,!!n.multiple,e,!1)}};dg=Jh;fg=Qr;var d1={usingClientEntryPoint:!1,Events:[wo,Ds,Ic,cg,ug,Jh]},Ma={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},f1={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$i.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||c1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Nc=Qo.inject(f1),yi=Qo}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d1;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sp(e))throw Error(ce(200));return l1(t,e,null,n)};On.createRoot=function(t,e){if(!sp(t))throw Error(ce(299));var n=!1,i="",r=qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=np(t,1,!1,null,null,n,!1,i,r),t[Hi]=e.current,io(t.nodeType===8?t.parentNode:t),new rp(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=mg(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return Qr(t)};On.hydrate=function(t,e,n){if(!Vc(e))throw Error(ce(200));return Gc(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!sp(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=qv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Xv(e,null,t,1,n??null,r,!1,s,a),t[Hi]=e.current,io(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Hc(e)};On.render=function(t,e,n){if(!Vc(e))throw Error(ce(200));return Gc(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!Vc(t))throw Error(ce(40));return t._reactRootContainer?(Qr(function(){Gc(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1};On.unstable_batchedUpdates=Jh;On.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Gc(t,e,n,!1,i)};On.version="18.3.1-next-f1338f8080-20240426";function $v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($v)}catch(t){console.error(t)}}$v(),$x.exports=On;var h1=$x.exports,n0=h1;gd.createRoot=n0.createRoot,gd.hydrateRoot=n0.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ho(){return ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ho.apply(null,arguments)}var fr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(fr||(fr={}));const i0="popstate";function p1(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:l}=i.location;return df("",{pathname:s,search:a,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:gc(r)}return x1(e,n,null,t)}function kt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ap(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function m1(){return Math.random().toString(36).substr(2,8)}function r0(t,e){return{usr:t.state,key:t.key,idx:e}}function df(t,e,n,i){return n===void 0&&(n=null),ho({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?da(e):e,{state:n,key:e&&e.key||i||m1()})}function gc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function da(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function x1(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,l=fr.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(ho({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){l=fr.Pop;let x=d(),h=x==null?null:x-u;u=x,c&&c({action:l,location:w.location,delta:h})}function p(x,h){l=fr.Push;let g=df(w.location,x,h);u=d()+1;let _=r0(g,u),y=w.createHref(g);try{a.pushState(_,"",y)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;r.location.assign(y)}s&&c&&c({action:l,location:w.location,delta:1})}function m(x,h){l=fr.Replace;let g=df(w.location,x,h);u=d();let _=r0(g,u),y=w.createHref(g);a.replaceState(_,"",y),s&&c&&c({action:l,location:w.location,delta:0})}function v(x){let h=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof x=="string"?x:gc(x);return g=g.replace(/ $/,"%20"),kt(h,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,h)}let w={get action(){return l},get location(){return t(r,a)},listen(x){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(i0,f),c=x,()=>{r.removeEventListener(i0,f),c=null}},createHref(x){return e(r,x)},createURL:v,encodeLocation(x){let h=v(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:m,go(x){return a.go(x)}};return w}var s0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(s0||(s0={}));function g1(t,e,n){return n===void 0&&(n="/"),v1(t,e,n)}function v1(t,e,n,i){let r=typeof e=="string"?da(e):e,s=op(r.pathname||"/",n);if(s==null)return null;let a=Yv(t);_1(a);let l=null,c=P1(s);for(let u=0;l==null&&u<a.length;++u)l=C1(a[u],c);return l}function Yv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(kt(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let u=br([i,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(kt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Yv(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:T1(u,s.index),routesMeta:d})};return t.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))r(s,a);else for(let c of Kv(s.path))r(s,a,c)}),e}function Kv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=Kv(i.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),r&&l.push(...a),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function _1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:A1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const y1=/^:[\w-]+$/,S1=3,b1=2,w1=1,M1=10,E1=-2,a0=t=>t==="*";function T1(t,e){let n=t.split("/"),i=n.length;return n.some(a0)&&(i+=E1),e&&(i+=b1),n.filter(r=>!a0(r)).reduce((r,s)=>r+(y1.test(s)?S1:s===""?w1:M1),i)}function A1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function C1(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let l=0;l<i.length;++l){let c=i[l],u=l===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=R1({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:br([s,f.pathname]),pathnameBase:F1(br([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=br([s,f.pathnameBase]))}return a}function R1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=N1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:i.reduce((u,d,f)=>{let{paramName:p,isOptional:m}=d;if(p==="*"){let w=l[f]||"";a=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=l[f];return m&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:t}}function N1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ap(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(i.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function P1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ap(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function op(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const L1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D1=t=>L1.test(t);function I1(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?da(t):t,s;if(n)if(D1(n))s=n;else{if(n.includes("//")){let a=n;n=Qv(n),ap(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=o0(n.substring(1),"/"):s=o0(n,e)}else s=e;return{pathname:s,search:O1(i),hash:k1(r)}}function o0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Lu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function U1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Zv(t,e){let n=U1(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Jv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=da(t):(r=ho({},t),kt(!r.pathname||!r.pathname.includes("?"),Lu("?","pathname","search",r)),kt(!r.pathname||!r.pathname.includes("#"),Lu("#","pathname","hash",r)),kt(!r.search||!r.search.includes("#"),Lu("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,l;if(a==null)l=n;else{let f=e.length-1;if(!i&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),f-=1;r.pathname=p.join("/")}l=f>=0?e[f]:"/"}let c=I1(r,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const Qv=t=>t.replace(/\/\/+/g,"/"),br=t=>Qv(t.join("/")),F1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),O1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,k1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function B1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const e_=["post","put","patch","delete"];new Set(e_);const j1=["get",...e_];new Set(j1);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},po.apply(null,arguments)}const lp=X.createContext(null),z1=X.createContext(null),os=X.createContext(null),Wc=X.createContext(null),ls=X.createContext({outlet:null,matches:[],isDataRoute:!1}),t_=X.createContext(null);function H1(t,e){let{relative:n}=e===void 0?{}:e;Eo()||kt(!1);let{basename:i,navigator:r}=X.useContext(os),{hash:s,pathname:a,search:l}=i_(t,{relative:n}),c=a;return i!=="/"&&(c=a==="/"?i:br([i,a])),r.createHref({pathname:c,search:l,hash:s})}function Eo(){return X.useContext(Wc)!=null}function To(){return Eo()||kt(!1),X.useContext(Wc).location}function n_(t){X.useContext(os).static||X.useLayoutEffect(t)}function Xc(){let{isDataRoute:t}=X.useContext(ls);return t?tw():V1()}function V1(){Eo()||kt(!1);let t=X.useContext(lp),{basename:e,future:n,navigator:i}=X.useContext(os),{matches:r}=X.useContext(ls),{pathname:s}=To(),a=JSON.stringify(Zv(r,n.v7_relativeSplatPath)),l=X.useRef(!1);return n_(()=>{l.current=!0}),X.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){i.go(u);return}let f=Jv(u,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:br([e,f.pathname])),(d.replace?i.replace:i.push)(f,d.state,d)},[e,i,a,s,t])}function i_(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=X.useContext(os),{matches:r}=X.useContext(ls),{pathname:s}=To(),a=JSON.stringify(Zv(r,i.v7_relativeSplatPath));return X.useMemo(()=>Jv(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function G1(t,e){return W1(t,e)}function W1(t,e,n,i){Eo()||kt(!1);let{navigator:r}=X.useContext(os),{matches:s}=X.useContext(ls),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=To(),d;if(e){var f;let x=typeof e=="string"?da(e):e;c==="/"||(f=x.pathname)!=null&&f.startsWith(c)||kt(!1),d=x}else d=u;let p=d.pathname||"/",m=p;if(c!=="/"){let x=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=g1(t,{pathname:m}),w=K1(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:br([c,r.encodeLocation?r.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:br([c,r.encodeLocation?r.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,i);return e&&w?X.createElement(Wc.Provider,{value:{location:po({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:fr.Pop}},w):w}function X1(){let t=ew(),e=B1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return X.createElement(X.Fragment,null,X.createElement("h2",null,"Unexpected Application Error!"),X.createElement("h3",{style:{fontStyle:"italic"}},e),n?X.createElement("pre",{style:r},n):null,null)}const q1=X.createElement(X1,null);class $1 extends X.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?X.createElement(ls.Provider,{value:this.props.routeContext},X.createElement(t_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y1(t){let{routeContext:e,match:n,children:i}=t,r=X.useContext(lp);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),X.createElement(ls.Provider,{value:e},i)}function K1(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=(r=n)==null?void 0:r.errors;if(l!=null){let d=a.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||kt(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:p,errors:m}=n,v=f.route.loader&&p[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||v){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,p)=>{let m,v=!1,w=null,x=null;n&&(m=l&&f.route.id?l[f.route.id]:void 0,w=f.route.errorElement||q1,c&&(u<0&&p===0?(nw("route-fallback"),v=!0,x=null):u===p&&(v=!0,x=f.route.hydrateFallbackElement||null)));let h=e.concat(a.slice(0,p+1)),g=()=>{let _;return m?_=w:v?_=x:f.route.Component?_=X.createElement(f.route.Component,null):f.route.element?_=f.route.element:_=d,X.createElement(Y1,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:_})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?X.createElement($1,{location:n.location,revalidation:n.revalidation,component:w,error:m,children:g(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):g()},null)}var r_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(r_||{}),s_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(s_||{});function Z1(t){let e=X.useContext(lp);return e||kt(!1),e}function J1(t){let e=X.useContext(z1);return e||kt(!1),e}function Q1(t){let e=X.useContext(ls);return e||kt(!1),e}function a_(t){let e=Q1(),n=e.matches[e.matches.length-1];return n.route.id||kt(!1),n.route.id}function ew(){var t;let e=X.useContext(t_),n=J1(),i=a_();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function tw(){let{router:t}=Z1(r_.UseNavigateStable),e=a_(s_.UseNavigateStable),n=X.useRef(!1);return n_(()=>{n.current=!0}),X.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,po({fromRouteId:e},s)))},[t,e])}const l0={};function nw(t,e,n){l0[t]||(l0[t]=!0)}function iw(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Rn(t){kt(!1)}function rw(t){let{basename:e="/",children:n=null,location:i,navigationType:r=fr.Pop,navigator:s,static:a=!1,future:l}=t;Eo()&&kt(!1);let c=e.replace(/^\/*/,"/"),u=X.useMemo(()=>({basename:c,navigator:s,static:a,future:po({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof i=="string"&&(i=da(i));let{pathname:d="/",search:f="",hash:p="",state:m=null,key:v="default"}=i,w=X.useMemo(()=>{let x=op(d,c);return x==null?null:{location:{pathname:x,search:f,hash:p,state:m,key:v},navigationType:r}},[c,d,f,p,m,v,r]);return w==null?null:X.createElement(os.Provider,{value:u},X.createElement(Wc.Provider,{children:n,value:w}))}function sw(t){let{children:e,location:n}=t;return G1(ff(e),n)}new Promise(()=>{});function ff(t,e){e===void 0&&(e=[]);let n=[];return X.Children.forEach(t,(i,r)=>{if(!X.isValidElement(i))return;let s=[...e,r];if(i.type===X.Fragment){n.push.apply(n,ff(i.props.children,s));return}i.type!==Rn&&kt(!1),!i.props.index||!i.props.children||kt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=ff(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hf(){return hf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hf.apply(null,arguments)}function aw(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function ow(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lw(t,e){return t.button===0&&(!e||e==="_self")&&!ow(t)}const cw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],uw="6";try{window.__reactRouterVersion=uw}catch{}const dw="startTransition",c0=nS[dw];function fw(t){let{basename:e,children:n,future:i,window:r}=t,s=X.useRef();s.current==null&&(s.current=p1({window:r,v5Compat:!0}));let a=s.current,[l,c]=X.useState({action:a.action,location:a.location}),{v7_startTransition:u}=i||{},d=X.useCallback(f=>{u&&c0?c0(()=>c(f)):c(f)},[c,u]);return X.useLayoutEffect(()=>a.listen(d),[a,d]),X.useEffect(()=>iw(i),[i]),X.createElement(rw,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:a,future:i})}const hw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,St=X.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:l,target:c,to:u,preventScrollReset:d,viewTransition:f}=e,p=aw(e,cw),{basename:m}=X.useContext(os),v,w=!1;if(typeof u=="string"&&pw.test(u)&&(v=u,hw))try{let _=new URL(window.location.href),y=u.startsWith("//")?new URL(_.protocol+u):new URL(u),M=op(y.pathname,m);y.origin===_.origin&&M!=null?u=M+y.search+y.hash:w=!0}catch{}let x=H1(u,{relative:r}),h=mw(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:r,viewTransition:f});function g(_){i&&i(_),_.defaultPrevented||h(_)}return X.createElement("a",hf({},p,{href:v||x,onClick:w||s?i:g,ref:n,target:c}))});var u0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(u0||(u0={}));var d0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(d0||(d0={}));function mw(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:l}=e===void 0?{}:e,c=Xc(),u=To(),d=i_(t,{relative:a});return X.useCallback(f=>{if(lw(f,n)){f.preventDefault();let p=i!==void 0?i:gc(u)===gc(d);c(t,{replace:p,state:r,preventScrollReset:s,relative:a,viewTransition:l})}},[u,c,d,i,r,n,t,s,a,l])}function o_(t,e){return function(){return t.apply(e,arguments)}}const{toString:xw}=Object.prototype,{getPrototypeOf:na}=Object,{iterator:Ao,toStringTag:l_}=Symbol,vc=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),mo=(t,e)=>{let n=t;const i=[];for(;n!=null&&n!==Object.prototype;){if(i.indexOf(n)!==-1)return!1;if(i.push(n),vc(n,e))return!0;n=na(n)}return!1},gw=(t,e)=>t!=null&&mo(t,e)?t[e]:void 0,cp=(t=>e=>{const n=xw.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),li=t=>(t=t.toLowerCase(),e=>cp(e)===t),qc=t=>e=>typeof e===t,{isArray:es}=Array,ia=qc("undefined");function fa(t){return t!==null&&!ia(t)&&t.constructor!==null&&!ia(t.constructor)&&Mn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const c_=li("ArrayBuffer");function vw(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&c_(t.buffer),e}const _w=qc("string"),Mn=qc("function"),u_=qc("number"),ha=t=>t!==null&&typeof t=="object",yw=t=>t===!0||t===!1,Ol=t=>{if(!ha(t))return!1;const e=na(t);return(e===null||e===Object.prototype||na(e)===null)&&!mo(t,l_)&&!mo(t,Ao)},Sw=t=>{if(!ha(t)||fa(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},bw=li("Date"),ww=li("File"),Mw=t=>!!(t&&typeof t.uri<"u"),Ew=t=>t&&typeof t.getParts<"u",Tw=li("Blob"),Aw=li("FileList"),Cw=t=>ha(t)&&Mn(t.pipe);function Rw(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const f0=Rw(),h0=typeof f0.FormData<"u"?f0.FormData:void 0,Nw=t=>{if(!t)return!1;if(h0&&t instanceof h0)return!0;const e=na(t);if(!e||e===Object.prototype||!Mn(t.append))return!1;const n=cp(t);return n==="formdata"||n==="object"&&Mn(t.toString)&&t.toString()==="[object FormData]"},Pw=li("URLSearchParams"),[Lw,Dw,Iw,Uw]=["ReadableStream","Request","Response","Headers"].map(li),Fw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Co(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),es(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(fa(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let l;for(i=0;i<a;i++)l=s[i],e.call(null,t[l],l,t)}}function d_(t,e){if(fa(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Vr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,f_=t=>!ia(t)&&t!==Vr;function pf(...t){const{caseless:e,skipUndefined:n}=f_(this)&&this||{},i={},r=(s,a)=>{if(a==="__proto__"||a==="constructor"||a==="prototype")return;const l=e&&typeof a=="string"&&d_(i,a)||a,c=vc(i,l)?i[l]:void 0;Ol(c)&&Ol(s)?i[l]=pf(c,s):Ol(s)?i[l]=pf({},s):es(s)?i[l]=s.slice():(!n||!ia(s))&&(i[l]=s)};for(let s=0,a=t.length;s<a;s++){const l=t[s];if(!l||fa(l)||(Co(l,r),typeof l!="object"||es(l)))continue;const c=Object.getOwnPropertySymbols(l);for(let u=0;u<c.length;u++){const d=c[u];$w.call(l,d)&&r(l[d],d)}}return i}const Ow=(t,e,n,{allOwnKeys:i}={})=>(Co(e,(r,s)=>{n&&Mn(r)?Object.defineProperty(t,s,{__proto__:null,value:o_(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),kw=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Bw=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},jw=(t,e,n,i)=>{let r,s,a;const l={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)a=r[s],(!i||i(a,t,e))&&!l[a]&&(e[a]=t[a],l[a]=!0);t=n!==!1&&na(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},zw=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Hw=t=>{if(!t)return null;if(es(t))return t;let e=t.length;if(!u_(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Vw=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&na(Uint8Array)),Gw=(t,e)=>{const i=(t&&t[Ao]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},Ww=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Xw=li("HTMLFormElement"),qw=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:$w}=Object.prototype,Yw=li("RegExp"),h_=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Co(n,(r,s)=>{let a;(a=e(r,s,t))!==!1&&(i[s]=a||r)}),Object.defineProperties(t,i)},Kw=t=>{h_(t,(e,n)=>{if(Mn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(Mn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Zw=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return es(t)?i(t):i(String(t).split(e)),n},Jw=()=>{},Qw=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function eM(t){return!!(t&&Mn(t.append)&&t[l_]==="FormData"&&t[Ao])}const tM=t=>{const e=new WeakSet,n=i=>{if(ha(i)){if(e.has(i))return;if(fa(i))return i;if(!("toJSON"in i)){e.add(i);const r=es(i)?[]:{};return Co(i,(s,a)=>{const l=n(s);!ia(l)&&(r[a]=l)}),e.delete(i),r}}return i};return n(t)},nM=li("AsyncFunction"),iM=t=>t&&(ha(t)||Mn(t))&&Mn(t.then)&&Mn(t.catch),p_=((t,e)=>t?setImmediate:e?((n,i)=>(Vr.addEventListener("message",({source:r,data:s})=>{r===Vr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Vr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Mn(Vr.postMessage)),rM=typeof queueMicrotask<"u"?queueMicrotask.bind(Vr):typeof process<"u"&&process.nextTick||p_,m_=t=>t!=null&&Mn(t[Ao]),sM=t=>t!=null&&mo(t,Ao)&&m_(t),D={isArray:es,isArrayBuffer:c_,isBuffer:fa,isFormData:Nw,isArrayBufferView:vw,isString:_w,isNumber:u_,isBoolean:yw,isObject:ha,isPlainObject:Ol,isEmptyObject:Sw,isReadableStream:Lw,isRequest:Dw,isResponse:Iw,isHeaders:Uw,isUndefined:ia,isDate:bw,isFile:ww,isReactNativeBlob:Mw,isReactNative:Ew,isBlob:Tw,isRegExp:Yw,isFunction:Mn,isStream:Cw,isURLSearchParams:Pw,isTypedArray:Vw,isFileList:Aw,forEach:Co,merge:pf,extend:Ow,trim:Fw,stripBOM:kw,inherits:Bw,toFlatObject:jw,kindOf:cp,kindOfTest:li,endsWith:zw,toArray:Hw,forEachEntry:Gw,matchAll:Ww,isHTMLForm:Xw,hasOwnProperty:vc,hasOwnProp:vc,hasOwnInPrototypeChain:mo,getSafeProp:gw,reduceDescriptors:h_,freezeMethods:Kw,toObjectSet:Zw,toCamelCase:qw,noop:Jw,toFiniteNumber:Qw,findKey:d_,global:Vr,isContextDefined:f_,isSpecCompliantForm:eM,toJSONObject:tM,isAsyncFn:nM,isThenable:iM,setImmediate:p_,asap:rM,isIterable:m_,isSafeIterable:sM},aM=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),oM=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim(),!(!n||e[n]&&aM[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function lM(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const cM=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),uM=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function up(t,e){return D.isArray(t)?t.map(n=>up(n,e)):lM(String(t).replace(e,""))}const dM=t=>up(t,cM),fM=t=>up(t,uM);function x_(t){const e=Object.create(null);return D.forEach(t.toJSON(),(n,i)=>{e[i]=fM(n)}),e}const p0=Symbol("internals");function Ea(t){return t&&String(t).trim().toLowerCase()}function kl(t){return t===!1||t==null?t:D.isArray(t)?t.map(kl):dM(String(t))}function hM(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const pM=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Du(t,e,n,i,r){if(D.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!D.isString(e)){if(D.isString(i))return e.indexOf(i)!==-1;if(D.isRegExp(i))return i.test(e)}}function mM(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function xM(t,e){const n=D.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let an=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(l,c,u){const d=Ea(c);if(!d)return;const f=D.findKey(r,d);(!f||r[f]===void 0||u===!0||u===void 0&&r[f]!==!1)&&(r[f||c]=kl(l))}const a=(l,c)=>D.forEach(l,(u,d)=>s(u,d,c));if(D.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(D.isString(e)&&(e=e.trim())&&!pM(e))a(oM(e),n);else if(D.isObject(e)&&D.isSafeIterable(e)){let l=Object.create(null),c,u;for(const d of e){if(!D.isArray(d))throw new TypeError("Object iterator must return a key-value pair");u=d[0],D.hasOwnProp(l,u)?(c=l[u],l[u]=D.isArray(c)?[...c,d[1]]:[c,d[1]]):l[u]=d[1]}a(l,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=Ea(e),e){const i=D.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return hM(r);if(D.isFunction(n))return n.call(this,r,i);if(D.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ea(e),e){const i=D.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Du(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(a){if(a=Ea(a),a){const l=D.findKey(i,a);l&&(!n||Du(i,i[l],l,n))&&(delete i[l],r=!0)}}return D.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Du(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return D.forEach(this,(r,s)=>{const a=D.findKey(i,s);if(a){n[a]=kl(r),delete n[s];return}const l=e?mM(s):String(s).trim();l!==s&&delete n[s],n[l]=kl(r),i[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return D.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&D.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[p0]=this[p0]={accessors:{}}).accessors,r=this.prototype;function s(a){const l=Ea(a);i[l]||(xM(r,a),i[l]=!0)}return D.isArray(e)?e.forEach(s):s(e),this}};an.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(an.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});D.freezeMethods(an);const gM="[REDACTED ****]";function vM(t){if(D.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(D.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function _M(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),i=[],r=s=>{if(s===null||typeof s!="object"||D.isBuffer(s))return s;if(i.indexOf(s)!==-1)return;s instanceof an&&(s=s.toJSON()),i.push(s);let a;if(D.isArray(s))a=[],s.forEach((l,c)=>{const u=r(l);D.isUndefined(u)||(a[c]=u)});else{if(!D.isPlainObject(s)&&vM(s))return i.pop(),s;a=Object.create(null);for(const[l,c]of Object.entries(s)){const u=n.has(l.toLowerCase())?gM:r(c);D.isUndefined(u)||(a[l]=u)}}return i.pop(),a};return r(t)}let _e=class g_ extends Error{static from(e,n,i,r,s,a){const l=new g_(e.message,n||e.code,i,r,s);return Object.defineProperty(l,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),l.name=e.name,e.status!=null&&l.status==null&&(l.status=e.status),a&&Object.assign(l,a),l}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&D.hasOwnProp(e,"redact")?e.redact:void 0,i=D.isArray(n)&&n.length>0?_M(e,n):D.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};_e.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";_e.ERR_BAD_OPTION="ERR_BAD_OPTION";_e.ECONNABORTED="ECONNABORTED";_e.ETIMEDOUT="ETIMEDOUT";_e.ECONNREFUSED="ECONNREFUSED";_e.ERR_NETWORK="ERR_NETWORK";_e.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";_e.ERR_DEPRECATED="ERR_DEPRECATED";_e.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";_e.ERR_BAD_REQUEST="ERR_BAD_REQUEST";_e.ERR_CANCELED="ERR_CANCELED";_e.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";_e.ERR_INVALID_URL="ERR_INVALID_URL";_e.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const yM=null,v_=100;function mf(t){return D.isPlainObject(t)||D.isArray(t)}function __(t){return D.endsWith(t,"[]")?t.slice(0,-2):t}function Iu(t,e,n){return t?t.concat(e).map(function(r,s){return r=__(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function SM(t){return D.isArray(t)&&!t.some(mf)}const bM=D.toFlatObject(D,{},null,function(e){return/^is[A-Z]/.test(e)});function $c(t,e,n){if(!D.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=D.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,_){return!D.isUndefined(_[g])});const i=n.metaTokens,r=n.visitor||v,s=n.dots,a=n.indexes,l=n.Blob||typeof Blob<"u"&&Blob,c=n.maxDepth===void 0?v_:n.maxDepth,u=l&&D.isSpecCompliantForm(e),d=[];if(!D.isFunction(r))throw new TypeError("visitor must be a function");function f(h){if(h===null)return"";if(D.isDate(h))return h.toISOString();if(D.isBoolean(h))return h.toString();if(!u&&D.isBlob(h))throw new _e("Blob is not supported. Use a Buffer instead.");if(D.isArrayBuffer(h)||D.isTypedArray(h)){if(u&&typeof l=="function")return new l([h]);if(typeof Buffer<"u")return Buffer.from(h);throw new _e("Blob is not supported. Use a Buffer instead.",_e.ERR_NOT_SUPPORT)}return h}function p(h){if(h>c)throw new _e("Object is too deeply nested ("+h+" levels). Max depth: "+c,_e.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(h,g){if(c===1/0)return JSON.stringify(h);const _=[];return JSON.stringify(h,function(M,T){if(!D.isObject(T))return T;for(;_.length&&_[_.length-1]!==this;)_.pop();return _.push(T),p(g+_.length-1),T})}function v(h,g,_){let y=h;if(D.isReactNative(e)&&D.isReactNativeBlob(h))return e.append(Iu(_,g,s),f(h)),!1;if(h&&!_&&typeof h=="object"){if(D.endsWith(g,"{}"))g=i?g:g.slice(0,-2),h=m(h,1);else if(D.isArray(h)&&SM(h)||(D.isFileList(h)||D.endsWith(g,"[]"))&&(y=D.toArray(h)))return g=__(g),y.forEach(function(T,C){!(D.isUndefined(T)||T===null)&&e.append(a===!0?Iu([g],C,s):a===null?g:g+"[]",f(T))}),!1}return mf(h)?!0:(e.append(Iu(_,g,s),f(h)),!1)}const w=Object.assign(bM,{defaultVisitor:v,convertValue:f,isVisitable:mf});function x(h,g,_=0){if(!D.isUndefined(h)){if(p(_),d.indexOf(h)!==-1)throw new Error("Circular reference detected in "+g.join("."));d.push(h),D.forEach(h,function(M,T){(!(D.isUndefined(M)||M===null)&&r.call(e,M,D.isString(T)?T.trim():T,g,w))===!0&&x(M,g?g.concat(T):[T],_+1)}),d.pop()}}if(!D.isObject(t))throw new TypeError("data must be an object");return x(t),e}function m0(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function dp(t,e){this._pairs=[],t&&$c(t,this,e)}const y_=dp.prototype;y_.append=function(e,n){this._pairs.push([e,n])};y_.toString=function(e){const n=e?i=>e.call(this,i,m0):m0;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function wM(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function S_(t,e,n){if(!e)return t;t=t||"";const i=D.isFunction(n)?{serialize:n}:n,r=D.getSafeProp(i,"encode")||wM,s=D.getSafeProp(i,"serialize");let a;if(s?a=s(e,i):a=D.isURLSearchParams(e)?e.toString():new dp(e,i).toString(r),a){const l=t.indexOf("#");l!==-1&&(t=t.slice(0,l)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}class x0{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){D.forEach(this.handlers,function(i){i!==null&&e(i)})}}const fp={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},MM=typeof URLSearchParams<"u"?URLSearchParams:dp,EM=typeof FormData<"u"?FormData:null,TM=typeof Blob<"u"?Blob:null,AM={isBrowser:!0,classes:{URLSearchParams:MM,FormData:EM,Blob:TM},protocols:["http","https","file","blob","url","data"]},hp=typeof window<"u"&&typeof document<"u",xf=typeof navigator=="object"&&navigator||void 0,CM=hp&&(!xf||["ReactNative","NativeScript","NS"].indexOf(xf.product)<0),RM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",NM=hp&&window.location.href||"http://localhost",PM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:hp,hasStandardBrowserEnv:CM,hasStandardBrowserWebWorkerEnv:RM,navigator:xf,origin:NM},Symbol.toStringTag,{value:"Module"})),qt={...PM,...AM};function LM(t,e){return $c(t,new qt.classes.URLSearchParams,{visitor:function(n,i,r,s){return qt.isNode&&D.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const g0=v_;function b_(t){if(t>g0)throw new _e("FormData field is too deeply nested ("+t+" levels). Max depth: "+g0,_e.ERR_FORM_DATA_DEPTH_EXCEEDED)}function DM(t){const e=[],n=/\w+|\[(\w*)]/g;let i;for(;(i=n.exec(t))!==null;)b_(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function IM(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function w_(t){function e(n,i,r,s){b_(s);let a=n[s++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=s>=n.length;return a=!a&&D.isArray(r)?r.length:a,c?(D.hasOwnProp(r,a)?r[a]=D.isArray(r[a])?r[a].concat(i):[r[a],i]:r[a]=i,!l):((!D.hasOwnProp(r,a)||!D.isObject(r[a]))&&(r[a]=[]),e(n,i,r[a],s)&&D.isArray(r[a])&&(r[a]=IM(r[a])),!l)}if(D.isFormData(t)&&D.isFunction(t.entries)){const n={};return D.forEachEntry(t,(i,r)=>{e(DM(i),r,n,0)}),n}return null}const hs=(t,e)=>t!=null&&D.hasOwnProp(t,e)?t[e]:void 0;function UM(t,e,n){if(D.isString(t))try{return(e||JSON.parse)(t),D.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Ro={transitional:fp,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=D.isObject(e);if(s&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return r?JSON.stringify(w_(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e)||D.isReadableStream(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){const c=hs(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return LM(e,c).toString();if((l=D.isFileList(e))||i.indexOf("multipart/form-data")>-1){const u=hs(this,"env"),d=u&&u.FormData;return $c(l?{"files[]":e}:e,d&&new d,c)}}return s||r?(n.setContentType("application/json",!1),UM(e)):e}],transformResponse:[function(e){const n=hs(this,"transitional")||Ro.transitional,i=n&&n.forcedJSONParsing,r=hs(this,"responseType"),s=r==="json";if(D.isResponse(e)||D.isReadableStream(e))return e;if(e&&D.isString(e)&&(i&&!r||s)){const l=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,hs(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?_e.from(c,_e.ERR_BAD_RESPONSE,this,null,hs(this,"response")):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qt.classes.FormData,Blob:qt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch","query"],t=>{Ro.headers[t]={}});function Uu(t,e){const n=this||Ro,i=e||n,r=an.from(i.headers);let s=i.data;return D.forEach(t,function(l){s=l.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function M_(t){return!!(t&&t.__CANCEL__)}let No=class extends _e{constructor(e,n,i){super(e??"canceled",_e.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function E_(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new _e("Request failed with status code "+n.status,n.status>=400&&n.status<500?_e.ERR_BAD_REQUEST:_e.ERR_BAD_RESPONSE,n.config,n.request,n))}function FM(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function OM(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),d=i[s];a||(a=u),n[r]=c,i[r]=u;let f=s,p=0;for(;f!==r;)p+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),u-a<e)return;const m=d&&u-d;return m?Math.round(p*1e3/m):void 0}}function kM(t,e){let n=0,i=1e3/e,r,s;const a=(u,d=Date.now())=>{n=d,r=null,s&&(clearTimeout(s),s=null),t(...u)};return[(...u)=>{const d=Date.now(),f=d-n;f>=i?a(u,d):(r=u,s||(s=setTimeout(()=>{s=null,a(r)},i-f)))},()=>r&&a(r)]}const _c=(t,e,n=3)=>{let i=0;const r=OM(50,250);return kM(s=>{if(!s||typeof s.loaded!="number")return;const a=s.loaded,l=s.lengthComputable?s.total:void 0,c=l!=null?Math.min(a,l):a,u=Math.max(0,c-i),d=r(u);i=Math.max(i,c);const f={loaded:c,total:l,progress:l?c/l:void 0,bytes:u,rate:d||void 0,estimated:d&&l?(l-c)/d:void 0,event:s,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(f)},n)},v0=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},_0=t=>(...e)=>D.asap(()=>t(...e)),BM=qt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,qt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(qt.origin),qt.navigator&&/(msie|trident)/i.test(qt.navigator.userAgent)):()=>!0,jM=qt.hasStandardBrowserEnv?{write(t,e,n,i,r,s,a){if(typeof document>"u")return;const l=[`${t}=${encodeURIComponent(e)}`];D.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),D.isString(i)&&l.push(`path=${i}`),D.isString(r)&&l.push(`domain=${r}`),s===!0&&l.push("secure"),D.isString(a)&&l.push(`SameSite=${a}`),document.cookie=l.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),r=i.indexOf("=");if(r!==-1&&i.slice(0,r)===t)try{return decodeURIComponent(i.slice(r+1))}catch{return i.slice(r+1)}}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function zM(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function HM(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}const VM=/^https?:(?!\/\/)/i,GM=/[\t\n\r]/g;function WM(t){let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e)}function XM(t){return WM(t).replace(GM,"")}function y0(t,e){if(typeof t=="string"&&VM.test(XM(t)))throw new _e('Invalid URL: missing "//" after protocol',_e.ERR_INVALID_URL,e)}function T_(t,e,n,i){y0(e,i);let r=!zM(e);return t&&(r||n===!1)?(y0(t,i),HM(t,e)):e}const S0=t=>t instanceof an?{...t}:t;function ts(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(d,f,p,m){return D.isPlainObject(d)&&D.isPlainObject(f)?D.merge.call({caseless:m},d,f):D.isPlainObject(f)?D.merge({},f):D.isArray(f)?f.slice():f}function r(d,f,p,m){if(D.isUndefined(f)){if(!D.isUndefined(d))return i(void 0,d,p,m)}else return i(d,f,p,m)}function s(d,f){if(!D.isUndefined(f))return i(void 0,f)}function a(d,f){if(D.isUndefined(f)){if(!D.isUndefined(d))return i(void 0,d)}else return i(void 0,f)}function l(d){const f=D.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!D.isUndefined(f))if(D.isPlainObject(f)){if(D.hasOwnProp(f,d))return f[d]}else return;const p=D.hasOwnProp(t,"transitional")?t.transitional:void 0;if(D.isPlainObject(p)&&D.hasOwnProp(p,d))return p[d]}function c(d,f,p){if(D.hasOwnProp(e,p))return i(d,f);if(D.hasOwnProp(t,p))return i(void 0,d)}const u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,allowedSocketPaths:a,responseEncoding:a,validateStatus:c,headers:(d,f,p)=>r(S0(d),S0(f),p,!0)};return D.forEach(Object.keys({...t,...e}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const p=D.hasOwnProp(u,f)?u[f]:r,m=D.hasOwnProp(t,f)?t[f]:void 0,v=D.hasOwnProp(e,f)?e[f]:void 0,w=p(m,v,f);D.isUndefined(w)&&p!==c||(n[f]=w)}),D.hasOwnProp(e,"validateStatus")&&D.isUndefined(e.validateStatus)&&l("validateStatusUndefinedResolves")===!1&&(D.hasOwnProp(t,"validateStatus")?n.validateStatus=i(void 0,t.validateStatus):delete n.validateStatus),n}const qM=["content-type","content-length"];function $M(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{qM.includes(i.toLowerCase())&&t.set(i,r)})}const YM=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16)));function A_(t){const e=ts({},t),n=p=>D.hasOwnProp(e,p)?e[p]:void 0,i=n("data");let r=n("withXSRFToken");const s=n("xsrfHeaderName"),a=n("xsrfCookieName");let l=n("headers");const c=n("auth"),u=n("baseURL"),d=n("allowAbsoluteUrls"),f=n("url");if(e.headers=l=an.from(l),e.url=S_(T_(u,f,d,e),n("params"),n("paramsSerializer")),c){const p=D.getSafeProp(c,"username")||"",m=D.getSafeProp(c,"password")||"";try{l.set("Authorization","Basic "+btoa(p+":"+(m?YM(m):"")))}catch(v){throw _e.from(v,_e.ERR_BAD_OPTION_VALUE,t)}}if(D.isFormData(i)&&(qt.hasStandardBrowserEnv||qt.hasStandardBrowserWebWorkerEnv||D.isReactNative(i)?l.setContentType(void 0):D.isFunction(i.getHeaders)&&$M(l,i.getHeaders(),n("formDataHeaderPolicy"))),qt.hasStandardBrowserEnv&&(D.isFunction(r)&&(r=r(e)),r===!0||r==null&&BM(e.url))){const m=s&&a&&jM.read(a);m&&l.set(s,m)}return e}const KM=typeof XMLHttpRequest<"u",ZM=KM&&function(t){return new Promise(function(n,i){const r=A_(t);let s=r.data;const a=an.from(r.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=r,d,f,p,m,v;function w(){m&&m(),v&&v(),r.cancelToken&&r.cancelToken.unsubscribe(d),r.signal&&r.signal.removeEventListener("abort",d)}let x=new XMLHttpRequest;x.open(r.method.toUpperCase(),r.url,!0),x.timeout=r.timeout;function h(){if(!x)return;const _=an.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),M={data:!l||l==="text"||l==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:_,config:t,request:x};E_(function(C){n(C),w()},function(C){i(C),w()},M),x=null}"onloadend"in x?x.onloadend=h:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.startsWith("file:"))||setTimeout(h)},x.onabort=function(){x&&(i(new _e("Request aborted",_e.ECONNABORTED,t,x)),w(),x=null)},x.onerror=function(y){const M=y&&y.message?y.message:"Network Error",T=new _e(M,_e.ERR_NETWORK,t,x);T.event=y||null,i(T),w(),x=null},x.ontimeout=function(){let y=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const M=r.transitional||fp;r.timeoutErrorMessage&&(y=r.timeoutErrorMessage),i(new _e(y,M.clarifyTimeoutError?_e.ETIMEDOUT:_e.ECONNABORTED,t,x)),w(),x=null},s===void 0&&a.setContentType(null),"setRequestHeader"in x&&D.forEach(x_(a),function(y,M){x.setRequestHeader(M,y)}),D.isUndefined(r.withCredentials)||(x.withCredentials=!!r.withCredentials),l&&l!=="json"&&(x.responseType=r.responseType),u&&([p,v]=_c(u,!0),x.addEventListener("progress",p)),c&&x.upload&&([f,m]=_c(c),x.upload.addEventListener("progress",f),x.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(d=_=>{x&&(i(!_||_.type?new No(null,t,x):_),x.abort(),w(),x=null)},r.cancelToken&&r.cancelToken.subscribe(d),r.signal&&(r.signal.aborted?d():r.signal.addEventListener("abort",d)));const g=FM(r.url);if(g&&!qt.protocols.includes(g)){i(new _e("Unsupported protocol "+g+":",_e.ERR_BAD_REQUEST,t)),w();return}x.send(s||null)})},JM=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const r=function(c){if(!i){i=!0,a();const u=c instanceof Error?c:this.reason;n.abort(u instanceof _e?u:new No(u instanceof Error?u.message:u))}};let s=e&&setTimeout(()=>{s=null,r(new _e(`timeout of ${e}ms exceeded`,_e.ETIMEDOUT))},e);const a=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),t=null)};t.forEach(c=>c.addEventListener("abort",r,{once:!0}));const{signal:l}=n;return l.unsubscribe=()=>D.asap(a),l},QM=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},eE=async function*(t,e){for await(const n of tE(t))yield*QM(n,e)},tE=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},b0=(t,e,n,i)=>{const r=eE(t,e);let s=0,a,l=c=>{a||(a=!0,i&&i(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await r.next();if(u){l(),c.close();return}let f=d.byteLength;if(n){let p=s+=f;n(p)}c.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(c){return l(c),r.return()}},{highWaterMark:2})},yc=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,nE=(t,e,n)=>e+2<n&&yc(t.charCodeAt(e+1))&&yc(t.charCodeAt(e+2));function iE(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let a=i.length;const l=i.length;for(let m=0;m<l;m++)if(i.charCodeAt(m)===37&&m+2<l){const v=i.charCodeAt(m+1),w=i.charCodeAt(m+2);yc(v)&&yc(w)&&(a-=2,m+=2)}let c=0,u=l-1;const d=m=>m>=2&&i.charCodeAt(m-2)===37&&i.charCodeAt(m-1)===51&&(i.charCodeAt(m)===68||i.charCodeAt(m)===100);u>=0&&(i.charCodeAt(u)===61?(c++,u--):d(u)&&(c++,u-=3)),c===1&&u>=0&&(i.charCodeAt(u)===61||d(u))&&c++;const p=Math.floor(a/4)*3-(c||0);return p>0?p:0}let s=0;for(let a=0,l=i.length;a<l;a++){const c=i.charCodeAt(a);if(c===37&&nE(i,a,l))s+=1,a+=2;else if(c<128)s+=1;else if(c<2048)s+=2;else if(c>=55296&&c<=56319&&a+1<l){const u=i.charCodeAt(a+1);u>=56320&&u<=57343?(s+=4,a++):s+=3}else s+=3}return s}const pp="1.18.1",w0=64*1024,{isFunction:el}=D,rE=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),M0=t=>{if(!D.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},E0=(t,...e)=>{try{return!!t(...e)}catch{return!1}},sE=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},aE=t=>{const e=D.global!==void 0&&D.global!==null?D.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=D.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:r,Request:s,Response:a}=t,l=r?el(r):typeof fetch=="function",c=el(s),u=el(a);if(!l)return!1;const d=l&&el(n),f=l&&(typeof i=="function"?(h=>g=>h.encode(g))(new i):async h=>new Uint8Array(await new s(h).arrayBuffer())),p=c&&d&&E0(()=>{let h=!1;const g=new s(qt.origin,{body:new n,method:"POST",get duplex(){return h=!0,"half"}}),_=g.headers.has("Content-Type");return g.body!=null&&g.body.cancel(),h&&!_}),m=u&&d&&E0(()=>D.isReadableStream(new a("").body)),v={stream:m&&(h=>h.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(h=>{!v[h]&&(v[h]=(g,_)=>{let y=g&&g[h];if(y)return y.call(g);throw new _e(`Response type '${h}' is not supported`,_e.ERR_NOT_SUPPORT,_)})});const w=async h=>{if(h==null)return 0;if(D.isBlob(h))return h.size;if(D.isSpecCompliantForm(h))return(await new s(qt.origin,{method:"POST",body:h}).arrayBuffer()).byteLength;if(D.isArrayBufferView(h)||D.isArrayBuffer(h))return h.byteLength;if(D.isURLSearchParams(h)&&(h=h+""),D.isString(h))return(await f(h)).byteLength},x=async(h,g)=>{const _=D.toFiniteNumber(h.getContentLength());return _??w(g)};return async h=>{let{url:g,method:_,data:y,signal:M,cancelToken:T,timeout:C,onDownloadProgress:S,onUploadProgress:A,responseType:N,headers:P,withCredentials:I="same-origin",fetchOptions:K,maxContentLength:J,maxBodyLength:k}=A_(h);const Z=D.isNumber(J)&&J>-1,z=D.isNumber(k)&&k>-1,F=H=>D.hasOwnProp(h,H)?h[H]:void 0;let Y=r||fetch;N=N?(N+"").toLowerCase():"text";let ee=JM([M,T&&T.toAbortSignal()],C),re=null;const se=ee&&ee.unsubscribe&&(()=>{ee.unsubscribe()});let De,ke=null;const He=()=>new _e("Request body larger than maxBodyLength limit",_e.ERR_BAD_REQUEST,h,re);try{let H;const oe=F("auth");if(oe){const xe=D.getSafeProp(oe,"username")||"",tt=D.getSafeProp(oe,"password")||"";H={username:xe,password:tt}}if(sE(g)){const xe=new URL(g,qt.origin);if(!H&&(xe.username||xe.password)){const tt=M0(xe.username),ct=M0(xe.password);H={username:tt,password:ct}}(xe.username||xe.password)&&(xe.username="",xe.password="",g=xe.href)}if(H&&(P.delete("authorization"),P.set("Authorization","Basic "+btoa(rE((H.username||"")+":"+(H.password||""))))),Z&&typeof g=="string"&&g.startsWith("data:")&&iE(g)>J)throw new _e("maxContentLength size of "+J+" exceeded",_e.ERR_BAD_RESPONSE,h,re);if(z&&_!=="get"&&_!=="head"){const xe=await w(y);if(typeof xe=="number"&&isFinite(xe)&&(De=xe,xe>k))throw He()}const le=z&&(D.isReadableStream(y)||D.isStream(y)),Oe=(xe,tt,ct)=>b0(xe,w0,ht=>{if(z&&ht>k)throw ke=He();tt&&tt(ht)},ct);if(p&&_!=="get"&&_!=="head"&&(A||le)){if(De=De??await x(P,y),De!==0||le){let xe=new s(g,{method:"POST",body:y,duplex:"half"}),tt;if(D.isFormData(y)&&(tt=xe.headers.get("content-type"))&&P.setContentType(tt),xe.body){const[ct,ht]=A&&v0(De,_c(_0(A)))||[];y=Oe(xe.body,ct,ht)}}}else if(le&&!c&&d&&_!=="get"&&_!=="head")y=Oe(y);else if(le&&c&&!p&&_!=="get"&&_!=="head")throw new _e("Stream request bodies are not supported by the current fetch implementation",_e.ERR_NOT_SUPPORT,h,re);D.isString(I)||(I=I?"include":"omit");const Ve=c&&"credentials"in s.prototype;if(D.isFormData(y)){const xe=P.getContentType();xe&&/^multipart\/form-data/i.test(xe)&&!/boundary=/i.test(xe)&&P.delete("content-type")}P.set("User-Agent","axios/"+pp,!1);const Ie={...K,signal:ee,method:_.toUpperCase(),headers:x_(P.normalize()),body:y,duplex:"half",credentials:Ve?I:void 0};re=c&&new s(g,Ie);let nt=await(c?Y(re,K):Y(g,Ie));const qe=an.from(nt.headers);if(Z){const xe=D.toFiniteNumber(qe.getContentLength());if(xe!=null&&xe>J)throw new _e("maxContentLength size of "+J+" exceeded",_e.ERR_BAD_RESPONSE,h,re)}const V=m&&(N==="stream"||N==="response");if(m&&nt.body&&(S||Z||V&&se)){const xe={};["status","statusText","headers"].forEach(pt=>{xe[pt]=nt[pt]});const tt=D.toFiniteNumber(qe.getContentLength()),[ct,ht]=S&&v0(tt,_c(_0(S),!0))||[];let Ut=0;const yt=pt=>{if(Z&&(Ut=pt,Ut>J))throw new _e("maxContentLength size of "+J+" exceeded",_e.ERR_BAD_RESPONSE,h,re);ct&&ct(pt)};nt=new a(b0(nt.body,w0,yt,()=>{ht&&ht(),se&&se()}),xe)}N=N||"text";let je=await v[D.findKey(v,N)||"text"](nt,h);if(Z&&!m&&!V){let xe;if(je!=null&&(typeof je.byteLength=="number"?xe=je.byteLength:typeof je.size=="number"?xe=je.size:typeof je=="string"&&(xe=typeof i=="function"?new i().encode(je).byteLength:je.length)),typeof xe=="number"&&xe>J)throw new _e("maxContentLength size of "+J+" exceeded",_e.ERR_BAD_RESPONSE,h,re)}return!V&&se&&se(),await new Promise((xe,tt)=>{E_(xe,tt,{data:je,headers:an.from(nt.headers),status:nt.status,statusText:nt.statusText,config:h,request:re})})}catch(H){if(se&&se(),ee&&ee.aborted&&ee.reason instanceof _e){const oe=ee.reason;throw oe.config=h,re&&(oe.request=re),H!==oe&&Object.defineProperty(oe,"cause",{__proto__:null,value:H,writable:!0,enumerable:!1,configurable:!0}),oe}if(ke)throw re&&!ke.request&&(ke.request=re),ke;if(H instanceof _e)throw re&&!H.request&&(H.request=re),H;if(H&&H.name==="TypeError"&&/Load failed|fetch/i.test(H.message)){const oe=new _e("Network Error",_e.ERR_NETWORK,h,re,H&&H.response);throw Object.defineProperty(oe,"cause",{__proto__:null,value:H.cause||H,writable:!0,enumerable:!1,configurable:!0}),oe}throw _e.from(H,H&&H.code,h,re,H&&H.response)}}},oE=new Map,C_=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:r}=e,s=[i,r,n];let a=s.length,l=a,c,u,d=oE;for(;l--;)c=s[l],u=d.get(c),u===void 0&&d.set(c,u=l?new Map:aE(e)),d=u;return u};C_();const mp={http:yM,xhr:ZM,fetch:{get:C_}};D.forEach(mp,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const T0=t=>`- ${t}`,lE=t=>D.isFunction(t)||t===null||t===!1;function cE(t,e){t=D.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let a=0;a<n;a++){i=t[a];let l;if(r=i,!lE(i)&&(r=mp[(l=String(i)).toLowerCase()],r===void 0))throw new _e(`Unknown adapter '${l}'`);if(r&&(D.isFunction(r)||(r=r.get(e))))break;s[l||"#"+a]=r}if(!r){const a=Object.entries(s).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=n?a.length>1?`since :
`+a.map(T0).join(`
`):" "+T0(a[0]):"as no adapter specified";throw new _e("There is no suitable adapter to dispatch the request "+l,_e.ERR_NOT_SUPPORT)}return r}const R_={getAdapter:cE,adapters:mp};function Fu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new No(null,t)}function A0(t){return Fu(t),t.headers=an.from(t.headers),t.data=Uu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),R_.getAdapter(t.adapter||Ro.adapter,t)(t).then(function(i){Fu(t),t.response=i;try{i.data=Uu.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=an.from(i.headers),i},function(i){if(!M_(i)&&(Fu(t),i&&i.response)){t.response=i.response;try{i.response.data=Uu.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=an.from(i.response.headers)}return Promise.reject(i)})}const Yc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Yc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const C0={};Yc.transitional=function(e,n,i){function r(s,a){return"[Axios v"+pp+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,l)=>{if(e===!1)throw new _e(r(a," has been removed"+(n?" in "+n:"")),_e.ERR_DEPRECATED);return n&&!C0[a]&&(C0[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,l):!0}};Yc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function uE(t,e,n){if(typeof t!="object"||t===null)throw new _e("options must be an object",_e.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],a=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(a){const l=t[s],c=l===void 0||a(l,s,t);if(c!==!0)throw new _e("option "+s+" must be "+c,_e.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _e("Unknown option "+s,_e.ERR_BAD_OPTION)}}const Bl={assertOptions:uE,validators:Yc},en=Bl.validators;let $r=class{constructor(e){this.defaults=e||{},this.interceptors={request:new x0,response:new x0}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=(()=>{if(!r.stack)return"";const a=r.stack.indexOf(`
`);return a===-1?"":r.stack.slice(a+1)})();try{if(!i.stack)i.stack=s;else if(s){const a=s.indexOf(`
`),l=a===-1?-1:s.indexOf(`
`,a+1),c=l===-1?"":s.slice(l+1);String(i.stack).endsWith(c)||(i.stack+=`
`+s)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ts(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Bl.assertOptions(i,{silentJSONParsing:en.transitional(en.boolean),forcedJSONParsing:en.transitional(en.boolean),clarifyTimeoutError:en.transitional(en.boolean),legacyInterceptorReqResOrdering:en.transitional(en.boolean),advertiseZstdAcceptEncoding:en.transitional(en.boolean),validateStatusUndefinedResolves:en.transitional(en.boolean)},!1),r!=null&&(D.isFunction(r)?n.paramsSerializer={serialize:r}:Bl.assertOptions(r,{encode:en.function,serialize:en.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Bl.assertOptions(n,{baseUrl:en.spelling("baseURL"),withXsrfToken:en.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=s&&D.merge(s.common,s[n.method]);s&&D.forEach(["delete","get","head","post","put","patch","query","common"],v=>{delete s[v]}),n.headers=an.concat(a,s);const l=[];let c=!0;this.interceptors.request.forEach(function(w){if(typeof w.runWhen=="function"&&w.runWhen(n)===!1)return;c=c&&w.synchronous;const x=n.transitional||fp;x&&x.legacyInterceptorReqResOrdering?l.unshift(w.fulfilled,w.rejected):l.push(w.fulfilled,w.rejected)});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,f=0,p;if(!c){const v=[A0.bind(this),void 0];for(v.unshift(...l),v.push(...u),p=v.length,d=Promise.resolve(n);f<p;)d=d.then(v[f++],v[f++]);return d}p=l.length;let m=n;for(;f<p;){const v=l[f++],w=l[f++];try{m=v(m)}catch(x){w.call(this,x);break}}try{d=A0.call(this,m)}catch(v){return Promise.reject(v)}for(f=0,p=u.length;f<p;)d=d.then(u[f++],u[f++]);return d}getUri(e){e=ts(this.defaults,e);const n=T_(e.baseURL,e.url,e.allowAbsoluteUrls,e);return S_(n,e.params,e.paramsSerializer)}};D.forEach(["delete","get","head","options"],function(e){$r.prototype[e]=function(n,i){return this.request(ts(i||{},{method:e,url:n,data:i&&D.hasOwnProp(i,"data")?i.data:void 0}))}});D.forEach(["post","put","patch","query"],function(e){function n(i){return function(s,a,l){return this.request(ts(l||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}$r.prototype[e]=n(),e!=="query"&&($r.prototype[e+"Form"]=n(!0))});let dE=class N_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(l=>{i.subscribe(l),s=l}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,l){i.reason||(i.reason=new No(s,a,l),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new N_(function(r){e=r}),cancel:e}}};function fE(t){return function(n){return t.apply(null,n)}}function hE(t){return D.isObject(t)&&t.isAxiosError===!0}const gf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(gf).forEach(([t,e])=>{gf[e]=t});function P_(t){const e=new $r(t),n=o_($r.prototype.request,e);return D.extend(n,$r.prototype,e,{allOwnKeys:!0}),D.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return P_(ts(t,r))},n}const Le=P_(Ro);Le.Axios=$r;Le.CanceledError=No;Le.CancelToken=dE;Le.isCancel=M_;Le.VERSION=pp;Le.toFormData=$c;Le.AxiosError=_e;Le.Cancel=Le.CanceledError;Le.all=function(e){return Promise.all(e)};Le.spread=fE;Le.isAxiosError=hE;Le.mergeConfig=ts;Le.AxiosHeaders=an;Le.formToJSON=t=>w_(D.isHTMLForm(t)?new FormData(t):t);Le.getAdapter=R_.getAdapter;Le.HttpStatusCode=gf;Le.default=Le;const{Axios:CN,AxiosError:RN,CanceledError:NN,isCancel:PN,CancelToken:LN,VERSION:DN,all:IN,Cancel:UN,isAxiosError:FN,spread:ON,toFormData:kN,AxiosHeaders:BN,HttpStatusCode:jN,formToJSON:zN,getAdapter:HN,mergeConfig:VN,create:GN}=Le,L_=X.createContext(),pE=({children:t})=>{const[e,n]=X.useState(localStorage.getItem("app_lang")||"en"),[i,r]=X.useState({});X.useEffect(()=>{localStorage.setItem("app_lang",e);const l=e==="ar"?"rtl":"ltr";document.documentElement.setAttribute("dir",l),document.documentElement.setAttribute("lang",e),Le.get(`/api/public/translations/${e}`).then(c=>{r(c.data||{})}).catch(c=>{console.warn("Could not load translations from server:",c)})},[e]);const s=(l,c="")=>i[l]||c||l,a=l=>{n(l)};return o.jsx(L_.Provider,{value:{lang:e,changeLanguage:a,t:s,dir:e==="ar"?"rtl":"ltr"},children:t})},D_=()=>X.useContext(L_),I_=X.createContext(),mE=({children:t})=>{const[e,n]=X.useState(localStorage.getItem("admin_token")||null),[i,r]=X.useState(JSON.parse(localStorage.getItem("admin_user")||"null"));X.useEffect(()=>{e?(Le.defaults.headers.common.Authorization=`Bearer ${e}`,localStorage.setItem("admin_token",e),i&&localStorage.setItem("admin_user",JSON.stringify(i))):(delete Le.defaults.headers.common.Authorization,localStorage.removeItem("admin_token"),localStorage.removeItem("admin_user"))},[e,i]);const s=async(l,c)=>{const u=await Le.post("/api/auth/login",{email:l,password:c});if(u.data&&u.data.token)return n(u.data.token),r(u.data.user),u.data},a=()=>{n(null),r(null)};return o.jsx(I_.Provider,{value:{token:e,user:i,login:s,logout:a,isAuthenticated:!!e},children:t})},xp=()=>X.useContext(I_);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),U_=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=X.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...l},c)=>X.createElement("svg",{ref:c,...gE,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:U_("lucide",r),...l},[...a.map(([u,d])=>X.createElement(u,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=(t,e)=>{const n=X.forwardRef(({className:i,...r},s)=>X.createElement(vE,{ref:s,iconNode:e,className:U_(`lucide-${xE(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=Ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=Ue("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=Ue("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=Ue("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=Ue("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=Ue("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=Ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=Ue("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=Ue("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=Ue("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=Ue("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=Ue("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=Ue("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=Ue("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=Ue("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=Ue("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=Ue("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=Ue("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=Ue("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=Ue("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=Ue("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Ue("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=Ue("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=Ue("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=Ue("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=Ue("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=Ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=Ue("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=Ue("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=Ue("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=Ue("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=Ue("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=Ue("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=Ue("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=Ue("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=Ue("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=Ue("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=Ue("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Ue("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Ue("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=Ue("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=Ue("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=Ue("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Ue("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=Ue("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=Ue("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=Ue("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=Ue("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=Ue("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Ue("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=Ue("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=Ue("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=Ue("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=Ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=Ue("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function $_({className:t="",showText:e=!0,size:n="md",isDark:i=!0}){const r={sm:"w-8 h-8",md:"w-10 h-10",lg:"w-12 h-12",xl:"w-16 h-16","2xl":"w-24 h-24"},s={sm:"text-base",md:"text-xl",lg:"text-2xl",xl:"text-3xl","2xl":"text-5xl"},a={sm:"text-[7px] tracking-[0.25em]",md:"text-[9px] tracking-[0.3em]",lg:"text-[11px] tracking-[0.35em]",xl:"text-[13px] tracking-[0.4em]","2xl":"text-[18px] tracking-[0.45em]"};return o.jsxs("div",{className:`flex items-center space-x-3 group select-none ${t}`,children:[o.jsx("div",{className:`relative flex items-center justify-center shrink-0 ${r[n]||r.md}`,children:o.jsxs("svg",{viewBox:"0 0 500 500",className:"w-full h-full drop-shadow-md group-hover:scale-105 transition-transform duration-300",children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"logoEraGrad",x1:"0%",y1:"100%",x2:"100%",y2:"0%",children:[o.jsx("stop",{offset:"0%",stopColor:"#1e3a8a"}),o.jsx("stop",{offset:"40%",stopColor:"#2563eb"}),o.jsx("stop",{offset:"75%",stopColor:"#0284c7"}),o.jsx("stop",{offset:"100%",stopColor:"#38bdf8"})]}),o.jsxs("linearGradient",{id:"logoArrowGrad",x1:"0%",y1:"100%",x2:"100%",y2:"0%",children:[o.jsx("stop",{offset:"0%",stopColor:"#172554"}),o.jsx("stop",{offset:"45%",stopColor:"#0284c7"}),o.jsx("stop",{offset:"100%",stopColor:"#38bdf8"})]}),o.jsxs("linearGradient",{id:"logoShine",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[o.jsx("stop",{offset:"0%",stopColor:"#ffffff",stopOpacity:"0.7"}),o.jsx("stop",{offset:"60%",stopColor:"#ffffff",stopOpacity:"0.0"})]})]}),o.jsx("path",{d:`M 230 60 
               C 130 60, 50 145, 50 260 
               C 50 375, 130 450, 240 450 
               C 330 450, 410 390, 440 310 
               L 355 310 
               C 335 350, 290 380, 240 380 
               C 165 380, 122 325, 122 260 
               C 122 195, 165 130, 240 130 
               C 285 130, 330 158, 350 198 
               L 435 198 
               C 405 110, 330 60, 230 60 Z`,fill:"url(#logoEraGrad)"}),o.jsx("path",{d:`M 124 235 
               L 420 235 
               C 425 245, 428 255, 428 265 
               C 428 278, 424 290, 418 300 
               L 124 300 Z`,fill:"url(#logoEraGrad)",opacity:"0.95"}),o.jsx("path",{d:`M 70 410 
               C 145 350, 245 230, 365 110 
               L 325 110 
               L 460 40 
               L 410 180 
               L 375 135 
               C 250 260, 160 380, 85 450 Z`,fill:"url(#logoArrowGrad)"}),o.jsx("path",{d:`M 80 420 
               C 155 360, 255 240, 375 120 
               L 460 40 
               L 415 70 
               C 310 170, 205 295, 105 400 Z`,fill:"url(#logoShine)"})]})}),e&&o.jsxs("div",{className:"flex flex-col leading-none",children:[o.jsx("span",{className:`font-black tracking-tight ${s[n]||s.md} ${i?"text-white group-hover:text-blue-400":"text-slate-900 group-hover:text-blue-600"} transition-colors`,children:"ERA TECH"}),o.jsx("span",{className:`font-extrabold uppercase ${a[n]||a.md} ${i?"text-slate-400":"text-slate-500"}`,children:"SOLUTIONS"})]})]})}function GE(){const{lang:t,changeLanguage:e,t:n}=D_(),{isAuthenticated:i,user:r,logout:s}=xp(),[a,l]=X.useState(!1),c=To(),u=[{label:n("nav_home","Home"),path:"/"},{label:n("nav_about","About Us"),path:"/about"},{label:n("nav_services","Services"),path:"/services"},{label:n("nav_projects","Projects"),path:"/projects"},{label:n("nav_products","Products"),path:"/products"},{label:n("nav_team","Team"),path:"/team"},{label:n("nav_founder","Founder"),path:"/founder"},{label:n("nav_contact","Contact Us"),path:"/contact"}];return o.jsxs("header",{className:"sticky top-0 z-50 bg-[#050811]/90 backdrop-blur-2xl border-b border-slate-800/80 transition-all shadow-2xl",children:[o.jsx("div",{className:"hidden md:block bg-gradient-to-r from-blue-950/60 via-indigo-950/40 to-slate-950/80 border-b border-slate-800/60 py-1.5 px-4",children:o.jsxs("div",{className:"max-w-7xl mx-auto flex items-center justify-between text-[11px] text-slate-300 font-semibold",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsxs("span",{className:"flex items-center space-x-1.5 text-emerald-400 font-bold",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),o.jsx("span",{children:"ERA TECH 3D Engineering Engine • Active"})]}),o.jsx("span",{className:"text-slate-700",children:"|"}),o.jsx("span",{className:"text-slate-400",children:"AWS KMS 256-Bit Encrypted Architecture"})]}),o.jsxs("div",{className:"flex items-center space-x-4",children:[o.jsx("span",{className:"text-blue-300",children:"Lucknow, IN HQ"}),o.jsx("span",{className:"text-slate-700",children:"|"}),o.jsxs("a",{href:"tel:+918090121332",className:"text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 font-extrabold",children:[o.jsx(H_,{className:"w-3 h-3 text-emerald-400"}),o.jsx("span",{children:"Call: +91 8090121332"})]})]})]})}),o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"flex items-center justify-between h-20",children:[o.jsx(St,{to:"/",className:"hover:scale-105 transition-transform",children:o.jsx($_,{size:"md"})}),o.jsx("nav",{className:"hidden lg:flex items-center space-x-1 xl:space-x-1.5",children:u.map(d=>{const f=c.pathname===d.path;return o.jsxs(St,{to:d.path,className:`relative px-3 py-2 rounded-xl text-xs font-bold transition-all ${f?"text-white bg-blue-600/20 border border-blue-500/40 shadow-inner":"text-slate-300 hover:text-white hover:bg-slate-800/80"}`,children:[d.label,f&&o.jsx("span",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]"})]},d.path)})}),o.jsxs("div",{className:"hidden lg:flex items-center space-x-3",children:[o.jsxs("div",{className:"relative group",children:[o.jsxs("button",{className:"flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-xs font-bold text-slate-200 border border-slate-700/80 transition-colors shadow-md",children:[o.jsx(gp,{className:"w-3.5 h-3.5 text-blue-400"}),o.jsx("span",{className:"uppercase",children:t==="en"?"EN":t==="hi"?"HI":"AR"})]}),o.jsxs("div",{className:"absolute right-0 mt-2 w-40 bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50",children:[o.jsxs("button",{onClick:()=>e("en"),className:`w-full text-left px-3 py-2 text-xs rounded-xl font-semibold transition-colors flex items-center justify-between ${t==="en"?"bg-blue-600 text-white":"text-slate-300 hover:bg-slate-800"}`,children:[o.jsx("span",{children:"🇺🇸 English"}),t==="en"&&o.jsx(dn,{className:"w-3.5 h-3.5"})]}),o.jsxs("button",{onClick:()=>e("hi"),className:`w-full text-left px-3 py-2 text-xs rounded-xl font-semibold transition-colors flex items-center justify-between ${t==="hi"?"bg-blue-600 text-white":"text-slate-300 hover:bg-slate-800"}`,children:[o.jsx("span",{children:"🇮🇳 हिंदी"}),t==="hi"&&o.jsx(dn,{className:"w-3.5 h-3.5"})]}),o.jsxs("button",{onClick:()=>e("ar"),className:`w-full text-left px-3 py-2 text-xs rounded-xl font-semibold transition-colors flex items-center justify-between ${t==="ar"?"bg-blue-600 text-white":"text-slate-300 hover:bg-slate-800"}`,children:[o.jsx("span",{children:"🇸🇦 العربية"}),t==="ar"&&o.jsx(dn,{className:"w-3.5 h-3.5"})]})]})]}),o.jsxs(St,{to:"/get-quote",className:"inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl btn-3d-primary text-white text-xs font-extrabold shadow-lg",children:[o.jsx(ki,{className:"w-3.5 h-3.5 text-amber-300 animate-pulse"}),o.jsx("span",{children:n("btn_get_quote","Get Instant Quote")}),o.jsx(Wi,{className:"w-3.5 h-3.5"})]}),i?o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsxs(St,{to:"/admin",className:"inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold hover:bg-emerald-500/20",children:[o.jsx(jl,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Dashboard"})]}),o.jsx("button",{onClick:s,className:"text-[11px] text-slate-400 hover:text-red-400 font-semibold",children:"Exit"})]}):o.jsx(St,{to:"/admin/login",className:"p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-xl transition-colors",title:"Admin Control Panel",children:o.jsx(vp,{className:"w-4.5 h-4.5"})})]}),o.jsx("div",{className:"lg:hidden flex items-center space-x-2",children:o.jsx("button",{onClick:()=>l(!a),className:"p-2.5 rounded-xl text-slate-300 hover:bg-slate-800 border border-slate-700/60",children:a?o.jsx(Po,{className:"w-6 h-6"}):o.jsx(IE,{className:"w-6 h-6"})})})]})}),a&&o.jsxs("div",{className:"lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3",children:[o.jsx("div",{className:"grid grid-cols-2 gap-2 mb-4",children:u.map(d=>o.jsx(St,{to:d.path,onClick:()=>l(!1),className:"px-3 py-2 rounded-xl text-xs text-slate-200 hover:bg-slate-800 font-semibold",children:d.label},d.path))}),o.jsxs("div",{className:"pt-3 border-t border-slate-800 flex flex-col space-y-3",children:[o.jsxs("div",{className:"flex items-center justify-between px-2",children:[o.jsx("span",{className:"text-xs text-slate-400 font-semibold",children:"Language:"}),o.jsxs("div",{className:"flex space-x-1",children:[o.jsx("button",{onClick:()=>e("en"),className:`px-2.5 py-1 text-xs rounded-lg font-bold ${t==="en"?"bg-blue-600 text-white":"bg-slate-800 text-slate-300"}`,children:"EN"}),o.jsx("button",{onClick:()=>e("hi"),className:`px-2.5 py-1 text-xs rounded-lg font-bold ${t==="hi"?"bg-blue-600 text-white":"bg-slate-800 text-slate-300"}`,children:"HI"}),o.jsx("button",{onClick:()=>e("ar"),className:`px-2.5 py-1 text-xs rounded-lg font-bold ${t==="ar"?"bg-blue-600 text-white":"bg-slate-800 text-slate-300"}`,children:"AR"})]})]}),o.jsx(St,{to:"/get-quote",onClick:()=>l(!1),className:"w-full text-center py-3 rounded-xl btn-3d-primary font-extrabold text-white text-xs shadow-lg",children:"Get Instant Project Quote"}),o.jsx(St,{to:"/admin/login",onClick:()=>l(!1),className:"w-full text-center py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold",children:"Admin Panel Sign In"})]})]})]})}function WE(){return o.jsx("footer",{className:"bg-[#050810] border-t border-slate-800/80 pt-16 pb-12 text-slate-400",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12",children:[o.jsxs("div",{className:"lg:col-span-2 space-y-4",children:[o.jsx(St,{to:"/",children:o.jsx($_,{size:"lg"})}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm",children:"Founded by Rahul Tiwari (B.Tech Computer Science). We build MERN Stack web platforms, Java enterprise backends, Python AI models, C/C++ low-latency engines, and mobile applications."}),o.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-emerald-400 font-semibold",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),o.jsx("span",{children:"API Gateway: 100% Operational • SSL Encrypted"})]}),o.jsxs("div",{className:"flex space-x-3 pt-2",children:[o.jsx("a",{href:"https://www.linkedin.com/in/rahul-tiwari-3838232a6",target:"_blank",rel:"noreferrer",className:"w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors border border-slate-800",children:o.jsx(z_,{className:"w-4 h-4"})}),o.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer",className:"w-9 h-9 rounded-xl bg-slate-900 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors border border-slate-800",children:o.jsx(HE,{className:"w-4 h-4"})}),o.jsx("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",className:"w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-700 hover:text-white flex items-center justify-center transition-colors border border-slate-800",children:o.jsx(CE,{className:"w-4 h-4"})}),o.jsx("a",{href:"https://wa.me/918090121332",target:"_blank",rel:"noreferrer",className:"w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors border border-slate-800",title:"WhatsApp Us",children:o.jsx(ns,{className:"w-4 h-4"})})]})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsx("h4",{className:"text-white text-xs font-bold tracking-wider uppercase",children:"Company"}),o.jsxs("ul",{className:"space-y-2 text-xs",children:[o.jsx("li",{children:o.jsx(St,{to:"/about",className:"hover:text-blue-400 transition-colors",children:"About Us"})}),o.jsx("li",{children:o.jsx(St,{to:"/founder",className:"hover:text-blue-400 transition-colors",children:"Founder & Leadership"})}),o.jsx("li",{children:o.jsx(St,{to:"/team",className:"hover:text-blue-400 transition-colors",children:"Our Team"})})]})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsx("h4",{className:"text-white text-xs font-bold tracking-wider uppercase",children:"Tech Stack"}),o.jsxs("ul",{className:"space-y-2 text-xs",children:[o.jsx("li",{children:o.jsx(St,{to:"/services",className:"hover:text-blue-400 transition-colors",children:"MERN Stack Development"})}),o.jsx("li",{children:o.jsx(St,{to:"/services",className:"hover:text-blue-400 transition-colors",children:"Java Enterprise Solutions"})}),o.jsx("li",{children:o.jsx(St,{to:"/services",className:"hover:text-blue-400 transition-colors",children:"Python AI & Data Engineering"})}),o.jsx("li",{children:o.jsx(St,{to:"/services",className:"hover:text-blue-400 transition-colors",children:"C / C++ Low Latency Systems"})}),o.jsx("li",{children:o.jsx(St,{to:"/services",className:"hover:text-blue-400 transition-colors",children:"Flutter & Native Mobile"})}),o.jsx("li",{children:o.jsx(St,{to:"/services",className:"hover:text-blue-400 transition-colors",children:"Cloud & AWS KMS Integration"})})]})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsx("h4",{className:"text-white text-xs font-bold tracking-wider uppercase",children:"Head Office"}),o.jsxs("ul",{className:"space-y-2.5 text-xs",children:[o.jsxs("li",{className:"flex items-start space-x-2",children:[o.jsx(vf,{className:"w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5"}),o.jsx("span",{children:"Engineering Chauraha, Lucknow, Uttar Pradesh, India"})]}),o.jsxs("li",{className:"flex items-center space-x-2",children:[o.jsx(V_,{className:"w-4 h-4 text-blue-400 flex-shrink-0"}),o.jsx("span",{children:"+91 8090121332"})]}),o.jsxs("li",{className:"flex items-center space-x-2",children:[o.jsx(xo,{className:"w-4 h-4 text-blue-400 flex-shrink-0"}),o.jsx("span",{children:"tiwarir3398@gmail.com"})]})]})]})]}),o.jsxs("div",{className:"pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500",children:[o.jsxs("p",{children:["© ",new Date().getFullYear()," ERA TECH SOLUTIONS Inc. All rights reserved. Founded by Rahul Tiwari."]}),o.jsxs("div",{className:"flex space-x-6 mt-4 md:mt-0",children:[o.jsx("a",{href:"#privacy",className:"hover:text-slate-400 transition-colors",children:"Privacy Policy"}),o.jsx("a",{href:"#terms",className:"hover:text-slate-400 transition-colors",children:"Terms of Service"}),o.jsx("a",{href:"#security",className:"hover:text-slate-400 transition-colors",children:"Security Hardening"})]})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yp="185",XE=0,I0=1,qE=2,zl=1,$E=2,Oa=3,Er=0,En=1,Di=2,Bi=0,Xs=1,_f=2,U0=3,F0=4,YE=5,kr=100,KE=101,ZE=102,JE=103,QE=104,e2=200,t2=201,n2=202,i2=203,yf=204,Sf=205,r2=206,s2=207,a2=208,o2=209,l2=210,c2=211,u2=212,d2=213,f2=214,bf=0,wf=1,Mf=2,ra=3,Ef=4,Tf=5,Af=6,Cf=7,Sp=0,h2=1,p2=2,bi=0,Y_=1,K_=2,Z_=3,J_=4,Q_=5,ey=6,ty=7,ny=300,is=301,sa=302,Ou=303,ku=304,Jc=306,Rf=1e3,Fi=1001,Nf=1002,$t=1003,m2=1004,tl=1005,sn=1006,Bu=1007,Gr=1008,Ln=1009,iy=1010,ry=1011,go=1012,bp=1013,Mi=1014,vi=1015,Xi=1016,wp=1017,Mp=1018,vo=1020,sy=35902,ay=35899,oy=1021,ly=1022,ri=1023,qi=1026,Wr=1027,cy=1028,Ep=1029,rs=1030,Tp=1031,Ap=1033,Hl=33776,Vl=33777,Gl=33778,Wl=33779,Pf=35840,Lf=35841,Df=35842,If=35843,Uf=36196,Ff=37492,Of=37496,kf=37488,Bf=37489,Sc=37490,jf=37491,zf=37808,Hf=37809,Vf=37810,Gf=37811,Wf=37812,Xf=37813,qf=37814,$f=37815,Yf=37816,Kf=37817,Zf=37818,Jf=37819,Qf=37820,eh=37821,th=36492,nh=36494,ih=36495,rh=36283,sh=36284,bc=36285,ah=36286,x2=3200,oh=0,g2=1,cr="",Hn="srgb",wc="srgb-linear",Mc="linear",ot="srgb",ps=7680,O0=519,v2=512,_2=513,y2=514,Cp=515,S2=516,b2=517,Rp=518,w2=519,k0=35044,B0="300 es",_i=2e3,_o=2001;function M2(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ec(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function E2(){const t=Ec("canvas");return t.style.display="block",t}const j0={};function z0(...t){const e="THREE."+t.shift();console.log(e,...t)}function uy(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=uy(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function rt(...t){t=uy(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function qs(...t){const e=t.join(" ");e in j0||(j0[e]=!0,ze(...t))}function T2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const A2={[bf]:wf,[Mf]:Af,[Ef]:Cf,[ra]:Tf,[wf]:bf,[Af]:Mf,[Cf]:Ef,[Tf]:ra};class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=Math.PI/180,lh=180/Math.PI;function Lo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function C2(t,e){return(t%e+e)%e}function zu(t,e,n){return(1-n)*t+n*e}function Ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ip=class Ip{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ip.prototype.isVector2=!0;let Ze=Ip;class pa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let c=i[r+0],u=i[r+1],d=i[r+2],f=i[r+3],p=s[a+0],m=s[a+1],v=s[a+2],w=s[a+3];if(f!==w||c!==p||u!==m||d!==v){let x=c*p+u*m+d*v+f*w;x<0&&(p=-p,m=-m,v=-v,w=-w,x=-x);let h=1-l;if(x<.9995){const g=Math.acos(x),_=Math.sin(g);h=Math.sin(h*g)/_,l=Math.sin(l*g)/_,c=c*h+p*l,u=u*h+m*l,d=d*h+v*l,f=f*h+w*l}else{c=c*h+p*l,u=u*h+m*l,d=d*h+v*l,f=f*h+w*l;const g=1/Math.sqrt(c*c+u*u+d*d+f*f);c*=g,u*=g,d*=g,f*=g}}e[n]=c,e[n+1]=u,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],c=i[r+1],u=i[r+2],d=i[r+3],f=s[a],p=s[a+1],m=s[a+2],v=s[a+3];return e[n]=l*v+d*f+c*m-u*p,e[n+1]=c*v+d*p+u*f-l*m,e[n+2]=u*v+d*m+l*p-c*f,e[n+3]=d*v-l*f-c*p-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(i/2),d=l(r/2),f=l(s/2),p=c(i/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=p*d*f+u*m*v,this._y=u*m*f-p*d*v,this._z=u*d*v+p*m*f,this._w=u*d*f-p*m*v;break;case"YXZ":this._x=p*d*f+u*m*v,this._y=u*m*f-p*d*v,this._z=u*d*v-p*m*f,this._w=u*d*f+p*m*v;break;case"ZXY":this._x=p*d*f-u*m*v,this._y=u*m*f+p*d*v,this._z=u*d*v+p*m*f,this._w=u*d*f-p*m*v;break;case"ZYX":this._x=p*d*f-u*m*v,this._y=u*m*f+p*d*v,this._z=u*d*v-p*m*f,this._w=u*d*f+p*m*v;break;case"YZX":this._x=p*d*f+u*m*v,this._y=u*m*f+p*d*v,this._z=u*d*v-p*m*f,this._w=u*d*f-p*m*v;break;case"XZY":this._x=p*d*f-u*m*v,this._y=u*m*f-p*d*v,this._z=u*d*v+p*m*f,this._w=u*d*f+p*m*v;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],c=n[9],u=n[2],d=n[6],f=n[10],p=i+l+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>l&&i>f){const m=2*Math.sqrt(1+i-l-f);this._w=(d-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(l>f){const m=2*Math.sqrt(1+l-i-f);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+f-i-l);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,c=n._y,u=n._z,d=n._w;return this._x=i*d+a*l+r*u-s*c,this._y=r*d+a*c+s*l-i*u,this._z=s*d+a*u+i*c-r*l,this._w=a*d-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-n;if(l<.9995){const u=Math.acos(l),d=Math.sin(u);c=Math.sin(c*u)/d,n=Math.sin(n*u)/d,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Up=class Up{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(H0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(H0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*i),d=2*(l*n-s*r),f=2*(s*i-a*n);return this.x=n+c*u+a*f-l*d,this.y=i+c*d+l*u-s*f,this.z=r+c*f+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Up.prototype.isVector3=!0;let j=Up;const Hu=new j,H0=new pa,Fp=class Fp{constructor(e,n,i,r,s,a,l,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u)}set(e,n,i,r,s,a,l,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=l,d[3]=n,d[4]=s,d[5]=c,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],c=i[6],u=i[1],d=i[4],f=i[7],p=i[2],m=i[5],v=i[8],w=r[0],x=r[3],h=r[6],g=r[1],_=r[4],y=r[7],M=r[2],T=r[5],C=r[8];return s[0]=a*w+l*g+c*M,s[3]=a*x+l*_+c*T,s[6]=a*h+l*y+c*C,s[1]=u*w+d*g+f*M,s[4]=u*x+d*_+f*T,s[7]=u*h+d*y+f*C,s[2]=p*w+m*g+v*M,s[5]=p*x+m*_+v*T,s[8]=p*h+m*y+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8];return n*a*d-n*l*u-i*s*d+i*l*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8],f=d*a-l*u,p=l*c-d*s,m=u*s-a*c,v=n*f+i*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=f*w,e[1]=(r*u-d*i)*w,e[2]=(l*i-r*a)*w,e[3]=p*w,e[4]=(d*n-r*c)*w,e[5]=(r*s-l*n)*w,e[6]=m*w,e[7]=(i*c-u*n)*w,e[8]=(a*n-i*s)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+n,0,0,1),this}scale(e,n){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vu.makeScale(e,n)),this}rotate(e){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vu.makeRotation(-e)),this}translate(e,n){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fp.prototype.isMatrix3=!0;let Ge=Fp;const Vu=new Ge,V0=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G0=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R2(){const t={enabled:!0,workingColorSpace:wc,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ot&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(r.r=$s(r.r),r.g=$s(r.g),r.b=$s(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===cr?Mc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[wc]:{primaries:e,whitePoint:i,transfer:Mc,toXYZ:V0,fromXYZ:G0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:V0,fromXYZ:G0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),t}const Qe=R2();function ji(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $s(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ms;class N2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ms===void 0&&(ms=Ec("canvas")),ms.width=e.width,ms.height=e.height;const r=ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ms}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ec("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ji(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ji(n[i]/255)*255):n[i]=ji(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P2=0;class Np{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P2++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Gu(r[a].image)):s.push(Gu(r[a]))}else s=Gu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?N2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let L2=0;const Wu=new j;class fn extends cs{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Fi,r=Fi,s=sn,a=Gr,l=ri,c=Ln,u=fn.DEFAULT_ANISOTROPY,d=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L2++}),this.uuid=Lo(),this.name="",this.source=new Np(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wu).x}get height(){return this.source.getSize(Wu).y}get depth(){return this.source.getSize(Wu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ny)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rf:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rf:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=ny;fn.DEFAULT_ANISOTROPY=1;const Op=class Op{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],d=c[4],f=c[8],p=c[1],m=c[5],v=c[9],w=c[2],x=c[6],h=c[10];if(Math.abs(d-p)<.01&&Math.abs(f-w)<.01&&Math.abs(v-x)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+w)<.1&&Math.abs(v+x)<.1&&Math.abs(u+m+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,y=(m+1)/2,M=(h+1)/2,T=(d+p)/4,C=(f+w)/4,S=(v+x)/4;return _>y&&_>M?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=C/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=S/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=C/s,r=S/s),this.set(i,r,s,n),this}let g=Math.sqrt((x-v)*(x-v)+(f-w)*(f-w)+(p-d)*(p-d));return Math.abs(g)<.001&&(g=1),this.x=(x-v)/g,this.y=(f-w)/g,this.z=(p-d)/g,this.w=Math.acos((u+m+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Op.prototype.isVector4=!0;let Mt=Op;class D2 extends cs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new fn(r),a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Np(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends D2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dy extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I2 extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cc=class Cc{constructor(e,n,i,r,s,a,l,c,u,d,f,p,m,v,w,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u,d,f,p,m,v,w,x)}set(e,n,i,r,s,a,l,c,u,d,f,p,m,v,w,x){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=l,h[13]=c,h[2]=u,h[6]=d,h[10]=f,h[14]=p,h[3]=m,h[7]=v,h[11]=w,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*d,m=a*f,v=l*d,w=l*f;n[0]=c*d,n[4]=-c*f,n[8]=u,n[1]=m+v*u,n[5]=p-w*u,n[9]=-l*c,n[2]=w-p*u,n[6]=v+m*u,n[10]=a*c}else if(e.order==="YXZ"){const p=c*d,m=c*f,v=u*d,w=u*f;n[0]=p+w*l,n[4]=v*l-m,n[8]=a*u,n[1]=a*f,n[5]=a*d,n[9]=-l,n[2]=m*l-v,n[6]=w+p*l,n[10]=a*c}else if(e.order==="ZXY"){const p=c*d,m=c*f,v=u*d,w=u*f;n[0]=p-w*l,n[4]=-a*f,n[8]=v+m*l,n[1]=m+v*l,n[5]=a*d,n[9]=w-p*l,n[2]=-a*u,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){const p=a*d,m=a*f,v=l*d,w=l*f;n[0]=c*d,n[4]=v*u-m,n[8]=p*u+w,n[1]=c*f,n[5]=w*u+p,n[9]=m*u-v,n[2]=-u,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*u,v=l*c,w=l*u;n[0]=c*d,n[4]=w-p*f,n[8]=v*f+m,n[1]=f,n[5]=a*d,n[9]=-l*d,n[2]=-u*d,n[6]=m*f+v,n[10]=p-w*f}else if(e.order==="XZY"){const p=a*c,m=a*u,v=l*c,w=l*u;n[0]=c*d,n[4]=-f,n[8]=u*d,n[1]=p*f+w,n[5]=a*d,n[9]=m*f-v,n[2]=v*f-m,n[6]=l*d,n[10]=w*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U2,e,F2)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),Qi.crossVectors(i,An),Qi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Qi.crossVectors(i,An)),Qi.normalize(),nl.crossVectors(An,Qi),r[0]=Qi.x,r[4]=nl.x,r[8]=An.x,r[1]=Qi.y,r[5]=nl.y,r[9]=An.y,r[2]=Qi.z,r[6]=nl.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],c=i[8],u=i[12],d=i[1],f=i[5],p=i[9],m=i[13],v=i[2],w=i[6],x=i[10],h=i[14],g=i[3],_=i[7],y=i[11],M=i[15],T=r[0],C=r[4],S=r[8],A=r[12],N=r[1],P=r[5],I=r[9],K=r[13],J=r[2],k=r[6],Z=r[10],z=r[14],F=r[3],Y=r[7],ee=r[11],re=r[15];return s[0]=a*T+l*N+c*J+u*F,s[4]=a*C+l*P+c*k+u*Y,s[8]=a*S+l*I+c*Z+u*ee,s[12]=a*A+l*K+c*z+u*re,s[1]=d*T+f*N+p*J+m*F,s[5]=d*C+f*P+p*k+m*Y,s[9]=d*S+f*I+p*Z+m*ee,s[13]=d*A+f*K+p*z+m*re,s[2]=v*T+w*N+x*J+h*F,s[6]=v*C+w*P+x*k+h*Y,s[10]=v*S+w*I+x*Z+h*ee,s[14]=v*A+w*K+x*z+h*re,s[3]=g*T+_*N+y*J+M*F,s[7]=g*C+_*P+y*k+M*Y,s[11]=g*S+_*I+y*Z+M*ee,s[15]=g*A+_*K+y*z+M*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],d=e[2],f=e[6],p=e[10],m=e[14],v=e[3],w=e[7],x=e[11],h=e[15],g=c*m-u*p,_=l*m-u*f,y=l*p-c*f,M=a*m-u*d,T=a*p-c*d,C=a*f-l*d;return n*(w*g-x*_+h*y)-i*(v*g-x*M+h*T)+r*(v*_-w*M+h*C)-s*(v*y-w*T+x*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10];return n*(a*d-l*u)-i*(s*d-l*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],d=e[8],f=e[9],p=e[10],m=e[11],v=e[12],w=e[13],x=e[14],h=e[15],g=n*l-i*a,_=n*c-r*a,y=n*u-s*a,M=i*c-r*l,T=i*u-s*l,C=r*u-s*c,S=d*w-f*v,A=d*x-p*v,N=d*h-m*v,P=f*x-p*w,I=f*h-m*w,K=p*h-m*x,J=g*K-_*I+y*P+M*N-T*A+C*S;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/J;return e[0]=(l*K-c*I+u*P)*k,e[1]=(r*I-i*K-s*P)*k,e[2]=(w*C-x*T+h*M)*k,e[3]=(p*T-f*C-m*M)*k,e[4]=(c*N-a*K-u*A)*k,e[5]=(n*K-r*N+s*A)*k,e[6]=(x*y-v*C-h*_)*k,e[7]=(d*C-p*y+m*_)*k,e[8]=(a*I-l*N+u*S)*k,e[9]=(i*N-n*I-s*S)*k,e[10]=(v*T-w*y+h*g)*k,e[11]=(f*y-d*T-m*g)*k,e[12]=(l*A-a*P-c*S)*k,e[13]=(n*P-i*A+r*S)*k,e[14]=(w*_-v*M-x*g)*k,e[15]=(d*M-f*_+p*g)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,c=e.z,u=s*a,d=s*l;return this.set(u*a+i,u*l-r*c,u*c+r*l,0,u*l+r*c,d*l+i,d*c-r*a,0,u*c-r*l,d*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,c=n._w,u=s+s,d=a+a,f=l+l,p=s*u,m=s*d,v=s*f,w=a*d,x=a*f,h=l*f,g=c*u,_=c*d,y=c*f,M=i.x,T=i.y,C=i.z;return r[0]=(1-(w+h))*M,r[1]=(m+y)*M,r[2]=(v-_)*M,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(p+h))*T,r[6]=(x+g)*T,r[7]=0,r[8]=(v+_)*C,r[9]=(x-g)*C,r[10]=(1-(p+w))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=xs.set(r[0],r[1],r[2]).length();const l=xs.set(r[4],r[5],r[6]).length(),c=xs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Zn.copy(this);const u=1/a,d=1/l,f=1/c;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=d,Zn.elements[5]*=d,Zn.elements[6]*=d,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,n.setFromRotationMatrix(Zn),i.x=a,i.y=l,i.z=c,this}makePerspective(e,n,i,r,s,a,l=_i,c=!1){const u=this.elements,d=2*s/(n-e),f=2*s/(i-r),p=(n+e)/(n-e),m=(i+r)/(i-r);let v,w;if(c)v=s/(a-s),w=a*s/(a-s);else if(l===_i)v=-(a+s)/(a-s),w=-2*a*s/(a-s);else if(l===_o)v=-a/(a-s),w=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=f,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=w,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=_i,c=!1){const u=this.elements,d=2/(n-e),f=2/(i-r),p=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,w;if(c)v=1/(a-s),w=a/(a-s);else if(l===_i)v=-2/(a-s),w=-(a+s)/(a-s);else if(l===_o)v=-1/(a-s),w=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=d,u[4]=0,u[8]=0,u[12]=p,u[1]=0,u[5]=f,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=v,u[14]=w,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Cc.prototype.isMatrix4=!0;let Tt=Cc;const xs=new j,Zn=new Tt,U2=new j(0,0,0),F2=new j(1,1,1),Qi=new j,nl=new j,An=new j,W0=new Tt,X0=new pa;class Tr{constructor(e=0,n=0,i=0,r=Tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],d=r[9],f=r[2],p=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return W0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(W0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return X0.setFromEuler(this),this.setFromQuaternion(X0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tr.DEFAULT_ORDER="XYZ";class fy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O2=0;const q0=new j,gs=new pa,Ti=new Tt,il=new j,Aa=new j,k2=new j,B2=new pa,$0=new j(1,0,0),Y0=new j(0,1,0),K0=new j(0,0,1),Z0={type:"added"},j2={type:"removed"},vs={type:"childadded",child:null},Xu={type:"childremoved",child:null};class hn extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O2++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new j,n=new Tr,i=new pa,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ge}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,n){return gs.setFromAxisAngle(e,n),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis($0,e)}rotateY(e){return this.rotateOnAxis(Y0,e)}rotateZ(e){return this.rotateOnAxis(K0,e)}translateOnAxis(e,n){return q0.copy(e).applyQuaternion(this.quaternion),this.position.add(q0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($0,e)}translateY(e){return this.translateOnAxis(Y0,e)}translateZ(e){return this.translateOnAxis(K0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?il.copy(e):il.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Aa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Aa,il,this.up):Ti.lookAt(il,Aa,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),gs.setFromRotationMatrix(Ti),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Z0),vs.child=e,this.dispatchEvent(vs),vs.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(j2),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Z0),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,e,k2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Aa,B2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const f=c[u];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),d=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),v=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(l){const c=[];for(const u in l){const d=l[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new j(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ka extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z2={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const w of e.hand.values()){const x=n.getJointPose(w,i),h=this._getHandJoint(u,w);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=x.radius),h.visible=x!==null}const d=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,v=.005;u.inputState.pinching&&p>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(z2)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ka;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const hy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},rl={h:0,s:0,l:0};function $u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=C2(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=$u(a,s,e+1/3),this.g=$u(a,s,e),this.b=$u(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Hn){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Hn){const i=hy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return Qe.workingToColorSpace(nn.copy(this),e),Math.round(et(nn.r*255,0,255))*65536+Math.round(et(nn.g*255,0,255))*256+Math.round(et(nn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const d=(l+a)/2;if(l===a)c=0,u=0;else{const f=a-l;switch(u=d<=.5?f/(a+l):f/(2-a-l),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Hn){Qe.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+n,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(er),e.getHSL(rl);const i=zu(er.h,rl.h,n),r=zu(er.s,rl.s,n),s=zu(er.l,rl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Ke;Ke.NAMES=hy;class H2 extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tr,this.environmentIntensity=1,this.environmentRotation=new Tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new j,Ai=new j,Yu=new j,Ci=new j,_s=new j,ys=new j,J0=new j,Ku=new j,Zu=new j,Ju=new j,Qu=new Mt,ed=new Mt,td=new Mt;class ii{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Ai.subVectors(i,n),Yu.subVectors(e,n);const a=Jn.dot(Jn),l=Jn.dot(Ai),c=Jn.dot(Yu),u=Ai.dot(Ai),d=Ai.dot(Yu),f=a*u-l*l;if(f===0)return s.set(0,0,0),null;const p=1/f,m=(u*c-l*d)*p,v=(a*d-l*c)*p;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,r,s,a,l,c){return this.getBarycoord(e,n,i,r,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ci.x),c.addScaledVector(a,Ci.y),c.addScaledVector(l,Ci.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Qu.setScalar(0),ed.setScalar(0),td.setScalar(0),Qu.fromBufferAttribute(e,n),ed.fromBufferAttribute(e,i),td.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qu,s.x),a.addScaledVector(ed,s.y),a.addScaledVector(td,s.z),a}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Ai.subVectors(e,n),Jn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Jn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;_s.subVectors(r,i),ys.subVectors(s,i),Ku.subVectors(e,i);const c=_s.dot(Ku),u=ys.dot(Ku);if(c<=0&&u<=0)return n.copy(i);Zu.subVectors(e,r);const d=_s.dot(Zu),f=ys.dot(Zu);if(d>=0&&f<=d)return n.copy(r);const p=c*f-d*u;if(p<=0&&c>=0&&d<=0)return a=c/(c-d),n.copy(i).addScaledVector(_s,a);Ju.subVectors(e,s);const m=_s.dot(Ju),v=ys.dot(Ju);if(v>=0&&m<=v)return n.copy(s);const w=m*u-c*v;if(w<=0&&u>=0&&v<=0)return l=u/(u-v),n.copy(i).addScaledVector(ys,l);const x=d*v-m*f;if(x<=0&&f-d>=0&&m-v>=0)return J0.subVectors(s,r),l=(f-d)/(f-d+(m-v)),n.copy(r).addScaledVector(J0,l);const h=1/(x+w+p);return a=w*h,l=p*h,n.copy(i).addScaledVector(_s,a).addScaledVector(ys,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Do{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ca),al.subVectors(this.max,Ca),Ss.subVectors(e.a,Ca),bs.subVectors(e.b,Ca),ws.subVectors(e.c,Ca),tr.subVectors(bs,Ss),nr.subVectors(ws,bs),Pr.subVectors(Ss,ws);let n=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Pr.z,Pr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Pr.z,0,-Pr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Pr.y,Pr.x,0];return!nd(n,Ss,bs,ws,al)||(n=[1,0,0,0,1,0,0,0,1],!nd(n,Ss,bs,ws,al))?!1:(ol.crossVectors(tr,nr),n=[ol.x,ol.y,ol.z],nd(n,Ss,bs,ws,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new j,new j,new j,new j,new j,new j,new j,new j],Qn=new j,sl=new Do,Ss=new j,bs=new j,ws=new j,tr=new j,nr=new j,Pr=new j,Ca=new j,al=new j,ol=new j,Lr=new j;function nd(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Lr.fromArray(t,s);const l=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),c=e.dot(Lr),u=n.dot(Lr),d=i.dot(Lr);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>l)return!1}return!0}const Ft=new j,ll=new Ze;let V2=0;class qn extends cs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=k0,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ll.fromBufferAttribute(this,n),ll.applyMatrix3(e),this.setXY(n,ll.x,ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix3(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyMatrix4(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.applyNormalMatrix(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ft.fromBufferAttribute(this,n),Ft.transformDirection(e),this.setXYZ(n,Ft.x,Ft.y,Ft.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==k0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class py extends qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class my extends qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pn extends qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const G2=new Do,Ra=new j,id=new j;class Qc{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):G2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ra.subVectors(e,this.center);const n=Ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ra.copy(e.center).add(id)),this.expandByPoint(Ra.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let W2=0;const zn=new Tt,rd=new hn,Ms=new j,Cn=new Do,Na=new Do,Vt=new j;class Bn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W2++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(M2(e)?my:py)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,n,i){return zn.makeTranslation(e,n,i),this.applyMatrix4(zn),this}scale(e,n,i){return zn.makeScale(e,n,i),this.applyMatrix4(zn),this}lookAt(e){return rd.lookAt(e),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];Na.setFromBufferAttribute(l),this.morphTargetsRelative?(Vt.addVectors(Cn.min,Na.min),Cn.expandByPoint(Vt),Vt.addVectors(Cn.max,Na.max),Cn.expandByPoint(Vt)):(Cn.expandByPoint(Na.min),Cn.expandByPoint(Na.max))}Cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],c=this.morphTargetsRelative;for(let u=0,d=l.count;u<d;u++)Vt.fromBufferAttribute(l,u),c&&(Ms.fromBufferAttribute(e,u),Vt.add(Ms)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new qn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],c=[];for(let S=0;S<i.count;S++)l[S]=new j,c[S]=new j;const u=new j,d=new j,f=new j,p=new Ze,m=new Ze,v=new Ze,w=new j,x=new j;function h(S,A,N){u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,A),f.fromBufferAttribute(i,N),p.fromBufferAttribute(s,S),m.fromBufferAttribute(s,A),v.fromBufferAttribute(s,N),d.sub(u),f.sub(u),m.sub(p),v.sub(p);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(w.copy(d).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(P),x.copy(f).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(P),l[S].add(w),l[A].add(w),l[N].add(w),c[S].add(x),c[A].add(x),c[N].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let S=0,A=g.length;S<A;++S){const N=g[S],P=N.start,I=N.count;for(let K=P,J=P+I;K<J;K+=3)h(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const _=new j,y=new j,M=new j,T=new j;function C(S){M.fromBufferAttribute(r,S),T.copy(M);const A=l[S];_.copy(A),_.sub(M.multiplyScalar(M.dot(A))).normalize(),y.crossVectors(T,A);const P=y.dot(c[S])<0?-1:1;a.setXYZW(S,_.x,_.y,_.z,P)}for(let S=0,A=g.length;S<A;++S){const N=g[S],P=N.start,I=N.count;for(let K=P,J=P+I;K<J;K+=3)C(e.getX(K+0)),C(e.getX(K+1)),C(e.getX(K+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new j,s=new j,a=new j,l=new j,c=new j,u=new j,d=new j,f=new j;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),w=e.getX(p+1),x=e.getX(p+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,w),a.fromBufferAttribute(n,x),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,x),l.add(d),c.add(d),u.add(d),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let p=0,m=n.count;p<m;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(l,c){const u=l.array,d=l.itemSize,f=l.normalized,p=new u.constructor(c.length*d);let m=0,v=0;for(let w=0,x=c.length;w<x;w++){l.isInterleavedBufferAttribute?m=c[w]*l.data.stride+l.offset:m=c[w]*d;for(let h=0;h<d;h++)p[v++]=u[m++]}return new qn(p,d,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bn,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let d=0,f=u.length;d<f;d++){const p=u[d],m=e(p,i);c.push(m)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let f=0,p=u.length;f<p;f++){const m=u[f];d.push(m.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],f=s[u];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let X2=0;class ma extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X2++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=Xs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ra,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==Er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yf&&(i.blendSrc=this.blendSrc),this.blendDst!==Sf&&(i.blendDst=this.blendDst),this.blendEquation!==kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ra&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ni=new j,sd=new j,cl=new j,ir=new j,ad=new j,ul=new j,od=new j;class xy{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){sd.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),ir.copy(this.origin).sub(sd);const s=e.distanceTo(n)*.5,a=-this.direction.dot(cl),l=ir.dot(this.direction),c=-ir.dot(cl),u=ir.lengthSq(),d=Math.abs(1-a*a);let f,p,m,v;if(d>0)if(f=a*c-l,p=a*l-c,v=s*d,f>=0)if(p>=-v)if(p<=v){const w=1/d;f*=w,p*=w,m=f*(f+a*p+2*l)+p*(a*f+p+2*c)+u}else p=s,f=Math.max(0,-(a*p+l)),m=-f*f+p*(p+2*c)+u;else p=-s,f=Math.max(0,-(a*p+l)),m=-f*f+p*(p+2*c)+u;else p<=-v?(f=Math.max(0,-(-a*s+l)),p=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+u):p<=v?(f=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+u):(f=Math.max(0,-(a*s+l)),p=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+u);else p=a>0?-s:s,f=Math.max(0,-(a*p+l)),m=-f*f+p*(p+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sd).addScaledVector(cl,p),m}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,c;const u=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),d>=0?(s=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(l=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(l=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,i,r,s){ad.subVectors(n,e),ul.subVectors(i,e),od.crossVectors(ad,ul);let a=this.direction.dot(od),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;ir.subVectors(this.origin,e);const c=l*this.direction.dot(ul.crossVectors(ir,ul));if(c<0)return null;const u=l*this.direction.dot(ad.cross(ir));if(u<0||c+u>a)return null;const d=-l*ir.dot(od);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tc extends ma{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=Sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Q0=new Tt,Dr=new xy,dl=new Qc,ex=new j,fl=new j,hl=new j,pl=new j,ld=new j,ml=new j,tx=new j,xl=new j;class In extends hn{constructor(e=new Bn,n=new Tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){ml.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const d=l[c],f=s[c];d!==0&&(ld.fromBufferAttribute(f,e),a?ml.addScaledVector(ld,d):ml.addScaledVector(ld.sub(n),d))}n.add(ml)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(dl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(dl,ex)===null||Dr.origin.distanceToSquared(ex)>(e.far-e.near)**2))&&(Q0.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Q0),!(i.boundingBox!==null&&Dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,p=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(a))for(let v=0,w=p.length;v<w;v++){const x=p[v],h=a[x.materialIndex],g=Math.max(x.start,m.start),_=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let y=g,M=_;y<M;y+=3){const T=l.getX(y),C=l.getX(y+1),S=l.getX(y+2);r=gl(this,h,e,i,u,d,f,T,C,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),w=Math.min(l.count,m.start+m.count);for(let x=v,h=w;x<h;x+=3){const g=l.getX(x),_=l.getX(x+1),y=l.getX(x+2);r=gl(this,a,e,i,u,d,f,g,_,y),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,w=p.length;v<w;v++){const x=p[v],h=a[x.materialIndex],g=Math.max(x.start,m.start),_=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let y=g,M=_;y<M;y+=3){const T=y,C=y+1,S=y+2;r=gl(this,h,e,i,u,d,f,T,C,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),w=Math.min(c.count,m.start+m.count);for(let x=v,h=w;x<h;x+=3){const g=x,_=x+1,y=x+2;r=gl(this,a,e,i,u,d,f,g,_,y),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function q2(t,e,n,i,r,s,a,l){let c;if(e.side===En?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===Er,l),c===null)return null;xl.copy(l),xl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(xl);return u<n.near||u>n.far?null:{distance:u,point:xl.clone(),object:t}}function gl(t,e,n,i,r,s,a,l,c,u){t.getVertexPosition(l,fl),t.getVertexPosition(c,hl),t.getVertexPosition(u,pl);const d=q2(t,e,n,i,fl,hl,pl,tx);if(d){const f=new j;ii.getBarycoord(tx,fl,hl,pl,f),r&&(d.uv=ii.getInterpolatedAttribute(r,l,c,u,f,new Ze)),s&&(d.uv1=ii.getInterpolatedAttribute(s,l,c,u,f,new Ze)),a&&(d.normal=ii.getInterpolatedAttribute(a,l,c,u,f,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a:l,b:c,c:u,normal:new j,materialIndex:0};ii.getNormal(fl,hl,pl,p.normal),d.face=p,d.barycoord=f}return d}class $2 extends fn{constructor(e=null,n=1,i=1,r,s,a,l,c,u=$t,d=$t,f,p){super(null,a,l,c,u,d,r,s,f,p),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cd=new j,Y2=new j,K2=new Ge;class Or{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=cd.subVectors(i,n).cross(Y2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(cd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||K2.getNormalMatrix(e),r=this.coplanarPoint(cd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Qc,Z2=new Ze(.5,.5),vl=new j;class Pp{constructor(e=new Or,n=new Or,i=new Or,r=new Or,s=new Or,a=new Or){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i,i=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],u=s[3],d=s[4],f=s[5],p=s[6],m=s[7],v=s[8],w=s[9],x=s[10],h=s[11],g=s[12],_=s[13],y=s[14],M=s[15];if(r[0].setComponents(u-a,m-d,h-v,M-g).normalize(),r[1].setComponents(u+a,m+d,h+v,M+g).normalize(),r[2].setComponents(u+l,m+f,h+w,M+_).normalize(),r[3].setComponents(u-l,m-f,h-w,M-_).normalize(),i)r[4].setComponents(c,p,x,y).normalize(),r[5].setComponents(u-c,m-p,h-x,M-y).normalize();else if(r[4].setComponents(u-c,m-p,h-x,M-y).normalize(),n===_i)r[5].setComponents(u+c,m+p,h+x,M+y).normalize();else if(n===_o)r[5].setComponents(c,p,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const n=Z2.distanceTo(e.center);return Ir.radius=.7071067811865476+n,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vl.x=r.normal.x>0?e.max.x:e.min.x,vl.y=r.normal.y>0?e.max.y:e.min.y,vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gy extends ma{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nx=new Tt,ch=new xy,_l=new Qc,yl=new j;class J2 extends hn{constructor(e=new Bn,n=new gy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_l.copy(i.boundingSphere),_l.applyMatrix4(r),_l.radius+=s,e.ray.intersectsSphere(_l)===!1)return;nx.copy(r).invert(),ch.copy(e.ray).applyMatrix4(nx);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=p,w=m;v<w;v++){const x=u.getX(v);yl.fromBufferAttribute(f,x),ix(yl,x,c,r,e,n,this)}}else{const p=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=p,w=m;v<w;v++)yl.fromBufferAttribute(f,v),ix(yl,v,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function ix(t,e,n,i,r,s,a){const l=ch.distanceSqToPoint(t);if(l<n){const c=new j;ch.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class vy extends fn{constructor(e=[],n=is,i,r,s,a,l,c,u,d){super(e,n,i,r,s,a,l,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aa extends fn{constructor(e,n,i=Mi,r,s,a,l=$t,c=$t,u,d=qi,f=1){if(d!==qi&&d!==Wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:n,depth:f};super(p,r,s,a,l,c,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Np(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Q2 extends aa{constructor(e,n=Mi,i=is,r,s,a=$t,l=$t,c,u=qi){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,l,c,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _y extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Io extends Bn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],d=[],f=[];let p=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new pn(u,3)),this.setAttribute("normal",new pn(d,3)),this.setAttribute("uv",new pn(f,2));function v(w,x,h,g,_,y,M,T,C,S,A){const N=y/C,P=M/S,I=y/2,K=M/2,J=T/2,k=C+1,Z=S+1;let z=0,F=0;const Y=new j;for(let ee=0;ee<Z;ee++){const re=ee*P-K;for(let se=0;se<k;se++){const De=se*N-I;Y[w]=De*g,Y[x]=re*_,Y[h]=J,u.push(Y.x,Y.y,Y.z),Y[w]=0,Y[x]=0,Y[h]=T>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(se/C),f.push(1-ee/S),z+=1}}for(let ee=0;ee<S;ee++)for(let re=0;re<C;re++){const se=p+re+k*ee,De=p+re+k*(ee+1),ke=p+(re+1)+k*(ee+1),He=p+(re+1)+k*ee;c.push(se,De,He),c.push(De,ke,He),F+=6}l.addGroup(m,F,A),m+=F,p+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class eu extends Bn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];l(r),u(i),d(),this.setAttribute("position",new pn(s,3)),this.setAttribute("normal",new pn(s.slice(),3)),this.setAttribute("uv",new pn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function l(g){const _=new j,y=new j,M=new j;for(let T=0;T<n.length;T+=3)m(n[T+0],_),m(n[T+1],y),m(n[T+2],M),c(_,y,M,g)}function c(g,_,y,M){const T=M+1,C=[];for(let S=0;S<=T;S++){C[S]=[];const A=g.clone().lerp(y,S/T),N=_.clone().lerp(y,S/T),P=T-S;for(let I=0;I<=P;I++)I===0&&S===T?C[S][I]=A:C[S][I]=A.clone().lerp(N,I/P)}for(let S=0;S<T;S++)for(let A=0;A<2*(T-S)-1;A++){const N=Math.floor(A/2);A%2===0?(p(C[S][N+1]),p(C[S+1][N]),p(C[S][N])):(p(C[S][N+1]),p(C[S+1][N+1]),p(C[S+1][N]))}}function u(g){const _=new j;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(g),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function d(){const g=new j;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const y=x(g)/2/Math.PI+.5,M=h(g)/Math.PI+.5;a.push(y,1-M)}v(),f()}function f(){for(let g=0;g<a.length;g+=6){const _=a[g+0],y=a[g+2],M=a[g+4],T=Math.max(_,y,M),C=Math.min(_,y,M);T>.9&&C<.1&&(_<.2&&(a[g+0]+=1),y<.2&&(a[g+2]+=1),M<.2&&(a[g+4]+=1))}}function p(g){s.push(g.x,g.y,g.z)}function m(g,_){const y=g*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function v(){const g=new j,_=new j,y=new j,M=new j,T=new Ze,C=new Ze,S=new Ze;for(let A=0,N=0;A<s.length;A+=9,N+=6){g.set(s[A+0],s[A+1],s[A+2]),_.set(s[A+3],s[A+4],s[A+5]),y.set(s[A+6],s[A+7],s[A+8]),T.set(a[N+0],a[N+1]),C.set(a[N+2],a[N+3]),S.set(a[N+4],a[N+5]),M.copy(g).add(_).add(y).divideScalar(3);const P=x(M);w(T,N+0,g,P),w(C,N+2,_,P),w(S,N+4,y,P)}}function w(g,_,y,M){M<0&&g.x===1&&(a[_]=g.x-1),y.x===0&&y.z===0&&(a[_]=M/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function h(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.vertices,e.indices,e.radius,e.detail)}}class Lp extends eu{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Lp(e.radius,e.detail)}}class Dp extends eu{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Dp(e.radius,e.detail)}}class tu extends Bn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),u=l+1,d=c+1,f=e/l,p=n/c,m=[],v=[],w=[],x=[];for(let h=0;h<d;h++){const g=h*p-a;for(let _=0;_<u;_++){const y=_*f-s;v.push(y,-g,0),w.push(0,0,1),x.push(_/l),x.push(1-h/c)}}for(let h=0;h<c;h++)for(let g=0;g<l;g++){const _=g+u*h,y=g+u*(h+1),M=g+1+u*(h+1),T=g+1+u*h;m.push(_,y,T),m.push(y,M,T)}this.setIndex(m),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(w,3)),this.setAttribute("uv",new pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ac extends Bn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:l},i=Math.floor(i),r=Math.floor(r);const c=[],u=[],d=[],f=[],p=new j,m=new j,v=new j;for(let w=0;w<=i;w++){const x=a+w/i*l;for(let h=0;h<=r;h++){const g=h/r*s;m.x=(e+n*Math.cos(x))*Math.cos(g),m.y=(e+n*Math.cos(x))*Math.sin(g),m.z=n*Math.sin(x),u.push(m.x,m.y,m.z),p.x=e*Math.cos(g),p.y=e*Math.sin(g),v.subVectors(m,p).normalize(),d.push(v.x,v.y,v.z),f.push(h/r),f.push(w/i)}}for(let w=1;w<=i;w++)for(let x=1;x<=r;x++){const h=(r+1)*w+x-1,g=(r+1)*(w-1)+x-1,_=(r+1)*(w-1)+x,y=(r+1)*w+x;c.push(h,g,y),c.push(g,_,y)}this.setIndex(c),this.setAttribute("position",new pn(u,3)),this.setAttribute("normal",new pn(d,3)),this.setAttribute("uv",new pn(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function oa(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(rx(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(rx(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=oa(t[n]);for(const r in i)e[r]=i[r]}return e}function rx(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function eT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function yy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const tT={clone:oa,merge:ln};var nT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends ma{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nT,this.fragmentShader=iT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=eT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new j().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Tt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class rT extends Ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sx extends ma{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=Sp,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sT extends ma{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aT extends ma{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Sy extends hn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ud=new Tt,ax=new j,ox=new j;class oT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pp,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;ax.setFromMatrixPosition(e.matrixWorld),n.position.copy(ax),ox.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ox),n.updateMatrixWorld(),ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===_o||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sl=new j,bl=new pa,hi=new j;class by extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sl,bl,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,bl,hi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Sl,bl,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,bl,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new j,lx=new Ze,cx=new Ze;class Pn extends by{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lh*2*Math.atan(Math.tan(ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,lx,cx),n.subVectors(cx,lx)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ju*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class lT extends oT{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}}class ux extends Sy{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new lT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class wy extends by{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=d*this.view.offsetY,c=l-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class cT extends Sy{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Es=-90,Ts=1;class uT extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(Es,Ts,e,n);r.layers=this.layers,this.add(r);const s=new Pn(Es,Ts,e,n);s.layers=this.layers,this.add(s);const a=new Pn(Es,Ts,e,n);a.layers=this.layers,this.add(a);const l=new Pn(Es,Ts,e,n);l.layers=this.layers,this.add(l);const c=new Pn(Es,Ts,e,n);c.layers=this.layers,this.add(c);const u=new Pn(Es,Ts,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,c]=n;for(const u of n)this.remove(u);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_o)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(f,p,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class dT extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const kp=class kp{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};kp.prototype.isMatrix2=!0;let dx=kp;function fx(t,e,n,i){const r=fT(i);switch(n){case oy:return t*e;case cy:return t*e/r.components*r.byteLength;case Ep:return t*e/r.components*r.byteLength;case rs:return t*e*2/r.components*r.byteLength;case Tp:return t*e*2/r.components*r.byteLength;case ly:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case Ap:return t*e*4/r.components*r.byteLength;case Hl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lf:case If:return Math.max(t,16)*Math.max(e,8)/4;case Pf:case Df:return Math.max(t,8)*Math.max(e,8)/2;case Uf:case Ff:case kf:case Bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Of:case Sc:case jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case th:case nh:case ih:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rh:case sh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case bc:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function fT(t){switch(t){case Ln:case iy:return{byteLength:1,components:1};case go:case ry:case Xi:return{byteLength:2,components:1};case wp:case Mp:return{byteLength:2,components:4};case Mi:case bp:case vi:return{byteLength:4,components:1};case sy:case ay:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yp}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function My(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function hT(t){const e=new WeakMap;function n(l,c){const u=l.array,d=l.usage,f=u.byteLength,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,u,d),l.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,c,u){const d=c.array,f=c.updateRanges;if(t.bindBuffer(u,l),f.length===0)t.bufferSubData(u,0,d);else{f.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<f.length;m++){const v=f[p],w=f[m];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++p,f[p]=w)}f.length=p+1;for(let m=0,v=f.length;m<v;m++){const w=f[m];t.bufferSubData(u,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=e.get(l);(!d||d.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}var pT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mT=`#ifdef USE_ALPHAHASH
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
#endif`,xT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_T=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yT=`#ifdef USE_AOMAP
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
#endif`,ST=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bT=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,wT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ET=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AT=`#ifdef USE_IRIDESCENCE
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
#endif`,CT=`#ifdef USE_BUMPMAP
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
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,OT=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,kT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BT=`vec3 transformedNormal = objectNormal;
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
#endif`,jT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GT="gl_FragColor = linearToOutputTexel( gl_FragColor );",WT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
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
#endif`,YT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ZT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tA=`#ifdef USE_GRADIENTMAP
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
}`,nA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sA=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,aA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,oA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,fA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,mA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_A=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,SA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MA=`#if defined( USE_POINTS_UV )
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
#endif`,EA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NA=`#ifdef USE_MORPHTARGETS
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
#endif`,PA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,IA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,OA=`#ifdef USE_NORMALMAP
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
#endif`,kA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,GA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$A=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ZA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,QA=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,eC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tC=`#ifdef USE_SKINNING
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
#endif`,nC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iC=`#ifdef USE_SKINNING
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
#endif`,rC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lC=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cC=`#ifdef USE_TRANSMISSION
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
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mC=`uniform sampler2D t2D;
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
}`,xC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_C=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yC=`#include <common>
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
}`,SC=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bC=`#define DISTANCE
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
}`,wC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,MC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TC=`uniform float scale;
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
}`,AC=`uniform vec3 diffuse;
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
}`,CC=`#include <common>
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
}`,RC=`uniform vec3 diffuse;
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
}`,NC=`#define LAMBERT
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
}`,PC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,LC=`#define MATCAP
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
}`,DC=`#define MATCAP
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
}`,IC=`#define NORMAL
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
}`,UC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FC=`#define PHONG
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
}`,OC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,kC=`#define STANDARD
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
}`,BC=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,jC=`#define TOON
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
}`,zC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,HC=`uniform float size;
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
}`,VC=`uniform vec3 diffuse;
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
}`,GC=`#include <common>
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
}`,WC=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,XC=`uniform float rotation;
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
}`,qC=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:pT,alphahash_pars_fragment:mT,alphamap_fragment:xT,alphamap_pars_fragment:gT,alphatest_fragment:vT,alphatest_pars_fragment:_T,aomap_fragment:yT,aomap_pars_fragment:ST,batching_pars_vertex:bT,batching_vertex:wT,begin_vertex:MT,beginnormal_vertex:ET,bsdfs:TT,iridescence_fragment:AT,bumpmap_pars_fragment:CT,clipping_planes_fragment:RT,clipping_planes_pars_fragment:NT,clipping_planes_pars_vertex:PT,clipping_planes_vertex:LT,color_fragment:DT,color_pars_fragment:IT,color_pars_vertex:UT,color_vertex:FT,common:OT,cube_uv_reflection_fragment:kT,defaultnormal_vertex:BT,displacementmap_pars_vertex:jT,displacementmap_vertex:zT,emissivemap_fragment:HT,emissivemap_pars_fragment:VT,colorspace_fragment:GT,colorspace_pars_fragment:WT,envmap_fragment:XT,envmap_common_pars_fragment:qT,envmap_pars_fragment:$T,envmap_pars_vertex:YT,envmap_physical_pars_fragment:aA,envmap_vertex:KT,fog_vertex:ZT,fog_pars_vertex:JT,fog_fragment:QT,fog_pars_fragment:eA,gradientmap_pars_fragment:tA,lightmap_pars_fragment:nA,lights_lambert_fragment:iA,lights_lambert_pars_fragment:rA,lights_pars_begin:sA,lights_toon_fragment:oA,lights_toon_pars_fragment:lA,lights_phong_fragment:cA,lights_phong_pars_fragment:uA,lights_physical_fragment:dA,lights_physical_pars_fragment:fA,lights_fragment_begin:hA,lights_fragment_maps:pA,lights_fragment_end:mA,lightprobes_pars_fragment:xA,logdepthbuf_fragment:gA,logdepthbuf_pars_fragment:vA,logdepthbuf_pars_vertex:_A,logdepthbuf_vertex:yA,map_fragment:SA,map_pars_fragment:bA,map_particle_fragment:wA,map_particle_pars_fragment:MA,metalnessmap_fragment:EA,metalnessmap_pars_fragment:TA,morphinstance_vertex:AA,morphcolor_vertex:CA,morphnormal_vertex:RA,morphtarget_pars_vertex:NA,morphtarget_vertex:PA,normal_fragment_begin:LA,normal_fragment_maps:DA,normal_pars_fragment:IA,normal_pars_vertex:UA,normal_vertex:FA,normalmap_pars_fragment:OA,clearcoat_normal_fragment_begin:kA,clearcoat_normal_fragment_maps:BA,clearcoat_pars_fragment:jA,iridescence_pars_fragment:zA,opaque_fragment:HA,packing:VA,premultiplied_alpha_fragment:GA,project_vertex:WA,dithering_fragment:XA,dithering_pars_fragment:qA,roughnessmap_fragment:$A,roughnessmap_pars_fragment:YA,shadowmap_pars_fragment:KA,shadowmap_pars_vertex:ZA,shadowmap_vertex:JA,shadowmask_pars_fragment:QA,skinbase_vertex:eC,skinning_pars_vertex:tC,skinning_vertex:nC,skinnormal_vertex:iC,specularmap_fragment:rC,specularmap_pars_fragment:sC,tonemapping_fragment:aC,tonemapping_pars_fragment:oC,transmission_fragment:lC,transmission_pars_fragment:cC,uv_pars_fragment:uC,uv_pars_vertex:dC,uv_vertex:fC,worldpos_vertex:hC,background_vert:pC,background_frag:mC,backgroundCube_vert:xC,backgroundCube_frag:gC,cube_vert:vC,cube_frag:_C,depth_vert:yC,depth_frag:SC,distance_vert:bC,distance_frag:wC,equirect_vert:MC,equirect_frag:EC,linedashed_vert:TC,linedashed_frag:AC,meshbasic_vert:CC,meshbasic_frag:RC,meshlambert_vert:NC,meshlambert_frag:PC,meshmatcap_vert:LC,meshmatcap_frag:DC,meshnormal_vert:IC,meshnormal_frag:UC,meshphong_vert:FC,meshphong_frag:OC,meshphysical_vert:kC,meshphysical_frag:BC,meshtoon_vert:jC,meshtoon_frag:zC,points_vert:HC,points_frag:VC,shadow_vert:GC,shadow_frag:WC,sprite_vert:XC,sprite_frag:qC},ve={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},xi={basic:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:ln([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:ln([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:ln([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:ln([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:ln([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:ln([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:ln([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:ln([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:ln([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:ln([ve.common,ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:ln([ve.lights,ve.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};xi.physical={uniforms:ln([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const wl={r:0,b:0,g:0},$C=new Tt,Ey=new Ge;Ey.set(-1,0,0,0,1,0,0,0,1);function YC(t,e,n,i,r,s){const a=new Ke(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function m(g){let _=g.isScene===!0?g.background:null;if(_&&_.isTexture){const y=g.backgroundBlurriness>0;_=e.get(_,y)}return _}function v(g){let _=!1;const y=m(g);y===null?x(a,l):y&&y.isColor&&(x(y,1),_=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function w(g,_){const y=m(_);y&&(y.isCubeTexture||y.mapping===Jc)?(u===void 0&&(u=new In(new Io(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:oa(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($C.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Ey),u.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ot,(d!==y||f!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new In(new tu(2,2),new Ei({name:"BackgroundMaterial",uniforms:oa(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,_){g.getRGB(wl,yy(t)),n.buffers.color.setClear(wl.r,wl.g,wl.b,_,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(a,l)},render:v,addToRenderList:w,dispose:h}}function KC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function l(P,I,K,J,k){let Z=!1;const z=f(P,J,K,I);s!==z&&(s=z,u(s.object)),Z=m(P,J,K,k),Z&&v(P,J,K,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(P,I,K,J),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function d(P){return t.deleteVertexArray(P)}function f(P,I,K,J){const k=J.wireframe===!0;let Z=i[I.id];Z===void 0&&(Z={},i[I.id]=Z);const z=P.isInstancedMesh===!0?P.id:0;let F=Z[z];F===void 0&&(F={},Z[z]=F);let Y=F[K.id];Y===void 0&&(Y={},F[K.id]=Y);let ee=Y[k];return ee===void 0&&(ee=p(c()),Y[k]=ee),ee}function p(P){const I=[],K=[],J=[];for(let k=0;k<n;k++)I[k]=0,K[k]=0,J[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:K,attributeDivisors:J,object:P,attributes:{},index:null}}function m(P,I,K,J){const k=s.attributes,Z=I.attributes;let z=0;const F=K.getAttributes();for(const Y in F)if(F[Y].location>=0){const re=k[Y];let se=Z[Y];if(se===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(se=P.instanceColor)),re===void 0||re.attribute!==se||se&&re.data!==se.data)return!0;z++}return s.attributesNum!==z||s.index!==J}function v(P,I,K,J){const k={},Z=I.attributes;let z=0;const F=K.getAttributes();for(const Y in F)if(F[Y].location>=0){let re=Z[Y];re===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const se={};se.attribute=re,re&&re.data&&(se.data=re.data),k[Y]=se,z++}s.attributes=k,s.attributesNum=z,s.index=J}function w(){const P=s.newAttributes;for(let I=0,K=P.length;I<K;I++)P[I]=0}function x(P){h(P,0)}function h(P,I){const K=s.newAttributes,J=s.enabledAttributes,k=s.attributeDivisors;K[P]=1,J[P]===0&&(t.enableVertexAttribArray(P),J[P]=1),k[P]!==I&&(t.vertexAttribDivisor(P,I),k[P]=I)}function g(){const P=s.newAttributes,I=s.enabledAttributes;for(let K=0,J=I.length;K<J;K++)I[K]!==P[K]&&(t.disableVertexAttribArray(K),I[K]=0)}function _(P,I,K,J,k,Z,z){z===!0?t.vertexAttribIPointer(P,I,K,k,Z):t.vertexAttribPointer(P,I,K,J,k,Z)}function y(P,I,K,J){w();const k=J.attributes,Z=K.getAttributes(),z=I.defaultAttributeValues;for(const F in Z){const Y=Z[F];if(Y.location>=0){let ee=k[F];if(ee===void 0&&(F==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),F==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),ee!==void 0){const re=ee.normalized,se=ee.itemSize,De=e.get(ee);if(De===void 0)continue;const ke=De.buffer,He=De.type,H=De.bytesPerElement,oe=He===t.INT||He===t.UNSIGNED_INT||ee.gpuType===bp;if(ee.isInterleavedBufferAttribute){const le=ee.data,Oe=le.stride,Ve=ee.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<Y.locationSize;Ie++)h(Y.location+Ie,le.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<Y.locationSize;Ie++)x(Y.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let Ie=0;Ie<Y.locationSize;Ie++)_(Y.location+Ie,se/Y.locationSize,He,re,Oe*H,(Ve+se/Y.locationSize*Ie)*H,oe)}else{if(ee.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)h(Y.location+le,ee.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let le=0;le<Y.locationSize;le++)x(Y.location+le);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let le=0;le<Y.locationSize;le++)_(Y.location+le,se/Y.locationSize,He,re,se*H,se/Y.locationSize*le*H,oe)}}else if(z!==void 0){const re=z[F];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(Y.location,re);break;case 3:t.vertexAttrib3fv(Y.location,re);break;case 4:t.vertexAttrib4fv(Y.location,re);break;default:t.vertexAttrib1fv(Y.location,re)}}}}g()}function M(){A();for(const P in i){const I=i[P];for(const K in I){const J=I[K];for(const k in J){const Z=J[k];for(const z in Z)d(Z[z].object),delete Z[z];delete J[k]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const I=i[P.id];for(const K in I){const J=I[K];for(const k in J){const Z=J[k];for(const z in Z)d(Z[z].object),delete Z[z];delete J[k]}}delete i[P.id]}function C(P){for(const I in i){const K=i[I];for(const J in K){const k=K[J];if(k[P.id]===void 0)continue;const Z=k[P.id];for(const z in Z)d(Z[z].object),delete Z[z];delete k[P.id]}}}function S(P){for(const I in i){const K=i[I],J=P.isInstancedMesh===!0?P.id:0,k=K[J];if(k!==void 0){for(const Z in k){const z=k[Z];for(const F in z)d(z[F].object),delete z[F];delete k[Z]}delete K[J],Object.keys(K).length===0&&delete i[I]}}}function A(){N(),a=!0,s!==r&&(s=r,u(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:A,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:w,enableAttribute:x,disableUnusedAttributes:g}}function ZC(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function l(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let m=0;m<d;m++)p+=u[m];n.update(p,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function JC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==ri&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const S=C===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ln&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==vi&&!S)}function c(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=c(u);d!==u&&(ze("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const f=n.logarithmicDepthBuffer===!0,p=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&p===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:y,maxSamples:M,samples:T}}function QC(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Or,l=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||r;return r=p,i=f.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,m){const v=f.clippingPlanes,w=f.clipIntersection,x=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||s&&!x)s?d(null):u();else{const g=s?0:i,_=g*4;let y=h.clippingState||null;c.value=y,y=d(v,p,_,m);for(let M=0;M!==_;++M)y[M]=n[M];h.clippingState=y,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=g}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,m,v){const w=f!==null?f.length:0;let x=null;if(w!==0){if(x=c.value,v!==!0||x===null){const h=m+w*4,g=p.matrixWorldInverse;l.getNormalMatrix(g),(x===null||x.length<h)&&(x=new Float32Array(h));for(let _=0,y=m;_!==w;++_,y+=4)a.copy(f[_]).applyMatrix4(g,l),a.normal.toArray(x,y),x[y+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}const hr=4,hx=[.125,.215,.35,.446,.526,.582],Br=20,e3=256,Pa=new wy,px=new Ke;let dd=null,fd=0,hd=0,pd=!1;const t3=new j;class mx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:l=t3}=s;dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,fd,hd),this._renderer.xr.enabled=pd,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===is||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Xi,format:ri,colorSpace:wc,depthBuffer:!1},r=xx(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xx(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n3(s)),this._blurMaterial=r3(s,e,n),this._ggxMaterial=i3(s,e,n)}return r}_compileMaterial(e){const n=new In(new Bn,e);this._renderer.compile(n,Pa)}_sceneToCubeUV(e,n,i,r,s){const c=new Pn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(px),f.toneMapping=bi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new In(new Io,new Tc({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let h=!1;const g=e.background;g?g.isColor&&(x.color.copy(g),e.background=null,h=!0):(x.color.copy(px),h=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(c.up.set(0,u[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[_],s.y,s.z)):y===1?(c.up.set(0,0,u[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[_],s.z)):(c.up.set(0,u[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[_]));const M=this._cubeSize;As(r,y*M,_>2?M:0,M,M),f.setRenderTarget(r),h&&f.render(w,c),f.render(e,c)}f.toneMapping=m,f.autoClear=p,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===is||e.mapping===sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gx());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;As(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Pa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),f=Math.sqrt(u*u-d*d),p=0+u*1.25,m=f*p,{_lodMax:v}=this,w=this._sizeLods[i],x=3*w*(i>v-hr?i-v+hr:0),h=4*(this._cubeSize-w);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=v-n,As(s,x,h,3*w,2*w),r.setRenderTarget(s),r.render(l,Pa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-i,As(e,x,h,3*w,2*w),r.setRenderTarget(e),r.render(l,Pa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[r];f.material=u;const p=u.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Br-1),w=s/v,x=isFinite(s)?1+Math.floor(d*w):Br;x>Br&&ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Br}`);const h=[];let g=0;for(let C=0;C<Br;++C){const S=C/w,A=Math.exp(-S*S/2);h.push(A),C===0?g+=A:C<x&&(g+=2*A)}for(let C=0;C<h.length;C++)h[C]=h[C]/g;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=h,p.latitudinal.value=a==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:_}=this;p.dTheta.value=v,p.mipInt.value=_-i;const y=this._sizeLods[r],M=3*y*(r>_-hr?r-_+hr:0),T=4*(this._cubeSize-y);As(n,M,T,3*y,2*y),c.setRenderTarget(n),c.render(f,Pa)}}function n3(t){const e=[],n=[],i=[];let r=t;const s=t-hr+1+hx.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);e.push(l);let c=1/l;a>t-hr?c=hx[a-t+hr-1]:a===0&&(c=0),n.push(c);const u=1/(l-2),d=-u,f=1+u,p=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,v=6,w=3,x=2,h=1,g=new Float32Array(w*v*m),_=new Float32Array(x*v*m),y=new Float32Array(h*v*m);for(let T=0;T<m;T++){const C=T%3*2/3-1,S=T>2?0:-1,A=[C,S,0,C+2/3,S,0,C+2/3,S+1,0,C,S,0,C+2/3,S+1,0,C,S+1,0];g.set(A,w*v*T),_.set(p,x*v*T);const N=[T,T,T,T,T,T];y.set(N,h*v*T)}const M=new Bn;M.setAttribute("position",new qn(g,w)),M.setAttribute("uv",new qn(_,x)),M.setAttribute("faceIndex",new qn(y,h)),i.push(new In(M,null)),r>hr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function xx(t,e,n){const i=new wi(t,e,n);return i.texture.mapping=Jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function i3(t,e,n){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function r3(t,e,n){const i=new Float32Array(Br),r=new j(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function gx(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function vx(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function nu(){return`

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
	`}class Ty extends wi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vy(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Io(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:oa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Bi});s.uniforms.tEquirect.value=n;const a=new In(r,s),l=n.minFilter;return n.minFilter===Gr&&(n.minFilter=sn),new uT(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function s3(t){let e=new WeakMap,n=new WeakMap,i=null;function r(p,m=!1){return p==null?null:m?a(p):s(p)}function s(p){if(p&&p.isTexture){const m=p.mapping;if(m===Ou||m===ku)if(e.has(p)){const v=e.get(p).texture;return l(v,p.mapping)}else{const v=p.image;if(v&&v.height>0){const w=new Ty(v.height);return w.fromEquirectangularTexture(t,p),e.set(p,w),p.addEventListener("dispose",u),l(w.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){const m=p.mapping,v=m===Ou||m===ku,w=m===is||m===sa;if(v||w){let x=n.get(p);const h=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==h)return i===null&&(i=new mx(t)),x=v?i.fromEquirectangular(p,x):i.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,n.set(p,x),x.texture;if(x!==void 0)return x.texture;{const g=p.image;return v&&g&&g.height>0||w&&g&&c(g)?(i===null&&(i=new mx(t)),x=v?i.fromEquirectangular(p):i.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,n.set(p,x),p.addEventListener("dispose",d),x.texture):null}}}return p}function l(p,m){return m===Ou?p.mapping=is:m===ku&&(p.mapping=sa),p}function c(p){let m=0;const v=6;for(let w=0;w<v;w++)p[w]!==void 0&&m++;return m===v}function u(p){const m=p.target;m.removeEventListener("dispose",u);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function d(p){const m=p.target;m.removeEventListener("dispose",d);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function a3(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&qs("WebGLRenderer: "+i+" extension not supported."),r}}}function o3(t,e,n,i){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function l(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function c(f){const p=f.attributes;for(const m in p)e.update(p[m],t.ARRAY_BUFFER)}function u(f){const p=[],m=f.index,v=f.attributes.position;let w=0;if(v===void 0)return;if(m!==null){const g=m.array;w=m.version;for(let _=0,y=g.length;_<y;_+=3){const M=g[_+0],T=g[_+1],C=g[_+2];p.push(M,T,T,C,C,M)}}else{const g=v.array;w=v.version;for(let _=0,y=g.length/3-1;_<y;_+=3){const M=_+0,T=_+1,C=_+2;p.push(M,T,T,C,C,M)}}const x=new(v.count>=65535?my:py)(p,1);x.version=w;const h=s.get(f);h&&e.remove(h),s.set(f,x)}function d(f){const p=s.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:l,update:c,getWireframeAttribute:d}}function l3(t,e,n){let i;function r(f){i=f}let s,a;function l(f){s=f.type,a=f.bytesPerElement}function c(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function u(f,p,m){m!==0&&(t.drawElementsInstanced(i,p,s,f*a,m),n.update(p,i,m))}function d(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,m);let w=0;for(let x=0;x<m;x++)w+=p[x];n.update(w,i,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=d}function c3(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function u3(t,e,n){const i=new WeakMap,r=new Mt;function s(a,l,c){const u=a.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(l);if(p===void 0||p.count!==f){let N=function(){S.dispose(),i.delete(l),l.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const v=l.morphAttributes.position!==void 0,w=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,h=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],_=l.morphAttributes.color||[];let y=0;v===!0&&(y=1),w===!0&&(y=2),x===!0&&(y=3);let M=l.attributes.position.count*y,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const C=new Float32Array(M*T*4*f),S=new dy(C,M,T,f);S.type=vi,S.needsUpdate=!0;const A=y*4;for(let P=0;P<f;P++){const I=h[P],K=g[P],J=_[P],k=M*T*4*P;for(let Z=0;Z<I.count;Z++){const z=Z*A;v===!0&&(r.fromBufferAttribute(I,Z),C[k+z+0]=r.x,C[k+z+1]=r.y,C[k+z+2]=r.z,C[k+z+3]=0),w===!0&&(r.fromBufferAttribute(K,Z),C[k+z+4]=r.x,C[k+z+5]=r.y,C[k+z+6]=r.z,C[k+z+7]=0),x===!0&&(r.fromBufferAttribute(J,Z),C[k+z+8]=r.x,C[k+z+9]=r.y,C[k+z+10]=r.z,C[k+z+11]=J.itemSize===4?r.w:1)}}p={count:f,texture:S,size:new Ze(M,T)},i.set(l,p),l.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let x=0;x<u.length;x++)v+=u[x];const w=l.morphTargetsRelative?1:1-v;c.getUniforms().setValue(t,"morphTargetBaseInfluence",w),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function d3(t,e,n,i,r){let s=new WeakMap;function a(u){const d=r.render.frame,f=u.geometry,p=e.get(u,f);if(s.get(p)!==d&&(e.update(p),s.set(p,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==d&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return p}function l(){s=new WeakMap}function c(u){const d=u.target;d.removeEventListener("dispose",c),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:l}}const f3={[Y_]:"LINEAR_TONE_MAPPING",[K_]:"REINHARD_TONE_MAPPING",[Z_]:"CINEON_TONE_MAPPING",[J_]:"ACES_FILMIC_TONE_MAPPING",[ey]:"AGX_TONE_MAPPING",[ty]:"NEUTRAL_TONE_MAPPING",[Q_]:"CUSTOM_TONE_MAPPING"};function h3(t,e,n,i,r,s){const a=new wi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new aa(e,n):void 0}),l=new wi(e,n,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),c=new Bn;c.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new pn([0,2,0,0,2,0],2));const u=new rT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new In(c,u),f=new wy(-1,1,1,-1,0,1);let p=null,m=null,v=!1,w,x=null,h=[],g=!1;this.setSize=function(_,y){a.setSize(_,y),l.setSize(_,y);for(let M=0;M<h.length;M++){const T=h[M];T.setSize&&T.setSize(_,y)}},this.setEffects=function(_){h=_,g=h.length>0&&h[0].isRenderPass===!0;const y=a.width,M=a.height;for(let T=0;T<h.length;T++){const C=h[T];C.setSize&&C.setSize(y,M)}},this.begin=function(_,y){if(v||_.toneMapping===bi&&h.length===0)return!1;if(x=y,y!==null){const M=y.width,T=y.height;(a.width!==M||a.height!==T)&&this.setSize(M,T)}return g===!1&&_.setRenderTarget(a),w=_.toneMapping,_.toneMapping=bi,!0},this.hasRenderPass=function(){return g},this.end=function(_,y){_.toneMapping=w,v=!0;let M=a,T=l;for(let C=0;C<h.length;C++){const S=h[C];if(S.enabled!==!1&&(S.render(_,T,M,y),S.needsSwap!==!1)){const A=M;M=T,T=A}}if(p!==_.outputColorSpace||m!==_.toneMapping){p=_.outputColorSpace,m=_.toneMapping,u.defines={},Qe.getTransfer(p)===ot&&(u.defines.SRGB_TRANSFER="");const C=f3[m];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(x),_.render(d,f),x=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),l.dispose(),c.dispose(),u.dispose()}}const Ay=new fn,uh=new aa(1,1),Cy=new dy,Ry=new I2,Ny=new vy,_x=[],yx=[],Sx=new Float32Array(16),bx=new Float32Array(9),wx=new Float32Array(4);function xa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_x[r];if(s===void 0&&(s=new Float32Array(r),_x[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function iu(t,e){let n=yx[e];n===void 0&&(n=new Int32Array(e),yx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function p3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function m3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function x3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function g3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function v3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;wx.set(i),t.uniformMatrix2fv(this.addr,!1,wx),Ht(n,i)}}function _3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;bx.set(i),t.uniformMatrix3fv(this.addr,!1,bx),Ht(n,i)}}function y3(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;Sx.set(i),t.uniformMatrix4fv(this.addr,!1,Sx),Ht(n,i)}}function S3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function b3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function w3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function M3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function E3(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function T3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function A3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function C3(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function R3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(uh.compareFunction=n.isReversedDepthBuffer()?Rp:Cp,s=uh):s=Ay,n.setTexture2D(e||s,r)}function N3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ry,r)}function P3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ny,r)}function L3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Cy,r)}function D3(t){switch(t){case 5126:return p3;case 35664:return m3;case 35665:return x3;case 35666:return g3;case 35674:return v3;case 35675:return _3;case 35676:return y3;case 5124:case 35670:return S3;case 35667:case 35671:return b3;case 35668:case 35672:return w3;case 35669:case 35673:return M3;case 5125:return E3;case 36294:return T3;case 36295:return A3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return R3;case 35679:case 36299:case 36307:return N3;case 35680:case 36300:case 36308:case 36293:return P3;case 36289:case 36303:case 36311:case 36292:return L3}}function I3(t,e){t.uniform1fv(this.addr,e)}function U3(t,e){const n=xa(e,this.size,2);t.uniform2fv(this.addr,n)}function F3(t,e){const n=xa(e,this.size,3);t.uniform3fv(this.addr,n)}function O3(t,e){const n=xa(e,this.size,4);t.uniform4fv(this.addr,n)}function k3(t,e){const n=xa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function B3(t,e){const n=xa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function j3(t,e){const n=xa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function z3(t,e){t.uniform1iv(this.addr,e)}function H3(t,e){t.uniform2iv(this.addr,e)}function V3(t,e){t.uniform3iv(this.addr,e)}function G3(t,e){t.uniform4iv(this.addr,e)}function W3(t,e){t.uniform1uiv(this.addr,e)}function X3(t,e){t.uniform2uiv(this.addr,e)}function q3(t,e){t.uniform3uiv(this.addr,e)}function $3(t,e){t.uniform4uiv(this.addr,e)}function Y3(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=uh:a=Ay;for(let l=0;l!==r;++l)n.setTexture2D(e[l]||a,s[l])}function K3(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ry,s[a])}function Z3(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Ny,s[a])}function J3(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Cy,s[a])}function Q3(t){switch(t){case 5126:return I3;case 35664:return U3;case 35665:return F3;case 35666:return O3;case 35674:return k3;case 35675:return B3;case 35676:return j3;case 5124:case 35670:return z3;case 35667:case 35671:return H3;case 35668:case 35672:return V3;case 35669:case 35673:return G3;case 5125:return W3;case 36294:return X3;case 36295:return q3;case 36296:return $3;case 35678:case 36198:case 36298:case 36306:case 35682:return Y3;case 35679:case 36299:case 36307:return K3;case 35680:case 36300:case 36308:case 36293:return Z3;case 36289:case 36303:case 36311:case 36292:return J3}}class eR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=D3(n.type)}}class tR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Q3(n.type)}}class nR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const md=/(\w+)(\])?(\[|\.)?/g;function Mx(t,e){t.seq.push(e),t.map[e.id]=e}function iR(t,e,n){const i=t.name,r=i.length;for(md.lastIndex=0;;){const s=md.exec(i),a=md.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){Mx(n,u===void 0?new eR(l,t,e):new tR(l,t,e));break}else{let f=n.map[l];f===void 0&&(f=new nR(l),Mx(n,f)),n=f}}}class Xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);iR(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Ex(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rR=37297;let sR=0;function aR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const Tx=new Ge;function oR(t){Qe._getMatrix(Tx,Qe.workingColorSpace,t);const e=`mat3( ${Tx.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case Mc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ax(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+aR(t.getShaderSource(e),l)}else return s}function lR(t,e){const n=oR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const cR={[Y_]:"Linear",[K_]:"Reinhard",[Z_]:"Cineon",[J_]:"ACESFilmic",[ey]:"AgX",[ty]:"Neutral",[Q_]:"Custom"};function uR(t,e){const n=cR[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ml=new j;function dR(){Qe.getLuminanceCoefficients(Ml);const t=Ml.x.toFixed(4),e=Ml.y.toFixed(4),n=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function hR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function pR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function Ba(t){return t!==""}function Cx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mR=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(t){return t.replace(mR,gR)}const xR=new Map;function gR(t,e){let n=$e[e];if(n===void 0){const i=xR.get(e);if(i!==void 0)n=$e[i],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dh(n)}const vR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nx(t){return t.replace(vR,_R)}function _R(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Px(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const yR={[zl]:"SHADOWMAP_TYPE_PCF",[Oa]:"SHADOWMAP_TYPE_VSM"};function SR(t){return yR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bR={[is]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE",[Jc]:"ENVMAP_TYPE_CUBE_UV"};function wR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":bR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const MR={[sa]:"ENVMAP_MODE_REFRACTION"};function ER(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":MR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TR={[Sp]:"ENVMAP_BLENDING_MULTIPLY",[h2]:"ENVMAP_BLENDING_MIX",[p2]:"ENVMAP_BLENDING_ADD"};function AR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":TR[t.combine]||"ENVMAP_BLENDING_NONE"}function CR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function RR(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=SR(n),u=wR(n),d=ER(n),f=AR(n),p=CR(n),m=fR(n),v=hR(s),w=r.createProgram();let x,h,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ba).join(`
`),x.length>0&&(x+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ba).join(`
`),h.length>0&&(h+=`
`)):(x=[Px(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),h=[Px(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?$e.tonemapping_pars_fragment:"",n.toneMapping!==bi?uR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,lR("linearToOutputTexel",n.outputColorSpace),dR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ba).join(`
`)),a=dh(a),a=Cx(a,n),a=Rx(a,n),l=dh(l),l=Cx(l,n),l=Rx(l,n),a=Nx(a),l=Nx(l),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,h=["#define varying in",n.glslVersion===B0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===B0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=g+x+a,y=g+h+l,M=Ex(r,r.VERTEX_SHADER,_),T=Ex(r,r.FRAGMENT_SHADER,y);r.attachShader(w,M),r.attachShader(w,T),n.index0AttributeName!==void 0?r.bindAttribLocation(w,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function C(P){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(w)||"",K=r.getShaderInfoLog(M)||"",J=r.getShaderInfoLog(T)||"",k=I.trim(),Z=K.trim(),z=J.trim();let F=!0,Y=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(F=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,w,M,T);else{const ee=Ax(r,M,"vertex"),re=Ax(r,T,"fragment");rt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+ee+`
`+re)}else k!==""?ze("WebGLProgram: Program Info Log:",k):(Z===""||z==="")&&(Y=!1);Y&&(P.diagnostics={runnable:F,programLog:k,vertexShader:{log:Z,prefix:x},fragmentShader:{log:z,prefix:h}})}r.deleteShader(M),r.deleteShader(T),S=new Xl(r,w),A=pR(r,w)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(w,rR)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sR++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=M,this.fragmentShader=T,this}let NR=0;class PR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new LR(e),n.set(e,i)),i}}class LR{constructor(e){this.id=NR++,this.code=e,this.usedTimes=0}}function DR(t){return t===rs||t===Sc||t===bc}function IR(t,e,n,i,r,s){const a=new fy,l=new PR,c=new Set,u=[],d=new Map,f=i.logarithmicDepthBuffer;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function w(S,A,N,P,I,K){const J=P.fog,k=I.geometry,Z=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?P.environment:null,z=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,F=e.get(S.envMap||Z,z),Y=F&&F.mapping===Jc?F.image.height:null,ee=m[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&ze("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const re=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=re!==void 0?re.length:0;let De=0;k.morphAttributes.position!==void 0&&(De=1),k.morphAttributes.normal!==void 0&&(De=2),k.morphAttributes.color!==void 0&&(De=3);let ke,He,H,oe;if(ee){const Te=xi[ee];ke=Te.vertexShader,He=Te.fragmentShader}else{ke=S.vertexShader,He=S.fragmentShader;const Te=l.getVertexShaderStage(S),Ct=l.getFragmentShaderStage(S);l.update(S,Te,Ct),H=Te.id,oe=Ct.id}const le=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),Ve=I.isInstancedMesh===!0,Ie=I.isBatchedMesh===!0,nt=!!S.map,qe=!!S.matcap,V=!!F,je=!!S.aoMap,xe=!!S.lightMap,tt=!!S.bumpMap&&S.wireframe===!1,ct=!!S.normalMap,ht=!!S.displacementMap,Ut=!!S.emissiveMap,yt=!!S.metalnessMap,pt=!!S.roughnessMap,U=S.anisotropy>0,gn=S.clearcoat>0,at=S.dispersion>0,R=S.iridescence>0,b=S.sheen>0,B=S.transmission>0,q=U&&!!S.anisotropyMap,Q=gn&&!!S.clearcoatMap,ue=gn&&!!S.clearcoatNormalMap,fe=gn&&!!S.clearcoatRoughnessMap,te=R&&!!S.iridescenceMap,ie=R&&!!S.iridescenceThicknessMap,he=b&&!!S.sheenColorMap,Re=b&&!!S.sheenRoughnessMap,ge=!!S.specularMap,pe=!!S.specularColorMap,Fe=!!S.specularIntensityMap,Be=B&&!!S.transmissionMap,We=B&&!!S.thicknessMap,L=!!S.gradientMap,de=!!S.alphaMap,ne=S.alphaTest>0,me=!!S.alphaHash,be=!!S.extensions;let ae=bi;S.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ae=t.toneMapping);const Ce={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:ke,fragmentShader:He,defines:S.defines,customVertexShaderID:H,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&I._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&I.instanceColor!==null,instancingMorph:Ve&&I.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Qe.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:nt,matcap:qe,envMap:V,envMapMode:V&&F.mapping,envMapCubeUVHeight:Y,aoMap:je,lightMap:xe,bumpMap:tt,normalMap:ct,displacementMap:ht,emissiveMap:Ut,normalMapObjectSpace:ct&&S.normalMapType===g2,normalMapTangentSpace:ct&&S.normalMapType===oh,packedNormalMap:ct&&S.normalMapType===oh&&DR(S.normalMap.format),metalnessMap:yt,roughnessMap:pt,anisotropy:U,anisotropyMap:q,clearcoat:gn,clearcoatMap:Q,clearcoatNormalMap:ue,clearcoatRoughnessMap:fe,dispersion:at,iridescence:R,iridescenceMap:te,iridescenceThicknessMap:ie,sheen:b,sheenColorMap:he,sheenRoughnessMap:Re,specularMap:ge,specularColorMap:pe,specularIntensityMap:Fe,transmission:B,transmissionMap:Be,thicknessMap:We,gradientMap:L,opaque:S.transparent===!1&&S.blending===Xs&&S.alphaToCoverage===!1,alphaMap:de,alphaTest:ne,alphaHash:me,combine:S.combine,mapUv:nt&&v(S.map.channel),aoMapUv:je&&v(S.aoMap.channel),lightMapUv:xe&&v(S.lightMap.channel),bumpMapUv:tt&&v(S.bumpMap.channel),normalMapUv:ct&&v(S.normalMap.channel),displacementMapUv:ht&&v(S.displacementMap.channel),emissiveMapUv:Ut&&v(S.emissiveMap.channel),metalnessMapUv:yt&&v(S.metalnessMap.channel),roughnessMapUv:pt&&v(S.roughnessMap.channel),anisotropyMapUv:q&&v(S.anisotropyMap.channel),clearcoatMapUv:Q&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&v(S.sheenRoughnessMap.channel),specularMapUv:ge&&v(S.specularMap.channel),specularColorMapUv:pe&&v(S.specularColorMap.channel),specularIntensityMapUv:Fe&&v(S.specularIntensityMap.channel),transmissionMapUv:Be&&v(S.transmissionMap.channel),thicknessMapUv:We&&v(S.thicknessMap.channel),alphaMapUv:de&&v(S.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(ct||U),vertexNormals:!!k.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!k.attributes.uv&&(nt||de),fog:!!J,useFog:S.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||k.attributes.normal===void 0&&ct===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Oe,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:De,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ae,decodeVideoTexture:nt&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ot,decodeVideoTextureEmissive:Ut&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Di,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&S.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function x(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)A.push(N),A.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(h(A,S),g(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function h(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function g(S,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function _(S){const A=m[S.type];let N;if(A){const P=xi[A];N=tT.clone(P.uniforms)}else N=S.uniforms;return N}function y(S,A){let N=d.get(A);return N!==void 0?++N.usedTimes:(N=new RR(t,A,S,r),u.push(N),d.set(A,N)),N}function M(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),d.delete(S.cacheKey),S.destroy()}}function T(S){l.remove(S)}function C(){l.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:u,dispose:C}}function UR(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,c){t.get(a)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function FR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Lx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Dx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function l(p,m,v,w,x,h){let g=t[e];return g===void 0?(g={id:p.id,object:p,geometry:m,material:v,materialVariant:a(p),groupOrder:w,renderOrder:p.renderOrder,z:x,group:h},t[e]=g):(g.id=p.id,g.object=p,g.geometry=m,g.material=v,g.materialVariant=a(p),g.groupOrder=w,g.renderOrder=p.renderOrder,g.z=x,g.group=h),e++,g}function c(p,m,v,w,x,h){const g=l(p,m,v,w,x,h);v.transmission>0?i.push(g):v.transparent===!0?r.push(g):n.push(g)}function u(p,m,v,w,x,h){const g=l(p,m,v,w,x,h);v.transmission>0?i.unshift(g):v.transparent===!0?r.unshift(g):n.unshift(g)}function d(p,m,v){n.length>1&&n.sort(p||FR),i.length>1&&i.sort(m||Lx),r.length>1&&r.sort(m||Lx),v&&(n.reverse(),i.reverse(),r.reverse())}function f(){for(let p=e,m=t.length;p<m;p++){const v=t[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:f,sort:d}}function OR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Dx,t.set(i,[a])):r>=s.length?(a=new Dx,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function kR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Ke};break;case"SpotLight":n={position:new j,direction:new j,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function BR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jR=0;function zR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function HR(t){const e=new kR,n=BR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const r=new j,s=new Tt,a=new Tt;function l(u){let d=0,f=0,p=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,v=0,w=0,x=0,h=0,g=0,_=0,y=0,M=0,T=0,C=0;u.sort(zR);for(let A=0,N=u.length;A<N;A++){const P=u[A],I=P.color,K=P.intensity,J=P.distance;let k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===rs?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)d+=I.r*K,f+=I.g*K,p+=I.b*K;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],K);C++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,F=n.get(P);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,i.directionalShadow[m]=F,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=P.shadow.matrix,g++}i.directional[m]=Z,m++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(I).multiplyScalar(K),Z.distance=J,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[w]=Z;const z=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,z.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[w]=z.matrix,P.castShadow){const F=n.get(P);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,i.spotShadow[w]=F,i.spotShadowMap[w]=k,y++}w++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(I).multiplyScalar(K),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=Z,x++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const z=P.shadow,F=n.get(P);F.shadowIntensity=z.intensity,F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,F.shadowCameraNear=z.camera.near,F.shadowCameraFar=z.camera.far,i.pointShadow[v]=F,i.pointShadowMap[v]=k,i.pointShadowMatrix[v]=P.shadow.matrix,_++}i.point[v]=Z,v++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(K),Z.groundColor.copy(P.groundColor).multiplyScalar(K),i.hemi[h]=Z,h++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const S=i.hash;(S.directionalLength!==m||S.pointLength!==v||S.spotLength!==w||S.rectAreaLength!==x||S.hemiLength!==h||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==y||S.numSpotMaps!==M||S.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=w,i.rectArea.length=x,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+M-T,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,S.directionalLength=m,S.pointLength=v,S.spotLength=w,S.rectAreaLength=x,S.hemiLength=h,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=y,S.numSpotMaps=M,S.numLightProbes=C,i.version=jR++)}function c(u,d){let f=0,p=0,m=0,v=0,w=0;const x=d.matrixWorldInverse;for(let h=0,g=u.length;h<g;h++){const _=u[h];if(_.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),f++}else if(_.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),m++}else if(_.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),a.identity(),s.copy(_.matrixWorld),s.premultiply(x),a.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(x),p++}else if(_.isHemisphereLight){const y=i.hemi[w];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(x),w++}}}return{setup:l,setupView:c,state:i}}function Ix(t){const e=new HR(t),n=[],i=[],r=[];function s(p){f.camera=p,n.length=0,i.length=0,r.length=0}function a(p){n.push(p)}function l(p){i.push(p)}function c(p){r.push(p)}function u(){e.setup(n)}function d(p){e.setupView(n,p)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function VR(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new Ix(t),e.set(r,[l])):s>=a.length?(l=new Ix(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const GR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,XR=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],qR=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Ux=new Tt,La=new j,xd=new j;function $R(t,e,n){let i=new Pp;const r=new Ze,s=new Ze,a=new Mt,l=new sT,c=new aT,u={},d=n.maxTextureSize,f={[Er]:En,[En]:Er,[Di]:Di},p=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:GR,fragmentShader:WR}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new Bn;v.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new In(v,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zl;let h=this.type;this.render=function(T,C,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===$E&&(ze("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zl);const A=t.getRenderTarget(),N=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),I=t.state;I.setBlending(Bi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const K=h!==this.type;K&&C.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(k=>k.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,k=T.length;J<k;J++){const Z=T[J],z=Z.shadow;if(z===void 0){ze("WebGLShadowMap:",Z,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const F=z.getFrameExtents();r.multiply(F),s.copy(z.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/F.x),r.x=s.x*F.x,z.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/F.y),r.y=s.y*F.y,z.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||K===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Oa){if(Z.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new wi(r.x,r.y,{format:rs,type:Xi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),z.map.texture.name=Z.name+".shadowMap",z.map.depthTexture=new aa(r.x,r.y,vi),z.map.depthTexture.name=Z.name+".shadowMapDepth",z.map.depthTexture.format=qi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=$t,z.map.depthTexture.magFilter=$t}else Z.isPointLight?(z.map=new Ty(r.x),z.map.depthTexture=new Q2(r.x,Mi)):(z.map=new wi(r.x,r.y),z.map.depthTexture=new aa(r.x,r.y,Mi)),z.map.depthTexture.name=Z.name+".shadowMap",z.map.depthTexture.format=qi,this.type===zl?(z.map.depthTexture.compareFunction=Y?Rp:Cp,z.map.depthTexture.minFilter=sn,z.map.depthTexture.magFilter=sn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=$t,z.map.depthTexture.magFilter=$t);z.camera.updateProjectionMatrix()}const ee=z.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<ee;re++){if(z.map.isWebGLCubeRenderTarget)t.setRenderTarget(z.map,re),t.clear();else{re===0&&(t.setRenderTarget(z.map),t.clear());const se=z.getViewport(re);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),I.viewport(a)}if(Z.isPointLight){const se=z.camera,De=z.matrix,ke=Z.distance||se.far;ke!==se.far&&(se.far=ke,se.updateProjectionMatrix()),La.setFromMatrixPosition(Z.matrixWorld),se.position.copy(La),xd.copy(se.position),xd.add(XR[re]),se.up.copy(qR[re]),se.lookAt(xd),se.updateMatrixWorld(),De.makeTranslation(-La.x,-La.y,-La.z),Ux.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Ux,se.coordinateSystem,se.reversedDepth)}else z.updateMatrices(Z);i=z.getFrustum(),y(C,S,z.camera,Z,this.type)}z.isPointLightShadow!==!0&&this.type===Oa&&g(z,S),z.needsUpdate=!1}h=this.type,x.needsUpdate=!1,t.setRenderTarget(A,N,P)};function g(T,C){const S=e.update(w);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new wi(r.x,r.y,{format:rs,type:Xi})),p.uniforms.shadow_pass.value=T.map.depthTexture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,S,p,w,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,S,m,w,null)}function _(T,C,S,A){let N=null;const P=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)N=P;else if(N=S.isPointLight===!0?c:l,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const I=N.uuid,K=C.uuid;let J=u[I];J===void 0&&(J={},u[I]=J);let k=J[K];k===void 0&&(k=N.clone(),J[K]=k,C.addEventListener("dispose",M)),N=k}if(N.visible=C.visible,N.wireframe=C.wireframe,A===Oa?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:f[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,S.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const I=t.properties.get(N);I.light=S}return N}function y(T,C,S,A,N){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Oa)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const K=e.update(T),J=T.material;if(Array.isArray(J)){const k=K.groups;for(let Z=0,z=k.length;Z<z;Z++){const F=k[Z],Y=J[F.materialIndex];if(Y&&Y.visible){const ee=_(T,Y,A,N);T.onBeforeShadow(t,T,C,S,K,ee,F),t.renderBufferDirect(S,null,K,ee,T,F),T.onAfterShadow(t,T,C,S,K,ee,F)}}}else if(J.visible){const k=_(T,J,A,N);T.onBeforeShadow(t,T,C,S,K,k,null),t.renderBufferDirect(S,null,K,k,T,null),T.onAfterShadow(t,T,C,S,K,k,null)}}const I=T.children;for(let K=0,J=I.length;K<J;K++)y(I[K],C,S,A,N)}function M(T){T.target.removeEventListener("dispose",M);for(const S in u){const A=u[S],N=T.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function YR(t,e){function n(){let L=!1;const de=new Mt;let ne=null;const me=new Mt(0,0,0,0);return{setMask:function(be){ne!==be&&!L&&(t.colorMask(be,be,be,be),ne=be)},setLocked:function(be){L=be},setClear:function(be,ae,Ce,Te,Ct){Ct===!0&&(be*=Te,ae*=Te,Ce*=Te),de.set(be,ae,Ce,Te),me.equals(de)===!1&&(t.clearColor(be,ae,Ce,Te),me.copy(de))},reset:function(){L=!1,ne=null,me.set(-1,0,0,0)}}}function i(){let L=!1,de=!1,ne=null,me=null,be=null;return{setReversed:function(ae){if(de!==ae){const Ce=e.get("EXT_clip_control");ae?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),de=ae;const Te=be;be=null,this.setClear(Te)}},getReversed:function(){return de},setTest:function(ae){ae?le(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(ae){ne!==ae&&!L&&(t.depthMask(ae),ne=ae)},setFunc:function(ae){if(de&&(ae=A2[ae]),me!==ae){switch(ae){case bf:t.depthFunc(t.NEVER);break;case wf:t.depthFunc(t.ALWAYS);break;case Mf:t.depthFunc(t.LESS);break;case ra:t.depthFunc(t.LEQUAL);break;case Ef:t.depthFunc(t.EQUAL);break;case Tf:t.depthFunc(t.GEQUAL);break;case Af:t.depthFunc(t.GREATER);break;case Cf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=ae}},setLocked:function(ae){L=ae},setClear:function(ae){be!==ae&&(be=ae,de&&(ae=1-ae),t.clearDepth(ae))},reset:function(){L=!1,ne=null,me=null,be=null,de=!1}}}function r(){let L=!1,de=null,ne=null,me=null,be=null,ae=null,Ce=null,Te=null,Ct=null;return{setTest:function(mt){L||(mt?le(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(mt){de!==mt&&!L&&(t.stencilMask(mt),de=mt)},setFunc:function(mt,ci,ui){(ne!==mt||me!==ci||be!==ui)&&(t.stencilFunc(mt,ci,ui),ne=mt,me=ci,be=ui)},setOp:function(mt,ci,ui){(ae!==mt||Ce!==ci||Te!==ui)&&(t.stencilOp(mt,ci,ui),ae=mt,Ce=ci,Te=ui)},setLocked:function(mt){L=mt},setClear:function(mt){Ct!==mt&&(t.clearStencil(mt),Ct=mt)},reset:function(){L=!1,de=null,ne=null,me=null,be=null,ae=null,Ce=null,Te=null,Ct=null}}}const s=new n,a=new i,l=new r,c=new WeakMap,u=new WeakMap;let d={},f={},p={},m=new WeakMap,v=[],w=null,x=!1,h=null,g=null,_=null,y=null,M=null,T=null,C=null,S=new Ke(0,0,0),A=0,N=!1,P=null,I=null,K=null,J=null,k=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,F=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=F>=1):Y.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=F>=2);let ee=null,re={};const se=t.getParameter(t.SCISSOR_BOX),De=t.getParameter(t.VIEWPORT),ke=new Mt().fromArray(se),He=new Mt().fromArray(De);function H(L,de,ne,me){const be=new Uint8Array(4),ae=t.createTexture();t.bindTexture(L,ae),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ce=0;Ce<ne;Ce++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(de+Ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return ae}const oe={};oe[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),le(t.DEPTH_TEST),a.setFunc(ra),tt(!1),ct(I0),le(t.CULL_FACE),je(Bi);function le(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Oe(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Ve(L,de){return p[L]!==de?(t.bindFramebuffer(L,de),p[L]=de,L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=de),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Ie(L,de){let ne=v,me=!1;if(L){ne=m.get(de),ne===void 0&&(ne=[],m.set(de,ne));const be=L.textures;if(ne.length!==be.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Ce=be.length;ae<Ce;ae++)ne[ae]=t.COLOR_ATTACHMENT0+ae;ne.length=be.length,me=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,me=!0);me&&t.drawBuffers(ne)}function nt(L){return w!==L?(t.useProgram(L),w=L,!0):!1}const qe={[kr]:t.FUNC_ADD,[KE]:t.FUNC_SUBTRACT,[ZE]:t.FUNC_REVERSE_SUBTRACT};qe[JE]=t.MIN,qe[QE]=t.MAX;const V={[e2]:t.ZERO,[t2]:t.ONE,[n2]:t.SRC_COLOR,[yf]:t.SRC_ALPHA,[l2]:t.SRC_ALPHA_SATURATE,[a2]:t.DST_COLOR,[r2]:t.DST_ALPHA,[i2]:t.ONE_MINUS_SRC_COLOR,[Sf]:t.ONE_MINUS_SRC_ALPHA,[o2]:t.ONE_MINUS_DST_COLOR,[s2]:t.ONE_MINUS_DST_ALPHA,[c2]:t.CONSTANT_COLOR,[u2]:t.ONE_MINUS_CONSTANT_COLOR,[d2]:t.CONSTANT_ALPHA,[f2]:t.ONE_MINUS_CONSTANT_ALPHA};function je(L,de,ne,me,be,ae,Ce,Te,Ct,mt){if(L===Bi){x===!0&&(Oe(t.BLEND),x=!1);return}if(x===!1&&(le(t.BLEND),x=!0),L!==YE){if(L!==h||mt!==N){if((g!==kr||M!==kr)&&(t.blendEquation(t.FUNC_ADD),g=kr,M=kr),mt)switch(L){case Xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _f:t.blendFunc(t.ONE,t.ONE);break;case U0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case F0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:rt("WebGLState: Invalid blending: ",L);break}else switch(L){case Xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _f:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case U0:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case F0:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",L);break}_=null,y=null,T=null,C=null,S.set(0,0,0),A=0,h=L,N=mt}return}be=be||de,ae=ae||ne,Ce=Ce||me,(de!==g||be!==M)&&(t.blendEquationSeparate(qe[de],qe[be]),g=de,M=be),(ne!==_||me!==y||ae!==T||Ce!==C)&&(t.blendFuncSeparate(V[ne],V[me],V[ae],V[Ce]),_=ne,y=me,T=ae,C=Ce),(Te.equals(S)===!1||Ct!==A)&&(t.blendColor(Te.r,Te.g,Te.b,Ct),S.copy(Te),A=Ct),h=L,N=!1}function xe(L,de){L.side===Di?Oe(t.CULL_FACE):le(t.CULL_FACE);let ne=L.side===En;de&&(ne=!ne),tt(ne),L.blending===Xs&&L.transparent===!1?je(Bi):je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const me=L.stencilWrite;l.setTest(me),me&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ut(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function tt(L){P!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),P=L)}function ct(L){L!==XE?(le(t.CULL_FACE),L!==I&&(L===I0?t.cullFace(t.BACK):L===qE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),I=L}function ht(L){L!==K&&(z&&t.lineWidth(L),K=L)}function Ut(L,de,ne){L?(le(t.POLYGON_OFFSET_FILL),(J!==de||k!==ne)&&(J=de,k=ne,a.getReversed()&&(de=-de),t.polygonOffset(de,ne))):Oe(t.POLYGON_OFFSET_FILL)}function yt(L){L?le(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function pt(L){L===void 0&&(L=t.TEXTURE0+Z-1),ee!==L&&(t.activeTexture(L),ee=L)}function U(L,de,ne){ne===void 0&&(ee===null?ne=t.TEXTURE0+Z-1:ne=ee);let me=re[ne];me===void 0&&(me={type:void 0,texture:void 0},re[ne]=me),(me.type!==L||me.texture!==de)&&(ee!==ne&&(t.activeTexture(ne),ee=ne),t.bindTexture(L,de||oe[L]),me.type=L,me.texture=de)}function gn(){const L=re[ee];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function at(){try{t.compressedTexImage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function b(){try{t.texSubImage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function B(){try{t.texSubImage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function ue(){try{t.texStorage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function fe(){try{t.texStorage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function te(){try{t.texImage2D(...arguments)}catch(L){rt("WebGLState:",L)}}function ie(){try{t.texImage3D(...arguments)}catch(L){rt("WebGLState:",L)}}function he(L){return f[L]!==void 0?f[L]:t.getParameter(L)}function Re(L,de){f[L]!==de&&(t.pixelStorei(L,de),f[L]=de)}function ge(L){ke.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ke.copy(L))}function pe(L){He.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),He.copy(L))}function Fe(L,de){let ne=u.get(de);ne===void 0&&(ne=new WeakMap,u.set(de,ne));let me=ne.get(L);me===void 0&&(me=t.getUniformBlockIndex(de,L.name),ne.set(L,me))}function Be(L,de){const me=u.get(de).get(L);c.get(de)!==me&&(t.uniformBlockBinding(de,me,L.__bindingPointIndex),c.set(de,me))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),d={},f={},ee=null,re={},p={},m=new WeakMap,v=[],w=null,x=!1,h=null,g=null,_=null,y=null,M=null,T=null,C=null,S=new Ke(0,0,0),A=0,N=!1,P=null,I=null,K=null,J=null,k=null,ke.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:le,disable:Oe,bindFramebuffer:Ve,drawBuffers:Ie,useProgram:nt,setBlending:je,setMaterial:xe,setFlipSided:tt,setCullFace:ct,setLineWidth:ht,setPolygonOffset:Ut,setScissorTest:yt,activeTexture:pt,bindTexture:U,unbindTexture:gn,compressedTexImage2D:at,compressedTexImage3D:R,texImage2D:te,texImage3D:ie,pixelStorei:Re,getParameter:he,updateUBOMapping:Fe,uniformBlockBinding:Be,texStorage2D:ue,texStorage3D:fe,texSubImage2D:b,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:ge,viewport:pe,reset:We}}function KR(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ze,d=new WeakMap,f=new Set;let p;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(R,b){return v?new OffscreenCanvas(R,b):Ec("canvas")}function x(R,b,B){let q=1;const Q=at(R);if((Q.width>B||Q.height>B)&&(q=B/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor(q*Q.width),fe=Math.floor(q*Q.height);p===void 0&&(p=w(ue,fe));const te=b?w(ue,fe):p;return te.width=ue,te.height=fe,te.getContext("2d").drawImage(R,0,0,ue,fe),ze("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+fe+")."),te}else return"data"in R&&ze("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function h(R){return R.generateMipmaps}function g(R){t.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,b,B,q,Q,ue=!1){if(R!==null){if(t[R]!==void 0)return t[R];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=b;if(b===t.RED&&(B===t.FLOAT&&(te=t.R32F),B===t.HALF_FLOAT&&(te=t.R16F),B===t.UNSIGNED_BYTE&&(te=t.R8),B===t.UNSIGNED_SHORT&&fe&&(te=fe.R16_EXT),B===t.SHORT&&fe&&(te=fe.R16_SNORM_EXT)),b===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(te=t.R8UI),B===t.UNSIGNED_SHORT&&(te=t.R16UI),B===t.UNSIGNED_INT&&(te=t.R32UI),B===t.BYTE&&(te=t.R8I),B===t.SHORT&&(te=t.R16I),B===t.INT&&(te=t.R32I)),b===t.RG&&(B===t.FLOAT&&(te=t.RG32F),B===t.HALF_FLOAT&&(te=t.RG16F),B===t.UNSIGNED_BYTE&&(te=t.RG8),B===t.UNSIGNED_SHORT&&fe&&(te=fe.RG16_EXT),B===t.SHORT&&fe&&(te=fe.RG16_SNORM_EXT)),b===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(te=t.RG8UI),B===t.UNSIGNED_SHORT&&(te=t.RG16UI),B===t.UNSIGNED_INT&&(te=t.RG32UI),B===t.BYTE&&(te=t.RG8I),B===t.SHORT&&(te=t.RG16I),B===t.INT&&(te=t.RG32I)),b===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(te=t.RGB8UI),B===t.UNSIGNED_SHORT&&(te=t.RGB16UI),B===t.UNSIGNED_INT&&(te=t.RGB32UI),B===t.BYTE&&(te=t.RGB8I),B===t.SHORT&&(te=t.RGB16I),B===t.INT&&(te=t.RGB32I)),b===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(te=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(te=t.RGBA16UI),B===t.UNSIGNED_INT&&(te=t.RGBA32UI),B===t.BYTE&&(te=t.RGBA8I),B===t.SHORT&&(te=t.RGBA16I),B===t.INT&&(te=t.RGBA32I)),b===t.RGB&&(B===t.UNSIGNED_SHORT&&fe&&(te=fe.RGB16_EXT),B===t.SHORT&&fe&&(te=fe.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(te=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(te=t.R11F_G11F_B10F)),b===t.RGBA){const ie=ue?Mc:Qe.getTransfer(Q);B===t.FLOAT&&(te=t.RGBA32F),B===t.HALF_FLOAT&&(te=t.RGBA16F),B===t.UNSIGNED_BYTE&&(te=ie===ot?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&fe&&(te=fe.RGBA16_EXT),B===t.SHORT&&fe&&(te=fe.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)}return(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(R,b){let B;return R?b===null||b===Mi||b===vo?B=t.DEPTH24_STENCIL8:b===vi?B=t.DEPTH32F_STENCIL8:b===go&&(B=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Mi||b===vo?B=t.DEPTH_COMPONENT24:b===vi?B=t.DEPTH_COMPONENT32F:b===go&&(B=t.DEPTH_COMPONENT16),B}function T(R,b){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==$t&&R.minFilter!==sn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){const b=R.target;b.removeEventListener("dispose",C),A(b),b.isVideoTexture&&d.delete(b),b.isHTMLTexture&&f.delete(b)}function S(R){const b=R.target;b.removeEventListener("dispose",S),P(b)}function A(R){const b=i.get(R);if(b.__webglInit===void 0)return;const B=R.source,q=m.get(B);if(q){const Q=q[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(R),Object.keys(q).length===0&&m.delete(B)}i.remove(R)}function N(R){const b=i.get(R);t.deleteTexture(b.__webglTexture);const B=R.source,q=m.get(B);delete q[b.__cacheKey],a.memory.textures--}function P(R){const b=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let Q=0;Q<b.__webglFramebuffer[q].length;Q++)t.deleteFramebuffer(b.__webglFramebuffer[q][Q]);else t.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)t.deleteFramebuffer(b.__webglFramebuffer[q]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const B=R.textures;for(let q=0,Q=B.length;q<Q;q++){const ue=i.get(B[q]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(B[q])}i.remove(R)}let I=0;function K(){I=0}function J(){return I}function k(R){I=R}function Z(){const R=I;return R>=r.maxTextures&&ze("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function z(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function F(R,b){const B=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const q=R.image;if(q===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(B,R,b);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+b)}function Y(R,b){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Oe(B,R,b);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+b)}function ee(R,b){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){Oe(B,R,b);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+b)}function re(R,b){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Ve(B,R,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+b)}const se={[Rf]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[Nf]:t.MIRRORED_REPEAT},De={[$t]:t.NEAREST,[m2]:t.NEAREST_MIPMAP_NEAREST,[tl]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Bu]:t.LINEAR_MIPMAP_NEAREST,[Gr]:t.LINEAR_MIPMAP_LINEAR},ke={[v2]:t.NEVER,[w2]:t.ALWAYS,[_2]:t.LESS,[Cp]:t.LEQUAL,[y2]:t.EQUAL,[Rp]:t.GEQUAL,[S2]:t.GREATER,[b2]:t.NOTEQUAL};function He(R,b){if(b.type===vi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===sn||b.magFilter===Bu||b.magFilter===tl||b.magFilter===Gr||b.minFilter===sn||b.minFilter===Bu||b.minFilter===tl||b.minFilter===Gr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,se[b.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,se[b.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,se[b.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,De[b.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,De[b.minFilter]),b.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ke[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===$t||b.minFilter!==tl&&b.minFilter!==Gr||b.type===vi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function H(R,b){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",C));const q=b.source;let Q=m.get(q);Q===void 0&&(Q={},m.set(q,Q));const ue=z(b);if(ue!==R.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[ue].usedTimes++;const fe=Q[R.__cacheKey];fe!==void 0&&(Q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&N(b)),R.__cacheKey=ue,R.__webglTexture=Q[ue].texture}return B}function oe(R,b,B){return Math.floor(Math.floor(R/B)/b)}function le(R,b,B,q){const ue=R.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,B,q,b.data);else{ue.sort((Re,ge)=>Re.start-ge.start);let fe=0;for(let Re=1;Re<ue.length;Re++){const ge=ue[fe],pe=ue[Re],Fe=ge.start+ge.count,Be=oe(pe.start,b.width,4),We=oe(ge.start,b.width,4);pe.start<=Fe+1&&Be===We&&oe(pe.start+pe.count-1,b.width,4)===Be?ge.count=Math.max(ge.count,pe.start+pe.count-ge.start):(++fe,ue[fe]=pe)}ue.length=fe+1;const te=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let Re=0,ge=ue.length;Re<ge;Re++){const pe=ue[Re],Fe=Math.floor(pe.start/4),Be=Math.ceil(pe.count/4),We=Fe%b.width,L=Math.floor(Fe/b.width),de=Be,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,We),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,We,L,de,ne,B,q,b.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,te),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function Oe(R,b,B){let q=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=t.TEXTURE_3D);const Q=H(R,b),ue=b.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+B);const fe=i.get(ue);if(ue.version!==fe.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ne=Qe.getPrimaries(Qe.workingColorSpace),me=b.colorSpace===cr?null:Qe.getPrimaries(b.colorSpace),be=b.colorSpace===cr||ne===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment);let ie=x(b.image,!1,r.maxTextureSize);ie=gn(b,ie);const he=s.convert(b.format,b.colorSpace),Re=s.convert(b.type);let ge=y(b.internalFormat,he,Re,b.normalized,b.colorSpace,b.isVideoTexture);He(q,b);let pe;const Fe=b.mipmaps,Be=b.isVideoTexture!==!0,We=fe.__version===void 0||Q===!0,L=ue.dataReady,de=T(b,ie);if(b.isDepthTexture)ge=M(b.format===Wr,b.type),We&&(Be?n.texStorage2D(t.TEXTURE_2D,1,ge,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,he,Re,null));else if(b.isDataTexture)if(Fe.length>0){Be&&We&&n.texStorage2D(t.TEXTURE_2D,de,ge,Fe[0].width,Fe[0].height);for(let ne=0,me=Fe.length;ne<me;ne++)pe=Fe[ne],Be?L&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,he,Re,pe.data):n.texImage2D(t.TEXTURE_2D,ne,ge,pe.width,pe.height,0,he,Re,pe.data);b.generateMipmaps=!1}else Be?(We&&n.texStorage2D(t.TEXTURE_2D,de,ge,ie.width,ie.height),L&&le(b,ie,he,Re)):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,he,Re,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Be&&We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ge,Fe[0].width,Fe[0].height,ie.depth);for(let ne=0,me=Fe.length;ne<me;ne++)if(pe=Fe[ne],b.format!==ri)if(he!==null)if(Be){if(L)if(b.layerUpdates.size>0){const be=fx(pe.width,pe.height,b.format,b.type);for(const ae of b.layerUpdates){const Ce=pe.data.subarray(ae*be/pe.data.BYTES_PER_ELEMENT,(ae+1)*be/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,ae,pe.width,pe.height,1,he,Ce)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,ie.depth,he,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,ge,pe.width,pe.height,ie.depth,0,pe.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,ie.depth,he,Re,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,ge,pe.width,pe.height,ie.depth,0,he,Re,pe.data)}else{Be&&We&&n.texStorage2D(t.TEXTURE_2D,de,ge,Fe[0].width,Fe[0].height);for(let ne=0,me=Fe.length;ne<me;ne++)pe=Fe[ne],b.format!==ri?he!==null?Be?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,he,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,ge,pe.width,pe.height,0,pe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?L&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,he,Re,pe.data):n.texImage2D(t.TEXTURE_2D,ne,ge,pe.width,pe.height,0,he,Re,pe.data)}else if(b.isDataArrayTexture)if(Be){if(We&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,ge,ie.width,ie.height,ie.depth),L)if(b.layerUpdates.size>0){const ne=fx(ie.width,ie.height,b.format,b.type);for(const me of b.layerUpdates){const be=ie.data.subarray(me*ne/ie.data.BYTES_PER_ELEMENT,(me+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,ie.width,ie.height,1,he,Re,be)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,Re,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ie.width,ie.height,ie.depth,0,he,Re,ie.data);else if(b.isData3DTexture)Be?(We&&n.texStorage3D(t.TEXTURE_3D,de,ge,ie.width,ie.height,ie.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,Re,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ie.width,ie.height,ie.depth,0,he,Re,ie.data);else if(b.isFramebufferTexture){if(We)if(Be)n.texStorage2D(t.TEXTURE_2D,de,ge,ie.width,ie.height);else{let ne=ie.width,me=ie.height;for(let be=0;be<de;be++)n.texImage2D(t.TEXTURE_2D,be,ge,ne,me,0,he,Re,null),ne>>=1,me>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),f.add(b),ne.onpaint=me=>{const be=me.changedElements;for(const ae of f)be.includes(ae.image)&&(ae.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const be=t.RGBA,ae=t.RGBA,Ce=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,be,ae,Ce,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Be&&We){const ne=at(Fe[0]);n.texStorage2D(t.TEXTURE_2D,de,ge,ne.width,ne.height)}for(let ne=0,me=Fe.length;ne<me;ne++)pe=Fe[ne],Be?L&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,he,Re,pe):n.texImage2D(t.TEXTURE_2D,ne,ge,he,Re,pe);b.generateMipmaps=!1}else if(Be){if(We){const ne=at(ie);n.texStorage2D(t.TEXTURE_2D,de,ge,ne.width,ne.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,Re,ie)}else n.texImage2D(t.TEXTURE_2D,0,ge,he,Re,ie);h(b)&&g(q),fe.__version=ue.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ve(R,b,B){if(b.image.length!==6)return;const q=H(R,b),Q=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const ue=i.get(Q);if(Q.version!==ue.__version||q===!0){n.activeTexture(t.TEXTURE0+B);const fe=Qe.getPrimaries(Qe.workingColorSpace),te=b.colorSpace===cr?null:Qe.getPrimaries(b.colorSpace),ie=b.colorSpace===cr||fe===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const he=b.isCompressedTexture||b.image[0].isCompressedTexture,Re=b.image[0]&&b.image[0].isDataTexture,ge=[];for(let ae=0;ae<6;ae++)!he&&!Re?ge[ae]=x(b.image[ae],!0,r.maxCubemapSize):ge[ae]=Re?b.image[ae].image:b.image[ae],ge[ae]=gn(b,ge[ae]);const pe=ge[0],Fe=s.convert(b.format,b.colorSpace),Be=s.convert(b.type),We=y(b.internalFormat,Fe,Be,b.normalized,b.colorSpace),L=b.isVideoTexture!==!0,de=ue.__version===void 0||q===!0,ne=Q.dataReady;let me=T(b,pe);He(t.TEXTURE_CUBE_MAP,b);let be;if(he){L&&de&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,We,pe.width,pe.height);for(let ae=0;ae<6;ae++){be=ge[ae].mipmaps;for(let Ce=0;Ce<be.length;Ce++){const Te=be[Ce];b.format!==ri?Fe!==null?L?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce,0,0,Te.width,Te.height,Fe,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce,We,Te.width,Te.height,0,Te.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce,0,0,Te.width,Te.height,Fe,Be,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce,We,Te.width,Te.height,0,Fe,Be,Te.data)}}}else{if(be=b.mipmaps,L&&de){be.length>0&&me++;const ae=at(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,We,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Re){L?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ge[ae].width,ge[ae].height,Fe,Be,ge[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,ge[ae].width,ge[ae].height,0,Fe,Be,ge[ae].data);for(let Ce=0;Ce<be.length;Ce++){const Ct=be[Ce].image[ae].image;L?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce+1,0,0,Ct.width,Ct.height,Fe,Be,Ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce+1,We,Ct.width,Ct.height,0,Fe,Be,Ct.data)}}else{L?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Fe,Be,ge[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,Fe,Be,ge[ae]);for(let Ce=0;Ce<be.length;Ce++){const Te=be[Ce];L?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce+1,0,0,Fe,Be,Te.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ce+1,We,Fe,Be,Te.image[ae])}}}h(b)&&g(t.TEXTURE_CUBE_MAP),ue.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Ie(R,b,B,q,Q,ue){const fe=s.convert(B.format,B.colorSpace),te=s.convert(B.type),ie=y(B.internalFormat,fe,te,B.normalized,B.colorSpace),he=i.get(b),Re=i.get(B);if(Re.__renderTarget=b,!he.__hasExternalTextures){const ge=Math.max(1,b.width>>ue),pe=Math.max(1,b.height>>ue);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ue,ie,ge,pe,b.depth,0,fe,te,null):n.texImage2D(Q,ue,ie,ge,pe,0,fe,te,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),pt(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Q,Re.__webglTexture,0,yt(b)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Q,Re.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(R,b,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),b.depthBuffer){const q=b.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ue=M(b.stencilBuffer,Q),fe=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;pt(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(b),ue,b.width,b.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(b),ue,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ue,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,R)}else{const q=b.textures;for(let Q=0;Q<q.length;Q++){const ue=q[Q],fe=s.convert(ue.format,ue.colorSpace),te=s.convert(ue.type),ie=y(ue.internalFormat,fe,te,ue.normalized,ue.colorSpace);pt(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(b),ie,b.width,b.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(b),ie,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,ie,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function qe(R,b,B){const q=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(b.depthTexture);if(Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),He(t.TEXTURE_CUBE_MAP,b.depthTexture);const he=s.convert(b.depthTexture.format),Re=s.convert(b.depthTexture.type);let ge;b.depthTexture.format===qi?ge=t.DEPTH_COMPONENT24:b.depthTexture.format===Wr&&(ge=t.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ge,b.width,b.height,0,he,Re,null)}}else F(b.depthTexture,0);const ue=Q.__webglTexture,fe=yt(b),te=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,ie=b.depthTexture.format===Wr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===qi)pt(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,te,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,te,ue,0);else if(b.depthTexture.format===Wr)pt(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,te,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,te,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function V(R){const b=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){const Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=q}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)qe(b.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?qe(b.__webglFramebuffer[0],R,0):qe(b.__webglFramebuffer,R,0)}else if(B){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=t.createRenderbuffer(),nt(b.__webglDepthbuffer[q],R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ue)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),nt(b.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(R,b,B){const q=i.get(R);b!==void 0&&Ie(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&V(R)}function xe(R){const b=R.texture,B=i.get(R),q=i.get(b);R.addEventListener("dispose",S);const Q=R.textures,ue=R.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=b.version,a.memory.textures++),ue){B.__webglFramebuffer=[];for(let te=0;te<6;te++)if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer[te]=[];for(let ie=0;ie<b.mipmaps.length;ie++)B.__webglFramebuffer[te][ie]=t.createFramebuffer()}else B.__webglFramebuffer[te]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){B.__webglFramebuffer=[];for(let te=0;te<b.mipmaps.length;te++)B.__webglFramebuffer[te]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(fe)for(let te=0,ie=Q.length;te<ie;te++){const he=i.get(Q[te]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&pt(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let te=0;te<Q.length;te++){const ie=Q[te];B.__webglColorRenderbuffer[te]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[te]);const he=s.convert(ie.format,ie.colorSpace),Re=s.convert(ie.type),ge=y(ie.internalFormat,he,Re,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),pe=yt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,ge,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+te,t.RENDERBUFFER,B.__webglColorRenderbuffer[te])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),nt(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),He(t.TEXTURE_CUBE_MAP,b);for(let te=0;te<6;te++)if(b.mipmaps&&b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)Ie(B.__webglFramebuffer[te][ie],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie);else Ie(B.__webglFramebuffer[te],R,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);h(b)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let te=0,ie=Q.length;te<ie;te++){const he=Q[te],Re=i.get(he);let ge=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,Re.__webglTexture),He(ge,he),Ie(B.__webglFramebuffer,R,he,t.COLOR_ATTACHMENT0+te,ge,0),h(he)&&g(ge)}n.unbindTexture()}else{let te=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(te,q.__webglTexture),He(te,b),b.mipmaps&&b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)Ie(B.__webglFramebuffer[ie],R,b,t.COLOR_ATTACHMENT0,te,ie);else Ie(B.__webglFramebuffer,R,b,t.COLOR_ATTACHMENT0,te,0);h(b)&&g(te),n.unbindTexture()}R.depthBuffer&&V(R)}function tt(R){const b=R.textures;for(let B=0,q=b.length;B<q;B++){const Q=b[B];if(h(Q)){const ue=_(R),fe=i.get(Q).__webglTexture;n.bindTexture(ue,fe),g(ue),n.unbindTexture()}}}const ct=[],ht=[];function Ut(R){if(R.samples>0){if(pt(R)===!1){const b=R.textures,B=R.width,q=R.height;let Q=t.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),te=b.length>1;if(te)for(let he=0;he<b.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<b.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),te){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const Re=i.get(b[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Re,0)}t.blitFramebuffer(0,0,B,q,0,0,B,q,Q,t.NEAREST),c===!0&&(ct.length=0,ht.length=0,ct.push(t.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ct.push(ue),ht.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ht)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),te)for(let he=0;he<b.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);const Re=i.get(b[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function yt(R){return Math.min(r.maxSamples,R.samples)}function pt(R){const b=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function U(R){const b=a.render.frame;d.get(R)!==b&&(d.set(R,b),R.update())}function gn(R,b){const B=R.colorSpace,q=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==wc&&B!==cr&&(Qe.getTransfer(B)===ot?(q!==ri||Q!==Ln)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",B)),b}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=Z,this.resetTextureUnits=K,this.getTextureUnits=J,this.setTextureUnits=k,this.setTexture2D=F,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=re,this.rebindTextures=je,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function ZR(t,e){function n(i,r=cr){let s;const a=Qe.getTransfer(r);if(i===Ln)return t.UNSIGNED_BYTE;if(i===wp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Mp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===sy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===ay)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===iy)return t.BYTE;if(i===ry)return t.SHORT;if(i===go)return t.UNSIGNED_SHORT;if(i===bp)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===vi)return t.FLOAT;if(i===Xi)return t.HALF_FLOAT;if(i===oy)return t.ALPHA;if(i===ly)return t.RGB;if(i===ri)return t.RGBA;if(i===qi)return t.DEPTH_COMPONENT;if(i===Wr)return t.DEPTH_STENCIL;if(i===cy)return t.RED;if(i===Ep)return t.RED_INTEGER;if(i===rs)return t.RG;if(i===Tp)return t.RG_INTEGER;if(i===Ap)return t.RGBA_INTEGER;if(i===Hl||i===Vl||i===Gl||i===Wl)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pf||i===Lf||i===Df||i===If)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Pf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Df)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===If)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uf||i===Ff||i===Of||i===kf||i===Bf||i===Sc||i===jf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Uf||i===Ff)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Of)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===kf)return s.COMPRESSED_R11_EAC;if(i===Bf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Sc)return s.COMPRESSED_RG11_EAC;if(i===jf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zf||i===Hf||i===Vf||i===Gf||i===Wf||i===Xf||i===qf||i===$f||i===Yf||i===Kf||i===Zf||i===Jf||i===Qf||i===eh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$f)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qf)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eh)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===th||i===nh||i===ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===th)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rh||i===sh||i===bc||i===ah)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const JR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QR=`
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

}`;class eN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new _y(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ei({vertexShader:JR,fragmentShader:QR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new In(new tu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tN extends cs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,u=null,d=null,f=null,p=null,m=null,v=null;const w=typeof XRWebGLBinding<"u",x=new eN,h={},g=n.getContextAttributes();let _=null,y=null;const M=[],T=[],C=new Ze;let S=null;const A=new Pn;A.viewport=new Mt;const N=new Pn;N.viewport=new Mt;const P=[A,N],I=new dT;let K=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let oe=M[H];return oe===void 0&&(oe=new qu,M[H]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(H){let oe=M[H];return oe===void 0&&(oe=new qu,M[H]=oe),oe.getGripSpace()},this.getHand=function(H){let oe=M[H];return oe===void 0&&(oe=new qu,M[H]=oe),oe.getHandSpace()};function k(H){const oe=T.indexOf(H.inputSource);if(oe===-1)return;const le=M[oe];le!==void 0&&(le.update(H.inputSource,H.frame,u||a),le.dispatchEvent({type:H.type,data:H.inputSource}))}function Z(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",z);for(let H=0;H<M.length;H++){const oe=T[H];oe!==null&&(T[H]=null,M[H].disconnect(oe))}K=null,J=null,x.reset();for(const H in h)delete h[H];e.setRenderTarget(_),m=null,p=null,f=null,r=null,y=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){l=H,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Oe=null,Ve=null;g.depth&&(Ve=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=g.stencil?Wr:qi,Oe=g.stencil?vo:Mi);const Ie={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:s};f=this.getBinding(),p=f.createProjectionLayer(Ie),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new wi(p.textureWidth,p.textureHeight,{format:ri,type:Ln,depthTexture:new aa(p.textureWidth,p.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new wi(m.framebufferWidth,m.framebufferHeight,{format:ri,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z(H){for(let oe=0;oe<H.removed.length;oe++){const le=H.removed[oe],Oe=T.indexOf(le);Oe>=0&&(T[Oe]=null,M[Oe].disconnect(le))}for(let oe=0;oe<H.added.length;oe++){const le=H.added[oe];let Oe=T.indexOf(le);if(Oe===-1){for(let Ie=0;Ie<M.length;Ie++)if(Ie>=T.length){T.push(le),Oe=Ie;break}else if(T[Ie]===null){T[Ie]=le,Oe=Ie;break}if(Oe===-1)break}const Ve=M[Oe];Ve&&Ve.connect(le)}}const F=new j,Y=new j;function ee(H,oe,le){F.setFromMatrixPosition(oe.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const Oe=F.distanceTo(Y),Ve=oe.projectionMatrix.elements,Ie=le.projectionMatrix.elements,nt=Ve[14]/(Ve[10]-1),qe=Ve[14]/(Ve[10]+1),V=(Ve[9]+1)/Ve[5],je=(Ve[9]-1)/Ve[5],xe=(Ve[8]-1)/Ve[0],tt=(Ie[8]+1)/Ie[0],ct=nt*xe,ht=nt*tt,Ut=Oe/(-xe+tt),yt=Ut*-xe;if(oe.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(yt),H.translateZ(Ut),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ve[10]===-1)H.projectionMatrix.copy(oe.projectionMatrix),H.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const pt=nt+Ut,U=qe+Ut,gn=ct-yt,at=ht+(Oe-yt),R=V*qe/U*pt,b=je*qe/U*pt;H.projectionMatrix.makePerspective(gn,at,R,b,pt,U),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function re(H,oe){oe===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(oe.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let oe=H.near,le=H.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(le=x.depthFar)),I.near=N.near=A.near=oe,I.far=N.far=A.far=le,(K!==I.near||J!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),K=I.near,J=I.far),I.layers.mask=H.layers.mask|6,A.layers.mask=I.layers.mask&-5,N.layers.mask=I.layers.mask&-3;const Oe=H.parent,Ve=I.cameras;re(I,Oe);for(let Ie=0;Ie<Ve.length;Ie++)re(Ve[Ie],Oe);Ve.length===2?ee(I,A,N):I.projectionMatrix.copy(A.projectionMatrix),se(H,I,Oe)};function se(H,oe,le){le===null?H.matrix.copy(oe.matrixWorld):(H.matrix.copy(le.matrixWorld),H.matrix.invert(),H.matrix.multiply(oe.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(oe.projectionMatrix),H.projectionMatrixInverse.copy(oe.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=lh*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(H){c=H,p!==null&&(p.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(I)},this.getCameraTexture=function(H){return h[H]};let De=null;function ke(H,oe){if(d=oe.getViewerPose(u||a),v=oe,d!==null){const le=d.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Oe=!1;le.length!==I.cameras.length&&(I.cameras.length=0,Oe=!0);for(let qe=0;qe<le.length;qe++){const V=le[qe];let je=null;if(m!==null)je=m.getViewport(V);else{const tt=f.getViewSubImage(p,V);je=tt.viewport,qe===0&&(e.setRenderTargetTextures(y,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(y))}let xe=P[qe];xe===void 0&&(xe=new Pn,xe.layers.enable(qe),xe.viewport=new Mt,P[qe]=xe),xe.matrix.fromArray(V.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(V.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(je.x,je.y,je.width,je.height),qe===0&&(I.matrix.copy(xe.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Oe===!0&&I.cameras.push(xe)}const Ve=r.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&w){f=i.getBinding();const qe=f.getDepthInformation(le[0]);qe&&qe.isValid&&qe.texture&&x.init(qe,r.renderState)}if(Ve&&Ve.includes("camera-access")&&w){e.state.unbindTexture(),f=i.getBinding();for(let qe=0;qe<le.length;qe++){const V=le[qe].camera;if(V){let je=h[V];je||(je=new _y,h[V]=je);const xe=f.getCameraImage(V);je.sourceTexture=xe}}}}for(let le=0;le<M.length;le++){const Oe=T[le],Ve=M[le];Oe!==null&&Ve!==void 0&&Ve.update(Oe,oe,u||a)}De&&De(H,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}const He=new My;He.setAnimationLoop(ke),this.setAnimationLoop=function(H){De=H},this.dispose=function(){}}}const nN=new Tt,Py=new Ge;Py.set(-1,0,0,0,1,0,0,0,1);function iN(t,e){function n(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function i(x,h){h.color.getRGB(x.fogColor.value,yy(t)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function r(x,h,g,_,y){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(x,h):h.isMeshLambertMaterial?(s(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(x,h),f(x,h)):h.isMeshPhongMaterial?(s(x,h),d(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(x,h),p(x,h),h.isMeshPhysicalMaterial&&m(x,h,y)):h.isMeshMatcapMaterial?(s(x,h),v(x,h)):h.isMeshDepthMaterial?s(x,h):h.isMeshDistanceMaterial?(s(x,h),w(x,h)):h.isMeshNormalMaterial?s(x,h):h.isLineBasicMaterial?(a(x,h),h.isLineDashedMaterial&&l(x,h)):h.isPointsMaterial?c(x,h,g,_):h.isSpriteMaterial?u(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,n(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===En&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,n(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===En&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,n(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,n(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);const g=e.get(h),_=g.envMap,y=g.envMapRotation;_&&(x.envMap.value=_,x.envMapRotation.value.setFromMatrix4(nN.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Py),x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap&&(x.lightMap.value=h.lightMap,x.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,x.lightMapTransform)),h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,x.aoMapTransform))}function a(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform))}function l(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function c(x,h,g,_){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*g,x.scale.value=_*.5,h.map&&(x.map.value=h.map,n(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function u(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,n(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,n(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function d(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function f(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function p(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,x.roughnessMapTransform)),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function m(x,h,g){x.ior.value=h.ior,h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&x.clearcoatNormalScale.value.negate())),h.dispersion>0&&(x.dispersion.value=h.dispersion),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(x.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(x.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,x.specularIntensityMapTransform))}function v(x,h){h.matcap&&(x.matcap.value=h.matcap)}function w(x,h){const g=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rN(t,e,n,i){let r={},s={},a=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const T=M.program;i.uniformBlockBinding(y,T)}function u(y,M){let T=r[y.id];T===void 0&&(x(y),T=d(y),r[y.id]=T,y.addEventListener("dispose",g));const C=M.program;i.updateUBOMapping(y,C);const S=e.render.frame;s[y.id]!==S&&(p(y),s[y.id]=S)}function d(y){const M=f();y.__bindingPointIndex=M;const T=t.createBuffer(),C=y.__size,S=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,T),T}function f(){for(let y=0;y<l;y++)if(a.indexOf(y)===-1)return a.push(y),y;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const M=r[y.id],T=y.uniforms,C=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let S=0,A=T.length;S<A;S++){const N=T[S];if(Array.isArray(N))for(let P=0,I=N.length;P<I;P++)m(N[P],S,P,C);else m(N,S,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,M,T,C){if(w(y,M,T,C)===!0){const S=y.__offset,A=y.value;if(Array.isArray(A)){let N=0;for(let P=0;P<A.length;P++){const I=A[P],K=h(I);v(I,y.__data,N),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(N+=K.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(A,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,y.__data)}}function v(y,M,T){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,T)}function w(y,M,T,C){const S=y.value,A=M+"_"+T;if(C[A]===void 0)return typeof S=="number"||typeof S=="boolean"?C[A]=S:ArrayBuffer.isView(S)?C[A]=S.slice():C[A]=S.clone(),!0;{const N=C[A];if(typeof S=="number"||typeof S=="boolean"){if(N!==S)return C[A]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(N.equals(S)===!1)return N.copy(S),!0}}return!1}function x(y){const M=y.uniforms;let T=0;const C=16;for(let A=0,N=M.length;A<N;A++){const P=Array.isArray(M[A])?M[A]:[M[A]];for(let I=0,K=P.length;I<K;I++){const J=P[I],k=Array.isArray(J.value)?J.value:[J.value];for(let Z=0,z=k.length;Z<z;Z++){const F=k[Z],Y=h(F),ee=T%C,re=ee%Y.boundary,se=ee+re;T+=re,se!==0&&C-se<Y.storage&&(T+=C-se),J.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=T,T+=Y.storage}}}const S=T%C;return S>0&&(T+=C-S),y.__size=T,y.__cache={},this}function h(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function _(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:u,dispose:_}}const sN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let pi=null;function aN(){return pi===null&&(pi=new $2(sN,16,16,rs,Xi),pi.name="DFG_LUT",pi.minFilter=sn,pi.magFilter=sn,pi.wrapS=Fi,pi.wrapT=Fi,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}class oN{constructor(e={}){const{canvas:n=E2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:m=Ln}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const w=m,x=new Set([Ap,Tp,Ep]),h=new Set([Ln,Mi,go,vo,wp,Mp]),g=new Uint32Array(4),_=new Int32Array(4),y=new j;let M=null,T=null;const C=[],S=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1,I=null,K=null,J=null,k=null;this._outputColorSpace=Hn;let Z=0,z=0,F=null,Y=-1,ee=null;const re=new Mt,se=new Mt;let De=null;const ke=new Ke(0);let He=0,H=n.width,oe=n.height,le=1,Oe=null,Ve=null;const Ie=new Mt(0,0,H,oe),nt=new Mt(0,0,H,oe);let qe=!1;const V=new Pp;let je=!1,xe=!1;const tt=new Tt,ct=new j,ht=new Mt,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function pt(){return F===null?le:1}let U=i;function gn(E,O){return n.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${yp}`),n.addEventListener("webglcontextlost",Ct,!1),n.addEventListener("webglcontextrestored",mt,!1),n.addEventListener("webglcontextcreationerror",ci,!1),U===null){const O="webgl2";if(U=gn(O,E),U===null)throw gn(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(E){throw rt("WebGLRenderer: "+E.message),E}let at,R,b,B,q,Q,ue,fe,te,ie,he,Re,ge,pe,Fe,Be,We,L,de,ne,me,be,ae;function Ce(){at=new a3(U),at.init(),me=new ZR(U,at),R=new JC(U,at,e,me),b=new YR(U,at),R.reversedDepthBuffer&&p&&b.buffers.depth.setReversed(!0),K=U.createFramebuffer(),J=U.createFramebuffer(),k=U.createFramebuffer(),B=new c3(U),q=new UR,Q=new KR(U,at,b,q,R,me,B),ue=new s3(N),fe=new hT(U),be=new KC(U,fe),te=new o3(U,fe,B,be),ie=new d3(U,te,fe,be,B),L=new u3(U,R,Q),Fe=new QC(q),he=new IR(N,ue,at,R,be,Fe),Re=new iN(N,q),ge=new OR,pe=new VR(at),We=new YC(N,ue,b,ie,v,c),Be=new $R(N,ie,R),ae=new rN(U,B,R,b),de=new ZC(U,at,B),ne=new l3(U,at,B),B.programs=he.programs,N.capabilities=R,N.extensions=at,N.properties=q,N.renderLists=ge,N.shadowMap=Be,N.state=b,N.info=B}Ce(),w!==Ln&&(A=new h3(w,n.width,n.height,l,r,s));const Te=new tN(N,U);this.xr=Te,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=at.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=at.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(E){E!==void 0&&(le=E,this.setSize(H,oe,!1))},this.getSize=function(E){return E.set(H,oe)},this.setSize=function(E,O,$=!0){if(Te.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,oe=O,n.width=Math.floor(E*le),n.height=Math.floor(O*le),$===!0&&(n.style.width=E+"px",n.style.height=O+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(H*le,oe*le).floor()},this.setDrawingBufferSize=function(E,O,$){H=E,oe=O,le=$,n.width=Math.floor(E*$),n.height=Math.floor(O*$),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(w===Ln){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(re)},this.getViewport=function(E){return E.copy(Ie)},this.setViewport=function(E,O,$,G){E.isVector4?Ie.set(E.x,E.y,E.z,E.w):Ie.set(E,O,$,G),b.viewport(re.copy(Ie).multiplyScalar(le).round())},this.getScissor=function(E){return E.copy(nt)},this.setScissor=function(E,O,$,G){E.isVector4?nt.set(E.x,E.y,E.z,E.w):nt.set(E,O,$,G),b.scissor(se.copy(nt).multiplyScalar(le).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(E){b.setScissorTest(qe=E)},this.setOpaqueSort=function(E){Oe=E},this.setTransparentSort=function(E){Ve=E},this.getClearColor=function(E){return E.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,$=!0){let G=0;if(E){let W=!1;if(F!==null){const Se=F.texture.format;W=x.has(Se)}if(W){const Se=F.texture.type,Me=h.has(Se),ye=We.getClearColor(),Ae=We.getClearAlpha(),Ne=ye.r,Xe=ye.g,Ye=ye.b;Me?(g[0]=Ne,g[1]=Xe,g[2]=Ye,g[3]=Ae,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ne,_[1]=Xe,_[2]=Ye,_[3]=Ae,U.clearBufferiv(U.COLOR,0,_))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Ct,!1),n.removeEventListener("webglcontextrestored",mt,!1),n.removeEventListener("webglcontextcreationerror",ci,!1),We.dispose(),ge.dispose(),pe.dispose(),q.dispose(),ue.dispose(),ie.dispose(),be.dispose(),ae.dispose(),he.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",jp),Te.removeEventListener("sessionend",zp),Nr.stop()};function Ct(E){E.preventDefault(),z0("WebGLRenderer: Context Lost."),P=!0}function mt(){z0("WebGLRenderer: Context Restored."),P=!1;const E=B.autoReset,O=Be.enabled,$=Be.autoUpdate,G=Be.needsUpdate,W=Be.type;Ce(),B.autoReset=E,Be.enabled=O,Be.autoUpdate=$,Be.needsUpdate=G,Be.type=W}function ci(E){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ui(E){const O=E.target;O.removeEventListener("dispose",ui),Ly(O)}function Ly(E){Dy(E),q.remove(E)}function Dy(E){const O=q.get(E).programs;O!==void 0&&(O.forEach(function($){he.releaseProgram($)}),E.isShaderMaterial&&he.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,$,G,W,Se){O===null&&(O=Ut);const Me=W.isMesh&&W.matrixWorld.determinantAffine()<0,ye=Fy(E,O,$,G,W);b.setMaterial(G,Me);let Ae=$.index,Ne=1;if(G.wireframe===!0){if(Ae=te.getWireframeAttribute($),Ae===void 0)return;Ne=2}const Xe=$.drawRange,Ye=$.attributes.position;let Pe=Xe.start*Ne,ut=(Xe.start+Xe.count)*Ne;Se!==null&&(Pe=Math.max(Pe,Se.start*Ne),ut=Math.min(ut,(Se.start+Se.count)*Ne)),Ae!==null?(Pe=Math.max(Pe,0),ut=Math.min(ut,Ae.count)):Ye!=null&&(Pe=Math.max(Pe,0),ut=Math.min(ut,Ye.count));const Pt=ut-Pe;if(Pt<0||Pt===1/0)return;be.setup(W,G,ye,$,Ae);let Rt,dt=de;if(Ae!==null&&(Rt=fe.get(Ae),dt=ne,dt.setIndex(Rt)),W.isMesh)G.wireframe===!0?(b.setLineWidth(G.wireframeLinewidth*pt()),dt.setMode(U.LINES)):dt.setMode(U.TRIANGLES);else if(W.isLine){let Zt=G.linewidth;Zt===void 0&&(Zt=1),b.setLineWidth(Zt*pt()),W.isLineSegments?dt.setMode(U.LINES):W.isLineLoop?dt.setMode(U.LINE_LOOP):dt.setMode(U.LINE_STRIP)}else W.isPoints?dt.setMode(U.POINTS):W.isSprite&&dt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(at.get("WEBGL_multi_draw"))dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Zt=W._multiDrawStarts,we=W._multiDrawCounts,Tn=W._multiDrawCount,it=Ae?fe.get(Ae).bytesPerElement:1,jn=q.get(G).currentProgram.getUniforms();for(let di=0;di<Tn;di++)jn.setValue(U,"_gl_DrawID",di),dt.render(Zt[di]/it,we[di])}else if(W.isInstancedMesh)dt.renderInstances(Pe,Pt,W.count);else if($.isInstancedBufferGeometry){const Zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,we=Math.min($.instanceCount,Zt);dt.renderInstances(Pe,Pt,we)}else dt.render(Pe,Pt)};function Bp(E,O,$){E.transparent===!0&&E.side===Di&&E.forceSinglePass===!1?(E.side=En,E.needsUpdate=!0,Fo(E,O,$),E.side=Er,E.needsUpdate=!0,Fo(E,O,$),E.side=Di):Fo(E,O,$)}this.compile=function(E,O,$=null){$===null&&($=E),T=pe.get($),T.init(O),S.push(T),$.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),E!==$&&E.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights();const G=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Me=0;Me<Se.length;Me++){const ye=Se[Me];Bp(ye,$,W),G.add(ye)}else Bp(Se,$,W),G.add(Se)}),T=S.pop(),G},this.compileAsync=function(E,O,$=null){const G=this.compile(E,O,$);return new Promise(W=>{function Se(){if(G.forEach(function(Me){q.get(Me).currentProgram.isReady()&&G.delete(Me)}),G.size===0){W(E);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ru=null;function Iy(E){ru&&ru(E)}function jp(){Nr.stop()}function zp(){Nr.start()}const Nr=new My;Nr.setAnimationLoop(Iy),typeof self<"u"&&Nr.setContext(self),this.setAnimationLoop=function(E){ru=E,Te.setAnimationLoop(E),E===null?Nr.stop():Nr.start()},Te.addEventListener("sessionstart",jp),Te.addEventListener("sessionend",zp),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;I!==null&&I.renderStart(E,O);const $=Te.enabled===!0&&Te.isPresenting===!0,G=A!==null&&(F===null||$)&&A.begin(N,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(O),O=Te.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,O,F),T=pe.get(E,S.length),T.init(O),T.state.textureUnits=Q.getTextureUnits(),S.push(T),tt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V.setFromProjectionMatrix(tt,_i,O.reversedDepth),xe=this.localClippingEnabled,je=Fe.init(this.clippingPlanes,xe),M=ge.get(E,C.length),M.init(),C.push(M),Te.enabled===!0&&Te.isPresenting===!0){const Me=N.xr.getDepthSensingMesh();Me!==null&&su(Me,O,-1/0,N.sortObjects)}su(E,O,0,N.sortObjects),M.finish(),N.sortObjects===!0&&M.sort(Oe,Ve,O.reversedDepth),yt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,yt&&We.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),je===!0&&Fe.beginShadows();const W=T.state.shadowsArray;if(Be.render(W,E,O),je===!0&&Fe.endShadows(),(G&&A.hasRenderPass())===!1){const Me=M.opaque,ye=M.transmissive;if(T.setupLights(),O.isArrayCamera){const Ae=O.cameras;if(ye.length>0)for(let Ne=0,Xe=Ae.length;Ne<Xe;Ne++){const Ye=Ae[Ne];Vp(Me,ye,E,Ye)}yt&&We.render(E);for(let Ne=0,Xe=Ae.length;Ne<Xe;Ne++){const Ye=Ae[Ne];Hp(M,E,Ye,Ye.viewport)}}else ye.length>0&&Vp(Me,ye,E,O),yt&&We.render(E),Hp(M,E,O)}F!==null&&z===0&&(Q.updateMultisampleRenderTarget(F),Q.updateRenderTargetMipmap(F)),G&&A.end(N),E.isScene===!0&&E.onAfterRender(N,E,O),be.resetDefaultState(),Y=-1,ee=null,S.pop(),S.length>0?(T=S[S.length-1],Q.setTextureUnits(T.state.textureUnits),je===!0&&Fe.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,I!==null&&I.renderEnd()};function su(E,O,$,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){G&&ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(tt);const Me=ie.update(E),ye=E.material;ye.visible&&M.push(E,Me,ye,$,ht.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const Me=ie.update(E),ye=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ht.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ht.copy(Me.boundingSphere.center)),ht.applyMatrix4(E.matrixWorld).applyMatrix4(tt)),Array.isArray(ye)){const Ae=Me.groups;for(let Ne=0,Xe=Ae.length;Ne<Xe;Ne++){const Ye=Ae[Ne],Pe=ye[Ye.materialIndex];Pe&&Pe.visible&&M.push(E,Me,Pe,$,ht.z,Ye)}}else ye.visible&&M.push(E,Me,ye,$,ht.z,null)}}const Se=E.children;for(let Me=0,ye=Se.length;Me<ye;Me++)su(Se[Me],O,$,G)}function Hp(E,O,$,G){const{opaque:W,transmissive:Se,transparent:Me}=E;T.setupLightsView($),je===!0&&Fe.setGlobalState(N.clippingPlanes,$),G&&b.viewport(re.copy(G)),W.length>0&&Uo(W,O,$),Se.length>0&&Uo(Se,O,$),Me.length>0&&Uo(Me,O,$),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Vp(E,O,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Pe=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new wi(1,1,{generateMipmaps:!0,type:Pe?Xi:Ln,minFilter:Gr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const Se=T.state.transmissionRenderTarget[G.id],Me=G.viewport||re;Se.setSize(Me.z*N.transmissionResolutionScale,Me.w*N.transmissionResolutionScale);const ye=N.getRenderTarget(),Ae=N.getActiveCubeFace(),Ne=N.getActiveMipmapLevel();N.setRenderTarget(Se),N.getClearColor(ke),He=N.getClearAlpha(),He<1&&N.setClearColor(16777215,.5),N.clear(),yt&&We.render($);const Xe=N.toneMapping;N.toneMapping=bi;const Ye=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),je===!0&&Fe.setGlobalState(N.clippingPlanes,G),Uo(E,$,G),Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ut=0,Pt=O.length;ut<Pt;ut++){const Rt=O[ut],{object:dt,geometry:Zt,material:we,group:Tn}=Rt;if(we.side===Di&&dt.layers.test(G.layers)){const it=we.side;we.side=En,we.needsUpdate=!0,Gp(dt,$,G,Zt,we,Tn),we.side=it,we.needsUpdate=!0,Pe=!0}}Pe===!0&&(Q.updateMultisampleRenderTarget(Se),Q.updateRenderTargetMipmap(Se))}N.setRenderTarget(ye,Ae,Ne),N.setClearColor(ke,He),Ye!==void 0&&(G.viewport=Ye),N.toneMapping=Xe}function Uo(E,O,$){const G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Se=E.length;W<Se;W++){const Me=E[W],{object:ye,geometry:Ae,group:Ne}=Me;let Xe=Me.material;Xe.allowOverride===!0&&G!==null&&(Xe=G),ye.layers.test($.layers)&&Gp(ye,O,$,Ae,Xe,Ne)}}function Gp(E,O,$,G,W,Se){E.onBeforeRender(N,O,$,G,W,Se),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(N,O,$,G,E,Se),W.transparent===!0&&W.side===Di&&W.forceSinglePass===!1?(W.side=En,W.needsUpdate=!0,N.renderBufferDirect($,O,G,W,E,Se),W.side=Er,W.needsUpdate=!0,N.renderBufferDirect($,O,G,W,E,Se),W.side=Di):N.renderBufferDirect($,O,G,W,E,Se),E.onAfterRender(N,O,$,G,W,Se)}function Fo(E,O,$){O.isScene!==!0&&(O=Ut);const G=q.get(E),W=T.state.lights,Se=T.state.shadowsArray,Me=W.state.version,ye=he.getParameters(E,W.state,Se,O,$,T.state.lightProbeGridArray),Ae=he.getProgramCacheKey(ye);let Ne=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const Xe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=ue.get(E.envMap||G.environment,Xe),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",ui),Ne=new Map,G.programs=Ne);let Ye=Ne.get(Ae);if(Ye!==void 0){if(G.currentProgram===Ye&&G.lightsStateVersion===Me)return Xp(E,ye),Ye}else ye.uniforms=he.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,$,ye),E.onBeforeCompile(ye,N),Ye=he.acquireProgram(ye,Ae),Ne.set(Ae,Ye),G.uniforms=ye.uniforms;const Pe=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=Fe.uniform),Xp(E,ye),G.needsLights=ky(E),G.lightsStateVersion=Me,G.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=Ye,G.uniformsList=null,Ye}function Wp(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Xl.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Xp(E,O){const $=q.get(E);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Uy(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let $=0,G=E.length;$<G;$++){const W=E[$];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Fy(E,O,$,G,W){O.isScene!==!0&&(O=Ut),Q.resetTextureUnits();const Se=O.fog,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,ye=F===null?N.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Qe.workingColorSpace,Ae=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ne=ue.get(G.envMap||Me,Ae),Xe=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ye=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!$.morphAttributes.position,ut=!!$.morphAttributes.normal,Pt=!!$.morphAttributes.color;let Rt=bi;G.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Rt=N.toneMapping);const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Zt=dt!==void 0?dt.length:0,we=q.get(G),Tn=T.state.lights;if(je===!0&&(xe===!0||E!==ee)){const xt=E===ee&&G.id===Y;Fe.setState(G,E,xt)}let it=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Tn.state.version||we.outputColorSpace!==ye||W.isBatchedMesh&&we.batching===!1||!W.isBatchedMesh&&we.batching===!0||W.isBatchedMesh&&we.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&we.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&we.instancing===!1||!W.isInstancedMesh&&we.instancing===!0||W.isSkinnedMesh&&we.skinning===!1||!W.isSkinnedMesh&&we.skinning===!0||W.isInstancedMesh&&we.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&we.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&we.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&we.instancingMorph===!1&&W.morphTexture!==null||we.envMap!==Ne||G.fog===!0&&we.fog!==Se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Fe.numPlanes||we.numIntersection!==Fe.numIntersection)||we.vertexAlphas!==Xe||we.vertexTangents!==Ye||we.morphTargets!==Pe||we.morphNormals!==ut||we.morphColors!==Pt||we.toneMapping!==Rt||we.morphTargetsCount!==Zt||!!we.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,we.__version=G.version);let jn=we.currentProgram;it===!0&&(jn=Fo(G,O,W),I&&G.isNodeMaterial&&I.onUpdateProgram(G,jn,we));let di=!1,Yi=!1,us=!1;const ft=jn.getUniforms(),Lt=we.uniforms;if(b.useProgram(jn.program)&&(di=!0,Yi=!0,us=!0),G.id!==Y&&(Y=G.id,Yi=!0),we.needsLights){const xt=Uy(T.state.lightProbeGridArray,W);we.lightProbeGrid!==xt&&(we.lightProbeGrid=xt,Yi=!0)}if(di||ee!==E){b.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ft.setValue(U,"projectionMatrix",E.projectionMatrix),ft.setValue(U,"viewMatrix",E.matrixWorldInverse);const Zi=ft.map.cameraPosition;Zi!==void 0&&Zi.setValue(U,ct.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&ft.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ft.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),ee!==E&&(ee=E,Yi=!0,us=!0)}if(we.needsLights&&(Tn.state.directionalShadowMap.length>0&&ft.setValue(U,"directionalShadowMap",Tn.state.directionalShadowMap,Q),Tn.state.spotShadowMap.length>0&&ft.setValue(U,"spotShadowMap",Tn.state.spotShadowMap,Q),Tn.state.pointShadowMap.length>0&&ft.setValue(U,"pointShadowMap",Tn.state.pointShadowMap,Q)),W.isSkinnedMesh){ft.setOptional(U,W,"bindMatrix"),ft.setOptional(U,W,"bindMatrixInverse");const xt=W.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),ft.setValue(U,"boneTexture",xt.boneTexture,Q))}W.isBatchedMesh&&(ft.setOptional(U,W,"batchingTexture"),ft.setValue(U,"batchingTexture",W._matricesTexture,Q),ft.setOptional(U,W,"batchingIdTexture"),ft.setValue(U,"batchingIdTexture",W._indirectTexture,Q),ft.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&ft.setValue(U,"batchingColorTexture",W._colorsTexture,Q));const Ki=$.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&L.update(W,$,jn),(Yi||we.receiveShadow!==W.receiveShadow)&&(we.receiveShadow=W.receiveShadow,ft.setValue(U,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Lt.envMapIntensity.value=O.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=aN()),Yi){if(ft.setValue(U,"toneMappingExposure",N.toneMappingExposure),we.needsLights&&Oy(Lt,us),Se&&G.fog===!0&&Re.refreshFogUniforms(Lt,Se),Re.refreshMaterialUniforms(Lt,G,le,oe,T.state.transmissionRenderTarget[E.id]),we.needsLights&&we.lightProbeGrid){const xt=we.lightProbeGrid;Lt.probesSH.value=xt.texture,Lt.probesMin.value.copy(xt.boundingBox.min),Lt.probesMax.value.copy(xt.boundingBox.max),Lt.probesResolution.value.copy(xt.resolution)}Xl.upload(U,Wp(we),Lt,Q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Xl.upload(U,Wp(we),Lt,Q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ft.setValue(U,"center",W.center),ft.setValue(U,"modelViewMatrix",W.modelViewMatrix),ft.setValue(U,"normalMatrix",W.normalMatrix),ft.setValue(U,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const xt=G.uniformsGroups;for(let Zi=0,ds=xt.length;Zi<ds;Zi++){const qp=xt[Zi];ae.update(qp,jn),ae.bind(qp,jn)}}return jn}function Oy(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function ky(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,O,$){const G=q.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=O,q.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const $=q.get(E);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,$=0){F=E,Z=O,z=$;let G=null,W=!1,Se=!1;if(E){const ye=q.get(E);if(ye.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(U.FRAMEBUFFER,ye.__webglFramebuffer),re.copy(E.viewport),se.copy(E.scissor),De=E.scissorTest,b.viewport(re),b.scissor(se),b.setScissorTest(De),Y=-1;return}else if(ye.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(ye.__hasExternalTextures)Q.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xe=E.depthTexture;if(ye.__boundDepthTexture!==Xe){if(Xe!==null&&q.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Se=!0);const Ne=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[O])?G=Ne[O][$]:G=Ne[O],W=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?G=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?G=Ne[$]:G=Ne,re.copy(E.viewport),se.copy(E.scissor),De=E.scissorTest}else re.copy(Ie).multiplyScalar(le).floor(),se.copy(nt).multiplyScalar(le).floor(),De=qe;if($!==0&&(G=K),b.bindFramebuffer(U.FRAMEBUFFER,G)&&b.drawBuffers(E,G),b.viewport(re),b.scissor(se),b.setScissorTest(De),W){const ye=q.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,ye.__webglTexture,$)}else if(Se){const ye=O;for(let Ae=0;Ae<E.textures.length;Ae++){const Ne=q.get(E.textures[Ae]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ae,Ne.__webglTexture,$,ye)}}else if(E!==null&&$!==0){const ye=q.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ye.__webglTexture,$)}Y=-1},this.readRenderTargetPixels=function(E,O,$,G,W,Se,Me,ye=0){if(!(E&&E.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){b.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const Ne=E.textures[ye],Xe=Ne.format,Ye=Ne.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ye),!R.textureFormatReadable(Xe)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ye)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&$>=0&&$<=E.height-W&&U.readPixels(O,$,G,W,me.convert(Xe),me.convert(Ye),Se)}finally{const Ne=F!==null?q.get(F).__webglFramebuffer:null;b.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,O,$,G,W,Se,Me,ye=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae)if(O>=0&&O<=E.width-G&&$>=0&&$<=E.height-W){b.bindFramebuffer(U.FRAMEBUFFER,Ae);const Ne=E.textures[ye],Xe=Ne.format,Ye=Ne.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ye),!R.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Pe),U.bufferData(U.PIXEL_PACK_BUFFER,Se.byteLength,U.STREAM_READ),U.readPixels(O,$,G,W,me.convert(Xe),me.convert(Ye),0);const ut=F!==null?q.get(F).__webglFramebuffer:null;b.bindFramebuffer(U.FRAMEBUFFER,ut);const Pt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await T2(U,Pt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Pe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Se),U.deleteBuffer(Pe),U.deleteSync(Pt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,$=0){const G=Math.pow(2,-$),W=Math.floor(E.image.width*G),Se=Math.floor(E.image.height*G),Me=O!==null?O.x:0,ye=O!==null?O.y:0;Q.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Me,ye,W,Se),b.unbindTexture()},this.copyTextureToTexture=function(E,O,$=null,G=null,W=0,Se=0){let Me,ye,Ae,Ne,Xe,Ye,Pe,ut,Pt;const Rt=E.isCompressedTexture?E.mipmaps[Se]:E.image;if($!==null)Me=$.max.x-$.min.x,ye=$.max.y-$.min.y,Ae=$.isBox3?$.max.z-$.min.z:1,Ne=$.min.x,Xe=$.min.y,Ye=$.isBox3?$.min.z:0;else{const Lt=Math.pow(2,-W);Me=Math.floor(Rt.width*Lt),ye=Math.floor(Rt.height*Lt),E.isDataArrayTexture?Ae=Rt.depth:E.isData3DTexture?Ae=Math.floor(Rt.depth*Lt):Ae=1,Ne=0,Xe=0,Ye=0}G!==null?(Pe=G.x,ut=G.y,Pt=G.z):(Pe=0,ut=0,Pt=0);const dt=me.convert(O.format),Zt=me.convert(O.type);let we;O.isData3DTexture?(Q.setTexture3D(O,0),we=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Q.setTexture2DArray(O,0),we=U.TEXTURE_2D_ARRAY):(Q.setTexture2D(O,0),we=U.TEXTURE_2D),b.activeTexture(U.TEXTURE0),b.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Tn=b.getParameter(U.UNPACK_ROW_LENGTH),it=b.getParameter(U.UNPACK_IMAGE_HEIGHT),jn=b.getParameter(U.UNPACK_SKIP_PIXELS),di=b.getParameter(U.UNPACK_SKIP_ROWS),Yi=b.getParameter(U.UNPACK_SKIP_IMAGES);b.pixelStorei(U.UNPACK_ROW_LENGTH,Rt.width),b.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt.height),b.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),b.pixelStorei(U.UNPACK_SKIP_ROWS,Xe),b.pixelStorei(U.UNPACK_SKIP_IMAGES,Ye);const us=E.isDataArrayTexture||E.isData3DTexture,ft=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Lt=q.get(E),Ki=q.get(O),xt=q.get(Lt.__renderTarget),Zi=q.get(Ki.__renderTarget);b.bindFramebuffer(U.READ_FRAMEBUFFER,xt.__webglFramebuffer),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,Zi.__webglFramebuffer);for(let ds=0;ds<Ae;ds++)us&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(E).__webglTexture,W,Ye+ds),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,q.get(O).__webglTexture,Se,Pt+ds)),U.blitFramebuffer(Ne,Xe,Me,ye,Pe,ut,Me,ye,U.DEPTH_BUFFER_BIT,U.NEAREST);b.bindFramebuffer(U.READ_FRAMEBUFFER,null),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||q.has(E)){const Lt=q.get(E),Ki=q.get(O);b.bindFramebuffer(U.READ_FRAMEBUFFER,J),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,k);for(let xt=0;xt<Ae;xt++)us?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.__webglTexture,W,Ye+xt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Lt.__webglTexture,W),ft?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ki.__webglTexture,Se,Pt+xt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ki.__webglTexture,Se),W!==0?U.blitFramebuffer(Ne,Xe,Me,ye,Pe,ut,Me,ye,U.COLOR_BUFFER_BIT,U.NEAREST):ft?U.copyTexSubImage3D(we,Se,Pe,ut,Pt+xt,Ne,Xe,Me,ye):U.copyTexSubImage2D(we,Se,Pe,ut,Ne,Xe,Me,ye);b.bindFramebuffer(U.READ_FRAMEBUFFER,null),b.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ft?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(we,Se,Pe,ut,Pt,Me,ye,Ae,dt,Zt,Rt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(we,Se,Pe,ut,Pt,Me,ye,Ae,dt,Rt.data):U.texSubImage3D(we,Se,Pe,ut,Pt,Me,ye,Ae,dt,Zt,Rt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Se,Pe,ut,Me,ye,dt,Zt,Rt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Se,Pe,ut,Rt.width,Rt.height,dt,Rt.data):U.texSubImage2D(U.TEXTURE_2D,Se,Pe,ut,Me,ye,dt,Zt,Rt);b.pixelStorei(U.UNPACK_ROW_LENGTH,Tn),b.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it),b.pixelStorei(U.UNPACK_SKIP_PIXELS,jn),b.pixelStorei(U.UNPACK_SKIP_ROWS,di),b.pixelStorei(U.UNPACK_SKIP_IMAGES,Yi),Se===0&&O.generateMipmaps&&U.generateMipmap(we),b.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),b.unbindTexture()},this.resetState=function(){Z=0,z=0,F=null,b.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}function lN(){const t=X.useRef(null);return X.useEffect(()=>{const e=t.current;if(!e)return;const n=e.clientWidth,i=e.clientHeight,r=new H2,s=new Pn(45,n/i,.1,1e3);s.position.z=6.5;const a=new oN({alpha:!0,antialias:!0});a.setSize(n,i),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(a.domElement);const l=new ka;r.add(l);const c=new Ac(1.8,.035,16,100),u=new Tc({color:3718648,wireframe:!1,transparent:!0,opacity:.8}),d=new In(c,u);d.rotation.x=Math.PI/3,l.add(d);const f=new Ac(1.5,.03,16,100),p=new Tc({color:12616956,transparent:!0,opacity:.7}),m=new In(f,p);m.rotation.y=Math.PI/4,l.add(m);const v=new Lp(.9,1),w=new sx({color:2450411,emissive:1920728,emissiveIntensity:.6,shininess:100,specular:6333946,wireframe:!0,transparent:!0,opacity:.85}),x=new In(v,w);l.add(x);const h=new Dp(.55,0),g=new sx({color:3718648,emissive:165063,emissiveIntensity:.8,shininess:120}),_=new In(h,g);l.add(_);const y=300,M=new Float32Array(y*3),T=new Float32Array(y*3),C=[new Ke("#60a5fa"),new Ke("#818cf8"),new Ke("#c084fc"),new Ke("#38bdf8")];for(let se=0;se<y*3;se+=3){const De=2.2+Math.random()*1.8,ke=Math.random()*Math.PI*2,He=Math.acos(Math.random()*2-1);M[se]=De*Math.sin(He)*Math.cos(ke),M[se+1]=De*Math.sin(He)*Math.sin(ke),M[se+2]=De*Math.cos(He);const H=C[Math.floor(Math.random()*C.length)];T[se]=H.r,T[se+1]=H.g,T[se+2]=H.b}const S=new Bn;S.setAttribute("position",new qn(M,3)),S.setAttribute("color",new qn(T,3));const A=new gy({size:.045,vertexColors:!0,transparent:!0,opacity:.85,blending:_f}),N=new J2(S,A);r.add(N);const P=new cT(16777215,.8);r.add(P);const I=new ux(3718648,5,20);I.position.set(5,5,5),r.add(I);const K=new ux(12616956,5,20);K.position.set(-5,-5,3),r.add(K);let J=0,k=0,Z=0,z=0;const F=se=>{const De=e.getBoundingClientRect(),ke=se.clientX-De.left,He=se.clientY-De.top;Z=ke/n*2-1,z=-(He/i)*2+1};window.addEventListener("mousemove",F);const Y=()=>{if(!e)return;const se=e.clientWidth,De=e.clientHeight;s.aspect=se/De,s.updateProjectionMatrix(),a.setSize(se,De)};window.addEventListener("resize",Y);let ee;const re=()=>{ee=requestAnimationFrame(re),J+=(Z-J)*.05,k+=(z-k)*.05,l.rotation.y+=.012,l.rotation.x=k*.4+Math.sin(Date.now()*.001)*.1,l.rotation.y=J*.4+l.rotation.y,d.rotation.z+=.015,m.rotation.z-=.02,_.rotation.y-=.02,N.rotation.y-=.003,a.render(r,s)};return re(),()=>{cancelAnimationFrame(ee),window.removeEventListener("mousemove",F),window.removeEventListener("resize",Y),e&&a.domElement&&e.removeChild(a.domElement),c.dispose(),u.dispose(),f.dispose(),p.dispose(),v.dispose(),w.dispose(),h.dispose(),g.dispose(),S.dispose(),A.dispose(),a.dispose()}},[]),o.jsxs("div",{className:"relative w-full h-[420px] sm:h-[500px] lg:h-[550px] flex items-center justify-center pointer-events-auto",children:[o.jsx("div",{ref:t,className:"w-full h-full cursor-grab active:cursor-grabbing"}),o.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center justify-center text-center space-y-2 z-10 animate-float",children:o.jsxs("div",{className:"px-5 py-2.5 rounded-2xl glass-panel-luxury border border-blue-400/50 shadow-2xl backdrop-blur-2xl flex items-center space-x-3 bg-slate-950/80",children:[o.jsx("div",{className:"w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center text-white font-black text-sm shadow-lg animate-pulse",children:"E"}),o.jsxs("div",{className:"text-left",children:[o.jsx("div",{className:"text-base font-black text-white tracking-tight leading-none",children:"ERA TECH"}),o.jsx("div",{className:"text-[9px] font-extrabold uppercase tracking-[0.3em] text-blue-400",children:"SOLUTIONS"})]})]})}),o.jsxs("div",{className:"absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 px-5 py-2 rounded-2xl glass-panel-luxury border border-blue-500/30 shadow-2xl flex items-center space-x-2.5 pointer-events-none bg-slate-950/80",children:[o.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"}),o.jsx("span",{className:"text-[11px] font-extrabold text-blue-300 tracking-wider uppercase",children:"ERA TECH 3D Emblem • Live Interactive Core"})]})]})}function Dt({children:t,className:e="",glowColor:n="rgba(59, 130, 246, 0.4)"}){const i=X.useRef(null),[r,s]=X.useState({x:0,y:0,glareX:50,glareY:50,opacity:0,active:!1}),a=c=>{if(!i.current)return;const u=i.current.getBoundingClientRect(),d=u.width,f=u.height,p=c.clientX-u.left,m=c.clientY-u.top,v=p/d-.5,x=(m/f-.5)*-10,h=v*10,g=p/d*100,_=m/f*100;s({x,y:h,glareX:g,glareY:_,opacity:1,active:!0})},l=()=>{s({x:0,y:0,glareX:50,glareY:50,opacity:0,active:!1})};return o.jsxs("div",{ref:i,onMouseMove:a,onMouseLeave:l,className:`relative transition-transform duration-200 ease-out cursor-pointer ${e}`,style:{transform:r.active?`perspective(1000px) rotateX(${r.x}deg) rotateY(${r.y}deg) scale3d(1.01, 1.01, 1.01)`:"none",backfaceVisibility:"hidden",WebkitFontSmoothing:"antialiased"},children:[o.jsx("div",{className:"pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20",style:{opacity:r.opacity,background:`radial-gradient(circle at ${r.glareX}% ${r.glareY}%, ${n} 0%, transparent 65%)`}}),o.jsx("div",{className:"relative z-10 h-full",children:t})]})}function cN(){const t=Xc(),[e,n]=X.useState("INR"),[i,r]=X.useState("mern"),[s,a]=X.useState("medium"),[l,c]=X.useState("standard"),[u,d]=X.useState({security:!0,aiChat:!1,cloudAws:!0,mobileApp:!1}),f={mern:{label:"Web Application (MERN Stack)",sub:"Full Website & Custom Web Portal",usd:499,inr:24999,weeks:2},flutter:{label:"Mobile App (Android + iOS)",sub:"PlayStore & AppStore Ready",usd:699,inr:34999,weeks:3},java:{label:"Enterprise Software & Billing",sub:"Java Spring Boot & ERP Systems",usd:999,inr:54999,weeks:4},python:{label:"AI Bot & Smart Automation",sub:"Python AI & Chatbot Pipeline",usd:799,inr:39999,weeks:3},cpp:{label:"High Speed System (C/C++)",sub:"Low Latency & Hardware Engine",usd:1200,inr:69999,weeks:4}},p={small:{label:"Startup / Basic Business",sub:"Fast launch within 7 days",factor:1,weekAdd:0},medium:{label:"Growing Business Platform",sub:"Full features & admin panel",factor:1.5,weekAdd:1},enterprise:{label:"High-Scale Custom Solution",sub:"Multi-branch & high volume",factor:2.2,weekAdd:3}},m=f[i],v=p[s];let w=m.usd*v.factor,x=m.inr*v.factor,h=m.weeks+v.weekAdd;u.security&&(w+=100,x+=5e3),u.aiChat&&(w+=150,x+=8e3),u.cloudAws&&(w+=120,x+=6e3),u.mobileApp&&(w+=250,x+=15e3),l==="urgent"&&(w*=1.15,x*=1.15,h=Math.max(1,Math.round(h*.7)));const g=e==="INR"?`₹${Math.round(x).toLocaleString("en-IN")}`:`$${Math.round(w).toLocaleString()}`,_=()=>{const M=`Estimated Cost: ${g} | Delivery: ~${h} Weeks | Service: ${m.label} | Scope: ${v.label}`;t("/get-quote",{state:{projectSummary:M,techStack:i,projectScope:s}})},y=()=>{const M=encodeURIComponent(`Hello Rahul, I would like to discuss developing my software/website project. Estimate: ${m.label} (${g}, ~${h} weeks).`);window.open(`https://wa.me/918090121332?text=${M}`,"_blank")};return o.jsxs("section",{className:"relative my-12",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl blur-3xl -z-10"}),o.jsx(Dt,{glowColor:"rgba(99, 102, 241, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-6 sm:p-10 rounded-3xl border border-slate-700/80 shadow-2xl relative overflow-hidden",children:[o.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-6",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold mb-2",children:[o.jsx(O_,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Instant Project Price & Time Calculator • 100% Free"})]}),o.jsx("h3",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:"Configure Your Live Project Budget"}),o.jsx("p",{className:"text-slate-300 text-xs sm:text-sm mt-1",children:"Select your engineering requirements and see live cost & delivery estimates immediately."})]}),o.jsxs("div",{className:"bg-slate-900/90 border border-blue-500/40 p-4 sm:p-5 rounded-2xl flex flex-col justify-between shadow-inner min-w-[240px]",children:[o.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-2 mb-2",children:[o.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider",children:"Estimated Budget"}),o.jsxs("div",{className:"flex bg-slate-800 p-0.5 rounded-lg border border-slate-700",children:[o.jsx("button",{type:"button",onClick:()=>n("INR"),className:`px-2 py-0.5 text-[10px] font-bold rounded-md transition-colors ${e==="INR"?"bg-blue-600 text-white":"text-slate-400 hover:text-white"}`,children:"🇮🇳 ₹ INR"}),o.jsx("button",{type:"button",onClick:()=>n("USD"),className:`px-2 py-0.5 text-[10px] font-bold rounded-md transition-colors ${e==="USD"?"bg-blue-600 text-white":"text-slate-400 hover:text-white"}`,children:"🌐 $ USD"})]})]}),o.jsx("div",{className:"text-3xl sm:text-4xl font-extrabold text-gradient-primary",children:g}),o.jsx("div",{className:"flex items-center justify-between text-xs font-semibold text-emerald-400 mt-2",children:o.jsxs("span",{className:"flex items-center space-x-1",children:[o.jsx(k_,{className:"w-3.5 h-3.5"}),o.jsxs("span",{children:["Estimated Delivery: ~",h," Weeks"]})]})})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[o.jsxs("div",{className:"space-y-3",children:[o.jsxs("label",{className:"text-xs font-extrabold uppercase tracking-wider text-blue-400 flex items-center space-x-1.5",children:[o.jsx(Kc,{className:"w-4 h-4"}),o.jsx("span",{children:"1. Select Service / Software Type"})]}),o.jsx("div",{className:"space-y-2",children:Object.entries(f).map(([M,T])=>o.jsxs("button",{type:"button",onClick:()=>r(M),className:`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border ${i===M?"bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-600/20":"bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800"}`,children:[o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-bold text-white",children:T.label}),o.jsx("div",{className:"text-[10px] text-slate-400",children:T.sub})]}),i===M&&o.jsx(dn,{className:"w-4.5 h-4.5 text-blue-400 flex-shrink-0"})]},M))})]}),o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"space-y-3",children:[o.jsxs("label",{className:"text-xs font-extrabold uppercase tracking-wider text-purple-400 flex items-center space-x-1.5",children:[o.jsx(_p,{className:"w-4 h-4"}),o.jsx("span",{children:"2. Business Scale & Complexity"})]}),o.jsx("div",{className:"space-y-2",children:Object.entries(p).map(([M,T])=>o.jsxs("button",{type:"button",onClick:()=>a(M),className:`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border ${s===M?"bg-purple-600/20 border-purple-500 text-white shadow-lg shadow-purple-600/20":"bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-800"}`,children:[o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-bold text-white",children:T.label}),o.jsx("div",{className:"text-[10px] text-slate-400",children:T.sub})]}),s===M&&o.jsx(dn,{className:"w-4 h-4 text-purple-400 flex-shrink-0"})]},M))})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("label",{className:"text-xs font-bold text-slate-300",children:"Delivery Speed"}),o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[o.jsx("button",{type:"button",onClick:()=>c("standard"),className:`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${l==="standard"?"bg-blue-600 text-white border-blue-400":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"}`,children:"Standard Sprint"}),o.jsx("button",{type:"button",onClick:()=>c("urgent"),className:`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${l==="urgent"?"bg-amber-500 text-slate-950 border-amber-300 font-extrabold shadow-md":"bg-slate-900 border-slate-800 text-slate-400 hover:text-white"}`,children:"⚡ Fast-Track Express"})]})]})]}),o.jsxs("div",{className:"space-y-4 flex flex-col justify-between",children:[o.jsxs("div",{className:"space-y-3",children:[o.jsxs("label",{className:"text-xs font-extrabold uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5",children:[o.jsx(Zc,{className:"w-4 h-4"}),o.jsx("span",{children:"3. Additional Modules"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs("label",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors",children:[o.jsx("span",{className:"text-xs font-semibold text-slate-200",children:"SSL Security & Data Protection"}),o.jsx("input",{type:"checkbox",checked:u.security,onChange:M=>d({...u,security:M.target.checked}),className:"rounded border-slate-700 text-blue-600 focus:ring-blue-500 h-4 w-4"})]}),o.jsxs("label",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors",children:[o.jsx("span",{className:"text-xs font-semibold text-slate-200",children:"WhatsApp / AI Chatbot Pipeline"}),o.jsx("input",{type:"checkbox",checked:u.aiChat,onChange:M=>d({...u,aiChat:M.target.checked}),className:"rounded border-slate-700 text-blue-600 focus:ring-blue-500 h-4 w-4"})]}),o.jsxs("label",{className:"flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 cursor-pointer hover:bg-slate-800 transition-colors",children:[o.jsx("span",{className:"text-xs font-semibold text-slate-200",children:"Domain & AWS Cloud Setup"}),o.jsx("input",{type:"checkbox",checked:u.cloudAws,onChange:M=>d({...u,cloudAws:M.target.checked}),className:"rounded border-slate-700 text-blue-600 focus:ring-blue-500 h-4 w-4"})]})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs("button",{type:"button",onClick:_,className:"w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-extrabold text-xs shadow-xl transition-all hover:scale-[1.02] flex items-center justify-center space-x-2",children:[o.jsx("span",{children:"Book Free Consultation & Proposal"}),o.jsx(Wi,{className:"w-4 h-4"})]}),o.jsxs("button",{type:"button",onClick:y,className:"w-full py-3 px-6 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 font-bold text-xs transition-all flex items-center justify-center space-x-2",children:[o.jsx(ns,{className:"w-4 h-4 text-emerald-400"}),o.jsx("span",{children:"Chat Directly on WhatsApp"})]})]})]})]})]})})]})}function uN(){const[t,e]=X.useState("all"),n=[{id:"all",label:"All Technologies"},{id:"mern",label:"MERN Stack 🌐"},{id:"java",label:"Enterprise Java ☕"},{id:"python",label:"AI & Python 🐍"},{id:"cpp",label:"C/C++ Systems ⚡"},{id:"mobile",label:"Mobile & Cloud 📱"}],i=[{id:1,category:"mern",name:"MERN Stack Web Development",badge:"Full-Stack React & Node",icon:"🌐",glow:"rgba(59, 130, 246, 0.5)",description:"Single-page web applications built with MongoDB, Express.js, React.js, and Node.js with server-side rendering support.",capabilities:["REST & GraphQL APIs","Real-time WebSockets","Redux / Zustand State","JWT & OAuth Authentication"]},{id:2,category:"java",name:"Java Spring Boot Enterprise",badge:"High-Concurrency Backends",icon:"☕",glow:"rgba(239, 68, 68, 0.5)",description:"Enterprise-grade microservices architecture designed for banking, healthcare, and high-concurrency enterprise workloads.",capabilities:["Spring Boot 3 & Hibernate","Kafka & RabbitMQ Messaging","PostgreSQL / Oracle DB","Microservices Isolation"]},{id:3,category:"python",name:"Python AI & Machine Learning",badge:"LLMs, PyTorch & FastAPI",icon:"🐍",glow:"rgba(168, 85, 247, 0.5)",description:"Artificial Intelligence models, computer vision, OpenAI/LLM integration, and ultra-fast Python web APIs via FastAPI.",capabilities:["LLM & RAG Pipelines","PyTorch / TensorFlow","FastAPI & Async Engine","Pandas & Data Analytics"]},{id:4,category:"cpp",name:"C & C++ Low-Latency Systems",badge:"Hardware & Trading Engines",icon:"⚡",glow:"rgba(234, 179, 8, 0.5)",description:"Low-latency financial trading algorithms, embedded hardware software, multi-threaded network drivers, and C++ memory management.",capabilities:["Sub-millisecond Speed","Socket Programming","Multi-Threaded Concurrency","Zero-Allocation Memory"]},{id:5,category:"mobile",name:"Flutter Cross-Platform Mobile",badge:"iOS & Android Apps",icon:"💙",glow:"rgba(14, 165, 233, 0.5)",description:"Beautiful, native-speed iOS and Android applications built from a single clean Dart codebase with offline sync.",capabilities:["60FPS Smooth UI","Native Device Features","Offline Data Storage","Push Notifications"]},{id:6,category:"mobile",name:"AWS Cloud & Infrastructure",badge:"DevOps & KMS Security",icon:"☁️",glow:"rgba(16, 185, 129, 0.5)",description:"Scalable AWS cloud hosting with automated Docker/Kubernetes CI/CD deployment pipelines and KMS 256-bit encryption.",capabilities:["AWS EC2, S3, ECS, Lambda","Docker & Kubernetes","KMS Data Encryption","99.99% SLA Uptime"]}],r=t==="all"?i:i.filter(s=>s.category===t);return o.jsxs("section",{className:"space-y-10 py-12",children:[o.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-4",children:[o.jsxs("div",{className:"inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold",children:[o.jsx(j_,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Core Engineering Competencies"})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:"3D Interactive Technology Ecosystem"}),o.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"Hover over any card to interact with its 3D depth. We build across Web, Enterprise, AI, Mobile, and Low-Latency Systems."})]}),o.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2",children:n.map(s=>o.jsx("button",{onClick:()=>e(s.id),className:`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all border ${t===s.id?"bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400/50 shadow-lg shadow-blue-600/30":"bg-slate-900/80 text-slate-300 hover:bg-slate-800 border-slate-800"}`,children:s.label},s.id))}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:r.map(s=>o.jsx(Dt,{glowColor:s.glow,children:o.jsxs("div",{className:"glass-panel-luxury p-8 rounded-3xl h-full flex flex-col justify-between border border-slate-800 hover:border-slate-700 space-y-6",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"text-4xl",children:s.icon}),o.jsx("span",{className:"px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[11px] font-bold",children:s.badge})]}),o.jsx("h3",{className:"text-xl font-extrabold text-white",children:s.name}),o.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed",children:s.description}),o.jsx("div",{className:"pt-2 space-y-2 border-t border-slate-800/80",children:s.capabilities.map((a,l)=>o.jsxs("div",{className:"flex items-center space-x-2 text-xs text-slate-300",children:[o.jsx(dn,{className:"w-3.5 h-3.5 text-blue-400 flex-shrink-0"}),o.jsx("span",{children:a})]},l))})]}),o.jsxs("div",{className:"pt-4 flex items-center justify-between text-xs font-bold text-blue-400",children:[o.jsx("span",{children:"Enterprise Production Ready"}),o.jsx(Wi,{className:"w-4 h-4"})]})]})},s.id))})]})}function dN(){const[t,e]=X.useState(!0),n=()=>{const i=encodeURIComponent("Hello Rahul, I would like to discuss developing a custom website or software application for my business.");window.open(`https://wa.me/918090121332?text=${i}`,"_blank")};return t?o.jsx("div",{className:"fixed bottom-6 right-4 sm:right-6 z-50 animate-bounce-short",children:o.jsxs("div",{className:"glass-panel-luxury p-3 sm:p-4 rounded-3xl border border-blue-500/40 shadow-2xl flex items-center space-x-2.5 bg-slate-950/95 backdrop-blur-2xl",children:[o.jsxs("div",{className:"hidden sm:flex items-center space-x-2 px-3 py-2 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-300 text-xs font-extrabold",children:[o.jsx(_p,{className:"w-4 h-4 text-amber-400 animate-pulse"}),o.jsx("span",{children:"Lucknow HQ • Software Agency"})]}),o.jsxs("button",{type:"button",onClick:n,className:"px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30 transition-all hover:scale-105 flex items-center space-x-1.5",children:[o.jsx(ns,{className:"w-4 h-4 fill-current"}),o.jsx("span",{children:"WhatsApp Chat"})]}),o.jsxs("a",{href:"tel:+918090121332",className:"px-3.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs shadow-lg shadow-blue-600/30 transition-all hover:scale-105 flex items-center space-x-1.5",children:[o.jsx(H_,{className:"w-4 h-4"}),o.jsx("span",{children:"Call 8090121332"})]}),o.jsxs(St,{to:"/get-quote",className:"hidden md:flex px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition-all items-center space-x-1.5",children:[o.jsx(ki,{className:"w-3.5 h-3.5 text-amber-300"}),o.jsx("span",{children:"Get Quote"})]}),o.jsx("button",{onClick:()=>e(!1),className:"p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800/80 transition-colors",title:"Minimize Dock",children:o.jsx(Po,{className:"w-4 h-4"})})]})}):o.jsxs("button",{onClick:()=>e(!0),className:"fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-2xl hover:scale-110 transition-all border border-blue-400/40 flex items-center space-x-2 font-bold text-xs",children:[o.jsx(ki,{className:"w-5 h-5 text-amber-300 animate-spin"}),o.jsx("span",{children:"Free Consultation (Call / WhatsApp)"})]})}function fN(){const{t}=D_(),[e,n]=X.useState(null),[i,r]=X.useState([]),[s,a]=X.useState([]);X.useEffect(()=>{Le.get("/api/public/info").then(d=>n(d.data)).catch(()=>{}),Le.get("/api/public/services").then(d=>r(d.data)).catch(()=>{}),Le.get("/api/public/projects").then(d=>a(d.data)).catch(()=>{})},[]);const l=()=>{const d=encodeURIComponent("Hello Rahul, I would like to discuss developing a custom website or mobile application for my business.");window.open(`https://wa.me/918090121332?text=${d}`,"_blank")},c=[{title:"100% Dedicated Founder Focus",desc:"Founder Rahul Tiwari (B.Tech CS) personally oversees and architects every project with full attention.",icon:F_,badge:"Founder Led",glow:"rgba(59, 130, 246, 0.4)"},{title:"Fast 7 to 15 Days Delivery",desc:"Agile development process ensuring rapid deployment so your product reaches the market quickly.",icon:k_,badge:"Fast Launch",glow:"rgba(16, 185, 129, 0.4)"},{title:"Modern 2026 Tech Stack",desc:"Engineered using modern MERN Stack, React 18, Node.js, Python AI, Flutter, and AWS Cloud.",icon:Kc,badge:"Modern Code",glow:"rgba(168, 85, 247, 0.4)"},{title:"Transparent Startup Pricing",desc:"No middleman margins or hidden fees. Upfront transparent packages in INR (₹) and USD ($).",icon:B_,badge:"Best Value",glow:"rgba(245, 158, 11, 0.4)"}],u=[{name:"Amitabh Kumar",company:"Founder, RetailGo (India)",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",review:"Rahul Tiwari and his team delivered our e-commerce platform and mobile application in just 10 days! Extremely hard-working and dedicated founder.",rating:5,tag:"Verified Client"},{name:"Priya Sharma",company:"Co-Founder, EduSpark Technologies",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",review:"ERA TECH SOLUTIONS built our student portal using MERN stack. Clean UI, fast page loads, and outstanding support directly from the founder.",rating:5,tag:"EdTech Client"},{name:"David Miller",company:"CEO, BrightCloud Tech (USA)",image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",review:"Working with ERA TECH was a fantastic experience. Great energy, fast communication, and delivered as promised on time.",rating:5,tag:"Global Client"}];return o.jsxs("div",{className:"space-y-24 pb-20 bg-cyber-grid bg-[#050811] text-slate-100 overflow-hidden relative",children:[o.jsx(dN,{}),o.jsxs("section",{className:"relative pt-10 sm:pt-16 lg:pt-20 overflow-hidden",children:[o.jsx("div",{className:"absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none"}),o.jsx("div",{className:"absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"}),o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[o.jsxs("div",{className:"lg:col-span-7 space-y-8 text-center lg:text-left",children:[o.jsxs("div",{className:"inline-flex items-center space-x-2.5 px-4 py-2 rounded-full badge-glowing text-blue-300 text-xs font-extrabold shadow-xl animate-float",children:[o.jsx(ki,{className:"w-4 h-4 text-amber-400 animate-pulse"}),o.jsx("span",{children:"Next-Gen Tech Agency • Founded by Rahul Tiwari (B.Tech CS)"})]}),o.jsxs("h1",{className:"text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]",children:["Transform Your Vision Into ",o.jsx("span",{className:"text-gradient-primary",children:"3D Digital"})," Platforms"]}),o.jsx("p",{className:"text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal",children:"We engineer scalable **Websites, MERN Stack Applications, Android/iOS Mobile Apps, Java Enterprise Software**, and **AI Automations** for businesses and startups."}),o.jsx("div",{className:"flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1",children:["MERN Web Apps 🌐","Android & iOS Apps 📱","Java & Python ☕","C/C++ High Performance ⚡","AWS Cloud Setup ☁️"].map((d,f)=>o.jsx("span",{className:"px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs font-bold shadow-md hover:border-blue-500/50 transition-colors",children:d},f))}),o.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4",children:[o.jsxs(St,{to:"/get-quote",className:"w-full sm:w-auto px-8 py-4 rounded-2xl btn-3d-primary text-white font-extrabold text-sm shadow-xl flex items-center justify-center space-x-2",children:[o.jsx(ki,{className:"w-4 h-4 text-amber-300"}),o.jsx("span",{children:"Start Project / Instant Quote"}),o.jsx(Wi,{className:"w-4 h-4"})]}),o.jsxs("button",{type:"button",onClick:l,className:"w-full sm:w-auto px-7 py-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-extrabold text-sm transition-all flex items-center justify-center space-x-2",children:[o.jsx(ns,{className:"w-4.5 h-4.5 text-emerald-400"}),o.jsx("span",{children:"Chat on WhatsApp"})]})]}),o.jsxs("div",{className:"pt-4 flex items-center justify-center lg:justify-start space-x-6 text-xs text-slate-400 font-semibold",children:[o.jsxs("div",{className:"flex items-center space-x-1.5",children:[o.jsx(dn,{className:"w-4 h-4 text-emerald-400"}),o.jsx("span",{children:"Lucknow, UP India HQ"})]}),o.jsxs("div",{className:"flex items-center space-x-1.5",children:[o.jsx(dn,{className:"w-4 h-4 text-blue-400"}),o.jsx("span",{children:"100% Founder Direct Attention"})]})]})]}),o.jsx("div",{className:"lg:col-span-5 relative",children:o.jsx(lN,{})})]}),o.jsxs("div",{className:"pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto",children:[o.jsx(Dt,{glowColor:"rgba(59, 130, 246, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl text-center border border-slate-800",children:[o.jsx("div",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight",children:"2026"}),o.jsx("div",{className:"text-xs sm:text-sm text-slate-400 font-semibold mt-1",children:"Tech Startup"})]})}),o.jsx(Dt,{glowColor:"rgba(168, 85, 247, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl text-center border border-slate-800",children:[o.jsx("div",{className:"text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight",children:"100%"}),o.jsx("div",{className:"text-xs sm:text-sm text-slate-400 font-semibold mt-1",children:"Dedicated Focus"})]})}),o.jsx(Dt,{glowColor:"rgba(16, 185, 129, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl text-center border border-slate-800",children:[o.jsx("div",{className:"text-2xl sm:text-3xl font-extrabold text-purple-400 tracking-tight",children:"7-15 Days"}),o.jsx("div",{className:"text-xs sm:text-sm text-slate-400 font-semibold mt-1",children:"Fast Delivery"})]})}),o.jsx(Dt,{glowColor:"rgba(245, 158, 11, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl text-center border border-slate-800",children:[o.jsx("div",{className:"text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight",children:"Best Value"}),o.jsx("div",{className:"text-xs sm:text-sm text-slate-400 font-semibold mt-1",children:"Transparent Pricing"})]})})]})]})]}),o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsx(cN,{})}),o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsx(uN,{})}),o.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[o.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-4",children:[o.jsxs("div",{className:"inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-extrabold",children:[o.jsx(_p,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Why Choose ERA TECH"})]}),o.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:"Built For Growth & Performance"}),o.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"We combine high-level technical execution with fast turnaround times and transparent communication."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:c.map((d,f)=>{const p=d.icon;return o.jsx(Dt,{glowColor:d.glow,children:o.jsxs("div",{className:"glass-panel-luxury p-7 rounded-3xl h-full flex flex-col justify-between border border-slate-800 space-y-6",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shadow-inner",children:o.jsx(p,{className:"w-6 h-6"})}),o.jsx("span",{className:"inline-block px-2.5 py-0.5 rounded-full bg-slate-800 text-[10px] font-extrabold text-blue-400 uppercase tracking-wider",children:d.badge}),o.jsx("h3",{className:"text-lg font-extrabold text-white",children:d.title}),o.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:d.desc})]}),o.jsxs("div",{className:"pt-2 text-[11px] font-bold text-slate-400 flex items-center space-x-1",children:[o.jsx(dn,{className:"w-3.5 h-3.5 text-emerald-400"}),o.jsx("span",{children:"100% Commitment"})]})]})},f)})})]}),o.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[o.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4",children:[o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-bold uppercase tracking-widest text-blue-400 mb-2",children:"Our Work"}),o.jsx("h2",{className:"text-3xl font-extrabold text-white",children:"Featured Projects & Systems"})]}),o.jsxs(St,{to:"/projects",className:"inline-flex items-center space-x-2 text-sm font-bold text-blue-400 hover:text-blue-300",children:[o.jsx("span",{children:"View All Projects"}),o.jsx(Wi,{className:"w-4 h-4"})]})]}),o.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:s.slice(0,3).map(d=>{var f;return o.jsx(Dt,{glowColor:"rgba(59, 130, 246, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury rounded-3xl overflow-hidden group border border-slate-800 h-full flex flex-col justify-between",children:[o.jsxs("div",{className:"relative h-56 overflow-hidden",children:[o.jsx("img",{src:d.image,alt:d.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),o.jsx("div",{className:"absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-300 border border-slate-700",children:d.category})]}),o.jsxs("div",{className:"p-6 space-y-4 flex-1 flex flex-col justify-between",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-lg font-extrabold text-white group-hover:text-blue-400 transition-colors",children:d.name}),o.jsx("p",{className:"text-xs text-slate-300 leading-relaxed line-clamp-2",children:d.short_desc})]}),o.jsx("div",{className:"flex flex-wrap gap-1.5 pt-2",children:(f=d.tech_stack)==null?void 0:f.map((p,m)=>o.jsx("span",{className:"px-2.5 py-0.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 font-bold",children:p},m))})]})]})},d.id)})})]}),o.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:o.jsxs("div",{className:"glass-panel-luxury p-8 sm:p-12 rounded-3xl border border-slate-800 space-y-8 relative overflow-hidden",children:[o.jsxs("div",{className:"text-center max-w-2xl mx-auto space-y-3",children:[o.jsxs("div",{className:"inline-flex items-center space-x-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider",children:[[...Array(5)].map((d,f)=>o.jsx(L0,{className:"w-4 h-4 fill-current"},f)),o.jsx("span",{className:"ml-2 text-slate-200",children:"5.0 Star Client Experience"})]}),o.jsx("h2",{className:"text-3xl font-extrabold text-white",children:"What Our Clients Say"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:u.map((d,f)=>o.jsx(Dt,{glowColor:"rgba(245, 158, 11, 0.3)",children:o.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 space-y-4 h-full flex flex-col justify-between",children:[o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("div",{className:"flex items-center space-x-1 text-amber-400",children:[...Array(d.rating)].map((p,m)=>o.jsx(L0,{className:"w-3.5 h-3.5 fill-current"},m))}),o.jsx("span",{className:"text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20",children:d.tag})]}),o.jsxs("p",{className:"text-xs text-slate-300 italic leading-relaxed",children:['"',d.review,'"']})]}),o.jsxs("div",{className:"flex items-center space-x-3 pt-3 border-t border-slate-800",children:[o.jsx("img",{src:d.image,alt:d.name,className:"w-10 h-10 rounded-full object-cover border border-slate-700"}),o.jsxs("div",{children:[o.jsx("div",{className:"text-xs font-extrabold text-white",children:d.name}),o.jsx("div",{className:"text-[11px] text-slate-400",children:d.company})]})]})]})},f))})]})}),o.jsx("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsx(Dt,{glowColor:"rgba(59, 130, 246, 0.6)",children:o.jsxs("div",{className:"glass-panel-luxury p-10 sm:p-14 rounded-3xl border border-blue-500/40 bg-gradient-to-r from-blue-900/50 via-indigo-900/40 to-purple-900/50 text-center relative overflow-hidden shadow-2xl space-y-6",children:[o.jsx("h2",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight",children:"Ready to Start Your Project?"}),o.jsx("p",{className:"text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed",children:"Connect directly with Founder Rahul Tiwari to discuss your business requirements, project timeline, and custom packages."}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 pt-2",children:[o.jsxs(St,{to:"/get-quote",className:"w-full sm:w-auto px-8 py-4 rounded-2xl btn-3d-primary text-white font-extrabold text-sm shadow-xl flex items-center justify-center space-x-2",children:[o.jsx(ki,{className:"w-4 h-4 text-amber-300"}),o.jsx("span",{children:"Get Instant Custom Proposal"})]}),o.jsxs("button",{type:"button",onClick:l,className:"w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-400/40 text-emerald-200 font-extrabold text-sm transition-all flex items-center justify-center space-x-2",children:[o.jsx(ns,{className:"w-4 h-4 text-emerald-400"}),o.jsx("span",{children:"Chat on WhatsApp"})]})]})]})})})]})}function hN(){const[t,e]=X.useState(null);X.useEffect(()=>{Le.get("/api/public/info").then(i=>e(i.data)).catch(()=>{})},[]);const n=[{year:"2023",title:"Company Founded",desc:"Founded in Lucknow, India by Rahul Tiwari (B.Tech CSE) with a focus on modern web and software development."},{year:"2024",title:"MERN & Mobile Expansion",desc:"Expanded into full-stack MERN web apps, Android & iOS Flutter mobile applications, and custom business software."},{year:"2025",title:"AI & Cloud Integration",desc:"Integrated Python AI models, smart automation tools, and AWS cloud deployment for client platforms."},{year:"2026",title:"Next-Gen 3D Platform",desc:"Upgraded to high-performance 3D web platforms with dedicated founder-led delivery."}];return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20",children:[o.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-4",children:[o.jsxs("div",{className:"inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold",children:[o.jsx(F_,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"India & Global Tech Startup"})]}),o.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold text-white",children:"Engineering Next-Gen Technology"}),o.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:(t==null?void 0:t.about_text)||"ERA TECH SOLUTIONS is a modern software company founded in 2023 by Rahul Tiwari (B.Tech Computer Science). Driven by innovation, we empower businesses with high-performance MERN Stack web development, Java enterprise software, Python AI & ML, C/C++ system engines, and mobile applications."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:n.map((i,r)=>o.jsx(Dt,{glowColor:"rgba(59, 130, 246, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4 h-full flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-3xl font-extrabold text-gradient-primary",children:i.year}),o.jsx("h2",{className:"text-lg font-extrabold text-white mt-2",children:i.title}),o.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mt-2",children:i.desc})]}),o.jsxs("div",{className:"pt-2 text-[11px] font-bold text-blue-400 flex items-center space-x-1",children:[o.jsx(dn,{className:"w-3.5 h-3.5 text-emerald-400"}),o.jsx("span",{children:"Startup Milestone"})]})]})},r))}),o.jsx(Dt,{glowColor:"rgba(168, 85, 247, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-8 sm:p-12 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8",children:[o.jsxs("div",{className:"flex items-center space-x-6",children:[o.jsx("div",{className:"w-28 h-32 sm:w-36 sm:h-40 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl shrink-0",children:o.jsx("img",{src:"/founder.jpg",alt:"Rahul Tiwari - Founder",className:"w-full h-full object-cover object-top"})}),o.jsxs("div",{className:"space-y-3 max-w-xl",children:[o.jsxs("div",{className:"inline-flex items-center space-x-2 text-xs text-blue-400 font-extrabold uppercase tracking-wider",children:[o.jsx(kE,{className:"w-4 h-4"}),o.jsx("span",{children:"Founded in 2023 by Engineering Leadership"})]}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:"Led by Rahul Tiwari (B.Tech CS)"}),o.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed italic",children:'"ERA TECH SOLUTIONS is built on a simple promise: delivering resilient software in MERN, Java, Python, C/C++ that drives measurable business growth for startups and enterprise clients."'})]})]}),o.jsx("div",{className:"shrink-0",children:o.jsx(St,{to:"/founder",className:"px-6 py-3.5 rounded-2xl btn-3d-primary text-white font-extrabold text-xs shadow-lg flex items-center space-x-2",children:o.jsx("span",{children:"View Founder Profile"})})})]})})]})}function pN(){const[t,e]=X.useState(null),[n,i]=X.useState(!1),[r,s]=X.useState({name:"",email:"",phone:"",message:""}),[a,l]=X.useState(!1),[c,u]=X.useState(!1);X.useEffect(()=>{Le.get("/api/public/founder").then(m=>e(m.data)).catch(()=>{})},[]);const d=t!=null&&t.photo&&!t.photo.includes("unsplash")?t.photo:"/founder.jpg",f=()=>{navigator.clipboard.writeText("tiwarir3398@gmail.com"),i(!0),setTimeout(()=>i(!1),3e3)},p=m=>{m.preventDefault(),l(!0),Le.post("/api/public/inquiry",{name:r.name,email:r.email,phone:r.phone,description:r.message,service_required:"Direct Founder Message to Rahul Tiwari"}).then(()=>{l(!1),u(!0),s({name:"",email:"",phone:"",message:""})}).catch(()=>{l(!1),alert("Message submitted successfully!"),u(!0)})};return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16",children:[o.jsxs("div",{className:"text-center max-w-2xl mx-auto space-y-3",children:[o.jsxs("div",{className:"inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold",children:[o.jsx(ki,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Startup Founder & Lead Architect"})]}),o.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold text-white",children:"Meet Our Founder"}),o.jsx("p",{className:"text-slate-400 text-sm",children:"Energetic tech leadership committed to building modern Web & Mobile solutions."})]}),o.jsx(Dt,{glowColor:"rgba(59, 130, 246, 0.5)",children:o.jsxs("div",{className:"glass-panel-luxury p-8 sm:p-12 rounded-3xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",children:[o.jsxs("div",{className:"lg:col-span-5 flex flex-col items-center text-center space-y-5",children:[o.jsx("div",{className:"relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden border-2 border-blue-500/40 shadow-2xl glow-border",children:o.jsx("img",{src:d,alt:(t==null?void 0:t.name)||"Rahul Tiwari",className:"w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"})}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-3xl font-extrabold text-white",children:(t==null?void 0:t.name)||"Rahul Tiwari"}),o.jsx("p",{className:"text-sm font-extrabold text-gradient-primary",children:(t==null?void 0:t.designation)||"Founder & Lead Developer"}),o.jsx("p",{className:"text-xs text-slate-400 font-semibold mt-1",children:"B.Tech Computer Science & Engineering"})]}),o.jsxs("div",{className:"flex flex-col w-full space-y-2.5 max-w-sm",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[o.jsxs("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&to=tiwarir3398@gmail.com&su=Inquiry%20for%20Rahul%20Tiwari",target:"_blank",rel:"noreferrer",className:"py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors shadow-lg",children:[o.jsx(TE,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Open Gmail Web"})]}),o.jsxs("button",{type:"button",onClick:f,className:"py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center space-x-1.5 border border-slate-700 transition-colors",children:[n?o.jsx(bE,{className:"w-3.5 h-3.5 text-emerald-400"}):o.jsx(EE,{className:"w-3.5 h-3.5 text-blue-400"}),o.jsx("span",{children:n?"Copied!":"Copy Email"})]})]}),o.jsxs("a",{href:"mailto:tiwarir3398@gmail.com",className:"py-2 rounded-xl bg-slate-900/90 text-blue-300 text-xs font-bold flex items-center justify-center space-x-2 border border-blue-500/30 hover:border-blue-400 transition-colors",children:[o.jsx(xo,{className:"w-3.5 h-3.5 text-blue-400"}),o.jsx("span",{children:"tiwarir3398@gmail.com"})]}),o.jsxs("a",{href:(t==null?void 0:t.linkedin)||"https://www.linkedin.com/in/rahul-tiwari-3838232a6",target:"_blank",rel:"noreferrer",className:"py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold flex items-center justify-center space-x-2 border border-slate-800 transition-colors",children:[o.jsx(z_,{className:"w-3.5 h-3.5 text-blue-400"}),o.jsx("span",{children:"Connect on LinkedIn"})]})]})]}),o.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx("h3",{className:"text-xs font-extrabold uppercase tracking-widest text-blue-400",children:"Founder's Story"}),o.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:"Passionate software developer and entrepreneur with a degree in Computer Science (B.Tech CSE). Founded **ERA TECH SOLUTIONS** as a modern tech startup to provide businesses, startups, and local companies with high-quality, fast, and affordable Web Applications, Mobile Apps, and Software Solutions."})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsxs("div",{className:"bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80 flex items-start space-x-3",children:[o.jsx(RE,{className:"w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5"}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase",children:"Degree"}),o.jsx("p",{className:"text-xs text-white font-bold",children:"B.Tech Computer Science (CSE)"})]})]}),o.jsxs("div",{className:"bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80 flex items-start space-x-3",children:[o.jsx(B_,{className:"w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5"}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase",children:"Commitment"}),o.jsx("p",{className:"text-xs text-white font-bold",children:"100% Founder Involvement & Support"})]})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("h4",{className:"text-xs font-extrabold uppercase tracking-widest text-blue-400",children:"Tech Stack & Expertise"}),o.jsx("div",{className:"flex flex-wrap gap-2",children:["MERN Stack","React.js","Node.js","Python AI","Java","C/C++","Flutter Mobile","AWS Cloud"].map((m,v)=>o.jsx("span",{className:"px-3 py-1 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-300",children:m},v))})]}),o.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border-l-4 border-blue-500 border-slate-800 space-y-2",children:[o.jsx(OE,{className:"w-6 h-6 text-blue-400 opacity-60"}),o.jsx("p",{className:"text-xs sm:text-sm text-slate-300 italic leading-relaxed",children:'"Our mission is to empower every business with modern, high-speed technology solutions. I personally oversee every project to ensure rapid delivery, clean architecture, and 100% client satisfaction."'}),o.jsx("div",{className:"text-[11px] font-extrabold text-blue-400 pt-1",children:"— Rahul Tiwari, Founder & CEO"})]})]})]})}),o.jsx(Dt,{glowColor:"rgba(59, 130, 246, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-8 sm:p-10 rounded-3xl border border-slate-800 max-w-3xl mx-auto space-y-6",children:[o.jsxs("div",{className:"text-center space-y-2",children:[o.jsxs("h2",{className:"text-2xl font-extrabold text-white flex items-center justify-center space-x-2",children:[o.jsx(xo,{className:"w-5 h-5 text-blue-400"}),o.jsx("span",{children:"Send Direct Email Message to Rahul Tiwari"})]}),o.jsx("p",{className:"text-xs text-slate-400",children:"Fill out this quick form to send a message directly to tiwarir3398@gmail.com."})]}),c?o.jsxs("div",{className:"p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2",children:[o.jsx(dn,{className:"w-8 h-8 text-emerald-400 mx-auto"}),o.jsx("h3",{className:"text-lg font-extrabold text-white",children:"Message Sent Successfully!"}),o.jsx("p",{className:"text-xs text-slate-300",children:"Thank you! Rahul Tiwari will review your message and get back to you shortly at your email or phone number."}),o.jsx("button",{onClick:()=>u(!1),className:"mt-2 px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-slate-200 hover:bg-slate-700",children:"Send Another Message"})]}):o.jsxs("form",{onSubmit:p,className:"space-y-4",children:[o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-300 font-semibold mb-1 block",children:"Your Name"}),o.jsx("input",{required:!0,type:"text",placeholder:"Enter your name",value:r.name,onChange:m=>s({...r,name:m.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-blue-500 focus:outline-none"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-300 font-semibold mb-1 block",children:"Your Email"}),o.jsx("input",{required:!0,type:"email",placeholder:"name@company.com",value:r.email,onChange:m=>s({...r,email:m.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-blue-500 focus:outline-none"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-300 font-semibold mb-1 block",children:"Phone / WhatsApp Number"}),o.jsx("input",{required:!0,type:"text",placeholder:"+91 8090121332",value:r.phone,onChange:m=>s({...r,phone:m.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-blue-500 focus:outline-none"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-300 font-semibold mb-1 block",children:"Message for Founder"}),o.jsx("textarea",{required:!0,rows:4,placeholder:"Describe your project, website requirements, or question...",value:r.message,onChange:m=>s({...r,message:m.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs text-white focus:border-blue-500 focus:outline-none"})]}),o.jsxs("button",{type:"submit",disabled:a,className:"w-full py-3.5 rounded-xl btn-3d-primary text-white font-extrabold text-xs shadow-lg flex items-center justify-center space-x-2",children:[o.jsx(W_,{className:"w-4 h-4"}),o.jsx("span",{children:a?"Sending Message...":"Send Direct Message to tiwarir3398@gmail.com"})]})]})]})})]})}function mN(){const[t,e]=X.useState([]),[n,i]=X.useState("All");X.useEffect(()=>{Le.get("/api/public/team").then(d=>e(d.data)).catch(()=>{})},[]);const r=[{id:"shivangi",name:"Shivangi Pandey",designation:"Chief Technology Officer (Android & iOS) (CTO, B.Tech CSE)",department:"Management",photo:"/shivangi_pandey.jpg",bio:"Directing technical architecture, Android & iOS mobile app engines, AWS cloud infrastructure, CI/CD automated deployment, and Play Store / App Store publishing.",skills:"Android & iOS, AWS Cloud, App Deployment, Flutter, Swift, Kotlin, B.Tech CSE",experience:"B.Tech CSE"},{id:"priyam",name:"Mr. Priyam Sinha",designation:"Head of Sales & Marketing",department:"Sales & Marketing",photo:"/priyam_sinha.jpg",bio:"Leading client acquisition, growth strategy, business development, and marketing campaigns at ERA TECH SOLUTIONS.",skills:"Sales Strategy, Marketing, Client Relations, Growth, B.Tech",experience:"B.Tech"},{id:"vijay",name:"Mr. Vijay Sinha",designation:"Lead Frontend Developer (BCA & MCA CSE)",department:"Development",photo:"/vijay_kushwaha.jpg",bio:"Specializing in React.js, Tailwind CSS, 3D WebGL interfaces, dynamic UI animations, and responsive web application design.",skills:"React.js, JavaScript, Tailwind CSS, 3D WebGL, BCA & MCA CSE",experience:"BCA & MCA CSE"},{id:"shailavi",name:"Shailavi Srivastava",designation:"Lead Backend Developer",department:"Development",photo:"/shailavi_srivastava.png",bio:"Specializing in Node.js, Express APIs, Java Spring Boot microservices, Python backends, and SQL/SQLite databases.",skills:"Node.js, Express, Java Spring Boot, Python, SQL, REST APIs, B.Tech CSE",experience:"B.Tech CSE"}],s=["shivangi","shailavi","priyam","vijay"],a=t.length>0?t.filter(d=>s.some(f=>d.name.toLowerCase().includes(f))):r,l=a.length>0?a:r,c=["All","Management","Sales & Marketing","Development"],u=n==="All"?l:l.filter(d=>d.department.toLowerCase().includes(n.toLowerCase()));return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[o.jsxs("div",{className:"text-center max-w-2xl mx-auto space-y-3",children:[o.jsxs("div",{className:"inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold",children:[o.jsx(ki,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Leadership & Mindpower"})]}),o.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold text-white",children:"Meet Our Team"}),o.jsx("p",{className:"text-slate-400 text-sm",children:"Dynamic tech leaders and growth strategists driving client success at ERA TECH SOLUTIONS."})]}),o.jsx(Dt,{glowColor:"rgba(59, 130, 246, 0.5)",children:o.jsxs("div",{className:"glass-panel-luxury p-8 sm:p-10 rounded-3xl border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-8 items-center",children:[o.jsx("div",{className:"md:col-span-4 flex justify-center",children:o.jsx("div",{className:"w-56 h-64 sm:w-64 sm:h-72 rounded-3xl overflow-hidden border-2 border-blue-500/40 shadow-2xl glow-border",children:o.jsx("img",{src:"/shivangi_pandey.jpg",alt:"Shivangi Pandey - CTO",className:"w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"})})}),o.jsxs("div",{className:"md:col-span-8 space-y-4",children:[o.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold",children:[o.jsx(Kc,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Chief Technology Officer (Android & iOS)"})]}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-3xl font-extrabold text-white",children:"Shivangi Pandey"}),o.jsx("p",{className:"text-sm font-extrabold text-gradient-primary mt-1",children:"CTO, B.Tech CSE | Android & iOS Engineering Leadership"})]}),o.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Directing technical architecture, cross-platform Android & iOS mobile app engines, AWS cloud infrastructure, CI/CD automated deployment, and Play Store / App Store publishing. Dedicated to delivering high-performance, robust mobile & web platforms for clients globally."}),o.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:["Android & iOS","AWS Cloud Infrastructure","Play Store & App Store Deployment","Flutter & Swift","CI/CD Pipelines","B.Tech CSE"].map((d,f)=>o.jsx("span",{className:"px-3 py-1 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-300",children:d},f))})]})]})}),o.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2",children:c.map(d=>o.jsx("button",{onClick:()=>i(d),className:`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all ${n===d?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800"}`,children:d},d))}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(d=>o.jsx(Dt,{glowColor:"rgba(59, 130, 246, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 h-full",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"relative overflow-hidden rounded-2xl h-60 border border-slate-800",children:[o.jsx("img",{src:d.photo||"/priyam_sinha.jpg",alt:d.name,className:"w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"}),o.jsx("span",{className:"absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-extrabold text-blue-400 border border-slate-700",children:d.department})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-extrabold text-white",children:d.name}),o.jsx("p",{className:"text-xs font-extrabold text-blue-400",children:d.designation})]}),o.jsx("p",{className:"text-xs text-slate-300 leading-relaxed line-clamp-3",children:d.bio}),d.skills&&o.jsx("div",{className:"flex flex-wrap gap-1.5 pt-1",children:d.skills.split(",").map((f,p)=>o.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-slate-300",children:f.trim()},p))})]}),o.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center justify-between",children:[o.jsxs("span",{className:"text-[11px] text-slate-400 font-extrabold",children:["Qualification: ",d.experience||"B.Tech"]}),o.jsx("span",{className:"text-[10px] font-extrabold text-blue-400 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20",children:"Verified Team"})]})]})},d.id))})]})}function xN(){const[t,e]=X.useState([]);X.useEffect(()=>{Le.get("/api/public/services").then(i=>e(i.data)).catch(()=>{})},[]);const n=i=>{switch(i){case"Web Development":return R0;case"Mobile App Development":return X_;case"Software Development":return BE;case"UI/UX Design":return UE;case"Cloud & Technology":return ME;case"AI / Automation":return Kc;default:return R0}};return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16",children:[o.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-3",children:[o.jsxs("div",{className:"inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-extrabold",children:[o.jsx(ki,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"3D Architecture & Engineering"})]}),o.jsx("h1",{className:"text-4xl sm:text-5xl font-extrabold text-white",children:"Full-Spectrum Engineering Capabilities"}),o.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:"From concept wireframing to high-concurrency MERN, Java, Python, and C/C++ cloud deployments, we craft robust digital systems engineered for market leadership."})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map(i=>{var s;const r=n(i.category);return o.jsx(Dt,{glowColor:"rgba(59, 130, 246, 0.45)",children:o.jsxs("div",{className:"glass-panel-luxury rounded-3xl p-8 border border-slate-800 space-y-6 flex flex-col justify-between h-full",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center shadow-inner",children:o.jsx(r,{className:"w-7 h-7"})}),o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] uppercase font-extrabold text-blue-400 tracking-wider bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20",children:i.category}),o.jsx("h2",{className:"text-xl font-extrabold text-white mt-3",children:i.title})]}),o.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:i.full_desc||i.short_desc}),o.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800/80",children:[o.jsx("h3",{className:"text-[11px] font-extrabold text-slate-400 uppercase tracking-wider",children:"Key Offerings:"}),o.jsx("ul",{className:"space-y-2",children:(s=i.features)==null?void 0:s.map((a,l)=>o.jsxs("li",{className:"flex items-start space-x-2 text-xs text-slate-300",children:[o.jsx(dn,{className:"w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5"}),o.jsx("span",{children:a})]},l))})]})]}),o.jsx("div",{className:"pt-4 border-t border-slate-800",children:o.jsxs(St,{to:"/get-quote",className:"w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-xs flex items-center justify-center space-x-2 transition-all shadow-md",children:[o.jsx("span",{children:"Request 3D Proposal"}),o.jsx(Wi,{className:"w-3.5 h-3.5"})]})})]})},i.id)})})]})}function gN(){var c;const[t,e]=X.useState([]),[n,i]=X.useState("All"),[r,s]=X.useState(null);X.useEffect(()=>{Le.get("/api/public/projects").then(u=>e(u.data)).catch(()=>{})},[]);const a=["All","MERN Stack","Java Enterprise","C/C++ Systems","Custom Software"],l=n==="All"?t:t.filter(u=>{var d;return u.category.toLowerCase().includes(n.toLowerCase())||((d=u.tech_stack)==null?void 0:d.some(f=>f.toLowerCase().includes(n.toLowerCase())))});return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[o.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-3",children:[o.jsx("h1",{className:"text-xs font-bold uppercase tracking-widest text-blue-400",children:"Portfolio & Case Studies"}),o.jsx("h2",{className:"text-4xl font-extrabold text-white",children:"MERN, Java, Python & C/C++ Projects"}),o.jsx("p",{className:"text-gray-400 text-sm",children:"Explore how we solved critical engineering bottlenecks with MERN Stack, Java Spring Boot microservices, Python AI models, and C/C++ engines."})]}),o.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2",children:a.map(u=>o.jsx("button",{onClick:()=>i(u),className:`px-5 py-2 rounded-xl text-xs font-bold transition-all ${n===u?"bg-blue-600 text-white shadow-lg shadow-blue-600/30":"bg-gray-800/80 hover:bg-gray-700 text-gray-300 border border-gray-700/60"}`,children:u},u))}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:l.map(u=>{var d;return o.jsxs("div",{className:"glass-card glass-card-hover rounded-3xl overflow-hidden border border-gray-800 flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"relative h-52 overflow-hidden",children:[o.jsx("img",{src:u.image,alt:u.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),o.jsx("span",{className:"absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-blue-300 border border-gray-700",children:u.category})]}),o.jsxs("div",{className:"p-6 space-y-3",children:[o.jsxs("div",{className:"text-[11px] text-gray-400 font-medium",children:["Client: ",u.client||"Confidential Enterprise"]}),o.jsx("h3",{className:"text-xl font-bold text-white",children:u.name}),o.jsx("p",{className:"text-xs text-gray-300 leading-relaxed line-clamp-2",children:u.short_desc}),o.jsx("div",{className:"flex flex-wrap gap-1.5 pt-2",children:(d=u.tech_stack)==null?void 0:d.map((f,p)=>o.jsx("span",{className:"px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-300 font-bold",children:f},p))})]})]}),o.jsx("div",{className:"p-6 pt-0",children:o.jsx("button",{onClick:()=>s(u),className:"w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/25 transition-all",children:"View Technical Case Study"})})]},u.id)})}),r&&o.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto",children:o.jsxs("div",{className:"glass-card bg-[#111827] max-w-3xl w-full rounded-3xl p-6 sm:p-8 border border-gray-700 space-y-6 relative max-h-[90vh] overflow-y-auto",children:[o.jsx("button",{onClick:()=>s(null),className:"absolute top-6 right-6 p-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white",children:o.jsx(Po,{className:"w-5 h-5"})}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("span",{className:"px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold",children:r.category}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:r.name}),o.jsxs("p",{className:"text-xs text-gray-400",children:["Client: ",r.client]})]}),o.jsx("div",{className:"rounded-2xl overflow-hidden h-60",children:o.jsx("img",{src:r.image,alt:r.name,className:"w-full h-full object-cover"})}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsxs("div",{className:"bg-red-500/10 border border-red-500/20 p-4 rounded-2xl space-y-2",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-red-400 font-bold text-xs uppercase",children:[o.jsx(wE,{className:"w-4 h-4"}),o.jsx("span",{children:"The Bottleneck / Problem"})]}),o.jsx("p",{className:"text-xs text-gray-300 leading-relaxed",children:r.problem||"Legacy infrastructure could not scale."})]}),o.jsxs("div",{className:"bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl space-y-2",children:[o.jsxs("div",{className:"flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase",children:[o.jsx(PE,{className:"w-4 h-4"}),o.jsx("span",{children:"Our Architecture Solution"})]}),o.jsx("p",{className:"text-xs text-gray-300 leading-relaxed",children:r.solution||"Re-architected microservices with cloud caching."})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("h4",{className:"text-xs font-bold uppercase text-gray-400",children:"Key Built Features:"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:(c=r.features)==null?void 0:c.map((u,d)=>o.jsxs("div",{className:"flex items-center space-x-2 text-xs text-gray-300 bg-gray-900/60 p-2.5 rounded-xl border border-gray-800",children:[o.jsx(dn,{className:"w-4 h-4 text-blue-400 flex-shrink-0"}),o.jsx("span",{children:u})]},d))})]}),o.jsxs("div",{className:"flex flex-wrap gap-3 pt-4 border-t border-gray-800",children:[r.live_url&&o.jsxs("a",{href:r.live_url,target:"_blank",rel:"noreferrer",className:"px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold flex items-center space-x-2",children:[o.jsx(gp,{className:"w-4 h-4"}),o.jsx("span",{children:"Visit Live Website"})]}),r.app_store_url&&o.jsxs("a",{href:r.app_store_url,target:"_blank",rel:"noreferrer",className:"px-4 py-2 rounded-xl bg-gray-800 text-gray-200 text-xs font-bold flex items-center space-x-2",children:[o.jsx(X_,{className:"w-4 h-4"}),o.jsx("span",{children:"App Store"})]})]})]})})]})}function vN(){const[t,e]=X.useState([]),[n,i]=X.useState(null),[r,s]=X.useState(!1);X.useEffect(()=>{Le.get("/api/public/products").then(l=>e(l.data)).catch(()=>{})},[]);const a=l=>{l.preventDefault(),s(!0),setTimeout(()=>{s(!1),i(null)},2500)};return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16",children:[o.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-3",children:[o.jsx("h1",{className:"text-xs font-bold uppercase tracking-widest text-blue-400",children:"Proprietary Software"}),o.jsx("h2",{className:"text-4xl font-extrabold text-white",children:"Company SaaS & Enterprise Products"}),o.jsx("p",{className:"text-gray-400 text-sm",children:"Turnkey enterprise platforms ready for instant cloud deployment, customization, and multi-tenant scaling."})]}),o.jsx("div",{className:"space-y-12",children:t.map(l=>{var c,u;return o.jsxs("div",{className:"glass-card rounded-3xl p-8 sm:p-10 border border-gray-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[o.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20",children:o.jsx(j_,{className:"w-6 h-6"})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-2xl font-bold text-white",children:l.name}),o.jsx("span",{className:"text-xs font-semibold text-emerald-400",children:l.pricing||"Custom Enterprise Plan"})]})]}),o.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:l.short_desc}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("h4",{className:"text-xs font-bold uppercase tracking-wider text-gray-400",children:"Main Modules & Features:"}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2",children:(c=l.features)==null?void 0:c.map((d,f)=>o.jsxs("div",{className:"flex items-center space-x-2 text-xs text-gray-300 bg-gray-900/60 p-2.5 rounded-xl border border-gray-800",children:[o.jsx(dn,{className:"w-4 h-4 text-blue-400 flex-shrink-0"}),o.jsx("span",{children:d})]},f))})]}),o.jsxs("div",{className:"flex flex-wrap gap-4 pt-2",children:[o.jsxs("button",{onClick:()=>i(l),className:"px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 flex items-center space-x-2",children:[o.jsx("span",{children:"Request Product Demo"}),o.jsx(Wi,{className:"w-4 h-4"})]}),l.demo_url&&o.jsxs("a",{href:l.demo_url,target:"_blank",rel:"noreferrer",className:"px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-bold border border-gray-700 flex items-center space-x-2",children:[o.jsx(FE,{className:"w-4 h-4 text-blue-400"}),o.jsx("span",{children:"Watch Demo Preview"})]})]})]}),o.jsx("div",{className:"lg:col-span-5 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl h-64 lg:h-80",children:o.jsx("img",{src:((u=l.screenshots)==null?void 0:u[0])||"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",alt:l.name,className:"w-full h-full object-cover"})})]},l.id)})}),n&&o.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:o.jsxs("div",{className:"glass-card bg-[#111827] max-w-lg w-full rounded-3xl p-6 sm:p-8 border border-gray-700 space-y-6 relative",children:[o.jsx("button",{onClick:()=>i(null),className:"absolute top-6 right-6 p-2 text-gray-400 hover:text-white",children:o.jsx(Po,{className:"w-5 h-5"})}),o.jsxs("div",{children:[o.jsxs("h3",{className:"text-xl font-bold text-white",children:["Request Demo for ",n.name]}),o.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Our sales engineering team will set up a live trial environment for you."})]}),r?o.jsxs("div",{className:"bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-6 rounded-2xl text-center space-y-2",children:[o.jsx(Zc,{className:"w-8 h-8 mx-auto"}),o.jsx("h4",{className:"font-bold text-sm",children:"Demo Request Received!"}),o.jsx("p",{className:"text-xs",children:"We will email demo credentials within 2 business hours."})]}):o.jsxs("form",{onSubmit:a,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Full Name"}),o.jsx("input",{required:!0,type:"text",placeholder:"John Doe",className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Work Email"}),o.jsx("input",{required:!0,type:"email",placeholder:"john@company.com",className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Company Name"}),o.jsx("input",{required:!0,type:"text",placeholder:"Acme Corp",className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]}),o.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl bg-blue-600 font-bold text-white text-xs hover:bg-blue-500",children:"Submit Request"})]})]})})]})}function _N(){var d;const[t,e]=X.useState([]),[n,i]=X.useState(""),[r,s]=X.useState("All"),[a,l]=X.useState(null);X.useEffect(()=>{Le.get("/api/public/blogs").then(f=>e(f.data)).catch(()=>{})},[]);const c=["All","Web Development","Mobile Apps","AI & Automation","Business"],u=t.filter(f=>{const p=r==="All"||f.category.toLowerCase().includes(r.toLowerCase()),m=f.title.toLowerCase().includes(n.toLowerCase())||f.content.toLowerCase().includes(n.toLowerCase());return p&&m});return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[o.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-3",children:[o.jsx("h1",{className:"text-xs font-bold uppercase tracking-widest text-blue-400",children:"Engineering Insights"}),o.jsx("h2",{className:"text-4xl font-extrabold text-white",children:"Tech Blog & Company News"}),o.jsx("p",{className:"text-gray-400 text-sm",children:"Deep dives into modern cloud architecture, mobile app performance, AI agents, and enterprise product engineering."})]}),o.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto",children:[o.jsxs("div",{className:"relative w-full md:w-72",children:[o.jsx(G_,{className:"w-4 h-4 text-gray-400 absolute left-3 top-3"}),o.jsx("input",{type:"text",value:n,onChange:f=>i(f.target.value),placeholder:"Search articles...",className:"w-full bg-gray-900 border border-gray-700 rounded-xl pl-9 pr-4 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"})]}),o.jsx("div",{className:"flex flex-wrap items-center gap-2",children:c.map(f=>o.jsx("button",{onClick:()=>s(f),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${r===f?"bg-blue-600 text-white":"bg-gray-800 text-gray-300 hover:bg-gray-700"}`,children:f},f))})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(f=>o.jsxs("div",{className:"glass-card glass-card-hover rounded-3xl overflow-hidden border border-gray-800 flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"relative h-48 overflow-hidden",children:[o.jsx("img",{src:f.image,alt:f.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),o.jsx("span",{className:"absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold",children:f.category})]}),o.jsxs("div",{className:"p-6 space-y-3",children:[o.jsxs("div",{className:"flex items-center space-x-4 text-[11px] text-gray-400",children:[o.jsxs("span",{className:"flex items-center space-x-1",children:[o.jsx(VE,{className:"w-3 h-3 text-blue-400"}),o.jsx("span",{children:f.author})]}),o.jsxs("span",{className:"flex items-center space-x-1",children:[o.jsx(SE,{className:"w-3 h-3 text-purple-400"}),o.jsx("span",{children:f.date})]})]}),o.jsx("h3",{className:"text-lg font-bold text-white leading-snug hover:text-blue-400 transition-colors",children:f.title}),o.jsx("p",{className:"text-xs text-gray-300 leading-relaxed line-clamp-3",children:f.content})]})]}),o.jsx("div",{className:"p-6 pt-0",children:o.jsxs("button",{onClick:()=>l(f),className:"w-full py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 font-bold text-xs flex items-center justify-center space-x-2 border border-gray-700",children:[o.jsx(_E,{className:"w-3.5 h-3.5 text-blue-400"}),o.jsx("span",{children:"Read Full Article"})]})})]},f.id))}),a&&o.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:o.jsxs("div",{className:"glass-card bg-[#111827] max-w-3xl w-full rounded-3xl p-6 sm:p-10 border border-gray-700 space-y-6 relative max-h-[90vh] overflow-y-auto",children:[o.jsx("button",{onClick:()=>l(null),className:"absolute top-6 right-6 p-2 text-gray-400 hover:text-white",children:o.jsx(Po,{className:"w-5 h-5"})}),o.jsxs("div",{className:"space-y-3",children:[o.jsx("span",{className:"px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold",children:a.category}),o.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white leading-tight",children:a.title}),o.jsxs("div",{className:"flex items-center space-x-4 text-xs text-gray-400 pt-1",children:[o.jsxs("span",{children:["By ",a.author]}),o.jsx("span",{children:"•"}),o.jsx("span",{children:a.date})]})]}),o.jsx("div",{className:"rounded-2xl overflow-hidden h-64",children:o.jsx("img",{src:a.image,alt:a.title,className:"w-full h-full object-cover"})}),o.jsx("div",{className:"prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed space-y-4",children:o.jsx("p",{children:a.content})}),o.jsxs("div",{className:"pt-4 border-t border-gray-800 flex items-center space-x-2",children:[o.jsx(jE,{className:"w-4 h-4 text-blue-400"}),o.jsx("div",{className:"flex flex-wrap gap-1.5",children:(d=a.tags)==null?void 0:d.map((f,p)=>o.jsxs("span",{className:"px-2.5 py-0.5 rounded bg-gray-800 text-[10px] text-gray-300",children:["#",f]},p))})]})]})})]})}function yN(){const[t,e]=X.useState({name:"",company_name:"",email:"",phone:"",service_required:"MERN Stack Web Development",budget:"Under ₹50,000",description:""}),[n,i]=X.useState(!1),[r,s]=X.useState(!1),a=l=>{l.preventDefault(),i(!0),Le.post("/api/public/inquiry",t).then(()=>{i(!1),s(!0),e({name:"",company_name:"",email:"",phone:"",service_required:"MERN Stack Web Development",budget:"Under ₹50,000",description:""})}).catch(c=>{var u,d;i(!1),alert("Error submitting inquiry: "+(((d=(u=c.response)==null?void 0:u.data)==null?void 0:d.error)||c.message))})};return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16",children:[o.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-3",children:[o.jsx("h1",{className:"text-xs font-bold uppercase tracking-widest text-blue-400",children:"Get In Touch"}),o.jsx("h2",{className:"text-4xl font-extrabold text-white",children:"Let's Build Your MERN, Java, Python or C/C++ Solution"}),o.jsx("p",{className:"text-gray-400 text-sm",children:"Have technical questions or ready to kick off your project? Fill out the form below or chat on WhatsApp."})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",children:[o.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[o.jsxs("div",{className:"glass-card p-6 rounded-3xl border border-gray-800 space-y-6",children:[o.jsx("h3",{className:"text-xl font-bold text-white",children:"Contact Information"}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-start space-x-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center flex-shrink-0",children:o.jsx(vf,{className:"w-5 h-5"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-bold text-white uppercase",children:"Headquarters"}),o.jsx("p",{className:"text-xs text-gray-300",children:"Engineering Chauraha, Lucknow, Uttar Pradesh, India"})]})]}),o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-600/10 text-purple-400 flex items-center justify-center flex-shrink-0",children:o.jsx(V_,{className:"w-5 h-5"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-bold text-white uppercase",children:"Call Us"}),o.jsx("p",{className:"text-xs text-gray-300",children:"+91 8090121332"})]})]}),o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-600/10 text-emerald-400 flex items-center justify-center flex-shrink-0",children:o.jsx(xo,{className:"w-5 h-5"})}),o.jsxs("div",{children:[o.jsx("h4",{className:"text-xs font-bold text-white uppercase",children:"Email Inquiry"}),o.jsx("p",{className:"text-xs text-gray-300",children:"tiwarir3398@gmail.com"})]})]})]}),o.jsxs("a",{href:"https://wa.me/918090121332",target:"_blank",rel:"noreferrer",className:"w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/30 transition-all",children:[o.jsx(ns,{className:"w-4 h-4"}),o.jsx("span",{children:"Chat directly on WhatsApp (+91 8090121332)"})]})]}),o.jsxs("div",{className:"glass-card rounded-3xl overflow-hidden border border-gray-800 h-60 relative flex items-center justify-center",children:[o.jsx("img",{src:"https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",alt:"Map Preview",className:"w-full h-full object-cover opacity-40"}),o.jsxs("div",{className:"absolute bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-xl text-center border border-gray-700",children:[o.jsx(vf,{className:"w-5 h-5 text-blue-400 mx-auto mb-1"}),o.jsx("div",{className:"text-xs font-bold text-white",children:"Engineering Chauraha"}),o.jsx("div",{className:"text-[10px] text-gray-400",children:"Lucknow, Uttar Pradesh, India"})]})]})]}),o.jsx("div",{className:"lg:col-span-7",children:o.jsxs("div",{className:"glass-card p-8 sm:p-10 rounded-3xl border border-gray-800 space-y-6",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-2xl font-bold text-white",children:"Send Us a Message"}),o.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"We respond to all technical inquiries within 4 business hours."})]}),r?o.jsxs("div",{className:"bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-8 rounded-2xl text-center space-y-3",children:[o.jsx(Zc,{className:"w-12 h-12 mx-auto"}),o.jsx("h4",{className:"font-bold text-lg",children:"Inquiry Successfully Submitted!"}),o.jsx("p",{className:"text-xs text-gray-300",children:"Thank you for reaching out. An engineering lead has been assigned to your message."}),o.jsx("button",{onClick:()=>s(!1),className:"px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs",children:"Send Another Inquiry"})]}):o.jsxs("form",{onSubmit:a,className:"space-y-4",children:[o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Full Name *"}),o.jsx("input",{required:!0,type:"text",value:t.name,onChange:l=>e({...t,name:l.target.value}),placeholder:"Alex Morgan",className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Company Name"}),o.jsx("input",{type:"text",value:t.company_name,onChange:l=>e({...t,company_name:l.target.value}),placeholder:"Nexus Corp",className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Email Address *"}),o.jsx("input",{required:!0,type:"email",value:t.email,onChange:l=>e({...t,email:l.target.value}),placeholder:"alex@nexus.com",className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Phone Number"}),o.jsx("input",{type:"tel",value:t.phone,onChange:l=>e({...t,phone:l.target.value}),placeholder:"+1 (555) 000-0000",className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Service Required"}),o.jsxs("select",{value:t.service_required,onChange:l=>e({...t,service_required:l.target.value}),className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none",children:[o.jsx("option",{value:"MERN Stack Web Development",children:"MERN Stack Web Development"}),o.jsx("option",{value:"Java Spring Boot Software",children:"Java Enterprise / Spring Boot"}),o.jsx("option",{value:"Python AI / ML & Automation",children:"Python AI / ML & Automation"}),o.jsx("option",{value:"C / C++ Low-Latency Systems",children:"C / C++ Low-Latency Systems"}),o.jsx("option",{value:"Mobile App (Flutter / React Native)",children:"Mobile App (Flutter / React Native)"}),o.jsx("option",{value:"UI/UX Design",children:"UI/UX Product Design"}),o.jsx("option",{value:"Other",children:"Other Requirement"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Project Budget"}),o.jsxs("select",{value:t.budget,onChange:l=>e({...t,budget:l.target.value}),className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none",children:[o.jsx("option",{value:"Under ₹50,000",children:"Under ₹50,000"}),o.jsx("option",{value:"₹50,000 – ₹2,00,000",children:"₹50,000 – ₹2,00,000"}),o.jsx("option",{value:"₹2,00,000 – ₹5,00,000",children:"₹2,00,000 – ₹5,00,000"}),o.jsx("option",{value:"₹5,00,000+",children:"₹5,00,000+"})]})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Project Description / Requirements"}),o.jsx("textarea",{rows:4,value:t.description,onChange:l=>e({...t,description:l.target.value}),placeholder:"Tell us about your tech goals, features required, and timeline...",className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]}),o.jsxs("div",{className:"border border-dashed border-gray-700 rounded-xl p-3 text-center",children:[o.jsx(q_,{className:"w-4 h-4 text-blue-400 mx-auto mb-1"}),o.jsx("span",{className:"text-[11px] text-gray-400",children:"Attach Brief / Spec Doc (Optional)"}),o.jsx("input",{type:"file",className:"block w-full text-xs text-gray-500 mt-1 file:mr-4 file:py-1 file:px-2 file:rounded-lg file:border-0 file:text-[10px] file:font-semibold file:bg-gray-800 file:text-gray-300"})]}),o.jsxs("button",{type:"submit",disabled:n,className:"w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all",children:[o.jsx(W_,{className:"w-4 h-4"}),o.jsx("span",{children:n?"Submitting...":"Send Inquiry"})]})]})]})})]})]})}function SN(){const[t,e]=X.useState({name:"",email:"",phone:"",project_type:"MERN Stack Web Application",budget:"₹50,000 – ₹2,00,000",timeline:"1 to 2 Months",features:[]}),[n,i]=X.useState(["MERN Stack Architecture","User Authentication & Roles","Admin Management Panel","Payment Gateway Integration"]),[r,s]=X.useState(!1),[a,l]=X.useState(!1),c=["MERN Stack (MongoDB, Express, React, Node)","Java Spring Boot Enterprise Backend","Python AI / ML / FastAPI Integration","C / C++ High Performance Engine","User Authentication & Roles","Admin Management Panel","Payment Gateway Integration","Real-time WebSockets & Push Alerts","Multi-Language (i18n) Support","Analytics & Reporting Dashboard"],u=f=>{n.includes(f)?i(n.filter(p=>p!==f)):i([...n,f])},d=f=>{f.preventDefault(),s(!0),Le.post("/api/public/quote",{...t,features:n.join(", ")}).then(()=>{s(!1),l(!0)}).catch(p=>{var m,v;s(!1),alert("Error submitting quote request: "+(((v=(m=p.response)==null?void 0:m.data)==null?void 0:v.error)||p.message))})};return o.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12",children:[o.jsxs("div",{className:"text-center max-w-2xl mx-auto space-y-3",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-400 flex items-center justify-center mx-auto mb-4",children:o.jsx(O_,{className:"w-6 h-6"})}),o.jsx("h1",{className:"text-xs font-bold uppercase tracking-widest text-blue-400",children:"Interactive Quote Generator"}),o.jsx("h2",{className:"text-4xl font-extrabold text-white",children:"MERN, Java, Python & C/C++ Project Estimate"}),o.jsx("p",{className:"text-gray-400 text-sm",children:"Select your tech stack, features, budget tier, and expected delivery timeline."})]}),o.jsx("div",{className:"glass-card p-8 sm:p-12 rounded-3xl border border-gray-800",children:a?o.jsxs("div",{className:"bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-10 rounded-2xl text-center space-y-4",children:[o.jsx(Zc,{className:"w-16 h-16 mx-auto"}),o.jsx("h3",{className:"text-2xl font-extrabold",children:"Estimate Request Submitted!"}),o.jsx("p",{className:"text-sm text-gray-300 max-w-md mx-auto",children:"Our engineering lead will review your tech selection and email a formal scope breakdown within 24 hours."}),o.jsx("button",{onClick:()=>l(!1),className:"px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs",children:"Request Another Estimate"})]}):o.jsxs("form",{onSubmit:d,className:"space-y-8",children:[o.jsxs("div",{className:"space-y-4",children:[o.jsxs("h3",{className:"text-base font-bold text-white flex items-center space-x-2",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold",children:"1"}),o.jsx("span",{children:"Contact Information"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Full Name *"}),o.jsx("input",{required:!0,type:"text",value:t.name,onChange:f=>e({...t,name:f.target.value}),placeholder:"David Clark",className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Work Email *"}),o.jsx("input",{required:!0,type:"email",value:t.email,onChange:f=>e({...t,email:f.target.value}),placeholder:"david@company.com",className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Phone Number"}),o.jsx("input",{type:"tel",value:t.phone,onChange:f=>e({...t,phone:f.target.value}),placeholder:"+1 (555) 000-0000",className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]})]})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("h3",{className:"text-base font-bold text-white flex items-center space-x-2",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold",children:"2"}),o.jsx("span",{children:"Project Scope & Technology Stack"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Technology / Project Type"}),o.jsxs("select",{value:t.project_type,onChange:f=>e({...t,project_type:f.target.value}),className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none",children:[o.jsx("option",{value:"MERN Stack Web Application",children:"MERN Stack (MongoDB, Express, React, Node)"}),o.jsx("option",{value:"Java Spring Boot Backend",children:"Java Spring Boot Enterprise Backend"}),o.jsx("option",{value:"Python AI / ML & FastAPI",children:"Python AI / ML & FastAPI Backend"}),o.jsx("option",{value:"C / C++ High Performance Engine",children:"C / C++ Low Latency Systems Engine"}),o.jsx("option",{value:"Mobile App (Flutter / React Native)",children:"Mobile App (Flutter / React Native)"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Project Budget (SRS Specified)"}),o.jsxs("select",{value:t.budget,onChange:f=>e({...t,budget:f.target.value}),className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none",children:[o.jsx("option",{value:"Under ₹50,000",children:"Under ₹50,000"}),o.jsx("option",{value:"₹50,000 – ₹2,00,000",children:"₹50,000 – ₹2,00,000"}),o.jsx("option",{value:"₹2,00,000 – ₹5,00,000",children:"₹2,00,000 – ₹5,00,000"}),o.jsx("option",{value:"₹5,00,000+",children:"₹5,00,000+"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Expected Timeline"}),o.jsxs("select",{value:t.timeline,onChange:f=>e({...t,timeline:f.target.value}),className:"w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none",children:[o.jsx("option",{value:"Under 1 Month",children:"Under 1 Month (Fast MVP)"}),o.jsx("option",{value:"1 to 2 Months",children:"1 to 2 Months"}),o.jsx("option",{value:"2 to 4 Months",children:"2 to 4 Months"}),o.jsx("option",{value:"4+ Months",children:"4+ Months Enterprise System"})]})]})]})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("h3",{className:"text-base font-bold text-white flex items-center space-x-2",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold",children:"3"}),o.jsx("span",{children:"Select Tech Features"})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:c.map(f=>{const p=n.includes(f);return o.jsxs("button",{type:"button",onClick:()=>u(f),className:`p-3 rounded-xl border text-xs font-semibold text-left flex items-center space-x-2 transition-all ${p?"bg-blue-600/20 border-blue-500 text-blue-300":"bg-gray-900/60 border-gray-800 text-gray-400 hover:border-gray-700"}`,children:[o.jsx(dn,{className:`w-4 h-4 flex-shrink-0 ${p?"text-blue-400":"text-gray-600"}`}),o.jsx("span",{children:f})]},f)})})]}),o.jsxs("div",{className:"border border-dashed border-gray-700 rounded-xl p-4 text-center",children:[o.jsx(q_,{className:"w-5 h-5 text-blue-400 mx-auto mb-1"}),o.jsx("span",{className:"text-xs text-gray-300 font-medium",children:"Attach Requirement Brief / Spec Doc (Optional)"}),o.jsx("input",{type:"file",className:"block w-full text-xs text-gray-500 mt-2 file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-gray-800 file:text-gray-300"})]}),o.jsxs("button",{type:"submit",disabled:r,className:"w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-extrabold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all",children:[o.jsx("span",{children:r?"Calculating Proposal...":"Submit Quote Request"}),o.jsx(Wi,{className:"w-4 h-4"})]})]})})]})}function bN(){const{login:t}=xp(),e=Xc(),[n,i]=X.useState(""),[r,s]=X.useState(""),[a,l]=X.useState(""),[c,u]=X.useState(!1),d=async p=>{var m,v;p.preventDefault(),l(""),u(!0);try{await t(n,r),e("/admin")}catch(w){l(((v=(m=w.response)==null?void 0:m.data)==null?void 0:v.error)||"Invalid credentials")}finally{u(!1)}},f=async(p,m)=>{var v,w;i(p),s(m),l(""),u(!0);try{await t(p,m),e("/admin")}catch(x){l(((w=(v=x.response)==null?void 0:v.data)==null?void 0:w.error)||"Invalid credentials")}finally{u(!1)}};return o.jsx("div",{className:"min-h-[75vh] flex items-center justify-center px-4 py-12",children:o.jsxs("div",{className:"glass-card max-w-md w-full p-8 rounded-3xl border border-gray-800 space-y-6",children:[o.jsxs("div",{className:"text-center space-y-2",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/20",children:o.jsx(vp,{className:"w-6 h-6"})}),o.jsx("h2",{className:"text-2xl font-extrabold text-white",children:"Admin Control Portal"}),o.jsx("p",{className:"text-xs text-gray-400",children:"Sign in to manage company website content, leads, and settings."})]}),a&&o.jsx("div",{className:"bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-xl text-xs font-semibold text-center",children:a}),o.jsxs("form",{onSubmit:d,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Admin Email"}),o.jsxs("div",{className:"relative",children:[o.jsx(xo,{className:"w-4 h-4 text-gray-500 absolute left-3 top-3"}),o.jsx("input",{required:!0,type:"email",value:n,onChange:p=>i(p.target.value),placeholder:"admin@company.com",className:"w-full bg-gray-900 border border-gray-700 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-gray-400 font-semibold mb-1 block",children:"Password"}),o.jsxs("div",{className:"relative",children:[o.jsx(LE,{className:"w-4 h-4 text-gray-500 absolute left-3 top-3"}),o.jsx("input",{required:!0,type:"password",value:r,onChange:p=>s(p.target.value),placeholder:"••••••••",className:"w-full bg-gray-900 border border-gray-700 rounded-xl pl-9 pr-4 py-2.5 text-xs text-white focus:border-blue-500 focus:outline-none"})]})]}),o.jsxs("button",{type:"submit",disabled:c,className:"w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition-all",children:[o.jsx("span",{children:c?"Authenticating...":"Sign In to Admin Panel"}),o.jsx(Wi,{className:"w-4 h-4"})]})]}),o.jsxs("div",{className:"pt-4 border-t border-gray-800 space-y-2",children:[o.jsx("h4",{className:"text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center",children:"1-Click Role Login Demo:"}),o.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[o.jsxs("button",{onClick:()=>f("admin@company.com","admin123"),className:"w-full py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold flex items-center justify-between px-4 border border-gray-700",children:[o.jsx("span",{children:"🔑 Super Admin (`admin@company.com`)"}),o.jsx(jl,{className:"w-3.5 h-3.5 text-blue-400"})]}),o.jsxs("button",{onClick:()=>f("sales@company.com","sales123"),className:"w-full py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold flex items-center justify-between px-4 border border-gray-700",children:[o.jsx("span",{children:"💼 Sales Manager (`sales@company.com`)"}),o.jsx(jl,{className:"w-3.5 h-3.5 text-purple-400"})]}),o.jsxs("button",{onClick:()=>f("hr@company.com","hr123"),className:"w-full py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold flex items-center justify-between px-4 border border-gray-700",children:[o.jsx("span",{children:"👥 HR Manager (`hr@company.com`)"}),o.jsx(jl,{className:"w-3.5 h-3.5 text-emerald-400"})]})]})]})]})})}function wN(){const{user:t,isAuthenticated:e,logout:n}=xp(),i=Xc(),[r,s]=X.useState("overview"),[a,l]=X.useState({}),[c,u]=X.useState([]),[d,f]=X.useState([]),[p,m]=X.useState([]),[v,w]=X.useState([]),[x,h]=X.useState([]),[g,_]=X.useState([]),[y,M]=X.useState([]),[T,C]=X.useState([]),[S,A]=X.useState({meta_title:"",meta_description:"",keywords:"",og_image:""}),[N,P]=X.useState({name:"",client:"",category:"Web Application",short_desc:"",image:"https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80",tech_stack:"React, Node.js, Express, MongoDB"}),[I,K]=X.useState({name:"",designation:"",department:"Development",photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",bio:"",skills:"React, Node.js, Python, Java"}),[J,k]=X.useState({title:"",department:"Development",location:"Remote",work_type:"Full-Time",salary:"$100,000 / yr",description:""}),[Z,z]=X.useState({title:"",category:"Web Development",author:"Team ERA TECH",content:"",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"}),[F,Y]=X.useState("hi"),[ee,re]=X.useState("nav_home"),[se,De]=X.useState("होम");X.useEffect(()=>{if(!e){i("/admin/login");return}ke()},[e,i]);const ke=()=>{Le.get("/api/admin/stats").then(V=>l(V.data)).catch(()=>{}),Le.get("/api/admin/inquiries").then(V=>u(V.data)).catch(()=>{}),Le.get("/api/admin/quotes").then(V=>f(V.data)).catch(()=>{}),Le.get("/api/admin/applications").then(V=>m(V.data)).catch(()=>{}),Le.get("/api/public/services").then(V=>w(V.data)).catch(()=>{}),Le.get("/api/public/projects").then(V=>h(V.data)).catch(()=>{}),Le.get("/api/public/team").then(V=>_(V.data)).catch(()=>{}),Le.get("/api/public/blogs").then(V=>M(V.data)).catch(()=>{}),Le.get("/api/public/jobs").then(V=>C(V.data)).catch(()=>{}),Le.get("/api/public/seo").then(V=>A(V.data)).catch(()=>{})},He=(V,je)=>{Le.patch(`/api/admin/inquiries/${V}`,{status:je}).then(()=>{ke()})},H=V=>{V.preventDefault(),Le.post("/api/admin/projects",{...N,tech_stack:typeof N.tech_stack=="string"?N.tech_stack.split(",").map(je=>je.trim()):N.tech_stack}).then(()=>{alert("Project added successfully to website!"),P({name:"",client:"",category:"Web Application",short_desc:"",image:"https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80",tech_stack:"React, Node.js"}),ke()})},oe=V=>{confirm("Are you sure you want to delete this project?")&&Le.delete(`/api/admin/projects/${V}`).then(()=>ke())},le=V=>{V.preventDefault(),Le.post("/api/admin/team",I).then(()=>{alert("Team member profile added successfully!"),K({name:"",designation:"",department:"Development",photo:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",bio:"",skills:"React, Node.js"}),ke()})},Oe=V=>{confirm("Delete team member profile?")&&Le.delete(`/api/admin/team/${V}`).then(()=>ke())},Ve=V=>{V.preventDefault(),Le.post("/api/admin/jobs",J).then(()=>{alert("Job opening created!"),k({title:"",department:"Development",location:"Remote",work_type:"Full-Time",salary:"$100,000 / yr",description:""}),ke()})},Ie=V=>{V.preventDefault(),Le.post("/api/admin/blogs",Z).then(()=>{alert("Blog post published!"),z({title:"",category:"Web Development",author:"Team ERA TECH",content:"",image:"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"}),ke()})},nt=V=>{V.preventDefault(),Le.post("/api/admin/translations",{lang:F,key:ee,val:se}).then(()=>{alert("Translation saved successfully!")})},qe=V=>{V.preventDefault(),Le.post("/api/admin/seo",S).then(()=>{alert("SEO metadata saved successfully!")})};return o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8",children:[o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("div",{className:"w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 flex items-center justify-center",children:o.jsx(vp,{className:"w-6 h-6"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-extrabold text-white",children:"Team & Admin Management Portal"}),o.jsxs("p",{className:"text-xs text-slate-400",children:["Welcome, ",(t==null?void 0:t.name)||(t==null?void 0:t.email)||"Team Member"," (",(t==null?void 0:t.role)||"Admin",")"]})]})]}),o.jsxs("button",{onClick:n,className:"px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold hover:bg-red-500 hover:text-white transition-colors flex items-center space-x-1.5",children:[o.jsx(DE,{className:"w-4 h-4"}),o.jsx("span",{children:"Sign Out"})]})]}),o.jsx("div",{className:"flex flex-wrap gap-2 border-b border-slate-800 pb-4",children:[{id:"overview",label:"Overview",icon:NE},{id:"inquiries",label:"Client Requests",icon:ns},{id:"projects",label:"Add / Edit Projects",icon:N0},{id:"team",label:"Add / Edit Team Profile",icon:D0},{id:"jobs",label:"Careers & Hiring",icon:yE},{id:"blogs",label:"Blogs & Articles",icon:AE},{id:"languages",label:"Languages (CMS)",icon:gp},{id:"seo",label:"SEO Settings",icon:G_}].map(V=>{const je=V.icon;return o.jsxs("button",{onClick:()=>s(V.id),className:`px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center space-x-2 transition-all border ${r===V.id?"bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30":"bg-slate-900/80 text-slate-300 hover:bg-slate-800 border-slate-800"}`,children:[o.jsx(je,{className:"w-4 h-4"}),o.jsx("span",{children:V.label})]},V.id)})}),r==="overview"&&o.jsxs("div",{className:"space-y-8",children:[o.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[o.jsx(Dt,{glowColor:"rgba(59, 130, 246, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 text-center",children:[o.jsx("div",{className:"text-3xl font-extrabold text-white",children:a.inquiries_count||0}),o.jsx("div",{className:"text-xs text-slate-400 font-semibold mt-1",children:"Inquiries"})]})}),o.jsx(Dt,{glowColor:"rgba(168, 85, 247, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 text-center",children:[o.jsx("div",{className:"text-3xl font-extrabold text-blue-400",children:x.length||0}),o.jsx("div",{className:"text-xs text-slate-400 font-semibold mt-1",children:"Published Projects"})]})}),o.jsx(Dt,{glowColor:"rgba(16, 185, 129, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 text-center",children:[o.jsx("div",{className:"text-3xl font-extrabold text-purple-400",children:g.length||0}),o.jsx("div",{className:"text-xs text-slate-400 font-semibold mt-1",children:"Team Members"})]})}),o.jsx(Dt,{glowColor:"rgba(245, 158, 11, 0.4)",children:o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 text-center",children:[o.jsx("div",{className:"text-3xl font-extrabold text-emerald-400",children:a.jobs_count||0}),o.jsx("div",{className:"text-xs text-slate-400 font-semibold mt-1",children:"Open Roles"})]})})]}),o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4",children:[o.jsx("h2",{className:"text-lg font-extrabold text-white",children:"Recent Client Inquiries & Quote Requests"}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[o.jsx("thead",{className:"bg-slate-900 text-slate-400 uppercase text-[10px]",children:o.jsxs("tr",{children:[o.jsx("th",{className:"p-3",children:"Client"}),o.jsx("th",{className:"p-3",children:"Subject / Details"}),o.jsx("th",{className:"p-3",children:"Budget"}),o.jsx("th",{className:"p-3",children:"Date"}),o.jsx("th",{className:"p-3",children:"Status"})]})}),o.jsx("tbody",{className:"divide-y divide-slate-800",children:c.slice(0,5).map(V=>o.jsxs("tr",{children:[o.jsxs("td",{className:"p-3 font-bold text-white",children:[V.name,o.jsx("br",{}),o.jsx("span",{className:"text-[10px] text-slate-400",children:V.email})]}),o.jsx("td",{className:"p-3",children:V.subject||V.message}),o.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:V.budget||"N/A"}),o.jsx("td",{className:"p-3 text-slate-400",children:new Date(V.created_at).toLocaleDateString()}),o.jsx("td",{className:"p-3",children:o.jsx("span",{className:"px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold",children:V.status||"New"})})]},V.id))})]})})]})]}),r==="inquiries"&&o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4",children:[o.jsx("h2",{className:"text-lg font-extrabold text-white",children:"All Client Leads & Quotes"}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[o.jsx("thead",{className:"bg-slate-900 text-slate-400 uppercase text-[10px]",children:o.jsxs("tr",{children:[o.jsx("th",{className:"p-3",children:"Client"}),o.jsx("th",{className:"p-3",children:"Message / Summary"}),o.jsx("th",{className:"p-3",children:"Phone"}),o.jsx("th",{className:"p-3",children:"Status Action"})]})}),o.jsx("tbody",{className:"divide-y divide-slate-800",children:c.map(V=>o.jsxs("tr",{children:[o.jsxs("td",{className:"p-3 font-bold text-white",children:[V.name,o.jsx("br",{}),o.jsx("span",{className:"text-[10px] text-slate-400",children:V.email})]}),o.jsx("td",{className:"p-3",children:V.message}),o.jsx("td",{className:"p-3 text-blue-400",children:V.phone||"N/A"}),o.jsx("td",{className:"p-3",children:o.jsxs("select",{value:V.status||"new",onChange:je=>He(V.id,je.target.value),className:"bg-slate-900 border border-slate-700 rounded-lg p-1 text-xs text-white",children:[o.jsx("option",{value:"new",children:"New"}),o.jsx("option",{value:"contacted",children:"Contacted"}),o.jsx("option",{value:"closed",children:"Closed"})]})})]},V.id))})]})})]}),r==="projects"&&o.jsxs("div",{className:"space-y-8",children:[o.jsxs("form",{onSubmit:H,className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4",children:[o.jsxs("h2",{className:"text-lg font-extrabold text-white flex items-center space-x-2",children:[o.jsx(N0,{className:"w-5 h-5 text-blue-400"}),o.jsx("span",{children:"Add New Project to Website Showcase"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Project Name"}),o.jsx("input",{required:!0,placeholder:"e.g. RetailGo E-Commerce App",value:N.name,onChange:V=>P({...N,name:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Client Name / Category"}),o.jsx("input",{placeholder:"e.g. RetailGo Pvt Ltd",value:N.client,onChange:V=>P({...N,client:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Category"}),o.jsxs("select",{value:N.category,onChange:V=>P({...N,category:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white",children:[o.jsx("option",{value:"Web Application",children:"Web Application (MERN)"}),o.jsx("option",{value:"Mobile App",children:"Mobile App (Flutter / Android)"}),o.jsx("option",{value:"Enterprise Software",children:"Enterprise Software (Java / ERP)"}),o.jsx("option",{value:"AI & Automation",children:"AI & Automation (Python)"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Tech Stack (comma separated)"}),o.jsx("input",{placeholder:"React, Node.js, Express, MongoDB",value:N.tech_stack,onChange:V=>P({...N,tech_stack:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Project Image URL"}),o.jsx("input",{placeholder:"Image URL (e.g. https://...)",value:N.image,onChange:V=>P({...N,image:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Short Description"}),o.jsx("textarea",{rows:3,placeholder:"Describe the project features and achievements...",value:N.short_desc,onChange:V=>P({...N,short_desc:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]}),o.jsx("button",{type:"submit",className:"px-6 py-3 rounded-xl btn-3d-primary text-white font-extrabold text-xs shadow-lg",children:"Save & Publish Project"})]}),o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4",children:[o.jsxs("h2",{className:"text-lg font-extrabold text-white",children:["Live Published Projects (",x.length,")"]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:x.map(V=>o.jsxs("div",{className:"bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-3",children:[o.jsx("img",{src:V.image,alt:V.name,className:"w-full h-32 object-cover rounded-xl"}),o.jsx("h3",{className:"font-extrabold text-white text-sm",children:V.name}),o.jsx("p",{className:"text-xs text-slate-400 line-clamp-2",children:V.short_desc}),o.jsx("button",{onClick:()=>oe(V.id),className:"w-full py-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white font-bold text-xs transition-colors",children:"Delete Project"})]},V.id))})]})]}),r==="team"&&o.jsxs("div",{className:"space-y-8",children:[o.jsxs("form",{onSubmit:le,className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4",children:[o.jsxs("h2",{className:"text-lg font-extrabold text-white flex items-center space-x-2",children:[o.jsx(D0,{className:"w-5 h-5 text-emerald-400"}),o.jsx("span",{children:"Add Team Member Profile Information"})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Member Name"}),o.jsx("input",{required:!0,placeholder:"e.g. Devendra Sharma",value:I.name,onChange:V=>K({...I,name:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Designation / Role"}),o.jsx("input",{required:!0,placeholder:"e.g. Lead Full-Stack Developer",value:I.designation,onChange:V=>K({...I,designation:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Department"}),o.jsxs("select",{value:I.department,onChange:V=>K({...I,department:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white",children:[o.jsx("option",{value:"Development",children:"Development"}),o.jsx("option",{value:"Design",children:"Design"}),o.jsx("option",{value:"Marketing",children:"Marketing"}),o.jsx("option",{value:"Sales",children:"Sales"}),o.jsx("option",{value:"HR",children:"HR"})]})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Photo URL"}),o.jsx("input",{placeholder:"Photo URL",value:I.photo,onChange:V=>K({...I,photo:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Bio & Technical Skills"}),o.jsx("textarea",{rows:2,placeholder:"Describe experience and technical skills...",value:I.bio,onChange:V=>K({...I,bio:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]}),o.jsx("button",{type:"submit",className:"px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg",children:"Save Team Member Profile"})]}),o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4",children:[o.jsxs("h2",{className:"text-lg font-extrabold text-white",children:["Team Members (",g.length,")"]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:g.map(V=>o.jsxs("div",{className:"bg-slate-900 p-4 rounded-2xl border border-slate-800 flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsx("img",{src:V.photo,alt:V.name,className:"w-10 h-10 rounded-full object-cover"}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-extrabold text-white text-sm",children:V.name}),o.jsx("p",{className:"text-xs text-blue-400",children:V.designation})]})]}),o.jsx("button",{onClick:()=>Oe(V.id),className:"p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors",children:o.jsx(zE,{className:"w-4 h-4"})})]},V.id))})]})]}),r==="jobs"&&o.jsxs("div",{className:"space-y-8",children:[o.jsxs("form",{onSubmit:Ve,className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4",children:[o.jsx("h2",{className:"text-lg font-extrabold text-white",children:"Post New Job Opening"}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[o.jsx("input",{required:!0,placeholder:"Job Title",value:J.title,onChange:V=>k({...J,title:V.target.value}),className:"bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"}),o.jsx("input",{placeholder:"Location",value:J.location,onChange:V=>k({...J,location:V.target.value}),className:"bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"}),o.jsx("input",{placeholder:"Salary",value:J.salary,onChange:V=>k({...J,salary:V.target.value}),className:"bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]}),o.jsx("textarea",{rows:2,placeholder:"Job Description",value:J.description,onChange:V=>k({...J,description:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"}),o.jsx("button",{type:"submit",className:"px-6 py-2.5 rounded-xl btn-3d-primary text-white font-extrabold text-xs",children:"Publish Job Opening"})]}),o.jsxs("div",{className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4",children:[o.jsxs("h2",{className:"text-lg font-extrabold text-white",children:["Candidate Applications (",p.length,")"]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[o.jsx("thead",{className:"bg-slate-900 text-slate-400 uppercase text-[10px]",children:o.jsxs("tr",{children:[o.jsx("th",{className:"p-3",children:"Candidate"}),o.jsx("th",{className:"p-3",children:"Job Applied"}),o.jsx("th",{className:"p-3",children:"Contact"}),o.jsx("th",{className:"p-3",children:"Cover Note"})]})}),o.jsx("tbody",{className:"divide-y divide-slate-800",children:p.map(V=>o.jsxs("tr",{children:[o.jsx("td",{className:"p-3 font-bold text-white",children:V.name}),o.jsx("td",{className:"p-3 text-blue-400 font-semibold",children:V.job_title}),o.jsxs("td",{className:"p-3",children:[V.email,o.jsx("br",{}),o.jsx("span",{className:"text-[10px] text-slate-400",children:V.phone})]}),o.jsx("td",{className:"p-3 text-[11px] text-slate-300",children:V.cover_letter})]},V.id))})]})})]})]}),r==="blogs"&&o.jsxs("form",{onSubmit:Ie,className:"glass-panel-luxury p-6 rounded-3xl border border-slate-800 space-y-4",children:[o.jsx("h2",{className:"text-lg font-extrabold text-white",children:"Publish New Blog Article"}),o.jsx("input",{required:!0,placeholder:"Blog Title",value:Z.title,onChange:V=>z({...Z,title:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"}),o.jsx("textarea",{rows:4,placeholder:"Article Content",value:Z.content,onChange:V=>z({...Z,content:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"}),o.jsx("button",{type:"submit",className:"px-6 py-2.5 rounded-xl btn-3d-primary text-white font-extrabold text-xs",children:"Publish Article"})]}),r==="languages"&&o.jsxs("div",{className:"glass-panel-luxury p-8 rounded-3xl border border-slate-800 space-y-6 max-w-2xl",children:[o.jsx("h2",{className:"text-xl font-extrabold text-white",children:"Multi-Language String Dictionary (EN, HI, AR)"}),o.jsxs("form",{onSubmit:nt,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Language"}),o.jsxs("select",{value:F,onChange:V=>Y(V.target.value),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white",children:[o.jsx("option",{value:"en",children:"English (en)"}),o.jsx("option",{value:"hi",children:"Hindi (hi)"}),o.jsx("option",{value:"ar",children:"Arabic (ar)"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Translation Key Name"}),o.jsx("input",{required:!0,type:"text",value:ee,onChange:V=>re(V.target.value),placeholder:"e.g. nav_home",className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Translated String Value"}),o.jsx("input",{required:!0,type:"text",value:se,onChange:V=>De(V.target.value),placeholder:"e.g. Home",className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]}),o.jsxs("button",{type:"submit",className:"w-full py-3 rounded-xl btn-3d-primary font-extrabold text-white text-xs flex items-center justify-center space-x-2",children:[o.jsx(P0,{className:"w-4 h-4"}),o.jsx("span",{children:"Save String Translation"})]})]})]}),r==="seo"&&o.jsxs("div",{className:"glass-panel-luxury p-8 rounded-3xl border border-slate-800 space-y-6 max-w-2xl",children:[o.jsx("h2",{className:"text-xl font-extrabold text-white",children:"SEO & Social Meta Tags"}),o.jsxs("form",{onSubmit:qe,className:"space-y-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Meta Title"}),o.jsx("input",{type:"text",value:S.meta_title||"",onChange:V=>A({...S,meta_title:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"text-xs text-slate-400 font-semibold mb-1 block",children:"Meta Description"}),o.jsx("textarea",{rows:3,value:S.meta_description||"",onChange:V=>A({...S,meta_description:V.target.value}),className:"w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs text-white"})]}),o.jsxs("button",{type:"submit",className:"w-full py-3 rounded-xl btn-3d-primary font-extrabold text-white text-xs flex items-center justify-center space-x-2",children:[o.jsx(P0,{className:"w-4 h-4"}),o.jsx("span",{children:"Save Meta Tags"})]})]})]})]})}function MN(){return o.jsxs("div",{className:"min-h-screen flex flex-col justify-between bg-[#0b0f19] text-gray-100 selection:bg-blue-600 selection:text-white",children:[o.jsx(GE,{}),o.jsx("main",{className:"flex-grow",children:o.jsxs(sw,{children:[o.jsx(Rn,{path:"/",element:o.jsx(fN,{})}),o.jsx(Rn,{path:"/about",element:o.jsx(hN,{})}),o.jsx(Rn,{path:"/founder",element:o.jsx(pN,{})}),o.jsx(Rn,{path:"/team",element:o.jsx(mN,{})}),o.jsx(Rn,{path:"/services",element:o.jsx(xN,{})}),o.jsx(Rn,{path:"/projects",element:o.jsx(gN,{})}),o.jsx(Rn,{path:"/products",element:o.jsx(vN,{})}),o.jsx(Rn,{path:"/blog",element:o.jsx(_N,{})}),o.jsx(Rn,{path:"/contact",element:o.jsx(yN,{})}),o.jsx(Rn,{path:"/get-quote",element:o.jsx(SN,{})}),o.jsx(Rn,{path:"/admin/login",element:o.jsx(bN,{})}),o.jsx(Rn,{path:"/admin",element:o.jsx(wN,{})})]})}),o.jsx(WE,{})]})}gd.createRoot(document.getElementById("root")).render(o.jsx(Xx.StrictMode,{children:o.jsx(fw,{children:o.jsx(pE,{children:o.jsx(mE,{children:o.jsx(MN,{})})})})}));
