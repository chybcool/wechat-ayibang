//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    images:'',
    nologin:'',
    login:''
  },
  onReady:function(){
    wx.setNavigationBarTitle({
      title:'我的订单'
    })
  },
  bindViewTap: function(e){
    wx.navigateTo({
      url: '../login/index'
    })
  },
  onLoad:function(){
    wx.request({
      url:'http://www.easy-mock.com/mock/5906811e7a878d73716e32c9/viplist/orderlist',
      method:'GET',
      data:{},
      header:{
        'Accept':'application/json'
      },
      success:(res) => {
        console.log(res);
        this.setData({
          images:res.data.image,
          nologin:res.data.nologin,
          login:res.data.login
        })
      }
    })
  }
})
