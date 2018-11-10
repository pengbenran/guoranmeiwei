<template>
  <div class="group">
   <div class="banner">
    <img :src="banner"  mode="widthFix">
   </div>
   <Grouplist  :group_item="group_item"></Grouplist> 
  </div>
</template>

<script>
import Api from "@/utils/Api";
import Grouplist from '@/components/grouplist'
import config from "@/config"
export default {
  data() {
    return {
      bcgImg:config.imgUrl+"/group/111.png",
      banner:config.imgUrl+"/group/3333.png",
      group_item:[
       {gropname:'福建广西盘丝洞过节费iOSA级个iOS就技术都放假哦啊发基调集散地偶发酒叟安静的佛家说我键哦ID沙发飞机哦',groupimg:config.imgUrl+"/group/22.png",intro:'好吃的柚子又大有填',price:'69.99'}
     ]
    }
  },
  async mounted(){
    let api= new Api 
    let res=await api.getMain()
  },
  components: {
   Grouplist,
  },
  methods: {

  }
}
</script>
<style scoped lang='scss'>
img{
  width: 100%;
  height: 100%;
  overflow:hidden;
}
.banner{
  width: 100%;
  margin: 20rpx auto;
  border-radius: 15rpx;
}

</style>

