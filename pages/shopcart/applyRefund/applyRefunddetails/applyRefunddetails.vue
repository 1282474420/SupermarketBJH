<template>
<!--我的订单 退款（详情）-->
<view class="container">
  <view class="ding2">
    <view class="ding">
      <image class="ding1" src="http://139.129.97.88:8080/static/images/img/tu1_03.png" @tap="back"></image>
      <view class="text1 text4">
        <text>订单详情</text>
      </view>
    </view>
  </view>
  <view class="dingdan">
    <view class="dingdan1">
      <view class="text1 text2">
        <text>商家审核中，请耐心等待</text>
      </view>
      <view class="text3">
        <text>{{time}}</text>
      </view>
    </view>
  </view>
  <block v-for="(item, index) in ordersForGoods" :key="index">
    <view class="goods">
      <view class="goods2">
        <view class="goods3">
          <image :src="item.commodity.ctradeimg"></image>
        </view>
        <view class="goods4">
          <view class="goods5">
            <text>{{item.commodity.cSelPointTitle}}</text>
          </view>
          <view class="goods6">
            <text class="te">¥{{item.commodity.cprice}}</text>
            <text class="te2">X{{item.oQuantity}}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="theorder">
      <view class="theorder2">
        <view class="theorder3">
          <view class="serialnumber6 serialnumber">
            <text class="numbertext">订单编号</text>
            <button>复制</button>
            <text class="d">{{item.oId}}</text>
          </view>
        </view>
        <view class="theorder3 theorder4">
          <view class="serialnumber serialnumber6">
            <text class="numbertext">下单时间</text>
            <text class="timetext">{{item.oOrderTime}}</text>
          </view>

        </view>
        <view class="theorder3 theorder4">
          <view class="serialnumber serialnumber6">
            <text class="numbertext">支付状态</text>
            <text class="timetext">以支付</text>
          </view>
        </view>
        <view class="theorder3 theorder4">
          <view class="serialnumber serialnumber6">
            <text class="numbertext">支付方式</text>
            <text class="timetext">{{item.oPayway}}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="theorder th">
      <view class="theorder2 th2">
        <view class="theorder3 theorder4">
          <view class="serialnumber serialnumber6">
            <text class="numbertext">收货人</text>
            <text class="timetext">{{item.oCustomerinfo.username}}</text>
          </view>
        </view>
        <view class="theorder3 theorder4">
          <view class="serialnumber serialnumber6">
            <text class="numbertext">联系电话</text>
            <text class="timetext">{{item.oCustomerinfo.cellPhone}}</text>
          </view>
        </view>
        <view class="theorder3 theorder4">
          <view class="serialnumber serialnumber6">
            <text class="numbertext">收货地址</text>
            <text class="timetext2">{{item.address.xAddress}}{{item.address.detailsAds}}</text>
          </view>

        </view>
      </view>
    </view>

    <view class="theorder th">
      <view class="theorder2 th2">
        <view class="theorder3 theorder4">
          <view class="serialnumber serialnumber6">
            <text class="numbertext">配送方式</text>
            <text class="timetext">{{item.orderDistributionway.distributionWay}}</text>
          </view>

        </view>
        <view class="theorder3 theorder4">
          <view class="serialnumber serialnumber6">
            <text class="numbertext">快递公司</text>
            <text class="timetext2">{{item.couriercompany.couriercompanyName}}</text>
          </view>

        </view>
        <view class="theorder3 theorder4">
          <view class="serialnumber serialnumber6">
            <text class="numbertext">快递号</text>
            <text class="timetext2">{{item.oReserved2}}</text>
          </view>

        </view>
      </view>
    </view>

    <view class="theorder th">
      <view class="theorder2 th2">
        <view class="theorder3 theorder4">
          <view class="serialnumber serialnumber6">
            <text class="numbertext">支付金额</text>
            <text class="timetext">￥{{item.commodity.cprice}}</text>
          </view>

        </view>
        <view class="theorder3 theorder4" style="margin-bottom: 30rpx;">
          <view class="serialnumber serialnumber6">
            <text class="numbertext">实付款</text>
            <text class="timetext3">￥{{item.oMoney}}</text>
          </view>
        </view>
      </view>
    </view>
  </block>

</view>
</template>

<script>
// pages/arefundRefund/arefundRefund.js
var util = require("../../../../utils/util.js");

export default {
  data() {
    return {
      ordersForGoods: [],
      time: ""
    };
  },

  components: {},
  props: {},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    getApp().globalData.initPage(that);
    var id = getApp().globalData.userInfo.userId;
    console.log(options);
    let oid = JSON.parse(options.oid);

    uni.request({
      url: getApp().globalData.url + '/order/orderSelectByIOpayStatus?oId=' + oid + '&' + 'o_customerInfo=' + id,
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      dataType: 'json',
      success: function (res) {
        that.setData({
          ordersForGoods: res.data.data
        });
        console.log(res.data);
      }
    }); // 调用函数时，传入new Date()参数，返回值是日期和时间


    var time = util.formatTime(new Date()); // 再通过setData更改Page()里面的data，动态更新页面的数据

    this.setData({
      time: time
    });
  },

  methods: {
    back: function () {
      uni.navigateBack({
        delta: 1
      });
    },
    fanhui: function () {
      var pages = getCurrentPages(); //获取页面栈

      if (pages.length > 1) {
        //上一个页面实例对象
        var prePage = pages[pages.length - 2]; //调用上一个页面的onShow方法

        prePage.onShow();
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
@import "./applyRefunddetails.css";
</style>