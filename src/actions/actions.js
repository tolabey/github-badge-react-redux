import {
    TIMEOUT,
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
        type: TIMEOUT,
        payload: timeout
    }
}