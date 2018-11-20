<template>
  <div class="shopList">
    <div class="header">
        <swiper class="swiper" indicator-dots='true' autoplay='true'>
          <swiper-item v-for="(item,index) in Gallery" :index='index' :key='item'><img :src="item.original"></swiper-item>
        </swiper>
    </div>
    <!--header end-->

     <div class="PriceTitle fontHidden">
         {{Goods.name}}
     </div>
     <div class="Price">
         <text class="new">￥{{Goods.price}}</text><text class="old">￥19.90</text>
     </div>
     <div class="PriceTag">
         <text>快递包邮</text>  <text>库存:{{Goods.enableStore}}</text>  <text>江西南昌</text>
     </div>
    <!--Price end-->

    <div class="PriceInfo">
        <div class="Box1"><text>积分</text><text>购买可得{{Goods.point}}积分</text></div>
        <div class="Box1"><text>优惠券</text><text class="juan" @click="toCoupon">领劵 ></text></div>
    </div>
    <!--PriceInfo end-->

    <div class="Info">
        <div class="InfoTop"><img :src="ShopTopImg" mode='aspectFit'/></div>
        <div class="Infocontent">
  <wxParse :content="Goods.intro" @preview="preview" @navigate="navigate" />
        </div>
    </div>
    <!--Info end-->
        <div class="HeightDiv"></div>
     <div class="footerBnt">
       <div class="left">
         <div class="leftItme"><img :src="ImgList.home" /><text>首页</text></div>
         <div class="leftItme"><img :src="ImgList.kefu" /><text>客服</text></div>
         <div class="leftItme"  @click="collection">
          <img :src="ImgList.noshouChang" v-if="posts" />
          <img :src="ImgList.shouChang" v-if="!posts"/>
          <text >收藏</text></div>
       </div>
       <div class="right">
         <div class="btnWarp">
            <text @click="showModel(2)">加入购物车</text><span></span><text @click="showModel(1)">立即购买</text>
         </div>
       </div>
     </div>
     <!--footerBnt end-->
  <Model :GoodsInfo='Goods' 
         :modelShow='modelShow' 
         @toCart='toCart' 
         @hideModel='hideModel' ref="childs"></Model>

  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import Lib from "@/utils/lib"
 import config from "@/config"
 import Tabs from "@/components/tab.vue"
 import ShopTit from "@/components/shopaddr.vue"
 import wxParse from 'mpvue-wxparse'
 import Model from "@/components/shopModel"

 let api= new Api 
