

const storage = localStorage;

export const getItem = (key, defaultValue) => {
    
    try {
        const data = storage.getItem(key);

        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        return defaultValue;
    }

};

export const setItem = (key, item) => {

    storage.setItem(key,JSON.stringify(item));

};

export const clearItem = () => {

    storage.clear();
    
};