


// 스샷 제목, 이미지 경로
const data =[

    {
        'title': '스크린샷',
        'info' : [
                    { exp:'t1', img:'http://localhost:3000/img/t1.jpg'},
                    { exp:'t2', img:'http://localhost:3000/img/t2.jpg'},
                    { exp:'t4', img:'http://localhost:3000/img/t4.jpg'},
                    { exp:'t5', img:'http://localhost:3000/img/t5.jpg'},
                    { exp:'t6', img:'http://localhost:3000/img/t6.jpg'},
                    { exp:'t7', img:'http://localhost:3000/img/t7.jpg'}
                ]},

    {
        'title': '팬아트',
        'info' : [
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'}
                ]},
    {
        'title': '팬아트',
        'info' : [
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'}
                ]},
    
    {
        'title': '팬아트',
        'info' : [
                    { exp:'알리사', img:'http://localhost:3000/img/white.png'},
                    { exp:'알리사', img:'http://localhost:3000/img/white.png'},
                    { exp:'알리사', img:'http://localhost:3000/img/white.png'},
                    { exp:'알리사', img:'http://localhost:3000/img/white.png'},
                    { exp:'알리사', img:'http://localhost:3000/img/white.png'},
                    { exp:'알리사', img:'http://localhost:3000/img/white.png'}
                ]},
    {
        'title': '팬아트',
        'info' : [
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'},
                    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'}
                ]},

                
    {         
        'title': '팬아트',
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
            }, 300)
        })
    }

}
