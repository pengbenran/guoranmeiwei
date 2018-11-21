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
      <div class="AddressBtn" v-if="AddressBtn" @click="toAddress">
          <i class="fa fa-plus" aria-hidden="true"></i><text>请填写收货地址</text>
      </div>
      <div class="Address" v-else @click="toAddress">
          <div class="Address-item">
              <div class="itemLeft">收货人</div>
              <div class="itemRight"><text>马登</text><text>15083845338</text></div>
          </div>
            <div class="Address-item">
              <div class="itemLeft">收货地址</div>
              <div class="itemRight">江西省南昌市西湖区洪城数码广场1101</div>
          </div>
      </div>
     </div>
      <!--Address end-->

    <!-- <Shopaddr :shopname="shopname"></Shopaddr> -->
     
    <OrderList v-for="(item,index) in GoodItem.googitem" :index='index' :key='item' :Shop_List='item'></OrderList>
    <!--OrderList end-->

    <div class="OrderMask">
        <div class="MaskItem"><text>优惠券</text><text class="fensi">粉丝专享 ></text></div>
        <div class="MaskItem">
          <text>积分</text>
          <div class="jifen">可使用{{point}}积分，可抵扣5.90元  
            <icon type="circle" size="16" v-if="iconBool"/><icon type="success" size="16" v-else/>
          </div>
        </div>
        <div class="MaskItem"><text>备注:</text><input type="text" placeholder="填写你想和商家想说的" placeholder-style='font-size:26rpx;font-weight: 100;color:#8e8e8e;'></div>
    </div>
    <!--OrderMask end-->

     <div class="footerBnt">
       <div class="selectBtn"></div>
       <div class="cartBtn"><div class="price">合计：9.9元<span>优惠：5.6元</span></div><div class="btn">结算</div></div>
     </div>
     <!--footerBnt end-->
  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"
//  import Shopaddr from '@/components/shopaddr'
 import OrderList from '@/components/shopList'

let api = new Api
export default {
  components: {
     OrderList,
  },
   
  data () {
    return {
     ImgList:{topImg:config.imgUrl+'/cart/home.jpg',shopImg:config.imgUrl+'/cart/shopimg01.jpg'},
     shopname:"王小姐水果店(抚生路点)",
     shopList:[{shopImg:config.imgUrl+'/cart/shopimg01.jpg',shopTitle:'福建馆溪平柚子好吃好甜你好世界你好世界你好世界你好世界你好世界你好世界',mask:"你好世界",p1:19,p2:9},
          ],
      time: '12:01',
      selectIndex:1,
      AddressBtn:false,
      iconBool:true,
      GoodItem:[],
      Cart:'',
      paymoney:'',
      quanquan:'',
      gainedpoint:'',
      addr:[],
      point:''
    }
  },
  methods:{
    bindTimeChange: function (e) {
      let that = this;
      console.log('picker发送选择改变，携带值为', e.mp.detail.value)
      that.time = e.mp.detail.value
    
    },

    //判断是否有地址
    async SelectAdder(){
     let that =this;
     if(wx.getStorageSync('addr') == ''){
       let addParms = {}
       addParms.memberId = wx.getStorageSync('memberId');
       let res = await api.SelectAddre(addParms)
       console.log("获取地址",res)
       if(res.data.code){
          that.AddressBtn = true
       }else{
          that.addr = res.data.memberAddressDO
          that.AddressBtn = false
       }
     }else{
        that.addr=wx.getStorageSync('addr')
        that.AddressBtn = false
     }
    },
     
     //提交订单
     Order(){
       let that = this;
      if(that.Cart == 1){
        var orderamount = Number(that.GoodItem.goodsAmount).toFixed(2)
        let paymoney=0;
        let quanquan=0;
        that.GoodItem.gooditem.map(v => {
            paymoney=Number(paymoney*1+v.num * v.weight).toFixed(2)
            quanquan=Number(quanquan*1+v.num * v.point)
        })
        that.goodsAmount=orderamount;
        that.list=that.GoodItem.googitem;
        that.weight=that.GoodItem.weight;
        that.orderAmount=orderamount;
        that.gainedpoint= GoodItem.gainedpoint
      }
     },
     
     toast(){
          let that = this;
          if(that.addr == undefined){
            wx.showToast({ title: '请添加地址',})
          }else{
            let bean = {}
            let goodObj = {}
            let orderParms = {}
              wx.showLoading({
                title: '请稍等',
              })
              // 判断是否使用积分抵扣
              if (that.data.select == true) {
                if (that.data.goodsAmount - that.data.point_price <= 0) {
                  bean.orderAmount = 0.01
                  bean.consumepoint = parseInt((that.data.goodsAmount - 0.01) * indexdata.pointCash)
                } else {
                  bean.orderAmount = that.data.orderAmount - that.data.point_price
                  bean.consumepoint = that.data.point
                }
              }
              else {
                bean.orderAmount = that.data.orderAmount
                bean.consumepoint = 0
              }
          }
        },
    

    //选择
    selectTo(index){
      console.log("输出",index)
      let that = this;
      that.selectIndex = index;
    },
    //跳转
    toAddress(){
      wx.setStorageSync('GoodItem',this.GoodItem)
      wx.navigateTo({ url: '../address/main' });
    },
    toAddress(){
      wx.navigateTo({ url: '../addressList/main' });  
    },
  },
  mounted(){
    let that = this;
    //获取传过来的的参数
    
    console.log(JSON.parse(this.$root.$mp.query.gooditem),"这边拿到的商品参数")
    that.GoodItem =JSON.parse(this.$root.$mp.query.gooditem);
    that.Cart = this.$root.$mp.query.cart;
    that.point = wx.getStorageSync('point')
    console.log("你好世界",that.GoodItem )
    //判断跳转链接
    let pages = getCurrentPages();
    let prevpage = pages[pages.length - 2];
    console.log("查看页面",pages,prevpage)
    if(prevpage.route=="pages/addressList/main"){
        that.GoodItem = wx.getStorageSync('GoodItem')
        that.addr = wx.getStorageSync('addr')
      }  
      else{
        that.GoodItem = JSON.parse(this.$root.$mp.query.gooditem)
           //判断获取地址
        that.SelectAdder();
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
