<template>
  <div class="Cart">
    <Shopaddr :shopname="shopname"></Shopaddr>

     <CartList v-for="(item,index) in shopList" :index='index' :key='item' :Shop_List='item'></CartList>

     <!--shopList end-->
     
     <div class="footerBnt">
       <div class="selectBtn"><icon type="circle" class="ico" size="21" /> 全选</div>
       <div class="cartBtn"><div class="price">合计：9.9元</div><div class="btn">结算</div></div>
     </div>
     <!--footerBnt end-->
  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"
 import Shopaddr from '@/components/shopaddr'
 import CartList from '@/components/cartlist'
export default {
  components: {
    CartList
  },

  data () {
    return {
     ImgList:{topImg:config.imgUrl+'/cart/home.jpg',shopImg:config.imgUrl+'/cart/shopimg01.jpg'},
     shopname:"王小姐水果店(抚生路点)",
     shopList:[{shopImg:config.imgUrl+'/cart/shopimg01.jpg',shopTitle:'福建馆溪平柚子好吃好甜你好世界你好世界你好世界你好世界你好世界你好世界',mask:"你好世界",p1:19,p2:9},
          {shopImg:config.imgUrl+'/cart/shopimg01.jpg',shopTitle:'福建馆溪平柚子好吃好甜你好世界你好世界你好世界你好世界你好世界你好世界',mask:"你好世界",p1:19,p2:9},
          {shopImg:config.imgUrl+'/cart/shopimg01.jpg',shopTitle:'福建馆溪平柚子好吃好甜你好世界你好世界你好世界你好世界你好世界你好世界',mask:"你好世界",p1:19,p2:9}
          ]
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
