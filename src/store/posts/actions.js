import * as actionTypes from '../actionTypes';

export const addPost = posts => {
    return {
        type: actionTypes.ADD_POST,
        posts: {
            text: posts,
            time: new Date().toLocaleTimeString().slice(0, 5)
        }
    };
};

export const addComment = comment => {
    return {
        type: actionTypes.ADD_COMMENT,
        comment: {
            text: comment,
            time: new Date().toLocaleTimeString().slice(0, 5)
        }
    };
};