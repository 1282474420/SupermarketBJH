(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/coupons/coupons"],{"4ea4":function(n,t,e){"use strict";e.r(t);var o=e("5f72"),u=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);t["default"]=u.a},"5f72":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{coupons:[{price:"6",availability:"满29可用",scope:"全品类（活动商品除外）",period:"有效期至2019年11月27日"},{price:"10",availability:"满49可用",scope:"全品类（活动商品除外）",period:"有效期至2019年11月27日"},{price:"10",availability:"满49可用",scope:"全品类（活动商品除外）",period:"有效期至2019年11月27日"}],show:!1}},onLoad:function(){n.request({url:"",method:"POST",data:{},success:function(n){},fail:function(){},complete:function(){}})},methods:{showPopup:function(){this.show=!0},onClose:function(){this.show=!1},openchanpin:function(){n.reLaunch({url:"/pages/producttype/chanpin/chanpin",success:function(n){},fail:function(){},complete:function(){}})},openstores:function(){n.reLaunch({url:"/pages/home/stores/stores",success:function(n){},fail:function(){},complete:function(){}})}}};t.default=e}).call(this,e("543d")["default"])},"7f09":function(n,t,e){"use strict";e.r(t);var o=e("f7e02"),u=e("4ea4");for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);e("c3d6");var i=e("2877"),a=Object(i["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},a09d:function(n,t,e){"use strict";(function(n){e("5117"),e("921b");o(e("66fd"));var t=o(e("7f09"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},b053:function(n,t,e){},c3d6:function(n,t,e){"use strict";var o=e("b053"),u=e.n(o);u.a},f7e02:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})}},[["a09d","common/runtime","common/vendor"]]]);