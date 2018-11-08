<template>
  <div class="page">
  
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

<style>
</style>