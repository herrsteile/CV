import * as actionTypes from '../actionTypes';

export const fetchUserData = () => {
    return dispatch => {
        const baseUrl = 'https://my-json-server.typicode.com/herrsteile/json/userData';

        fetch(baseUrl)
            .then(res => res.json())
            .then((user) => dispatch(updateUserData(user)))
            .catch(err => console.log('[err]', err));
    }
}

export const updateUserData = data => {
    return {
        type: actionTypes.USER_DATA,
        data
    }
}