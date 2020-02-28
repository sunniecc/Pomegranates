//index.js
Page({
    data: {
      text: "This is page data.",
      commodityList: [{
        img: "../../../../image/banner1.jpg",
        describe: "2020 宽松裙 透气 花纹 夏日新款",
        price: "200",
        salesNum: "600"
      },{
        img: "../../../../image/banner2.jpg",
        describe: "2022 宽松裙 透气 花纹 夏日新款",
        price: "200",
        salesNum: "6002"
      },{
        img: "../../../../image/banner3.jpg",
        describe: "2021 宽松裙 透气 花纹 夏日新款",
        price: "200",
        salesNum: "6003"
      }]
    },
    onLoad: function(options) {
      // Do some initialize when page load.
    },
    onReady: function() {
      // Do something when page ready.
    },
    onShow: function() {
      // Do something when page show.
    },
    onHide: function() {
      // Do something when page hide.
    },
    onUnload: function() {
      // Do something when page close.
    },
    onPullDownRefresh: function() {
      // Do something when pull down.
    },
    onReachBottom: function() {
      // Do something when page reach bottom.
    },
    onShareAppMessage: function () {
      // return custom share data when user share.
    },
    onPageScroll: function() {
      // Do something when page scroll
    },
    onResize: function() {
      // Do something when page resize
    },
    onTabItemTap(item) {
      console.log(item.index)
      console.log(item.pagePath)
      console.log(item.text)
    },
    // Event handler.
    viewTap: function() {
      this.setData({
        text: 'Set some data for updating view.'
      }, function() {
        // this is setData callback
      })
    },
    gotoCommodityDetail () {
      console.log('gogo')
      wx.navigateTo({
        url: '../../pages/commodityInfo/index'
      })
    },
    customData: {
      hi: 'MINA'
    }
  })