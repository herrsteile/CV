import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import ModalAvatar from './ModalAvatar/ModalAvatar';
import './UserInformation.scss';


class UserInformation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    render() {
        const { birthday = "10 october 1997", city = "Dnipro", education = "DIIT", maritalStatus = "Married", phoneNumber = "+38(067)-564-35-40", github = "https://github.com/herrsteile", email = "miroshnychenko.job@gmail.com", name, surname } = this.props;

        return (
            <div className='UserInformation'>
                <div className='ProfilePhoto'>
                    <NavLink to="/profile/modalAvatar">
                        <img src="https://i.pinimg.com/564x/86/34/ab/8634ab84d12e0e37785bb19f31e205e6.jpg" alt="profile" id="UserProfilePhoto"/>
                    </NavLink>
                </div>
                <div className='UserData'>
                    <Route path="/profile/modalAvatar" render={() => <ModalAvatar name={name} surname={surname} />} />
                    <div className="UserDataLeft">
                        <ul>
                            <li>Date of Birthday:</li>
                            <li>City:</li>
                            <li>Education:</li>
                            <li>Marital status:</li>
                            <br />
                            <li>Phone Number:</li>
                            <li>GitHub:</li>
                            <li>Email:</li>
                        </ul>
                    </div>
                    <div className="UserDataRight">
                        <ul>
                            <li>{birthday}</li>
                            <li>{city}</li>
                            <li>{education}</li>
                            <li>{maritalStatus}</li>
                            <br />
                            <li>{phoneNumber}</li>
                            <a href="https://github.com/herrsteile" id="github" target="blank">{github}</a>
                            <li>{email}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

UserInformation.propTypes = {
    birthday: PropTypes.string,
    city: PropTypes.string,
    education: PropTypes.string,
    maritalStatus: PropTypes.string,
    phoneNumber: PropTypes.string,
    github: PropTypes.string,
    email: PropTypes.string
};

export default UserInformation;