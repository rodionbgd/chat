!function(){var t={757:function(t,e,r){t.exports=r(666)},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new A(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?y:p,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",y="completed",d={};function v(){}function g(){}function m(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(T([])));E&&E!==r&&n.call(E,a)&&(w=E);var O=m.prototype=v.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function x(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,x(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function T(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:_}}function _(){return{value:e,done:!0}}return g.prototype=m,u(O,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},j(S.prototype),u(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(O),u(O,c,"Generator"),u(O,a,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var n={};!function(){"use strict";function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){t(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(o,t))}))}return r}function a(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}r.d(n,{E3:function(){return D}});var i="function"==typeof Symbol&&Symbol.observable||"@@observable",c=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+c(),REPLACE:"@@redux/REPLACE"+c(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+c()}};function s(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function f(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function l(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(o){return"function"==typeof o?o(r,n,t):e(o)}}}}var p=l();p.withExtraArgument=l;const h=p;function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function d(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?v(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function w(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){m(a,n,o,i,c,"next",t)}function c(t){m(a,n,o,i,c,"throw",t)}i(void 0)}))}}var b=r(757),E=r.n(b);function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?O(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S="https://chat-eee97-default-rtdb.firebaseio.com",x="messages.json";function L(){return P.apply(this,arguments)}function P(){return(P=w(E().mark((function t(){return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(S,"/").concat(x),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return Object.values(t).map((function(t){return j(j({},t),{},{date:new Date(t.date)})}))})).catch((function(){})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(t){return T.apply(this,arguments)}function T(){return(T=w(E().mark((function t(e){var r,n;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new AbortController,n=setTimeout((function(){return r.abort()}),1e4),t.abrupt("return",fetch("".concat(S,"/").concat(x),{signal:r.signal,method:"POST",body:JSON.stringify(j(j({},e),{},{date:new Date})),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){t.json(),clearTimeout(n)})));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){new EventSource("".concat(S,"/").concat(x)).addEventListener("put",(function(e){return t(JSON.parse(e.data).data)}))}window.sendMessage=A,window.getMessagesList=L,window.observeWithXHR=function(t){var e=new XMLHttpRequest,r=0;e.addEventListener("progress",(function(){var n=e.response.substr(r);r=e.response.length;var o=n.match(/event: (.+)/)[1],a=JSON.parse(n.match(/data: (.+)/)[1]);"put"===o&&t(a.data)})),e.open("POST","".concat(S,"/").concat(x),!0),e.setRequestHeader("Accept","text/event-stream"),e.send()},window.observeWithEventSource=_;var N=function(t){return{type:"GET_MESSAGES",payload:t}},I=function(t){return{type:"SEND_MESSAGE",payload:t}},D={messagesList:[],name:localStorage.getItem("name")||"",avatars:{},lastMessage:{}},M=function t(e,r,n){var o;if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(a(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw new Error(a(1));return n(t)(e,r)}if("function"!=typeof e)throw new Error(a(2));var c=e,f=r,l=[],p=l,h=!1;function y(){p===l&&(p=l.slice())}function d(){if(h)throw new Error(a(3));return f}function v(t){if("function"!=typeof t)throw new Error(a(4));if(h)throw new Error(a(5));var e=!0;return y(),p.push(t),function(){if(e){if(h)throw new Error(a(6));e=!1,y();var r=p.indexOf(t);p.splice(r,1),l=null}}}function g(t){if(!s(t))throw new Error(a(7));if(void 0===t.type)throw new Error(a(8));if(h)throw new Error(a(9));try{h=!0,f=c(f,t)}finally{h=!1}for(var e=l=p,r=0;r<e.length;r++)(0,e[r])();return t}function m(t){if("function"!=typeof t)throw new Error(a(10));c=t,g({type:u.REPLACE})}function w(){var t,e=v;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(a(11));function r(){t.next&&t.next(d())}return r(),{unsubscribe:e(r)}}})[i]=function(){return this},t}return g({type:u.INIT}),(o={dispatch:g,subscribe:v,getState:d,replaceReducer:m})[i]=w,o}((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0,r=new Set,n={},o=9,a=0;switch(e.type){case"GET_MESSAGES":return e.payload?(e.payload.forEach((function(t){"string"==typeof t.name&&r.add(t.name)})),r.forEach((function(t){n[t]="".concat(a%o+1),a+=1})),g(g({},t),{},{messagesList:e.payload,avatars:n})):t;case"SEND_MESSAGE":return g(g({},t),{},{messagesList:[].concat(d(t.messagesList),[e.payload]),lastMessage:e.payload});case"ADD_LAST_MESSAGE":return n=g({},t.avatars),Object.hasOwnProperty.call(n,e.payload.name)||(n[e.payload.name]="".concat(Object.keys(t.avatars).length%o+1)),g(g({},t),{},{lastMessage:e.payload,avatars:n});case"SET_NAME":return g(g({},t),{},{name:e.payload});default:return t}}),D,function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(a(15))},i={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},c=e.map((function(t){return t(i)}));return n=f.apply(void 0,c)(r.dispatch),o(o({},r),{},{dispatch:n})}}}(h)),k=new Intl.DateTimeFormat("ru-RU",{weekday:"short",day:"numeric",month:"numeric",hour:"numeric",minute:"numeric",year:"2-digit"});function G(t){var e=t.replace(/[:]-?\)+/g,"😀");return(e=(e=(e=e.replace(/[:]-?\(+/g,"😒")).replace(/[:]-?[pP]/g,"😋")).replace(/[:]-?[dD]/g,"😁")).replace(/[:]-?[xX8]/g,"😆")}function R(t,e,r){if(!t||!t.date||!t.name)return"";var n="",o=k.format(new Date(t.date)),a="",i="other-message",c=["<span>".concat(o.replace(/,/g,""),"</span>"),'<span class="user-name">'.concat(t.name,"</span>")];return e===t.name?(a="text-right",i="my-message",c.push('<img src="./img/user.png" alt="avatar">')):(c.push('<img src="./img/'.concat(r[t.name],'.png" alt="avatar">')),c=c.reverse()),n='<li class="clearfix">',n+='<div class="message-data '.concat(a,'">'),n+="<div>",c.forEach((function(t){n+=t})),n+="</div>",n+='<div><span class="message '.concat(i,'">').concat(t.message,"</span></div>"),G(n+="</li>")}function B(t){var e=document.getElementById("chat"),r=document.getElementById("chat-history"),n=M.getState();if(t&&t.date&&t.name&&JSON.stringify(n.lastMessage)!==JSON.stringify(t)){M.dispatch(function(t){return{type:"ADD_LAST_MESSAGE",payload:t}}(t));var o=R(t,(n=M.getState()).name,n.avatars);o&&(e.insertAdjacentHTML("beforeend",o),r.scrollTo(0,r.scrollHeight))}}window.addEventListener("load",(function(){var t=document.getElementById("welcome-user"),e=document.querySelector(".chat"),r=document.getElementById("chat"),n=document.getElementById("chat-history"),o=document.getElementById("name-btn"),a=document.getElementById("name-input"),i=document.getElementById("send-message"),c=document.getElementById("message-input"),u=M.getState().name;u&&(a.value=u),M.dispatch(function(){var t=w(E().mark((function t(e){var r;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L();case 2:r=t.sent,e(N(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var s=M.subscribe((function(){r.innerHTML=function(t,e){var r=M.getState(),n=r.messagesList,o=r.name,a=r.avatars,i="";return n.slice(-30).forEach((function(t){var e=R(t,o,a);e&&(i+=e)})),e.scrollTo(0,e.scrollHeight),i}(0,n)}));_(B),o.addEventListener("click",(function(){a.value&&(M.dispatch({type:"SET_NAME",payload:a.value}),s(),localStorage.setItem("name",a.value),t.innerHTML="<span>Встречаем, ".concat(M.getState().name,'</span>\n                                  <img src="./img/welcome.gif" alt=""> \n                                 '),t.classList.add("remove-welcome"),e.classList.remove("blur"))})),i.addEventListener("click",(function(){if(c.value){var t={name:M.getState().name,message:c.value};M.dispatch(function(t){return function(){var e=w(E().mark((function e(r){return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:r(I(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(t)),c.value=""}})),c.addEventListener("input",(function(){c.value=G(c.value)}))}))}()}();