import React, { Component } from 'react';

import './App.css';

import Taskbar from './Taskbar/Taskbar.jsx';

class App extends Component {
    render() {
        return (
            <div className="windows">
                <Taskbar />
            </div>
        );
    }
}

export default App;
