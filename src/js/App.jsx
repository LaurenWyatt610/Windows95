// Libraries
import React, { Component } from 'react';

// Comopnents
import Taskbar from './Taskbar/Taskbar.jsx';

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
]

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
                <Taskbar applications={mockApplicationData} selectApplication={this.selectApplication}/>
            </div>
        );
    }
}

export default App;
