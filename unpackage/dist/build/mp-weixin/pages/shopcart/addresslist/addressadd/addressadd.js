(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopcart/addresslist/addressadd/addressadd"],{"0c9a":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{arrys1:{}}},components:{},props:{},onLoad:function(t){var a=e.getStorageSync("arr");console.log("arrr2",a)},methods:{formBindSubmit:function(t){var a=this;console.log(t.detail.value.name),console.log(t.detail.value.phone),console.log(t.detail.value.x_address),console.log(t.detail.value.details_ads);var n=t.detail.value.name,o=t.detail.value.phone,s=t.detail.value.x_address,r=t.detail.value.details_ads,l=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;if(""==n)e.showToast({icon:"none",title:"收货人不能为空"});else if(""==o)e.showToast({icon:"none",title:"手机号不能为空"});else if(l.test(o))if(""==s)e.showToast({icon:"none",title:"所在地区不能为空"});else if(""==r)e.showToast({icon:"none",title:"详细地址不能为空"});else{a.arrys1.name=n,a.arrys1.phone=o,a.arrys1.x_address=s,a.arrys1.details_ads=r;var i=e.getStorageSync("arr")||[];console.log("arr",i);var c=i.findIndex(function(e){return e.name===a.arrys1.name});console.log("index",c),-1===c&&i.push(a.arrys1),e.setStorageSync("arr",i),console.log("arr2",i),e.showToast({title:"保存成功",icon:"success",mask:!0}),e.redirectTo({url:"../../addresslist/addresslist"})}else e.showToast({icon:"none",title:"手机号格式有误"})},setData:function(e,t){var a,n,o=this,s=[];Object.keys(e).forEach(function(t){s=t.split("."),a=e[t],n=o.$data,s.forEach(function(e,t){t+1==s.length?o.$set(n,e,a):n[e]||o.$set(n,e,{}),n=n[e]})}),t&&t()}}};t.default=a}).call(this,a("543d")["default"])},"3c54":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"6c20":function(e,t,a){"use strict";a.r(t);var n=a("3c54"),o=a("ed4e");for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);a("9494");var r=a("2877"),l=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=l.exports},9494:function(e,t,a){"use strict";var n=a("a48e"),o=a.n(n);o.a},a48e:function(e,t,a){},b82f:function(e,t,a){"use strict";(function(e){a("5117"),a("921b");n(a("66fd"));var t=n(a("6c20"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},ed4e:function(e,t,a){"use strict";a.r(t);var n=a("0c9a"),o=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=o.a}},[["b82f","common/runtime","common/vendor"]]]);