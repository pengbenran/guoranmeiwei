<template>
  <div class="indexwarp">
      <div class="header">
        <div class="search"><i class="fa fa-search" aria-hidden="true"></i>
                            <input  placeholder="最大输入长度10"  style-placeholder='color:#ccc;font-size:28rpx;'/>
        </div>
      </div>
      <!--header end-->
  </div>
</template>

<script>
// import card from '@/components/card'
export default {
  data () {
    return {
     
    }
  },

  components: {
    // card
  },

  methods: {
   
  },

  created () {
    // 调用应用实例的方法获取全局数据
  
  }
}
</script>

<style scoped lang='scss'>
 .header{
   .search{display: flex;justify-content: center;width: 90%;}
 }
</style>
