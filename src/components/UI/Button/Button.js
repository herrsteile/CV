import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children = "Send", clicked }) => (
        <button className='Button' onClick={clicked} onKeyDown={e => e}>
            {children}
        </button>
    );

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    clicked: PropTypes.func
};

export default Button;