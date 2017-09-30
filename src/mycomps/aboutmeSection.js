import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import RaisedButtons from './button.js';


export default class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: 'https://tinyurl.com/y8eob54d',
            altText: 'img of Jarand',
        }
    }


    render() {


        return (


            <Container className="aboutMe">

                <Container className="abHeadSubCont">
                    <p className="aboutMeHeader">Profile</p>

                    <p className="subtextHeader"> I'm an aspiring developer</p>
                </Container>
                <Container id="colorBox">
                    <p className="title"> About me</p>
                    <p id="aboutMeText"> I am a student taking a bachelor in programming.<br/> I love structure, order
                        and quality.<br/> I love spending time on fixing little details and optimizing web apps. <br/>Also
                        I like working in a team, you'll learn faster and much more. <br/>As the saying goes: 'two heads
                        are better than one'.</p>
                </Container>
                <Container id="details">
                    <p id="detailsStart">Details</p><p id="name"><b>Name:</b></p><p
                    style={{position: 'absolute', top: '2.7em', color: 'black', fontSize: '4vh'}}>Jarand Waage
                    Kleppa</p>
                    <p style={{position: 'absolute', top: '3.8em', color: 'black', fontSize: '4vh'}}><b>Age:</b></p>
                    <p style={{
                        position: 'absolute',
                        top: '5.1em',
                        color: 'black',
                        fontSize: '4vh'
                    }}>{new Date().getFullYear() - 1994 + ' years'}</p>
                    <p style={{position: 'absolute', top: '5.95em', color: 'black', fontSize: '4vh'}}>
                        <b>Location:</b></p><p
                    style={{position: 'absolute', top: '7em', color: 'black', fontSize: '4vh'}}>Oslo</p>


                    <RaisedButtons />

                </Container>

                <img className="imgOfCreator" alt={this.state.altText} src={this.state.imgUrl}/>


            </Container>

        );
    }
}