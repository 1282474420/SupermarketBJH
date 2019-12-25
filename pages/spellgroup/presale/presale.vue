<template>
	<view class='flex'>
		
		<image src="../../../static/groupImg/presale.png" class="slide-image" mode="widthFix"></image>
		
		<view class='flex-item' v-for="(goods) in goodsList" :key="goods.id" @click="goodsInfo(goods.id)">
		    <image :src="goods.picturepath" class="slide-image2" mode="widthFix" ></image>
			<view class="content">
				<text class="word1">{{goods.goodsName}}</text>
				<!-- <view class="word2">自提时间{{goods.createdate}}</view> -->
				<view class="word4">预售价
					<text class="price-tip">¥</text>
					<text class="word3">{{goods.activityprice}}</text>
				</view>
				<view class="atOnce-btn">马上抢</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList: []
			}
		},
		onLoad:function(){
			// var ma = null;
			// //获取缓存中的用户id
			// uni.getStorage({
			// 	key: 'ma_user_id',
			// 	success(res) {
			// 		ma = res.data.result.id;
			// 	}
			// });
			uni.request({
				url: 'http://localhost:8080/commodity/presellCom',
				method: 'POST',
				data:{},
				success: res => {
					this.goodsList = res.data;
					console.log(res);
					console.log(res.data);
				}
			});
		},
		methods: {
			goodsInfo:function(e){
				uni.showToast({
					title: "编号" + e,
					icon: "none"
				});
				uni.navigateTo({
					url:'../presale_goods/presale_goods?id='+e
				})
			}
		}
	}
</script>

<style>
	
	.flex {
	  background-color:#F0F0F0;
	  height: 1400rpx;
	}
	
	.slide-image{
	  width: 710rpx;
	  height: 230rpx;
	  margin-left: 20rpx;
	  margin-top: 20rpx;
	  border-radius: 15rpx;
	}
	
	.flex-item{
	  background-color: white;
	  width: 710rpx;
	  height: 250rpx;
	  margin-left: 20rpx;
	  margin-top: 20rpx;
	  margin-bottom: 5rpx;
	  border-radius: 15rpx;
	}
	
	.content{
		margin-left: 230rpx;
		width: 470rpx;
		padding-top: 60rpx;
	}
	
	.slide-image2{
	  width: 160rpx;
	  height: 160rpx;
	  margin-top: 40rpx;
	  margin-left: 40rpx;
	  vertical-align: middle;
	  float: left;
	  display: block;
	}
	
	.word1{
		font-size: 35rpx;
		font-weight:550;
	}
	
	.price-tip{
		color:#F44336;
		font-weight: 600;
		font-size: 20rpx;
		margin-left: 5rpx;
	}
	
	.word2{
		color:#808080;
		font-size: 25rpx;
		margin-top: 30rpx;
	}
	
	.word3{
		font-size: 40rpx;
		font-weight: 600;
		color:#FF3333;
		font-family: 华文细黑;
		margin-left: 5rpx;
	}
	
	.atOnce-btn{
		width: 160rpx;
		height: 60rpx;
		float: right;
		margin-top: -70rpx;
		margin-right: 15rpx;
		background-color: #f44336;
		font-size: 30rpx;
		color: white;
		border-radius: 15rpx;
		text-align: center;
		padding-top: 10rpx;
	}
	
	.word4{
		color:#808080;
		font-size: 25rpx;
		margin-top: 20rpx;
	}
	
	.mini-btn{
		float: right;
		margin-top: -80rpx;
		margin-right: 15rpx;
		background-color: #f44336;
		font-size: 12rpx;
	}
</style>
