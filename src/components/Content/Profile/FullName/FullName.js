import React from 'react';
import PropTypes from 'prop-types';

import './FullName.scss';

const FullName = ({ firstName, lastName }) => {
    return (
        <div className='FullName'>
            <span >
                {firstName} {lastName}
            </span>
        </div>
    );
}

FullName.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
};

export default FullName;