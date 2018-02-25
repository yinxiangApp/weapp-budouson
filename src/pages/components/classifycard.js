class Component {
  constructor (options = {}) {
    Object.assign(this, {
      options
    })
    this.__init()
  }

  /**
   * 初始化
   */
  __init () {

  }

  tap (e) {
    var index = e.currentTarge.dataset.index
    if (index === this.data.selectedIndex) {
      return
    }
    this.setData({
      selecteIndex: index
    })
    this.triggerEvent('classifycardselected', {index: index})
  }
}

export default Component
