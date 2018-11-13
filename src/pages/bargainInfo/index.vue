<template>
  <div class="bargainInfo">
    <div class="header">
      <swiper class="swiper" indicator-dots='true' autoplay='true'>
        <swiper-item><img :src="ImgList.brand"></swiper-item>
      </swiper>
    </div>
    <!--header end-->
    <div class="priceWarp">
      <div class="left">
         <div class="tag">精选水果</div><div class="price">￥<text class="newPrice">9.90</text><text class="oldPrice">￥19.9</text></div>
      </div>
      <div class="right">
        <Timedown :countdown="countdown"></Timedown>
      </div>
    </div>
    <!--price end-->
    
    <div class="peopleInfo">
      <div class="left">
        <img :src="ImgList.touxiang"/>
      </div>
      <div class="right">
        <div class="title">刘世轩</div><div class="info">已有两位好友帮忙砍价，共砍<text>￥8.89</text>元</div>
      </div>
    </div>
    <!--peopleInfo end-->
    
    <div class="shopInfo">
      <span>桃子水蜜桃红色你好世界桃子水蜜桃红色你好世界桃子水蜜桃红色你好世界</span>
      <text>砍后价￥9.90</text>
    </div>
   <!--shopinfo end-->
   <div class="tabWarp">
     <Tabs :find_item='find_item' @select='onselect'></Tabs>
   </div>
    <!--tabWarp-->
    
    <div class="tabInfo">
      <div class="TionInfo" v-if="selectIndex==0"><img :src="ImgList.btnInfoImg"/></div>
      <div class="tabInfoList" v-if="selectIndex==1">
         <div class="item" v-for="(item,index) in kanList" :inedx='index' :key='item'>
           <div class="left"><img :src="item.touxiang" /><text>{{item.Time}}</text></div>
           <div class="right"><text class="selTile">已砍：</text><text class="selPrice">￥{{item.price}}元</text></div>
         </div>
      </div>
    </div>

     <div class="HeightDiv"></div>
     <div class="footerBnt">
       <div class="left">
         <div class="leftItme"><img :src="ImgList.home" /><text>首页</text></div>
         <div class="leftItme"><img :src="ImgList.kefu" /><text>客服</text></div>
         <div class="leftItme"><img :src="ImgList.shouChang" /><text>收藏</text></div>
       </div>
       <div class="right">
         <div class="btnWarp">
            <text>加入购物车</text><span></span><text>立即购买</text>
         </div>
       </div>
     </div>
     <!--footerBnt end-->
      

  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"
 import Timedown from "@/components/countdown"
 import Tabs from "@/components/tab"

