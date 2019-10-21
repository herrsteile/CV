import React from 'react';
import PropTypes from 'prop-types';

import WhoseRecord from './WhoseRecord/WhoseRecord';
import PostContent from './PostContent/PostContent';
import './Post.scss';

const Post = ({ name, surname, time, postContent }) => {
    return (
        <div className='Post'>
            <WhoseRecord name={name} surname={surname} time={time} />
            <PostContent postContent={postContent} />
        </div>
    );
}

Post.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    postContent: PropTypes.string.isRequired
};

export default Post;