import * as actionTypes from '../actionTypes';


export const fetchSkills = () => {
    return dispatch => {
        const baseUrl = 'https://my-json-server.typicode.com/herrsteile/json/db';

        fetch(baseUrl)
            .then(res => res.json())
            .then((user) => {
                dispatch(updateUserSkills(user.skills));
                dispatch(fetchAllSkills(user.skills));
                dispatch(updateFiltersType([...new Set(user.skills.map(skill => (skill.type)))]));
                dispatch(updateFiltersExperience([...new Set(user.skills.map(skill => {
                    if (skill.experience && skill.experience.includes('year')) {
                        return 12 * parseInt(skill.experience);
                    } else if (!skill.experience) {
                        return 0;
                    } else {
                        return parseInt(skill.experience);
                    }
                }))].sort((a, b) => a - b)))
            })
            .catch(err => console.log('[err]', err));
    }
}

export const updateUserSkills = skills => {
    return {
        type: actionTypes.SET_USER_SKILLS,
        skills
    }
}

const updateFiltersType = filterTypes => {
    return {
        type: actionTypes.SET_FILTERS_TYPE,
        filterTypes
    }
}

const updateFiltersExperience = filterExperience => {
    return {
        type: actionTypes.SET_FILTERS_EXPERIENCE,
        filterExperience
    }
}

const fetchAllSkills = skills => {
    return {
        type: actionTypes.FETCH_ALL_SKILLS,
        skills
    }
}
