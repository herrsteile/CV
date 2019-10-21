import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({ placeholder, type, inputValue, onChange, name, clicked, onKeyDown, ...rest }) => {
    return (
        <input
            className='Input'
            type={type}
            placeholder={placeholder}
            value={inputValue}
            onChange={onChange}
            name={name}
            onKeyDown={e => {
                if (e.key === 'Enter') {
                    clicked()
                }
            }}
            {...rest}
        >
        </input>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
    inputValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    clicked: PropTypes.func
};

export default Input;