<template>
  <div class="address">
    <div class="header">
        <div class="left"><i class="fa fa-map-marker" aria-hidden="true"></i>  收货地址</div>
        <div class="right">
            <i class="fa fa-trash-o" aria-hidden="true"></i> 
            <text @click="selectTo(1)" v-show='selectIndex==2'>删除地址</text><text  @click="selectTo(2)" v-show='selectIndex==1'>取消</text>
        </div>
    </div>
    <div class="addressList" v-if='addressList.length!=0'>
        <div class="item" v-for="(item,index) in addressList" :index='index' :key='item'>
            <div class="left">
                <div class="title">{{item.title}}</div>
                <div class="info">{{item.titleInfo}}</div>
                <div class="pople"><text>{{item.name}}</text> | <text>{{item.phone}}</text></div>
            </div>
            <div class="right">
                 <div class="deit" v-show='selectIndex==2'><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                 <div class="deit" v-show='selectIndex==1'><icon type="cancel" color='rgb(252,154,47)' size="18"/> <text>删除</text></div>
            </div>
        </div>
    </div>

     <div class="addressList" v-else><img :src="ImgList.addressImg" mode='aspectFit'/></div>
     <!--addressList end-->
     <div class="addresBtn" @click="toAddress"><text>添加新增收货地址</text></div>
     <!--addresBtn end-->
  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"
 import Barlist from "@/components/bargainlist"

export default {
  components: {
    Barlist
  },

  data () {
    return {
        ImgList:{addressImg:config.imgUrl+'/address/kong.png'},
        selectIndex:2,
        addressList:[{title:'江西省南昌市西湖区',titleInfo:'江西省南昌市西湖区洪城数码广场A座1101',name:'马登',phone:'15623140205'}]
    }
  },
  methods:{

    selectTo(index){
        let that = this;
        that.selectIndex = index;
    },
     //跳转
    toAddress(){
      wx.navigateTo({ url: '../address/main' });
    },
  },
  mounted(){
      console.log(this.addressList)
  },
  created () {
   
  }
}
</script>

<style scoped lang='scss'>
/*局部水平居中*/
@mixin flexc{
display: flex;align-items: center;
}

/*文本换行省略*/
@mixin fontM{
white-space:normal;overflow: hidden;display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;
}
img{display: block;height: 100%;width: 100%;}

.header{@include flexc;justify-content: space-between;font-weight: 100;font-size: 30rpx;padding:20rpx;border-bottom:1px solid rgb(245,245,245);
     .right{color: rgb(253,189,125);}
     .right text{margin-left: 10rpx;}
}

.addressList{padding: 10rpx 30rpx;
   .item{@include flexc;justify-content: space-between;padding: 15rpx 0;border-bottom:1px solid rgb(245,245,245);}
   .left .title{font-size: 32rpx;}
   .info,.pople{font-weight: 100;font-size: 26rpx;color: #666;}
   .deit{font-size: 38rpx;color: #666;}
   .deit text{font-weight: 100;font-size: 30rpx;color:rgb(252,154,47) }
}

.addressList{height: 900rpx;
    img{width: 70%;margin: auto}
}

.addresBtn{position: absolute;bottom: 40rpx;left: 5%;width: 90%;background:rgb(252,154,47);margin: auto;text-align: center;
   text{color: #fff;font-weight: 100;font-size: 32rpx;line-height: 80rpx;line-height: 80rpx;border-radius: 10rpx;}
}



</style>
