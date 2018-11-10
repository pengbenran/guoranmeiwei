<template>
  <div class="indexwarp">
      <div class="header">
    
      </div>
    </div>
</template>

<script>
 
import Api from "@/utils/Api"
export default {
  data() {
    return {
    }
  },
  async mounted(){
    let api= new Api 
    let res=await api.getMain()
  },
  methods: {

  }
}
</script>
<style scoped lang='scss'>
 .header{
    margin-top:26rpx;
   .search{width: 60%;margin:20rpx auto;display: inline-block;border: 1rpx solid #ddd;}
 }
</style>

