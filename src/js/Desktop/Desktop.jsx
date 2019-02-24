import React, { Component } from 'react';
import './Desktop.css';

const DesktopIcon = ({icon, selectProgram}) => {
    let classes = 'DesktopIcon';
    classes += icon.desktopIconSelected ? ' DesktopIcon--selected' : '';
    return (
        <button className={ classes } onDoubleClick={() => selectProgram(icon.id)}>
            <img src={ icon.icon } className='DesktopIcon_img' alt='' />
            <div className='DesktopIcon_name'>{ icon.label }</div>
        </button>
    );
};

const renderDesktopIcons = (icons, selectProgram) => {
    return icons.map(icon => {
        return (
            <DesktopIcon key={icon.id} icon={icon} selectProgram={selectProgram} />
        );
    });
}

export const Desktop = (props) => {
    const { icons, selectProgram } = props;
    return (
        <div className='Desktop'>
            { renderDesktopIcons(icons, selectProgram) }
        </div>
    );
}
