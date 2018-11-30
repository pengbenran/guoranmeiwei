<template>
  <div class="self">
     <div class="tab"><Tabs @listenToChild='onselect' :find_item='find_item' :wid='width'></Tabs></div>
      <!--tab end-->
      <div class="shopList">
        <!-- <div class="Item" v-for="(orderItem,index) in orderList" :index='index' :key='orderItem'>
          <div class="ItemHeader">
            <div class="orderBh">订单编号：5456456</div>
             <div class="addInfo">
               <text class="status_Box">待付款</text>
             </div>
          </div>
           <div class="shopWarp" v-for="(shopItme,ind) in orderItem.item" :index='ind' :key="shopItme">
            <div class="addr"><div class="topImg"><img :src="topImg"/></div><text>{{shopItme.shopName}}</text> </div>
            <div class="List">
              <div class="left"><img :src="shopItme.image"/></div>
              <div class="right">
                  <div class="Itemtitle fontHidden">{{shopItme.name}}</div>
                  <div class="NumInfo">
                     <text class="tag">桃子水密桃</text>
                     <span><text class="Num">x {{shopItme.num}}</text><text class="price">￥{{shopItme.price}}</text></span> 
                  </div>
              </div>
            </div>
          </div>
          <div class="shopWarpInfo"><text>共11件商品</text><text class="zongji">合计：￥123</text></div>
          <div class="warpBtn" >
            <div class="Btn">
              <text class="btn1" >取消订单</text>
              <text class="btn2">确认付款</text>
            </div>

          </div>
        </div> -->
      </div>
      <!--shopList end-->
      

  </div>
</template>

<script>
import Api from "@/utils/Api"
import Lib from "@/utils/lib"
import config from "@/config"

let api=new Api
export default {
  components: {
  },

  data () {
    return {
      ListImg:{ headerImg:config.imgUrl+'/index/riliBrand.jpg', headerTitle:config.imgUrl+'/index/riliheader.png',
                cartImg:config.imgUrl+'/ranking/cart.png',shopImg:config.imgUrl+'/ranking/shopImg.png',
                hopImg:config.imgUrl+'/ranking/shopImg.png',ico1:config.imgUrl+'/index/ico1.png',
                ico2:config.imgUrl+'/index/ico2.png',ico3:config.imgUrl+'/index/ico3.png'
      },
      GoodList:[],
      limit:4,
      index:0,
      catId:0
    }
  },
  methods:{

    
    
  },
  onLoad(option){
    let that = this;
    let parms = {}
    let order = {}

  },
}
</script>
<style scoped lang='scss'>
@mixin flexc{
  display: flex;align-items: center;
}
img{
  width: 100%;
  height: 100%;
  overflow:hidden;
}

.tab{border-bottom: 2px solid rgb(244,244,244);}
.ItemHeader{@include flexc;justify-content: space-between;padding:8rpx 20rpx;font-size: 32rpx;font-weight: 100;
   .addInfo{color: rgb(252,156,56);}
}

.shopList{
  .Item{padding: 15rpx 20rpx;box-shadow: 0px 5px 30rpx rgba(0, 0, 0, 0.116);margin: 20rpx;border-radius: 30rpx;}
}

.shopWarp{border-bottom:1px solid #f5f5f5;
   .left{width: 30%}
   .left img{width: 150rpx;height: 150rpx;margin: auto;}
   .right{font-size:100%;width: 70%;}
   .right .Itemtitle{font-size: 28rpx;color: #666;height: 95rpx;}
   .List{@include flexc;}
   .right .NumInfo{@include flexc;justify-content: space-between;font-size: 26rpx;margin-top: 5rpx;}
   .NumInfo .tag{color: #8e8e8e;font-size: 26rpx;}
   .NumInfo .Num{color: #8e8e8e;margin-right: 15rpx;font-size: 26rpx;}
   .NumInfo .price{font-size: 32rpx;color: rgb(251,147,37);}
}

.warpBtn{@include flexc;justify-content:flex-end;
  text{display: inline-block;border:1px solid #8e8e8e;padding: 5rpx 20rpx;margin: 6rpx 15rpx;font-weight: 100;font-size: 28rpx;border-radius: 30rpx;}
  .btn2{color:#fc9c38;border:1px solid #fc9c38; }
}

.shopWarpInfo{@include flexc;justify-content: flex-end;font-weight: 100;font-size: 32rpx;color: #666;}

.addr{font-size: 100;font-size: 25rpx;display: flex;align-items: center;color: rgb(170, 170, 170);height: 62rpx;padding: 0 10rpx;
   .topImg{height: 35rpx;width: 35rpx;margin-left: 10rpx;margin-right: 10rpx;}
   small{display: inline-block;margin-left: 6rpx;color: rgb(236,189,87);}
}

</style>