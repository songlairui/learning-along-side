(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{188:function(t,r,e){var n=e(53),i=e(94),a=e(93),o=e(92),c=e(191);t.exports=function(t,r){var e=1==t,s=2==t,u=3==t,l=4==t,v=6==t,f=5==t||v,h=r||c;return function(r,c,p){for(var d,g,_=a(r),b=i(_),m=n(c,p,3),x=o(b.length),y=0,w=e?h(r,x):s?h(r,0):void 0;x>y;y++)if((f||y in b)&&(g=m(d=b[y],y,_),t))if(e)w[y]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return y;case 2:w.push(d)}else if(l)return!1;return v?-1:u||l?l:w}}},189:function(t,r,e){"use strict";var n=e(17);t.exports=function(t,r){return!!t&&n((function(){r?t.call(null,(function(){}),1):t.call(null)}))}},190:function(t,r,e){var n=e(51);t.exports=Array.isArray||function(t){return"Array"==n(t)}},191:function(t,r,e){var n=e(192);t.exports=function(t,r){return new(n(t))(r)}},192:function(t,r,e){var n=e(14),i=e(190),a=e(13)("species");t.exports=function(t){var r;return i(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!i(r.prototype)||(r=void 0),n(r)&&null===(r=r[a])&&(r=void 0)),void 0===r?Array:r}},193:function(t,r,e){"use strict";var n,i,a=e(207),o=RegExp.prototype.exec,c=String.prototype.replace,s=o,u=(n=/a/,i=/b*/g,o.call(n,"a"),o.call(i,"a"),0!==n.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(u||l)&&(s=function(t){var r,e,n,i,s=this;return l&&(e=new RegExp("^"+s.source+"$(?!\\s)",a.call(s))),u&&(r=s.lastIndex),n=o.call(s,t),u&&n&&(s.lastIndex=s.global?n.index+n[0].length:r),l&&n&&n.length>1&&c.call(n[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(n[i]=void 0)})),n}),t.exports=s},194:function(t,r,e){"use strict";var n=e(50),i=e(188)(1);n(n.P+n.F*!e(189)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},195:function(t,r,e){var n=e(14),i=e(51),a=e(13)("match");t.exports=function(t){var r;return n(t)&&(void 0!==(r=t[a])?!!r:"RegExp"==i(t))}},196:function(t,r,e){"use strict";var n=e(102)(!0);t.exports=function(t,r,e){return r+(e?n(t,r).length:1)}},197:function(t,r,e){"use strict";var n=e(212),i=RegExp.prototype.exec;t.exports=function(t,r){var e=t.exec;if("function"==typeof e){var a=e.call(t,r);if("object"!=typeof a)throw new TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,r)}},198:function(t,r,e){"use strict";e(213);var n=e(23),i=e(9),a=e(17),o=e(19),c=e(13),s=e(193),u=c("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),v=function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,r,e){var f=c(t),h=!a((function(){var r={};return r[f]=function(){return 7},7!=""[t](r)})),p=h?!a((function(){var r=!1,e=/a/;return e.exec=function(){return r=!0,null},"split"===t&&(e.constructor={},e.constructor[u]=function(){return e}),e[f](""),!r})):void 0;if(!h||!p||"replace"===t&&!l||"split"===t&&!v){var d=/./[f],g=e(o,f,""[t],(function(t,r,e,n,i){return r.exec===s?h&&!i?{done:!0,value:d.call(r,e,n)}:{done:!0,value:t.call(e,r,n)}:{done:!1}})),_=g[0],b=g[1];n(String.prototype,t,_),i(RegExp.prototype,f,2==r?function(t,r){return b.call(t,this,r)}:function(t){return b.call(t,this)})}}},200:function(t,r,e){"use strict";e.d(r,"a",(function(){return c}));var n=e(202),i=e.n(n),a=e(59),o=e.n(a);function c(t){if(o()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return i()(t)}},201:function(t,r,e){"use strict";var n=e(58),i=e.n(n);var a=e(200);function o(t){return function(t){if(i()(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}e.d(r,"a",(function(){return o}))},202:function(t,r,e){t.exports=e(203)},203:function(t,r,e){e(54),e(204),t.exports=e(7).Array.from},204:function(t,r,e){"use strict";var n=e(96),i=e(52),a=e(100),o=e(208),c=e(209),s=e(98),u=e(205),l=e(99);i(i.S+i.F*!e(210)((function(t){Array.from(t)})),"Array",{from:function(t){var r,e,i,v,f=a(t),h="function"==typeof this?this:Array,p=arguments.length,d=p>1?arguments[1]:void 0,g=void 0!==d,_=0,b=l(f);if(g&&(d=n(d,p>2?arguments[2]:void 0,2)),null==b||h==Array&&c(b))for(e=new h(r=s(f.length));r>_;_++)u(e,_,g?d(f[_],_):f[_]);else for(v=b.call(f),e=new h;!(i=v.next()).done;_++)u(e,_,g?o(v,d,[i.value,_],!0):i.value);return e.length=_,e}})},205:function(t,r,e){"use strict";var n=e(32),i=e(56);t.exports=function(t,r,e){r in t?n.f(t,r,i(0,e)):t[r]=e}},207:function(t,r,e){"use strict";var n=e(18);t.exports=function(){var t=n(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},211:function(t,r,e){"use strict";var n=e(18),i=e(93),a=e(92),o=e(33),c=e(196),s=e(197),u=Math.max,l=Math.min,v=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;e(198)("replace",2,(function(t,r,e,p){return[function(n,i){var a=t(this),o=null==n?void 0:n[r];return void 0!==o?o.call(n,a,i):e.call(String(a),n,i)},function(t,r){var i=p(e,t,this,r);if(i.done)return i.value;var v=n(t),f=String(this),h="function"==typeof r;h||(r=String(r));var g=v.global;if(g){var _=v.unicode;v.lastIndex=0}for(var b=[];;){var m=s(v,f);if(null===m)break;if(b.push(m),!g)break;""===String(m[0])&&(v.lastIndex=c(f,a(v.lastIndex),_))}for(var x,y="",w=0,k=0;k<b.length;k++){m=b[k];for(var j=String(m[0]),A=u(l(o(m.index),f.length),0),O=[],R=1;R<m.length;R++)O.push(void 0===(x=m[R])?x:String(x));var C=m.groups;if(h){var I=[j].concat(O,A,f);void 0!==C&&I.push(C);var E=String(r.apply(void 0,I))}else E=d(j,f,A,O,C,r);A>=w&&(y+=f.slice(w,A)+E,w=A+j.length)}return y+f.slice(w)}];function d(t,r,n,a,o,c){var s=n+t.length,u=a.length,l=h;return void 0!==o&&(o=i(o),l=f),e.call(c,l,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(s);case"<":c=o[i.slice(1,-1)];break;default:var l=+i;if(0===l)return e;if(l>u){var f=v(l/10);return 0===f?e:f<=u?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):e}c=a[l-1]}return void 0===c?"":c}))}}))},212:function(t,r,e){var n=e(51),i=e(13)("toStringTag"),a="Arguments"==n(function(){return arguments}());t.exports=function(t){var r,e,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?e:a?n(r):"Object"==(o=n(r))&&"function"==typeof r.callee?"Arguments":o}},213:function(t,r,e){"use strict";var n=e(193);e(50)({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},214:function(t,r,e){"use strict";var n=e(50),i=e(188)(5),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),n(n.P+n.F*a,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(97)("find")},221:function(t,r,e){"use strict";e(105)("trim",(function(t){return function(){return t(this,3)}}))},232:function(t,r,e){"use strict";var n=e(195),i=e(18),a=e(241),o=e(196),c=e(92),s=e(197),u=e(193),l=e(17),v=Math.min,f=[].push,h=!l((function(){RegExp(4294967295,"y")}));e(198)("split",2,(function(t,r,e,l){var p;return p="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var i=String(this);if(void 0===t&&0===r)return[];if(!n(t))return e.call(i,t,r);for(var a,o,c,s=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,h=void 0===r?4294967295:r>>>0,p=new RegExp(t.source,l+"g");(a=u.call(p,i))&&!((o=p.lastIndex)>v&&(s.push(i.slice(v,a.index)),a.length>1&&a.index<i.length&&f.apply(s,a.slice(1)),c=a[0].length,v=o,s.length>=h));)p.lastIndex===a.index&&p.lastIndex++;return v===i.length?!c&&p.test("")||s.push(""):s.push(i.slice(v)),s.length>h?s.slice(0,h):s}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,n){var i=t(this),a=null==e?void 0:e[r];return void 0!==a?a.call(e,i,n):p.call(String(i),e,n)},function(t,r){var n=l(p,t,this,r,p!==e);if(n.done)return n.value;var u=i(t),f=String(this),d=a(u,RegExp),g=u.unicode,_=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(h?"y":"g"),b=new d(h?u:"^(?:"+u.source+")",_),m=void 0===r?4294967295:r>>>0;if(0===m)return[];if(0===f.length)return null===s(b,f)?[f]:[];for(var x=0,y=0,w=[];y<f.length;){b.lastIndex=h?y:0;var k,j=s(b,h?f:f.slice(y));if(null===j||(k=v(c(b.lastIndex+(h?0:y)),f.length))===x)y=o(f,y,g);else{if(w.push(f.slice(x,y)),w.length===m)return w;for(var A=1;A<=j.length-1;A++)if(w.push(j[A]),w.length===m)return w;y=x=k}}return w.push(f.slice(x)),w}]}))},240:function(t,r,e){"use strict";var n=e(50),i=e(21),a=e(33),o=e(92),c=[].lastIndexOf,s=!!c&&1/[1].lastIndexOf(1,-0)<0;n(n.P+n.F*(s||!e(189)(c)),"Array",{lastIndexOf:function(t){if(s)return c.apply(this,arguments)||0;var r=i(this),e=o(r.length),n=e-1;for(arguments.length>1&&(n=Math.min(n,a(arguments[1]))),n<0&&(n=e+n);n>=0;n--)if(n in r&&r[n]===t)return n||0;return-1}})},241:function(t,r,e){var n=e(18),i=e(101),a=e(13)("species");t.exports=function(t,r){var e,o=n(t).constructor;return void 0===o||null==(e=n(o)[a])?r:i(e)}},242:function(t,r,e){},243:function(t,r,e){"use strict";e.d(r,"c",(function(){return i})),e.d(r,"d",(function(){return o})),e.d(r,"f",(function(){return c})),e.d(r,"e",(function(){return s})),e.d(r,"b",(function(){return u})),e.d(r,"a",(function(){return l}));e(194),e(211);function n(t){return this.splice(0,t)}function i(t){for(var r=[],e=1,i=n.call(t,e);i.length;)r.push(i),e*=2,i=n.call(t,e);return r}var a=/([^-])([A-Z])/g,o=function(t){return t.replace(a,"$1-$2").replace(a,"$1-$2").toLowerCase()};function c(t){return Math.ceil((r=t+2,Math.log(r)/Math.log(2)))-1;var r}function s(t){var r=c(t);return[r,t+1-Math.pow(2,r)]}function u(t){return Math.floor((t-1)/2)}function l(t){return[1,2].map((function(r){return 2*t+r}))}},264:function(t,r,e){"use strict";var n=e(50),i=e(265);n(n.P+n.F*!e(189)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},265:function(t,r,e){var n=e(101),i=e(93),a=e(94),o=e(92);t.exports=function(t,r,e,c,s){n(r);var u=i(t),l=a(u),v=o(u.length),f=s?v-1:0,h=s?-1:1;if(e<2)for(;;){if(f in l){c=l[f],f+=h;break}if(f+=h,s?f<0:v<=f)throw TypeError("Reduce of empty array with no initial value")}for(;s?f>=0:v>f;f+=h)f in l&&(c=r(c,l[f],f,u));return c}},266:function(t,r,e){},350:function(t,r,e){"use strict";var n=e(266);e.n(n).a},407:function(t,r,e){"use strict";e.r(r);e(214),e(222);var n,i,a,o,c,s,u=e(223),l=e(201),v=e(57),f=(e(240),e(194),e(264),e(232),e(221),e(242),e(243)),h="0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20",p={name:"ordered",data:function(){return{arr:h,idx2ab:f.e,lineId:f.f,toAdd:"",toRemove:"",loading:{compareAll:!1,poll:!1}}},computed:{array:function(){try{var t=this.arr.trim();return t?t.split(/[\s,\-]+/):[]}catch(t){return[]}},heap:function(){return Object(f.c)(this.array)},height:function(){return 0===this.array.length?"-":Object(f.f)(this.array.length-1)+1},bitWidth:function(){return 0===this.array.length?"-":Math.floor(1e5/Math.pow(2,this.height-1))/1e3},arrObj:function(){var t=this;return 0===this.array.length?[]:this.array.map((function(r,e){var n=-1===t.array.slice(0,e).lastIndexOf(r)?r:"".concat(r,"-").concat(e),i=Object(f.e)(e),a=Object(v.a)(i,2),o=a[0],c=a[1],s=Math.pow(2,t.height-(o+1))-1,u=s/2,l=0===c,h=0===Object(f.e)(e+1)[1],p=[{key:n,value:r,width:1,lineScale:(s+.8)/2*(c%2==0?1:-1),oriIdx:e},{value:" ",key:"".concat(e,"-r"),width:h?u:s,blank:!0}];return l&&p.unshift({value:" ",key:"".concat(e,"-l"),width:u,blank:!0}),p})).reduce((function(t,r){return t.concat(r)}),[])}},methods:{switchAB:function(t,r){var e=this,n=Object(l.a)(this.array),i=n[t],a=n[r];n[t]=a,n[r]=i,this.$nextTick((function(){e.arr=n.join(" ")}))},switchWithParent:function(t){var r=Object(f.b)(t);r<0||this.switchAB(r,t)},shuffle:function(){this.arr="0"===this.arr[0]?"18 12 11 3 15 5 2 10 4 8 20 7 16 14 1 9 19 6 13 17 0":h},addNext:(s=Object(u.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.arr+=" ".concat(""===this.toAdd?this.array.length:this.toAdd),t.next=3,new Promise((function(t){return setTimeout(t,500)}));case 3:return t.next=5,this.up();case 5:case"end":return t.stop()}}),t,this)}))),function(){return s.apply(this,arguments)}),up:(c=Object(u.a)(regeneratorRuntime.mark((function t(){var r,e,n,i,a,o,c,s=this,u=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=u.length>0&&void 0!==u[0]?u[0]:this.array.length-1,e=r,n=Object(f.b)(r);case 3:if(!(n>=0)){t.next=13;break}if(i=[e,n].map((function(t){return s.array[t]})),a=Object(v.a)(i,2),o=a[0],c=a[1],!(+o<+c)){t.next=9;break}return this.switchAB(e,n),t.next=9,new Promise((function(t){return setTimeout(t,500)}));case 9:e=n,n=Object(f.b)(e),t.next=3;break;case 13:case"end":return t.stop()}}),t,this)}))),function(){return c.apply(this,arguments)}),down:(o=Object(u.a)(regeneratorRuntime.mark((function t(){var r,e,n,i,a,o,c,s,u,l,h,p,d,g,_=this,b=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=b.length>0&&void 0!==b[0]?b[0]:0,e=this.array.length-1,n=r,i=null,a=null;case 5:if(o=Object(f.a)(n),c=Object(v.a)(o,2),s=c[0],u=c[1],!(s>e)){t.next=9;break}return t.abrupt("return");case 9:if(l=[n,s,u].map((function(t){return+_.array[t]})),h=Object(v.a)(l,3),p=h[0],d=h[1],g=h[2],u<=e&&d>=g?(i=u,a=g):(i=s,a=d),!(p<=a)){t.next=13;break}return t.abrupt("return");case 13:return this.switchAB(n,i),t.next=16,new Promise((function(t){return setTimeout(t,500)}));case 16:n=i,t.next=5;break;case 19:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),compareAll:(a=Object(u.a)(regeneratorRuntime.mark((function t(){var r,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loading.compareAll=!0,r=this.array.length-1;case 2:if(!(r>0)){t.next=9;break}return e=Object(f.b)(r),t.next=6,this.down(e);case 6:r--,t.next=2;break;case 9:this.loading.compareAll=!1;case 10:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)}),poll:(i=Object(u.a)(regeneratorRuntime.mark((function t(){var r,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading.poll=!0,r=Object(l.a)(this.array),e=r[0],r[0]=r.pop(),this.arr=r.join(" "),t.next=7,new Promise((function(t){return setTimeout(t,500)}));case 7:return t.next=9,this.down(0);case 9:return this.loading.poll=!1,t.abrupt("return",e);case 11:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)}),find:function(t){return this.array.reduce((function(r,e,n){return r.concat(e===t?[n]:[])}),[])},remove:(n=Object(u.a)(regeneratorRuntime.mark((function t(r){var e,n,i,a,o,c,s,u,h,p,d,g,_=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:""===r&&(r=this.array[0]),e=this.find(r);case 2:if(!e.length){t.next=29;break}if((n=e.pop())!==this.array.length-1){t.next=8;break}this.arr=this.array.slice(0,this.array.length-1).join(" "),t.next=24;break;case 8:return(i=Object(l.a)(this.array))[n]=i.pop(),this.arr=i.join(" "),t.next=13,new Promise((function(t){return setTimeout(t,500)}));case 13:if(a=Object(f.b)(n),o=Object(f.a)(n),c=Object(v.a)(o,1),s=c[0],u=[a,n].map((function(t){return+_.array[t]})),h=Object(v.a)(u,2),p=h[0],d=h[1],g=this.array.length,!(s<=g&&(a<0||p<d))){t.next=22;break}return t.next=20,this.down(n);case 20:t.next=24;break;case 22:return t.next=24,this.up(n);case 24:return t.next=26,new Promise((function(t){return setTimeout(t,500)}));case 26:e=this.find(r),t.next=2;break;case 29:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})}},d=(e(350),e(3)),g=Object(d.a)(p,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"最小堆-动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最小堆-动画"}},[t._v("#")]),t._v(" 最小堆 (动画)")]),t._v(" "),e("blockquote",[e("p",[t._v("根据上一节结论, 一个堆数据结构的各个参数都是可计算的"),e("br"),t._v("\n可直接计算的部分, 支撑了动画效果实现")])]),t._v(" "),e("h2",{attrs:{id:"play-ground"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#play-ground"}},[t._v("#")]),t._v(" Play Ground")]),t._v(" "),e("blockquote",[e("p",[t._v("点击连接线,对换两节点位置 (+过渡动画)")])]),t._v(" "),e("div",{staticClass:"preview"},[e("transition-group",{attrs:{name:"list-complete",tag:"div"}},t._l(t.arrObj,(function(r,n){return e("div",{key:r.key,staticClass:"list-complete-item",class:{blank:r.blank},style:{width:t.bitWidth*r.width+"%"}},[e("div",{staticClass:"item-inner"},[t._v(t._s(r.value))]),t._v(" "),!r.blank&&r.oriIdx>0?e("span",{staticClass:"connect-line",style:{transform:"scaleX("+r.lineScale+")"},on:{click:function(e){return t.switchWithParent(r.oriIdx)}}}):t._e()])})),0)],1),t._v(" "),e("p",[t._v(t._s(t.arr))]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("可直接计算的特征")]),t._v(" "),e("p",[t._v("数组长度: "+t._s(t.array.length)),e("br"),t._v("\n堆的高度: "+t._s(t.height)),e("br"),t._v("\n单位宽度: "+t._s(t.bitWidth)+" %\n每个节点的 位置, 宽高")])]),t._v(" "),e("h2",{attrs:{id:"添加元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加元素"}},[t._v("#")]),t._v(" 添加元素")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("在末尾添加一个值为 length 的元素")]),t._v(" "),e("p",[t._v("跟随一个 up 操作, 保证此添加的元素到达正常的位置")])]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.toAdd,expression:"toAdd"}],attrs:{placeholder:"输入要添加的元素 "+t.array.length},domProps:{value:t.toAdd},on:{input:function(r){r.target.composing||(t.toAdd=r.target.value)}}}),t._v(" "),e("button",{on:{click:function(r){return t.addNext(t.toAdd)}}},[t._v(" 添加元素 ")])]),t._v(" "),e("h2",{attrs:{id:"打乱数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打乱数组"}},[t._v("#")]),t._v(" 打乱数组")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("将输入的数组打乱(设置为一个固定的打乱的数组)")]),t._v(" "),e("p",[t._v("打乱之后, 不符合最小堆顺序."),e("br"),t._v("\n此时执行添加/删除/取出操作, 不能保证得到的堆顺序正确."),e("br"),t._v("\n需点一下 对比 按钮,以调整顺序, 再进行操作")]),t._v(" "),e("p",[t._v("对比所有节点: 从后向前, 为每个元素执行 "),e("code",[t._v("up(i)")]),t._v(" 操作, 保证每个元素在正确位置, 堆顺序即正确")])]),t._v(" "),e("div",[e("button",{on:{click:t.shuffle}},[t._v(" 打乱数组 ")]),t._v(" "),e("button",{attrs:{disabled:t.loading.compareAll},on:{click:t.compareAll}},[t._v(" 对比所有节点 ")])]),t._v(" "),e("h2",{attrs:{id:"取出头部节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取出头部节点"}},[t._v("#")]),t._v(" 取出头部节点")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("将头部节点取出, 然后将数组末位项放置到头部节点. 然后对新的头部节点进行 "),e("code",[t._v("down()")]),t._v(" 操作")])]),t._v(" "),e("div",[e("button",{attrs:{disabled:t.loading.poll},on:{click:t.poll}},[t._v(" 取出头部节点 ")])]),t._v(" "),e("h2",{attrs:{id:"删除指定元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除指定元素"}},[t._v("#")]),t._v(" 删除指定元素")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("ul",[e("li",[t._v("查找所有要删除元素的索引 "),e("code",[t._v(t._s(t.find(t.toRemove)))])])])]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.toRemove,expression:"toRemove"}],attrs:{placeholder:"输入要删除的元素 "+this.array[0]},domProps:{value:t.toRemove},on:{input:function(r){r.target.composing||(t.toRemove=r.target.value)}}}),t._v(" "),e("button",{attrs:{disabled:t.loading.remove},on:{click:function(r){return t.remove(t.toRemove)}}},[t._v("remove "+t._s(t.toRemove))])]),t._v(" "),e("h2",{attrs:{id:"feeling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#feeling"}},[t._v("#")]),t._v(" FEELING")]),t._v(" "),e("h3",{attrs:{id:"连续点击-poll"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连续点击-poll"}},[t._v("#")]),t._v(" 连续点击 poll")]),t._v(" "),e("p",[t._v("取出头部节点, 后续的操作, 确保了:")]),t._v(" "),e("ul",[e("li",[t._v("根节点是整个堆最小的值,")]),t._v(" "),e("li",[t._v("除了跟节点之外最小的值,在其左右两个子节点中")])]),t._v(" "),e("p",[t._v("据此归纳可知, poll 操作能够稳定的从头部节点获取最小值")]),t._v(" "),e("h3",{attrs:{id:"连续-remove-非头部节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连续-remove-非头部节点"}},[t._v("#")]),t._v(" 连续 remove 非头部节点")]),t._v(" "),e("p",[t._v("取出节点之后, 将末位项放置在当前位置"),e("br"),t._v("\n当前位置比父节点大时, 向下对比, 此场景跟连续点击poll一致.\n当前位置比父节点小时, 向上对比.\n其中第一步操作是与第一级父节点对换. 因为此前堆满足堆顺序, 所以对换之后的节点必然保证此节点一下的堆, 满足堆顺序. 必须要逐个再对比")]),t._v(" "),e("p",[t._v("由此向上递归, 当遇到比父节点小时, 必然发生父节点下移一级(下移一级, 是保证堆顺序的),"),e("br"),t._v("\n每一次对换, 都保证被对换的节点下方堆顺序满足, 于是全程无需执行 "),e("code",[t._v("down(idx)")])]),t._v(" "),e("p",[t._v("当不比父节点小时, 递归停止, 堆顺序调整完成")]),t._v(" "),e("h3",{attrs:{id:"省力的地方在哪儿"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#省力的地方在哪儿"}},[t._v("#")]),t._v(" 省力的地方在哪儿?")]),t._v(" "),e("p",[t._v("一、在 '连续点击poll' 处的两处保证"),e("br"),t._v("\n二、节点只与其"),e("strong",[t._v("亲兄弟")]),t._v("保证堆顺序, 而不与其"),e("strong",[t._v("堂兄弟节点")]),t._v("保证顺序."),e("br"),t._v("\n这点儿不保证,使得省力.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("妙处")]),t._v(" "),e("p",[t._v("这点儿不保证,不影响使用吗, 或者这点不保证的顺序是如何被摒除的?"),e("br"),t._v("\n因为到了根节点之后, 一级子节点没有‘堂兄弟节点’, 不会遭遇取值时顺序不确定的场景")])])])}),[],!1,null,"5fa1579c",null);r.default=g.exports}}]);