<template>
	<view class="content">
		<view class="qb">
		  <view class="tb">
		    <image src="../../../static/images/tbbj_01.png" class="tbbj"></image>
		    <view :style="'padding-top:' + (someData.statusBarHeight+someData.titleBarHeight) + 'px'">
		      <view class="hh-header" :style="'background: -webkit-linear-gradient(left,#' + properties.h_back_color.col + ',#' + properties.h_back_color.col2 + ')'">
		        <view class="status-bar" :style="'height:' + someData.statusBarHeight + 'px'"></view>
		        <view class="title-bar" :style="'height:' + someData.titleBarHeight + 'px'">
		          <view v-if="properties.isShowBack.value=='true'" class="hh-nav-back ico-back" @tap="goback"></view>
		          <view v-if="properties.isShowBack.value=='false'" class="hh-nav-back"></view>
		          <view class="hh-title">{{properties.innerTitle.value}}</view>
		          <view class="hh-nav-right"></view>
		        </view>
		      </view>
		    </view>
		    <view class="address" @tap="mdxz">
		      <image src="../../../static/images/address-icon_03.png" class="addressIcon"></image>
		      <text class="addressText">{{name}}</text>
		      <image src="../../../static/images/drop-down_001_03.png" class="dropDown"></image>
		    </view>
		    <!-- 搜索 -->
		    <view class="search" @tap="search">
		      <image src="../../../static/images/searchIcon_03.png" class="searchIcon"></image>
		      <input type="text" placeholder="搜索商品" class="searchText"></input>
		    </view>
		    <!-- 导航栏 -->
		    <view class="nav">
		      <block v-for="(item, index) in nav" :key="index">
		        <view @tap="navFun" :data-lj="item.url" class="navblock">
		          <image :src="item.img" class="navblock_img"></image>
		          <text class="navblock_text">{{item.text}}</text>
		        </view>
		      </block>
		    </view>
		  </view>
		  <!-- 夏日冰鲜广告 -->
		  <view class="adv">
			  <swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			  	<swiper-item v-for="(item,index) in imagesList" :key="index">
					<image :src="item.img" mode="aspectFill" class="advImg"></image>
			  	</swiper-item>
			  </swiper>
		    <view class="adv_service">
		      <block v-for="(item, index) in service" :key="index">
		        <navigator :url="item.url" class="serviceblock">
		          <image :src="item.img" class="serviceblock_img"></image>
		          <text class="serviceblock_text">{{item.text}}</text>
		        </navigator>
		      </block>
		    </view>
		  </view>
		  <!-- 产品分类 -->
		  	<view class="product_type">
		  		<block v-for="(item, index) in product" :key="index">
		  		    <view class="productblock" @tap="product_type(index)">
		  		        <image :src="item.pcatClassImg" class="productblock_img"></image>
		  		        <text class="productblock_text">{{item.pcatClassClassname}}</text>
		  		    </view>
		  		</block>
		  	</view>
		  <!-- 活动 -->
		  <view class="hd">
		    <image src="../../../static/images/horn_03.png" class="horn"></image>
		    <text>活动</text>
		    <text>坂田公明店超市全新盛大开业，全场满99元减10元</text>
		  </view>
		  <!-- 波士顿龙虾 -->
		  <view @tap="bsdlx">
		    <image src="../../../static/images/bsdlx_03.png" class="bsdlx"></image>
		  </view>
		  <!-- 限时抢购 -->
		  <view class='ys'>
		    <view class='xsqg red'>
		      <image src='../../../static/images/xsqg_03.png' class='title'></image>
		      <view class='countdown'>
				<van-row>
					<van-col span="7"><text class='time'>距结束</text></van-col>
		            <van-col span="17">
						<uni-countdown class="hour" :show-day="false" :hour="12" :minute="12" :second="12"></uni-countdown>
					</van-col>
				</van-row>
		      </view>
		      <navigator class='content1' url="../../spellgroup/flash_sale/flash_sale">
		      		<text>更多优惠</text>
		      		<image src='../../../static/images/djt.png' class='jt'></image>
		      </navigator>
		    </view>
		  <!-- 限时抢购商品 -->
		  <view class='xsqgsp'>
		      <scroll-view :scroll-x="true" style=" white-space: nowrap;  width:100%;">
		        <block v-for="(item,index) in xsqgsp" :key="index">
		          <view class='xsqgsp_block' :data-id="item.cid" @tap='cpxq'>
		            <image :src='item.ctradeimg' class='xsqgsp_img'></image>
		            <text>{{item.cSelPointTitle}}</text>
		            <view class='newPrice'>
		              <text>¥</text>{{item.aHdPrice}}</view>
		            <view class='oldPrice'>
		              <text>¥</text>{{item.cprice}}</view>
		            <image src='../../../static/images/tj_03.png' class='icon'></image>
		          </view>
				  </block>
		      </scroll-view>
		    </view>
		  </view>
		  <!-- 超值拼团 -->
		  <view class='xsqg green'>
		    <image src='../../../static/images/czpt_07.png' class='title'></image>
		    <navigator class='content1' url="../../spellgroup/group_buying/group_buying">
		    	<text>更多拼团</text>
		    	<image src='../../../static/images/djt.png' class='jt'></image>
		    </navigator>
		  </view>
		  <!-- 超值拼团商品 -->
		  <view class='czptsp'>
		    <scroll-view :scroll-x="true" style=" white-space: nowrap;  width:100%;">
		      <block v-for="(item,index) in czptsp" :key="index">
		        <view class='czptsp_block' @tap='czpt'  :data-id="item.cid">
		          <image :src='item.img' class='czptsp_img'></image>
		          <text>{{item.title}}</text>
		          <view class='people'>
		            {{item.people}}人团</view>
		          <view class='price'>
		            <text>¥</text>{{item.price}}
		          </view>
		        </view>
		      </block>
		    </scroll-view>
		  </view>
		  <!-- 天天优惠 -->
		  <view class="xsqg blue" v-if="yhj[0].cId!=null">
		    <image src="../../../static/images/ttth_03.png" class="title"></image>
		    <view class="content1" @tap="myyhj">
		      <text>天天优惠领不停</text>
		      <image src='../../../static/images/djt.png' class='jt'></image>
		    </view>
		  </view>
		  <!-- 天天优惠券及商品 -->
		  <view class="yhj" v-if="yhj[0].cId!=null">
		    <scroll-view :scroll-x="true" style=" white-space: nowrap;  width:100%;" @tap="myyhj">
		      <block v-for="(item, index) in yhj" :key="index">
		        <view class="yhj_block">
		          <image src="../../../static/images/yhj_03.png" class="yhj_img"></image>
		          <view class="yhj1">
		            <view class="price">
		              <text>¥</text>
		              <text>{{item.cCouponAmount}}</text>
		              <view>{{item.cCouponName}}</view>
		            </view>
		            <view class="yhjcontent">{{item.cActual}}</view>
		          </view>
		          <view class="ljlq" @tap="ljlq" :data-yhjid="item.cId">
		            <text>立</text><text>即</text><text>领</text><text>取</text>
		          </view>
		        </view>
		      </block>
		    </scroll-view>
		    <view class='ttyhsp'>
		      <block v-for="(item,index) in ttyhsp" :key="index">
		        <view class='ttyhsp_block' @tap='zhg' :data-spxqxx="item.url">
		          <view class='ttyhsp_left'>
		            <text class='ttyhsp_title'>{{item.title}}</text>
		            <text class='ttyhsp_content'>{{item.content}}</text>
		            <text class='ttyhsp_icon'>GO></text>
		          </view>
		          <image :src='item.img' class='ttyhsp_img'></image>
		        </view>
		      </block>
		    </view>
		  </view>
		  <!-- 猜你喜欢 -->
		 <!-- <view class='cnxh' v-if="cnxhsp[0].cid!=null"> -->
		  <view class="cnxh">
		    <view class="cnxh_title">
		      <image src="../../../static/images/zhg_06.png" class="zhg"></image>
		      <image src="../../../static/images/cnxh_03.png" class="cnxh_icon"></image>
		      <text>猜你喜欢</text>
		      <image src="../../../static/images/yhg_09.png" class="yhg"></image>
		    </view>
		    <view class="hyp" @tap="hyp" v-if="hyh">
		      <image src="../../../static/images/hyp_03.png" class="hyp_img"></image>
		      <text class="hyp_text">换一批</text>
		    </view>
		  </view>
		  <!-- 猜你喜欢商品 -->
		 <!-- <view class="cnxhsp" v-if="cnxhsp[0].cid!=null"> -->
		  <view class='cnxhsp'>
		    <block v-for="(item, index) in cnxhsp" :key="index">
		      <view class="cnxhsp_block" :data-id="item.cid" @tap="cpxq">
		        <image :src="item.ctradeimg" class="cnxhsp_img"></image>
		        <view class="cnxhsp_title">{{item.ctradeName}}</view>
		        <view class="cnxhsp_price">
		          <text>¥</text>{{item.cprice}}
		        </view>
		        <image src="../../../static/images/tj_03.png" class="cnxhsp_icon" @tap="gouwu"></image>
		      </view>
		    </block>
		  </view>
		  <!-- 好物推荐 -->
		  <view class="cnxh">
		    <navigator class="cnxh_title" url="../../goodrecommend/haowu/haowu">
		      <image src="../../../static/images/zhg_06.png" class="zhg"></image>
		      <image src="../../../static/images/hwtj_15.png" class="cnxh_icon"></image>
		      <text>好物推荐</text>
		      <image src="../../../static/images/yhg_09.png" class="yhg"></image>
		    </navigator>
		  </view>
		  <view class="hwtjsp">
		    <swiper autoplay="true" interval="3000" circular="true" class="swiper-block" :change="swiperChange" previous-margin="164rpx" next-margin="164rpx" current="0" style="height:580rpx">
		      <block v-for="(item, index) in hwtjsp" :key="index" :index="index" class="hwtjsp_block">
		        <swiper-item class="swiper-item">
		          <view :class="'hwtjsp_item ' + (swiperIndex==index?'active':'')">
		            <image src="../../../static/images/hwtjbj_03.png" class="hwtjspbj"></image>
		            <view class="hwtjsp_block">
		            <view class="hwtjsp_title">{{item.title}}</view>
		              <image :src="item.img" class="hwtjsp_img"></image>
		              <view class="hwtjsp_look" @tap="hwtj">
		                <text>去看看</text>
		                <text>></text>
		              </view>
		            </view>
		          </view>
		        </swiper-item>
		      </block>
		    </swiper>
		  </view>
		  <!-- 热卖推荐 -->
		  <scroll-view scroll-x class="product">
		    <block v-for="(item, index) in productNav" :key="index">
		      <view @tap="change" :data-navchangeindex="item.pcatClassId" :class="'productNav ' + (item.pcatClassId==navchoice?'productNav_active':'')">
		        <view class="product_block">{{item.pcatClassClassname}}</view>
		        <view :class="(item.pcatClassId==navchoice?'product_hg':'')"></view>
		      </view>
		    </block>
		  </scroll-view>
		  <!-- 商品信息 -->
		  <view class="shopping">
		    <block v-for="(item, index) in productList" :key="index">
		      <view class="shopp_block" :data-id="item.cid" @tap="cpxq">
		        <image :src="item.ctradeimg" class="shopp_img"></image>
		        <!-- <text class='shopp_activity' wx:if="{{item.activity}}">{{item.activity}}</text> -->
		        <view class="shopp_title">{{item.ctradeName}}</view>
		        <view class="shopp_price">
		          <text>￥</text>
		          <text>{{item.cprice}}</text>
		          <text>/个</text>
		          <image src="../../../static/images/tj_03.png" class="shopp_icon"></image>
		        </view>
		      </view>
		    </block>
		    <view class="zwsj" v-if="productList.length==0">
		      暂无数据
		    </view>
		  </view>
		  <!-- 门店选择 -->
		  <view class="mengdianxze" v-if="showModal">
		    <view class="md">
		      <view class="md1">
		        <view class="md_title">门店选择</view>
		        <image @tap="close" class="close" src="../../../static/images/chacha_03.png"></image>
		      </view>
		      <scroll-view scroll-y style="height:450px">
		        <block class="san" v-for="(item, index) in mdName" :key="index">
		          <view class="ere" @tap="mddz" :data-id="index">
		            <text>百佳华-{{item.name}}</text>
		            <view class="ersan">
		              <image src="../../../static/images/01_16.png"></image>
		              <text>1km</text>
		              <text>{{item.address}}</text>
		            </view>
		          </view>
		        </block>
		      </scroll-view>
		    </view>
		  </view>
		</view>
		<!-- 底部 -->
		<!-- <include src="/pages/case/dibu.wxml"/> -->
	</view>
