<template>
	<view class="content">
		<scroll-view class="nav-area" scroll-x :scroll-left="navScrollLeft">
			<view class="scroller" :style="{ width: navItemWidth * navList.length + 'rpx' }">
				<view class="scroller-wrapper">
					<view class="scroller-item" 
						v-for="(item, index) in navList" :key="index" 
						:style="{ width: navItemWidth + 'rpx' }" 
						:class="{ active: index === changeIndex }"
						@tap="tapNav(index)"
					>{{ item }}</view>
				</view>
				<view class="scroller-bar">
					<view class="active-bar" :style="{ width: navItemWidth + 'rpx', left: activeBarLeft + 'rpx' }">
						<view></view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="swiper-area">
			<swiper :current="switchIndex" :duration="567" @transition="transition" @change="change" @animationfinish="animationfinish">
				<swiper-item v-for="(item, index) in navList" :key="index" >
					<scroll-view scroll-y :style="{ height: scrollViewHeight + 'rpx' }">
						<!-- <view class="product" v-for="(goods) in groupList" :key="goods.id">
							
						</view> -->
						<view class="goods-info">
							<!-- <image :src="picturepath" class="slide-image"></image>
							<view class="goods-info-item">
								<view class="title">{{goods.goodsName}}</view>
								<view class="m-price">单买价¥{{goods.price}}</view>
								<view class="price">拼团价<text>¥{{goods.activityprice}}</text></view>
								<view class="jiesheng">拼团为您节省{{goods.price-goods.activityprice}}元</view>
							</view> -->
							
							<image src="../../../static/groupImg/groupxia.png" class="slide-image"></image>
							<view class="goods-info-item">
								<view class="title">大龙虾</view>
								<view class="m-price">单买价¥88</view>
								<view class="price">拼团价<text>¥59</text></view>
								<view class="jiesheng">拼团为您节省501.1元</view>
							</view>
						</view>
						
						<view class="group-info">
							还差<text class="g-people">{{groupList.gpeople}}</text>人拼团成功，剩余
								<uni-countdown color="black" background-color="#F0F0F0" :show-day="false" :hour="21" :minute="38" :second="05"></uni-countdown>结束
						</view>
						
						<view class="group-info2">
							<view class="tuanzhang">
								<image :src="groupData.tuanzhang" class="gimage"></image>
									<view class="tz-text"></view>
							</view>
							<!-- :src="groupData.tuanyuan" -->
							<view class="tuanyuan"><image src="../../../static/groupImg/nabi.jpg" class="gimage"></image></view>
							<view class="tuanyuan"><image src="../../../static/groupImg/nabi.jpg" class="gimage"></image></view>
							<view class="tuanyuan2">?</view>
						</view>
						
						<view class="group-info3">
							<view class="g-btn">
								<view class="g-btn-text"><text>我已参团，</text>再邀请好友参团</view>
							</view>
							<view class="g-btn2">
								<view class="g-btn-text2">分享到朋友圈</view>
							</view>
						</view>
						
						<view class="group-info4">拼团规则：好友参团·人满成团·不满退款</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<!-- <button class="pulldownrefresh" @tap="pulldownrefresh" type="primary">下拉刷新</button> -->
	</view>
</template>

<script>
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
	export default {
		components: {uniCountdown},
		data() {
			return {
				lists: [],
				switchIndex: 0, // 使 swiper 切换到的 index
				changeIndex: 0, // swiper change 时的 index
				finishedIndex: 0, // swiper 停止滑动后的 index
				screenWidth: uni.getSystemInfoSync().screenWidth, // 屏幕宽
				navScrollLeft: 0, // 导航滚动区的滚动距离
				activeBarLeft: 0, // 滑块距离左边距离
				navItemWidth: 375,// navitem 宽
				pulldownRefresh: 0, // 下拉刷新容器距离顶部的距离
				scrollViewHeight: 1000, // scroll view 高
				pulldownRefreshing: false, // 页面是否正处于下拉刷新状态
				pullDownStopDistance: 0, //手指松开时下拉刷新容器距离顶部的距离
				pulldownRefreshingTop: 0, //手指松开后下拉刷新容器距离顶部的距离 
				pullDownRefreshDistance: 80, // 下拉刷新距离
				navList: ['我创建的', '我参与的'],
				groupList:{}
			}
		},
		mounted() { // 组件挂载后设置 scrollview 高
			this.$offset('.swiper-area').then(res => {
				this.scrollViewHeight = res.height
			})
		},
		// onLoad: function (e) {
		//   var ids = e.id;
		// 	uni.showToast({
		// 		title: "编号" + ids,
		// 		icon: "none"
		// 	});
		//   //获得当前对象
		//   var that = this
		// 	uni.request({
		// 		url: 'http://localhost:8080/commodity/getById?id='+ids,
		// 		method: 'POST',
		// 		success: res => {
		// 			this.groupList=res.data;
		// 			console.log(res.data)
		// 		},
		// 		fail: () => {},
		// 		complete: () => {}
		// 	});
		// },
		methods: {
			transition({ detail: { dx } }) { // swiper 运动时触发
				this.activeBarLeft = this.navItemWidth * this.finishedIndex + this.navItemWidth * (dx / this.screenWidth)
				if (this.activeBarLeft > (this.screenWidth - this.navItemWidth) / 2) {
					this.navScrollLeft = this.activeBarLeft - (this.screenWidth - this.navItemWidth) / 2
				}
			},
			change({ detail: { current } }) { // swiper index 变化时触发
				this.changeIndex = current
			},
			animationfinish({ detail: { current } }) { // swiper 运动结束时触发
				this.switchIndex = this.finishedIndex = current
			},
			tapNav(index) { // 点击 bavbar 切换
				this.switchIndex = index
			},
			$offset(selector) { // 获取组件内元素的 offset 信息
				return new Promise(resolve => uni.createSelectorQuery().in(this).select(selector).boundingClientRect(data => resolve(data)).exec())
			},
			refresh() { // 下拉刷新
				setTimeout(() => {
					this.$refs.pulldownRefresher.pullup()
				}, 1234)
			},
			pulldownrefresh() {
				this.$refs.pulldownRefresher.pulldown()
				setTimeout(() => {
					this.$refs.pulldownRefresher.pullup()
				}, 1234)
			},
			//新闻详情
			// goGoods(item, index) {
			// 	let data = {
			// 		id: index,
			// 		title:'波士顿进口鲜活大龙虾450g~500g',
			// 		mprice:'88',
			// 		price:'59',
			// 		jiesheng:'501.1',
			// 		gpeople:'2'
			// 	}
			// 	uni.navigateTo({
			// 		url: `/pages/details/${url}?data=${JSON.stringify(data)}`
			// 	})
			// },
		}
	}
