(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/vipRegister/vipRegister"],{"0f17":function(t,e,a){"use strict";a.r(e);var n=a("6858"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=o.a},"37bf":function(t,e,a){},4663:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})},"53d3":function(t,e,a){"use strict";a.r(e);var n=a("4663"),o=a("0f17");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("cf22");var s=a("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},6858:function(t,e,a){"use strict";(function(t){var a;function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;getApp().globalData;var o=null,i=(a={data:function(){return{someData:{statusBarHeight:getApp().globalData.statusBarHeight,titleBarHeight:getApp().globalData.titleBarHeight},statusBarHeight:getApp().globalData.statusBarHeight,titleBarHeight:getApp().globalData.titleBarHeight,date:"请选择日期",fun_id:2,time:"获取验证码",currentTime:61,mobile:"",captcha:"",showModal:!1,disabled:!1,windowHeight:"",userInfo:"",hasUserInfo:!1}},components:{},props:{},onLoad:function(){var e=this;getApp().globalData.initPage(e),this.setData({windowHeight:t.getStorageSync("windowHeight")})},onReady:function(){}},n(a,"onLoad",function(){var e=this;getApp().globalData.userInfo?this.setData({userInfo:getApp().globalData.userInfo,hasUserInfo:!0}):this.canIUse?getApp().globalData.userInfoReadyCallback=function(t){e.setData({userInfo:t.userInfo,hasUserInfo:!0})}:t.getUserInfo({success:function(t){getApp().globalData.userInfo=t.userInfo,e.setData({userInfo:t.userInfo,hasUserInfo:!0})}})}),n(a,"methods",{modalcnt:function(){t.navigateTo({url:"../vipLogin/vipLogin"})},mobileInput:function(t){this.setData({mobile:t.detail.value})},captchaInput:function(t){this.setData({captcha:t.detail.value})},btnclick:function(){var e=this.mobile,a=this.captcha;if(""==e)return t.showToast({title:"请输入手机号",icon:"none",duration:1e3}),!1;if(""==a)return t.showToast({title:"密码不能为空",icon:"none",duration:1e3}),!1;if(6!=a.length)return t.showToast({title:"密码长度有误！请输入6位数",icon:"none",duration:1e3}),!1;var n=/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;return n.test(e)?(this.setData({showModal:!0}),!0):(t.showToast({title:"请输入正确的手机号",icon:"none",duration:1e3}),!1)},getCode:function(t){var e=this,a=e.currentTime;o=setInterval(function(){a--,e.setData({time:a+"秒"}),a<=0&&(clearInterval(o),e.setData({time:"重新发送",currentTime:61,disabled:!1}))},1e3)},getVerificationCode:function(){this.getCode();var t=this;t.setData({disabled:!0})},preventTouchMove:function(){},go:function(){this.setData({showModal:!1})},bindViewTap:function(){t.navigateTo({url:"../logs/logs"})},bindCellViewTap:function(e){var a=e.currentTarget.dataset.id;t.navigateTo({url:"../babyDetail/babyDetail?id="+a})},submit:function(){this.setData({showModal:!0})},getUserInfo:function(t){console.log(t),getApp().globalData.userInfo=t.detail.userInfo,this.setData({userInfo:t.detail.userInfo,hasUserInfo:!0})},setData:function(t,e){var a,n,o=this,i=[];Object.keys(t).forEach(function(e){i=e.split("."),a=t[e],n=o.$data,i.forEach(function(t,e){e+1==i.length?o.$set(n,t,a):n[t]||o.$set(n,t,{}),n=n[t]})}),e&&e()}}),a);e.default=i}).call(this,a("543d")["default"])},cf22:function(t,e,a){"use strict";var n=a("37bf"),o=a.n(n);o.a},e0e2:function(t,e,a){"use strict";(function(t){a("5117"),a("921b");n(a("66fd"));var e=n(a("53d3"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])}},[["e0e2","common/runtime","common/vendor"]]]);