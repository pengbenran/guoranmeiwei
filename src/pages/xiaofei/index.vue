<template>
  <div class="sign">


     <div class="jifenList" v-if="SELECT_INDEX == 1 && List">
         <div v-if="List.length > 0">
         <div class="item"  v-for="(item,index) in List" :key="item" :index="index">
             <div class="itemTile">{{item.memo}}</div>
             <div class="itemInfo">
                 <div class="left">{{item.mtime}}</div>
                <div class="right">余额：￥{{item.money}}元</div>
             </div>
         </div>
         </div>
         <div class="kong" v-else>抱歉您没有消费数据~~~</div>
     </div>
    
     <!--jifenList end-->
    
     <div class="jifenList" v-if="SELECT_INDEX == 2 && List">
          <div v-if="List.length > 0">
         <div class="item" v-for="(item,index) in List" :key="item" :index="index">
             <div class="itemTile"><img class="titleImg" :src="item.face"> {{item.uname}}</div>
             <div class="itemInfo">
                 <div class="left">{{item.shareTime}}</div>
                <div class="right">分润： ￥{{item.shareMoney}}元</div>
             </div>
         </div>
         </div>
        <div class="kong" v-else>抱歉您没有消费数据~~~</div>
     </div>

  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"

 import formatTime from "@/utils/index"
 let api=new Api
export default {
  data () {
    return {
       List:[],
       SELECT_INDEX:1,
       titleName:'消费明细'
    }
  },
  methods:{
    //消费记录
    async Consum(){
        let that = this;
        let res = await api.Consumption(wx.getStorageSync('memberId'))
        that.List = res.data.data
    },

    // 分润记录
    async FenRun(){
        let that = this;
        let distribeId = wx.getStorageSync('distribeId');
        let res = await api.FenRunDetail(distribeId)
        console.log("查看分润数据",res)
        that.List = res.data.data
    }

  },
  onLoad(){
    let that=this
    let pages = getCurrentPages();
    let prevpage = pages[pages.length-2];
    if(prevpage.route == "pages/distribe/main"){
       that.FenRun();
       that.SELECT_INDEX = 2
       that.titleName = '分润明细'
    }else if(prevpage.route == "pages/Recharge/main"){
       that.Consum()
       that.SELECT_INDEX = 1
       that.titleName = '消费明细'

    }

       wx.setNavigationBarTitle({
            title: that.titleName
        })

  }
}
</script>

<style scoped lang='scss'>
/*局部水平居中*/
@mixin flexc{
display: flex;align-items: center;
}

.d-flex{
    @include flexc;justify-content: center;
}
/*文本换行省略*/
@mixin fontM{
white-space:normal;overflow: hidden;display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;
}
img{display: block;height: 100%;width: 100%;}

.header{height: 550rpx;background: linear-gradient(-40deg, rgb(228,96,90), rgb(253,179,80));
   .headerInfo{font-weight: 100;color: #fff;line-height: 75rpx;text-align: center;}
   .Num{font-size: 80rpx;}
   .info{font-size: 34rpx;}
}

.signBnt{position: relative;text-align: center;height: 85rpx;
   text{display: inline-block;width: 50%;line-height: 85rpx;height: 85rpx;color: rgb(251,143,28);text-align: center;background:#fff;
    box-shadow: 0px 10px 30px rgba(0,0,0,0.1);border-radius: 40rpx;}
    .pos{position: absolute;top: -45rpx;left: 25%;}
}

.jifenList{font-weight: 100;
    .title{@include flexc;justify-content: center;margin-bottom: 10rpx;color: #8e8e8e;}
     .title span{font-size: 24rpx; }
    .title text{display: inline-block;margin: 0 40rpx;width: 45rpx;height: 1px;background: #8e8e8e;}
}

.item{padding: 15rpx 25rpx;font-weight: 100;border-bottom: 1px solid rgb(241,241,241);
    .itemTile{font-size: 30rpx;}
    .itemInfo{@include flexc;justify-content: space-between;font-size: 26rpx;}
}

.kong{text-align: center;font-size: 32rpx;font-weight: 100;margin-top: 25rpx;}
.titleImg{width: 60rpx;height: 60rpx;display:inline-block;border-radius: 50%;vertical-align: middle;}

</style>
