import {
    SET_DEBOUNCE_TIMEOUT,
    UPDATE_BADGE_DATA
} from "../const";


export function updateBadgeDataAction(allFields){
    return {
        type: UPDATE_BADGE_DATA,
        payload: allFields
    }
}

export function timeoutAction(timeout){
    return {
        type: SET_DEBOUNCE_TIMEOUT,
        payload: timeout
    }
}