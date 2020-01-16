/*!
 * Quill Editor v1.3.7-cling.4
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
!function webpackUniversalModuleDefinition(t,e){
"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Quill=e():t.Quill=e()
}(window,(function(){return function(t){var e={};function __webpack_require__(n){
if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}}
;return t[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}
return __webpack_require__.m=t,__webpack_require__.c=e,__webpack_require__.d=function(t,e,n){
__webpack_require__.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})
},__webpack_require__.r=function(t){
"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{
value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})
},__webpack_require__.t=function(t,e){if(1&e&&(t=__webpack_require__(t)),8&e)return t
;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null)
;if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),
2&e&&"string"!=typeof t)for(var r in t)__webpack_require__.d(n,r,function(e){return t[e]
}.bind(null,r));return n},__webpack_require__.n=function(t){
var e=t&&t.__esModule?function getDefault(){return t.default}:function getModuleExports(){return t}
;return __webpack_require__.d(e,"a",e),e},__webpack_require__.o=function(t,e){
return Object.prototype.hasOwnProperty.call(t,e)
},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=21)}([function(t,e,n){
"use strict";Object.defineProperty(e,"__esModule",{value:!0})
;const r=n(8),i=n(9),s=n(10),o=n(23),l=n(24),a=n(25),u=n(26),c=n(27),h=n(7),d=n(14),f=n(15),p=n(13),m=n(3)
;let g={Scope:m.Scope,create:m.create,find:m.find,query:m.query,register:m.register,
Container:r.default,Format:i.default,Leaf:s.default,Embed:u.default,Scroll:o.default,
Block:a.default,Inline:l.default,Text:c.default,Attributor:{Attribute:h.default,Class:d.default,
Style:f.default,Store:p.default}};e.default=g},function(t,e,n){
var r=n(29),i=n(5),s=n(2),o=n(6),l=String.fromCharCode(0),a=function(t){
Array.isArray(t)?this.ops=t:null!=t&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]}
;a.prototype.insert=function(t,e){var n={};return 0===t.length?this:(n.insert=t,
null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(n.attributes=e),this.push(n))},
a.prototype.delete=function(t){return t<=0?this:this.push({delete:t})
},a.prototype.retain=function(t,e){if(t<=0)return this;var n={retain:t}
;return null!=e&&"object"==typeof e&&Object.keys(e).length>0&&(n.attributes=e),this.push(n)},
a.prototype.push=function(t){var e=this.ops.length,n=this.ops[e-1];if(t=s(!0,{},t),
"object"==typeof n){if("number"==typeof t.delete&&"number"==typeof n.delete)return this.ops[e-1]={
delete:n.delete+t.delete},this;if("number"==typeof n.delete&&null!=t.insert&&(e-=1,
"object"!=typeof(n=this.ops[e-1])))return this.ops.unshift(t),this;if(i(t.attributes,n.attributes)){
if("string"==typeof t.insert&&"string"==typeof n.insert)return this.ops[e-1]={
insert:n.insert+t.insert},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),
this;if("number"==typeof t.retain&&"number"==typeof n.retain)return this.ops[e-1]={
retain:n.retain+t.retain},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),
this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this
},a.prototype.chop=function(){var t=this.ops[this.ops.length-1]
;return t&&t.retain&&!t.attributes&&this.ops.pop(),this},a.prototype.filter=function(t){
return this.ops.filter(t)},a.prototype.forEach=function(t){this.ops.forEach(t)},
a.prototype.map=function(t){return this.ops.map(t)},a.prototype.partition=function(t){var e=[],n=[]
;return this.forEach((function(r){(t(r)?e:n).push(r)})),[e,n]},a.prototype.reduce=function(t,e){
return this.ops.reduce(t,e)},a.prototype.changeLength=function(){return this.reduce((function(t,e){
return e.insert?t+o.length(e):e.delete?t-e.delete:t}),0)},a.prototype.length=function(){
return this.reduce((function(t,e){return t+o.length(e)}),0)},a.prototype.slice=function(t,e){t=t||0,
"number"!=typeof e&&(e=1/0);for(var n=[],r=o.iterator(this.ops),i=0;i<e&&r.hasNext();){var s
;i<t?s=r.next(t-i):(s=r.next(e-i),n.push(s)),i+=o.length(s)}return new a(n)
},a.prototype.compose=function(t){var e=o.iterator(this.ops),n=o.iterator(t.ops),r=[],s=n.peek()
;if(null!=s&&"number"==typeof s.retain&&null==s.attributes){
for(var l=s.retain;"insert"===e.peekType()&&e.peekLength()<=l;)l-=e.peekLength(),r.push(e.next())
;s.retain-l>0&&n.next(s.retain-l)}
for(var u=new a(r);e.hasNext()||n.hasNext();)if("insert"===n.peekType())u.push(n.next());else if("delete"===e.peekType())u.push(e.next());else{
var c=Math.min(e.peekLength(),n.peekLength()),h=e.next(c),d=n.next(c);if("number"==typeof d.retain){
var f={};"number"==typeof h.retain?f.retain=c:f.insert=h.insert
;var p=o.attributes.compose(h.attributes,d.attributes,"number"==typeof h.retain)
;if(p&&(f.attributes=p),u.push(f),!n.hasNext()&&i(u.ops[u.ops.length-1],f)){var m=new a(e.rest())
;return u.concat(m).chop()}}else"number"==typeof d.delete&&"number"==typeof h.retain&&u.push(d)}
return u.chop()},a.prototype.concat=function(t){var e=new a(this.ops.slice())
;return t.ops.length>0&&(e.push(t.ops[0]),e.ops=e.ops.concat(t.ops.slice(1))),e},
a.prototype.diff=function(t,e){if(this.ops===t.ops)return new a;var n=[this,t].map((function(e){
return e.map((function(n){if(null!=n.insert)return"string"==typeof n.insert?n.insert:l
;throw new Error("diff() called "+(e===t?"on":"with")+" non-document")})).join("")
})),s=new a,u=r(n[0],n[1],e),c=o.iterator(this.ops),h=o.iterator(t.ops)
;return u.forEach((function(t){for(var e=t[1].length;e>0;){var n=0;switch(t[0]){case r.INSERT:
n=Math.min(h.peekLength(),e),s.push(h.next(n));break;case r.DELETE:n=Math.min(e,c.peekLength()),
c.next(n),s.delete(n);break;case r.EQUAL:n=Math.min(c.peekLength(),h.peekLength(),e)
;var l=c.next(n),a=h.next(n)
;i(l.insert,a.insert)?s.retain(n,o.attributes.diff(l.attributes,a.attributes)):s.push(a).delete(n)}
e-=n}})),s.chop()},a.prototype.eachLine=function(t,e){e=e||"\n"
;for(var n=o.iterator(this.ops),r=new a,i=0;n.hasNext();){if("insert"!==n.peekType())return
;var s=n.peek(),l=o.length(s)-n.peekLength(),u="string"==typeof s.insert?s.insert.indexOf(e,l)-l:-1
;if(u<0)r.push(n.next());else if(u>0)r.push(n.next(u));else{
if(!1===t(r,n.next(1).attributes||{},i))return;i+=1,r=new a}}r.length()>0&&t(r,{},i)},
a.prototype.transform=function(t,e){if(e=!!e,"number"==typeof t)return this.transformPosition(t,e)
;for(var n=o.iterator(this.ops),r=o.iterator(t.ops),i=new a;n.hasNext()||r.hasNext();)if("insert"!==n.peekType()||!e&&"insert"===r.peekType())if("insert"===r.peekType())i.push(r.next());else{
var s=Math.min(n.peekLength(),r.peekLength()),l=n.next(s),u=r.next(s);if(l.delete)continue
;u.delete?i.push(u):i.retain(s,o.attributes.transform(l.attributes,u.attributes,e))
}else i.retain(o.length(n.next()));return i.chop()},a.prototype.transformPosition=function(t,e){
e=!!e;for(var n=o.iterator(this.ops),r=0;n.hasNext()&&r<=t;){var i=n.peekLength(),s=n.peekType()
;n.next(),"delete"!==s?("insert"===s&&(r<t||!e)&&(t+=i),r+=i):t-=Math.min(i,t-r)}return t},
t.exports=a},function(t,e){"use strict"
;var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=function isArray(t){
return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===r.call(t)
},l=function isPlainObject(t){if(!t||"[object Object]"!==r.call(t))return!1
;var e,i=n.call(t,"constructor"),s=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf")
;if(t.constructor&&!i&&!s)return!1;for(e in t);return void 0===e||n.call(t,e)
},a=function setProperty(t,e){i&&"__proto__"===e.name?i(t,e.name,{enumerable:!0,configurable:!0,
value:e.newValue,writable:!0}):t[e.name]=e.newValue},u=function getProperty(t,e){
if("__proto__"===e){if(!n.call(t,e))return;if(s)return s(t,e).value}return t[e]}
;t.exports=function extend(){var t,e,n,r,i,s,c=arguments[0],h=1,d=arguments.length,f=!1
;for("boolean"==typeof c&&(f=c,
c=arguments[1]||{},h=2),(null==c||"object"!=typeof c&&"function"!=typeof c)&&(c={});h<d;++h)if(null!=(t=arguments[h]))for(e in t)n=u(c,e),
c!==(r=u(t,e))&&(f&&r&&(l(r)||(i=o(r)))?(i?(i=!1,s=n&&o(n)?n:[]):s=n&&l(n)?n:{},a(c,{name:e,
newValue:extend(f,s,r)})):void 0!==r&&a(c,{name:e,newValue:r}));return c}},function(t,e,n){
"use strict";Object.defineProperty(e,"__esModule",{value:!0});class ParchmentError extends Error{
constructor(t){super(t="[Parchment] "+t),this.message=t,this.name=this.constructor.name}}
e.ParchmentError=ParchmentError;let r={},i={},s={},o={};var l;function query(t,e=l.ANY){let n
;if("string"==typeof t)n=o[t]||r[t];else if(t instanceof Text||t.nodeType===Node.TEXT_NODE)n=o.text;else if("number"==typeof t)t&l.LEVEL&l.BLOCK?n=o.block:t&l.LEVEL&l.INLINE&&(n=o.inline);else if(t instanceof HTMLElement){
let e=(t.getAttribute("class")||"").split(/\s+/);for(let t in e)if(n=i[e[t]])break;n=n||s[t.tagName]
}return null==n?null:e&l.LEVEL&n.scope&&e&l.TYPE&n.scope?n:null}e.DATA_KEY="__blot",function(t){
t[t.TYPE=3]="TYPE",t[t.LEVEL=12]="LEVEL",t[t.ATTRIBUTE=13]="ATTRIBUTE",t[t.BLOT=14]="BLOT",
t[t.INLINE=7]="INLINE",
t[t.BLOCK=11]="BLOCK",t[t.BLOCK_BLOT=10]="BLOCK_BLOT",t[t.INLINE_BLOT=6]="INLINE_BLOT",
t[t.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",t[t.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",
t[t.ANY=15]="ANY"}(l=e.Scope||(e.Scope={})),e.create=function create(t,e){let n=query(t)
;if(null==n)throw new ParchmentError(`Unable to create ${t} blot`)
;let r=n,i=t instanceof Node||t.nodeType===Node.TEXT_NODE?t:r.create(e);return new r(i,e)},
e.find=function find(t,n=!1){
return null==t?null:null!=t[e.DATA_KEY]?t[e.DATA_KEY].blot:n?find(t.parentNode,n):null},
e.query=query,e.register=function register(...t){if(t.length>1)return t.map((function(t){
return register(t)}));let e=t[0]
;if("string"!=typeof e.blotName&&"string"!=typeof e.attrName)throw new ParchmentError("Invalid definition")
;if("abstract"===e.blotName)throw new ParchmentError("Cannot register abstract class")
;if(o[e.blotName||e.attrName]=e,
"string"==typeof e.keyName)r[e.keyName]=e;else if(null!=e.className&&(i[e.className]=e),
null!=e.tagName){Array.isArray(e.tagName)?e.tagName=e.tagName.map((function(t){
return t.toUpperCase()
})):e.tagName=e.tagName.toUpperCase(),(Array.isArray(e.tagName)?e.tagName:[e.tagName]).forEach((function(t){
null!=s[t]&&null!=e.className||(s[t]=e)}))}return e}},function(t,e){var n=function(){"use strict"
;function _instanceof(t,e){return null!=e&&t instanceof e}var t,e,n;try{t=Map}catch(r){
t=function(){}}try{e=Set}catch(r){e=function(){}}try{n=Promise}catch(r){n=function(){}}
function clone(r,i,s,o,l){"object"==typeof i&&(s=i.depth,o=i.prototype,l=i.includeNonEnumerable,
i=i.circular);var a=[],u=[],c="undefined"!=typeof Buffer;return void 0===i&&(i=!0),
void 0===s&&(s=1/0),function _clone(r,s){if(null===r)return null;if(0===s)return r;var h,d
;if("object"!=typeof r)return r
;if(_instanceof(r,t))h=new t;else if(_instanceof(r,e))h=new e;else if(_instanceof(r,n))h=new n((function(t,e){
r.then((function(e){t(_clone(e,s-1))}),(function(t){e(_clone(t,s-1))}))
}));else if(clone.__isArray(r))h=[];else if(clone.__isRegExp(r))h=new RegExp(r.source,__getRegExpFlags(r)),
r.lastIndex&&(h.lastIndex=r.lastIndex);else if(clone.__isDate(r))h=new Date(r.getTime());else{
if(c&&Buffer.isBuffer(r))return h=Buffer.allocUnsafe?Buffer.allocUnsafe(r.length):new Buffer(r.length),
r.copy(h),h;_instanceof(r,Error)?h=Object.create(r):void 0===o?(d=Object.getPrototypeOf(r),
h=Object.create(d)):(h=Object.create(o),d=o)}if(i){var f=a.indexOf(r);if(-1!=f)return u[f]
;a.push(r),u.push(h)}for(var p in _instanceof(r,t)&&r.forEach((function(t,e){
var n=_clone(e,s-1),r=_clone(t,s-1);h.set(n,r)})),_instanceof(r,e)&&r.forEach((function(t){
var e=_clone(t,s-1);h.add(e)})),r){var m;d&&(m=Object.getOwnPropertyDescriptor(d,p)),
m&&null==m.set||(h[p]=_clone(r[p],s-1))}if(Object.getOwnPropertySymbols){
var g=Object.getOwnPropertySymbols(r);for(p=0;p<g.length;p++){var b=g[p]
;(!(_=Object.getOwnPropertyDescriptor(r,b))||_.enumerable||l)&&(h[b]=_clone(r[b],s-1),
_.enumerable||Object.defineProperty(h,b,{enumerable:!1}))}}if(l){var y=Object.getOwnPropertyNames(r)
;for(p=0;p<y.length;p++){var _,v=y[p]
;(_=Object.getOwnPropertyDescriptor(r,v))&&_.enumerable||(h[v]=_clone(r[v],s-1),
Object.defineProperty(h,v,{enumerable:!1}))}}return h}(r,s)}function __objToStr(t){
return Object.prototype.toString.call(t)}function __getRegExpFlags(t){var e=""
;return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}
return clone.clonePrototype=function clonePrototype(t){if(null===t)return null;var e=function(){}
;return e.prototype=t,new e},clone.__objToStr=__objToStr,clone.__isDate=function __isDate(t){
return"object"==typeof t&&"[object Date]"===__objToStr(t)},clone.__isArray=function __isArray(t){
return"object"==typeof t&&"[object Array]"===__objToStr(t)},clone.__isRegExp=function __isRegExp(t){
return"object"==typeof t&&"[object RegExp]"===__objToStr(t)
},clone.__getRegExpFlags=__getRegExpFlags,clone}();"object"==typeof t&&t.exports&&(t.exports=n)
},function(t,e,n){var r=n(16),i=n(31),s=n(32),o=n(33),l=n(37),a=n(39),u=Date.prototype.getTime
;function deepEqual(t,e,n){var c=n||{}
;return!(c.strict?!s(t,e):t!==e)||(!t||!e||"object"!=typeof t&&"object"!=typeof e?c.strict?s(t,e):t==e:function objEquiv(t,e,n){
var s,c;if(typeof t!=typeof e)return!1;if(isUndefinedOrNull(t)||isUndefinedOrNull(e))return!1
;if(t.prototype!==e.prototype)return!1;if(i(t)!==i(e))return!1;var h=o(t),d=o(e);if(h!==d)return!1
;if(h||d)return t.source===e.source&&l(t)===l(e);if(a(t)&&a(e))return u.call(t)===u.call(e)
;var f=isBuffer(t),p=isBuffer(e);if(f!==p)return!1;if(f||p){if(t.length!==e.length)return!1
;for(s=0;s<t.length;s++)if(t[s]!==e[s])return!1;return!0}if(typeof t!=typeof e)return!1;try{
var m=r(t),g=r(e)}catch(b){return!1}if(m.length!==g.length)return!1;for(m.sort(),g.sort(),
s=m.length-1;s>=0;s--)if(m[s]!=g[s])return!1;for(s=m.length-1;s>=0;s--)if(c=m[s],
!deepEqual(t[c],e[c],n))return!1;return!0}(t,e,c))}function isUndefinedOrNull(t){return null==t}
function isBuffer(t){
return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))
}t.exports=deepEqual},function(t,e,n){var r=n(5),i=n(2),s={attributes:{compose:function(t,e,n){
"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var r=i(!0,{},e)
;for(var s in n||(r=Object.keys(r).reduce((function(t,e){return null!=r[e]&&(t[e]=r[e]),t}),{})),
t)void 0!==t[s]&&void 0===e[s]&&(r[s]=t[s]);return Object.keys(r).length>0?r:void 0},
diff:function(t,e){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={})
;var n=Object.keys(t).concat(Object.keys(e)).reduce((function(n,i){
return r(t[i],e[i])||(n[i]=void 0===e[i]?null:e[i]),n}),{});return Object.keys(n).length>0?n:void 0
},transform:function(t,e,n){if("object"!=typeof t)return e;if("object"==typeof e){if(!n)return e
;var r=Object.keys(e).reduce((function(n,r){return void 0===t[r]&&(n[r]=e[r]),n}),{})
;return Object.keys(r).length>0?r:void 0}}},iterator:function(t){return new Iterator(t)},
length:function(t){
return"number"==typeof t.delete?t.delete:"number"==typeof t.retain?t.retain:"string"==typeof t.insert?t.insert.length:1
}};function Iterator(t){this.ops=t,this.index=0,this.offset=0}Iterator.prototype.hasNext=function(){
return this.peekLength()<1/0},Iterator.prototype.next=function(t){t||(t=1/0)
;var e=this.ops[this.index];if(e){var n=this.offset,r=s.length(e);if(t>=r-n?(t=r-n,this.index+=1,
this.offset=0):this.offset+=t,"number"==typeof e.delete)return{delete:t};var i={}
;return e.attributes&&(i.attributes=e.attributes),
"number"==typeof e.retain?i.retain=t:"string"==typeof e.insert?i.insert=e.insert.substr(n,t):i.insert=e.insert,
i}return{retain:1/0}},Iterator.prototype.peek=function(){return this.ops[this.index]},
Iterator.prototype.peekLength=function(){
return this.ops[this.index]?s.length(this.ops[this.index])-this.offset:1/0
},Iterator.prototype.peekType=function(){
return this.ops[this.index]?"number"==typeof this.ops[this.index].delete?"delete":"number"==typeof this.ops[this.index].retain?"retain":"insert":"retain"
},Iterator.prototype.rest=function(){if(this.hasNext()){
if(0===this.offset)return this.ops.slice(this.index)
;var t=this.offset,e=this.index,n=this.next(),r=this.ops.slice(this.index);return this.offset=t,
this.index=e,[n].concat(r)}return[]},t.exports=s},function(t,e,n){"use strict"
;Object.defineProperty(e,"__esModule",{value:!0});const r=n(3);e.default=class Attributor{
static keys(t){return[].map.call(t.attributes,(function(t){return t.name}))}constructor(t,e,n={}){
this.attrName=t,this.keyName=e;let i=r.Scope.TYPE&r.Scope.ATTRIBUTE
;null!=n.scope?this.scope=n.scope&r.Scope.LEVEL|i:this.scope=r.Scope.ATTRIBUTE,
null!=n.whitelist&&(this.whitelist=n.whitelist)}add(t,e){
return!!this.canAdd(t,e)&&(t.setAttribute(this.keyName,e),!0)}canAdd(t,e){
return null!=r.query(t,r.Scope.BLOT&(this.scope|r.Scope.TYPE))&&(null==this.whitelist||("string"==typeof e?this.whitelist.indexOf(e.replace(/["']/g,""))>-1:this.whitelist.indexOf(e)>-1))
}remove(t){t.removeAttribute(this.keyName)}value(t){let e=t.getAttribute(this.keyName)
;return this.canAdd(t,e)&&e?e:""}}},function(t,e,n){"use strict"
;Object.defineProperty(e,"__esModule",{value:!0});const r=n(22),i=n(12),s=n(3)
;class ContainerBlot extends i.default{constructor(t){super(t),this.build()}appendChild(t){
this.insertBefore(t)}attach(){super.attach(),this.children.forEach(t=>{t.attach()})}build(){
this.children=new r.default,[].slice.call(this.domNode.childNodes).reverse().forEach(t=>{try{
let e=makeBlot(t);this.insertBefore(e,this.children.head||void 0)}catch(e){
if(e instanceof s.ParchmentError)return;throw e}})}deleteAt(t,e){
if(0===t&&e===this.length())return this.remove();this.children.forEachAt(t,e,(function(t,e,n){
t.deleteAt(e,n)}))}descendant(t,e){let[n,r]=this.children.find(e)
;return null==t.blotName&&t(n)||null!=t.blotName&&n instanceof t?[n,r]:n instanceof ContainerBlot?n.descendant(t,r):[null,-1]
}descendants(t,e=0,n=Number.MAX_VALUE){let r=[],i=n
;return this.children.forEachAt(e,n,(function(e,n,s){
(null==t.blotName&&t(e)||null!=t.blotName&&e instanceof t)&&r.push(e),
e instanceof ContainerBlot&&(r=r.concat(e.descendants(t,n,i))),i-=s})),r}detach(){
this.children.forEach((function(t){t.detach()})),super.detach()}formatAt(t,e,n,r){
this.children.forEachAt(t,e,(function(t,e,i){t.formatAt(e,i,n,r)}))}insertAt(t,e,n){
let[r,i]=this.children.find(t);if(r)r.insertAt(i,e,n);else{
let t=null==n?s.create("text",e):s.create(e,n);this.appendChild(t)}}insertBefore(t,e){
if(null!=this.statics.allowedChildren&&!this.statics.allowedChildren.some((function(e){
return t instanceof e
})))throw new s.ParchmentError(`Cannot insert ${t.statics.blotName} into ${this.statics.blotName}`)
;t.insertInto(this,e)}length(){return this.children.reduce((function(t,e){return t+e.length()}),0)}
moveChildren(t,e){this.children.forEach((function(n){t.insertBefore(n,e)}))}optimize(t){
if(super.optimize(t),0===this.children.length)if(null!=this.statics.defaultChild){
let e=s.create(this.statics.defaultChild);this.appendChild(e),e.optimize(t)}else this.remove()}
path(t,e=!1){let[n,r]=this.children.find(t,e),i=[[this,t]]
;return n instanceof ContainerBlot?i.concat(n.path(r,e)):(null!=n&&i.push([n,r]),i)}removeChild(t){
this.children.remove(t)}replace(t){t instanceof ContainerBlot&&t.moveChildren(this),super.replace(t)
}split(t,e=!1){if(!e){if(0===t)return this;if(t===this.length())return this.next}let n=this.clone()
;return this.parent.insertBefore(n,this.next),
this.children.forEachAt(t,this.length(),(function(t,r,i){t=t.split(r,e),n.appendChild(t)})),n}
unwrap(){this.moveChildren(this.parent,this.next),this.remove()}update(t,e){let n=[],r=[]
;t.forEach(t=>{t.target===this.domNode&&"childList"===t.type&&(n.push.apply(n,t.addedNodes),
r.push.apply(r,t.removedNodes))}),r.forEach(t=>{
if(null!=t.parentNode&&"IFRAME"!==t.tagName&&document.body.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)return
;let e=s.find(t)
;null!=e&&(null!=e.domNode.parentNode&&e.domNode.parentNode!==this.domNode||e.detach())}),
n.filter(t=>t.parentNode==this.domNode).sort((function(t,e){
return t===e?0:t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1})).forEach(t=>{
let e=null;null!=t.nextSibling&&(e=s.find(t.nextSibling));let n=makeBlot(t)
;n.next==e&&null!=n.next||(null!=n.parent&&n.parent.removeChild(this),
this.insertBefore(n,e||void 0))})}}function makeBlot(t){let e=s.find(t);if(null==e)try{e=s.create(t)
}catch(n){e=s.create(s.Scope.INLINE),[].slice.call(t.childNodes).forEach((function(t){
e.domNode.appendChild(t)})),t.parentNode&&t.parentNode.replaceChild(e.domNode,t),e.attach()}return e
}e.default=ContainerBlot},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{
value:!0});const r=n(7),i=n(13),s=n(8),o=n(3);class FormatBlot extends s.default{static formats(t){
return"string"==typeof this.tagName||(Array.isArray(this.tagName)?t.tagName.toLowerCase():void 0)}
constructor(t){super(t),this.attributes=new i.default(this.domNode)}format(t,e){let n=o.query(t)
;n instanceof r.default?this.attributes.attribute(n,e):e&&(null==n||t===this.statics.blotName&&this.formats()[t]===e||this.replaceWith(t,e))
}formats(){let t=this.attributes.values(),e=this.statics.formats(this.domNode)
;return null!=e&&(t[this.statics.blotName]=e),t}replaceWith(t,e){let n=super.replaceWith(t,e)
;return this.attributes.copy(n),n}update(t,e){
super.update(t,e),t.some(t=>t.target===this.domNode&&"attributes"===t.type)&&this.attributes.build()
}wrap(t,e){let n=super.wrap(t,e)
;return n instanceof FormatBlot&&n.statics.scope===this.statics.scope&&this.attributes.move(n),n}}
e.default=FormatBlot},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0})
;const r=n(12),i=n(3);class LeafBlot extends r.default{static value(t){return!0}index(t,e){
return this.domNode===t||this.domNode.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY?Math.min(e,1):-1
}position(t,e){let n=[].indexOf.call(this.parent.domNode.childNodes,this.domNode)
;return t>0&&(n+=1),[this.parent.domNode,n]}value(){return{
[this.statics.blotName]:this.statics.value(this.domNode)||!0}}}LeafBlot.scope=i.Scope.INLINE_BLOT,
e.default=LeafBlot},function(t,e,n){"use strict"
;var r=n(16),i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),s=Object.prototype.toString,o=Array.prototype.concat,l=Object.defineProperty,a=l&&function(){
var t={};try{for(var e in l(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(n){
return!1}}(),u=function(t,e,n,r){var i
;e in t&&("function"!=typeof(i=r)||"[object Function]"!==s.call(i)||!r())||(a?l(t,e,{
configurable:!0,enumerable:!1,value:n,writable:!0}):t[e]=n)},c=function(t,e){
var n=arguments.length>2?arguments[2]:{},s=r(e);i&&(s=o.call(s,Object.getOwnPropertySymbols(e)))
;for(var l=0;l<s.length;l+=1)u(t,s[l],e[s[l]],n[s[l]])};c.supportsDescriptors=!!a,t.exports=c
},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(3)
;class ShadowBlot{constructor(t){this.domNode=t,this.domNode[r.DATA_KEY]={blot:this}}get statics(){
return this.constructor}static create(t){
if(null==this.tagName)throw new r.ParchmentError("Blot definition missing tagName");let e
;return Array.isArray(this.tagName)?("string"==typeof t&&(t=t.toUpperCase(),
parseInt(t).toString()===t&&(t=parseInt(t))),
e="number"==typeof t?document.createElement(this.tagName[t-1]):this.tagName.indexOf(t)>-1?document.createElement(t):document.createElement(this.tagName[0])):e=document.createElement(this.tagName),
this.className&&e.classList.add(this.className),e}attach(){
null!=this.parent&&(this.scroll=this.parent.scroll)}clone(){let t=this.domNode.cloneNode(!1)
;return r.create(t)}detach(){
null!=this.parent&&this.parent.removeChild(this),delete this.domNode[r.DATA_KEY]}deleteAt(t,e){
this.isolate(t,e).remove()}formatAt(t,e,n,i){let s=this.isolate(t,e)
;if(null!=r.query(n,r.Scope.BLOT)&&i)s.wrap(n,i);else if(null!=r.query(n,r.Scope.ATTRIBUTE)){
let t=r.create(this.statics.scope);s.wrap(t),t.format(n,i)}}insertAt(t,e,n){
let i=null==n?r.create("text",e):r.create(e,n),s=this.split(t);this.parent.insertBefore(i,s)}
insertInto(t,e=null){null!=this.parent&&this.parent.children.remove(this);let n=null
;t.children.insertBefore(this,e),
null!=e&&(n=e.domNode),this.domNode.parentNode==t.domNode&&this.domNode.nextSibling==n||t.domNode.insertBefore(this.domNode,n),
this.parent=t,this.attach()}isolate(t,e){let n=this.split(t);return n.split(e),n}length(){return 1}
offset(t=this.parent){
return null==this.parent||this==t?0:this.parent.children.offset(this)+this.parent.offset(t)}
optimize(t){null!=this.domNode[r.DATA_KEY]&&delete this.domNode[r.DATA_KEY].mutations}remove(){
null!=this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode),this.detach()}
replace(t){null!=t.parent&&(t.parent.insertBefore(this,t.next),t.remove())}replaceWith(t,e){
let n="string"==typeof t?r.create(t,e):t;return n.replace(this),n}split(t,e){
return 0===t?this:this.next}update(t,e){}wrap(t,e){let n="string"==typeof t?r.create(t,e):t
;return null!=this.parent&&this.parent.insertBefore(n,this.next),n.appendChild(this),n}}
ShadowBlot.blotName="abstract",e.default=ShadowBlot},function(t,e,n){"use strict"
;Object.defineProperty(e,"__esModule",{value:!0});const r=n(7),i=n(14),s=n(15),o=n(3)
;e.default=class AttributorStore{constructor(t){this.attributes={},this.domNode=t,this.build()}
attribute(t,e){
e?t.add(this.domNode,e)&&(null!=t.value(this.domNode)?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),
delete this.attributes[t.attrName])}build(){this.attributes={}
;let t=r.default.keys(this.domNode),e=i.default.keys(this.domNode),n=s.default.keys(this.domNode)
;t.concat(e).concat(n).forEach(t=>{let e=o.query(t,o.Scope.ATTRIBUTE)
;e instanceof r.default&&(this.attributes[e.attrName]=e)})}copy(t){
Object.keys(this.attributes).forEach(e=>{let n=this.attributes[e].value(this.domNode);t.format(e,n)
})}move(t){this.copy(t),Object.keys(this.attributes).forEach(t=>{
this.attributes[t].remove(this.domNode)}),this.attributes={}}values(){
return Object.keys(this.attributes).reduce((t,e)=>(t[e]=this.attributes[e].value(this.domNode),
t),{})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(7)
;function match(t,e){return(t.getAttribute("class")||"").split(/\s+/).filter((function(t){
return 0===t.indexOf(`${e}-`)}))}e.default=class ClassAttributor extends r.default{static keys(t){
return(t.getAttribute("class")||"").split(/\s+/).map((function(t){
return t.split("-").slice(0,-1).join("-")}))}add(t,e){return!!this.canAdd(t,e)&&(this.remove(t),
t.classList.add(`${this.keyName}-${e}`),!0)}remove(t){match(t,this.keyName).forEach((function(e){
t.classList.remove(e)})),0===t.classList.length&&t.removeAttribute("class")}value(t){
let e=(match(t,this.keyName)[0]||"").slice(this.keyName.length+1);return this.canAdd(t,e)?e:""}}
},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(7)
;function camelize(t){let e=t.split("-"),n=e.slice(1).map((function(t){
return t[0].toUpperCase()+t.slice(1)})).join("");return e[0]+n}
e.default=class StyleAttributor extends r.default{static keys(t){
return(t.getAttribute("style")||"").split(";").map((function(t){return t.split(":")[0].trim()}))}
add(t,e){return!!this.canAdd(t,e)&&(t.style[camelize(this.keyName)]=e,!0)}remove(t){
t.style[camelize(this.keyName)]="",t.getAttribute("style")||t.removeAttribute("style")}value(t){
let e=t.style[camelize(this.keyName)];return this.canAdd(t,e)?e:""}}},function(t,e,n){"use strict"
;var r=Array.prototype.slice,i=n(17),s=Object.keys,o=s?function keys(t){return s(t)
}:n(30),l=Object.keys;o.shim=function shimObjectKeys(){Object.keys?function(){
var t=Object.keys(arguments);return t&&t.length===arguments.length
}(1,2)||(Object.keys=function keys(t){return i(t)?l(r.call(t)):l(t)}):Object.keys=o
;return Object.keys||o},t.exports=o},function(t,e,n){"use strict";var r=Object.prototype.toString
;t.exports=function isArguments(t){var e=r.call(t),n="[object Arguments]"===e
;return n||(n="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===r.call(t.callee)),
n}},function(t,e,n){"use strict";var r=Object,i=TypeError;t.exports=function flags(){
if(null!=this&&this!==r(this))throw new i("RegExp.prototype.flags getter called on non-object")
;var t="";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),
this.dotAll&&(t+="s"),this.unicode&&(t+="u"),this.sticky&&(t+="y"),t}},function(t,e,n){"use strict"
;var r=n(18),i=n(11).supportsDescriptors,s=Object.getOwnPropertyDescriptor,o=TypeError
;t.exports=function getPolyfill(){
if(!i)throw new o("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors")
;if("gim"===/a/gim.flags){var t=s(RegExp.prototype,"flags")
;if(t&&"function"==typeof t.get&&"boolean"==typeof/a/.dotAll)return t.get}return r}},function(t,e){
"use strict";var n=Object.prototype.hasOwnProperty,r="~";function Events(){}function EE(t,e,n){
this.fn=t,this.context=e,this.once=n||!1}function EventEmitter(){this._events=new Events,
this._eventsCount=0}
Object.create&&(Events.prototype=Object.create(null),(new Events).__proto__||(r=!1)),
EventEmitter.prototype.eventNames=function eventNames(){var t,e,i=[]
;if(0===this._eventsCount)return i;for(e in t=this._events)n.call(t,e)&&i.push(r?e.slice(1):e)
;return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(t)):i},
EventEmitter.prototype.listeners=function listeners(t,e){var n=r?r+t:t,i=this._events[n]
;if(e)return!!i;if(!i)return[];if(i.fn)return[i.fn]
;for(var s=0,o=i.length,l=new Array(o);s<o;s++)l[s]=i[s].fn;return l
},EventEmitter.prototype.emit=function emit(t,e,n,i,s,o){var l=r?r+t:t;if(!this._events[l])return!1
;var a,u,c=this._events[l],h=arguments.length;if(c.fn){
switch(c.once&&this.removeListener(t,c.fn,void 0,!0),h){case 1:return c.fn.call(c.context),!0
;case 2:return c.fn.call(c.context,e),!0;case 3:return c.fn.call(c.context,e,n),!0;case 4:
return c.fn.call(c.context,e,n,i),!0;case 5:return c.fn.call(c.context,e,n,i,s),!0;case 6:
return c.fn.call(c.context,e,n,i,s,o),!0}for(u=1,a=new Array(h-1);u<h;u++)a[u-1]=arguments[u]
;c.fn.apply(c.context,a)}else{var d,f=c.length
;for(u=0;u<f;u++)switch(c[u].once&&this.removeListener(t,c[u].fn,void 0,!0),h){case 1:
c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,e);break;case 3:
c[u].fn.call(c[u].context,e,n);break;case 4:c[u].fn.call(c[u].context,e,n,i);break;default:
if(!a)for(d=1,a=new Array(h-1);d<h;d++)a[d-1]=arguments[d];c[u].fn.apply(c[u].context,a)}}return!0},
EventEmitter.prototype.on=function on(t,e,n){var i=new EE(e,n||this),s=r?r+t:t
;return this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],i]:this._events[s].push(i):(this._events[s]=i,
this._eventsCount++),this},EventEmitter.prototype.once=function once(t,e,n){
var i=new EE(e,n||this,!0),s=r?r+t:t
;return this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],i]:this._events[s].push(i):(this._events[s]=i,
this._eventsCount++),this},EventEmitter.prototype.removeListener=function removeListener(t,e,n,i){
var s=r?r+t:t;if(!this._events[s])return this
;if(!e)return 0==--this._eventsCount?this._events=new Events:delete this._events[s],this
;var o=this._events[s]
;if(o.fn)o.fn!==e||i&&!o.once||n&&o.context!==n||(0==--this._eventsCount?this._events=new Events:delete this._events[s]);else{
for(var l=0,a=[],u=o.length;l<u;l++)(o[l].fn!==e||i&&!o[l].once||n&&o[l].context!==n)&&a.push(o[l])
;a.length?this._events[s]=1===a.length?a[0]:a:0==--this._eventsCount?this._events=new Events:delete this._events[s]
}return this},EventEmitter.prototype.removeAllListeners=function removeAllListeners(t){var e
;return t?(e=r?r+t:t,
this._events[e]&&(0==--this._eventsCount?this._events=new Events:delete this._events[e])):(this._events=new Events,
this._eventsCount=0),this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,
EventEmitter.prototype.addListener=EventEmitter.prototype.on,
EventEmitter.prototype.setMaxListeners=function setMaxListeners(){return this
},EventEmitter.prefixed=r,
EventEmitter.EventEmitter=EventEmitter,void 0!==t&&(t.exports=EventEmitter)},function(t,e,n){
t.exports=n(41)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0})
;e.default=class LinkedList{constructor(){this.head=this.tail=null,this.length=0}append(...t){
this.insertBefore(t[0],null),t.length>1&&this.append.apply(this,t.slice(1))}contains(t){
let e,n=this.iterator();for(;e=n();)if(e===t)return!0;return!1}insertBefore(t,e){t&&(t.next=e,
null!=e?(t.prev=e.prev,
null!=e.prev&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):null!=this.tail?(this.tail.next=t,
t.prev=this.tail,this.tail=t):(t.prev=null,this.head=this.tail=t),this.length+=1)}offset(t){
let e=0,n=this.head;for(;null!=n;){if(n===t)return e;e+=n.length(),n=n.next}return-1}remove(t){
this.contains(t)&&(null!=t.prev&&(t.prev.next=t.next),null!=t.next&&(t.next.prev=t.prev),
t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)}
iterator(t=this.head){return function(){let e=t;return null!=t&&(t=t.next),e}}find(t,e=!1){
let n,r=this.iterator();for(;n=r();){let r=n.length()
;if(t<r||e&&t===r&&(null==n.next||0!==n.next.length()))return[n,t];t-=r}return[null,0]}forEach(t){
let e,n=this.iterator();for(;e=n();)t(e)}forEachAt(t,e,n){if(e<=0)return
;let r,[i,s]=this.find(t),o=t-s,l=this.iterator(i);for(;(r=l())&&o<t+e;){let i=r.length()
;t>o?n(r,t-o,Math.min(e,o+i-t)):n(r,0,Math.min(i,t+e-o)),o+=i}}map(t){
return this.reduce((function(e,n){return e.push(t(n)),e}),[])}reduce(t,e){let n,r=this.iterator()
;for(;n=r();)e=t(e,n);return e}}},function(t,e,n){"use strict"
;Object.defineProperty(e,"__esModule",{value:!0});const r=n(8),i=n(3),s={attributes:!0,
characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},o=100
;class ScrollBlot extends r.default{constructor(t){
super(t),this.scroll=this,this.observer=new MutationObserver(t=>{this.update(t)}),
this.observer.observe(this.domNode,s),this.attach()}detach(){
super.detach(),this.observer.disconnect()}deleteAt(t,e){
this.update(),0===t&&e===this.length()?this.children.forEach((function(t){t.remove()
})):super.deleteAt(t,e)}formatAt(t,e,n,r){this.update(),super.formatAt(t,e,n,r)}insertAt(t,e,n){
this.update(),super.insertAt(t,e,n)}optimize(t=[],e={}){super.optimize(e)
;let n=[].slice.call(this.observer.takeRecords());for(;n.length>0;)t.push(n.pop());let s=(t,e=!0)=>{
null!=t&&t!==this&&null!=t.domNode.parentNode&&(null==t.domNode[i.DATA_KEY].mutations&&(t.domNode[i.DATA_KEY].mutations=[]),
e&&s(t.parent))},l=function(t){
null!=t.domNode[i.DATA_KEY]&&null!=t.domNode[i.DATA_KEY].mutations&&(t instanceof r.default&&t.children.forEach(l),
t.optimize(e))},a=t;for(let u=0;a.length>0;u+=1){
if(u>=o)throw new Error("[Parchment] Maximum optimize iterations reached")
;for(a.forEach((function(t){let e=i.find(t.target,!0)
;null!=e&&(e.domNode===t.target&&("childList"===t.type?(s(i.find(t.previousSibling,!1)),
[].forEach.call(t.addedNodes,(function(t){let e=i.find(t,!1)
;s(e,!1),e instanceof r.default&&e.children.forEach((function(t){s(t,!1)}))
}))):"attributes"===t.type&&s(e.prev)),s(e))
})),this.children.forEach(l),n=(a=[].slice.call(this.observer.takeRecords())).slice();n.length>0;)t.push(n.pop())
}}update(t,e={}){(t=t||this.observer.takeRecords()).map((function(t){let e=i.find(t.target,!0)
;return null==e?null:null==e.domNode[i.DATA_KEY].mutations?(e.domNode[i.DATA_KEY].mutations=[t],
e):(e.domNode[i.DATA_KEY].mutations.push(t),null)})).forEach(t=>{
null!=t&&t!==this&&null!=t.domNode[i.DATA_KEY]&&t.update(t.domNode[i.DATA_KEY].mutations||[],e)}),
null!=this.domNode[i.DATA_KEY].mutations&&super.update(this.domNode[i.DATA_KEY].mutations,e),
this.optimize(t,e)}}ScrollBlot.blotName="scroll",ScrollBlot.defaultChild="block",
ScrollBlot.scope=i.Scope.BLOCK_BLOT,ScrollBlot.tagName="DIV",e.default=ScrollBlot},function(t,e,n){
"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(9),i=n(3)
;class InlineBlot extends r.default{static formats(t){
if(t.tagName!==InlineBlot.tagName)return super.formats(t)}format(t,e){
t!==this.statics.blotName||e?super.format(t,e):(this.children.forEach(t=>{
t instanceof r.default||(t=t.wrap(InlineBlot.blotName,!0)),this.attributes.copy(t)}),this.unwrap())}
formatAt(t,e,n,r){if(null!=this.formats()[n]||i.query(n,i.Scope.ATTRIBUTE)){
this.isolate(t,e).format(n,r)}else super.formatAt(t,e,n,r)}optimize(t){super.optimize(t)
;let e=this.formats();if(0===Object.keys(e).length)return this.unwrap();let n=this.next
;n instanceof InlineBlot&&n.prev===this&&function isEqual(t,e){
if(Object.keys(t).length!==Object.keys(e).length)return!1;for(let n in t)if(t[n]!==e[n])return!1
;return!0}(e,n.formats())&&(n.moveChildren(this),n.remove())}}InlineBlot.blotName="inline",
InlineBlot.scope=i.Scope.INLINE_BLOT,InlineBlot.tagName="SPAN",e.default=InlineBlot
},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(9),i=n(3)
;class BlockBlot extends r.default{static formats(t){let e=i.query(BlockBlot.blotName).tagName
;if(t.tagName!==e)return super.formats(t)}format(t,e){
null!=i.query(t,i.Scope.BLOCK)&&(t!==this.statics.blotName||e?super.format(t,e):this.replaceWith(BlockBlot.blotName))
}formatAt(t,e,n,r){null!=i.query(n,i.Scope.BLOCK)?this.format(n,r):super.formatAt(t,e,n,r)}
insertAt(t,e,n){if(null==n||null!=i.query(e,i.Scope.INLINE))super.insertAt(t,e,n);else{
let r=this.split(t),s=i.create(e,n);r.parent.insertBefore(s,r)}}update(t,e){
navigator.userAgent.match(/Trident/)?this.build():super.update(t,e)}}BlockBlot.blotName="block",
BlockBlot.scope=i.Scope.BLOCK_BLOT,BlockBlot.tagName="P",e.default=BlockBlot},function(t,e,n){
"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(10)
;e.default=class EmbedBlot extends r.default{static formats(t){}format(t,e){
super.formatAt(0,this.length(),t,e)}formatAt(t,e,n,r){
0===t&&e===this.length()?this.format(n,r):super.formatAt(t,e,n,r)}formats(){
return this.statics.formats(this.domNode)}}},function(t,e,n){"use strict"
;Object.defineProperty(e,"__esModule",{value:!0});const r=n(10),i=n(3)
;class TextBlot extends r.default{constructor(t){super(t),this.text=this.statics.value(this.domNode)
}static create(t){return document.createTextNode(t)}static value(t){let e=t.data
;return e.normalize&&(e=e.normalize()),e}deleteAt(t,e){
this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)}index(t,e){
return this.domNode===t?e:-1}insertAt(t,e,n){
null==n?(this.text=this.text.slice(0,t)+e+this.text.slice(t),
this.domNode.data=this.text):super.insertAt(t,e,n)}length(){return this.text.length}optimize(t){
super.optimize(t),
this.text=this.statics.value(this.domNode),0===this.text.length?this.remove():this.next instanceof TextBlot&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),
this.next.remove())}position(t,e=!1){return[this.domNode,t]}split(t,e=!1){if(!e){
if(0===t)return this;if(t===this.length())return this.next}let n=i.create(this.domNode.splitText(t))
;return this.parent.insertBefore(n,this.next),this.text=this.statics.value(this.domNode),n}
update(t,e){
t.some(t=>"characterData"===t.type&&t.target===this.domNode)&&(this.text=this.statics.value(this.domNode))
}value(){return this.text}}TextBlot.blotName="text",TextBlot.scope=i.Scope.INLINE_BLOT,
e.default=TextBlot},function(t,e){let n=document.createElement("div")
;if(n.classList.toggle("test-class",!1),n.classList.contains("test-class")){
let t=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,n){
return arguments.length>1&&!this.contains(e)==!n?n:t.call(this,e)}}
String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return e=e||0,
this.substr(e,t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){
var n=this.toString()
;("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>n.length)&&(e=n.length),e-=t.length
;var r=n.indexOf(t,e);return-1!==r&&r===e
}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(t){
if(null===this)throw new TypeError("Array.prototype.find called on null or undefined")
;if("function"!=typeof t)throw new TypeError("predicate must be a function")
;for(var e,n=Object(this),r=n.length>>>0,i=arguments[1],s=0;s<r;s++)if(e=n[s],
t.call(i,e,s,n))return e}}),document.addEventListener("DOMContentLoaded",(function(){
document.execCommand("enableObjectResizing",!1,!1),document.execCommand("autoUrlDetect",!1,!1)}))
},function(t,e){
/**
 * This library modifies the diff-patch-match library by Neil Fraser
 * by removing the patch and match functionality and certain advanced
 * options in the diff function. The original license is as follows:
 *
 * ===
 *
 * Diff Match and Patch
 *
 * Copyright 2006 Google Inc.
 * http://code.google.com/p/google-diff-match-patch/
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
 */
