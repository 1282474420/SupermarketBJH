<template>
	<!-- 支付成功明细 -->
	<view>
		<view class="viewpt">
			<view class="titlesuccess">
				<view class="imgs">
					<image src="../../../static/images/img/yes_fill.png" style="width: 65upx;height: 65upx;"></image>
				</view>
				<view class="successtext">支付成功</view>
			</view>
		</view>
		<view class="viewpt">
			<view class="titlename">
				<view class="viewname">订单编号</view>
				<view class="viewtext">{{paylist.orderid}}</view>
			</view>
		</view>
		<view class="viewpt">
			<view class="titlename">
				<view class="viewname">下单时间</view>
				<view class="viewtext">{{paylist.newtimes}}</view>
			</view>
		</view>
		<view class="viewpt">
			<view class="titlename">
				<view class="viewname">支付方式</view>
				<view class="viewtext">微信支付</view>
			</view>
		</view>
		<view class="viewpt">
			<view class="titlename">
				<view class="viewname">支付金额</view>
				<view class="viewtext">{{paylist.goodsPrice}}</view>
			</view>
		</view>
		<view style="margin-top: 50upx;">
			<button class="btnorder" @click="lookorder">查看订单</button>
			<button class="btnhome" plain="true" style="color: #ee7f72;" @click="returnhome">返回首页</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderid:"",
				paylist:{}
			}
		},
		onLoad:function(ex){
			console.log(ex);
			this.orderid=ex.orderid;
		},
		onShow:function(e){
			uni.getStorage({
				key:"paymentOrder",
				success: (res) => {
					for(var i=0;i<res.data.length;i++){
						if(this.orderid==res.data[i].orderid){
							this.paylist=res.data[i]
						}
					}
				}
			});
		},
		methods: {
			lookorder:function (e){
				uni.reLaunch({
					url:"../../shopcart/myorder/forpayment/forpayment"
				})
			},
			returnhome:function (e){
				uni.reLaunch({
					url:"../../home/home/home"
				})
			},
		}
	}
</script>

<style>
	.titlesuccess{
		display: inline-block;
		vertical-align: middle;
		margin-top: 80upx;
		margin-left: 250upx;
	}
	.imgs{
	    display: inline-block;
	    vertical-align: middle;
	}
	.successtext{
		display: inline-block;
		font: bold;
		font-size: 45upx;
		margin-left: 10upx;
	}
	.viewpt{
		padding-bottom: 50upx;
		border-bottom: 0.5upx solid #C8C7CC;
	}
	.titlename{
		width: 100%;
		margin-top: 50upx;
	}
	.viewname{
		width: 20%;
		text-align: left;
		display: inline-block;
		margin-left: 40upx;
		color: #C0C0C0;
	}
	.viewtext{
		width: 70%;
		text-align: right;
		display: inline-block;
	}
	.btnorder{
		width: 70%;
		line-height: 100upx;
		background-color: #ff4433;
		color: #F8F8F8;
	}
	.btnhome{
		margin-top: 30upx;
		width: 70%;
		line-height: 100upx;
	}
</style>
