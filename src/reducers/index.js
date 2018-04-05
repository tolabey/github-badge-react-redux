import {
    TIMEOUT,
    STATUS,
    UPDATE_BADGE_DATA
} from "../const";
import I from "immutable"


export function reducer(state = I.Map(), action){
    switch (action.type){

        case UPDATE_BADGE_DATA:
            let newState = I.Map();
            for(let key in action.payload) {
                newState = newState.set(key, action.payload[key]);
            }
            return newState;
        case TIMEOUT:
            console.log(action.payload);
            return state.set("timeout", action.payload);
        case STATUS:
            return state.set("status", action.payload);
        default:
            return state;
    }
}
