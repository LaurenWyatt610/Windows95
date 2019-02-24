import React, { Component } from 'react';
import './Taskbar.css';

import startIcon from '../../images/start_icon.png';

const StartButton = () => {
    return (
        <button className='Taskbar_startButton Taskbar_button'>
            <span className='Taskbar_button_innerContainer'>
                <img src={startIcon} className='Taskbar_button_icon' alt='' />
                <span className='Taskbar_button_label'>Start</span>
            </span>
        </button>
    );
}

const ApplicationButton = ({application, selectApplication}) => {
    let classes = 'Taskbar_appButton Taskbar_button';
    classes += application.taskbarButtonSelected ? ' Taskbar_button--selected' : '';
    return (
        <button
            className={classes}
            onClick={() => selectApplication(application.id)}
        >
            <span className='Taskbar_button_innerContainer'>
                <img src={ application.icon } className='Taskbar_button_icon' alt='' />
                <span className='Taskbar_button_label'>{ application.label }</span>
            </span>
        </button>
    );
}

const renderApplicationButtons = (applications, selectApplication) => {
    return applications.map(application => {
        return (
            <ApplicationButton key={application.id} application={application} selectApplication={selectApplication}/>
        );
    });
}

export const Taskbar = (props) => {
    const { applications, selectApplication } = props;

    return (
        <div className='Taskbar'>
            <StartButton />
            <div className='Taskbar_applications'>
                { renderApplicationButtons(applications, selectApplication) }
            </div>
        </div>
    );
}
