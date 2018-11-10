<template>
  <div class="groupDetail">
      <div class="header">
        <swiper class="swiper" indicator-dots='true' autoplay='true'>
          <swiper-item><img :src="imgList.brand"></swiper-item>
        </swiper>
      </div>
      <!--header end-->
      
      <div class="DataTime">
          <div class="left">
            <div class="popleNum">2人团</div>
            <div class="prcie">￥<text class="newPrice">9.90</text><text class="delPrice">￥19.9</text></div>
          </div>
          <div class="right">
              <text>00</text> 天 <text>15</text>：<text>35</text>：<text>20</text>
          </div>
      </div>
      <!--DataTime end-->

      <div class="shopTitle">
          <div class="left">桃子水蜜桃好吃好甜你好世界你好世界你好世界你好世界你好世界你好世界</div>
          <div class="right"><img :src="imgList.fenxiang"/></div>
      </div>
  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"

export default {
  components: {
  
  },

  data () {
    return {
      imgList:{brand:config.imgUrl+'/groupdetail/header01.jpg',fenxiang:config.imgUrl+'/groupdetail/fenxiang.png'}
    }
  },

  created () {
   
  }
}
</script>

<style scoped lang='scss'>
/*局部水平居中*/
@mixin flexc{
display: flex;align-items: center;
}

/*文本换行省略*/
@mixin fontM{
white-space:normal;overflow: hidden;display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;
}
img{display: block;height: 100%;width: 100%;}

.header{
.swiper{height: 380rpx;}
}

.DataTime{@include flexc;justify-content: space-between;padding: 15rpx 20rpx;background-image: -webkit-linear-gradient(0deg, rgb(249,92,15), rgb(249,175,76));
    .left{@include flexc;}
    .left .popleNum{height: 40rpx;line-height: 40rpx;padding: 5rpx 22rpx;color: #fff;font-weight: 100;font-size: 28rpx;border-radius: 20rpx;border:1px solid #fff;}
    .left .prcie{margin-left: 10rpx;font-weight: 100;color: #fff;font-size: 30rpx;}
    .left .newPrice{font-size: 36rpx;}
    .left .delPrice{margin-left: 10rpx;color: #eeeeee;font-size: 26rpx;text-decoration:line-through}
    .right{color: #fff;font-weight: 100;font-size: 32rpx;}
    .right text{background: rgb(253,127,20);display: inline-block;height: 50rpx;line-height: 50rpx;width: 45rpx;border-radius: 8rpx;text-align: center;}
}

</style>