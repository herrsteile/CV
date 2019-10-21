import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './InputWithButton.scss';

class InputWithButton extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const { type, placeholder, inputValue, changed, isFetching, clicked, activeBtnText, btnText, name } = this.props
        return (
            <div className="InputWithButton" >
                <Input
                    type={type}
                    placeholder={placeholder}
                    inputValue={inputValue}
                    onChange={changed}
                    name={name}
                    clicked={clicked}
                />
                <Button clicked={clicked}>
                    {isFetching ? activeBtnText : btnText}
                </Button>
            </div>
        );
    }
}

InputWithButton.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    inputValue: PropTypes.string,
    changed: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    clicked: PropTypes.func.isRequired,
    activeBtnText: PropTypes.string,
    btnText: PropTypes.string,
    name: PropTypes.string
};

export default InputWithButton;