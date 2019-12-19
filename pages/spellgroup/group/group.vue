<template>
	<view class="content">
		<!--顶部导航栏-->
		<view class="uni-tab-bar">
			<scroll-view scroll-x class="uni-swiper-tab">
				<block v-for="(tabBar,index) in tabBars" :key="index" >
					<view class="swiper-tab-list" :class="{'active': tabIndex==index}" @tap="toggleTab(index)">
						{{tabBar.name}}
						<view class="swiper-tab-line"></view>
					</view>
				</block>
				
			</scroll-view>
		</view>
		
		<!--内容区-->
		<view class="uni-tab-bar2">
			<swiper :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(content,index) in contentList" :key="index" >
					<view class="swiper-item" style="border: 1rpx #000000 solid;">
						<view class="neirong">
							<view class="goods-info">
								<image src="../../static/images/groupxia.png" class="slide-image"></image>
								<view class="goods-info-item">
									<view class="title">{{groupList.title}}</view>
									<view class="m-price">单买价¥{{groupList.mprice}}</view>
									<view class="price">拼团价<text>¥{{groupList.price}}</text></view>
									<view class="jiesheng">拼团为您节省{{groupList.jiesheng}}元</view>
								</view>
							</view>
							
							<view class="group-info">
								还差<text class="g-people">{{groupList.gpeople}}</text>人拼团成功，剩余
								<uni-countdown background-color="#f8f8f8" :show-day="false" :hour="21" :minute="38" :second="05"></uni-countdown>结束
							</view>
							
							<view class="group-info2">
								<view class="tuanzhang">
									<image :src="groupData.tuanzhang" class="gimage"></image>
									<view class="tz-text"></view>
								</view>
								<view class="tuanyuan"><image :src="groupData.tuanyuan" class="gimage"></image></view> -->
								<!-- <view class="tuanyuan2"><image :src="groupData.tuanyuan2" class="gimage"></image></view> -->
								<view class="tuanyuan2">?</view>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		
	</view>
	
	
</template>

<script>
	
	export default {
		data() {
			return {
				tabIndex: 0,	//选中标签栏的序列
				contentList: [
								"我创建的",
								"我参与的"
							 ],
				tabBars:[
					{
						name: '我创建的',
						id: 'guanzhu',
						
					},
					{
						name: '我参与的',
						id: 'tuijian'
					}
				],
				groupList:{
					title:'波士顿进口鲜活大龙虾450g~500g',
					mprice:'88',
					price:'59',
					jiesheng:'501.1',
					gpeople:'2'
				},
				swiperHeight: 0
			
			}
		},
		components:{
			
		},
		onLoad() {
			
			
		},
		methods: {
			toggleTab(index){
				console.log(index)
				this.tabIndex = index
			},
			//滑动切换swiper
			tabChange(e){
				console.log(e.detail)
				const tabIndex = e.detail.current
				this.tabIndex = tabIndex
				
			}
		}
	}
</script>

<style>
	.content{
		background-color: #F0F0F0;
	}
	
	.swiper-tab-list{
		margin-top: 5rpx;
		margin-left: 160rpx;
		width: 100rpx;
		/* font-weight: bold; */
		font-size: 35rpx;
	}
	
	.uni-tab-bar .active{
		color: #E65339;
		font-weight: bold;
		font-size: 35rpx;
	}
	
	.uni-tab-bar{
		background-color: white;
	}
	
	.active .swiper-tab-line{
		margin-top: 20rpx;
		border-bottom: 6upx solid #E65339;
		width: 130rpx;
		/* border-top: 6upx solid #FEDE33; */
		border-radius: 20upx;
	}
	
	.uni-swiper-tab{
		width: 748rpx;
		/* border-bottom: 1upx solid #eeeeee; */
	}
	
	.neirong{
		height: 500rpx;
	}
	
	.goods-info{
		width: 680rpx;
		height: 350rpx;
		border-radius: 10rpx;
		overflow:hidden;
		margin-left: 30rpx;
		margin-top: 35rpx;
		background-color: white;
	}
	
	.slide-image{
		width: 260rpx;
		height: 210rpx;
		margin-top: 70rpx;
		margin-left: 40rpx;
		vertical-align: middle;
		float: left;
		display: block;
	}
	
	.goods-info-item{
		margin-left: 330rpx;
		margin-top: 30rpx;
		width: 300rpx;
	}
	
	.title{
		font-size: 30rpx;
		font-weight:550;
		margin-bottom: 10rpx;
	}
	
	.m-price{
		font-size:25rpx;
		color:#8F8F94;
		text-decoration: line-through;
	}
	
	.price{
		font-size: 40rpx;
		font-weight: 600;
		color:#F44336;
		margin-bottom: 10rpx;
	}
	
	.jiesheng{
		font-size:25rpx;
		color:#8F8F94;
	}

</style>