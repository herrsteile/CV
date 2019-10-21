import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Post from '../../Posts/Post/Post';
import { addComment } from '../../../../../store/posts/actions';
import Posts from '../../../Profile/Posts/Posts';
import Backdrop from '../../../../UI/Backdrop/Backdrop';
import './ModalAvatar.scss';

class ModalAvatar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
        }
    }

    onChangeHandlerForComments = event => {
        this.setState({ inputValue: event.target.value })
    }

    clearInput = () => {
        this.setState({ inputValue: '' })
    }

    render() {
        const { inputValue } = this.state;
        const { addComment, name, surname } = this.props;

        let avatarComments = this.props.avatarComments.map((comment, i) => {
            return (
                <Post name={name} surname={surname} time={comment.time} postContent={comment.text} key={i} />
            )
        })

        return (
            <div className="ModalAvatar" >
                <NavLink to="/profile"><Backdrop /></NavLink>
                <div className="Avatar">
                    <div className="ProfilePhotoModal">
                        <img src="https://i.pinimg.com/originals/ff/87/88/ff8788b80d39079f46378e3fb541405b.jpg" alt="profilePhotoModal" id="UserProfilePhotoModal" />
                    </div>
                    <Posts
                        blockName="Comments"
                        placeholder='Enter your comment...'
                        changed={this.onChangeHandlerForComments}
                        inputValue={inputValue}
                        click={() => {
                            if (!inputValue) return null;
                            addComment(inputValue);
                            this.clearInput()
                        }}
                        newPost={this.props.avatarComments ? avatarComments.reverse() : null}
                    />
                </div>
            </div>
        );
    };
}

ModalAvatar.propTypes = {
    avatarComments: PropTypes.array.isRequired,
    addComment: PropTypes.func
};

const mapStateToProps = state => {
    return {
        avatarComments: state.posts.avatarComments
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addComment: status => dispatch(addComment(status))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalAvatar);