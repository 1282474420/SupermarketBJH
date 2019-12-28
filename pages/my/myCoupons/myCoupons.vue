<template>
<!--我的  我的优惠券-->
<view>
<view class="zuida">
  <view class="aaaa">
    <view class="section">
      <view class="precedence">
        <block v-for="(item, index) in pres" :key="index">
          <view :class="'precedenceCont ' + (index == id?'cur':'')" @tap="click" :data-id="index">
            <text class="ziti" @tap="klqclick">{{item.preX0}}</text>
            <text class="ziti" @tap="ksyclick">{{item.preX1}}</text>
            <text class="ziti" @tap="ysyclick">{{item.preX2}}</text>
          </view>
        </block>
      </view>
    </view>
    <view class="lingqu">
      <view class="sss"></view>
      <block v-for="(item, index) in c_card" :key="index" >
        <view class="c_card">
          <!-- 优惠券背景 -->
          <image src="http://139.129.97.88:8080/static/images/wink/cardback.png" class="card_back"></image>
          <!-- 左边的优惠券介绍 -->
          <view class="card_details">
            <text class="card_icon">￥ </text>
            <text class="card_price"> {{item.cDistribution}}</text>
            <view class="card_price_details">
              <text class="card_gz">{{item.cUseRestricted}}</text>
            </view>
          </view>
          <!-- 中间的介绍 -->
          <view class="center_card">
            <text class="card_name">{{item.cCouponName}}</text>
            <text class="card_outTime">有效期至{{item.cIndateEnd}}</text>
          </view>
          <!-- 立即领券  点击领卷，则把该券的id传过去领券-->
          <view class="right_card"  @tap="getCard">
            {{item.right_card}}
          </view>
        </view>
      </block>
    
    <view class="youhuijuan">
	  <view class="asdadda">
        <text class="guize">优惠券规则</text>
        <image src="http://139.129.97.88:8080/static/images/wink/xiajiantou.png" :class="'yuan personal_image ' + (selectArea ? 'rotateRight' :'')"></image>
      </view>
      <!-- <view class="yu"> -->
      <!-- <canvas canvas-id="canvas" ></canvas> -->
        
      <!-- </view> -->
      <view class="gui">
        <view class="gui_wang">1、每次消费仅限使用一张，一次性消费</view>
        <view class="gui_tu">2、不设找赎，不可兑换现金</view>
        <view class="gui_sui">3、本劵不能用于购买秒死商品</view>
        <view class="gui_fo">4、用户如若发生退货行为，则原路退还实际支付的费用，</view>
        <view class="fai"> 同时已使用的优惠券失效，不可二次使用</view>
      </view>
    </view>
  </view>
</view>
</view>
</view>
</template>

<script>
const app = getApp().globalData;

