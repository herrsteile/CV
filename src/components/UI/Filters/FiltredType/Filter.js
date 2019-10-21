import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Filter.scss';

class Filter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classNameFiltersHeader: 'FiltersHeader',
            height: '100%'
        }
    }

    dropdown = () => {
        switch (this.state.classNameFiltersHeader) {
            case 'FiltersHeader':
                this.setState({
                    classNameFiltersHeader: 'FiltersHeader Hidden',
                    height: '0px'
                })
                break

            default:
                this.setState({
                    classNameFiltersHeader: 'FiltersHeader',
                    height: '100%'
                })
                break
        }
    }

    render() {
        const { type, filtersData } = this.props;
        const { classNameFiltersHeader, height } = this.state;

        return (
            <div className="Filter" >
                <div className={classNameFiltersHeader} onClick={this.dropdown}>
                    <span>{type}</span>
                    <i className='fas fa-chevron-down'></i>
                </div>
                <div
                    className="FiltersContent"
                    style={{
                        height: height,
                    }}
                >
                    {filtersData}
                </div>
            </div>
        );
    };
}

Filter.propTypes = {
    type: PropTypes.string.isRequired,
    filtersData: PropTypes.object.isRequired
};

export default Filter;