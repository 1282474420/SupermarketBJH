<template>
	<view>
		<view class="xiangqing">
			<swiper class="tupian">
				<swiper-item>
					<image class="tupian1" mode="widthFix" :src="GoodsInfo.picturepath"></image>
				</swiper-item>
			</swiper>
			<view class="pricecolumn">
				<view class="left">
					<text class="money">￥</text>
					<text class="Presentprice">{{GoodsInfo.price}}</text>
					<text class="originalprice">原价￥259</text>
				</view>
				<view class="img">
					<image class="icon" src="../../../static/images/img/hongWJX.png"></image>
					<view class="word">收藏</view>
				</view>
				<view class="img">
					<image class="icon" src="../../../static/images/img/fenxiang.png"></image>
					<view class="word">分享</view>
					<button open-type="share"></button>
				</view>
			</view>
			<view class="name">{{GoodsInfo.goodsName}}</view>
			<view class="name1">{{GoodsInfo.goodsName}}</view>
		</view>
		<!--领卷->购物-->
		<view class="youhui">
			<view class="ys">
				<text class="mc">领卷</text>
				<navigator url="../../home/coupons/coupons" class="dianji">领取优惠卷
					<image class="icon1" src="../../../static/images/img/jiantou.png"></image>
				</navigator>
			</view>

			<view class="ys"><text class="mc">库存：</text><text class="kucun">666</text></view>

			<view class="ys">
				<text class="mc">规格</text>
				<navigator class="dianji" url>数量参数选择
					<image class="icon1" src="../../../static/images/img/jiantou.png"></image>
				</navigator>
			</view>
			<view class="ys">
				<text class="mc">声明</text>
				<navigator class="dianji" url>购物须知
					<image class="icon1" src="../../../static/images/img/jiantou.png"></image>
				</navigator>
			</view>
		</view>

		<view class="evaluation">
			用户评价（102）<text class="pinlun">更多评论></text>
		</view>
		<view class="evaluation">
			<image class="icon_touxiang" src="../../../static/images/img/goods/p4.jpg"></image>
			二狗子<text class="time">时间：2019-04-27</text>
		</view>
		<!--评论内容-->
		<view>
			非常满意的一次体验，无论是位置还是装修都很棒，666。
			<image @tap="imgYu" class="pinluntu" src="../../../static/images/img/goods/p5.jpg"></image>
		</view>

		<!--底部栏-->
		<view class="btm_tool">
			<navigator open-type="switchTab" url="../../home/home/home" class="tool_item">
				<view class="icon_png">
					<image class="icon_png" src="../../../static/images/dbimg/sy_01_03.png"></image>
				</view>
				<view>首页</view>
			</navigator>
			<view class="tool_item">
				<view class="icon_png">
					<image class="icon_png" src="../../../static/images/img/kefu.png"></image>
				</view>
				<view>客服</view>
				<button open-type="contact"></button>
			</view>
			<navigator open-type="switchTab" url="../../shopcart/cart/cart" class="tool_item">
				<view class="icon_png">
					<image class="icon_png" src="../../../static/images/dbimg/sy_03_03.png"></image>
				</view>
				<view>购物车</view>
			</navigator>
			<view class="btn_cart" @click="handleCartAdd">
				加入购物车
			</view>
			<view class="btn_buy">立即购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				GoodsObj: {},
				GoodsInfo: {},
				GoodsInfonew: {}
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			var ids = options.id;
			uni.showToast({
				title: "编号" + ids,
				icon: "none"
			});
			//获得当前对象
			var that = this
			uni.request({
				url: 'http://localhost:8080/commodity/getById?id=' + ids,
				method: 'POST',
				success: res => {
					this.GoodsInfo = res.data;
					console.log(res.data)
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			//点击图片预览
			imgYu: function(event) {
				var src = event.currentTarget.dataset.src; //获取data-src

				var imgList = event.currentTarget.dataset.list; //获取data-list
				//图片预览

				wx.previewImage({
					current: src,
					// 当前显示图片的http链接
					urls: imgList // 需要预览的图片http链接列表

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
			},
			//点击加入购物车
			handleCartAdd() {
				console.log(this.GoodsInfo);
				// 1 获取缓存中的购物车 数组
				let cart = uni.getStorageSync("cart") || [];
				// 2 判断 商品对象是否存在于购物车数组中
				let index = cart.findIndex(v => v.id === this.GoodsInfo.id);
				if (index === -1) {
					//3  不存在 第一次添加
					this.GoodsInfonew.goodsName = this.GoodsInfo.goodsName;
					this.GoodsInfonew.price = this.GoodsInfo.price;
					this.GoodsInfonew.picturepath = this.GoodsInfo.picturepath;
					this.GoodsInfonew.number = 1;
					this.GoodsInfonew.id = this.GoodsInfo.id;
					cart.push(this.GoodsInfonew);
				} else {
					// 4 已经存在购物车数据 执行 num++
					cart[index].number++;
				}
				// 5 把购物车重新添加回缓存中
				uni.setStorageSync("cart", cart);
				// 6 弹窗提示
				uni.showToast({
					title: '加入成功',
					icon: 'success',
					// true 防止用户 手抖 疯狂点击按钮 
					mask: true
				});
			}
		}
	};
</script>
<style>
	@import "./ProductDetails.css";
</style>