export default {
  components: {
   Timedown,
   Tabs
  },

  data () {
    return {
          find_item:[
          {name:"商品详情页",selected:true},
          {name:"砍价排行榜",selected:false}],
          ImgList:{brand:config.imgUrl+'/group/header01.jpg',ShopImg:config.imgUrl+'/cart/shopimg01.jpg',home:config.imgUrl+'/group/home.png',
                   kefu:config.imgUrl+'/group/kefu.png',shouChang:config.imgUrl+'/group/shoucang.png',touxiang:config.imgUrl+'/group/touxiang.jpg',
                   btnInfoImg:config.imgUrl+'/group/TionInfo.jpg',
          },
          ShopImg:[{ShopName:'你好世界桃子好吃好甜美味无限美味你好世界你好世界你好世界你好世界',
                  ShopImg:config.imgUrl+'/cart/shopimg01.jpg',maskInfo:'当季水果',p1:9.9,p2:19.9},
                  {ShopName:'你好世界桃子好吃好甜美味无限美味你好世界你好世界你好世界你好世界',
                  ShopImg:config.imgUrl+'/cart/shopimg01.jpg',maskInfo:'当季水果',p1:9.9,p2:19.9}],
          countdown:{},
          kanList:[{touxiang:config.imgUrl+'/group/touxiang.jpg',Time:'2018-11-10 16:54',price:2.33},
                   {touxiang:config.imgUrl+'/group/touxiang.jpg',Time:'2018-11-10 16:54',price:2.33}
               ],
          selectIndex:0

    }
  },
   methods: {
    cutTime(starttime,endtime){
      var that=this; 
      var leftTime = endtime - starttime;
      if (leftTime >= 0) {
        var interval = setInterval(function () {
        let cutTime={}
        cutTime.days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
        cutTime.hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
        cutTime.minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
        cutTime.seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
        leftTime = leftTime - 1000;
        that.countdown=cutTime      
        }, 1000)
        if (leftTime <= 0) {
          clearinterval(interval)
        }
      }
    },
    onselect(e){
      let that = this;
      that.selectIndex=e
      console.log("查看传过来的值",e)
    }
  },
  mounted(){
     var that=this;
     var endtime=1541995932000
     var starttime = (new Date()).valueOf();
     that.cutTime(starttime,endtime)
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


.priceWarp{@include flexc;justify-content: space-between;;margin: 25rpx 20rpx;padding: 15rpx 20rpx;background-image: -webkit-linear-gradient(0deg,rgb(252,148,53), rgb(255,191,3)); border-radius: 40rpx;
  .left{@include flexc;}
  .left .tag{margin-right: 15rpx;padding: 0 10rpx;font-weight: 100;font-size: 24rpx;background: #fff;color:rgb(255,191,3);border-radius: 20rpx;}
  .price{font-size: 28rpx;font-weight: 100;color: #fff;}
  .newPrice{font-size: 34rpx;}
  .oldPrice{color: #e9e9e9;font-size: 24rpx;text-decoration:line-through;}
}

.bottomright{height: 120rpx;;}
.peopleInfo{@include flexc;padding-bottom: 20rpx;border-bottom: 2px solid rgb(245,245,245);
   .left{width: 25%;}
   .left img{width: 100rpx;height: 100rpx;margin: auto;border-radius: 50%;}
   .right{width: 75%;}
   .right .title{font-weight: 100;font-size: 34rpx;color: #666;}
   .right .info{color: #8e8e8e;font-weight: 100;font-size: 26rpx;}
   .right text{color: rgb(252,148,53);}
}

.shopInfo{padding: 10rpx 20rpx;
   span{font-size: 28rpx;font-weight: 100;}
   text{display: inline-block;padding: 0rpx 10rpx;margin-left: 15rpx;border-radius: 25rpx; background:rgb(252,148,53);font-weight: 100;font-size: 24rpx;color: #fff;}
}

.TionInfo{height: 1135rpx;}
.tabInfoList{padding: 5rpx 25rpx;
   .item{@include flexc;justify-content: space-between;margin-bottom: 20rpx;padding-bottom: 15rpx;border-bottom: 2px solid rgb(243,243,243);}
   .item .left{@include flexc;}
   .item text{font-weight: 100;font-size: 30rpx;color: #666;}
   .left img{border-radius: 50%;width: 70rpx;height: 70rpx;margin-right: 15rpx;}
   .right .selPrice{color: rgb(251,154,50);}
}

.HeightDiv{height: 110rpx;}
.footerBnt .left,.btnWarp{@include flexc;justify-content: space-around;}
.leftItme{line-height: 28rpx;}
.footerBnt{@include flexc;justify-content: space-between;padding: 10rpx 2%;position: fixed;bottom: 0;width:96%;background: #fff;
  .left{width: 45%;}
  .left img{width: 58rpx;height: 58rpx;margin: auto;}
  .left text{color: rgb(117,117,117);font-size: 28rpx;font-weight: 100;}
  .right{width: 55%;}
  .btnWarp{background-image: -webkit-linear-gradient(0deg,rgb(252,148,53), rgb(255,191,3));border-radius: 45rpx;height: 75rpx;line-height: 75rpx;}
  .btnWarp text{font-size: 32rpx;color: #fff;font-weight: 100;padding: 0 15rpx;}
  .btnWarp span{width: 2rpx;height: 35rpx;background-color: #fff;}
}


</style>
