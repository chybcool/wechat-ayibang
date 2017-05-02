//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    images:'',
    login:'',
    items:''
  },
  bindViewTap: function(e){
    wx.navigateTo({
      url: '../login/index'
    })
  },
  onLoad:function(){
    wx.request({
      url:'http://www.easy-mock.com/mock/5906811e7a878d73716e32c9/viplist/mylist',
      method:'GET',
      data:{},
      header:{
        'Accept':'application/json'
      },
      success:(res) => {
        console.log(res);
        this.setData({
          images:res.data.image,
          login:res.data.login,
          items:res.data.item
        })
      }
    })
  }
})
