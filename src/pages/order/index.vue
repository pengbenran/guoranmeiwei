<template>
  <div class="Order">
    <div class="TopTab">
      <div class="Item" :class="selectIndex == 1?'active':''"  @click="selectTo(1)"><i class="fa fa-clock-o" aria-hidden="true"></i> 预约自提</div>
      <div class="Item" :class="selectIndex == 2?'active':''"  @click="selectTo(2)"><i class="fa fa-paper-plane-o" aria-hidden="true"></i> 骑手派送</div>
    </div>
    <!--TopTab end-->

   <div class="ZitiTimeWarp"  v-show='selectIndex==1'>
      <div class="ZitiTime">
          <text>预约时间</text>
          <picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
            <view class="picker">
              {{time}}
            </view>
          </picker>
      </div>
    </div>
  <!-- ZitiTime end -->

    <div class="AddressWarp" v-show='selectIndex==2'>
      <div class="AddressBtn" v-if="isAddr" @click="toAddress">
          <i class="fa fa-plus" aria-hidden="true"></i><text>请填写收货地址</text>
      </div>
      <div class="Address" v-else @click="toAddresslist">
          <div class="Address-item">
              <div class="itemLeft">收货人</div>
              <div class="itemRight"><text>{{addr.name}}</text><text>{{addr.mobile}}</text></div>
          </div>
            <div class="Address-item">
              <div class="itemLeft">收货地址</div>
              <div class="itemRight">{{addr.addr}}</div>
          </div>
      </div>
     </div>
      <!--Address end-->

    <Shopaddr :shopname="shopname"></Shopaddr>
     
    <OrderList :Shop_List='shopList'></OrderList>
    <!--OrderList end-->

    <div class="OrderMask">
        <!-- <div class="MaskItem"><text>优惠券</text><text class="fensi">粉丝专享 ></text></div> -->
        <div class="MaskItem">
          <text>积分</text>
          <div class="jifen">可使用590积分，可抵扣5.90元  
            <icon type="circle" size="16" v-if="iconBool"/><icon type="success" size="16" v-else/>
          </div>
        </div>
        <div class="MaskItem"><text>备注:</text><input type="text" placeholder="填写你想和商家想说的" placeholder-style='font-size:26rpx;font-weight: 100;color:#8e8e8e;' v-model="msg"></div>
    </div>
    <!--OrderMask end-->

     <div class="footerBnt">
       <div class="selectBtn"></div>
       <div class="cartBtn"><div class="price">合计：{{shopList.activityPrice}}元<span>优惠：{{shopList.price-shopList.activityPrice}}元</span></div><div class="btn" @click="orderPay">结算</div></div>
     </div>
     <!--footerBnt end-->
  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"
 import Shopaddr from '@/components/shopaddr'
 import OrderList from '@/components/shopList'
 let api=new Api
