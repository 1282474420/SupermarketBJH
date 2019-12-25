<template>
	<!-- 登录页面-->
	<view class="content1">
		<view class="header">
			<image src="../../static/images/logo.png"></image>
		</view>
		<form class="loginView">
			<view class="list">
				<view class="list-call">
					<image class="img" src="/static/image/1.png"></image>
					<input class="biaoti" v-model="phone" type="number" maxlength="11" placeholder="输入手机号" />
				</view>
				<view class="list-call">
					<image class="img" src="/static/image/2.png"></image>
					<input class="biaoti" v-model="password" type="text" maxlength="32" placeholder="输入验证码" /> <button class="yzmbutton"
					 hover-class="dlbutton-hover" open-type="getUserInfo" @getuserinfo="yanzhengma">获取验证码</button>
				</view>
			</view>
			<view>
				<button class="dlbutton" hover-class="dlbutton-hover" open-type="getUserInfo" @getuserinfo="login">登录</button>
			</view>
		</form>
		<!-- <view class="tx-w">					<view class="tx">						<image class="tx-img" :src="yonghuwx.avatarUrl"></image>						<view class="zx"></view>					</view>					<view class="name">{{yonghuwx.nickName}} </view>		</view> -->
	</view>
</template>

<script>
	var tha;
	import {
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				wxUserInfo: {},
				phone: '',
				password: '',
				verification: ''
			};
		},
		onLoad() {
			uni.reLaunch({
				url: 'pages/my/my/my'
			});
		},
		methods: {
			/**
			 * 账号密码登录
			 */
			login(e) {
				var me = this;
				if (me.phone == '') {
					uni.showToast({
						title: '手机号不能为空',
						icon: 'none',
						duration: 1500
					});
					return false;
				}
				if (me.password == '') {
					uni.showToast({
						title: '验证码不能为空',
						icon: 'none',
						duration: 1500
					});
					return false;
				}
				if (me.password != this.verification) {
					uni.showToast({
						title: '验证码错误',
						icon: 'none',
						duration: 1500
					});
					return false;
				}
				uni.reLaunch({
					url: "../my/my?yonghuwx="
				});
			},
			/**			 * 获取验证码方法			 */ 
			yanzhengma(e) {
				var me = this;
				if (me.phone == '') {
					uni.showToast({
						title: '手机号不能为空',
						icon: 'none',
						duration: 1500
					});
					return false;
				}
				if (me.phone.length != 11) {
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none',
						duration: 1500
					});
					return false;
				}
				uni.showToast({
					title: '发送成功,请注意查收',
					icon: 'none',
					duration: 1500
				});
				uni.request({
					url: 'http://localhost:8080/user/duanxin?mobileString=' + this.phone,
					method: 'POST',
					success: res => {
						console.log(res.data);
						this.verification = res.data;
					}
				});
			},
		},
	}
</script>

<style>
	.content1 {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header {
		width: 161upx;
		height: 161upx;
		/* background: rgba(63, 205, 235, 1);
		box-shadow: 0upx 12upx 13upx 0upx rgba(63, 205, 235, 0.47); */
		border-radius: 50%;
		margin-top: 30upx;
		margin-left: auto;
		margin-right: auto;
	}

	.header image {
		width: 161upx;
		height: 161upx;
		border-radius: 50%;
	}

	.list {
		display: flex;
		flex-direction: column;
		padding-top: 50upx;
		padding-left: 70upx;
		padding-right: 70upx;
	}

	.list-call {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		color: #333333;
		border-bottom: 1upx solid rgba(230, 230, 230, 1);
	}

	.list-call .img {
		width: 40upx;
		height: 40upx;
	}

	.list-call .biaoti {
		flex: 1;
		text-align: left;
		font-size: 32upx;
		line-height: 100upx;
		margin-left: 16upx;
		height: 32upx;
	}

	.yzmbutton {
		color: #FFFFFF;
		font-size: 25upx;
		width: 200upx;
		height: 70upx;
		background: linear-gradient(-90deg, rgba(255, 140, 0, 1), rgba(255, 69, 0, 1));
		box-shadow: 0upx 0upx 13upx 0upx rgba(164, 217, 228, 0.2);
		line-height: 70upx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
	}

	.dlbutton {
		color: #FFFFFF;
		font-size: 34upx;
		width: 470upx;
		height: 100upx;
		background: linear-gradient(-90deg, rgba(255, 140, 0, 1), rgba(255, 69, 0, 1));
		box-shadow: 0upx 0upx 13upx 0upx rgba(164, 217, 228, 0.2);
		border-radius: 50upx;
		line-height: 100upx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100upx;
	}

	.dlbutton-hover {
		background: linear-gradient(-90deg, rgba(63, 205, 235, 0.9), rgba(188, 226, 158, 0.9));
	}

	.xieyi {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		margin-top: 80upx;
		color: #FFA800;
		text-align: center;
		height: 40upx;
		line-height: 40upx;
	}

	.xieyi text {
		font-size: 24upx;
		margin-left: 15upx;
		margin-right: 15upx;
	}

	/* 第三方登录 start */
	.third-wapper {
		width: 100%;
		/* 固定底部 */
		/* bottom: 0;
		position: fixed; */

		margin-top: 60upx;

	}

	.third-line {
		display: flex;
		flex-direction: row;
		justify-content: center
	}

	.third-words {
		color: #A9A9A9;
		font-size: 13px;

		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.single-line {
		padding: 15upx 20upx;
		width: 25%;
		align-items: center;
	}

	.third-icos-wapper {
		margin-top: 30upx;
		display: flex;
		flex-direction: row;
		justify-content: center
	}

	.third-ico {
		width: 60upx;
		height: 60upx;
	}

	.third-btn-ico {
		background-image: url(http://122.152.205.72:88/group1/M00/00/05/CpoxxFxFO-yAOjTaAAATCIZEzRU503.png);
		width: 60upx;
		height: 60upx;
		background-color: white;
		background-size: 60upx 60upx;
		background-repeat: no-repeat;
		border: none;
		padding: 0;
	}

	button::after {
		border: none;
	}

	/* 第三方登录 end */
</style>
