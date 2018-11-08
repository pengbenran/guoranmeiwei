 import Fly from "flyio/dist/npm/wx";
export default class Api{
  constructor() {
    this.baseUrl = "https://www.guqinjiujiang.xyz:8444/guqinzhen" 
    this.fly = new Fly;
  }
  getMain(){
	return new Promise((resolve, reject) => {
      let res=this.fly.get(this.baseUrl +'/api/index/main')
      resolve(res)
	})   
  }
}