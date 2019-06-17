var util = require('../../utils/util.js');
var api = require('../../config/api.js');
const result = [
  {
    id: 1,
    name: '门诊部',
    orgs: [
      {
        id: 1,
        name: '悦心门诊',
        imgUrl:'http://47.103.46.66:88/wx/storage/fetch/rlxnvx0miz2nkcmo9eeq.jpg',
        intro:'特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time:'08:00-18:00',
        phone: '021-93049320',
        address:'闵行路99号',
        linkUrl: 'https://www.baidu.com'
      },
      {
        id: 2,
        name: '和诺门诊',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/kktf9bmj415r8w8ilghq.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号'
      },
      {
        id: 3,
        name: '美视美景眼科',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/t4y2p0bwhv4kgyepifdq.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号',
        linkUrl: 'https://www.baidu.com'
      }
    ]
  },
  {
    id: 2,
    name: '医 院',
    orgs: [
      {
        id: 4,
        name: '华山医院',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/yggmba3mgimeayahotfc.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号',
        linkUrl: 'https://www.baidu.com'
      },
      {
        id: 5,
        name: '星辰儿童医院',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/zzp408r5tkvau8g336yd.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号'
      },
      {
        id: 6,
        name: '绿叶爱丽美医疗美容医院',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/8u6hfsb783ce373254ob.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号'
      },
      {
        id: 7,
        name: '百汇医院',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/x508jtgqpc8yapgbnb9u.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号'
      },
      {
        id: 8,
        name: '览海康复医院',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/n8lbjtdcj1b3vpcp5i0q.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号'
      },
      {
        id: 9,
        name: '泰和肿瘤医院',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/6hzmle76hmnxnyl363z6.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号'
      },
      {
        id: 10,
        name: '览海西南骨科医院',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/8c80ublhkpfq2qfnu41y.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号'
      },
      {
        id: 11,
        name: '慈弘妇产科医院',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/st9dwonmawr82hxqs1mb.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号'
      }
    ] 
  },
  {
    id: 3,
    name: '医技机构',
    orgs: [
      {
        id: 12,
        name: '美中嘉和影像',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/k4qaqml25ayqqb07n2pu.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号'
      },
      {
        id: 13,
        name: '千麦检查',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/mltc77a9cwzvdlb4yboc.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号'
      },
      {
        id: 14,
        name: '国药虹润药房',
        imgUrl: 'http://47.103.46.66:88/wx/storage/fetch/5vv8wysr6zcw68uf21r5.jpg',
        intro: '特需门诊就字面意思是解决特殊治病需要的门诊、专家门诊就是由专家出诊的门诊。',
        time: '08:00-18:00',
        phone: '021-93049320',
        address: '闵行路99号'
      }
    ]
  }
]

Page({
  data: {
    navList: [],
    organizationList: [],
    goodsList: [],
    id: 0,
    currentCategory: {},
    scrollLeft: 0,
    scrollTop: 0,
    scrollHeight: 0,
    page: 1,
    limit: 10,
    result: result
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    if (options.id) {
      that.setData({
        id: parseInt(options.id)
      });
    }

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });

    //this.getCategoryInfo();
    // 初始化数据
    this.getTypeInfo();
  },
  
  getTypeInfo: function () {
    let result = this.data.result;
    this.setData({ navList: result})
    // 
    if (this.data.id == 0) {
      this.setData({
        id: result[0].id
      });
    }
    this.data.navList.forEach(n => {
      if (n.id == this.data.id) {
        wx.setNavigationBarTitle({
          title: n.name
        })
      }
    })
   
    //nav位置
    let currentIndex = 0;
    let navListCount = this.data.navList.length;
    for (let i = 0; i < navListCount; i++) {
      currentIndex += 1;
      if (this.data.navList[i].id == this.data.id) {
        break;
      }
    }
    if (currentIndex > navListCount / 2 && navListCount > 5) {
      this.setData({
        scrollLeft: currentIndex * 60
      });
    }
    // that.getGoodsList();
    this.getOrganizationList();
  },

  getCategoryInfo: function () {
    let that = this;
    util.request(api.GoodsCategory, {
      id: this.data.id
    })
      .then(function (res) {

        if (res.errno == 0) {
          that.setData({
            navList: res.data.brotherCategory,
            currentCategory: res.data.currentCategory
          });

          wx.setNavigationBarTitle({
            title: res.data.parentCategory.name
          })

          // 当id是L1分类id时，这里需要重新设置成L1分类的一个子分类的id
          if (res.data.parentCategory.id == that.data.id) {
            that.setData({
              id: res.data.currentCategory.id
            });
          }

          //nav位置
          let currentIndex = 0;
          let navListCount = that.data.navList.length;
          for (let i = 0; i < navListCount; i++) {
            currentIndex += 1;
            if (that.data.navList[i].id == that.data.id) {
              break;
            }
          }
          if (currentIndex > navListCount / 2 && navListCount > 5) {
            that.setData({
              scrollLeft: currentIndex * 60
            });
          }
          that.getGoodsList();

        } else {
          //显示错误信息
        }

      });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  getGoodsList: function () {
    var that = this;

    util.request(api.GoodsList, {
      categoryId: that.data.id,
      page: that.data.page,
      limit: that.data.limit
    })
      .then(function (res) {
        that.setData({
          goodsList: res.data.list,
        });
      });
  },
  getOrganizationList: function() {
    let result = this.data.result
    result.forEach(t => {
      if(t.id == this.data.id){
        this.setData({
          organizationList: t.orgs
        })
      }
    })
  },
  onUnload: function () {
    // 页面关闭
  },
  switchCate: function (event) {
    if (this.data.id == event.currentTarget.dataset.id) {
      return false;
    }
    var that = this;
    var clientX = event.detail.x;
    var currentTarget = event.currentTarget;
    if (clientX < 60) {
      that.setData({
        scrollLeft: currentTarget.offsetLeft - 60
      });
    } else if (clientX > 330) {
      that.setData({
        scrollLeft: currentTarget.offsetLeft
      });
    }
    this.setData({
      id: event.currentTarget.dataset.id
    });

    //this.getCategoryInfo();
    this.getTypeInfo();
  }
})