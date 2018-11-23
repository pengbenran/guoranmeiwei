<template>
  <div class="ComWarp">
    <div class="listWarp">
        <scroll-view  lower-threshold="0" class="scroll" scroll-y bindscrolltolower="loadMore">
            <div class="List">
                <div class="item" >
                    <div class="topImg"><img :src="ImgList.fruShop" /></div>
                    <div class="title fontHidden">你好世界世界你好世界世界你好世界世界你好世界世界你好世界世界你好世界世界</div>
                    <div class="Price"><text>￥9.9</text><img :src="ImgList.fen"/></div>
                </div>
                <div class="item" >
                    <div class="topImg"><img :src="ImgList.fruShop" /></div>
                    <div class="title fontHidden">你好世界世界你好世界世界你好世界世界你好世界世界你好世界世界你好世界世界</div>
                    <div class="Price"><text>￥9.9</text><img :src="ImgList.fen"/></div>
                </div>
                <div class="item" >
                    <div class="topImg"><img :src="ImgList.fruShop" /></div>
                    <div class="title fontHidden">你好世界世界你好世界世界你好世界世界你好世界世界你好世界世界你好世界世界</div>
                    <div class="Price"><text>￥9.9</text><img :src="ImgList.fen"/></div>
                </div>
            </div>
        </scroll-view>
    </div>
<!--List end-->
  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"


 let api= new Api 
export default {
  components: {
  
  },

  data () {
    return {
     ImgList:{fruImg1:config.imgUrl+'/index/fruImg1.png', fen:config.imgUrl+'/distribution/fen.png',
                fruShop:config.imgUrl+'/index/fruilShop.jpg', },
 
    }
  },
  //事件
  methods:{
  
 
  },
  //初始化加载
  mounted(){
   let that = this;

  },
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

.ComWarp{min-height: 100vh;background: #f8f8f8;}

.List{@include flexc;justify-content: space-between;flex-wrap: wrap;margin: 20rpx 35rpx;
    .item{padding: 20rpx;margin-bottom: 20rpx;width: 42.5%;border-radius: 6rpx;background: #fff;box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.15);font-weight: 100;}
    .item .title{font-size: 30rpx;height: 92rpx;}
    .topImg{text-align: center;}
    .topImg img{height: 250rpx;width: 250rpx;margin: auto;}
    .Price{@include flexc;justify-content: space-between;margin-top: 20rpx;color: rgb(255,134,111);}
    .Price img{width: 50rpx;height: 50rpx;}
}


</style>
