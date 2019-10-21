import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <p>Project for CV {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;