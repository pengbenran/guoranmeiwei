<template>
  <div class="myself">
    <div class="header">
        <div class="avator">
          <img :src="avator">
        </div>
        <div class="username">
          <div class="name">刘世轩</div>
          <div class="lvname">普通会员</div>
        </div>
        <div class="qianicon">
          <img :src="wode">
        </div>
    </div>
    <!-- 积分余额优惠劵面板 -->
    <div class="panel">
      <div class="bcgimg">
        <img :src="panel">
      </div>
      <div class="paneldetail">
        <div class="panelleft">
          <div class="panelcount">456</div>
          <div class="panelname">积分</div>
        </div>
        <div class="panelcenter">
          <div class="panelcount">34343</div>
          <div class="panelname">余额/充值</div>
        </div>
        <div class="panelright">
          <div class="panelcount">3张</div>
          <div class="panelname">优惠劵</div>
        </div>
      </div>
    </div>
<!-- 我的订单面板 -->
    <div class="orderpanel">
      <div class="title">
        <span class="left">我的订单</span>
        <span class="all">全部订单</span>
      </div>
      <div class="orderitem">
        <div class="orderlist" v-for="(item,index) in orderitem" :key="item" :index="index">
          <div class="ordericon">
            <img :src="item.icon">
          </div>
          <div class="title">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="feature">
      <div class="featurelist" v-for="(item,index) in featureitem" :key="item" :index="index">
        <div class="icon">
          <img :src="item.icon">
        </div>
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import globalStore from "@/utils/globaledata"; 
export default {
  components: {
  
  },

  data () {
    return {
     avator:globalStore.state.imgapi+"myself/avator.jpg",
     wode:globalStore.state.imgapi+"myself/wode.jpg",
     panel:globalStore.state.imgapi+"myself/panel.jpg",
     orderitem:[
     {name:'待付款',icon:globalStore.state.imgapi+"myself/daifukuan.png"},
     {name:'待发货',icon:globalStore.state.imgapi+"myself/daifahuo.png"},
     {name:'待收货',icon:globalStore.state.imgapi+"myself/daishouhuo.png"},
     {name:'售后',icon:globalStore.state.imgapi+"myself/shouhou.png"},
     ],
     featureitem:[
     {name:'积分',icon:globalStore.state.imgapi+"myself/point.png"},
     {name:'微分销',icon:globalStore.state.imgapi+"myself/fenxiao.png"},
     {name:'地址管理',icon:globalStore.state.imgapi+"myself/address.png"},
     {name:'拼团',icon:globalStore.state.imgapi+"myself/group.png"},
     {name:'砍价',icon:globalStore.state.imgapi+"myself/cut.png"},
     {name:'联系客服',icon:globalStore.state.imgapi+"myself/connect.png"}
     ]
    }
  },

  created () {
  
  }
}
</script>

<style scoped lang='scss'>
  img{
    width: 100%;
    height: 100%;
    display: block;
  }
 .header{
  height: 150rpx;
  display: flex;
  width: 90%;
  margin: 75rpx auto;
  .avator{
    width: 150rpx;
    height: 150rpx;
    overflow: hidden;
  }
  .username{
    flex-grow:1;
    padding-left: 40rpx;
    box-sizing:border-box;
    padding-top: 20rpx;
    .lvname{
      font-size: 0.8em;
      color:#fc9632;
    }
  }
  .qianicon{
    width: 58rpx;
    height: 58rpx;
    overflow: hidden;
    margin-top: 46rpx;

  }
 }
 .panel{
  width: 679rpx;
  height: 200rpx;
  margin: 0 auto;
  position: relative;
  box-shadow: 10rpx 10rpx 10rpx 5rpx #ccc;
  .bcgimg{
    width:100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
  }
  .paneldetail{
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    div{
      width: 33%;
      text-align: center;
      div{
        height: 80rpx;
        width: 100%;
        line-height: 80rpx;
      }
      .panelcount{
        font-size: 0.8em;
        color:#fc9632;

      }
    }
  }
 }

 .title{
  width: 90%;
  margin: 0 auto;
  height: 130rpx;
  line-height: 130rpx;
  font-size: 1.1em;
  .all{
    float: right;
    font-size: 0.9em;
    color: #353535;
  }
 }
 .orderitem{
    width: 100%;
  display: flex;
  .orderlist{
    width: 25%;
    color:#333;
    .ordericon{
      width: 78rpx;
      height: 48rpx;
      overflow: hidden;
      margin: 20rpx auto;
    }
    .title{
      height: 50rpx;
      line-height: 50rpx;
      width: 100%;
      font-size: 0.8em;
      text-align: center;
    }
  }
 }
 .feature{
  .featurelist{
    display: flex;
    height: 100rpx;
    line-height: 100rpx;
    width: 90%;
    margin: 0 auto;
    color:#333;
    .icon{
      width: 50rpx;
      height: 50rpx;
      margin:28rpx 15rpx 25rpx 0;
      overflow: hidden;
    }
  }
 }
 
</style>
