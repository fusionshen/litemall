const util = require('../../../utils/util.js');

const activities = [
  {
    id: 1009013,
    name: '合理锻炼健康生活',
    content: '知名瑜伽教练现场带您体验健康的生活方式。',
    time: '5.13',
    day: '周六',
    department: '和诺门诊',
    state: true,
    heart: true,
    picUrl: 'http://47.103.46.66:88/wx/storage/fetch/cehuh65w8vcab5uu18qf.jpg'
  },
  {
    id: 1009024,
    name: '王医生健康膳食课堂',
    content: '王医生健康膳食大讲堂将在这周循环开展。',
    time: '5.12-5.17',
    day: '周四',
    department: '国药',
    state: true,
    heart: false,
    picUrl: 'http://47.103.46.66:88/wx/storage/fetch/zvgel8d8ftwcl5556oxb.jpg'
  },
  {
    id: 1009027,
    name: '我只是个测试',
    content: '我只是个测试用例，用于测试活动tab列表。',
    time: '5.15',
    day: '周六',
    department: '医技中心',
    state: false,
    heart: true,
    picUrl: 'http://47.103.46.66:88/wx/storage/fetch/nav450qpfsh9o5al7utz.jpg'
  },
  {
    id: 1010000,
    name: '苹果手机健康软件使用讲堂',
    content: '园区邀请苹果公司产品经理莅临我园区为我们讲解健康软件使用方法。',
    time: '5.15',
    day: '周六',
    department: '医技中心',
    state: false,
    heart: true,
    picUrl: 'http://47.103.46.66:88/wx/storage/fetch/656wguybd7nufg0ya4t0.jpg'
  }
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activities: activities,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //格式化活动内容
    let activities = this.data.activities
    activities.forEach(o => { o.content = util.formatContent(o.content, 22) })
    this.setData({ activities })
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

  toAgree: function (e) {
    let id = e.currentTarget.dataset.id;
    let activities = this.data.activities
    for (let i of activities) {
      if (i.id == id) {
        i.heart = !i.heart
      }
      this.setData({ activities })
    }
  },
})