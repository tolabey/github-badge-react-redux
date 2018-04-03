const initialState = "facebook";

export default (state = initialState, action) => {
    switch (action.type){
        case 'CHANGE_USER_NAME':
            return action.payload;
        default:
            return state;
    }
}