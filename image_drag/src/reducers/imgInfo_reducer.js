import { SMALLCARD_REQUEST } from '../actions/types';

export default function (state={}, action) {

    switch(action.type) {
        case SMALLCARD_REQUEST:
            return { ...state, data:action.smallCard }

        default:
            return state;
    }

}