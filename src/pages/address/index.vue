<template>
  <div class="address">
     <div class="item"><text>收货人</text><input type="text" placeholder="请输入收货人" placeholder-style='font-size:26rpx;font-weight: 100;color:#8e8e8e;'/></div> 
     <div class="item"><text>手机号码</text><input type="text" placeholder="请输入手机号码" placeholder-style='font-size:26rpx;font-weight: 100;color:#8e8e8e;' /></div> 
     <div class="item itemModel"><text>所在地区</text><span @click="selectAddress">请选择地区</span></div> 
       <div class="AddressModel">
            <textarea placeholder='请选择地址' :value='addres'   placeholder-style='font-size:26rpx;font-weight: 100;color:#8e8e8e;'></textarea>
       </div>
    <div class="item"><text>详细地址：</text><input type="text" :value="addresInfo" placeholder="门牌号、街区号、单元号楼层" placeholder-style='font-size:26rpx;font-weight: 100;color:#8e8e8e;' /></div> 
    <div class="ico"> <switch :checked="switch1Checked" @change="switch1Change" color='#F44156'/></div>
    <div class="SubBtn"><text>完成</text></div>
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
          switch1Checked: true,
          addres:'',
          addresInfo:''
    }
  },
 methods:{
    //switch点击事件
    switch1Change(e){
         console.log('switch1 发生 change 事件，携带值为', e.mp.detail.value)
    },
    //selectAddress选择地址
    selectAddress(){
         let that = this;
        wx.chooseLocation({
            success: function (res) {
                that.addres = res.address;
                console.log('获取地址',res.address)
            }
        })
    }
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

.input-placeholder{font-size:20rpx;font-weight: 100;color:#8e8e8e;}
input,textarea{font-size: 32rpx;font-weight: 100;color: #000;}
.address{
    .item{@include flexc;font-size: 32rpx;font-weight: 100;padding: 10rpx 20rpx;}
    .item text{width: 25%;}
    .item input{width: 75%;}

}

.itemModel{justify-content: space-between;
 span{font-size: 26rpx;color: #fff;background:rgb(252,154,47);border-radius: 26rpx;padding: 0 10rpx;}
}
.ico{display: flex;justify-content: flex-end;padding: 10rpx 20rpx;}

.SubBtn{text-align: center;margin-top: 30rpx;
    text{display: inline-block;background: rgb(252,154,47);color: #fff;width: 90%;text-align: center;line-height: 80rpx;line-height: 80rpx;border-radius: 50rpx;}
}

.AddressModel{padding: 10rpx 30rpx;
    textarea{width: 100%;height: 75rpx;}
}


</style>
