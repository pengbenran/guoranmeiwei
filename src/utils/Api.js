 import Fly from "flyio/dist/npm/wx";
export default class Api{
  constructor() {
    this.baseUrl = "https://www.guqinjiujiang.xyz:8444/guqinzhen" 
    //this.baseUrl = "http://192.168.2.208/guoranhuiwei" 
    this.fly = new Fly;
    // this.fly.config.baseUrl=
  }

  //测试
  getMain(){
	return new Promise((resolve, reject) => {
      let res=this.fly.get(this.baseUrl +'/api/index/main')
      resolve(res)
	})   
  }
  //获取拼团列表
  getGroupList(){
    return new Promise((resolve, reject) => {
      let res=this.fly.get(this.baseUrl +'/api/collage/collageGoodsList')
      resolve(res)
  })   
  }
  // 获取商品详情
  getGoods(goodsId,memberId){
    return new Promise((resolve, reject) => {
      let goodsParms = {}
      goodsParms.goodsId = goodsId
      goodsParms.memberId = memberId
      let res=this.fly.get(this.baseUrl +'/api/Goods/getGoods',{parms:JSON.stringify(goodsParms)})
      resolve(res)
    })
  }
  // 获取货品详情
  getProduct(goodsId,memberId){
    let goodsParms = {}
    goodsParms.goodsId = goodsId
    goodsParms.memberId = 187
    let res=this.fly.get(this.baseUrl +'/api/collage/seleCollGoods/',{parms:JSON.stringify(goodsParms)})
    resolve(res)
  }
  //获取拼团详细数据
  getseleCollGoods(collageGoodsId){
    return new Promise((resolve, reject) => {
      let res=this.fly.get(this.baseUrl +'/api/collage/seleCollGoods/'+collageGoodsId)
      resolve(res)
    })
  }
  // 获取所有正在拼团的数据
  getallStartCollage(goodsId){
     return new Promise((resolve, reject) => {
      let res=this.fly.get(this.baseUrl +'/api/collage/allStartCollage',{goodsId:goodsId})
      resolve(res)
    })
  }
  // 根据code判断是否是会员
  getCode(){
   return new Promise((resolve, reject) => {
    var that = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          let memberRes=that.fly.get(that.baseUrl +'/api/byCode',{code:res.code})
          resolve(memberRes) 
        }
      }
    })
   })
  }
  // 获取用户信息并且注册会员
  weCatLogin(code,avatarUrl,nickName,gender,country,province,city){
    return new Promise((resolve, reject) => {
      let weLoginRes=this.fly.get(this.baseUrl +'/api/weCatLogin',{
                      code: code,//获取openid的话 需要向后台传递code,利用code请求api获取openid
                      headurl:avatarUrl,//这些是用户的图片信息
                      nickname:nickName,//获取昵称
                      sex:gender,//获取性别
                      country:country,//获取国家
                      province:province,//获取省份
                      city:city//获取城市
                    })
      resolve(weLoginRes) 
    })
  }
  // 获取会员信息
  getMemberInfo(memberId){
    return new Promise((resolve, reject) => {
    let userParms = {}
    userParms.memberId = memberId
    let userInfoRes=this.fly.get(this.baseUrl +'/api/member/memberIndex',{parms:JSON.stringify(userParms)})
    resolve(userInfoRes)
    })
  }
  // 收藏
  addCollection(parms){
   return new Promise((resolve, reject) => {
    let addCollectionRes=this.fly.post(this.baseUrl +'/api/favorite/add',{parms:parms})
    resolve(addCollectionRes)
   })
  }
  // 取消收藏
  delCollection(parms){
   return new Promise((resolve, reject) => {
    let delCollectionRes=this.fly.post(this.baseUrl +'/api/favorite/delete',{parms:parms})
    resolve(delCollectionRes)
   })
  }
}