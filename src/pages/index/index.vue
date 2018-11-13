<template>
  <div class="indexwarp ">
        <skeleton selector="skeleton"
          loading="spin"
          bgcolor="#FFF"
          v-if="showSkeleton"></skeleton>
    

<div class="skeleton">
    <!-- <div class="heightDiv"></div> -->
      <div class="header">
        <div class="search skeleton-rect"><i class="fa fa-search " aria-hidden="true"></i>
                            <input class="skeleton-rect"  placeholder="王小贱鲜果零食优选"  style-placeholder='color:#ccc;font-weight: 100;'/>
        </div>
      </div>
      <!--header end-->
      <div class="tip  skeleton-Mrect">
        <div class="logo"><img :src="imgList.logo"></div><text>王小贱鲜果零食优选(湖北武汉店))</text><small>[切换]</small>
      </div>
      <!--tip end-->
      <div class="brand skeleton-Mrect">
        <swiper class="swiper" indicator-dots='true' autoplay='true'>
          <swiper-item><img :src="imgList.brand"></swiper-item>
        </swiper>
      </div>
    <!--brand end-->
    <div class="news  skeleton-Mrect">
      <div class="shopImg"><img :src="imgList.shopImg"></div><small class="tag">火热</small><span> 全场特价9.9元起</span>
    </div>
    <!--news end-->
     <div class="hot ">
       <div class="hotBg "><img :src="imgList.hotImg" /></div>
       <div class="hotList">
          <div class="hotItem skeleton-rect">
              <div class="icoImg"><img :src="imgList.ico1"/></div>
              <div class="hotShop"><img :src="imgList.shopImg1"/></div>
              <span>已售100000件</span>
          </div>
          <div class="hotItem skeleton-rect">
              <div class="icoImg"><img :src="imgList.ico2"/></div>
              <div class="hotShop"><img :src="imgList.shopImg1"/></div>
              <span>已售100000件</span>
          </div>
          <div class="hotItem skeleton-rect">
              <div class="icoImg"><img :src="imgList.ico3"/></div>
              <div class="hotShop"><img :src="imgList.shopImg1"/></div>
              <span>已售100000件</span>
          </div>
       </div>
     </div>
    <!--hot end-->
    
    <div class="activity">
      <div class="top topimg"><img :src="imgList.activityImg"></div>
      <div class="actList">
        <div class="actItem skeleton-rect" v-for="(item,index) in activityImg" :index='index' :key='item' @click="toPage(item.pageUrl)">
            <div class="itembg"><img :src="item.actBg"/></div>
            <div class="itemTile">
               <text>{{item.actName}}</text><small>{{item.acttall}}</small>
            </div>
        </div>
      </div>
    </div>
    <!--activity end-->
    
    <div class="rili">
       <div class="riliMore"><span class="time">11月</span><small class="more">查看更多</small></div>
       <div class="riliBg"><img :src="imgList.rilibg"/></div>
       <div class="liriWarp">
          <div class="riliTop">
              <span>新品上市</span><span>超值特惠</span><span>店长推荐</span>
          </div>
          <!-- <div class=""></div> -->
          <div class="riliWarp">
            <div class="Item" v-for="(item,index) in riliListImg" :index='index' :key='item'>
              <img :src="item.riliImg"/>
            </div>
          </div>
       </div>
    </div>
    <!--rili end-->
    
    <div class="free">
      <div class="freeTop"><span>满足馋嘴的你</span><p>每样精挑细选，只为等你</p></div>
      <div class="freeBrand"><img :src="imgList.freeImg"/></div>
    </div>
    <div class="freeList">
        <div class="freeListBg"><img :src="imgList.freeImgBg" /></div>
        <scroll-view class="scrollItem" scroll-x style="height: 335rpx;">
        <div class="freeItemWarp">
          <div class="freeItem" v-for="(item,index) in freeShopList" :index='index' :key='item'>
              <img :src="item.shopImg" /><view class="freeInfo">{{item.shopName}}</view>
          </div>
        </div>
        </scroll-view>
    </div>
    <div class="freeMore">更多热销<i class="fa fa-chevron-circle-right" aria-hidden="true"></i> </div>
    <!--free end-->

    <div class="free">
      <div class="freeTop"><span>健康水果，美味到“家”</span><p>闻得到的香甜，看得到的新鲜</p></div>
      <div class="freeBrand"><img :src="imgList.freeImg01"/></div>
    </div>
    <div class="freeList">
        <div class="freeListBg"><img :src="imgList.freeImgBg" /></div>
        <scroll-view class="scrollItem" scroll-x style="height: 335rpx;">
        <div class="freeItemWarp">
          <div class="freeItem" v-for="(item,index) in freeShopList" :index='index' :key='item'>
              <img :src="item.shopImg" /><view class="freeInfo">{{item.shopName}}</view>
          </div>
        </div>
        </scroll-view>
    </div>
    <div class="freeMore">更多热销<i class="fa fa-chevron-circle-right" aria-hidden="true"></i> </div>
    <!--free end-->
    
    <div class="bottomBrand">
      <img :src="imgList.bottomBrand" />
    </div>
   <!--bottomBrand end-->

   <div class="footer">
     <img :src="imgList.footerImg"/>
   </div>
  </div>
  </div>
