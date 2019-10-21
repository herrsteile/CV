import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUserData } from '../../../store/userData/actions';
import { addPost } from '../../../store/posts/actions';
import FullName from './FullName/FullName'
import UserInformation from './UserInformation/UserInformation';
import Post from './Posts/Post/Post';
import Posts from './Posts/Posts';
import './Profile.scss';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
        }
    }

    onChangeHandlerForPosts = event => {
        this.setState({ inputValue: event.target.value })
    }

    clearInput = () => {
        this.setState({ inputValue: '' })
    }

    componentDidMount() {
        this.props.fetchUserData();
    }

    render() {
        const { inputValue } = this.state;
        const { userData, addPost, name, surname } = this.props;

        let profilePosts = this.props.profilePosts.map((post, i) => {
            return (
                <Post key={i} name={name} surname={surname} time={post.time} postContent={post.text} />
            )
        })

        let fullName = userData.map((data, i) => (
            <FullName
                key={i}
                firstName={data.personalInfo.first_name}
                lastName={data.personalInfo.last_name}
            />))

        let userInformation = userData.map((data, i) => (
            <UserInformation
                key={i}
                birthday={data.personalInfo.birthday}
                city={data.personalInfo.city}
                education={data.personalInfo.education}
                maritalStatus={data.personalInfo.marital_status}
                phoneNumber={data.contacts.phoneNumber}
                github={data.contacts.github}
                email={data.contacts.email}
                name={name}
                surname={surname}
            />))

        return (
            <div className='Profile'>
                {fullName}
                {userInformation}
                <Posts
                    blockName="Posts"
                    placeholder='Enter your post...'
                    changed={this.onChangeHandlerForPosts}
                    inputValue={inputValue}
                    newPost={this.props.profilePosts ? profilePosts.reverse() : null}
                    click={() => {
                        if (!inputValue) return null;
                        addPost(inputValue);
                        this.clearInput()
                    }}
                    name={name}
                    surname={surname}
                />
            </div>
        );
    }
}

Profile.propTypes = {
    userData: PropTypes.array.isRequired,
    addPost: PropTypes.func,
    fetchUserData: PropTypes.func
};

const mapStateToProps = state => {
    return {
        userData: state.userData.userData,
        profilePosts: state.posts.profilePosts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserData: status => dispatch(fetchUserData(status)),
        addPost: status => dispatch(addPost(status)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);