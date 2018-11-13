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
      group_item:[]
    }
  },
  async mounted(){
    let that=this
    let api= new Api 
    let res=await api.getGroupList()
    that.group_item=res.data
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

