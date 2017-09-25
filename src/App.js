import React, {Component} from 'react';
import { GridList, GridListTile } from 'material-ui/GridList';
import './App.css';

import scrollToComponent from 'react-scroll-to-component';
import AboutMe from './mycomps/aboutmeSection.js'
import ExperienceSection from './mycomps/experienceSection';
import MyContentList from './mycomps/mycontentlist.js';


class App extends Component {

    render() {
        let posVal='absolute'
        function checkListPos() {
            if ( window.pageYOffset > 100 ) {
                posVal='fixed'
            } else {
                posVal='absolute'
            }
        }

        return (
            checkListPos(),

                <div className="App">
                    <div className="seeThruHeader"/>
                    <h1 id="pageIntro">Jarand Waage Kleppa</h1>
                    <h2 id="subHeader">Interactive Resume</h2>
                    <button id="startOfList" onClick={()=>scrollToComponent(this.aboutMe)}><p id="turnUpsideDown">	&#8744;</p></button>
                    <MyContentList valueOfPos={posVal}/>
                    <AboutMe ref={(div) => { this.aboutMe = div; }} />
                    <ExperienceSection/>


                </div>

        );
    }
}
export default App;