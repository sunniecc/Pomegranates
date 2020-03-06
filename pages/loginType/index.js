Page({
    data: {

    },
    wxLogin() {

    },
    phoneLogin() {
        console.log('=====')
        wx.navigateTo({
            url: '../../pages/loginType/login/index'
        })
    }
})