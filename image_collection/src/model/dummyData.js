

export const data = [
    
    {
        "id":"1",
        "name":"아이린",
        "type":"DIRECTORY",
        "filePath": './img/Irene.jpg',
        "parent":null,
    },
    
    {
        "id":"2",
        "name":"앤",
        "type":"DIRECTORY",
        "filePath": './img/Ann.jpg',
        "parent":null,
    },


    {
        "id":"11",
        "name":"아이린 배경",
        "type":"FILE",
        "filePath": './img/t2.jpg',
        "parent": {
            "id": "1"
        }
    },
    
    {
        "id":"12",
        "name":"시온",
        "type":"DIRECTORY",
        "filePath": './img/Zion.jpg',
        "parent":{
            "id": "1"
        },
    },

    {
        "id":"123",
        "name":"시온",
        "type":"FILE",
        "filePath": './img/t6.jpg',
        "parent":{
            "id": "12"
        },
    },

    {
        "id":"22",
        "name":"앤",
        "type":"FILE",
        "filePath": './img/t1.jpg',
        "parent":{
            "id": "2"
        },
    },


];


export default {

    characterList (nodeId) {


        if (nodeId){
            return new Promise(res => {

                setTimeout(() => { //루트 아님
                    const childData = data.filter(item => item.parent ? item.parent.id === nodeId : null);
                    res(childData);

                }, 300)
            });

        } else {

            return new Promise(res => {
                setTimeout(() => { //루트
                    const rootData = data.filter(item => item.parent === null);
                    res(rootData);
                }, 300)
            });
        }
        
    }

};
