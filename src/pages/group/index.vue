<template>
  <div class="group">
   <Shopaddr :shopname="shopname"></Shopaddr>
   <div class="grouppanel">
     <div class="left">
       <img :src="group.goodimg">
     </div>
     <div class="right">
       <div class="top">{{group.goodname}}</div>
       <div class="center">
         <div class="centerleft">
           <div class="bcg">
             <img :src="bcg">
           </div>
           <div class="groupperson">
             2人团
           </div>  
         </div>
         <div class="centerright">
           剩余人数:<span>2</span>人
         </div>
       </div>
       <div class="bottom">
         <div class="bottomleft">
           <span class="groupprice">￥{{group.groupprice}}</span>
           <span class="price">￥{{group.price}}</span>
         </div>
         <Countdowns :countdown="countdown"></Countdowns>
       </div>
     </div>
   </div>
   <div class="result" v-if="type==1">
     <img :src="pingsuccess">
   </div>
   <div class="result" v-if="type==2">
     <img :src="success">
   </div>
   <div class="result" v-if="type==3">
     <img :src="file">
   </div>
   <!-- 拼团人头像 -->
   <div class="userconten">
     <div class="useravator" v-for="(item,index) in groupperson" :key="item" :index="index">
       <img :src="item.avator">
       <div class="captain" v-if="item.captain">
         <img :src="captain">
       </div>
     </div>
   </div>
    <div class="tip" v-if="type==1">
      已成团，等待发货
   </div>
    <div class="btn" v-if="type==1">
     再开一团
   </div>
   <div class="tip" v-if="type==2">
     还差1人，赶紧去邀请好友来参团吧
   </div>
   <div class="btn" v-if="type==2">
     邀请好友来参团
   </div>
    <div class="tip" v-if="type==3">
     未成团，重新开团
   </div>
   <div class="btn" v-if="type==3">
     重新开团
   </div>
  </div>
</template>

<script>
import Api from "@/utils/Api";
import util from "@/utils/index";
import Shopaddr from '@/components/shopaddr';
import config from "@/config";
import Countdowns from "@/components/countdown";
export default {
  data() {
    return {
      type:3,
      shopname:"王小姐水果店(抚生路点)",
      pingsuccess:config.imgUrl+'/group/pingsuccess.png',
      success:config.imgUrl+'/group/success.png',
      file:config.imgUrl+'/group/file.png',
      bcg:config.imgUrl+"/group/quer.png",
      captain:config.imgUrl+"/group/cation.png",
      group:{goodimg:config.imgUrl+'/group/good.png',goodname:'福建广西盘丝洞过节费iOSA级个iOS就技术都放假哦啊发基调集散地偶发酒叟安静的佛家说我键哦ID沙发飞机哦',groupprice:'9.99',price:'39.99',needperson:1,endtime:'123131313',groupperson:2},
      groupperson:[
      {avator:config.imgUrl+"/myself/avator.jpg",captain:true},
      {avator:config.imgUrl+"/myself/avator.jpg",captain:false},
      {avator:config.imgUrl+"/myself/avator.jpg",captain:false}
      ],
      countdown:{}
    }
  },
 
  components: {
  Countdowns,
  Shopaddr,
 
  },
  methods: {
    cutTime(starttime,endtime){
      var that=this; 
      var leftTime = endtime - starttime;
      if (leftTime >= 0) {
        var interval = setInterval(function () {
        let cutTime={}
        cutTime.days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
        cutTime.hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
        cutTime.minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
        cutTime.seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
        leftTime = leftTime - 1000;
        that.countdown=cutTime      
        }, 1000)
        if (leftTime <= 0) {
          clearinterval(interval)
        }
      }
    }
  },
   mounted(){
     var that=this;
     var endtime=1541995932000
     var starttime = (new Date()).valueOf();
     // that.cutTime(starttime,endtime)
     wx.setNavigationBarTitle({
       title: "拼团成功"//页面标题为路由参数
     })
  }
}
</script>
<style scoped lang='scss'>
img{
  width: 100%;
  height: 100%;
  overflow:hidden;
}
.grouppanel{
  display: flex;
  margin-top: 20rpx;
  border-bottom: 3rpx solid #f3f3f3;
  padding-bottom: 20rpx;
  box-sizing:border-box;
  .left{
    width: 200rpx;
    height: 200rpx;
    overflow: hidden;
  }
  .right{
    flex-grow:1;
    .top{
      display: -webkit-box;
      width: 500rpx;
      line-height: 1.5;
      font-size: 0.9em;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color:#999;
    }
    .center{
      display: flex;
      width: 500rpx;
      margin-top: 10rpx;
      margin-bottom: 10rpx;
      justify-content: space-between;
      .centerleft{
        position: relative;
        .bcg{
          width:75px;
          height: 25px;
          overflow: hidden; 
        }
        .groupperson{
          position: absolute;
          top: 0;
          left: 55rpx;
          color:#fff;
          font-size: 0.7em;
          height: 25px;
          line-height: 25px;
        }
      }
      .centerright{
        font-size: 0.7em;
        span{
          color: #fc9632;
        }
      }

    }
    .bottom{
      width: 500rpx;
      display: flex;
      justify-content: space-between;
      font-size: 0.7em;
      .bottomleft{
        .groupprice{
          font-size: 20px;
          color: #fc9632;
        }
        .price{
          color: #999;
          text-decoration: line-through;
        }
      } 
    }
  }
}
.result{
  width: 190rpx;
  height: 120rpx;
  margin: 20rpx auto;
  overflow: hidden;
}
.userconten{
  display: flex;
  justify-content: center;
  .useravator{
    position: relative;
    width: 120rpx;
    height: 120rpx;
    overflow: hidden;
    margin-left: 10rpx;
    .captain{
      position: absolute;
      width: 140rpx;
      height: 45rpx;
      top: 0 ;
      left: -5rpx;
    }
  }
}
.tip{
  font-size: 0.8em;
  color: #999;
  text-align: center;
  width: 70%;
  margin: 0 auto;
}
.btn{
  height: 80rpx;
  line-height: 80rpx;
  width: 70%;
  background: linear-gradient(to right,#ee5033,#ca261d);;
  color: #fff;
  border-radius: 40rpx;
  margin: 30rpx auto;
  text-align: center;
}
</style>

