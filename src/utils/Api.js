 import Fly from "flyio/dist/npm/wx";


export default class Api{
  constructor() {
    this.baseUrl = "https://www.guqinjiujiang.xyz:8444/guqinzhen" 
    // this.baseUrl = "http://192.168.2.208/guoranhuiwei" 
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
}