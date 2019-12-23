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
		
		<view class="flashCountdown">
			<text class="f-text">限时购</text>抢购中
			<text class="f-text2">离结束还剩</text>
			<uni-countdown color="#fe5c6a" border-radius="30rpx" background-color="#F5F5DC" :show-day="false" :hour="21" :minute="38" :second="05"></uni-countdown>
		</view>
		
		<view class="flex-item">
			<!-- 标题 价格 -->
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
				<view class="title">{{goodsData.goodsName}}</view>
				<!-- <view class="goods_text">{{goodsData.goodsTitle}}</view> -->
			</view>
		</view>
		
		<view class="flex-item">
			<view class="c-list ">
				<!--class="uni-list-cell" hover-class="uni-list-cell-hover"-->
				<view>
					<view class="c-row b-b">
						<text class="tit tt">库存</text>
						<text class="tit2 tt">999件</text>
					</view>
				</view>
				
				<!-- <view >
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
				<view class="joinCart" @tap="joinCart">加入购物车</view>
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
			    // 1 获取缓存中的购物车 数组
			    let cart = uni.getStorageSync("cart") || [];
			    // 2 判断 商品对象是否存在于购物车数组中
			    let index = cart.findIndex(v => v.goods_id === this.GoodsInfo.goods_id);
			    if (index === -1) {
			      //3  不存在 第一次添加
			      this.GoodsInfo.num = 1;
			      this.GoodsInfo.checked = true;
			      cart.push(this.GoodsInfo);
			    } else {
			      // 4 已经存在购物车数据 执行 num++
			      cart[index].num++;
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
			}
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
	
	.flashCountdown{
		background-image: linear-gradient(90deg, #ffa549 0%, #fe5c6a 100%),
		                    linear-gradient(#ffa549, #ffa549);
		color: white;
		height: 70rpx;
		padding-top: 10rpx;
		display:flex;
		align-items:baseline;
		font-size: 27rpx;
	}
	
	.f-text{
		font-size: 33rpx;
		margin-left: 20rpx;
		margin-right: 10rpx;
		font-weight: bold;
	}
	
	.f-text2{
		margin-left: 180rpx;
	}
	
	.flex-item{
		background-color: white;
		margin-bottom: 20rpx;
	}
	
	.info-box{
		background-color: white;
		font-size: 20upx;
		padding-left: 30rpx;
		padding-top: 10rpx;
		padding-bottom: 50rpx;
		display:flex;
		align-items:baseline;
		height: 65upx;
	}
	
	.price {
		font-size: 60rpx;
		font-weight: 600;
		color:#F44336;
		font-family: 华文细黑;
	}
	
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
	
	.content-item{
		padding-left: 250rpx;
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
	
	.reply{
		background-color: #BBBBBB;
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
		font-size: 28upx;
	}
	.joinCart {
		background-color: #FF8000;
	}
	.buy {
		background-color:#DD524D;
	}
</style>
