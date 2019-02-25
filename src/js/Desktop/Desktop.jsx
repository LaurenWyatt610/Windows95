import React, { Component } from 'react';
import './Desktop.css';

const DesktopIcon = ({icon, openProgram, selectProgram}) => {
    let classes = 'DesktopIcon';
    classes += icon.desktopIconSelected ? ' DesktopIcon--selected' : '';
    return (
        <button className={ classes } onDoubleClick={() => openProgram(icon.id)} onClick={() => selectProgram(icon.id)}>
            <img src={ icon.icon } className='DesktopIcon_img' alt='' />
            <div className='DesktopIcon_name'>{ icon.label }</div>
        </button>
    );
};

const renderDesktopIcons = (icons, openProgram, selectProgram) => {
    return icons.map(icon => {
        return (
            <DesktopIcon key={icon.id} icon={icon} openProgram={openProgram} selectProgram={selectProgram}/>
        );
    });
}

export const Desktop = (props) => {
    const { icons, openProgram, selectProgram } = props;
    return (
        <div className='Desktop'>
            { renderDesktopIcons(icons, openProgram, selectProgram) }
        </div>
    );
}
