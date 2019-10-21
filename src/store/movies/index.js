import * as actionTypes from '../actionTypes';

const initialState = {
    isFetching: false,
    moviesList: []
}

const toggleLoading = (state, action) => {
    return {
        ...state,
        isFetching: action.status
    };
};

const setMoviesList = (state, action) => {
    return {
        ...state,
        moviesList: action.movies
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_LOADING: return toggleLoading(state, action);
        case actionTypes.SET_MOVIES_LIST: return setMoviesList(state, action);
        default: return state;
    };
};

export default reducer;