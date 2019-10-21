import * as actionTypes from '../actionTypes';

export const fetchMovies = searchValue => {
    return dispatch => {
        const apiKey = '14419b7220125926f48f7bbbaed51b90';
        const baseUrl = 'https://api.themoviedb.org/3/search/movie';

        dispatch(toggleLoading(true));

        fetch(`${baseUrl}?api_key=${apiKey}&language=en-US&query=${searchValue}&page=1&include_adult=false`)
            .then(res => res.json())
            .then(movies =>  dispatch(setMoviesList(movies.results)))
            .then(() => dispatch(toggleLoading(false)))
            .catch(err => console.log('[err]', err));
    }
}

const toggleLoading = status => {
    return {
        type: actionTypes.TOGGLE_LOADING,
        status
    }
}

const setMoviesList = movies => {
    return {
        type: actionTypes.SET_MOVIES_LIST,
        movies
    }
}