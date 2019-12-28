<template>
	<!-- 提交订单 -->
	<view>
		<!-- 收货地址 -->
		<view class="addr" @tap="selectAddress">
			<view class="icon">
				<image src="http://139.129.97.88:8080/static/images/img/addricon.png" mode=""></image>
			</view>
			<view>
				<view class="tel-name">
					<view class="name">
						{{recinfo.name}}
					</view>
					<view class="tel">
						{{recinfo.phone}}
					</view>
				</view>
				<view class="addres">
					{{recinfo.x_address}}
					{{recinfo.details_ads}}
				</view>
			</view>
		</view>
		<!-- 购买商品列表 -->
		<view class="buy-list">
			<view class="row" v-for="(row,index) in buylist" :key="index">
				<view class="goods-info" @tap="toGoods(row)">
					<view class="img">
						<image :src="row.picturepath"></image>
					</view>
					<view class="info">
						<view class="title">{{row.goodsName}}</view>
						<view class="spec">数量:{{row.number}}</view>
						<view class="price-number">
							<view class="price">￥{{row.price*row.number}}</view>
							<view class="number"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 提示-配送方式 -->
		<view class="order">
			<view class="row">
				<view class="left">
					配送方式
				</view>
			</view>
			<view class="row">
				<view>
					<radio-group @change="radioChange" class="radioDelivery">
						<radio :value="0" class="radiotext" checked />门店自提
						<radio :value="1" class="radiotext" />配送到家
						<radio :value="2" class="radiotext" />快递配送
					</radio-group>
				</view>
			</view>
			<view style="border-bottom: 1px solid #C8C7CC;"></view>
			<view class="row">
				<view>
					<view style="margin-left: 20upx;">
						<picker mode="date" @change="bindDateChange">
							<image src="http://139.129.97.88:8080/static/images/img/time.png" style="width: 40upx;height: 40upx;"></image>
							<text style="margin-left: 10upx; color: #808080;">{{titlename}}</text>
							<image src="http://139.129.97.88:8080/static/images/img/jiantou.png" style="margin-left: 350upx;width: 50upx;height: 50upx;"></image>
						</picker>
					</view>
				</view>
			</view>
		</view>

		<!-- <view class="order">
			<view class="row">
				<view class="left">
					<image src="../../../static/images/zf.png" class="zf"></image> 支付方式
				</view>
			</view>
			<view class="row">
				<view class="webox">
					<image src="../../../static/images/img/wxzf.png" style="display: none;" class="xz11"></image>
					<view class="weys" >
						<view class="wxzfk">
							<image src="../../../static/images/img/xz2.png" class="wxzf"></image>
							<text class="wxzfwz">微信支付</text>
						</view>
					</view>
				</view>
			</view>
			
		</view> -->

		<view class="blck">

		</view>
		<view class="footer">
			<view class="settlement">
				<view class="sum">合计:<view class="money">￥{{goodsPrice|toFixed}}</view>
				</view>
				<view class="btn" @tap="toPay">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				buylist: [], //订单列表
				goodsPrice: 0.0, //商品合计价格
				freight: 12.00, //运费
				titlename: "自提时间", //自提时间、配送时间、快递时间
				datatimes: "",
				recinfo: {},
				isDefault: true,
				addressname: ""
			};
		},
		onLoad: function(exper) {
			this.addressname = exper.name;
		},
		onShow: function(exper) {
			//页面显示时，加载订单信息
			uni.getStorage({
				key: 'buylist',
				success: (ret) => {
					this.buylist = ret.data;
					this.goodsPrice = 0;
					//合计
					let len = this.buylist.length;
					for (let i = 0; i < len; i++) {
						this.goodsPrice = this.goodsPrice + (this.buylist[i].number * this.buylist[i].price);
					}
					this.deduction = this.int / 100;
					this.sumPrice = this.goodsPrice - this.deduction + this.freight;
				}
			});
			console.log("addressname", this.addressname);
			uni.getStorage({
				key: 'arr',
				success: (e) => {
					console.log("e", e)
					console.log("e2", e.data[0])
					for (var i = 0; i < e.data.length; i++) {
						if (this.addressname != undefined && this.addressname == e.data[i].name) {
							this.recinfo = e.data[i]
						} else {
							this.recinfo = e.data[0]
						}
					}

				}
			})
		},

		onBackPress() {
			//页面后退时候，清除订单信息
			this.clearOrder();
		},
		filters: {
			toFixed: function(x) {
				return parseFloat(x).toFixed(2);
			}
		},
		methods: {
			clearOrder() {
				uni.removeStorage({
					key: 'buylist',
					success: (res) => {
						this.buylist = [];
						console.log('remove buylist success');
					}
				});
			},

			toPay() {
				//商品列表
				let paymentOrder = [];
				// let goodsid = [];
				let len = this.buylist.length;
				//获取当前系统时间
				var nowTime = new Date();
				var month = nowTime.getMonth() + 1; //一定要+1,表示月份的参数介于 0 到 11 之间。也就是说，如果希望把月设置为 8 月，则参数应该是 7。
				var date = nowTime.getDate();
				var seperator1 = "-"; //设置成自己想要的年月日格式：年-月-日
				var seperator2 = ":"; //设置成自己想要的时分秒格式：时:分:秒
				if (month >= 1 && month <= 9) {
					month = "0" + month;
				}
				if (date <= 9) {
					date = "0" + date;
				}
				var currentDate = nowTime.getFullYear() + seperator1 + month + seperator1 + date + " " + nowTime.getHours() +
					seperator2 + nowTime.getMinutes() + seperator2 + nowTime.getSeconds();
				console.log("当前系统时间", currentDate);

				//生成随机订单号
				var orderCode = '';
				for (var i = 0; i < 4; i++) //4位随机数，用以加在时间戳后面。
				{
					orderCode += Math.floor(Math.random() * 10);
				}
				orderCode = new Date().getTime() + orderCode; //时间戳，用来生成订单号。
				console.log("订单号:",orderCode);


				console.log("datatimes", this.datatimes);
				if (this.datatimes == "") {
					uni.showToast({
						title: '请选择出货时间',
						icon: 'none'
					});
				} else {
					for (let i = 0; i < len; i++) {
						this.buylist[i].newtimes = currentDate;
						this.buylist[i].orderid = orderCode;
						this.buylist[i].goodsPrice = this.goodsPrice;
						paymentOrder.push(this.buylist[i]);
						// goodsid.push(this.buylist[i].id);
					}
					if (paymentOrder.length == 0) {
						uni.showToast({
							title: '订单信息有误，请重新购买',
							icon: 'none'
						});
						return;
					}
					console.log("paymentOrder", paymentOrder);
					//本地模拟订单提交UI效果
					uni.showLoading({
						title: '正在提交订单...'
					})
					uni.setStorage({
						key: 'paymentOrder',
						data: paymentOrder,
						success: () => {
							uni.redirectTo({
								url: "../payment/payment?orderid="+orderCode
							})
						}
					})


					// setTimeout(() => {
					// 	uni.setStorage({
					// 		key: 'paymentOrder',
					// 		data: paymentOrder,
					// 		success: () => {
					// 			uni.hideLoading();
					// 			uni.redirectTo({
					// 				url: "../payment/payment?amount=" + this.sumPrice
					// 			})
					// 		}
					// 	})
					// }, 1000)
				}
			},
			//商品跳转
			toGoods(e) {
				uni.showToast({
					title: '商品 ' + e.goodsName,
					icon: "none"
				});
				uni.navigateTo({
					url: '../../goods/goods'
				});
			},
			//选择收货地址
			selectAddress() {
				uni.navigateTo({
					url: '../addresslist/addresslist?cond=2'
				})
			},
			bindDateChange: function(e) {
				this.titlename = e.target.value
				this.datatimes = this.titlename;
			},
			radioChange: function(evt) {
				var radioValue = evt.target.value;
				if (radioValue == 0) {
					this.titlename = "自提时间";
				}
				if (radioValue == 1) {
					this.titlename = "配送时间";
				}
				if (radioValue == 2) {
					this.titlename = "快递时间";
				}
			}
		}
	}
