const addata = require('../../data/addata').data

// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    fixheader: 'hideHeader',
    showMainClassify: [],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    // estate: 'top-hoverd-btn',
    // visa: '',
    // travel: '',
    // translation: '',
    // work: '',
    // other: '',
    showHotResource: {}

    // visaResource: {
    //   titleImage: 'http://cms-bucket.nosdn.127.net/b5c8c4ffec634d24b717fdc360ca4c9720180209151705.png',
    //   hotType1: {
    //     title: '工作签证',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   },
    //   hotType2: {
    //     title: '留学签证',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   },
    //   hotType3: {
    //     title: '短期签证',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   }
    // },
    // travelResource: {
    //   titleImage: 'http://cms-bucket.nosdn.127.net/7c93d019909d44cfa3205808d14fac8e20180209133432.png',
    //   hotType1: {
    //     title: '东京周边',
    //     top1: 'http://cms-bucket.nosdn.127.net/6224ce83fc73487aa053a2acaf27b33c20180131110823.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   },
    //   hotType2: {
    //     title: '日本',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   },
    //   hotType3: {
    //     title: '海外',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   }
    // },
    // translationResource: {
    //   titleImage: 'http://cms-bucket.nosdn.127.net/ace1f2d6450a4c43b9adc98f6ed9932720180209142637.png',
    //   hotType1: {
    //     title: '中日翻译',
    //     top1: 'http://cms-bucket.nosdn.127.net/d0c4438f8c8a42d4b2874f49672f31f120180209151031.jpeg',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   },
    //   hotType2: {
    //     title: '英日翻译',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   },
    //   hotType3: {
    //     title: '小语种翻译',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   }
    // },
    // workResource: {
    //   titleImage: 'http://cms-bucket.nosdn.127.net/ec4b1bdfae6f496685fc9fd68a85216320180209140253.png',
    //   hotType1: {
    //     title: '长期工作',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   },
    //   hotType2: {
    //     title: '主妇打工',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   },
    //   hotType3: {
    //     title: '学生打工',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   }
    // },
    // otherResource: {
    //   titleImage: 'http://cms-bucket.nosdn.127.net/c3e016603c604751978d47b31f59548120180131113421.png',
    //   hotType1: {
    //     title: '搬家',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   },
    //   hotType2: {
    //     title: '中古家电',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   },
    //   hotType3: {
    //     title: '中古车',
    //     top1: 'http://cms-bucket.nosdn.127.net/2ff27e9f5a7a47b290d15db91ed2d24220180209133310.png',
    //     top2: 'http://cms-bucket.nosdn.127.net/6f6d70a741b5475f823b23e93ef0519420171031153414.jpeg',
    //     top3: 'http://dingyue.nosdn.127.net/32u6S4NN3A51ejF7XNbd2F20qogoTaGYKQrmZ6AeL3PqK1507631377697.jpg',
    //     top4: 'http://cms-bucket.nosdn.127.net/9523862c5b7d419ab76de79a41ba9a3820171010142756.png'
    //   }
    // }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    console.log(' ---------- onLoad ----------')
    var mainClassify = []
    for (var o in addata.mainclassify) {
      var id = addata.mainclassify[o]
      var classifyName = addata.dictionary[id]
      mainClassify[mainClassify.length] = {
        id: id,
        name: classifyName,
        class: ''
      }
    }

    mainClassify[0].class = 'top-hoverd-btn'
    this.setData({
      mainClassify: mainClassify,
      showHotResource: addata.estateResource
    })
    // this.toestate()
  },

  onscroll (event) {
    console.log(event)
    if (event.detail.scrollTop > 49) {
      this.setData({
        fixheader: 'showHeader'
      })
    } else {
      this.setData({
        fixheader: 'hideHeader'
      })
    }
  },

  showDetail (event) {
    var selectClassify = event.target.dataset.classifiy
    var mainClassify = this.data.mainClassify

    var obj = {}

    if (selectClassify === 'estate') {
      obj = addata.estateResource
    } else if (selectClassify === 'visa') {
      obj = addata.visaResource
    }

    for (var o in mainClassify) {
      if (mainClassify[o].id === selectClassify) {
        mainClassify[o].class = 'top-hoverd-btn'
      } else {
        mainClassify[o].class = ''
      }
    }

    this.setData({
      mainClassify: mainClassify,
      showHotResource: obj
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    console.log(' ---------- onReady ----------')
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    console.log(' ---------- onShow ----------')
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    console.log(' ---------- onHide ----------')
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    console.log(' ---------- onUnload ----------')
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    console.log(' ---------- onPullDownRefresh ----------')
  },
  goadlist (event) {
    console.log(event.target.dataset)
    app.setSelectedClassify(event.target.dataset.classifiy)
    wx.navigateTo({
      url: '../adlist/adlist'
    })
  },
  openMainPage () {
    wx.navigateTo({
      url: '../adlist/adlist'
    })
  },
  toestate: function () {
    console.log('estate')
    this.updateBtnStatus('estate')
    this.setData({
      showHotResource: this.data.estateResource
    })
  },
  tovisa: function () {
    console.log('visa')
    this.updateBtnStatus('visa')
    this.setData({
      showHotResource: this.data.visaResource
    })
  },
  totravel: function () {
    console.log('travel')
    this.updateBtnStatus('travel')
    this.setData({
      showHotResource: this.data.travelResource
    })
  },
  totranslation: function () {
    console.log('translation')
    this.updateBtnStatus('translation')
    this.setData({
      showHotResource: this.data.translationResource
    })
  },
  towork: function () {
    console.log('work')
    this.updateBtnStatus('work')
    this.setData({
      showHotResource: this.data.workResource
    })
  },
  toother: function () {
    console.log('other')
    this.updateBtnStatus('other')
    this.setData({
      showHotResource: this.data.otherResource
    })
  },
  updateBtnStatus: function (k) {
    this.setData({
      estate: this.getHoverd('estate', k),
      visa: this.getHoverd('visa', k),
      travel: this.getHoverd('travel', k),
      translation: this.getHoverd('translation', k),
      work: this.getHoverd('work', k),
      other: this.getHoverd('other', k)
    })
  },
  getHoverd: function (src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '')
  }
})
