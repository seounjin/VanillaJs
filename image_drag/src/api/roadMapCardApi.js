


// 스샷 제목, 이미지 경로
const data = [
    { exp:'아이린', img:'http://localhost:3000/img/Irene1.png'} , 
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
