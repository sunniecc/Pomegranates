// components/cart-card/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    pattern: {
      type: String,
      value: ''
    },
    price: {
      type: Number,
    },
    num: {
      type: Number,
      value: 1
    },
    imgName: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoCommodityDetail () {
      console.log('gogo')
      wx.navigateTo({
        url: '../../pages/commodityInfo/index'
      })
    }
  }
})
