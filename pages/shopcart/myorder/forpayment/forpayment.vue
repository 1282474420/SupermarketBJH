<template>
	<!-- 我的订单 待付款 -->
	<view class="container">
	  <view class="ding2">
	    <view class="ding">
	      <image class="ding1" src="../../../../static/images/img/tu1_03.png" @tap="back"></image>
	      <view class="text1 text4">
	        <text>我的订单</text>
	      </view>
	    </view>
	  </view>
	  <view class="dingdan">
	    <view class="dingdan1"></view>
	  </view>
	
	  <view class="details">
	    <view class="details2">
	      <view class="weui-cell-third">
	        <block v-for="(item, index) in axis" :key="index">
	          <view @tap="tagChoose" :id="item.id" :data-id="item.id" :class="'cell-name ' + (item.id==currentTpye ?'cell':'')">
	            <view class="cell-name2">
	              <text class="weui-cell-name">{{item.name}}</text>
	            </view>
	          </view>
	        </block>
	        <view class="cell-name3">
	          <block v-for="(item, index) in sum" :key="index">
	            <view class="cell-name4">
	              <text class="weui-cell-name">{{item}}</text>
	            </view>
	          </block>
	        </view>
	      </view>
	    </view>
	  </view>
	
	  <!-- 待付款 -->
	  <block v-if="currentTpye==0">
	    <block v-if="ordersFor.length>0">
	      <view class="information">
	        <view class="information2">
	          <block v-for="(item, index) in ordersFor" :key="index">
	            <block v-if="item.status==0">
	              <view class="information3">
	                <view class="information4">
	                  <view class="information5">
	                    <block v-if="item.status==0">
	                      <text class="time">{{item.time}}</text>
	                      <text class="time2">待付款</text>
	                    </block>
	                  </view>
	                </view>
	                <view class="information6">
	                  <view class="goods2">
	                    <view class="goods3">
	                      <image :src="item.goodsImgUrl"></image>
	                    </view>
	                    <view class="goods4">
	                      <view class="goods5">
	                        <text class="gg1">{{item.name}}</text>
	                      </view>
	                      <view class="goods6">
	                        <text class="te">¥{{item.amount}}</text>
	                        <text class="te2">X{{item.count}}</text>
	                      </view>
	                    </view>
	                  </view>
	                </view>
	                <view class="information7">
	                    <button @tap="bb" data-id class="information9">去支付</button>
	                  <button @tap="tuiku" :id="item.id" :data-oidd="item.id" class="information8">取消订单</button>
	                </view>
	              </view>
	           </block>
	          </block>
	        </view>
	      </view>
	    </block>
	    <block v-else>
	      <view class="meiy">
	        <text>暂时没有数据</text>
	      </view>
	    </block>
	  </block>
	
	  <!-- 待配送 -->
	  <block v-if="currentTpye==1">
	    <block v-if="ordersForGoods.length>0">
	      <view class="information">
	        <view class="information2">
	          <block v-for="(item, index) in ordersForGoods" :key="index">
	            <block v-if="item.status==1">
	              <view class="information3">
	                <view class="information4">
	                  <view class="information5">
	                    <block v-if="item.status==1">
	                      <text class="time">{{item.time}}</text>
	                      <text class="time2">待配送</text>
	                    </block>
	                  </view>
	                </view>
	                <view class="information6">
	                  <view class="goods2">
	                    <view class="goods3">
	                      <image :src="item.goodsImgUrl"></image>
	                    </view>
	                    <view class="goods4">
	                      <view class="goods5">
	                        <text class="gg">{{item.name}}</text>
	                      </view>
	                      <view class="goods9">
	                        <text class="te3">¥{{item.amount}}</text>
	                        <view></view>
	                        <text class="te4">X{{item.count}}</text>
	                        <view></view>
	                        <text class="sdf">共1件商品,总金额￥{{item.count*item.amount}}</text>
	                      </view>
	                    </view>
	                  </view>
	                </view>
	                <view class="information7">
	                  <view @tap="getId" :data-oid="item.id" :data-cid="item.id">
	                    <button class="information9">查看订单</button>
	                  </view>
	                </view>
	              </view>
	            </block>
	          </block>
	        </view>
	      </view>
	    </block>
	    <block v-else>
	      <view class="meiy">
	        <text>暂时没有数据</text>
	      </view>
	    </block>
	  </block>
	
	  <!-- 配送中 -->
	  <block v-if="currentTpye==2">
	    <block v-if="ordersForGoods.length>0">
	      <view class="information">
	        <view class="information2">
	          <block v-for="(item, index) in ordersForGoods" :key="index">
	            <block v-if="item.status==2">
	              <view class="information3">
	                <view class="information4">
	                  <view class="information5">
	                    <block v-if="item.status==2">
	                      <text class="time">{{item.time}}</text>
	                      <text class="time2">配送中</text>
	                    </block>
	                  </view>
	                </view>
	                <view class="information6">
	                  <view class="goods2">
	                    <view class="goods3">
	                      <image :src="item.goodsImgUrl"></image>
	                    </view>
	                    <view class="goods4">
	                      <view class="goods5">
	                        <text class="gg">{{item.name}}</text>
	                      </view>
	                      <view class="goods9">
	                        <text class="te3">¥{{item.amount}}</text>
	                        <view></view>
	                        <text class="te4">X{{item.count}}</text>
	                        <view></view>
	                        <text class="sdf">共1件商品,总金额￥{{item.count*item.amount}}</text>
	                      </view>
	                    </view>
	                  </view>
	                </view>
	                <view class="information7">
	                  <view @tap="getId" :data-oid="item.orderId">
	                    <button class="information9">查看订单</button>
	                  </view>
	                </view>
	                <view class="information7">
	                  <view @tap="getId2" :data-oid="item.orderId">
	                    <button class="information10">确认收货</button>
	                  </view>
	                </view>
	              </view>
	            </block>
	          </block>
	        </view>
	      </view>
	    </block>
	    <block v-else>
	      <view class="meiy">
	        <text>暂时没有数据</text>
	      </view>
	    </block>
	  </block>
	
	
	  <!-- 待评价 -->
	  <block v-if="currentTpye==3">
	    <block v-if="ordersForGoods.length>0">
	      <view class="information">
	        <view class="information2">
	          <block v-for="(item, index) in ordersForGoods" :key="index">
	            <block v-if="item.status==3">
	              <view class="information3">
	                <view class="information4">
	                  <view class="information5">
	                    <block v-if="item.status==3">
	                      <text class="time">{{item.time}}</text>
	                      <text class="time2">待评价</text>
	                    </block>
	                  </view>
	                </view>
	                <view class="information6">
	                  <view class="goods2">
	                    <view class="goods3">
	                      <image :src="item.goodsImgUrl"></image>
	                    </view>
	                    <view class="goods4">
	                      <view class="goods5">
	                        <text class="gg">{{item.name}}</text>
	                      </view>
	                      <view class="goods9">
	                        <text class="te3">¥{{item.amount}}</text>
	                        <view></view>
	                        <text class="te4">X{{item.count}}</text>
	                        <view></view>
	                        <text class="sdf">共1件商品,总金额￥{{item.count*item.amount}}</text>
	                      </view>
	                    </view>
	                  </view>
	                </view>
	                <view class="information7">
	                  <view @tap="getId4" :data-oid="item.orderId">
	                    <button class="information9">去评价</button>
	                  </view>
	                </view>
	              </view>
	            </block>
	          </block>
	        </view>
	      </view>
	    </block>
	    <block v-else>
	      <view class="meiy">
	        <text>暂时没有数据</text>
	      </view>
	    </block>
	  </block>
	
	  <!-- 已完成 -->
	  <block v-if="currentTpye==4">
	    <block v-if="ordersForGoods.length>0">
	      <view class="information">
	        <view class="information2">
	          <block v-for="(item, index) in ordersForGoods" :key="index">
	            <block v-if="item.status==4">
	              <view class="information3">
	                <view class="information4">
	                  <view class="information5">
	                    <block v-if="item.status==4">
	                      <text class="time">{{item.time}}</text>
	                      <text class="time2">已完成</text>
	                    </block>
	                  </view>
	                </view>
	                <view class="information6">
	                  <view class="goods2">
	                    <view class="goods3">
	                      <image :src="item.goodsImgUrl"></image>
	                    </view>
	                    <view class="goods4">
	                      <view class="goods5">
	                        <text class="gg">{{item.name}}</text>
	                      </view>
	                      <view class="goods9">
	                        <text class="te3">¥{{item.amount}}</text>
	                        <view></view>
	                        <text class="tex">X{{item.count}}</text>
	                        <view></view>
	                        <text class="sdf">共{{item.count}}商品,总金额￥{{item.count*item.amount}}</text>
	                      </view>
	                    </view>
	                  </view>
	                </view>
	                <view class="information7">
	                  <navigator url="../addRefund/addRefund">
	                    <button class="information9">再次购买</button>
	                  </navigator>
	                </view>
	              </view>
	            </block>
	          </block>
	        </view>
	      </view>
	    </block>
	    <block v-else>
	      <view class="meiy">
	        <text>暂时没有数据</text>
	      </view>
	    </block>
	  </block>
	
	</view>
