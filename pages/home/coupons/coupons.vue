<template>
	<view class="content">
		<view class="head" @tap="openstores">
			<view class="mall">
				<text>全部商场<text class="active"> > </text></text>
			</view>
		</view>
		<view class="middle">
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in coupons" :key="index">
					<view class="uni-media-list">
						<view class="uni-media-list-text">
							<view class="uni-media-list-text-top" id="price">￥{{item.price}}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis" id="availability">{{item.availability}}</view>
						</view>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top" id="scope">{{item.scope}}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis" id="period">{{item.period}}</view>
						</view>
					</view>
					<view class="uni-media-list-text1">
						<view class="uni-media-list-text-center" @click="showPopup()">立即领取</view>
					</view>
					<van-popup overlay-style="background:rgba(0,0,0,0.3);" :show="show" @close="onClose()" custom-style="height: 25%;width: 60%;border-radius:15rpx 15rpx 15rpx 15rpx;">
						<view class="uni-media-text">温馨提示</view>
						<hr/>
						<view class="uni-media-text1">恭喜您领券成功，现在就去使用吧~</view>
						<button class="uni-media" type="primary" style="background-color: #4CD964;" @tap="openchanpin">去使用</button>
					</van-popup>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coupons:[{price:'6',availability:'满29可用',scope:'全品类（活动商品除外）',period:'有效期至2019年11月27日'},
				{price:'10',availability:'满49可用',scope:'全品类（活动商品除外）',period:'有效期至2019年11月27日'},
				{price:'10',availability:'满49可用',scope:'全品类（活动商品除外）',period:'有效期至2019年11月27日'}],
				show: false
			}
		},
		onLoad() {
			uni.request({
				url: '',
				method: 'POST',
				data: {},
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			showPopup() {
			    this.show = true ;
			},
			
			onClose() {
			    this.show = false ;
			},
			openchanpin() {
				uni.reLaunch({
				  	url: '/pages/producttype/chanpin/chanpin',
				  	success: res => {},
				  	fail: () => {},
				  	complete: () => {}
				});
			},
			openstores() {
				uni.reLaunch({
				  	url: '/pages/home/stores/stores',
				  	success: res => {},
				  	fail: () => {},
				  	complete: () => {}
				});
			}
		}
	}
</script>

<style>
.mall{
	display: flex;
	flex-direction: column;
	padding-left: 50rpx;
	border-top: #D9D9D9 1rpx solid;
	padding-top: 30rpx;
	margin-top: 30rpx;
	margin-bottom: 30rpx;
	background-color: #FFFFFF;
}
.active{
	margin-left: 480rpx;
}
.middle{
	display: flex;
	flex-direction: column;
	background-color: #F0F0F0;
	width: 730rpx;
	height: 1000rpx;
	margin-left: 10rpx;
}
.uni-media-list-text,.uni-media-list-body{
	display:inline-block;
}
.uni-media-list-text{
	color: red;
	width: 160rpx;
	height: 200rpx;
	text-align: center;
}
.uni-media-list-body{
    width: 440rpx;
	height: 200rpx;
	padding-top: 50rpx;
}

.uni-media-list,.uni-media-list-text1{
	display:inline-block;
}
.uni-media-list{
	width: 600rpx;
	height: 200rpx;
	margin-left: 20rpx;
	margin-top: 20rpx;
	background-color: #FFFFFF;
	border-radius:10rpx 10rpx 10rpx 10rpx;
}
#scope,#period{
	margin-left: 13rpx;
	border-left: #D9D9D9 1rpx solid;
	height: 60rpx;
	padding-left: 13rpx;
}
.uni-media-list-text1{
	background-color: red;
	height: 200rpx;
	width: 90rpx;
	border-radius:10rpx;
	color: #FFFFFF;
	
}
.uni-media-list-text-center{
	font-size: 40rpx;
	margin-top: 45rpx;
}
#availability{
	width: 160rpx;
	background-color:#FFE4E1;
	font-size: 30rpx;
}
#price{
	font-size: 60rpx;
}
.uni-media-text{
	text-align: center;
	margin-top: 30rpx;
	border-bottom: #D9D9D9 1rpx solid;
	padding-bottom: 25rpx;
}
.uni-media-text1{
	text-align: center;
	font-size: 25rpx;
	margin-top: 30rpx;
}
.uni-media{
	margin-top: 50rpx;
	width: 400rpx;
}
.uni-media-popup{
	border-radius:10rpx 10rpx 10rpx 10rpx;
	width: ;
}
#period{
	font-size: 25rpx;
	color: #999999;
}
</style>
