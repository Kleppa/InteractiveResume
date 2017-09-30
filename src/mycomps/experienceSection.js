import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';

export default class ExperienceSection extends Component{
    constructor(props){
        super(props)
        this.state={

            skills:[
                {skill:'Java',stars:'5',id:1},
                {skill:'MySQL',stars:'4',id:2},
                {skill:'HTML',stars:'5',id:3},
                {skill:'CSS',stars:'5',id:4 }
            ]
        }
    }
    render(){
        return(
          <Container className="expSec">
             <p className="aboutMeHeader" style={{left:'38%'}}>Skill set</p>
             <p className="subtextHeader" style={{left:'28%'}}>“Life without knowledge is death in disguise.”
                 - Talib Kweli</p>
              <Container id="skillSetContainer">
                <ul>
                    {/*{this.state.skills.map(skill)=>{*/}
                        {/*return (<Skill/>)*/}
                    {/*})*/}
                    {/*}*/}
                </ul>
              </Container>
          </Container>
        );
    }
}

let Skill =(props)=>{
    return <li><p>props.skill</p></li>
}