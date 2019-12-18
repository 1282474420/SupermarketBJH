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
					<uni-list-item :title="'百佳华-'+item.name" :note="item.address"></uni-list-item>
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
				stores:[{name:'西乡分店',address:'深圳市宝安区西乡街道办富成路91号'},
				{name:'沙井分店',address:'深圳市宝安区沙井镇新沙路276号'},
				{name:'松岗分店',address:'深圳市宝安区松岗镇107国道松岗路段293号'},
				{name:'龙华分店',address:'深圳市宝安区龙华镇人民北路上291号'},
				{name:'公明分店',address:'深圳市宝安区公明镇长春南路西1号'},
				{name:'石岩分店',address:'深圳市宝安区石岩街道石岩大道佳华豪苑'},
				{name:'三联分店',address:'深圳市龙岗区布吉街道联布北路'},
				{name:'坂田分店',address:'深圳市龙岗区坂田街道吉华路635号佳华领汇广场'},
				{name:'盐步分店',address:'佛山市南海区大沥镇北路18号青龙新城'},
				{name:'大沙田分店',address:'南宁市良庆区五象大道一号（大沙田广场）'},
				{name:'桃源分店',address:'南宁市青秀区教育路22号南湖御景裙楼1-4层'},
				{name:'领汇广场',address:'深圳市龙岗区坂田街道吉华路635号佳华领汇广场'}]
			}
		},
		onLoad() {
			
		},
		methods: {
			openhome(e){
				let mname=e.name;
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
