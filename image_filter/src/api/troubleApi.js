import DummyData from '../model/dummyData.js';


const request = async(query='') => {

    try {
        // console.log("query", query)
        const response = query ? await DummyData.cardList(query) : await DummyData.dataList();

        return response;


    } catch (error) {
        throw new Error('request',error);
    }
};


const api = { requestCategory: async() => {

        try {
            const data = await request();

            return data;

        } catch (error) {
            throw new Error('requestCategory',error);
        }

    },

    requestCardList: async(query) => {

        try {

            const data = await request(query);

            return data;

        } catch (error) {
            throw new Error('requestCardList',error);
        }

    },

};

export default api;