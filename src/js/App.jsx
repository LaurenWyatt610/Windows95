// Libraries
import React, { Component } from 'react';

// Comopnents
import { Desktop } from './Desktop/Desktop.jsx';
import { Program } from './Program/Program.jsx';
import { Taskbar } from './Taskbar/Taskbar.jsx';

// Assets
import './App.css';
import { PROGRAM_DATA } from './program_data.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openPrograms: []
        }

        this.isProgramOpen = this.isProgramOpen.bind(this);
        this.selectApplication = this.selectApplication.bind(this);
        this.selectProgram = this.selectProgram.bind(this);
        this.closeProgram = this.closeProgram.bind(this);

        this.renderOpenPrograms = this.renderOpenPrograms.bind(this);
    }

    isProgramOpen(id) {
        const { openPrograms } = this.state;

        return !!openPrograms.find((program) => {
            return program.id === id;
        })
    }

    selectApplication(id) {
        let newOpenPrograms = [...this.state.openPrograms];

        newOpenPrograms.forEach(program => {
            if (id === program.id) {
                program.taskbarButtonSelected = true;
            } else {
                program.taskbarButtonSelected = false;
            }
        });

        this.setState(() => ({
            openPrograms: newOpenPrograms
        }));
    }

    selectProgram(id) {
        const openProgram = PROGRAM_DATA.find(program => {
            return program.id === id;
        });
        if (!this.isProgramOpen(id)) {
            this.setState((prevState) => {
                const newOpenPrograms = [...prevState.openPrograms, openProgram];
                return {
                    openPrograms: newOpenPrograms
                }
            }, () => this.selectApplication(id));
        }
    }

    closeProgram(id) {
        this.setState((prevState) => {
            const newOpenPrograms = prevState.openPrograms.reduce((accumulator, program) => {
                if(program.id !== id) {
                    accumulator.push(program);
                }
                return accumulator;
            }, []);

            return {
                openPrograms: newOpenPrograms
            }
        });
    }

    renderOpenPrograms() {
        const { openPrograms } = this.state;

        return openPrograms.map(openProgram => {
            return (
                <Program key={openProgram.id} program={openProgram} closeProgram={this.closeProgram}/>
            );
        });
    }

    render() {
        const { openPrograms } = this.state;
        return (
            <div className="windows">
                <Desktop icons={PROGRAM_DATA} selectProgram={this.selectProgram}/>
                <Taskbar applications={openPrograms} selectApplication={this.selectApplication} />
                { this.renderOpenPrograms() }
            </div>
        );
    }
}

export default App;
