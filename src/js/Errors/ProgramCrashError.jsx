import React, { Component } from 'react';
import './Errors.css';
import IMAGES from '../images.js';

export const ProgramCrashError = ({closeError}) => {
    return (
        <div className='Error'>
            <div className='ErrorHeader'>
                <img src={IMAGES.WARNING} className='ErrorHeader_img' />
                <span className='ErrorHeader_label'>An Error Has Occurred</span>
            </div>
            <div className='ErrorContent'>
                <img src={IMAGES.WARNING} className='ErrorContent_img' />
                <p className='ErrorContent_p'>
                    {
                        'If the problem persists, please contact the program vendor...' +
                        '\n\nlawl jay kay. I limited the number of programs that can be open at once to keep' +
                        'this project running smooth.'
                    }
                </p>
            </div>
            <button className='Error_button' onClick={closeError}>Dang, ok</button>
        </div>
    );
};
