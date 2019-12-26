<template>
	<view class="flex">
		<view class="swiper-box">
			<!-- circular="true" autoplay="true" @change="swiperChange" -->
			<swiper>
				<!-- <swiper-item v-for="swiper in swiperList" :key="swiper.id">
				</swiper-item> -->
				<swiper-item>
					<image :src="goodsData.bigpicturepath" mode="widthFix"></image>
				</swiper-item>
			</swiper>

			<!-- <view class="indicator">{{currentSwiper+1}}/{{bigpicturepath.length}}</view> -->
		</view>

		<!-- 标题 价格 -->
		<view class="flex-item">
			<view class="info-box">
				<view class="price-box">
					<text class="price-tip">¥</text>
					<text class="price">{{goodsData.activityprice}}</text>
					<text class="m-price">原价¥{{goodsData.price}}</text>
				</view>
				<view class="content-item" @click="handleCollect">
					<image :class="[isCollect?'icon-shoucang1':'icon-shoucang']" style="width: 45rpx;height: 45rpx;margin-left: 3rpx;">
					<view class="coupon-tip">收藏</view>
				</view>
				<view class="content-item2">
					<image src='../../../static/groupImg/share.png' style="width: 42rpx;height: 42rpx;">
						<view class="coupon-tip">分享</view>
						<button class="btn-share" open-type="share"></button>
				</view>
			</view>
			<view class="info-box3">
				<view class="title">【预售】{{goodsData.goodsName}}</view>
				<!-- <view class="goods_text">{{goodsData.goodsTitle}}</view> -->
			</view>
		</view>

		<view class="flex-item">
			<view class="c-list uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<navigator url="../../home/coupons/coupons">
						<view class="c-row">
							<text class="tit tt">领券</text>
							<text class="con">领取优惠券</text>
						</view>
					</navigator>
				</view>

				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="c-row">
						<text class="tit tt">库存</text>
						<text class="tit2 tt">999件</text>
					</view>
				</view>

				<!-- <view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="c-row ">
						<text class="tit tt">规格</text>
						<text class="tit2 tt">数量参数选择</text>
					</view>
				</view> -->

				<view class="c-row">
					<text class="tit tt">说明</text>
					<text class="tit2 tt">购物须知</text>
				</view>
			</view>

		</view>

		<view class="flex-item">
			<view class="eva-section uni-list">
				<view class="e-header uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="e-view uni-list-cell-navigate uni-navigate-right">
						<text class="tit5">用户评价(12)</text>
						<text class="tit6">更多评论></text>
					</view>
				</view>

				<view class="eva-box">
					<view class="comment" @tap="toRatings">
						<view class="user-info uni-list-cell-navigate">
							<view class="face">
								<image src="../../../static/groupImg/nabi.jpg" class="imagess"></image>
							</view>
							<view class="username">nabi</view>
							<view class="time">时间:2019-12-06</view>
						</view>
						<view class="contentt">
							好评！
						</view>
						<!-- <image :src="comment.images"></image>
						<view class="reply">回复：{{comment.replyContent}}</view> -->
					</view>
				</view>
			</view>
		</view>

		<!-- 详情 -->
		<view class="flex-item">
			<view class="description">
				<view class="titlee">商品详情</view>
				<view>
					<image width="100%" :src="goodsData.bigpicturepath" mode="widthFix"></image>
				</view>
			</view>
		</view>

		<!-- 底部菜单 -->
		<view class="footer">
			<view class="icons">
				<navigator open-type="switchTab" url="../../home/home/home">
					<view class="box">
						<image src="../../../static/groupImg/home.png" class="icon-di fenxiang"></image>
						<view class="text-di">首页</view>
					</view>
				</navigator>

				<view open-type="switchTab" @tap="chat()">
					<view class="box">
						<image src="../../../static/groupImg/kefu.png" class="icon-di kefu"></image>
						<view class="text-di">客服</view>
					</view>
				</view>

				<navigator open-type="switchTab" url="../../shopcart/cart/cart">
					<view class="box" @tap="keep">
						<image src="../../../static/groupImg/shoppingcar.png" class="icon-di cart"></image>
						<view class="text-di">购物车</view>
					</view>
				</navigator>
			</view>
			<view class="btn">
				<view class="joinCart" @click="handleCartAdd">加入购物车</view>
				<view class="buy" @tap="buy">立即下单</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsData: {},
				GoodsInfonew: {},
				// 商品是否被收藏
				isCollect:false
				// //轮播主图数据
				// swiperList: [
				// 	{ id: 1, img: '../../static/images/lunxia.png' },
				// 	{ id: 2, img: '../../static/images/lunxia.png' },
				// 	{ id: 3, img: '../../static/images/lunxia.png' },
				// 	{ id: 4, img: '../../static/images/lunxia.png' }
				// ],
				// currentSwiper: 0,
				// anchorlist:[],//导航条锚点
				// selectAnchor:0,//选中锚点
			}
		},
		onLoad: function(e) {
			var ids = e.id;
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
					this.goodsData = res.data;
					console.log(res.data)
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			home: function() {
				uni.navigateTo({
					url: '../../home/home/home'
				})
			},
			//轮播图指示器
			// swiperChange(event) {
			// 	this.currentSwiper = event.detail.current;
			// },
			//规格弹窗
			// showSpec(fun) {
			// 	console.log('show');
			// 	this.specClass = 'show';
			// 	this.specCallback = fun;
			// },
			// 客服
			chat() {
				uni.reLaunch({
					url: '/pages/home/chat/chat'
				})
			},
			//点击加入购物车
			handleCartAdd() {
				console.log(this.goodsData);
				// 1 获取缓存中的购物车 数组
				let cart = uni.getStorageSync("cart") || [];
				// 2 判断 商品对象是否存在于购物车数组中
				let index = cart.findIndex(v => v.id === this.goodsData.id);
				if (index === -1) {
					//3  不存在 第一次添加
					this.GoodsInfonew.bigpicturepath = this.goodsData.bigpicturepath;
					this.GoodsInfonew.activityprice = this.goodsData.activityprice;
					this.GoodsInfonew.price = this.goodsData.price;
					this.GoodsInfonew.goodsName = this.goodsData.goodsName;
					this.GoodsInfonew.number = 1;
					this.GoodsInfonew.id = this.goodsData.id;
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
			},
			handleCollect() {
				console.log(this.goodsData);
				// 1 获取缓存中的商品收藏数组
				let collect = uni.getStorageSync("collect") || [];
				// 2 判断该商品是否被收藏过
				let index = collect.findIndex(v => v.id === this.goodsData.id);
				// 3 当index！=-1表示 已经收藏过 
				if (index !== -1) {
					// 能找到 已经收藏过了  在数组中删除该商品
					collect.splice(index, 1);
					this.isCollect = false;
					uni.showToast({
						title: '取消成功',
						icon: 'success',
						mask: true
					});

				} else {
					// 没有收藏过
					collect.push(this.goodsData);
					this.isCollect = true;
					uni.showToast({
						title: '收藏成功',
						icon: 'success',
						mask: true
					});
				}
				// 4 把数组存入到缓存中
				uni.setStorageSync("collect", collect);
			}

		}
	}
