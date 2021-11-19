import DummyData from '../model/dummyData.js';


const request = async(productId='') => {

    try {

        const response = await DummyData.productList();
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
}

export default api;