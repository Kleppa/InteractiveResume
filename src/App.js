import React, {Component} from 'react';
import { GridList, GridListTile } from 'material-ui/GridList';
import './App.css';
import {Container} from 'semantic-ui-react';

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

                <Container className="App">
                    <Container className="seeThruHeader "/>
                    <Container style={{top:"32vh",position:'absolute',width:'10em',height:'10em'}}/>
                    <Container style={{top:"32vh",position:'relative'}}textAlign='right'>

                    <h1 id="pageIntro">Jarand Waage Kleppa</h1>
                    <h2 id="subHeader">Interactive Resume</h2>
                    </Container>
                    <Container id="startOfList" onClick={()=>scrollToComponent(this.aboutMe)}><p id="turnUpsideDown">	&#8744;</p></Container>

                    <MyContentList valueOfPos={posVal}/>

                    <AboutMe ref={(Container) => { this.aboutMe = Container; }} />
                    <ExperienceSection/>



                </Container>

        );
    }
}
export default App;