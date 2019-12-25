<template>
<view>
<!--我的  我的收藏-->
<view class="main">
	<block v-for="(item, index) in collect" :key="index">
		<view class="sc" @click="sc(item.id)">
	           <image mode="widthFix" :src="item.picturepath">
	         <!-- 右侧 商品容器 -->
			 <view class="bt">
			 <text class="ss">{{item.goodsName}}</text>
	         <view class="money">
	           <text>¥</text>{{item.price}}</view>
	         <view class="zt">
				   <text class="gm" >立即购买</text>
				 </view>
			 </view>
			 </view>
	 </block> 
</view>
<view class="pig" v-if="pig">亲,还没有收藏哦~</view>
</view>
</template>

<script>
export default {
  data() {
    return {
	  //收藏列表数据
      collect: [],
      // pig: false,
      //api路径
      // url: getApp().globalData.url,
      //门店id
      // mdIndex: getApp().globalData.mdIndex
    };
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	  uni.getStorage({
	  	key:"collect",
	  	success: (res) => {
	  		console.log(res.data)
	  		this.collect=res.data 

	  	}
	  });
	  
    // var that = this;
    // var url = that.url; //api路径

    // var mdIndex = that.mdIndex; //门店id

    // getApp().globalData.initPage(that);

    // if (that.userInfo == null) {
    //   that.userInfo = getApp().globalData.userInfo;
    // } //用户信息


    // var userid = that.userInfo.userId; //查询收藏商品

    // uni.request({
    //   url: url + '/collect/getCollect?userId=' + userid + '&resId=' + mdIndex,
    //   method: 'POST',
    //   header: {
    //     "Content-Type": "application/json"
    //   },
    //   success: res => {
    //     that.setData({
    //       sc: res.data.data
    //     });

    //     if (res.data.data.length == 0) {
    //       that.setData({
    //         pig: true
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
  onShow: function (options) {
	  uni.getStorage({
	  	key:"collect",
	  	success: (res) => {
	  		console.log(res.data)
	  		this.collect=res.data 
	  
	  	}
	  });
  },

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
	  sc:function(e) {
	  	uni.navigateTo({
	  		url:"../../producttype/ProductDetails/ProductDetails?id="+e
	  	})
	  }
    /**
     * 取消收藏
     */
    // deleteList: function (e) {
    //   var id = e.currentTarget.dataset.cid;
    //   var that = this;
    //   var url = that.url; //api路径

    //   var mdIndex = that.mdIndex; //门店id
    //   //用户信息

    //   var userid = that.userInfo.userId;
    //   uni.request({
    //     url: url + '/collect/deleteCollect?commId=' + id + '&userId=' + userid + '&resId=' + mdIndex,
    //     method: 'POST',
    //     header: {
    //       "Content-Type": "application/json"
    //     },
    //     success: res => {
    //       //不跳转页面删除商品
    //       let sc = this.sc;
    //       var index = e.currentTarget.dataset.index;
    //       console.log(index);
    //       sc.splice(index, 1);
    //       this.setData({
    //         sc: sc
    //       });
    //       uni.showToast({
    //         title: '取消成功',
    //         icon: 'none',
    //         duration: 200
    //       });

    //       if (sc.length <= 0) {
    //         that.setData({
    //           pig: true
    //         });
    //       }
    //     }
    //   });
    // },

    // /**
    //  * 立即购买
    //  */
    // nihao: function (e) {
    //   var cid = e.currentTarget.dataset.cid;
    //   uni.redirectTo({
    //     url: '/pages/wddd/index?cid=' + cid
    //   });
    // },

    // /**
    //  * 添加数据到购物车
    //  */
    // addShopp: function (e) {
    //   var url = this.url; //api路径

    //   var mdIndex = this.mdIndex; //门店id

    //   var cid = e.currentTarget.dataset.cid; //用户信息

    //   var userid = this.userInfo.userId;
    //   uni.request({
    //     url: url + '/collect/addShopp?cid=' + cid + '&userid=' + userid + '&resId=' + mdIndex,
    //     method: 'POST',
    //     header: {
    //       "Content-Type": "application/json"
    //     },
    //     success: function (res) {
    //       if (res.data.data) {
    //         uni.showToast({
    //           title: '加入购物车',
    //           icon: 'success',
    //           duration: 500
    //         }); //跳转到购物车页面

    //         uni.reLaunch({
    //           url: '/pages/shopping/shopping'
    //         });
    //       } else {
    //         uni.showToast({
    //           title: '添加失败',
    //           duration: 500
    //         });
    //       }
    //     }
    //   });
    // },
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
@import "./myFavorite.css";
</style>