export default {
  components: {
     Tabs,
     ShopTit,
     wxParse,
     Model
  },
   
  data () {
    return {
          Area_item:[{AreaName:'湖北'},{AreaName:'江西'}],
          Weight_item:[{WeightName:'1kg'},{WeightName:'2kg'}],
          modelShow:false,
          brand:config.imgUrl+'/group/header01.jpg',
          topImg:config.imgUrl+'/cart/home.jpg',
          ShopTopImg:config.imgUrl+'/shop/shopImg.jpg',
           ImgList:{home:config.imgUrl+'/group/home.png', kefu:config.imgUrl+'/group/kefu.png',
                   noshouChang:config.imgUrl+'/group/shoucan.png',shouChang:config.imgUrl+'/group/shoucang.png',
                   touxiang:config.imgUrl+'/group/touxiang.jpg', btnInfoImg:config.imgUrl+'/group/TionInfo.jpg', 
                   qiang:config.imgUrl+'/discount/qiang.png',wenhao:config.imgUrl+'/discount/wenhao .png'
          },
          posts:false,
          Gallery:[],
          Goods:{},
          Guige:[],
          adjuncts:[],
          memberId:'',
          goodsId:'',
          catId:'',
          productId:''
    }
  },
  methods:{
   //获取用户信息
   async SelectShopInfo(){
     let that = this;
     let goodparms = {}
     goodparms.goodsId = that.goodsId
     let res = await api.getGoodsInfo(goodparms)
     that.Gallery = res.data.Gallery;
     that.Goods = res.data.Goods;
     if (res.data.Goods.count == 0) {
        that.posts= false
      } else {   
        that.posts= true
      }
    //判断是否开启规格
    if(res.data.Goods.haveSpec!=0){
      let Guige= JSON.parse(res.data.Goods.adjuncts)
      that.Guige = Guige.map(v =>{
        v.value = v.value.map(s =>{
            s.selected = false
            return s
        })
        return v
      })
    }else{
      let res = await api.GetProduct(goodparms)
      that.productId = res.data.product.productId
      that.adjuncts = []
      console.log("我的商品信息2",res)
    }

    console.log("商品1231321",that.Goods)
   },
    async collection(){
      let that=this
      let favorite = {}
      favorite.memberId = that.memberId
      favorite.goodsId = that.Goods.goodsId
      if(that.posts){
        let delCollectionRes=await api.delCollection(favorite)
       if(delCollectionRes.data.code==0){
          wx.showToast({
            title: '取消收藏',
            icon: 'success',
            duration: 2000
          })
          that.posts=!that.posts
        }
      }
      else{
        let addCollectionRes=await api.addCollection(favorite)
        if(addCollectionRes.data.code==0){
          wx.showToast({
            title: '收藏成功',
            icon: 'success',
            duration: 2000
          })
          that.posts=!that.posts
        }
      }
    },
    
    //加入购物车
    toCart(){
      let that = this;
      console.log("购物车触发事件")
      if(wx.getStorageSync('memberId') == "00"){
       Lib.Show("你还没有登录","success",1000)
       setTimeout(function(){
         wx.navigateTo({ url: '/pages/myself/main' });
       },1000)
      }else{
        if(that.Goods.enableStore == 0){
          Lib.Show("暂无库存","success",1000)
        }else{
          // let cartparms = {};
          // cartparms.productId = that.productId
          // cartparms.original = that.Goods.thumbnail
          // cartparms.memberId = that.data.memberId
          // cartparms.goodsId = that.data.goodDetail.goodsId,
          // cartparms.itemtype = that.data.goodDetail.typeId,
          // cartparms.image = that.data.goodDetail.thumbnail
          // cartparms.num = that.data.pic,
          // cartparms.point = that.data.goodDetail.point
          // cartparms.weight = that.data.goodDetail.weight,
          // cartparms.name = that.data.goodDetail.name,
          // cartparms.price = that.data.goodDetail.price
          // cartparms.cart = 1//判断购物车订单
        }
      }
    },

    //立即购买淡出模态框
    showModel(index){
     let that = this;
     that.modelShow=true;
     //父组件控制子组件
     that.$refs.childs.emitEvent(index,that.Guige);
    },

    hideModel(){
       //是否传值
     let that = this;
     that.modelShow=false;
     console.log("点击了吗",that.modelShow)
    },
   //跳转
   toCoupon(){
    wx.navigateTo({ url: '/pages/coupon/main' });
   }
  },
  async mounted(){
    let that = this;
    console.log(this.$root.$mp.query,"你好世界")
    that.goodsId = this.$root.$mp.query.goodsId;
    that.catId =  this.$root.$mp.query.catId;
    that.memberId = wx.getStorageSync('memberId');
    
    //获取商品信息
    that.SelectShopInfo();
  }

}
</script>

<style scoped lang='scss'>
@import url("~mpvue-wxparse/src/wxParse.css");
/*局部水平居中*/
@mixin flexc{
display: flex;align-items: center;
}

/*文本换行省略*/
@mixin fontM{
white-space:normal;overflow: hidden;display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;
}
img{display: block;height: 100%;width: 100%;}

.header{
.swiper{height: 380rpx;}
}

.PriceTitle{font-weight: 100;font-size: 34rpx;color: #666;padding: 0 25rpx;}
.Price,.PriceTag{font-weight: 100;color: #8e8e8e;padding: 0rpx 25rpx;}
.Price{
  .new{color: rgb(252,122,67);font-size: 36rpx;}
  .old{color: #8e8e8e;text-decoration:line-through;font-size: 26rpx;}
}

.PriceTag{@include flexc;justify-content: space-between;font-size: 26rpx;border-bottom: 1px solid rgb(248,248,248);padding: 15rpx 25rpx;;}

.PriceInfo{padding: 20rpx;
  .Box1{@include flexc;justify-content: space-between;font-weight: 100;font-size: 24rpx;margin-bottom: 10rpx;}
  .juan{color: rgb(253,130,75);}
}

.InfoTop img{margin: auto;width: 234rpx;height: 141rpx;}
.HeightDiv{height: 110rpx;}
.footerBnt .left,.btnWarp{@include flexc;justify-content: space-around;}
.leftItme{line-height: 28rpx;}
.footerBnt{@include flexc;justify-content: space-between;padding: 10rpx 2%;position: fixed;bottom: 0;width:96%;background: #fff;box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.164) ;
  .left{width: 45%;}
  .left img{width: 58rpx;height: 58rpx;margin: auto;}
  .left text{color: rgb(117,117,117);font-size: 28rpx;font-weight: 100;}
  .right{width: 55%;}
  .btnWarp{background-image: -webkit-linear-gradient(0deg,rgb(252,148,53), rgb(255,191,3));border-radius: 45rpx;height: 75rpx;line-height: 75rpx;}
  .btnWarp text{font-size: 32rpx;color: #fff;font-weight: 100;padding: 0 15rpx;}
  .btnWarp span{width: 2rpx;height: 35rpx;background-color: #fff;}
}


</style>
