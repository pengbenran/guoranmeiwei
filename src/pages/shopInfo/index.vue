<template>
  <div class="shopList">
    <div class="fenIco" @click="fenclick(true)"><img :src="ImgList.fenIco"/></div>
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
         <text>快递包邮</text>  <text>库存:{{Goods.enableStore}}</text>
     </div>
    <!--Price end-->

    <div class="PriceInfo">
        <div class="Box1"><text>积分</text><text>购买可得{{Goods.point}}积分</text></div>
        <div class="Box1"><text>优惠券</text><text class="juan" @click="toCoupon('/pages/coupon/main')">领劵 ></text></div>
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
         <div class="leftItme"><img :src="ImgList.home" @click="toIndex('/pages/index/main')"/><text>首页</text></div>
         <div class="leftItme">
            <button class='homepage custom' open-type="contact" session-from="weapp"><img :src="ImgList.kefu" @click="kefu"/><text>客服</text> </button>
         </div>
         <div class="leftItme"  @click="collection">
          <img :src="ImgList.noshouChang" v-if="posts" />
          <img :src="ImgList.shouChang" v-if="!posts"/>
          <text>收藏</text></div>
       </div>
       <div class="right">
         <div class="btnWarp">
            <text @click="showModel(2)">加入购物车</text><span></span><text @click="showModel(1)">立即购买</text>
         </div>
       </div>
     </div>
     <!--footerBnt end-->


  <div class="footerMode" v-if="footerModel">
    <div class="footerMask" @click="fenclick(false)"></div>
    <div class="footerWarp">
      <button class="fen" open-type="share"><img :src="ImgList.wxfen"/><text>分享</text></button>
      <div class="line"></div>
      <div class="fen" @click="eventDraw"><img :src="ImgList.haibao"/> <text>海报</text></div>
     
    </div>
  </div>
  <!--footerMode END-->


    <div class='canvas' v-if='maskmodel'>
    <div class='modelcard'>
      <div class='model'>
        <!-- <img :src="shareImage" class="share-image"/> -->
        <!-- <image :src="shareImage" class="share-image"></image> -->
        <canvasdrawer :painting="painting" class="canvasdrawer" @getImage="eventGetImage"/>
      </div> 

      <div class="BtnWarp">
        <!-- <div class='modelbtn'  @click="eventSave">保存本地</div>
        <div class='modelbtn modelbtntop' @click='guanbi'>关闭</div> -->
      </div>
      </div>
    </div>
  <!--modelcard end-->

  <div class="ShopCart"  @click="toIndex('/pages/cart/main')"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>

  <Model :GoodsInfo='Goods' 
         :modelShow='modelShow' 
         @toCart='toCart' 
         @toNext='toNext'
         @Num='Num'
         @selectSpac='selectSpac'
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
                   qiang:config.imgUrl+'/discount/qiang.png',wenhao:config.imgUrl+'/discount/wenhao .png',
                   fenIco:config.imgUrl+'/shop/fenico.png',wxfen:config.imgUrl+'/shop/wxfen.png',haibao:config.imgUrl+'/shop/haibao.png',
 
          },
          posts:false,
          maskmodel:false,
          footerModel:false,
          Gallery:[],
          Goods:{},
          Guige:[],
          painting:{},
          shareImage:'',
          space:'',
          pic:1,
          count:0,
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
    //  console.log("商品信息",that.goodsId,that.memberId)
     let res = await api.getGoods(that.goodsId,that.memberId)

     that.Gallery = res.data.Gallery;
     that.Goods = res.data.Goods;

     if (res.data.count == 0) {
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
      that.Guige = []
    }
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
    async toCart(count){
      let that = this;
      that.count = count
      // console.log("购物车触发事件",count)
      if(wx.getStorageSync('memberId') == "00"){
       Lib.Show("你还没有登录","success",1000)
       setTimeout(function(){
         wx.navigateTo({ url: '/pages/myself/main' });
       },1000)
      }else{
        if(that.Goods.enableStore == 0){
          Lib.Show("暂无库存","success",1000)
        }else{
          let cartparms = {};
          cartparms.productId = that.productId
          cartparms.original = that.Goods.thumbnail
          cartparms.memberId = that.memberId
          cartparms.goodsId = that.Goods.goodsId,
          cartparms.itemtype = that.Goods.typeId,
          cartparms.image = that.Goods.thumbnail
          cartparms.num = that.pic,
          cartparms.point = that.Goods.point
          cartparms.weight = that.Goods.weight,
          cartparms.name = that.Goods.name,
          cartparms.price = that.Goods.price
          cartparms.cart = 1//判断购物车订单
          console.log("查看购物车信息",cartparms)

           if (that.Goods.haveSpec == 0) {
             cartparms.specvalue = null;
             let res = await api.toCartSave(cartparms)
             Lib.Show("添加成功","success",2000)
             that.hideModel()
           }else{
             cartparms.specvalue = that.space;
             if (that.count == that.Guige.length) {
               let res = await api.toCartSave(cartparms)
               Lib.Show("添加成功","success",1000)
               that.hideModel()
             }else{
               Lib.Show("请选择规格","success",1000)
             }
           }
        }
      }
    },
    
    //立即购买
    toNext(){
      let that = this;
      if(wx.getStorageSync('memberId') == '00'){
         let res = Lib.ShopModel("提示","你还未登录,是否登录")
      }else{
        if(that.pic > that.Goods.enableStore){
          Lib.Show("库存不够","success",2000)
        }else{
          //定义接收对象
          var googitem = [];
          var Goods = {};
          let GoodsLIst = []
          let GoodsInfo = that.Goods;
          let GoodsItem = ''
          
          //商品信息赋值
          GoodsInfo.specvalue = that.space
          GoodsInfo.cart = '0'
          GoodsInfo.image = that.Goods.thumbnail
          GoodsInfo.num = that.pic
          GoodsInfo.productId = that.productId
          delete GoodsInfo.intro
          
          //封装数据传值
          GoodsLIst[0] = GoodsInfo
                    // console.log("你好世界12313212",GoodsInfo,GoodsLIst[0])
          Goods.googitem = GoodsLIst
          Goods.gainedpoint = that.pic * that.Goods.point
          Goods.weight = that.pic * that.Goods.weight
          Goods.goodsAmount = that.pic * that.Goods.price
          Goods.shippingAmount = 2
          GoodsItem = JSON.stringify(Goods)

           if(GoodsLIst == undefined){return}
            wx.navigateTo({ url: '/pages/orderOne/main?gooditem='+GoodsItem+'&cart=0' });

        }
      } 
    },

    //点击生成海报
   async eventDraw(){
     let that = this;
     that.maskmodel=true;
     Lib.Loading("图片绘制中")
     let res = await api.GetShare('pages/index/main',that.goodsId)
     let ImgArr = [res.data,that.Goods.thumbnail]
     let ImgRes = await Lib.getImageInfo(ImgArr)
         that.painting={
              width: 375,
              height: 510,
              clear: true,
                   views: [
                   {
                    type: 'image',
                    url: ImgRes[1],
                    top: 0,
                    left: 0,
                    width: 375,
                    height: 375
                  },
                   {
                    type: 'rect',
                    background: '#fff',
                    top: 375,
                    left: 0,
                    width: 385,
                    height: 140
                  },
                   {
                    type: 'image',
                    url: ImgRes[0],
                    top: 410,
                    left: 260,
                    width: 90,
                    height: 90
                  },
                  {
                    type: 'text',
                    content: that.Goods.name,
                    fontSize: 13,
                    color: '#666',
                    textAlign: 'left',
                    breakWord: true,
                    left: 15,
                    top: 390,
                    width:300
                  },
                  {
                    type: 'text',
                    content: '新鲜水果',
                    fontSize: 13,
                    color: '#ccc',
                    textAlign: 'left',
                    breakWord: true,
                    left: 15,
                    top: 430,
                    width:130
                  },
                   {
                    type: 'text',
                    content: '新鲜水果',
                    fontSize: 13,
                    color: '#ccc',
                    textAlign: 'left',
                    breakWord: true,
                    left: 85,
                    top: 430,
                    width:130
                  },
                  {
                    type: 'text',
                    content: '价格',
                    fontSize: 15,
                    color: '#FB8621',
                    textAlign: 'left',
                    breakWord: true,
                    left: 15,
                    top: 470,
                    width:130
                  },
                   {
                    type: 'text',
                    content: '￥'+that.Goods.price,
                    fontSize: 20,
                    color: '#FB8621',
                    textAlign: 'left',
                    bolder: true,
                    left: 45,
                    top: 465,
                    width:130
                  },
                
              ]
            }
   },


    eventSave() {
      wx.saveImageToPhotosAlbum({
        filePath: this.shareImage,
        success(res) {
          wx.showToast({
            title: '保存图片成功',
            icon: 'success',
            duration: 2000
          })
        }
      })
    },

    eventGetImage(event) {
      console.log("执行了吗")
      console.log(event)
      wx.hideLoading()
      console.log("s99",event)
      console.log("s88",event.mp.detail)
      const { tempFilePath, errMsg } = event.mp.detail

      if (errMsg === 'canvasdrawer:ok') {
          this.shareImage=tempFilePath
          wx.previewImage({
            current: this.shareImage, // 当前显示图片的http链接
            urls: [this.shareImage] // 需要预览的图片http链接列表
          })
          this.maskmodel = false
      }
    },

    //商品数量
    Num(num){
     let that = this;
     that.pic = num;
     console.log("查看数量",num)
    },
    
    //子组件规格
    selectSpac(space){
     this.space = space
    },

    //立即购买淡出模态框
    showModel(index){
     let that = this;
     that.modelShow=true;
     //父组件控制子组件
     that.$refs.childs.emitEvent(index,that.Guige,that.goodsId,that.productId);
    },

    hideModel(){
       //是否传值
     let that = this;
     that.modelShow=false;
     console.log("点击了吗",that.modelShow)
    },

   //点击分享按钮
   fenclick(bool){
    this.footerModel = bool;
   },

   //跳转
   toCoupon(url){
     console.log("判断点击",url)
    wx.navigateTo({ url: url });
   },
   
   //跳转首页
   toIndex(url){
    wx.switchTab({ url: url });
   },

   kefu(){
     //触发打电话
     let that = this;
      wx.makePhoneCall({
        phoneNumber: '158XXXXXXXX',
      })
   }
  },
  async mounted(){
    let that = this;
    console.log(this.$root.$mp.query,"你好世界")
    that.goodsId = this.$root.$mp.query.goodsId;
    // console.log(this.$root.$mp.query,"你好世界",that.goodsId)
    that.catId =  this.$root.$mp.query.catId;
    that.memberId = wx.getStorageSync('memberId');
    
    //获取商品信息
    that.SelectShopInfo();
  },
    onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '果冉回味',
      path: '/shopinfo/main?goodsId='+this.goodsId
    }
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
.leftItme {
  button{line-height: 36rpx;background: #fff;}
  button::after{border: none;}
}
.footerBnt{@include flexc;justify-content: space-between;padding: 10rpx 2%;position: fixed;bottom: 0;width:96%;background: #fff;box-shadow: 0 10rpx 30rpx rgba(0, 0, 0, 0.164) ;
  .left{width: 45%;}
  .left img{width: 58rpx;height: 58rpx;margin: auto;}
  .left text{color: rgb(117,117,117);font-size: 28rpx;font-weight: 100;}
  .right{width: 55%;}
  .btnWarp{background-image: -webkit-linear-gradient(0deg,rgb(252,148,53), rgb(255,191,3));border-radius: 45rpx;height: 75rpx;line-height: 75rpx;}
  .btnWarp text{font-size: 32rpx;color: #fff;font-weight: 100;padding: 0 15rpx;}
  .btnWarp span{width: 2rpx;height: 35rpx;background-color: #fff;}
}

.fenIco{position: absolute;right: 15rpx;top: 15rpx;z-index: 2;border-radius: 50%;
  img{height: 55rpx;width: 55rpx;}
}

.footerMode{position:fixed;top: 0;left: 0;height: 100vh;width: 100%;
   .footerMask{height: 100%;width: 100%;background: rgba(0, 0, 0, 0.15);}
   .footerWarp{position: absolute;bottom: 0;background: #FFF;height: 150rpx;width: 100%;@include flexc;justify-content: space-between}
   .footerWarp text{font-weight: 100;font-size: 34rpx;}
   .footerWarp .fen{width: 48%;text-align: center;}
   .footerWarp button{background: rgba(255, 255, 255, 0);line-height: 50rpx;}
   .footerWarp button::after{border:none;}
   .fen img{width: 75rpx;height: 75rpx;margin: auto}
   .line{height: 60rpx;width: 1px;background: #ccc;}
}

/* 海报样式 */
.canvas{z-index: 10;position: absolute;top: 0;left: 0;background: rgba(0, 0, 0, 0.600);height: 100vh;width: 750rpx;}
/* .model{height: 700rpx;width: 100%;} */
.model{width: 750rpx;}
.model image{width:750rpx;height: 932rpx;}

.modelbtn{width: 85%;line-height: 75rpx;border:1px solid #ff7903;;color:#fff;margin: auto;text-align: center;border-radius: 20rpx;}
.modelcard{padding-top: 60rpx;}

.BtnWarp{display:flex;align-items: center;margin-top: 15rpx;
  .modelbtn{width: 230rpx;color: #ff7903}
}

.ShopCart{position: fixed;right: 0;bottom: 180rpx;text-align: center;width: 60rpx;height: 60rpx;line-height: 60rpx;background:rgba(0, 0, 0, 0.103);border-radius: 50%;
   i{color: #fff;}
}


</style>
