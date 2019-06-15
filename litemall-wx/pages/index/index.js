const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../utils/user.js');
//获取应用实例
const app = getApp();
const modules = [
  {
    id: 1005000,
    name: '机构',
    iconUrl: 'http://47.103.46.66:88/wx/storage/fetch/ahq65ztxcq78df0tk1tn.png'
  },
  {
    id: 1005001,
    name: '诊疗',
    iconUrl: 'http://47.103.46.66:88/wx/storage/fetch/qhu0dtud0htxworyo6eq.png'
  },
  {
    id: 1005002,
    name: '视频',
    iconUrl: 'http://47.103.46.66:88/wx/storage/fetch/4rpxngi4l8bice6vcay0.png'
  },
  {
    id: 1008000,
    name: '导航',
    iconUrl: 'http://47.103.46.66:88/wx/storage/fetch/qnfxpjnov6io7t8nugsr.png'
  },
  {
    id: 1010000,
    name: '地图',
    iconUrl: 'http://47.103.46.66:88/wx/storage/fetch/qcljvbhdf5f27hmubg1o.png'
  },
  {
    id: 1011000,
    name: '生活',
    iconUrl: 'http://47.103.46.66:88/wx/storage/fetch/0k2ozl7v5s3wytkj2o3k.png'
  },
  {
    id: 1012000,
    name: '智慧党建',
    iconUrl: 'http://47.103.46.66:88/wx/storage/fetch/c9h6l36wvcr7h9klw0rz.png'
  },
  {
    id: 1013001,
    name: '志愿服务',
    iconUrl: 'http://47.103.46.66:88/wx/storage/fetch/rx5rgbpyjz6da98ee5nk.png'
  }];

let activities = [
  {
    id: 1,
    name: '健康大讲堂',
    content: '十点截止',
    actEndTime: '2019/06/14 10:00:58'
  },
  {
    id: 2,
    name: '医疗大见面',
    content: '十点截止',
    actEndTime: '2019/06/11 10:00:47'
  },
  {
    id: 3,
    name: '飞翔的天空',
    content: '十点截止',
    actEndTime: '2019/06/16 10:00:39'
  },
  {
    id: 4,
    name: '入驻见面会',
    content: '十点截止',
    actEndTime: '2019/06/17 10:00:29'
  },
  {
    id: 5,
    name: '临时会议',
    content: '十点截止',
    actEndTime: '2019/06/12 18:00:47'
  }];

const hots = [
  {
    id: 1,
    name: '瑜伽大讲堂',
    content: '知名瑜伽教练现场带您体验瑜伽的奥秘',
    time: '05/15',
    day: '周六',
    department: '医技中心',
    state: true,
    heart: true,
    picUrl: 'http://47.103.46.66:88/wx/storage/fetch/xn09jwhay5hruighoadu.png'
  },
  {
    id: 2,
    name: '欢乐园区行',
    content: '园区导游带领闵行一中学生参观新虹桥医学中心，了解园区风貌',
    time: '05/20',
    day: '周四',
    department: '医技中心',
    state: false,
    heart: false,
    picUrl: 'http://47.103.46.66:88/wx/storage/fetch/jqzqerejo7ot12uvi5bv.png'
  },
  {
    id: 3,
    name: '我只是个测试',
    content: '我只是个测试用例，用于测试首页活动列表',
    time: '05/15',
    day: '周六',
    department: '医技中心',
    state: false,
    heart: true,
    picUrl: 'http://47.103.46.66:88/wx/storage/fetch/bdo24wq9dywm5pmiqrdh.jpg'
  }

];



