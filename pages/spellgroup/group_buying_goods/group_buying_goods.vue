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
		
		<view class="g-information">
			<view class="g-info">
				<image src="../../../static/groupImg/group.png" class="group-icon"></image>
				<text class="g-icon-text">3人团</text>
			</view>
			<view class="g-price">
				<view class="price-tip">¥</view>
				<view class="price">{{goodsData.activityprice}}</view>
				<view class="m-price">¥{{goodsData.price}}</view>
				<view class="g-countdown">
					<view class="g-time">还剩</view>
					<uni-countdown color="white" border-radius="30rpx" background-color="#fe5c6a" :show-day="false" :hour="21" :minute="38" :second="05"></uni-countdown>
				</view>
			</view>
			
		</view>
		
		<view class="flex-item">
			<!-- 标题 价格 -->
			<view class="info-box goods-info">
				<view class="title">{{goodsData.goodsName}}</view>
				<view class="content-item">
					<image src="../../../static/groupImg/collect.png" style="width: 45rpx;height: 45rpx;margin-left: 3rpx;">
					<view class="coupon-tip">收藏</view>
				</view>
				<view class="content-item2">
					<image src='../../../static/groupImg/share.png' style="width: 40rpx;height: 40rpx;">
					<view class="coupon-tip">分享</view>
					<button open-type="share"></button>
				</view>
			</view>
			<view class="info-box3 goods-info">
				
				<!-- <view class="goods_text">{{goodsData.goodsTitle}}</view> -->
			</view>
		</view>
		
		<view class="flex-item">
			<view class="c-list ">
				<!--class="uni-list-cell" hover-class="uni-list-cell-hover"-->
				<view >
					<view class="c-row b-b">
						<text class="tit tt">规格</text>
						<text class="tit2 tt">数量参数选择</text>
					</view>
				</view>
				<view>
					<view class="c-row b-b">
						<text class="tit tt">库存</text>
						<text class="tit2 tt">999件</text>
					</view>
				</view>
				<view class="c-row b-b">
					<text class="tit tt">规则</text>
					<text class="tit2 tt">拼团详细玩法</text>
				</view>
			</view>
		</view>
		
		<view class="flex-item">
			<view class="g-section">
				<view class="g-header">
					<view class="uni-list-cell-navigate uni-navigate-right">
						<text class="g-header-text">5人在拼团，可直接参与</text>
						<text class="g-header-text2">查看更多></text>
					</view>
				</view>
				<view class="g-box uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="group">
						<view class="group-info">
							<view class="gface"><image src="../../../static/groupImg/nabi.jpg" class="gimages"></image></view>
							<view class="gname">nabi</view>
							<view class="group-info2">
								<view class="group-text">还差<text class="group-text2">1人</text>成团</view>
								<uni-countdown class="countdown" background-color="white" color="black" :show-day="false" :hour="21" :minute="38" :second="05"></uni-countdown>
							</view>
							<!-- @click="goodsInfo(goods.id)" -->
							<view class="cantuan" @tap="toGroup" >去参团</view>
						</view>
					</view>
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
							<view class="face"><image src="../../../static/groupImg/nabi.jpg" class="imagess"></image></view>
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
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
	export default {
		components: {uniCountdown},
		data() {
			return {
				goodsData:{},
				comment:{}
			}
		},
		onLoad: function (e) {
		  var ids = e.id;
			uni.showToast({
				title: "编号" + ids,
				icon: "none"
			});
		  //获得当前对象
		  var that = this
			uni.request({
				url: 'http://localhost:8080/commodity/getById?id='+ids,
				method: 'POST',
				success: res => {
					this.goodsData=res.data;
					this.comment=res.data;
					console.log(res.data)
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			//轮播图指示器
			swiperChange(event) {
				this.currentSwiper = event.detail.current;
			},
			//服务弹窗
			showService() {
				console.log('show');
				this.serviceClass = 'show';
			},
			//关闭服务弹窗
			hideService() {
				this.serviceClass = 'hide';
				setTimeout(() => {
					this.serviceClass = 'none';
				}, 200);
			},
			//规格弹窗
			showSpec(fun) {
				console.log('show');
				this.specClass = 'show';
				this.specCallback = fun;
			},
			toGroup(){
				uni.navigateTo({
					url:"../group/group"
				})
			},
			// 首页
			toChat(){
				uni.navigateTo({
					url:""
				})
			},
			// 客服
			chat() {
				uni.reLaunch({
					url:'/pages/home/chat/chat'
				})
			},
			//购物车
			keep(){
				uni.navigateTo({
					url:""
				})
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
					this.GoodsInfonew.picturepath = this.GoodsInfo.bigpicturepath;
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
			},
			// goodsInfo:function(e){
			// 	uni.showToast({
			// 		title: "编号" + e,
			// 		icon: "none"
			// 	});
			// }
		}
	}
</script>

<style>
	view{
		font-family: 微软黑体;
	}
	
	.flex{
		background-color:#F0F0F0;
	}
	
	swiper {
		width: 100%;
		height: 100vw;
	}
	
	.swiper-box {
		position: relative;
		width: 100%;
		height: 100vw;
	}
	
	swiper-item image {
		width: 100%;
		height: 100vw;
	}
	
	.indicator{
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
	}
	
	.g-information{
		background-image: linear-gradient(90deg, #ffa549 0%, #fe5c6a 100%),
		                    linear-gradient(#ffa549, #ffa549);
		color: white;
		height: 80rpx;
		padding-top: 20rpx;
		font-size: 27rpx;
		display:flex;
		align-items:baseline;
	}
	
	.g-info{
		border: 2rpx white solid;
		width: 120rpx;
		height: 45rpx;
		margin-left: 30rpx;
		border-radius: 10rpx;
	}
	
	.group-icon{
		width: 45rpx;
		height: 45rpx;
		background-color: white;
		border-top-left-radius: 10rpx;
		border-bottom-left-radius: 10rpx;
	}
	
	.g-icon-text{
		margin-bottom: 10rpx;
		font-size: 26rpx;
	}
	
	.g-price{
		display:flex;
		align-items:baseline;
		margin-left: 20rpx;
	}
	
	.g-time{
		margin-left: 10rpx;
	}
	
	.g-countdown{
		display:flex;
		align-items:baseline;
		margin-left: 80rpx;
	}
	
	.flex-item{
		background-color: white;
		margin-bottom: 20rpx;
	}
	
	.info-box{
		background-color: white;
		font-size: 20upx;
		padding-left: 30rpx;
		padding-top: 20rpx;
		padding-bottom: 50rpx;
		display:flex;
		align-items:baseline;
		height: 40rpx;
	}
	
	.price {
		font-size: 50rpx;
		font-weight: 600;
		color:white;
		font-family: 华文细黑;
	}
	
	.price-tip{
		color:white;
		font-weight: 600;
		font-size: 28rpx;
	}
	
	.m-price{
		margin-left: 30rpx;
		font-size: 25rpx;
		color:white;
		text-decoration: line-through;
	}
	
	.content-item{
		padding-left: 410rpx;
		padding-right: 35rpx;
		margin-right: 35rpx;
		border-right: 1rpx #D8D8D8 solid;
	}
	
	.coupon-tip{
		color: #8F8F94;
		font-size: 24rpx;
	} 
	
	.info-box3{
		background-color: white;
		padding-left: 20rpx;
		font-size: 20upx;
		padding-bottom: 30rpx;
	}
	
	.title {
		font-size: 35rpx;
		font-weight: 600;
	}
	
	.goods_text{
		font-size: 24rpx;
		font-weight: 600;
		font-family: 微软黑体;
		color:#F44336;
		padding-bottom: 30rpx;
		margin-left: 20rpx;
	}
	
	.uni-list-cell{
		width: 730rpx;
	}
	
	.c-row{
		display:flex;
		align-items:center;
		padding: 30upx 33upx;
		position:relative;
	}
	
	.tit{
		color: #8F8F94;
		font-size: 27rpx;
		padding-left: 8rpx;
	}
	
	.tit2{
		font-size: 27rpx;
		color: #000000;
	}
	
	.tt{
		display: inline-block;
		margin-right: 30upx;
	}
	
	/* 参团 */
	.g-section{
		display: flex;
		flex-direction: column;
		background: #fff;
		margin-top: 16upx;
		/* height: 500rpx; */
	}
	
	.g-header{
		display: flex;
		align-items: center;
		height: 70rpx;
		padding-left: 30rpx;
		padding-bottom: 10rpx;
		border-bottom: 1rpx #C2C2C2 solid;
	}
	
	.g-header-text{
		margin-right: 4upx;
		font-size: 27rpx;
	}
	
	.g-header-text2{
		color:#808080;
		font-size: 25rpx;
		margin-left: 310rpx;
	}
	
	.g-box{
		display: flex;
		padding-left: 38rpx;
		/* padding-top: -20rpx; */
	}
	
	.group{
		/* width: 100%; */
	}
	
	.group-info {
		/* width: 100%; */
		height: 140rpx;
		display: flex;
		align-items: center;
		margin-top: -20rpx;
	}
	
	.gface{
		width: 40rpx;
		height: 40rpx;
		margin-right: 8rpx;
	}
	
	.gimages{
		width: 90rpx;
		height: 90rpx;
		border-radius: 100%;
	}
	
	.gname{
		font-size: 30rpx;
		margin-left: 55rpx;
		margin-top: 40rpx;
	}
	
	.group-info2{
		margin-top: 50rpx;
		margin-left: 150rpx;
	}
	
	.group-text{
		margin-left: 40rpx;
		font-size: 25rpx;
	}
	
	.countdown{
		font-size: 15rpx;
		margin-top: -5rpx;
	}
	
	.cantuan{
		width: 80rpx ;
		height: 40rpx;
		color: white;
		background-color: #FF8000;
		padding: 10rpx 25rpx;
		margin-top: 35rpx;
		margin-left: 20rpx;
		font-size: 25rpx;
	}
	
	/* 评价 */
	.eva-section{
		display: flex;
		flex-direction: column;
		/* padding: 20upx 30upx; */
		background: #fff;
		margin-top: 16upx;
	}
	
	.e-header{
		display: flex;
		align-items: center;
		height: 70upx;
		padding: 10rpx 0;
		border-bottom: 1rpx #C2C2C2 solid;
	}
	
	.e-view{
		margin-left: 30rpx;
		
	}
	
	.tit5{
		/* font-size: $font-base + 2upx;
		color: $font-color-dark; */
		margin-right: 4rpx;
		font-size: 25rpx;
		color: black;
	}
	.tit6{
		/* font-size: $font-base + 2upx;
		color: $font-color-dark; */
		color:#808080;
		font-size: 25rpx;
		margin-left: 440rpx;
	}
	.tip{
		flex: 1;
		text-align: right;
	}
	.icon-you{
		margin-left: 10upx;
	}
	
	.eva-box{
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
	
	.time{
		font-size: 22rpx;
		color:#8F8F94;
		margin-left: 410rpx;
	}
	
	.contentt {
		margin-top: 10upx;
		font-size: 25upx;
	}
	
	/* 详情 */
	.titlee {
		width: 100%;
		height: 80upx;
		display: flex;
		align-items: center;
		font-size: 25upx;
		margin-left: 30rpx;
	}
	
	/* 底部菜单 */
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
		height: 80upx;
		border-radius: 15upx;
		overflow: hidden;
		display: flex;
		/* margin-right: -2%; */
	}
	.joinCart,.buy {
		height: 80upx;
		padding: 0 50upx;
		color: #fff;
		display: flex;
		align-items: center;
		font-size: 26upx;
	}
	.joinCart {
		background-color: #FF8000;
	}
	.buy {
		background-color:#DD524D;
	}
</style>
