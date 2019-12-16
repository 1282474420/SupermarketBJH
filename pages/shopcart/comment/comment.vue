<template>
	<!--我的订单 评价-->
	<view class="container">
		<view class="ding2">
			<view class="ding">
				<image class="ding1" src="../../../static/images/img/tu1_03.png" @tap="back"></image>
				<view class="text1 text4">
					<text>发表评论</text>
				</view>
			</view>
		</view>
		<view class="dingdan">
		</view>
		<block v-for="(item, index) in ordersForGoods" :key="index">
			<view class="goods">
				<view class="goods2">
					<view class="goods3">
						<image :src="item.commodity.ctradeimg"></image>
					</view>
					<view class="goods4">
						<view class="goods5">
							<text>{{item.commodity.ctradeName}}</text>
						</view>
						<view class="goods6">
							<text class="te">¥{{item.commodity.cprice}}</text>
							<text class="te2">X{{item.oQuantity}}</text>
						</view>
					</view>
				</view>
			</view>
		</block>
		<form @submit="fabiao">
			<view class="theorder">
				<view class="theorder2">
					<view class="theorder3">
						<view class="serialnumber">
							<text class="numbertext">商品质量</text>
						</view>
						<!-- <view>
          <view>一:显示后台给的评分</view>
          <block wx:for="{{one_1}}">
            <image src='../img/hongWJX2.png'></image>
          </block>
          <block wx:for="{{two_1}}">
            <image src='../img/hongWJX.png'></image>
          </block>
        </view>
        <view>这里num给的是几分就显示几颗星星</view> -->
						<view class="in">
							<block v-for="(item, index) in one_2" :key="index">
								<image @tap="in_xin" :id="(index+1)" data-in="use_sc2" src="../../../static/images/img/hongWJX2.png"></image>
							</block>
							<block v-for="(item, index) in two_2" :key="index">
								<image @tap="in_xin" :id="(index+1)" data-in="use_sc" src="../../../static/images/img/hongWJX.png"></image>
							</block>
						</view>
					</view>
					
					<view class="theorder3 theorder4">
						<view class="serialnumber serialnumber3">
							<text class="numbertext">服务态度</text>
						</view>

						<view class="in">
							<block v-for="(item, index) in one2_2" :key="index">
								<image @tap="in_xin2" :id="(index+1)" data-in="use2_sc2" src="../../../static/images/img/hongWJX2.png"></image>
							</block>
							<block v-for="(item, index) in two2_2" :key="index">
								<image @tap="in_xin2" :id="(index+1)" data-in="use2_sc" src="../../../static/images/img/hongWJX.png"></image>
							</block>
						</view>
					</view>

					<view class="theorder3 theorder4 theorder5">
						<view class="serialnumber serialnumber3">
							<view class="te">
								<textarea placeholder="商品满足你的期待么？说说你的想法，分享给想买的TA们吧" name="textarea" :value="confirm" @confirm="confirm" auto-height></textarea>
							</view>
							<view class="ui_uploader_cell">
								<!-- 根据已选择的图片临时路径数组展示图片-->
								<view class="ui_uploader_item" v-for="(item, index) in uploaderList" :key="index">
									<!-- 删除-->
									<icon class="ui_uploader_item_icon" @tap="clearImg" :data-index="index" type="clear" size="20" color="0,0,0"></icon>
									<!-- 图片-->
									<image @tap="showImg" :data-index="index" :src="item"></image>
								</view>
								<!-- 上传按钮+框 -->
								<view class="ui_uploader" @tap="uploaderNum<2 ?'upload':'findEvent'" v-if="showUpload">
									<image src="../../../static/images/img/shi.png"></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class="Orderssubmitted">
				<view class="Orderssubmitted5">
					<button class="Orderssubmitted2" :data-id="item.commodity.cid" form-type="submit">确认提交</button>
				</view>
			</view>
		</form>

	</view>
</template>

