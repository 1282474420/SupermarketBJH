<template>
	<view>
		<view >
			<view class="top">
				<text class="font">{{content.artName}}</text>
			</view>
			<view class="button">
				<text class="LY">来源</text><text class="time">时间：{{content.gmtModifed}}</text>
				<view class="content">
					{{content.artContent}}
				</view>
				<image class="ee" :src="content.artImages"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:{}
			}
		},
		methods: {
			
		},
		onLoad:function(options){
			 var id = options.id;
			 //获得当前对象
			 var that = this
			  uni.request({
			  	url: 'http://localhost:8080/getArticleApplet.do?artId='+id,
			  	method: 'POST',
			  	data: {},
			  	success: res => {
			 		this.content=res.data;
			 	},
			  	fail: () => {},
			  	complete: () => {}
			  });
		}
	}
</script>

<style>
	.ee{
		width: 100%;
		height: 666rpx;
	}
	.top{
		text-align: center;
		height: 180rpx;
		border-bottom: 1rpx #AAAAAA solid;
	}
	.font{
		display: block;
		padding-top: 66rpx;
		font-size: 38rpx;
	}
	.time{
		float: right;
		font-size: 30rpx;
	}
	.LY{
			font-size: 30rpx;
	}
	.content{
		margin-top: 20rpx;
	}

</style>
