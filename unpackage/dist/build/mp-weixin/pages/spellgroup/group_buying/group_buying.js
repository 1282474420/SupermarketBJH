(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/spellgroup/group_buying/group_buying"],{"045d":function(n,t,o){"use strict";(function(n){o("5117"),o("921b");u(o("66fd"));var t=u(o("45c3"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,o("543d")["createPage"])},"44e2":function(n,t,o){"use strict";o.r(t);var u=o("7520"),e=o.n(u);for(var a in u)"default"!==a&&function(n){o.d(t,n,function(){return u[n]})}(a);t["default"]=e.a},"45c3":function(n,t,o){"use strict";o.r(t);var u=o("8aae"),e=o("44e2");for(var a in e)"default"!==a&&function(n){o.d(t,n,function(){return e[n]})}(a);o("d296");var c=o("2877"),i=Object(c["a"])(e["default"],u["a"],u["b"],!1,null,null,null);t["default"]=i.exports},7520:function(n,t,o){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return o.e("components/uni-countdown/uni-countdown").then(o.bind(null,"390a"))},e={components:{uniCountdown:u},data:function(){return{goodsList:[]}},onLoad:function(){var t=this;n.request({url:"http://localhost:8080/commodity/activeCom",method:"POST",data:{},success:function(n){t.goodsList=n.data,console.log(n),console.log(n.data)}})},methods:{goodsInfo:function(t){n.showToast({title:"编号"+t,icon:"none"}),n.navigateTo({url:"../group_buying_goods/group_buying_goods?id="+t})}}};t.default=e}).call(this,o("543d")["default"])},"8aae":function(n,t,o){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},e=[];o.d(t,"a",function(){return u}),o.d(t,"b",function(){return e})},"92d3":function(n,t,o){},d296:function(n,t,o){"use strict";var u=o("92d3"),e=o.n(u);e.a}},[["045d","common/runtime","common/vendor"]]]);