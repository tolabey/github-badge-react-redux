export const CHANE_USER_NAME = "CHANGE_USER_NAME";

export function changeUserName(userName){
    console.log(userName);
    return {
        type: CHANE_USER_NAME,
        payload: userName
    }
}