import React, {Component} from 'react';
import MyContentList from './mycontentlist.js';
import GitHubButton from 'react-github-button';



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
                <p className="aboutMeTitle"> About me</p>
                <p id="aboutMeText">Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien. Lorem Ipsum har vært bransjens standard for dummytekst helt siden 1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å lage et prøveeksemplar av en bok. Lorem Ipsum har tålt tidens tann usedvanlig godt, og har i tillegg til å bestå gjennom fem århundrer også tålt spranget over til elektronisk typografi uten vesentlige endringer. Lorem Ipsum ble gjort allment kjent i 1960-årene ved lanseringen av Letraset-ark med avsnitt fra Lorem Ipsum, og senere med sideombrekkingsprogrammet Aldus PageMaker som tok i bruk nettopp Lorem Ipsum for dummytekst.</p>
                </div>
                <div id="details">
                    <p id="detailsStart">Details</p><p id="name"><b>Name:</b></p><p style={{position:'absolute',top:'4em',color:'black',fontSize:'1em'}}>Jarand Waage Kleppa</p>
                    <p style={{position:'absolute',top:'4em',color:'black',fontSize:'1.25em'}}><b>Age:</b></p><p style={{position:'absolute',top:'7em',color:'black',fontSize:'1em'}}>{new Date().getFullYear()-1994 + ' years'}</p>
                    <p style={{position:'absolute',top:'6.25em',color:'black',fontSize:'1.25em'}}><b>Location:</b></p><p style={{position:'absolute',top:'9.5em',color:'black',fontSize:'1em'}}>Oslo</p>
                    <GitHubButton style={{position:'absolute',top:'12em',left:'0'}} type="stargazers" size="large" namespace="Kleppa" repo=" "/>
                </div>
                <img className="imgOfCreator" alt={this.state.altText} src={this.state.imgUrl}/>

                <MyContentList/>

            </div>

        );
    }
}