(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/producttype/ProductDetails/ProductDetails"],{1406:function(t,o,n){"use strict";var e=n("7e21"),s=n.n(e);s.a},5161:function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},s=[];n.d(o,"a",function(){return e}),n.d(o,"b",function(){return s})},"5ae2":function(t,o,n){"use strict";n.r(o);var e=n("5161"),s=n("bdd3");for(var c in s)"default"!==c&&function(t){n.d(o,t,function(){return s[t]})}(c);n("1406");var i=n("2877"),a=Object(i["a"])(s["default"],e["a"],e["b"],!1,null,null,null);o["default"]=a.exports},"7e21":function(t,o,n){},b0b4:function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={data:function(){return{GoodsObj:{},GoodsInfo:{},GoodsInfonew:{},isCollect:!1}},components:{},props:{},onLoad:function(o){var n=this,e=o.id;t.showToast({title:"编号"+e,icon:"none"});t.request({url:"http://localhost:8080/commodity/getById?id="+e,method:"POST",success:function(t){n.GoodsInfo=t.data,console.log(t.data)},fail:function(){},complete:function(){}})},methods:{imgYu:function(t){t.currentTarget.dataset.src,t.currentTarget.dataset.list},setData:function(t,o){var n,e,s=this,c=[];Object.keys(t).forEach(function(o){c=o.split("."),n=t[o],e=s.$data,c.forEach(function(t,o){o+1==c.length?s.$set(e,t,n):e[t]||s.$set(e,t,{}),e=e[t]})}),o&&o()},handleCartAdd:function(){var o=this;console.log(this.GoodsInfo);var n=t.getStorageSync("cart")||[],e=n.findIndex(function(t){return t.id===o.GoodsInfo.id});-1===e?(this.GoodsInfonew.goodsName=this.GoodsInfo.goodsName,this.GoodsInfonew.price=this.GoodsInfo.price,this.GoodsInfonew.picturepath=this.GoodsInfo.picturepath,this.GoodsInfonew.number=1,this.GoodsInfonew.id=this.GoodsInfo.id,n.push(this.GoodsInfonew)):n[e].number++,t.setStorageSync("cart",n),t.showToast({title:"加入成功",icon:"success",mask:!0})},handleCollect:function(){var o=this;console.log(this.GoodsInfo);var n=!1,e=t.getStorageSync("collect")||[],s=e.findIndex(function(t){return t.id===o.GoodsInfo.id});-1!==s?(e.splice(s,1),n=!1,t.showToast({title:"取消成功",icon:"success",mask:!0})):(e.push(this.GoodsInfo),n=!0,t.showToast({title:"收藏成功",icon:"success",mask:!0})),t.setStorageSync("collect",e),this.setData({isCollect:n})}}};o.default=n}).call(this,n("543d")["default"])},bdd3:function(t,o,n){"use strict";n.r(o);var e=n("b0b4"),s=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(o,t,function(){return e[t]})}(c);o["default"]=s.a},f2c5:function(t,o,n){"use strict";(function(t){n("5117"),n("921b");e(n("66fd"));var o=e(n("5ae2"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("543d")["createPage"])}},[["f2c5","common/runtime","common/vendor"]]]);