export default {
  data() {
    return {
      // someData: {
      //   statusBarHeight: getApp().globalData.statusBarHeight,
      //   titleBarHeight: getApp().globalData.titleBarHeight
      // },
      // statusBarHeight: getApp().globalData.statusBarHeight,
      // titleBarHeight: getApp().globalData.titleBarHeight,
      // list: [],
	  
	  //我的优惠券信息
      c_card: [{
      }],
      id: 0,
      //进入页面时，默认选择第1个，如果不需要默认选中，去掉此语句即可；id从0开始    
	  pres: [{
        preX0: "可领取"
      }, {
        preX1: "可使用"
      }, {
        preX2: "已使用"
      }],
      // word: "立即领取",
      // show: "",
      // selectArea: false,
      // selectPerson: false,
      // firstPerson: ""
    };
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // getApp().globalData.initPage(that);

    let time = require("../../../utils/util.js");

    // showView: options.showView == "true" ? true : false;

    that.klqclick();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
  methods: {
	//点击切换时id
    click: function (e) {
      var ids = e.currentTarget.dataset.id; //获取自定义的id   
      this.setData({
        id: ids //把获取的自定义id赋给当前组件的id(即获取当前组件)  
      });
    },
	
    // 可领取数据
    klqclick: function () {
	  let time = require("../../../utils/util.js");
	  var that = this;
	  that.setData({
	    c_card:
		[{
	  		cDistribution:"20",
	  		cUseRestricted:"满200可用",
	  		cCouponName:"全品类(活动商品除外)",
	  		cIndateEnd:"2019-12-30",
			right_card: '立即领取'
		}
		,{
			cDistribution:"30",
			cUseRestricted:"满300可用",
			cCouponName:"全品类(活动商品除外)",
			cIndateEnd:"2019-12-30",
			right_card: '立即领取'
		}]
	  });
      
   //    uni.request({
   //      url: getApp().globalData.url + '/coupon/selCoupon',
   //      data: {
   //        // userID: getApp().globalData.userInfo.userId
   //      },
   //      method: 'POST',
   //      header: {
   //        "Content-Type": "application/x-www-form-urlencoded"
   //      },
   //      success: res => {
   //        that.setData({
   //          c_card: res.data,
   //          word: "立即领取"
   //        });
   //        console.log(res.data);
   //      }
   //    });
    },
	
    // 可使用数据
    ksyclick: function () {
      let time = require("../../../utils/util.js");
      var that = this;
	  that.setData({
	    c_card:
		[{
			cDistribution:"20",
			cUseRestricted:"满200可用",
			cCouponName:"全品类(活动商品除外)",
			cIndateEnd:"2019-12-30",
	  		right_card: '立即使用'
	  	}
	  	,{
	  		cDistribution:"30",
			cUseRestricted:"满300可用",
	  		cCouponName:"全品类(活动商品除外)",
	  		cIndateEnd:"2019-12-30",
	  		right_card: '立即使用'
	  	}]
	  });
	  
      // uni.request({
      //   url: getApp().globalData.url + '/coupon/selCouponByUserIdAndAlready',
      //   data: {
      //     // userId: getApp().globalData.userInfo.userId,
      //     // cAlreadyUsed: 0
      //   },
      //   method: 'POST',
      //   header: {
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   },
      //   success: res => {
      //     that.setData({
      //       c_card: res.data.data,
      //       word: "立即使用"
      //     });
      //   }
      // });
    },
	
    // 已使用数据
    ysyclick: function () {
      let time = require("../../../utils/util.js");
      var that = this;
	  that.setData({
	    c_card:
		[{
			cDistribution:"20",
			cUseRestricted:"满200可用",
			cCouponName:"全品类(活动商品除外)",
			cIndateEnd:"2019-12-10",
			right_card: '已被使用'
	  	}]
	  });
	  
      // uni.request({
      //   url: getApp().globalData.url + '/coupon/selCouponByUserIdAndAlready',
      //   data: {
      //     // userId: getApp().globalData.userInfo.userId,
      //     // cAlreadyUsed: 1
      //   },
      //   method: 'POST',
      //   header: {
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   },
      //   success: res => {
      //     that.setData({
      //       c_card: res.data.data,
      //       word: "立即使用"
      //     });
      //   }
      // });
    },
	
    // goback: function () {
    //   uni.navigateBack({
    //     index: 1
    //   });
    // },
	
    // 立即领取
    // getCard: function (e) {
    //   var that = this;

    //   if (that.word == "立即领取") {
    //     uni.request({
    //       url: getApp().globalData.url + '/couponMember/addCouponMember',
    //       data: {
    //         userId: getApp().globalData.userInfo.userId,
    //         cId: e.currentTarget.dataset.yhjid,
    //         cAlreadyUsed: 0
    //       },
    //       method: 'POST',
    //       header: {
    //         "Content-Type": "application/x-www-form-urlencoded"
    //       },
    //       success: res => {
    //         uni.showToast({
    //           title: '添加成功！',
    //           icon: 'success'
    //         });
    //         that.klqclick();
    //       },
    //       fail: res => {
    //         uni.showToast({
    //           title: '添加失败！'
    //         });
    //       }
    //     });
    //   } else if (that.word == "立即使用") {
    //     uni.reLaunch({
    //       url: '../product-type/product-type'
    //     });
    //   }
    // },
	
    // clickPerson: function () {
    //   var selectPerson = this.selectPerson;

    //   if (selectPerson == true) {
    //     this.setData({
    //       selectArea: true,
    //       selectPerson: false
    //     });
    //   } else {
    //     this.setData({
    //       selectArea: false,
    //       selectPerson: true
    //     });
    //   }
    // },
	
    // //点击切换
    // mySelect: function (e) {
    //   this.setData({
    //     firstPerson: e.target.dataset.me,
    //     selectPerson: true,
    //     selectArea: false
    //   });
    // },
	
	//点击切换
    setData: function (obj, callback) {
      let that = this;
      let keys = [];
      let val, data;
      Object.keys(obj).forEach(function (key) {
        keys = key.split('.');
        val = obj[key];
        data = that.$data;
        keys.forEach(function (key2, index) {
          if (index + 1 == keys.length) {
            that.$set(data, key2, val);
          } else {
            if (!data[key2]) {
              that.$set(data, key2, {});
            }
          }

          data = data[key2];
        });
      });
      callback && callback();
    }
  }
};
</script>
<style>
@import "./myCoupons.css";
</style>