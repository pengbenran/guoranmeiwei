<template>
  <div class="Cart">
     <div class="top">
       <div class="topImg"><img :src="ImgList.topImg"/></div><text>王小贱鲜果零食优选(南昌店))</text><small>[切换]</small>
     </div>

     <div class="shopList">
       <div class="selectico"> <icon type="circle" class="ico" size="21" /></div>
       <div class="itemLeft"><img :src="ImgList.shopImg"/></div>
       <div class="itemRight">
          <div class="title">福建馆溪平柚子好吃好甜你好世界你好世界你好世界你好世界你好世界你好世界</div>
          <small>拍下29.8元，精选大果</small>
          <div class="price">
             <div class="priceleft"><text>￥29.8元</text><span>￥38.8</span></div>
             <div class="priceright"><i class="fa fa-plus" aria-hidden="true"></i>
                                     <span>1</span>
                                     <i class="fa fa-minus" aria-hidden="true"></i></div>
          </div>
       </div>
     </div>
     <div class="shopList">
       <div class="selectico"> <icon type="circle" class="ico" size="21" /></div>
       <div class="itemLeft"><img :src="ImgList.shopImg"/></div>
       <div class="itemRight">
          <div class="title">福建馆溪平柚子好吃好甜你好世界你好世界你好世界你好世界你好世界你好世界</div>
          <small>拍下29.8元，精选大果</small>
          <div class="price">
             <div class="priceleft"><text>￥29.8元</text><span>￥38.8</span></div>
             <div class="priceright"><i class="fa fa-plus" aria-hidden="true"></i>
                                     <span>1</span>
                                     <i class="fa fa-minus" aria-hidden="true"></i></div>
          </div>
       </div>
     </div>
     <div class="shopList">
       <div class="selectico"> <icon type="circle" class="ico" size="21" /></div>
       <div class="itemLeft"><img :src="ImgList.shopImg"/></div>
       <div class="itemRight">
          <div class="title">福建馆溪平柚子好吃好甜你好世界你好世界你好世界你好世界你好世界你好世界</div>
          <small>拍下29.8元，精选大果</small>
          <div class="price">
             <div class="priceleft"><text>￥29.8元</text><span>￥38.8</span></div>
             <div class="priceright"><i class="fa fa-plus" aria-hidden="true"></i>
                                     <span>1</span>
                                     <i class="fa fa-minus" aria-hidden="true"></i></div>
          </div>
       </div>
     </div>
     <!--shopList end-->
     
     <div class="footerBnt">
       <div class="selectBtn"><icon type="circle" class="ico" size="21" /> 全选</div>
       <div class="cartBtn"><div class="price">合计：9.9元</div><div class="btn">结算</div></div>
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
     ImgList:{topImg:config.imgUrl+'/cart/home.jpg',shopImg:config.imgUrl+'/cart/shopimg01.jpg'}
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

.top{@include flexc;font-size: 27rpx;font-weight: 100;color: rgb(170, 170, 170);height: 78rpx;padding: 0 10rpx;border-bottom: 6rpx solid rgb(243,243,243);
   .topImg{height: 45rpx;width: 45rpx;margin-left: 10rpx;margin-right: 10rpx;}
   small{display: inline-block;margin-left: 6rpx;color: rgb(236,189,87);}
}

.shopList{@include flexc;padding: 10rpx;border-bottom: 5px solid rgb(243,243,243);
   .itemLeft{width: 35%}
   .itemLeft img{width: 230rpx;height: 230rpx;margin: auto}
   .itemRight{width: 65%;padding-right: 20rpx;}
   .itemRight .title{@include fontM;height: 102rpx;font-weight: 100;font-size: 30rpx;color: #8e8e8e;}
   .itemRight small{font-size: 26rpx;color: #ccc;font-weight: 100;}
   .price{@include flexc;justify-content: space-between;}
   .priceleft{
     text{font-size: 36rpx;font-weight: 100;color: rgb(252,78,79);}
     span{font-size: 26rpx;font-weight: 100;color: #8e8e8e;text-decoration:line-through}
   }
   .priceright{background:#e7e7e7;@include flexc;height: 48rpx;
     i{color: #fff;display: inline-block;width: 48rpx;height: 30rpx;line-height: 30rpx;text-align: center;font-weight: 100;font-size: 28rpx;}
     span{background: #fff;height: 40rpx;line-height: 40rpx;color: rgb(248,193,92);display: inline-block;padding:0 15rpx;font-size: 28rpx;}
   }
}

.footerBnt{@include flexc;justify-content: space-between;position: fixed;bottom: 0;width: 100%;height: 95rpx;
    .selectBtn{@include flexc;padding-left: 15rpx;font-size: 36rpx;font-weight: 100;color: #8e8e8e;}
    .selectBtn icon{margin-right: 10rpx;}
    .cartBtn{display: flex;justify-content: center;font-size: 36rpx;font-weight: 100;color: #8e8e8e;}
    .price{height: 95rpx;line-height: 95rpx;margin-right: 15rpx;}
    .btn{background-image: -webkit-linear-gradient(0deg, rgb(255,191,3), rgb(252,148,53));height: 95rpx;line-height: 95rpx; width: 180rpx;text-align: center;color: #fff;}
}


</style>
