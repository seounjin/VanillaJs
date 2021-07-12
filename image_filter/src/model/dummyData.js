const CATEGORY = [
    '알버스','아이린','시온','앤','비앙카','알리사'
];

const CARDLIST = [
    
    {
        id:1,
        title:'아이린',
        character:'아이린',
        img:'../../img/Irene.jpg',
        descript:'아이린 설명',
        job:['무도가','전투법사'],
        op:'true',
    },

    {
        id:2,
        title:'시온',
        character:'시온',
        img:'../../img/Zion.jpg',
        descript:'시온 설명',
        job:['전투법사','흑마도사'],
        op:'false',
    },

    {
        id:3,
        title:'알버스',
        character:'알버스',
        img:'../../img/Alice.jpg',
        descript:'알버스 설명',
        job:['검호','백기사'],
        op:'true',
    },

    {
        id:4,
        title:'앤',
        character:'앤',
        img:'../../img/Ann.jpg',
        descript:'앤 설명',
        job:['마녀', '백마도사'],
        op:'true',
    },

    {
        id:5,
        title:'비앙카',
        character:'비앙카',
        img:'../../img/t1.jpg',
        descript:'비앙카 설명',
        job:['흑마도사','마녀'],
        op:'false',
    },

    {
        id:6,
        title:'알리사',
        character:'알리사',
        img:'../../img/white.png',
        descript:'알리사 설명',
        job:['백기사','검호'],
        op:'false',
    },

];


export default {

    dataList () {

            return new Promise(res => {
                setTimeout(() => { //루트
                    
                    res(CATEGORY);
                }, 300)
            });
    },
        
    cardList (query) {

        const [_, data] = query.split('?');

        // console.log("query", data)
        const dic = data.split('&').reduce((temp, item) => {
                    const [key, value] = item.split('=');
                    
                    return {...temp, [key]: temp[key] ? [...temp[key], value ] : [value]};
                
                    },{});
        
        // console.log("확인",dic);
        const result = CARDLIST.filter(item =>{         
    
                for (const key in item) {
                    if (key === 'id' || key === 'img'|| key === 'descript' ){
                        continue
                    }    
                    
                    if(key === 'job' && dic[key]){                   
                        for (let index = 0; index < dic['job'].length; index++){
                            if (item[key][0] === dic['job'][index] || item[key][1] === dic['job'][index]){
                                return item;
                            }
                        }

                    } else {
                        if(item[key] && dic[key] && item[key] === dic[key][0] ){    
                        return item;     
                    }

                }
                            
            }
        })


        return new Promise(res => {
                setTimeout(() => { 
                    res(result);
            }, 300)
        });
    }

};
