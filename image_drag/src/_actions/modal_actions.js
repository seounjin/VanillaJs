
import { LIKE_UPDATE, DISLIKE_UPDATE, CARD_REQUEST } from './types.js';
import { data } from '../model/dummyData.js';
import roadMapCardApi from '../api/roadMapCardApi.js';


export function CardRequest () {
    
    const request = new Promise((res) => setTimeout(res(data), 3000))
    // const request = roadMapCardApi.roadMapCardList().then( data => {return data})
    
    return {
        type: CARD_REQUEST,
        payload: data
    };
};

export function LikeUpdate(num, cNum) {

    return {
        type: LIKE_UPDATE,
        col: num,
        row: cNum
        
    };
};

export function disLikeUpdate(num, cNum) {

    return {
        type: DISLIKE_UPDATE,
        col: num,
        row: cNum
    };
};