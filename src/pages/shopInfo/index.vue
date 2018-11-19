<template>
  <div class="shopList">
    <div class="header">
        <swiper class="swiper" indicator-dots='true' autoplay='true'>
          <swiper-item><img :src="brand"></swiper-item>
        </swiper>
    </div>
    <!--header end-->

     <div class="PriceTitle fontHidden">
         你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界
     </div>
     <div class="Price">
         <text class="new">￥16.60</text><text class="old">￥19.90</text>
     </div>
     <div class="PriceTag">
         <text>快递包邮</text>  <text>销量:1665</text>  <text>江西南昌</text>
     </div>
    <!--Price end-->

    <div class="PriceInfo">
        <div class="Box1"><text>积分</text><text>购买可得11积分</text></div>
        <div class="Box1"><text>优惠券</text><text class="juan">领劵 ></text></div>
    </div>
    <!--PriceInfo end-->

    <div class="Info">
        <div class="InfoTop"><img :src="ShopTopImg" mode='aspectFit'/></div>
        <div class="Infocontent">

        </div>
    </div>
    <!--Info end-->
        <div class="HeightDiv"></div>
     <div class="footerBnt">
       <div class="left">
         <div class="leftItme"><img :src="ImgList.home" /><text>首页</text></div>
         <div class="leftItme"><img :src="ImgList.kefu" /><text>客服</text></div>
         <div class="leftItme"  @click="collection">
          <img :src="ImgList.noshouChang" v-if="posts" />
          <img :src="ImgList.shouChang" v-if="!posts"/>
          <text>收藏</text></div>
       </div>
       <div class="right">
         <div class="btnWarp">
            <text>加入购物车</text><span></span><text @click="showModel">立即购买</text>
         </div>
       </div>
     </div>
     <!--footerBnt end-->
  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import Lib from "@/utils/lib"
 import config from "@/config"
 import Tabs from "@/components/tab.vue"
 import ShopTit from "@/components/shopaddr.vue"

 let api= new Api 
export default {
  components: {
     Tabs,
     ShopTit
  },
   
  data () {
    return {
          brand:config.imgUrl+'/group/header01.jpg',
          topImg:config.imgUrl+'/cart/home.jpg',
          ShopTopImg:config.imgUrl+'/shop/shopImg.jpg',
           ImgList:{home:config.imgUrl+'/group/home.png', kefu:config.imgUrl+'/group/kefu.png',
                   noshouChang:config.imgUrl+'/group/shoucan.png',shouChang:config.imgUrl+'/group/shoucang.png',
                   touxiang:config.imgUrl+'/group/touxiang.jpg', btnInfoImg:config.imgUrl+'/group/TionInfo.jpg', 
                   qiang:config.imgUrl+'/discount/qiang.png',wenhao:config.imgUrl+'/discount/wenhao .png'
          },
    }
  },
  methods:{




  },
  async mounted(){
    console.log("进来")
    let that = this;
    that.OnAllGoodList()
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

.PriceTitle{font-weight: 100;font-size: 34rpx;color: #666;padding: 0 25rpx;}
.Price,.PriceTag{font-weight: 100;color: #8e8e8e;padding: 0rpx 25rpx;}
.Price{
  .new{color: rgb(252,122,67);font-size: 36rpx;}
  .old{color: #8e8e8e;text-decoration:line-through;font-size: 26rpx;}
}

.PriceTag{@include flexc;justify-content: space-between;font-size: 26rpx;border-bottom: 1px solid rgb(248,248,248);padding: 15rpx 25rpx;;}

.PriceInfo{padding: 20rpx;
  .Box1{@include flexc;justify-content: space-between;font-weight: 100;font-size: 24rpx;margin-bottom: 10rpx;}
  .juan{color: rgb(253,130,75);}
}

.InfoTop img{margin: auto;width: 234rpx;height: 141rpx;}
.HeightDiv{height: 110rpx;}
.footerBnt .left,.btnWarp{@include flexc;justify-content: space-around;}
.leftItme{line-height: 28rpx;}
.footerBnt{@include flexc;justify-content: space-between;padding: 10rpx 2%;position: fixed;bottom: 0;width:96%;background: #fff;box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.164) ;
  .left{width: 45%;}
  .left img{width: 58rpx;height: 58rpx;margin: auto;}
  .left text{color: rgb(117,117,117);font-size: 28rpx;font-weight: 100;}
  .right{width: 55%;}
  .btnWarp{background-image: -webkit-linear-gradient(0deg,rgb(252,148,53), rgb(255,191,3));border-radius: 45rpx;height: 75rpx;line-height: 75rpx;}
  .btnWarp text{font-size: 32rpx;color: #fff;font-weight: 100;padding: 0 15rpx;}
  .btnWarp span{width: 2rpx;height: 35rpx;background-color: #fff;}
}


</style>
