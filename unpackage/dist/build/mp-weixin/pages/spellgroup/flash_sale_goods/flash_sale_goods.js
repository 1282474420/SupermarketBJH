(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/spellgroup/flash_sale_goods/flash_sale_goods"],{"0ec2":function(t,o,n){"use strict";n.r(o);var e=n("c0d0"),s=n.n(e);for(var c in e)"default"!==c&&function(t){n.d(o,t,function(){return e[t]})}(c);o["default"]=s.a},"20f0":function(t,o,n){"use strict";var e=n("7512"),s=n.n(e);s.a},"2cfc":function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},s=[];n.d(o,"a",function(){return e}),n.d(o,"b",function(){return s})},7512:function(t,o,n){},"752b":function(t,o,n){"use strict";(function(t){n("5117"),n("921b");e(n("66fd"));var o=e(n("a587"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("543d")["createPage"])},a587:function(t,o,n){"use strict";n.r(o);var e=n("2cfc"),s=n("0ec2");for(var c in s)"default"!==c&&function(t){n.d(o,t,function(){return s[t]})}(c);n("20f0");var i=n("2877"),a=Object(i["a"])(s["default"],e["a"],e["b"],!1,null,null,null);o["default"]=a.exports},c0d0:function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var e=function(){return n.e("components/uni-countdown/uni-countdown").then(n.bind(null,"390a"))},s={components:{uniCountdown:e},data:function(){return{goodsData:{},isCollect:!1}},onLoad:function(o){var n=this,e=o.id;t.showToast({title:"编号"+e,icon:"none"});t.request({url:"http://localhost:8080/commodity/getById?id="+e,method:"POST",success:function(t){n.goodsData=t.data,console.log(t.data)},fail:function(){},complete:function(){}})},methods:{showSpec:function(t){console.log("show"),this.specClass="show",this.specCallback=t},toChat:function(){t.navigateTo({url:""})},chat:function(){t.reLaunch({url:"/pages/home/chat/chat"})},keep:function(){t.navigateTo({url:""})},joinCart:function(){if(null==this.selectSpec)return this.showSpec(function(){t.showToast({title:"已加入购物车"})});t.showToast({title:"已加入购物车"})},handleCartAdd:function(){var o=this,n=t.getStorageSync("cart")||[],e=n.findIndex(function(t){return t.goods_id===o.GoodsInfo.goods_id});-1===e?(this.GoodsInfo.num=1,this.GoodsInfo.checked=!0,n.push(this.GoodsInfo)):n[e].num++,t.setStorageSync("cart",n),t.showToast({title:"加入成功",icon:"success",mask:!0})},handleCollect:function(){var o=this;console.log(this.goodsData);var n=t.getStorageSync("collect")||[],e=n.findIndex(function(t){return t.id===o.goodsData.id});-1!==e?(n.splice(e,1),this.isCollect=!1,t.showToast({title:"取消成功",icon:"success",mask:!0})):(n.push(this.goodsData),this.isCollect=!0,t.showToast({title:"收藏成功",icon:"success",mask:!0})),t.setStorageSync("collect",n)},buy:function(){var t=this;if(null==this.selectSpec)return this.showSpec(function(){t.toConfirmation()});this.toConfirmation()}}};o.default=s}).call(this,n("543d")["default"])}},[["752b","common/runtime","common/vendor"]]]);