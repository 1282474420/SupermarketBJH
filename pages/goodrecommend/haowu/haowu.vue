<template>
	<view>
		<text class="biaoti">精选产品</text>
		<scroll-view scroll-y class='yqxz' style="width: 100%" scroll-with-animation>
		   <view class="goods-list">
		   	<view class="product-list">
		   		<view class="product" v-for="(goods) in goodsList" :key="goods.id" 
				@click="XQ(goods.id)">
		   			<image mode="widthFix" :src="goods.picturepath"></image>
		   			<view class="name">{{goods.goodsName}}</view>
		   			<view class="info">
		   				<view class="price">￥{{goods.price}}</view>
		   				<view class="slogan">{{goods.slogan}}</view>
		   			</view>
		   		</view>
		   	</view>
		   	<view class="loading-text">{{loadingText}}</view>
		   </view>
		</scroll-view>
		
		<view class="biaoti1">推荐文章</view>
		<view>
				    <view class="first_tab">
				         <view class="goods_item"
						 v-for="(good) in advisory" :key="good.artId"
						 @clike="HaowuXQ(1)"
				        > 
				            <!-- 左侧 商品容器 -->
				            <view class="goods_info_wrap">
				              <view class="goods_name">{{good.artName}}</view>
							  <view class="goods_price"><text>{{good.artId}}浏览</text><text>160点赞</text></view>
				            </view>
							<!-- 右侧 图片容器 -->
							<view class="goods_img_wrap">
							  <image mode="widthFix" src="../../../static/images/img/goods/p3.jpg" ></image>
							</view>
				          </view>
				    </view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				goodsList:[],
				advisory:[
					{id:0,name:'水产生鲜 篇一：生鲜购买必坑指南（猪牛羊肉篇6666)'}
				]
			}
		},
		onLoad:function(options) {
			uni.request({
				url: 'http://localhost:8080/commodity/selectCom?ccategoryid=' + '',
				method: 'POST',
				success: res => {
					this.goodsList = res.data.message;
					console.log(res.data.message)
				}
			});
			uni.request({
				url: 'http://localhost:8080/listArticleApplet.do',
				method: 'POST',
				data: {},
				success: res => {
					this.advisory = res.data;
					console.log(res.data+"666")
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			HaowuXQ:function(e){
				uni.showToast({
					title: "编号" + e,
					icon: "none"
				});
				uni.navigateTo({
					url:"../AdvisoryDetails/AdvisoryDetails?id="+e
				})
			},
			XQ:function(e){
				uni.showToast({
					title: "编号" + e,
					icon: "none"
				});
				uni.navigateTo({
					url:"../../producttype/ProductDetails/ProductDetails?id="+e
				})
			}
		}
	}
</script>

<style lang="scss">
.yqxz {
    overflow-x: auto;
    height: 510rpx; 
	width: 100%;
    white-space: nowrap;
    font-family: Monaco;
	font-size: 9pt;
	border-bottom: 20rpx solid #CCCCCC;

}

.biaoti{
	margin-left: 30rpx;
}

.biaoti1{
	margin-top: 20rpx;
	margin-left:30rpx;
	width: 150rpx;
	color: #FF0000;
	border-bottom:4rpx solid #FF0000;
}
//推荐文章
.first_tab .goods_item {
  display: flex;
  border-bottom: 1px solid #ccc;
}
.first_tab .goods_item .goods_img_wrap {
  flex: 2;
  display: flex;
    justify-content: center;
  align-items: center;
}
.first_tab .goods_item .goods_img_wrap image {
  width: 70%;
}
.first_tab .goods_item .goods_info_wrap {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.first_tab .goods_item .goods_info_wrap .goods_name {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.first_tab .goods_item .goods_info_wrap .goods_price {
  color: var(--themeColor);
  font-size: 32rpx;
}
.goods_price text{
	padding-left: 20rpx;
}


.tab {
    display: inline-block;
    height: 86rpx;
    line-height: 86rpx;
    border-bottom: 4rpx solid transparent;
    padding: 0 64rpx;
}
.goods-list{
	margin-top: 48rpx;

		.loading-text{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}
		.product-list{
			
			   

			
			width: 92%;
			padding: 0 4% 3vw 4%; 
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			.product{
				
				width: 48%;
				border-radius: 20upx;
				background-color: #fff;
				margin: 0 0 15upx 0;
				box-shadow: 0upx 5upx 25upx rgba(0,0,0,0.1);
				image{
					width: 100%;
					border-radius: 20upx 20upx 0 0;
				}
				.name{
					width: 92%;
					padding: 10upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					font-size: 30upx;
				}
				.info{
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 10upx 4%;
					
					.price{
						color: #e65339;
						font-size: 30upx;
						font-weight: 600;
					}
					.slogan{
						color: #807c87;
						font-size: 24upx;
					}
				}
			}
			
		}
	}
</style>
