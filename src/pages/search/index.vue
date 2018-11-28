<template>
<div class="search">
   <div class="header">
       <div class="left"><input type="text" placeholder="请输入"></div>
       <div class="right"><text>搜索</text></div>
   </div>
   <!--header end-->

   <div class="Lsit">
       <div class="item">
           <div class="ItemImg"><img :src="shopImg" mode='aspectFit'/></div>
           <div class="title fontHidden"> 你好世界你好世界你好世界你好世界你好世界你好世界你好世界</div>
           <div class="Price"><text>￥169.00</text><text>销量：235</text></div>
       </div>
        <!-- <div class="item">
             <div class="ItemImg"><img :src="shopImg" /></div>
           <div class="title"> 你好世界你好世界你好世界你好世界你好世界你好世界你好世界</div>
           <div class="Price"><text>￥169.00</text><text>销量：235</text></div>
       </div> -->
   </div>
</div>
</template>

<script>
import Tab from '@/components/tab';
import Api from "@/utils/Api"
import Goodlist from '@/components/goodlist';
import config from "@/config"

let api=new Api
export default {
  components: {
   Tab,
   Goodlist
  },

  data () {
    return {
        shopImg:config.imgUrl+'/cart/shopimg01.jpg',
     find_item:[{image:''}],
     gooditem:[],
     shopitem:[],
     current:0,
     goodlength:0,
     index:0,
     scrollTop:0,
     temp:[],
     gooditemIndex:0,
     width:'25%',
     indexdata:0
    }
  },
  methods:{
  
   
  },
  async onShow() {
    let that=this
   
  }
}
</script>

<style scoped lang='scss'>
@mixin flexc{
    display: flex;justify-content: center;
}
img{
  width: 100%;
  height: 100%;
  overflow:hidden;
}
.search{min-height: 100vh;background: #f6f6f6;}

.header{@include flexc;justify-content:space-between;padding: 20rpx;font-weight: 100;font-size: 32rpx;border-bottom: 1px solid #f4f4f4;background: #fff;
  .left{width: 84%;background: #f5f5f5;border-radius: 35rpx;padding-left: 18rpx;line-height: 65rpx;height: 65rpx;}
  .left input{height: 65rpx;}
  .right{width: 16%;text-align: center;}
  .right text{background: brown;color: #fff;display: inline-block;padding: 10rpx 15rpx;font-size: 26rpx;border-radius: 10rpx;margin-left: 15rpx;}

}


.Lsit{display: flex;align-items: center;justify-content: space-between;font-weight: 100;
  .item{width: 48%;background: #fff;}
  .ItemImg{height: 280rpx;padding: 25rpx;}
  .item .title{font-size: 30rpx;color: #666; height: 80rpx;padding: 10rpx;}
}

</style>