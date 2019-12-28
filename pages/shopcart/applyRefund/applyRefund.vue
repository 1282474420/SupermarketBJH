<template>
<!--我的订单 申请退款-->
<view class="container">
  <view class="ding2">
    <view class="ding">
      <image class="ding1" src="http://139.129.97.88:8080/static/images/img/tu1_03.png" @tap="back"></image>
      <view class="text1 text4">
        <text>申请退款</text>
      </view>
    </view>
  </view>
  <view class="dingdan">
  </view>
  <form @submit="bindFormsubmit">
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
            <view class="serialnumber">
              <text class="numbertext">退货数量</text>
              <input type="text" value="选填"></input>
            </view>
          </view>

          <view class="theorder3 theorder4">
            <view class="serialnumber serialnumber3">
              <text class="numbertext">退货金额</text>
              <text class="num">￥{{item.oMoney}}</text>
            </view>
          </view>

          <view class="theorder3 theorder4">
            <view class="serialnumber serialnumber3">
              <text class="numbertext">退货原因</text>
              <image class="jt" src="http://139.129.97.88:8080/static/img/jt.png"></image>
              <text class="num num2">请选择申请原因</text>
            </view>
          </view>
        </view>
      </view>
    </block>

    <view class="note">
      <view class="note2">
        <view class="note3">
          <view class="note4">
            <text class="no">备注说明</text>
            <text class="no2">备注信息100字以内</text>
            <textarea @confirm="confirm" name="textarea"></textarea>
          </view>
        </view>
        <view class="theorder3 theorder4 theorder5">
          <view class="serialnumber serialnumber3">
            <view class="te">
              <text class="no">上传凭证</text>
              <text class="no2">(最多可上传3张)</text>
              <view class="ui_uploader_cell">
                <!-- 根据已选择的图片临时路径数组展示图片-->
                <view class="ui_uploader_item" v-for="(item, index) in uploaderList" :key="index">
                  <!-- 删除-->
                  <icon class="ui_uploader_item_icon" @tap="clearImg" :data-index="index" type="clear" size="20" color="0,0,0"></icon>
                  <!-- 图片-->
                  <image @tap="showImg" :data-index="index" :src="item"></image>
                </view>
                <!-- 上传按钮+框 -->
                <view class="ui_uploader" @tap="uploaderNum<3 ?'upload':'findEvent'" v-if="showUpload">
                  <image src="http://139.129.97.88:8080/static/images/img/shi.png"></image>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="cc">
      <radio-group class="radio-group" @change="radioChange">
        <radio :checked="checked" @tap="checkedTap" color="#ffa14b" class="radio">
          <text>同意</text>
          <text style="color: #fe4531">《退款协议》</text>
        </radio>
      </radio-group>
    </view>

    <view class="Orderssubmitted">
      <view class="Orderssubmitted5">
        <button form-type="submit" @tap="orderss" class="Orderssubmitted2">申请退款</button>
      </view>
    </view>
  </form>
</view>
</template>

<script>
// pages/addRefund/addRefund.js
var util = require("../../../utils/util.js");

export default {
  data() {
    return {
      //根据已选择的图片临时路径数组展示图片
      uploaderList: [],
      uploaderNum: 0,
      //根据已选图片个数判断是否可继续上传
      showUpload: true,
      ordersForGoods: [],
      show: false,
      odCommo2: 0,
      oid: "",
      cid: '',
      details: ""
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
    console.log(options.oids);
    console.log('订单id1' + options.cid);
    let oid = options.oids;
    let cids = options.cid;
    console.log('订单id2' + cids);
    that.setData({
      cid: cids,
      oid: oid
    });

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

        for (var i = 0; i < that.ordersForGoods.length; i++) {
          that.setData({
            odCommo2: that.ordersForGoods[i].commodity.cid
          });
        }
      }
    });
  },

  methods: {
    checkedTap: function () {
      var checked = this.checked;
      this.setData({
        "checked": !checked,
        show: true
      });
    },
    orderss: function () {},
    bindFormsubmit: function (e) {
      var that = this;
      var cc = e.detail.value.textarea;
      getApp().globalData.initPage(that);
      var id = getApp().globalData.userInfo.userId;
      var time = util.formatTime(new Date()); //获取系统当前时间

      console.log(this.oid);

      if (this.show) {
        uni.request({
          url: getApp().globalData.url + '/refund/setRefund ',
          data: {
            rId: this.oid,
            rCommodityinfo: this.odCommo2,
            rUserinfo: id,
            rRefundexplain: cc
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: 'POST',
          dataType: 'json',
          success: function (res) {
            uni.showToast({
              title: '等待审核',
              icon: 'success',
              duration: 500
            });
          }
        });

        uni.request({
          url: getApp().globalData.url + '/order/setByRefund',
          data: {
            oid: this.oid,
            oArefundoftime: time
          },
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          method: 'POST',
          dataType: 'json',
          success: function (res) {}
        });

        uni.navigateTo({
          url: '/pages/arefund/arefund'
        });
      } else {
        uni.showLoading({
          title: '请勾选退款协议'
        });
        setTimeout(function () {
          uni.hideLoading();
        }, 500);
      }
    },
    // 删除图片
    clearImg: function (e) {
      var nowList = []; //新数据

      var uploaderList = this.uploaderList; //原数据

      for (let i = 0; i < uploaderList.length; i++) {
        if (i == e.currentTarget.dataset.index) {
          continue;
        } else {
          nowList.push(uploaderList[i]);
        }
      }

      this.setData({
        uploaderNum: this.uploaderNum - 1,
        uploaderList: nowList,
        showUpload: true
      });
    },
    //展示图片
    showImg: function (e) {
      var that = this;
      uni.previewImage({
        urls: that.uploaderList,
        current: that.uploaderList[e.currentTarget.dataset.index]
      });
    },
    //上传图片
    upload: function (e) {
      var that = this;
      uni.chooseImage({
        count: 3 - that.uploaderNum,
        // 默认9
        sizeType: ['original', 'compressed'],
        // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'],
        // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          console.log(res); // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片

          let tempFilePaths = res.tempFilePaths;
          let uploaderList = that.uploaderList.concat(tempFilePaths);

          if (uploaderList.length == 9) {
            that.setData({
              showUpload: false
            });
          }

          that.setData({
            uploaderList: uploaderList,
            uploaderNum: uploaderList.length
          });
        }
      });
    },
    findEvent: function () {
      uni.showLoading({
        title: '最多选择3张图片'
      });
      setTimeout(function () {
        uni.hideLoading();
      }, 2000);
    },
    back: function () {
      uni.navigateBack({
        delta: 1
      });
    },
    bindTextAreaBlur: function (e) {
      console.log(e.detail.value);
      var that = this;
      that.setData({
        details: e.detail.value
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
@import "./applyRefund.css";
</style>