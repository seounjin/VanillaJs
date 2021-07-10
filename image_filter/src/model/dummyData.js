export const category = [
    '알버스','아이린','시온','지젤','비앙카','알리사'
];


export default {

    dataList () {

            return new Promise(res => {
                setTimeout(() => { //루트
                    
                    res(category);
                }, 300)
            });
        }
        
    

};
