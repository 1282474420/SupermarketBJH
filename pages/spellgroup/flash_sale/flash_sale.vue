<template>
	<view class='flex'>
		<image src="../../../static/groupImg/flash_sale.png" class="slide-image" mode="widthFix"></image>
		
		<view class="content-count">
			<view style="color: #808080;margin-top: 10rpx;font-size: 30rpx;">本场还剩</view>
			<uni-countdown color="#FFFFFF" background-color="#F44336" border-color="#F44336" border-radius="20rpx" :show-day="false" :hour="21" :minute="38" :second="05"></uni-countdown>
		</view>
		
		<view class='flex-item' v-for="(goods) in goodsList" :key="goods.presell" @click="goodsInfo(goods.id)">
		    <image :src="goods.picturepath" class="slide-image2" mode="widthFix" ></image>
			<view class="content">
				<view class="word1">{{goods.goodsName}}</view>
				<view class="info-box">
					<view class="word2">
						限时价:<text class="price-tip">¥</text><text class="price">{{goods.activityprice}}</text>
					</view>
					<!-- <text class="m-price">¥{{goods.price}}</text> -->
				</view>
				<view class="content-price">
					<text class="m-price">原价¥{{goods.price}}</text>
				</view>
				<!-- <view class="content-kucun">
					<view class="kucun">仅剩25件</view>
				</view> -->
				<view class="atOnce-btn">马上抢</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
	export default {
	    components: {uniCountdown},
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
				url: 'http://localhost:8080/commodity/boundsCom',
				method: 'POST',
				data:{},
				success: res => {
					this.goodsList = res.data;
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
					url:'../flash_sale_goods/flash_sale_goods?id='+e
				})
			}
		}
	}
</script>

<style>
	.content-count{
		display: flex;
		margin-left: 220rpx;
	}
	
	.flex {
	  flex-direction:row;
	  /* flex-direction: column;
	  justify-content: center; */
	  background-color:#F0F0F0;
	  height: 1400rpx;
	}
	
	.slide-image{
	  width: 710rpx;
	  height: 230rpx;
	  border-radius: 15rpx;
	  overflow:hidden;
	  margin-left: 20rpx;
	  margin-top: 20rpx;
	}
	
	.flex-item{
	  width: 700rpx;
	  height: 270rpx;
	  border-radius: 15rpx;
	  overflow:hidden;
	  background-color: white;
	  margin-left: 23rpx;
	  margin-top: 20rpx;
	  margin-bottom: 5rpx;
	}
	
	.content{
		margin-left: 250rpx;
		margin-top: 15rpx;
		width: 470rpx;
		padding-top: 40rpx;
	}
	
	.content-kucun{
		border: 1 #F0AD4E solid;
		border-radius:20rpx;
		width:200rpx;
		height: 50rpx;
		margin-top: 20rpx;
	}
	
	.kucun{
		color: #F0AD4E;
		font-size: 24rpx;
		border: 1 #F0AD4E solid;
		
	}
	
	.slide-image2{
	  width: 170rpx;
	  height: 170rpx;
	  margin-top: 50rpx;
	  margin-left: 40rpx;
	  vertical-align: middle;
	  float: left;
	  display: block;
	}
	
	.word1{
		font-size: 35rpx;
		font-weight:550;
	}
	
	.word2{
		color:#808080;
		font-size: 25rpx;
		margin-top: 10rpx;
	}
	
	.info-box{
		background-color: white;
		font-size: 20upx;
		/* padding-left: 30rpx;
		padding-top: 10rpx; */
		/* padding-bottom: 20rpx; */
		display:flex;
		align-items:baseline;
		/* height: 65upx; */
	}
	
	.price-tip{
		color:#F44336;
		font-weight: 600;
		font-size: 20rpx;
		margin-left: 7rpx;
	}
	.price {
		font-size: 40rpx;
		font-weight: 600;
		color:#F44336;
		margin-left: 7rpx;
		/* font-family: 华文细黑; */
	}
	
	.m-price{
		/* margin-left: 50rpx; */
		font-size: 25rpx;
		color:#8F8F94;
		text-decoration: line-through;
	}
	
	.word3{
		font-size: 32rpx;
		font-weight: 600;
		color:#FF3333;
	}
	
	.atOnce-btn{
		width: 160rpx;
		height: 60rpx;
		float: right;
		margin-top: -60rpx;
		margin-right: 50rpx;
		background-color: #f44336;
		font-size: 30rpx;
		color: white;
		border-radius: 15rpx;
		text-align: center;
		padding-top: 10rpx;
	}
</style>
