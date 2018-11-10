<template>
	<div class="group">
		<div class="grouplist" v-for="(item,index) in group_item" :index="index" :key="item">
			<div class="groupimg">
				<img :src="item.groupimg">
			</div>
			<div class="groupdetail">
				<div class="grouptop"> 
					<div class="groupname">
						{{item.groupname}}
					</div>
					<div class="intro">
						{{item.intro}}
					</div>
				</div>
				<div class="groupcenter">2人团</div>
				<div class="groupbottom"> 
					<div class="groupprice"> 
						<div class="groupprice">拼团价:{{item.price}}</div>
						<div class="price">零售价{{item.price}}</div>
					</div>
					<div class="icon">
						<div class="bcgImg">
							<img :src="bcgImg">
						</div>
						<div class="title">立即开团</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: ['group_item'],
  data () {
    return {
    	
    }
    },
    methods: {
  		
    }
}
</script>

<style  scoped lang='scss'>
img{
  width: 100%;
  height: 100%;
  overflow:hidden;
}
.grouplist{
  display: flex;
  width:95%;
  margin: 0 auto;
  border-bottom: 1rpx solid #f4f4f4;
  .groupimg{
    width: 250rpx;
    height: 250rpx;
    overflow: hidden;
  }
  .groupdetail{
    flex-grow:1;
    padding-left: 10rpx;
    box-sizing: border-box;
    .grouptop{
     .groupname{
       display: -webkit-box;
        width: 400rpx;
        line-height: 1.5;
        font-size: 0.9em;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .intro{
        font-size: 0.7em;
        color:#fc9632;
      }
    }
    .groupcenter{
      color:#fc9632;
      font-size: 0.9em;
    }
    .groupbottom{
      display: flex;
      justify-content: space-between;
      font-size: 0.8em;
      .groupprice{
        .groupprice{
          color: #fc9632;
        }
        .price{
          color:#999;
          font-size: 0.7em;
        }
      }
      .icon{
        width: 100px;
        height: 30px;
        position: relative;
        overflow: hidden;
        .bcgImg{
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .title{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 30px;
          line-height: 30px;
          color: #fff;
          text-align: center;
          
        }
      }
    }
  }
}
</style>