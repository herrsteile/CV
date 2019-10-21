import * as actionTypes from '../actionTypes';

const initialState = {
    profilePosts: [],
    avatarComments: []
}

const addPost = (state, action) => {
    return {
        ...state,
        profilePosts: [...state.profilePosts, action.posts]
    };
};

const addComment = (state, action) => {
    return {
        ...state,
        avatarComments: [...state.avatarComments, action.comment]
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_POST: return addPost(state, action);
        case actionTypes.ADD_COMMENT: return addComment(state, action);
        default: return state;
    };
};

export default reducer;