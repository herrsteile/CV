import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../Input/Input';
import Option from './FiltredType/Option/Option';
import './Filters.scss';
import Filter from './FiltredType/Filter';

class Filters extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const { changedRangeFilter, filtersExperience, experienceFilterValue } = this.props;

        const filtersType = this.props.filtersType.map((type, i) => (
            <Option label={type} key={i} />
        ))

        return (
            <div className="Filters" >
                <Filter
                    type='Type'
                    filtersData={<ul>{filtersType}</ul>}
                />

                <Filter
                    type='Experience'
                    filtersData={
                        <div className="filterSlider">
                            <Input type="range" id="filterSliderContent" min={0} max={filtersExperience.slice(-1)} onChange={changedRangeFilter} />
                            <span>More then:</span><br />
                            <span>{experienceFilterValue} month</span>
                        </div>
                    } />
            </div>
        );
    }
}

Filters.propTypes = {
    changedRangeFilter: PropTypes.func.isRequired,
    filtersExperience: PropTypes.array.isRequired,
    experienceFilterValue: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        userSkills: state.skills.userSkills,
        filtersType: state.skills.filtersType,
        filtersExperience: state.skills.filtersExperience
    }
};

export default connect(
    mapStateToProps
)(Filters);