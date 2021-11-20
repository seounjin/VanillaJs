import DummyData from '../model/dummyData.js';


const request = async(productId='') => {

    try {
        let response = null;
        if (productId){
            response = await DummyData.productList(productId);
        } else {
            response = await DummyData.productLists();
        }

        return response;
    } catch (error) {
        throw new Error('에러');
    }

};


const api = {

    fetchProducts: async() => {
        
        try {
            const data = await request();
            return data;
        } catch (error) {
            throw new Error('fetchProducts error');
        }

    },

    fetchProduct: async(productId) => {
        
        try {
            const data = await request(productId);
            return data;
        } catch (error) {
            throw new Error('fetchProducts error');
        }

    }

};

export default api;