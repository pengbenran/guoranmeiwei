<template>
  <div class="helpdiscount">
<!--     <div class='cutpanel'>
      <div class='userInfo'>
        <div class='userImg'>
          <image src="{{memberCut.face}}"></image>
        </div>
        <text>{{memberCut.uname}}</text>
      </div>
      <div class='title'>我发现一件好货，请大侠帮忙砍一刀</div>
      <div class='good'>
        <div class='goodleft'>
          <div class='goodImg'>
            <image src='{{goodImg}}'></image>
          </div>
        </div>
        <div class='goodright'>
          <div>{{goodname}}</div>
          <div class='acttime'>距离活动剩余{{countDownDay}}天{{countDownHour}}小时{{countDownMinute}}分
          {{countDownSecond}}秒</div>
        </div>
      </div>
      <div class='box'>
        <div class='small-box1'>
          <div class='small-top' style="left:{{percent-9}}%">
            <div class='top_bcg'>
             <image src='https://shop.yogain.cn/simages/image/group/06.png'></image>
           </div> 
           <div class='top-tu'>￥{{cutTotal}}</div> 
           <div class='top-tu'>￥{{cutTotal}}</div>
         </div>
         <div class='small-cont'>
          <progress class="progress" percent="{{percent}}" radius="50px" show-info="{{isSi}}" stroke-width="{{sw}}" activeColor="{{pc}}" backgroundColor="{{pbc}}" active="{{isActive}}" active-mode="forwards">
          </progress>
        </div>
        <div class='small-bottom'>
          <text>原价：￥{{cutGood.initPrice}}.00</text>
          <text>最低：￥{{cutGood.belowPrice}}.00</text>
        </div>
      </div>
    </div>
    <div class='tip'>{{cutStatus}} </div>
    <div class='btngroup' wx:if="{{!isCut}}">
      <div class='help' bindtap='helpcut' data-statu="open">帮他补一刀</div>
      <div class='needmyself' bindtap='gocutlist'>我也想要</div>
    </div> 
    <div class='btnmyslf'  bindtap='gocutlist' wx:if="{{isCut}}">我也想要</div>

  </div>
  分享砍价模态框
  <div class="drawer_screen" data-statu="close" wx:if="{{showModalStatus1}}"></div>
  <div animation="{{animationData}}" class="drawer_box" wx:if="{{showModalStatus1}}">
    <div class='cular' bindtap="modelClose" data-statu="close">
      <image src='https://shop.yogain.cn/simages/imgs/kx.png'></image>
    </div>
    <text class='mueb'>{{cutResult.cutMoney}}<text class='yuan'>元</text></text>
  </div> -->
</div>
</template>

<script>
import Api from "@/utils/Api";
import config from "@/config"
export default {
  data() {
    return {
  
    }
  },
  onLoad(options){
    let that=this
    // that.needhelpmemberId = options.memberId;
    // that.goodsId=options.goodsId;
    that.cutId=4;
     //页面渲染完成创建一个动画
    that.getGood()
    that.getByCut()
  },
  components: {

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
    },
    async getGood(){
    let that=this
    let goodsRes=await api.getGoods(that.goodsId,that.needhelpmemberId)
    that.Gallery=goodsRes.data.Gallery
    that.Goods=goodsRes.data.Goods
    },
    async getByCut(){
      let that=this
      var starttime = (new Date()).valueOf();
      let cutDetailRes=await api.getByCutId(that.cutId)
      that.cutGood=cutDetailRes.data
      that.cutTime(starttime,that.cutGood.endtime)
    },
  }
}
</script>
<style scoped lang='scss'>


</style>

