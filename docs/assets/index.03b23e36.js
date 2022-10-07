(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function B0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $e={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ss=Symbol.for("react.element"),j0=Symbol.for("react.portal"),H0=Symbol.for("react.fragment"),W0=Symbol.for("react.strict_mode"),q0=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),G0=Symbol.for("react.context"),Q0=Symbol.for("react.forward_ref"),Y0=Symbol.for("react.suspense"),X0=Symbol.for("react.memo"),J0=Symbol.for("react.lazy"),Cd=Symbol.iterator;function Z0(t){return t===null||typeof t!="object"?null:(t=Cd&&t[Cd]||t["@@iterator"],typeof t=="function"?t:null)}var Zp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},em=Object.assign,tm={};function ni(t,e,n){this.props=t,this.context=e,this.refs=tm,this.updater=n||Zp}ni.prototype.isReactComponent={};ni.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ni.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nm(){}nm.prototype=ni.prototype;function xc(t,e,n){this.props=t,this.context=e,this.refs=tm,this.updater=n||Zp}var Pc=xc.prototype=new nm;Pc.constructor=xc;em(Pc,ni.prototype);Pc.isPureReactComponent=!0;var Nd=Array.isArray,rm=Object.prototype.hasOwnProperty,Oc={current:null},im={key:!0,ref:!0,__self:!0,__source:!0};function sm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rm.call(e,r)&&!im.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ss,type:t,key:s,ref:o,props:i,_owner:Oc.current}}function ew(t,e){return{$$typeof:Ss,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ss}function tw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ad=/\/+/g;function wl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tw(""+t.key):e.toString(36)}function Eo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ss:case j0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+wl(o,0):r,Nd(i)?(n="",t!=null&&(n=t.replace(Ad,"$&/")+"/"),Eo(i,e,n,"",function(u){return u})):i!=null&&(Lc(i)&&(i=ew(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ad,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Nd(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+wl(s,a);o+=Eo(s,e,n,l,i)}else if(l=Z0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+wl(s,a++),o+=Eo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qs(t,e,n){if(t==null)return t;var r=[],i=0;return Eo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function nw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Be={current:null},So={transition:null},rw={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:So,ReactCurrentOwner:Oc};b.Children={map:Qs,forEach:function(t,e,n){Qs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qs(t,function(){e++}),e},toArray:function(t){return Qs(t,function(e){return e})||[]},only:function(t){if(!Lc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};b.Component=ni;b.Fragment=H0;b.Profiler=q0;b.PureComponent=xc;b.StrictMode=W0;b.Suspense=Y0;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rw;b.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=em({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Oc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rm.call(e,l)&&!im.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ss,type:t.type,key:i,ref:s,props:r,_owner:o}};b.createContext=function(t){return t={$$typeof:G0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:K0,_context:t},t.Consumer=t};b.createElement=sm;b.createFactory=function(t){var e=sm.bind(null,t);return e.type=t,e};b.createRef=function(){return{current:null}};b.forwardRef=function(t){return{$$typeof:Q0,render:t}};b.isValidElement=Lc;b.lazy=function(t){return{$$typeof:J0,_payload:{_status:-1,_result:t},_init:nw}};b.memo=function(t,e){return{$$typeof:X0,type:t,compare:e===void 0?null:e}};b.startTransition=function(t){var e=So.transition;So.transition={};try{t()}finally{So.transition=e}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(t,e){return Be.current.useCallback(t,e)};b.useContext=function(t){return Be.current.useContext(t)};b.useDebugValue=function(){};b.useDeferredValue=function(t){return Be.current.useDeferredValue(t)};b.useEffect=function(t,e){return Be.current.useEffect(t,e)};b.useId=function(){return Be.current.useId()};b.useImperativeHandle=function(t,e,n){return Be.current.useImperativeHandle(t,e,n)};b.useInsertionEffect=function(t,e){return Be.current.useInsertionEffect(t,e)};b.useLayoutEffect=function(t,e){return Be.current.useLayoutEffect(t,e)};b.useMemo=function(t,e){return Be.current.useMemo(t,e)};b.useReducer=function(t,e,n){return Be.current.useReducer(t,e,n)};b.useRef=function(t){return Be.current.useRef(t)};b.useState=function(t){return Be.current.useState(t)};b.useSyncExternalStore=function(t,e,n){return Be.current.useSyncExternalStore(t,e,n)};b.useTransition=function(){return Be.current.useTransition()};b.version="18.2.0";(function(t){t.exports=b})($e);const iw=B0($e.exports);var cu={},om={exports:{}},it={},am={exports:{}},lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(k,$){var U=k.length;k.push($);e:for(;0<U;){var oe=U-1>>>1,ge=k[oe];if(0<i(ge,$))k[oe]=$,k[U]=ge,U=oe;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var $=k[0],U=k.pop();if(U!==$){k[0]=U;e:for(var oe=0,ge=k.length,Ks=ge>>>1;oe<Ks;){var Dn=2*(oe+1)-1,vl=k[Dn],xn=Dn+1,Gs=k[xn];if(0>i(vl,U))xn<ge&&0>i(Gs,vl)?(k[oe]=Gs,k[xn]=U,oe=xn):(k[oe]=vl,k[Dn]=U,oe=Dn);else if(xn<ge&&0>i(Gs,U))k[oe]=Gs,k[xn]=U,oe=xn;else break e}}return $}function i(k,$){var U=k.sortIndex-$.sortIndex;return U!==0?U:k.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,g=!1,y=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=k)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function v(k){if(E=!1,m(k),!y)if(n(l)!==null)y=!0,gl(T);else{var $=n(u);$!==null&&yl(v,$.startTime-k)}}function T(k,$){y=!1,E&&(E=!1,p(R),R=-1),g=!0;var U=f;try{for(m($),h=n(l);h!==null&&(!(h.expirationTime>$)||k&&!dt());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var ge=oe(h.expirationTime<=$);$=t.unstable_now(),typeof ge=="function"?h.callback=ge:h===n(l)&&r(l),m($)}else r(l);h=n(l)}if(h!==null)var Ks=!0;else{var Dn=n(u);Dn!==null&&yl(v,Dn.startTime-$),Ks=!1}return Ks}finally{h=null,f=U,g=!1}}var C=!1,N=null,R=-1,Y=5,V=-1;function dt(){return!(t.unstable_now()-V<Y)}function ci(){if(N!==null){var k=t.unstable_now();V=k;var $=!0;try{$=N(!0,k)}finally{$?hi():(C=!1,N=null)}}else C=!1}var hi;if(typeof d=="function")hi=function(){d(ci)};else if(typeof MessageChannel<"u"){var kd=new MessageChannel,b0=kd.port2;kd.port1.onmessage=ci,hi=function(){b0.postMessage(null)}}else hi=function(){x(ci,0)};function gl(k){N=k,C||(C=!0,hi())}function yl(k,$){R=x(function(){k(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(k){k.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,gl(T))},t.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<k?Math.floor(1e3/k):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(k){switch(f){case 1:case 2:case 3:var $=3;break;default:$=f}var U=f;f=$;try{return k()}finally{f=U}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(k,$){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var U=f;f=k;try{return $()}finally{f=U}},t.unstable_scheduleCallback=function(k,$,U){var oe=t.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?oe+U:oe):U=oe,k){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=U+ge,k={id:c++,callback:$,priorityLevel:k,startTime:U,expirationTime:ge,sortIndex:-1},U>oe?(k.sortIndex=U,e(u,k),n(l)===null&&k===n(u)&&(E?(p(R),R=-1):E=!0,yl(v,U-oe))):(k.sortIndex=ge,e(l,k),y||g||(y=!0,gl(T))),k},t.unstable_shouldYield=dt,t.unstable_wrapCallback=function(k){var $=f;return function(){var U=f;f=$;try{return k.apply(this,arguments)}finally{f=U}}}})(lm);(function(t){t.exports=lm})(am);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um=$e.exports,nt=am.exports;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cm=new Set,ji={};function or(t,e){br(t,e),br(t+"Capture",e)}function br(t,e){for(ji[t]=e,t=0;t<e.length;t++)cm.add(e[t])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=Object.prototype.hasOwnProperty,sw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rd={},Dd={};function ow(t){return hu.call(Dd,t)?!0:hu.call(Rd,t)?!1:sw.test(t)?Dd[t]=!0:(Rd[t]=!0,!1)}function aw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lw(t,e,n,r){if(e===null||typeof e>"u"||aw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mc=/[\-:]([a-z])/g;function $c(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mc,$c);Ae[e]=new je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mc,$c);Ae[e]=new je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mc,$c);Ae[e]=new je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new je(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new je(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uc(t,e,n,r){var i=Ae.hasOwnProperty(e)?Ae[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lw(e,n,i,r)&&(n=null),r||i===null?ow(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qt=um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ys=Symbol.for("react.element"),dr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Fc=Symbol.for("react.strict_mode"),du=Symbol.for("react.profiler"),hm=Symbol.for("react.provider"),dm=Symbol.for("react.context"),Vc=Symbol.for("react.forward_ref"),fu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),zc=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),fm=Symbol.for("react.offscreen"),xd=Symbol.iterator;function di(t){return t===null||typeof t!="object"?null:(t=xd&&t[xd]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,El;function Si(t){if(El===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);El=e&&e[1]||""}return`
`+El+t}var Sl=!1;function _l(t,e){if(!t||Sl)return"";Sl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Si(t):""}function uw(t){switch(t.tag){case 5:return Si(t.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return t=_l(t.type,!1),t;case 11:return t=_l(t.type.render,!1),t;case 1:return t=_l(t.type,!0),t;default:return""}}function mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fr:return"Fragment";case dr:return"Portal";case du:return"Profiler";case Fc:return"StrictMode";case fu:return"Suspense";case pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dm:return(t.displayName||"Context")+".Consumer";case hm:return(t._context.displayName||"Context")+".Provider";case Vc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zc:return e=t.displayName||null,e!==null?e:mu(t.type)||"Memo";case Zt:e=t._payload,t=t._init;try{return mu(t(e))}catch{}}return null}function cw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(e);case 8:return e===Fc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hw(t){var e=pm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xs(t){t._valueTracker||(t._valueTracker=hw(t))}function mm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gu(t,e){var n=e.checked;return re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Pd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gm(t,e){e=e.checked,e!=null&&Uc(t,"checked",e,!1)}function yu(t,e){gm(t,e);var n=wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vu(t,e.type,n):e.hasOwnProperty("defaultValue")&&vu(t,e.type,wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Od(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vu(t,e,n){(e!=="number"||Vo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _i=Array.isArray;function Ar(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ld(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(_i(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wn(n)}}function ym(t,e){var n=wn(e.value),r=wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Md(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Js,wm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Js=Js||document.createElement("div"),Js.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Js.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Hi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dw=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(t){dw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ri[e]=Ri[t]})});function Em(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ri.hasOwnProperty(t)&&Ri[t]?(""+e).trim():e+"px"}function Sm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Em(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var fw=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Su(t,e){if(e){if(fw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function _u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tu=null;function bc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Iu=null,Rr=null,Dr=null;function $d(t){if(t=Is(t)){if(typeof Iu!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Oa(e),Iu(t.stateNode,t.type,e))}}function _m(t){Rr?Dr?Dr.push(t):Dr=[t]:Rr=t}function Tm(){if(Rr){var t=Rr,e=Dr;if(Dr=Rr=null,$d(t),e)for(t=0;t<e.length;t++)$d(e[t])}}function Im(t,e){return t(e)}function km(){}var Tl=!1;function Cm(t,e,n){if(Tl)return t(e,n);Tl=!0;try{return Im(t,e,n)}finally{Tl=!1,(Rr!==null||Dr!==null)&&(km(),Tm())}}function Wi(t,e){var n=t.stateNode;if(n===null)return null;var r=Oa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var ku=!1;if(zt)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){ku=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{ku=!1}function pw(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Di=!1,zo=null,bo=!1,Cu=null,mw={onError:function(t){Di=!0,zo=t}};function gw(t,e,n,r,i,s,o,a,l){Di=!1,zo=null,pw.apply(mw,arguments)}function yw(t,e,n,r,i,s,o,a,l){if(gw.apply(this,arguments),Di){if(Di){var u=zo;Di=!1,zo=null}else throw Error(w(198));bo||(bo=!0,Cu=u)}}function ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Nm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ud(t){if(ar(t)!==t)throw Error(w(188))}function vw(t){var e=t.alternate;if(!e){if(e=ar(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ud(i),t;if(s===r)return Ud(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Am(t){return t=vw(t),t!==null?Rm(t):null}function Rm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rm(t);if(e!==null)return e;t=t.sibling}return null}var Dm=nt.unstable_scheduleCallback,Fd=nt.unstable_cancelCallback,ww=nt.unstable_shouldYield,Ew=nt.unstable_requestPaint,ae=nt.unstable_now,Sw=nt.unstable_getCurrentPriorityLevel,Bc=nt.unstable_ImmediatePriority,xm=nt.unstable_UserBlockingPriority,Bo=nt.unstable_NormalPriority,_w=nt.unstable_LowPriority,Pm=nt.unstable_IdlePriority,Ra=null,kt=null;function Tw(t){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ra,t,void 0,(t.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Cw,Iw=Math.log,kw=Math.LN2;function Cw(t){return t>>>=0,t===0?32:31-(Iw(t)/kw|0)|0}var Zs=64,eo=4194304;function Ti(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ti(a):(s&=o,s!==0&&(r=Ti(s)))}else o=n&~i,o!==0?r=Ti(o):s!==0&&(r=Ti(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yt(e),i=1<<n,r|=t[n],e&=~i;return r}function Nw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Aw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-yt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=Nw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Om(){var t=Zs;return Zs<<=1,(Zs&4194240)===0&&(Zs=64),t}function Il(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _s(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yt(e),t[e]=n}function Rw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function Lm(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Mm,Hc,$m,Um,Fm,Au=!1,to=[],un=null,cn=null,hn=null,qi=new Map,Ki=new Map,tn=[],Dw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vd(t,e){switch(t){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":qi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ki.delete(e.pointerId)}}function pi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Is(e),e!==null&&Hc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function xw(t,e,n,r,i){switch(e){case"focusin":return un=pi(un,t,e,n,r,i),!0;case"dragenter":return cn=pi(cn,t,e,n,r,i),!0;case"mouseover":return hn=pi(hn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return qi.set(s,pi(qi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ki.set(s,pi(Ki.get(s)||null,t,e,n,r,i)),!0}return!1}function Vm(t){var e=Mn(t.target);if(e!==null){var n=ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Nm(n),e!==null){t.blockedOn=e,Fm(t.priority,function(){$m(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _o(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ru(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Tu=r,n.target.dispatchEvent(r),Tu=null}else return e=Is(n),e!==null&&Hc(e),t.blockedOn=n,!1;e.shift()}return!0}function zd(t,e,n){_o(t)&&n.delete(e)}function Pw(){Au=!1,un!==null&&_o(un)&&(un=null),cn!==null&&_o(cn)&&(cn=null),hn!==null&&_o(hn)&&(hn=null),qi.forEach(zd),Ki.forEach(zd)}function mi(t,e){t.blockedOn===e&&(t.blockedOn=null,Au||(Au=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,Pw)))}function Gi(t){function e(i){return mi(i,t)}if(0<to.length){mi(to[0],t);for(var n=1;n<to.length;n++){var r=to[n];r.blockedOn===t&&(r.blockedOn=null)}}for(un!==null&&mi(un,t),cn!==null&&mi(cn,t),hn!==null&&mi(hn,t),qi.forEach(e),Ki.forEach(e),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)Vm(n),n.blockedOn===null&&tn.shift()}var xr=Qt.ReactCurrentBatchConfig,Ho=!0;function Ow(t,e,n,r){var i=G,s=xr.transition;xr.transition=null;try{G=1,Wc(t,e,n,r)}finally{G=i,xr.transition=s}}function Lw(t,e,n,r){var i=G,s=xr.transition;xr.transition=null;try{G=4,Wc(t,e,n,r)}finally{G=i,xr.transition=s}}function Wc(t,e,n,r){if(Ho){var i=Ru(t,e,n,r);if(i===null)Ll(t,e,r,Wo,n),Vd(t,r);else if(xw(i,t,e,n,r))r.stopPropagation();else if(Vd(t,r),e&4&&-1<Dw.indexOf(t)){for(;i!==null;){var s=Is(i);if(s!==null&&Mm(s),s=Ru(t,e,n,r),s===null&&Ll(t,e,r,Wo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ll(t,e,r,null,n)}}var Wo=null;function Ru(t,e,n,r){if(Wo=null,t=bc(r),t=Mn(t),t!==null)if(e=ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Nm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wo=t,null}function zm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sw()){case Bc:return 1;case xm:return 4;case Bo:case _w:return 16;case Pm:return 536870912;default:return 16}default:return 16}}var an=null,qc=null,To=null;function bm(){if(To)return To;var t,e=qc,n=e.length,r,i="value"in an?an.value:an.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return To=i.slice(t,1<r?1-r:void 0)}function Io(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function bd(){return!1}function st(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?no:bd,this.isPropagationStopped=bd,this}return re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),e}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kc=st(ri),Ts=re({},ri,{view:0,detail:0}),Mw=st(Ts),kl,Cl,gi,Da=re({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==gi&&(gi&&t.type==="mousemove"?(kl=t.screenX-gi.screenX,Cl=t.screenY-gi.screenY):Cl=kl=0,gi=t),kl)},movementY:function(t){return"movementY"in t?t.movementY:Cl}}),Bd=st(Da),$w=re({},Da,{dataTransfer:0}),Uw=st($w),Fw=re({},Ts,{relatedTarget:0}),Nl=st(Fw),Vw=re({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),zw=st(Vw),bw=re({},ri,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bw=st(bw),jw=re({},ri,{data:0}),jd=st(jw),Hw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ww={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qw[t])?!!e[t]:!1}function Gc(){return Kw}var Gw=re({},Ts,{key:function(t){if(t.key){var e=Hw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ww[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(t){return t.type==="keypress"?Io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qw=st(Gw),Yw=re({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=st(Yw),Xw=re({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),Jw=st(Xw),Zw=re({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),e1=st(Zw),t1=re({},Da,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n1=st(t1),r1=[9,13,27,32],Qc=zt&&"CompositionEvent"in window,xi=null;zt&&"documentMode"in document&&(xi=document.documentMode);var i1=zt&&"TextEvent"in window&&!xi,Bm=zt&&(!Qc||xi&&8<xi&&11>=xi),Wd=String.fromCharCode(32),qd=!1;function jm(t,e){switch(t){case"keyup":return r1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function s1(t,e){switch(t){case"compositionend":return Hm(e);case"keypress":return e.which!==32?null:(qd=!0,Wd);case"textInput":return t=e.data,t===Wd&&qd?null:t;default:return null}}function o1(t,e){if(pr)return t==="compositionend"||!Qc&&jm(t,e)?(t=bm(),To=qc=an=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bm&&e.locale!=="ko"?null:e.data;default:return null}}var a1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!a1[t.type]:e==="textarea"}function Wm(t,e,n,r){_m(r),e=qo(e,"onChange"),0<e.length&&(n=new Kc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Pi=null,Qi=null;function l1(t){ng(t,0)}function xa(t){var e=yr(t);if(mm(e))return t}function u1(t,e){if(t==="change")return e}var qm=!1;if(zt){var Al;if(zt){var Rl="oninput"in document;if(!Rl){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),Rl=typeof Gd.oninput=="function"}Al=Rl}else Al=!1;qm=Al&&(!document.documentMode||9<document.documentMode)}function Qd(){Pi&&(Pi.detachEvent("onpropertychange",Km),Qi=Pi=null)}function Km(t){if(t.propertyName==="value"&&xa(Qi)){var e=[];Wm(e,Qi,t,bc(t)),Cm(l1,e)}}function c1(t,e,n){t==="focusin"?(Qd(),Pi=e,Qi=n,Pi.attachEvent("onpropertychange",Km)):t==="focusout"&&Qd()}function h1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xa(Qi)}function d1(t,e){if(t==="click")return xa(e)}function f1(t,e){if(t==="input"||t==="change")return xa(e)}function p1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wt=typeof Object.is=="function"?Object.is:p1;function Yi(t,e){if(wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hu.call(e,i)||!wt(t[i],e[i]))return!1}return!0}function Yd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xd(t,e){var n=Yd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yd(n)}}function Gm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qm(){for(var t=window,e=Vo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vo(t.document)}return e}function Yc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function m1(t){var e=Qm(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gm(n.ownerDocument.documentElement,n)){if(r!==null&&Yc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Xd(n,s);var o=Xd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var g1=zt&&"documentMode"in document&&11>=document.documentMode,mr=null,Du=null,Oi=null,xu=!1;function Jd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xu||mr==null||mr!==Vo(r)||(r=mr,"selectionStart"in r&&Yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oi&&Yi(Oi,r)||(Oi=r,r=qo(Du,"onSelect"),0<r.length&&(e=new Kc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mr)))}function ro(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gr={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},Dl={},Ym={};zt&&(Ym=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Pa(t){if(Dl[t])return Dl[t];if(!gr[t])return t;var e=gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ym)return Dl[t]=e[n];return t}var Xm=Pa("animationend"),Jm=Pa("animationiteration"),Zm=Pa("animationstart"),eg=Pa("transitionend"),tg=new Map,Zd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(t,e){tg.set(t,e),or(e,[t])}for(var xl=0;xl<Zd.length;xl++){var Pl=Zd[xl],y1=Pl.toLowerCase(),v1=Pl[0].toUpperCase()+Pl.slice(1);kn(y1,"on"+v1)}kn(Xm,"onAnimationEnd");kn(Jm,"onAnimationIteration");kn(Zm,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(eg,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function ef(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yw(r,e,void 0,t),t.currentTarget=null}function ng(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ef(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ef(i,a,u),s=l}}}if(bo)throw t=Cu,bo=!1,Cu=null,t}function X(t,e){var n=e[$u];n===void 0&&(n=e[$u]=new Set);var r=t+"__bubble";n.has(r)||(rg(e,t,2,!1),n.add(r))}function Ol(t,e,n){var r=0;e&&(r|=4),rg(n,t,r,e)}var io="_reactListening"+Math.random().toString(36).slice(2);function Xi(t){if(!t[io]){t[io]=!0,cm.forEach(function(n){n!=="selectionchange"&&(w1.has(n)||Ol(n,!1,t),Ol(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[io]||(e[io]=!0,Ol("selectionchange",!1,e))}}function rg(t,e,n,r){switch(zm(e)){case 1:var i=Ow;break;case 4:i=Lw;break;default:i=Wc}n=i.bind(null,e,n,t),i=void 0,!ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ll(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Mn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Cm(function(){var u=s,c=bc(n),h=[];e:{var f=tg.get(t);if(f!==void 0){var g=Kc,y=t;switch(t){case"keypress":if(Io(n)===0)break e;case"keydown":case"keyup":g=Qw;break;case"focusin":y="focus",g=Nl;break;case"focusout":y="blur",g=Nl;break;case"beforeblur":case"afterblur":g=Nl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Uw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Jw;break;case Xm:case Jm:case Zm:g=zw;break;case eg:g=e1;break;case"scroll":g=Mw;break;case"wheel":g=n1;break;case"copy":case"cut":case"paste":g=Bw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Hd}var E=(e&4)!==0,x=!E&&t==="scroll",p=E?f!==null?f+"Capture":null:f;E=[];for(var d=u,m;d!==null;){m=d;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=Wi(d,p),v!=null&&E.push(Ji(d,v,m)))),x)break;d=d.return}0<E.length&&(f=new g(f,y,null,n,c),h.push({event:f,listeners:E}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Tu&&(y=n.relatedTarget||n.fromElement)&&(Mn(y)||y[bt]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Mn(y):null,y!==null&&(x=ar(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(E=Bd,v="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(E=Hd,v="onPointerLeave",p="onPointerEnter",d="pointer"),x=g==null?f:yr(g),m=y==null?f:yr(y),f=new E(v,d+"leave",g,n,c),f.target=x,f.relatedTarget=m,v=null,Mn(c)===u&&(E=new E(p,d+"enter",y,n,c),E.target=m,E.relatedTarget=x,v=E),x=v,g&&y)t:{for(E=g,p=y,d=0,m=E;m;m=cr(m))d++;for(m=0,v=p;v;v=cr(v))m++;for(;0<d-m;)E=cr(E),d--;for(;0<m-d;)p=cr(p),m--;for(;d--;){if(E===p||p!==null&&E===p.alternate)break t;E=cr(E),p=cr(p)}E=null}else E=null;g!==null&&tf(h,f,g,E,!1),y!==null&&x!==null&&tf(h,x,y,E,!0)}}e:{if(f=u?yr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var T=u1;else if(Kd(f))if(qm)T=f1;else{T=h1;var C=c1}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=d1);if(T&&(T=T(t,u))){Wm(h,T,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&vu(f,"number",f.value)}switch(C=u?yr(u):window,t){case"focusin":(Kd(C)||C.contentEditable==="true")&&(mr=C,Du=u,Oi=null);break;case"focusout":Oi=Du=mr=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Jd(h,n,c);break;case"selectionchange":if(g1)break;case"keydown":case"keyup":Jd(h,n,c)}var N;if(Qc)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else pr?jm(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Bm&&n.locale!=="ko"&&(pr||R!=="onCompositionStart"?R==="onCompositionEnd"&&pr&&(N=bm()):(an=c,qc="value"in an?an.value:an.textContent,pr=!0)),C=qo(u,R),0<C.length&&(R=new jd(R,t,null,n,c),h.push({event:R,listeners:C}),N?R.data=N:(N=Hm(n),N!==null&&(R.data=N)))),(N=i1?s1(t,n):o1(t,n))&&(u=qo(u,"onBeforeInput"),0<u.length&&(c=new jd("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}ng(h,e)})}function Ji(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Wi(t,n),s!=null&&r.unshift(Ji(t,s,i)),s=Wi(t,e),s!=null&&r.push(Ji(t,s,i))),t=t.return}return r}function cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Wi(n,s),l!=null&&o.unshift(Ji(n,l,a))):i||(l=Wi(n,s),l!=null&&o.push(Ji(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var E1=/\r\n?/g,S1=/\u0000|\uFFFD/g;function nf(t){return(typeof t=="string"?t:""+t).replace(E1,`
`).replace(S1,"")}function so(t,e,n){if(e=nf(e),nf(t)!==e&&n)throw Error(w(425))}function Ko(){}var Pu=null,Ou=null;function Lu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,_1=typeof clearTimeout=="function"?clearTimeout:void 0,rf=typeof Promise=="function"?Promise:void 0,T1=typeof queueMicrotask=="function"?queueMicrotask:typeof rf<"u"?function(t){return rf.resolve(null).then(t).catch(I1)}:Mu;function I1(t){setTimeout(function(){throw t})}function Ml(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Gi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gi(e)}function dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ii=Math.random().toString(36).slice(2),_t="__reactFiber$"+ii,Zi="__reactProps$"+ii,bt="__reactContainer$"+ii,$u="__reactEvents$"+ii,k1="__reactListeners$"+ii,C1="__reactHandles$"+ii;function Mn(t){var e=t[_t];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bt]||n[_t]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sf(t);t!==null;){if(n=t[_t])return n;t=sf(t)}return e}t=n,n=t.parentNode}return null}function Is(t){return t=t[_t]||t[bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Oa(t){return t[Zi]||null}var Uu=[],vr=-1;function Cn(t){return{current:t}}function J(t){0>vr||(t.current=Uu[vr],Uu[vr]=null,vr--)}function Q(t,e){vr++,Uu[vr]=t.current,t.current=e}var En={},Ue=Cn(En),Qe=Cn(!1),Qn=En;function Br(t,e){var n=t.type.contextTypes;if(!n)return En;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(t){return t=t.childContextTypes,t!=null}function Go(){J(Qe),J(Ue)}function of(t,e,n){if(Ue.current!==En)throw Error(w(168));Q(Ue,e),Q(Qe,n)}function ig(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,cw(t)||"Unknown",i));return re({},n,r)}function Qo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||En,Qn=Ue.current,Q(Ue,t),Q(Qe,Qe.current),!0}function af(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=ig(t,e,Qn),r.__reactInternalMemoizedMergedChildContext=t,J(Qe),J(Ue),Q(Ue,t)):J(Qe),Q(Qe,n)}var Pt=null,La=!1,$l=!1;function sg(t){Pt===null?Pt=[t]:Pt.push(t)}function N1(t){La=!0,sg(t)}function Nn(){if(!$l&&Pt!==null){$l=!0;var t=0,e=G;try{var n=Pt;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pt=null,La=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(t+1)),Dm(Bc,Nn),i}finally{G=e,$l=!1}}return null}var wr=[],Er=0,Yo=null,Xo=0,ot=[],at=0,Yn=null,Lt=1,Mt="";function Pn(t,e){wr[Er++]=Xo,wr[Er++]=Yo,Yo=t,Xo=e}function og(t,e,n){ot[at++]=Lt,ot[at++]=Mt,ot[at++]=Yn,Yn=t;var r=Lt;t=Mt;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var s=32-yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Lt=1<<32-yt(e)+i|n<<i|r,Mt=s+t}else Lt=1<<s|n<<i|r,Mt=t}function Xc(t){t.return!==null&&(Pn(t,1),og(t,1,0))}function Jc(t){for(;t===Yo;)Yo=wr[--Er],wr[Er]=null,Xo=wr[--Er],wr[Er]=null;for(;t===Yn;)Yn=ot[--at],ot[at]=null,Mt=ot[--at],ot[at]=null,Lt=ot[--at],ot[at]=null}var tt=null,et=null,Z=!1,gt=null;function ag(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function lf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tt=t,et=dn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yn!==null?{id:Lt,overflow:Mt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tt=t,et=null,!0):!1;default:return!1}}function Fu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vu(t){if(Z){var e=et;if(e){var n=e;if(!lf(t,e)){if(Fu(t))throw Error(w(418));e=dn(n.nextSibling);var r=tt;e&&lf(t,e)?ag(r,n):(t.flags=t.flags&-4097|2,Z=!1,tt=t)}}else{if(Fu(t))throw Error(w(418));t.flags=t.flags&-4097|2,Z=!1,tt=t}}}function uf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tt=t}function oo(t){if(t!==tt)return!1;if(!Z)return uf(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lu(t.type,t.memoizedProps)),e&&(e=et)){if(Fu(t))throw lg(),Error(w(418));for(;e;)ag(t,e),e=dn(e.nextSibling)}if(uf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){et=dn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}et=null}}else et=tt?dn(t.stateNode.nextSibling):null;return!0}function lg(){for(var t=et;t;)t=dn(t.nextSibling)}function jr(){et=tt=null,Z=!1}function Zc(t){gt===null?gt=[t]:gt.push(t)}var A1=Qt.ReactCurrentBatchConfig;function pt(t,e){if(t&&t.defaultProps){e=re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Jo=Cn(null),Zo=null,Sr=null,eh=null;function th(){eh=Sr=Zo=null}function nh(t){var e=Jo.current;J(Jo),t._currentValue=e}function zu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pr(t,e){Zo=t,eh=Sr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ke=!0),t.firstContext=null)}function ct(t){var e=t._currentValue;if(eh!==t)if(t={context:t,memoizedValue:e,next:null},Sr===null){if(Zo===null)throw Error(w(308));Sr=t,Zo.dependencies={lanes:0,firstContext:t}}else Sr=Sr.next=t;return e}var $n=null;function rh(t){$n===null?$n=[t]:$n.push(t)}function ug(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,rh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bt(t,r)}function Bt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var en=!1;function ih(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(H&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bt(t,n)}return i=r.interleaved,i===null?(e.next=e,rh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bt(t,n)}function ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jc(t,n)}}function cf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ea(t,e,n,r){var i=t.updateQueue;en=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,E=a;switch(f=e,g=n,E.tag){case 1:if(y=E.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=E.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=re({},h,f);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jn|=o,t.lanes=o,t.memoizedState=h}}function hf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var hg=new um.Component().refs;function bu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ma={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=be(),i=mn(t),s=Vt(r,i);s.payload=e,n!=null&&(s.callback=n),e=fn(t,s,i),e!==null&&(vt(e,t,i,r),ko(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=be(),i=mn(t),s=Vt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fn(t,s,i),e!==null&&(vt(e,t,i,r),ko(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=be(),r=mn(t),i=Vt(n,r);i.tag=2,e!=null&&(i.callback=e),e=fn(t,i,r),e!==null&&(vt(e,t,r,n),ko(e,t,r))}};function df(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Yi(n,r)||!Yi(i,s):!0}function dg(t,e,n){var r=!1,i=En,s=e.contextType;return typeof s=="object"&&s!==null?s=ct(s):(i=Ye(e)?Qn:Ue.current,r=e.contextTypes,s=(r=r!=null)?Br(t,i):En),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ma,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ff(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ma.enqueueReplaceState(e,e.state,null)}function Bu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=hg,ih(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ct(s):(s=Ye(e)?Qn:Ue.current,i.context=Br(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ma.enqueueReplaceState(i,i.state,null),ea(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function yi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===hg&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function ao(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pf(t){var e=t._init;return e(t._payload)}function fg(t){function e(p,d){if(t){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=gn(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,v){return d===null||d.tag!==6?(d=jl(m,p.mode,v),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,v){var T=m.type;return T===fr?c(p,d,m.props.children,v,m.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zt&&pf(T)===d.type)?(v=i(d,m.props),v.ref=yi(p,d,m),v.return=p,v):(v=xo(m.type,m.key,m.props,null,p.mode,v),v.ref=yi(p,d,m),v.return=p,v)}function u(p,d,m,v){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Hl(m,p.mode,v),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,v,T){return d===null||d.tag!==7?(d=jn(m,p.mode,v,T),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=jl(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ys:return m=xo(d.type,d.key,d.props,null,p.mode,m),m.ref=yi(p,null,d),m.return=p,m;case dr:return d=Hl(d,p.mode,m),d.return=p,d;case Zt:var v=d._init;return h(p,v(d._payload),m)}if(_i(d)||di(d))return d=jn(d,p.mode,m,null),d.return=p,d;ao(p,d)}return null}function f(p,d,m,v){var T=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,d,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ys:return m.key===T?l(p,d,m,v):null;case dr:return m.key===T?u(p,d,m,v):null;case Zt:return T=m._init,f(p,d,T(m._payload),v)}if(_i(m)||di(m))return T!==null?null:c(p,d,m,v,null);ao(p,m)}return null}function g(p,d,m,v,T){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,a(d,p,""+v,T);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ys:return p=p.get(v.key===null?m:v.key)||null,l(d,p,v,T);case dr:return p=p.get(v.key===null?m:v.key)||null,u(d,p,v,T);case Zt:var C=v._init;return g(p,d,m,C(v._payload),T)}if(_i(v)||di(v))return p=p.get(m)||null,c(d,p,v,T,null);ao(d,v)}return null}function y(p,d,m,v){for(var T=null,C=null,N=d,R=d=0,Y=null;N!==null&&R<m.length;R++){N.index>R?(Y=N,N=null):Y=N.sibling;var V=f(p,N,m[R],v);if(V===null){N===null&&(N=Y);break}t&&N&&V.alternate===null&&e(p,N),d=s(V,d,R),C===null?T=V:C.sibling=V,C=V,N=Y}if(R===m.length)return n(p,N),Z&&Pn(p,R),T;if(N===null){for(;R<m.length;R++)N=h(p,m[R],v),N!==null&&(d=s(N,d,R),C===null?T=N:C.sibling=N,C=N);return Z&&Pn(p,R),T}for(N=r(p,N);R<m.length;R++)Y=g(N,p,R,m[R],v),Y!==null&&(t&&Y.alternate!==null&&N.delete(Y.key===null?R:Y.key),d=s(Y,d,R),C===null?T=Y:C.sibling=Y,C=Y);return t&&N.forEach(function(dt){return e(p,dt)}),Z&&Pn(p,R),T}function E(p,d,m,v){var T=di(m);if(typeof T!="function")throw Error(w(150));if(m=T.call(m),m==null)throw Error(w(151));for(var C=T=null,N=d,R=d=0,Y=null,V=m.next();N!==null&&!V.done;R++,V=m.next()){N.index>R?(Y=N,N=null):Y=N.sibling;var dt=f(p,N,V.value,v);if(dt===null){N===null&&(N=Y);break}t&&N&&dt.alternate===null&&e(p,N),d=s(dt,d,R),C===null?T=dt:C.sibling=dt,C=dt,N=Y}if(V.done)return n(p,N),Z&&Pn(p,R),T;if(N===null){for(;!V.done;R++,V=m.next())V=h(p,V.value,v),V!==null&&(d=s(V,d,R),C===null?T=V:C.sibling=V,C=V);return Z&&Pn(p,R),T}for(N=r(p,N);!V.done;R++,V=m.next())V=g(N,p,R,V.value,v),V!==null&&(t&&V.alternate!==null&&N.delete(V.key===null?R:V.key),d=s(V,d,R),C===null?T=V:C.sibling=V,C=V);return t&&N.forEach(function(ci){return e(p,ci)}),Z&&Pn(p,R),T}function x(p,d,m,v){if(typeof m=="object"&&m!==null&&m.type===fr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ys:e:{for(var T=m.key,C=d;C!==null;){if(C.key===T){if(T=m.type,T===fr){if(C.tag===7){n(p,C.sibling),d=i(C,m.props.children),d.return=p,p=d;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zt&&pf(T)===C.type){n(p,C.sibling),d=i(C,m.props),d.ref=yi(p,C,m),d.return=p,p=d;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===fr?(d=jn(m.props.children,p.mode,v,m.key),d.return=p,p=d):(v=xo(m.type,m.key,m.props,null,p.mode,v),v.ref=yi(p,d,m),v.return=p,p=v)}return o(p);case dr:e:{for(C=m.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=Hl(m,p.mode,v),d.return=p,p=d}return o(p);case Zt:return C=m._init,x(p,d,C(m._payload),v)}if(_i(m))return y(p,d,m,v);if(di(m))return E(p,d,m,v);ao(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=jl(m,p.mode,v),d.return=p,p=d),o(p)):n(p,d)}return x}var Hr=fg(!0),pg=fg(!1),ks={},Ct=Cn(ks),es=Cn(ks),ts=Cn(ks);function Un(t){if(t===ks)throw Error(w(174));return t}function sh(t,e){switch(Q(ts,e),Q(es,t),Q(Ct,ks),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eu(e,t)}J(Ct),Q(Ct,e)}function Wr(){J(Ct),J(es),J(ts)}function mg(t){Un(ts.current);var e=Un(Ct.current),n=Eu(e,t.type);e!==n&&(Q(es,t),Q(Ct,n))}function oh(t){es.current===t&&(J(Ct),J(es))}var te=Cn(0);function ta(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ul=[];function ah(){for(var t=0;t<Ul.length;t++)Ul[t]._workInProgressVersionPrimary=null;Ul.length=0}var Co=Qt.ReactCurrentDispatcher,Fl=Qt.ReactCurrentBatchConfig,Xn=0,ne=null,fe=null,ve=null,na=!1,Li=!1,ns=0,R1=0;function xe(){throw Error(w(321))}function lh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wt(t[n],e[n]))return!1;return!0}function uh(t,e,n,r,i,s){if(Xn=s,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Co.current=t===null||t.memoizedState===null?O1:L1,t=n(r,i),Li){s=0;do{if(Li=!1,ns=0,25<=s)throw Error(w(301));s+=1,ve=fe=null,e.updateQueue=null,Co.current=M1,t=n(r,i)}while(Li)}if(Co.current=ra,e=fe!==null&&fe.next!==null,Xn=0,ve=fe=ne=null,na=!1,e)throw Error(w(300));return t}function ch(){var t=ns!==0;return ns=0,t}function St(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ne.memoizedState=ve=t:ve=ve.next=t,ve}function ht(){if(fe===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=fe.next;var e=ve===null?ne.memoizedState:ve.next;if(e!==null)ve=e,fe=t;else{if(t===null)throw Error(w(310));fe=t,t={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ve===null?ne.memoizedState=ve=t:ve=ve.next=t}return ve}function rs(t,e){return typeof e=="function"?e(t):e}function Vl(t){var e=ht(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Xn&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ne.lanes|=c,Jn|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,wt(r,e.memoizedState)||(Ke=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ne.lanes|=s,Jn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zl(t){var e=ht(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);wt(s,e.memoizedState)||(Ke=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function gg(){}function yg(t,e){var n=ne,r=ht(),i=e(),s=!wt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ke=!0),r=r.queue,hh(Eg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,is(9,wg.bind(null,n,r,i,e),void 0,null),we===null)throw Error(w(349));(Xn&30)!==0||vg(n,e,i)}return i}function vg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function wg(t,e,n,r){e.value=n,e.getSnapshot=r,Sg(e)&&_g(t)}function Eg(t,e,n){return n(function(){Sg(e)&&_g(t)})}function Sg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wt(t,n)}catch{return!0}}function _g(t){var e=Bt(t,1);e!==null&&vt(e,t,1,-1)}function mf(t){var e=St();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},e.queue=t,t=t.dispatch=P1.bind(null,ne,t),[e.memoizedState,t]}function is(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Tg(){return ht().memoizedState}function No(t,e,n,r){var i=St();ne.flags|=t,i.memoizedState=is(1|e,n,void 0,r===void 0?null:r)}function $a(t,e,n,r){var i=ht();r=r===void 0?null:r;var s=void 0;if(fe!==null){var o=fe.memoizedState;if(s=o.destroy,r!==null&&lh(r,o.deps)){i.memoizedState=is(e,n,s,r);return}}ne.flags|=t,i.memoizedState=is(1|e,n,s,r)}function gf(t,e){return No(8390656,8,t,e)}function hh(t,e){return $a(2048,8,t,e)}function Ig(t,e){return $a(4,2,t,e)}function kg(t,e){return $a(4,4,t,e)}function Cg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ng(t,e,n){return n=n!=null?n.concat([t]):null,$a(4,4,Cg.bind(null,e,t),n)}function dh(){}function Ag(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Rg(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&lh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dg(t,e,n){return(Xn&21)===0?(t.baseState&&(t.baseState=!1,Ke=!0),t.memoizedState=n):(wt(n,e)||(n=Om(),ne.lanes|=n,Jn|=n,t.baseState=!0),e)}function D1(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=Fl.transition;Fl.transition={};try{t(!1),e()}finally{G=n,Fl.transition=r}}function xg(){return ht().memoizedState}function x1(t,e,n){var r=mn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pg(t))Og(e,n);else if(n=ug(t,e,n,r),n!==null){var i=be();vt(n,t,r,i),Lg(n,e,r)}}function P1(t,e,n){var r=mn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pg(t))Og(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,wt(a,o)){var l=e.interleaved;l===null?(i.next=i,rh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ug(t,e,i,r),n!==null&&(i=be(),vt(n,t,r,i),Lg(n,e,r))}}function Pg(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function Og(t,e){Li=na=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Lg(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jc(t,n)}}var ra={readContext:ct,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},O1={readContext:ct,useCallback:function(t,e){return St().memoizedState=[t,e===void 0?null:e],t},useContext:ct,useEffect:gf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,No(4194308,4,Cg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return No(4194308,4,t,e)},useInsertionEffect:function(t,e){return No(4,2,t,e)},useMemo:function(t,e){var n=St();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=St();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=x1.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=St();return t={current:t},e.memoizedState=t},useState:mf,useDebugValue:dh,useDeferredValue:function(t){return St().memoizedState=t},useTransition:function(){var t=mf(!1),e=t[0];return t=D1.bind(null,t[1]),St().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ne,i=St();if(Z){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),we===null)throw Error(w(349));(Xn&30)!==0||vg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,gf(Eg.bind(null,r,s,t),[t]),r.flags|=2048,is(9,wg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=St(),e=we.identifierPrefix;if(Z){var n=Mt,r=Lt;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ns++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=R1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},L1={readContext:ct,useCallback:Ag,useContext:ct,useEffect:hh,useImperativeHandle:Ng,useInsertionEffect:Ig,useLayoutEffect:kg,useMemo:Rg,useReducer:Vl,useRef:Tg,useState:function(){return Vl(rs)},useDebugValue:dh,useDeferredValue:function(t){var e=ht();return Dg(e,fe.memoizedState,t)},useTransition:function(){var t=Vl(rs)[0],e=ht().memoizedState;return[t,e]},useMutableSource:gg,useSyncExternalStore:yg,useId:xg,unstable_isNewReconciler:!1},M1={readContext:ct,useCallback:Ag,useContext:ct,useEffect:hh,useImperativeHandle:Ng,useInsertionEffect:Ig,useLayoutEffect:kg,useMemo:Rg,useReducer:zl,useRef:Tg,useState:function(){return zl(rs)},useDebugValue:dh,useDeferredValue:function(t){var e=ht();return fe===null?e.memoizedState=t:Dg(e,fe.memoizedState,t)},useTransition:function(){var t=zl(rs)[0],e=ht().memoizedState;return[t,e]},useMutableSource:gg,useSyncExternalStore:yg,useId:xg,unstable_isNewReconciler:!1};function qr(t,e){try{var n="",r=e;do n+=uw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function bl(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $1=typeof WeakMap=="function"?WeakMap:Map;function Mg(t,e,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sa||(sa=!0,Zu=r),ju(t,e)},n}function $g(t,e,n){n=Vt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ju(t,e),typeof r!="function"&&(pn===null?pn=new Set([this]):pn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function yf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Y1.bind(null,t,e,n),e.then(t,t))}function vf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wf(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vt(-1,1),e.tag=2,fn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var U1=Qt.ReactCurrentOwner,Ke=!1;function Ve(t,e,n,r){e.child=t===null?pg(e,null,n,r):Hr(e,t.child,n,r)}function Ef(t,e,n,r,i){n=n.render;var s=e.ref;return Pr(e,i),r=uh(t,e,n,r,s,i),n=ch(),t!==null&&!Ke?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(Z&&n&&Xc(e),e.flags|=1,Ve(t,e,r,i),e.child)}function Sf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ug(t,e,s,r,i)):(t=xo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(o,r)&&t.ref===e.ref)return jt(t,e,i)}return e.flags|=1,t=gn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ug(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Yi(s,r)&&t.ref===e.ref)if(Ke=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ke=!0);else return e.lanes=t.lanes,jt(t,e,i)}return Hu(t,e,n,r,i)}function Fg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Tr,Ze),Ze|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(Tr,Ze),Ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Tr,Ze),Ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(Tr,Ze),Ze|=r;return Ve(t,e,i,n),e.child}function Vg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hu(t,e,n,r,i){var s=Ye(n)?Qn:Ue.current;return s=Br(e,s),Pr(e,i),n=uh(t,e,n,r,s,i),r=ch(),t!==null&&!Ke?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(Z&&r&&Xc(e),e.flags|=1,Ve(t,e,n,i),e.child)}function _f(t,e,n,r,i){if(Ye(n)){var s=!0;Qo(e)}else s=!1;if(Pr(e,i),e.stateNode===null)Ao(t,e),dg(e,n,r),Bu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=Ye(n)?Qn:Ue.current,u=Br(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ff(e,o,r,u),en=!1;var f=e.memoizedState;o.state=f,ea(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Qe.current||en?(typeof c=="function"&&(bu(e,n,c,r),l=e.memoizedState),(a=en||df(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:pt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=Ye(n)?Qn:Ue.current,l=Br(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&ff(e,o,r,l),en=!1,f=e.memoizedState,o.state=f,ea(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||Qe.current||en?(typeof g=="function"&&(bu(e,n,g,r),y=e.memoizedState),(u=en||df(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Wu(t,e,n,r,s,i)}function Wu(t,e,n,r,i,s){Vg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&af(e,n,!1),jt(t,e,s);r=e.stateNode,U1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hr(e,t.child,null,s),e.child=Hr(e,null,a,s)):Ve(t,e,a,s),e.memoizedState=r.state,i&&af(e,n,!0),e.child}function zg(t){var e=t.stateNode;e.pendingContext?of(t,e.pendingContext,e.pendingContext!==e.context):e.context&&of(t,e.context,!1),sh(t,e.containerInfo)}function Tf(t,e,n,r,i){return jr(),Zc(i),e.flags|=256,Ve(t,e,n,r),e.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function bg(t,e,n){var r=e.pendingProps,i=te.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(te,i&1),t===null)return Vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Va(o,r,0,null),t=jn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ku(n),e.memoizedState=qu,t):fh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return F1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=gn(a,s):(s=jn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ku(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qu,r}return s=t.child,t=s.sibling,r=gn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fh(t,e){return e=Va({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lo(t,e,n,r){return r!==null&&Zc(r),Hr(e,t.child,null,n),t=fh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function F1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=bl(Error(w(422))),lo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Va({mode:"visible",children:r.children},i,0,null),s=jn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Hr(e,t.child,null,o),e.child.memoizedState=Ku(o),e.memoizedState=qu,s);if((e.mode&1)===0)return lo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=bl(s,r,void 0),lo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ke||a){if(r=we,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bt(t,i),vt(r,t,i,-1))}return wh(),r=bl(Error(w(421))),lo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=X1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,et=dn(i.nextSibling),tt=e,Z=!0,gt=null,t!==null&&(ot[at++]=Lt,ot[at++]=Mt,ot[at++]=Yn,Lt=t.id,Mt=t.overflow,Yn=e),e=fh(e,r.children),e.flags|=4096,e)}function If(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),zu(t.return,e,n)}function Bl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Bg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ve(t,e,r.children,n),r=te.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&If(t,n,e);else if(t.tag===19)If(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(te,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ta(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ta(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bl(e,!0,n,null,s);break;case"together":Bl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ao(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jn|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=gn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function V1(t,e,n){switch(e.tag){case 3:zg(e),jr();break;case 5:mg(e);break;case 1:Ye(e.type)&&Qo(e);break;case 4:sh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(Jo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(te,te.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?bg(t,e,n):(Q(te,te.current&1),t=jt(t,e,n),t!==null?t.sibling:null);Q(te,te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Bg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(te,te.current),r)break;return null;case 22:case 23:return e.lanes=0,Fg(t,e,n)}return jt(t,e,n)}var jg,Gu,Hg,Wg;jg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gu=function(){};Hg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Un(Ct.current);var s=null;switch(n){case"input":i=gu(t,i),r=gu(t,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=wu(t,i),r=wu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ko)}Su(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ji.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ji.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&X("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Wg=function(t,e,n,r){n!==r&&(e.flags|=4)};function vi(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function z1(t,e,n){var r=e.pendingProps;switch(Jc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Ye(e.type)&&Go(),Pe(e),null;case 3:return r=e.stateNode,Wr(),J(Qe),J(Ue),ah(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,gt!==null&&(nc(gt),gt=null))),Gu(t,e),Pe(e),null;case 5:oh(e);var i=Un(ts.current);if(n=e.type,t!==null&&e.stateNode!=null)Hg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Pe(e),null}if(t=Un(Ct.current),oo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_t]=e,r[Zi]=s,t=(e.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Ii.length;i++)X(Ii[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Pd(r,s),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},X("invalid",r);break;case"textarea":Ld(r,s),X("invalid",r)}Su(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&so(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&so(r.textContent,a,t),i=["children",""+a]):ji.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&X("scroll",r)}switch(n){case"input":Xs(r),Od(r,s,!0);break;case"textarea":Xs(r),Md(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ko)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_t]=e,t[Zi]=r,jg(t,e,!1,!1),e.stateNode=t;e:{switch(o=_u(n,r),n){case"dialog":X("cancel",t),X("close",t),i=r;break;case"iframe":case"object":case"embed":X("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ii.length;i++)X(Ii[i],t);i=r;break;case"source":X("error",t),i=r;break;case"img":case"image":case"link":X("error",t),X("load",t),i=r;break;case"details":X("toggle",t),i=r;break;case"input":Pd(t,r),i=gu(t,r),X("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),X("invalid",t);break;case"textarea":Ld(t,r),i=wu(t,r),X("invalid",t);break;default:i=r}Su(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Sm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Hi(t,l):typeof l=="number"&&Hi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ji.hasOwnProperty(s)?l!=null&&s==="onScroll"&&X("scroll",t):l!=null&&Uc(t,s,l,o))}switch(n){case"input":Xs(t),Od(t,r,!1);break;case"textarea":Xs(t),Md(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ar(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ar(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)Wg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Un(ts.current),Un(Ct.current),oo(e)){if(r=e.stateNode,n=e.memoizedProps,r[_t]=e,(s=r.nodeValue!==n)&&(t=tt,t!==null))switch(t.tag){case 3:so(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_t]=e,e.stateNode=r}return Pe(e),null;case 13:if(J(te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&et!==null&&(e.mode&1)!==0&&(e.flags&128)===0)lg(),jr(),e.flags|=98560,s=!1;else if(s=oo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[_t]=e}else jr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Pe(e),s=!1}else gt!==null&&(nc(gt),gt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(te.current&1)!==0?pe===0&&(pe=3):wh())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return Wr(),Gu(t,e),t===null&&Xi(e.stateNode.containerInfo),Pe(e),null;case 10:return nh(e.type._context),Pe(e),null;case 17:return Ye(e.type)&&Go(),Pe(e),null;case 19:if(J(te),s=e.memoizedState,s===null)return Pe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)vi(s,!1);else{if(pe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=ta(t),o!==null){for(e.flags|=128,vi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(te,te.current&1|2),e.child}t=t.sibling}s.tail!==null&&ae()>Kr&&(e.flags|=128,r=!0,vi(s,!1),e.lanes=4194304)}else{if(!r)if(t=ta(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),vi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return Pe(e),null}else 2*ae()-s.renderingStartTime>Kr&&n!==1073741824&&(e.flags|=128,r=!0,vi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ae(),e.sibling=null,n=te.current,Q(te,r?n&1|2:n&1),e):(Pe(e),null);case 22:case 23:return vh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Ze&1073741824)!==0&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function b1(t,e){switch(Jc(e),e.tag){case 1:return Ye(e.type)&&Go(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wr(),J(Qe),J(Ue),ah(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return oh(e),null;case 13:if(J(te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(te),null;case 4:return Wr(),null;case 10:return nh(e.type._context),null;case 22:case 23:return vh(),null;case 24:return null;default:return null}}var uo=!1,Oe=!1,B1=typeof WeakSet=="function"?WeakSet:Set,I=null;function _r(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(t,e,r)}else n.current=null}function Qu(t,e,n){try{n()}catch(r){ie(t,e,r)}}var kf=!1;function j1(t,e){if(Pu=Ho,t=Qm(),Yc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ou={focusedElem:t,selectionRange:n},Ho=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var E=y.memoizedProps,x=y.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?E:pt(e.type,E),x);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){ie(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return y=kf,kf=!1,y}function Mi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qu(e,n,s)}i=i.next}while(i!==r)}}function Ua(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qg(t){var e=t.alternate;e!==null&&(t.alternate=null,qg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_t],delete e[Zi],delete e[$u],delete e[k1],delete e[C1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kg(t){return t.tag===5||t.tag===3||t.tag===4}function Cf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ko));else if(r!==4&&(t=t.child,t!==null))for(Xu(t,e,n),t=t.sibling;t!==null;)Xu(t,e,n),t=t.sibling}function Ju(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ju(t,e,n),t=t.sibling;t!==null;)Ju(t,e,n),t=t.sibling}var _e=null,mt=!1;function Xt(t,e,n){for(n=n.child;n!==null;)Gg(t,e,n),n=n.sibling}function Gg(t,e,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ra,n)}catch{}switch(n.tag){case 5:Oe||_r(n,e);case 6:var r=_e,i=mt;_e=null,Xt(t,e,n),_e=r,mt=i,_e!==null&&(mt?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(mt?(t=_e,n=n.stateNode,t.nodeType===8?Ml(t.parentNode,n):t.nodeType===1&&Ml(t,n),Gi(t)):Ml(_e,n.stateNode));break;case 4:r=_e,i=mt,_e=n.stateNode.containerInfo,mt=!0,Xt(t,e,n),_e=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Qu(n,e,o),i=i.next}while(i!==r)}Xt(t,e,n);break;case 1:if(!Oe&&(_r(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,e,a)}Xt(t,e,n);break;case 21:Xt(t,e,n);break;case 22:n.mode&1?(Oe=(r=Oe)||n.memoizedState!==null,Xt(t,e,n),Oe=r):Xt(t,e,n);break;default:Xt(t,e,n)}}function Nf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new B1),e.forEach(function(r){var i=J1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_e=a.stateNode,mt=!1;break e;case 3:_e=a.stateNode.containerInfo,mt=!0;break e;case 4:_e=a.stateNode.containerInfo,mt=!0;break e}a=a.return}if(_e===null)throw Error(w(160));Gg(s,o,i),_e=null,mt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qg(e,t),e=e.sibling}function Qg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),Et(t),r&4){try{Mi(3,t,t.return),Ua(3,t)}catch(E){ie(t,t.return,E)}try{Mi(5,t,t.return)}catch(E){ie(t,t.return,E)}}break;case 1:ft(e,t),Et(t),r&512&&n!==null&&_r(n,n.return);break;case 5:if(ft(e,t),Et(t),r&512&&n!==null&&_r(n,n.return),t.flags&32){var i=t.stateNode;try{Hi(i,"")}catch(E){ie(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&gm(i,s),_u(a,o);var u=_u(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Sm(i,h):c==="dangerouslySetInnerHTML"?wm(i,h):c==="children"?Hi(i,h):Uc(i,c,h,u)}switch(a){case"input":yu(i,s);break;case"textarea":ym(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ar(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ar(i,!!s.multiple,s.defaultValue,!0):Ar(i,!!s.multiple,s.multiple?[]:"",!1))}i[Zi]=s}catch(E){ie(t,t.return,E)}}break;case 6:if(ft(e,t),Et(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){ie(t,t.return,E)}}break;case 3:if(ft(e,t),Et(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gi(e.containerInfo)}catch(E){ie(t,t.return,E)}break;case 4:ft(e,t),Et(t);break;case 13:ft(e,t),Et(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(gh=ae())),r&4&&Nf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Oe=(u=Oe)||c,ft(e,t),Oe=u):ft(e,t),Et(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(I=t,c=t.child;c!==null;){for(h=I=c;I!==null;){switch(f=I,g=f.child,f.tag){case 0:case 11:case 14:case 15:Mi(4,f,f.return);break;case 1:_r(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(E){ie(r,n,E)}}break;case 5:_r(f,f.return);break;case 22:if(f.memoizedState!==null){Rf(h);continue}}g!==null?(g.return=f,I=g):Rf(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Em("display",o))}catch(E){ie(t,t.return,E)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(E){ie(t,t.return,E)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ft(e,t),Et(t),r&4&&Nf(t);break;case 21:break;default:ft(e,t),Et(t)}}function Et(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kg(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hi(i,""),r.flags&=-33);var s=Cf(t);Ju(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Cf(t);Xu(t,a,o);break;default:throw Error(w(161))}}catch(l){ie(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function H1(t,e,n){I=t,Yg(t)}function Yg(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Oe;a=uo;var u=Oe;if(uo=o,(Oe=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?Df(i):l!==null?(l.return=o,I=l):Df(i);for(;s!==null;)I=s,Yg(s),s=s.sibling;I=i,uo=a,Oe=u}Af(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,I=s):Af(t)}}function Af(t){for(;I!==null;){var e=I;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Oe||Ua(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Oe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Gi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Oe||e.flags&512&&Yu(e)}catch(f){ie(e,e.return,f)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function Rf(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function Df(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ua(4,e)}catch(l){ie(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ie(e,i,l)}}var s=e.return;try{Yu(e)}catch(l){ie(e,s,l)}break;case 5:var o=e.return;try{Yu(e)}catch(l){ie(e,o,l)}}}catch(l){ie(e,e.return,l)}if(e===t){I=null;break}var a=e.sibling;if(a!==null){a.return=e.return,I=a;break}I=e.return}}var W1=Math.ceil,ia=Qt.ReactCurrentDispatcher,ph=Qt.ReactCurrentOwner,ut=Qt.ReactCurrentBatchConfig,H=0,we=null,ce=null,Ce=0,Ze=0,Tr=Cn(0),pe=0,ss=null,Jn=0,Fa=0,mh=0,$i=null,We=null,gh=0,Kr=1/0,xt=null,sa=!1,Zu=null,pn=null,co=!1,ln=null,oa=0,Ui=0,ec=null,Ro=-1,Do=0;function be(){return(H&6)!==0?ae():Ro!==-1?Ro:Ro=ae()}function mn(t){return(t.mode&1)===0?1:(H&2)!==0&&Ce!==0?Ce&-Ce:A1.transition!==null?(Do===0&&(Do=Om()),Do):(t=G,t!==0||(t=window.event,t=t===void 0?16:zm(t.type)),t)}function vt(t,e,n,r){if(50<Ui)throw Ui=0,ec=null,Error(w(185));_s(t,n,r),((H&2)===0||t!==we)&&(t===we&&((H&2)===0&&(Fa|=n),pe===4&&nn(t,Ce)),Xe(t,r),n===1&&H===0&&(e.mode&1)===0&&(Kr=ae()+500,La&&Nn()))}function Xe(t,e){var n=t.callbackNode;Aw(t,e);var r=jo(t,t===we?Ce:0);if(r===0)n!==null&&Fd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fd(n),e===1)t.tag===0?N1(xf.bind(null,t)):sg(xf.bind(null,t)),T1(function(){(H&6)===0&&Nn()}),n=null;else{switch(Lm(r)){case 1:n=Bc;break;case 4:n=xm;break;case 16:n=Bo;break;case 536870912:n=Pm;break;default:n=Bo}n=iy(n,Xg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Xg(t,e){if(Ro=-1,Do=0,(H&6)!==0)throw Error(w(327));var n=t.callbackNode;if(Or()&&t.callbackNode!==n)return null;var r=jo(t,t===we?Ce:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=aa(t,r);else{e=r;var i=H;H|=2;var s=Zg();(we!==t||Ce!==e)&&(xt=null,Kr=ae()+500,Bn(t,e));do try{G1();break}catch(a){Jg(t,a)}while(1);th(),ia.current=s,H=i,ce!==null?e=0:(we=null,Ce=0,e=pe)}if(e!==0){if(e===2&&(i=Nu(t),i!==0&&(r=i,e=tc(t,i))),e===1)throw n=ss,Bn(t,0),nn(t,r),Xe(t,ae()),n;if(e===6)nn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!q1(i)&&(e=aa(t,r),e===2&&(s=Nu(t),s!==0&&(r=s,e=tc(t,s))),e===1))throw n=ss,Bn(t,0),nn(t,r),Xe(t,ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:On(t,We,xt);break;case 3:if(nn(t,r),(r&130023424)===r&&(e=gh+500-ae(),10<e)){if(jo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Mu(On.bind(null,t,We,xt),e);break}On(t,We,xt);break;case 4:if(nn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*W1(r/1960))-r,10<r){t.timeoutHandle=Mu(On.bind(null,t,We,xt),r);break}On(t,We,xt);break;case 5:On(t,We,xt);break;default:throw Error(w(329))}}}return Xe(t,ae()),t.callbackNode===n?Xg.bind(null,t):null}function tc(t,e){var n=$i;return t.current.memoizedState.isDehydrated&&(Bn(t,e).flags|=256),t=aa(t,e),t!==2&&(e=We,We=n,e!==null&&nc(e)),t}function nc(t){We===null?We=t:We.push.apply(We,t)}function q1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!wt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nn(t,e){for(e&=~mh,e&=~Fa,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yt(e),r=1<<n;t[n]=-1,e&=~r}}function xf(t){if((H&6)!==0)throw Error(w(327));Or();var e=jo(t,0);if((e&1)===0)return Xe(t,ae()),null;var n=aa(t,e);if(t.tag!==0&&n===2){var r=Nu(t);r!==0&&(e=r,n=tc(t,r))}if(n===1)throw n=ss,Bn(t,0),nn(t,e),Xe(t,ae()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,On(t,We,xt),Xe(t,ae()),null}function yh(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Kr=ae()+500,La&&Nn())}}function Zn(t){ln!==null&&ln.tag===0&&(H&6)===0&&Or();var e=H;H|=1;var n=ut.transition,r=G;try{if(ut.transition=null,G=1,t)return t()}finally{G=r,ut.transition=n,H=e,(H&6)===0&&Nn()}}function vh(){Ze=Tr.current,J(Tr)}function Bn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_1(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(Jc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:Wr(),J(Qe),J(Ue),ah();break;case 5:oh(r);break;case 4:Wr();break;case 13:J(te);break;case 19:J(te);break;case 10:nh(r.type._context);break;case 22:case 23:vh()}n=n.return}if(we=t,ce=t=gn(t.current,null),Ce=Ze=e,pe=0,ss=null,mh=Fa=Jn=0,We=$i=null,$n!==null){for(e=0;e<$n.length;e++)if(n=$n[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$n=null}return t}function Jg(t,e){do{var n=ce;try{if(th(),Co.current=ra,na){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}na=!1}if(Xn=0,ve=fe=ne=null,Li=!1,ns=0,ph.current=null,n===null||n.return===null){pe=1,ss=e,ce=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=vf(o);if(g!==null){g.flags&=-257,wf(g,o,a,s,e),g.mode&1&&yf(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var E=new Set;E.add(l),e.updateQueue=E}else y.add(l);break e}else{if((e&1)===0){yf(s,u,e),wh();break e}l=Error(w(426))}}else if(Z&&a.mode&1){var x=vf(o);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),wf(x,o,a,s,e),Zc(qr(l,a));break e}}s=l=qr(l,a),pe!==4&&(pe=2),$i===null?$i=[s]:$i.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Mg(s,l,e);cf(s,p);break e;case 1:a=l;var d=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(pn===null||!pn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=$g(s,a,e);cf(s,v);break e}}s=s.return}while(s!==null)}ty(n)}catch(T){e=T,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(1)}function Zg(){var t=ia.current;return ia.current=ra,t===null?ra:t}function wh(){(pe===0||pe===3||pe===2)&&(pe=4),we===null||(Jn&268435455)===0&&(Fa&268435455)===0||nn(we,Ce)}function aa(t,e){var n=H;H|=2;var r=Zg();(we!==t||Ce!==e)&&(xt=null,Bn(t,e));do try{K1();break}catch(i){Jg(t,i)}while(1);if(th(),H=n,ia.current=r,ce!==null)throw Error(w(261));return we=null,Ce=0,pe}function K1(){for(;ce!==null;)ey(ce)}function G1(){for(;ce!==null&&!ww();)ey(ce)}function ey(t){var e=ry(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?ty(t):ce=e,ph.current=null}function ty(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=z1(n,e,Ze),n!==null){ce=n;return}}else{if(n=b1(n,e),n!==null){n.flags&=32767,ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,ce=null;return}}if(e=e.sibling,e!==null){ce=e;return}ce=e=t}while(e!==null);pe===0&&(pe=5)}function On(t,e,n){var r=G,i=ut.transition;try{ut.transition=null,G=1,Q1(t,e,n,r)}finally{ut.transition=i,G=r}return null}function Q1(t,e,n,r){do Or();while(ln!==null);if((H&6)!==0)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Rw(t,s),t===we&&(ce=we=null,Ce=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||co||(co=!0,iy(Bo,function(){return Or(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=ut.transition,ut.transition=null;var o=G;G=1;var a=H;H|=4,ph.current=null,j1(t,n),Qg(n,t),m1(Ou),Ho=!!Pu,Ou=Pu=null,t.current=n,H1(n),Ew(),H=a,G=o,ut.transition=s}else t.current=n;if(co&&(co=!1,ln=t,oa=i),s=t.pendingLanes,s===0&&(pn=null),Tw(n.stateNode),Xe(t,ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sa)throw sa=!1,t=Zu,Zu=null,t;return(oa&1)!==0&&t.tag!==0&&Or(),s=t.pendingLanes,(s&1)!==0?t===ec?Ui++:(Ui=0,ec=t):Ui=0,Nn(),null}function Or(){if(ln!==null){var t=Lm(oa),e=ut.transition,n=G;try{if(ut.transition=null,G=16>t?16:t,ln===null)var r=!1;else{if(t=ln,ln=null,oa=0,(H&6)!==0)throw Error(w(331));var i=H;for(H|=4,I=t.current;I!==null;){var s=I,o=s.child;if((I.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:Mi(8,c,s)}var h=c.child;if(h!==null)h.return=c,I=h;else for(;I!==null;){c=I;var f=c.sibling,g=c.return;if(qg(c),c===u){I=null;break}if(f!==null){f.return=g,I=f;break}I=g}}}var y=s.alternate;if(y!==null){var E=y.child;if(E!==null){y.child=null;do{var x=E.sibling;E.sibling=null,E=x}while(E!==null)}}I=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Mi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,I=p;break e}I=s.return}}var d=t.current;for(I=d;I!==null;){o=I;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,I=m;else e:for(o=d;I!==null;){if(a=I,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ua(9,a)}}catch(T){ie(a,a.return,T)}if(a===o){I=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,I=v;break e}I=a.return}}if(H=i,Nn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ra,t)}catch{}r=!0}return r}finally{G=n,ut.transition=e}}return!1}function Pf(t,e,n){e=qr(n,e),e=Mg(t,e,1),t=fn(t,e,1),e=be(),t!==null&&(_s(t,1,e),Xe(t,e))}function ie(t,e,n){if(t.tag===3)Pf(t,t,n);else for(;e!==null;){if(e.tag===3){Pf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pn===null||!pn.has(r))){t=qr(n,t),t=$g(e,t,1),e=fn(e,t,1),t=be(),e!==null&&(_s(e,1,t),Xe(e,t));break}}e=e.return}}function Y1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=be(),t.pingedLanes|=t.suspendedLanes&n,we===t&&(Ce&n)===n&&(pe===4||pe===3&&(Ce&130023424)===Ce&&500>ae()-gh?Bn(t,0):mh|=n),Xe(t,e)}function ny(t,e){e===0&&((t.mode&1)===0?e=1:(e=eo,eo<<=1,(eo&130023424)===0&&(eo=4194304)));var n=be();t=Bt(t,e),t!==null&&(_s(t,e,n),Xe(t,n))}function X1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ny(t,n)}function J1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),ny(t,n)}var ry;ry=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qe.current)Ke=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ke=!1,V1(t,e,n);Ke=(t.flags&131072)!==0}else Ke=!1,Z&&(e.flags&1048576)!==0&&og(e,Xo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ao(t,e),t=e.pendingProps;var i=Br(e,Ue.current);Pr(e,n),i=uh(null,e,r,t,i,n);var s=ch();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ye(r)?(s=!0,Qo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ih(e),i.updater=Ma,e.stateNode=i,i._reactInternals=e,Bu(e,r,t,n),e=Wu(null,e,r,!0,s,n)):(e.tag=0,Z&&s&&Xc(e),Ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ao(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=eE(r),t=pt(r,t),i){case 0:e=Hu(null,e,r,t,n);break e;case 1:e=_f(null,e,r,t,n);break e;case 11:e=Ef(null,e,r,t,n);break e;case 14:e=Sf(null,e,r,pt(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Hu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),_f(t,e,r,i,n);case 3:e:{if(zg(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,cg(t,e),ea(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qr(Error(w(423)),e),e=Tf(t,e,r,n,i);break e}else if(r!==i){i=qr(Error(w(424)),e),e=Tf(t,e,r,n,i);break e}else for(et=dn(e.stateNode.containerInfo.firstChild),tt=e,Z=!0,gt=null,n=pg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){e=jt(t,e,n);break e}Ve(t,e,r,n)}e=e.child}return e;case 5:return mg(e),t===null&&Vu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Lu(r,i)?o=null:s!==null&&Lu(r,s)&&(e.flags|=32),Vg(t,e),Ve(t,e,o,n),e.child;case 6:return t===null&&Vu(e),null;case 13:return bg(t,e,n);case 4:return sh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hr(e,null,r,n):Ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Ef(t,e,r,i,n);case 7:return Ve(t,e,e.pendingProps,n),e.child;case 8:return Ve(t,e,e.pendingProps.children,n),e.child;case 12:return Ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(Jo,r._currentValue),r._currentValue=o,s!==null)if(wt(s.value,o)){if(s.children===i.children&&!Qe.current){e=jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Vt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),zu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),zu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pr(e,n),i=ct(i),r=r(i),e.flags|=1,Ve(t,e,r,n),e.child;case 14:return r=e.type,i=pt(r,e.pendingProps),i=pt(r.type,i),Sf(t,e,r,i,n);case 15:return Ug(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Ao(t,e),e.tag=1,Ye(r)?(t=!0,Qo(e)):t=!1,Pr(e,n),dg(e,r,i),Bu(e,r,i,n),Wu(null,e,r,!0,t,n);case 19:return Bg(t,e,n);case 22:return Fg(t,e,n)}throw Error(w(156,e.tag))};function iy(t,e){return Dm(t,e)}function Z1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new Z1(t,e,n,r)}function Eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eE(t){if(typeof t=="function")return Eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vc)return 11;if(t===zc)return 14}return 2}function gn(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fr:return jn(n.children,i,s,e);case Fc:o=8,i|=8;break;case du:return t=lt(12,n,e,i|2),t.elementType=du,t.lanes=s,t;case fu:return t=lt(13,n,e,i),t.elementType=fu,t.lanes=s,t;case pu:return t=lt(19,n,e,i),t.elementType=pu,t.lanes=s,t;case fm:return Va(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hm:o=10;break e;case dm:o=9;break e;case Vc:o=11;break e;case zc:o=14;break e;case Zt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jn(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function Va(t,e,n,r){return t=lt(22,t,r,e),t.elementType=fm,t.lanes=n,t.stateNode={isHidden:!1},t}function jl(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function Hl(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sh(t,e,n,r,i,s,o,a,l){return t=new tE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ih(s),t}function nE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function sy(t){if(!t)return En;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ye(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Ye(n))return ig(t,n,e)}return e}function oy(t,e,n,r,i,s,o,a,l){return t=Sh(n,r,!0,t,i,s,o,a,l),t.context=sy(null),n=t.current,r=be(),i=mn(n),s=Vt(r,i),s.callback=e!=null?e:null,fn(n,s,i),t.current.lanes=i,_s(t,i,r),Xe(t,r),t}function za(t,e,n,r){var i=e.current,s=be(),o=mn(i);return n=sy(n),e.context===null?e.context=n:e.pendingContext=n,e=Vt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fn(i,e,o),t!==null&&(vt(t,i,o,s),ko(t,i,o)),o}function la(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Of(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _h(t,e){Of(t,e),(t=t.alternate)&&Of(t,e)}function rE(){return null}var ay=typeof reportError=="function"?reportError:function(t){console.error(t)};function Th(t){this._internalRoot=t}ba.prototype.render=Th.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));za(t,e,null,null)};ba.prototype.unmount=Th.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zn(function(){za(null,t,null,null)}),e[bt]=null}};function ba(t){this._internalRoot=t}ba.prototype.unstable_scheduleHydration=function(t){if(t){var e=Um();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tn.length&&e!==0&&e<tn[n].priority;n++);tn.splice(n,0,t),n===0&&Vm(t)}};function Ih(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ba(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lf(){}function iE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=la(o);s.call(u)}}var o=oy(e,r,t,0,null,!1,!1,"",Lf);return t._reactRootContainer=o,t[bt]=o.current,Xi(t.nodeType===8?t.parentNode:t),Zn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=la(l);a.call(u)}}var l=Sh(t,0,!1,null,null,!1,!1,"",Lf);return t._reactRootContainer=l,t[bt]=l.current,Xi(t.nodeType===8?t.parentNode:t),Zn(function(){za(e,l,n,r)}),l}function ja(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=la(o);a.call(l)}}za(e,o,t,i)}else o=iE(n,e,t,i,r);return la(o)}Mm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ti(e.pendingLanes);n!==0&&(jc(e,n|1),Xe(e,ae()),(H&6)===0&&(Kr=ae()+500,Nn()))}break;case 13:Zn(function(){var r=Bt(t,1);if(r!==null){var i=be();vt(r,t,1,i)}}),_h(t,1)}};Hc=function(t){if(t.tag===13){var e=Bt(t,134217728);if(e!==null){var n=be();vt(e,t,134217728,n)}_h(t,134217728)}};$m=function(t){if(t.tag===13){var e=mn(t),n=Bt(t,e);if(n!==null){var r=be();vt(n,t,e,r)}_h(t,e)}};Um=function(){return G};Fm=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};Iu=function(t,e,n){switch(e){case"input":if(yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Oa(r);if(!i)throw Error(w(90));mm(r),yu(r,i)}}}break;case"textarea":ym(t,n);break;case"select":e=n.value,e!=null&&Ar(t,!!n.multiple,e,!1)}};Im=yh;km=Zn;var sE={usingClientEntryPoint:!1,Events:[Is,yr,Oa,_m,Tm,yh]},wi={findFiberByHostInstance:Mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},oE={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Am(t),t===null?null:t.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||rE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{Ra=ho.inject(oE),kt=ho}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sE;it.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ih(e))throw Error(w(200));return nE(t,e,null,n)};it.createRoot=function(t,e){if(!Ih(t))throw Error(w(299));var n=!1,r="",i=ay;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sh(t,1,!1,null,null,n,!1,r,i),t[bt]=e.current,Xi(t.nodeType===8?t.parentNode:t),new Th(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Am(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return Zn(t)};it.hydrate=function(t,e,n){if(!Ba(e))throw Error(w(200));return ja(null,t,e,!0,n)};it.hydrateRoot=function(t,e,n){if(!Ih(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ay;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=oy(e,null,t,1,n!=null?n:null,i,!1,s,o),t[bt]=e.current,Xi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ba(e)};it.render=function(t,e,n){if(!Ba(e))throw Error(w(200));return ja(null,t,e,!1,n)};it.unmountComponentAtNode=function(t){if(!Ba(t))throw Error(w(40));return t._reactRootContainer?(Zn(function(){ja(null,null,t,!1,function(){t._reactRootContainer=null,t[bt]=null})}),!0):!1};it.unstable_batchedUpdates=yh;it.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ba(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return ja(t,e,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=it})(om);var Mf=om.exports;cu.createRoot=Mf.createRoot,cu.hydrateRoot=Mf.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},aE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},uy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ly(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},lE=function(t){const e=ly(t);return uy.encodeByteArray(e,!0)},cy=function(t){return lE(t).replace(/\./g,"")},uE=function(t){try{return uy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function dE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pE(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mE(){return typeof indexedDB=="object"}function gE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=yE,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,a,r)}}function vE(t,e){return t.replace(wE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wE=/\{\$([^}]+)}/g;function EE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ua(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if($f(s)&&$f(o)){if(!ua(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $f(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function SE(t,e){const n=new _E(t,e);return n.subscribe.bind(n)}class _E{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wl),i.error===void 0&&(i.error=Wl),i.complete===void 0&&(i.complete=Wl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wl(){}/**
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
 */function Ht(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ln="[DEFAULT]";/**
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
 */class IE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CE(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kE(t){return t===Ln?void 0:t}function CE(t){return t.instantiationMode==="EAGER"}/**
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
 */class NE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const AE={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},RE=q.INFO,DE={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},xE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kh{constructor(e){this.name=e,this._logLevel=RE,this._logHandler=xE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const PE=(t,e)=>e.some(n=>t instanceof n);let Uf,Ff;function OE(){return Uf||(Uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LE(){return Ff||(Ff=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hy=new WeakMap,rc=new WeakMap,dy=new WeakMap,ql=new WeakMap,Ch=new WeakMap;function ME(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hy.set(n,t)}).catch(()=>{}),Ch.set(e,t),e}function $E(t){if(rc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rc.set(t,e)}let ic={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UE(t){ic=t(ic)}function FE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Kl(this),e,...n);return dy.set(r,e.sort?e.sort():[e]),yn(r)}:LE().includes(t)?function(...e){return t.apply(Kl(this),e),yn(hy.get(this))}:function(...e){return yn(t.apply(Kl(this),e))}}function VE(t){return typeof t=="function"?FE(t):(t instanceof IDBTransaction&&$E(t),PE(t,OE())?new Proxy(t,ic):t)}function yn(t){if(t instanceof IDBRequest)return ME(t);if(ql.has(t))return ql.get(t);const e=VE(t);return e!==t&&(ql.set(t,e),Ch.set(e,t)),e}const Kl=t=>Ch.get(t);function zE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yn(o.result),l.oldVersion,l.newVersion,yn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const bE=["get","getKey","getAll","getAllKeys","count"],BE=["put","add","delete","clear"],Gl=new Map;function Vf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gl.get(e))return Gl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Gl.set(e,s),s}UE(t=>({...t,get:(e,n,r)=>Vf(e,n)||t.get(e,n,r),has:(e,n)=>!!Vf(e,n)||t.has(e,n)}));/**
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
 */class jE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sc="@firebase/app",zf="0.7.33";/**
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
 */const tr=new kh("@firebase/app"),WE="@firebase/app-compat",qE="@firebase/analytics-compat",KE="@firebase/analytics",GE="@firebase/app-check-compat",QE="@firebase/app-check",YE="@firebase/auth",XE="@firebase/auth-compat",JE="@firebase/database",ZE="@firebase/database-compat",eS="@firebase/functions",tS="@firebase/functions-compat",nS="@firebase/installations",rS="@firebase/installations-compat",iS="@firebase/messaging",sS="@firebase/messaging-compat",oS="@firebase/performance",aS="@firebase/performance-compat",lS="@firebase/remote-config",uS="@firebase/remote-config-compat",cS="@firebase/storage",hS="@firebase/storage-compat",dS="@firebase/firestore",fS="@firebase/firestore-compat",pS="firebase",mS="9.10.0";/**
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
 */const fy="[DEFAULT]",gS={[sc]:"fire-core",[WE]:"fire-core-compat",[KE]:"fire-analytics",[qE]:"fire-analytics-compat",[QE]:"fire-app-check",[GE]:"fire-app-check-compat",[YE]:"fire-auth",[XE]:"fire-auth-compat",[JE]:"fire-rtdb",[ZE]:"fire-rtdb-compat",[eS]:"fire-fn",[tS]:"fire-fn-compat",[nS]:"fire-iid",[rS]:"fire-iid-compat",[iS]:"fire-fcm",[sS]:"fire-fcm-compat",[oS]:"fire-perf",[aS]:"fire-perf-compat",[lS]:"fire-rc",[uS]:"fire-rc-compat",[cS]:"fire-gcs",[hS]:"fire-gcs-compat",[dS]:"fire-fst",[fS]:"fire-fst-compat","fire-js":"fire-js",[pS]:"fire-js-all"};/**
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
 */const ca=new Map,oc=new Map;function yS(t,e){try{t.container.addComponent(e)}catch(n){tr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gr(t){const e=t.name;if(oc.has(e))return tr.debug(`There were multiple attempts to register component ${e}.`),!1;oc.set(e,t);for(const n of ca.values())yS(n,t);return!0}function Nh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nr=new Cs("app","Firebase",vS);/**
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
 */class wS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const As=mS;function ES(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:fy,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw nr.create("bad-app-name",{appName:String(r)});const i=ca.get(r);if(i){if(ua(t,i.options)&&ua(n,i.config))return i;throw nr.create("duplicate-app",{appName:r})}const s=new NE(r);for(const a of oc.values())s.addComponent(a);const o=new wS(t,n,s);return ca.set(r,o),o}function py(t=fy){const e=ca.get(t);if(!e)throw nr.create("no-app",{appName:t});return e}function vn(t,e,n){var r;let i=(r=gS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tr.warn(a.join(" "));return}Gr(new er(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const SS="firebase-heartbeat-database",_S=1,os="firebase-heartbeat-store";let Ql=null;function my(){return Ql||(Ql=zE(SS,_S,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(os)}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),Ql}async function TS(t){var e;try{return(await my()).transaction(os).objectStore(os).get(gy(t))}catch(n){if(n instanceof Yt)tr.warn(n.message);else{const r=nr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});tr.warn(r.message)}}}async function bf(t,e){var n;try{const i=(await my()).transaction(os,"readwrite");return await i.objectStore(os).put(e,gy(t)),i.done}catch(r){if(r instanceof Yt)tr.warn(r.message);else{const i=nr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});tr.warn(i.message)}}}function gy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const IS=1024,kS=30*24*60*60*1e3;class CS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=kS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bf(),{heartbeatsToSend:n,unsentEntries:r}=NS(this._heartbeatsCache.heartbeats),i=cy(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bf(){return new Date().toISOString().substring(0,10)}function NS(t,e=IS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mE()?gE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await TS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jf(t){return cy(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RS(t){Gr(new er("platform-logger",e=>new jE(e),"PRIVATE")),Gr(new er("heartbeat",e=>new CS(e),"PRIVATE")),vn(sc,zf,t),vn(sc,zf,"esm2017"),vn("fire-js","")}RS("");var DS="firebase",xS="9.10.0";/**
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
 */vn(DS,xS,"app");var PS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,Ah=Ah||{},L=PS||self;function ha(){}function Ha(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Rs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function OS(t){return Object.prototype.hasOwnProperty.call(t,Yl)&&t[Yl]||(t[Yl]=++LS)}var Yl="closure_uid_"+(1e9*Math.random()>>>0),LS=0;function MS(t,e,n){return t.call.apply(t.bind,arguments)}function $S(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Le(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Le=MS:Le=$S,Le.apply(null,arguments)}function fo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function De(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function An(){this.s=this.s,this.o=this.o}var US=0;An.prototype.s=!1;An.prototype.na=function(){!this.s&&(this.s=!0,this.M(),US!=0)&&OS(this)};An.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Rh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Hf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ha(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Me(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var FS=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",ha,e),L.removeEventListener("test",ha,e)}catch{}return t}();function da(t){return/^[\s\xa0]*$/.test(t)}var Wf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xl(t,e){return t<e?-1:t>e?1:0}function Wa(){var t=L.navigator;return t&&(t=t.userAgent)?t:""}function Tt(t){return Wa().indexOf(t)!=-1}function Dh(t){return Dh[" "](t),t}Dh[" "]=ha;function VS(t){var e=BS;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var zS=Tt("Opera"),Qr=Tt("Trident")||Tt("MSIE"),vy=Tt("Edge"),ac=vy||Qr,wy=Tt("Gecko")&&!(Wa().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge"))&&!(Tt("Trident")||Tt("MSIE"))&&!Tt("Edge"),bS=Wa().toLowerCase().indexOf("webkit")!=-1&&!Tt("Edge");function Ey(){var t=L.document;return t?t.documentMode:void 0}var fa;e:{var Jl="",Zl=function(){var t=Wa();if(wy)return/rv:([^\);]+)(\)|;)/.exec(t);if(vy)return/Edge\/([\d\.]+)/.exec(t);if(Qr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bS)return/WebKit\/(\S+)/.exec(t);if(zS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Zl&&(Jl=Zl?Zl[1]:""),Qr){var eu=Ey();if(eu!=null&&eu>parseFloat(Jl)){fa=String(eu);break e}}fa=Jl}var BS={};function jS(){return VS(function(){let t=0;const e=Wf(String(fa)).split("."),n=Wf("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Xl(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Xl(i[2].length==0,s[2].length==0)||Xl(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var lc;if(L.document&&Qr){var qf=Ey();lc=qf||parseInt(fa,10)||void 0}else lc=void 0;var HS=lc;function as(t,e){if(Me.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wy){e:{try{Dh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:WS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&as.X.h.call(this)}}De(as,Me);var WS={2:"touch",3:"pen",4:"mouse"};as.prototype.h=function(){as.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ds="closure_listenable_"+(1e6*Math.random()|0),qS=0;function KS(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++qS,this.ba=this.ea=!1}function qa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function xh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Sy(t){const e={};for(const n in t)e[n]=t[n];return e}const Kf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _y(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Kf.length;s++)n=Kf[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ka(t){this.src=t,this.g={},this.h=0}Ka.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=cc(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new KS(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function uc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=yy(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(qa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function cc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Ph="closure_lm_"+(1e6*Math.random()|0),tu={};function Ty(t,e,n,r,i){if(r&&r.once)return ky(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ty(t,e[s],n,r,i);return null}return n=Mh(n),t&&t[Ds]?t.N(e,n,Rs(r)?!!r.capture:!!r,i):Iy(t,e,n,!1,r,i)}function Iy(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Rs(i)?!!i.capture:!!i,a=Lh(t);if(a||(t[Ph]=a=new Ka(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=GS(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)FS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Ny(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function GS(){function t(n){return e.call(t.src,t.listener,n)}const e=QS;return t}function ky(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ky(t,e[s],n,r,i);return null}return n=Mh(n),t&&t[Ds]?t.O(e,n,Rs(r)?!!r.capture:!!r,i):Iy(t,e,n,!0,r,i)}function Cy(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Cy(t,e[s],n,r,i);else r=Rs(r)?!!r.capture:!!r,n=Mh(n),t&&t[Ds]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=cc(s,n,r,i),-1<n&&(qa(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Lh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=cc(e,n,r,i)),(n=-1<t?e[t]:null)&&Oh(n))}function Oh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ds])uc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ny(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Lh(e))?(uc(n,t),n.h==0&&(n.src=null,e[Ph]=null)):qa(t)}}}function Ny(t){return t in tu?tu[t]:tu[t]="on"+t}function QS(t,e){if(t.ba)t=!0;else{e=new as(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Oh(t),t=n.call(r,e)}return t}function Lh(t){return t=t[Ph],t instanceof Ka?t:null}var nu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mh(t){return typeof t=="function"?t:(t[nu]||(t[nu]=function(e){return t.handleEvent(e)}),t[nu])}function Ee(){An.call(this),this.i=new Ka(this),this.P=this,this.I=null}De(Ee,An);Ee.prototype[Ds]=!0;Ee.prototype.removeEventListener=function(t,e,n,r){Cy(this,t,e,n,r)};function Ne(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Me(e,t);else if(e instanceof Me)e.target=e.target||t;else{var i=e;e=new Me(r,t),_y(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=po(o,r,!0,e)&&i}if(o=e.g=t,i=po(o,r,!0,e)&&i,i=po(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=po(o,r,!1,e)&&i}Ee.prototype.M=function(){if(Ee.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)qa(n[r]);delete t.g[e],t.h--}}this.I=null};Ee.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ee.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function po(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&uc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var $h=L.JSON.stringify;function YS(){var t=Dy;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class XS{constructor(){this.h=this.g=null}add(e,n){const r=Ay.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ay=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new JS,t=>t.reset());class JS{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ZS(t){L.setTimeout(()=>{throw t},0)}function Ry(t,e){hc||e_(),dc||(hc(),dc=!0),Dy.add(t,e)}var hc;function e_(){var t=L.Promise.resolve(void 0);hc=function(){t.then(t_)}}var dc=!1,Dy=new XS;function t_(){for(var t;t=YS();){try{t.h.call(t.g)}catch(n){ZS(n)}var e=Ay;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}dc=!1}function Ga(t,e){Ee.call(this),this.h=t||1,this.g=e||L,this.j=Le(this.kb,this),this.l=Date.now()}De(Ga,Ee);A=Ga.prototype;A.ca=!1;A.R=null;A.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ne(this,"tick"),this.ca&&(Uh(this),this.start()))}};A.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Uh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}A.M=function(){Ga.X.M.call(this),Uh(this),delete this.g};function Fh(t,e,n){if(typeof t=="function")n&&(t=Le(t,n));else if(t&&typeof t.handleEvent=="function")t=Le(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function xy(t){t.g=Fh(()=>{t.g=null,t.i&&(t.i=!1,xy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class n_ extends An{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:xy(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ls(t){An.call(this),this.h=t,this.g={}}De(ls,An);var Gf=[];function Py(t,e,n,r){Array.isArray(n)||(n&&(Gf[0]=n.toString()),n=Gf);for(var i=0;i<n.length;i++){var s=Ty(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Oy(t){xh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Oh(e)},t),t.g={}}ls.prototype.M=function(){ls.X.M.call(this),Oy(this)};ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Qa(){this.g=!0}Qa.prototype.Aa=function(){this.g=!1};function r_(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function i_(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ir(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+o_(t,n)+(r?" "+r:"")})}function s_(t,e){t.info(function(){return"TIMEOUT: "+e})}Qa.prototype.info=function(){};function o_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return $h(n)}catch{return e}}var lr={},Qf=null;function Ya(){return Qf=Qf||new Ee}lr.Oa="serverreachability";function Ly(t){Me.call(this,lr.Oa,t)}De(Ly,Me);function us(t){const e=Ya();Ne(e,new Ly(e))}lr.STAT_EVENT="statevent";function My(t,e){Me.call(this,lr.STAT_EVENT,t),this.stat=e}De(My,Me);function ze(t){const e=Ya();Ne(e,new My(e,t))}lr.Pa="timingevent";function $y(t,e){Me.call(this,lr.Pa,t),this.size=e}De($y,Me);function xs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var Xa={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},Uy={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Vh(){}Vh.prototype.h=null;function Yf(t){return t.h||(t.h=t.i())}function Fy(){}var Ps={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function zh(){Me.call(this,"d")}De(zh,Me);function bh(){Me.call(this,"c")}De(bh,Me);var fc;function Ja(){}De(Ja,Vh);Ja.prototype.g=function(){return new XMLHttpRequest};Ja.prototype.i=function(){return{}};fc=new Ja;function Os(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ls(this),this.O=a_,t=ac?125:void 0,this.T=new Ga(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Vy}function Vy(){this.i=null,this.g="",this.h=!1}var a_=45e3,pc={},pa={};A=Os.prototype;A.setTimeout=function(t){this.O=t};function mc(t,e,n){t.K=1,t.v=el(Wt(e)),t.s=n,t.P=!0,zy(t,null)}function zy(t,e){t.F=Date.now(),Ls(t),t.A=Wt(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Gy(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Vy,t.g=mv(t.l,n?e:null,!t.s),0<t.N&&(t.L=new n_(Le(t.Ka,t,t.g),t.N)),Py(t.S,t.g,"readystatechange",t.hb),e=t.H?Sy(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),us(),r_(t.j,t.u,t.A,t.m,t.U,t.s)}A.hb=function(t){t=t.target;const e=this.L;e&&$t(t)==3?e.l():this.Ka(t)};A.Ka=function(t){try{if(t==this.g)e:{const c=$t(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||ac||this.g&&(this.h.h||this.g.fa()||ep(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?us(3):us(2)),Za(this);var n=this.g.aa();this.Y=n;t:if(by(this)){var r=ep(this.g);t="";var i=r.length,s=$t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),Fi(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,i_(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!da(a)){var u=a;break t}}u=null}if(n=u)Ir(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,gc(this,n);else{this.i=!1,this.o=3,ze(12),Fn(this),Fi(this);break e}}this.P?(By(this,c,o),ac&&this.i&&c==3&&(Py(this.S,this.T,"tick",this.gb),this.T.start())):(Ir(this.j,this.m,o,null),gc(this,o)),c==4&&Fn(this),this.i&&!this.I&&(c==4?hv(this.l,this):(this.i=!1,Ls(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ze(12)):(this.o=0,ze(13)),Fn(this),Fi(this)}}}catch{}finally{}};function by(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function By(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=l_(t,n),i==pa){e==4&&(t.o=4,ze(14),r=!1),Ir(t.j,t.m,null,"[Incomplete Response]");break}else if(i==pc){t.o=4,ze(15),Ir(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ir(t.j,t.m,i,null),gc(t,i);by(t)&&i!=pa&&i!=pc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ze(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gh(e),e.K=!0,ze(11))):(Ir(t.j,t.m,n,"[Invalid Chunked Response]"),Fn(t),Fi(t))}A.gb=function(){if(this.g){var t=$t(this.g),e=this.g.fa();this.C<e.length&&(Za(this),By(this,t,e),this.i&&t!=4&&Ls(this))}};function l_(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?pa:(n=Number(e.substring(n,r)),isNaN(n)?pc:(r+=1,r+n>e.length?pa:(e=e.substr(r,n),t.C=r+n,e)))}A.cancel=function(){this.I=!0,Fn(this)};function Ls(t){t.V=Date.now()+t.O,jy(t,t.O)}function jy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xs(Le(t.fb,t),e)}function Za(t){t.B&&(L.clearTimeout(t.B),t.B=null)}A.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(s_(this.j,this.A),this.K!=2&&(us(),ze(17)),Fn(this),this.o=2,Fi(this)):jy(this,this.V-t)};function Fi(t){t.l.G==0||t.I||hv(t.l,t)}function Fn(t){Za(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Uh(t.T),Oy(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function gc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||yc(n.h,t))){if(!t.J&&yc(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ya(n),rl(n);else break e;Kh(n),ze(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=xs(Le(n.bb,n),6e3));if(1>=Xy(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Vn(n,11)}else if((t.J||n.g==t)&&ya(n),!da(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Bh(s,s.h),s.h=null))}if(r.D){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.za=E,ee(r.F,r.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=pv(r,r.H?r.ka:null,r.V),o.J){Jy(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Za(a),Ls(a)),r.g=o}else uv(r);0<n.i.length&&il(n)}else u[0]!="stop"&&u[0]!="close"||Vn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vn(n,7):qh(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}us(4)}catch{}}function u_(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ha(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function c_(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ha(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Hy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ha(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=c_(t),r=u_(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Wy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function h_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Hn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Hn){this.h=e!==void 0?e:t.h,ma(this,t.j),this.s=t.s,this.g=t.g,ga(this,t.m),this.l=t.l,e=t.i;var n=new cs;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Xf(this,n),this.o=t.o}else t&&(n=String(t).match(Wy))?(this.h=!!e,ma(this,n[1]||"",!0),this.s=ki(n[2]||""),this.g=ki(n[3]||"",!0),ga(this,n[4]),this.l=ki(n[5]||"",!0),Xf(this,n[6]||"",!0),this.o=ki(n[7]||"")):(this.h=!!e,this.i=new cs(null,this.h))}Hn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ci(e,Jf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ci(e,Jf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ci(n,n.charAt(0)=="/"?p_:f_,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ci(n,g_)),t.join("")};function Wt(t){return new Hn(t)}function ma(t,e,n){t.j=n?ki(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ga(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Xf(t,e,n){e instanceof cs?(t.i=e,y_(t.i,t.h)):(n||(e=Ci(e,m_)),t.i=new cs(e,t.h))}function ee(t,e,n){t.i.set(e,n)}function el(t){return ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ki(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ci(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,d_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function d_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Jf=/[#\/\?@]/g,f_=/[#\?:]/g,p_=/[#\?]/g,m_=/[#\?@]/g,g_=/#/g;function cs(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Rn(t){t.g||(t.g=new Map,t.h=0,t.i&&h_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=cs.prototype;A.add=function(t,e){Rn(this),this.i=null,t=si(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function qy(t,e){Rn(t),e=si(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ky(t,e){return Rn(t),e=si(t,e),t.g.has(e)}A.forEach=function(t,e){Rn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};A.oa=function(){Rn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};A.W=function(t){Rn(this);let e=[];if(typeof t=="string")Ky(this,t)&&(e=e.concat(this.g.get(si(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Rn(this),this.i=null,t=si(this,t),Ky(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Gy(t,e,n){qy(t,e),0<n.length&&(t.i=null,t.g.set(si(t,e),Rh(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function si(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function y_(t,e){e&&!t.j&&(Rn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(qy(this,r),Gy(this,i,n))},t)),t.j=e}var v_=class{constructor(t,e){this.h=t,this.g=e}};function Qy(t){this.l=t||w_,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ga&&L.g.Ga()&&L.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var w_=10;function Yy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Xy(t){return t.h?1:t.g?t.g.size:0}function yc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Bh(t,e){t.g?t.g.add(e):t.h=e}function Jy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Qy.prototype.cancel=function(){if(this.i=Zy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Zy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Rh(t.i)}function jh(){}jh.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};jh.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function E_(){this.g=new jh}function S_(t,e,n){const r=n||"";try{Hy(t,function(i,s){let o=i;Rs(i)&&(o=$h(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function __(t,e){const n=new Qa;if(L.Image){const r=new Image;r.onload=fo(mo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=fo(mo,n,r,"TestLoadImage: error",!1,e),r.onabort=fo(mo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=fo(mo,n,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function mo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ms(t){this.l=t.$b||null,this.j=t.ib||!1}De(Ms,Vh);Ms.prototype.g=function(){return new tl(this.l,this.j)};Ms.prototype.i=function(t){return function(){return t}}({});function tl(t,e){Ee.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Hh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(tl,Ee);var Hh=0;A=tl.prototype;A.open=function(t,e){if(this.readyState!=Hh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hs(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$s(this)),this.readyState=Hh};A.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hs(this)),this.g&&(this.readyState=3,hs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ev(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))};function ev(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}A.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?$s(this):hs(this),this.readyState==3&&ev(this)}};A.Ua=function(t){this.g&&(this.response=this.responseText=t,$s(this))};A.Ta=function(t){this.g&&(this.response=t,$s(this))};A.ga=function(){this.g&&$s(this)};function $s(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hs(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var T_=L.JSON.parse;function de(t){Ee.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tv,this.K=this.L=!1}De(de,Ee);var tv="",I_=/^https?$/i,k_=["POST","PUT"];A=de.prototype;A.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fc.g(),this.C=this.u?Yf(this.u):Yf(fc),this.g.onreadystatechange=Le(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Zf(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=L.FormData&&t instanceof L.FormData,!(0<=yy(k_,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{iv(this),0<this.B&&((this.K=C_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Le(this.qa,this)):this.A=Fh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Zf(this,s)}};function C_(t){return Qr&&jS()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.qa=function(){typeof Ah<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ne(this,"timeout"),this.abort(8))};function Zf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,nv(t),nl(t)}function nv(t){t.D||(t.D=!0,Ne(t,"complete"),Ne(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ne(this,"complete"),Ne(this,"abort"),nl(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nl(this,!0)),de.X.M.call(this)};A.Ha=function(){this.s||(this.F||this.v||this.l?rv(this):this.eb())};A.eb=function(){rv(this)};function rv(t){if(t.h&&typeof Ah<"u"&&(!t.C[1]||$t(t)!=4||t.aa()!=2)){if(t.v&&$t(t)==4)Fh(t.Ha,0,t);else if(Ne(t,"readystatechange"),$t(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Wy)[1]||null;if(!i&&L.self&&L.self.location){var s=L.self.location.protocol;i=s.substr(0,s.length-1)}r=!I_.test(i?i.toLowerCase():"")}n=r}if(n)Ne(t,"complete"),Ne(t,"success");else{t.m=6;try{var o=2<$t(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",nv(t)}}finally{nl(t)}}}}function nl(t,e){if(t.g){iv(t);const n=t.g,r=t.C[0]?ha:null;t.g=null,t.C=null,e||Ne(t,"ready");try{n.onreadystatechange=r}catch{}}}function iv(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function $t(t){return t.g?t.g.readyState:0}A.aa=function(){try{return 2<$t(this)?this.g.status:-1}catch{return-1}};A.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),T_(e)}};function ep(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case tv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Ea=function(){return this.m};A.Na=function(){return typeof this.j=="string"?this.j:String(this.j)};function sv(t){let e="";return xh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=sv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ee(t,e,n))}function Ei(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ov(t){this.Ca=0,this.i=[],this.j=new Qa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=Ei("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=Ei("baseRetryDelayMs",5e3,t),this.ab=Ei("retryDelaySeedMs",1e4,t),this.Za=Ei("forwardChannelMaxRetries",2,t),this.ta=Ei("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Qy(t&&t.concurrentRequestLimit),this.Fa=new E_,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}A=ov.prototype;A.ma=8;A.G=1;function qh(t){if(av(t),t.G==3){var e=t.U++,n=Wt(t.F);ee(n,"SID",t.I),ee(n,"RID",e),ee(n,"TYPE","terminate"),Us(t,n),e=new Os(t,t.j,e,void 0),e.K=2,e.v=el(Wt(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=mv(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ls(e)}fv(t)}function rl(t){t.g&&(Gh(t),t.g.cancel(),t.g=null)}function av(t){rl(t),t.u&&(L.clearTimeout(t.u),t.u=null),ya(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function il(t){Yy(t.h)||t.m||(t.m=!0,Ry(t.Ja,t),t.C=0)}function N_(t,e){return Xy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Ya?0:t.Za)?!1:(t.m=xs(Le(t.Ja,t,e),dv(t,t.C)),t.C++,!0)}A.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Os(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Sy(s),_y(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=lv(this,i,e),n=Wt(this.F),ee(n,"RID",t),ee(n,"CVER",22),this.D&&ee(n,"X-HTTP-Session-Id",this.D),Us(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(sv(s)))+"&"+e:this.o&&Wh(n,this.o,s)),Bh(this.h,i),this.Xa&&ee(n,"TYPE","init"),this.O?(ee(n,"$req",e),ee(n,"SID","null"),i.Z=!0,mc(i,n,null)):mc(i,n,e),this.G=2}}else this.G==3&&(t?tp(this,t):this.i.length==0||Yy(this.h)||tp(this))};function tp(t,e){var n;e?n=e.m:n=t.U++;const r=Wt(t.F);ee(r,"SID",t.I),ee(r,"RID",n),ee(r,"AID",t.T),Us(t,r),t.o&&t.s&&Wh(r,t.o,t.s),n=new Os(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=lv(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Bh(t.h,n),mc(n,r,e)}function Us(t,e){t.ia&&xh(t.ia,function(n,r){ee(e,r,n)}),t.l&&Hy({},function(n,r){ee(e,r,n)})}function lv(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Le(t.l.Qa,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{S_(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function uv(t){t.g||t.u||(t.Z=1,Ry(t.Ia,t),t.A=0)}function Kh(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=xs(Le(t.Ia,t),dv(t,t.A)),t.A++,!0)}A.Ia=function(){if(this.u=null,cv(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=xs(Le(this.cb,this),t)}};A.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ze(10),rl(this),cv(this))};function Gh(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function cv(t){t.g=new Os(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Wt(t.sa);ee(e,"RID","rpc"),ee(e,"SID",t.I),ee(e,"CI",t.L?"0":"1"),ee(e,"AID",t.T),ee(e,"TYPE","xmlhttp"),Us(t,e),t.o&&t.s&&Wh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=el(Wt(e)),n.s=null,n.P=!0,zy(n,t)}A.bb=function(){this.v!=null&&(this.v=null,rl(this),Kh(this),ze(19))};function ya(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function hv(t,e){var n=null;if(t.g==e){ya(t),Gh(t),t.g=null;var r=2}else if(yc(t.h,e))n=e.D,Jy(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ya(),Ne(r,new $y(r,n)),il(t)}else uv(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&N_(t,e)||r==2&&Kh(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Vn(t,5);break;case 4:Vn(t,10);break;case 3:Vn(t,6);break;default:Vn(t,2)}}}function dv(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Vn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Le(t.jb,t);n||(n=new Hn("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||ma(n,"https"),el(n)),__(n.toString(),r)}else ze(2);t.G=0,t.l&&t.l.va(e),fv(t),av(t)}A.jb=function(t){t?(this.j.info("Successfully pinged google.com"),ze(2)):(this.j.info("Failed to ping google.com"),ze(1))};function fv(t){if(t.G=0,t.la=[],t.l){const e=Zy(t.h);(e.length!=0||t.i.length!=0)&&(Hf(t.la,e),Hf(t.la,t.i),t.h.i.length=0,Rh(t.i),t.i.length=0),t.l.ua()}}function pv(t,e,n){var r=n instanceof Hn?Wt(n):new Hn(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),ga(r,r.m);else{var i=L.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Hn(null,void 0);r&&ma(s,r),e&&(s.g=e),i&&ga(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ee(r,n,e),ee(r,"VER",t.ma),Us(t,r),r}function mv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new de(new Ms({ib:!0})):new de(t.ra),e.L=t.H,e}function gv(){}A=gv.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Qa=function(){};function va(){if(Qr&&!(10<=Number(HS)))throw Error("Environmental error: no available transport.")}va.prototype.g=function(t,e){return new rt(t,e)};function rt(t,e){Ee.call(this),this.g=new ov(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!da(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!da(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new oi(this)}De(rt,Ee);rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ze(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=pv(t,null,t.V),il(t)};rt.prototype.close=function(){qh(this.g)};rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$h(t),t=n);e.i.push(new v_(e.$a++,t)),e.G==3&&il(e)};rt.prototype.M=function(){this.g.l=null,delete this.j,qh(this.g),delete this.g,rt.X.M.call(this)};function yv(t){zh.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(yv,zh);function vv(){bh.call(this),this.status=1}De(vv,bh);function oi(t){this.g=t}De(oi,gv);oi.prototype.xa=function(){Ne(this.g,"a")};oi.prototype.wa=function(t){Ne(this.g,new yv(t))};oi.prototype.va=function(t){Ne(this.g,new vv)};oi.prototype.ua=function(){Ne(this.g,"b")};va.prototype.createWebChannel=va.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;Xa.NO_ERROR=0;Xa.TIMEOUT=8;Xa.HTTP_ERROR=6;Uy.COMPLETE="complete";Fy.EventType=Ps;Ps.OPEN="a";Ps.CLOSE="b";Ps.ERROR="c";Ps.MESSAGE="d";Ee.prototype.listen=Ee.prototype.N;de.prototype.listenOnce=de.prototype.O;de.prototype.getLastError=de.prototype.Na;de.prototype.getLastErrorCode=de.prototype.Ea;de.prototype.getStatus=de.prototype.aa;de.prototype.getResponseJson=de.prototype.Ra;de.prototype.getResponseText=de.prototype.fa;de.prototype.send=de.prototype.da;var A_=function(){return new va},R_=function(){return Ya()},ru=Xa,D_=Uy,x_=lr,np={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},P_=Ms,go=Fy,O_=de;const rp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai="9.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new kh("@firebase/firestore");function ip(){return rr.logLevel}function D(t,...e){if(rr.logLevel<=q.DEBUG){const n=e.map(Qh);rr.debug(`Firestore (${ai}): ${t}`,...n)}}function qt(t,...e){if(rr.logLevel<=q.ERROR){const n=e.map(Qh);rr.error(`Firestore (${ai}): ${t}`,...n)}}function sp(t,...e){if(rr.logLevel<=q.WARN){const n=e.map(Qh);rr.warn(`Firestore (${ai}): ${t}`,...n)}}function Qh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${ai}) INTERNAL ASSERTION FAILED: `+t;throw qt(e),new Error(e)}function he(t,e){t||F()}function W(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(He.UNAUTHENTICATED))}shutdown(){}}class $_{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Lr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new L_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new He(e)}}class U_{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=He.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(he(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class F_{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new U_(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(He.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class V_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z_{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.A=n.token,new V_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function b_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=b_(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function K(t,e){return t<e?-1:t>e?1:0}function Yr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?K(this.nanoseconds,e.nanoseconds):K(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Je(0,0))}static max(){return new z(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ds.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ds?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends ds{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const j_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends ds{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return j_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(se.fromString(e))}static fromName(e){return new O(se.fromString(e).popFirst(5))}static empty(){return new O(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new se(e.slice()))}}function H_(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Sn(i,O.empty(),e)}function W_(t){return new Sn(t.readTime,t.key,-1)}class Sn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sn(z.min(),O.empty(),-1)}static max(){return new Sn(z.max(),O.empty(),-1)}}function q_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:K(t.largestBatchId,e.largestBatchId))}/**
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
 */const K_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class G_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==K_)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Fs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Q_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xh.at=-1;class Se{constructor(e,n){this.comparator=e,this.root=n||Te.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yo(this.root,e,this.comparator,!1)}getReverseIterator(){return new yo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yo(this.root,e,this.comparator,!0)}}class yo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Te.RED,this.left=i!=null?i:Te.EMPTY,this.right=s!=null?s:Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Te(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Te(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ap(this.data.getIterator())}getIteratorFrom(e){return new ap(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new me(this.comparator);return n.data=e,n}}class ap{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wn{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new Wn([])}unionWith(e){let n=new me(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Re{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Re(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Re(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return K(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const Y_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _n(t){if(he(!!t),typeof t=="string"){let e=0;const n=Y_.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(t.seconds),nanos:ue(t.nanos)}}function ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xr(t){return typeof t=="string"?Re.fromBase64String(t):Re.fromUint8Array(t)}/**
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
 */function wv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ev(t){const e=t.mapValue.fields.__previous_value__;return wv(e)?Ev(e):e}function fs(t){const e=_n(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ps{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ps("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ps&&e.projectId===this.projectId&&e.database===this.database}}function ol(t){return t==null}function vc(t){return t===0&&1/t==-1/0}/**
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
 */const vo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?wv(t)?4:J_(t)?9007199254740991:10:F()}function Rt(t,e){if(t===e)return!0;const n=ir(t);if(n!==ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fs(t).isEqual(fs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=_n(r.timestampValue),o=_n(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Xr(r.bytesValue).isEqual(Xr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ue(r.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(r.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ue(r.integerValue)===ue(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ue(r.doubleValue),o=ue(i.doubleValue);return s===o?vc(s)===vc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Yr(t.arrayValue.values||[],e.arrayValue.values||[],Rt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(op(s)!==op(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Rt(s[a],o[a])))return!1;return!0}(t,e);default:return F()}}function ms(t,e){return(t.values||[]).find(n=>Rt(n,e))!==void 0}function Jr(t,e){if(t===e)return 0;const n=ir(t),r=ir(e);if(n!==r)return K(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return K(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ue(i.integerValue||i.doubleValue),a=ue(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return lp(t.timestampValue,e.timestampValue);case 4:return lp(fs(t),fs(e));case 5:return K(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Xr(i),a=Xr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=K(o[l],a[l]);if(u!==0)return u}return K(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=K(ue(i.latitude),ue(s.latitude));return o!==0?o:K(ue(i.longitude),ue(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Jr(o[l],a[l]);if(u)return u}return K(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===vo.mapValue&&s===vo.mapValue)return 0;if(i===vo.mapValue)return 1;if(s===vo.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=K(a[c],u[c]);if(h!==0)return h;const f=Jr(o[a[c]],l[u[c]]);if(f!==0)return f}return K(a.length,u.length)}(t.mapValue,e.mapValue);default:throw F()}}function lp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return K(t,e);const n=_n(t),r=_n(e),i=K(n.seconds,r.seconds);return i!==0?i:K(n.nanos,r.nanos)}function Mr(t){return wc(t)}function wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=_n(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Xr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=wc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${wc(r.fields[a])}`;return s+"}"}(t.mapValue):F();var e,n}function Ec(t){return!!t&&"integerValue"in t}function Jh(t){return!!t&&"arrayValue"in t}function up(t){return!!t&&"nullValue"in t}function cp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function iu(t){return!!t&&"mapValue"in t}function Vi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return sl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function J_(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vi(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Vi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){sl(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Vi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ie(e,0,z.min(),z.min(),It.empty(),0)}static newFoundDocument(e,n,r){return new Ie(e,1,n,z.min(),r,0)}static newNoDocument(e,n){return new Ie(e,2,n,z.min(),It.empty(),0)}static newUnknownDocument(e,n){return new Ie(e,3,n,z.min(),It.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Z_{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function hp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Z_(t,e,n,r,i,s,o)}function Zh(t){const e=W(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Mr(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ol(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Mr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Mr(r)).join(",")),e.ht=n}return e.ht}function eT(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Mr(r.value)}`;var r}).join(", ")}]`),ol(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Mr(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Mr(n)).join(",")),`Target(${e})`}function ed(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!lT(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Rt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fp(t.startAt,e.startAt)&&fp(t.endAt,e.endAt)}function Sc(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ge extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new tT(e,n,r):n==="array-contains"?new iT(e,r):n==="in"?new sT(e,r):n==="not-in"?new oT(e,r):n==="array-contains-any"?new aT(e,r):new Ge(e,n,r)}static lt(e,n,r){return n==="in"?new nT(e,r):new rT(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Jr(n,this.value)):n!==null&&ir(this.value)===ir(n)&&this.ft(Jr(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class tT extends Ge{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.ft(n)}}class nT extends Ge{constructor(e,n){super(e,"in",n),this.keys=Sv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rT extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=Sv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class iT extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jh(n)&&ms(n.arrayValue,this.value)}}class sT extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ms(this.value.arrayValue,n)}}class oT extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ms(this.value.arrayValue,n)}}class aT extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ms(this.value.arrayValue,r))}}class wa{constructor(e,n){this.position=e,this.inclusive=n}}class $r{constructor(e,n="asc"){this.field=e,this.dir=n}}function lT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function dp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=Jr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function fp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function uT(t,e,n,r,i,s,o,a){return new Vs(t,e,n,r,i,s,o,a)}function td(t){return new Vs(t)}function pp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _v(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Tv(t){for(const e of t.filters)if(e.dt())return e.field;return null}function cT(t){return t.collectionGroup!==null}function gs(t){const e=W(t);if(e._t===null){e._t=[];const n=Tv(e),r=_v(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new $r(n)),e._t.push(new $r(qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new $r(qe.keyField(),s))}}}return e._t}function Kt(t){const e=W(t);if(!e.wt)if(e.limitType==="F")e.wt=hp(e.path,e.collectionGroup,gs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of gs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new $r(s.field,o))}const r=e.endAt?new wa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new wa(e.startAt.position,e.startAt.inclusive):null;e.wt=hp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Ea(t,e,n){return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zs(t,e){return ed(Kt(t),Kt(e))&&t.limitType===e.limitType}function Iv(t){return`${Zh(Kt(t))}|lt:${t.limitType}`}function _c(t){return`Query(target=${eT(Kt(t))}; limitType=${t.limitType})`}function nd(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):O.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=dp(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,gs(n),r)||n.endAt&&!function(i,s,o){const a=dp(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,gs(n),r))}(t,e)}function hT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function kv(t){return(e,n)=>{let r=!1;for(const i of gs(t)){const s=dT(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dT(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Jr(a,l):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
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
 */function fT(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vc(e)?"-0":e}}function pT(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this._=void 0}}function mT(t,e,n){return t instanceof Tc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Sa?Cv(t,e):t instanceof _a?Nv(t,e):function(r,i){const s=yT(r,i),o=mp(s)+mp(r.yt);return Ec(s)&&Ec(r.yt)?pT(o):fT(r.It,o)}(t,e)}function gT(t,e,n){return t instanceof Sa?Cv(t,e):t instanceof _a?Nv(t,e):n}function yT(t,e){return t instanceof Ic?Ec(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Tc extends al{}class Sa extends al{constructor(e){super(),this.elements=e}}function Cv(t,e){const n=Av(e);for(const r of t.elements)n.some(i=>Rt(i,r))||n.push(r);return{arrayValue:{values:n}}}class _a extends al{constructor(e){super(),this.elements=e}}function Nv(t,e){let n=Av(e);for(const r of t.elements)n=n.filter(i=>!Rt(i,r));return{arrayValue:{values:n}}}class Ic extends al{constructor(e,n){super(),this.It=e,this.yt=n}}function mp(t){return ue(t.integerValue||t.doubleValue)}function Av(t){return Jh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vT(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Sa&&r instanceof Sa||n instanceof _a&&r instanceof _a?Yr(n.elements,r.elements,Rt):n instanceof Ic&&r instanceof Ic?Rt(n.yt,r.yt):n instanceof Tc&&r instanceof Tc}(t.transform,e.transform)}class qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Po(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rd{}function Rv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ET(t.key,qn.none()):new id(t.key,t.data,qn.none());{const n=t.data,r=It.empty();let i=new me(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ll(t.key,r,new Wn(i.toArray()),qn.none())}}function wT(t,e,n){t instanceof id?function(r,i,s){const o=r.value.clone(),a=yp(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ll?function(r,i,s){if(!Po(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=yp(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(Dv(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function zi(t,e,n,r){return t instanceof id?function(i,s,o,a){if(!Po(i.precondition,s))return o;const l=i.value.clone(),u=vp(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ll?function(i,s,o,a){if(!Po(i.precondition,s))return o;const l=vp(i.fieldTransforms,a,s),u=s.data;return u.setAll(Dv(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Po(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function gp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Yr(n,r,(i,s)=>vT(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class id extends rd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ll extends rd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Dv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yp(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,gT(o,a,n[i]))}return r}function vp(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mT(s,o,e))}return r}class ET extends rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le,B;function xv(t){if(t===void 0)return qt("GRPC error has no .code"),_.UNKNOWN;switch(t){case le.OK:return _.OK;case le.CANCELLED:return _.CANCELLED;case le.UNKNOWN:return _.UNKNOWN;case le.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case le.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case le.INTERNAL:return _.INTERNAL;case le.UNAVAILABLE:return _.UNAVAILABLE;case le.UNAUTHENTICATED:return _.UNAUTHENTICATED;case le.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case le.NOT_FOUND:return _.NOT_FOUND;case le.ALREADY_EXISTS:return _.ALREADY_EXISTS;case le.PERMISSION_DENIED:return _.PERMISSION_DENIED;case le.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case le.ABORTED:return _.ABORTED;case le.OUT_OF_RANGE:return _.OUT_OF_RANGE;case le.UNIMPLEMENTED:return _.UNIMPLEMENTED;case le.DATA_LOSS:return _.DATA_LOSS;default:return F()}}(B=le||(le={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){sl(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Q_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=new Se(O.comparator);function Tn(){return _T}const Pv=new Se(O.comparator);function Ni(...t){let e=Pv;for(const n of t)e=e.insert(n.key,n);return e}function TT(t){let e=Pv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zn(){return bi()}function Ov(){return bi()}function bi(){return new li(t=>t.toString(),(t,e)=>t.isEqual(e))}new Se(O.comparator);const IT=new me(O.comparator);function j(...t){let e=IT;for(const n of t)e=e.add(n);return e}const kT=new me(K);function Lv(){return kT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,bs.createSynthesizedTargetChangeForCurrentChange(e,n)),new ul(z.min(),r,Lv(),Tn(),j())}}class bs{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new bs(Re.EMPTY_BYTE_STRING,n,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class Mv{constructor(e,n){this.targetId=e,this.At=n}}class $v{constructor(e,n,r=Re.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class wp{constructor(){this.Rt=0,this.bt=Sp(),this.Pt=Re.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=j(),n=j(),r=j();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new bs(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Sp()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class CT{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=Tn(),this.qt=Ep(),this.Kt=new me(K)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Sc(s))if(r===0){const o=new O(s.path);this.jt(n,o,Ie.newNoDocument(o,z.min()))}else he(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Sc(a.target)){const l=new O(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Ie.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=j();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new ul(e,n,this.Kt,this.Ut,r);return this.Ut=Tn(),this.qt=Ep(),this.Kt=new me(K),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new wp,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new me(K),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new wp),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Ep(){return new Se(O.comparator)}function Sp(){return new Se(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),AT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class RT{constructor(e,n){this.databaseId=e,this.gt=n}}function DT(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xT(t,e){return t.gt?e.toBase64():e.toUint8Array()}function ys(t){return he(!!t),z.fromTimestamp(function(e){const n=_n(e);return new Je(n.seconds,n.nanos)}(t))}function PT(t,e){return function(n){return new se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Uv(t){const e=se.fromString(t);return he(zv(e)),e}function su(t,e){const n=Uv(e);if(n.get(1)!==t.databaseId.projectId)throw new P(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(Fv(n))}function kc(t,e){return PT(t.databaseId,e)}function OT(t){const e=Uv(t);return e.length===4?se.emptyPath():Fv(e)}function _p(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Fv(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function LT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(he(u===void 0||typeof u=="string"),Re.fromBase64String(u||"")):(he(u===void 0||u instanceof Uint8Array),Re.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:xv(l.code);return new P(u,l.message||"")}(o);n=new $v(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=su(t,r.document.name),s=ys(r.document.updateTime),o=new It({mapValue:{fields:r.document.fields}}),a=Ie.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Oo(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=su(t,r.document),s=r.readTime?ys(r.readTime):z.min(),o=Ie.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Oo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=su(t,r.document),s=r.removedTargetIds||[];n=new Oo([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new ST(i),o=r.targetId;n=new Mv(o,s)}}return n}function MT(t,e){return{documents:[kc(t,e.path)]}}function $T(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=kc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(cp(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NAN"}};if(up(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(cp(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NOT_NAN"}};if(up(h.value))return{unaryFilter:{field:hr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hr(h.field),op:zT(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:hr(c.field),direction:VT(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||ol(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function UT(t){let e=OT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=Vv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new $r(kr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ol(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new wa(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new wa(f,h)}(n.endAt)),uT(e,i,o,s,a,"F",l,u)}function FT(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Vv(t){return t?t.unaryFilter!==void 0?[BT(t)]:t.fieldFilter!==void 0?[bT(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Vv(e)).reduce((e,n)=>e.concat(n)):F():[]}function VT(t){return NT[t]}function zT(t){return AT[t]}function hr(t){return{fieldPath:t.canonicalString()}}function kr(t){return qe.fromServerFormat(t.fieldPath)}function bT(t){return Ge.create(kr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}function BT(t){switch(t.unaryFilter.op){case"IS_NAN":const e=kr(t.unaryFilter.field);return Ge.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=kr(t.unaryFilter.field);return Ge.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=kr(t.unaryFilter.field);return Ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=kr(t.unaryFilter.field);return Ge.create(i,"!=",{nullValue:"NULL_VALUE"});default:return F()}}function zv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&wT(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ov();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Rv(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),j())}isEqual(e){return this.batchId===e.batchId&&Yr(this.mutations,e.mutations,(n,r)=>gp(n,r))&&Yr(this.baseMutations,e.baseMutations,(n,r)=>gp(n,r))}}/**
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
 */class HT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r,i,s=z.min(),o=z.min(),a=Re.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e){this.re=e}}function qT(t){const e=UT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ea(e,e.limit,"L"):e}/**
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
 */class KT{constructor(){this.Ye=new GT}addToCollectionParentIndex(e,n){return this.Ye.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Sn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Sn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class GT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new me(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new me(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Zr(0)}static vn(){return new Zr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.changes=new li(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class YT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&zi(r.mutation,i,Wn.empty(),Je.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,n,r=j()){const i=zn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ni();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,j()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Tn();const o=bi(),a=bi();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ll)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),zi(c.mutation,u,c.mutation.getFieldMask(),Je.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new YT(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=bi();let i=new Se((o,a)=>o-a),s=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Wn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||j()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=Ov();c.forEach(f=>{if(!s.has(f)){const g=Rv(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(zn());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.getBaseDocument(e,c,h).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,j())).next(c=>({batchId:a,changes:TT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=Ni();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ni();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new Vs(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Ie.newInvalidDocument(u)))});let o=Ni();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&zi(u.mutation,l,Wn.empty(),Je.now()),nd(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):S.resolve(Ie.newInvalidDocument(n))}}/**
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
 */class JT{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:ys(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:qT(r.bundledQuery),readTime:ys(r.readTime)}}(n)),S.resolve()}}/**
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
 */class ZT{constructor(){this.overlays=new Se(O.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zn();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=zn(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=zn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=zn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HT(n,r));let s=this.es.get(n);s===void 0&&(s=j(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.ns=new me(ye.ss),this.rs=new me(ye.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new ye(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new ye(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new O(new se([])),r=new ye(n,e),i=new ye(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new O(new se([])),r=new ye(n,e),i=new ye(n,e+1);let s=j();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ye(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ye{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return O.comparator(e.key,n.key)||K(e._s,n._s)}static os(e,n){return K(e._s,n._s)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new me(ye.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jT(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ye(n,0),i=new ye(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new me(K);return n.forEach(i=>{const s=new ye(i,0),o=new ye(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),S.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new ye(new O(s),0);let a=new me(K);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return S.forEach(n.mutations,i=>{const s=new ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new ye(n,0),i=this.gs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.Es=e,this.docs=new Se(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ie.newInvalidDocument(i))}),S.resolve(r)}getAllFromCollection(e,n,r){let i=Tn();const s=new O(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||q_(W_(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,i){F()}As(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new nI(this)}getSize(e){return S.resolve(this.size)}}class nI extends QT{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.persistence=e,this.Rs=new li(n=>Zh(n),ed),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.bs=0,this.Ps=new sd,this.targetCount=0,this.vs=Zr.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Zr(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Xh(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new rI(this),this.indexManager=new KT,this.remoteDocumentCache=function(r){return new tI(r)}(r=>this.referenceDelegate.xs(r)),this.It=new WT(n),this.Ns=new JT(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ZT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new eI(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new sI(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return S.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class sI extends G_{constructor(e){super(),this.currentSequenceNumber=e}}class od{constructor(e){this.persistence=e,this.Fs=new sd,this.$s=null}static Bs(e){return new od(e)}get Ls(){if(this.$s)return this.$s;throw F()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,r=>{const i=O.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=j(),i=j();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ad(e,n.fromCache,r,i)}}/**
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
 */class oI{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(pp(n))return S.resolve(null);let r=Kt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ea(n,null,"F"),r=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=j(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Ea(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return pp(n)||i.isEqual(z.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(ip()<=q.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_c(n)),this.Bi(e,o,n,H_(i,-1)))})}Fi(e,n){let r=new me(kv(e));return n.forEach((i,s)=>{nd(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return ip()<=q.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",_c(n)),this.Ni.getDocumentsMatchingQuery(e,n,Sn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class aI{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Se(K),this.qi=new li(s=>Zh(s),ed),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XT(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function lI(t,e,n,r){return new aI(t,e,n,r)}async function bv(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=j();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function Bv(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function uI(t,e){const n=W(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Re.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,E,x){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(f,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=Tn(),u=j();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(cI(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(z.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function cI(t,e,n){let r=j(),i=j();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Tn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function hI(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Kn(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Cc(t,e,n){const r=W(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fs(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Tp(t,e,n){const r=W(t);let i=z.min(),s=j();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=W(a),h=c.qi.get(u);return h!==void 0?S.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,Kt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:j())).next(a=>(dI(r,hT(e),a),{documents:a,Hi:s})))}function dI(t,e,n){let r=z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class Ip{constructor(){this.activeTargetIds=Lv()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fI{constructor(){this.Lr=new Ip,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Ip,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pI{qr(e){}shutdown(){}}/**
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
 */class kp{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const mI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);D("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>(D("RestConnection","Received: ",l),l),l=>{throw sp("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ai,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=mI[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new O_;a.listenOnce(D_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ru.NO_ERROR:const u=a.getResponseJson();D("Connection","XHR received:",JSON.stringify(u)),s(u);break;case ru.TIMEOUT:D("Connection",'RPC "'+e+'" timed out'),o(new P(_.DEADLINE_EXCEEDED,"Request time out"));break;case ru.HTTP_ERROR:const c=a.getStatus();if(D("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(h.status);o(new P(f,h.message))}else o(new P(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(_.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{D("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=A_(),o=R_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new P_({})),this.ho(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");D("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const f=new gI({Hr:y=>{h?D("Connection","Not sending because WebChannel is closed:",y):(c||(D("Connection","Opening WebChannel transport."),u.open(),c=!0),D("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,E,x)=>{y.listen(E,p=>{try{x(p)}catch(d){setTimeout(()=>{throw d},0)}})};return g(u,go.EventType.OPEN,()=>{h||D("Connection","WebChannel transport opened.")}),g(u,go.EventType.CLOSE,()=>{h||(h=!0,D("Connection","WebChannel transport closed"),f.io())}),g(u,go.EventType.ERROR,y=>{h||(h=!0,sp("Connection","WebChannel transport errored:",y),f.io(new P(_.UNAVAILABLE,"The operation could not be completed")))}),g(u,go.EventType.MESSAGE,y=>{var E;if(!h){const x=y.data[0];he(!!x);const p=x,d=p.error||((E=p[0])===null||E===void 0?void 0:E.error);if(d){D("Connection","WebChannel received error:",d);const m=d.status;let v=function(C){const N=le[C];if(N!==void 0)return xv(N)}(m),T=d.message;v===void 0&&(v=_.INTERNAL,T="Unknown error status: "+m+" with message "+d.message),h=!0,f.io(new P(v,T)),u.close()}else D("Connection","WebChannel received:",x),f.ro(x)}}),g(o,x_.STAT_EVENT,y=>{y.stat===np.PROXY?D("Connection","Detected buffering proxy"):y.stat===np.NOPROXY&&D("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function ou(){return typeof document<"u"?document:null}/**
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
 */function jv(t){return new RT(t,!0)}class Hv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Hv(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(qt(n.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new P(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wI extends vI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=LT(this.It,e),r=function(i){if(!("targetChange"in i))return z.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?z.min():s.readTime?ys(s.readTime):z.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=_p(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Sc(a)?{documents:MT(i,a)}:{query:$T(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=xT(i,s.resumeToken):s.snapshotVersion.compareTo(z.min())>0&&(o.readTime=DT(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=FT(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=_p(this.It),n.removeTarget=e,this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new P(_.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(_.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(_.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class SI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(qt(n),this.ou=!1):D("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{js(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=W(a);l._u.add(4),await Bs(l),l.gu.set("Unknown"),l._u.delete(4),await cl(l)}(this))})}),this.gu=new SI(r,i)}}async function cl(t){if(js(t))for(const e of t.wu)await e(!0)}async function Bs(t){for(const e of t.wu)await e(!1)}function Wv(t,e){const n=W(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),cd(n)?ud(n):ui(n).ko()&&ld(n,e))}function qv(t,e){const n=W(t),r=ui(n);n.du.delete(e),r.ko()&&Kv(n,e),n.du.size===0&&(r.ko()?r.Fo():js(n)&&n.gu.set("Unknown"))}function ld(t,e){t.yu.Ot(e.targetId),ui(t).zo(e)}function Kv(t,e){t.yu.Ot(e),ui(t).Ho(e)}function ud(t){t.yu=new CT({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),ui(t).start(),t.gu.uu()}function cd(t){return js(t)&&!ui(t).No()&&t.du.size>0}function js(t){return W(t)._u.size===0}function Gv(t){t.yu=void 0}async function TI(t){t.du.forEach((e,n)=>{ld(t,e)})}async function II(t,e){Gv(t),cd(t)?(t.gu.hu(e),ud(t)):t.gu.set("Unknown")}async function kI(t,e,n){if(t.gu.set("Online"),e instanceof $v&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cp(t,r)}else if(e instanceof Oo?t.yu.Gt(e):e instanceof Mv?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(z.min()))try{const r=await Bv(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Re.EMPTY_BYTE_STRING,l.snapshotVersion)),Kv(i,a);const u=new Kn(l.target,a,1,l.sequenceNumber);ld(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await Cp(t,r)}}async function Cp(t,e,n){if(!Fs(e))throw e;t._u.add(1),await Bs(t),t.gu.set("Offline"),n||(n=()=>Bv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await cl(t)})}async function Np(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=js(n);n._u.add(3),await Bs(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await cl(n)}async function CI(t,e){const n=W(t);e?(n._u.delete(2),await cl(n)):e||(n._u.add(2),await Bs(n),n.gu.set("Unknown"))}function ui(t){return t.pu||(t.pu=function(e,n,r){const i=W(e);return i.su(),new wI(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:TI.bind(null,t),Zr:II.bind(null,t),Wo:kI.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),cd(t)?ud(t):t.gu.set("Unknown")):(await t.pu.stop(),Gv(t))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new hd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qv(t,e){if(qt("AsyncQueue",`${e}: ${t}`),Fs(t))return new P(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=Ni(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Ur(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ur)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.Tu=new Se(O.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):F():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ei{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new ei(e,n,Ur.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.Au=void 0,this.listeners=[]}}class AI{constructor(){this.queries=new li(e=>Iv(e),zs),this.onlineState="Unknown",this.Ru=new Set}}async function RI(t,e){const n=W(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new NI),i)try{s.Au=await n.onListen(r)}catch(o){const a=Qv(o,`Initialization of query '${_c(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&dd(n)}async function DI(t,e){const n=W(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function xI(t,e){const n=W(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&dd(n)}function PI(t,e,n){const r=W(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function dd(t){t.Ru.forEach(e=>{e.next()})}class OI{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ei(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.key=e}}class Xv{constructor(e){this.key=e}}class LI{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=j(),this.mutatedKeys=j(),this.Ku=kv(e),this.Gu=new Ur(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new Ap,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),g=nd(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;f&&g?f.data.isEqual(g.data)?y!==E&&(r.track({type:3,doc:g}),x=!0):this.zu(f,g)||(r.track({type:2,doc:g}),x=!0,(l&&this.Ku(g,l)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),x=!0):f&&!g&&(r.track({type:1,doc:f}),x=!0,(l||u)&&(a=!0)),x&&(g?(o=o.add(g),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return g(h)-g(f)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new ei(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new Ap,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=j(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new Xv(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new Yv(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=j();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return ei.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class MI{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $I{constructor(e){this.key=e,this.ec=!1}}class UI{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new li(a=>Iv(a),zs),this.ic=new Map,this.rc=new Set,this.oc=new Se(O.comparator),this.uc=new Map,this.cc=new sd,this.ac={},this.hc=new Map,this.lc=Zr.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function FI(t,e){const n=WI(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await hI(n.localStore,Kt(e));n.isPrimaryClient&&Wv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await VI(n,e,r,a==="current")}return i}async function VI(t,e,n,r){t.dc=(c,h,f)=>async function(g,y,E,x){let p=y.view.ju(E);p.$i&&(p=await Tp(g.localStore,y.query,!1).then(({documents:v})=>y.view.ju(v,p)));const d=x&&x.targetChanges.get(y.targetId),m=y.view.applyChanges(p,g.isPrimaryClient,d);return Dp(g,y.targetId,m.Yu),m.snapshot}(t,c,h,f);const i=await Tp(t.localStore,e,!0),s=new LI(e,i.Hi),o=s.ju(i.documents),a=bs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);Dp(t,n,l.Yu);const u=new MI(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function zI(t,e){const n=W(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!zs(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Cc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qv(n.remoteStore,r.targetId),Nc(n,r.targetId)}).catch(Yh)):(Nc(n,r.targetId),await Cc(n.localStore,r.targetId,!0))}async function Jv(t,e){const n=W(t);try{const r=await uI(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?he(o.ec):i.removedDocuments.size>0&&(he(o.ec),o.ec=!1))}),await e0(n,r,e)}catch(r){await Yh(r)}}function Rp(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=W(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&dd(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bI(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Se(O.comparator);o=o.insert(s,Ie.newNoDocument(s,z.min()));const a=j().add(s),l=new ul(z.min(),new Map,new me(K),o,a);await Jv(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),fd(r)}else await Cc(r.localStore,e,!1).then(()=>Nc(r,e,n)).catch(Yh)}function Nc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||Zv(t,r)})}function Zv(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(qv(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),fd(t))}function Dp(t,e,n){for(const r of n)r instanceof Yv?(t.cc.addReference(r.key,e),BI(t,r)):r instanceof Xv?(D("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||Zv(t,r.key)):F()}function BI(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(D("SyncEngine","New document in limbo: "+n),t.rc.add(r),fd(t))}function fd(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new O(se.fromString(e)),r=t.lc.next();t.uc.set(r,new $I(n)),t.oc=t.oc.insert(n,r),Wv(t.remoteStore,new Kn(Kt(td(n.path)),r,2,Xh.at))}}async function e0(t,e,n){const r=W(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=ad.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=W(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,h=>S.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>S.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Fs(c))throw c;D("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Ui.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(h,y)}}}(r.localStore,s))}async function jI(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await bv(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new P(_.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await e0(n,r.ji)}}function HI(t,e){const n=W(t),r=n.uc.get(e);if(r&&r.ec)return j().add(r.key);{let i=j();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function WI(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bI.bind(null,e),e.nc.Wo=xI.bind(null,e.eventManager),e.nc._c=PI.bind(null,e.eventManager),e}class qI{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=jv(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return lI(this.persistence,new oI,e.initialUser,this.It)}gc(e){return new iI(od.Bs,this.It)}mc(e){return new fI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class KI{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jI.bind(null,this.syncEngine),await CI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new AI}createDatastore(e){const n=jv(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new yI(i));var i;return function(s,o,a,l){return new EI(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Rp(this.syncEngine,a,0),o=kp.C()?new kp:new pI,new _I(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new UI(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=W(e);D("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Bs(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):qt("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=He.UNAUTHENTICATED,this.clientId=B_.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function YI(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function XI(t,e){t.asyncQueue.verifyOperationInProgress();const n=await JI(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Np(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Np(e.remoteStore,s)),t.onlineComponents=e}async function JI(t){return t.offlineComponents||(D("FirestoreClient","Using default OfflineComponentProvider"),await YI(t,new qI)),t.offlineComponents}async function ZI(t){return t.onlineComponents||(D("FirestoreClient","Using default OnlineComponentProvider"),await XI(t,new KI)),t.onlineComponents}async function xp(t){const e=await ZI(t),n=e.eventManager;return n.onListen=FI.bind(null,e.syncEngine),n.onUnlisten=zI.bind(null,e.syncEngine),n}const Pp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t,e,n){if(!n)throw new P(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tk(t,e,n,r){if(e===!0&&r===!0)throw new P(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Op(t){if(O.isDocumentKey(t))throw new P(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function nk(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function au(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nk(t);throw new P(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function rk(t,e){if(e<=0)throw new P(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Lp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,tk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class t0{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new M_;switch(n.type){case"gapi":const r=n.client;return new F_(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Pp.get(e);n&&(D("ComponentProvider","Removing Datastore"),Pp.delete(e),n.terminate())}(this),Promise.resolve()}}/**
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
 */class ur{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ur(this.firestore,e,this._key)}}class In{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new In(this.firestore,e,this._query)}}class Fr extends In{constructor(e,n,r){super(e,n,td(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ur(this.firestore,null,new O(e))}withConverter(e){return new Fr(this.firestore,e,this._path)}}function ik(t,e,...n){if(t=Ht(t),ek("collection","path",e),t instanceof t0){const r=se.fromString(e,...n);return Op(r),new Fr(t,null,r)}{if(!(t instanceof ur||t instanceof Fr))throw new P(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return Op(r),new Fr(t.firestore,null,r)}}function sk(t,e){return t=Ht(t),e=Ht(e),t instanceof In&&e instanceof In&&t.firestore===e.firestore&&zs(t._query,e._query)&&t.converter===e.converter}/**
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
 */class ok{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Hv(this,"async_queue_retry"),this.jc=()=>{const n=ou();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=ou();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=ou();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new Lr;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Fs(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw qt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=hd.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&F()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}function Mp(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Ac extends t0{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ok,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||n0(this),this._firestoreClient.terminate()}}function ak(t,e){const n=typeof t=="object"?t:py(),r=typeof t=="string"?t:e||"(default)";return Nh(n,"firestore").getImmediate({identifier:r})}function lk(t){return t._firestoreClient||n0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function n0(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new X_(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new QI(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 *//**
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
 */class r0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ta{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ta(Re.fromBase64String(e))}catch(n){throw new P(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ta(Re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return K(this._lat,e._lat)||K(this._long,e._long)}}const ck=new RegExp("[~\\*/\\[\\]]");function hk(t,e,n){if(e.search(ck)>=0)throw $p(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new r0(...e.split("."))._internalPath}catch{throw $p(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $p(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(_.INVALID_ARGUMENT,a+t+l)}/**
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
 */class i0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ur(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(pd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dk extends i0{data(){return super.data()}}function pd(t,e){return typeof e=="string"?hk(t,e):e instanceof r0?e._internalPath:e._delegate._internalPath}/**
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
 */class Ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class s0 extends i0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(pd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Lo extends s0{data(e={}){return super.data(e)}}class fk{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ai(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lo(this._firestore,this._userDataWriter,r.key,r,new Ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Lo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ai(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Lo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ai(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:pk(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
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
 */function mk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class o0{}function gk(t,...e){for(const n of e)t=n._apply(t);return t}class yk extends o0{constructor(e,n){super(),this.wa=e,this.ya=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new P(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new P(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new $r(i,s);return function(a,l){if(_v(a)===null){const u=Tv(a);u!==null&&Sk(a,u,l.field)}}(r,o),o}(e._query,this.wa,this.ya);return new In(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Vs(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function vk(t,e="asc"){const n=e,r=pd("orderBy",t);return new yk(r,n)}class wk extends o0{constructor(e,n,r){super(),this.type=e,this.pa=n,this.Ia=r}_apply(e){return new In(e.firestore,e.converter,Ea(e._query,this.pa,this.Ia))}}function Ek(t){return rk("limit",t),new wk("limit",t,"F")}function Sk(t,e,n){if(!n.isEqual(e))throw new P(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class _k{convertValue(e,n="none"){switch(ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){const r={};return sl(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new uk(ue(e.latitude),ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ev(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const n=_n(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);he(zv(r));const i=new ps(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||qt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}class a0 extends _k{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ta(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ur(this.firestore,null,n)}}function Up(t,...e){var n,r,i;t=Ht(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Mp(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Mp(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof ur)u=au(t.firestore,Ac),c=td(t._key.path),l={next:h=>{e[o]&&e[o](Tk(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=au(t,In);u=au(h.firestore,Ac),c=h._query;const f=new a0(u);l={next:g=>{e[o]&&e[o](new fk(u,f,h,g))},error:e[o+1],complete:e[o+2]},mk(t._query)}return function(h,f,g,y){const E=new GI(y),x=new OI(f,E,g);return h.asyncQueue.enqueueAndForget(async()=>RI(await xp(h),x)),()=>{E.Rc(),h.asyncQueue.enqueueAndForget(async()=>DI(await xp(h),x))}}(lk(u),c,a,l)}function Tk(t,e,n){const r=n.docs.get(e._key),i=new a0(t);return new s0(t,i,e._key,r,new Ai(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ai=n})(As),Gr(new er("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ac(new $_(n.getProvider("auth-internal")),new z_(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ps(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),vn(rp,"3.5.0",t),vn(rp,"3.5.0","esm2017")})();function md(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function l0(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ik=l0,u0=new Cs("auth","Firebase",l0());/**
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
 */const Fp=new kh("@firebase/auth");function Mo(t,...e){Fp.logLevel<=q.ERROR&&Fp.error(`Auth (${As}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw gd(t,...e)}function Nt(t,...e){return gd(t,...e)}function c0(t,e,n){const r=Object.assign(Object.assign({},Ik()),{[e]:n});return new Cs("auth","Firebase",r).create(e,{appName:t.name})}function kk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(t,"argument-error"),c0(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return u0.create(t,...e)}function M(t,e,...n){if(!t)throw gd(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mo(e),new Error(e)}function Gt(t,e){t||Ut(e)}/**
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
 */const Vp=new Map;function Ft(t){Gt(t instanceof Function,"Expected a class definition");let e=Vp.get(t);return e?(Gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vp.set(t,e),e)}/**
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
 */function Ck(t,e){const n=Nh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ua(s,e!=null?e:{}))return i;Dt(i,"already-initialized")}return n.initialize({options:e})}function Nk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ak(){return zp()==="http:"||zp()==="https:"}function zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Rk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ak()||dE()||"connection"in navigator)?navigator.onLine:!0}function Dk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gt(n>e,"Short delay should be less than long delay!"),this.isMobile=hE()||fE()}get(){return Rk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yd(t,e){Gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class h0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Pk=new Hs(3e4,6e4);function Ok(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function hl(t,e,n,r,i={}){return d0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ns(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),h0.fetch()(f0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function d0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xk),e);try{const i=new Mk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw c0(t,c,u);Dt(t,c)}}catch(i){if(i instanceof Yt)throw i;Dt(t,"network-request-failed")}}async function Lk(t,e,n,r,i={}){const s=await hl(t,e,n,r,i);return"mfaPendingCredential"in s&&Dt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function f0(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yd(t.config,i):`${t.config.apiScheme}://${i}`}class Mk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),Pk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function $k(t,e){return hl(t,"POST","/v1/accounts:delete",e)}async function Uk(t,e){return hl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fk(t,e=!1){const n=Ht(t),r=await n.getIdToken(e),i=vd(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bi(lu(i.auth_time)),issuedAtTime:Bi(lu(i.iat)),expirationTime:Bi(lu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lu(t){return Number(t)*1e3}function vd(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Mo("JWT malformed, contained fewer than 3 sections"),null;try{const s=uE(r);return s?JSON.parse(s):(Mo("Failed to decode base64 JWT payload"),null)}catch(s){return Mo("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function Vk(t){const e=vd(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&zk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function zk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class p0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ia(t){var e;const n=t.auth,r=await t.getIdToken(),i=await vs(t,Uk(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Hk(s.providerUserInfo):[],a=jk(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new p0(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function Bk(t){const e=Ht(t);await Ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Hk(t){return t.map(e=>{var{providerId:n}=e,r=md(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Wk(t,e){const n=await d0(t,{},async()=>{const r=Ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=f0(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",h0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ws{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Wk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ws;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ws,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
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
 */function Jt(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=md(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new p0(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vs(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fk(this,e)}reload(){return Bk(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vs(this,$k(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:v,isAnonymous:T,providerData:C,stsTokenManager:N}=n;M(m&&N,e,"internal-error");const R=ws.fromJSON(this.name,N);M(typeof m=="string",e,"internal-error"),Jt(h,e.name),Jt(f,e.name),M(typeof v=="boolean",e,"internal-error"),M(typeof T=="boolean",e,"internal-error"),Jt(g,e.name),Jt(y,e.name),Jt(E,e.name),Jt(x,e.name),Jt(p,e.name),Jt(d,e.name);const Y=new Gn({uid:m,auth:e,email:f,emailVerified:v,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:E,stsTokenManager:R,createdAt:p,lastLoginAt:d});return C&&Array.isArray(C)&&(Y.providerData=C.map(V=>Object.assign({},V))),x&&(Y._redirectEventId=x),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new ws;i.updateFromServerResponse(n);const s=new Gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ia(s),s}}/**
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
 */class m0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}m0.type="NONE";const bp=m0;/**
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
 */function $o(t,e,n){return`firebase:${t}:${e}:${n}`}class Vr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$o(this.userKey,i.apiKey,s),this.fullPersistenceKey=$o("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vr(Ft(bp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ft(bp);const o=$o(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Gn._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Vr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Vr(s,e,r))}}/**
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
 */function Bp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(E0(e))return"Blackberry";if(S0(e))return"Webos";if(wd(e))return"Safari";if((e.includes("chrome/")||y0(e))&&!e.includes("edge/"))return"Chrome";if(w0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function g0(t=Fe()){return/firefox\//i.test(t)}function wd(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function y0(t=Fe()){return/crios\//i.test(t)}function v0(t=Fe()){return/iemobile/i.test(t)}function w0(t=Fe()){return/android/i.test(t)}function E0(t=Fe()){return/blackberry/i.test(t)}function S0(t=Fe()){return/webos/i.test(t)}function dl(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function qk(t=Fe()){var e;return dl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kk(){return pE()&&document.documentMode===10}function _0(t=Fe()){return dl(t)||w0(t)||S0(t)||E0(t)||/windows phone/i.test(t)||v0(t)}function Gk(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function T0(t,e=[]){let n;switch(t){case"Browser":n=Bp(Fe());break;case"Worker":n=`${Bp(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${r}`}/**
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
 */class Qk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class Yk{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jp(this),this.idTokenSubscription=new jp(this),this.beforeStateQueue=new Qk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Ia(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ht(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=T0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ed(t){return Ht(t)}class jp{constructor(e){this.auth=e,this.observer=null,this.addObserver=SE(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class I0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}/**
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
 */async function zr(t,e){return Lk(t,"POST","/v1/accounts:signInWithIdp",Ok(t,e))}/**
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
 */const Xk="http://localhost";class sr extends I0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=md(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zr(e,n)}buildRequest(){const e={requestUri:Xk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ns(n)}return e}}/**
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
 */class Sd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ws extends Sd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rn extends Ws{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends Ws{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class sn extends Ws{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
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
 */class on extends Ws{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return on.credential(n,r)}catch{return null}}}on.TWITTER_SIGN_IN_METHOD="twitter.com";on.PROVIDER_ID="twitter.com";/**
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
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gn._fromIdTokenResponse(e,r,i),o=Hp(r);return new ti({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hp(r);return new ti({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ka extends Yt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ka.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ka(e,n,r,i)}}function k0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ka._fromErrorAndOperation(t,s,e,r):s})}async function Jk(t,e,n=!1){const r=await vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ti._forOperation(t,"link",r)}/**
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
 */async function Zk(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await vs(t,k0(i,s,e,t),n);M(o.idToken,i,"internal-error");const a=vd(o.idToken);M(a,i,"internal-error");const{sub:l}=a;return M(t.uid===l,i,"user-mismatch"),ti._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Dt(i,"user-mismatch"),o}}/**
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
 */async function eC(t,e,n=!1){const r="signIn",i=await k0(t,r,e),s=await ti._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function tC(t,e,n,r){return Ht(t).onAuthStateChanged(e,n,r)}const Ca="__sak";/**
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
 */class C0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ca,"1"),this.storage.removeItem(Ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function nC(){const t=Fe();return wd(t)||dl(t)}const rC=1e3,iC=10;class N0 extends C0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nC()&&Gk(),this.fallbackToPolling=_0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Kk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,iC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},rC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}N0.type="LOCAL";const sC=N0;/**
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
 */class A0 extends C0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}A0.type="SESSION";const R0=A0;/**
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
 */function oC(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class fl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new fl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await oC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fl.receivers=[];/**
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
 */function _d(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class aC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=_d("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function At(){return window}function lC(t){At().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(){return typeof At().WorkerGlobalScope<"u"&&typeof At().importScripts=="function"}async function uC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hC(){return D0()?self:null}/**
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
 */const x0="firebaseLocalStorageDb",dC=1,Na="firebaseLocalStorage",P0="fbase_key";class qs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function pl(t,e){return t.transaction([Na],e?"readwrite":"readonly").objectStore(Na)}function fC(){const t=indexedDB.deleteDatabase(x0);return new qs(t).toPromise()}function Dc(){const t=indexedDB.open(x0,dC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Na,{keyPath:P0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Na)?e(r):(r.close(),await fC(),e(await Dc()))})})}async function Wp(t,e,n){const r=pl(t,!0).put({[P0]:e,value:n});return new qs(r).toPromise()}async function pC(t,e){const n=pl(t,!1).get(e),r=await new qs(n).toPromise();return r===void 0?null:r.value}function qp(t,e){const n=pl(t,!0).delete(e);return new qs(n).toPromise()}const mC=800,gC=3;class O0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>gC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return D0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fl._getInstance(hC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uC(),!this.activeServiceWorker)return;this.sender=new aC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dc();return await Wp(e,Ca,"1"),await qp(e,Ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>pC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pl(i,!1).getAll();return new qs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O0.type="LOCAL";const yC=O0;/**
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
 */function vC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vC().appendChild(r)})}function EC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Hs(3e4,6e4);/**
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
 */function L0(t,e){return e?Ft(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Td extends I0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SC(t){return eC(t.auth,new Td(t),t.bypassAuthState)}function _C(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Zk(n,new Td(t),t.bypassAuthState)}async function TC(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Jk(n,new Td(t),t.bypassAuthState)}/**
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
 */class M0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SC;case"linkViaPopup":case"linkViaRedirect":return TC;case"reauthViaPopup":case"reauthViaRedirect":return _C;default:Dt(this.auth,"internal-error")}}resolve(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IC=new Hs(2e3,1e4);async function kC(t,e,n){const r=Ed(t);kk(t,e,Sd);const i=L0(r,n);return new bn(r,"signInViaPopup",e,i).executeNotNull()}class bn extends M0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const e=_d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,IC.get())};e()}}bn.currentPopupAction=null;/**
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
 */const CC="pendingRedirect",Uo=new Map;class NC extends M0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Uo.get(this.auth._key());if(!e){try{const r=await AC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Uo.set(this.auth._key(),e)}return this.bypassAuthState||Uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function AC(t,e){const n=xC(e),r=DC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RC(t,e){Uo.set(t._key(),e)}function DC(t){return Ft(t._redirectPersistence)}function xC(t){return $o(CC,t.config.apiKey,t.name)}async function PC(t,e,n=!1){const r=Ed(t),i=L0(r,e),o=await new NC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const OC=10*60*1e3;class LC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!$0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kp(e))}saveEventToCache(e){this.cachedEventUids.add(Kp(e)),this.lastProcessedEventTime=Date.now()}}function Kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function $0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $0(t);default:return!1}}/**
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
 */async function $C(t,e={}){return hl(t,"GET","/v1/projects",e)}/**
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
 */const UC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FC=/^https?/;async function VC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $C(t);for(const n of e)try{if(zC(n))return}catch{}Dt(t,"unauthorized-domain")}function zC(t){const e=Rc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FC.test(n))return!1;if(UC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=new Hs(3e4,6e4);function Gp(){const t=At().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BC(t){return new Promise((e,n)=>{var r,i,s;function o(){Gp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gp(),n(Nt(t,"network-request-failed"))},timeout:bC.get()})}if(!((i=(r=At().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=At().gapi)===null||s===void 0)&&s.load)o();else{const a=EC("iframefcb");return At()[a]=()=>{gapi.load?o():n(Nt(t,"network-request-failed"))},wC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Fo=null,e})}let Fo=null;function jC(t){return Fo=Fo||BC(t),Fo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=new Hs(5e3,15e3),WC="__/auth/iframe",qC="emulator/auth/iframe",KC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QC(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yd(e,qC):`https://${t.config.authDomain}/${WC}`,r={apiKey:e.apiKey,appName:t.name,v:As},i=GC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ns(r).slice(1)}`}async function YC(t){const e=await jC(t),n=At().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:QC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Nt(t,"network-request-failed"),a=At().setTimeout(()=>{s(o)},HC.get());function l(){At().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JC=500,ZC=600,eN="_blank",tN="http://localhost";class Qp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nN(t,e,n,r=JC,i=ZC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},XC),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Fe().toLowerCase();n&&(a=y0(u)?eN:n),g0(u)&&(e=e||tN,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(qk(u)&&a!=="_self")return rN(e||"",a),new Qp(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new Qp(h)}function rN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const iN="__/auth/handler",sN="emulator/auth/handler";function Yp(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:As,eventId:i};if(e instanceof Sd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ws){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${oN(t)}?${Ns(a).slice(1)}`}function oN({config:t}){return t.emulator?yd(t,sN):`https://${t.authDomain}/${iN}`}/**
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
 */const uu="webStorageSupport";class aN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=R0,this._completeRedirectFn=PC,this._overrideRedirectResult=RC}async _openPopup(e,n,r,i){var s;Gt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Yp(e,n,r,Rc(),i);return nN(e,o,_d())}async _openRedirect(e,n,r,i){return await this._originValidation(e),lC(Yp(e,n,r,Rc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YC(e),r=new LC(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uu,{type:uu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uu];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return _0()||wd()||dl()}}const lN=aN;var Xp="@firebase/auth",Jp="0.20.7";/**
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
 */class uN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function hN(t){Gr(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{M(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:T0(t)},c=new Yk(a,l,u);return Nk(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new er("auth-internal",e=>{const n=Ed(e.getProvider("auth").getImmediate());return(r=>new uN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Xp,Jp,cN(t)),vn(Xp,Jp,"esm2017")}/**
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
 */function dN(t=py()){const e=Nh(t,"auth");return e.isInitialized()?e.getImmediate():Ck(t,{popupRedirectResolver:lN,persistence:[yC,sC,R0]})}hN("Browser");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function fN(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(h){o(h)}}function l(c){try{u(r.throw(c))}catch(h){o(h)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function pN(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Cr=function(){return Cr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Cr.apply(this,arguments)},U0=function(t){return{loading:t==null,value:t}},mN=function(){return function(t,e){switch(e.type){case"error":return Cr(Cr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return U0(e.defaultValue);case"value":return Cr(Cr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},gN=function(t){var e=t?t():void 0,n=$e.exports.useReducer(mN(),U0(e)),r=n[0],i=n[1],s=function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},o=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return $e.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},yN=function(t,e){var n=gN(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;$e.exports.useEffect(function(){var u=tC(t,function(c){return fN(void 0,void 0,void 0,function(){var h;return pN(this,function(f){switch(f.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];f.label=1;case 1:return f.trys.push([1,3,,4]),[4,e.onUserChanged(c)];case 2:return f.sent(),[3,4];case 3:return h=f.sent(),s(h),[3,4];case 4:return o(c),[2]}})})},s);return function(){u()}},[t]);var l=[a,i,r];return $e.exports.useMemo(function(){return l},l)};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Nr=function(){return Nr=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Nr.apply(this,arguments)},F0=function(t){return{loading:t==null,value:t}},vN=function(){return function(t,e){switch(e.type){case"error":return Nr(Nr({},t),{error:e.error,loading:!1,value:void 0});case"reset":return F0(e.defaultValue);case"value":return Nr(Nr({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},wN=function(t){var e=t?t():void 0,n=$e.exports.useReducer(vN(),F0(e)),r=n[0],i=n[1],s=function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},o=function(l){i({type:"error",error:l})},a=function(l){i({type:"value",value:l})};return $e.exports.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},EN=function(t,e,n){var r=$e.exports.useRef(t);return $e.exports.useEffect(function(){e(t,r.current)||(r.current=t,n&&n())}),r},SN=function(t,e){var n=!t&&!e,r=!!t&&!!e&&sk(t,e);return n||r},_N=function(t,e){return EN(t,SN,e)},TN=function(t,e){var n=wN(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,l=n.value,u=_N(t,s);$e.exports.useEffect(function(){if(!u.current){a(void 0);return}var h=e!=null&&e.snapshotListenOptions?Up(u.current,e.snapshotListenOptions,a,o):Up(u.current,a,o);return function(){h()}},[u.current]);var c=[l,i,r];return $e.exports.useMemo(function(){return c},c)},IN=function(t,e){var n=e==null?void 0:e.snapshotOptions,r=TN(t,e),i=r[0],s=r[1],o=r[2],a=kN(i,n),l=[a,s,o,i];return $e.exports.useMemo(function(){return l},l)},kN=function(t,e){return $e.exports.useMemo(function(){return t==null?void 0:t.docs.map(function(n){return n.data(e)})},[t,e])},Id={exports:{}},ml={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CN=$e.exports,NN=Symbol.for("react.element"),AN=Symbol.for("react.fragment"),RN=Object.prototype.hasOwnProperty,DN=CN.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xN={key:!0,ref:!0,__self:!0,__source:!0};function V0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)RN.call(e,r)&&!xN.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:NN,type:t,key:s,ref:o,props:i,_owner:DN.current}}ml.Fragment=AN;ml.jsx=V0;ml.jsxs=V0;(function(t){t.exports=ml})(Id);const ke=Id.exports.jsx,Aa=Id.exports.jsxs,z0=ES({apiKey:"AIzaSyClXHyrSNWP9II-GB3fDostHKF3p_w9xiQ",authDomain:"hyprcht.firebaseapp.com",projectId:"hyprcht",storageBucket:"hyprcht.appspot.com",messagingSenderId:"549139552060",appId:"1:549139552060:web:03fc56b1949cd622177039"}),Es=dN(z0),PN=ak(z0);function ON(){const[t]=yN(Es);return Aa("div",{className:"App",children:[Aa("div",{className:"header",children:[ke("span",{className:"header-text",children:"hyperchat"}),ke("div",{className:"sign-out",children:ke(MN,{})})]}),ke("div",{className:"container",children:t?ke($N,{}):ke(LN,{})})]})}function LN(){return ke("div",{children:ke("button",{className:"sign-in",onClick:()=>{const e=new Ot;kC(Es,e)},children:"Sign in"})})}function MN(){return Es.currentUser&&ke("div",{children:ke("button",{onClick:()=>Es.signOut(),children:"Sign out"})})}function $N(){const t=ik(PN,"messages"),e=gk(t,vk("createdAt"),Ek(25)),[n]=IN(e,{idField:"id"});return console.log(n),Aa("div",{children:[ke("div",{children:"Welcome to the chatroom"}),ke("div",{className:"message-grid",children:n&&n.map(r=>ke(UN,{message:r},r.id))})]})}function UN(t){const{text:e,uid:n,photoURL:r}=t.message,i=n===Es.currentUser.uid?"sent":"received";return Aa("div",{className:`message ${i}`,children:[ke("img",{src:r}),ke("p",{children:e})]})}cu.createRoot(document.getElementById("root")).render(ke(iw.StrictMode,{children:ke(ON,{})}));
