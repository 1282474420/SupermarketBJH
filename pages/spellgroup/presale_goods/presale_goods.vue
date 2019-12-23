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
			<view class="info-box goods-info">
				<text class="price-tip">¥</text>
				<text class="price">{{goodsData.activityprice}}</text>
				<text class="m-price">原价¥{{goodsData.price}}</text>
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
				<view class="title">【预售】{{goodsData.goodsName}}</view>
				<!-- <view class="goods_text">{{goodsData.goodsTitle}}</view> -->
			</view>
		</view>
		
		<view class="flex-item">
			<view class="c-list uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<!-- uni-list-cell-navigate uni-navigate-right -->
					<navigator url="../../home/coupons/coupons">
						<view class="c-row">
							<text class="tit tt">领券</text>
							<text class="con red">领取优惠券</text>
						</view>
					</navigator>
				</view>
					
				<view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="c-row b-b">
						<text class="tit tt">库存</text>
						<text class="tit2 tt">999件</text>
					</view>
				</view>
				
				<!-- <view class="uni-list-cell" hover-class="uni-list-cell-hover">
					<view class="c-row b-b">
						<text class="tit tt">规格</text>
						<text class="tit2 tt">数量参数选择</text>
					</view>
				</view> -->
				
				<view class="c-row b-b">
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
	export default {
		data() {
			return {
				goodsData:{}
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
			home:function(){
				uni.navigateTo({
					url:'../../home/home/home'
				})
			},
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
			// 首页
			// home(){
			// 	uni.navigateTo({
			// 		url:'../../home/home/home'
			// 	})
			// },
			// 客服
			share(){
				uni.navigateTo({
					url:""
				})
			},
			//购物车
			keep(){
				uni.navigateTo({
					url:""
				})
			},
			// 加入购物车
			joinCart(){
				if(this.selectSpec==null){
					return this.showSpec(()=>{
						uni.showToast({title: "已加入购物车"});
					});
				}
				uni.showToast({title: "已加入购物车"});
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
			//立即购买
			buy(){
				if(this.selectSpec==null){
					return this.showSpec(()=>{
						this.toConfirmation();
					});
				}
				this.toConfirmation();
			},
			chat() {
				uni.reLaunch({
					url:'/pages/home/chat/chat'
				})
			}
		}
	}
</script>

<style>
	
	
		.titlee {
			width: 100%;
			height: 80upx;
			display: flex;
			/* justify-content: center; */
			align-items: center;
			font-size: 25upx;
			margin-left: 30rpx;
		}
	
	
	
	
	
	.comments {
		
	}
	
	.row {
		width: 100%;
		height: 40upx;
		display: flex;
		align-items: center;
		margin: 0 0 30upx 0;
		
		
	}
	.text {
		font-size: 30upx;
	}
	.arrow {
		font-size: 28upx;
		position: absolute;
		right: 4%;
		color: #17e6a1;
		
	}
	.show {
		display: flex;
		align-items: center;
		
	}
	.icon {
		color: #17e6a1;
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
	
	.reply{
		background-color: #BBBBBB;
		
	}
	
	
	.uni-list-cell{
		/* width: 740rpx; */
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
		margin-left: 450rpx;
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
	.name{
		font-size: 20rpx;
	}
	
	.portrait{
		flex-shrink: 0;
		width: 50rpx;
		height: 50rpx;
		border-radius: 100px;
	}
	.right{
		/* flex: 1; */
		/* display: flex;
		flex-direction: column; */
		padding-left: 26upx;
		
	}
	.con{
		font-size: 27rpx;
		color: #F44336;
	}
	.bot{
		display: flex;
		justify-content: space-between;
	}
	
	
	
	
	
	.c-list{
		/* font-size: 30rpx;
		color: $font-color-base; */
		/* background-color: white; */
		
	}
	
	.c-row{
		display:flex;
		align-items:center;
		padding: 25rpx 33rpx;
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
	.con{
		flex: 1;
		color: #F44336;
	}
	/* .selected-text{
		margin-right: 10upx;
	} */
	.bz-list{
		height: 40upx;
		/* font-size: $font-sm+2upx; */
		/* color: $font-color-dark; */
		
	}
	.tt{
		display: inline-block;
		margin-right: 30upx;
	}
	.con-list{
		flex: 1;
		display:flex;
		flex-direction: column;
		/* color: $font-color-dark; */
		/* line-height: 40upx; */
	}
	.red{
		/* color: $uni-color-primary; */
	}
	
	
	
	
	/* 标题简介 */
	/* .introduce-section{
		background: #fff;
		padding: 7upx 22upx;
		
	}*/
	
	.title{
		font-size: 55upx;
		height: 50upx; 
		line-height: 50upx;
		font-weight: 600;
	}
	
	/* .price-box{
		display:flex;
		align-items:baseline;
		height: 64upx;
		padding: 10upx 0;
		padding-left: ;
		border: 1rpx #000000 solid;
		font-size: 26upx;
		color:#FF3333;
	} */
	
	.price-tip{
		color:#F44336;
		font-weight: 600;
		font-size: 30rpx;
	}
	
	.m-price{
		margin-left: 60rpx;
		font-size: 25rpx;
		color:#8F8F94;
		text-decoration: line-through;
	}
	.coupon-tip{
		color: #8F8F94;
		font-size: 24rpx;
	} 
	
	
	
	
	.goods_text{
		font-size: 24rpx;
		font-weight: 600;
		font-family: 微软黑体;
		color:#F44336;
		padding-bottom: 30rpx;
		margin-left: 20rpx;
	}
	
	
	
	
	
	
	
	view{
		font-family: 微软黑体;
	}
		
	.swiper-box {
		position: relative;
		width: 100%;
		height: 100vw;
	}
	
	swiper {
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
	
	
	
	
	.price {
		font-size: 60rpx;
		font-weight: 600;
		color:#F44336;
		font-family: 华文细黑;
	}
	.title {
		font-size: 35rpx;
		font-weight: 600;
	}
	
	.row {
		width: 100%;
		display: flex;
		align-items: center;
		margin: 0 0 30upx 0;
		
	}
	
	.text {
		font-size: 24upx;
		color: #a2a2a2;
		margin-right: 20upx;
	}
	
	.content {
		font-size: 28upx;
		display: flex;
		flex-wrap: wrap;
		
	}
	
	.serviceitem{
		margin-right: 10upx;
	}
	
	.sp {
		width: 100%;
		display: flex;
		
	}
	
	.info-box{
		background-color: white;
		/* padding: 10rpx 10rpx; */
		font-size: 20upx;
		padding-left: 30rpx;
		padding-top: 10rpx;
		padding-bottom: 50rpx;
		
		display:flex;
		align-items:baseline;
		height: 65upx;
		/* padding: 10upx 0;
		font-size: 26upx; */ 
	}
	
	.info-box2{
		background-color: white;
		padding: 5upx 10upx;
		/* color: #999; */
		font-size: 20upx;
	}
	
	.info-box3{
		background-color: white;
		padding-left: 20rpx;
		font-size: 20upx;
		padding-bottom: 30rpx;
	}
	
	/* view {
		background-color: white;
		padding: 5upx 10upx;
		color: #999;
		margin-right: 10upx;
		font-size: 20upx;
		border-radius: 5upx;
		
	} */
	
	.on{
		border: solid 1upx #f47952;
		padding: 4upx 8upx;
	}
	
	.arrow {
		position: absolute;
		right: 4%;
		
	}
	
	.icon {
		color: #ccc;
	}
	
	
	
	
	.flex{
		background-color:#F0F0F0;
	}
	
	.uni-list-cell{
		color:#808080;
	}
	
	.content{
		display: flex;
		  align-items: center;
		  flex-direction: row; 
		  justify-content: space-between;
		  padding-top: 10rpx;
	}
	
	.word2{
		font-size: 45rpx;
		font-weight: 600;
		color:#FF3333;
		flex-grow: 1;
	}
	
	.content-item{
		padding-left: 240rpx;
		padding-right: 35rpx;
		margin-right: 35rpx;
		border-right: 1rpx #D8D8D8 solid;
	}
	
	.content-item2{
	}
	
	.text1{
		font-size: 32rpx;
		font-weight: 600;
		color:#FF3333;
	}
	
	.flex-item{
		background-color: white;
		margin-bottom: 20rpx;
	}
	
	.word3{
		font-size: 40rpx;
		font-weight: 600;
	}
	
	.word4{
		font-size: 24rpx;
		font-weight: 600;
		color:#FF3333;
		padding-bottom: 30rpx;
	}
	
	.wordShang{
		font-size: 32rpx;
		margin-left: 24rpx;
		padding-top: 13rpx;
		margin-bottom: 13rpx;
		font-weight: 500;
	}
	
	.word5{
		font-size: 24rpx;
		color:#808080;
		text-decoration: line-through;
		flex-grow: 5;
	}
	
	.imgShang{
		height: 900rpx;
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
	.joinCart,.buy {
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
		background-color:#DD524D;
	}
	
	
	/* 底部操作菜单 */
	.page-bottom{
		position:fixed;
		left: 0px;
		bottom:0rpx;
		/* z-index: 95; */
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 120rpx;
		/* background: rgba(255,255,255,.9); */
		/* box-shadow: 0 0 20upx 0 rgba(0,0,0,.5); */
		background-color: #fff;
		/* border-radius: 16upx; */
		
		
	}
	
	.p-b-btn{
		display:flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
		font-size: 25rpx;
		/* color: $font-color-base; */
		width: 96upx;
		height: 80upx;
		
	}
	.yticon{
		font-size: 40upx;
		/* line-height: 48upx; */
		/* color: $font-color-light; */
		width: 50rpx;
		height: 60rpx;
	}
	.active, .active .yticon{
		/* color: $uni-color-primary; */
	}
	.icon-fenxiang2{
		font-size: 42upx;
		/* transform: translateY(-2upx); */
	}
	.icon-shoucang{
		font-size: 46upx;
	}
	.action-btn-group{
		display: flex;
		height: 76upx;
		border-radius: 100px;
		overflow: hidden;
		box-shadow: 0 20upx 40upx -16upx #fa436a;
		box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
		background: linear-gradient(to right, #ffac30,#fa436a,#F56C6C);
		margin-left: 20upx;
		position:relative;
		
	}
	:after{
		content: '';
		position:absolute;
		top: 50%;
		right: 50%;
		transform: translateY(-50%);
		height: 28upx;
		width: 0;
		border-right: 1px solid rgba(255,255,255,.5);
	}
	.action-btn{
		display:flex;
		align-items: center;
		justify-content: center;
		width: 180upx;
		height: 100%;
		/* font-size: $font-base ; */
		padding: 0;
		border-radius: 0;
		background: transparent;
	}
</style>
