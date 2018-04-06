import {
    SET_DEBOUNCE_TIMEOUT,
    UPDATE_BADGE_DATA
} from "../const";
import I from "immutable"


export function reducer(state = I.Map(), action){
    switch (action.type){
        case UPDATE_BADGE_DATA:
            return state.set("badgeData", I.fromJS(action.payload));
        case SET_DEBOUNCE_TIMEOUT:
            return state.set("timeout", action.payload);
        default:
            return state;
    }
}
