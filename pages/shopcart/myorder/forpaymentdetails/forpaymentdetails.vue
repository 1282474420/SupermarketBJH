<template>
	<!--我的订单 待付款（详情）-->
	<view class="container">
		<view class="ding2">
			<view class="ding">
				<image class="ding1" src="../../static/img/tu1_03.png" @tap="back"></image>
				<view class="text1 text4">
					<text>订单详情</text>
				</view>
			</view>
		</view>
		<view class="dingdan">
			<view class="dingdan1">
				<view class="text1 text2">
					<text>请在{{dates}}前完成支付</text>
				</view>
				<view class="text3">
					<text>{{time}}</text>
				</view>
			</view>
		</view>

		<view class="details">
			<view class="details2">
				<view class="weui-cell-third">
					<view class="ss">
						<block v-for="(item, index) in axis" :key="index">
							<text :class="'weui-cell-name name' + item.id + ' ' + (oid==item.id ?'weuicellname':'')">{{item.name}}</text>
						</block>
					</view>
				</view>

				<view class="ww2">
					<image :src="'../img/daizhifu' + (oid==oid? oid:'1') + '.png'"></image>
				</view>

			</view>
		</view>

		<block v-for="(item, index) in ordersForGoods" :key="index">
			<view class="address">
				<view class="address2">
					<view class="address3">
						<text>{{item.oCustomerinfo.username}} {{item.oCustomerinfo.cellPhone}}</text>
					</view>
					<view class="address4">
						<image src="../../static/img/tu4.png"></image>
						<view class="address5">
							<text>{{item.address.xAddress}}{{item.address.detailsAds}}</text>
						</view>
					</view>
				</view>
			</view>

			<view class="goods">
				<view class="goods2">
					<view class="goods3">
						<image :src="item.commodity.ctradeimg"></image>
					</view>
					<view class="goods4">
						<view class="goods5">
							<text>{{item.commodity.cSelPointTitle}}</text>
						</view>
						<view class="goods6">
							<text class="te">¥{{item.commodity.cprice}}</text>
							<text class="te2">X{{item.orderDetails.odCommodityquantity}}</text>
						</view>
					</view>
				</view>
			</view>

			<view class="theorder">
				<view class="theorder2">
					<view class="theorder3">
						<view class="serialnumber6 serialnumber">
							<text class="numbertext">订单编号</text>
							<button @tap="copyText" :data-text="item.oId">复制</button>
							<text class="d">{{item.oId}}</text>
						</view>
					</view>
					<view class="theorder3 theorder4">
						<view class="serialnumber serialnumber6">
							<text class="numbertext">下单时间</text>
							<text class="timetext">{{item.oOrdertime}}</text>
						</view>
					</view>
					<view class="theorder3 theorder4">
						<view class="serialnumber serialnumber6">
							<text class="numbertext">支付状态</text>
							<text class="timetext">以支付</text>
						</view>
					</view>
					<view class="theorder3 theorder4">
						<view class="serialnumber serialnumber6">
							<text class="numbertext">支付方式</text>
							<text class="timetext">{{item.oPayway}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="theorder th">
				<view class="theorder2 th2">
					<view class="theorder3 theorder4">
						<view class="serialnumber serialnumber6">
							<text class="numbertext">支付金额</text>
							<text class="timetext">￥{{item.commodity.cprice}}</text>
						</view>
					</view>
					<view class="theorder3 theorder4">
						<view class="serialnumber serialnumber6">
							<text class="numbertext">实付款</text>
							<text class="timetext2">￥{{item.oMoney}}</text>
						</view>
					</view>
				</view>
			</view>


			<view class="Orderssubmitted">
				<block v-if="oid==1">
					<view class="Orderssubmitted5">
						<button class="Orderssubmitted2 Orderssubmitted4">取消订单</button>
						<button class="Orderssubmitted2 Orderssubmitted3">立即付款</button>
					</view>
				</block>

				<block v-if="oid==2">
					<view class="Orderssubmitted5">
						<button @tap="tuiku" :data-oids="oids" :data-coids="cids" class="Orderssubmitted2 Orderssubmitted4">取消订单</button>
						<navigator url="../addRefund/addRefund">
							<view @tap="refund" :data-oids="oids" :data-coids="cids">
								<button class="Orderssubmitted2 Orderssubmitted3">申请退款</button>
							</view>
						</navigator>
					</view>
				</block>

				<block v-if="oid==3">
					<view class="Orderssubmitted5">
						<button class="Orderssubmitted2 Orderssubmitted4">查看物流</button>
						<button class="Orderssubmitted2 Orderssubmitted3">确认收货</button>
					</view>
				</block>

				<block v-if="oid==4">
					<view class="Orderssubmitted5">
						<button class="Orderssubmitted2 Orderssubmitted4">申请售后</button>
						<view @tap="refund2" :data-oids="oids" :data-coids="cids">
							<button class="Orderssubmitted2 Orderssubmitted3">去评价</button>
						</view>
					</view>
				</block>

				<block v-if="oid==5">
					<view class="Orderssubmitted5">
						<button class="Orderssubmitted2 Orderssubmitted4">申请售后</button>
						<button @tap="getId4" :data-oid="item.oId" class="Orderssubmitted2 Orderssubmitted3">去评价</button>
					</view>
				</block>
			</view>
		</block>






	</view>
</template>

<script>
	//index.js
	//获取应用实例
	const app = getApp().globalData;
	var util = require("../../../../utils/util.js");
	var oid = "";
	var oids = "";
	var cids = "";

	export default {
		data() {
			return {
				axis: [{
					id: '1',
					name: '带付款'
				}, {
					id: '2',
					name: '待配送'
				}, {
					id: '3',
					name: '配送中'
				}, {
					id: '4',
					name: '待评价'
				}, {
					id: '5',
					name: '已完成'
				}],
				ordersForGoods: [],
				or: "",
				oids: "",
				cids: "",
				oid: "",
				time: ""
			};
		},

		components: {},
		props: {},
		onLoad: function(e) {
			var that = this;
			getApp().globalData.initPage(that);
			console.log('订单id', e.oid);
			console.log('用户id', e.cid);
			let oid = JSON.parse(e.oid);
			let cid = e.cid;
			var id = getApp().globalData.userInfo.userId;
			that.setData({
				oids: oid,
				cids: cid
			});

			uni.request({
				url: getApp().globalData.url + '/order/orderSelectByIOpayStatus?oId=' + oid + '&' + 'o_customerInfo=' + id,
				data: {},
				header: {
					'content-type': 'application/json'
				},
				method: 'POST',
				dataType: 'json',
				success: function(res) {
					that.setData({
						ordersForGoods: res.data.data
					});
					console.log(res.data.data);
				}
			});

			uni.request({
				url: getApp().globalData.url + '/order/getSelectOrderoId?o_id=' + oid,
				data: {},
				header: {
					'content-type': 'application/json'
				},
				method: 'POST',
				dataType: 'json',
				success: function(res) {
					that.setData({
						oid: res.data
					});
					console.log("s" + res.data);
				}
			});

			var id = this.show();
			this.setData({
				oid: id
			}); // 调用函数时，传入new Date()参数，返回值是日期和时间

			var time = util.formatTime(new Date()); // 再通过setData更改Page()里面的data，动态更新页面的数据

			this.setData({
				time: time
			});
		},
		methods: {
			show: function() {
				return 1;
			},
			back: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			tuiku: function(e) {
				var that = this;
				console.log(this.oids);
				var id = this.oids;
				uni.showModal({
					title: '确定要取消支付吗',
					success: function(res) {
						if (res.confirm) {
							//这里是点击了确定以后
							wx: wx.request({
								url: getApp().globalData.url + '/order/cancelTheorDer?oid=' + id,
								data: {},
								header: {
									'content-type': 'application/json'
								},
								method: 'POST',
								dataType: 'json',
								success: function(res) {
									wx.showToast({
										title: '取消订单成功',
										icon: 'success',
										duration: 500
									});
									that.tiaozhuan();
								}
							});
						}
						else {
							//这里是点击了取消以后
							console.log('用户点击取消');
						}
					}
				});
			},
			tiaozhuan: function() {
				uni.navigateTo({
					url: '/pages/payment/payment'
				});
			},
			refund: function(e) {
				console.log(e.currentTarget.dataset.oids);
				console.log(e.currentTarget.dataset.coids);
				let oid = e.currentTarget.dataset.oids;
				let oids = oid;
				let cid = e.currentTarget.dataset.coids;
				let cids = cid;
				uni.navigateTo({
					url: '/pages/addRefund/addRefund?oids=' + oids + '&cid=' + cids
				});
			},
			refund2: function(e) {
				console.log(e.currentTarget.dataset.oids);
				console.log(e.currentTarget.dataset.coids);
				let oid = e.currentTarget.dataset.oids;
				let oids = oid;
				uni.navigateTo({
					url: '/pages/comment/comment?oids=' + oids
				});
			},
			copyText: function(e) {
				console.log(e);
				uni.setClipboardData({
					data: e.currentTarget.dataset.text,
					success: function(res) {
						uni.getClipboardData({
							success: function(res) {
								uni.showToast({
									title: '复制成功'
								});
							}
						});
					}
				});
			},
			getId4: function(e) {
				console.log(e.currentTarget.dataset.oid);
				console.log('sdfgsdthtsrh-------' + e.currentTarget.dataset.cid);
				let oids = e.currentTarget.dataset.oid;
				let cids = e.currentTarget.dataset.cid;
				let oid = JSON.stringify(oids);
				let cido = JSON.stringify(cids);
				uni.navigateTo({
					url: '/pages/comment/comment?oid=' + oid + '&cid=' + cido
				});
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
	@import "./forpaymentdetails.css";
</style>
