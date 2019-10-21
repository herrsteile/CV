import React from 'react';
import PropTypes from 'prop-types';

import './WhoseRecord.scss';

const WhoseRecord = ({name, surname, time}) => {
    return (
        <div className='WhoseRecord'>
            <img src="https://i.pinimg.com/564x/86/34/ab/8634ab84d12e0e37785bb19f31e205e6.jpg" alt="ProfileImg  " />
            <div className="whoseRecordDatas">
                <div className="name">
                    {name} {surname}
                </div>
                <div className="time">
                    {time}
                </div>
            </div>
        </div>
    );
}

WhoseRecord.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
};

export default WhoseRecord;