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
        src: 'http://q6g5jrj9e.bkt.clouddn.com/dress1.jpeg'
      },{
        src: 'http://q6g5jrj9e.bkt.clouddn.com/dress2.jpeg'
      },{
        src: 'http://q6g5jrj9e.bkt.clouddn.com/dress3.jpeg'
      }],
      commodityType: {
        recommend: [{
          img: "http://q6g5jrj9e.bkt.clouddn.com/dress1.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/dress1.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/dress1.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        }],
        dress: [{
          img: "http://q6g5jrj9e.bkt.clouddn.com/dress4.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/dress5.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/dress6.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        }],
        weddingDress: [{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding1.jpeg",
          describe: "2020 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "600"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding2.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding3.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding4.jpeg",
          describe: "2020 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "600"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding5.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding6.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding7.jpeg",
          describe: "2020 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "600"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding8.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding9.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding10.jpeg",
          describe: "2020 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "600"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding11.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding12.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding13.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/wedding14.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        }],
        ACC: [{
          img: "http://q6g5jrj9e.bkt.clouddn.com/dress13.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        }],
        story: [{
          img: "http://q6g5jrj9e.bkt.clouddn.com/dress10.jpeg",
          describe: "2021 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6003"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/dress11.jpeg",
          describe: "2022 宽松裙 透气 花纹 夏日新款",
          price: "200",
          salesNum: "6002"
        },{
          img: "http://q6g5jrj9e.bkt.clouddn.com/dress12.jpeg",
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
    customData: {
      hi: 'MINA'
    },
    toOtherPage(info) {
      const sign = this.data.tabInfo[info.detail.index].sign
      this.setData({commodityList:this.data.commodityType[sign]})
    },
    toQueryPage() {
      wx.navigateTo({
        url: "../../pages/commodityQuery/index"
      })
    }
  })