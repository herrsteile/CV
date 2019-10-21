import React from 'react';
import PropTypes from 'prop-types';

import './PostContent.scss';

const PostContent = ({ postContent }) => {
    return (
        <div className='PostContent'>
            {postContent}
        </div>
    );
}

PostContent.propTypes = {
    postContent: PropTypes.string.isRequired
};

export default PostContent;