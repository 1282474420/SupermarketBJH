(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/spellgroup/group_buying_goods/group_buying_goods"],{"27b0":function(o,t,n){"use strict";var e=function(){var o=this,t=o.$createElement;o._self._c},s=[];n.d(t,"a",function(){return e}),n.d(t,"b",function(){return s})},3796:function(o,t,n){"use strict";(function(o){n("5117"),n("921b");e(n("66fd"));var t=e(n("da4a"));function e(o){return o&&o.__esModule?o:{default:o}}o(t.default)}).call(this,n("543d")["createPage"])},"413a":function(o,t,n){"use strict";n.r(t);var e=n("e2c2"),s=n.n(e);for(var a in e)"default"!==a&&function(o){n.d(t,o,function(){return e[o]})}(a);t["default"]=s.a},"95a0":function(o,t,n){"use strict";var e=n("dfd9"),s=n.n(e);s.a},da4a:function(o,t,n){"use strict";n.r(t);var e=n("27b0"),s=n("413a");for(var a in s)"default"!==a&&function(o){n.d(t,o,function(){return s[o]})}(a);n("95a0");var c=n("2877"),i=Object(c["a"])(s["default"],e["a"],e["b"],!1,null,null,null);t["default"]=i.exports},dfd9:function(o,t,n){},e2c2:function(o,t,n){"use strict";(function(o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){return n.e("components/uni-countdown/uni-countdown").then(n.bind(null,"390a"))},s={components:{uniCountdown:e},data:function(){return{goodsData:{},comment:{},isCollect:!1}},onLoad:function(t){var n=this,e=t.id;o.showToast({title:"编号"+e,icon:"none"});o.request({url:"http://localhost:8080/commodity/getById?id="+e,method:"POST",success:function(o){n.goodsData=o.data,n.comment=o.data,console.log(o.data)},fail:function(){},complete:function(){}})},methods:{showSpec:function(o){console.log("show"),this.specClass="show",this.specCallback=o},toGroup:function(){o.navigateTo({url:"../group/group"})},chat:function(){o.reLaunch({url:"/pages/home/chat/chat"})},handleCartAdd:function(){var t=this;console.log(this.GoodsInfo);var n=o.getStorageSync("cart")||[],e=n.findIndex(function(o){return o.id===t.GoodsInfo.id});-1===e?(this.GoodsInfonew.goodsName=this.GoodsInfo.goodsName,this.GoodsInfonew.price=this.GoodsInfo.price,this.GoodsInfonew.picturepath=this.GoodsInfo.bigpicturepath,this.GoodsInfonew.number=1,this.GoodsInfonew.id=this.GoodsInfo.id,n.push(this.GoodsInfonew)):n[e].number++,o.setStorageSync("cart",n),o.showToast({title:"加入成功",icon:"success",mask:!0})},handleCollect:function(){var t=this;console.log(this.goodsData);var n=o.getStorageSync("collect")||[],e=n.findIndex(function(o){return o.id===t.goodsData.id});-1!==e?(n.splice(e,1),this.isCollect=!1,o.showToast({title:"取消成功",icon:"success",mask:!0})):(n.push(this.goodsData),this.isCollect=!0,o.showToast({title:"收藏成功",icon:"success",mask:!0})),o.setStorageSync("collect",n)}}};t.default=s}).call(this,n("543d")["default"])}},[["3796","common/runtime","common/vendor"]]]);