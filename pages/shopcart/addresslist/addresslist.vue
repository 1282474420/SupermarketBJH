<template>
	<view class="bigv">
		<view class="xv"></view>

		<navigator url="addressupd/addressupd">
			<view class="v1" v-for="(item, index) in arrys1" :key="index">
				<view class="v1_1">
					<text>{{item.text1}}</text>
				</view>

				<view class="v1_2">
					<view class="v2">
						<image class="img1" src="../../../static/images/img/address/dztb_03.png"></image>
					</view>

					<view class="v3">
						<image class="img2" src="../../../static/images/img/address/djjr2_03.png"></image>
					</view>

					<view class="v4">
						<text>{{item.text2}}</text>
					</view>
				</view>
			</view>
		</navigator>

		<view class="v5">
			<navigator url="addressadd/addressadd">
				<button class="btn1">添加新地址</button>
			</navigator>
			<button class="btn2">导入微信地址</button>
		</view>
	</view>
</template>

<script>
	//index.js
	//获取应用实例
	// const app = getApp().globalData;

	export default {
		data() {
			return {
				arrys1: [{
					id: 0,
					text1: "张三  132****2333",
					text2: "广东省深圳市龙华区东环二路东侧365花园M1栋"
				}, {
					id: 1,
					text1: "李四  132****2333",
					text2: "广东省深圳市龙华区东环二路东侧365花园M1栋"
				}, {
					id: 2,
					text1: "王五  132****2333",
					text2: "广东省深圳市龙华区东环二路东侧365花园M1栋"
				}],
				userInfo: "",
				hasUserInfo: false
			};
		},

		components: {},
		props: {},
		onLoad: function() {
			var that = this; // 初始化

			// getApp().globalData.initPage(that);

			// if (getApp().globalData.userInfo) {
			// 	this.setData({
			// 		userInfo: getApp().globalData.userInfo,
			// 		hasUserInfo: true
			// 	});
			// } else if (this.canIUse) {
			// 	// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 	// 所以此处加入 callback 以防止这种情况
			// 	getApp().globalData.userInfoReadyCallback = res => {
			// 		this.setData({
			// 			userInfo: res.userInfo,
			// 			hasUserInfo: true
			// 		});
			// 	};
			// } else {
			// 	// 在没有 open-type=getUserInfo 版本的兼容处理
			// 	uni.getUserInfo({
			// 		success: res => {
			// 			getApp().globalData.userInfo = res.userInfo;
			// 			this.setData({
			// 				userInfo: res.userInfo,
			// 				hasUserInfo: true
			// 			});
			// 		}
			// 	});
			// }
		},
		methods: {
			//事件处理函数
			bindViewTap: function() {
				uni.navigateTo({
					url: '../logs/logs'
				});
			},
			getUserInfo: function(e) {
				console.log(e);
				// getApp().globalData.userInfo = e.detail.userInfo;
				this.setData({
					userInfo: e.detail.userInfo,
					hasUserInfo: true
				});
			},
			setData: function(obj, callback) {
				let that = this;
				let keys = [];
				let val, data;
				Object.keys(obj).forEach(function(key) {
					keys = key.split('.');
					val = obj[key];
					data = that.$data;
					keys.forEach(function(key2, index) {
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
	@import "./addresslist";
</style>
