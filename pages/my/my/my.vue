<template>
	<!--我的  我的主页面-->
	<view class="qb">
		<view class="tb">
			<image src="http://139.129.97.88:8080/static/images/img/my/tbbj_01.png" class="tbbj"></image>
		</view>
		<!-- 用户信息里面有数据 -->
		<view class="user" v-for="(item, index) in user" :key="index">
			<!-- 	  头像
    <image :src="item.vipImages" class="mytx"></image>
	
    <view class="name">{{item.vipMname}}</view>
	 -->
			<view class="tx-w">
				<view class="tx">
					<image class="mytx" :src="yonghuwx.avatarUrl"></image>
					<view class="zx"></view>
				</view>
				<view class="name">{{yonghuwx.nickName}} </view>
			</view>
			<view class="hyxx">
				<image src="http://139.129.97.88:8080/static/images/img/my/state_03.png" class="state_icon"></image>
				<text class="state">会员用户</text>
				<text class="user_integral">积分：{{item.vipIntegral}}</text>
			</view>
			<view class="hydl" @tap="dl">退出登录 ></view>
		</view>
		<view class="myorder">
			<view class="myorder_head">
				<text>我的订单</text>
				<image src="http://139.129.97.88:8080/static/images/img/my/jt_03.png" class="jt"></image>
			</view>
			<view>
				<block v-for="(item, index) in order" :key="index">
					<view class="order_block" @tap="dingdan" :data-url="item.url">
						<view>
							<image :src="item.img" class="order_img"></image>
							<!-- <text class="order_num">{{item.num<=10? '0'+item.num : (item.num>=10 && item.num<100)? item.num: '99+' }}</text> -->
						</view>
						<view class="order_title">{{item.title}}</view>
					</view>
				</block>
			</view>
		</view>
		<view class="grzx">
			<view class="grzx_head"> 个人中心 </view>
			<button @getphonenumber="getPhoneNumber" open-type="getPhoneNumber" v-if="authorizationPhone"></button>
			<view @tap="nav" class="grzx_block border" data-url="../myVipCard/myVipCard">
				<image class="grzx_img" src="http://139.129.97.88:8080/static/images/img/my/service_03.png" role="img">
				</image>
				<view class="grzx_title">我的会员卡</view>
			</view>
			<view @tap="nav" class="grzx_block border" data-url="../myCoupons/myCoupons">
				<image class="grzx_img" src="http://139.129.97.88:8080/static/images/img/my/service_15.png" role="img">
				</image>
				<view class="grzx_title">我的优惠券</view>
			</view>
			<view @tap="nav" class="grzx_block" data-url="../myFavorite/myFavorite">
				<image class="grzx_img" src="http://139.129.97.88:8080/static/images/wink/shoucang.png" role="img">
				</image>
				<view class="grzx_title">我的收藏</view>
			</view>
			<view @tap="nav" class="grzx_block border" data-url="../../spellgroup/group/group">
				<image class="grzx_img" src="http://139.129.97.88:8080/static/images/img/my/service_07.png" role="img">
				</image>
				<view class="grzx_title">我的拼团</view>
			</view>
			<view @tap="nav" class="grzx_block border" data-url="../../shopcart/addresslist/addresslist">
				<image class="grzx_img" src="http://139.129.97.88:8080/static/images/img/my/service_11.png" role="img">
				</image>
				<view class="grzx_title">地址管理</view>
			</view>
			<view @tap="nav" class="grzx_block" data-url="../../home/chat/chat">
				<image class="grzx_img" src="http://139.129.97.88:8080/static/images/img/my/service_13.png" role="img">
				</image>
				<view class="grzx_title">在线客服</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 用户信息
				user: [{
					vipImages: "http://139.129.97.88:8080/static/images/wink/touxiang.jpg",
					vipMname: "winkli",
					vipIntegral: "550"
				}],
				yonghuwx: [],
				// 我的订单数据及页面跳转
				order: [{
					img: "http://139.129.97.88:8080/static/images/img/my/icon_03.png",
					title: "待付款",
					num: "1",
					url: "../../shopcart/myorder/forpayment/forpayment"
				}, {
					img: "http://139.129.97.88:8080/static/images/img/my/icon_05.png",
					title: "待配送",
					num: "2",
					url: "../../shopcart/myorder/forpayment/forpayment"
				}, {
					img: "http://139.129.97.88:8080/static/images/img/my/icon_07.png",
					title: "配送中",
					num: "20",
					url: "../../shopcart/myorder/forpayment/forpayment"
				}, {
					img: "http://139.129.97.88:8080/static/images/img/my/icon_09.png",
					title: "售后",
					num: "100",
					url: "../../shopcart/myorder/forpayment/forpayment"
				}]
			};
		},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			let that = this;
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					// 获取用户信息				
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							that.yonghuwx = infoRes.userInfo;
							console.log(that.yonghuwx);
						}
					});
				}
			});
			// var that = this;
			// getApp().globalData.initPage(that);
			// that.cxyhxx();

			// if (that.userInfo == null) {
			//   that.userInfo = getApp().globalData.userInfo;

			//   if (that.userInfo.cellPhone != null && "" != that.userInfo.cellPhone) {
			//     that.setData({
			//       authorizationPhone: false
			//     });
			//     console.log("false" + that.authorizationPhone);
			//   } else {
			//     that.setData({
			//       authorizationPhone: true
			//     });
			//     console.log("ture" + that.authorizationPhone);
			//   }

			//   console.log(that.authorizationPhone);
			// } //测试是否能拿到数据


			// console.log(that.ces);
		},
		methods: {
			//个人中心页面跳转
			nav: function(e) {
				var zz = e.currentTarget.dataset.url;
				uni.navigateTo({
					url: zz+"?cond=1"
				});
			},
			//会员登录页面跳转
			dl: function(e) {
				uni.reLaunch({
					url: '../login/login'
				});
			},
			//我的订单页面跳转
			dingdan: function(e) {
				var zz = e.currentTarget.dataset.url;
				uni.navigateTo({
					url: zz
				});
			},

			// 得到用户手机号码getPhonneNumber
			// getPhoneNumber(e) {
			//   var that = this; //用户还没有授权  授权后才让进去  不授权不让！！！
			//   //检查用户是否处于登陆状态
			//   // uni.checkSession({
			//   //  success: function() {
			//   //还处于登陆状态   用户授权了

			//   var ency = e.detail.encryptedData;
			//   var iv = e.detail.iv;
			//   uni.request({
			//     url: getApp().globalData.url + '/member/getPhoneNumberByOpenId',
			//     data: {
			//       'openId': getApp().globalData.userInfo.openId,
			//       'ency': ency,
			//       'iv': iv
			//     },
			//     header: {
			//       "content-type": "application/x-www-form-urlencoded"
			//     },
			//     method: "post",
			//     success: res => {
			//       //调用成功 
			//       if (res == -1) {//没有带参数进来
			//       } else if (res == 0) {
			//         //系统没修改成功  给用户提示
			//         conssole.log("系统没修改成功  给用户提示");
			//       } else {
			//         //保存手机号码成功
			//         console.log("//保存手机号码成功");
			//         console.log(res.data);
			//         getApp().globalData.userInfo.cellPhone = res.data;
			//         that.setData({
			//           cellPhone: res.data,
			//           authorizationPhone: false
			//         }); //跳转到我的会员卡页面

			//         console.log("执行保存号码成功，跳转到我的会员卡页面");
			//         uni.navigateTo({
			//           url: '../../vip/vip'
			//         });
			//       }
			//     },
			//     fail: res => {
			//       //调用接口失败
			//       console.log(res);
			//     }
			//   });
			//   that.cxyhxx(); //},
			//   //fail: function() {
			//   //没有处于登陆状态   执行登陆 
			//   //  console.log("处于没登陆状态  记得调用登陆方法")
			//   //   }
			//   //  }),
			// },


			// cxyhxx: function () {
			//   var that = this;
			//   uni.request({
			//     url: getApp().globalData.url + '/member/getMemberByUserID',
			//     data: {
			//       userId: getApp().globalData.userInfo.userId
			//     },
			//     method: 'POST',
			//     header: {
			//       "Content-Type": "application/x-www-form-urlencoded"
			//     }, 
			//     success: res => {
			//       that.setData({
			//         user: res.data.data
			//       });
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
	@import "./my.css";
</style>
