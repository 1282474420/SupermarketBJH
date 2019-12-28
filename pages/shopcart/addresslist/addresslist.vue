<template>
	<view class="bigv">
		<view class="xv"></view>

		<view>
			<view class="v1" v-for="(item, index) in arrys1" :key="index">
				<view @tap="addresstap(item)">
					<view class="v1_1">
						<text>{{item.name}} {{item.phone}}</text>
					</view>

					<view class="v1_2">
						<view class="v2">
							<image class="img1" src="http://139.129.97.88:8080/static/images/img/address/dztb_03.png"></image>
						</view>

						<view class="v3">
							<image @tap="addresstap(item)" class="img2" src="http://139.129.97.88:8080/static/images/img/address/djjr2_03.png"></image>
						</view>

						<view class="v4">
							<text>{{item.x_address}}{{item.details_ads}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="v5">
			<navigator url="addressadd/addressadd">
				<button class="btn1">添加新地址</button>
			</navigator>
			<button class="btn2">导入微信地址</button>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				// arrys1: [{
				// 	id: 0,
				// 	name: "张三",
				// 	phone:"132****2333",
				// 	xAddress:"广东省深圳市龙华区",
				// 	detailsAds: "东环二路东侧365花园M1栋"
				// }, {
				// 	id: 1,
				// 	name: "李四",
				// 	phone:"132****2333",
				// 	xAddress:"广东省深圳市龙华区",
				// 	detailsAds: "东环二路东侧365花园M1栋"
				// }, {
				// 	id: 2,
				// 	name: "王五",
				// 	phone:"132****2333",
				// 	xAddress:"广东省深圳市龙华区",
				// 	detailsAds: "东环二路东侧365花园M1栋"
				// }],
				arrys1: [],
				userInfo: "",
				hasUserInfo: false,
				cond:""
			};
		},

		components: {},
		props: {},
		onShow: function() {
			let me = this;
			if(me.num>0){
				uni.getStorage({
					key:"arr",
					success: (res) => {
						this.arrys1=res.data 
						console.log(this.arrys1)
					}
				});
			}
			me.num++;
		},
		onLoad: function(e) {
	// 		var that = this; // 初始化
	// 		uni.request({
	// 			url: "http://localhost:8080/queryMember.do",
	// 			method: 'POST',
	// 			data: {},
	// 			success: res => {
	// 				console.log("json",res);
	// 			}
	
	// 		});
			console.log("e",e);
			console.log("e2",e.cond);
			this.cond=e.cond;
			
			uni.getStorage({
				key:"arr",
				success: (res) => {
					this.arrys1=res.data 
					console.log(this.arrys1)
				}
			});
			
		},
		methods: {
			//事件处理函数
			bindViewTap: function() {
				uni.navigateTo({
					url: '../logs/logs'
				});
			},
			addresstap:function(e){
				if(this.cond==1){
					uni.navigateTo({
						url:"addressupd/addressupd?name="+e.name
					})
				}
				if(this.cond==2){
					uni.redirectTo({
						url:"../order/order?name="+e.name
					})
				}
				
			},
			updaddress:function(e){
				uni.navigateTo({
					url:"addressupd/addressupd?name="+e.name
				})
			},
			
			getUserInfo: function(e) {
				console.log(e);
				// getApp().globalData.userInfo = e.detail.userInfo;
				// this.setData({
				// 	userInfo: e.detail.userInfo,
				// 	hasUserInfo: true
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
	@import "./addresslist";
</style>
