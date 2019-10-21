import * as actionTypes from '../actionTypes';

const initialState = {
    allSkills: [],
    userSkills: [],
    filtersType: [],
    filtersExperience: []
}

const fetchAllSkills = (state, action) => {
    return {
        ...state,
        allSkills: action.skills
    }
}

const updateUserSkills = (state, action) => {
    return {
        ...state,
        userSkills: action.skills
    }
}

const updateFiltersType = (state, action) => {
    return {
        ...state,
        filtersType: action.filterTypes
    }
}

const updateFiltersExperience = (state, action) => {
    return {
        ...state,
        filtersExperience: action.filterExperience
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER_SKILLS: return updateUserSkills(state, action);
        case actionTypes.SET_FILTERS_TYPE: return updateFiltersType(state, action);
        case actionTypes.SET_FILTERS_EXPERIENCE: return updateFiltersExperience(state, action);
        case actionTypes.FETCH_ALL_SKILLS: return fetchAllSkills(state, action);
        default: return state;
    }
}

export default reducer;