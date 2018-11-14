<template>
  <div class="Order">
    <div class="TopTab">
      <div class="Item">预约自提</div>
      <div class="Item">骑手派送</div>
    </div>
    <!--TopTab end-->
    <!-- <div class=""></div> -->

    <div class="AddressWarp">
     <div class="Address">
         <div class="Address-item">
             <div class="itemLeft">收货人</div>
             <div class="itemRight"><text>马登</text><text>15083845338</text></div>
         </div>
           <div class="Address-item">
             <div class="itemLeft">收货地址</div>
             <div class="itemRight">江西省南昌市西湖区洪城数码广场1101</div>
         </div>
     </div>
     </div>
   
      <!--Address end-->

    <Shopaddr :shopname="shopname"></Shopaddr>
     
    <OrderList v-for="(item,index) in shopList" :index='index' :key='item' :Shop_List='item'></OrderList>
    <!--OrderList end-->

    <div class="OrderMask">
        <div class="MaskItem"><text>优惠券</text><text class="fensi">粉丝专享 ></text></div>
        <div class="MaskItem"><text>积分</text><text class="jifen">可使用590积分，可抵扣5.90元</text></div>
         <div class="MaskItem"><text>备注:</text><input type="text" placeholder="填写你想和商家想说的" placeholder-style='font-size:26rpx;font-weight: 100;color:#8e8e8e;'></div>
    </div>
    <!--OrderMask end-->

     <div class="footerBnt">
       <div class="selectBtn"></div>
       <div class="cartBtn"><div class="price">合计：9.9元</div><div class="btn">结算</div></div>
     </div>
     <!--footerBnt end-->
  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"
 import Shopaddr from '@/components/shopaddr'
 import OrderList from '@/components/shopList'
export default {
  components: {
     OrderList,
     Shopaddr
  },
   
  data () {
    return {
     ImgList:{topImg:config.imgUrl+'/cart/home.jpg',shopImg:config.imgUrl+'/cart/shopimg01.jpg'},
     shopname:"王小姐水果店(抚生路点)",
     shopList:[{shopImg:config.imgUrl+'/cart/shopimg01.jpg',shopTitle:'福建馆溪平柚子好吃好甜你好世界你好世界你好世界你好世界你好世界你好世界',mask:"你好世界",p1:19,p2:9},
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

.TopTab{@include flexc;padding: 20rpx 10rpx;margin-bottom: 15rpx;justify-content: space-around;border-bottom: 1px solid rgb(244,244,244);
   .Item{border:1rpx solid rgb(253,93,5);font-size:30rpx;color:rgb(253,93,5);padding: 12rpx 45rpx;border-radius: 10rpx;  }
}

.Address{padding: 10rpx 25rpx;border-bottom: 1px solid rgb(244,244,244);
    .Address-item{@include flexc;font-weight: 100;font-size: 32rpx;}
    .itemLeft{width: 30%;}
    .itemRight{width: 70%;@include flexc;justify-content: space-between;color: #8e8e8e;}
}

.OrderMask{font-size: 28rpx;font-weight: 100;color: #666;padding: 10rpx 20rpx;
    .MaskItem{@include flexc;justify-content: space-between;height: 75rpx;line-height: 75rpx;}
    .fensi{color: rgb(250,143,43);}
    .jifen{color: rgb(250,143,43);}
    input{width: 85%;}
}

.footerBnt{@include flexc;justify-content: space-between;position: fixed;bottom: 0;width: 100%;height: 95rpx; 
           box-shadow: 0px -7px 30px rgba(0,0,0,0.1);
    .selectBtn{@include flexc;padding-left: 15rpx;font-size: 36rpx;font-weight: 100;color: #8e8e8e;}
    .selectBtn icon{margin-right: 10rpx;}
    .cartBtn{display: flex;justify-content: center;font-size: 36rpx;font-weight: 100;color: #8e8e8e;}
    .price{height: 95rpx;line-height: 95rpx;margin-right: 15rpx;}
    .btn{background-image: -webkit-linear-gradient(0deg, rgb(255,191,3), rgb(252,148,53));height: 95rpx;line-height: 95rpx; width: 180rpx;text-align: center;color: #fff;}
}


</style>
