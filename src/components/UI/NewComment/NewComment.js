import React from 'react';
import PropTypes from 'prop-types';

import InputWithButton from '../InputWithButton/InputWithButton';
import './NewComment.scss';

const NewComment = ({ inputValue, changed, placeholder, click }) => {
    return (
        <div className="NewComment">
            <InputWithButton
                name='comment'
                inputValue={inputValue}
                type="text"
                placeholder={placeholder}
                changed={changed} 
                clicked={click}
                />
        </div>
    );
};

NewComment.propTypes = {
    inputValue: PropTypes.string.isRequired,
    changed: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    click: PropTypes.func.isRequired
};

export default NewComment;