Page({
  data: {
    newGoods: [],
    hotGoods: [],
    topics: [],
    brands: [],
    groupons: [],
    floorGoods: [],
    banner: [],
    channel: [],
    coupon: [],
    goodsCount: 0,
    current: 0,
    animationData: {},
    animationData2: {},
    modules: modules,
    activities: [],
    actEndTimeList: [],
    hots: hots,
  },

  searchBtn: function (e) {
    var keyword = e.detail.value.replace(/\s+/g, '')
    if (keyword==''){
      return;
    }
    wx.navigateTo({
      url: '/pages/search/search?keyword=' + keyword
    })
  },

  onShareAppMessage: function() {
    return {
      title: '上海新虹桥国际医学中心',
      desc: '您的健康首选',
      path: '/pages/index/index'
    }
  },

  onPullDownRefresh() {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    this.getIndexData();
    wx.hideNavigationBarLoading() //完成停止加载
    wx.stopPullDownRefresh() //停止下拉刷新
  },

  getIndexData: function() {
    let that = this;
    util.request(api.IndexUrl).then(function(res) {
      if (res.errno === 0) {
        that.setData({
          newGoods: res.data.newGoodsList,
          hotGoods: res.data.hotGoodsList,
          topics: res.data.topicList,
          brands: res.data.brandList,
          floorGoods: res.data.floorGoodsList,
          banner: res.data.banner,
          groupons: res.data.grouponList,
          channel: res.data.channel,
          coupon: res.data.couponList
        });
      }
    });
    util.request(api.GoodsCount).then(function (res) {
      that.setData({
        goodsCount: res.data
      });
    });
  },
  contentFormat(time,o) {
    let day = parseInt(time / (60 * 60 * 24)) + 1
    if (day >= 2){
      return day +"日后截止"
    }else{
      var date = new Date(o.actEndTime);
      return date.getHours() + "时截止"
    }
  },
  countDown() {//倒计时函数
    // 获取当前时间，同时得到活动结束时间数组
    let newTime = new Date().getTime();
    let endTimeList = this.data.actEndTimeList;
    let countDownArr = [];

    // 对结束时间进行处理渲染到页面
    endTimeList.forEach(o => {
      let endTime = new Date(o.actEndTime).getTime();
      let obj = null;
      // 如果活动未结束，对时间进行处理
      if (endTime - newTime > 0) {
        let time = (endTime - newTime) / 1000;
        // 获取天、时、分、秒
        let day = parseInt(time / (60 * 60 * 24));
        let hou = parseInt(time % (60 * 60 * 24) / 3600) + day * 24;
        let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
        let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
        obj = {
          id: o.id,
          name:util.formatContent(o.name,5),
          content: this.contentFormat(time,o),
          day: util.formatNumber(day),
          hou: util.formatNumber(hou),
          min: util.formatNumber(min),
          sec: util.formatNumber(sec)
        }
      } else {//活动已结束，全部设置为'00'
        obj = {
          id: o.id,
          name: o.name,
          content: "活动已结束",
          day: '00',
          hou: '00',
          min: '00',
          sec: '00'
        }
      }
      countDownArr.push(obj);
    })
    // 渲染，然后每隔一秒执行一次倒计时函数
    this.setData({ activities: countDownArr })
    setTimeout(this.countDown, 1000);
  },
  toAgree: function (e) {
    let id = e.currentTarget.dataset.id;
    let hots = this.data.hots
    for (let i of hots) {
      if (i.id == id) {
        i.heart = !i.heart
      }
      this.setData({ hots })
    }
  },
  onLoad: function(options) {
    let endList = [];
    // 将活动的结束时间参数提成一个单独的数组，方便操作
    activities.forEach(o => { endList.push(o) })
    this.setData({ actEndTimeList: endList })
    //格式化热门活动内容
    let hots = this.data.hots
    hots.forEach(o => { o.content = util.formatContent(o.content,25) })
    this.setData({ hots })
    // 执行倒计时函数
    this.countDown()
    this.stretch(350)
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight
        });
      }
    });
    // 页面初始化 options为页面跳转所带来的参数
    if (options.scene) {
      //这个scene的值存在则证明首页的开启来源于朋友圈分享的图,同时可以通过获取到的goodId的值跳转导航到对应的详情页
      var scene = decodeURIComponent(options.scene);
      console.log("scene:" + scene);

      let info_arr = [];
      info_arr = scene.split(',');
      let _type = info_arr[0];
      let id = info_arr[1];

      if (_type == 'goods') {
        wx.navigateTo({
          url: '../goods/goods?id=' + id
        });
      } else if (_type == 'groupon') {
        wx.navigateTo({
          url: '../goods/goods?grouponId=' + id
        });
      } else {
        wx.navigateTo({
          url: '../index/index'
        });
      }
    }

    // 页面初始化 options为页面跳转所带来的参数
    if (options.grouponId) {
      //这个pageId的值存在则证明首页的开启来源于用户点击来首页,同时可以通过获取到的pageId的值跳转导航到对应的详情页
      wx.navigateTo({
        url: '../goods/goods?grouponId=' + options.grouponId
      });
    }

    // 页面初始化 options为页面跳转所带来的参数
    if (options.goodId) {
      //这个goodId的值存在则证明首页的开启来源于分享,同时可以通过获取到的goodId的值跳转导航到对应的详情页
      wx.navigateTo({
        url: '../goods/goods?id=' + options.goodId
      });
    }

    // 页面初始化 options为页面跳转所带来的参数
    if (options.orderId) {
      //这个orderId的值存在则证明首页的开启来源于订单模版通知,同时可以通过获取到的pageId的值跳转导航到对应的详情页
      wx.navigateTo({
        url: '../ucenter/orderDetail/orderDetail?id=' + options.orderId
      });
    }

    this.getIndexData();
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  getCoupon(e) {
    if (!app.globalData.hasLogin) {
      wx.navigateTo({
        url: "/pages/auth/login/login"
      });
    }

    let couponId = e.currentTarget.dataset.index
    util.request(api.CouponReceive, {
      couponId: couponId
    }, 'POST').then(res => {
      if (res.errno === 0) {
        wx.showToast({
          title: "领取成功"
        })
      }
      else{
        util.showErrorToast(res.errmsg);
      }
    })
  },
  change(e) {
    this.setData({
      current: e.detail.current
    })
    this.stretch(350)

    this.shrink(300)
  },
  // 收缩
  stretch(h) {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation = animation
    animation.height(h).step()
    this.setData({
      animationData: animation.export(),
    })
  },
  // 展开
  shrink(h) {
    var animation2 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    this.animation2 = animation2
    animation2.height(h).step()
    this.setData({
      animationData2: animation2.export()
    })
  },
})