</script>

<style lang="scss">
	.addr {
		width: 86%;
		padding: 20upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;
		display: flex;

		.icon {
			width: 80upx;
			height: 80upx;
			display: flex;
			align-items: center;

			image {
				width: 60upx;
				height: 60upx;
			}
		}

		.tel-name {
			width: 100%;
			display: flex;
			font-size: 32upx;

			.tel {
				margin-left: 40upx;
			}
		}

		.addres {
			width: 100%;
			font-size: 26upx;
			color: #999;
		}
	}

	.buy-list {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			margin: 30upx 0;

			.goods-info {
				width: 100%;
				display: flex;

				.img {
					width: 22vw;
					height: 22vw;
					border-radius: 10upx;
					overflow: hidden;
					flex-shrink: 0;
					margin-right: 10upx;

					image {
						width: 22vw;
						height: 22vw;
					}
				}

				.info {
					width: 100%;
					height: 22vw;
					overflow: hidden;
					display: flex;
					flex-wrap: wrap;
					position: relative;

					.title {
						width: 100%;
						font-size: 28upx;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 2;
						// text-align: justify;
						overflow: hidden;
					}

					.spec {
						font-size: 22upx;
						background-color: #f3f3f3;
						color: #a7a7a7;
						height: 40upx;
						display: flex;
						align-items: center;
						padding: 0 10upx;
						border-radius: 20upx;
						margin-bottom: 20vw;
					}

					.price-number {
						position: absolute;
						width: 100%;
						bottom: 0upx;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						font-size: 28upx;
						height: 40upx;

						.price {
							color: #f06c7a;
						}

						.number {
							display: flex;
							justify-content: center;
							align-items: center;

						}
					}
				}
			}
		}
	}

	.order {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			margin: 20upx 0;
			height: 50upx;
			display: flex;

			.left {
				font-size: 28upx;
				color: #808080;
			}

		}
	}

	.blck {
		width: 100%;
		height: 100upx;
	}

	.footer {
		width: 92%;
		padding: 0 4%;
		background-color: #fbfbfb;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 28upx;
		position: fixed;
		bottom: 0upx;
		z-index: 5;

		.settlement {
			width: 80%;
			display: flex;
			justify-content: flex-end;
			align-items: center;

			.sum {
				width: 50%;
				font-size: 28upx;
				margin-right: 10upx;
				display: flex;
				justify-content: flex-end;

				.money {
					font-weight: 600;
				}
			}

			.btn {
				padding: 0 30upx;
				height: 60upx;
				background-color: #f06c7a;
				color: #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30upx;
				border-radius: 40upx;
			}
		}
	}

	.detail {
		width: 86%;
		padding: 10upx 3%;
		margin: 30upx auto 20upx auto;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		border-radius: 20upx;

		.row {
			height: 60upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.nominal {
				font-size: 28upx;
			}

			.content {
				font-size: 26upx;
				color: #f06c7a;
			}
		}
	}

	.radiotext {
		margin-left: 20upx;
	}

	// .zf{
	// 	width: 30upx;
	// 	height: 30upx;
	// }
	// .wxbox {
	//   width: 330rpx;
	//   height: 90rpx;
	//   float: left;
	//   border: 2px solid #999;
	//   border-radius: 8rpx 8rpx 8rpx 8rpx;
	//   position: relative;
	// }
	// .xz11 {
	//   position: absolute;
	//   left: 335rpx;
	//   width: 34rpx;
	//   height: 34rpx;
	// }
</style>