var n=-1,r=1,i=0;function diff_main(t,e,s){if(t==e)return t?[[i,t]]:[];(s<0||t.length<s)&&(s=null)
;var o=diff_commonPrefix(t,e),l=t.substring(0,o)
;o=diff_commonSuffix(t=t.substring(o),e=e.substring(o))
;var a=t.substring(t.length-o),u=function diff_compute_(t,e){var s;if(!t)return[[r,e]]
;if(!e)return[[n,t]];var o=t.length>e.length?t:e,l=t.length>e.length?e:t,a=o.indexOf(l)
;if(-1!=a)return s=[[r,o.substring(0,a)],[i,l],[r,o.substring(a+l.length)]],
t.length>e.length&&(s[0][0]=s[2][0]=n),s;if(1==l.length)return[[n,t],[r,e]]
;var u=function diff_halfMatch_(t,e){var n=t.length>e.length?t:e,r=t.length>e.length?e:t
;if(n.length<4||2*r.length<n.length)return null;function diff_halfMatchI_(t,e,n){
for(var r,i,s,o,l=t.substring(n,n+Math.floor(t.length/4)),a=-1,u="";-1!=(a=e.indexOf(l,a+1));){
var c=diff_commonPrefix(t.substring(n),e.substring(a)),h=diff_commonSuffix(t.substring(0,n),e.substring(0,a))
;u.length<h+c&&(u=e.substring(a-h,a)+e.substring(a,a+c),r=t.substring(0,n-h),i=t.substring(n+c),
s=e.substring(0,a-h),o=e.substring(a+c))}return 2*u.length>=t.length?[r,i,s,o,u]:null}
var i,s,o,l,a,u=diff_halfMatchI_(n,r,Math.ceil(n.length/4)),c=diff_halfMatchI_(n,r,Math.ceil(n.length/2))
;if(!u&&!c)return null;i=c?u&&u[4].length>c[4].length?u:c:u;t.length>e.length?(s=i[0],o=i[1],l=i[2],
a=i[3]):(l=i[0],a=i[1],s=i[2],o=i[3]);var h=i[4];return[s,o,l,a,h]}(t,e);if(u){
var c=u[0],h=u[1],d=u[2],f=u[3],p=u[4],m=diff_main(c,d),g=diff_main(h,f);return m.concat([[i,p]],g)}
return function diff_bisect_(t,e){
for(var i=t.length,s=e.length,o=Math.ceil((i+s)/2),l=o,a=2*o,u=new Array(a),c=new Array(a),h=0;h<a;h++)u[h]=-1,
c[h]=-1;u[l+1]=0,c[l+1]=0;for(var d=i-s,f=d%2!=0,p=0,m=0,g=0,b=0,y=0;y<o;y++){
for(var _=-y+p;_<=y-m;_+=2){
for(var v=l+_,N=(A=_==-y||_!=y&&u[v-1]<u[v+1]?u[v+1]:u[v-1]+1)-_;A<i&&N<s&&t.charAt(A)==e.charAt(N);)A++,
N++;if(u[v]=A,A>i)m+=2;else if(N>s)p+=2;else if(f){if((k=l+d-_)>=0&&k<a&&-1!=c[k]){var E=i-c[k]
;if(A>=E)return diff_bisectSplit_(t,e,A,N)}}}for(var x=-y+g;x<=y-b;x+=2){
for(var k=l+x,T=(E=x==-y||x!=y&&c[k-1]<c[k+1]?c[k+1]:c[k-1]+1)-x;E<i&&T<s&&t.charAt(i-E-1)==e.charAt(s-T-1);)E++,
T++;if(c[k]=E,E>i)b+=2;else if(T>s)g+=2;else if(!f){if((v=l+d-x)>=0&&v<a&&-1!=u[v]){var A=u[v]
;N=l+A-v;if(A>=(E=i-E))return diff_bisectSplit_(t,e,A,N)}}}}return[[n,t],[r,e]]}(t,e)
}(t=t.substring(0,t.length-o),e=e.substring(0,e.length-o));return l&&u.unshift([i,l]),
a&&u.push([i,a]),function diff_cleanupMerge(t){t.push([i,""]);var e=0;var s=0;var o=0;var l=""
;var a="";var u;for(;e<t.length;)switch(t[e][0]){case r:o++,a+=t[e][1],e++;break;case n:s++,
l+=t[e][1],e++;break;case i:
s+o>1?(0!==s&&0!==o&&(0!==(u=diff_commonPrefix(a,l))&&(e-s-o>0&&t[e-s-o-1][0]==i?t[e-s-o-1][1]+=a.substring(0,u):(t.splice(0,0,[i,a.substring(0,u)]),
e++),
a=a.substring(u),l=l.substring(u)),0!==(u=diff_commonSuffix(a,l))&&(t[e][1]=a.substring(a.length-u)+t[e][1],
a=a.substring(0,a.length-u),
l=l.substring(0,l.length-u))),0===s?t.splice(e-o,s+o,[r,a]):0===o?t.splice(e-s,s+o,[n,l]):t.splice(e-s-o,s+o,[n,l],[r,a]),
e=e-s-o+(s?1:0)+(o?1:0)+1):0!==e&&t[e-1][0]==i?(t[e-1][1]+=t[e][1],t.splice(e,1)):e++,o=0,s=0,l="",
a=""}""===t[t.length-1][1]&&t.pop();var c=!1;e=1
;for(;e<t.length-1;)t[e-1][0]==i&&t[e+1][0]==i&&(t[e][1].substring(t[e][1].length-t[e-1][1].length)==t[e-1][1]?(t[e][1]=t[e-1][1]+t[e][1].substring(0,t[e][1].length-t[e-1][1].length),
t[e+1][1]=t[e-1][1]+t[e+1][1],
t.splice(e-1,1),c=!0):t[e][1].substring(0,t[e+1][1].length)==t[e+1][1]&&(t[e-1][1]+=t[e+1][1],
t[e][1]=t[e][1].substring(t[e+1][1].length)+t[e+1][1],t.splice(e+1,1),c=!0)),e++
;c&&diff_cleanupMerge(t)}(u),null!=s&&(u=function fix_cursor(t,e){
var r=function cursor_normalize_diff(t,e){if(0===e)return[i,t];for(var r=0,s=0;s<t.length;s++){
var o=t[s];if(o[0]===n||o[0]===i){var l=r+o[1].length;if(e===l)return[s+1,t];if(e<l){t=t.slice()
;var a=e-r,u=[o[0],o[1].slice(0,a)],c=[o[0],o[1].slice(a)];return t.splice(s,1,u,c),[s+1,t]}r=l}}
throw new Error("cursor_pos is out of bounds!")}(t,e),s=r[1],o=r[0],l=s[o],a=s[o+1]
;if(null==l)return t;if(l[0]!==i)return t
;if(null!=a&&l[1]+a[1]===a[1]+l[1])return s.splice(o,2,a,l),merge_tuples(s,o,2)
;if(null!=a&&0===a[1].indexOf(l[1])){s.splice(o,2,[a[0],l[1]],[0,l[1]])
;var u=a[1].slice(l[1].length);return u.length>0&&s.splice(o+2,0,[a[0],u]),merge_tuples(s,o,3)}
return t}(u,s)),u=function fix_emoji(t){for(var e=!1,s=function(t){
return t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343
},o=2;o<t.length;o+=1)t[o-2][0]===i&&((l=t[o-2][1]).charCodeAt(l.length-1)>=55296&&l.charCodeAt(l.length-1)<=56319)&&t[o-1][0]===n&&s(t[o-1][1])&&t[o][0]===r&&s(t[o][1])&&(e=!0,
t[o-1][1]=t[o-2][1].slice(-1)+t[o-1][1],
t[o][1]=t[o-2][1].slice(-1)+t[o][1],t[o-2][1]=t[o-2][1].slice(0,-1));var l;if(!e)return t;var a=[]
;for(o=0;o<t.length;o+=1)t[o][1].length>0&&a.push(t[o]);return a}(u)}
function diff_bisectSplit_(t,e,n,r){
var i=t.substring(0,n),s=e.substring(0,r),o=t.substring(n),l=e.substring(r),a=diff_main(i,s),u=diff_main(o,l)
;return a.concat(u)}function diff_commonPrefix(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0
;for(var n=0,r=Math.min(t.length,e.length),i=r,s=0;n<i;)t.substring(s,i)==e.substring(s,i)?s=n=i:r=i,
i=Math.floor((r-n)/2+n);return i}function diff_commonSuffix(t,e){
if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0
;for(var n=0,r=Math.min(t.length,e.length),i=r,s=0;n<i;)t.substring(t.length-i,t.length-s)==e.substring(e.length-i,e.length-s)?s=n=i:r=i,
i=Math.floor((r-n)/2+n);return i}var s=diff_main;function merge_tuples(t,e,n){
for(var r=e+n-1;r>=0&&r>=e-1;r--)if(r+1<t.length){var i=t[r],s=t[r+1]
;i[0]===s[1]&&t.splice(r,2,[i[0],i[1]+s[1]])}return t}s.INSERT=r,s.DELETE=n,s.EQUAL=i,t.exports=s
},function(t,e,n){"use strict";var r;if(!Object.keys){
var i=Object.prototype.hasOwnProperty,s=Object.prototype.toString,o=n(17),l=Object.prototype.propertyIsEnumerable,a=!l.call({
toString:null
},"toString"),u=l.call((function(){}),"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],h=function(t){
var e=t.constructor;return e&&e.prototype===t},d={$applicationCache:!0,$console:!0,$external:!0,
$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,
$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,
$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,
$webkitStorageInfo:!0,$window:!0},f=function(){if("undefined"==typeof window)return!1
;for(var t in window)try{
if(!d["$"+t]&&i.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{h(window[t])
}catch(e){return!0}}catch(e){return!0}return!1}();r=function keys(t){
var e=null!==t&&"object"==typeof t,n="[object Function]"===s.call(t),r=o(t),l=e&&"[object String]"===s.call(t),d=[]
;if(!e&&!n&&!r)throw new TypeError("Object.keys called on a non-object");var p=u&&n
;if(l&&t.length>0&&!i.call(t,0))for(var m=0;m<t.length;++m)d.push(String(m))
;if(r&&t.length>0)for(var g=0;g<t.length;++g)d.push(String(g));else for(var b in t)p&&"prototype"===b||!i.call(t,b)||d.push(String(b))
;if(a)for(var y=function(t){if("undefined"==typeof window||!f)return h(t);try{return h(t)}catch(e){
return!1}}(t),_=0;_<c.length;++_)y&&"constructor"===c[_]||!i.call(t,c[_])||d.push(c[_]);return d}}
t.exports=r},function(t,e,n){"use strict"
;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,i=Object.prototype.toString,s=function isArguments(t){
return!(r&&t&&"object"==typeof t&&Symbol.toStringTag in t)&&"[object Arguments]"===i.call(t)
},o=function isArguments(t){
return!!s(t)||null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==i.call(t)&&"[object Function]"===i.call(t.callee)
},l=function(){return s(arguments)}();s.isLegacyArguments=o,t.exports=l?s:o},function(t,e,n){
"use strict";var r=function(t){return t!=t};t.exports=function is(t,e){
return 0===t&&0===e?1/t==1/e:t===e||!(!r(t)||!r(e))}},function(t,e,n){"use strict"
;var r=n(34),i=RegExp.prototype.exec,s=Object.getOwnPropertyDescriptor,o=Object.prototype.toString,l="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag
;t.exports=function isRegex(t){if(!t||"object"!=typeof t)return!1
;if(!l)return"[object RegExp]"===o.call(t);var e=s(t,"lastIndex")
;return!(!e||!r(e,"value"))&&function tryRegexExec(t){try{var e=t.lastIndex;return t.lastIndex=0,
i.call(t),!0}catch(n){return!1}finally{t.lastIndex=e}}(t)}},function(t,e,n){"use strict";var r=n(35)
;t.exports=r.call(Function.call,Object.prototype.hasOwnProperty)},function(t,e,n){"use strict"
;var r=n(36);t.exports=Function.prototype.bind||r},function(t,e,n){"use strict"
;var r="Function.prototype.bind called on incompatible ",i=Array.prototype.slice,s=Object.prototype.toString
;t.exports=function bind(t){var e=this
;if("function"!=typeof e||"[object Function]"!==s.call(e))throw new TypeError(r+e)
;for(var n,o=i.call(arguments,1),l=function(){if(this instanceof n){
var r=e.apply(this,o.concat(i.call(arguments)));return Object(r)===r?r:this}
return e.apply(t,o.concat(i.call(arguments)))
},a=Math.max(0,e.length-o.length),u=[],c=0;c<a;c++)u.push("$"+c)
;if(n=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(l),
e.prototype){var h=function Empty(){};h.prototype=e.prototype,n.prototype=new h,h.prototype=null}
return n}},function(t,e,n){"use strict";var r=n(11),i=n(18),s=n(19),o=n(38),l=Function.call.bind(i)
;r(l,{getPolyfill:s,implementation:i,shim:o}),t.exports=l},function(t,e,n){"use strict"
;var r=n(11).supportsDescriptors,i=n(19),s=Object.getOwnPropertyDescriptor,o=Object.defineProperty,l=TypeError,a=Object.getPrototypeOf,u=/a/
;t.exports=function shimFlags(){
if(!r||!a)throw new l("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors")
;var t=i(),e=a(u),n=s(e,"flags");return n&&n.get===t||o(e,"flags",{configurable:!0,enumerable:!1,
get:t}),t}},function(t,e,n){"use strict"
;var r=Date.prototype.getDay,i=Object.prototype.toString,s="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag
;t.exports=function isDateObject(t){
return"object"==typeof t&&null!==t&&(s?function tryDateObject(t){try{return r.call(t),!0}catch(e){
return!1}}(t):"[object Date]"===i.call(t))}},,function(t,e,n){"use strict";n.r(e)
;var r=n(0),i=n.n(r),s=(n(28),n(1)),o=n.n(s),l=n(6),a=n.n(l),u=n(2),c=n.n(u)
;class break_Break extends i.a.Embed{static value(){}insertInto(t,e){
0===t.children.length?super.insertInto(t,e):this.remove()}length(){return 0}value(){return""}}
break_Break.blotName="break",break_Break.tagName="BR";var h=break_Break
;class text_TextBlot extends i.a.Text{}const d={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;",
"'":"&#39;"};class inline_Inline extends i.a.Inline{static compare(t,e){
let n=inline_Inline.order.indexOf(t),r=inline_Inline.order.indexOf(e)
;return n>=0||r>=0?n-r:t===e?0:t<e?-1:1}formatAt(t,e,n,r){
if(inline_Inline.compare(this.statics.blotName,n)<0&&i.a.query(n,i.a.Scope.BLOT)){
let i=this.isolate(t,e);r&&i.wrap(n,r)}else super.formatAt(t,e,n,r)}optimize(t){
if(super.optimize(t),
this.parent instanceof inline_Inline&&inline_Inline.compare(this.statics.blotName,this.parent.statics.blotName)>0){
let t=this.parent.isolate(this.offset(),this.length());this.moveChildren(t),t.wrap(this)}}}
inline_Inline.allowedChildren=[inline_Inline,i.a.Embed,text_TextBlot],
inline_Inline.order=["cursor","inline","underline","strike","italic","bold","script","link","code"]
;var f=inline_Inline;const p=1;class block_BlockEmbed extends i.a.Embed{attach(){super.attach(),
this.attributes=new i.a.Attributor.Store(this.domNode)}delta(){
return(new o.a).insert(this.value(),c()(this.formats(),this.attributes.values()))}format(t,e){
let n=i.a.query(t,i.a.Scope.BLOCK_ATTRIBUTE);null!=n&&this.attributes.attribute(n,e)}
formatAt(t,e,n,r){this.format(n,r)}insertAt(t,e,n){if("string"==typeof e&&e.endsWith("\n")){
let n=i.a.create(block_Block.blotName);this.parent.insertBefore(n,0===t?this:this.next),
n.insertAt(0,e.slice(0,-1))}else super.insertAt(t,e,n)}}block_BlockEmbed.scope=i.a.Scope.BLOCK_BLOT
;class block_Block extends i.a.Block{constructor(t){super(t),this.cache={}}delta(){
return null==this.cache.delta&&(this.cache.delta=this.descendants(i.a.Leaf).reduce((t,e)=>0===e.length()?t:t.insert(e.value(),bubbleFormats(e)),new o.a).insert("\n",bubbleFormats(this))),
this.cache.delta}deleteAt(t,e){super.deleteAt(t,e),this.cache={}}formatAt(t,e,n,r){
e<=0||(i.a.query(n,i.a.Scope.BLOCK)?t+e===this.length()&&this.format(n,r):super.formatAt(t,Math.min(e,this.length()-t-1),n,r),
this.cache={})}insertAt(t,e,n){if(null!=n)return super.insertAt(t,e,n);if(0===e.length)return
;let r=e.split("\n"),i=r.shift()
;i.length>0&&(t<this.length()-1||null==this.children.tail?super.insertAt(Math.min(t,this.length()-1),i):this.children.tail.insertAt(this.children.tail.length(),i),
this.cache={});let s=this;r.reduce((function(t,e){return(s=s.split(t,!0)).insertAt(0,e),e.length
}),t+i.length)}insertBefore(t,e){let n=this.children.head;super.insertBefore(t,e),
n instanceof h&&n.remove(),this.cache={}}length(){
return null==this.cache.length&&(this.cache.length=super.length()+p),this.cache.length}
moveChildren(t,e){super.moveChildren(t,e),this.cache={}}optimize(t){super.optimize(t),this.cache={}}
path(t){return super.path(t,!0)}removeChild(t){super.removeChild(t),this.cache={}}split(t,e=!1){
if(e&&(0===t||t>=this.length()-p)){let e=this.clone()
;return 0===t?(this.parent.insertBefore(e,this),this):(this.parent.insertBefore(e,this.next),e)}{
let n=super.split(t,e);return this.cache={},n}}}function bubbleFormats(t,e={}){
return null==t?e:("function"==typeof t.formats&&(e=c()(e,t.formats())),
null==t.parent||"scroll"==t.parent.blotName||t.parent.statics.scope!==t.statics.scope?e:bubbleFormats(t.parent,e))
}block_Block.blotName="block",block_Block.tagName="P",block_Block.defaultChild="break",
block_Block.allowedChildren=[f,i.a.Embed,text_TextBlot];class code_Code extends f{}
code_Code.blotName="code",code_Code.tagName="CODE";class code_CodeBlock extends block_Block{
static create(t){let e=super.create(t);return e.setAttribute("spellcheck",!1),e}static formats(){
return!0}delta(){let t=this.domNode.textContent;return t.endsWith("\n")&&(t=t.slice(0,-1)),
t.split("\n").reduce((t,e)=>t.insert(e).insert("\n",this.formats()),new o.a)}format(t,e){
if(t===this.statics.blotName&&e)return;let[n]=this.descendant(text_TextBlot,this.length()-1)
;null!=n&&n.deleteAt(n.length()-1,1),super.format(t,e)}formatAt(t,e,n,r){if(0===e)return
;if(null==i.a.query(n,i.a.Scope.BLOCK)||n===this.statics.blotName&&r===this.statics.formats(this.domNode))return
;let s=this.newlineIndex(t);if(s<0||s>=t+e)return
;let o=this.newlineIndex(t,!0)+1,l=s-o+1,a=this.isolate(o,l),u=a.next;a.format(n,r),
u instanceof code_CodeBlock&&u.formatAt(0,t-o+e-l,n,r)}insertAt(t,e,n){if(null!=n)return
;let[r,i]=this.descendant(text_TextBlot,t);r.insertAt(i,e)}length(){
let t=this.domNode.textContent.length;return this.domNode.textContent.endsWith("\n")?t:t+1}
newlineIndex(t,e=!1){if(e)return this.domNode.textContent.slice(0,t).lastIndexOf("\n");{
let e=this.domNode.textContent.slice(t).indexOf("\n");return e>-1?t+e:-1}}optimize(t){
this.domNode.textContent.endsWith("\n")||this.appendChild(i.a.create("text","\n")),super.optimize(t)
;let e=this.next
;null!=e&&e.prev===this&&e.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===e.statics.formats(e.domNode)&&(e.optimize(t),
e.moveChildren(this),e.remove())}replace(t){
super.replace(t),[].slice.call(this.domNode.querySelectorAll("*")).forEach((function(t){
let e=i.a.find(t);null==e?t.parentNode.removeChild(t):e instanceof i.a.Embed?e.remove():e.unwrap()
}))}}code_CodeBlock.blotName="code-block",code_CodeBlock.tagName="PRE",code_CodeBlock.TAB="  "
;class cursor_Cursor extends i.a.Embed{static value(){}constructor(t,e){super(t),this.selection=e,
this.textNode=document.createTextNode(cursor_Cursor.CONTENTS),
this.domNode.appendChild(this.textNode),this._length=0}detach(){
null!=this.parent&&this.parent.removeChild(this)}format(t,e){
if(0!==this._length)return super.format(t,e);let n=this,r=0
;for(;null!=n&&n.statics.scope!==i.a.Scope.BLOCK_BLOT;)r+=n.offset(n.parent),n=n.parent
;null!=n&&(this._length=cursor_Cursor.CONTENTS.length,
n.optimize(),n.formatAt(r,cursor_Cursor.CONTENTS.length,t,e),this._length=0)}index(t,e){
return t===this.textNode?0:super.index(t,e)}length(){return this._length}position(){
return[this.textNode,this.textNode.data.length]}remove(){super.remove(),this.parent=null}restore(){
if(this.selection.composing||null==this.parent)return
;let t,e,n,r=this.textNode,s=this.selection.getNativeRange()
;for(null!=s&&s.start.node===r&&s.end.node===r&&([t,e,n]=[r,s.start.offset,s.end.offset]);null!=this.domNode.lastChild&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode)
;if(this.textNode.data!==cursor_Cursor.CONTENTS){
let e=this.textNode.data.split(cursor_Cursor.CONTENTS).join("")
;this.next instanceof text_TextBlot?(t=this.next.domNode,this.next.insertAt(0,e),
this.textNode.data=cursor_Cursor.CONTENTS):(this.textNode.data=e,
this.parent.insertBefore(i.a.create(this.textNode),this),
this.textNode=document.createTextNode(cursor_Cursor.CONTENTS),
this.domNode.appendChild(this.textNode))}return this.remove(),null!=e?([e,n]=[e,n].map((function(e){
return Math.max(0,Math.min(t.data.length,e-1))})),{startNode:t,startOffset:e,endNode:t,endOffset:n
}):void 0}update(t,e){if(t.some(t=>"characterData"===t.type&&t.target===this.textNode)){
let t=this.restore();t&&(e.range=t)}}value(){return""}}cursor_Cursor.blotName="cursor",
cursor_Cursor.className="ql-cursor",cursor_Cursor.tagName="span",cursor_Cursor.CONTENTS="\ufeff"
;var m=cursor_Cursor,g=n(4),b=n.n(g),y=n(5),_=n.n(y);const v=/^[ -~]*$/
;function convertHTML(t,e,n,r=!1){if("function"==typeof t.html)return t.html(e,n)
;if(t instanceof text_TextBlot)return function escapeText(t){return t.replace(/[&<>"']/g,t=>d[t])
}(t.value().slice(e,e+n));if(t.children){const i=t.domNode.tagName.toLowerCase()
;if("ul"===i||"ol"===i){const r=[],s=t.domNode.dataset.checked
;return t.children.forEachAt(e,n,(t,e,n)=>{const o=t.formats();r.push({child:t,offset:e,length:n,
indent:o.indent||0,tag:i,checked:s})}),function convertListHTML(t,e,n){if(0===t.length){
const t=n.pop();return e<=0?`</li></${t}>`:`</li></${t}>${convertListHTML([],e-1,n)}`}
const[{child:r,offset:i,length:s,indent:o,tag:l,checked:a},...u]=t,c="true"===a?"☑ ":"false"===a?"☐ ":""
;if(o>e)return n.push(l),
o===e+1?`<${l}><li>${c}${convertHTML(r,i,s)}${convertListHTML(u,o,n)}`:`<${l}><li>${convertListHTML(t,e+1,n)}`
;const h=n[n.length-1]
;return o===e&&l===h?`</li><li>${c}${convertHTML(r,i,s)}${convertListHTML(u,o,n)}`:`</li></${n.pop()}>${convertListHTML(t,e-1,n)}`
}(r,-1,[])}const s=[];if(t.children.forEachAt(e,n,(t,e,n)=>{s.push(convertHTML(t,e,n))}),
r||"li"===i){let t=s.join("");return"li"===i&&""===t?"<br/>":t}
const{outerHTML:o,innerHTML:l}=t.domNode,[a,u]=o.split(`>${l}<`);return`${a}>${s.join("")}<${u}`}
return t.domNode.outerHTML}function combineFormats(t,e){return Object.keys(e).reduce((function(n,r){
return null==t[r]?n:(e[r]===t[r]?n[r]=e[r]:Array.isArray(e[r])?e[r].indexOf(t[r])<0&&(n[r]=e[r].concat([t[r]])):n[r]=[e[r],t[r]],
n)}),{})}var N=class editor_Editor{constructor(t){this.scroll=t,this.delta=this.getDelta()}
applyDelta(t){let e=!1;this.scroll.update();let n=this.scroll.length()
;return this.scroll.batchStart(),(t=function normalizeDelta(t){return t.reduce((function(t,e){
if(1===e.insert){let n=b()(e.attributes);return delete n.image,t.insert({image:e.attributes.image
},n)}
if(null==e.attributes||!0!==e.attributes.list&&!0!==e.attributes.bullet||((e=b()(e)).attributes.list?e.attributes.list="ordered":(e.attributes.list="bullet",
delete e.attributes.bullet)),"string"==typeof e.insert){
let n=e.insert.replace(/\r\n/g,"\n").replace(/\r/g,"\n");return t.insert(n,e.attributes)}
return t.push(e)}),new o.a)}(t)).reduce((t,r)=>{
let s=r.retain||r.delete||r.insert.length||1,o=r.attributes||{};if(null!=r.insert){
if("string"==typeof r.insert){let s=r.insert;s.endsWith("\n")&&e&&(e=!1,s=s.slice(0,-1)),
t>=n&&!s.endsWith("\n")&&(e=!0),this.scroll.insertAt(t,s)
;let[l,u]=this.scroll.line(t),h=c()({},bubbleFormats(l));if(l instanceof block_Block){
let[t]=l.descendant(i.a.Leaf,u);h=c()(h,bubbleFormats(t))}o=a.a.attributes.diff(h,o)||{}
}else if("object"==typeof r.insert){let e=Object.keys(r.insert)[0];if(null==e)return t
;this.scroll.insertAt(t,e,r.insert[e])}n+=s}return Object.keys(o).forEach(e=>{
this.scroll.formatAt(t,s,e,o[e])}),t+s
},0),t.reduce((t,e)=>"number"==typeof e.delete?(this.scroll.deleteAt(t,e.delete),
t):t+(e.retain||e.insert.length||1),0),this.scroll.batchEnd(),this.update(t)}deleteText(t,e){
return this.scroll.deleteAt(t,e),this.update((new o.a).retain(t).delete(e))}formatLine(t,e,n={}){
return this.scroll.update(),Object.keys(n).forEach(r=>{
if(null!=this.scroll.whitelist&&!this.scroll.whitelist[r])return
;let i=this.scroll.lines(t,Math.max(e,1)),s=e;i.forEach(e=>{let i=e.length()
;if(e instanceof code_CodeBlock){let i=t-e.offset(this.scroll),o=e.newlineIndex(i+s)-i+1
;e.formatAt(i,o,r,n[r])}else e.format(r,n[r]);s-=i})
}),this.scroll.optimize(),this.update((new o.a).retain(t).retain(e,b()(n)))}formatText(t,e,n={}){
return Object.keys(n).forEach(r=>{this.scroll.formatAt(t,e,r,n[r])
}),this.update((new o.a).retain(t).retain(e,b()(n)))}getContents(t,e){return this.delta.slice(t,t+e)
}getDelta(){return this.scroll.lines().reduce((t,e)=>t.concat(e.delta()),new o.a)}getFormat(t,e=0){
let n=[],r=[];0===e?this.scroll.path(t).forEach((function(t){let[e]=t
;e instanceof block_Block?n.push(e):e instanceof i.a.Leaf&&r.push(e)})):(n=this.scroll.lines(t,e),
r=this.scroll.descendants(i.a.Leaf,t,e));let s=[n,r].map((function(t){if(0===t.length)return{}
;let e=bubbleFormats(t.shift());for(;Object.keys(e).length>0;){let n=t.shift();if(null==n)return e
;e=combineFormats(bubbleFormats(n),e)}return e}));return c.a.apply(c.a,s)}getHTML(t,e){
const[n,r]=this.scroll.line(t)
;return n.length()>r+e?convertHTML(n,r,e,!0):convertHTML(this.scroll,t,e,!0)}getText(t,e){
return this.getContents(t,e).filter((function(t){return"string"==typeof t.insert
})).map((function(t){return t.insert})).join("")}insertEmbed(t,e,n){
return this.scroll.insertAt(t,e,n),this.update((new o.a).retain(t).insert({[e]:n}))}
insertText(t,e,n={}){return e=e.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),this.scroll.insertAt(t,e),
Object.keys(n).forEach(r=>{this.scroll.formatAt(t,e.length,r,n[r])
}),this.update((new o.a).retain(t).insert(e,b()(n)))}isBlank(){
if(0==this.scroll.children.length)return!0;if(this.scroll.children.length>1)return!1
;let t=this.scroll.children.head
;return t.statics.blotName===block_Block.blotName&&(!(t.children.length>1)&&t.children.head instanceof h)
}removeFormat(t,e){let n=this.getText(t,e),[r,i]=this.scroll.line(t+e),s=0,l=new o.a
;null!=r&&(s=r instanceof code_CodeBlock?r.newlineIndex(i)-i+1:r.length()-i,
l=r.delta().slice(i,i+s-1).insert("\n"))
;let a=this.getContents(t,e+s).diff((new o.a).insert(n).concat(l)),u=(new o.a).retain(t).concat(a)
;return this.applyDelta(u)}update(t,e=[],n){let r=this.delta
;if(1===e.length&&"characterData"===e[0].type&&e[0].target.data.match(v)&&i.a.find(e[0].target)){
let s=i.a.find(e[0].target),l=bubbleFormats(s),a=s.offset(this.scroll),u=e[0].oldValue.replace(m.CONTENTS,""),c=(new o.a).insert(u),h=(new o.a).insert(s.value())
;t=(new o.a).retain(a).concat(c.diff(h,n)).reduce((function(t,e){
return e.insert?t.insert(e.insert,l):t.push(e)}),new o.a),this.delta=r.compose(t)
}else this.delta=this.getDelta(),t&&_()(r.compose(t),this.delta)||(t=r.diff(this.delta,n));return t}
},E=n(20),x=n.n(E);let k=["error","warn","log","info"],T="warn";function debug(t,...e){
k.indexOf(t)<=k.indexOf(T)&&console[t](...e)}function namespace(t){return k.reduce((function(e,n){
return e[n]=debug.bind(console,n,t),e}),{})}debug.level=namespace.level=function(t){T=t}
;var A=namespace;let S=A("quill:events")
;["selectionchange","mousedown","mouseup","click"].forEach((function(t){
document.addEventListener(t,(...t)=>{
[].slice.call(document.querySelectorAll(".ql-container")).forEach(e=>{
e.__quill&&e.__quill.emitter&&e.__quill.emitter.handleDOM(...t)})})}))
;class emitter_Emitter extends x.a{constructor(){super(),this.listeners={},this.on("error",S.error)}
emit(){S.log.apply(S,arguments),super.emit.apply(this,arguments)}handleDOM(t,...e){
(this.listeners[t.type]||[]).forEach((function({node:n,handler:r}){
(t.target===n||n.contains(t.target))&&r(t,...e)}))}listenDOM(t,e,n){
this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push({node:e,handler:n})}}
emitter_Emitter.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",
SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",
TEXT_CHANGE:"text-change"},emitter_Emitter.sources={API:"api",SILENT:"silent",USER:"user"}
;var L=emitter_Emitter;class Module{constructor(t,e={}){this.quill=t,this.options=e}}
Module.DEFAULTS={};var O=Module;let C=A("quill:selection");class Range{constructor(t,e=0){
this.index=t,this.length=e}}class selection_Selection{constructor(t,e){this.emitter=e,this.scroll=t,
this.composing=!1,
this.mouseDown=!1,this.root=this.scroll.domNode,this.cursor=i.a.create("cursor",this),
this.lastRange=this.savedRange=new Range(0,0),this.handleComposition(),this.handleDragging(),
this.emitter.listenDOM("selectionchange",document,()=>{
this.mouseDown||setTimeout(this.update.bind(this,L.sources.USER),1)
}),this.emitter.on(L.events.EDITOR_CHANGE,(t,e)=>{
t===L.events.TEXT_CHANGE&&e.length()>0&&this.update(L.sources.SILENT)
}),this.emitter.on(L.events.SCROLL_BEFORE_UPDATE,()=>{if(!this.hasFocus())return
;let t=this.getNativeRange()
;null!=t&&t.start.node!==this.cursor.textNode&&this.emitter.once(L.events.SCROLL_UPDATE,()=>{try{
this.setNativeRange(t.start.node,t.start.offset,t.end.node,t.end.offset)}catch(e){}})}),
this.emitter.on(L.events.SCROLL_OPTIMIZE,(t,e)=>{if(e.range){
const{startNode:t,startOffset:n,endNode:r,endOffset:i}=e.range;this.setNativeRange(t,n,r,i)}}),
this.update(L.sources.SILENT)}handleComposition(){
this.root.addEventListener("compositionstart",()=>{this.composing=!0
}),this.root.addEventListener("compositionend",()=>{if(this.composing=!1,this.cursor.parent){
const t=this.cursor.restore();if(!t)return;setTimeout(()=>{
this.setNativeRange(t.startNode,t.startOffset,t.endNode,t.endOffset)},1)}})}handleDragging(){
this.emitter.listenDOM("mousedown",document.body,()=>{this.mouseDown=!0
}),this.emitter.listenDOM("mouseup",document.body,()=>{this.mouseDown=!1,this.update(L.sources.USER)
})}focus(){this.hasFocus()||(this.root.focus({preventScroll:!0}),this.setRange(this.savedRange))}
format(t,e){if(null!=this.scroll.whitelist&&!this.scroll.whitelist[t])return;this.scroll.update()
;let n=this.getNativeRange();if(null!=n&&n.native.collapsed&&!i.a.query(t,i.a.Scope.BLOCK)){
if(n.start.node!==this.cursor.textNode){let t=i.a.find(n.start.node,!1);if(null==t)return
;if(t instanceof i.a.Leaf){let e=t.split(n.start.offset);t.parent.insertBefore(this.cursor,e)
}else t.insertBefore(this.cursor,n.start.node);this.cursor.attach()}this.cursor.format(t,e),
this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),
this.update()}}getBounds(t,e=0){let n=this.scroll.length();t=Math.min(t,n-1),e=Math.min(t+e,n-1)-t
;let r,[i,s]=this.scroll.leaf(t);if(null==i)return null;[r,s]=i.position(s,!0)
;let o=document.createRange();if(e>0)return o.setStart(r,s),[i,s]=this.scroll.leaf(t+e),
null==i?null:([r,s]=i.position(s,!0),o.setEnd(r,s),o.getBoundingClientRect());{let t,e="left"
;return r instanceof Text?(s<r.data.length?(o.setStart(r,s),o.setEnd(r,s+1)):(o.setStart(r,s-1),
o.setEnd(r,s),e="right"),t=o.getBoundingClientRect()):(t=i.domNode.getBoundingClientRect(),
s>0&&(e="right")),{bottom:t.top+t.height,height:t.height,left:t[e],right:t[e],top:t.top,width:0}}}
getNativeRange(){let t=document.getSelection();if(null==t||t.rangeCount<=0)return null
;let e=t.getRangeAt(0);if(null==e)return null;let n=this.normalizeNative(e)
;return C.info("getNativeRange",n),n}getRange(){let t=this.getNativeRange()
;return null==t?[null,null]:[this.normalizedToRange(t),t]}hasFocus(){
return document.activeElement===this.root}normalizedToRange(t){let e=[[t.start.node,t.start.offset]]
;t.native.collapsed||e.push([t.end.node,t.end.offset]);let n=e.map(t=>{
let[e,n]=t,r=i.a.find(e,!0),s=r.offset(this.scroll)
;return 0===n?s:r instanceof i.a.Container?s+r.length():s+r.index(e,n)
}),r=Math.min(Math.max(...n),this.scroll.length()-1),s=Math.min(r,...n);return new Range(s,r-s)}
normalizeNative(t){
if(!contains(this.root,t.startContainer)||!t.collapsed&&!contains(this.root,t.endContainer))return null
;let e={start:{node:t.startContainer,offset:t.startOffset},end:{node:t.endContainer,
offset:t.endOffset},native:t};return[e.start,e.end].forEach((function(t){let e=t.node,n=t.offset
;for(;!(e instanceof Text)&&e.childNodes.length>0;)if(e.childNodes.length>n)e=e.childNodes[n],
n=0;else{if(e.childNodes.length!==n)break
;n=(e=e.lastChild)instanceof Text?e.data.length:e.childNodes.length+1}t.node=e,t.offset=n})),e}
rangeToNative(t){let e=t.collapsed?[t.index]:[t.index,t.index+t.length],n=[],r=this.scroll.length()
;return e.forEach((t,e)=>{t=Math.min(r-1,t);let i,[s,o]=this.scroll.leaf(t)
;[i,o]=s.position(o,0!==e),n.push(i,o)}),n.length<2&&(n=n.concat(n)),n}scrollIntoView(t){
let e=this.lastRange;if(null==e)return;let n=this.getBounds(e.index,e.length);if(null==n)return
;let r=this.scroll.length()-1,[i]=this.scroll.line(Math.min(e.index,r)),s=i
;if(e.length>0&&([s]=this.scroll.line(Math.min(e.index+e.length,r))),null==i||null==s)return
;let o=t.getBoundingClientRect()
;n.top<o.top?t.scrollTop-=o.top-n.top:n.bottom>o.bottom&&(t.scrollTop+=n.bottom-o.bottom)}
setNativeRange(t,e,n=t,r=e,i=!1){
if(C.info("setNativeRange",t,e,n,r),null!=t&&(null==this.root.parentNode||null==t.parentNode||null==n.parentNode))return
;let s=document.getSelection();if(null!=s)if(null!=t){this.hasFocus()||this.root.focus()
;let o=(this.getNativeRange()||{}).native
;if(null==o||i||t!==o.startContainer||e!==o.startOffset||n!==o.endContainer||r!==o.endOffset){
"BR"==t.tagName&&(e=[].indexOf.call(t.parentNode.childNodes,t),
t=t.parentNode),"BR"==n.tagName&&(r=[].indexOf.call(n.parentNode.childNodes,n),n=n.parentNode)
;let i=document.createRange();i.setStart(t,e),i.setEnd(n,r),s.removeAllRanges(),s.addRange(i)}
}else s.removeAllRanges(),this.root.blur(),document.body.focus()}setRange(t,e=!1,n=L.sources.API){
if("string"==typeof e&&(n=e,e=!1),C.info("setRange",t),null!=t){let n=this.rangeToNative(t)
;this.setNativeRange(...n,e)}else this.setNativeRange(null);this.update(n)}update(t=L.sources.USER){
let e=this.lastRange,[n,r]=this.getRange()
;if(this.lastRange=n,null!=this.lastRange&&(this.savedRange=this.lastRange),!_()(e,this.lastRange)){
!this.composing&&null!=r&&r.native.collapsed&&r.start.node!==this.cursor.textNode&&this.cursor.restore()
;let n=[L.events.SELECTION_CHANGE,b()(this.lastRange),b()(e),t]
;this.emitter.emit(L.events.EDITOR_CHANGE,...n),t!==L.sources.SILENT&&this.emitter.emit(...n)}}}
function contains(t,e){try{e.parentNode}catch(n){return!1}
return e instanceof Text&&(e=e.parentNode),t.contains(e)}class Theme{constructor(t,e){this.quill=t,
this.options=e,this.modules={}}init(){Object.keys(this.options.modules).forEach(t=>{
null==this.modules[t]&&this.addModule(t)})}addModule(t){
let e=this.quill.constructor.import(`modules/${t}`)
;return this.modules[t]=new e(this.quill,this.options.modules[t]||{}),this.modules[t]}}
Theme.DEFAULTS={modules:{}},Theme.themes={default:Theme};var w=Theme;let B=A("quill")
;class quill_Quill{static debug(t){!0===t&&(t="log"),A.level(t)}static find(t){
return t.__quill||i.a.find(t)}static import(t){
return null==this.imports[t]&&B.error(`Cannot import ${t}. Are you sure it was registered?`),
this.imports[t]}static register(t,e,n=!1){if("string"!=typeof t){let n=t.attrName||t.blotName
;"string"==typeof n?this.register("formats/"+n,t,e):Object.keys(t).forEach(n=>{
this.register(n,t[n],e)})}else null==this.imports[t]||n||B.warn(`Overwriting ${t} with`,e),
this.imports[t]=e,
(t.startsWith("blots/")||t.startsWith("formats/"))&&"abstract"!==e.blotName?i.a.register(e):t.startsWith("modules")&&"function"==typeof e.register&&e.register()
}constructor(t,e={}){if(this.options=function expandConfig(t,e){if((e=c()(!0,{container:t,modules:{
clipboard:!0,keyboard:!0,history:!0}},e)).theme&&e.theme!==quill_Quill.DEFAULTS.theme){
if(e.theme=quill_Quill.import(`themes/${e.theme}`),
null==e.theme)throw new Error(`Invalid theme ${e.theme}. Did you register it?`)}else e.theme=w
;let n=c()(!0,{},e.theme.DEFAULTS);[n,e].forEach((function(t){t.modules=t.modules||{},
Object.keys(t.modules).forEach((function(e){!0===t.modules[e]&&(t.modules[e]={})}))}))
;let r=Object.keys(n.modules).concat(Object.keys(e.modules)).reduce((function(t,e){
let n=quill_Quill.import(`modules/${e}`)
;return null==n?B.error(`Cannot load ${e} module. Are you sure you registered it?`):t[e]=n.DEFAULTS||{},
t}),{})
;null!=e.modules&&e.modules.toolbar&&e.modules.toolbar.constructor!==Object&&(e.modules.toolbar={
container:e.modules.toolbar});return e=c()(!0,{},quill_Quill.DEFAULTS,{modules:r},n,e),
["bounds","container","scrollingContainer"].forEach((function(t){
"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))
})),e.modules=Object.keys(e.modules).reduce((function(t,n){return e.modules[n]&&(t[n]=e.modules[n]),
t}),{}),e
}(t,e),this.container=this.options.container,null==this.container)return B.error("Invalid Quill container",t)
;this.options.debug&&quill_Quill.debug(this.options.debug);let n=this.container.innerHTML.trim()
;this.container.classList.add("ql-container"),
this.container.innerHTML="",this.container.__quill=this,this.root=this.addContainer("ql-editor"),
this.root.classList.add("ql-blank"),
this.root.setAttribute("data-gramm",!1),this.scrollingContainer=this.options.scrollingContainer||this.root,
this.emitter=new L,this.scroll=i.a.create(this.root,{emitter:this.emitter,
whitelist:this.options.formats
}),this.editor=new N(this.scroll),this.selection=new selection_Selection(this.scroll,this.emitter),
this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),
this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),
this.theme.init(),this.emitter.on(L.events.EDITOR_CHANGE,t=>{
t===L.events.TEXT_CHANGE&&this.root.classList.toggle("ql-blank",this.editor.isBlank())}),
this.emitter.on(L.events.SCROLL_UPDATE,(t,e)=>{
let n=this.selection.lastRange,r=n&&0===n.length?n.index:void 0
;modify.call(this,()=>this.editor.update(null,e,r),t)})
;let r=this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">${n}<p><br></p></div>`)
;this.setContents(r),
this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),
this.options.readOnly&&this.disable()}addContainer(t,e=null){if("string"==typeof t){let e=t
;(t=document.createElement("div")).classList.add(e)}return this.container.insertBefore(t,e),t}
blur(){this.selection.setRange(null)}deleteText(t,e,n){return[t,e,,n]=overload(t,e,n),
modify.call(this,()=>this.editor.deleteText(t,e),n,t,-1*e)}disable(){this.enable(!1)}enable(t=!0){
this.scroll.enable(t),this.container.classList.toggle("ql-disabled",!t)}focus(){
this.selection.focus()}format(t,e,n=L.sources.API){return modify.call(this,()=>{
let n=this.getSelection(!0),r=new o.a;if(null==n)return r
;if(i.a.query(t,i.a.Scope.BLOCK))r=this.editor.formatLine(n.index,n.length,{[t]:e});else{
if(0===n.length)return this.selection.format(t,e),r;r=this.editor.formatText(n.index,n.length,{[t]:e
})}return this.setSelection(n,L.sources.SILENT),r},n)}formatLine(t,e,n,r,i){let s
;return[t,e,s,i]=overload(t,e,n,r,i),modify.call(this,()=>this.editor.formatLine(t,e,s),i,t,0)}
formatText(t,e,n,r,i){let s
;return[t,e,s,i]=overload(t,e,n,r,i),modify.call(this,()=>this.editor.formatText(t,e,s),i,t,0)}
getBounds(t,e=0){let n
;n="number"==typeof t?this.selection.getBounds(t,e):this.selection.getBounds(t.index,t.length)
;let r=this.container.getBoundingClientRect();return{bottom:n.bottom-r.top,height:n.height,
left:n.left-r.left,right:n.right-r.left,top:n.top-r.top,width:n.width}}
getContents(t=0,e=this.getLength()-t){return[t,e]=overload(t,e),this.editor.getContents(t,e)}
getFormat(t=this.getSelection(!0),e=0){
return"number"==typeof t?this.editor.getFormat(t,e):this.editor.getFormat(t.index,t.length)}
getIndex(t){return t.offset(this.scroll)}getLength(){return this.scroll.length()}getLeaf(t){
return this.scroll.leaf(t)}getLine(t){return this.scroll.line(t)}getLines(t=0,e=Number.MAX_VALUE){
return"number"!=typeof t?this.scroll.lines(t.index,t.length):this.scroll.lines(t,e)}getModule(t){
return this.theme.modules[t]}getSelection(t=!1){return t&&this.focus(),this.update(),
this.selection.getRange()[0]}getSemanticHTML(t=0,e=this.getLength()-t){return[t,e]=overload(t,e),
this.editor.getHTML(t,e)}getText(t=0,e=this.getLength()-t){return[t,e]=overload(t,e),
this.editor.getText(t,e)}hasFocus(){return this.selection.hasFocus()}
insertEmbed(t,e,n,r=quill_Quill.sources.API){
return modify.call(this,()=>this.editor.insertEmbed(t,e,n),r,t)}insertText(t,e,n,r,i){let s
;return[t,,s,i]=overload(t,0,n,r,i),modify.call(this,()=>this.editor.insertText(t,e,s),i,t,e.length)
}isEnabled(){return!this.container.classList.contains("ql-disabled")}off(){
return this.emitter.off.apply(this.emitter,arguments)}on(){
return this.emitter.on.apply(this.emitter,arguments)}once(){
return this.emitter.once.apply(this.emitter,arguments)}dangerouslySetHTML(t){
const e=this.clipboard.convert(t);this.setContents(e)}removeFormat(t,e,n){
return[t,e,,n]=overload(t,e,n),modify.call(this,()=>this.editor.removeFormat(t,e),n,t)}
scrollIntoView(){this.selection.scrollIntoView(this.scrollingContainer)}
setContents(t,e=L.sources.API){return modify.call(this,()=>{t=new o.a(t)
;let e=this.getLength(),n=this.editor.deleteText(0,e),r=this.editor.applyDelta(t),i=r.ops[r.ops.length-1]
;return null!=i&&"string"==typeof i.insert&&"\n"===i.insert[i.insert.length-1]&&(this.editor.deleteText(this.getLength()-1,1),
r.delete(1)),n.compose(r)},e)}setSelection(t,e,n){
null==t?this.selection.setRange(null,e||quill_Quill.sources.API):([t,e,,n]=overload(t,e,n),
this.selection.setRange(new Range(t,e),n),
n!==L.sources.SILENT&&this.selection.scrollIntoView(this.scrollingContainer))}
setText(t,e=L.sources.API){let n=(new o.a).insert(t);return this.setContents(n,e)}
update(t=L.sources.USER){let e=this.scroll.update(t);return this.selection.update(t),e}
updateContents(t,e=L.sources.API){
return modify.call(this,()=>(t=new o.a(t),this.editor.applyDelta(t,e)),e,!0)}}
function modify(t,e,n,r){
if(this.options.strict&&!this.isEnabled()&&e===L.sources.USER)return new o.a
;let i=null==n?null:this.getSelection(),s=this.editor.delta,l=t();if(null!=i&&(!0===n&&(n=i.index),
null==r?i=shiftRange(i,l,e):0!==r&&(i=shiftRange(i,n,r,e)),this.setSelection(i,L.sources.SILENT)),
l.length()>0){let t=[L.events.TEXT_CHANGE,l,s,e];this.emitter.emit(L.events.EDITOR_CHANGE,...t),
e!==L.sources.SILENT&&this.emitter.emit(...t)}return l}function overload(t,e,n,r,i){let s={}
;return"number"==typeof t.index&&"number"==typeof t.length?"number"!=typeof e?(i=r,r=n,n=e,
e=t.length,t=t.index):(e=t.length,t=t.index):"number"!=typeof e&&(i=r,r=n,n=e,e=0),
"object"==typeof n?(s=n,i=r):"string"==typeof n&&(null!=r?s[n]=r:i=n),[t,e,s,i=i||L.sources.API]}
function shiftRange(t,e,n,r){if(null==t)return null;let i,s
;return e instanceof o.a?[i,s]=[t.index,t.index+t.length].map((function(t){
return e.transformPosition(t,r!==L.sources.USER)
})):[i,s]=[t.index,t.index+t.length].map((function(t){
return t<e||t===e&&r===L.sources.USER?t:n>=0?t+n:Math.max(e,t+n)})),new Range(i,s-i)}
quill_Quill.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,
scrollingContainer:null,strict:!0,theme:"default"
},quill_Quill.events=L.events,quill_Quill.sources=L.sources,quill_Quill.version="1.3.7-cling.4",
quill_Quill.imports={delta:o.a,parchment:i.a,"core/module":O,"core/theme":w}
;class container_Container extends i.a.Container{}
container_Container.allowedChildren=[block_Block,block_BlockEmbed,container_Container]
;var q=container_Container;const I="\ufeff";var j=class embed_Embed extends i.a.Embed{
constructor(t){
super(t),this.contentNode=document.createElement("span"),this.contentNode.setAttribute("contenteditable",!1),
[].slice.call(this.domNode.childNodes).forEach(t=>{this.contentNode.appendChild(t)}),
this.leftGuard=document.createTextNode(I),this.rightGuard=document.createTextNode(I),
this.domNode.appendChild(this.leftGuard),this.domNode.appendChild(this.contentNode),
this.domNode.appendChild(this.rightGuard)}index(t,e){
return t===this.leftGuard?0:t===this.rightGuard?1:super.index(t,e)}restore(t){
let e,n,r=t.data.split(I).join("");if(t===this.leftGuard)if(this.prev instanceof text_TextBlot){
let t=this.prev.length();this.prev.insertAt(t,r),e={startNode:this.prev.domNode,
startOffset:t+r.length}
}else n=document.createTextNode(r),this.parent.insertBefore(i.a.create(n),this),e={startNode:n,
startOffset:r.length
};else t===this.rightGuard&&(this.next instanceof text_TextBlot?(this.next.insertAt(0,r),e={
startNode:this.next.domNode,startOffset:r.length}):(n=document.createTextNode(r),
this.parent.insertBefore(i.a.create(n),this.next),e={startNode:n,startOffset:r.length}))
;return t.data=I,e}update(t,e){t.forEach(t=>{
if("characterData"===t.type&&(t.target===this.leftGuard||t.target===this.rightGuard)){
let n=this.restore(t.target);n&&(e.range=n)}})}};function isLine(t){
return t instanceof block_Block||t instanceof block_BlockEmbed}
class scroll_Scroll extends i.a.Scroll{constructor(t,e){super(t),this.emitter=e.emitter,
Array.isArray(e.whitelist)&&(this.whitelist=e.whitelist.reduce((function(t,e){return t[e]=!0,t
}),{})),this.domNode.addEventListener("DOMNodeInserted",(function(){})),this.optimize(),
this.enable()}batchStart(){this.batch=!0}batchEnd(){this.batch=!1,this.optimize()}deleteAt(t,e){
let[n,r]=this.line(t),[i]=this.line(t+e);if(super.deleteAt(t,e),null!=i&&n!==i&&r>0){
if(n instanceof block_BlockEmbed||i instanceof block_BlockEmbed)return void this.optimize()
;if(n instanceof code_CodeBlock){let t=n.newlineIndex(n.length(),!0)
;if(t>-1&&(n=n.split(t+1))===i)return void this.optimize()}else if(i instanceof code_CodeBlock){
let t=i.newlineIndex(0);t>-1&&i.split(t+1)}let t=i.children.head instanceof h?null:i.children.head
;n.moveChildren(i,t),n.remove()}this.optimize()}enable(t=!0){
this.domNode.setAttribute("contenteditable",t)}formatAt(t,e,n,r){
(null==this.whitelist||this.whitelist[n])&&(super.formatAt(t,e,n,r),this.optimize())}
insertAt(t,e,n){if(null==n||null==this.whitelist||this.whitelist[e]){
if(t>=this.length())if(null==n||null==i.a.query(e,i.a.Scope.BLOCK)){
let t=i.a.create(this.statics.defaultChild)
;this.appendChild(t),null==n&&e.endsWith("\n")&&(e=e.slice(0,-1)),t.insertAt(0,e,n)}else{
let t=i.a.create(e,n);this.appendChild(t)}else super.insertAt(t,e,n);this.optimize()}}
insertBefore(t,e){if(t.statics.scope===i.a.Scope.INLINE_BLOT){
let e=i.a.create(this.statics.defaultChild);e.appendChild(t),t=e}super.insertBefore(t,e)}leaf(t){
return this.path(t).pop()||[null,-1]}line(t){
return t===this.length()?this.line(t-1):this.descendant(isLine,t)}lines(t=0,e=Number.MAX_VALUE){
let n=(t,e,r)=>{let s=[],o=r;return t.children.forEachAt(e,r,(function(t,e,r){
isLine(t)?s.push(t):t instanceof i.a.Container&&(s=s.concat(n(t,e,o))),o-=r})),s};return n(this,t,e)
}optimize(t=[],e={}){
!0!==this.batch&&(super.optimize(t,e),t.length>0&&this.emitter.emit(L.events.SCROLL_OPTIMIZE,t,e))}
path(t){return super.path(t).slice(1)}update(t){if(!0===this.batch)return;let e=L.sources.USER
;"string"==typeof t&&(e=t),
Array.isArray(t)||(t=this.observer.takeRecords()),t.length>0&&this.emitter.emit(L.events.SCROLL_BEFORE_UPDATE,e,t),
super.update(t.concat([])),t.length>0&&this.emitter.emit(L.events.SCROLL_UPDATE,e,t)}}
scroll_Scroll.blotName="scroll",scroll_Scroll.className="ql-editor",scroll_Scroll.tagName="DIV",
scroll_Scroll.defaultChild="block",scroll_Scroll.allowedChildren=[block_Block,block_BlockEmbed,q]
;var R=scroll_Scroll;let D={scope:i.a.Scope.BLOCK,whitelist:["right","center","justify"]
},M=new i.a.Attributor.Attribute("align","align",D),P=(new i.a.Attributor.Class("align","ql-align",D),
new i.a.Attributor.Style("align","text-align",D))
;class color_ColorAttributor extends i.a.Attributor.Style{value(t){let e=super.value(t)
;return e.startsWith("rgb(")?"#"+(e=e.replace(/^[^\d]+/,"").replace(/[^\d]+$/,"")).split(",").map((function(t){
return("00"+parseInt(t).toString(16)).slice(-2)})).join(""):e}}
new i.a.Attributor.Class("color","ql-color",{scope:i.a.Scope.INLINE})
;let K=new color_ColorAttributor("color","color",{scope:i.a.Scope.INLINE
}),U=(new i.a.Attributor.Class("background","ql-bg",{scope:i.a.Scope.INLINE
}),new color_ColorAttributor("background","background-color",{scope:i.a.Scope.INLINE})),F={
scope:i.a.Scope.BLOCK,whitelist:["rtl"]
},$=new i.a.Attributor.Attribute("direction","dir",F),H=(new i.a.Attributor.Class("direction","ql-direction",F),
new i.a.Attributor.Style("direction","direction",F)),Q={scope:i.a.Scope.INLINE,
whitelist:["serif","monospace"]};new i.a.Attributor.Class("font","ql-font",Q)
;let z=new class font_FontStyleAttributor extends i.a.Attributor.Style{value(t){
return super.value(t).replace(/["']/g,"")}
}("font","font-family",Q),W=(new i.a.Attributor.Class("size","ql-size",{scope:i.a.Scope.INLINE,
whitelist:["small","large","huge"]}),new i.a.Attributor.Style("size","font-size",{
scope:i.a.Scope.INLINE,whitelist:["10px","18px","32px"]})),Y=A("quill:clipboard")
;const G="__ql-matcher",V=[[Node.TEXT_NODE,function matchText(t,e){let n=t.data
;if("O:P"===t.parentNode.tagName)return e.insert(n.trim())
;if(0===n.trim().length&&n.includes("\n"))return e
;if(!computeStyle(t.parentNode).whiteSpace.startsWith("pre")){let e=function(t,e){
return(e=e.replace(/[^\u00a0]/g,"")).length<1&&t?" ":e}
;n=(n=n.replace(/\r\n/g," ").replace(/\n/g," ")).replace(/\s\s+/g,e.bind(e,!0)),
(null==t.previousSibling&&clipboard_isLine(t.parentNode)||null!=t.previousSibling&&clipboard_isLine(t.previousSibling))&&(n=n.replace(/^\s+/,e.bind(e,!1))),
(null==t.nextSibling&&clipboard_isLine(t.parentNode)||null!=t.nextSibling&&clipboard_isLine(t.nextSibling))&&(n=n.replace(/\s+$/,e.bind(e,!1)))
}return e.insert(n)}],[Node.TEXT_NODE,matchNewline],["br",function matchBreak(t,e){
deltaEndsWith(e,"\n")||e.insert("\n");return e
}],[Node.ELEMENT_NODE,matchNewline],[Node.ELEMENT_NODE,function matchBlot(t,e){let n=i.a.query(t)
;if(null==n)return e;if(n.prototype instanceof i.a.Embed){let r={},i=n.value(t)
;null!=i&&(r[n.blotName]=i,e=(new o.a).insert(r,n.formats(t)))
}else"function"==typeof n.formats&&(e=applyFormat(e,n.blotName,n.formats(t)));return e
}],[Node.ELEMENT_NODE,matchSpacing],[Node.ELEMENT_NODE,function matchAttributor(t,e){
let n=i.a.Attributor.Attribute.keys(t),r=i.a.Attributor.Class.keys(t),s=i.a.Attributor.Style.keys(t),o={}
;n.concat(r).concat(s).forEach(e=>{let n=i.a.query(e,i.a.Scope.ATTRIBUTE)
;null!=n&&(o[n.attrName]=n.value(t),
o[n.attrName])||(null==(n=X[e])||n.attrName!==e&&n.keyName!==e||(o[n.attrName]=n.value(t)||void 0),
null==(n=Z[e])||n.attrName!==e&&n.keyName!==e||(n=Z[e],o[n.attrName]=n.value(t)||void 0))}),
Object.keys(o).length>0&&(e=applyFormat(e,o));return e
}],[Node.ELEMENT_NODE,function matchStyles(t,e){let n={},r=t.style||{}
;r.fontStyle&&"italic"===computeStyle(t).fontStyle&&(n.italic=!0)
;r.fontWeight&&(computeStyle(t).fontWeight.startsWith("bold")||parseInt(computeStyle(t).fontWeight)>=700)&&(n.bold=!0)
;"line-through"===r.textDecoration&&(n.strike=!0);Object.keys(n).length>0&&(e=applyFormat(e,n))
;parseFloat(r.textIndent||0)>0&&(e=(new o.a).insert("\t").concat(e));return e
}],["li",function matchIndent(t,e){let n=i.a.query(t)
;if(null==n||"list-item"!==n.blotName||!deltaEndsWith(e,"\n"))return e;let r=-1,s=t.parentNode
;for(;!s.classList.contains("ql-clipboard");)"list"===(i.a.query(s)||{}).blotName&&(r+=1),
s=s.parentNode;return r<=0?e:e.compose((new o.a).retain(e.length()-1).retain(1,{indent:r}))
}],["em",matchAlias.bind(matchAlias,"marked")],["b",matchAlias.bind(matchAlias,"bold")],["strong",matchAlias.bind(matchAlias,"bold")],["i",matchAlias.bind(matchAlias,"italic")],["style",function matchIgnore(){
return new o.a}]],X=[M,$].reduce((function(t,e){return t[e.keyName]=e,t
}),{}),Z=[P,U,K,H,z,W].reduce((function(t,e){return t[e.keyName]=e,t}),{})
;class clipboard_Clipboard extends O{constructor(t,e){
super(t,e),this.quill.root.addEventListener("copy",t=>this.onCaptureCopy(t,!1)),
this.quill.root.addEventListener("cut",t=>this.onCaptureCopy(t,!0)),
this.quill.root.addEventListener("paste",this.onPaste.bind(this)),
this.container=this.quill.addContainer("ql-clipboard"),
this.container.setAttribute("contenteditable",!0),this.container.setAttribute("tabindex",-1),
this.matchers=[],V.concat(this.options.matchers).forEach(([t,n])=>{
(e.matchVisual||n!==matchSpacing)&&this.addMatcher(t,n)})}addMatcher(t,e){this.matchers.push([t,e])}
convert(t){if("string"==typeof t)return this.container.innerHTML=t.replace(/\>\r?\n +\</g,"><"),
this.convert();const e=this.quill.getFormat(this.quill.selection.savedRange.index)
;if(e[code_CodeBlock.blotName]){const t=this.container.innerText;return this.container.innerHTML="",
(new o.a).insert(t,{[code_CodeBlock.blotName]:e[code_CodeBlock.blotName]})}
for(const s of childElements(this.container))if("ul"===s.tagName.toLowerCase())for(const t of childElements(s)){
const{firstChild:e}=t;if(e&&3===e.nodeType){const{textContent:n}=e;let r
;n.startsWith("☑ ")?r="true":n.startsWith("☐ ")&&(r="false"),r&&(s.dataset.checked=r,e.remove(),
t.prepend(n.substr(2)))}}let[n,r]=this.prepareMatching(),i=function traverse(t,e,n){
return t.nodeType===t.TEXT_NODE?n.reduce((function(e,n){return n(t,e)
}),new o.a):t.nodeType===t.ELEMENT_NODE?[].reduce.call(t.childNodes||[],(r,i)=>{
let s=traverse(i,e,n);return i.nodeType===t.ELEMENT_NODE&&(s=e.reduce((function(t,e){return e(i,t)
}),s),s=(i[G]||[]).reduce((function(t,e){return e(i,t)}),s)),r.concat(s)},new o.a):new o.a
}(this.container,n,r)
;return deltaEndsWith(i,"\n")&&null==i.ops[i.ops.length-1].attributes&&(i=i.compose((new o.a).retain(i.length()-1).delete(1))),
Y.log("convert",this.container.innerHTML,i),this.container.innerHTML="",i}onCaptureCopy(t,e=!1){
if(t.defaultPrevented)return;t.preventDefault();const[n]=this.quill.selection.getRange()
;if(null==n)return;const r=this.quill.getText(n);t.clipboardData.setData("text/plain",r)
;const i=this.quill.getSemanticHTML(n)
;t.clipboardData.setData("text/html",i),e&&this.quill.deleteText(n,quill_Quill.sources.USER)}
onPaste(t){if(t.defaultPrevented||!this.quill.isEnabled())return
;let e=this.quill.getSelection(),n=(new o.a).retain(e.index);this.container.focus({preventScroll:!0
}),this.quill.selection.update(quill_Quill.sources.SILENT),setTimeout(()=>{
n=n.concat(this.convert()).delete(e.length),this.quill.updateContents(n,quill_Quill.sources.USER),
this.quill.setSelection(n.length()-e.length,quill_Quill.sources.SILENT),this.quill.focus()},1)}
prepareMatching(){let t=[],e=[];return this.matchers.forEach(n=>{let[r,i]=n;switch(r){
case Node.TEXT_NODE:e.push(i);break;case Node.ELEMENT_NODE:t.push(i);break;default:
[].forEach.call(this.container.querySelectorAll(r),t=>{t[G]=t[G]||[],t[G].push(i)})}}),[t,e]}}
function applyFormat(t,e,n){return"object"==typeof e?Object.keys(e).reduce((function(t,n){
return applyFormat(t,n,e[n])}),t):t.reduce((function(t,r){
return r.attributes&&r.attributes[e]?t.push(r):t.insert(r.insert,c()({},{[e]:n},r.attributes))
}),new o.a)}function computeStyle(t){if(t.nodeType!==Node.ELEMENT_NODE)return{}
;return t["__ql-computed-style"]||(t["__ql-computed-style"]=window.getComputedStyle(t))}
function deltaEndsWith(t,e){let n="";for(let r=t.ops.length-1;r>=0&&n.length<e.length;--r){
let e=t.ops[r];if("string"!=typeof e.insert)break;n=e.insert+n}return n.slice(-1*e.length)===e}
function clipboard_isLine(t){if(0===t.childNodes.length)return!1;let e=computeStyle(t)
;return["block","list-item"].indexOf(e.display)>-1}function matchAlias(t,e,n){
return applyFormat(n,t,!0)}function matchNewline(t,e){
return deltaEndsWith(e,"\n")||(clipboard_isLine(t)||e.length()>0&&t.nextSibling&&clipboard_isLine(t.nextSibling))&&e.insert("\n"),
e}function matchSpacing(t,e){
if(clipboard_isLine(t)&&null!=t.nextElementSibling&&!deltaEndsWith(e,"\n\n")){
let n=t.offsetHeight+parseFloat(computeStyle(t).marginTop)+parseFloat(computeStyle(t).marginBottom)
;t.nextElementSibling.offsetTop>t.offsetTop+1.5*n&&e.insert("\n")}return e}
function childElements(t){const e=[]
;for(let n=t.firstElementChild;n;n=n.nextElementSibling)e.push(n);return e}
clipboard_Clipboard.DEFAULTS={matchers:[],matchVisual:!0};class history_History extends O{
constructor(t,e){super(t,e),this.lastRecorded=0,this.ignoreChange=!1,this.clear(),
this.quill.on(quill_Quill.events.EDITOR_CHANGE,(t,e,n,r)=>{
t!==quill_Quill.events.TEXT_CHANGE||this.ignoreChange||(this.options.userOnly&&r!==quill_Quill.sources.USER?this.transform(e):this.record(e,n))
}),this.quill.keyboard.addBinding({key:"Z",shortKey:!0
},this.undo.bind(this)),this.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0
},this.redo.bind(this)),/Win/i.test(navigator.platform)&&this.quill.keyboard.addBinding({key:"Y",
shortKey:!0},this.redo.bind(this))}change(t,e){if(0===this.stack[t].length)return
;let n=this.stack[t].pop();this.stack[e].push(n),this.lastRecorded=0,this.ignoreChange=!0,
this.quill.updateContents(n[t],quill_Quill.sources.USER),this.ignoreChange=!1
;let r=function getLastChangeIndex(t){let e=t.reduce((function(t,e){return t+=e.delete||0
}),0),n=t.length()-e;(function endsWithNewlineChange(t){let e=t.ops[t.ops.length-1]
;if(null==e)return!1;if(null!=e.insert)return"string"==typeof e.insert&&e.insert.endsWith("\n")
;if(null!=e.attributes)return Object.keys(e.attributes).some((function(t){
return null!=i.a.query(t,i.a.Scope.BLOCK)}));return!1})(t)&&(n-=1);return n}(n[t])
;this.quill.setSelection(r)}clear(){this.stack={undo:[],redo:[]}}cutoff(){this.lastRecorded=0}
record(t,e){if(0===t.ops.length)return;this.stack.redo=[]
;let n=this.quill.getContents().diff(e),r=Date.now()
;if(this.lastRecorded+this.options.delay>r&&this.stack.undo.length>0){let e=this.stack.undo.pop()
;n=n.compose(e.undo),t=e.redo.compose(t)}else this.lastRecorded=r;this.stack.undo.push({redo:t,
undo:n}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}redo(){
this.change("redo","undo")}transform(t){this.stack.undo.forEach((function(e){
e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)})),this.stack.redo.forEach((function(e){
e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)}))}undo(){this.change("undo","redo")}}
history_History.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1};let J=A("quill:keyboard")
;const tt=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey";class keyboard_Keyboard extends O{
static match(t,e){
return e=normalize(e),!["altKey","ctrlKey","metaKey","shiftKey"].some((function(n){
return!!e[n]!==t[n]&&null!==e[n]}))&&e.key===(t.which||t.keyCode)}constructor(t,e){super(t,e),
this.bindings={},Object.keys(this.options.bindings).forEach(e=>{
("list autofill"!==e||null==t.scroll.whitelist||t.scroll.whitelist.list)&&this.options.bindings[e]&&this.addBinding(this.options.bindings[e])
}),this.addBinding({key:keyboard_Keyboard.keys.ENTER,shiftKey:null},handleEnter),this.addBinding({
key:keyboard_Keyboard.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},(function(){})),
/Firefox/i.test(navigator.userAgent)?(this.addBinding({key:keyboard_Keyboard.keys.BACKSPACE},{
collapsed:!0},handleBackspace),this.addBinding({key:keyboard_Keyboard.keys.DELETE},{collapsed:!0
},handleDelete)):(this.addBinding({key:keyboard_Keyboard.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/
},handleBackspace),this.addBinding({key:keyboard_Keyboard.keys.DELETE},{collapsed:!0,suffix:/^.?$/
},handleDelete)),this.addBinding({key:keyboard_Keyboard.keys.BACKSPACE},{collapsed:!1
},handleDeleteRange),this.addBinding({key:keyboard_Keyboard.keys.DELETE},{collapsed:!1
},handleDeleteRange),this.addBinding({key:keyboard_Keyboard.keys.BACKSPACE,altKey:null,ctrlKey:null,
metaKey:null,shiftKey:null},{collapsed:!0,offset:0},handleBackspace),this.listen()}
addBinding(t,e={},n={}){let r=normalize(t)
;if(null==r||null==r.key)return J.warn("Attempted to add invalid keyboard binding",r)
;"function"==typeof e&&(e={handler:e}),"function"==typeof n&&(n={handler:n}),r=c()(r,e,n),
this.bindings[r.key]=this.bindings[r.key]||[],this.bindings[r.key].push(r)}listen(){
this.quill.root.addEventListener("keydown",t=>{if(t.defaultPrevented)return
;let e=t.which||t.keyCode,n=(this.bindings[e]||[]).filter((function(e){
return keyboard_Keyboard.match(t,e)}));if(0===n.length)return;let r=this.quill.getSelection()
;if(null==r||!this.quill.hasFocus())return
;let[s,o]=this.quill.getLine(r.index),[l,a]=this.quill.getLeaf(r.index),[u,c]=0===r.length?[l,a]:this.quill.getLeaf(r.index+r.length),h=l instanceof i.a.Text?l.value().slice(0,a):"",d=u instanceof i.a.Text?u.value().slice(c):"",f={
collapsed:0===r.length,empty:0===r.length&&s.length()<=1,format:this.quill.getFormat(r),offset:o,
prefix:h,suffix:d};n.some(t=>{if(null!=t.collapsed&&t.collapsed!==f.collapsed)return!1
;if(null!=t.empty&&t.empty!==f.empty)return!1;if(null!=t.offset&&t.offset!==f.offset)return!1
;if(Array.isArray(t.format)){if(t.format.every((function(t){return null==f.format[t]})))return!1
}else if("object"==typeof t.format&&!Object.keys(t.format).every((function(e){
return!0===t.format[e]?null!=f.format[e]:!1===t.format[e]?null==f.format[e]:_()(t.format[e],f.format[e])
})))return!1
;return!(null!=t.prefix&&!t.prefix.test(f.prefix))&&(!(null!=t.suffix&&!t.suffix.test(f.suffix))&&!0!==t.handler.call(this,r,f))
})&&t.preventDefault()})}}function makeEmbedArrowHandler(t,e){
const n=t===keyboard_Keyboard.keys.LEFT?"prefix":"suffix";return{key:t,shiftKey:e,altKey:null,
[n]:/^$/,handler:function(n){let r=n.index;t===keyboard_Keyboard.keys.RIGHT&&(r+=n.length+1)
;const[s]=this.quill.getLeaf(r)
;return!(s instanceof i.a.Embed)||(t===keyboard_Keyboard.keys.LEFT?e?this.quill.setSelection(n.index-1,n.length+1,quill_Quill.sources.USER):this.quill.setSelection(n.index-1,quill_Quill.sources.USER):e?this.quill.setSelection(n.index,n.length+1,quill_Quill.sources.USER):this.quill.setSelection(n.index+n.length+1,quill_Quill.sources.USER),
!1)}}}function handleBackspace(t,e){if(0===t.index||this.quill.getLength()<=1)return
;let[n]=this.quill.getLine(t.index),r={};if(0===e.offset){let[e]=this.quill.getLine(t.index-1)
;if(null!=e&&e.length()>1){let e=n.formats(),i=this.quill.getFormat(t.index-1,1)
;r=a.a.attributes.diff(e,i)||{}}}let i=/[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)?2:1
;this.quill.deleteText(t.index-i,i,quill_Quill.sources.USER),
Object.keys(r).length>0&&this.quill.formatLine(t.index-i,i,r,quill_Quill.sources.USER),
this.quill.focus()}function handleDelete(t,e){
let n=/^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)?2:1
;if(t.index>=this.quill.getLength()-n)return;let r={},i=0,[s]=this.quill.getLine(t.index)
;if(e.offset>=s.length()-1){let[e]=this.quill.getLine(t.index+1);if(e){
let n=s.formats(),o=this.quill.getFormat(t.index,1);r=a.a.attributes.diff(n,o)||{},i=e.length()}}
this.quill.deleteText(t.index,n,quill_Quill.sources.USER),
Object.keys(r).length>0&&this.quill.formatLine(t.index+i-1,n,r,quill_Quill.sources.USER)}
function handleDeleteRange(t){let e=this.quill.getLines(t),n={};if(e.length>1){
let t=e[0].formats(),r=e[e.length-1].formats();n=a.a.attributes.diff(r,t)||{}}
this.quill.deleteText(t,quill_Quill.sources.USER),
Object.keys(n).length>0&&this.quill.formatLine(t.index,1,n,quill_Quill.sources.USER),
this.quill.setSelection(t.index,quill_Quill.sources.SILENT),this.quill.focus()}
function handleEnter(t,e){t.length>0&&this.quill.scroll.deleteAt(t.index,t.length)
;let n=Object.keys(e.format).reduce((function(t,n){
return i.a.query(n,i.a.Scope.BLOCK)&&!Array.isArray(e.format[n])&&(t[n]=e.format[n]),t}),{})
;this.quill.insertText(t.index,"\n",n,quill_Quill.sources.USER),
this.quill.setSelection(t.index+1,quill_Quill.sources.SILENT),this.quill.focus(),
Object.keys(e.format).forEach(t=>{
null==n[t]&&(Array.isArray(e.format[t])||"link"!==t&&this.quill.format(t,e.format[t],quill_Quill.sources.USER))
})}function makeCodeBlockHandler(t){return{key:keyboard_Keyboard.keys.TAB,shiftKey:!t,format:{
"code-block":!0},handler:function(e){
let n=i.a.query("code-block"),r=e.index,s=e.length,[o,l]=this.quill.scroll.descendant(n,r)
;if(null==o)return
;let a=this.quill.getIndex(o),u=o.newlineIndex(l,!0)+1,c=o.newlineIndex(a+l+s),h=o.domNode.textContent.slice(u,c).split("\n")
;l=0,h.forEach((e,i)=>{
t?(o.insertAt(u+l,n.TAB),l+=n.TAB.length,0===i?r+=n.TAB.length:s+=n.TAB.length):e.startsWith(n.TAB)&&(o.deleteAt(u+l,n.TAB.length),
l-=n.TAB.length,0===i?r-=n.TAB.length:s-=n.TAB.length),l+=e.length+1
}),this.quill.update(quill_Quill.sources.USER),
this.quill.setSelection(r,s,quill_Quill.sources.SILENT)}}}function makeFormatHandler(t,e=null){
return{key:e||t[0].toUpperCase(),shortKey:!0,handler:function(e,n){
this.quill.format(t,!n.format[t],quill_Quill.sources.USER)}}}function normalize(t){
if("string"==typeof t||"number"==typeof t)return normalize({key:t})
;if("object"==typeof t&&(t=b()(t,!1)),
"string"==typeof t.key)if(null!=keyboard_Keyboard.keys[t.key.toUpperCase()])t.key=keyboard_Keyboard.keys[t.key.toUpperCase()];else{
if(1!==t.key.length)return null;t.key=t.key.toUpperCase().charCodeAt(0)}
return t.shortKey&&(t[tt]=t.shortKey,delete t.shortKey),t}keyboard_Keyboard.keys={BACKSPACE:8,TAB:9,
ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},keyboard_Keyboard.DEFAULTS={bindings:{
marked:makeFormatHandler("marked"),bold:makeFormatHandler("bold"),
italic:makeFormatHandler("italic"),strike:makeFormatHandler("strike"),
code:makeFormatHandler("code","J"),underline:makeFormatHandler("underline"),indent:{
key:keyboard_Keyboard.keys.TAB,format:["blockquote","indent","list"],handler:function(t,e){
if(e.collapsed&&0!==e.offset)return!0;this.quill.format("indent","+1",quill_Quill.sources.USER)}},
outdent:{key:keyboard_Keyboard.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],
handler:function(t,e){if(e.collapsed&&0!==e.offset)return!0
;this.quill.format("indent","-1",quill_Quill.sources.USER)}},"outdent backspace":{
key:keyboard_Keyboard.keys.BACKSPACE,collapsed:!0,shiftKey:null,metaKey:null,ctrlKey:null,
altKey:null,format:["indent","list"],offset:0,handler:function(t,e){
null!=e.format.indent?this.quill.format("indent","-1",quill_Quill.sources.USER):null!=e.format.list&&this.quill.format("list",!1,quill_Quill.sources.USER)
}},"indent code-block":makeCodeBlockHandler(!0),"outdent code-block":makeCodeBlockHandler(!1),
"remove tab":{key:keyboard_Keyboard.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,
handler:function(t){this.quill.deleteText(t.index-1,1,quill_Quill.sources.USER)}},tab:{
key:keyboard_Keyboard.keys.TAB,handler:function(t){this.quill.history.cutoff()
;let e=(new o.a).retain(t.index).delete(t.length).insert("\t")
;this.quill.updateContents(e,quill_Quill.sources.USER),this.quill.history.cutoff(),
this.quill.setSelection(t.index+1,quill_Quill.sources.SILENT)}},"list empty enter":{
key:keyboard_Keyboard.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(t,e){
this.quill.format("list",!1,quill_Quill.sources.USER),
e.format.indent&&this.quill.format("indent",!1,quill_Quill.sources.USER)}},"checklist enter":{
key:keyboard_Keyboard.keys.ENTER,collapsed:!0,format:{list:"checked"},handler:function(t){
let[e,n]=this.quill.getLine(t.index),r=c()({},e.formats(),{list:"checked"
}),i=(new o.a).retain(t.index).insert("\n",r).retain(e.length()-n-1).retain(1,{list:"unchecked"})
;this.quill.updateContents(i,quill_Quill.sources.USER),
this.quill.setSelection(t.index+1,quill_Quill.sources.SILENT),this.quill.scrollIntoView()}},
"header enter":{key:keyboard_Keyboard.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,
handler:function(t,e){
let[n,r]=this.quill.getLine(t.index),i=(new o.a).retain(t.index).insert("\n",e.format).retain(n.length()-r-1).retain(1,{
header:null})
;this.quill.updateContents(i,quill_Quill.sources.USER),this.quill.setSelection(t.index+1,quill_Quill.sources.SILENT),
this.quill.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},
prefix:/^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,handler:function(t,e){
let n,r=e.prefix.length,[i,s]=this.quill.getLine(t.index);if(s>r)return!0;switch(e.prefix.trim()){
case"[]":case"[ ]":n="unchecked";break;case"[x]":n="checked";break;case"-":case"*":n="bullet";break
;default:n="ordered"}this.quill.insertText(t.index," ",quill_Quill.sources.USER),
this.quill.history.cutoff()
;let l=(new o.a).retain(t.index-s).delete(r+1).retain(i.length()-2-s).retain(1,{list:n})
;this.quill.updateContents(l,quill_Quill.sources.USER),this.quill.history.cutoff(),
this.quill.setSelection(t.index-r,quill_Quill.sources.SILENT)}},"code exit":{
key:keyboard_Keyboard.keys.ENTER,collapsed:!0,format:["code-block"],prefix:/\n\n$/,suffix:/^\s+$/,
handler:function(t){
const[e,n]=this.quill.getLine(t.index),r=(new o.a).retain(t.index+e.length()-n-2).retain(1,{
"code-block":null}).delete(1);this.quill.updateContents(r,quill_Quill.sources.USER)}},
"embed left":makeEmbedArrowHandler(keyboard_Keyboard.keys.LEFT,!1),
"embed left shift":makeEmbedArrowHandler(keyboard_Keyboard.keys.LEFT,!0),
"embed right":makeEmbedArrowHandler(keyboard_Keyboard.keys.RIGHT,!1),
"embed right shift":makeEmbedArrowHandler(keyboard_Keyboard.keys.RIGHT,!0)}},quill_Quill.register({
"blots/block":block_Block,"blots/block/embed":block_BlockEmbed,"blots/break":h,"blots/container":q,
"blots/cursor":m,"blots/embed":j,"blots/inline":f,"blots/scroll":R,"blots/text":text_TextBlot,
"modules/clipboard":clipboard_Clipboard,"modules/history":history_History,
"modules/keyboard":keyboard_Keyboard}),i.a.register(block_Block,h,m,f,R,text_TextBlot)
;var et=quill_Quill;class list_ListItem extends block_Block{static formats(t){
return t.tagName===this.tagName?void 0:super.formats(t)}format(t,e){
t!==list_List.blotName||e?super.format(t,e):this.replaceWith(i.a.create(this.statics.scope))}
remove(){null==this.prev&&null==this.next?this.parent.remove():super.remove()}replaceWith(t,e){
return this.parent.isolate(this.offset(this.parent),this.length()),
t===this.parent.statics.blotName?(this.parent.replaceWith(t,e),this):(this.parent.unwrap(),
super.replaceWith(t,e))}}list_ListItem.blotName="list-item",list_ListItem.tagName="LI"
;class list_List extends q{static create(t){let e="ordered"===t?"OL":"UL",n=super.create(e)
;return"checked"!==t&&"unchecked"!==t||n.setAttribute("data-checked","checked"===t),n}
static formats(t){
return"OL"===t.tagName?"ordered":"UL"===t.tagName?t.hasAttribute("data-checked")?"true"===t.getAttribute("data-checked")?"checked":"unchecked":"bullet":void 0
}constructor(t){super(t);const e=e=>{if(e.target.parentNode!==t)return
;let n=this.statics.formats(t),r=i.a.find(e.target)
;"checked"===n?r.format("list","unchecked"):"unchecked"===n&&r.format("list","checked")}
;t.addEventListener("touchstart",e),t.addEventListener("mousedown",e)}format(t,e){
this.children.length>0&&this.children.tail.format(t,e)}formats(){return{
[this.statics.blotName]:this.statics.formats(this.domNode)}}insertBefore(t,e){
if(t instanceof list_ListItem)super.insertBefore(t,e);else{
let n=null==e?this.length():e.offset(this),r=this.split(n);r.parent.insertBefore(t,r)}}optimize(t){
super.optimize(t);let e=this.next
;null!=e&&e.prev===this&&e.statics.blotName===this.statics.blotName&&e.domNode.tagName===this.domNode.tagName&&e.domNode.getAttribute("data-checked")===this.domNode.getAttribute("data-checked")&&(e.moveChildren(this),
e.remove())}replace(t){if(t.statics.blotName!==this.statics.blotName){
let e=i.a.create(this.statics.defaultChild);t.moveChildren(e),this.appendChild(e)}super.replace(t)}}
list_List.blotName="list",list_List.scope=i.a.Scope.BLOCK_BLOT,list_List.tagName=["OL","UL"],
list_List.defaultChild="list-item",list_List.allowedChildren=[list_ListItem]
;class marked_Marked extends f{}marked_Marked.blotName="marked",marked_Marked.tagName="EM"
;var nt=marked_Marked;class bold_Bold extends f{}bold_Bold.blotName="bold",bold_Bold.tagName="B"
;var rt=bold_Bold;class italic_Italic extends f{}italic_Italic.blotName="italic",
italic_Italic.tagName="I";var it=italic_Italic;class strike_Strike extends f{}
strike_Strike.blotName="strike",strike_Strike.tagName="S";var st=strike_Strike;et.register({
"formats/marked":nt,"formats/bold":rt,"formats/italic":it,"formats/strike":st,
"formats/code":code_Code,"formats/list":list_List,"formats/list/item":list_ListItem,
"formats/code-block":code_CodeBlock},!0);e.default=et}]).default}));
//# sourceMappingURL=quill.js.map