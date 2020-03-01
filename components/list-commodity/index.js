Component({
    properties: {
        commodityList: {
            type: Array,
            value:[{
                img: "http://q6g5jrj9e.bkt.clouddn.com/dress1.jpeg",
                describe: "2021 宽松裙 透气 花纹 夏日新款",
                price: "200",
                salesNum: "6003"
            }] 
        }
    },
    data: {},
    methods: {
        // 去详细页
        gotoCommodityDetail () {
            wx.navigateTo({
              url: '../../pages/commodityInfo/index'
            })
        }
    }
})