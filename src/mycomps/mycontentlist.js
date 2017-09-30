import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';

export default class ContentList extends Component {

    constructor (props) {
        super(props)

        this.state= {
            contents: [
                {title: 'Profile', id: 1},
                {title: 'Skill', id: 3},
                {title: 'Experience', id: 2}
            ]
        }

    }
    render() {

        let test = 'position: '+ this.props.valueOfPos;
        console.log(test)

        return (
            <Container id="list" style={{test}}>
                <ul>
                    {this.state.contents.map((content)=>{
                        return (<Li key={content.id} title={content.title}/>)
                    })
                    }
                </ul>
            </Container>
        )
    }
}

let Li = (props) => {
    return ( <li ><a><p style={{fontSize:'3vh'}}>{props.title}</p></a> </li>);
}