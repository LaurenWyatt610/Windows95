// Libraries
import React, { Component } from 'react';

// Comopnents
import { Desktop } from './Desktop/Desktop.jsx';
import { Program } from './Program/Program.jsx';
import { Taskbar } from './Taskbar/Taskbar.jsx';

// Assets
import './App.css';
import IMAGES from './images.js';

const mockApplicationData = [
    {
        id: 1,
        label: 'Untitled Application',
        icon: IMAGES.START,
        selected: false
    },
    {
        id: 2,
        label: 'Untitled Application 2',
        icon: IMAGES.START,
        selected: false
    }
];

const mockIconData = [
    {
        id: 1,
        label: 'Recycle Bin',
        icon: IMAGES.TRASHCAN_EMPTY,
        selected: false
    },
    {
        id: 2,
        label: 'My Computer',
        icon: IMAGES.MY_COMPUTER,
        selected: false
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applications: mockApplicationData
        }

        this.selectApplication = this.selectApplication.bind(this);
    }

    selectApplication(id) {
        let newApplicationsState = [...this.state.applications];

        newApplicationsState.forEach(application => {
            if (id === application.id) {
                application.selected = true;
            } else {
                application.selected = false;
            }
        });

        this.setState(() => ({
            applications: newApplicationsState
        }));
    }

    render() {
        return (
            <div className="windows">
                <Desktop icons={mockIconData} />
                <Taskbar applications={mockApplicationData} selectApplication={this.selectApplication} />
                <Program />
            </div>
        );
    }
}

export default App;