</script>

<style lang="scss">
	@mixin flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	page{
		background-color: #F0F0F0; 
		height: 100%;
	}
	
	.content{
		background-color: #F0F0F0;
		height: 100%;
		overflow: hidden;
	}
	
	.nav-area {
		width: 100%;
		height: 100rpx;
		.scroller {
			height: 100%;
			.scroller-wrapper {
				height: 90rpx;
				.scroller-item {
					@include flex();
					float: left;
					height: 100%;
					background-color: white;
					&.active {
						color: #F44336;
					}
				}
			}
			.scroller-bar {
				height: 5rpx;
				position: relative;
				.active-bar {
					@include flex();
					top: 0;
					left: 0;
					height: 100%;
					position: absolute;
					view {
						width: 30%;
						height: 100%;
						background:#F44336;
					}
				}
			}
		}
	}
	
	.swiper-area{
		width: 748rpx;
		height: 2550rpx;
	}
	
	swiper {
		height: 1200rpx;
	}
	
	
	.product{
		// height: 800rpx;
	}
	
	
	.goods-info{
			width: 710rpx;
			height: 340rpx;
			border-radius: 10rpx;
			margin-left: 20rpx;
			margin-top: 10rpx;
			background-color: white;
		}
		
		.slide-image{
			width: 240rpx;
			height: 200rpx;
			margin-top: 70rpx;
			margin-left: 40rpx;
			vertical-align: middle;
			float: left;
			display: block;
		}
		
		.goods-info-item{
			margin-left: 330rpx;
			margin-top: 20rpx;
			width: 300rpx;
			padding-top: 40rpx;
		}
		
		.title{
			font-size: 40rpx;
			font-weight:550;
			margin-bottom: 30rpx;
		}
		
		.m-price{
			font-size:27rpx;
			color:#8F8F94;
			text-decoration: line-through;
			margin-bottom: 10rpx;
		}
		
		.price{
			font-size: 40rpx;
			font-weight: 600;
			color:#F44336;
			margin-bottom: 20rpx;
		}
		
		.jiesheng{
			font-size:27rpx;
			color:#8F8F94;
		}
	
	.group-info{
			display: flex;
			font-size: 28rpx;
			margin-left: 90rpx;
			margin-top: 30rpx;
		}
		
		.g-people{
			font-size: 36rpx;
			font-weight: bold;
			margin-top: -10rpx;
		}
		
		.uni-countdown{
			margin-top: -7rpx;
			font-weight: bold;
		}
		
		.group-info2{
			display: flex;
			align-items: center;
		}
		
		.tuanzhang{
			margin-left: -120rpx;
		}
		
		.tuanyuan{
			margin-left: 80rpx;
		}
		
		.tuanyuan2{
			width: 130rpx;
			height: 130rpx;
			margin-left: 80rpx;
			border: 1rpx #999999 dashed;
			border-radius: 100%;
			margin-top: 25rpx;
			color: #999999;
			font-weight: bold;
			font-size: 50rpx;
			text-align: center;
		}
		
		.gimage {
			width: 130rpx;
			height: 130rpx;
			border-radius: 100%;
			margin-top: 30rpx;
		}
		
		.group-info3{
			margin-top: 40rpx;
			margin-left: 95rpx;
		}
		
		.g-btn{
			width: 550rpx;
			background-color: #E65339;
			border-radius: 60rpx;
			color: white;
			text-align: center;
		}
		
		.g-btn2{
			width: 550rpx;
			border-radius: 60rpx;
			background-color: #F0F0F0;
			margin-top: 30rpx;
			text-align: center;
			border:1rpx #000000 solid;
		}
		
		.g-btn-text{
			font-size: 35rpx;
			padding: 20rpx 0rpx;
		}
		
		.g-btn-text2{
			font-size: 35rpx;
			padding: 20rpx 0rpx;
		}
		
		.group-info4{
			height:50rpx;
			margin-top: 190rpx;
			background-color:#EEEEEE;
			color: #808080;
			text-align: center;
		}
</style>