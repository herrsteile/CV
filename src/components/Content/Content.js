import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Auth from '../Auth/Auth';
import WorkWithApi from './WorkWithApi/WorkWithApi';
import Profile from './Profile/Profile';
import Appeal from './Appeal/Appeal';
import Skills from './Skills/Skills';
import './Content.scss';

const Content = ({ onChangeHandlerForNewUserName, onChangeHandlerForNewUserSurname, inputValueForName, inputValueForSurname }) => {
    return (
        <div className='Content'>
            <Redirect
                from="/"
                to="/profile/auth"
            />
            <Route
                path="/profile/auth"
                render={() => <Auth
                    onChangeHandlerForNewUserName={onChangeHandlerForNewUserName}
                    onChangeHandlerForNewUserSurname={onChangeHandlerForNewUserSurname}
                    inputValueForName={inputValueForName}
                    inputValueForSurname={inputValueForSurname}
                />}
            />
            <Route
                path="/profile"
                render={() => <Profile
                    name={inputValueForName}
                    surname={inputValueForSurname}
                />}
            />
            <Route
                exact
                path="/appeal"
                render={() => <Appeal />}
            />
            <Route
                exact path="/skills"
                render={() => <Skills />}
            />
            <Route
                path="/workwithapi"
                render={() => <WorkWithApi />}
            />
        </div>
    );
}

Content.propTypes = {
    onChangeHandlerForNewUserName: PropTypes.func.isRequired,
    onChangeHandlerForNewUserSurname: PropTypes.func.isRequired,
    inputValueForName: PropTypes.string.isRequired,
    inputValueForSurname: PropTypes.string.isRequired
};

export default Content;