export default {
  components: {
     OrderList,
     Shopaddr,
   
  },
   
  data () {
    return {
      ImgList:{topImg:config.imgUrl+'/cart/home.jpg',shopImg:config.imgUrl+'/cart/shopimg01.jpg'},
      shopname:"王小姐水果店(抚生路点)",
      shopList:{shopImg:'',shopTitle:'',mask:"你好世界",activityPrice:'',price:''},
      time: '12:01',
      selectIndex:1,
      isAddr:false,
      iconBool:true,
      Type:'',
      goodImg:'',
      goodname:'',
      addr:{},
      memberId:'',
      option:{},
      collagePersons:'',
      product:{},
      msg:''
    }
  },
  methods:{
    bindTimeChange: function (e) {
      let that = this;
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      that.time = e.mp.detail.value
    
    },
    //选择
    selectTo(index){
      let that = this;
      if(that.Type=="K"){
        wx.showToast({
          title: "拼团暂不支持自提",
          icon: "none",
          durantion: 2000
        })   
      }else{
        that.selectIndex = index;
      }
      
    },
    // 获取货品信息
    async getProduct(){
      let that=this
      let productRes=await api.getProduct(that.shopList.goodsId,that.memberId)
      that.product=productRes.data.product
    },
    //跳转
    toAddress(){
      wx.setStorageSync('options',this.option)
      wx.navigateTo({ url: '../address/main' });
    },
    toAddresslist(){
      wx.setStorageSync('options',this.option)
      wx.navigateTo({ url: '../addressList/main' });
    },
    orderPay(){
      let that=this
      if(that.Type=="K"){
        that.kaituan()
      }
    },
    kaituan(){
      let that=this
     if(that.addr == {}) {
      wx.showToast({
        title: '请添加地址',
      })
    }
    else{
        var bean = {}
        var goodObj={}
        wx.showLoading({
          title: '请稍等',
        })
        bean.image = that.shopList.shopImg
        bean.memberId = that.memberId
        bean.orderAmount = that.shopList.activityPrice
        bean.weight = 0
        bean.shippingAmount = 0
        bean.goodsAmount = that.shopList.activityPrice
        bean.googitem = []
        goodObj.price = that.shopList.price
        goodObj.name = that.shopList.shopTitle
        goodObj.num = 1
        goodObj.cart = 0
        goodObj.goodsId = that.shopList.goodsId
        // goodObj.catId = that.data.Goods.catId
        goodObj.image = that.shopList.shopImg
        goodObj.goodsAmount = that.shopList.activityPrice 
        goodObj.collagePersons = that.collagePersons
        goodObj.productId = that.product.productId
        bean.googitem[0] = goodObj
        // var googitem = that.data.list; 
        bean.province = that.addr.province
        bean.city = that.addr.city
        bean.addr = that.addr.addr
        bean.region = that.addr.region
        bean.shipMobile = that.addr.mobile
        bean.shipName = that.addr.name
        bean.addrId = that.addr.addrId
        bean.clickd = that.msg
        bean = JSON.stringify(bean)
       console.log(bean)
    }
    },
    //获取默认地址
    async getdefaultAddr(){
      let that=this
      let addParms = {}
      addParms.memberId = that.memberId
      let addressRes=await api.getdefaultAddr(addParms)
      if (addressRes.data.code == 1) {
        that.isAddr=false
      }
      else {
        that.addr=addressRes.data.memberAddressDO
      }
  }
},
  
  onLoad(options){
   var that=this
   that.option=options
   that.memberId= wx.getStorageSync('memberId')
   let pages = getCurrentPages();
   let prevpage = pages[pages-2];
   if(prevpage.route=="pages/addressList/main"){
      that.option=wx.getStorageSync('options')
      that.addr=wx.getStorageSync('addr')
   }
   else{
    that.option=options
    that.getdefaultAddr()
   that.Type= that.option.Type;
   }
   that.getProduct()
   if( that.option.Type=="K"){
     that.selectIndex=2
     that.shopList.shopImg= that.option.goodsImg;
     that.shopList.shopTitle= that.option.goodname;
     that.shopList.price= that.option.price;
     that.shopList.activityPrice= that.option.activityPrice;
     that.collagePersons=that.option.collagePersons
   }
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

.TopTab{@include flexc;padding: 25rpx 10rpx;margin-bottom: 15rpx;justify-content: space-around;border-bottom: 1px solid rgb(244,244,244);
   .Item{border:1rpx solid rgb(221,221,221);font-size:30rpx;color:rgb(221,221,221);padding: 12rpx 45rpx;border-radius: 10rpx;  }
   .active{border:1rpx solid rgb(253,93,5);color:rgb(253,93,5);}
}

.ZitiTime{@include flexc;justify-content: space-between;font-weight: 100;font-size: 32rpx;padding: 15rpx 25rpx;}

.AddressWarp{padding: 20rpx 0;}
.Address{padding: 10rpx 25rpx;border-bottom: 1px solid rgb(244,244,244);
    .Address-item{@include flexc;font-weight: 100;font-size: 32rpx;}
    .itemLeft{width: 30%;}
    .itemRight{width: 70%;@include flexc;justify-content: space-between;color: #8e8e8e;}
}
.AddressBtn{text-align: center;width: 90%;margin: auto;line-height: 75rpx;background: rgb(252,154,47);border-radius: 45rpx;color: #fff;font-weight: 100;font-size: 30rpx;
   text{display: inline-block;text-align: center;}
}

.OrderMask{font-size: 28rpx;font-weight: 100;color: #666;padding: 10rpx 20rpx;
    .MaskItem{@include flexc;justify-content: space-between;height: 75rpx;line-height: 75rpx;}
    .fensi{color: rgb(250,143,43);}
    .jifen{color: rgb(250,143,43);}
    .jifen icon{line-height: 12rpx;}
    input{width: 85%;}
}

.footerBnt{@include flexc;justify-content: space-between;position: fixed;bottom: 0;width: 100%;height: 95rpx; 
           box-shadow: 0px -7px 30px rgba(0,0,0,0.1);
    .selectBtn{@include flexc;padding-left: 15rpx;font-size: 36rpx;font-weight: 100;color: #8e8e8e;}
    .selectBtn icon{margin-right: 10rpx;}
    .cartBtn{display: flex;justify-content: center;font-size: 36rpx;font-weight: 100;color: #8e8e8e;}
    .price{height: 95rpx;margin-right: 15rpx;font-size: 34rpx;}
    .price span{display: block;font-size: 24rpx;color: rgb(252,110,1);}
    .btn{background-image: -webkit-linear-gradient(0deg, rgb(255,191,3), rgb(252,148,53));height: 95rpx;line-height: 95rpx; width: 180rpx;text-align: center;color: #fff;}
}


</style>