</template>

<script>
	var util = require("../../../../utils/util.js");
	var currentTpye = 0;
	var curren = 0;
	
	export default {
	  data() {
	    return {
	      num: 0,
	      sum: [],
	      axis: [{
	        id: '0',
	        name: '待付款'
	      }, {
	        id: '1',
	        name: '待配送'
	      }, {
	        id: '2',
	        name: '配送中'
	      }, {
	        id: '3',
	        name: '待评价'
	      }, {
	        id: '4',
	        name: '已完成'
	      }],
	      order: [{
	        oid: '0',
	        oname: '待付款'
	      }, {
	        oid: '1',
	        oname: '待配送'
	      }, {
	        oid: '2',
	        oname: '配送中'
	      }, {
	        oid: '3',
	        oname: '待评价'
	      }, {
	        oid: '4',
	        oname: '已完成'
	      }],
	      ordersFor: [],
	      ordersForGoods: [],
	      currentTpye: "",
	      curren: "",
	      time: ""
	    };
	  },
	
	  components: {},
	  props: {},
	
	  /**
	   * 生命周期函数--监听页面加载
	   */
	  onLoad: function (options) {
		  
	    var that = this;
	    // getApp().globalData.initPage(that);
	    // var id = getApp().globalData.userInfo.userId; //根据订单类型查询记录数
	
	//     uni.request({
	//       url: getApp().globalData.url + '/order/getCountByOrderState?oCustomerInfo=' + id,
	//       data: {},
	//       header: {
	//         'content-type': 'application/json'
	//       },
	//       method: 'POST',
	//       dataType: 'json',
	//       success: function (res) {
	//         var num2 = 0;
	
	//         for (var index in res.data) {
	//           num2 = res.data[index];
	//           that.setData({
	//             num: num2[4]
	//           });
	//         }
	
	//         that.setData({
	//           sum: res.data.data
	//         });
	//         console.log(res.data);
	//       }
	//     });
	
	    uni.request({
	      url: "http://localhost:8080/OrderFormApi/summary?userId="+"1"+"&stat="+"0"+"&shopId="+"1",
	      data: {},
	      header: {
	        'content-type': 'application/json'
	      },
	      method: 'GET',
	      dataType: 'json',
	      success: function (res) {
	        that.setData({
	          ordersFor: res.data.data,
	          num: res.data.data.length
	        });
	        console.log(res.data.data);
	      }
	    }); // 调用函数时，传入new Date()参数，返回值是日期和时间
	
	
	    var time = util.formatTime(new Date()); // 再通过setData更改Page()里面的data，动态更新页面的数据
	
	    this.setData({
	      time: time
	    });
	    this.setData({
	      currentTpye: currentTpye
	    });
	  },
	
	  methods: {
	    back: function () {
	      uni.navigateBack({
	        delta: 1
	      });
	    },
	    tagChoose: function (e) {
	      var that = this;
	      var curType = e.currentTarget.id;
	      console.log("状态"+curType);
	
	      uni.request({
	        // url: getApp().globalData.url + '/order/orderSelectById?o_customerInfo=' + id + '&' + 'o_orderStatus=' + curType,
			url: "http://localhost:8080/OrderFormApi/summary?userId="+"1"+"&stat="+curType+"&shopId="+"1",
	        data: {},
	        header: {
	          'content-type': 'application/json'
	        },
	        method: 'GET',
	        dataType: 'json',
	        success: function (res) {
	          that.setData({
	            ordersForGoods: res.data.data,
				num: res.data.data.length
	          });
			console.log(res.data.data);
	        }
	      });
	
	      var cur = e.currentTarget.id;
	      this.setData({
	        currentTpye: curType,
	        curren: cur
	      });
	      
	    },
	    load() {
			let that = this;
			uni.request({
			  url: "http://localhost:8080/OrderFormApi/summary?userId="+"1"+"&stat="+"0"+"&shopId="+"1",
			  data: {},
			  header: {
			    'content-type': 'application/json'
			  },
			  method: 'GET',
			  dataType: 'json',
			  success: function (res) {
			    that.setData({
			      ordersFor: res.data.data,
			      num: res.data.data.length
			    });
			    console.log(res.data.data);
			  }
			});
		},
	    getId: function (e) {
	      console.log(e.currentTarget.dataset.oid);
	      // console.log('sdfgsdthtsrh-------' + e.currentTarget.dataset.cid);
	      let oids = e.currentTarget.dataset.oid;
	      // let cids = e.currentTarget.dataset.cid;
	      let oid = JSON.stringify(oids);
		  console.log(oid);
	      // let cido = JSON.stringify(cids);
	      uni.navigateTo({
	        url: '/pages/shopcart/myorder/forpaymentdetails/forpaymentdetails?oid=' + oid
	      });
	    },
	    getId4: function (e) {
	      console.log(e.currentTarget.dataset.oid);
	      console.log('sdfgsdthtsrh-------' + e.currentTarget.dataset.cid);
	      let oids = e.currentTarget.dataset.oid;
	      let cids = e.currentTarget.dataset.cid;
	      let oid = JSON.stringify(oids);
	      let cido = JSON.stringify(cids);
	      uni.navigateTo({
	        url: '/pages/wddd/index?oid=' + oid + '&cid=' + cido
	      });
	    },
	    getId2: function (e) {
	      console.log(e.currentTarget.dataset.oid);
	      console.log('sdfgsdthtsrh-------' + e.currentTarget.dataset.cid);
	
	      uni.request({
	        url: getApp().globalData.url + '/order/updateOrderByOid?oId=' + e.currentTarget.dataset.oid,
	        data: {},
	        header: {
	          'content-type': 'application/json'
	        },
	        method: 'POST',
	        dataType: 'json',
	        success: function (res) {
	          console.log('返回:' + res.data);
	
	          if (res.data > 0) {
	            uni.showToast({
	              title: '成功',
	              icon: 'succes',
	              duration: 100,
	              mask: true
	            });
	            uni.navigateTo({
	              url: '/pages/payment/payment'
	            });
	          }
	        }
	      });
	    },
	    
		tuiku: function (e) {
	      var that = this;
	      var soid = e.currentTarget.id;
	      console.log('取消 ' + soid);
	      uni.showModal({
	        title: '确定要取消支付吗',
	        success: function (res) {
	          if (res.confirm) {
	            //这里是点击了确定以后
	            uni.request({
	              url: "http://localhost:8080/OrderFormApi/cancel?id="+soid,
	              data: {},
	              header: {
	                'content-type': 'application/json'
	              },
	              method: 'GET',
	              dataType: 'json',
	              success: function (res) {
					  console.log(res);
					  console.log(res.data);
					  console.log(res.data.data);
					if(res.data.data>0){
						uni.showToast({
						  title: '取消订单成功',
						  icon: 'success',
						  duration: 500
						});
					}else{
						uni.showToast({
						  title: '操作太快',
						  icon: 'warning',
						  duration: 500
						});
					}
					// this.$set(this.ordersFor,res.data.data)
					that.load();
	              }
	            });
	          } else {
	            //这里是点击了取消以后
	            console.log('用户点击取消');
	          }
	        }
	      }); 
	    },
	    bb: function (e) {},
	    setData: function (obj, callback) {
	      let that = this;
	      let keys = [];
	      let val, data;
	      Object.keys(obj).forEach(function (key) {
	        keys = key.split('.');
	        val = obj[key];
	        data = that.$data;
	        keys.forEach(function (key2, index) {
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
	@import "./forpayment.css";
</style>
