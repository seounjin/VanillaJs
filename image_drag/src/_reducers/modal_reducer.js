import { TOTAL_UPDATE, CARD_REQUEST } from '../_actions/types.js';

export default function (state={}, action) {

    console.log("리듀서",state,action.payload);

    switch(action.type) {
        case CARD_REQUEST:
            return {...state, data: action.payload}
        
        case TOTAL_UPDATE:
            const temp = Number(state.data[action.col].info[action.row].total) + 1
            console.log("zzzz", temp)  
            // console.log( Number(item[action.col].info[action.row].total) + 1)
            return {...state, 
                data:Number(state.data[action.col].info[action.row].total) + 1
            };
        
        default:
            return state;
    }

};