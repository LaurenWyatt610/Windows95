import React, { Component } from 'react';
import './Desktop.css';

const DesktopIcon = ({icon}) => {
    let classes = 'DesktopIcon';
    classes += icon.selected ? ' DesktopIcon--selected' : '';
    return (
        <button className={ classes }>
            <img src={ icon.icon } className='DesktopIcon_img' alt='' />
            <div className='DesktopIcon_name'>{ icon.label }</div>
        </button>
    );
};

const renderDesktopIcons = (icons) => {
    return icons.map(icon => {
        return (
            <DesktopIcon key={icon.id} icon={icon} />
        );
    });
}

export const Desktop = (props) => {
    const { icons } = props;
    return (
        <div className='Desktop'>
            { renderDesktopIcons(icons) }
        </div>
    );
}
