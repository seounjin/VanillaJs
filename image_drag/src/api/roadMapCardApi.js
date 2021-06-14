


// 스샷 제목, 이미지 경로
const data =[

    {
        'title': '스크린샷',
        'info' : [
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'}
                ]},

    {
        'title': '펜아트',
        'info' : [
                    { exp:'알리사', img:'http://localhost:3000/img/white.png'},
                    { exp:'알리사', img:'http://localhost:3000/img/white.png'},
                    { exp:'알리사', img:'http://localhost:3000/img/white.png'},
                    { exp:'알리사', img:'http://localhost:3000/img/white.png'},
                    { exp:'알리사', img:'http://localhost:3000/img/white.png'},
                    { exp:'알리사', img:'http://localhost:3000/img/white.png'}
                ]}
];


export default {

    roadMapCardList () {
        return new Promise(res => {
            setTimeout(() => {
                res(data)
            }, 200)
        })
    }

}
