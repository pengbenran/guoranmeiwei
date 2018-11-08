<template>
<<<<<<< HEAD
  <div class="indexwarp">
      <div class="header">
        <div class="search"><i class="fa fa-search" aria-hidden="true"></i>
                            <input  placeholder="最大输入长度10"  style-placeholder='color:#ccc;font-size:28rpx;'/>
        </div>
      </div>
      <!--header end-->
=======
  <div class="page">
  
>>>>>>> 19379c45cfbb686a0b01800f83780c03f4e16341
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
    console.log("加载完成");
    console.log(res)
  },
  methods: {

  }
}
</script>

<<<<<<< HEAD
<style scoped lang='scss'>
 .header{
   .search{display: flex;justify-content: center;width: 90%;}
 }
</style>
=======
<style>
</style>
>>>>>>> 19379c45cfbb686a0b01800f83780c03f4e16341