</template>
<script>
 import Api from "@/utils/Api"
 import config from "@/config"
 import skeleton from '@/components/skeleton'

 let api= new Api 
  export default {
    data() {
      return {
        imgList:{logo:config.imgUrl+'/index/logo.jpg',brand:config.imgUrl+'/index/banner0.jpg',
                 shopImg:config.imgUrl+'/index/news.jpg',hotImg:config.imgUrl+'/index/hot.jpg',
                 activityImg:config.imgUrl+'/index/activityImg.jpg',rilibg:config.imgUrl+'/index/rili.jpg',
                 freeImg:config.imgUrl+'/index/free.jpg',freeImgBg:config.imgUrl+'/index/freeBg.jpg',
                 freeImg01:config.imgUrl+'/index/free01.jpg',bottomBrand:config.imgUrl+'/index/bottomBrand.jpg',
                 footerImg:config.imgUrl+'/index/footerImg.png', ico1:config.imgUrl+'/index/ico1.png',
                 ico2:config.imgUrl+'/index/ico2.png',ico3:config.imgUrl+'/index/ico3.png',shopImg1:config.imgUrl+'/index/haotian01.png'
                 },
        activityImg:[{actName:'限时活动',acttall:'每日10点限时秒杀',actBg:config.imgUrl+'/index/cuxiao0.jpg',pageUrl:'../bargain/main'},
                      {actName:'火爆拼团',acttall:'每日10点限时秒杀',actBg:config.imgUrl+'/index/cuxiao1.jpg',pageUrl:'../bargain/main'},
                      {actName:'分享砍价',acttall:'每日10点限时秒杀',actBg:config.imgUrl+'/index/cuxiao2.jpg',pageUrl:'../bargain/main'},
                      {actName:'优惠券',acttall:'400减50',actBg:config.imgUrl+'/index/cuxiao3.jpg',pageUrl:'../bargain/main'}],
        riliListImg:[{riliName:'芒果你好',riliImg:config.imgUrl+'/index/rili01.jpg'},
                     {riliName:'橘子你好',riliImg:config.imgUrl+'/index/rili02.jpg'},
                     {riliName:'苹果你好',riliImg:config.imgUrl+'/index/rili03.jpg'},
                     {riliName:'世界你好',riliImg:config.imgUrl+'/index/rili01.jpg'},
                    ],
        freeShopList:[{shopName:'新鲜水果特价大优惠便宜卖便宜卖好甜好甜好甜好甜好甜好甜好甜',shopImg:config.imgUrl+'/index/haotian01.png'},
                      {shopName:'新鲜水果特价大优惠便宜卖便宜卖好甜好甜好甜好甜好甜好甜好甜',shopImg:config.imgUrl+'/index/haotian02.png'},
                      {shopName:'新鲜水果特价大优惠便宜卖便宜卖好甜好甜好甜好甜好甜好甜好甜',shopImg:config.imgUrl+'/index/haotian03.png'},
                     ],
        showSkeleton: false            
      }
    },
    components: {
      skeleton
    },
    async mounted(){
        console.log(config.imgUrl,"图片")
      let res=await api.getMain()
      console.log("加载完成");
      console.log(res)
    },
    created () {
      // const that = this;
      // setTimeout(() => {
      //   that.showSkeleton = false
      // }, 1800)
    },
    methods: {
      toPage(url){
        this.toNav(url)
      },
      toNav(url){
        wx.navigateTo({ url: url });
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

img{display: block;width: 100%;height: 100%}
.heightDiv{height: 48rpx;}
 .header{padding: 10rpx 0 28rpx;border-bottom: 10rpx solid rgb(243,243,243);
   .search{@include flexc;width: 95%;height: 65rpx;margin: auto;background: #f5f5f5;border-radius: 35rpx;font-weight: 100;font-size: 30rpx;}
   .search i{font-weight: 100;color: #ccc;width: 18%;text-align: center;}
   .search input{width: 82%;
 }
}

 .tip{
  @include flexc;font-size: 27rpx;font-weight: 100;color: rgb(170, 170, 170);height: 78rpx;padding: 0 10rpx;border-bottom: 6rpx solid rgb(243,243,243);
   .logo{width: 140rpx;height: 94%;display: inline-block}
   .logo img{width: 140rpx;}
   small{display: inline-block;margin-left: 6rpx;color: rgb(236,189,87);}
 }

.brand{
  .swiper{height: 320rpx;}
}

.news{@include flexc;height: 65rpx;padding: 0 10rpx;
  .shopImg{width: 160rpx;height: 100%;}
  small{display: inline-block;margin: 0 10rpx;padding:0 12rpx;border-radius: 20rpx;font-size: 22rpx;color: #fff;background: rgb(242,42,71)}
  span{font-size: 30rpx;font-weight: 100;}
}

.hot{position: relative;height: 364rpx;margin-bottom: 10rpx;padding: 15rpx 20rpx;background: #f6f6f6;
 .hotBg{height: 364rpx; width: 94%;margin-left: 3%;position: absolute;left: 0;top: 15rpx;}
}
.hotList{position:relative;display: flex;justify-content: space-around;padding:0 10rpx;
  .hotItem{position: relative;margin-top: 110rpx;width: 32%;height: 240rpx;text-align: center;background: #fff;border-radius: 10rpx;}
  .hotShop{width: 92%;height: 172rpx;margin: auto;}
  .hotItem span{font-weight: 100;font-size: 30rpx;display: inline-block;margin: auto;color: #ccc;}
  .icoImg{position: absolute;top: 10rpx;left: 10rpx;width: 70rpx;height: 70rpx;}
}


  .topimg{width: 306rpx;height: 90rpx;margin: auto;}


.actList{display: flex;justify-content: space-between;flex-wrap: wrap;padding: 0 15rpx;
  .actItem{width: 49%;height: 184rpx;position: relative;margin-bottom: 15rpx;border-radius: 10rpx;overflow: hidden;}
  .itembg{position: absolute;height: 100%;width: 100%;left: 0;top: 0;}
  .itemTile{position: relative;z-index: 2;padding-left: 16rpx;padding-top: 10rpx;line-height: 45rpx;
          text{font-size: 34rpx;font-weight: 500;}
          small{color:rgb(184, 184, 184);font-weight: 100;font-size: 24rpx;}
          }
}

.rili{position: relative;height: 380rpx;padding-top: 78rpx;;
  .riliBg{position: absolute;left: 0;top: 0;height: 100%;width: 100%;}
  .riliMore{position: relative;z-index: 2;@include flexc;justify-content: space-between;padding: 0 25rpx 8rpx;}
  .riliMore .time{font-weight: 300;font-size: 34rpx;}
  .riliMore .more{font-weight: 100;font-size: 26rpx;color: rgb(184, 184, 184);}
}

.liriWarp{background: #fff;position: relative;z-index: 2;margin:0 25rpx;border-top-left-radius: 20rpx;border-top-right-radius: 20rpx;
  .riliTop{display:flex;justify-content: space-around;align-items: center;padding: 10rpx 0 12rpx;}
  .riliTop span{color: #666;border-bottom: 3px solid red;font-weight: 100;font-size: 32rpx;}
}

.riliWarp{display: flex;
  .Item{width: 25%;height: 218rpx;}
}

/*公用头部*/
.freeTop{padding: 25rpx 20rpx 15rpx;}
.freeTop span{font-size: 36rpx;}
.freeTop p{font-weight: 100;color: #8e8e8e;font-size: 25rpx;}

.free{padding: 0 20rpx;margin-bottom: 25rpx;
  .freeBrand{height: 215rpx;margin-bottom: 20rpx;}
}

.freeList{position: relative;height: 335rpx;
  .freeListBg{position: absolute;top: 0;left: 0;height: 100%;width: 100%;}
}
.scrollItem{white-space:nowrap;display:block;
  .freeItemWarp{@include flexc;}
  .freeItem{height: 310rpx;background: #fff;border-radius: 15rpx;margin: 10rpx;}
  .freeItem img{height: 215rpx;width: 82%;margin: auto;}
  .freeInfo{width: 260rpx;@include fontM;font-size: 26rpx;color: rgb(175, 175, 175);padding: 0 12rpx;}
}
.freeMore{font-size: 28rpx;color:#aaa9a9;text-align: center;font-weight: 100;
  i{color:rgb(231,177,59);margin-left: 8rpx;font-size: 32rpx;}
}

.bottomBrand{height: 206rpx;margin-top: 30rpx;}
.footer{height: 80rpx;padding: 20rpx 30rpx 10rpx 0;}
</style>

