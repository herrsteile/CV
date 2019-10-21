import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../../../UI/Spinner/Spinner';
import './Skill.scss';

const Skill = ({ id, skillName, skillImg, type, experience }) => {
    return (
        <div className='Skill' data-set={id} >
            <h3>{skillName.split('_').join(' ')}</h3>

            <div className="SkillContent">
                <div className="ImageWrapper">
                    {skillImg ? <img src={skillImg} alt='' /> : <Spinner />}
                </div>

                <h4>Type: {type}</h4>
                <h4>{experience ? "Experience: " + experience : null}</h4>
            </div>
        </div>
    );
}

Skill.propTypes = {
    id: PropTypes.string,
    skillName: PropTypes.string.isRequired,
    skillImg: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    experience: PropTypes.string
};

export default Skill;