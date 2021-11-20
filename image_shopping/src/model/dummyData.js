

export default {

    productLists () {

            return new Promise(res => {
                setTimeout(() => {         
                    res(PRODUCT_LIST);
                }, 300)
            });
    },

    productList (productId) {

        const data = PRODUCT_INFO.filter(item => {
            if(item.id === parseInt(productId)){
                return item
            } 
            
        });

        return new Promise(res => {
            setTimeout(() => {     
                res(data[0]);
            }, 300)
        });
},


};

const PRODUCT_INFO = [
{
    "id":1,
    "name": "이미지1",
    "imageUrl":'../../img/1.jpg',
    "price": 10000,
    "productOptions": [
        {
        "id": 1,
        "name": "100개 묶음",
        "price": 0,
        "stock": 5,
        },
        {
        "id": 2,
        "name": "200개 묶음",
        "price": 8000,
        "stock": 5,
        },
  ],
},
{
  "id":2,
    "name": "이미지2",
    "imageUrl":'../../img/2.jpg',
    "price": 10000,
    "productOptions": [
        {
        "id": 1,
        "name": "100개 묶음",
        "price": 0,
        "stock": 5,
        },
        {
        "id": 2,
        "name": "200개 묶음",
        "price": 8000,
        "stock": 5,
        },
  ],
},
{
  "id":3,
    "name": "이미지3",
    "imageUrl":'../../img/3.jpg',
    "price": 10000,
    "productOptions": [
        {
        "id": 1,
        "name": "100개 묶음",
        "price": 0,
        "stock": 5,
        },
        {
        "id": 2,
        "name": "200개 묶음",
        "price": 8000,
        "stock": 5,
        },
  ],
},
{
  "id":4,
    "name": "이미지4",
    "imageUrl":'../../img/4.jpg',
    "price": 10000,
    "productOptions": [
        {
        "id": 1,
        "name": "100개 묶음",
        "price": 0,
        "stock": 5,
        },
        {
        "id": 2,
        "name": "200개 묶음",
        "price": 8000,
        "stock": 5,
        },
  ],
},
{
  "id":5,
    "name": "이미지5",
    "imageUrl":'../../img/5.jpg',
    "price": 10000,
    "productOptions": [
        {
        "id": 1,
        "name": "100개 묶음",
        "price": 0,
        "stock": 5,
        },
        {
        "id": 2,
        "name": "200개 묶음",
        "price": 8000,
        "stock": 5,
        },
  ],
},
{
  "id":6,
    "name": "이미지6",
    "imageUrl":'../../img/6.jpg',
    "price": 10000,
    "productOptions": [
        {
        "id": 1,
        "name": "100개 묶음",
        "price": 0,
        "stock": 5,
        },
        {
        "id": 2,
        "name": "200개 묶음",
        "price": 8000,
        "stock": 5,
        },
  ],
},
{
  "id":7,
    "name": "이미지7",
    "imageUrl":'../../img/7.jpg',
    "price": 10000,
    "productOptions": [
        {
        "id": 1,
        "name": "100개 묶음",
        "price": 0,
        "stock": 5,
        },
        {
        "id": 2,
        "name": "200개 묶음",
        "price": 8000,
        "stock": 5,
        },
  ],
},
{
  "id":8,
    "name": "이미지8",
    "imageUrl":'../../img/8.jpg',
    "price": 10000,
    "productOptions": [
        {
        "id": 1,
        "name": "100개 묶음",
        "price": 0,
        "stock": 5,
        },
        {
        "id": 2,
        "name": "200개 묶음",
        "price": 8000,
        "stock": 5,
        },
  ],
},
{
  "id":9,
    "name": "이미지9",
    "imageUrl":'../../img/9.jpg',
    "price": 10000,
    "productOptions": [
        {
        "id": 1,
        "name": "100개 묶음",
        "price": 0,
        "stock": 5,
        },
        {
        "id": 2,
        "name": "200개 묶음",
        "price": 8000,
        "stock": 5,
        },
  ],
},
{
  "id":10,
    "name": "이미지10",
    "imageUrl":'../../img/10.jpg',
    "price": 10000,
    "productOptions": [
        {
        "id": 1,
        "name": "100개 묶음",
        "price": 0,
        "stock": 5,
        },
        {
        "id": 2,
        "name": "200개 묶음",
        "price": 8000,
        "stock": 5,
        },
  ],
},
{
  "id":11,
    "name": "이미지11",
    "imageUrl":'../../img/11.jpg',
    "price": 10000,
    "productOptions": [
        {
        "id": 1,
        "name": "100개 묶음",
        "price": 0,
        "stock": 5,
        },
        {
        "id": 2,
        "name": "200개 묶음",
        "price": 8000,
        "stock": 5,
        },
  ],
},
{
  "id":12,
    "name": "이미지12",
    "imageUrl":'../../img/12.jpg',
    "price": 10000,
    "productOptions": [
        {
        "id": 1,
        "name": "100개 묶음",
        "price": 0,
        "stock": 5,
        },
        {
        "id": 2,
        "name": "200개 묶음",
        "price": 8000,
        "stock": 5,
        },
  ],
},


]
const PRODUCT_LIST = [
    
    {
        id:1,
        name: "이미지1",
        imageUrl:'../../img/1.jpg',
        price: 10000,
    },

    {
        id:2,
        name: "이미지2",
        imageUrl:'../../img/2.jpg',
        price: 10000,
    },

    {
        id:3,
        name: "이미지3",
        imageUrl:'../../img/3.jpg',
        price: 10000,
    },

    {
        id:4,
        name: "이미지4",
        imageUrl:'../../img/4.jpg',
        price:10000,
    },

    {
        id:5,
        name: "이미지5",
        imageUrl:'../../img/5.jpg',
        price: 10000,
    },

    {
        id:6,
        name: "이미지6",
        imageUrl:'../../img/6.jpg',
        price:10000,
    },

    {
        id:7,
        name: "이미지7",
        imageUrl:'../../img/7.jpg',
        price:10000,
    },

    {
        id:8,
        name: "이미지8",
        imageUrl:'../../img/8.jpg',
        price: 10000,
    },

    {
        id:9,
        name: "이미지9",
        imageUrl:'../../img/9.jpg',
        price:10000,
    },

    {
        id:10,
        name: "이미지10",
        imageUrl:'../../img/10.jpg',
        price:10000,
    },

    {
        id:11,
        name: "이미지11",
        imageUrl:'../../img/11.jpg',
        price:10000,
    },
    
    {
        id:12,
        name: "이미지12",
        imageUrl:'../../img/12.jpg',
        price:10000,
    },
];