<template>
  <div class="bargain">
     <Tabs :find_item='Tabs' :wid='width'></Tabs>
  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"
 import Discountlist from "@/components/discountlist"
 import Tabs from "@/components/tab"

 let api=new Api
export default {
  components: {
    Discountlist,
    Tabs
  },

  data () {
    return {
          ImgList:{brand:config.imgUrl+'/group/header01.jpg',ShopImg:config.imgUrl+'/cart/shopimg01.jpg',
          },
          Tabs:[{name:'待领取',selected:true},{name:'未使用',selected:false},{name:'已使用',selected:false},{name:'已过期',selected:false}],
          width:'25%',
          apiLimit:[],
          limitActive:[]
    }
  },
  methods:{
   
  },
  async onLoad() {
    let that=this
    let limitRes= await api.getLimit()
    let limitActive = [];
    for (var i = 0; i < limitRes.data.apiLimit.length; i++) {
      limitActive = limitActive.concat(limitRes.data.apiLimit[i].apilimitGoods)
    }
    that.apiLimit=limitActive
    console.log(that.apiLimit)
    that.limitActive= limitRes.data.apiLimit
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
