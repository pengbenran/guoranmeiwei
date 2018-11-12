<template>
  <div class="groupDetail">
      <Comshopsop :ShopInfo='imgList' :ShopTipBool='ShopTipBool'></Comshopsop>
     
     <div class="JoinGroup padding815rpx">
        <div class="title"><span></span><text>立即加入</text></div>
        <div class="item">
          <div class="left">
            <div class="itemimg"><img :src="imgList.touxiang"/></div><span>刘诗轩的团</span>
          </div>
          <div class="right">
             <div class="itemInfo"><span class="info">还差<text>1人</text>成团</span><span class="time">剩余03:29:31</span></div>
             <div class="btn">去参团</div>
          </div>
        </div>
         <div class="item">
          <div class="left">
            <div class="itemimg"><img :src="imgList.touxiang"/></div><span>刘诗轩的团</span>
          </div>
          <div class="right">
             <div class="itemInfo"><span class="info">还差<text>1人</text>成团</span><span class="time">剩余03:29:31</span></div>
             <div class="btn">去参团</div>
          </div>
        </div>
     </div>
     <!--JoinGroup end-->
     
     <div class="Tion">
       <div class="tionTitle">
          <span>邀请好友一起参团，人数不足将自动退款，如不明白请看玩法详情</span>
          <span class="xianQin" @click="showModel"><i class="fa fa-question-circle" aria-hidden="true"></i> 玩法详情</span>
        </div>
       <div class="TionInfo"><img :src="imgList.TionInfo"/></div>
     </div>
     <!--Tion end-->
     
     <div class="HeightDiv"></div>
     <div class="footerBnt">
       <div class="left">
         <div class="leftItme"><img :src="imgList.home" /><text>首页</text></div>
         <div class="leftItme"><img :src="imgList.kefu" /><text>客服</text></div>
         <div class="leftItme"><img :src="imgList.shouChang" /><text>收藏</text></div>
       </div>
       <div class="right">
         <div class="btnWarp">
            <text>加入购物车</text><span></span><text>立即购买</text>
         </div>
       </div>
     </div>
     <!--footerBnt end-->

     <div class="showModel" v-if="ShowModel">
       <div class="Model"><img :src="imgList.ModelImg" mode='aspectFit'/>
          <div @click="hideModel"><i class="fa fa-times-circle" aria-hidden="true"></i> </div>
       </div>
     </div>
     <!--showModel end-->
  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"
 import Comshopsop from '@/components/shopTop'
 

export default {
  components: {
   Comshopsop
  },

  data () {
    return {
      imgList:{brand:config.imgUrl+'/group/header01.jpg',fenxiang:config.imgUrl+'/group/fenxiang.png',
               touxiang:config.imgUrl+'/group/touxiang.jpg',home:config.imgUrl+'/group/home.png',
               kefu:config.imgUrl+'/group/kefu.png',shouChang:config.imgUrl+'/group/shoucang.png',
               TionInfo:config.imgUrl+'/group/TionInfo.jpg',ModelImg:config.imgUrl+'/group/modelImg.png',
      },
      ShopTipBool:true,
      ShowModel:false
    }
  },

  methods: {
      hideModel(){
       let that=this;
       that.ShowModel=false;
      },
      showModel(){
        let that=this;
        that.ShowModel=true;
      }

  },

  created () {
   
  },
  
  onShareAppMessage: function () {
    return {
      title: '',
      desc: '小程序招商开发',
      path: 'pages/index/main'
    }
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
.HeightDiv{height: 110rpx;}

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

.shopTitle{padding: 0 15rpx;@include flexc;
  .left{font-weight: 100;font-size: 32rpx;height: 100rpx;}
  .right{width: 180rpx;height: 110rpx;text-align: center;padding-top: 10rpx;}
  .right img{height: 60rpx;width: 60rpx;margin: auto;}
  .fenxiang{color: #8e8e8e;}
}

.title{display: flex;align-items: center;
  span{background-color: rgb(241,95,19);height: 38rpx;display: inline-block;width: 10rpx;margin-right: 15rpx;}
  text{font-size: 35rpx;color:#f9af4c;font-weight: 100;}
}

.JoinGroup{border-bottom: 5px solid rgb(233,233,233);}
.JoinGroup .item,.JoinGroup .left,.JoinGroup .right{@include flexc;}
.item{justify-content: space-between;font-size: 30rpx;font-weight: 100;padding: 15rpx 0; 
  .itemimg{width: 75rpx;height: 75rpx;border-radius: 50%;margin-right: 10rpx;}
  .itemInfo{text-align: center;margin-right: 30rpx;}
  .itemInfo span{display: block;}
  .itemInfo .time{font-size: 26rpx;color: #8e8e8e;}
  .itemInfo .info{font-size: 28rpx;}
  .itemInfo .info text{color: rgb(238,129,26);}
  .btn{height: 55rpx;line-height: 55rpx; width: 180rpx;border-radius: 40rpx;background-image: -webkit-linear-gradient(0deg, rgb(255,191,3), rgb(252,148,53));text-align: center;color: #fff;}
}

.Tion{padding-top:20rpx; 
  .tionTitle{@include flexc;justify-content: space-between;color: #8e8e8e;font-size: 20rpx;font-weight: 100;padding: 0 10rpx;}
  .tionTitle .xianQin{font-weight: bold;color: #666;}
}

.TionInfo{height: 1135rpx;}

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

.showModel{position: fixed;z-index: 2;top: 0;left: 0;background: rgba(0, 0, 0, 0.51);height: 100vh;width: 100%;
.Model{height: 100%;width: 100%;display: flex;justify-content: center;align-items: center;}
.Model img{height: 800rpx;width: 450rpx;}
.Model i{position: absolute;right: 100rpx;top: 150rpx;color: #fff;}
}

</style>