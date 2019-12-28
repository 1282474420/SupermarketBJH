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
							<view class="uni-media-list-text-top" id="price">￥{{item.faceValue}}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis" id="availability">{{item.couponName}}</view>
						</view>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top" id="scope">{{ type[item.couponType.couponTypeId] }}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis" id="period">有效期至:{{item.endtime}}</view>
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
				coupons:[],
				type:{},
				show: false
			}
		},
		onLoad() {
			uni.request({
				url:'http://localhost:8080/discount/selectAll',
				method: 'POST',
				data: {},
				success: res => {
					this.coupons=res.data;
					// 时间问题
					for (var i in this.coupons) {
						this.coupons[i].endtime = this.happenTimeFun(this.coupons[i].endtime);
					}
					this.couponsType();
				},
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
			},
			couponsType() {
				uni.request({
					url:'http://localhost:8080/discount/coupontypes',
					method: 'POST',
					data: {},
					success: res => {
						var data=res.data;
						for(var i in data){
							this.$set(this.type,data[i].couponTypeId,data[i].couponTypeName)
						}
						console.log(this.type)
					},
					fail: () => {},
					complete: () => {}
				});
			},
			happenTimeFun(num){//时间戳数据处理
					let date = new Date(num);
					 //时间戳为10位需*1000，时间戳为13位的话不需乘1000
			        let y = date.getFullYear();
			        let MM = date.getMonth() + 1;
			        MM = MM < 10 ? ('0' + MM) : MM;//月补0
			        let d = date.getDate();
			        d = d < 10 ? ('0' + d) : d;//天补0
			        return y + '年' + MM + '月' + d + '日';
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
	height: 120%;
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
	font-size: 20rpx;
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
</style>
