<template>
	<view>
		<view class="pyg_index">
			<!--搜索框开始-->
			<SearchInput></SearchInput>
			<!--s搜索框结束-->
		</view>
		<view class="cates_container">
			<!--左侧菜单-->
			<scroll-view scroll-y class="left_menu">
				<view v-for="(item, index) in leftMenuList" :key="item.id">
					<view @tap="change(item)" :class="'leftMenuList' + (item.id==navchoice?'active1':'')">
						<view class="tab1">{{item.name}}</view>
					</view>
				</view>
			</scroll-view>


			<!--右侧商品内容-->
			<scroll-view scroll-y class="right_content">
				<view class="first_tab">
					<view class="goods_item" v-for="(right) in rightContent" :key="right.id" 
					@click="XQ(right.id)"
					>
		            <!-- 左侧 图片容器 -->
		          <view class="goods_img_wrap">
		          	<image mode="widthFix" :src="right.picturepath" class="img1"></image>
		          </view>
					<!-- 右侧 商品容器 -->
					<view class="goods_info_wrap">
						<view class="goods_name">{{right.goodsName}}</view>
						<view class="goods_name">{{right.weight}}g </view>
						<view class="goods_price">￥{{right.price}}</view>
						<view class="goods_xiaoliang">销量:666</view> 
					</view>
					<navigator url="../chanpinList/chanpinList">
						<image class="img" src="../../../static/images/img/jiahao.png" />
					</navigator>
				</view>
			</view>
		</scroll-view>
	</view>
	</view>
</template>

<script>
	import SearchInput from "../../../components/SearchInput/SearchInput";

	export default {
		data() {
			return {
				//左侧的菜单数据
				leftMenuList: [{
						id: 0,
						name: '热卖推荐'
					},
					{
						id: 1,
						name: '休闲零食'
					},
					{
						id: 2,
						name: '乳品饮料'
					},
					{
						id: 3,
						name: '酒水饮料'
					},
					{
						id: 4,
						name: '粮油调味'
					},
					{
						id: 5,
						name: '母婴护理'
					},
					{
						id: 6,
						name: '个人洗护'
					},
					{
						id: 7,
						name: '时令蔬菜'
					},
					{
						id: 8,
						name: '冲调冲饮'
					},
					{
						id: 9,
						name: '衣服'
					},
					{
						id: 10,
						name: '家居日化'
					},
					{
						id: 11,
						name: '宠物用品'
					},
					{
						id: 12,
						name: '口腔护理'
					},
					{
						id: 13,
						name: '个人洗护'
					},
					{
						id: 14,
						name: '时令蔬菜'
					}

				],
				//右侧商品数据
				rightContent: [],
				fen: ""
			};
		},

		components: {
			SearchInput
		},
		props: {},
		Cates: [],

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			uni.request({
				url: 'http://localhost:8080/commodity/selectCom?ccategoryid=' + '',
				method: 'POST',
				success: res => {
					this.rightContent = res.data.message;
					console.log(res.data.message)
				}
			});
		},
		methods: {
			XQ:function(e){

				uni.showToast({
					title: "编号" + e,
					icon: "none"
				});
				uni.navigateTo({
					url:'../ProductDetails/ProductDetails?id='+e
				})
			},
			change: function(e) {
				console.log(e);
				uni.showToast({
					title: "编号" + e.id,
					icon: "none"
				});
				uni.request({
					url: 'http://localhost:8080/commodity/selectCom?ccategoryid=' + e.id,
					method: 'POST',
					data: {},
					success: res => {
						this.rightContent = res.data.message;
					},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	};
</script>
<style>
	@import "./chanpin.css";



	.first_tab .goods_item {
		display: flex;
		border-bottom: 1px solid #ccc;

	}

	.first_tab .goods_item .goods_img_wrap {
		flex: 2;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.first_tab .goods_item .goods_img_wrap image {
		width: 100%;
		height: 100%;
		;
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
		font-size: 30rpx;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.first_tab .goods_item .goods_info_wrap .goods_price {
		color: var(--themeColor);
		font-size: 32rpx;
		font-weight: bold;
		color: #FF0000;
	}

	.img {
		width: 70rpx;
		height: 70rpx;
		padding-top: 100rpx;
		padding-right: 20rpx;
		display: inline-block;
	}

	.goods_xiaoliang {
		font-size: 25rpx;
	}



	.yqxz {
		overflow-x: auto;
		height: 90rpx;
		width: 100%;
		white-space: nowrap;
		font-family: Monaco;
		font-size: 9pt;
		background-color: #AAAAAA;
		flex: 16;
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

	.xq {
		width: 85px;
		height: 85px;
		display: inline-block;
	}
</style>
