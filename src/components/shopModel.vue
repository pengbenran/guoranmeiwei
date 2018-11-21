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
             <div class="tagInfo">已选 <text>{{space}}</text></div>
             <div class="Price"><text>￥{{GoodsInfo.price}}</text><text>库存：{{GoodsInfo.enableStore}}</text></div>
           </div>
         </div>
         <div class="Area" v-for="(item,Pindex) in Guige" :index='Pindex' :key='item'>
           <div class="AreaTile"><span class="icoHeight"></span> {{item.specName}}</div>
           <text v-for="(items,indexs) in item.value" :index='indexs' 
                                                   :key='items' @click="AreaselectClick(Pindex,indexs)" 
                                                   :class="items.selected?'active':''">{{items.specvalue}}</text>
         </div>
          <div class="ModelNum"><text>数量：</text>
             <div class="priceright">
                <i class="fa fa-minus" aria-hidden="true" @click="Minu()"></i>
                  <span>{{Num}}</span>
                <i class="fa fa-plus" aria-hidden="true" @click="Plus()"></i>
             </div>
          </div>
          <div class="ModelBtn"><span v-if='btnIndex == 1' @click="toNext">立即购买</span>
                                <span v-if='btnIndex == 2' @click="toCart">加入购物车</span></div>
      </div>

      </div>
    <!--Model end-->
</template>
<script>
 import Api from "@/utils/Api"
 import Lib from "@/utils/lib"
let api = new Api
export default {
  props: ['GoodsInfo','modelShow'],
  data() {
      return {
              Animation:'',
              AreaselectIndex:0,
              WeightselectIndex:0,
              btnIndex:0,
              Num:1,
              count:0,
              goodsId:0,
              productId:0,
              TagInfo:'',
              space:'',
              Guige:[]
      }
  },
  methods: {
     //选中事件
    async AreaselectClick(Pindex,indexs){
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
         that.Guige[Pindex].value[indexs].selected = true
         let count = 0;
         that.Guige.map((v,index) =>{
            v.value.map(s =>{
              if(s.selected == true){
                 count++
              }
            })
         })
         that.count = count

        
        console.log("选中参数",count,that.Guige.length,that.Guige)
         if(count == that.Guige.length){
             let specValueId = ''
             let space =''
             that.Guige.map(v => {
                v.value.map(s => {
                  if(s.selected == true){
                    specValueId = specValueId + s.specValueId
                    space = space + s.specvalue
                  }
                })
             })
             that.space = space
             let goodparms = {}
             goodparms.goodsId = that.goodsId
             goodparms.specs = specValueId.slice(0,-1);
             let res = await api.GetProduct(goodparms)
             console.log("查看子组件商品信息",res)
             if(res.data.code == 0){
               that.productId = res.data.product.productId
               that.GoodsInfo.price = res.data.product.price
               that.GoodsInfo.cost = res.data.product.cost
               that.GoodsInfo.enableStore = res.data.product.enableStore
             }else{
               that.GoodsInfo.enableStore = 0
             }
              that.$emit('selectSpac',that.space)
         }
     },
   
     //点击隐藏
     hideModel(){
         let that=this;
         //通过子组件触发父组件
         that.$emit('hideModel')
     },

    //父组件触发的方法
     emitEvent(index,Guige,goodsId,productId){
     let that = this;
     that.space = ''
     that.btnIndex = index;
     that.goodsId = goodsId
     that.productId = productId
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
      this.$emit('toCart',this.count)
    },
    
    //立即购买
    toNext(){
      this.$emit('toNext')
    },

    Plus(){
      this.Num +=1
      this.$emit('Num',this.Num)
    },
    Minu(){
      if(this.Num>0){
         this.Num -=1
        this.$emit('Num',this.Num)
      }
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
     .ModelNum{@include flexc;justify-content: space-between;padding: 20rpx;font-weight: 100;font-size: 32rpx;}
    .priceright{background:#e7e7e7;@include flexc;height: 48rpx;
     i{color: #fff;display: inline-block;width: 48rpx;height: 30rpx;line-height: 30rpx;text-align: center;font-weight: 100;font-size: 28rpx;}
     span{background: #fff;display: inline-block;width: 30rpx;text-align: center;height: 40rpx;line-height: 40rpx;color: rgb(248,193,92);padding:0 15rpx;font-size: 28rpx;}
   }
</style>
