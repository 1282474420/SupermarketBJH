<template>
<!--我的  会员登录-->
<view>
<view class="zc_body">
	<!-- ../../../static/images/dbimg/sy_001_03.png -->
   <image src="http://139.129.97.88:8080/static/images/wink/zhuce.png" class="zc_logo"></image>
   <button class="getPhone" type="primary" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">一键授权，快速登录</button>
   <button class="goToZC" type="default" @tap="zc">立即注册</button>
</view>
<view class="zc_footer">
   <text class="f_tip">温馨提示</text>
   <text class="f_tip002">1.请使用百佳华的注册手机号进行授权登录.</text>
   <text class="f_tip003">2.新用户请点击注册账号。</text>    
</view>
</view>
</template>

<script>

export default {
  data() {
    return {};
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this; // 初始化

    // getApp().globalData.initPage(that); // 查看是否授权

    // uni.getSetting({
    //   success: function (res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       uni.getUserInfo({
    //         success: function (res) {
    //           console.log("用户已经授权过");
    //           console.log("用户信息");
    //           console.log(res.userInfo); //用户已经授权过
    //         },
    //         fail: function (res) {
    //           console.log("用户没有授权");
    //           bindGetUserInfo();
    //         }
    //       });
    //     }
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
    // 登录跳转页面
    dl: function () {
      uni.reLaunch({
        url: '../my/my'
      });
    },
    //注册跳转页面
    zc: function () {
      uni.navigateTo({
        url: '../vipRegister/vipRegister'
      });
    },
	
    getPhoneNumber: function (e) {
      if (e.detail.iv && e.detail.iv != 'undefined') {} else {
        uni.showToast("请允许微信授权获取手机号码");
      }
    },
	
    bindGetUserInfo: function (e) {
      console.log("输出信息");
      console.log(e.detail.userInfo);

      if (e.detail.userInfo) {
        //用户按了允许授权按钮
        console.log("用户按了允许授权按钮用户信息：");
        console.log(getApp().globalData.userInfo);
        var nickName = e.detail.userInfo.nickName;
        var gender = e.detail.userInfo.gender;
        var avatarUrl = e.detail.userInfo.avatarUrl;
        uni.request({
          url: getApp().globalData.url + '/member/updUserInfoByCode',
          data: {
            'open_id': getApp().globalData.userInfo.openId,
            'nickName': nickName,
            'gender': gender,
            'avatarUrl': avatarUrl,
            'phone': ""
          },
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          method: "post",
          success: res => {
            //调用成功  将用户信息封装进全局变量
            console.log("保存用户信息成功");
            console.log(res);
            getApp().globalData.userInfo = res.data;
            console.log(getApp().globalData.userInfo);
            uni.reLaunch({
              url: '../my/my'
            });
          },
          fail: res => {
            //调用失败   
            console.log(res);
          }
        });
      } else {
        //用户按了拒绝按钮
        console.log("用户按了拒绝按钮");
		//测试
		uni.reLaunch({
		  url: '../my/my'
		});
      }
    },
	
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
@import "./vipLogin.css";
</style>