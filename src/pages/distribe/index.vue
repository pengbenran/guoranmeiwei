<template>
  <div class="distribe">
    <div class="head">
      <div class="title">可提现佣金</div>
      <div class="money">￥1000</div>
      <div class="btn">提现</div>
    </div>
    <div class="panel">
      <div class="panelitem">
        <p>0.00</p> 
        <p>累计佣金</p>
      </div>
      <div class="line"></div>
      <div class="panelitem">
        <p>3000</p> 
        <p>我的团队</p>
      </div>
    </div>
  </div>
</template>

<script>
 import Api from "@/utils/Api"
 import config from "@/config"
 let api=new Api
export default {
  components: {

  },

  data () {
    return {
  
    }
  },
  methods:{
   //选项点击加载   

  },
  async onLoad() {


  }
}
</script>

<style scoped lang='scss'>
.head{
  height: 350rpx;
  background: #fc9e39;
  width: 100%;
  color:#fff;
  text-align: center;
  .title{
    height: 120rpx;
    line-height: 120rpx;
  }
  .money{
    height: 100rpx;
    line-height: 100rpx;
    font-size: 2em;
  }
  .btn{
    background: #fff;
    width: 200rpx;
    color: #8e8e8e;
    border-radius: 30rpx;
    margin: 10rpx auto;
    font-size: 0.8em;

  }
}
.panel{
  width: 80%;
  margin:0 auto;
  height: 100rpx;
}

</style>
