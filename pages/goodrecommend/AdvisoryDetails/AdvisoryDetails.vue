<template>
	<view>
		<view v-for="(con) in content" :key="con.artId">
			<view class="top">
				<text class="font">{{con.artName}}</text>
			</view>
			<view class="button">
				<text>来源</text><text class="time">时间：{{con.gmtModifed}}</text>
				<view class="content">
					{{con.gmtModifed}}
				</view>
				<image class="ee" :src="con.artImages"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:[
					/* {id:0,title:'dadada',font:'年少无知的时候， 洗发乳和护发素均直接涂抹于',img:'../../static/images/tupian1.png'} */
				]
			}
		},
		methods: {
			
		},
		onLoad:function(options){
			 var id = options.id;
			 //获得当前对象
			 var that = this
			  uni.request({
			  	url: 'http://localhost:8080/getArticleApplet.do?id='+id,
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
