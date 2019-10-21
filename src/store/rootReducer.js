import { combineReducers } from 'redux';

import moviesReducer from './movies';
import skillsReducer from './skills'
import dataReducer from './userData'
import postsReducer from './posts'

export default combineReducers({
    skills: skillsReducer,
    userData: dataReducer,
    movies: moviesReducer,
    posts: postsReducer
});