<template>
	<view class="bigv">
		<form @submit="formBindSubmit">
				<view class="v1">
					<text>收货人</text>
				</view>

				<view class="v2">
					<view class="v3">
						<text>收货人</text><input name="name" type="text" :value="arrys1.name"></input>
						<!-- <input name="address_id" hidden="true" :value="item.id"></input>
						<input name="member_id" hidden="true" :value="item.memberId"></input>
						<input name="moren" hidden="true" :value="item.moren"></input> -->
					</view>
					<view class="v3 v8">
						<text>手机号码</text><input name="phone" type="text" :value="arrys1.phone"></input>
					</view>
				</view>

				<view class="v1">
					<text>收货地址</text>
				</view>

				<view class="v2">
					<view class="v3">
						<text>所在地区</text><input name="x_address" type="text" :value="arrys1.x_address"></input>
					</view>
					<view class="v3">
						<text>详细地址</text><input name="details_ads" type="text" :value="arrys1.details_ads"></input>
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
				<button class="btn1" @tap="shanchu">删除</button>
				<button class="btn2" form-type="submit">保存</button>
			</view>
		</form>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				arrys1: {},
				oid: "",
				dname:"",
				arr:[]
			};
		},

		components: {},
		props: {},
		
		onLoad: function(param) {
			this.dname=param.name;
			console.log("参数",this.dname);
			var that = this;
			uni.getStorage({
				key:"arr",
				success: (res) => {
					// this.arrys1=res.data 
					for(var i=0;i<res.data.length;i++){
						if(res.data[i].name == this.dname){
							this.arrys1=res.data[i]
						} 
					}
				}
			});
			
			// this.arrys1=options;
			// getApp().globalData.initPage(that);
			// var address_id = options.oid;
			// that.setData({
			// 	oid: address_id
			// }); //根据id查询地址信息

			// uni.request({
			// 	url: getApp().globalData.url + '/address/selectById?address_id=' + address_id,
			// 	data: {},
			// 	header: {
			// 		'content-type': 'application/json'
			// 	},
			// 	method: 'POST',
			// 	dataType: 'json',
			// 	success: function(res) {
			// 		that.setData({
			// 			arrys1: res.data.data
			// 		});
			// 		console.log(res.data);
			// 	}
			// });
		},
		methods: {
			formBindSubmit: function(options) {
				var that = this;
				// getApp().globalData.initPage(that);
				// var id = getApp().globalData.userInfo.userId;
				console.log(options.detail.value.name);
				console.log(options.detail.value.phone);
				console.log(options.detail.value.x_address);
				console.log(options.detail.value.details_ads);
				var that = this;
				var name = options.detail.value.name;
				var phone = options.detail.value.phone;
				var x_address = options.detail.value.x_address;
				var details_ads = options.detail.value.details_ads;
				// var address_id = options.detail.value.address_id;
				// var moren = options.detail.value.moren;
				// var member_id = id;
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
					that.arrys1.name = name;
					that.arrys1.phone = phone;
					that.arrys1.x_address = x_address;
					that.arrys1.details_ads = details_ads;
					let arr = uni.getStorageSync("arr") || [];
					console.log("arr",arr);
					let index = arr.findIndex(v => v.name === that.arrys1.name);
					console.log("index",index);
					if (index === -1) {
						//3  不存在 第一次添加
						let len = arr.length;
						for (let i = 0; i < len; i++) {
							if (this.dname == arr[i].name) {
								arr.splice(i, 1);
								break;
							}
						}
						arr.push(that.arrys1);
					}
					uni.setStorageSync("arr", arr);
					console.log("arr2",arr);
					uni.showToast({
						title: '保存成功',
						icon: 'success',
						// true 防止用户 手抖 疯狂点击按钮 
						mask: true
					});
					uni.redirectTo({
						url:"../../addresslist/addresslist"
					})
					
					
					// //根据id修改地址信息
					// uni.request({
					// 	url: getApp().globalData.url + '/address/update',
					// 	data: {
					// 		'address_id': address_id,
					// 		'x_address': x_address,
					// 		'details_ads': details_ads,
					// 		'moren': moren,
					// 		'member_id': member_id,
					// 		'name': name,
					// 		'phone': phone
					// 	},
					// 	header: {
					// 		"Content-Type": "application/x-www-form-urlencoded"
					// 	},
					// 	method: 'POST',
					// 	dataType: 'json',
					// 	success: function(res) {
					// 		that.setData({
					// 			arrys1: res.data.data
					// 		});
					// 		uni.showToast({
					// 			title: '保存成功',
					// 			duration: 8000,
					// 			mask: false
					// 		});
					// 		uni.navigateTo({
					// 			url: '../addressget/addressget',
					// 			success: function(res) {},
					// 			fail: function(res) {},
					// 			complete: function(res) {}
					// 		});
					// 		console.log(res.data);
					// 	}
					// });
				}
			},
			shanchu: function(options) {
				this.arr=uni.getStorageSync("arr");
				console.log("name:",this.arr[0].name);
				let len = this.arr.length;
				for (let i = 0; i < len; i++) {
					if (this.dname == this.arr[i].name) {
						this.arr.splice(i, 1);
						break;
					}
				}
				uni.setStorageSync("arr",this.arr);
				uni.showToast({
					title: '删除成功',
					icon: 'success',
					// true 防止用户 手抖 疯狂点击按钮 
					mask: true
				});
				uni.redirectTo({
					url:"../../addresslist/addresslist"
				})
				
				// var that = this;
				// var address_id = that.oid; //根据id删除地址信息
				
				// uni.request({
				// 	url: getApp().globalData.url + '/address/delete?address_id=' + address_id,
				// 	data: {},
				// 	header: {
				// 		'content-type': 'application/json'
				// 	},
				// 	method: 'POST',
				// 	dataType: 'json',
				// 	success: function(res) {
				// 		that.setData({
				// 			arrys1: res.data.data
				// 		});
				// 		uni.showToast({
				// 			title: '删除成功',
				// 			duration: 3000
				// 		});
				// 		uni.navigateTo({
				// 			url: '../addressget/addressget',
				// 			success: function(res) {},
				// 			fail: function(res) {},
				// 			complete: function(res) {}
				// 		});
				// 		console.log(res.data);
				// 	}
				// });
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
	@import "./addressupd.css";
</style>
