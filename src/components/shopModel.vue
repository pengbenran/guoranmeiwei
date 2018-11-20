<template>
      <div class="modeWarp" v-if="modelShow" >
      <div class="ModelMask" ></div>
      <div class="Model" :animation='Animation'>
          <div class="colse" @click="hideModel">
              <i class="fa fa-times-circle-o" aria-hidden="true"></i>
          </div>
         <div class="ModelTop">
           <div class="topLeft"><img :src="GoodsInfo.thumbnail"/></div>
           <div class="topRight">
             <div class="title fontHidden">{{GoodsInfo.name}}</div>
             <div class="tagInfo">已选 <text>{{TagInfo}}</text></div>
             <div class="Price"><text>￥{{GoodsInfo.price}}</text><text>库存：{{GoodsInfo.enableStore}}</text></div>
           </div>
         </div>
         <div class="Area" v-for="(item,Pindex) in Guige" :index='Pindex' :key='item'>
           <div class="AreaTile"><span class="icoHeight"></span> {{item.specName}}</div>
           <text v-for="(items,indexs) in item.value" :index='indexs' 
                                                   :key='items' @click="AreaselectClick(Pindex,indexs)" 
                                                   :class="items.selected?'active':''">{{items.specvalue}}</text>
         </div>
  
          <div class="ModelBtn"><span v-if='btnIndex == 1'>立即购买</span>
                                <span v-if='btnIndex == 2' @click="toCart">加入购物车</span></div>
      </div>

      </div>
    <!--Model end-->
</template>
<script>
 import Api from "@/utils/Api"
 import Lib from "@/utils/lib"

export default {
  props: ['GoodsInfo','modelShow'],
  data() {
      return {
              Animation:'',
              AreaselectIndex:0,
              WeightselectIndex:0,
              btnIndex:0,
              TagInfo:'',
              Guige:[]
      }
  },
  methods: {
     //选中事件
     AreaselectClick(Pindex,indexs){
         let that = this;
         let TagInfo =''
         that.Guige = that.Guige.map((v,index) =>{
           if(index == Pindex){
            v.value.map(s =>{
              s.selected = false
              return s
            })
           }
           return v
         })
         that.TagInfo = that.TagInfo + that.Guige[Pindex].value[indexs].specvalue;
       
         console.log("选中输出",that.TagInfo)
         that.Guige[Pindex].value[indexs].selected = true
     },
   
     //点击隐藏
     hideModel(){
         let that=this;
         //通过子组件触发父组件
         that.$emit('hideModel')
     },

    //父组件触发的方法
     emitEvent(index,Guige){
     let that = this;
     that.btnIndex = index;
     that.Guige = Guige
      let animation = wx.createAnimation({
        duration: 200, timingFunction: 'linear', delay: 100,  transformOrigin: 'left top 0',
          success: function(res) {
              console.log(res)
            }
      })
        animation.translateY(300).step()
          //输出动画
        that.Animation=animation.export()
        that.modelShow=true;
        setTimeout(function () {
        animation.translateY(0).step()
          that.Animation=animation.export()
        }.bind(that), 100)
    },

    //点击加入购物车
    toCart(){
      this.$emit('toCart')
    }
  },
  
  mounted(){
    console.log(this.GoodsInfo,"商品信息")
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
.modeWarp{height: 100vh;position: fixed;left: 0;top: 0;width: 100%;}
.ModelMask,.Model{position: fixed;left: 0;width: 100%;height: 100%;}
.ModelMask{z-index: 1;top: 0;background: rgba(0, 0, 0, 0.400);}
.Model{z-index: 2;bottom: 0;height: 900rpx;background: #fff;border-top-left-radius: 20rpx;border-top-right-radius: 20rpx;
      .ModelTop{@include flexc;font-weight:100;padding: 15rpx 15rpx;border-bottom: 2px solid rgb(247,247,247); }
      .ModelTop .topLeft{width: 35%}
      .ModelTop .topLeft img{width: 250rpx;height: 250rpx;}
      .ModelTop .topRight{width: 65%;}
      .topRight .title{font-size: 32rpx;color: #666;}
      .topRight .tagInfo{margin-top: 15rpx;font-size: 26rpx;color: #8e8e8e;}
      .topRight .tagInfo text{color:rgb(255,107,79);}
      .topRight .Price{margin-top: 10rpx;@include flexc;justify-content: space-between;font-size: 24rpx;color: rgb(255,107,79);}
      .topRight .Price text{font-size: 32rpx;}

      .Area{padding: 10rpx 15rpx;
          .AreaTile{@include flexc;font-weight: 100;padding:20rpx 15rpx;color: #666;font-size: 34rpx;}
          text{margin: 10rpx 15rpx;padding: 20rpx 35rpx;color: #666;background: rgb(244,244,244);font-size: 30rpx;font-weight: 100;border-radius: 15rpx;}
          .icoHeight{display: inline-block;height: 40rpx;margin-right: 20rpx;width: 5rpx;background: rgb(255,107,79);}
          .active{color: rgb(253,146,63);border:1px solid rgb(253,146,63);background: #fff;}
      }
      .colse{position: absolute;right: 20rpx;top: -60rpx;color: #fff;font-size: 45rpx;font-weight: 100;}
    }
    .ModelBtn{position: fixed;z-index: 3;left: 0;bottom: 20rpx;width: 100%;}
     .ModelBtn span{
       display: block;width: 90%;margin: auto;line-height: 80rpx;text-align: center;border-radius: 40rpx;background: rgb(254,102,3);color: #fff;font-weight: 100;
     }
</style>