<script>
	// pages/comment/comment.js
	const app = getApp().globalData;
	var util = require("../../../utils/util.js");

	export default {
		data() {
			return {
				enterTime: '',
				userId: '',
				name: '',
				type: '',
				level: '',
				content: '',
				headSite: '',
				fileAddress: '',
				cidc: '',
				num: 0,
				//后端给的分数,显示相应的星星
				one_1: '',
				two_1: '',
				one_2: 0,
				two_2: 5,
				oId: '',
				num2: 0,
				//后端给的分数,显示相应的星星
				one2_1: '',
				two2_1: '',
				one2_2: 0,
				two2_2: 5,
				ordersForGoods: [],
				//根据已选择的图片临时路径数组展示图片
				uploaderList: [],
				uploaderNum: 0,
				//根据已选图片个数判断是否可继续上传
				showUpload: true
			};
		},

		components: {},
		props: {},

		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad: function(options) {
			var that = this; // 初始化

			getApp().globalData.initPage(that); //情况一:展示后台给的评分

			that.setData({
				one_1: this.num,
				two_1: 5 - this.num
			});
			that.setData({
				one2_1: this.num2,
				two2_1: 5 - this.num2
			});
			var id = getApp().globalData.userInfo.userId;
			console.log(options.oids);
			console.log('用户id', id);
			let oidd = options.oids;
			console.log('订单id', oidd);

			uni.request({
				url: getApp().globalData.url + '/order/orderSelectByIOpayStatus',
				data: {
					oId: oidd,
					o_customerInfo: id
				},
				header: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				method: 'POST',
				dataType: 'json',
				success: function(res) {
					that.setData({
						ordersForGoods: res.data.data,
						oId: oidd
					});

					for (var i = 0; i < that.ordersForGoods.length; i++) {
						that.setData({
							cidc: that.ordersForGoods[i].commodity.cid
						});
					}

					console.log('商品信息', that.ordersForGoods);
					console.log('商品id', that.cidc);
				}
			});
		},

		methods: {
			//服务态度
			in_xin2: function(e) {
				var in_xin2 = e.currentTarget.dataset.in;
				var one2_2;

				if (in_xin2 === 'use2_sc2') {
					one2_2 = Number(e.currentTarget.id);
				} else {
					one2_2 = Number(e.currentTarget.id) + this.one2_2;
				}

				this.setData({
					one2_2: one2_2,
					two2_2: 5 - one2_2
				});
			},
			//商品质量
			in_xin: function(e) {
				var in_xin = e.currentTarget.dataset.in;
				var one_2;

				if (in_xin === 'use_sc2') {
					one_2 = Number(e.currentTarget.id);
				} else {
					one_2 = Number(e.currentTarget.id) + this.one_2;
				}

				this.setData({
					one_2: one_2,
					two_2: 5 - one_2
				});
			},
			// 删除图片
			clearImg: function(e) {
				var nowList = []; //新数据

				var uploaderList = this.uploaderList; //原数据

				for (let i = 0; i < uploaderList.length; i++) {
					if (i == e.currentTarget.dataset.index) {
						continue;
					} else {
						nowList.push(uploaderList[i]);
					}
				}

				this.setData({
					uploaderNum: this.uploaderNum - 1,
					uploaderList: nowList,
					showUpload: true
				});
			},
			//展示图片
			showImg: function(e) {
				var that = this;
				uni.previewImage({
					urls: that.uploaderList,
					current: that.uploaderList[e.currentTarget.dataset.index]
				});
			},
			//上传图片
			upload: function(e) {
				var that = this;
				uni.chooseImage({
					count: 2 - that.uploaderNum,
					// 默认9
					sizeType: ['original', 'compressed'],
					// 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'],
					// 可以指定来源是相册还是相机，默认二者都有
					success: function(res) {
						console.log(res); // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片

						let tempFilePaths = res.tempFilePaths;
						let uploaderList = that.uploaderList.concat(tempFilePaths);

						if (uploaderList.length == 9) {
							that.setData({
								showUpload: false
							});
						}

						that.setData({
							uploaderList: uploaderList,
							uploaderNum: uploaderList.length
						});
					}
				});
			},
			findEvent: function() {
				uni.showLoading({
					title: '最多选择两张图片'
				});
				setTimeout(function() {
					uni.hideLoading();
				}, 2000);
			},
			fanhui: function() {
				var pages = getCurrentPages(); //获取页面栈

				if (pages.length > 1) {
					//上一个页面实例对象
					var prePage = pages[pages.length - 2]; //调用上一个页面的onShow方法

					prePage.onShow();
				}
			},
			fabiao: function(e) {
				var that = this;
				var cc = e.detail.value.textarea;
				console.log('内容', cc);
				console.log('用户', getApp().globalData.userInfo);
				var id = getApp().globalData.userInfo.userId;
				var name = getApp().globalData.userInfo.username;

				uni.request({
					url: getApp().globalData.url + '/member/addMemberComment',
					data: {
						userId: id,
						name: name,
						type: '商品反馈',
						level: '3',
						content: cc,
						headSite: getApp().globalData.userInfo.headPortrait,
						fileAddress: 'http://pzg51qmvs.bkt.clouddn.com/e750b48e-0652-453f-a3cd-2b3916e33978',
						enterTime: util.formatTime(new Date()),
						cId: that.cidc
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						uni.showToast({
							title: '提交成功',
							icon: 'success',
							duration: 500
						});
					}
				});

				uni.request({
					url: getApp().globalData.url + '/order/cancelTheorDerBywc',
					data: {
						oId: that.oId
					},
					header: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					method: 'POST',
					dataType: 'json',
					success: function(res) {
						uni.navigateTo({
							url: '/pages/payment/payment'
						});
					}
				});
			},
			back: function() {
				uni.navigateBack({
					delta: 1
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
			}
		}
	};
</script>
<style>
	@import "./comment.css";
</style>
