import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)


ResultView.setup = function (el) {
    this.init(el)
}


ResultView.render = function(data=[]) {
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : '검색 결과가 없습니다.'
    this.show()
}

ResultView.getSearchResultsHtml = function (data) {
    
    return data.reduce((html, item) => {
      html += this.getSearchItemHtml(item)
            
      return html
    }, '<ul>') + '</ul>'
}

ResultView.getSearchItemHtml = function (item) {
    console.log("data",item.image)
      return `<li>
            <img src="${item.image}" />
            <p>${item.name}/p>
            </li>`
}


export default ResultView