<template>
	<div class="good">
		<div class="goodlist" v-for="(item,index) in good_item" :index="index" :key="item">
			<div class="goodimg">
				<img :src="item.goodimg">
			</div>
			<div class="gooddetail">
				<div class="goodtop"> 
					<div class="goodname">
						{{item.goodname}}
					</div>
					<div class="intro">
						{{item.intro}}
					</div>
				</div>
				<div class="goodbottom"> 
					<div class="goodprice"> 
						{{item.price}}
					</div>
					<div class="icon">
						<img :src="addImg">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import globalStore from "@/utils/globaledata"; 
export default {
  props: ['good_item'],
  data () {
    return {
    	addImg:globalStore.state.imgapi+'/kind/add.png',
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
  overflow:hidden;
}
.goodlist{
  display: flex;
  width:95%;
  margin: 0 auto;
  border-bottom: 1rpx solid #f4f4f4;
  .goodimg{
    width: 250rpx;
    height: 250rpx;
    overflow: hidden;
  }
  .gooddetail{
    height: 250rpx;
    .goodtop{
     .goodname{
       display: -webkit-box;
        width: 400rpx;
        line-height: 1.5;
        font-size: 0.9em;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .intro{
        font-size: 0.8em;
        color:#999;
      }
    }
    .goodbottom{
      display: flex;
      justify-content: space-between;
      .icon{
        width: 50rpx;
        height: 50rpx;
        overflow: hidden;
      }
    }
  }
}
</style>
