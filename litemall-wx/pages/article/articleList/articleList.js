const util = require('../../../utils/util.js');

const articles = [
  {
    id: 1,
    name: '正确锻炼姿势',
    content: '这两个动作让血栓瞬间脱落。堵塞血管',
    time: '5.13',
    day: '周六',
    department: '悦心门诊',
    number: 3112,
    state: true,
    heart: true,
    picUrl: 'http://47.103.46.66:88/wx/storage/fetch/fqvshpcqkpv9j1dq1cfe.png'
  },
  {
    id: 2,
    name: '打通生命的“元气通道',
    content: '侯老独家的一种诊断疾病的方法—九宫腹诊法，这个能准确诊断疾病的九宫腹诊法到底是怎么回事呢？',
    time: '5.14',
    day: '周日',
    department: '医技中心',
    number: 312,
    state: true,
    heart: true,
    picUrl: 'http://47.103.46.66:88/wx/storage/fetch/csls096wuxbo21ysrxci.jpg'
  },
  {
    id: 3,
    name: '端午节特别节目——有种出汗很伤身',
    content: '脱汗是一种危重症，严重会引发猝死，特别是对于一些有基础疾病的中老年人来说，夏天炎热，大量出汗不仅会加重病情也会导致可怕的脱汗',
    time: '5.16',
    day: '周二',
    department: '和诺门诊',
    number: 4112,
    state: true,
    heart: true,
    picUrl: 'http://47.103.46.66:88/wx/storage/fetch/u4qfqgyrwwzaj8jrp30q.jpg'
  },
  {
    id: 4,
    name: '隐藏的血脂健康指数',
    content: '小而密的脂蛋白胆固醇，它导致动脉粥样硬化的能力更强，是真正破坏血管的“硬”指标。',
    time: '5.16',
    day: '周二',
    department: '和诺门诊',
    number: 7845,
    state: true,
    heart: true,
    picUrl: 'http://47.103.46.66:88/wx/storage/fetch/volu06gorpu8lprsf38g.jpg'
  }
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: articles,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //格式化文章内容
    let articles = this.data.articles
    articles.forEach(o => { o.content = util.formatContent(o.content, 22) })
    this.setData({ articles })
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