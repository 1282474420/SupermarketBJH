<template>
<!--我的订单 退款-->
<view class="container">
  <view class="ding2">
    <view class="ding">
      <image class="ding1" src="../../../static/img/tu1_03.png" @tap="back"></image>
      <view class="text1 text4">
        <text>商品评价</text>
      </view>
    </view>
  </view>
  <view class="dingdan">
  </view>

  <block v-for="(item, index) in ordersForGoods" :key="index">
    <view class="goods">
      <view @tap="getId" :data-oid="item.oId">
        <view class="goods2">
          <view class="goods12">
            <image src="../../static/img/tuikuan.png"></image>
          </view>
          <view class="goods7">
            <view class="goods10">
              <text>{{item.oArefundoftime}}</text>
            </view>
          </view>
          <view class="goods8">
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
          <view class="goods9">
            <view class="goods11">
              <text>共{{item.oQuantity}}件商品，总金额￥1780</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </block>
</view>
</template>

<script>
// pages/arefund/arefund.js
var util = require("../../../../utils/util.js");

export default {
  data() {
    return {
      ordersForGoods: [],
      sum: [],
      time: ""
    };
  },

  components: {},
  props: {},
  onLoad: function (options) {
    var that = this;
    getApp().globalData.initPage(that);
    var id = getApp().globalData.userInfo.userId;

    uni.request({
      url: getApp().globalData.url + '/order/orderSelectById?o_customerInfo=' + id + '&' + 'o_orderStatus=' + 6,
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
    /**
     * 生命周期函数--监听页面加载
     */
    back: function () {
      uni.navigateBack({
        delta: 1
      });
    },
    getId: function (e) {
      console.log(e.currentTarget.dataset.oid);
      let oids = e.currentTarget.dataset.oid;
      let oid = JSON.stringify(oids);
      uni.navigateTo({
        url: '/pages/arefundRefund/arefundRefund?oid=' + oid
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
@import "./arefund.css";
</style>