</template>

<script>
import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
	export default {
		components: {uniCountdown},
		data() {
			return {
				mdName: [{name:'西乡分店',address:'深圳市宝安区西乡街道办富成路91号'},
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
				{name:'领汇广场',address:'深圳市龙岗区坂田街道吉华路635号佳华领汇广场'}],
				      //门店名称
				      properties: {
				        // 这里定义了innerText属性，属性值可以在组件使用时指定 
				        innerTitle: {
				          type: String,
				          value: '百佳华到家'
				        },
				        // 是否显示返回图标
				        isShowBack: {
				          type: String,
				          value: 'false'
				        },
				        // 这里是渐变的颜色
				        h_back_color: {
				          col: "ffa04b",
				          col2: "fe5d69"
				        }
				      },
				      // 导航栏
				      nav: [{
				        img: "../../../static/images/navIcon_05.png",
				        text: "E卡付",
				        url: "../chat/chat"
				      }, {
				        img: "../../../static/images/优惠券2.png",
				        text: "领券中心",
				        url: "../coupons/coupons"
				      }, {
				        img: "../../../static/images/navIcon_07.png",
				        text: "佳会员",
				        url: "../../my/myVipCard/myVipCard"
				      }],
				      // 服务
				      service: [{
				        img: "../../../static/images/icon_03.png",
				        text: "满49元包邮"
				      }, {
				        img: "../../../static/images/icon_05.png",
				        text: "1小时快达"
				      }, {
				        img: "../../../static/images/icon_07.png",
				        text: "门店直送"
				      }, {
				        img: "../../../static/images/icon_09.png",
				        text: "14天售后无忧"
				      }],
				      // 商品分类
				      product: [{ 
						pcatClassImg: "../../../static/images/product_03.png",
				        pcatClassClassname: "新鲜蔬菜",
						},{ 
						pcatClassImg: "../../../static/images/product_05.png",
				        pcatClassClassname: "粮油调味",
						},{ 
						pcatClassImg: "../../../static/images/product_07.png",
				        pcatClassClassname: "肉蛋家禽",
						},{ 
						pcatClassImg: "../../../static/images/product_09.png",
				        pcatClassClassname: "平价水果",
						},{ 
						pcatClassImg: "../../../static/images/product_11.png",
				        pcatClassClassname: "牛奶面包",
						},{ 
						pcatClassImg: "../../../static/images/product_18.png",
				        pcatClassClassname: "休闲零食",
						},{ 
						pcatClassImg: "../../../static/images/product_19.png",
				        pcatClassClassname: "酒水饮料",
						},{ 
						pcatClassImg: "../../../static/images/product_20.png",
				        pcatClassClassname: "日用百货",
						},{ 
						pcatClassImg: "../../../static/images/product_21.png",
				        pcatClassClassname: "预售好物",
						},{ 
						pcatClassImg: "../../../static/images/product_22.png",
				        pcatClassClassname: "团购优惠",
						}],
				      // 限时抢购商品
				      xsqgsp: [{ 
						ctradeimg: "../../../static/images/xsqgsp_03.png",
						cSelPointTitle: "澳洲大龙虾",
				        aHdPrice: 280,
						cprice: 350
						},{ 
							ctradeimg: "../../../static/images/xsqgsp_05.png",
						cSelPointTitle: "澳洲大龙虾",
				        aHdPrice: 280,
						cprice: 350
						},{ 
							ctradeimg: "../../../static/images/xsqgsp_07.png",
						cSelPointTitle: "澳洲大龙虾",
				        aHdPrice: 280,
						cprice: 350
						},{ 
							ctradeimg: "../../../static/images/xsqgsp_09.png",
						cSelPointTitle: "澳洲大龙虾",
				        aHdPrice: 280,
						cprice: 350
						}],
				      // 超值拼团商品
				      czptsp: [{ 
							img: "../../../static/images/czptsp_03.png",
						title: "澳洲大龙虾",
				        people: 2,
						price: 280
						},{ 
							img: "../../../static/images/czptsp_05.png",
						title: "澳洲大龙虾",
				        people: 2,
						price: 280
						},{ 
							img: "../../../static/images/czptsp_07.png",
						title: "澳洲大龙虾",
				        people: 2,
						price: 280
						},{ 
							img: "../../../static/images/czptsp_09.png",
						title: "澳洲大龙虾",
				        people: 2,
						price: 280
						}],
				      // 优惠券
				      yhj: [{
						  cId:0,
						  cCouponAmount:50,
						  cCouponName:'清风优惠',
						  cActual:'满100元减50，限定商品'
					  },{
						  cId:1,
						  cCouponAmount:50,
						  cCouponName:'清风优惠',
						  cActual:'满100元减50，限定商品'
					  },{
						  cId:2,
						  cCouponAmount:50,
						  cCouponName:'清风优惠',
						  cActual:'满100元减50，限定商品'
					  }],
				      // 天天优惠商品
				      ttyhsp: [{
				        title: "组合购",
				        content: "搭配购买更优惠",
				        img: "../../../static/images/zhg_03.png",
				        url: "../../groupBuy/GroupBuyList"
				      }, {
				        title: "限量促销",
				        content: "特价专区 卖完即止",
				        img: "../../../static/images/xszx_05.png",
						url: "../../spellgroup/flash_sale/flash_sale"
				      }],
				      // 猜你喜欢商品
				      cnxhsp: [{
				        ctradeimg: "../../../static/images/cnxhsp_03.png",
						ctradeName: '澳洲大龙虾澳洲大龙虾',
						cprice: 280
				      },{
				        ctradeimg: "../../../static/images/cnxhsp_05.png",
						ctradeName: '澳洲大龙虾澳洲大龙虾',
						cprice: 280
				      },{
				        ctradeimg: "../../../static/images/cnxhsp_07.png",
						ctradeName: '澳洲大龙虾澳洲大龙虾',
						cprice: 280
				      },{
				        ctradeimg: "../../../static/images/cnxhsp_12.png",
						ctradeName: '澳洲大龙虾澳洲大龙虾',
						cprice: 280
				      },{
				        ctradeimg: "../../../static/images/cnxhsp_13.png",
						ctradeName: '澳洲大龙虾澳洲大龙虾',
						cprice: 280
				      },{
				        ctradeimg: "../../../static/images/cnxhsp_14.png",
						ctradeName: '澳洲大龙虾澳洲大龙虾',
						cprice: 280
				      }],
				      // 当前页
				      pageNo: 1,
				      // 页大小
				      pageSize: 6,
				      //分页提示显示
				      duan: false,
				      //分页加载提示
				      title: "加载中...",
				      // 中间大两边小的轮播图效果
				      hwtjsp: [{
				        img: "../../../static/images/hwtjsp_03.png",
				        title: "简约的设计风格搭配黑 色调，使其看上去神秘 而又不乏个性...",
				        url: "../hwtj/hwtj"
				      }, {
				        img: "../../../static/images/hwtjsp_06.png",
				        title: "简约的设计风格搭配黑 色调，使其看上去神秘 而又不乏个性...",
				        url: "../hwtj/hwtj"
				      }, {
				        img: "../../../static/images/hwtjsp_09.png",
				        title: "简约的设计风格搭配黑 色调，使其看上去神秘 而又不乏个性...",
				        url: "../hwtj/hwtj"
				      }],
				      swiperIndex: 0,
				      // 商品分类标题
				      productNav: [{
						  pcatClassId:0,
						  pcatClassClassname:'热卖推荐'
					  },{
						  pcatClassId:1,
						  pcatClassClassname:'休闲零食'
					  },{
						  pcatClassId:2,
						  pcatClassClassname:'乳品饮料'
					  },{
						  pcatClassId:3,
						  pcatClassClassname:'酒水饮料'
					  },{
						  pcatClassId:4,
						  pcatClassClassname:'母婴用品'
					  },{
						  pcatClassId:5,
						  pcatClassClassname:'日用百货'
					  }],
				      // 商品分类id
				      navchoice: 0,
				      productList: [{ 
							ctradeimg: "../../../static/images/productList_03.png",
							ctradeName: "澳洲大龙虾澳洲大龙虾澳洲大龙虾澳洲大龙虾",
							cprice: 280
						},{ 
							ctradeimg: "../../../static/images/productList_05.png",
							ctradeName: "澳洲大龙虾澳洲大龙虾澳洲大龙虾澳洲大龙虾",
							cprice: 280
						},{ 
							ctradeimg: "../../../static/images/productList_09.png",
							ctradeName: "澳洲大龙虾澳洲大龙虾澳洲大龙虾澳洲大龙虾",
							cprice: 280
						},{ 
							ctradeimg: "../../../static/images/productList_10.png",
							ctradeName: "澳洲大龙虾澳洲大龙虾澳洲大龙虾澳洲大龙虾",
							cprice: 280
						},{ 
							ctradeimg: "../../../static/images/productList_13.png",
							ctradeName: "澳洲大龙虾澳洲大龙虾澳洲大龙虾澳洲大龙虾",
							cprice: 280
						},{ 
							ctradeimg: "../../../static/images/productList_14.png",
							ctradeName: "澳洲大龙虾澳洲大龙虾澳洲大龙虾澳洲大龙虾",
							cprice: 280
						}],
				      spxq: "",
				      cpnblj: "",
				      // 门店选择
				      imgs: [],
				      showModal: false,
				      //判断门店选择显示或者隐藏
				      hyh: true,
				      //判断换一批按钮是否可以使用
				      stock: '',
					  name:'',
					  imagesList:[{ 
							img: "../../../static/images/adv_03.jpg"
						},{ 
							img: "../../../static/images/ban001_03.png"
						},{ 
							img: "../../../static/images/ban002_03.png"
						},{ 
							img: "../../../static/images/banana_03.png"
						}]
			}
		},
		onLoad(e) {
			if(e.name==''||e.name==null){
				this.name=this.mdName[0].name;
			}else{
				this.name=e.name;
			}
		},
		methods: {
			 // 点击显示门店选择
			    mdxz () {
			        this.showModal = true;
			    },
			    // 点击隐藏门店选择
			    close () {
			     this.showModal = false;
			    },
				 //门店选择
				mddz(e) {
				    var i = e.currentTarget.dataset.id;
					this.name=this.mdName[i].name;
					this.close();
				},
				search(){
					uni.navigateTo({
						url: '/pages/home/search_Page/search_Page'
					});
				},
				// 导航栏
				navFun (e) {
				    var tzlj2 = e.currentTarget.dataset.lj;
<<<<<<< HEAD
				    uni.navigateTo({
				        url: tzlj2
				    });
=======
				    uni.navigateTo({
				        url: tzlj2
				    });
				},
				myyhj() {
					uni.navigateTo({
						url: '../coupons/coupons',
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
>>>>>>> da6863f534960aecaf345a08e9281800dae9e8ca
				},
				// 预售好物
				product_type(e){
					console.log(e)
					if(e==8){
						uni.navigateTo({
							url: '../../spellgroup/presale/presale',
							success: res => {},
							fail: () => {},
							complete: () => {}
						});
					}
				},
				zhg(e) {
					console.log(e.currentTarget.dataset.spxqxx)
					uni.navigateTo({
						url: e.currentTarget.dataset.spxqxx,
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}
		}
	}
</script>

<style>
.qb {
  background-color: #f5f5f5;
}

/* 头部开始 */

.ico-back {
  width: 36rpx;
  height: 36rpx;
  background-size: contain;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABACAMAAABr/gR0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjg5MWY5Ny03MDRjLTUxNDYtYjcyOC1mMTc0NDdkMzg5YTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzYwMEI2RkZERDFBMTFFOUJGQ0ZBMjRGQThBNThBMkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzYwMEI2RkVERDFBMTFFOUJGQ0ZBMjRGQThBNThBMkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MWY4OTFmOTctNzA0Yy01MTQ2LWI3MjgtZjE3NDQ3ZDM4OWE1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFmODkxZjk3LTcwNGMtNTE0Ni1iNzI4LWYxNzQ0N2QzODlhNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhqHxUsAAAAGUExURf///////1V89WwAAAACdFJOU/8A5bcwSgAAAIBJREFUeNrs1TkOxEAIBdH697/0BE68YLpLGmcQ15OIgMhhwIDvAaAAlIK2FwAJkOC9r0HTl6DrK9D2Bej7J1j0D7Dq72DZ38C6v4KN/gJ2+jPY6guQ70DsSnuCSEGkIFIQKYgURAoiBZGCSIG8lH+7rf56+/9wiPnTAwZ08xNgAFwNCwyfJvcmAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-position-x: 20rpx;
}

.hh-header {
  position: fixed;
  top: 0rpx;
  width: 100%;
  z-index: 99;
  height: 126rpx;
  line-height: 56rpx;
}

.hh-title {
  margin-top: 49rpx;
  font-size: 38rpx;
  text-align: center;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hh-nav-right {
  width: 116px;
}

.hh-nav-back {
  width: 116px;
}

.tb {
  position: relative;
}

.tb>.tbbj {
  width: 750rpx;
  height: 362rpx;
}

/* 地址 */

.tb .address {
  position: absolute;
  top: 146rpx;
  left: 30rpx;
  color: #fff;
  width: 330rpx;
  height: 29rpx;
}

.address .addressIcon {
  width: 24rpx;
  height: 29rpx;
}

.address .addressText {
  width: 274rpx;
  height: 27rpx;
  font-size: 28rpx;
  margin-left: 18rpx;
  margin-top: -5rpx;
}

.address .dropDown {
  position: absolute;
  right: 10rpx;
  width: 26rpx;
  height: 15rpx;
  padding-bottom: 5rpx;
  margin-top: 15rpx;
  line-height: 29rpx;
}

/* 搜索 */

.qb .search {
  width: 310rpx;
  height: 62rpx;
  background-color: #fff;
  border-radius: 31rpx;
  position: absolute;
  top: 140rpx;
  left: 400rpx;
}

.search .searchIcon {
  width: 28rpx;
  height: 28rpx;
  margin-top: 17rpx;
  margin-left: 22rpx;
}

.search .searchText {
  margin-left: 66rpx;
  margin-top: -45rpx;
  font-size: 26rpx;
}

/* 导航栏 */

.tb .nav {
  width: 690rpx;
  height: 150rpx;
  position: absolute;
  top: 229rpx;
  left: 30rpx;
  border-radius: 20rpx;
  background-color: #fff;
  text-align: center;
}

.nav .navblock {
  width: 230rpx;
  height: 85rpx;
  display: inline-block;
  padding-top: 39rpx;
  padding-bottom: 29rpx;
}

.nav .navblock:nth-child(1) {
  border-radius: 20rpx 0rpx 0rpx 20rpx;
}

.nav .navblock:nth-child(3) {
  border-radius: 0rpx 20rpx 20rpx 0rpx;
}

.nav .navblock_img {
  width: 60rpx;
  height: 50rpx;
}

.nav .navblock_text {
	display: block;
    font-size: 26rpx;
}

/* 夏日冰鲜 */

.swiper{
	height: 340rpx;
}

.adv .advImg {
  width: 690rpx;
  height: 300rpx;
  margin-left: 30rpx;
  margin-top: 38rpx;
  box-shadow: 0rpx 5rpx 15rpx 0rpx rgba(153, 153, 153, 0.44);
  border-radius: 20rpx;
}

.adv .serviceblock {
  display: inline-block;
  margin-left: 30rpx;
  width: 150rpx;
}

.adv .serviceblock_img {
  width: 21rpx;
  height: 19rpx;
}

.adv .serviceblock_text {
  font-size: 20rpx;
  color: #fe5c6a;
  margin-left: 7rpx;
}

/* 产品分类 */

.product_type .productblock {
  margin-left: 40rpx;
  display: inline-block;
  width: 104rpx;
  margin-top: 30rpx;
}

.productblock .productblock_img {
  width: 105rpx;
  height: 105rpx;
}

.productblock .productblock_text {
  display: block;
  font-size: 24rpx;
  text-align: center;
}

/* 活动 */

.hd {
  width: 690rpx;
  height: 62rpx;
  background-color: #fff;
  border-radius: 10rpx;
  margin-left: 30rpx;
  margin-top: 49rpx;
  padding-top: 14rpx;
  font-weight: bold;
}

.hd .horn {
  width: 29rpx;
  height: 26rpx;
  float: left;
  margin-top: 12rpx;
  margin-left: 18rpx;
}

.hd text:nth-of-type(1) {
  border-radius: 5rpx;
  font-size: 22rpx;
  color: #fc5d56;
  border: solid 1rpx #fe5c6a;
  padding: 5rpx 9rpx 6rpx 9rpx;
  margin-top: 14rpx;
  margin-left: 15rpx;
}

.hd text:nth-of-type(2) {
  font-size: 24rpx;
  color: #666;
  margin-left: 12rpx;
}

/* 波士顿龙虾 */

.bsdlx {
  width: 698rpx;
  height: 208rpx;
  margin-top: 35rpx;
  margin-left: 30rpx;
}

/* 限时抢购、超值拼团、天天优惠通用样式 */

.ys {
  height: 436rpx;
}

.xsqg {
  width: 690rpx;
  height: 88rpx;
  border-radius: 20rpx 20rpx 0rpx 0rpx;
  margin-top: 17rpx;
  margin-left: 30rpx;
}

.title {
  width: 139rpx;
  height: 34rpx;
  margin-top: 26rpx;
  margin-left: 23rpx;
  float: left;
}

.content1 {
  float: right;
  display: inline-block;
  font-size: 24rpx;
  color: #fff;
  margin-top: 32rpx;
  margin-right: 26rpx;
}

.jt {
  width: 11rpx;
  height: 20rpx;
  margin-left: 13rpx;
}

/* 限时抢购 */

.red {
  background-image: linear-gradient(90deg, #ffa549 0%, #fe5c6a 100%),
                      linear-gradient(#ffa549, #ffa549);
}

/* 倒计时 */

.xsqg .countdown {
  width: 260rpx;
  height: 38rpx;
  display: inline-block;
  color: #fff;
  font-size: 22rpx;
  margin-left: 30rpx;
  margin-top: 30rpx;
  font-weight: bold;
}

.countdown .time {
  font-size: 24rpx;
}

.hour{
	position: relative;
	bottom: 10rpx;
}

/* 限时抢购商品 */

.xsqgsp {
  width: 690rpx;
  margin-left: 30rpx;
  background-color: #fff;
  padding-top: 29rpx;
}

.xsqgsp .xsqgsp_block {
  width: 170rpx;
  height: 314rpx;
  position: relative;
  display: inline-block;
  margin-left: 28rpx;
}

.xsqgsp_block .xsqgsp_img {
  width: 159rpx;
  height: 162rpx;
}

.xsqgsp_block>text {
  /* margin-top: 13rpx; */
  display: block;
  font-size: 24rpx;
  color: #222;
}

.xsqgsp_block .newPrice {
  /* margin-top: 17rpx; */
  color: #fe4531;
  font-size: 32rpx;
  font-weight: bolder;
}

.newPrice text {
  font-size: 20rpx;
}

.xsqgsp_block .oldPrice {
  /* margin-top: 15rpx; */
  font-size: 20rpx;
  color: #8f8f8f;
  text-decoration: line-through;
}

.xsqgsp .icon {
  width: 55rpx;
  height: 55rpx;
  position: absolute;
  top: 222rpx;
  left: 135rpx;
}

/* 超值拼团 */

.green {
  margin-top: 20rpx;
  background-image: linear-gradient(90deg, #abd638 0%, #61ba1b 100%),
                      linear-gradient(#ffa549, #ffa549);
}

.green .content1 text {
  margin-top: 32rpx;
}

/* 超值拼团商品 */

.czptsp {
  width: 690rpx;
  margin-left: 30rpx;
  background-color: #fff;
  padding-top: 29rpx;
}

.czptsp .czptsp_block {
  width: 170rpx;
  height: 336rpx;
  position: relative;
  display: inline-block;
  margin-left: 28rpx;
}

.czptsp .czptsp_img {
  height: 179rpx;
  width: 180rpx;
}

.czptsp_block>text {
  display: block;
  font-size: 24rpx;
  color: #222;
}

.czptsp .people {
  margin-top: 7rpx;
  text-align: center;
  width: 78rpx;
  height: 32rpx;
  font-size: 20rpx;
  color: #fff;
  padding-top: 6rpx;
  background-image: linear-gradient(90deg, #ffa549 0%, #fe5c6a 100%),
                      linear-gradient(#fe4531, #fe4531);
  border-radius: 20rpx;
}

.czptsp .price {
  color: #fe4531;
  font-size: 32rpx;
  font-weight: bolder;
}

/* 天天优惠 */

.blue {
  background-image: linear-gradient(90deg, #8fdbf9 0%, #4fa1d5 100%),
                      linear-gradient(#ffa549, #ffa549);
  margin-top: 20rpx;
}

.yhj {
  width: 690rpx;
  /* height: 317rpx; */
  margin-left: 30rpx;
  background-color: #fff;
  padding-top: 29rpx;
}

.yhj .yhj_block:nth-child(1) {
  margin-left: 19rpx;
}

.yhj .yhj_block {
  position: relative;
  display: inline-block;
  margin-left: 10rpx;
}

.yhj_img {
  width: 252rpx;
  height: 109rpx;
}

.yhj1 {
  position: absolute;
  top: 15rpx;
  left: 13rpx;
}

.yhj1 .price {
  font-size: 23rpx;
  color: #fe4531;
}

.yhj1 .price>text:nth-child(2) {
  font-size: 46rpx;
  font-weight: bold;
}

.yhj1 .price>view:nth-child(3) {
  display: inline-block;
  margin-left: 7rpx;
  font-size: 24rpx;
  width: 100rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.yhjcontent {
  font-size: 18rpx;
  color: #b99048;
}

.yhj .ljlq {
  position: absolute;
  right: 0rpx;
  color: red;
  font-size: 18rpx;
  top: 0rpx;
  padding-top: 12rpx;
  width: 36rpx;
  height: 94rpx;
  text-align: center;
}

.ljlq text {
  display: block;
  line-height: 23rpx;
}

/* 天天优惠商品 */

.ttyhsp {
  height: 200rpx;
}

.ttyhsp .ttyhsp_block {
  display: inline-block;
  height: 138rpx;
}

.ttyhsp .ttyhsp_block:nth-child(2) {
  margin-left: 15rpx;
}

.ttyhsp_block .ttyhsp_left {
  margin-top: 40rpx;
  float: left;
  height: 138rpx;
}

.ttyhsp_left text {
  display: block;
  margin-left: 20rpx;
  color: #222;
}

.ttyhsp_left .ttyhsp_title {
  font-size: 32rpx;
  font-weight: bold;
}

.ttyhsp_left .ttyhsp_content {
  margin-top: 8rpx;
  height: 21rpx;
  font-size: 22rpx;
}

.ttyhsp_left .ttyhsp_icon {
  width: 66rpx;
  height: 36rpx;
  background-color: #fe4531;
  border-radius: 18rpx;
  color: #fff;
  font-size: 26rpx;
  padding-left: 9rpx;
  margin-top: 18rpx;
}

.ttyhsp_block .ttyhsp_img {
  width: 139rpx;
  height: 138rpx;
  float: right;
  margin-top: 30rpx;
  margin-left: 5rpx;
}

/* 猜你喜欢 */

.cnxh {
  margin-top: 71rpx;
  position: relative;
  width: 750rpx;
  height: 33rpx;
}

.cnxh view {
  display: inline-block;
}

.zhg {
  margin-left: 188rpx;
}

.zhg, .yhg {
  line-height: 33rpx;
  width: 71rpx;
  height: 3rpx;
  margin-bottom: 12rpx;
}

.cnxh_icon {
  width: 35rpx;
  height: 30rpx;
  margin-left: 17rpx;
}

.cnxh_title text {
  width: 144rpx;
  height: 33rpx;
  font-size: 36rpx;
  color: #fe4531;
  margin-left: 15rpx;
}

.yhg {
  margin-left: 18rpx;
}

.hyp_img {
  width: 18rpx;
  height: 18rpx;
}

/* 换一批 */

.hyp {
  width: 122rpx;
  height: 36rpx;
  border-radius: 100rpx;
  border: solid 1rpx #999;
  color: #666;
  float: right;
  margin-right: 30rpx;
  font-size: 24rpx;
}

.hyp_img {
  margin-top: 10rpx;
  margin-left: 17rpx;
}

.hyp_text {
  margin-left: 3rpx;
  margin-right: 15rpx;
}

/* 猜你喜欢商品列表 */

.cnxhsp {
  margin-top: 36rpx;
  width: 750rpx;
  text-align: center;
}

.cnxhsp_block {
  width: 223rpx;
  height: 360rpx;
  border-radius: 10rpx;
  box-shadow: 0rpx 3rpx 15rpx 0rpx rgba(153, 153, 153, 0.2);
  background-color: #fff;
  display: inline-block;
  margin-left: 10rpx;
  text-align: left;
  position: relative;
  margin-top: 10rpx;
}

.cnxhsp_title {
  font-size: 24rpx;
  color: #222;
  font-weight: bold;
  width: 192rpx;
  height: 53rpx;
  line-height: 30rpx;
  margin-left: 15rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.cnxhsp_img {
  width: 223rpx;
  height: 223rpx;
  background-color: #fff;
  border-radius: 10rpx 10rpx 0rpx 0rpx;
}

.cnxhsp_price {
  width: 63rpx;
  height: 23rpx;
  font-size: 32rpx;
  font-weight: bold;
  color: #fe4531;
  margin-top: 22rpx;
  margin-left: 15rpx;
}

.cnxhsp_price text {
  font-size: 24rpx;
}

.cnxhsp_icon {
  width: 55rpx;
  height: 55rpx;
  position: absolute;
  left: 164rpx;
  top: 301rpx;
}

/* 好物推荐商品 */

.hwtjsp {
  margin-top: 49rpx;
}

.hwtjsp_item {
  margin-top: 29rpx;
  width: 402rpx;
  height: 522rpx;
  border-radius: 10rpx;
  position: relative;
  box-shadow: 0rpx 3rpx 15rpx 0rpx rgba(153, 153, 153, 0.2);
}

.hwtjspbj {
  width: 402rpx;
  height: 522rpx;
}

.hwtjsp_block {
  margin-top: 42rpx;
  position: absolute;
  top: 40rpx;
  left: 51rpx;
  text-align: center;
}

.hwtjsp_title {
  width: 283rpx;
  height: 86rpx;
  font-weight: bold;
  font-size: 28rpx;
  color: #222;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.hwtjsp_img {
  width: 208rpx;
  height: 242rpx;
}

.hwtjsp_look {
  font-size: 28rpx;
  color: #222;
  margin-top: 32rpx;
  font-weight: bold;
}

.hwtjsp_look text:nth-child(2) {
  margin-left: 5rpx;
}

.active {
  width: 380rpx;
  height: 580rpx;
  transform: scaleY(1.1);
  text-align: center;
  /* transform: translateX(110%) translateY(110%); */
  transition: all 0.2s ease-in 0s;
  /* opacity: 1;
  z-index: 10;
  height: 580rpx;
  width: 380rpx;
  top: 7%;
  transition: all 0.2s ease-in 0s;
  background: #fff; */
}

/* 商品标题显示 */

.product {
  margin-top: 96rpx;
  white-space: nowrap;
  position: relative;
  height: 58rpx;
  /* margin-bottom: 100rpx; */
}

.productNav {
  height: 30rpx;
  font-size: 32rpx;
  color: #222;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 140rpx;
}

.product_block {
  width: 140rpx;
  margin-left: 39rpx;
}

.product_block:nth-child(1) {
  margin-left: 30rpx;
}

.productNav_active {
  height: 30rpx;
  font-weight: bold;
  color: #fe4531;
  display: inline-block;
  text-align: center;
}

.product_hg {
  width: 60rpx;
  height: 4rpx;
  background: #fe4531;
  border-radius: 2px;
  margin-top: 10rpx;
  margin-left: 63rpx;
}

/* 商品显示 */

.shopping {
  margin-top: 33rpx;
}

.shopp_block {
  border-radius: 20rpx;
  display: inline-block;
  background-color: #fff;
  width: 335rpx;
  position: relative;
  margin-left: 20rpx;
  margin-top: 20rpx;
}

.shopp_block:nth-last-child(1) {
  margin-bottom: 20rpx;
}

.shopp_block:nth-child(odd) {
  margin-left: 30rpx;
}

.shopp_activity {
  font-size: 24rpx;
  height: 38rpx;
  background-image: linear-gradient(90deg, #ffa549 0%, #fe5c6a 100%),
                      linear-gradient(#fe4531, #fe4531);
  border-radius: 0rpx 0rpx 0rpx 16rpx;
  position: absolute;
  left: 251rpx;
  top: 0rpx;
  color: #fff;
  padding-left: 19rpx;
  padding-top: 7rpx;
  padding-right: 19rpx;
}

.shopp_img {
  width: 335rpx;
  height: 335rpx;
}

.shopp_title {
  margin-top: 18rpx;
  margin-left: 20rpx;
  font-size: 26rpx;
  width: 250rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.shopp_price {
  margin-left: 20rpx;
  margin-bottom: 29rpx;
}

.shopp_price text:nth-child(1) {
  color: #fe4531;
  font-size: 24rpx;
}

.shopp_price text:nth-child(2) {
  color: #fe4531;
  font-size: 36rpx;
  font-weight: bold;
}

.shopp_price text:nth-child(3) {
  font-size: 24rpx;
  line-height: 24rpx;
  color: #999;
  opacity: 0.5;
  margin-left: 6rpx;
}

.shopp_icon {
  width: 55rpx;
  height: 55rpx;
  float: right;
  margin-right: 20rpx;
}

.zwsj {
  height: 510rpx;
  width: 750rpx;
  text-align: center;
  color: #8f8f8f;
}

/* 门店选择 */

.mengdianxze {
  width: 750rpx;
  height: 1334rpx;
  background-color: #000;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0rpx;
  left: 0rpx;
  z-index: 9;
}

.md {
  margin-top: 244rpx;
  width: 750rpx;
  height: 1088rpx;
  background-color: #fff;
  border-radius: 20rpx 20rpx 0rpx 0rpx;
}

.md_title {
  width: 150rpx;
  height: 30rpx;
  font-size: 32rpx;
  color: black;
  font-weight: bold;
  padding-top: 36rpx;
  margin-left: 34rpx;
}

.close {
  width: 26rpx;
  height: 26rpx;
  float: right;
  margin-right: 29rpx;
  margin-top: -25rpx;
}

.md1 {
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 37rpx;
}

.san {
  border-bottom: 1px solid #e9e9e9;
}

.ersan {
  margin-top: 14rpx;
  font-size: 26rpx;
  color: #999;
}

.ere {
  border-bottom: 1rpx solid #e9e9e9;
  margin-top: 41rpx;
  margin-left: 31rpx;
  padding-bottom: 41rpx;
}

.ere image {
  margin-top: 24rpx;
  width: 14rpx;
  height: 26rpx;
  float: right;
}

.ersan image {
  float: left;
  margin-top: 5rpx;
  width: 21rpx;
  height: 27rpx;
}

.ersan text {
  margin-left: 15rpx;
}

.chacah {
  width: 24rpx;
  height: 24rpx;
  margin-left: 523rpx;
}

</style>
