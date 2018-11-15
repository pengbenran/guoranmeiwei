<template>
  <div class="bargain">
     <div class="header">
        <swiper class="swiper" indicator-dots='true' autoplay='true'>
          <swiper-item><img :src="ImgList.brand"></swiper-item>
        </swiper>
      </div>  
      <Barlist :Shop_item='cutList'></Barlist>
  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"
 import Barlist from "@/components/bargainlist"
let api= new Api 
export default {
  components: {
    Barlist
  },

  data () {
    return {
          ImgList:{brand:config.imgUrl+'/group/header01.jpg',ShopImg:config.imgUrl+'/cart/shopimg01.jpg',
          },
          cutList:[]
    }
  },
   async onLoad(){
    let that=this
    let cutlistRes=await api.getCutlist()
    console.log(cutlistRes.data)
    that.cutList=cutlistRes.data.data

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



</style>
