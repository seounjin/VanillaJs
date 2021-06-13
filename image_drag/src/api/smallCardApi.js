


// 이미지, 캐릭터이름, 직업
const data = [
            { name:'알리스', job:'검호/마검사', img:'http://localhost:3000/img/Alice.jpg'} ,
            { name:'아이린', job:'무도가/전투법사', img:'http://localhost:3000/img/Irene.jpg'},
            { name:'시온', job:'흑마도사/전투법사', img:'http://localhost:3000/img/Zion.jpg'},
            { name:'앤', job:'백마도사/마녀', img:'http://localhost:3000/img/Ann.jpg'}   
];

export default {

    smallCardList () {
        return new Promise(res => {
            setTimeout(() => {
                res(data)
            }, 200)
        })
    }
    
}

