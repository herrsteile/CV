import * as actionTypes from '../actionTypes';

const initialState = {
    userData: []
}

const updateUserData = (state, action) => {
    return {
        ...state,
        userData: action.data
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_DATA: return updateUserData(state, action);
        default: return state;
    }
}

export default reducer;