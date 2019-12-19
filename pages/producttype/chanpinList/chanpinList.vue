<template>
<view>
<view class="pyg_index">
  <!--搜索框开始-->
    <SearchInput></SearchInput>
  <!--s搜索框结束-->
</view>
		 <view scroll-x class="cates_container" >
			
				<scroll-view scroll-x="true"   class='yqxz' style="width: 100%" scroll-with-animation> 
				     <view class="tab" @tap="change(0)" data-index='0' bindtap="switchTab">热卖推荐</view>
					 <view class="tab" @tap="change(1)" data-index='2' bindtap="switchTab">乳品饮料</view>
				    <view class="tab"  @tap="change(2)" data-index='1' bindtap="switchTab">休闲零食</view>
				    <view class="tab"  @tap="change(3)" data-index='3' bindtap="switchTab">酒水饮料</view>
					<view class="tab"  @tap="change(4)" data-index='4' bindtap="switchTab">母婴护理</view>
					<view class="tab"  @tap="change(9)" data-index='5' bindtap="switchTab">衣服</view> 
				</scroll-view>
		
					
		</view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="product-list">
				<view class="product" v-for="(goods) in goodsList" :key="goods.id" @click="XQ(goods.id)">
					<image mode="widthFix" :src="goods.picturepath"></image>
					<view class="info">
					<view class="name">{{goods.goodsName}} </view>
					<navigator class="imga"  url="../ProductDetails/ProductDetails"><image class="img" src="../../static/icon/jiahao.png"/></navigator>
					</view>
					<view class="info">
						<view class="price">￥{{goods.price}}</view>
						 <view class="slogan" @click="GW">
							 <image class="slogan"  src="../../../static/images/img/jiahao.png"></image>
						 </view> 
					</view>
					
				</view>
			</view>
			<view class="loading-text">{{loadingText}}</view>
		</view>
	</view>
	
</template>

<script>
	import SearchInput from "../../../components/SearchInput/SearchInput";
	
	export default {
		data() {
			return {
				goodsList:[]
			}
		},
		components: {
		  SearchInput
		},
		onLoad: function (options) {
			uni.request({
				url:'http://localhost:8080/commodity/selectCom',
				method:'POST',
				data:{},
				success: res => {
					this.goodsList=res.data.message;
				}
			});
		  },
		  methods:{
			  GW(){
				  // 1 获取缓存中的购物车 数组
				  let cart = uni.getStorageSync("cart") || [];
				  // 2 判断 商品对象是否存在于购物车数组中
				  let index = cart.findIndex(v => v.id === this.goodsList.id);
				  if (index === -1) {
				    //3  不存在 第一次添加
				    
				    cart.push(this.goodsList);
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
			  XQ:function(e){
				  uni.navigateTo({
				  	url:'../ProductDetails/ProductDetails?id='+e
				  })
			  },
			 change:function(e){
			 			 console.log(e);
			 			uni.showToast({
			 				title:"编号"+e,
			 				icon:"none"
			 			});
			 			uni.request({
			 				url: 'http://localhost:8080/commodity/selectCom?ccategoryid='+e,
			 				method: 'POST',
			 				data: {},
			 				success: res => {
			 					this.goodsList=res.data.message;
			 				},
			 				fail: () => {},
			 				complete: () => {}
			 			});
					}
		  } 
	}
</script>

<style lang="scss">
	.but{
		display: inline-block;
		margin-top: 60rpx;
		justify-content: center;
		margin: 0 auto;
	
	}
.one1{
	display: inline-block;
	margin-left: 40rpx;
	height: 400rpx;
	width: 280rpx;
	margin-top: 40rpx;
	background-color: #FF0000;
}

.img{
	width: 40rpx;
	height: 40rpx;
	display: inline-block;

}
.imga{
	width: 50rpx;
	height: 50rpx;
}

.view-item{
    width:100px;
    height:100px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:24rpx;
    font-color:#222;
    background:#80CBC4;
    margin:20rpx;
}
.view-parent{
    display:inline-block;
}



.yqxz {
    overflow-x: auto;
    height: 90rpx; 
	width: 100%;
    white-space: nowrap;
    font-family: Monaco;
	font-size: 25rpx;
	background-color: #AAAAAA;
}
.tab {
    display: inline-block;
    height: 86rpx;
    line-height: 86rpx;
    border-bottom: 4rpx solid transparent;
    padding: 0 64rpx;
}
.tab.focus {
    border-bottom-color: #16cc80;
}




.icon {
		font-size:26upx;
	}
	.header{
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;
		.target{
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;
			&.on{
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}
			
			
		}
	}
.place{
		
		background-color: #ffffff;
		height: 100upx;

	}
.goods-list{
	margin-top: 40rpx;
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
						width: 70rpx;
						height: 70rpx;
						display: inline-block;
						
					}
				}
			}
			
		}
	}
	
	.name{
		padding: 20rpx;
		float: left;
		margin: 10rpx;
	}
	.nameActive{color: #FF0000 !important;}
</style>
