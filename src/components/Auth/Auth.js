import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input';
import Backdrop from '../UI/Backdrop/Backdrop';
import './Auth.scss';

const Auth = ({ onChangeHandlerForNewUserName, onChangeHandlerForNewUserSurname, inputValueForName, inputValueForSurname, history }) => {
    let button;
    if (inputValueForName || inputValueForSurname) {
        button = (
            <Link to="/profile">
                <Button>
                    Sign In
                </Button>
            </Link>)
    } else {
        button = (
            <Button>
                Clear
            </Button>
        )
    }

    return (
        <div className="Auth">
            <Backdrop />
            <div className="NewUserData">
                <Input
                    type="text"
                    placeholder="Enter your name"
                    inputValue={inputValueForName}
                    onChange={onChangeHandlerForNewUserName}
                    name={'userName'}
                    clicked={(inputValueForName || inputValueForSurname) ? () => history.push("/profile") : () => console.log('nope')}
                />
                <Input
                    type="text"
                    placeholder="Enter your surname"
                    inputValue={inputValueForSurname}
                    onChange={onChangeHandlerForNewUserSurname}
                    name={'userSurname'}
                    clicked={(inputValueForName || inputValueForSurname) ? () => history.push("/profile") : () => console.log('nope')}
                />
                {button}
            </div>
        </div>
    );
};

Auth.propTypes = {
    onChangeHandlerForNewUserName: PropTypes.func.isRequired,
    onChangeHandlerForNewUserSurname: PropTypes.func.isRequired,
    inputValueForName: PropTypes.string.isRequired,
    inputValueForSurname: PropTypes.string.isRequired,
};

export default withRouter(Auth);