<template>
  <div class="ComWarp">

    <div class="listWarp">
        <scroll-view  lower-threshold="0" class="scroll" scroll-y bindscrolltolower="loadMore">
            <div class="btn"><text>产品分类</text> <i class="fa fa-angle-down" aria-hidden="true"></i></div>

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
 
        <div class="ModelMask"></div>
        <div class="Model">
            <div class="ModelTile"><text>产品分类</text> <i class="fa fa-angle-down" aria-hidden="true"></i></div>
          <text>当季水果</text><text>当季水果</text><text>当季水果</text><text>当季水果</text><text>当季水果</text><text>当季水果</text>
        </div>
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
     ImgList:{fruImg1:config.imgUrl+'/index/fruImg1.png', fen:config.imgUrl+'/distribe/fen.png',
                fruShop:config.imgUrl+'/index/fruilShop.jpg', },
     Animation:{}
    }
  },
  //事件
  methods:{
    OnClick(){
        let that = this;
        let animation = wx.createAnimation({
            duration: 200, timingFunction: 'linear', delay: 100,  transformOrigin: 'left top 0',
            success: function(res) {
                console.log(res)
                }
        })
        animation.translateY(-300).step()
        that.Animation=animation.export()
        that.modelShow=true;
        setTimeout(function () {
            animation.translateY(0).step()
            that.Animation=animation.export()
        }.bind(that), 100)
    }
 
  },
  //初始化加载
  mounted(){
   let that = this;
   let str = '123,456'
   let str1 = str.split(',').reverse().join(',')
   console.log(str1)
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

.listWarp{padding-top: 15rpx; }
.ComWarp{min-height: 100vh;background: #f8f8f8;}

.List{@include flexc;justify-content: space-between;flex-wrap: wrap;margin: 20rpx 35rpx;
    .item{padding: 20rpx;margin-bottom: 20rpx;width: 42.5%;border-radius: 6rpx;background: #fff;box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.15);font-weight: 100;}
    .item .title{font-size: 30rpx;height: 92rpx;}
    .topImg{text-align: center;}
    .topImg img{height: 250rpx;width: 250rpx;margin: auto;}
    .Price{@include flexc;justify-content: space-between;margin-top: 20rpx;color: rgb(255,134,111);}
    .Price img{width: 50rpx;height: 50rpx;}
}

.btn{@include flexc;justify-content: center;font-weight: 100;line-height: 58rpx;font-size: 28rpx;background: #fff;margin-top: 15rpx;
    width: 90%;border-radius: 25rpx;margin: auto;box-shadow: 0 0 25rpx rgba(0, 0, 0, 0.11)}
.ModelMask{position: fixed;top: 0;left: 0;height: 100vh;width: 100%;z-index: 2;background: rgba(0, 0, 0, 0.144);}
.Model{position: fixed;top: 0;left: 0;z-index: 3;background: #fff;border-bottom-left-radius: 20rpx;border-bottom-right-radius: 20rpx;height: 450rpx;}

</style>
