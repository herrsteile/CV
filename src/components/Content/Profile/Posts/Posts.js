import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post/Post';
import NewComment from '../../../UI/NewComment/NewComment';
import './Posts.scss';

const Posts = ({ inputValue, changed, blockName, placeholder, click, newPost, name, surname }) => {
    return (
        <div className="Posts">
            <h3>{blockName}:</h3>
            <NewComment
                placeholder={placeholder}
                inputValue={inputValue}
                changed={changed}
                click={click}
                name={name}
                surname={surname}
            />
            {newPost}
            <Post name="Dmitriy" surname="Miroshnychenko" time={new Date('2019-05-28T17:55:29.945Z').toLocaleTimeString().slice(0, 5)} postContent='Post Content' />
            <Post name="Alex" surname="Post" time={new Date('2019-05-28T17:55:29.945Z').toLocaleTimeString().slice(0, 5)} postContent='Post Content' />
        </div>
    );
}

Posts.propTypes = {
    inputValue: PropTypes.string.isRequired,
    changed: PropTypes.func.isRequired,
    blockName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
    newPost: PropTypes.array.isRequired
};

export default Posts;