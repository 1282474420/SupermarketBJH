(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopcart/cart/cart"],{"095f":function(t,s,e){"use strict";var i=e("42e2"),o=e.n(i);o.a},"38e0":function(t,s,e){"use strict";(function(t){e("5117"),e("921b");i(e("66fd"));var s=i(e("4d86"));function i(t){return t&&t.__esModule?t:{default:t}}t(s.default)}).call(this,e("543d")["createPage"])},"42e2":function(t,s,e){},"4d86":function(t,s,e){"use strict";e.r(s);var i=e("a6e3"),o=e("d7c9");for(var n in o)"default"!==n&&function(t){e.d(s,t,function(){return o[t]})}(n);e("095f");var l=e("2877"),d=Object(l["a"])(o["default"],i["a"],i["b"],!1,null,null,null);s["default"]=d.exports},a29a:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var e={data:function(){return{sumPrice:"0.00",headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,selectedList:[],isAllselected:!1,goodsList:[],theIndex:null,oldIndex:null,isStop:!1,num:0}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onShow:function(){var s=this,e=this;e.num>0&&t.getStorage({key:"cart",success:function(t){console.log(JSON.stringify(t.data.length)),s.goodsList=t.data,console.log(s.goodsList)}}),e.num++},onLoad:function(){var s=this;t.getStorage({key:"cart",success:function(t){console.log(JSON.stringify(t.data.length)),s.goodsList=t.data,console.log(s.goodsList),console.log(s.goodsList.data)}})},methods:{joinGoods:function(t){for(var s=this.goodsList.length,e=!1,o=0;o<s;o++){var n=this.goodsList[o];if(n.id==t.id){this.goodsList[o].number++,e=!0;break}}e||this.goodsList[i].unshift(t)},touchStart:function(t,s){s.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[s.touches[0].pageX,s.touches[0].pageY])},touchMove:function(t,s){var e=this;if(s.touches.length>1)this.isStop=!0;else{var i=s.touches[0].pageX-this.initXY[0],o=s.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(o)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){e.oldIndex=null},150)))}},touchEnd:function(t,s){this.isStop=!1},toGoods:function(s){t.showToast({title:"商品 "+s.goodsName,icon:"none"}),t.navigateTo({url:"../../goods/goods"})},toConfirmation:function(){for(var s=[],e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&s.push(this.goodsList[i]);s.length<1?t.showToast({title:"请选择商品结算",icon:"none"}):t.setStorage({key:"buylist",data:s,success:function(){t.navigateTo({url:"../order/order"})}})},deleteGoods:function(s){for(var e=this.goodsList.length,i=0;i<e;i++)if(s==this.goodsList[i].id){this.goodsList.splice(i,1);break}t.setStorageSync("cart",this.goodsList),this.selectedList.splice(this.selectedList.indexOf(s),1),this.sum(),this.oldIndex=null,this.theIndex=null},deleteList:function(){this.selectedList.length;while(this.selectedList.length>0)this.deleteGoods(this.selectedList[0]);this.selectedList=[],this.isAllselected=this.selectedList.length==this.goodsList.length&&this.goodsList.length>0,this.sum()},selected:function(t){this.goodsList[t].selected=!this.goodsList[t].selected;var s=this.selectedList.indexOf(this.goodsList[t].id);s>-1?this.selectedList.splice(s,1):this.selectedList.push(this.goodsList[t].id),this.isAllselected=this.selectedList.length==this.goodsList.length,this.sum()},allSelect:function(){for(var t=this.goodsList.length,s=[],e=0;e<t;e++)this.goodsList[e].selected=!this.isAllselected,s.push(this.goodsList[e].id);this.selectedList=this.isAllselected?[]:s,this.isAllselected=!this.isAllselected&&0!=this.goodsList.length,this.sum()},sub:function(s){if(!(this.goodsList[s].number<=1)){this.goodsList[s].number--,this.sum();var e=t.getStorageSync("cart")||[];e[s].number--,t.setStorageSync("cart",e)}},add:function(s){this.goodsList[s].number++,this.sum();var e=t.getStorageSync("cart")||[];e[s].number++,t.setStorageSync("cart",e)},sum:function(t,s){this.sumPrice=0;for(var e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&(this.sumPrice=t&&i==s?this.sumPrice+t.detail.value*this.goodsList[i].price:this.sumPrice+this.goodsList[i].number*this.goodsList[i].price);this.sumPrice=this.sumPrice.toFixed(2)},discard:function(){}}};s.default=e}).call(this,e("543d")["default"])},a6e3:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c},o=[];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return o})},d7c9:function(t,s,e){"use strict";e.r(s);var i=e("a29a"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);s["default"]=o.a}},[["38e0","common/runtime","common/vendor"]]]);