import React, { Component } from 'react';
import './Taskbar.css';

import startIcon from '../../images/start_icon.png';

const Start = (props) => {

}

class Taskbar extends Component {
    render() {
        return (
            <div className='Taskbar'>
                <button className='Taskbar--startButton Taskbar--button'>
                    <span className='Taskbar--button--innerContainer'>
                        <img src={startIcon} className='Taskbar--startIcon' alt='' />
                        <span className='Taskbar--startLabel'>Start</span>
                    </span>
                </button>
            </div>
        );
    }
}

export default Taskbar;
