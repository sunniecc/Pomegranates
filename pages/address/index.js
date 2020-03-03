// pages/address/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [
      {
        receiverName: 'Errorccccc',
        receiverPhone: '138****5721',
        receiverAddress: '深圳软件产业基地',
        showIcon: false,
        isDefault: true
      },
      {
        receiverName: 'shiliu',
        receiverPhone: '138****3322',
        receiverAddress: '创智天地大厦深投控',
        showIcon: false,
        isDefault: false
      },
      {
        receiverName: 'sunnie',
        receiverPhone: '181****3322',
        receiverAddress: '布达拉宫啦啦啦',
        showIcon: false,
        isDefault: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  gotoAddressEdit () {
    wx.navigateTo({
      url: '../address/edit/index',
    })
  }
})