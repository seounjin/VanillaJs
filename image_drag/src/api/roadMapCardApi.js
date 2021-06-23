


// 스샷 제목, 이미지 경로
const data = [

    {   'num': 1,
        'title': '스크린샷',
        'info' : [
                    { cNum:1, exp:'t1', img:'http://localhost:3000/img/t1.jpg',total:0 },
                    { cNum:2, exp:'t2', img:'http://localhost:3000/img/t2.jpg',total:0 },
                    { cNum:3, exp:'t4', img:'http://localhost:3000/img/t4.jpg',total:0 },
                    { cNum:4, exp:'t5', img:'http://localhost:3000/img/t5.jpg',total:0 },
                    { cNum:5, exp:'t6', img:'http://localhost:3000/img/t6.jpg',total:0 },
                    { cNum:6, exp:'t7', img:'http://localhost:3000/img/t7.jpg',total:0 }
                ]},

    {   'num': 2,
        'title': '팬아트',
        'info' : [
                    { cNum:1, exp:'아이린', img:'http://localhost:3000/img/Irene1.png', total:0 },
                    { cNum:2, exp:'아이린', img:'http://localhost:3000/img/Irene1.png', total:0 },
                    { cNum:3, exp:'아이린', img:'http://localhost:3000/img/Irene1.png', total:0 },
                    { cNum:4, exp:'아이린', img:'http://localhost:3000/img/Irene1.png', total:0 },
                    { cNum:5, exp:'아이린', img:'http://localhost:3000/img/Irene1.png', total:0 },
                    { cNum:6, exp:'아이린', img:'http://localhost:3000/img/Irene1.png', total:0 }
                ]},

   {
        'num': 3,
        'title': '팬아트',
        'info' : [
                    { cNum:1, exp:'알리사', img:'http://localhost:3000/img/white.png', total:0 },
                    { cNum:2, exp:'알리사', img:'http://localhost:3000/img/white.png', total:0 },
                    { cNum:3, exp:'알리사', img:'http://localhost:3000/img/white.png', total:0 },
                    { cNum:4, exp:'알리사', img:'http://localhost:3000/img/white.png', total:0 },
                    { cNum:5, exp:'알리사', img:'http://localhost:3000/img/white.png', total:0 },
                    { cNum:6, exp:'알리사', img:'http://localhost:3000/img/white.png', total:0 }
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
