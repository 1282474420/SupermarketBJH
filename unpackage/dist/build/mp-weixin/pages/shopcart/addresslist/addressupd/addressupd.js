(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopcart/addresslist/addressupd/addressupd"],{"0895":function(e,a,t){"use strict";(function(e){t("5117"),t("921b");n(t("66fd"));var a=n(t("9d04"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("543d")["createPage"])},"3c09":function(e,a,t){},"3e1e":function(e,a,t){"use strict";t.r(a);var n=t("83a6"),s=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(a,e,function(){return n[e]})}(r);a["default"]=s.a},"5bf8":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c},s=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return s})},"83a6":function(e,a,t){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={data:function(){return{arrys1:{},oid:"",dname:"",arr:[]}},components:{},props:{},onLoad:function(a){var t=this;this.dname=a.name,console.log("参数",this.dname);e.getStorage({key:"arr",success:function(e){for(var a=0;a<e.data.length;a++)e.data[a].name==t.dname&&(t.arrys1=e.data[a])}})},methods:{formBindSubmit:function(a){var t=this;console.log(a.detail.value.name),console.log(a.detail.value.phone),console.log(a.detail.value.x_address),console.log(a.detail.value.details_ads);t=this;var n=a.detail.value.name,s=a.detail.value.phone,r=a.detail.value.x_address,o=a.detail.value.details_ads,i=/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;if(""==n)e.showToast({icon:"none",title:"收货人不能为空"});else if(""==s)e.showToast({icon:"none",title:"手机号不能为空"});else if(i.test(s))if(""==r)e.showToast({icon:"none",title:"所在地区不能为空"});else if(""==o)e.showToast({icon:"none",title:"详细地址不能为空"});else{t.arrys1.name=n,t.arrys1.phone=s,t.arrys1.x_address=r,t.arrys1.details_ads=o;var l=e.getStorageSync("arr")||[];console.log("arr",l);var c=l.findIndex(function(e){return e.name===t.arrys1.name});if(console.log("index",c),-1===c){for(var d=l.length,u=0;u<d;u++)if(this.dname==l[u].name){l.splice(u,1);break}l.push(t.arrys1)}e.setStorageSync("arr",l),console.log("arr2",l),e.showToast({title:"保存成功",icon:"success",mask:!0}),e.redirectTo({url:"../../addresslist/addresslist"})}else e.showToast({icon:"none",title:"手机号格式有误"})},shanchu:function(a){this.arr=e.getStorageSync("arr"),console.log("name:",this.arr[0].name);for(var t=this.arr.length,n=0;n<t;n++)if(this.dname==this.arr[n].name){this.arr.splice(n,1);break}e.setStorageSync("arr",this.arr),e.showToast({title:"删除成功",icon:"success",mask:!0}),e.redirectTo({url:"../../addresslist/addresslist"})},setData:function(e,a){var t,n,s=this,r=[];Object.keys(e).forEach(function(a){r=a.split("."),t=e[a],n=s.$data,r.forEach(function(e,a){a+1==r.length?s.$set(n,e,t):n[e]||s.$set(n,e,{}),n=n[e]})}),a&&a()}}};a.default=t}).call(this,t("543d")["default"])},"9d04":function(e,a,t){"use strict";t.r(a);var n=t("5bf8"),s=t("3e1e");for(var r in s)"default"!==r&&function(e){t.d(a,e,function(){return s[e]})}(r);t("aecf");var o=t("2877"),i=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);a["default"]=i.exports},aecf:function(e,a,t){"use strict";var n=t("3c09"),s=t.n(n);s.a}},[["0895","common/runtime","common/vendor"]]]);