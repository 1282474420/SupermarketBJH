(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopcart/myorder/forpayment/forpayment"],{"1a10":function(t,a,e){"use strict";e.r(a);var o=e("af8f"),n=e("9173");for(var r in n)"default"!==r&&function(t){e.d(a,t,function(){return n[t]})}(r);e("fc58");var s=e("2877"),d=Object(s["a"])(n["default"],o["a"],o["b"],!1,null,null,null);a["default"]=d.exports},"691a":function(t,a,e){},9173:function(t,a,e){"use strict";e.r(a);var o=e("a029"),n=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(a,t,function(){return o[t]})}(r);a["default"]=n.a},a029:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=e("5dde"),n=0,r={data:function(){return{num:0,sum:[],axis:[{id:"0",name:"待付款"},{id:"1",name:"待配送"},{id:"2",name:"配送中"},{id:"3",name:"待评价"},{id:"4",name:"已完成"}],order:[{oid:"0",oname:"待付款"},{oid:"1",oname:"待配送"},{oid:"2",oname:"配送中"},{oid:"3",oname:"待评价"},{oid:"4",oname:"已完成"}],ordersFor:[],ordersForGoods:[],currentTpye:"",curren:"",time:""}},components:{},props:{},onLoad:function(a){var e=this;t.request({url:"http://localhost:8080/OrderFormApi/summary?userId=1&stat=0&shopId=1",data:{},header:{"content-type":"application/json"},method:"GET",dataType:"json",success:function(t){e.setData({ordersFor:t.data.data,num:t.data.data.length}),console.log(t.data.data)}});var r=o.formatTime(new Date);this.setData({time:r}),this.setData({currentTpye:n})},methods:{back:function(){t.navigateBack({delta:1})},tagChoose:function(a){var e=this,o=a.currentTarget.id;console.log("状态"+o),t.request({url:"http://localhost:8080/OrderFormApi/summary?userId=1&stat="+o+"&shopId=1",data:{},header:{"content-type":"application/json"},method:"GET",dataType:"json",success:function(t){e.setData({ordersForGoods:t.data.data,num:t.data.data.length}),console.log(t.data.data)}});var n=a.currentTarget.id;this.setData({currentTpye:o,curren:n})},load:function(){var a=this;t.request({url:"http://localhost:8080/OrderFormApi/summary?userId=1&stat=0&shopId=1",data:{},header:{"content-type":"application/json"},method:"GET",dataType:"json",success:function(t){a.setData({ordersFor:t.data.data,num:t.data.data.length}),console.log(t.data.data)}})},getId:function(a){console.log(a.currentTarget.dataset.oid);var e=a.currentTarget.dataset.oid,o=JSON.stringify(e);console.log(o),t.navigateTo({url:"/pages/shopcart/myorder/forpaymentdetails/forpaymentdetails?oid="+o})},getId4:function(a){console.log(a.currentTarget.dataset.oid),console.log("sdfgsdthtsrh-------"+a.currentTarget.dataset.cid);var e=a.currentTarget.dataset.oid,o=a.currentTarget.dataset.cid;JSON.stringify(e),JSON.stringify(o);t.navigateTo({url:"/pages/ww/chwwanpin/ww"})},getId2:function(a){console.log(a.currentTarget.dataset.oid),console.log("sdfgsdthtsrh-------"+a.currentTarget.dataset.cid),t.request({url:getApp().globalData.url+"/order/updateOrderByOid?oId="+a.currentTarget.dataset.oid,data:{},header:{"content-type":"application/json"},method:"POST",dataType:"json",success:function(a){console.log("返回:"+a.data),a.data>0&&(t.showToast({title:"成功",icon:"succes",duration:100,mask:!0}),t.navigateTo({url:"/pages/payment/payment"}))}})},tuiku:function(a){var e=this,o=a.currentTarget.id;console.log("取消 "+o),t.showModal({title:"确定要取消支付吗",success:function(a){a.confirm?t.request({url:"http://localhost:8080/OrderFormApi/cancel?id="+o,data:{},header:{"content-type":"application/json"},method:"GET",dataType:"json",success:function(a){console.log(a),console.log(a.data),console.log(a.data.data),a.data.data>0?t.showToast({title:"取消订单成功",icon:"success",duration:500}):t.showToast({title:"操作太快",icon:"warning",duration:500}),e.load()}}):console.log("用户点击取消")}})},bb:function(a){t.reLaunch({url:"../../../producttype/chanpin/chanpin"})},setData:function(t,a){var e,o,n=this,r=[];Object.keys(t).forEach(function(a){r=a.split("."),e=t[a],o=n.$data,r.forEach(function(t,a){a+1==r.length?n.$set(o,t,e):o[t]||n.$set(o,t,{}),o=o[t]})}),a&&a()}}};a.default=r}).call(this,e("543d")["default"])},af8f:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement;t._self._c},n=[];e.d(a,"a",function(){return o}),e.d(a,"b",function(){return n})},d170:function(t,a,e){"use strict";(function(t){e("5117"),e("921b");o(e("66fd"));var a=o(e("1a10"));function o(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])},fc58:function(t,a,e){"use strict";var o=e("691a"),n=e.n(o);n.a}},[["d170","common/runtime","common/vendor"]]]);