<template>
	<view>
		<view v-for="(con) in content" :key="con.id">
			<view class="top">
				<text class="font">{{con.title}}</text>
			</view>
			<view class="button">
				<text>来源</text><text class="time">时间：2019-09-09</text>
				<view class="content">
					{{con.font}}
				</view>
				<image src="../../static/images/tupian1.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:[
					{id:0,title:'dadada',font:'年少无知的时候， 洗发乳和护发素均直接涂抹于',img:'../../static/images/tupian1.png'}
				]
			}
		},
		methods: {
			
		},
		onLoad:function(options){
			 
		}
	}
</script>

<style>
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
	}
	.content{
		margin-top: 20rpx;
	}

</style>
