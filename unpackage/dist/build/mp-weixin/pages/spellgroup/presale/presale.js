(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/spellgroup/presale/presale"],{"034f":function(t,e,n){"use strict";n.r(e);var o=n("3cea"),a=n("4d70");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("0c85");var c=n("2877"),r=Object(c["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"0c85":function(t,e,n){"use strict";var o=n("b1b0"),a=n.n(o);a.a},"3cea":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"4d70":function(t,e,n){"use strict";n.r(e);var o=n("a93e"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a},a93e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{goodsList:[]}},onLoad:function(){var e=this;t.request({url:"http://localhost:8080/commodity/presellCom",method:"POST",data:{},success:function(t){e.goodsList=t.data,console.log(t),console.log(t.data)}})},methods:{goodsInfo:function(e){t.showToast({title:"编号"+e,icon:"none"}),t.navigateTo({url:"../presale_goods/presale_goods?id="+e})}}};e.default=n}).call(this,n("543d")["default"])},b1b0:function(t,e,n){},f95b:function(t,e,n){"use strict";(function(t){n("5117"),n("921b");o(n("66fd"));var e=o(n("034f"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["f95b","common/runtime","common/vendor"]]]);