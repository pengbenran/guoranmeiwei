<template>
  <div class="store">
      <div class="header">
         <div class="left"><img :src="ImgList.map01"/> 当前位置</div>
         <div class="right">
           <span><text>{{addressInfo}}</text>  <i class="fa fa-angle-right" aria-hidden="true"></i></span> 
         </div>
      </div>
    <!--header end-->
    <div class="title">附近门店</div>
    <!--title end-->

    <div class="storeList">
      <div class="storeTitle">南昌洪城金街店</div>
      <div class="info"><text class="fontHidden1">江西省南昌市西湖区洪城路桃元城路桃元城路桃元</text>
          <div class="inforight">
             <span class="jili"><img :src="ImgList.juli"/><text>33.05</text></span>
             <span> <icon type="circle" color='rgb(252,153,47)'  size='20' v-if="icoBool" /><icon type="success" color='rgb(252,153,47)' size='20' v-else/></span>
          </div>
      </div>
    </div>

     <div class="storeList">
      <div class="storeTitle">南昌洪城金街店</div>
      <div class="info"><text class="fontHidden1">江西省南昌市西湖区洪城路桃元城路桃元城路桃元</text>
          <div class="inforight">
             <span class="jili"><img :src="ImgList.juli"/><text>33.05</text></span>
             <span> <icon type="circle" color='rgb(252,153,47)'  size='20' v-if="icoBool" /><icon type="success" color='rgb(252,153,47)' size='20' v-else/></span>
          </div>
      </div>
    </div>
    <!--storeList end-->

  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"
 import globalLoca from  '@/utils/qqmap-wx-jssdk'


export default {
  components: {

     
  },
   
  data () {
    return {
     ImgList:{map01:config.imgUrl+'/address/map01.png',juli:config.imgUrl+'/address/juli.png'},
     icoBool:true,
     addressInfo:''
    }
  },
  methods:{
    onLoadMap(){
      let that = this;
      var qqmapsdk = new globalLoca.QQMapWX({
        key: 'ARCBZ-73GW6-EEQS3-EPCSS-6Z6OJ-ONFUQ' // 必填
       });
         //1、获取当前位置坐标
      wx.getLocation({
          type: 'wgs84',
            success: function (res) {
              //2、根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
              qqmapsdk.reverseGeocoder({
                location: {
                  latitude: res.latitude,
                  longitude: res.longitude
                },
                success: function (addressRes) {       
                  var address = addressRes.result.address_component.city;
                  that.addressInfo = addressRes.result.address
                }
              })
            }
        })

    }
  },
  mounted(){
   this.onLoadMap();
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

.header{@include flexc;justify-content: space-between;padding: 15rpx 20rpx;font-weight: 100;font-size: 32rpx;border-bottom: 1px solid rgb(249,249,249);
   .right{}
   .right text{color: rgb(252,153,47);font-size: 28rpx;padding-right: 15rpx;}
   .left{@include flexc;color: #666;}
   .left img{width: 45rpx;height: 55rpx;margin-right: 10rpx;}
}

.storeList{padding: 20rpx;border-bottom: 1px solid rgb(249,249,249);color: #666;font-size: 34rpx;}
.info{@include flexc;justify-content: space-between;font-size: 28rpx;color: #8e8e8e;
  .fontHidden1{width: 70%;justify-content: space-between;}
  .inforight{@include flexc;}
  .jili{@include flexc;margin-right: 20rpx;}
  .jili img{width: 40rpx;height: 40rpx;margin-right: 10rpx;}
  .jili text{font-size: 26rpx;}
}

.title{padding: 10rpx 25rpx;color: #666;font-size: 32rpx;border-bottom: 1px solid rgb(249,249,249);}


</style>
