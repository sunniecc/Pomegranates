Page({
    data:{
        commodityList: [],
        searchValue: '',
        hotSearch: ['连衣裙','裤子','牛仔外套','短裤','平地裤','A字裙'],
        historySearch: ['连衣裙','裤子','牛仔外套','西装短裤地方 ','平地裤','A字裙']
    },
    selectLable(e) {
        console.log('e===', e)
        this.setData({
            searchValue: e.target.dataset.lable,
            commodityList: [{
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
        })
    }
})