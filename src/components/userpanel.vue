<template>
	<div class="header">
		<div class="avator">
			<img :src="userInfo.avator">
		</div>
		<div class="username">
			<div class="name">{{userInfo.name}}</div>
			<div class="lvname">{{userInfo.lvname}}</div>
		</div>
		<div class="qianicon">
			<img :src="wode">
		</div>
	</div>
</template>

<script>
import config from "@/config"
export default {
  props: ['userInfo'],
  data () {
    return {
      wode:config.imgUrl+"/myself/wode.jpg",	
    }
    },
    methods: {
  		
    }
}
</script>

<style scoped lang='scss'>
img{
	width: 100%;
	height: 100%;
	display:block;
}
.header{
  height: 150rpx;
  display: flex;
  width: 90%;
  margin: 75rpx auto;
  .avator{
    width: 150rpx;
    height: 150rpx;
    overflow: hidden;
  }
  .username{
    flex-grow:1;
    padding-left: 40rpx;
    box-sizing:border-box;
    padding-top: 20rpx;
    .lvname{
      font-size: 0.8em;
      color:#fc9632;
    }
  }
  .qianicon{
    width: 58rpx;
    height: 58rpx;
    overflow: hidden;
    margin-top: 46rpx;

  }
 }
</style>
