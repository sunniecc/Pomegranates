//index.js
Page({
    data: {
      text: "This is page data.",
      commodityList: [],
      tabInfo: [{
        name: "推荐",
        sign: "recommend"
      },{
        name: "服装",
        sign: "dress"
      },{
        name: "婚纱",
        sign: "weddingDress"
      },{
        name: "配饰",
        sign: "ACC"
      },{
        name: "故事",
        sign: "story"
      }],
      banners: [{
        src: '/image/banner1.jpg'
      },{
        src: '/image/banner2.jpg'
      },{
        src: '/image/banner3.jpg'
      }],
      commodityType: {
        recommend: [{
          img: "../../../../image/dress/dress1.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "../../../../image/dress/dress1.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "../../../../image/dress/dress1.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        }],
        dress: [{
          img: "../../../../image/dress/dress4.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "../../../../image/dress/dress5.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "../../../../image/dress/dress6.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        }],
        weddingDress: [{
          img: "../../../../image/weddingDress/wedding1.jpeg",
          describe: "2020 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "600"
        },{
          img: "../../../../image/weddingDress/wedding2.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "../../../../image/weddingDress/wedding3.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "../../../../image/weddingDress/wedding4.jpeg",
          describe: "2020 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "600"
        },{
          img: "../../../../image/weddingDress/wedding5.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "../../../../image/weddingDress/wedding6.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "../../../../image/weddingDress/wedding7.jpeg",
          describe: "2020 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "600"
        },{
          img: "../../../../image/weddingDress/wedding8.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "../../../../image/weddingDress/wedding9.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "../../../../image/weddingDress/wedding10.jpeg",
          describe: "2020 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "600"
        },{
          img: "../../../../image/weddingDress/wedding11.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "../../../../image/weddingDress/wedding12.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "../../../../image/weddingDress/wedding13.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "../../../../image/weddingDress/wedding14.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        }],
        ACC: [{
          img: "../../../../image/dress/dress13.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        }],
        story: [{
          img: "../../../../image/dress/dress10.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "../../../../image/dress/dress11.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "../../../../image/dress/dress12.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        }]
      }
    },
    onLoad: function(options) {
      // Do some initialize when page load.
    },
    onReady: function() {
      // Do something when page ready.
    },
    onShow: function() {
      this.setData({commodityList:this.data.commodityType['weddingDress']})
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
      wx.navigateTo({
        url: '../../pages/commodityInfo/index'
      })
    },
    customData: {
      hi: 'MINA'
    },
    toOtherPage(info) {
      console.log('info===', info.detail.index)
      const sign = this.data.tabInfo[info.detail.index].sign
      this.setData({commodityList:this.data.commodityType[sign]})
      
    }
  })