<template>
	<!-- 提交订单 -->
	<view>
		<!-- 收货地址 -->
		<view class="addr" @tap="selectAddress">
			<view class="icon">
				<image src="../../../static/images/img/addricon.png" mode=""></image>
			</view>
			<view >
				<view class="tel-name">
					<view class="name">
						{{recinfo.name}}
					</view>
					<view class="tel">
						{{recinfo.tel}}
					</view>
				</view>
				<view class="addres">
					{{recinfo.address.region.label}}
					{{recinfo.address.detailed}}
				</view>
			</view>
		</view>
		<!-- 购买商品列表 -->
		<view class="buy-list">
			<view class="row" v-for="(row,index) in buylist" :key="index">
				<view class="goods-info"  @tap="toGoods(row)">
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
		<!-- 提示-备注 -->
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
						<radio :value="1" class="radiotext"  />配送到家
						<radio :value="2" class="radiotext"  />快递配送
					</radio-group>
				</view>
			</view>
			<view style="border-bottom: 1px solid #C8C7CC;"></view>
			<view class="row">
				<view >
					<view style="margin-left: 20upx;">
						<picker mode="date" @change="bindDateChange">
							<image src="../../../static/images/img/time.png" style="width: 40upx;height: 40upx;"></image>
							<text style="margin-left: 10upx; color: #808080;">{{titlename}}</text>
							<image src="../../../static/images/img/jiantou.png" style="margin-left: 350upx;width: 50upx;height: 50upx;"></image>
						</picker>
					</view>
				</view>
			</view>
		</view>

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
				titlename:"自提时间",	//自提时间、配送时间、快递费
				recinfo: {
					id: 1,
					name: "大黑哥",
					head: "大",
					tel: "18816881688",
					address: {
						region: {
							"label": "广东省-深圳市-福田区",
							"value": [18, 2, 1],
							"cityCode": "440304"
						},
						detailed: '深南大道1111号无名摩登大厦6楼A2'
					},
					isDefault: true
				}

			};
		},
		onShow() {
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
			uni.getStorage({
				key: 'selectAddress',
				success: (e) => {
					this.recinfo = e.data;
					uni.removeStorage({
						key: 'selectAddress'
					})
				}
			})
		},
		onHide() {

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
				let goodsid = [];
				let len = this.buylist.length;
				for (let i = 0; i < len; i++) {
					paymentOrder.push(this.buylist[i]);
					goodsid.push(this.buylist[i].id);
				}
				if (paymentOrder.length == 0) {
					uni.showToast({
						title: '订单信息有误，请重新购买',
						icon: 'none'
					});
					return;
				}
				//本地模拟订单提交UI效果
				uni.showLoading({
					title: '正在提交订单...'
				})
				setTimeout(() => {
					uni.setStorage({
						key: 'paymentOrder',
						data: paymentOrder,
						success: () => {
							uni.hideLoading();
							uni.redirectTo({
								url: "../payment/payment?amount=" + this.sumPrice
							})
						}
					})
				}, 1000)

			},
			//商品跳转
			toGoods(e) {
				uni.showToast({
					title: '商品' + e.id,
					icon: "none"
				});
				uni.navigateTo({
					url: '../../goods/goods'
				});
			},
			//选择收货地址
			selectAddress() {
				uni.navigateTo({
					url: '../user/address/address?type=select'
				})
			},
			bindDateChange: function(e) {
			    this.titlename = e.target.value
			},
			radioChange: function(evt) {
				var radioValue=evt.target.value;
				if(radioValue==0){
					this.titlename="自提时间";
				}
				if(radioValue==1){
					this.titlename="配送时间";
				}
				if(radioValue==2){
					this.titlename="快递费";
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
	.radiotext{
		margin-left: 20upx;
	}
</style>
