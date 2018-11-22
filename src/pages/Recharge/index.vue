<template>
<div class="recharge">
    <div class="Header">
      <div class="left"><img :src="UserInfo.face"/></div>
      <div class="right">{{UserInfo.uname}}</div>
    </div>
    <!--Header end-->

    <div class="List">
      <div class="Item active">110元</div>
      <div class="Item">110元</div>
      <div class="Item">110元</div>
      <div class="Item">110元</div>
      <div class="Item">110元</div>
      <div class="Item">110元</div>
      <div class="Item">110元</div>
    </div>
    <!--List end-->

    <div class="btn">充值</div>
</div>
</template>

<script>
import Tab from '@/components/tab';
import Api from "@/utils/Api"
import Goodlist from '@/components/goodlist';
import config from "@/config"
let api=new Api
export default {
  components: {
   Goodlist
  },

  data () {
    return {
      UserInfo:{}
    }
  },
  methods:{
   
  },
  onLoad(){
    let that = this;
    that.UserInfo.face = wx.getStorageSync('face');
    that.UserInfo.uname = wx.getStorageSync('uname');
    console.log(that.UserInfo)
  }
}
</script>

<style scoped lang='scss'>
@mixin Flexc{
  display: flex;align-items: center
}
img{
  width: 100%;
  height: 100%;
  display: block;
  overflow:hidden;
}
.Header{@include Flexc;padding: 20rpx 30rpx 10rpx;font-weight: 100;font-size: 34rpx;
   .left img{width: 90rpx;height: 90rpx;border-radius: 50%;margin-right: 15rpx;}
}

.List{padding: 25rpx;margin-bottom: 16rpx;@include Flexc;flex-wrap: wrap;font-weight: 100;font-size: 32rpx;line-height: 90rpx;
  .Item{width: 30%;margin-bottom: 16rpx;margin-right: 1.3%;margin-left: 1.3%;border-radius: 10rpx;
        text-align: center;color: rgb(252,153,47);border:1px solid rgb(252,153,47);}
}

.btn{width: 55%;margin: auto;background: rgb(252,153,47);color: #fff;font-size: 32rpx;line-height: 75rpx;text-align: center;border-radius: 15rpx;}


</style>