</script>

<style>
	view {
		font-family: 微软黑体;
	}

	.flex {
		background-color: #F0F0F0;
	}

	/* 轮播图 */
	.swiper-box {
		width: 100%;
		height: 100vw;
		position: relative;
	}

	swiper {
		width: 100%;
		height: 100vw;
	}

	swiper-item image {
		width: 100%;
		height: 100vw;
	}

	/* .indicator{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 25upx;
		height: 40upx;
		border-radius: 40upx;
		font-size: 22upx;
		position: absolute;
		bottom: 20upx;
		right: 20upx;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.2);
	} */

	.flex-item {
		margin-bottom: 20rpx;
		background-color: white;
	}

	.info-box {
		font-size: 20rpx;
		height: 65rpx;
		padding-left: 30rpx;
		padding-top: 10rpx;
		padding-bottom: 50rpx;
		display: flex;
		align-items: baseline;
		background-color: white;
	}

	.price-box {
		width: 100%;
	}

	.price-tip {
		font-size: 30rpx;
		color: #F44336;
		font-weight: 600;
	}

	.price {
		font-size: 60rpx;
		color: #F44336;
		font-weight: 600;
		font-family: 华文细黑;
	}

	.m-price {
		font-size: 25rpx;
		color: #8F8F94;
		text-decoration: line-through;
		margin-left: 60rpx;
	}

	.content-item {
		padding-right: 35rpx;
		border-right: 1rpx #D8D8D8 solid;
	}

	.coupon-tip {
		width: 50rpx;
		height: 50rpx;
		font-size: 24rpx;
		color: #8F8F94;
	}

	.content-item2 {
		position: relative;
		flex-direction: column;
		margin-left: 35rpx;
		margin-right: 40rpx;
	}

	.btn-share {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		opacity: 0;
		position: absolute;
	}

	.info-box3 {
		font-size: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 30rpx;
		background-color: white;
	}

	.title {
		font-size: 35rpx;
		font-weight: 600;
	}

	.goods_text {
		font-size: 24rpx;
		color: #F44336;
		font-weight: 600;
		font-family: 微软黑体;
		padding-bottom: 30rpx;
		margin-left: 20rpx;
	}

	.c-row {
		display: flex;
		align-items: center;
		padding: 25rpx 33rpx;
		position: relative;
	}

	.tit {
		font-size: 27rpx;
		color: #8F8F94;
		padding-left: 8rpx;
	}

	.tt {
		display: inline-block;
		margin-right: 30upx;
	}

	.con {
		font-size: 27rpx;
		color: #F44336;
		flex: 1;
	}

	.tit2 {
		font-size: 27rpx;
		color: #000000;
	}

	/* 评价 */
	.eva-section {
		display: flex;
		flex-direction: column;
		margin-top: 16rpx;
		background: #fff;
	}

	.e-header {
		height: 70rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 0;
		border-bottom: 1rpx #C2C2C2 solid;
	}

	.e-view {
		margin-left: 30rpx;
	}

	.tit5 {
		font-size: 25rpx;
		color: black;
		margin-right: 4rpx;
	}

	.tit6 {
		font-size: 25rpx;
		color: #808080;
		margin-left: 450rpx;
	}

	.eva-box {
		display: flex;
		padding-left: 30rpx;
		padding-top: 10rpx;
		margin-bottom: 20rpx;
		margin-top: 10rpx;
	}

	.comment {
		width: 100%;
	}

	.user-info {
		width: 100%;
		height: 40upx;
		display: flex;
		align-items: center;
	}

	.face {
		width: 40upx;
		height: 40upx;
		margin-right: 8upx;
	}

	.imagess {
		width: 40upx;
		height: 40upx;
		border-radius: 100%;
	}

	.username {
		font-size: 22rpx;
	}

	.time {
		font-size: 22rpx;
		color: #8F8F94;
		margin-left: 410rpx;
	}

	.contentt {
		margin-top: 10upx;
		font-size: 25upx;
	}

	/* .reply{
		background-color: #BBBBBB;
	} */

	.titlee {
		width: 100%;
		height: 80upx;
		display: flex;
		align-items: center;
		font-size: 25upx;
		margin-left: 30rpx;
	}

	.footer {
		position: fixed;
		bottom: 0upx;
		width: 92%;
		padding: 0 4%;
		height: 99upx;
		border-top: solid 1upx #eee;
		background-color: #fff;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.icons {
		display: flex;
		height: 80upx;
		margin-left: -4%;
	}

	.box {
		width: 80upx;
		height: 80upx;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin-left: 10rpx;
	}

	.icon-di {
		font-size: 40upx;
		color: #828282;
		width: 50rpx;
		height: 50rpx;
	}

	.text-di {
		display: flex;
		justify-content: center;
		width: 100%;
		font-size: 22upx;
		color: #666;
	}

	.btn {
		height: 80rpx;
		border-radius: 15rpx;
		overflow: hidden;
		display: flex;
		margin-right: -2%;
	}

	.joinCart,
	.buy {
		height: 80rpx;
		padding: 0 50rpx;
		color: #fff;
		display: flex;
		align-items: center;
		font-size: 28rpx;
	}

	.joinCart {
		background-color: #FF8000;
	}

	.buy {
		background-color: #DD524D;
	}
	.icon-shoucang{
		background-size:cover;
		background-image:url(../../../static/images/img/hongWJX.png) ;
	}
	.icon-shoucang1{
		background-size:cover;
		background-image:url(../../../static/images/img/hongWJX2.png);
	}
</style>
