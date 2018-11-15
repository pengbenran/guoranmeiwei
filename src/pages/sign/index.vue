<template>
  <div class="sign">
     <div class="header d-flex">
         <div class="headerInfo">
            <div class="Num">30</div>
            <div class="info">我的积分</div>
         </div>
     </div>
     <!--header end-->

     <div class="signBnt">
         <text class="pos">我的签到</text>
     </div>
     <!--signBnt end-->

     <div class="jifenList">
         <div class="title"> <text></text> <span>签到记录</span> <text></text></div>
         <div class="item">
             <div class="itemTile">每日签到</div>
             <div class="itemInfo">
                 <div class="left">2018-11-14  9:20</div>
                 <div class="right">+1积分</div>
             </div>
         </div>
                  <div class="item">
             <div class="itemTile">每日签到</div>
             <div class="itemInfo">
                 <div class="left">2018-11-14  9:20</div>
                 <div class="right">+1积分</div>
             </div>
         </div>
     </div>
     <!--jifenList end-->

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
     Shopaddr,
   
  },
   
  data () {
    return {
 
    }
  },
  methods:{

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

.d-flex{
    @include flexc;justify-content: center;
}
/*文本换行省略*/
@mixin fontM{
white-space:normal;overflow: hidden;display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;
}
img{display: block;height: 100%;width: 100%;}

.header{height: 550rpx;background: linear-gradient(-40deg, rgb(228,96,90), rgb(253,179,80));
   .headerInfo{font-weight: 100;color: #fff;line-height: 75rpx;text-align: center;}
   .Num{font-size: 80rpx;}
   .info{font-size: 34rpx;}
}

.signBnt{position: relative;text-align: center;height: 85rpx;
   text{display: inline-block;width: 50%;line-height: 85rpx;height: 85rpx;color: rgb(251,143,28);text-align: center;background:#fff;
    box-shadow: 0px 10px 30px rgba(0,0,0,0.1);border-radius: 40rpx;}
    .pos{position: absolute;top: -45rpx;left: 25%;}
}

.jifenList{font-weight: 100;
    .title{@include flexc;justify-content: center;margin-bottom: 10rpx;color: #8e8e8e;}
     .title span{font-size: 24rpx; }
    .title text{display: inline-block;margin: 0 40rpx;width: 45rpx;height: 1px;background: #8e8e8e;}
}

.item{padding: 15rpx 25rpx;font-weight: 100;border-bottom: 1px solid rgb(241,241,241);
    .itemTile{font-size: 30rpx;}
    .itemInfo{@include flexc;justify-content: space-between;font-size: 26rpx;}
}


</style>
