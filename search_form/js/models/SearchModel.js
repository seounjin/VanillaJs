const data = [
  {
    id: 1,
    name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
    image: 'http://localhost:3000/img/irin.jpg'
  },
  {
    id: 2,
    name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
    image: 'http://localhost:3000/img/white.jpg'
  }
]

export default {
  list(query) {
    return new Promise(res => {
      setTimeout(()=> {
        res(data)
      }, 200);
    })
  }
}