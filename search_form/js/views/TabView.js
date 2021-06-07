import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)


TabView.setup = function (el) {
    this.init(el)
    this.bindEvents()
    return this
}



TabView.setActiveTab = function (tabName) {
    Array.from(this.el.children).forEach(li => {
      li.className = li.innerHTML === tabName ?  'active' : ''
    })

  this.show()
}

//탭 버튼 바인드
TabView.bindEvents = function () {
    Array.from(this.el.children).forEach(li => {
        li.addEventListener('click', e => this.tabClick(li.innerHTML))
      })
}


// 키워드탭 클릭
TabView.tabClick = function (tabName) {
    this.setActiveTab(tabName)
    this.emit('@change', {tabName})
}


export default TabView