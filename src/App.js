import React, { Component } from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            experienceFilterValue: '0',
            newUserName: '',
            newUserSurname: ''
        }
    }

    onChangeHandlerForNewUserName = event => {
        this.setState({ newUserName: event.target.value })
    }

    onChangeHandlerForNewUserSurname = event => {
        this.setState({ newUserSurname: event.target.value })
    }

    onChangeHandlerForComments = event => {
        this.setState({ commentValue: event.target.value })
    }

    onChangeHandlerForRangeFilter = event => {
        this.setState({ experienceFilterValue: event.target.value })
    }

    render() {
        const { experienceFilterValue, newUserName, newUserSurname } = this.state;

        return (
            <div className='App'>
                <Header />
                <div className="underHeader">
                    <Sidebar
                        onChangeHandlerForRangeFilter={this.onChangeHandlerForRangeFilter}
                        experienceFilterValue={experienceFilterValue}
                    />
                    <Content
                        onChangeHandlerForNewUserName={this.onChangeHandlerForNewUserName}
                        onChangeHandlerForNewUserSurname={this.onChangeHandlerForNewUserSurname}
                        inputValueForName={newUserName}
                        inputValueForSurname={newUserSurname}
                    />
                </div>
                <Footer />
            </div >
        );
    }
}

export default App;