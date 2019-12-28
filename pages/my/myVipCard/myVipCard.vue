<template>
<!--我的  我的会员卡-->
<view>
  <view class="yi">
    <view class="er">
      <view class="san">
        <view class="eryi" v-for="(item, index) in hy" :key="index">
          <!-- <image :src="item.headPortrait" class="sany"></image>
          <text class="sanyi">{{item.username}}</text> -->
		  <image src="http://139.129.97.88:8080/static/images/wink/touxiang.jpg" class="sany"></image>
		  <text class="sanyi">百佳华在线会员卡</text>
          <image class="sane" src="http://139.129.97.88:8080/static/images/wink/huiyuanma.jpg"></image>
          <text class="saner">会员码</text>
        </view>
        <view class="si">
          <view class="si" v-for="(item, index) in xf" :key="index">
            <view class="siyi"> <text class="sans">卡号</text><text class="sisan">{{item.vipCard}}</text></view>
			<view class="siyi"> <text class="sans">手机</text><text class="sisan">{{item.vipPhone}}</text></view>
          </view>
        </view>
      </view>
    </view>
    <view class="liu">
      <text>会员卡信息</text>
    </view>
    <view class="qi">
      <view class="si" v-for="(item, index) in cnxh" :key="index">
        <view class="siyi"><text class="sas">线下钱余额 </text><text class="sis">{{item.vipBalance}}元</text></view>
        <view class="siyi"><text class="sas">总积分 </text><text class="sis">{{item.vipIntegral}}个</text></view>
        <!-- <view class="siyi"><text class="sas">可用积分 </text><text class="sis">{{item.availablei}}</text></view> -->
		<view class="siyi"><text class="sas">可用积分 </text><text class="sis">60个</text></view>
        <view class="siyi"><text class="sas">有效期</text>
          <text class="sis" v-if="item.vipModified!=null">{{item.vipModified}}</text>
          <text class="sis" v-if="item.vipModified==null"></text>
        </view>
      </view>
    </view>
    <view class="liu">
      <text>最近一次消费</text>
    </view>
    <view class="ba">
      <view class="si" v-for="(item, index) in cn" :key="index">
        <!-- <view class="siyi"><text class="sas">消费金额 </text><text class="sis">{{item.monetary}}元</text></view>
        <view class="siyi"><text class="sas"> 新增积分</text><text class="sis">{{ite.availablei}}个</text></view>
        <view class="siyi">
          <text class="sas">消费时间 </text>
          <text class="sis" v-if="item.termvalidity!=null">{{item.termvalidity}}</text>
          <text class="sis" v-if="item.termvalidity==null"></text>
        </view> -->
		<view class="siyi"><text class="sas">消费金额 </text><text class="sis">60元</text></view>
		<view class="siyi"><text class="sas"> 新增积分</text><text class="sis">60个</text></view>
		<view class="siyi"><text class="sas">消费时间 </text><text class="sis">2019-09-15</text></view>
      </view>
    </view>
    <view class="jiu">
      <text class="jiuyi">会员卡说明</text>
      <view class="jiuer">使用百佳华在线会员卡或绑定商场实体卡片，向店员出示二维码或者通过报手机号码，即可享受购物打折、积分、返礼品、商品超低价等优惠，更享有会员专享价、生日多倍积分、免费停车等特权、详见百佳华商城会员手册。</view>
    </view>
  </view>
</view>
</template>

<script>
export default {
  data() {
    return {
      hy: [{}],
	  //卡号、手机
      xf: [{
		  vipCard:"154163513546513285133",
		  vipPhone:"186-8893-8888"
	  }],
	  //余额、积分、有效期
      cnxh: [{
		  vipBalance:"60",
		  vipIntegral:"550",
		  vipModified:"2020-09-20"
	  }]
      ,cn: [{}]
    };
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // getApp().globalData.initPage(that);
    // uni.request({
    //   url: getApp().globalData.url + '/member/memberSelectById',
    //   data: {
    //     userId: getApp().globalData.userInfo.userId
    //   },
    //   method: 'POST',
    //   header: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   success: res => {
    //     that.setData({
    //       hy: res.data.data,
    //       xf: res.data.data,
    //       cnxh: res.data.data,
    //       cn: res.data.data
    //     });
    //   }
    // });
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
    // setData: function (obj, callback) {
    //   let that = this;
    //   let keys = [];
    //   let val, data;
    //   Object.keys(obj).forEach(function (key) {
    //     keys = key.split('.');
    //     val = obj[key];
    //     data = that.$data;
    //     keys.forEach(function (key2, index) {
    //       if (index + 1 == keys.length) {
    //         that.$set(data, key2, val);
    //       } else {
    //         if (!data[key2]) {
    //           that.$set(data, key2, {});
    //         }
    //       }

    //       data = data[key2];
    //     });
    //   });
    //   callback && callback();
    // }
  }
};
</script>

<style>
@import "./myVipCard.css";
</style>