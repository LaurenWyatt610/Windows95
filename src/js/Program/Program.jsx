import React, { Component } from 'react';
import './Program.css';

import IMAGES from '../images.js';

const ProgramHeader = ({program, closeProgram}) => {
    return (
        <div className='ProgramHeader'>
            <img src={program.icon} className='ProgramHeader_img' />
            <span className='ProgramHeader_label'>{program.label}</span>
            <div className='ProgramHeader_buttons'>
                <button className='ProgramHeader_button--minimize ProgramHeader_button'>
                    <img src={ IMAGES.MINIMIZE } alt='Minimize' />
                </button>
                <button className='ProgramHeader_button--maximize ProgramHeader_button'>
                    <img src={ IMAGES.MAXIMIZE } alt='Maximize' />
                </button>
                <button className='ProgramHeader_button--close ProgramHeader_button' onClick={() => closeProgram(program.id)}>
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
    const { program, closeProgram } = props;
    const offsetStyle = {
        bottom: `${70 - program.offset}px`,
        left: `${program.offset}px`,
        top: `${30 + program.offset}px`,
        zIndex: program.taskbarButtonSelected ? 1 : 0
    };

    return (
        <div className='Program' style={offsetStyle} >
            <ProgramHeader program={program} closeProgram={closeProgram}/>
            <ProgramCommands />
            <ProgramContent />
        </div>
    );
};
