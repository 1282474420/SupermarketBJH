<template>
	<view class="flex">
		<view class="content-count">
			<view style="font-size: 25rpx;margin-right: 5rpx;">距拼购结束还剩</view>
			<uni-countdown color="#FFFFFF" background-color="#F44336" border-color="#F44336" border-radius="40rpx" :show-day="false" :hour="21" :minute="38" :second="05"></uni-countdown>
		</view>
		
		<view>
			<block v-for="(goods) in goodsList" :key="goods.id">
			  <view class="groupBlock" @click="goodsInfo(goods.id)">
			    <image :src="goods.picturepath" mode="widthFix" class="groupImg"></image>
			    <!-- <text class='shopp_activity' wx:if="{{item.activity}}">{{item.activity}}</text> -->
			    <view class="groupName">{{goods.goodsName}}</view>
			    <view class="info">
			    	<view class="info-item">2人团</view>
			    	<view class="price"><text class="price-tip">¥</text>{{ goods.activityprice }}</view>
			    </view>
			    <view class="info2">
			    	<text class="people">已有570人拼</text>
			    </view>
			  </view>
			</block>
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
				url: 'http://localhost:8080/commodity/activeCom',
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
					url:'../group_buying_goods/group_buying_goods?id='+e
				})
			}
		}
	}
</script>

<style>
	.flex {
	  background-color:#f8f8f8;
	  height: 1400rpx;
	}
	
	.groupBlock{
		border-radius: 20rpx;
		display: inline-block;
		background-color: #fff;
		width: 335rpx;
		position: relative;
		margin-left: 30rpx;
		margin-top: 20rpx;
	}
	
	.groupImg{
		width: 335rpx;
		height: 335rpx;
	}
	
	.groupName{
		margin-top: 18rpx;
		margin-left: 20rpx;
		font-size: 26rpx;
		width: 250rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-weight: bold;
	}
	
	
	
	.content-count{
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 30rpx;
	}
	
	.flex-item{
		width: 370rpx;
		/* padding: 0 4% 3vw 4%; */
		padding-left: 20rpx;
		display: flex;
		/* flex-direction: row;
		justify-content: space-between; */
		flex-wrap: wrap ;
		margin-top: 30rpx;
	}
	
	.product {
		width: 92%;
		border-radius: 15rpx;
		background-color: #fff;
		margin: 0 0 25rpx 0;
	}
	
	.product image {
		width: 280rpx;
		height: 280rpx;
		margin-left: 30rpx;
		margin-top: 30rpx;
		border-radius: 20upx 20upx 0 0;
	}
	
	.name {
		width: 92%;
		padding: 5rpx 20rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		text-align: justify;
		overflow: hidden;
		font-size: 30upx;
		font-weight: bold;
	}
	
	.info {
		display: flex;
		/* justify-content: space-between; */
		/* align-items: flex-end; */
		width: 92%;
		padding-top: 10rpx;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		/* padding: 10rpx 0rpx 10rpx 25rpx; */
		border-bottom: 1rpx #D8D8D8 solid;
	}
	
	.info-item{
		/* height: 40rpx;
		color: white;
		background-color: #FFB400;
		padding: 0rpx 15rpx;
		border-radius: 15rpx;
		font-size: 20rpx;
		margin-top: 10rpx; */
		
		margin-top: 7rpx;
		text-align: center;
		width: 78rpx;
		height: 32rpx;
		font-size: 20rpx;
		color: #fff;
		padding-top: 6rpx;
		background-image: linear-gradient(90deg, #ffa549 0%, #fe5c6a 100%),
		                    linear-gradient(#fe4531, #fe4531);
		border-radius: 20rpx;
	}
	
	.price-tip{
		color:#F44336;
		font-weight: bold;
		font-size: 30rpx;
		margin-left: 10rpx;
	}
	
	.price {
		color: #e65339;
		font-size: 40upx;
		font-weight: 600;
		font-family: 华文细黑;
		margin-top: -6rpx;
	}
	
	.info2{
		padding-bottom: 20rpx;
	}
	
	.people{
		color: #808080;
		font-size: 25rpx;
		margin-left: 20rpx;
	}
</style>
