import React, { Component } from 'react';
import './Program.css';

import IMAGES from '../images.js';

const ProgramHeader = () => {
    return (
        <div className='ProgramHeader'>
            <img src={IMAGES.MY_COMPUTER} className='ProgramHeader_img' />
            <span className='ProgramHeader_label'>My Computer</span>
            <div className='ProgramHeader_buttons'>
                <button className='ProgramHeader_button--minimize ProgramHeader_button'>
                    <img src={ IMAGES.MINIMIZE } alt='Minimize' />
                </button>
                <button className='ProgramHeader_button--maximize ProgramHeader_button'>
                    <img src={ IMAGES.MAXIMIZE } alt='Maximize' />
                </button>
                <button className='ProgramHeader_button--close ProgramHeader_button'>
                    <img src={ IMAGES.CLOSE } alt='Close' />
                </button>
            </div>
        </div>
    );
};

const ProgramCommands = () => {
    return (
        <div className='ProgramCommands'>
            <div className='ProgramCommand'>
                <ul className='ProgramCommand_list'>
                    <li className='ProgramCommand_list-item'>
                        <span className='ProgramCommand_letter'>F</span>ile
                    </li>
                    <li className='ProgramCommand_list-item'>
                        <span className='ProgramCommand_letter'>E</span>dit
                    </li>
                    <li className='ProgramCommand_list-item'>
                        <span className='ProgramCommand_letter'>H</span>elp
                    </li>
                </ul>
            </div>
        </div>
    );
};

const ProgramContent = () => {
    return (
        <div className='ProgramContent'></div>
    );
};

export const Program = (props) => {
    return (
        <div className='Program'>
            <ProgramHeader />
            <ProgramCommands />
            <ProgramContent />
        </div>
    );
};
