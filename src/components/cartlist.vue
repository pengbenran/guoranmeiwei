<template>
     <div class="shopList">
       <div class="selectico"> <icon type="circle" class="ico" size="21" /></div>
       <div class="itemLeft"><img :src="Shop_List.shopImg"/></div>
       <div class="itemRight">
          <div class="title">{{Shop_List.shopTitle}}</div>
          <small>{{Shop_List.mask}}</small>
          <div class="price">
             <div class="priceleft"><text>￥{{Shop_List.p1}}元</text><span>￥{{Shop_List.p2}}</span></div>
             <div class="priceright">
                <i class="fa fa-plus" aria-hidden="true"></i>
                  <span>1</span>
                <i class="fa fa-minus" aria-hidden="true"></i>
             </div>
          </div>
       </div>
     </div>
</template>
<script>
export default {
  props: ['Shop_List']
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
</style>
