import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateUserSkills } from '../../../../../store/skills/actions';
import './Option.scss';

class Option extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classNameLi: "Option",
            classNameI: "far fa-square"
        }
    }

    selected = () => {
        // this.state.classNameLi.includes("Selected") ? console.log('true') : console.log('false');

        switch (this.state.classNameLi) {
            case "Option":
                this.setState({
                    classNameLi: "Option Selected",
                    classNameI: "far fa-check-square"
                })
                
                let filtredSkills = this.props.allSkills.filter(skill => {
                    return skill.type === this.props.label;
                });

                return (this.props.updateUserSkills(filtredSkills))

            default:
                this.setState({
                    classNameLi: "Option",
                    classNameI: "far fa-square"
                });
                return this.props.updateUserSkills(this.props.allSkills)
        }
    }

    render() {
        const { label } = this.props;
        const { classNameLi, classNameI } = this.state;

        return (
            <li className={classNameLi} data-option={label} onClick={this.selected}>
                <i className={classNameI}></i>
                {label}
            </li >
        );
    };
}

Option.propTypes = {
    allSkills: PropTypes.array,
    userSkills: PropTypes.array.isRequired,
    filtersType: PropTypes.array,
    filtersExperience: PropTypes.array
};

const mapStateToProps = state => {
    return {
        allSkills: state.skills.allSkills,
        userSkills: state.skills.userSkills,
        filtersType: state.skills.filtersType,
        filtersExperience: state.skills.filtersExperience
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateUserSkills: status => dispatch(updateUserSkills(status))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Option);