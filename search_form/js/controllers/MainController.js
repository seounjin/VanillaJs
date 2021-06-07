import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'


const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
    .on('@submit', e => this.onSubmit( e.detail.input))
    .on('@reset', e => this.onResetForm())

    
    TabView.setup(document.querySelector('#tabs'))
    .on('@change', e => this.keywordTab(e.detail.tabName))


    KeywordView.setup(document.querySelector('#search-keyword'))
    .on('@click', e => this.onClickKeyword(e.detail.keyword))



    ResultView.setup(document.querySelector('#search-result'))


    this.selectedTab = '추천 검색어'
    this.renderView()
  },

  renderView() {
    TabView.setActiveTab(this.selectedTab)

    if (this.selectedTab === '추천 검색어' ) {
      KeywordModel.list().then(data => {
        KeywordView.render(data)
      })
      
    } else {
      console.log("최근 검색어")
    }



    ResultView.hide()
  },

  search(query) {

    // Api 호출
    SearchModel.list(query).then(data => {
      this.onSearchResult(data)
    })
  },

  onSubmit(input) {
    console.log(input)
    this.search(input)
  },

  onResetForm() {
    console.log("resetForm")
    this.renderView()
  },

  onSearchResult(data) {
    TabView.hide()
    KeywordView.hide()
    ResultView.render(data)
  },

  keywordTab(tabName) {
    this.selectedTab = tabName
    this.renderView()
  },

  onClickKeyword (keyword) {
    this.search(keyword)
    FormView.setValue(keyword)
  }

}