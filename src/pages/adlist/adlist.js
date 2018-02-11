const addata = require('../../data/addata').data

// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    mainClassify: '',
    subClassifylist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad
    var obj = app.getSelectedClassify()

    var subClassifylist = addata.subclassify[obj.mainclassify]

    var subClassify = []
    for (var o in subClassifylist) {
      var id = subClassifylist[o]
      var classifyName = addata.dictionary[id]
      subClassify[subClassify.length] = {
        id: id,
        name: classifyName,
        class: ''
      }
    }

    subClassify[0].class = 'top-hoverd-btn'

    // this.updateBtnStatus(obj.subclassify)

    this.setData({
      mainClassify: addata.dictionary[obj.mainclassify],
      subClassify: subClassify
    })
  },

  showDetail (event) {
    var selectClassify = event.target.dataset.classifiy
    var subClassify = this.data.subClassify

    for (var o in subClassify) {
      if (subClassify[o].id === selectClassify) {
        subClassify[o].class = 'top-hoverd-btn'
      } else {
        subClassify[o].class = ''
      }
    }

    this.setData({
      subClassify: subClassify
    })
  },

  goDetailPage () {
    wx.navigateTo({
      url: '../addetail/addetail'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  },
  tonew: function () {
    console.log('new')
    this.updateBtnStatus('new')
    // this.setData({
    //   showHotResource: this.data.estateResource
    // })
  },
  toold: function () {
    console.log('old')
    this.updateBtnStatus('old')
    // this.setData({
    //   showHotResource: this.data.visaResource
    // })
  },
  tolend: function () {
    console.log('lend')
    this.updateBtnStatus('lend')
    // this.setData({
    //   showHotResource: this.data.travelResource
    // })
  },
  tostudent: function () {
    console.log('student')
    this.updateBtnStatus('student')
    this.setData({
      showHotResource: this.data.translationResource
    })
  },
  toshared: function () {
    console.log('shared')
    this.updateBtnStatus('shared')
    // this.setData({
    //   showHotResource: this.data.workResource
    // })
  },
  updateBtnStatus: function (k) {
    this.setData({
      new: this.getHoverd('new', k),
      old: this.getHoverd('old', k),
      lend: this.getHoverd('lend', k),
      student: this.getHoverd('student', k),
      shared: this.getHoverd('shared', k)
    })
  },
  getHoverd: function (src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '')
  }
})
