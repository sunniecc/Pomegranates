// pages/commodityInfo/components/size-selector/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectedSize: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showBuyButton: false,
    sizeList: [
      {
        size: 'XS',
        price: '2299',
        selected: false
      },
      {
        size: 'S',
        price: '2589',
        selected: false
      },
      {
        size: 'M',
        price: '2489',
        selected: false
      },
      {
        size: 'L',
        price: '2889',
        selected: false
      },
      {
        size: 'XL',
        price: '2389',
        selected: false
      },
      {
        size: 'XXL',
        price: '2589',
        selected: false
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close () {
      this.triggerEvent('close')
    },
    buy () {
      this.triggerEvent('buy')
    },
    chooseSize (e) {
      this.data.sizeList.forEach((item, index) => {
        this.setData({
          ['sizeList[' + index + '].selected']: false
        })
      })
      const { index } = e.currentTarget.dataset
      this.setData({
        ['sizeList[' + index + '].selected']: true
      })
      this.triggerEvent('select', {
        size: this.data.sizeList[index].size
      })
      this.setData({
        showBuyButton: true
      })
    }
  },
  attached () {
    const size = this.properties.selectedSize
    for (let index in this.data.sizeList) {
      if (this.data.sizeList[index].size === size) {
        this.setData({
          ['sizeList[' + index + '].selected']: true,
          showBuyButton: true
        })
        return
      }
    }
  }
})
