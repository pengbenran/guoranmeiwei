<template>
  <div class="group">
    <div class="banner" v-if="Gallery.length==1">
    <img :src="Gallery[0].imageUrl"  mode="widthFix">
  </div>
  <div class="header" v-if="Gallery.length!=1">
   <swiper class="swiper" indicator-dots='true' autoplay='true'>
    <swiper-item v-for="(item,index) in Gallery" :key="item" :index="index"><img :src="item.imageUrl" mode="widthFix"></swiper-item>
  </swiper>
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
      group_item:[],
      Gallery:[]
    }
  },
  async mounted(){
    let that=this
    let api= new Api 
    let res=await api.getGroupList()
    that.group_item=res.data.collageList
    console.log(that.group_item);
    that.Gallery=res.data.adList
    console.log(that.Gallery);
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

