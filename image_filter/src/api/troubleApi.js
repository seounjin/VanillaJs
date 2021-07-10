import DummyData from '../model/dummyData.js';


const request = async() => {

    try {

        const response = await DummyData.dataList();

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

};

export default api;