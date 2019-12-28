<template>
	<view class="content">
		<uni-section title="门店列表" type="line"></uni-section>
		<view class="card">
			<uni-list>
				<uni-list-item title="全部门店"></uni-list-item>
			</uni-list>
		</view>
		<view v-for="(item,index) in stores" :key="index">
			<view class="nocard" @tap="openhome(item)">
				<uni-list>
					<uni-list-item :title="'百佳华-'+item.spName" :note="item.spAddress"></uni-list-item>
				</uni-list>
			</view>
		</view>
	</view>
</template>

<script>
import uniSection from '@/components/uni-section/uni-section.vue'
import uniList from "@/components/uni-list/uni-list.vue"
import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		components: {uniSection,uniList,uniListItem},
		data() {
			return {
				stores:[]
			}
		},
		onLoad() {
			uni.request({
				url:'http://localhost:8080/Message/listShopName',
				method: 'POST',
				data: {},
				success: res => {
					this.stores=res.data;
				},
				fail: () => {},
				complete: () => {}
			});
		},
		methods: {
			openhome(e){
				let mname=e.spName;
				console.log(mname);
				uni.reLaunch({
					url: '/pages/home/home/home?name='+mname,
				});
			}
		}
	}
</script>

<style>
.card {
	width: 90%;
	height: 100rpx;
	background-color: white;
	margin: auto;
	border-bottom: #D9D9D9 1rpx solid ;
	margin-top: 30rpx;
}
.nocard{
	width: 90%;
	height: 100rpx;
	background-color: white;
	margin: 0 auto 42upx auto;
	position: relative;
	margin-top: 10rpx;
	margin-bottom: 10rpx;
}
</style>
