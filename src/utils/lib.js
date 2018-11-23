//封装一个弹出框
const Show=(text,icon,Num)=>{
    wx.showToast({
        title: text,
        icon: icon,
        duration: Num
      })
}

const Loading = (text) =>{
    wx.showLoading({
        title: text,
      })
      
}

const ShopModel=(title,content)=>{
   return new Promise((resolve, reject) =>{
    wx.showModal({
        title: title, //提示的标题,
        content: content, //提示的内容,
        success: res => {
            resolve(res)
        }
      });
   }) 
}

const Lib={
    Show,
    ShopModel,
    Loading
}


export default Lib