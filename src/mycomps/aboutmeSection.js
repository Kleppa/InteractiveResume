import React, {Component} from 'react';

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


            <div className="aboutMe">


                <p className="aboutMeHeader">Profile</p>
                <p className="subtextHeader"> I'm an aspiring developer</p>
                <div id="colorBox">
                <p className="title"> About me</p>
                <p id="aboutMeText"> I am a student taking a bachelor in programming.<br/> I love structure, order and quality.<br/> I love spending time on fixing little details and optimizing web apps. <br/>Also I like working in a team, you'll learn faster and much more. <br/>As the saying goes: 'two heads are better than one'.</p>
                </div>
                <div id="details">
                    <p id="detailsStart">Details</p><p id="name"><b>Name:</b></p><p style={{position:'absolute',top:'4em',color:'black',fontSize:'1em'}}>Jarand Waage Kleppa</p>
                    <p style={{position:'absolute',top:'4em',color:'black',fontSize:'1.25em'}}><b>Age:</b></p><p style={{position:'absolute',top:'7em',color:'black',fontSize:'1em'}}>{new Date().getFullYear()-1994 + ' years'}</p>
                    <p style={{position:'absolute',top:'6.25em',color:'black',fontSize:'1.25em'}}><b>Location:</b></p><p style={{position:'absolute',top:'9.5em',color:'black',fontSize:'1em'}}>Oslo</p>

                    <div style={{position:'absolute',top:'12.5em'}}>
                    <RaisedButtons />
                    </div>
                </div>
                <img className="imgOfCreator" alt={this.state.altText} src={this.state.imgUrl}/>



            </div>

        );
    }
}