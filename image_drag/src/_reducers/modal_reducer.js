import { TOTAL_UPDATE, CARD_REQUEST } from '../_actions/types.js';

export default function (state={}, action) {


    switch(action.type) {
        case CARD_REQUEST:
            return {...state, data: action.payload}
        
        case TOTAL_UPDATE:

            const temp = {data:state.data.map((item1) => {
            
                return action.col === item1.num ? {...item1, info: item1.info.map(item2 => {
                    return item2.cNum === action.row ?  {...item2, total: item2.total + 1} : item2 

                    })}
                
                    :  item1

                })
            }
            return {...state, ...temp};
        
        default:
            return state;
    }

};