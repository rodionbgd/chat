!function(){var t={757:function(t,e,r){t.exports=r(666)},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n=p;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?y:l,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var p="suspendedStart",l="suspendedYield",h="executing",y="completed",d={};function v(){}function g(){}function m(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,O=b&&b(b(_([])));O&&O!==r&&n.call(O,i)&&(w=O);var E=m.prototype=v.prototype=Object.create(w);function j(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,p=s.value;return p&&"object"==typeof p&&n.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function _(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return g.prototype=m,u(E,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},j(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),u(E,c,"Generator"),u(E,i,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:_(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var n={};!function(){"use strict";function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){t(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(o,t))}))}return r}function i(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}r.d(n,{E:function(){return T}});var a="function"==typeof Symbol&&Symbol.observable||"@@observable",c=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+c(),REPLACE:"@@redux/REPLACE"+c(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+c()}};function s(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function f(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function p(t){return function(e){var r=e.dispatch,n=e.getState;return function(e){return function(o){return"function"==typeof o?o(r,n,t):e(o)}}}}var l=p();l.withExtraArgument=p;const h=l;function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?y(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function g(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))}}var m=r(757),w=r.n(m);function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?b(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E="https://otus-js-chat-4ed79-default-rtdb.firebaseio.com",j="messages.json";function x(){return L.apply(this,arguments)}function L(){return(L=g(w().mark((function t(){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(E,"/").concat(j),{headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return Object.values(t).map((function(t){return O(O({},t),{},{date:new Date(t.date)})}))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function P(){return(P=g(w().mark((function t(e){return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(E,"/").concat(j),{method:"POST",body:JSON.stringify(O(O({},e),{},{date:new Date})),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.sendMessage=function(t){return P.apply(this,arguments)},window.getMessagesList=x,window.observeWithXHR=function(t){var e=new XMLHttpRequest,r=0;e.addEventListener("progress",(function(){var n=e.response.substr(r);r=e.response.length;var o=n.match(/event: (.+)/)[1],i=JSON.parse(n.match(/data: (.+)/)[1]);"put"===o&&t(i.data)})),e.open("POST","".concat(E,"/").concat(j),!0),e.setRequestHeader("Accept","text/event-stream"),e.send()},window.observeWithEventSource=function(t){new EventSource("".concat(E,"/").concat(j)).addEventListener("put",(function(e){return t(JSON.parse(e.data).data)}))};var S=function(t){return{type:"GET_MESSAGES",payload:t}},T={messagesList:[],name:localStorage.getItem("name")||"",avatars:{},lastMessage:{}},_=function t(e,r,n){var o;if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(i(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw new Error(i(1));return n(t)(e,r)}if("function"!=typeof e)throw new Error(i(2));var c=e,f=r,p=[],l=p,h=!1;function y(){l===p&&(l=p.slice())}function d(){if(h)throw new Error(i(3));return f}function v(t){if("function"!=typeof t)throw new Error(i(4));if(h)throw new Error(i(5));var e=!0;return y(),l.push(t),function(){if(e){if(h)throw new Error(i(6));e=!1,y();var r=l.indexOf(t);l.splice(r,1),p=null}}}function g(t){if(!s(t))throw new Error(i(7));if(void 0===t.type)throw new Error(i(8));if(h)throw new Error(i(9));try{h=!0,f=c(f,t)}finally{h=!1}for(var e=p=l,r=0;r<e.length;r++)(0,e[r])();return t}function m(t){if("function"!=typeof t)throw new Error(i(10));c=t,g({type:u.REPLACE})}function w(){var t,e=v;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new Error(i(11));function r(){t.next&&t.next(d())}return r(),{unsubscribe:e(r)}}})[a]=function(){return this},t}return g({type:u.INIT}),(o={dispatch:g,subscribe:v,getState:d,replaceReducer:m})[a]=w,o}((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0,r=new Set,n={},o=9,i=0;switch(e.type){case"GET_MESSAGES":return e.payload.forEach((function(t){"string"==typeof t.name&&r.add(t.name)})),r.forEach((function(t){n[t]="".concat(i%o+1),i+=1})),d(d({},t),{},{messagesList:e.payload,avatars:n});case"SET_NAME":return d(d({},t),{},{name:e.payload});default:return t}}),T,function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return function(){var r=t.apply(void 0,arguments),n=function(){throw new Error(i(15))},a={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},c=e.map((function(t){return t(a)}));return n=f.apply(void 0,c)(r.dispatch),o(o({},r),{},{dispatch:n})}}}(h));window.addEventListener("load",(function(){var t,e=document.getElementById("welcome-user"),r=document.querySelector(".chat"),n=document.getElementById("chat"),o=document.getElementById("chat-history"),i=document.getElementById("name-btn"),a=document.getElementById("name-input"),c=_.getState().name;c&&(a.value=c),_.dispatch(function(){var t=g(w().mark((function t(e){var r;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:r=t.sent,e(S(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),i.addEventListener("click",(function(){a&&(_.dispatch({type:"SET_NAME",payload:a.value}),t(),localStorage.setItem("name",a.value),e.innerHTML="<span>Встречаем, ".concat(_.getState().name,'</span>\n                                  <img src="./img/welcome.gif" alt=""> \n                                 '),e.classList.add("remove-welcome"),r.classList.remove("blur"))})),t=_.subscribe((function(){n.innerHTML="",function(t,e){var r="",n=new Intl.DateTimeFormat("ru-RU",{weekday:"short",day:"numeric",month:"numeric",hour:"numeric",minute:"numeric",year:"2-digit"}),o=_.getState().messagesList,i=_.getState().name,a=_.getState().avatars;o.slice(-30).forEach((function(e){if(e&&e.name&&e.message&&e.date){var o=n.format(new Date(e.date)),c="",u="other-message",s=["<span>".concat(o.replace(/,/g,""),"</span>"),'<span class="user-name">'.concat(e.name,"</span>")];i===e.name?(c="text-right",u="my-message",s.push('<img src="./img/user.png" alt="avatar">')):(s.push('<img src="./img/'.concat(a[e.name],'.png" alt="avatar">')),s=s.reverse()),r='<li class="clearfix">',r+='<div class="message-data '.concat(c,'">'),r+="<div>",s.forEach((function(t){r+=t})),r+="</div>",r+='<div>\n                                <span class="message '.concat(u,'">').concat(e.message,"</span>\n                            </div>"),r+="</li>",t.innerHTML+=r}})),setTimeout((function(){e.scrollTo(0,e.scrollHeight)}),0)}(n,o)}))}))}()}();