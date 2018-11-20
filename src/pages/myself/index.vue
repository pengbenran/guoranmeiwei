<template>
  <div class="myself">
    <Userpanel :userInfo="userInfo"></Userpanel>
    <!-- 积分余额优惠劵面板 -->
    <div class="panel">
      <div class="bcgimg">
        <img :src="panel">
      </div>
      <div class="paneldetail">
        <div class="panelleft">
          <div class="panelcount">{{userInfo.point}}</div>
          <div class="panelname">积分</div>
        </div>
        <div class="panelcenter">
          <div class="panelcount">34343</div>
          <div class="panelname">余额/充值</div>
        </div>
        <div class="panelright">
          <div class="panelcount">{{vouchercount}}张</div>
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
        <div class="orderlist" v-for="(item,index) in orderitem" :key="item" :index="index" @click="jumpOrder(index)">
          <div class="ordericon">
            <img :src="item.icon">
          </div>
          <view class='yuan' v-if="item.statuscount!=0">{{item.statuscount}}</view>
          <div class="title">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="feature">
      <div class="featurelist" v-for="(item,index) in featureitem" :key="item" :index="index" @click='topage(item.PageUrl)'>
        <div class="icon">
          <img :src="item.icon">
        </div>
        <div class="name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config"
 import Api from "@/utils/Api"
import Userpanel from '@/components/userpanel'
let api= new Api 
export default {
  components: {
  Userpanel
  },

  data () {
    return {
     userInfo:{},
     panel:config.imgUrl+"/myself/panel.jpg",
     orderitem:[
     {name:'待付款',icon:config.imgUrl+"/myself/daifukuan.png",statuscount:0},
     {name:'待发货',icon:config.imgUrl+"/myself/daifahuo.png",statuscount:0},
     {name:'待收货',icon:config.imgUrl+"/myself/daishouhuo.png",statuscount:0},
     {name:'售后',icon:config.imgUrl+"/myself/shouhou.png",statuscount:0},
     ],
     featureitem:[
     {name:'积分',icon:config.imgUrl+"/myself/point.png",PageUrl:'../sign/main'},
     {name:'微分销',icon:config.imgUrl+"/myself/fenxiao.png",PageUrl:'../sign/main'},
     {name:'地址管理',icon:config.imgUrl+"/myself/address.png",PageUrl:'../addressList/main'},
     {name:'优惠券',icon:config.imgUrl+"/myself/address.png",PageUrl:'../counter/main'},
     {name:'拼团',icon:config.imgUrl+"/myself/group.png",PageUrl:'../sign/main'},
     {name:'砍价',icon:config.imgUrl+"/myself/cut.png",PageUrl:'../sign/main'},
     {name:'联系客服',icon:config.imgUrl+"/myself/connect.png",PageUrl:'../sign/main'},
     {name:'门店',icon:config.imgUrl+"/myself/connect.png",PageUrl:'../storePay/main'}
     ],
     vouchercount:0
    }
  },

  async onShow(){
     let that=this;
     let memberId= wx.getStorageSync('memberId');
     that.memberId=memberId;  //设置memberId
     let userInfoRes= await api.getMemberInfo(memberId)
     that.userInfo=userInfoRes.data.memberDO
     that.orderitem[0].statuscount=userInfoRes.data.statuscount
     that.orderitem[1].statuscount=userInfoRes.data.freightstatuscount
     that.orderitem[2].statuscount=userInfoRes.data.shippedstatuscount
     that.orderitem[3].statuscount=userInfoRes.data.finishstatuscount
     that.vouchercount=userInfoRes.data.vouchercount
  },
  methods: {
   //
   topage(url){
    wx.navigateTo({ url: url });
   },
   jumpOrder(index){
    let id=index+1
    wx.navigateTo({
      url:'../orderList/main?currentTarget='+id
    })
   }
  }
}
</script>

<style scoped lang='scss'>
  img{
    width: 100%;
    height: 100%;
    display: block;
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
    position: relative;
    .ordericon{
      width: 78rpx;
      height: 48rpx;
      overflow: hidden;
      margin: 20rpx auto;
    }
    .yuan{
     width: 40rpx;
     height: 40rpx;
     background: #fc9632;
     font-size: 12px;
     color: #fff;
     position: absolute;
     border-radius: 50%;
     line-height: 40rpx;
     top: -5px;
     right: 14px;
     text-align: center;
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
