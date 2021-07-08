import DummyData from '../model/dummyData.js';

// const ENDPOINT = 'http://localhost:3000';

const request = async(nodeId='') => {

    try {

        const response = await DummyData.characterList(nodeId);

        return response;


    } catch (error) {
        throw new Error('무언가 잘못',error);
    }
};


const api = { rootRequest: async() => {

        try {
            const data = await request();
            return data;

        } catch (error) {
            throw new Error('rootRequest',error);
        }

    },

    nodeRequest: async(nodeId) => {

        try {
            
            const data = await request(nodeId);
            return data;

        } catch (error) {
            throw new Error('nodeRequest',error);
        }

    }
};

export default api;