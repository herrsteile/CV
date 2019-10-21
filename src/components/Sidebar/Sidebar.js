import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import ClearSidebar from './ClearSidebar/ClearSidebar';
import Filters from '../UI/Filters/Filters';
import './Sidebar.scss';

class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const { onChangeHandlerForRangeFilter, experienceFilterValue } = this.props;

        return (
            <div className='Sidebar' >
                <div className="SidebarFunctions">
                    <Route
                        path="/profile"
                        render={() => <ClearSidebar />}
                    />
                    <Route
                        path="/appeal"
                        render={() => <ClearSidebar />}
                    />
                    <Route path="/skills"
                        render={() => <Filters
                            changedRangeFilter={onChangeHandlerForRangeFilter}
                            experienceFilterValue={experienceFilterValue}
                        />}
                    />
                    <Route
                        path="/workwithapi"
                        render={() => <ClearSidebar />}
                    />
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {
    onChangeHandlerForRangeFilter: PropTypes.func.isRequired
};

export default Sidebar;