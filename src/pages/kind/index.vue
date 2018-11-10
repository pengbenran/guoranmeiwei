<template>
<div class="kind">
 <Tab :find_item="find_item"></Tab>
 <div class="banner">
   <img :src="banner">
 </div>
<Goodlist :good_item="gooditem"></Goodlist>
</div>
</template>

<script>
import Tab from '@/components/tab';
import Goodlist from '@/components/goodlist';
import globalStore from "@/utils/globaledata"; 
export default {
  components: {
   Tab,
   Goodlist
  },

  data () {
    return {
      banner:globalStore.state.imgapi+"/kind/banner.jpg",
     find_item:[
      {name:"季节水果",selected:true},
      {name:"热销水果",selected:false},
      {name:"促销水果",selected:false},
      {name:"热带水果",selected:false},
      {name:"季节水果",selected:false}],
     gooditem:[
       {goodname:'福建广西盘丝洞过节费iOSA级个iOS就技术都放假哦啊发基调集散地偶发酒叟安静的佛家说我键哦ID沙发飞机哦',goodimg:globalStore.state.imgapi+"/kind/shop.jpg",intro:'好吃的柚子又大有填',price:'69.99'}
     ]
    }
  },
  methods:{
      changTab:function(index){
      var that=this;
        for(var i=0;i<that.find_item.length;i++){
          that.find_item[i].selected=false;
        }
        that.find_item[index].selected=true;
      },
  },
  created () {
   
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
  width: 680rpx;
  height: 201rpx;
  margin: 20rpx auto;
  border-radius: 15rpx;
}

</style>