(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-countdown/uni-countdown"],{"00c6":function(t,n,e){"use strict";e.r(n);var o=e("3b92"),i=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);n["default"]=i.a},"390a":function(t,n,e){"use strict";e.r(n);var o=e("7bc6"),i=e("00c6");for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);e("4351");var a=e("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"030d0fa4",null);n["default"]=u.exports},"3b92":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"UniCountdown",props:{showDay:{type:Boolean,default:!0},showColon:{type:Boolean,default:!0},backgroundColor:{type:String,default:"#484848"},borderColor:{type:String,default:"#000000"},color:{type:String,default:"#FFFFFF"},splitorColor:{type:String,default:"#000000"},day:{type:Number,default:0},hour:{type:Number,default:0},minute:{type:Number,default:0},second:{type:Number,default:0}},data:function(){return{timer:null,syncFlag:!1,d:"00",h:"00",i:"00",s:"00",leftTime:0,seconds:0}},watch:{day:function(t){this.changeFlag()},hour:function(t){this.changeFlag()},minute:function(t){this.changeFlag()},second:function(t){this.changeFlag()}},created:function(t){this.startData()},beforeDestroy:function(){clearInterval(this.timer)},methods:{toSeconds:function(t,n,e,o){return 60*t*60*24+60*n*60+60*e+o},timeUp:function(){clearInterval(this.timer),this.$emit("timeup")},countDown:function(){var t=this.seconds,n=0,e=0,o=0,i=0;t>0?(n=Math.floor(t/86400),e=Math.floor(t/3600)-24*n,o=Math.floor(t/60)-24*n*60-60*e,i=Math.floor(t)-24*n*60*60-60*e*60-60*o):this.timeUp(),n<10&&(n="0"+n),e<10&&(e="0"+e),o<10&&(o="0"+o),i<10&&(i="0"+i),this.d=n,this.h=e,this.i=o,this.s=i},startData:function(){var t=this;this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.seconds<=0||(this.countDown(),this.timer=setInterval(function(){t.seconds--,t.seconds<0?t.timeUp():t.countDown()},1e3))},changeFlag:function(){this.syncFlag||(this.seconds=this.toSeconds(this.day,this.hour,this.minute,this.second),this.startData(),this.syncFlag=!0)}}};n.default=o},4351:function(t,n,e){"use strict";var o=e("6185"),i=e.n(o);i.a},6185:function(t,n,e){},"7bc6":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-countdown/uni-countdown-create-component',
    {
        'components/uni-countdown/uni-countdown-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("390a"))
        })
    },
    [['components/uni-countdown/uni-countdown-create-component']]
]);
