// pages/commodityInfo/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    commodityTitle: 'SENCE LA 撞色抽绳大口袋羊羔绒开衫卫衣夹克外套 乳白色',
    commodityPrice: 299,
    commodityPettern: [
      {
      }
    ],
    showSizeSelector: false,
    selectedSize: '请选择尺',
    relativeCommodityList: [
      {
        image: 'http://q6g5jrj9e.bkt.clouddn.com/dress7.jpeg',
        title: 'SENCE LA 卫衣夹克外套 蓝色',
        price: '399'
      },
      {
        image: 'http://q6g5jrj9e.bkt.clouddn.com/dress7.jpeg',
        title: 'SENCE LA 卫衣夹克外套 紫色',
        price: '499'
      },
      {
        image: 'http://q6g5jrj9e.bkt.clouddn.com/dress7.jpeg',
        title: 'SENCE LA 卫衣夹克外套 粉色',
        price: '599'
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
  bug () {
    if (this.data.selectedSize === '请选择尺') {
      this.setData({
        showSizeSelector: true
      })
      return
    }
    wx.navigateTo({
      url: '../order/buy/index',
    })
  },
  clickSizeSelector () {
    this.setData({
      showSizeSelector: true
    })
  },
  closeSizeSelector () {
    this.setData({
      showSizeSelector: false
    })
  },
  onClickHide () {
    this.setData({
      showSizeSelector: false
    })
  },
  chooseSize (e) {
    this.setData({
      selectedSize: `${e.detail.size}`
    })
  },
  gotoCommodityInfo () {
    wx.navigateTo({
      url: './index',
    })
  },
  addToCart () {
    wx.switchTab({
      url: '../cart/index',
    })
  }
})