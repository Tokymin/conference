// pages/map/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lat: 25.85807,
    lon: 114.92472,
    markers: [{
      id: '001',
      // 25.8540292978, 114.9306446314
      latitude: 25.854029,
      longitude: 114.93064,
      iconPath: '../../images/location.png',
      label: {
        content: '江西理工大学'
      }}]
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

  }
})