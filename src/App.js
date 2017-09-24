import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import scrollToComponent from 'react-scroll-to-component';
import AboutMe from './mycomps/aboutmeSection.js'
import ExperienceSection from './mycomps/experienceSection';


class App extends Component {

    render() {


        return (

            <MuiThemeProvider>
                <div className="App">
                    <div className="seeThruHeader"/>
                    <h1 id="pageIntro">Jarand Waage Kleppa</h1>
                    <h2 id="subHeader">Interactive Resume</h2>
                    <button id="startOfList" href="" onClick={()=>scrollToComponent(this.aboutMe)}><p id="turnUpsideDown">	&#8744;</p></button>
                    <AboutMe />
                    <ExperienceSection/>


                </div>
            </MuiThemeProvider>
        );
    }
}
export default App;