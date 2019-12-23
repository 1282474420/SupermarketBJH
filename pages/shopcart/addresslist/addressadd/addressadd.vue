<template>
	<view class="bigv">

		<form @submit="formBindSubmit">
			<view class="v1">
				<text>收货人</text>
			</view>
			<view class="v2">
				<view class="v3">
					<text>收货人</text><input name="name" type="text" placeholder="   姓名"></input>
					<input name="member_id" hidden="true" value="10031"></input>
					<input name="moren" hidden="true" value="0"></input>
				</view>
				<view class="v3">
					<text>手机号码</text><input name="phone" type="text" placeholder="   11位手机号码"></input>
					<button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">获取手机号</button>
				</view>
			</view>

			<view class="v1">
				<text>收货地址</text>
				<view class="v1_1">
					<image src="../../../static/images/img/address/dw_03.png"></image><text @tap="getAddress">一键获取地址</text>
				</view>
			</view>
			<view class="v2">
				<view class="v3">
					<text>所在地区</text><input name="x_address" :value="address" type="text" placeholder="   选择 省/市/区"></input>
				</view>
				<view class="v3">
					<text>详细地址</text><input name="details_ads" :value="imAddress" type="text" placeholder="   道路、街道门牌、小区房号等"></input>
				</view>
			</view>

			<view class="v2_3">
				<view class="v3">
					<text>设为默认</text>
					<view class="v3_1">
						<switch class="swi"></switch>
					</view>
				</view>
			</view>

			<view class="v5">
				<button class="btn" form-type="submit">保存并使用</button>
			</view>

		</form>

	</view>
</template>

<script>
	// pages/addressadd/addressadd.js
	//获取应用实例
	// const app = getApp().globalData;

	export default {
		data() {
			return {
				"phoneNumber": "13580006666",
				"purePhoneNumber": "13580006666",
				"countryCode": "86",
				"watermark": {
					"appid": "APPID"
				},
				address: '',
				imAddress: '',
				arrys1: ""
			};
		},

		components: {},
		props: {},

		onLoad: function(options) {
			var that = this;
			// getApp().globalData.initPage(that);
		},
		
		methods: {
			getPhoneNumber(e) {
				console.log(e.detail.errMsg);
				console.log(e.detail.iv);
				console.log(e.detail.encryptedData);
			},

			getAddress: function() {
				var that = this;
				uni.getLocation({
					type: "wgs84",
					success: function(res) {
						uni.openLocation({
							latitude: res.latitude,
							longitude: res.longitude,
							success: function(res) {
								uni.chooseLocation({
									success: function(res) {
										console.log(res);
										that.setData({
											address: res.address,
											imAddress: res.name
										});
									}
								});
							}
						});
					}
				});
			},
			formBindSubmit: function(options) {
				var that = this;
				// getApp().globalData.initPage(that);
				// var id = getApp().globalData.userInfo.userId;
				console.log(options.detail.value.name);
				console.log(options.detail.value.phone);
				console.log(options.detail.value.x_address);
				console.log(options.detail.value.detail_ads);
				var that = this;
				var name = options.detail.value.name;
				var phone = options.detail.value.phone;
				var x_address = options.detail.value.x_address;
				var details_ads = options.detail.value.details_ads;
				var moren = options.detail.value.moren;
				var member_id = options.detail.value.member_id;
				var TEL_REGEXP = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;

				if (name == "") {
					uni.showToast({
						icon: 'none',
						title: '收货人不能为空'
					});
				} else if (phone == "") {
					uni.showToast({
						icon: 'none',
						title: '手机号不能为空'
					});
				} else if (!TEL_REGEXP.test(phone)) {
					uni.showToast({
						icon: 'none',
						title: '手机号格式有误'
					});
				} else if (x_address == "") {
					uni.showToast({
						icon: 'none',
						title: '所在地区不能为空'
					});
				} else if (details_ads == "") {
					uni.showToast({
						icon: 'none',
						title: '详细地址不能为空'
					});
				} else {
					//新增地址
					uni.request({
						url: getApp().globalData.url + '/address/insert',
						data: {
							'xAddress': x_address,
							'detailsAds': details_ads,
							'moren': moren,
							'memberId': id,
							'name': name,
							'phone': phone
						},
						header: {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						method: 'POST',
						dataType: 'json',
						success: function(res) {
							that.setData({
								arrys1: res.data.data
							});
							uni.showToast({
								title: '保存成功',
								duration: 8000,
								mask: false
							});
							uni.navigateTo({
								url: '../addressget/addressget',
								success: function(res) {},
								fail: function(res) {},
								complete: function(res) {}
							});
							console.log(res.data);
						}
					});
				}
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
	@import "./addressadd.css";
</style>
