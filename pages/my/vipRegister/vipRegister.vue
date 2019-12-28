<template>
<!--我的  会员注册-->
<view>
<!-- <view :style="'padding-top:' + (someData.statusBarHeight+someData.titleBarHeight) + 'px'">
  <view class="hh-header" :style="'background: -webkit-linear-gradient(left,#' + properties.h_back_color.col + ',#' + properties.h_back_color.col2 + ')'">
    <view class="status-bar" :style="'height:' + someData.statusBarHeight + 'px'"></view>
    <view class="title-bar" :style="'height:' + someData.titleBarHeight + 'px'">
      <view v-if="properties.isShowBack.value=='true'" class="hh-nav-back ico-back" @tap="goback"></view>
      <view v-if="properties.isShowBack.value=='false'" class="hh-nav-back"></view>
      <view class="hh-title">{{properties.innerTitle.value}}</view>
      <view class="hh-nav-right"></view>
    </view>
  </view>
</view> -->

<view class="section">
  <image src="http://139.129.97.88:8080/static/images/wink/zhuce.png" class="zhuce"></image>
  <view class="zhu">
    <view class="page-shouji">
        <view>
          <input class="shouji" type="number" placeholder="请输入手机号" maxlength="11" value @input="mobileInput"></input>
        </view>
      <view class="xina"></view>
    </view>
    <view class="page-yanzhen">
        <view>
          <input class="yanzhen" type="number" placeholder="请输入密码" @input="captchaInput"></input>
        </view>
      <!-- <button @tap="getVerificationCode" class="huoqu" :disabled="disabled" data-id="2" type="default">{{time}}</button> -->
    </view>
    <view class="xinaxian"></view>
  </view>
  <button type="primary" :size="primarySize" :loading="loading" :plain="plain" @tap="btnclick"> 确定提交 </button>
</view>


<view class="mask" catchtouchmove="preventTouchMove" v-if="showModal">
  <image class="anniu" @tap="go" src="http://139.129.97.88:8080/static/images/wink/quxiao.png"></image>

</view>
<view class="modalDlg" v-if="showModal">
  <text class="wengxin">温馨提示</text>
  <view class="gagga"></view>

  <text class="zhucechengg">恭喜您注册成功，现在去登录吧!</text>

  <button class="deng" type="primary" :size="primarySize" :loading="loading" :plain="plain" @tap="modalcnt">去登录</button>
</view>
</view>
</template>

<script>
//index.js
//获取应用实例
const app = getApp().globalData;
var interval = null; //倒计时函数

export default {
  data() {
    return {
      // properties: {
      //   // 这里定义了innerText属性，属性值可以在组件使用时指定 
      //   innerTitle: {
      //     type: String,
      //     value: '注册'
      //   },
      //   // 是否显示返回图标
      //   isShowBack: {
      //     type: String,
      //     value: 'true'
      //   },
      //   // 这里是渐变的颜色
      //   h_back_color: {
      //     col: "FFFFFF",
      //     col2: "FFFFFF"
      //   }
      // },
      // innerTitle: {
      //   type: String,
      //   value: '注册'
      // },
      // isShowBack: {
      //   type: String,
      //   value: 'true'
      // },
      // h_back_color: {
      //   col: "FFFFFF",
      //   col2: "FFFFFF"
      // },
      someData: {
        statusBarHeight: getApp().globalData.statusBarHeight,
        titleBarHeight: getApp().globalData.titleBarHeight
      },
      statusBarHeight: getApp().globalData.statusBarHeight,
      titleBarHeight: getApp().globalData.titleBarHeight,
      date: '请选择日期',
      fun_id: 2,
      time: '获取验证码',
      //倒计时 
      currentTime: 61,
      mobile: '',
      //手机号
      captcha: '' //验证码
      ,
      showModal: false,
      disabled: false,
      windowHeight: "",
      userInfo: "",
      hasUserInfo: false
    };
  },

  components: {},
  props: {},
  onLoad: function () {
    var that = this; // 初始化

    getApp().globalData.initPage(that);
    this.setData({
      windowHeight: uni.getStorageSync('windowHeight')
    });
  },
  // 页面渲染完成后 调用
  onReady: function () {},
  onLoad: function () {
    if (getApp().globalData.userInfo) {
      this.setData({
        userInfo: getApp().globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      getApp().globalData.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      uni.getUserInfo({
        success: res => {
          getApp().globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  methods: {
	//注册成功跳转页面
	modalcnt: function () {
	  uni.navigateTo({
	    url: '../vipLogin/vipLogin'
	  });
	},
	
	
    //得到输入框输入的手机号
    mobileInput: function (e) {
      this.setData({
        mobile: e.detail.value
      });
    },
    //得到输入框输入的验证码
    captchaInput: function (e) {
      this.setData({
        captcha: e.detail.value
      });
    },
    //注册判断
    btnclick: function () {
      var mobile = this.mobile;
      var captcha = this.captcha;

      if (mobile == '') {
        uni.showToast({
          title: '请输入手机号',
          icon: 'none',
          duration: 1000
        });
        return false;
      } else if (captcha == '') {
        uni.showToast({
          title: '密码不能为空',
          icon: 'none',
          duration: 1000
        });
        return false;
      } else if (captcha.length != 6) {
        uni.showToast({
          title: '密码长度有误！请输入6位数',
          icon: 'none',
          duration: 1000
        });
        return false;
      }

      var phonetel = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/; //判断开头是否是13/15/18/17的11位手机号

      if (!phonetel.test(mobile)) {
        uni.showToast({
          title: '请输入正确的手机号',
          icon: 'none',
          duration: 1000
        });
        return false;
      }

      this.setData({
        showModal: true
      });
      return true;
    },
    getCode: function (options) {
      var that = this;
      var currentTime = that.currentTime;
      interval = setInterval(function () {
        currentTime--;
        that.setData({
          time: currentTime + '秒'
        });

        if (currentTime <= 0) {
          clearInterval(interval);
          that.setData({
            time: '重新发送',
            currentTime: 61,
            disabled: false
          });
        }
      }, 1000);
    },

    getVerificationCode() {
      this.getCode();
      var that = this;
      that.setData({
        disabled: true
      });

      showModal: false;
    },

    preventTouchMove: function () {},
    go: function () {
      this.setData({
        showModal: false
      });
    },
    //事件处理函数
    bindViewTap: function () {
      uni.navigateTo({
        url: '../logs/logs'
      });
    },
    //cell事件处理函数
    bindCellViewTap: function (e) {
      var id = e.currentTarget.dataset.id;
      uni.navigateTo({
        url: '../babyDetail/babyDetail?id=' + id
      });
    },
    submit: function () {
      this.setData({
        showModal: true
      });
    },
    getUserInfo: function (e) {
      console.log(e);
      getApp().globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      });
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
@import "./vipRegister.css";
</style>